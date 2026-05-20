# Certificates

Sistema de certificados PDF.

## Generation

- **QuestPDF** (C# library) generates PDFs
- **Hangfire** background job triggers after course completion
- PDF stored in file storage (S3 or local volume)
- Public URL stored in Certificates table

## Design

Dark premium certificate with:
- NEXORA logo and branding (top)
- "CERTIFICADO DE FINALIZACIÓN" heading
- Student full name (large, serif-like font)
- "Ha completado satisfactoriamente el curso:" label
- Course title (bold)
- Date of completion
- Instructor name + signature line
- Certificate number: NXR-{YEAR}-{6-char-alphanumeric}
- QR code → nexora.dev/verificar/{certificateNumber}
- Decorative border / geometric pattern

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /certificates/{certificateNumber} | Public verification page |
| GET | /certificates/verify/{number} | Verify authenticity |
| POST | /certificates/generate/{enrollmentId} | Trigger generation |