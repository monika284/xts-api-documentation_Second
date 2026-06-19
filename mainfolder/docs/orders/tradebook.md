# Trade Book

## Overview

The Trade Book records every executed trade — every time an order was partially or fully filled by the exchange. Unlike the Order Book, it only contains actual executions, not pending orders.

---

## Endpoint

```http
GET /interactive/orders/trades
```

---

## Python Example

```python
async def get_trade_book(client):
    response = await client.get_trade_book()
    trades = response['result']
    
    total_turnover = 0
    for trade in trades:
        value = trade['TradedQuantity'] * trade['TradedPrice']
        total_turnover += value
        print(f"Trade ID:    {trade['AppOrderID']}")
        print(f"Symbol:      {trade['TradingSymbol']}")
        print(f"Side:        {trade['OrderSide']}")
        print(f"Qty Traded:  {trade['TradedQuantity']}")
        print(f"Trade Price: {trade['TradedPrice']}")
        print(f"Value:       {value:.2f}")
        print("---")
    print(f"Total Turnover: {total_turnover:.2f}")
```

---

## Response Example

```json
{
  "type": "success",
  "result": [
    {
      "AppOrderID": 1234567890,
      "TradingSymbol": "RELIANCE",
      "ExchangeSegment": "NSECM",
      "OrderSide": "BUY",
      "ProductType": "MIS",
      "TradedQuantity": 10,
      "TradedPrice": 2449.50,
      "TradeID": "220618000123",
      "ExchangeOrderID": "1100000012345",
      "OrderGeneratedDateTime": "Jun 18 2026 10:15:35"
    }
  ]
}
```

---

## Trade Book vs Order Book

| Feature | Order Book | Trade Book |
|---------|-----------|------------|
| Shows pending orders | Yes | No |
| Shows executed trades | Yes | Yes |
| Shows rejected orders | Yes | No |
| One row per execution | No | Yes |

!!! tip
    If an order was partially filled in multiple executions, you will see multiple rows in the Trade Book for the same `AppOrderID`.
