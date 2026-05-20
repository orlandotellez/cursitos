# Database Schema

Esquema PostgreSQL.

## Conventions

- All PKs: UUID (Guid) — no auto-increment
- CreatedAt, UpdatedAt, DeletedAt on all entities
- All foreign keys with explicit names
- Indexes on all FKs and frequently queried columns

---

## Users

```sql
Users (
  Id UUID PK,
  FirstName VARCHAR(100) NOT NULL,
  LastName VARCHAR(100) NOT NULL,
  Username VARCHAR(50) UNIQUE NOT NULL,
  Email VARCHAR(255) UNIQUE NOT NULL,
  PasswordHash VARCHAR(255) NOT NULL,
  AvatarUrl TEXT,
  Bio TEXT,
  WebsiteUrl TEXT,
  GitHubUrl TEXT,
  LinkedInUrl TEXT,
  IsEmailVerified BOOLEAN DEFAULT FALSE,
  EmailVerificationToken VARCHAR(255),
  PasswordResetToken VARCHAR(255),
  StripeCustomerId VARCHAR(100),
  IsActive BOOLEAN DEFAULT TRUE,
  LastSeenAt TIMESTAMPTZ,
  CreatedAt TIMESTAMPTZ DEFAULT NOW(),
  UpdatedAt TIMESTAMPTZ
)
```

## Roles & Permissions

```sql
Roles (Id UUID PK, Name VARCHAR(50))
UserRoles (UserId FK, RoleId FK, AssignedAt)
Permissions (Id UUID PK, Name, Resource, Action)
RolePermissions (RoleId FK, PermissionId FK)
```

Roles: STUDENT, INSTRUCTOR, ADMIN, MODERATOR

## Refresh Tokens

```sql
RefreshTokens (
  Id UUID PK,
  UserId UUID FK,
  Token VARCHAR(500) UNIQUE NOT NULL,
  ExpiresAt TIMESTAMPTZ NOT NULL,
  RevokedAt TIMESTAMPTZ,
  CreatedByIp VARCHAR(45),
  CreatedAt TIMESTAMPTZ
)
```

## Categories & Tags

```sql
Categories (Id, Name, Slug, Description, IconName, Color, ParentId, SortOrder, IsActive)
Tags (Id, Name, Slug)
```

## Courses

```sql
Courses (
  Id UUID PK,
  InstructorId UUID FK,
  CategoryId UUID FK,
  Title VARCHAR(255) NOT NULL,
  Slug VARCHAR(255) UNIQUE NOT NULL,
  ShortDescription VARCHAR(500),
  Description TEXT,
  ThumbnailUrl TEXT,
  PreviewVideoUrl TEXT,
  Level VARCHAR(20),  -- BEGINNER|INTERMEDIATE|ADVANCED|EXPERT
  Language VARCHAR(10) DEFAULT 'es',
  DurationMinutes INT DEFAULT 0,
  StudentsCount INT DEFAULT 0,
  AverageRating DECIMAL(3,2) DEFAULT 0,
  ReviewsCount INT DEFAULT 0,
  Price DECIMAL(10,2) DEFAULT 0,
  OriginalPrice DECIMAL(10,2),
  IsFree BOOLEAN DEFAULT FALSE,
  IsPublished BOOLEAN DEFAULT FALSE,
  IsFeatured BOOLEAN DEFAULT FALSE,
  Requirements TEXT[],
  LearningObjectives TEXT[],
  SearchVector TSVECTOR,
  PublishedAt TIMESTAMPTZ,
  CreatedAt TIMESTAMPTZ DEFAULT NOW(),
  UpdatedAt TIMESTAMPTZ,
  DeletedAt TIMESTAMPTZ
)
CourseTags (CourseId FK, TagId FK)
```

## Modules & Lessons

```sql
Modules (Id, CourseId FK, Title, Description, SortOrder, IsPublished)
Lessons (
  Id UUID PK,
  ModuleId UUID FK,
  CourseId UUID FK,
  Title VARCHAR(255),
  Slug VARCHAR(255),
  Type VARCHAR(20),  -- VIDEO|TEXT|CODE|QUIZ|RESOURCE
  VideoUrl TEXT,
  VideoDurationSeconds INT,
  ContentMarkdown TEXT,
  SortOrder INT,
  IsPublished BOOLEAN,
  IsPreview BOOLEAN DEFAULT FALSE,
  AttachmentUrls TEXT[]
)
```

## Enrollments & Progress

```sql
Enrollments (Id, UserId, CourseId, PaymentId, EnrolledAt, CompletedAt, ProgressPercentage, LastAccessedAt)
LessonProgress (
  Id UUID PK,
  UserId UUID FK,
  LessonId UUID FK,
  IsCompleted BOOLEAN DEFAULT FALSE,
  WatchedSeconds INT DEFAULT 0,
  LastPositionSeconds INT DEFAULT 0,
  UpdatedAt TIMESTAMPTZ
)
```

## Quizzes

```sql
Quizzes (Id, LessonId, Title, PassingScore DEFAULT 70, MaxAttempts, TimeLimitMinutes)
QuizQuestions (Id, QuizId, Text, Type, Explanation, SortOrder)
QuizOptions (Id, QuestionId, Text, IsCorrect, SortOrder)
QuizAttempts (Id, QuizId, UserId, Score, IsPassed, TimeSpentSeconds, StartedAt, CompletedAt)
QuizAttemptAnswers (Id, AttemptId, QuestionId, SelectedOptionId, CodeAnswer, IsCorrect)
```

## Payments & Subscriptions

```sql
Payments (Id, UserId, CourseId, StripePaymentIntentId, Amount, Currency, Status, Type, PaidAt, RefundedAt)
Subscriptions (Id, UserId, StripeSubscriptionId, Plan, Status, CurrentPeriodStart, CurrentPeriodEnd, CancelAtPeriodEnd)
```

Status: PENDING, COMPLETED, FAILED, REFUNDED | Plan: MONTHLY, ANNUAL, LIFETIME

## Certificates

```sql
Certificates (Id, UserId, CourseId, EnrollmentId, CertificateNumber, PdfUrl, IssuedAt, VerificationUrl)
```

Number format: NXR-2025-ABC123

## Reviews, Comments, Notifications

```sql
Reviews (Id, UserId, CourseId, Rating, Title, Body, HelpfulCount, CreatedAt)
Comments (Id, LessonId, UserId, ParentId, Body, LikesCount, IsEdited, CreatedAt, DeletedAt)
Notifications (Id, UserId, Type, Title, Body, ImageUrl, ActionUrl, IsRead, CreatedAt)
```

## Notes, Bookmarks, Audit

```sql
LessonNotes (Id, UserId, LessonId, Content, VideoTimestampSeconds)
Bookmarks (UserId, CourseId, CreatedAt)
AuditLogs (Id, UserId, Action, EntityType, EntityId, OldValues JSONB, NewValues JSONB, IpAddress, CreatedAt)
```

---

## Full-Text Search

```sql
CREATE INDEX idx_courses_search ON Courses USING GIN(SearchVector);
```