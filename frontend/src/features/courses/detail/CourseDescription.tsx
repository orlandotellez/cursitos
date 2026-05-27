import styles from './CourseDescription.module.css';

interface CourseDescriptionProps {
  description: string;
}

export function CourseDescription({ description }: CourseDescriptionProps) {
  return (
    <div className={styles.descriptionText}>
      {description.split('\n\n').map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
