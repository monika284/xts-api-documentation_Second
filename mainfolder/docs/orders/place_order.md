# Place Order

## Endpoint

```http
POST /orders
```

## Request

```json
{
  "exchangeSegment": 1,
  "instrumentId": 26000,
  "quantity": 10,
  "price": 250.50
}
```

## Response

```json
{
  "status": "success",
  "orderId": "12345"
}
```

## Parameters

| Name | Type | Required |
|--------|--------|----------|
| exchangeSegment | int | Yes |
| instrumentId | int | Yes |
| quantity | int | Yes |
| price | float | No |

!!! tip

    Use LIMIT orders during testing.

!!! warning

    instrumentId must be valid.