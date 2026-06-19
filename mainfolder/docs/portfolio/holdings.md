# Holdings

## Overview

Holdings represent stocks you own in your demat account — securities bought for delivery (CNC product type) and held overnight or long-term.

---

## Endpoint

```http
GET /interactive/portfolio/holdings
```

---

## Python Example

```python
async def get_holdings(client):
    response = await client.get_holding()
    holdings = response['result']

    print(f"Total holdings: {len(holdings)}")
    total_invested = 0
    total_current  = 0

    for h in holdings:
        invested = h['BuyAvgPrice'] * h['HoldingQuantity']
        current  = h['LPTLTP'] * h['HoldingQuantity']
        pnl      = current - invested
        total_invested += invested
        total_current  += current

        print(f"Symbol:    {h['TradingSymbol']}")
        print(f"Quantity:  {h['HoldingQuantity']}")
        print(f"Avg Price: {h['BuyAvgPrice']}")
        print(f"LTP:       {h['LPTLTP']}")
        print(f"P&L:       {pnl:.2f}")
        print("---")

    print(f"Total Invested : {total_invested:.2f}")
    print(f"Current Value  : {total_current:.2f}")
    print(f"Overall P&L    : {total_current - total_invested:.2f}")
```

---

## Response Example

```json
{
  "type": "success",
  "result": [
    {
      "ExchangeInstrumentID": 2885,
      "TradingSymbol": "RELIANCE",
      "ExchangeSegment": "NSECM",
      "ISIN": "INE002A01018",
      "HoldingQuantity": 50,
      "BuyAvgPrice": 2350.00,
      "LPTLTP": 2487.50,
      "MarketValue": 124375.00,
      "PnL": 6875.00
    }
  ]
}
```

---

## Field Reference

| Field | Description |
|-------|-------------|
| `HoldingQuantity` | Number of shares held |
| `BuyAvgPrice` | Average purchase price |
| `LPTLTP` | Last traded price (current market price) |
| `MarketValue` | Current market value of the holding |
| `PnL` | Unrealized profit or loss |

!!! note
    Holdings are updated at the end of each trading day after settlement. Intraday trades in MIS product type do not appear here.
