# Events

## Market Data Events

Override these methods in your `MarketDataSocketClient` subclass to receive data.

---

### Connection Events

```python
class MyFeed(MarketDataSocketClient):
    async def on_connect(self):
        """Called when socket connects successfully."""
        print("Connected!")

    async def on_disconnect(self):
        """Called when socket disconnects."""
        print("Disconnected!")

    async def on_error(self, data):
        """Called on socket error."""
        print("Error:", data)
```

---

### Price Events

#### Event 1512 — Last Traded Price

Lightweight LTP-only tick. Lowest bandwidth option.

```python
    async def on_event_last_traded_price_full(self, data):
        print(f"{data['TradingSymbol']}  LTP: {data['LastTradedPrice']}")
```

#### Event 1501 — Touchline

LTP plus best bid/ask and volume.

```python
    async def on_event_touchline_full(self, data):
        print(f"Bid: {data['BidInfo']['Price']}  Ask: {data['AskInfo']['Price']}")
        print(f"Volume: {data['TotalTradedQuantity']}")
```

#### Event 1502 — Market Depth

Full 5-level order book.

```python
    async def on_event_market_depth_full(self, data):
        for bid in data['Bids']:
            print(f"BID {bid['Price']} x {bid['TotalQuantity']}")
        for ask in data['Asks']:
            print(f"ASK {ask['Price']} x {ask['TotalQuantity']}")
```

#### Event 1505 — OHLC Candle

Live candle update (use with a candle interval subscription).

```python
    async def on_event_candle_data_full(self, data):
        print(f"O:{data['Open']}  H:{data['High']}  L:{data['Low']}  C:{data['Close']}")
```

#### Event 1510 — Open Interest

```python
    async def on_event_open_interest_full(self, data):
        print(f"OI: {data['OpenInterest']}")
```

#### Event 1507 — Market Status

```python
    async def on_event_instrument_property_change_full(self, data):
        print(f"Market status: {data['MarketStatus']}")
```

---

## Interactive (Order) Events

Override these in your `InteractiveSocketClient` subclass.

```python
from xts_api_client.interactive_socket_client import InteractiveSocketClient

class MyOrderHandler(InteractiveSocketClient):
    async def on_connect(self):
        print("Order feed connected!")

    async def on_order(self, data):
        """Called on every order status change."""
        print(f"Order {data['AppOrderID']} → {data['OrderStatus']}")
        if data['OrderStatus'] == 'Filled':
            print(f"  Filled {data['FilledQuantity']} @ {data['AveragePrice']}")

    async def on_trade(self, data):
        """Called on every trade execution."""
        print(f"Trade: {data['TradingSymbol']}  {data['TradedQuantity']} @ {data['TradedPrice']}")

    async def on_position(self, data):
        """Called when position changes."""
        print(f"Position update: {data['TradingSymbol']}  NetQty: {data['NetQty']}")
```

---

## Event Code Reference

| Code | Event | Bandwidth |
|------|-------|-----------|
| `1512` | LTP only | Very low |
| `1501` | Touchline (LTP + bid/ask) | Low |
| `1502` | Full depth (5 levels) | Medium |
| `1505` | OHLC candle | Medium |
| `1510` | Open interest | Low |
| `1507` | Market status | Very low |

!!! tip
    Subscribe only to the event codes you actually need. Using `1502` (full depth) for hundreds of instruments simultaneously uses significantly more bandwidth than `1512` (LTP only).
