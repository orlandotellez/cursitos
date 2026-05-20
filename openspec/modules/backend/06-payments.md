# Stripe Payments

Sistema de pagos con Stripe.

## One-time Purchase

1. Frontend: POST `/payments/checkout/course {courseId}`
2. Backend: create Stripe Checkout Session (mode: payment)
3. Redirect to Stripe checkout
4. On success: Stripe webhook → verify signature → create Enrollment + Payment
5. Redirect to `/aprender/{courseId}`

## Subscription

1. Frontend: POST `/payments/checkout/subscription {plan: 'monthly'|'annual'|'lifetime'}`
2. Backend: create Stripe Checkout Session (mode: subscription or payment)
3. Stripe webhook: subscription.created → create Subscription
4. subscription.deleted/canceled → update status
5. invoice.payment_failed → notify + update status

## Webhook Security

- Verify Stripe-Signature header with signing secret
- Process idempotently (check PaymentIntentId)

## Plans

| Plan | Price |
|------|-------|
| MONTHLY | $19/month |
| ANNUAL | $149/year |
| LIFETIME | $399 one-time |

## Payment Status

- PENDING
- COMPLETED
- FAILED
- REFUNDED