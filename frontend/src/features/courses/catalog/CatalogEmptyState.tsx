'use client';

import { Search } from 'lucide-react';
import styles from './CatalogEmptyState.module.css';

interface CatalogEmptyStateProps {
  onClear: () => void;
}

export function CatalogEmptyState({ onClear }: CatalogEmptyStateProps) {
  return (
    <div className={styles.empty}>
      <Search size={48} className={styles.emptyIcon} />
      <h3 className={styles.emptyTitle}>Sin resultados</h3>
      <p className={styles.emptyText}>
        No encontramos cursos con esos filtros. Probá con otros términos.
      </p>
      <button className={styles.emptyBtn} onClick={onClear}>
        Limpiar filtros
      </button>
    </div>
  );
}
