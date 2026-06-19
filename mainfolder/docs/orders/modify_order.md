# Modify Order

## Overview

Modify the price, quantity, or validity of an open order before it is executed.

---

## Endpoint

```http
PUT /interactive/orders
```

---

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `appOrderID` | integer | Yes | The order ID returned when the order was placed |
| `modifiedProductType` | string | Yes | Product type — `MIS`, `NRML`, `CNC` |
| `modifiedOrderType` | string | Yes | Order type — `MARKET`, `LIMIT`, `STOPMARKET`, `STOPLIMIT` |
| `modifiedOrderQuantity` | integer | Yes | New quantity |
| `modifiedDisclosedQuantity` | integer | Yes | Disclosed quantity (use `0` to show all) |
| `modifiedLimitPrice` | float | Yes | New limit price (use `0` for market orders) |
| `modifiedStopPrice` | float | Yes | New stop price (use `0` if not applicable) |
| `modifiedTimeInForce` | string | Yes | Validity — `DAY` or `IOC` |
| `orderUniqueIdentifier` | string | No | Custom tag for tracking |

---

## Python Example

```python
async def modify_order(client, order_id):
    response = await client.modify_order(
        appOrderID=order_id,
        modifiedProductType="MIS",
        modifiedOrderType="LIMIT",
        modifiedOrderQuantity=15,
        modifiedDisclosedQuantity=0,
        modifiedLimitPrice=2480.00,
        modifiedStopPrice=0.0,
        modifiedTimeInForce="DAY",
        orderUniqueIdentifier="modified_01"
    )
    print("Modified order:", response['result']['AppOrderID'])
```

---

## Response Example

```json
{
  "type": "success",
  "code": "s-Orders-0002",
  "description": "Order modified successfully",
  "result": {
    "AppOrderID": 1234567890
  }
}
```

---

!!! warning
    You can only modify orders with status `OPEN` or `PARTIALLY FILLED`. Orders that are `FILLED`, `CANCELLED`, or `REJECTED` cannot be modified.
