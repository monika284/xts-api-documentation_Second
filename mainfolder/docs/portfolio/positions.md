# Positions

## Overview

Positions show your currently active open trades for the day — both intraday (MIS) and overnight (NRML/CNC) positions.

---

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/interactive/portfolio/positions` | All positions (daywise + netwise) |
| `PUT` | `/interactive/portfolio/positions` | Convert position product type |

---

## Get Positions

### Day-wise Positions

All trades entered and exited during the current trading day.

```python
async def get_daywise_positions(client):
    response = await client.get_position_daywise()
    for pos in response['result']:
        print(f"Symbol:   {pos['TradingSymbol']}")
        print(f"Buy Qty:  {pos['BuyQuantity']}  @ {pos['BuyAveragePrice']}")
        print(f"Sell Qty: {pos['SellQuantity']} @ {pos['SellAveragePrice']}")
        print(f"MTM PnL:  {pos['MTM']}")
        print("---")
```

### Net-wise Positions

Net open positions (total buy minus total sell quantity remaining open).

```python
async def get_net_positions(client):
    response = await client.get_position_netwise()
    for pos in response['result']:
        net_qty = pos['NetQty']
        if net_qty != 0:
            direction = "LONG" if net_qty > 0 else "SHORT"
            print(f"{pos['TradingSymbol']}  {direction}  Qty: {abs(net_qty)}  MTM: {pos['MTM']}")
```

---

## Convert Position

Change a position's product type — for example, convert an intraday MIS trade to delivery CNC to hold overnight.

```python
async def convert_to_delivery(client, instrument_id, qty):
    response = await client.convert_position(
        exchangeSegment="NSECM",
        exchangeInstrumentID=instrument_id,
        targetQty=qty,
        isDayWise=True,
        oldProductType="MIS",
        newProductType="CNC"
    )
    print("Converted:", response['type'])
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
      "NetQty": 10,
      "BuyQuantity": 10,
      "SellQuantity": 0,
      "BuyAveragePrice": 2450.00,
      "SellAveragePrice": 0.0,
      "MTM": 375.00,
      "RealizedMTM": 0.0,
      "ProductType": "MIS"
    }
  ]
}
```

---

| Field | Description |
|-------|-------------|
| `NetQty` | Net open quantity (positive = long, negative = short) |
| `MTM` | Mark-to-market unrealized PnL |
| `RealizedMTM` | Locked-in PnL from completed trades |

!!! warning
    MIS positions that are not manually closed before the auto-square-off time (usually 3:15 PM IST) will be closed automatically by the system at market price.
