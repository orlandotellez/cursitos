'use client';

import { SlidersHorizontal } from 'lucide-react';
import styles from './CategoryFilter.module.css';

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selected: string;
  onChange: (name: string) => void;
}

export function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className={styles.filterGroup}>
      <SlidersHorizontal size={16} className={styles.filterIcon} />
      <div className={styles.chips}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.chip} ${selected === cat.name ? styles.chipActive : ''}`}
            onClick={() => onChange(selected === cat.name ? '' : cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
