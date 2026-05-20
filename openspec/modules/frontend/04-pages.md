# Pages Detail

Detalle de todas las páginas de NEXORA.

---

## Landing Page (/)

### Navbar
- Fixed, background: `#020617/80` + backdrop-blur-md on scroll
- Logo left: "N" icon + "NEXORA" text (Inter 700)
- Center: Explorar · Cursos · Instructores · Precios
- Right: Iniciar sesión (ghost) + Comenzar gratis (blue)
- Mobile: hamburger → fullscreen drawer

### Hero Section
Two-column (desktop). Left: text. Right: mockup/visual.

- **Badge**: "🎯 Plataforma de aprendizaje técnico" — blue border pill
- **Headline** (Inter 700, 64px): "Aprende tecnología" / "construyendo sistemas" / "**reales.**"
- **Subhead** (Inter 400, 20px, #94A3B8): "Cursos de backend, frontend, arquitectura y cloud..."
- **CTAs**: "Explorar cursos" (blue) + "Ver demo gratis →" (ghost)
- **Social proof**: Avatars + "Más de 12,000 estudiantes activos"

### Stats Bar
Dark surface (#0F172A). 4 stats: "12K+ Estudiantes" · "320+ Cursos" · "4.9 ★ Rating" · "95% Completitud"

### Featured Courses
- Grid of CourseCards with thumbnail, category badge, level badge, title, instructor, rating, price
- Hover: lift + thumbnail scale

### Categories Grid
8 categories: icon + name + course count. Click → `/categorias/[slug]`

### Pricing Section
- **Gratuito**: $0/mes — cursos gratuitos, progreso básico, comunidad
- **Pro Mensual**: $19/mes — todo gratis + todos cursos, certificados, recursos
- **Pro Anual**: $149/año — todo Pro + proyectos guiados, mentoría
- **Lifetime**: $399 one-time — acceso de por vida

### Footer
3-column: Logo + social | Nav links | Newsletter

---

## Course Detail (/cursos/[slug])

- SSR + ISR (revalidate 3600)
- Sticky top bar on mobile

### Hero
- Left: breadcrumb, title, description, rating, instructor, badges
- Right: thumbnail/preview, price, "Inscribirse ahora" CTA, "Ver gratuito"

### Sections
- **Lo que aprenderás**: 2-column checklist
- **Contenido**: accordion módulos/lecciones, "Vista previa" badges, lock icons
- **Instructor**: avatar, name, stats, bio
- **Reviews**: rating breakdown, paginated list, write form
- **Requirements**: bulleted list

---

## Video Player (/aprender/[courseId]/[lessonId])

### Layout
Full-height. Sidebar (320px) + main content.

### Sidebar
- Course title, progress bar
- Accordion curriculum: modules collapse/expand
- Each lesson: checkbox, title, type icon, duration

### Main Content

**Video Player**:
- Custom controls: play/pause, scrubber, time, volume, speed, quality, fullscreen
- Save progress: POST every 10s
- Auto-complete at 90% watched
- Resume from last position
- Keyboard shortcuts: Space, ←→, F, M, ↑↓

**Tabs below video**:
- **Descripción**: markdown render, nav buttons, complete button
- **Comentarios**: form, threaded replies, likes
- **Recursos**: download list
- **Notas**: editor, timestamp button for video, export PDF

**Lesson Types**:
- TEXT: markdown with syntax highlighting (Shiki/Prism)
- CODE: Monaco Editor lite
- QUIZ: QuizPlayer
- RESOURCE: preview + download

### Quiz Player
- Progress: "Pregunta 3 de 10"
- Timer (if time-limited)
- Clickable answer cards
- Results: score %, pass/fail, correct count, retry button

---

## Student Dashboard (/dashboard)

### Widgets
- **Welcome**: "Buenos días, {firstName}"
- **Continue Learning**: 3 courses row with thumbnail, title, progress, "Continuar"
- **Stats Row**: completados · lecciones · horas · racha
- **Learning Streak**: GitHub-style heatmap 52×7
- **Recent Certificates**: last 2 with download
- **Upcoming**: bookmarked lessons

---

## Instructor Panel (/instructor)

### Dashboard
- KPIs: students, revenue, courses, rating
- Revenue chart (12 months)
- Recent enrollments table

### Course Builder (/instructor/cursos/[id]/editar)

**Step 1**: Basic info — title, slug, description, category, level, price, thumbnail, video, requirements, objectives

**Step 2**: Curriculum — drag-drop modules/lessons, lesson editor (type-specific)

**Step 3**: Pricing — free/price/subscription

**Step 4**: Publish — checklist, preview, publish

### Analytics (/instructor/cursos/[id]/analiticas)
- Enrollments chart
- Revenue chart
- Completion rates
- Quiz scores
- Rating distribution

---

## Admin Panel (/admin)

### Dashboard
- KPIs: users, MRR, courses, sales
- Revenue chart
- Pending approvals

### User Management (/admin/usuarios)
- Searchable table
- Columns: avatar+name, email, role, status, courses, joined, actions
- Actions: change role, suspend, delete, impersonate

### Course Management (/admin/cursos)
- Tabs: All · Published · Pending · Rejected · Deleted
- Approve/Reject/Feature actions

### Analytics (/admin/analiticas)
- Revenue: MRR, ARR, growth
- Users: registrations, retention, active
- Courses: categories, completion