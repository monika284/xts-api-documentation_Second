<div class="po-wrap">

<!-- ═══════════════════ HERO ═══════════════════ -->
<div class="auth-hero">
  <h1 id="Place-Order" class="auth-hero-title">Place Order API</h1>
  <p class="auth-hero-sub">Send a <strong>Buy or Sell</strong> request to the stock exchange through the broker. Specify what to trade, how much, at what price, and what type of order — the exchange does the rest.</p>
  
</div>
<h2 id="endpoint" class="auth-section-title">Endpoint</h2>

<div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px;background:#f9fafb;display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:8px 0 24px">
  <span style="background:#fdf4ff;border:1.5px solid #e9d5ff;color:#7c3aed;font-weight:700;font-size:12px;padding:4px 12px;border-radius:6px;flex-shrink:0">POST</span>
  <code style="flex:1;font-size:13px;color:#1d4ed8;background:transparent;word-break:break-all">https://xts.rmoneyindia.co.in:3000/interactive/orders</code>
  <button onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/1interactive/orders').then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:7px;padding:6px 16px;font-size:13px;font-weight:600;cursor:pointer;flex-shrink:0">Copy</button>
</div>

<h2 id="parameters" class="auth-section-title">Request Body Parameters</h2>

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
    <tr><td><span class="enum-badge">exchangeSegment</span></td><td>ExchangeSegment</td><td>Y</td><td>ExchangeSegment</td></tr>
    <tr><td><span class="enum-badge">exchangeInstrumentID</span></td><td>ExchangeInstrumentID</td><td>Y</td><td>Exchange Scrip code or Symbol Token is unique identifier</td></tr>
    <tr><td><span class="enum-badge">productType</span></td><td>ProductType</td><td>Y</td><td>ProductType</td></tr>
    <tr><td><span class="enum-badge">orderType</span></td><td>OrderType</td><td>Y</td><td>OrderType</td></tr>
    <tr><td><span class="enum-badge">orderSide</span></td><td>OrderSide</td><td>Y</td><td>OrderSide</td></tr>
    <tr><td><span class="enum-badge">timeInForce</span></td><td>TimeInForce</td><td>Y</td><td>TimeInForce</td></tr>
    <tr><td><span class="enum-badge">disclosedQuantity</span></td><td>OrderQuantity</td><td>Y</td><td>Quantity to disclose (for equity)</td></tr>
    <tr><td><span class="enum-badge">orderQuantity</span></td><td>OrderQuantity</td><td>Y</td><td>Quantity to transact. In terms of Lots</td></tr>
    <tr><td><span class="enum-badge">limitPrice</span></td><td>Price</td><td>Y</td><td>The price to execute the order at</td></tr>
    <tr><td><span class="enum-badge">stopPrice</span></td><td>Price</td><td>Y</td><td>The price at which an order should be triggered (SL, SL-M)</td></tr>
    <tr><td><span class="enum-badge">orderUniqueIdentifier</span></td><td>OrderUniqueIdentifier</td><td>N</td><td>Echo back to identify order</td></tr>
    <tr><td><span class="enum-badge">clientID</span></td><td>ClientID</td><td>N</td><td>ClientID Mandatory in case of Dealer</td></tr>
    <tr><td><span class="enum-badge">apiOrderSource</span></td><td>ApiOrderSource</td><td>N</td><td>API Order Source can be a third party application name which you want to give to your order, which will be used to track your order with a particular source.</td></tr>
  </tbody>
</table>

<h2 id="req-body-json" class="auth-section-title">Request Body JSON</h2>

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8" id="po-req-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">3045</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"productType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NRML"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"LIMIT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"timeInForce"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"DAY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"disclosedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">15</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"limitPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">254.55</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"stopPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"123abc"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"clientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"apiOrderSource"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"WEB"</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('po-req-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('po-req-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="po-req-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<h2 id="response-params" class="auth-section-title">Response Body Parameters</h2>

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

<h2 id="response" class="auth-section-title">Response Body JSON</h2>

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8" id="po-res-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-orders-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Request sent"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AppOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2190766863</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"123abc"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ClientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM1"</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('po-res-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('po-res-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="po-res-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<h2 id="code-examples" class="auth-section-title">Code Examples</h2>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="poShowCode('curl',this)" id="po-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="poShowCode('python',this)" id="po-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>

  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8">

    <div id="po-code-curl">
<span style="color:#d4d4d4">curl --location </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxxxxxx'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178">'{
            "exchangeSegment": exchangeSegment,
            "exchangeInstrumentID": exchangeInstrumentID,
            "productType": productType,
            "orderType": orderType,
            "orderSide": orderSide,
            "timeInForce": timeInForce,
            "disclosedQuantity": disclosedQuantity,
            "orderQuantity": orderQuantity,
            "limitPrice": limitPrice,
            "stopPrice": stopPrice,
            "orderUniqueIdentifier": orderUniqueIdentifier
        }'</span>
    </div>

    <div id="po-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders"</span><br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"xxxxxxxxxx"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Content-Type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"application/json"</span><br>
<span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">payload</span><span style="color:#d4d4d4"> = {</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"productType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"MIS"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"LIMIT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"timeInForce"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"DAY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"disclosedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">15</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"limitPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">250.55</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"stopPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">245.00</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"123abc"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"clientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"apiOrderSource"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"WEB"</span><br>
<span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = </span><span style="color:#9cdcfe">await</span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_post</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">'order.place'</span><span style="color:#d4d4d4">, json</span><span style="color:#9cdcfe">.dumps</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">params</span><span style="color:#d4d4d4">)</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#dcdcaa">return </span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_handle_response </span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">response</span><span style="color:#d4d4d4">,</span><span style="color:#dcdcaa">"Place Order"</span><span style="color:#d4d4d4">)</span>
    </div>

    <div style="display:flex;justify-content:flex-end;margin-top:14px">
      <button onclick="(function(){var active=document.querySelector('[id^=po-code-]:not([style*=none])');if(!active)return;navigator.clipboard.writeText(active.innerText).then(function(){var b=document.getElementById('po-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="po-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    </div>
  </div>
</div>

<script>
function poShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('po-code-' + l).style.display = 'none';
    document.getElementById('po-tab-' + l).style.background = '#374151';
  });
  document.getElementById('po-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>

<!-- ═══════════════════ BEGINNER ═══════════════════ -->
<!-- ─── Basic Workflow ─── -->
<h2 id="basic-workflow" class="auth-section-title">Basic Workflow</h2>
<div class="po-flow">
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">User</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Place Order API</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Broker Server</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Stock Exchange</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step po-flow-step--success"><div class="po-flow-icon"></div><div class="po-flow-label">Order Confirmation</div></div>
</div>
<!-- ═══════════════════ INTERMEDIATE ═══════════════════ -->
<h2 id="order-sides" class="auth-section-title">Order Sides</h2>
<div class="po-side-grid">
  <div class="po-side-card po-side-buy">
    <div class="po-side-title">BUY</div>
    <p>Purchase shares from the market.</p>
    <div class="po-side-example">BUY 10 shares of RELIANCE</div>
    <p class="po-side-note">Money decreases → Shares added to holdings</p>
  </div>
  <div class="po-side-card po-side-sell">
    <div class="po-side-title">SELL</div>
    <p>Sell shares back to the market.</p>
    <div class="po-side-example">SELL 5 shares of RELIANCE</div>
    <p class="po-side-note">Shares decrease → Money credited to account</p>
  </div>
</div>

<h2 id="order-types" class="auth-section-title">Order Types</h2>
<div class="po-type-grid">
  <div class="po-type-card">
    <div class="po-type-badge">MARKET</div>
    <p>Executes <b>immediately</b> at current market price. Price may vary slightly due to market fluctuation.</p>
    <div class="po-type-use">Use when: Speed matters more than exact price</div>
    <div class="po-type-example">BUY 10 RELIANCE (Market) → executed at ₹2849.80 or ₹2850.10</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">LIMIT</div>
    <p>Executes <b>only at your specified price</b>. Order waits until price is reached.</p>
    <div class="po-type-use">Use when: Price matters more than speed</div>
    <div class="po-type-example">BUY RELIANCE @ ₹2840 → waits until price drops to ₹2840</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">STOP LOSS</div>
    <p>Activates a sell order automatically when price drops to your <b>trigger price</b>. Limits your loss.</p>
    <div class="po-type-use">Use when: Protecting against sudden price drops</div>
    <div class="po-type-example">Bought at ₹2850 → Trigger ₹2800 → auto-sells if price falls</div>
  </div>
</div>

<h2 id="product-types" class="auth-section-title">Product Types</h2>
<div class="po-prod-grid">
  <div class="po-prod-card">
    <div class="po-prod-name">MIS</div>
    <div class="po-prod-full">Margin Intraday Square-off</div>
    <p>Position must be closed on the <b>same day</b>.</p>
    <div class="po-prod-ex">Buy at 10 AM → Sell before market closes</div>
  </div>
  <div class="po-prod-card">
    <div class="po-prod-name">CNC</div>
    <div class="po-prod-full">Cash and Carry</div>
    <p>Delivery trading. Shares stay in your <b>Demat account</b>.</p>
    <div class="po-prod-ex">Buy today → Hold for months or years</div>
  </div>
  <div class="po-prod-card">
    <div class="po-prod-name">NRML</div>
    <div class="po-prod-full">Normal</div>
    <p>Carry forward position. Used mostly in <b>Futures & Options</b>.</p>
    <div class="po-prod-ex">F&O positions carried overnight</div>
  </div>
</div>

<h2 id="time-in-force" class="auth-section-title">Time In Force</h2>
<div class="po-tif-grid">
  <div class="po-tif-card">
    <div class="po-tif-badge">DAY</div>
    <p>Order remains valid for the <b>current trading day</b>. Cancelled at end of session if unfilled.</p>
  </div>
  <div class="po-tif-card">
    <div class="po-tif-badge">IOC</div>
    <p><b>Immediate Or Cancel.</b> Execute instantly. Any unexecuted portion is cancelled immediately.</p>
  </div>
</div>

<!-- ═══════════════════ ADVANCED ═══════════════════ -->

<h2 id="order-states" class="auth-section-title">Order Life Cycle</h2>
<div class="po-lifecycle-grid">
  <div class="po-lc-col">
    <div class="po-lc-title">Normal Flow</div>
    <div class="po-lc-steps">
      <div class="po-lc-step po-lc-new">New</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-open">Open</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-partial">Partially Filled</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-filled">Filled</div>
    </div>
  </div>
  <div class="po-lc-col">
    <div class="po-lc-title">Rejected</div>
    <div class="po-lc-steps">
      <div class="po-lc-step po-lc-new">New</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-reject">Rejected</div>
    </div>
  </div>
  <div class="po-lc-col">
    <div class="po-lc-title">Cancelled</div>
    <div class="po-lc-steps">
      <div class="po-lc-step po-lc-new">New</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-cancel">Cancelled</div>
    </div>
  </div>
</div>

<h2 id="advanced-concepts" class="auth-section-title">Advanced Concepts</h2>
<div class="po-adv-grid">
  <div class="po-adv-card">
    <div class="po-adv-title"> Partial Fill</div>
    <p>Place BUY 100 shares → only 60 available → 60 executed, 40 pending.</p>
    <div class="po-adv-status">Status: <b>Partially Filled</b></div>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title"> Slippage</div>
    <p>Expected ₹2850 but executed at ₹2850.30. The ₹0.30 difference is slippage — common with Market orders.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title"> Margin Check</div>
    <p>Before order is sent, broker checks: available funds, margin requirement, risk limits, and user permissions.</p>
  </div>
</div>

<h2 id="complete-flow" class="auth-section-title">Complete Order Flow</h2>
<div class="po-full-flow">
  <div class="po-ff-step"> User</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Place Order API</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Broker Risk Management</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Order Management System (OMS)</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Exchange</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Order Matching Engine</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Trade Execution</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Trade Confirmation</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step po-ff-final"> Portfolio Update</div>
</div>

<!-- ─── Summary ─── -->
<div class="po-summary">
  <strong>In Simple Words:</strong> Place Order API is the bridge between the user and the stock exchange. It receives buy or sell instructions, validates them, sends them to the exchange, and returns the order status back to the user.
</div>

</div>
