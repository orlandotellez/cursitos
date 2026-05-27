import styles from './CatalogHeader.module.css';

interface CatalogHeaderProps {
  totalCount: number;
}

export function CatalogHeader({ totalCount }: CatalogHeaderProps) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Catálogo de cursos</h1>
      <p className={styles.subtitle}>
        {totalCount} curso{totalCount !== 1 ? 's' : ''} disponible
        {totalCount !== 1 ? 's' : ''}
      </p>
    </div>
  );
}
