# Order History

## Overview

Retrieve the complete list of orders placed during the current trading session, including their current statuses.

---

## Endpoint

```http
GET /interactive/orders
```

---

## Python Example

```python
async def get_order_history(client):
    response = await client.get_order_book()
    orders = response['result']
    
    for order in orders:
        print(f"Order ID:    {order['AppOrderID']}")
        print(f"Symbol:      {order['TradingSymbol']}")
        print(f"Side:        {order['OrderSide']}")
        print(f"Qty:         {order['OrderQuantity']}")
        print(f"Price:       {order['LimitPrice']}")
        print(f"Status:      {order['OrderStatus']}")
        print("---")
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
      "OrderType": "LIMIT",
      "ProductType": "MIS",
      "OrderQuantity": 10,
      "FilledQuantity": 10,
      "PendingQuantity": 0,
      "LimitPrice": 2450.00,
      "AveragePrice": 2449.50,
      "OrderStatus": "Filled",
      "OrderGeneratedDateTime": "Jun 18 2026 10:15:30"
    }
  ]
}
```

---

## Order Status Values

| Status | Description |
|--------|-------------|
| `New` | Order submitted, pending acknowledgement |
| `Open` | Active in the exchange order book |
| `PartiallyFilled` | Part of the order has been executed |
| `Filled` | Order completely executed |
| `Cancelled` | Order cancelled by user |
| `Rejected` | Order rejected by exchange or RMS |

!!! note
    Order history only shows orders from the **current trading day**. Historical data from previous days is not available through this endpoint.
