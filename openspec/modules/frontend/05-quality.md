# Quality Criteria

Criterios de calidad obligatorios.

## Code Quality
- Zero mocks in production — all data from PostgreSQL
- TypeScript: no `any`, no `@ts-ignore`, strict mode enforced
- All API endpoints documented via Swagger/OpenAPI

## UX States
- All forms have loading, error, and success states
- All lists have empty states with helpful messaging
- All images with loading skeletons

## Responsiveness
- Mobile-first, works on 320px+

## Accessibility
- ARIA labels
- Keyboard navigation
- Focus management

## Performance
- Lighthouse score >90 on public pages

## SEO
- Proper meta tags
- OG images
- Structured data (JSON-LD) on course pages

## Error Handling
- Error boundaries on all route segments

## Optimistic UI
- On: likes, bookmarks, progress updates