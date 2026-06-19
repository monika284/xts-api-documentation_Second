# Constants

## Exchange Segments

| Constant | Integer | Description |
|----------|---------|-------------|
| `NSECM` | `1` | NSE Cash Market — equities, ETFs |
| `NSEFO` | `2` | NSE Futures and Options |
| `NSECD` | `3` | NSE Currency Derivatives |
| `MCXFO` | `51` | MCX Futures and Options (commodities) |
| `BSECM` | `11` | BSE Cash Market |
| `BSEFO` | `12` | BSE Futures and Options |

---

## Product Types

| Constant | Description |
|----------|-------------|
| `MIS` | Margin Intraday Squareoff — intraday leverage, auto-closed before market end |
| `NRML` | Normal — used for F&O positions held overnight |
| `CNC` | Cash and Carry — equity delivery, no leverage, held in demat |
| `CO` | Cover Order — entry with built-in stop-loss |
| `BO` | Bracket Order — entry with take-profit and stop-loss |

---

## Order Types

| Constant | Description |
|----------|-------------|
| `MARKET` | Execute at the best available market price immediately |
| `LIMIT` | Execute at your specified price or better |
| `STOPMARKET` | Triggered when price hits stop level, then becomes a market order |
| `STOPLIMIT` | Triggered when price hits stop level, then becomes a limit order |

---

## Order Validity (Time in Force)

| Constant | Description |
|----------|-------------|
| `DAY` | Valid until end of current trading session |
| `IOC` | Immediate or Cancel — unfilled portion is cancelled instantly |
| `FOK` | Fill or Kill — entire order must fill instantly or it is cancelled |

---

## Order Side

| Constant | Description |
|----------|-------------|
| `BUY` | Purchase the instrument |
| `SELL` | Sell the instrument |

---

## Order Status Values

| Status | Description |
|--------|-------------|
| `New` | Submitted, pending exchange acknowledgement |
| `Submitted` | Received and forwarded to exchange |
| `Open` | Waiting to be filled in the order book |
| `PartiallyFilled` | Some quantity has been executed |
| `Filled` | Fully executed |
| `Cancelled` | Cancelled by user |
| `Rejected` | Rejected by exchange or risk management system |

---

## WebSocket Event Codes

| Code | Event |
|------|-------|
| `1501` | Touchline — LTP, bid, ask, volume |
| `1502` | Market Depth — 5-level order book |
| `1505` | OHLC candle data |
| `1507` | Market status change |
| `1510` | Open Interest |
| `1512` | Last Traded Price only |

---

## Instrument Series (F&O)

| Series | Description |
|--------|-------------|
| `FUTIDX` | Index Futures |
| `FUTSTK` | Stock Futures |
| `OPTIDX` | Index Options |
| `OPTSTK` | Stock Options |
| `EQ` | Equity (cash market) |
