import Link from "next/link";
import styles from "./FeaturedCourses.module.css"
import { ArrowRight } from "lucide-react";
import { CourseCard } from "../../courses/components/CourseCard";
import { CourseCardData } from "@/src/shared/types";

interface FeaturedCoursesProps {
  featuredCourses: CourseCardData[]
}

export const FeaturedCourses = ({ featuredCourses }: FeaturedCoursesProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Cursos destacados</h2>
          <p className={styles.sectionSubtitle}>
            Los cursos más populares entre nuestra comunidad de ingenieros
          </p>
        </div>
        <div className={styles.coursesGrid}>
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className={styles.sectionFooter}>
          <Link href="/cursos" className={styles.viewAllBtn}>
            Ver todos los cursos
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

