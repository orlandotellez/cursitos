import type { PricingPlan } from '@/src/shared/types';

export const pricingPlans: PricingPlan[] = [
  { name: 'Gratuito', description: 'Empieza a aprender sin costo', price: 0, period: '/mes', features: ['Acceso a 50+ cursos gratuitos', 'Certificados de finalización', 'Comunidad de estudiantes', 'Foro de preguntas'], highlighted: false, cta: 'Comenzar gratis' },
  { name: 'Pro Mensual', description: 'Todo el acceso, un solo pago', price: 19, period: '/mes', features: ['Todos los cursos del catálogo', 'Certificados profesionales', 'Proyectos prácticos', 'Ejercicios con revisión de código', 'Acceso a workshops en vivo', 'Sin anuncios'], highlighted: true, cta: 'Probar Pro' },
  { name: 'Pro Anual', description: '2 meses gratis', price: 149, period: '/año', features: ['Todo lo de Pro Mensual', 'Ahorras $79 al año', 'Prioridad en soporte', 'Badge de early adopter'], highlighted: false, cta: 'Ahorra 35%' },
  { name: 'Lifetime', description: 'Paga una vez, aprende para siempre', price: 399, period: ' único', features: ['Acceso vitalicio a todos los cursos', 'Nuevos cursos sin costo adicional', 'Mentorías personalizadas', 'Certificados ilimitados', 'Badge de fundador', 'Acceso anticipado a features'], highlighted: false, cta: 'Acceso vitalicio' },
];
