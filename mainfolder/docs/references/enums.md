<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">Enums</h1>
<p class="iov-subtitle"><strong>Enums</strong> are fixed values used by the API to represent specific categories such as exchanges, instrument types, market types, and order statuses — keeping API communication consistent and error-free.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Standardized values</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Reduces errors</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>Faster processing</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg></div><span>Fixed accepted values</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Easy to validate</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg></div><span>Consistent API data</span></div>
</div>

---

## How Enums Work

<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:0;align-items:center;margin:16px 0 24px;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
  <div style="padding:16px 20px;background:#ffffff">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:8px">WITHOUT ENUMS</div>
    <code style="font-size:13px;color:#9a3412;display:block;line-height:1.8">"exchangeSegment": "NSE Cash Market"</code>
    <p style="font-size:12px;color:#6b7280;margin:6px 0 0">Long text — error-prone, inconsistent</p>
  </div>
  <div style="padding:16px 10px;background:#f3f4f6;text-align:center;font-size:20px;color:#6b7280;align-self:stretch;display:flex;align-items:center">→</div>
  <div style="padding:16px 20px;background:#ffffff">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:8px">WITH ENUMS</div>
    <code style="font-size:13px;color:#9a3412;display:block;line-height:1.8">"exchangeSegment": 1</code>
    <p style="font-size:12px;color:#6b7280;margin:6px 0 0">Compact numeric — fast, accurate, consistent</p>
  </div>
</div>

---

## Exchange Segments

<table class="api-table">
  <thead>
    <tr>
      <th>Enum Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">NSECM</span></td><td>1</td><td>NSE Cash Market — equity trading on NSE</td></tr>
    <tr><td><span class="enum-badge">NSEFO</span></td><td>2</td><td>NSE Futures &amp; Options — derivatives on NSE</td></tr>
    <tr><td><span class="enum-badge">NSECD</span></td><td>3</td><td>NSE Currency Derivatives</td></tr>
    <tr><td><span class="enum-badge">BSECM</span></td><td>11</td><td>BSE Cash Market — equity trading on BSE</td></tr>
    <tr><td><span class="enum-badge">BSEFO</span></td><td>12</td><td>BSE Futures &amp; Options</td></tr>
    <tr><td><span class="enum-badge">MCXFO</span></td><td>51</td><td>MCX Futures &amp; Options — commodity derivatives</td></tr>
  </tbody>
</table>

---

## Instrument Types

<table class="api-table">
  <thead>
    <tr>
      <th>Enum Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">Equity</span></td><td>8</td><td>Listed company shares traded on cash markets</td></tr>
    <tr><td><span class="enum-badge">Futures</span></td><td>1</td><td>Standardized contracts to buy/sell at a fixed future price</td></tr>
    <tr><td><span class="enum-badge">Options</span></td><td>2</td><td>Right (not obligation) to buy or sell at a strike price</td></tr>
    <tr><td><span class="enum-badge">MutualFund</span></td><td>512</td><td>Pooled investment scheme units</td></tr>
    <tr><td><span class="enum-badge">Debentures</span></td><td>64</td><td>Fixed-interest debt instruments issued by companies</td></tr>
  </tbody>
</table>

---

## Market Types

<table class="api-table">
  <thead>
    <tr>
      <th>Enum Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">Normal</span></td><td>1</td><td>Regular continuous trading session</td></tr>
    <tr><td><span class="enum-badge">Auction</span></td><td>4</td><td>Special auction session for settlement obligations</td></tr>
    <tr><td><span class="enum-badge">CallAuction1</span></td><td>5</td><td>First call auction — batch order matching at fixed time</td></tr>
    <tr><td><span class="enum-badge">CallAuction2</span></td><td>6</td><td>Second call auction — additional price discovery round</td></tr>
  </tbody>
</table>

---

## Product Types

<table class="api-table">
  <thead>
    <tr>
      <th>Enum Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">CNC</span></td><td>Equity delivery — position held in demat account</td></tr>
    <tr><td><span class="enum-badge">MIS</span></td><td>Intraday — auto-squared off before market close</td></tr>
    <tr><td><span class="enum-badge">NRML</span></td><td>Overnight futures/options — carry forward positions</td></tr>
  </tbody>
</table>

---

## Order Status

<table class="api-table">
  <thead>
    <tr>
      <th>Status</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">Open</span></td><td>Order is active and waiting to be matched</td></tr>
    <tr><td><span class="enum-badge">Filled</span></td><td>Order has been fully executed</td></tr>
    <tr><td><span class="enum-badge">Cancelled</span></td><td>Order was cancelled by the user or system</td></tr>
    <tr><td><span class="enum-badge">Rejected</span></td><td>Order was rejected by the exchange or system</td></tr>
  </tbody>
</table>

---

## Example

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span>&nbsp;&nbsp;<span style="color:#6a9955">// NSECM — NSE Cash Market</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"instrumentType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">8</span><span style="color:#6a9955">&nbsp;&nbsp;&nbsp;&nbsp;// Equity</span><br>
<span style="color:#ffd700">}</span>
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0 0">
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:12px 16px;background:#ffffff">
    <code style="font-size:13px;color:#ff6b00">exchangeSegment = 1</code>
    <p style="font-size:12px;color:#374151;margin:6px 0 0">→ NSECM (NSE Cash Market)</p>
  </div>
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:12px 16px;background:#ffffff">
    <code style="font-size:13px;color:#ff6b00">instrumentType = 8</code>
    <p style="font-size:12px;color:#374151;margin:6px 0 0">→ Equity</p>
  </div>
</div>
