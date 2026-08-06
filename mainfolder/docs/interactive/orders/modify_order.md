<h1 id="Modify-Order" class="auth-hero-title">Modify Order API</h1>
  <p class="auth-hero-sub">Change the details of an <strong>existing open order</strong> without canceling and re-placing it. Update quantity, price, product type, or order type on the fly.</p>

<h2 id="endpoint" class="auth-section-title">Endpoint</h2>

<div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px;background:#f9fafb;display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:8px 0 24px">
  <span style="background:#fdf4ff;border:1.5px solid #e9d5ff;color:#7c3aed;font-weight:700;font-size:12px;padding:4px 12px;border-radius:6px;flex-shrink:0">PUT</span>
  <code style="flex:1;font-size:13px;color:#1d4ed8;background:transparent;word-break:break-all">https://xts.rmoneyindia.co.in:3000/interactive/orders</code>
  <button onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/interactive/orders').then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:7px;padding:6px 16px;font-size:13px;font-weight:600;cursor:pointer;flex-shrink:0">Copy</button>
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
    <tr><td><span class="enum-badge">appOrderID</span></td><td>AppOrderID</td><td>Y</td><td>It is system generated unique order number</td></tr>
    <tr><td><span class="enum-badge">modifiedProductType</span></td><td>ProductType</td><td>Y</td><td>ProductType</td></tr>
    <tr><td><span class="enum-badge">modifiedOrderType</span></td><td>OrderType</td><td>Y</td><td>OrderType</td></tr>
    <tr><td><span class="enum-badge">modifiedDisclosedQuantity</span></td><td>Quantity</td><td>Y</td><td>Quantity to disclose (for equity)</td></tr>
    <tr><td><span class="enum-badge">modifiedOrderQuantity</span></td><td>Quantity</td><td>Y</td><td>Quantity to transact. In terms of Lots</td></tr>
    <tr><td><span class="enum-badge">modifiedLimitPrice</span></td><td>Price</td><td>Y</td><td>The price to execute the order at</td></tr>
    <tr><td><span class="enum-badge">modifiedStopPrice</span></td><td>Price</td><td>Y</td><td>The price at which an order should be triggered (SL, SL-M)</td></tr>
    <tr><td><span class="enum-badge">modifiedTimeInForce</span></td><td>TimeInForce</td><td>Y</td><td>TimeInForce</td></tr>
    <tr><td><span class="enum-badge">orderUniqueIdentifier</span></td><td>OrderUniqueIdentifier</td><td>N</td><td>Echo back to identify order</td></tr>
    <tr><td><span class="enum-badge">apiOrderSource</span></td><td>ApiOrderSource</td><td>N</td><td>API Order Source can be third party application name which you want to give to your order, which will be used to track your order with particular source.</td></tr>
    <tr><td><span class="enum-badge">clientID</span></td><td>ClientID</td><td>N</td><td>Client ID Mandatory in case of Dealer</td></tr>
  </tbody>
</table>

## Request Body JSON

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8" id="mo-req-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"appOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2190766863</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"modifiedProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NRML"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"modifiedOrderType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"LIMIT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"modifiedOrderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">25</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"modifiedDisclosedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"modifiedLimitPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">255.65</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"modifiedStopPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"modifiedTimeInForce"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"DAY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"orderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"123abc"</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('mo-req-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('mo-req-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="mo-req-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
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
    <tr><td><span class="enum-badge">ClientID</span></td><td>ClientID</td><td>ClientID which is send in request body</td></tr>
  </tbody>
</table>

## Response Body JSON

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8" id="mo-res-box">
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
    <button onclick="(function(){var t=document.getElementById('mo-res-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('mo-res-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="mo-res-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

## Code Examples

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="moShowCode('curl',this)" id="mo-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="moShowCode('python',this)" id="mo-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>

  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="mo-ce-box">

  <div id="mo-code-curl">
<span style="color:#d4d4d4">curl --location --request PUT </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxxxxxx'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178">'{
  "exchangeSegment": "NSECM",<br>
    "orderID": "*****",<br>
    "orderQuantity": 2,<br>
    "limitPrice": 12,<br>
    "stopPrice": 0,<br>
    "clientID": "*****"
  }'</span>
    </div>

<div id="mo-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> os</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> dotenv </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> load_dotenv</span><br>
<span style="color:#dcdcaa">load_dotenv</span><span style="color:#d4d4d4">()</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> xts_api_client.xts_connect_async </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> XTSConnect</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> asyncio</span><br>
<br>
<span style="color:#9cdcfe">API_key</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_Interactive_API_KEY"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">API_secret</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_Interactive_SECRET_KEY"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">API_source</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_SOURCE"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">API_root</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_API_URL"</span><span style="color:#d4d4d4">)</span><br>
<br>
<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">xt_interactive_data</span><span style="color:#d4d4d4"> = </span><span style="color:#4ec9b0">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">apiKey</span><span style="color:#d4d4d4"> = API_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">secretKey</span><span style="color:#d4d4d4"> = API_secret,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">source</span><span style="color:#d4d4d4"> = API_source,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root</span><span style="color:#d4d4d4"> = API_root</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;<span style="color:#9cdcfe">response_interactive_login</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xt_interactive_data.</span><span style="color:#dcdcaa">interactive_login</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(response_interactive_login)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">resp</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xt_interactive_data.</span><span style="color:#dcdcaa">modify_order</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">exchangeSegment</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">orderID</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">"*****"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">orderQuantity</span><span style="color:#d4d4d4">=</span><span style="color:#b5cea8">2</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">limitPrice</span><span style="color:#d4d4d4">=</span><span style="color:#b5cea8">12</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">stopPrice</span><span style="color:#d4d4d4">=</span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">clientID</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">"*****"</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(resp)</span><br>
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> __name__ == </span><span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">asyncio</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(main())</span>
    </div>

  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var active=document.querySelector('[id^=mo-code-]:not([style*=none])');if(!active)return;navigator.clipboard.writeText(active.innerText).then(function(){var b=document.getElementById('mo-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="mo-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('mo-ce-box');var btn=document.getElementById('mo-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="mo-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<script>
function moShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('mo-code-' + l).style.display = 'none';
    document.getElementById('mo-tab-' + l).style.background = '#374151';
  });
  document.getElementById('mo-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>

<!-- ═══════════════════ BEGINNER ═══════════════════ -->

<h2 id="basic-workflow" class="auth-section-title">Basic Workflow</h2>
<div class="po-flow">
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">User</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Modify Order API</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Broker Server</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Stock Exchange</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step po-flow-step--success"><div class="po-flow-icon">✅</div><div class="po-flow-label">Updated Order</div></div>
</div>

<!-- ═══════════════════ INTERMEDIATE ═══════════════════ -->
<h2 id="what-can-be-modified" class="auth-section-title">What Can Be Modified?</h2>
<div class="po-type-grid">
  <div class="po-type-card">
    <div class="po-type-badge">QUANTITY</div>
    <p>Increase or decrease the number of shares in your order.</p>
    <div class="po-type-example">10 shares → 20 shares</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">PRICE</div>
    <p>Update the limit price to match changing market conditions.</p>
    <div class="po-type-example">₹2850 → ₹2865</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">ORDER TYPE</div>
    <p>Switch between Limit and Market order types.</p>
    <div class="po-type-example">Limit Order → Market Order</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">PRODUCT TYPE</div>
    <p>Change product type if supported by broker and exchange.</p>
    <div class="po-type-example">MIS → NRML</div>
  </div>
</div>

<h2 id="what-cannot-be-modified" class="auth-section-title">What Cannot Be Modified?</h2>
<div class="mo-cannot-grid">
  <div class="mo-cannot-card">
    <div class="mo-cannot-icon"></div>
    <div class="mo-cannot-label">Exchange Segment</div>
    <div class="mo-cannot-note">Cannot switch NSECM → NSEFO</div>
  </div>
  <div class="mo-cannot-card">
    <div class="mo-cannot-icon"></div>
    <div class="mo-cannot-label">Trading Symbol</div>
    <div class="mo-cannot-note">Cannot change RELIANCE to TCS</div>
  </div>
  <div class="mo-cannot-card">
    <div class="mo-cannot-icon"></div>
    <div class="mo-cannot-label">Instrument ID</div>
    <div class="mo-cannot-note">Locked at placement time</div>
  </div>
  <div class="mo-cannot-card">
    <div class="mo-cannot-icon"></div>
    <div class="mo-cannot-label">Order Side</div>
    <div class="mo-cannot-note">Cannot flip BUY ↔ SELL</div>
  </div>
</div>
<p class="auth-text" style="margin-top:8px;">To change any of the above, cancel the existing order and place a new one.</p>

<h2 id="internal-working" class="auth-section-title">Internal Working</h2>
<div class="auth-flow-steps">
  <div class="auth-flow-step"><strong>1</strong><span><b>User sends Modify Request</b> — Order ID, new quantity, new price, updated params</span></div>
  <div class="auth-flow-step"><strong>2</strong><span><b>Broker validates</b> — Is the order active? Is modification allowed? Sufficient margin?</span></div>
  <div class="auth-flow-step"><strong>3</strong><span><b>Request sent to Exchange</b> — exchange receives the update</span></div>
  <div class="auth-flow-step"><strong>4</strong><span><b>Existing order updated</b> — exchange replaces old values with new values</span></div>
  <div class="auth-flow-step"><strong>5</strong><span><b>Confirmation returned</b> — Order ID, new status, and description</span></div>
</div>

<h2 id="before-after" class="auth-section-title">Before vs After</h2>
<div class="auth-req-row">
  <div class="auth-req-block">
    <div class="auth-req-label" style="background:#3b82f6">Original Order</div>
    <div class="auth-code-block"><pre>BUY RELIANCE
Quantity  = 10
Price     = ₹2850
Status    = Open</pre></div>
  </div>
  <div class="auth-req-block">
    <div class="auth-req-label" style="background:#22c55e">Modified Order</div>
    <div class="auth-code-block"><pre>BUY RELIANCE
Quantity  = 15
Price     = ₹2860
Status    = Open (Modified)</pre></div>
  </div>
</div>

<h2 id="common-uses" class="auth-section-title">Common Use Cases</h2>
<div class="po-adv-grid">
  <div class="po-adv-card">
    <div class="po-adv-title"> Improve Execution</div>
    <p>Increase the price to improve chances of the order being matched by the exchange.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title"> Reduce Risk</div>
    <p>Decrease quantity when the market becomes volatile to limit your exposure.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title"> Follow Market</div>
    <p>Adjust the limit price continuously to track changing market conditions.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title"> Update Stop Loss</div>
    <p>Move the trigger price up to lock in profits as the stock price rises.</p>
  </div>
</div>

<!-- ═══════════════════ ADVANCED ═══════════════════ -->
<h2 id="order-states" class="auth-section-title">Order Life Cycle</h2>
<div class="po-lifecycle-grid">
  <div class="po-lc-col">
    <div class="po-lc-title">Modified → Executed</div>
    <div class="po-lc-steps">
      <div class="po-lc-step po-lc-new">New</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-open">Open</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-partial">Modify Request</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-filled">Modified → Executed</div>
    </div>
  </div>
  <div class="po-lc-col">
    <div class="po-lc-title">Modify Rejected</div>
    <div class="po-lc-steps">
      <div class="po-lc-step po-lc-new">New</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-open">Open</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-partial">Modify Request</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-reject">Rejected</div>
    </div>
  </div>
  <div class="po-lc-col">
    <div class="po-lc-title">Advanced Concepts</div>
    <div class="po-adv-card" style="text-align:left; margin-bottom:10px;">
      <div class="po-adv-title" style="font-size:13px;"> Partial Fill Case</div>
      <p style="font-size:12px; margin:4px 0;">Only the <b>remaining unfilled quantity</b> can be modified. Already-executed shares are locked.</p>
    </div>
    <div class="po-adv-card" style="text-align:left;">
      <div class="po-adv-title" style="font-size:13px;"> Market → Limit Conversion</div>
      <p style="font-size:12px; margin:4px 0;">Switch a Market order to Limit by providing a new limit price in the modify request.</p>
    </div>
  </div>
</div>

<h2 id="complete-flow" class="auth-section-title">Complete Modify Order Flow</h2>
<div class="po-full-flow">
  <div class="po-ff-step"> User</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Modify Order API</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Broker Risk Management</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Order Management System (OMS)</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Exchange</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Order Updated</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step po-ff-final">  Confirmation Returned</div>
</div>

<div class="po-summary">
  <strong>In Simple Words:</strong> Modify Order API allows users to change an existing open order without canceling it. It helps traders adjust price, quantity, or other parameters according to market conditions — making trading more flexible and efficient.
</div>

<style>
.mo-cannot-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; margin: 16px 0; }
.mo-cannot-card { background: #ffffff; border: 1.5px solid #fdba74; border-radius: 10px; padding: 16px; text-align: center; }
.mo-cannot-icon { font-size: 22px; margin-bottom: 6px; }
.mo-cannot-label { font-weight: 700; font-size: 14px; color: #9a3412; margin-bottom: 4px; }
.mo-cannot-note { font-size: 12px; color: #6b7280; }
</style>

</div>
