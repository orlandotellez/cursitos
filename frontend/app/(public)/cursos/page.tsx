'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { CourseCard } from '@/src/features/courses/components/CourseCard';
import { allCourseCards, categories } from '@/src/features/courses/data';
import type { Level } from '@/src/shared/types';
import styles from './page.module.css';

const LEVELS: { value: Level | ''; label: string }[] = [
  { value: '', label: 'Todos' },
  { value: 'beginner', label: 'Principiante' },
  { value: 'intermediate', label: 'Intermedio' },
  { value: 'advanced', label: 'Avanzado' },
];

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

export default function CatalogPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<Level | ''>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSearch = useDebounce(search, 300);

  const filtered = useMemo(() => {
    return allCourseCards.filter((c) => {
      if (debouncedSearch && !c.title.toLowerCase().includes(debouncedSearch.toLowerCase())) return false;
      if (selectedCategory && c.category.name !== selectedCategory) return false;
      if (selectedLevel && c.level !== selectedLevel) return false;
      return true;
    });
  }, [debouncedSearch, selectedCategory, selectedLevel]);

  const clearFilters = useCallback(() => {
    setSearch('');
    setSelectedCategory('');
    setSelectedLevel('');
    inputRef.current?.focus();
  }, []);

  const hasFilters = search || selectedCategory || selectedLevel;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>Catálogo de cursos</h1>
          <p className={styles.subtitle}>
            {filtered.length} curso{filtered.length !== 1 ? 's' : ''} disponible{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Search + filters */}
        <div className={styles.toolbar}>
          <div className={styles.searchWrapper}>
            <Search size={18} className={styles.searchIcon} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar cursos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
            {search && (
              <button className={styles.clearBtn} onClick={() => setSearch('')}>
                <X size={16} />
              </button>
            )}
          </div>

          <div className={styles.filterGroup}>
            <SlidersHorizontal size={16} className={styles.filterIcon} />
            <div className={styles.chips}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`${styles.chip} ${selectedCategory === cat.name ? styles.chipActive : ''}`}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === cat.name ? '' : cat.name)
                  }
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.levelGroup}>
            {LEVELS.map((lvl) => (
              <button
                key={lvl.value}
                className={`${styles.levelBtn} ${selectedLevel === lvl.value ? styles.levelBtnActive : ''}`}
                onClick={() => setSelectedLevel(lvl.value as Level | '')}
              >
                {lvl.label}
              </button>
            ))}
          </div>

          {hasFilters && (
            <button className={styles.clearAll} onClick={clearFilters}>
              <X size={14} />
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Results */}
        <div className={styles.results}>
          {filtered.length > 0 ? (
            <div className={styles.grid}>
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <Search size={48} className={styles.emptyIcon} />
              <h3 className={styles.emptyTitle}>Sin resultados</h3>
              <p className={styles.emptyText}>
                No encontramos cursos con esos filtros. Probá con otros términos.
              </p>
              <button className={styles.emptyBtn} onClick={clearFilters}>
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
