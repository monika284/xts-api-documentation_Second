# Reference Overview

## Overview

This section contains quick-reference tables for constants, enumerations, and values used across all RMoney API calls.

---

## Quick Reference

| Reference | Description |
|-----------|-------------|
| [Constants](constants.md) | Exchange segments, product types, order types, validity |
| [Enums](enums.md) | Status values, event codes, error prefixes |

---

## Most Used Values

### Exchange Segments

| Name | Code | Market |
|------|------|--------|
| `NSECM` | 1 | NSE Equities |
| `NSEFO` | 2 | NSE Futures and Options |
| `NSECD` | 3 | NSE Currency |
| `MCXFO` | 51 | MCX Commodities |
| `BSECM` | 11 | BSE Equities |

### Product Types

| Value | Use Case |
|-------|---------|
| `MIS` | Intraday — auto-squares off before market close |
| `NRML` | Overnight futures/options positions |
| `CNC` | Equity delivery — holds in demat |

### Order Types

| Value | Description |
|-------|-------------|
| `MARKET` | Execute immediately at best available price |
| `LIMIT` | Execute only at specified price or better |
| `STOPMARKET` | Trigger at stop price, then execute at market |
| `STOPLIMIT` | Trigger at stop price, then place limit order |

### Order Validity

| Value | Description |
|-------|-------------|
| `DAY` | Valid for the current trading session |
| `IOC` | Immediate or Cancel — fill instantly or cancel remainder |
| `FOK` | Fill or Kill — fill entirely or cancel completely |

---

## Common Instrument IDs

| Symbol | Exchange | Instrument ID |
|--------|----------|---------------|
| RELIANCE | NSECM | 2885 |
| NIFTY Index | NSECM | 22 |
| BANKNIFTY | NSECM | 1333 |
| TCS | NSECM | 11536 |
| INFY | NSECM | 10604 |

!!! note
    Instrument IDs can change between sessions. Always look up the current ID using the [Instruments search API](../market/instruments.md) rather than hardcoding them.
