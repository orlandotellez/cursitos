import Link from 'next/link';
import styles from './layout.module.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.authLayout}>
      <div className={styles.authContainer}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>N</span>
          <span className={styles.logoText}>CURSINET</span>
        </Link>
        {children}
      </div>
    </div>
  );
}
