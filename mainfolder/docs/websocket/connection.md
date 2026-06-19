# Connection

## Overview

WebSocket connections require a valid session token obtained by logging in through the REST API first.

---

## Step 1 — Login via REST

```python
from xts_api_client.xts_connect_async import XTSConnect

client = XTSConnect(
    apiKey="your_api_key",
    secretKey="your_secret_key",
    source="WEBAPI",
    root="https://xts.rmoneyindia.co.in:3000"
)
await client.marketdata_login()
# client.token and client.userID are now set
```

---

## Step 2 — Connect Market Data WebSocket

```python
from xts_api_client.market_data_socket import MDSocket_io
from xts_api_client.market_data_socket_client import MarketDataSocketClient

class MyPriceFeed(MarketDataSocketClient):
    async def on_connect(self):
        print("Connected to market data feed!")

    async def on_disconnect(self):
        print("Disconnected!")

    async def on_event_last_traded_price_full(self, data):
        print(f"LTP: {data['TradingSymbol']} @ {data['LastTradedPrice']}")

listener = MyPriceFeed()
socket = MDSocket_io(
    token=client.token,
    userID=client.userID,
    root_url=client.root,
    marketdatasocketclient=listener
)
await socket.connect()
```

---

## Step 3 — Connect Interactive WebSocket

```python
from xts_api_client.interactive_socket import OrderSocket_io
from xts_api_client.interactive_socket_client import InteractiveSocketClient

class MyOrderFeed(InteractiveSocketClient):
    async def on_connect(self):
        print("Connected to order feed!")

    async def on_order(self, data):
        print(f"Order update: {data['OrderStatus']} for {data['TradingSymbol']}")

interactive_client = XTSConnect(
    apiKey="your_interactive_key",
    secretKey="your_interactive_secret",
    source="WEBAPI",
    root="https://xts.rmoneyindia.co.in:3000"
)
await interactive_client.interactive_login()

order_listener = MyOrderFeed()
order_socket = OrderSocket_io(
    token=interactive_client.token,
    userID=interactive_client.userID,
    root_url=interactive_client.root,
    reconnection=True,
    interativeSocketClient=order_listener
)
await order_socket.connect()
```

---

## Step 4 — Subscribe to Instruments

```python
# Subscribe RELIANCE and NIFTY for LTP ticks
instruments = [
    {"exchangeSegment": 1, "exchangeInstrumentID": 2885},
    {"exchangeSegment": 1, "exchangeInstrumentID": 22}
]
await client.send_subscription(Instruments=instruments, xtsMessageCode=1512)
```

---

## Step 5 — Unsubscribe and Disconnect

```python
await client.send_unsubscription(Instruments=instruments, xtsMessageCode=1512)
await socket.disconnect()
await client.marketdata_logout()
```

---

## Connection Parameters

| Parameter | Description |
|-----------|-------------|
| `token` | Session token from login |
| `userID` | User ID from login |
| `root_url` | Base URL of the server |
| `reconnection` | Auto-reconnect on disconnect (`True`/`False`) |

!!! tip
    Always login via REST before connecting the WebSocket. The token from login is required to authenticate the socket connection.
