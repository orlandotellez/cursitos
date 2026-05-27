import { AlertCircle, RefreshCcw } from 'lucide-react';
import styles from './ErrorState.module.css';

interface ErrorStateProps {
  error: string;
  onRetry?: () => void;
}

export function ErrorState({ error, onRetry }: ErrorStateProps) {
  return (
    <div className={styles.container} role="alert">
      <AlertCircle size={40} className={styles.icon} />
      <p className={styles.message}>{error}</p>
      {onRetry && (
        <button className={styles.retryBtn} onClick={onRetry}>
          <RefreshCcw size={16} />
          Intentar de nuevo
        </button>
      )}
    </div>
  );
}
