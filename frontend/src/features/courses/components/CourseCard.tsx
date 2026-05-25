import Link from 'next/link';
import { Clock, Star, Users, BookOpen } from 'lucide-react';
import styles from './CourseCard.module.css';
import { CourseCardData } from '@/src/shared/types';

interface CourseCardProps {
  course: CourseCardData
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className={styles.card}>
      <Link href={`/cursos/${course.slug}`} className={styles.link}>
        {/* Thumbnail */}
        <div className={styles.thumbnail}>
          <div className={styles.thumbnailPlaceholder}>
            <span className={styles.thumbnailText}>
              {course.title.charAt(0)}
            </span>
          </div>
          {course.badge && (
            <span className={styles.badge}>{course.badge}</span>
          )}
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Meta */}
          <div className={styles.meta}>
            <span className={styles.category}>{course.category.name}</span>
            <span className={`${styles.level} ${styles[course.level]}`}>
              {course.level === 'beginner'
                ? 'Principiante'
                : course.level === 'intermediate'
                  ? 'Intermedio'
                  : 'Avanzado'}
            </span>
          </div>

          {/* Title */}
          <h3 className={styles.title}>{course.title}</h3>

          {/* Description */}
          <p className={styles.description}>{course.shortDescription}</p>

          {/* Instructor */}
          <div className={styles.instructor}>
            <div className={styles.instructorAvatar}>
              {course.instructor.name.charAt(0)}
            </div>
            <span className={styles.instructorName}>
              {course.instructor.name}
            </span>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <Clock size={14} />
              <span>{course.duration}h</span>
            </div>
            <div className={styles.stat}>
              <BookOpen size={14} />
              <span>{course.lessonsCount} lecciones</span>
            </div>
            <div className={styles.stat}>
              <Star size={14} />
              <span>{course.rating}</span>
            </div>
            <div className={styles.stat}>
              <Users size={14} />
              <span>{course.studentsCount.toLocaleString()}</span>
            </div>
          </div>

          {/* Price */}
          <div className={styles.footer}>
            <span className={styles.price}>
              {course.price === 0
                ? 'Gratis'
                : `$${course.price.toFixed(2)}`}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
