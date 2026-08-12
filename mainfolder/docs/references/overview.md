<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">Reference Data Overview</h1>
<p class="iov-subtitle"><strong>Reference Data APIs</strong> provide the master information about exchanges, instruments, and contracts that applications need before requesting market data or placing trades.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg></div><span>Instrument master</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg></div><span>Exchange info</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Symbol validation</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Derivative contracts</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div><span>Instrument search</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Consistent data</span></div>
</div>

---

## What Reference Data Includes

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px;margin:16px 0 24px">

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Exchange Information</div>
    <div style="padding:14px 16px;background:#ffffff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Exchange segments &amp; market types</li>
        <li>Trading session details</li>
        <li>Exchange-specific configurations</li>
      </ul>
    </div>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Instrument Information</div>
    <div style="padding:14px 16px;background:#ffffff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Instrument Name &amp; Trading Symbol</li>
        <li>Exchange Instrument ID</li>
        <li>Series, ISIN, Instrument Type</li>
      </ul>
    </div>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Derivative Information</div>
    <div style="padding:14px 16px;background:#ffffff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Expiry Date &amp; Strike Price</li>
        <li>Option Type (CE/PE)</li>
        <li>Contract Details</li>
      </ul>
    </div>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Market Information</div>
    <div style="padding:14px 16px;background:#ffffff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Lot Size &amp; Tick Size</li>
        <li>Price Limits</li>
        <li>Trading Status</li>
      </ul>
    </div>
  </div>

</div>

---

## Quick Reference

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin:12px 0 24px">
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px"> Constants</div>
    <p style="font-size:13px;color:#374151;margin:0">Exchange segments, product types, order types, and validity values used across all API calls.</p>
    <a href="constants.md" style="font-size:12px;color:#ff6b00;text-decoration:none;font-weight:600;display:inline-block;margin-top:8px">View Constants →</a>
  </div>
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px"> Enums</div>
    <p style="font-size:13px;color:#374151;margin:0">Status values, event codes, and enumeration definitions for interpreting API responses.</p>
    <a href="enums.md" style="font-size:12px;color:#ff6b00;text-decoration:none;font-weight:600;display:inline-block;margin-top:8px">View Enums →</a>
  </div>
</div>

---

## Most Used Values

### Exchange Segments

<table class="api-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Code</th>
      <th>Market</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">NSECM</span></td><td>1</td><td>NSE Equities</td></tr>
    <tr><td><span class="enum-badge">NSEFO</span></td><td>2</td><td>NSE Futures and Options</td></tr>
    <tr><td><span class="enum-badge">NSECD</span></td><td>3</td><td>NSE Currency</td></tr>
    <tr><td><span class="enum-badge">MCXFO</span></td><td>51</td><td>MCX Commodities</td></tr>
    <tr><td><span class="enum-badge">BSECM</span></td><td>11</td><td>BSE Equities</td></tr>
  </tbody>
</table>

### Product Types

<table class="api-table">
  <thead>
    <tr>
      <th>Value</th>
      <th>Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">MIS</span></td><td>Intraday — auto-squares off before market close</td></tr>
    <tr><td><span class="enum-badge">NRML</span></td><td>Overnight futures/options positions</td></tr>
    <tr><td><span class="enum-badge">CNC</span></td><td>Equity delivery — holds in demat</td></tr>
  </tbody>
</table>

### Order Types

<table class="api-table">
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">MARKET</span></td><td>Execute immediately at best available price</td></tr>
    <tr><td><span class="enum-badge">LIMIT</span></td><td>Execute only at specified price or better</td></tr>
    <tr><td><span class="enum-badge">STOPMARKET</span></td><td>Trigger at stop price, then execute at market</td></tr>
    <tr><td><span class="enum-badge">STOPLIMIT</span></td><td>Trigger at stop price, then place limit order</td></tr>
  </tbody>
</table>

### Order Validity

<table class="api-table">
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">DAY</span></td><td>Valid for the current trading session</td></tr>
    <tr><td><span class="enum-badge">IOC</span></td><td>Immediate or Cancel — fill instantly or cancel remainder</td></tr>
    <tr><td><span class="enum-badge">FOK</span></td><td>Fill or Kill — fill entirely or cancel completely</td></tr>
  </tbody>
</table>

---

## Common Instrument IDs

<table class="api-table">
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Exchange</th>
      <th>Instrument ID</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">RELIANCE</span></td><td>NSECM</td><td>2885</td></tr>
    <tr><td><span class="enum-badge">NIFTY Index</span></td><td>NSECM</td><td>22</td></tr>
    <tr><td><span class="enum-badge">BANKNIFTY</span></td><td>NSECM</td><td>1333</td></tr>
    <tr><td><span class="enum-badge">TCS</span></td><td>NSECM</td><td>11536</td></tr>
    <tr><td><span class="enum-badge">INFY</span></td><td>NSECM</td><td>10604</td></tr>
  </tbody>
</table>

---

## Example Workflow

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div><span>Search Instrument</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg></div><span>Get Instrument ID</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Subscribe Market Data</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Place Order</span></div>
</div>

---

## Common Use Cases

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:12px 0 24px">
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px"> Instrument Search</div>
    <p style="font-size:12px;color:#374151;margin:0">Search for instruments by symbol name or keyword.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px"> Get Instrument ID</div>
    <p style="font-size:12px;color:#374151;margin:0">Retrieve Exchange Instrument IDs required by other APIs.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px"> Validate Symbols</div>
    <p style="font-size:12px;color:#374151;margin:0">Confirm trading symbols before placing orders.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px"> F&amp;O Details</div>
    <p style="font-size:12px;color:#374151;margin:0">Fetch derivative contract details like expiry, strike, and option type.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px"> Market Data Sub</div>
    <p style="font-size:12px;color:#374151;margin:0">Get the details needed to subscribe to live market feeds.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px"> Order Placement</div>
    <p style="font-size:12px;color:#374151;margin:0">Use instrument details as input when placing trades.</p>
  </div>
</div>

!!! note
    Instrument IDs can change between sessions. Always look up the current ID using the [Instruments search API](../market/instruments.md) rather than hardcoding them.
