import Link from "next/link";
import styles from "./Hero.module.css"
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            Plataforma de aprendizaje técnico
          </span>
          <h1 className={styles.heroTitle}>
            Aprende tecnología construyendo{' '}
            <span className={styles.heroHighlight}>sistemas reales.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Cursos de backend, frontend, arquitectura y cloud. Domina la
            tecnología construyendo proyectos que importan, no siguiendo
            tutoriales vacíos.
          </p>
          <div className={styles.heroCta}>
            <Link href="/cursos" className={styles.heroBtnPrimary}>
              Explorar cursos
              <ArrowRight size={18} />
            </Link>
            <Link href="#pricing" className={styles.heroBtnGhost}>
              Ver demo gratis &rarr;
            </Link>
          </div>
          <div className={styles.heroSocial}>
            <div className={styles.heroAvatars}>
              {['M', 'L', 'C', 'A', '+'].map((initial, i) => (
                <div
                  key={i}
                  className={styles.heroAvatar}
                  style={{ zIndex: 5 - i }}
                >
                  {initial}
                </div>
              ))}
            </div>
            <p className={styles.heroSocialText}>
              <strong>Más de 12,000</strong> estudiantes activos
            </p>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroMockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupDots}>
                <span />
                <span />
                <span />
              </div>
              <span className={styles.mockupTitle}>cursinet/courses</span>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.mockupLine} style={{ width: '80%' }} />
              <div className={styles.mockupLine} style={{ width: '60%' }} />
              <div className={styles.mockupLineAccent} style={{ width: '45%' }} />
              <div className={styles.mockupLine} style={{ width: '70%' }} />
              <div className={styles.mockupLine} style={{ width: '55%' }} />
              <div className={styles.mockupLineAccent} style={{ width: '35%' }} />
              <div className={styles.mockupLine} style={{ width: '65%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

