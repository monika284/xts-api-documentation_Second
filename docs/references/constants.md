<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">Constants</h1>
<p class="iov-subtitle"><strong>Constants</strong> are fixed values used throughout the API to represent predefined information such as exchange segments, market types, order statuses, and product types — keeping API communication standardized and reliable.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Standardized values</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Reduces errors</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>Consistent API data</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg></div><span>Easy validation</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Better readability</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg></div><span>Reliable integration</span></div>
</div>

---

## Example

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span>&nbsp;&nbsp;<span style="color:#6a9955">// 1 = NSECM (NSE Cash Market)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">48</span><span style="color:#6a9955">&nbsp;&nbsp;&nbsp;&nbsp;// 48 = Open / New Order</span><br>
<span style="color:#ffd700">}</span>
</div>

---

## Exchange Segments

<table class="api-table">
  <thead>
    <tr>
      <th>Constant</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">NSECM</span></td><td>1</td><td>NSE Cash Market — equities, ETFs</td></tr>
    <tr><td><span class="enum-badge">NSEFO</span></td><td>2</td><td>NSE Futures and Options</td></tr>
    <tr><td><span class="enum-badge">NSECD</span></td><td>3</td><td>NSE Currency Derivatives</td></tr>
    <tr><td><span class="enum-badge">BSECM</span></td><td>11</td><td>BSE Cash Market</td></tr>
    <tr><td><span class="enum-badge">BSEFO</span></td><td>12</td><td>BSE Futures and Options</td></tr>
    <tr><td><span class="enum-badge">MCXFO</span></td><td>51</td><td>MCX Futures and Options — commodities</td></tr>
  </tbody>
</table>

---

## Product Types

<table class="api-table">
  <thead>
    <tr>
      <th>Constant</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">MIS</span></td><td>Margin Intraday Squareoff — intraday leverage, auto-closed before market end</td></tr>
    <tr><td><span class="enum-badge">NRML</span></td><td>Normal — used for F&amp;O positions held overnight</td></tr>
    <tr><td><span class="enum-badge">CNC</span></td><td>Cash and Carry — equity delivery, no leverage, held in demat</td></tr>
    <tr><td><span class="enum-badge">CO</span></td><td>Cover Order — entry with built-in stop-loss</td></tr>
    <tr><td><span class="enum-badge">BO</span></td><td>Bracket Order — entry with take-profit and stop-loss</td></tr>
  </tbody>
</table>

---

## Order Types

<table class="api-table">
  <thead>
    <tr>
      <th>Constant</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">MARKET</span></td><td>Execute at the best available market price immediately</td></tr>
    <tr><td><span class="enum-badge">LIMIT</span></td><td>Execute at your specified price or better</td></tr>
    <tr><td><span class="enum-badge">STOPMARKET</span></td><td>Triggered when price hits stop level, then becomes a market order</td></tr>
    <tr><td><span class="enum-badge">STOPLIMIT</span></td><td>Triggered when price hits stop level, then becomes a limit order</td></tr>
  </tbody>
</table>

---

## Order Validity (Time in Force)

<table class="api-table">
  <thead>
    <tr>
      <th>Constant</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">DAY</span></td><td>Valid until end of current trading session</td></tr>
    <tr><td><span class="enum-badge">IOC</span></td><td>Immediate or Cancel — unfilled portion is cancelled instantly</td></tr>
    <tr><td><span class="enum-badge">FOK</span></td><td>Fill or Kill — entire order must fill instantly or it is cancelled</td></tr>
  </tbody>
</table>

---

## Order Side

<table class="api-table">
  <thead>
    <tr>
      <th>Constant</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">BUY</span></td><td>Purchase the instrument</td></tr>
    <tr><td><span class="enum-badge">SELL</span></td><td>Sell the instrument</td></tr>
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
    <tr><td><span class="enum-badge">New</span></td><td>Submitted, pending exchange acknowledgement</td></tr>
    <tr><td><span class="enum-badge">Submitted</span></td><td>Received and forwarded to exchange</td></tr>
    <tr><td><span class="enum-badge">Open</span></td><td>Waiting to be filled in the order book</td></tr>
    <tr><td><span class="enum-badge">PartiallyFilled</span></td><td>Some quantity has been executed</td></tr>
    <tr><td><span class="enum-badge">Filled</span></td><td>Fully executed</td></tr>
    <tr><td><span class="enum-badge">Cancelled</span></td><td>Cancelled by the user</td></tr>
    <tr><td><span class="enum-badge">Rejected</span></td><td>Rejected by exchange or risk management system</td></tr>
  </tbody>
</table>

---

## WebSocket Event Codes

<table class="api-table">
  <thead>
    <tr>
      <th>Code</th>
      <th>Event</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">1501</span></td><td>Touchline — LTP, bid, ask, volume</td></tr>
    <tr><td><span class="enum-badge">1502</span></td><td>Market Depth — 5-level order book</td></tr>
    <tr><td><span class="enum-badge">1505</span></td><td>OHLC candle data</td></tr>
    <tr><td><span class="enum-badge">1507</span></td><td>Market status change</td></tr>
    <tr><td><span class="enum-badge">1510</span></td><td>Open Interest</td></tr>
    <tr><td><span class="enum-badge">1512</span></td><td>Last Traded Price only</td></tr>
  </tbody>
</table>

---

## Instrument Series (F&O)

<table class="api-table">
  <thead>
    <tr>
      <th>Series</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">FUTIDX</span></td><td>Index Futures</td></tr>
    <tr><td><span class="enum-badge">FUTSTK</span></td><td>Stock Futures</td></tr>
    <tr><td><span class="enum-badge">OPTIDX</span></td><td>Index Options</td></tr>
    <tr><td><span class="enum-badge">OPTSTK</span></td><td>Stock Options</td></tr>
    <tr><td><span class="enum-badge">EQ</span></td><td>Equity — cash market</td></tr>
  </tbody>
</table>

---

## Market Type Constants

<table class="api-table">
  <thead>
    <tr>
      <th>Constant</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">Normal</span></td><td>Regular continuous trading session</td></tr>
    <tr><td><span class="enum-badge">Auction</span></td><td>Special auction session for settlement obligations</td></tr>
    <tr><td><span class="enum-badge">CallAuction1</span></td><td>First call auction — batch order matching at a fixed time</td></tr>
    <tr><td><span class="enum-badge">CallAuction2</span></td><td>Second call auction — additional price discovery round</td></tr>
  </tbody>
</table>
