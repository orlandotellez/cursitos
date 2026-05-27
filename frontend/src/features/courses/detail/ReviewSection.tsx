import { Star } from 'lucide-react';
import { mockReviews } from '@/src/features/courses/data';
import styles from './ReviewSection.module.css';

export function ReviewSection() {
  return (
    <div className={styles.reviewsGrid}>
      {mockReviews.map((r) => (
        <div key={r.id} className={styles.reviewCard}>
          <div className={styles.reviewHeader}>
            <div className={styles.reviewAvatar}>{r.userName.charAt(0)}</div>
            <div className={styles.reviewMeta}>
              <span className={styles.reviewName}>{r.userName}</span>
              <div className={styles.reviewStars}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < r.rating ? styles.starFilled : styles.starEmpty}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className={styles.reviewComment}>{r.comment}</p>
          <span className={styles.reviewDate}>
            {new Date(r.createdAt).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      ))}
    </div>
  );
}
