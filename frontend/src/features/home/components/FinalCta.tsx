import { ArrowRight } from "lucide-react";
import styles from "./FinalCta.module.css"
import Link from "next/link";

export const FinalCta = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>
          Listo para construir <span className={styles.heroHighlight}>en serio</span>?
        </h2>
        <p className={styles.ctaText}>
          Únete a miles de ingenieros que ya están aprendiendo con proyectos
          reales.
        </p>
        <Link href="/registrarse" className={styles.ctaBtn}>
          Crear cuenta gratis
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

