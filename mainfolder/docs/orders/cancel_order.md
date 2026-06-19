# Cancel Order

## Overview

Cancel an open order before it is executed by the exchange.

---

## Endpoint

```http
DELETE /interactive/orders
```

---

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appOrderID` | integer | Yes | The order ID returned when the order was placed |
| `orderUniqueIdentifier` | string | No | Custom tag for tracking |

---

## Python Example

```python
async def cancel_order(client, order_id):
    response = await client.cancel_order(
        appOrderID=order_id,
        orderUniqueIdentifier="cancel_01"
    )
    if response['type'] == 'success':
        print("Order cancelled:", response['result']['AppOrderID'])
    else:
        print("Cancel failed:", response['description'])
```

---

## Response Example

```json
{
  "type": "success",
  "code": "s-Orders-0003",
  "description": "Order cancelled successfully",
  "result": {
    "AppOrderID": 1234567890
  }
}
```

---

## Cancel All Open Orders

```python
async def cancel_all_orders(client):
    # Fetch all open orders first
    order_book = await client.get_order_book()
    open_orders = [
        o for o in order_book['result']
        if o['OrderStatus'] == 'Open'
    ]
    for order in open_orders:
        await client.cancel_order(appOrderID=order['AppOrderID'])
        print(f"Cancelled order {order['AppOrderID']}")
```

---

!!! warning
    You can only cancel orders with status `OPEN` or `PARTIALLY FILLED`. Filled or rejected orders cannot be cancelled.

!!! tip
    In an emergency, use the squareoff helper from the xts-api-client library to close all open positions instantly instead of cancelling individual orders.
