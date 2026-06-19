# WebSocket Overview

## Overview

RMoney provides two WebSocket streams for real-time data. Unlike REST APIs that require repeated polling, WebSockets push data to your application the moment it changes.

---

## Two WebSocket Channels

| Channel | Purpose | URL Pattern |
|---------|---------|-------------|
| **Market Data Socket** | Live prices, bid/ask, depth, OHLC ticks | `{root}/?token=...&publishFormat=JSON&broadcastMode=Full` |
| **Interactive Socket** | Order updates, trade confirmations, position changes | `{root}/?token=...&userID=...&apiType=INTERACTIVE` |

---

## When to Use WebSockets vs REST

| Use Case | Recommended |
|----------|-------------|
| Live price feed for a dashboard | WebSocket (Market Data) |
| Real-time order status updates | WebSocket (Interactive) |
| Fetching historical candles | REST (OHLC endpoint) |
| Placing/modifying/cancelling orders | REST (Interactive API) |
| One-time instrument lookup | REST (Instruments endpoint) |

---

## Event Codes (Market Data)

| Code | Data |
|------|------|
| `1512` | Last Traded Price (LTP) only |
| `1501` | Touchline — LTP, Bid, Ask, Volume, OI |
| `1502` | Full Market Depth (5 levels) |
| `1505` | Live OHLC candle |
| `1510` | Open Interest |
| `1507` | Market Status (Open / Closed / Pre-open) |

---

## Subscription Flow

```
1. Login via REST API  →  receive token
2. Connect WebSocket   →  authenticate with token
3. Subscribe to instruments with event code
4. Receive real-time data in callbacks
5. Unsubscribe / disconnect when done
```

---

## Architecture

```
Your App
   │
   ├─► REST API ──► Place/Modify/Cancel Orders
   │
   ├─► Market Data WebSocket ──► Price ticks, depth, OHLC
   │
   └─► Interactive WebSocket ──► Order fills, position changes
```

See [Connection](connection.md) for setup and [Events](events.md) for handling data.
