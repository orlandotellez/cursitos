'use client';

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>N</span>
              <span className={styles.logoText}>CURSINET</span>
            </div>
            <p className={styles.description}>
              Plataforma de aprendizaje técnico para ingenieros. Construye
              sistemas reales, domina la tecnología.
            </p>
            <div className={styles.social}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Plataforma</h3>
            <ul className={styles.columnLinks}>
              <li>
                <Link href="/cursos">Explorar cursos</Link>
              </li>
              <li>
                <Link href="/categorias">Categorías</Link>
              </li>
              <li>
                <Link href="#pricing">Precios</Link>
              </li>
              <li>
                <Link href="/instructores">Instructores</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Compañía</h3>
            <ul className={styles.columnLinks}>
              <li>
                <Link href="/sobre-nosotros">Sobre nosotros</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/carreras">Carreras</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h3 className={styles.columnTitle}>Newsletter</h3>
            <p className={styles.newsletterText}>
              Recibe contenido técnico semanal directo a tu bandeja de entrada.
            </p>
            <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="tu@email.com"
                className={styles.newsletterInput}
                aria-label="Correo electrónico"
              />
              <button type="submit" className={styles.newsletterBtn}>
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} CURSINET. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
