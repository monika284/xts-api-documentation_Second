<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">GTT (Good Till Triggered) Orders</h1>
<p class="iov-subtitle">A <strong>GTT Order</strong> stays saved with the broker until the market reaches a predefined <strong>trigger price</strong>. Once triggered, the order is automatically sent to the exchange — no need to monitor the market continuously.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Auto trigger</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>No monitoring needed</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Planned trading</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Price-based entry</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>Buy &amp; sell support</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 3a9 9 0 1 0 0 18A9 9 0 0 0 13 3zm0 16a7 7 0 1 1 0-14A7 7 0 0 1 13 19zm.5-11H12v6l5.25 3.15.75-1.23-4.5-2.67V8z"/></svg></div><span>Long-term investing</span></div>
</div>

---

## How It Works

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Create GTT Order</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Order Saved by Broker</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 3a9 9 0 1 0 0 18A9 9 0 0 0 13 3zm0 16a7 7 0 1 1 0-14A7 7 0 0 1 13 19zm.5-11H12v6l5.25 3.15.75-1.23-4.5-2.67V8z"/></svg></div><span>Market Monitored</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>Trigger Hit</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Order Executed</span></div>
</div>

---

## Components of a GTT Order

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin:16px 0 24px">

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Trading Symbol</div>
    <div style="padding:14px 16px;background:#ffffff">
      <p style="font-size:13px;color:#374151;margin:0 0 8px">The stock or instrument to trade.</p>
      <code style="font-size:12px;color:#b45309">RELIANCE, TCS, INFY</code>
    </div>
  </div>

  <div style="border:1.5px solid #bbf7d0;border-radius:12px;overflow:hidden">
    <div style="background:#16a34a;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Trigger Price</div>
    <div style="padding:14px 16px;background:#f0fdf4">
      <p style="font-size:13px;color:#374151;margin:0 0 8px">Market price that activates the GTT order.</p>
      <code style="font-size:12px;color:#166534">₹2,750 → order fires</code>
    </div>
  </div>

  <div style="border:1.5px solid #ddd6fe;border-radius:12px;overflow:hidden">
    <div style="background:#7c3aed;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Order Price</div>
    <div style="padding:14px 16px;background:#fdf4ff">
      <p style="font-size:13px;color:#374151;margin:0 0 8px">The actual price placed at exchange after trigger.</p>
      <code style="font-size:12px;color:#6d28d9">Limit ₹2,748</code>
    </div>
  </div>

  <div style="border:1.5px solid #bfdbfe;border-radius:12px;overflow:hidden">
    <div style="background:#1d4ed8;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Quantity</div>
    <div style="padding:14px 16px;background:#eff6ff">
      <p style="font-size:13px;color:#374151;margin:0 0 8px">Number of shares or contracts.</p>
      <code style="font-size:12px;color:#1e40af">100 Shares</code>
    </div>
  </div>

</div>

---

## Examples

<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0 24px">

  <div style="border:1.5px solid #bbf7d0;border-radius:12px;overflow:hidden">
    <div style="background:#16a34a;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Example 1 — Buy GTT</div>
    <div style="padding:14px 16px;background:#f0fdf4">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Current price: <b>₹2,700</b></li>
        <li>Trigger price set: <b>₹2,750</b></li>
        <li>RELIANCE rises to ₹2,750</li>
        <li>Buy order sent automatically</li>
      </ul>
    </div>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Example 2 — Sell GTT</div>
    <div style="padding:14px 16px;background:#ffffff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>You hold RELIANCE at <b>₹2,800</b></li>
        <li>Sell trigger set: <b>₹2,900</b></li>
        <li>RELIANCE rises to ₹2,900</li>
        <li>Sell order sent automatically</li>
      </ul>
    </div>
  </div>

</div>

---

## GTT Order Status

<table class="api-table">
  <thead>
    <tr>
      <th>Status</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">Active</span></td><td>Stored and waiting for the trigger price to be reached</td></tr>
    <tr><td><span class="enum-badge">Triggered</span></td><td>Trigger price reached — order has been sent to the exchange</td></tr>
    <tr><td><span class="enum-badge">Filled</span></td><td>Order completely executed by the exchange</td></tr>
    <tr><td><span class="enum-badge">Partially Filled</span></td><td>Only part of the order has been executed</td></tr>
    <tr><td><span class="enum-badge">Cancelled</span></td><td>GTT order cancelled by the user before being triggered</td></tr>
    <tr><td><span class="enum-badge">Expired</span></td><td>GTT order expired before trigger price was reached</td></tr>
    <tr><td><span class="enum-badge">Rejected</span></td><td>Exchange rejected the order after it was triggered</td></tr>
  </tbody>
</table>

---

## GTT Order vs Normal Order

<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:0;align-items:stretch;margin:16px 0 24px;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
  <div style="padding:16px 20px;background:#ffffff">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:10px">NORMAL ORDER</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#92400e;line-height:2.2">
      <li>Sent to exchange immediately</li>
      <li>Active only for current trading day</li>
      <li>Requires manual placement</li>
      <li>Suitable for immediate trading</li>
    </ul>
  </div>
  <div style="padding:16px 10px;background:#f3f4f6;text-align:center;font-size:20px;color:#6b7280;display:flex;align-items:center">→</div>
  <div style="padding:16px 20px;background:#f0fdf4">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:10px">GTT ORDER</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#166534;line-height:2.2">
      <li>Stored until trigger price is reached</li>
      <li>Stays active till triggered or expired</li>
      <li>Fires automatically at trigger price</li>
      <li>Suitable for future price-based trading</li>
    </ul>
  </div>
</div>

---

## Advantages & Limitations

<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:12px 0 24px">

  <div style="border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4">
    <div style="font-weight:700;color:#16a34a;font-size:13px;margin-bottom:8px">Advantages</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
      <li>No need to monitor market continuously</li>
      <li>Automatically places orders at trigger</li>
      <li>Helps plan trades in advance</li>
      <li>Reduces emotional trading decisions</li>
      <li>Suitable for long-term investors</li>
      <li>Works for both Buy and Sell sides</li>
    </ul>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ea580c;font-size:13px;margin-bottom:8px">Limitations</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
      <li>Order not sent to exchange until trigger</li>
      <li>Triggering does not guarantee execution</li>
      <li>May expire based on broker policy</li>
      <li>Fast market moves may leave limit unfilled</li>
      <li>Requires sufficient funds at trigger time</li>
    </ul>
  </div>

</div>

---

## Common Use Cases

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:12px 0 24px">
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Buy at Desired Price</div>
    <p style="font-size:12px;color:#374151;margin:0">Automatically buy a stock when it reaches a specific price.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Sell at Target</div>
    <p style="font-size:12px;color:#374151;margin:0">Automatically sell holdings when the desired price is reached.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Breakout Trading</div>
    <p style="font-size:12px;color:#374151;margin:0">Enter a trade when price breaks above or below a level.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Long-Term Investing</div>
    <p style="font-size:12px;color:#374151;margin:0">Place buy or sell orders in advance without daily monitoring.</p>
  </div>
</div>

!!! tip
    Always ensure sufficient funds or holdings are available when the trigger fires. Review active GTT orders regularly and cancel unused ones to avoid unintended trades.

---

<h2 id="place-gtt" style="color:#1e293b;font-weight:700;margin:28px 0 10px">Place GTT Order</h2>
<p style="color:#6b7280;font-size:13px;margin:-4px 0 16px">Places a Good Till Triggered (GTT) order that remains active until a specified trigger condition is met. Once the trigger price is reached, the system automatically places the corresponding market or limit order on the exchange.</p>

<div class="aec-card">
  <div class="aec-top">
    <span class="aec-label">ENDPOINT</span>
    <span class="aec-badge-post">POST</span>
  </div>
  <div class="aec-url-row">
    <span class="aec-base">https://xts.rmoneyindia.co.in:3000</span><span class="aec-path">/1interactive/orders/gttorder</span>
  </div>
  <div class="aec-footer">
    <span class="aec-auth">Requires: valid <code>Authorization</code> token</span>
    <button class="aec-copy-btn" onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder');this.textContent='✔ Copied';setTimeout(()=>this.textContent='Copy URL',2000)">Copy URL</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Request Body Parameters</h3>

<table class="api-table">
  <thead>
    <tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">clientID</span></td><td>ClientID</td><td><strong>Y</strong></td><td>User-specific identification</td></tr>
    <tr><td><span class="enum-badge">source</span></td><td>ApiOrderSource</td><td><strong>Y</strong></td><td>API/Platform source of the request</td></tr>
    <tr><td><span class="enum-badge">stopPrice</span></td><td>Price</td><td><strong>Y</strong></td><td>Stop-loss trigger price</td></tr>
    <tr><td><span class="enum-badge">limitPrice</span></td><td>Price</td><td><strong>Y</strong></td><td>Limit price at which the order should execute</td></tr>
    <tr><td><span class="enum-badge">orderQuantity</span></td><td>OrderQuantity</td><td><strong>Y</strong></td><td>Quantity to transact (in units/lots depending on segment)</td></tr>
    <tr><td><span class="enum-badge">orderSide</span></td><td>OrderSide</td><td><strong>Y</strong></td><td>BUY or SELL direction of the order</td></tr>
    <tr><td><span class="enum-badge">exchangeSegment</span></td><td>ExchangeSegment</td><td><strong>Y</strong></td><td>Exchange segment where the order is placed</td></tr>
    <tr><td><span class="enum-badge">exchangeInstrumentID</span></td><td>ExchangeInstrumentID</td><td><strong>Y</strong></td><td>Unique token/identifier for the trading instrument</td></tr>
  </tbody>
</table>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Request Body JSON</h3>

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:260px;overflow:hidden;transition:max-height .4s ease" id="gtt-req-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"clientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"source"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Twsapi"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"stopPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1300</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"limitPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1320</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">75</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('gtt-req-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('gtt-req-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="gtt-req-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('gtt-req-box');var btn=document.getElementById('gtt-req-show');if(b.style.maxHeight==='none'){b.style.maxHeight='260px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="gtt-req-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Response Body JSON</h3>

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8" id="gtt-res-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-gttOrderRequest-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"GTT order request send."</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('gtt-res-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('gtt-res-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="gtt-res-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Code Examples</h3>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="gttPlaceShowCode('curl',this)" id="gttp-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="gttPlaceShowCode('python',this)" id="gttp-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="gttp-ce-box">
    <div id="gttp-code-curl">
<span style="color:#d4d4d4">curl --location </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178">'{"clientID":"RM","source":"Twsapi","stopPrice":1300,"limitPrice":1320,"orderQuantity":75,"orderSide":"BUY","exchangeSegment":"NSECM","exchangeInstrumentID":2885}'</span>
    </div>
    <div id="gttp-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests, json</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder"</span><br>
<span style="color:#9cdcfe">payload</span><span style="color:#d4d4d4"> = json.dumps({</span><span style="color:#ce9178">"clientID"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"RM"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"source"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"Twsapi"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"stopPrice"</span><span style="color:#d4d4d4">:</span><span style="color:#b5cea8">1300</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"limitPrice"</span><span style="color:#d4d4d4">:</span><span style="color:#b5cea8">1320</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"orderQuantity"</span><span style="color:#d4d4d4">:</span><span style="color:#b5cea8">75</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"orderSide"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"exchangeSegment"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"exchangeInstrumentID"</span><span style="color:#d4d4d4">:</span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">})</span><br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><span style="color:#ce9178">'Authorization'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'xxxxxx'</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">'Content-Type'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'application/json'</span><span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = requests.</span><span style="color:#dcdcaa">request</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"POST"</span><span style="color:#d4d4d4">, url, headers=headers, data=payload)</span><br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(response.text)</span>
    </div>
    <div id="gttp-code-go" style="display:none">
<span style="color:#c586c0">package</span><span style="color:#d4d4d4"> main</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> (</span><span style="color:#ce9178">"fmt"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"strings"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"net/http"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"io/ioutil"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">func</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">() {</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">payload</span><span style="color:#d4d4d4"> := strings.</span><span style="color:#dcdcaa">NewReader</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">`{"clientID":"RM","source":"Twsapi","stopPrice":1300,"limitPrice":1320,"orderQuantity":75,"orderSide":"BUY","exchangeSegment":"NSECM","exchangeInstrumentID":2885}`</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">, _ := http.</span><span style="color:#dcdcaa">NewRequest</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"POST"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder"</span><span style="color:#d4d4d4">, payload)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">.Header.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">); req.Header.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Content-Type"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"application/json"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">res</span><span style="color:#d4d4d4">, _ := (&amp;http.Client{}).</span><span style="color:#dcdcaa">Do</span><span style="color:#d4d4d4">(req); </span><span style="color:#c586c0">defer</span><span style="color:#d4d4d4"> res.Body.</span><span style="color:#dcdcaa">Close</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">b</span><span style="color:#d4d4d4">, _ := ioutil.</span><span style="color:#dcdcaa">ReadAll</span><span style="color:#d4d4d4">(res.Body); fmt.</span><span style="color:#dcdcaa">Println</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">(b))</span><br>
<span style="color:#d4d4d4">}</span>
    </div>
    <div id="gttp-code-nodejs" style="display:none">
<span style="color:#c586c0">const</span><span style="color:#d4d4d4"> axios = </span><span style="color:#dcdcaa">require</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'axios'</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#dcdcaa">axios</span><span style="color:#d4d4d4">({method:</span><span style="color:#ce9178">'post'</span><span style="color:#d4d4d4">,url:</span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder'</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4">:{</span><span style="color:#ce9178">'Authorization'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'xxxxxx'</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">'Content-Type'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'application/json'</span><span style="color:#d4d4d4">},</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">data</span><span style="color:#d4d4d4">:{</span><span style="color:#ce9178">clientID</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'RM'</span><span style="color:#d4d4d4">,source:</span><span style="color:#ce9178">'Twsapi'</span><span style="color:#d4d4d4">,stopPrice:</span><span style="color:#b5cea8">1300</span><span style="color:#d4d4d4">,limitPrice:</span><span style="color:#b5cea8">1320</span><span style="color:#d4d4d4">,orderQuantity:</span><span style="color:#b5cea8">75</span><span style="color:#d4d4d4">,orderSide:</span><span style="color:#ce9178">'BUY'</span><span style="color:#d4d4d4">,exchangeSegment:</span><span style="color:#ce9178">'NSECM'</span><span style="color:#d4d4d4">,exchangeInstrumentID:</span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">}})</span><br>
<span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">then</span><span style="color:#d4d4d4">(r=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(r.data)).</span><span style="color:#dcdcaa">catch</span><span style="color:#d4d4d4">(e=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(e));</span>
    </div>
    <div id="gttp-code-csharp" style="display:none">
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> HttpClient();</span><br>
<span style="color:#d4d4d4">client.DefaultRequestHeaders.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> content = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> StringContent(</span><span style="color:#ce9178">"{\"clientID\":\"RM\",\"source\":\"Twsapi\",\"stopPrice\":1300,\"limitPrice\":1320,\"orderQuantity\":75,\"orderSide\":\"BUY\",\"exchangeSegment\":\"NSECM\",\"exchangeInstrumentID\":2885}"</span><span style="color:#d4d4d4">, System.Text.Encoding.UTF8, </span><span style="color:#ce9178">"application/json"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> response = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> client.</span><span style="color:#dcdcaa">PostAsync</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder"</span><span style="color:#d4d4d4">, content);</span><br>
<span style="color:#d4d4d4">Console.</span><span style="color:#dcdcaa">WriteLine</span><span style="color:#d4d4d4">(</span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> response.Content.</span><span style="color:#dcdcaa">ReadAsStringAsync</span><span style="color:#d4d4d4">());</span>
    </div>
    <div id="gttp-code-java" style="display:none">
<span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> </span><span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#4ec9b0">MediaType</span><span style="color:#d4d4d4"> mt = MediaType.</span><span style="color:#dcdcaa">parse</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"application/json"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#4ec9b0">RequestBody</span><span style="color:#d4d4d4"> body = RequestBody.</span><span style="color:#dcdcaa">create</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"{\"clientID\":\"RM\",\"source\":\"Twsapi\",\"stopPrice\":1300,\"limitPrice\":1320,\"orderQuantity\":75,\"orderSide\":\"BUY\",\"exchangeSegment\":\"NSECM\",\"exchangeInstrumentID\":2885}"</span><span style="color:#d4d4d4">, mt);</span><br>
<span style="color:#4ec9b0">Request</span><span style="color:#d4d4d4"> request = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> Request.</span><span style="color:#4ec9b0">Builder</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">url</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">post</span><span style="color:#d4d4d4">(body).</span><span style="color:#dcdcaa">addHeader</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">build</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#d4d4d4">System.out.</span><span style="color:#dcdcaa">println</span><span style="color:#d4d4d4">(client.</span><span style="color:#dcdcaa">newCall</span><span style="color:#d4d4d4">(request).</span><span style="color:#dcdcaa">execute</span><span style="color:#d4d4d4">().body().</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">());</span>
    </div>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=gttp-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('gttp-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="gttp-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('gttp-ce-box');var btn=document.getElementById('gttp-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="gttp-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

---

<h2 id="modify-gtt" style="color:#1e293b;font-weight:700;margin:28px 0 10px">Modify GTT Order</h2>
<p style="color:#6b7280;font-size:13px;margin:-4px 0 16px">Allows modification of an open existing GTT order by updating trigger price or order parameters.</p>

<div class="aec-card">
  <div class="aec-top">
    <span class="aec-label">ENDPOINT</span>
    <span class="aec-badge-post" style="background:#eff6ff;color:#1d4ed8;border:1.5px solid #bfdbfe">PUT</span>
  </div>
  <div class="aec-url-row">
    <span class="aec-base">https://xts.rmoneyindia.co.in:3000</span><span class="aec-path">/1interactive/orders/gttorder</span>
  </div>
  <div class="aec-footer">
    <span class="aec-auth">Requires: valid <code>Authorization</code> token</span>
    <button class="aec-copy-btn" onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder');this.textContent='✔ Copied';setTimeout(()=>this.textContent='Copy URL',2000)">Copy URL</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Request Body Parameters</h3>

<table class="api-table">
  <thead>
    <tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">clientID</span></td><td>ClientID</td><td><strong>Y</strong></td><td>Unique client identification code</td></tr>
    <tr><td><span class="enum-badge">orderSide</span></td><td>OrderSide</td><td><strong>Y</strong></td><td>BUY/SELL instruction for the order</td></tr>
    <tr><td><span class="enum-badge">orderSessionType</span></td><td>OrderSessionType</td><td><strong>Y</strong></td><td>Session type (e.g., GTT, DAY, IOC)</td></tr>
    <tr><td><span class="enum-badge">exchangeInstrumentID</span></td><td>ExchangeInstrumentID</td><td><strong>Y</strong></td><td>Unique exchange token / scrip ID</td></tr>
    <tr><td><span class="enum-badge">exchangeSegment</span></td><td>ExchangeSegment</td><td><strong>Y</strong></td><td>Exchange segment (e.g., NSECM, NSEFO)</td></tr>
    <tr><td><span class="enum-badge">appOrderID</span></td><td>AppOrderID</td><td><strong>Y</strong></td><td>Unique RMS-generated order ID</td></tr>
    <tr><td><span class="enum-badge">orderCategoryType</span></td><td>OrderCategoryType</td><td><strong>Y</strong></td><td>Order category (NORMAL, STOPLOSS, etc.)</td></tr>
    <tr><td><span class="enum-badge">modifiedLimitPrice</span></td><td>Price</td><td>N</td><td>New modified limit price</td></tr>
    <tr><td><span class="enum-badge">modifiedOrderType</span></td><td>OrderType</td><td>N</td><td>Modified order type (Market, Limit, SL, SLM)</td></tr>
    <tr><td><span class="enum-badge">modifiedProductType</span></td><td>ProductType</td><td>N</td><td>Modified product type (e.g., NRML, CNC, MIS)</td></tr>
    <tr><td><span class="enum-badge">modifiedOrderQuantity</span></td><td>OrderQuantity</td><td>N</td><td>Modified quantity for the order</td></tr>
    <tr><td><span class="enum-badge">source</span></td><td>Source</td><td>N</td><td>Source of the request (e.g., TWSAPI, WEB)</td></tr>
    <tr><td><span class="enum-badge">modifiedStopPrice</span></td><td>Price</td><td>N</td><td>Modified stop-loss trigger price</td></tr>
    <tr><td><span class="enum-badge">participationCode</span></td><td>ParticipationCode</td><td>N</td><td>Order participation code (NONE / DARK / etc.)</td></tr>
  </tbody>
</table>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Request Body JSON</h3>

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:260px;overflow:hidden;transition:max-height .4s ease" id="gttm-req-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"clientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderSessionType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"GTT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"appOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1343000794"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"modifiedLimitPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1360</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderCategoryType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NORMAL"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"modifiedOrderType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Limit"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"modifiedProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NRML"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"modifiedOrderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">75</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"source"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Twsapi"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"modifiedStopPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1310</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"participationCode"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NONE"</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('gttm-req-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('gttm-req-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="gttm-req-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('gttm-req-box');var btn=document.getElementById('gttm-req-show');if(b.style.maxHeight==='none'){b.style.maxHeight='260px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="gttm-req-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Response Body JSON</h3>

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8" id="gttm-res-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-modifygttOrder-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Modify GTT order request send."</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('gttm-res-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('gttm-res-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="gttm-res-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Code Examples</h3>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="gttModShowCode('curl',this)" id="gttm-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="gttModShowCode('python',this)" id="gttm-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="gttm-ce-box">
    <div id="gttm-code-curl">
<span style="color:#d4d4d4">curl --location --request PUT </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178">'{"clientID":"RM","orderSide":"BUY","orderSessionType":"GTT","exchangeInstrumentID":2885,"exchangeSegment":"NSECM","appOrderID":"1343000794","modifiedLimitPrice":1360,"orderCategoryType":"NORMAL","modifiedOrderType":"Limit","modifiedProductType":"NRML","modifiedOrderQuantity":75,"source":"Twsapi","modifiedStopPrice":1310,"participationCode":"NONE"}'</span>
    </div>
    <div id="gttm-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests, json</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder"</span><br>
<span style="color:#9cdcfe">payload</span><span style="color:#d4d4d4"> = json.</span><span style="color:#dcdcaa">dumps</span><span style="color:#d4d4d4">({</span><span style="color:#ce9178">"clientID"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"RM"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"orderSide"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"orderSessionType"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"GTT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"exchangeInstrumentID"</span><span style="color:#d4d4d4">:</span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"exchangeSegment"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"appOrderID"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"1343000794"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"modifiedLimitPrice"</span><span style="color:#d4d4d4">:</span><span style="color:#b5cea8">1360</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"orderCategoryType"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"NORMAL"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"modifiedOrderType"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"Limit"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"modifiedProductType"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"NRML"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"modifiedOrderQuantity"</span><span style="color:#d4d4d4">:</span><span style="color:#b5cea8">75</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"source"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"Twsapi"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"modifiedStopPrice"</span><span style="color:#d4d4d4">:</span><span style="color:#b5cea8">1310</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"participationCode"</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">"NONE"</span><span style="color:#d4d4d4">})</span><br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><span style="color:#ce9178">'Authorization'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'xxxxxx'</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">'Content-Type'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'application/json'</span><span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = requests.</span><span style="color:#dcdcaa">request</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"PUT"</span><span style="color:#d4d4d4">, url, headers=headers, data=payload)</span><br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(response.text)</span>
    </div>
    <div id="gttm-code-go" style="display:none">
<span style="color:#c586c0">package</span><span style="color:#d4d4d4"> main</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> (</span><span style="color:#ce9178">"fmt"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"strings"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"net/http"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"io/ioutil"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">func</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">() {</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">payload</span><span style="color:#d4d4d4"> := strings.</span><span style="color:#dcdcaa">NewReader</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">`{"clientID":"RM","orderSide":"BUY","orderSessionType":"GTT","exchangeInstrumentID":2885,"exchangeSegment":"NSECM","appOrderID":"1343000794","modifiedLimitPrice":1360,"orderCategoryType":"NORMAL","modifiedOrderType":"Limit","modifiedProductType":"NRML","modifiedOrderQuantity":75,"source":"Twsapi","modifiedStopPrice":1310,"participationCode":"NONE"}`</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">, _ := http.</span><span style="color:#dcdcaa">NewRequest</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"PUT"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder"</span><span style="color:#d4d4d4">, payload)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">.Header.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">); req.Header.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Content-Type"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"application/json"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">res</span><span style="color:#d4d4d4">, _ := (&amp;http.Client{}).</span><span style="color:#dcdcaa">Do</span><span style="color:#d4d4d4">(req); </span><span style="color:#c586c0">defer</span><span style="color:#d4d4d4"> res.Body.</span><span style="color:#dcdcaa">Close</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">b</span><span style="color:#d4d4d4">, _ := ioutil.</span><span style="color:#dcdcaa">ReadAll</span><span style="color:#d4d4d4">(res.Body); fmt.</span><span style="color:#dcdcaa">Println</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">(b))<br>}</span>
    </div>
    <div id="gttm-code-nodejs" style="display:none">
<span style="color:#c586c0">const</span><span style="color:#d4d4d4"> axios = </span><span style="color:#dcdcaa">require</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'axios'</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#dcdcaa">axios</span><span style="color:#d4d4d4">({method:</span><span style="color:#ce9178">'put'</span><span style="color:#d4d4d4">,url:</span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder'</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4">:{</span><span style="color:#ce9178">'Authorization'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'xxxxxx'</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">'Content-Type'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'application/json'</span><span style="color:#d4d4d4">},</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">data</span><span style="color:#d4d4d4">:{clientID:</span><span style="color:#ce9178">'RM'</span><span style="color:#d4d4d4">,orderSide:</span><span style="color:#ce9178">'BUY'</span><span style="color:#d4d4d4">,orderSessionType:</span><span style="color:#ce9178">'GTT'</span><span style="color:#d4d4d4">,exchangeInstrumentID:</span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">,exchangeSegment:</span><span style="color:#ce9178">'NSECM'</span><span style="color:#d4d4d4">,appOrderID:</span><span style="color:#ce9178">'1343000794'</span><span style="color:#d4d4d4">,modifiedLimitPrice:</span><span style="color:#b5cea8">1360</span><span style="color:#d4d4d4">,orderCategoryType:</span><span style="color:#ce9178">'NORMAL'</span><span style="color:#d4d4d4">,modifiedOrderType:</span><span style="color:#ce9178">'Limit'</span><span style="color:#d4d4d4">,modifiedProductType:</span><span style="color:#ce9178">'NRML'</span><span style="color:#d4d4d4">,modifiedOrderQuantity:</span><span style="color:#b5cea8">75</span><span style="color:#d4d4d4">,source:</span><span style="color:#ce9178">'Twsapi'</span><span style="color:#d4d4d4">,modifiedStopPrice:</span><span style="color:#b5cea8">1310</span><span style="color:#d4d4d4">,participationCode:</span><span style="color:#ce9178">'NONE'</span><span style="color:#d4d4d4">}})</span><br>
<span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">then</span><span style="color:#d4d4d4">(r=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(r.data)).</span><span style="color:#dcdcaa">catch</span><span style="color:#d4d4d4">(e=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(e));</span>
    </div>
    <div id="gttm-code-csharp" style="display:none">
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> HttpClient();</span><br>
<span style="color:#d4d4d4">client.DefaultRequestHeaders.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> content = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> StringContent(</span><span style="color:#ce9178">"{\"clientID\":\"RM\",\"orderSide\":\"BUY\",\"orderSessionType\":\"GTT\",\"exchangeInstrumentID\":2885,\"exchangeSegment\":\"NSECM\",\"appOrderID\":\"1343000794\",\"modifiedLimitPrice\":1360,\"orderCategoryType\":\"NORMAL\",\"modifiedOrderType\":\"Limit\",\"modifiedProductType\":\"NRML\",\"modifiedOrderQuantity\":75,\"source\":\"Twsapi\",\"modifiedStopPrice\":1310,\"participationCode\":\"NONE\"}"</span><span style="color:#d4d4d4">, System.Text.Encoding.UTF8, </span><span style="color:#ce9178">"application/json"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> response = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> client.</span><span style="color:#dcdcaa">PutAsync</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder"</span><span style="color:#d4d4d4">, content);</span><br>
<span style="color:#d4d4d4">Console.</span><span style="color:#dcdcaa">WriteLine</span><span style="color:#d4d4d4">(</span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> response.Content.</span><span style="color:#dcdcaa">ReadAsStringAsync</span><span style="color:#d4d4d4">());</span>
    </div>
    <div id="gttm-code-java" style="display:none">
<span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> </span><span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#4ec9b0">MediaType</span><span style="color:#d4d4d4"> mt = MediaType.</span><span style="color:#dcdcaa">parse</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"application/json"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#4ec9b0">RequestBody</span><span style="color:#d4d4d4"> body = RequestBody.</span><span style="color:#dcdcaa">create</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"{\"clientID\":\"RM\",\"orderSide\":\"BUY\",\"orderSessionType\":\"GTT\",\"exchangeInstrumentID\":2885,\"exchangeSegment\":\"NSECM\",\"appOrderID\":\"1343000794\",\"modifiedLimitPrice\":1360,\"orderCategoryType\":\"NORMAL\",\"modifiedOrderType\":\"Limit\",\"modifiedProductType\":\"NRML\",\"modifiedOrderQuantity\":75,\"source\":\"Twsapi\",\"modifiedStopPrice\":1310,\"participationCode\":\"NONE\"}"</span><span style="color:#d4d4d4">, mt);</span><br>
<span style="color:#4ec9b0">Request</span><span style="color:#d4d4d4"> req = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> Request.</span><span style="color:#4ec9b0">Builder</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">url</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/1interactive/orders/gttorder"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">put</span><span style="color:#d4d4d4">(body).</span><span style="color:#dcdcaa">addHeader</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">build</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#d4d4d4">System.out.</span><span style="color:#dcdcaa">println</span><span style="color:#d4d4d4">(client.</span><span style="color:#dcdcaa">newCall</span><span style="color:#d4d4d4">(req).</span><span style="color:#dcdcaa">execute</span><span style="color:#d4d4d4">().body().</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">());</span>
    </div>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=gttm-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('gttm-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="gttm-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('gttm-ce-box');var btn=document.getElementById('gttm-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="gttm-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

---

<h2 id="cancel-gtt" style="color:#1e293b;font-weight:700;margin:28px 0 10px">Cancel GTT Order</h2>
<p style="color:#6b7280;font-size:13px;margin:-4px 0 16px">Cancels an active GTT order, preventing it from being triggered even if the trigger condition is met in the future.</p>

<div class="aec-card">
  <div class="aec-top">
    <span class="aec-label">ENDPOINT</span>
    <span class="aec-badge-post" style="background:#fff1f2;color:#b91c1c;border:1.5px solid #fca5a5">DELETE</span>
  </div>
  <div class="aec-url-row">
    <span class="aec-base">https://xts.rmoneyindia.co.in:3000</span><span class="aec-path">/interactive/orders/gttorder</span>
  </div>
  <div class="aec-footer">
    <span class="aec-auth">Requires: valid <code>Authorization</code> token</span>
    <button class="aec-copy-btn" onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder');this.textContent='✔ Copied';setTimeout(()=>this.textContent='Copy URL',2000)">Copy URL</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Request Parameters</h3>

<table class="api-table">
  <thead>
    <tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">clientID</span></td><td>ClientID</td><td><strong>Y</strong></td><td>Client ID — Mandatory</td></tr>
    <tr><td><span class="enum-badge">appOrderID</span></td><td>AppOrderID</td><td><strong>Y</strong></td><td>Unique RMS-generated order ID of the GTT order to cancel</td></tr>
    <tr><td><span class="enum-badge">exchangeSegment</span></td><td>ExchangeSegment</td><td><strong>Y</strong></td><td>Exchange segment (e.g., NSECM)</td></tr>
    <tr><td><span class="enum-badge">exchangeInstrumentID</span></td><td>ExchangeInstrumentID</td><td><strong>Y</strong></td><td>Unique exchange token / scrip ID</td></tr>
  </tbody>
</table>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Response Body Parameters</h3>

<table class="api-table">
  <thead>
    <tr><th>Parameter Name</th><th>Type</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">LoginID</span></td><td>LoginID</td><td>User login ID</td></tr>
    <tr><td><span class="enum-badge">ClientID</span></td><td>ClientID</td><td>Client code associated with the order</td></tr>
    <tr><td><span class="enum-badge">AppOrderID</span></td><td>AppOrderID</td><td>Unique application order ID</td></tr>
    <tr><td><span class="enum-badge">OrderReferenceID</span></td><td>OrderReferenceID</td><td>Reference ID sent during order placement</td></tr>
    <tr><td><span class="enum-badge">GeneratedBy</span></td><td>GeneratedBy</td><td>Source that generated the order (TWSAPI, Web, etc.)</td></tr>
    <tr><td><span class="enum-badge">ExchangeOrderID</span></td><td>ExchangeOrderID</td><td>Exchange generated order ID (if available)</td></tr>
    <tr><td><span class="enum-badge">OrderCategoryType</span></td><td>OrderCategoryType</td><td>NORMAL / SYSTEM / OCD / GTT etc.</td></tr>
    <tr><td><span class="enum-badge">ExchangeSegment</span></td><td>ExchangeSegment</td><td>Exchange segment (e.g., NSECM)</td></tr>
    <tr><td><span class="enum-badge">ExchangeInstrumentID</span></td><td>ExchangeInstrumentID</td><td>Token ID of the trading instrument</td></tr>
    <tr><td><span class="enum-badge">OrderSide</span></td><td>OrderSide</td><td>BUY or SELL</td></tr>
    <tr><td><span class="enum-badge">OrderType</span></td><td>OrderType</td><td>Market / Limit / SL / SL-M</td></tr>
    <tr><td><span class="enum-badge">ProductType</span></td><td>ProductType</td><td>CNC / MIS / NRML</td></tr>
    <tr><td><span class="enum-badge">TimeInForce</span></td><td>TimeInForce</td><td>DAY / IOC / None</td></tr>
    <tr><td><span class="enum-badge">OrderPrice</span></td><td>Price</td><td>Price entered for the order</td></tr>
    <tr><td><span class="enum-badge">OrderQuantity</span></td><td>Quantity</td><td>Total order quantity</td></tr>
    <tr><td><span class="enum-badge">OrderStopPrice</span></td><td>StopPrice</td><td>Stop-loss trigger price</td></tr>
    <tr><td><span class="enum-badge">OrderStatus</span></td><td>OrderStatus</td><td>Current status: New / Filled / Cancelled / Rejected</td></tr>
    <tr><td><span class="enum-badge">OrderAverageTradedPrice</span></td><td>Price</td><td>Average price at which quantity is traded</td></tr>
    <tr><td><span class="enum-badge">LeavesQuantity</span></td><td>LeavesQuantity</td><td>Remaining quantity not yet executed</td></tr>
    <tr><td><span class="enum-badge">CumulativeQuantity</span></td><td>CumulativeQuantity</td><td>Total executed quantity</td></tr>
    <tr><td><span class="enum-badge">OrderDisclosedQuantity</span></td><td>DisclosedQuantity</td><td>Quantity disclosed to the market</td></tr>
    <tr><td><span class="enum-badge">OrderGeneratedDateTime</span></td><td>DateTime</td><td>Order generation timestamp</td></tr>
    <tr><td><span class="enum-badge">ExchangeTransactTime</span></td><td>DateTime</td><td>Exchange transaction timestamp</td></tr>
    <tr><td><span class="enum-badge">TradingSymbol</span></td><td>TradingSymbol</td><td>Symbol name (e.g. RELIANCE)</td></tr>
    <tr><td><span class="enum-badge">LastUpdateDateTime</span></td><td>DateTime</td><td>Last updated timestamp</td></tr>
    <tr><td><span class="enum-badge">OrderExpiryDate</span></td><td>DateTime</td><td>Order validity expiry date</td></tr>
    <tr><td><span class="enum-badge">CancelRejectReason</span></td><td>Reason</td><td>Reason for cancellation or rejection</td></tr>
    <tr><td><span class="enum-badge">OrderUniqueIdentifier</span></td><td>OrderUniqueIdentifier</td><td>Unique identifier sent in request</td></tr>
    <tr><td><span class="enum-badge">OrderLegStatus</span></td><td>OrderLegStatus</td><td>SingleOrderLeg / SpreadFirstLeg / SpreadSecondLeg</td></tr>
    <tr><td><span class="enum-badge">BoLegDetails</span></td><td>BoLegDetails</td><td>BO leg details (if applicable)</td></tr>
    <tr><td><span class="enum-badge">IsSpread</span></td><td>Boolean</td><td>Whether the order is a spread order</td></tr>
    <tr><td><span class="enum-badge">BoEntryOrderId</span></td><td>BoEntryOrderId</td><td>BO Entry order reference</td></tr>
    <tr><td><span class="enum-badge">ApiOrderSource</span></td><td>ApiOrderSource</td><td>API source (WEB / TWSAPI / etc.)</td></tr>
    <tr><td><span class="enum-badge">MessageCode</span></td><td>MessageCode</td><td>System message code for order update</td></tr>
    <tr><td><span class="enum-badge">MessageVersion</span></td><td>MessageVersion</td><td>Version of the message format</td></tr>
    <tr><td><span class="enum-badge">TokenID</span></td><td>TokenID</td><td>Internal token ID</td></tr>
    <tr><td><span class="enum-badge">ApplicationType</span></td><td>ApplicationType</td><td>Application type flag</td></tr>
    <tr><td><span class="enum-badge">SequenceNumber</span></td><td>SequenceNumber</td><td>Order sequence number</td></tr>
  </tbody>
</table>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Response Body JSON</h3>

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:280px;overflow:hidden;transition:max-height .4s ease" id="gttc-res-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LoginID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ClientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"AppOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1343000794</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderReferenceID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"GeneratedBy"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"TWSAPI"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderCategoryType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NORMAL"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Limit"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"CNC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TimeInForce"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"None"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1350</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">75</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderStopPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1300</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"New"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderAverageTradedPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LeavesQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">75</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"CumulativeQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderDisclosedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderGeneratedDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"26-11-2025 14:00:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeTransactTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"26-11-2025 14:00:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TradingSymbol"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RELIANCE"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LastUpdateDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"26-11-2025 14:00:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderExpiryDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"26-11-2026 14:00:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"CancelRejectReason"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderLegStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SingleOrderLeg"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"BoLegDetails"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"IsSpread"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"false"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"BoEntryOrderId"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ApiOrderSource"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">9004</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageVersion"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">4</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TokenID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ApplicationType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"SequenceNumber"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('gttc-res-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('gttc-res-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="gttc-res-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('gttc-res-box');var btn=document.getElementById('gttc-res-show');if(b.style.maxHeight==='none'){b.style.maxHeight='280px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="gttc-res-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Code Examples</h3>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="gttCanShowCode('curl',this)" id="gttc-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="gttCanShowCode('python',this)" id="gttc-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="gttc-ce-box">
    <div id="gttc-code-curl">
<span style="color:#d4d4d4">curl --location --request DELETE </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span>
    </div>
    <div id="gttc-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder"</span><br>
<span style="color:#9cdcfe">params</span><span style="color:#d4d4d4"> = {</span><span style="color:#ce9178">'clientID'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'RM'</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">'appOrderID'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'1343000794'</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">'exchangeSegment'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'NSECM'</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">'exchangeInstrumentID'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'2885'</span><span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><span style="color:#ce9178">'Authorization'</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">'xxxxxx'</span><span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = requests.</span><span style="color:#dcdcaa">delete</span><span style="color:#d4d4d4">(url, headers=headers, params=params)</span><br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(response.text)</span>
    </div>
    <div id="gttc-code-go" style="display:none">
<span style="color:#c586c0">package</span><span style="color:#d4d4d4"> main</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> (</span><span style="color:#ce9178">"fmt"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"net/http"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"io/ioutil"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">func</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">() {</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">, _ := http.</span><span style="color:#dcdcaa">NewRequest</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"DELETE"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder"</span><span style="color:#d4d4d4">, </span><span style="color:#569cd6">nil</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">.Header.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">res</span><span style="color:#d4d4d4">, _ := (&amp;http.Client{}).</span><span style="color:#dcdcaa">Do</span><span style="color:#d4d4d4">(req); </span><span style="color:#c586c0">defer</span><span style="color:#d4d4d4"> res.Body.</span><span style="color:#dcdcaa">Close</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">b</span><span style="color:#d4d4d4">, _ := ioutil.</span><span style="color:#dcdcaa">ReadAll</span><span style="color:#d4d4d4">(res.Body); fmt.</span><span style="color:#dcdcaa">Println</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">(b))<br>}</span>
    </div>
    <div id="gttc-code-nodejs" style="display:none">
<span style="color:#c586c0">const</span><span style="color:#d4d4d4"> axios = </span><span style="color:#dcdcaa">require</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'axios'</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#dcdcaa">axios</span><span style="color:#d4d4d4">({method:</span><span style="color:#ce9178">'delete'</span><span style="color:#d4d4d4">,url:</span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder'</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4">:{</span><span style="color:#ce9178">'Authorization'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'xxxxxx'</span><span style="color:#d4d4d4">},</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">params</span><span style="color:#d4d4d4">:{clientID:</span><span style="color:#ce9178">'RM'</span><span style="color:#d4d4d4">,appOrderID:</span><span style="color:#ce9178">'1343000794'</span><span style="color:#d4d4d4">,exchangeSegment:</span><span style="color:#ce9178">'NSECM'</span><span style="color:#d4d4d4">,exchangeInstrumentID:</span><span style="color:#ce9178">'2885'</span><span style="color:#d4d4d4">}})</span><br>
<span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">then</span><span style="color:#d4d4d4">(r=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(r.data)).</span><span style="color:#dcdcaa">catch</span><span style="color:#d4d4d4">(e=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(e));</span>
    </div>
    <div id="gttc-code-csharp" style="display:none">
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> HttpClient();</span><br>
<span style="color:#d4d4d4">client.DefaultRequestHeaders.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> response = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> client.</span><span style="color:#dcdcaa">DeleteAsync</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder?clientID=RM&amp;appOrderID=1343000794&amp;exchangeSegment=NSECM&amp;exchangeInstrumentID=2885"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#d4d4d4">Console.</span><span style="color:#dcdcaa">WriteLine</span><span style="color:#d4d4d4">(</span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> response.Content.</span><span style="color:#dcdcaa">ReadAsStringAsync</span><span style="color:#d4d4d4">());</span>
    </div>
    <div id="gttc-code-java" style="display:none">
<span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> </span><span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#4ec9b0">Request</span><span style="color:#d4d4d4"> req = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> Request.</span><span style="color:#4ec9b0">Builder</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">url</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder?clientID=RM&amp;appOrderID=1343000794&amp;exchangeSegment=NSECM&amp;exchangeInstrumentID=2885"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">delete</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">addHeader</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">build</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#d4d4d4">System.out.</span><span style="color:#dcdcaa">println</span><span style="color:#d4d4d4">(client.</span><span style="color:#dcdcaa">newCall</span><span style="color:#d4d4d4">(req).</span><span style="color:#dcdcaa">execute</span><span style="color:#d4d4d4">().body().</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">());</span>
    </div>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=gttc-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('gttc-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="gttc-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('gttc-ce-box');var btn=document.getElementById('gttc-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="gttc-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<script>
function gttPlaceShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('gttp-code-' + l).style.display = 'none';
    document.getElementById('gttp-tab-' + l).style.background = '#374151';
  });
  document.getElementById('gttp-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
function gttModShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('gttm-code-' + l).style.display = 'none';
    document.getElementById('gttm-tab-' + l).style.background = '#374151';
  });
  document.getElementById('gttm-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
function gttCanShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('gttc-code-' + l).style.display = 'none';
    document.getElementById('gttc-tab-' + l).style.background = '#374151';
  });
  document.getElementById('gttc-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>
