# Funds

## Overview

The Funds API returns your complete account balance — available cash, used margin, collateral, and limits breakdown.

---

## Endpoint

```http
GET /interactive/user/balance
```

---

## Python Example

```python
async def get_funds(client):
    response = await client.get_balance()
    balance_list = response['result']['BalanceList']

    for balance in balance_list:
        limits = balance['limitObject']
        rms    = limits['RMSSubLimits']

        print(f"Segment:          {balance['limitObject'].get('productType', 'N/A')}")
        print(f"Cash Available:   {rms.get('cashAvailable', 0):.2f}")
        print(f"Collateral Value: {rms.get('collateralValue', 0):.2f}")
        print(f"Used Margin:      {rms.get('utilisedAmount', 0):.2f}")
        print(f"Net Available:    {rms.get('netAvailableMargin', 0):.2f}")
        print("---")
```

---

## Response Example

```json
{
  "type": "success",
  "result": {
    "BalanceList": [
      {
        "limitObject": {
          "RMSSubLimits": {
            "cashAvailable": 50000.00,
            "collateralValue": 15000.00,
            "utilisedAmount": 12500.00,
            "netAvailableMargin": 52500.00,
            "payin": 0.00,
            "payout": 0.00
          }
        }
      }
    ]
  }
}
```

---

## Field Reference

| Field | Description |
|-------|-------------|
| `cashAvailable` | Free cash in your trading account |
| `collateralValue` | Value of pledged securities as margin |
| `utilisedAmount` | Margin currently blocked by open orders and positions |
| `netAvailableMargin` | Total available margin (cash + collateral - used) |
| `payin` | Amount added to account today |
| `payout` | Amount withdrawn today |

---

## Margin Calculator

Before placing an order, check if you have enough margin:

```python
async def check_margin(client):
    response = await client.get_margin_required(
        exchangeSegment="NSECM",
        exchangeInstrumentID=2885,
        orderType="LIMIT",
        orderSide="BUY",
        quantity=10,
        limitPrice=2450.00,
        productType="MIS"
    )
    print("Required Margin:", response['result']['marginRequired'])
```

!!! tip
    Always check available funds before placing large orders to avoid rejection due to insufficient margin.
