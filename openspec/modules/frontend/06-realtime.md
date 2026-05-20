# Real-Time Notifications

Notificaciones en tiempo real (SignalR).

## Architecture
- SignalR Hub: `/hubs/notifications` (JWT auth required)
- Groups: per-user (user-{userId})

## Events

| Event | Description |
|-------|-------------|
| notification:new | Toast + bell badge increment |
| comment:reply | Notify comment author |
| course:published | Notify enrolled users |
| certificate:ready | Notify when PDF ready |

## Frontend Integration
- SignalR JS client connects on login, disconnects on logout
- Bell icon shows unread count
- Click opens notification panel
- Notifications stored in DB + pushed real-time