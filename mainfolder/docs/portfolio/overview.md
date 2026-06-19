# Portfolio Overview

## Overview

The Portfolio APIs give you a complete picture of your account — what you own, what positions you hold, and how much margin is available.

---

## Portfolio Sections

| Section | Description |
|---------|-------------|
| **Holdings** | Long-term stocks held in your demat account |
| **Positions** | Active intraday and overnight open positions |
| **Funds** | Available cash, used margin, and balance breakdown |

---

## Key Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/interactive/portfolio/holdings` | Demat holdings |
| `GET` | `/interactive/portfolio/positions` | Day and net positions |
| `GET` | `/interactive/user/balance` | Funds and margin |
| `PUT` | `/interactive/portfolio/positions` | Convert position product type |

---

## Quick Example

```python
async def portfolio_summary(client):
    # Holdings (delivery stocks in demat)
    holdings = await client.get_holding()
    print(f"Holdings count: {len(holdings['result'])}")

    # Positions (today's open trades)
    positions = await client.get_position_netwise()
    total_mtm = sum(p['MTM'] for p in positions['result'])
    print(f"Total MTM PnL: {total_mtm:.2f}")

    # Available funds
    balance = await client.get_balance()
    cash = balance['result']['BalanceList'][0]['limitObject']['RMSSubLimits']['cashAvailable']
    print(f"Available Cash: {cash:.2f}")
```

---

## PnL Calculation

### Realized PnL
Locked in when you complete a trade loop (Buy + Sell same contract):

```
Realized PnL = (Sell Price - Buy Price) × Traded Quantity
```

### Unrealized PnL
Fluctuates with market price on open positions:

```
Long:   Unrealized PnL = (Current LTP - Avg Buy Price) × Open Qty
Short:  Unrealized PnL = (Avg Sell Price - Current LTP) × Open Qty
```

!!! tip
    Monitor your MTM PnL in real-time using the Interactive WebSocket stream to get instant position updates as prices move.
