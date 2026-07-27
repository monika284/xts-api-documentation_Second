<h1 id="Bracket-Orders" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Bracket Orders</h1>
<p class="iov-subtitle">A <strong>Bracket Order (BO)</strong> combines three linked orders — Entry, Target, and Stop-Loss — into a single trade. Once the entry executes, the system automatically manages your exit for both profit and risk.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Auto entry & exit</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Risk management</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Auto profit booking</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Stop-loss protection</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>No constant monitoring</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 3a9 9 0 1 0 0 18A9 9 0 0 0 13 3zm0 16a7 7 0 1 1 0-14A7 7 0 0 1 13 19zm.5-11H12v6l5.25 3.15.75-1.23-4.5-2.67V8z"/></svg></div><span>Intraday leverage</span></div>
</div>


## Components of a Bracket Order

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px;margin:16px 0 24px">

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">1. Entry Order</div>
    <div style="padding:14px 16px;background:#ffffff">
      <p style="font-size:13px;color:#374151;margin:0 0 8px">The first order used to enter the trade.</p>
      <code style="font-size:12px;color:#b45309">Buy RELIANCE at ₹2,850</code>
    </div>
  </div>

  <div style="border:1.5px solid #bbf7d0;border-radius:12px;overflow:hidden">
    <div style="background:#16a34a;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">2. Target Order</div>
    <div style="padding:14px 16px;background:#f0fdf4">
      <p style="font-size:13px;color:#374151;margin:0 0 8px">Profit booking — closes position when target price is reached.</p>
      <code style="font-size:12px;color:#166534">Target Price = ₹2,900</code>
    </div>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ea580c;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">3. Stop-Loss Order</div>
    <div style="padding:14px 16px;background:#ffffff">
      <p style="font-size:13px;color:#374151;margin:0 0 8px">Protective order — limits losses if market moves against the trade.</p>
      <code style="font-size:12px;color:#9a3412">Stop Loss = ₹2,830</code>
    </div>
  </div>

</div>

---

## How It Works

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Place Bracket Order</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Entry Executed</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg></div><span>Target &amp; SL Created</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Exit Triggered</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg></div><span>Other Order Cancelled</span></div>
</div>

---

## Example — RELIANCE 100 Shares

<table class="api-table">
  <thead>
    <tr>
      <th>Order</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Entry Price</td><td>₹2,850</td></tr>
    <tr><td>Target Price</td><td>₹2,900</td></tr>
    <tr><td>Stop-Loss Price</td><td>₹2,830</td></tr>
  </tbody>
</table>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0 24px">

  <div style="border:1.5px solid #bbf7d0;border-radius:12px;overflow:hidden">
    <div style="background:#16a34a;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Scenario 1 — Profit</div>
    <div style="padding:14px 16px;background:#f0fdf4">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Buy at ₹2,850</li>
        <li>Price rises to ₹2,900</li>
        <li>Target order executed</li>
        <li>Profit booked automatically</li>
        <li>Stop-loss order cancelled</li>
      </ul>
    </div>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ea580c;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Scenario 2 — Loss Limited</div>
    <div style="padding:14px 16px;background:#ffffff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Buy at ₹2,850</li>
        <li>Price falls to ₹2,830</li>
        <li>Stop-loss order executed</li>
        <li>Position closed automatically</li>
        <li>Target order cancelled</li>
      </ul>
    </div>
  </div>

</div>

---

## Bracket Order vs Cover Order

<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:0;align-items:stretch;margin:16px 0 24px;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
  <div style="padding:16px 20px;background:#ffffff">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:10px">COVER ORDER</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#9a3412;line-height:2.2">
      <li>Entry + Stop-Loss only</li>
      <li>No profit target</li>
      <li>Only risk protection</li>
      <li>Best for mandatory stop-loss traders</li>
    </ul>
  </div>
  <div style="padding:16px 10px;background:#f3f4f6;text-align:center;font-size:20px;color:#6b7280;display:flex;align-items:center">→</div>
  <div style="padding:16px 20px;background:#f0fdf4">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:10px">BRACKET ORDER</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#166534;line-height:2.2">
      <li>Entry + Target + Stop-Loss</li>
      <li>Auto profit booking at target</li>
      <li>Both profit &amp; risk protection</li>
      <li>Best for predefined target &amp; SL traders</li>
    </ul>
  </div>
</div>

---

## Advantages & Limitations

<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:12px 0 24px">

  <div style="border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4">
    <div style="font-weight:700;color:#16a34a;font-size:13px;margin-bottom:8px">Advantages</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
      <li>Automatic profit booking</li>
      <li>Automatic stop-loss protection</li>
      <li>Better risk management</li>
      <li>No constant market monitoring</li>
      <li>All related orders placed together</li>
      <li>Higher intraday leverage available</li>
    </ul>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ea580c;font-size:13px;margin-bottom:8px">Limitations</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
      <li>Mostly for intraday trading only</li>
      <li>Entry, target &amp; SL are linked</li>
      <li>One exit cancels the other automatically</li>
      <li>Not supported on all instruments</li>
      <li>Exit depends on market conditions</li>
    </ul>
  </div>

</div>

---

## Common Use Cases

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:12px 0 24px">
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">📈 Intraday Trading</div>
    <p style="font-size:12px;color:#374151;margin:0">Open and close positions within the same trading day with automatic exits.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">🛡️ Risk Management</div>
    <p style="font-size:12px;color:#374151;margin:0">Automatically limit losses using a predefined stop-loss.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">💰 Profit Booking</div>
    <p style="font-size:12px;color:#374151;margin:0">Close the trade automatically when the target price is reached.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">🤖 Automated Trading</div>
    <p style="font-size:12px;color:#374151;margin:0">Manage positions without continuously watching the market.</p>
  </div>
</div>

<h2>!!! tip</h2>
<p><bold>Always set realistic target and stop-loss prices. Ensure sufficient margin before placing a Bracket Order, and verify the entry price before submitting.</p>>

<h3 id="place-bracket-order" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Place Bracket Orders</h3>

<h2 id="bo-endpoint" class="auth-section-title">Endpoint</h2>

<div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px;background:#f9fafb;display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:8px 0 24px">
  <span style="background:#fdf4ff;border:1.5px solid #e9d5ff;color:#7c3aed;font-weight:700;font-size:12px;padding:4px 12px;border-radius:6px;flex-shrink:0">PUT</span>
  <code style="flex:1;font-size:13px;color:#1d4ed8;background:transparent;word-break:break-all">https://xts.rmoneyindia.co.in:3000//interactive/orders/bracket</code>
  <button onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000//interactive/orders/bracket').then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:7px;padding:6px 16px;font-size:13px;font-weight:600;cursor:pointer;flex-shrink:0">Copy</button>
</div>

<h2>Request Body Parameters</h2>
<div>
<table class="api-table">

<thead>
<tr>
<th>Parameter Name</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>

<tbody>

<tr>
<td>exchangeSegment</td>
<td>ExchangeSegment</td>
<td>Y</td>
<td>Exchange segment where the order will be placed.</td>
</tr>

<tr>
<td>exchangeInstrumentID</td>
<td>ExchangeInstrumentID</td>
<td>Y</td>
<td>Unique instrument ID or symbol token.</td>
</tr>

<tr>
<td>orderType</td>
<td>OrderType</td>
<td>Y</td>
<td>Type of order (LIMIT, MARKET, SL, SL-M).</td>
</tr>

<tr>
<td>orderSide</td>
<td>OrderSide</td>
<td>Y</td>
<td>Specifies whether the order is BUY or SELL.</td>
</tr>

<tr>
<td>disclosedQuantity</td>
<td>Quantity</td>
<td>Y</td>
<td>Quantity visible to the market.</td>
</tr>

<tr>
<td>orderQuantity</td>
<td>Quantity</td>
<td>Y</td>
<td>Total quantity to trade.</td>
</tr>

<tr>
<td>limitPrice</td>
<td>Price</td>
<td>Y</td>
<td>Limit price of the order.</td>
</tr>

<tr>
<td>stopLossPrice</td>
<td>StopLossPrice</td>
<td>Y</td>
<td>Trigger price for the stop-loss order.</td>
</tr>

<tr>
<td>squareOff</td>
<td>SquareOff</td>
<td>Y</td>
<td>Profit target value.</td>
</tr>

<tr>
<td>trailingStoploss</td>
<td>TrailingStoploss</td>
<td>Y</td>
<td>Trailing stop-loss value.</td>
</tr>

<tr>
<td>orderUniqueIdentifier</td>
<td>OrderUniqueIdentifier</td>
<td>N</td>
<td>Unique identifier to track the order.</td>
</tr>

<tr>
<td>apiOrderSource</td>
<td>ApiOrderSource</td>
<td>N</td>
<td>Application name placing the order.</td>
</tr>

<tr>
<td>clientID</td>
<td>ClientID</td>
<td>N</td>
<td>Client ID (mandatory for dealer login).</td>
</tr>

</tbody>

</table>
</div>
## Request Body JSON

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:260px;overflow:hidden;transition:max-height .4s ease" id="bo-req-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="NSECM">2190766863</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"3045"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"LIMIT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">Buy</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"disclosedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">15</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"limitPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">254.55</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"stopLossPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">245.55</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"squarOff"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">5</span><br>
<span style="color:#ffd700">}</span><br>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('bo-req-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('bo-req-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="bo-req-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('bo-req-box');var btn=document.getElementById('bo-req-show');if(b.style.maxHeight==='none'){b.style.maxHeight='260px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="bo-req-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

## Response Body Parameters

<table class="api-table">
  <thead>
    <tr>
      <th>Parameter Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">AppOrderID</span></td><td>AppOrderID</td><td>Unique order ID</td></tr>
    <tr><td><span class="enum-badge">OrderUniqueIdentifier</span></td><td>OrderUniqueIdentifier</td><td>Echo back to identify order</td></tr>
    <tr><td><span class="enum-badge">ClientID</span></td><td>ClientID</td><td>ClientID which is sent in request body</td></tr>
  </tbody>
</table>

## Response Body JSON

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:260px;overflow:hidden;transition:max-height .4s ease" id="bo-res-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-bracketorders-0002"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Request sent"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: {</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AppOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1290766863</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"123abc"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ClientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM1"</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('bo-res-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('bo-res-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="bo-res-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('bo-res-box');var btn=document.getElementById('bo-res-show');if(b.style.maxHeight==='none'){b.style.maxHeight='260px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="bo-res-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

## Code Examples

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="boShowCode('curl',this)" id="bo-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="boShowCode('python',this)" id="bo-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="bo-ce-box">

    <div id="bo-code-curl">
<span style="color:#d4d4d4">curl --location </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/bracket'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178">'{</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"exchangeSegment": "NSECM",</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"exchangeInstrumentID": 2885,</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"orderType": "LIMIT",</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"orderSide": "BUY",</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"disclosedQuantity": 0,</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"orderQuantity": 1,</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"limitPrice": 254.55,</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"stopLossPrice": 245.55,</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"squareOff": 5,</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"trailingStoploss": 0,</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"orderUniqueIdentifier": "123abc"</span><br>
<span style="color:#ce9178">}'</span>
    </div>

    <div id="bo-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/bracket"</span><br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"Content-Type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"application/json"</span><span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">payload</span><span style="color:#d4d4d4"> = {</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"LIMIT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"disclosedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"limitPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">254.55</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"stopLossPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">245.55</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"squareOff"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">5</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"trailingStoploss"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"123abc"</span><br>
<span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = </span><span style="color:#9cdcfe">await</span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_post</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">'bracketorder.place'</span><span style="color:#d4d4d4">, json</span><span style="color:#9cdcfe">.dumps</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">params</span><span style="color:#d4d4d4">)</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#dcdcaa">return </span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_handle_response </span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">response</span><span style="color:#d4d4d4">,</span><span style="color:#dcdcaa">"Place Bracket Order"</span><span style="color:#d4d4d4">)</span>

    </div>

  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=bo-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('bo-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="bo-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('bo-ce-box');var btn=document.getElementById('bo-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="bo-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<script>
function boShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('bo-code-' + l).style.display = 'none';
    document.getElementById('bo-tab-' + l).style.background = '#374151';
  });
  document.getElementById('bo-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>


<h3 id="modify-bracket-order" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Modify Bracket Orders</h3>

<h2 id="mbo-endpoint" class="auth-section-title">Endpoint</h2>

<div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px;background:#f9fafb;display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:8px 0 24px">
  <span style="background:#fdf4ff;border:1.5px solid #e9d5ff;color:#7c3aed;font-weight:700;font-size:12px;padding:4px 12px;border-radius:6px;flex-shrink:0">PUT</span>
  <code style="flex:1;font-size:13px;color:#1d4ed8;background:transparent;word-break:break-all">https://xts.rmoneyindia.co.in:3000/interactive/orders/bracket</code>
  <button onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/interactive/orders/bracket').then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:7px;padding:6px 16px;font-size:13px;font-weight:600;cursor:pointer;flex-shrink:0">Copy</button>
</div>

<h2 id="mbo-parameters" class="auth-section-title">Request Body Parameters</h2>

<table class="api-table">
  <thead>
    <tr>
      <th>Parameter Name</th>
      <th>Type</th>
      <th>Mandatory</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">appOrderID</span></td><td>AppOrderID</td><td>Y</td><td>Unique order ID</td></tr>
    <tr><td><span class="enum-badge">orderQuantity</span></td><td>OrderQuantity</td><td>Y</td><td>Quantity to transact. In terms of Lots</td></tr>
    <tr><td><span class="enum-badge">limitPrice</span></td><td>Price</td><td>Y</td><td>The price to execute the order at</td></tr>
    <tr><td><span class="enum-badge">stopLossPrice</span></td><td>Price</td><td>Y</td><td>A stop loss price is the price in a stop order that triggers the creation of a market order.</td></tr>
    <tr><td><span class="enum-badge">orderUniqueIdentifier</span></td><td>OrderUniqueIdentifier</td><td>N</td><td>Echo back to identify order</td></tr>
    <tr><td><span class="enum-badge">apiOrderSource</span></td><td>ApiOrderSource</td><td>N</td><td>API Order Source can be a third party application name which you want to give to your order, which will be used to track your order with a particular source.</td></tr>
    <tr><td><span class="enum-badge">clientID</span></td><td>ClientID</td><td>N</td><td>ClientID Mandatory in case of Dealer</td></tr>
  </tbody>
</table>

## Request Body JSON

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;" id="mbo-req-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"appOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1290766863</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">15</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"limitPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">254.55</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"stopLossPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">245.55</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"123abc"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"apiOrderSource"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ThirdPartyAppName"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"clientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM1"</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('mbo-req-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('mbo-req-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="mbo-req-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>  </div>
</div>

## Response Body Parameters

<table class="api-table">
  <thead>
    <tr>
      <th>Parameter Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">AppOrderID</span></td><td>AppOrderID</td><td>Unique order ID</td></tr>
    <tr><td><span class="enum-badge">OrderUniqueIdentifier</span></td><td>OrderUniqueIdentifier</td><td>Echo back to identify order</td></tr>
    <tr><td><span class="enum-badge">ClientID</span></td><td>ClientID</td><td>ClientID which is sent in request body</td></tr>
  </tbody>
</table>

## Response Body JSON

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:260px;overflow:hidden;transition:max-height .4s ease" id="mbo-res-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-bracketorders-0002"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Request sent"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: {</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AppOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1290766863</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"123abc"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ClientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM1"</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('mbo-res-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('mbo-res-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="mbo-res-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('mbo-res-box');var btn=document.getElementById('mbo-res-show');if(b.style.maxHeight==='none'){b.style.maxHeight='260px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="mbo-res-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

## Code Examples

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="mboShowCode('curl',this)" id="mbo-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="mboShowCode('python',this)" id="mbo-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="mbo-ce-box">

    <div id="mbo-code-curl">
<span style="color:#d4d4d4">curl --location --request PUT </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/bracket'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178">'{</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"appOrderID": 1290766863,</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"orderQuantity": 15,</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"limitPrice": 254.55,</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"stopLossPrice": 245.55,</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"orderUniqueIdentifier": "123abc",</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"apiOrderSource": "ThirdPartyAppName",</span><br>
<span style="color:#ce9178">&nbsp;&nbsp;"clientID": "RM1"</span><br>
<span style="color:#ce9178">}'</span>
    </div>

    <div id="mbo-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/bracket"</span><br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"Content-Type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"application/json"</span><span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">payload</span><span style="color:#d4d4d4"> = {</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"appOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1290766863</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">15</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"limitPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">254.55</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"stopLossPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">245.55</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"123abc"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"apiOrderSource"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ThirdPartyAppName"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"clientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM1"</span><br>
<span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = </span><span style="color:#9cdcfe">await</span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_post</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">'bracketorder.modify'</span><span style="color:#d4d4d4">, json</span><span style="color:#9cdcfe">.dumps</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">params</span><span style="color:#d4d4d4">)</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#dcdcaa">return </span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_handle_response </span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">response</span><span style="color:#d4d4d4">,</span><span style="color:#dcdcaa">"Modify Bracket Order"</span><span style="color:#d4d4d4">)</span>

    </div>

  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=mbo-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('mbo-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="mbo-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('mbo-ce-box');var btn=document.getElementById('mbo-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="mbo-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<script>
function mboShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('mbo-code-' + l).style.display = 'none';
    document.getElementById('mbo-tab-' + l).style.background = '#374151';
  });
  document.getElementById('mbo-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>

<h3 id="exit-bracket-order" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Cancel Bracket Orders</h3>

<h2 id="ebo-endpoint" class="auth-section-title">Endpoint</h2>

<div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px;background:#f9fafb;display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:8px 0 12px">
  <span style="background:#fff1f2;border:1.5px solid #fecdd3;color:#be123c;font-weight:700;font-size:12px;padding:4px 12px;border-radius:6px;flex-shrink:0">DELETE</span>
  <code style="flex:1;font-size:13px;color:#1d4ed8;background:transparent;word-break:break-all">https://xts.rmoneyindia.co.in:3000/interactive/orders/bracket?boEntryOrderId=2190766863</code>
  <button onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/interactive/orders/bracket?boEntryOrderId=2190766863').then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:7px;padding:6px 16px;font-size:13px;font-weight:600;cursor:pointer;flex-shrink:0">Copy</button>
</div>

<p style="font-size:13px;color:#374151;margin:0 0 20px"><strong>Note :</strong> XTS considers open orders whose order status is either New, Replaced, PartiallyFilled.</p>

<h2 id="ebo-parameters" class="auth-section-title">Request Body Parameters</h2>

<table class="api-table">
  <thead>
    <tr>
      <th>Parameter Name</th>
      <th>Type</th>
      <th>Mandatory</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">boEntryOrderId</span></td><td>AppOrderID</td><td>Y</td><td>Unique order ID</td></tr>
    <tr><td><span class="enum-badge">orderUniqueIdentifier</span></td><td>OrderUniqueIdentifier</td><td>N</td><td>Echo back to identify order</td></tr>
    <tr><td><span class="enum-badge">clientID</span></td><td>ClientID</td><td>N</td><td>Client ID mandatory in case of Dealer</td></tr>
  </tbody>
</table>

## Response Body Parameters

<table class="api-table">
  <thead>
    <tr>
      <th>Parameter Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">AppOrderID</span></td><td>AppOrderID</td><td>Unique order ID</td></tr>
    <tr><td><span class="enum-badge">OrderUniqueIdentifier</span></td><td>OrderUniqueIdentifier</td><td>Echo back to identify order</td></tr>
    <tr><td><span class="enum-badge">ClientID</span></td><td>ClientID</td><td>ClientID which is send in request body</td></tr>
  </tbody>
</table>

## Response Body JSON

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;" id="ebo-res-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-bracketorder-0014"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Request sent"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: {</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AppOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1290766863</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ClientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM1"</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('ebo-res-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('ebo-res-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="ebo-res-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>  </div>
</div>

## Code Examples

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="eboShowCode('curl',this)" id="ebo-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="eboShowCode('python',this)" id="ebo-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="ebo-ce-box">

    <div id="ebo-code-curl">
<span style="color:#d4d4d4">curl --location --request DELETE </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/bracket?boEntryOrderId=2190766863'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span>
    </div>

    <div id="ebo-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/bracket"</span><br>
<span style="color:#9cdcfe">params</span><span style="color:#d4d4d4"> = {</span><span style="color:#ce9178">"boEntryOrderId"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2190766863</span><span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = </span><span style="color:#9cdcfe">await</span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_post</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">'bracketorder.cancel'</span><span style="color:#d4d4d4">, json</span><span style="color:#9cdcfe">.dumps</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">params</span><span style="color:#d4d4d4">)</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#dcdcaa">return </span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_handle_response </span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">response</span><span style="color:#d4d4d4">,</span><span style="color:#dcdcaa">"Cancel Bracket Order"</span><span style="color:#d4d4d4">)</span>

    </div>

  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=ebo-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('ebo-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="ebo-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('ebo-ce-box');var btn=document.getElementById('ebo-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="ebo-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<script>
function eboShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('ebo-code-' + l).style.display = 'none';
    document.getElementById('ebo-tab-' + l).style.background = '#374151';
  });
  document.getElementById('ebo-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>
