'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

export default function RegistrarsePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof form, string>>
  >({});

  function setField<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate() {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = 'El nombre es obligatorio';
    if (!form.email.trim()) next.email = 'El correo es obligatorio';
    if (form.password.length < 8)
      next.password = 'Debe tener al menos 8 caracteres';
    if (form.password !== form.confirmPassword)
      next.confirmPassword = 'Las contraseñas no coinciden';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // Mock register: save token, default to student role
    localStorage.setItem('access_token', 'mock-token-cursinet-2026');
    localStorage.setItem('user_role', 'student');
    router.push('/dashboard');
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Crear cuenta</h1>
      <p className={styles.subtitle}>
        Completá tus datos para registrarte
      </p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            Nombre completo
          </label>
          <input
            id="name"
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            type="text"
            placeholder="Tu nombre"
            value={form.name}
            onChange={(e) => setField('name', e.target.value)}
            autoComplete="name"
          />
          {errors.name && (
            <span className={styles.errorText}>{errors.name}</span>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email"
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            type="email"
            placeholder="tu@correo.com"
            value={form.email}
            onChange={(e) => setField('email', e.target.value)}
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
            placeholder="Mínimo 8 caracteres"
            value={form.password}
            onChange={(e) => setField('password', e.target.value)}
            autoComplete="new-password"
          />
          {errors.password && (
            <span className={styles.errorText}>{errors.password}</span>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="confirmPassword">
            Confirmar contraseña
          </label>
          <input
            id="confirmPassword"
            className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ''}`}
            type="password"
            placeholder="Repetí tu contraseña"
            value={form.confirmPassword}
            onChange={(e) => setField('confirmPassword', e.target.value)}
            autoComplete="new-password"
          />
          {errors.confirmPassword && (
            <span className={styles.errorText}>
              {errors.confirmPassword}
            </span>
          )}
        </div>

        <button className={styles.submitBtn} type="submit">
          Crear cuenta
        </button>
      </form>

      {/* ── Demo Credentials ── */}
      <div className={styles.demoBox}>
        <span className={styles.demoLabel}>🧪 Ya tenés cuenta? Usá:</span>
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
        ¿Ya tenés cuenta?
        <Link href="/login" className={styles.footerLink}>
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
}
