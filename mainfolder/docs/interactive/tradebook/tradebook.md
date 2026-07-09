<h1 id="tradebook" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Trade Book</h1>
<p class="iov-subtitle">A <strong>Trade Book</strong> is a record of all successfully executed trades. It shows only orders that have been matched and completed in the market — not pending, cancelled, or rejected orders.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Executed trades only</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg></div><span>Trade ID & Order ID</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Price & quantity</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg></div><span>Trade value calc</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>P&amp;L tracking</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg></div><span>Trading history</span></div>
</div>

---

## Endpoint

<div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px;background:#f9fafb;display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:8px 0 24px">
  <span style="background:#ffffff;border:1.5px solid #fed7aa;color:#ff6b00;font-weight:700;font-size:12px;padding:4px 12px;border-radius:6px;flex-shrink:0">GET</span>
  <code style="flex:1;font-size:13px;color:#1d4ed8;background:transparent;word-break:break-all">http://160.30.125.86:10955//interactive/orders/dealertradebook</code>
  <button onclick="navigator.clipboard.writeText('http://160.30.125.86:10955//interactive/orders/dealertradebook').then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})" style="background:#1d4ed8;color:#fff;border:none;border-radius:7px;padding:6px 16px;font-size:13px;font-weight:600;cursor:pointer;flex-shrink:0">Copy</button>
</div>

---

## Request Body Parameters

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
      <td><span class="enum-badge">clientID</span></td>
      <td>ClientID</td>
      <td>N</td>
      <td>Client ID Mandatory in case of Dealer</td>
    </tr>
  </tbody>
</table>

---

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
    <tr><td><span class="enum-badge">LoginID</span></td><td>UserID</td><td>User login ID</td></tr>
    <tr><td><span class="enum-badge">ClientID</span></td><td>ClientID</td><td>User specific identification</td></tr>
    <tr><td><span class="enum-badge">AppOrderID</span></td><td>AppOrderID</td><td>Unique order ID</td></tr>
    <tr><td><span class="enum-badge">OrderReferenceID</span></td><td>OrderReferenceID</td><td>Exchange OrderReferenceID to identify news from log orders</td></tr>
    <tr><td><span class="enum-badge">GenerateInBy</span></td><td>GenerateInBy</td><td>Each cancellation transaction can be found</td></tr>
    <tr><td><span class="enum-badge">ExchangeOrderID</span></td><td>ExchangeOrderID</td><td>Exchange OrderID provided by exchange</td></tr>
    <tr><td><span class="enum-badge">OrderCategoryType</span></td><td>OrderCategoryType</td><td>Order category / created type</td></tr>
    <tr><td><span class="enum-badge">ExchangeSegment</span></td><td>ExchangeSegment</td><td>Exchange segment for the order</td></tr>
    <tr><td><span class="enum-badge">ExchangeInstrumentID</span></td><td>ExchangeInstrumentID</td><td>Exchange Instrument ID — unique identifier for the instrument</td></tr>
    <tr><td><span class="enum-badge">OrderSide</span></td><td>OrderSide</td><td>Order side — BUY or SELL</td></tr>
    <tr><td><span class="enum-badge">OrderType</span></td><td>OrderType</td><td>Type of order — MARKET, LIMIT, STOPMARKET, STOPLIMIT</td></tr>
    <tr><td><span class="enum-badge">ProductType</span></td><td>ProductType</td><td>Product type — MIS, CNC, NRML, BO, CO</td></tr>
    <tr><td><span class="enum-badge">TimeInForce</span></td><td>TimeInForce</td><td>Order validity — DAY, IOC, FOK</td></tr>
    <tr><td><span class="enum-badge">OrderPrice</span></td><td>Price</td><td>Price to execute the trade at</td></tr>
    <tr><td><span class="enum-badge">OrderQuantity</span></td><td>Quantity</td><td>Quantity to be traded</td></tr>
    <tr><td><span class="enum-badge">OrderStopPrice</span></td><td>Price</td><td>Price at which order should be triggered (SL, SL-M)</td></tr>
    <tr><td><span class="enum-badge">OrderStatus</span></td><td>OrderStatus</td><td>Current status of the order</td></tr>
    <tr><td><span class="enum-badge">OrderAverageTradedPrice</span></td><td>OrderAverageTradedPrice</td><td>Average traded price, also referred to as Weighted Average Price</td></tr>
    <tr><td><span class="enum-badge">LeavesQuantity</span></td><td>Quantity</td><td>Remaining quantity to be filled for the order</td></tr>
    <tr><td><span class="enum-badge">CumulativeQuantity</span></td><td>Quantity</td><td>Total number of shares bought/sold in this order so far</td></tr>
    <tr><td><span class="enum-badge">OrderDisclosedQuantity</span></td><td>Quantity</td><td>Disclosed quantity for the order (equity)</td></tr>
    <tr><td><span class="enum-badge">OrderGeneratedDateTime</span></td><td>Timestamp</td><td>Time and date when order was registered by the API</td></tr>
    <tr><td><span class="enum-badge">ExchangeTransactTime</span></td><td>Timestamp</td><td>Time and date when order was registered by the exchange</td></tr>
    <tr><td><span class="enum-badge">LastUpdatedDateTime</span></td><td>Timestamp</td><td>Timestamp when the order status last changed</td></tr>
    <tr><td><span class="enum-badge">OrderExpiryDate</span></td><td>OrderExpiryDate</td><td>Expiry date of the order — applicable for GTT (Good Till Date) orders</td></tr>
    <tr><td><span class="enum-badge">CancelRejectReason</span></td><td>RejectReason</td><td>Reason for order rejection or cancellation</td></tr>
    <tr><td><span class="enum-badge">OrderUniqueIdentifier</span></td><td>OrderUniqueIdentifier</td><td>Order unique identifier (20 char length)</td></tr>
    <tr><td><span class="enum-badge">OrderingStatus</span></td><td>OrderingStatus</td><td>Status tied to the AppOrderID</td></tr>
    <tr><td><span class="enum-badge">RacingDetails</span></td><td>RacingDetails</td><td>Related order log details</td></tr>
    <tr><td><span class="enum-badge">IsSpread</span></td><td>IsSpread</td><td>Indicates if the order is a spread order</td></tr>
    <tr><td><span class="enum-badge">FactoryOrderID</span></td><td>AppOrderID</td><td>Unique order ID assigned at factory level</td></tr>
    <tr><td><span class="enum-badge">MessageCode</span></td><td>MessageCode</td><td>API Message Code</td></tr>
    <tr><td><span class="enum-badge">MessageVersion</span></td><td>MessageVersion</td><td>API Message Version</td></tr>
    <tr><td><span class="enum-badge">TokenID</span></td><td>TokenID</td><td>API Token ID</td></tr>
    <tr><td><span class="enum-badge">ApplicationType</span></td><td>ApplicationType</td><td>API Application Type</td></tr>
    <tr><td><span class="enum-badge">SequenceNumber</span></td><td>SequenceNumber</td><td>API Response Sequence Number</td></tr>
  </tbody>
</table>

---

## Response Body JSON

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:260px;overflow:hidden;transition:max-height .4s ease" id="tb-json-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-orders-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Success trade book"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LoginID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ClientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AppOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">648468731</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderReferenceID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"GenerateInBy"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1100000012345"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderCategoryType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NORMAL"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"LIMIT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"MIS"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TimeInForce"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"DAY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2850.00</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">10</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderStopPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Filled"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderAverageTradedPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2849.50</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LeavesQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CumulativeQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">10</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderDisclosedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderGeneratedDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Jun 18 2026 09:20:15"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeTransactTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Jun 18 2026 09:20:16"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LastUpdatedDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Jun 18 2026 09:20:16"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderExpiryDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Jan 01 1980 00:00:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CancelRejectReason"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"tag001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderingStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Filled"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"RacingDetails"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IsSpread"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FactoryOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">648468731</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">200</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageVersion"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TokenID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ApplicationType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SequenceNumber"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">]</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('tb-json-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('tb-copy-btn');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="tb-copy-btn" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('tb-json-box');var btn=document.getElementById('tb-show-btn');if(b.style.maxHeight==='none'){b.style.maxHeight='260px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="tb-show-btn" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

---

## Code Examples

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="tbShowCode('curl',this)" id="tb-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="tbShowCode('python',this)" id="tb-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>

  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;position:relative">

    <div id="tb-code-curl">
<span style="color:#d4d4d4">curl --location </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/dealertradebook'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span>
    </div>

    <div id="tb-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/dealertradebook"</span><br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">}</span><br>
<br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = </span><span style="color:#9cdcfe">await</span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_get</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">'dealer.trades'</span><span style="color:#d4d4d4">, params</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#dcdcaa">return </span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_handle_response </span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">response</span><span style="color:#d4d4d4">,</span><span style="color:#dcdcaa">"Get Dealer Tradebook"</span><span style="color:#d4d4d4">)</span>
    </div>

    <div style="display:flex;justify-content:flex-end;margin-top:14px">
      <button onclick="(function(){var active=document.querySelector('[id^=tb-code-]:not([style*=none])');if(!active)return;var text=active.innerText;navigator.clipboard.writeText(text).then(function(){var b=document.getElementById('tb-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="tb-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    </div>
  </div>
</div>

<script>
function tbShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('tb-code-' + l).style.display = 'none';
    document.getElementById('tb-tab-' + l).style.background = '#374151';
  });
  document.getElementById('tb-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>

---

## How It Works

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Place Order</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Sent to Exchange</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div><span>Buyer &amp; Seller Matched</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Trade Executed</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg></div><span>Added to Trade Book</span></div>
</div>

---

## Trade Book Fields

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;margin:16px 0 24px">

  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px">Trade ID</div>
    <p style="font-size:12px;color:#374151;margin:0 0 6px">Unique number assigned to every executed trade.</p>
    <code style="font-size:12px;color:#b45309">Trade ID: 24589632</code>
  </div>

  <div style="border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;background:#eff6ff">
    <div style="font-weight:700;color:#1d4ed8;font-size:13px;margin-bottom:6px">Order ID</div>
    <p style="font-size:12px;color:#374151;margin:0 0 6px">The ID of the order that generated this trade.</p>
    <code style="font-size:12px;color:#1d4ed8">Order ID: 24071800012345</code>
  </div>

  <div style="border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4">
    <div style="font-weight:700;color:#16a34a;font-size:13px;margin-bottom:6px">Trading Symbol</div>
    <p style="font-size:12px;color:#374151;margin:0 0 6px">The stock or instrument that was traded.</p>
    <code style="font-size:12px;color:#166534">RELIANCE / TCS / INFY</code>
  </div>

  <div style="border:1.5px solid #e9d5ff;border-radius:10px;padding:14px 16px;background:#faf5ff">
    <div style="font-weight:700;color:#7c3aed;font-size:13px;margin-bottom:6px">Exchange Segment</div>
    <p style="font-size:12px;color:#374151;margin:0 0 6px">Exchange where the trade was executed.</p>
    <code style="font-size:12px;color:#7c3aed">NSECM / NSEFO / BSECM</code>
  </div>

  <div style="border:1.5px solid #fde68a;border-radius:10px;padding:14px 16px;background:#fffbeb">
    <div style="font-weight:700;color:#d97706;font-size:13px;margin-bottom:6px">Order Side</div>
    <p style="font-size:12px;color:#374151;margin:0 0 6px">Whether the trade was a buy or sell.</p>
    <code style="font-size:12px;color:#92400e">BUY / SELL</code>
  </div>

  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;background:#f9fafb">
    <div style="font-weight:700;color:#374151;font-size:13px;margin-bottom:6px">Product Type</div>
    <p style="font-size:12px;color:#374151;margin:0 0 6px">Trading product used for the order.</p>
    <code style="font-size:12px;color:#374151">MIS / CNC / NRML / BO / CO</code>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px">Executed Quantity</div>
    <p style="font-size:12px;color:#374151;margin:0 0 6px">The quantity that was actually traded.</p>
    <code style="font-size:12px;color:#b45309">100 Shares</code>
  </div>

  <div style="border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;background:#eff6ff">
    <div style="font-weight:700;color:#1d4ed8;font-size:13px;margin-bottom:6px">Executed Price</div>
    <p style="font-size:12px;color:#374151;margin:0 0 6px">The price at which the trade was executed.</p>
    <code style="font-size:12px;color:#1d4ed8">₹2,850.50</code>
  </div>

  <div style="border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4">
    <div style="font-weight:700;color:#16a34a;font-size:13px;margin-bottom:6px">Trade Value</div>
    <p style="font-size:12px;color:#374151;margin:0 0 6px">Price × Quantity = Total trade value.</p>
    <code style="font-size:12px;color:#166534">₹2,850 × 100 = ₹2,85,000</code>
  </div>

  <div style="border:1.5px solid #e9d5ff;border-radius:10px;padding:14px 16px;background:#faf5ff">
    <div style="font-weight:700;color:#7c3aed;font-size:13px;margin-bottom:6px">Trade Time</div>
    <p style="font-size:12px;color:#374151;margin:0 0 6px">Exact time when the trade was executed.</p>
    <code style="font-size:12px;color:#7c3aed">09:24:18 AM</code>
  </div>

</div>

---

## Example Trade Book

<table class="api-table">
  <thead>
    <tr>
      <th>Trade ID</th>
      <th>Symbol</th>
      <th>Side</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">100001</span></td>
      <td>RELIANCE</td>
      <td><span style="color:#16a34a;font-weight:700">BUY</span></td>
      <td>100</td>
      <td>₹2,850</td>
      <td>09:20:15</td>
    </tr>
    <tr>
      <td><span class="enum-badge">100002</span></td>
      <td>TCS</td>
      <td><span style="color:#ea580c;font-weight:700">SELL</span></td>
      <td>50</td>
      <td>₹3,950</td>
      <td>10:05:42</td>
    </tr>
    <tr>
      <td><span class="enum-badge">100003</span></td>
      <td>INFY</td>
      <td><span style="color:#16a34a;font-weight:700">BUY</span></td>
      <td>25</td>
      <td>₹1,600</td>
      <td>11:18:30</td>
    </tr>
  </tbody>
</table>

---

## Python Example

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;margin:12px 0">
<span style="color:#c586c0">async def</span> <span style="color:#dcdcaa">get_trade_book</span><span style="color:#d4d4d4">(client):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response</span> <span style="color:#d4d4d4">=</span> <span style="color:#c586c0">await</span> <span style="color:#9cdcfe">client</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">get_trade_book</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">trades</span> <span style="color:#d4d4d4">=</span> <span style="color:#9cdcfe">response</span><span style="color:#d4d4d4">[</span><span style="color:#ce9178">'result'</span><span style="color:#d4d4d4">]</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">total_turnover</span> <span style="color:#d4d4d4">=</span> <span style="color:#b5cea8">0</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">for</span> <span style="color:#9cdcfe">trade</span> <span style="color:#c586c0">in</span> <span style="color:#9cdcfe">trades</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">value</span> <span style="color:#d4d4d4">=</span> <span style="color:#9cdcfe">trade</span><span style="color:#d4d4d4">[</span><span style="color:#ce9178">'TradedQuantity'</span><span style="color:#d4d4d4">]</span> <span style="color:#d4d4d4">*</span> <span style="color:#9cdcfe">trade</span><span style="color:#d4d4d4">[</span><span style="color:#ce9178">'TradedPrice'</span><span style="color:#d4d4d4">]</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">total_turnover</span> <span style="color:#d4d4d4">+=</span> <span style="color:#9cdcfe">value</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"Trade ID:    <span style="color:#d4d4d4">{</span><span style="color:#9cdcfe">trade</span><span style="color:#d4d4d4">[</span><span style="color:#ce9178">'AppOrderID'</span><span style="color:#d4d4d4">]}</span>"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"Symbol:      <span style="color:#d4d4d4">{</span><span style="color:#9cdcfe">trade</span><span style="color:#d4d4d4">[</span><span style="color:#ce9178">'TradingSymbol'</span><span style="color:#d4d4d4">]}</span>"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"Side:        <span style="color:#d4d4d4">{</span><span style="color:#9cdcfe">trade</span><span style="color:#d4d4d4">[</span><span style="color:#ce9178">'OrderSide'</span><span style="color:#d4d4d4">]}</span>"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"Qty Traded:  <span style="color:#d4d4d4">{</span><span style="color:#9cdcfe">trade</span><span style="color:#d4d4d4">[</span><span style="color:#ce9178">'TradedQuantity'</span><span style="color:#d4d4d4">]}</span>"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"Trade Price: <span style="color:#d4d4d4">{</span><span style="color:#9cdcfe">trade</span><span style="color:#d4d4d4">[</span><span style="color:#ce9178">'TradedPrice'</span><span style="color:#d4d4d4">]}</span>"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"Value:       <span style="color:#d4d4d4">{</span><span style="color:#9cdcfe">value</span><span style="color:#d4d4d4">:.2f}</span>"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"---"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"Total Turnover: <span style="color:#d4d4d4">{</span><span style="color:#9cdcfe">total_turnover</span><span style="color:#d4d4d4">:.2f}</span>"</span><span style="color:#d4d4d4">)</span>
</div>

---

## Response Example

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;margin:12px 0">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: [</span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AppOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1234567890</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TradingSymbol"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RELIANCE"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"MIS"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TradedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">10</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TradedPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2449.50</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TradeID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"220618000123"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1100000012345"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderGeneratedDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Jun 18 2026 10:15:35"</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">]</span><br>
<span style="color:#ffd700">}</span>
</div>

---

## Trade Book vs Order Book

<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:0;align-items:stretch;margin:16px 0 24px;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
  <div style="padding:16px 20px;background:#ffffff">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:10px">ORDER BOOK</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#9a3412;line-height:2.2">
      <li>Shows all orders placed</li>
      <li>Pending, executed, cancelled &amp; rejected</li>
      <li>Active orders can be modified or cancelled</li>
      <li>Used to monitor status of all orders</li>
      <li>One entry per order</li>
    </ul>
  </div>
  <div style="padding:16px 10px;background:#f3f4f6;text-align:center;font-size:20px;color:#6b7280;display:flex;align-items:center">→</div>
  <div style="padding:16px 20px;background:#f0fdf4">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:10px">TRADE BOOK</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#166534;line-height:2.2">
      <li>Shows only executed trades</li>
      <li>Completed transactions only</li>
      <li>Cannot modify or cancel trades</li>
      <li>Used to verify completed trades</li>
      <li>One row per execution (partial fills = multiple rows)</li>
    </ul>
  </div>
</div>

---

## Common Use Cases

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:12px 0 24px">
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px"> Verify Trades</div>
    <p style="font-size:12px;color:#374151;margin:0">Confirm that a trade has been successfully executed.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px"> Calculate P&amp;L</div>
    <p style="font-size:12px;color:#374151;margin:0">Use executed prices to calculate trading profit or loss.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px"> Trading History</div>
    <p style="font-size:12px;color:#374151;margin:0">Keep a record of all completed buy and sell transactions.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px"> Reconcile Orders</div>
    <p style="font-size:12px;color:#374151;margin:0">Match executed trades with the corresponding orders.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px"> Performance Analysis</div>
    <p style="font-size:12px;color:#374151;margin:0">Review past trades to evaluate trading performance.</p>
  </div>
</div>

!!! tip
    If an order was partially filled in multiple executions, you will see **multiple rows** in the Trade Book for the same `AppOrderID` — one row per execution.
