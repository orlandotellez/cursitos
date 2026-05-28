'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

export default function IniciarSesionPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  function validate() {
    const next: typeof errors = {};
    if (!email.trim()) next.email = 'El correo es obligatorio';
    if (!password) next.password = 'La contraseña es obligatoria';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // Mock login: save token and role
    localStorage.setItem('access_token', 'mock-token-cursinet-2026');

    // Derive role from email for demo purposes
    let redirectTo = '/dashboard';
    if (email.includes('admin')) {
      localStorage.setItem('user_role', 'admin');
      redirectTo = '/admin/dashboard';
    } else if (email.includes('martin') || email.includes('laura') || email.includes('carlos') || email.includes('ana')) {
      localStorage.setItem('user_role', 'instructor');
      redirectTo = '/instructor/dashboard';
    } else {
      localStorage.setItem('user_role', 'student');
    }

    router.push(redirectTo);
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Iniciar sesión</h1>
      <p className={styles.subtitle}>
        Ingresá tus credenciales para continuar
      </p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            type="email"
            placeholder="tu@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          {errors.email && (
            <span className={styles.errorText}>{errors.email}</span>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          {errors.password && (
            <span className={styles.errorText}>{errors.password}</span>
          )}
        </div>

        <div className={styles.actions}>
          <Link href="/olvido-contrasena" className={styles.forgotLink}>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <button className={styles.submitBtn} type="submit">
          Iniciar sesión
        </button>
      </form>

      {/* ── Demo Credentials ── */}
      <div className={styles.demoBox}>
        <span className={styles.demoLabel}>🧪 Credenciales demo</span>
        <div className={styles.demoRow}>
          <span className={styles.demoRole}>Estudiante:</span>
          <code className={styles.demoCode}>sofia@email.com / 123456</code>
        </div>
        <div className={styles.demoRow}>
          <span className={styles.demoRole}>Instructor:</span>
          <code className={styles.demoCode}>martin@cursinet.com / 123456</code>
        </div>
        <div className={styles.demoRow}>
          <span className={styles.demoRole}>Admin:</span>
          <code className={styles.demoCode}>admin@cursinet.com / 123456</code>
        </div>
      </div>

      <p className={styles.footer}>
        ¿No tenés cuenta?
        <Link href="/register" className={styles.footerLink}>
          Registrarse
        </Link>
      </p>
    </div>
  );
}
