<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">Cancel All Orders</h1>
<p class="iov-subtitle"><strong>Cancel All Orders</strong> cancels all your active (open or pending) orders at once with a single request — no need to cancel each order individually. Especially useful during volatile markets or when exiting all positions quickly.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Single request</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Risk reduction</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Saves time</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Volatile markets</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>Multi-order mgmt</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg></div><span>End of session</span></div>
</div>

---

## Endpoint

<div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px;background:#f9fafb;display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:8px 0 24px">
  <span style="background:#fdf4ff;border:1.5px solid #e9d5ff;color:#7c3aed;font-weight:700;font-size:12px;padding:4px 12px;border-radius:6px;flex-shrink:0">POST</span>
  <code style="flex:1;font-size:13px;color:#1d4ed8;background:transparent;word-break:break-all">https://xts.rmoneyindia.co.in:3000/interactive/orders/cancelall</code>
  <button onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/interactive/orders/cancelall').then(()=>{this.textContent='Copied!';setTimeout(()=>this.textContent='Copy',1500)})" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:7px;padding:6px 16px;font-size:13px;font-weight:600;cursor:pointer;flex-shrink:0">Copy</button>
</div>

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
    <tr><td><span class="enum-badge">exchangeSegment</span></td><td>ExchangeSegment</td><td>Y</td><td>ExchangeSegment</td></tr>
    <tr><td><span class="enum-badge">exchangeInstrumentID</span></td><td>ExchangeInstrumentID</td><td>Y</td><td>Exchange Scrip code or Symbol Token is unique identifier</td></tr>
    <tr><td><span class="enum-badge">clientID</span></td><td>ClientID</td><td>N</td><td>Client ID Mandatory in case of Dealer</td></tr>
  </tbody>
</table>

## Request Body JSON

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8" id="cao-req-box">
<span style="color:#d4d4d4">[</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </s.pan><span style="color:#b5cea8">3045</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#d4d4d4">]</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('cao-req-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('cao-req-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="cao-req-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

## Response Body JSON

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8" id="cao-res-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-cancelall-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Cancel All Order Request Send Successfully"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('cao-res-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('cao-res-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="cao-res-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

## Code Examples

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="caoShowCode('curl',this)" id="cao-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="caoShowCode('python',this)" id="cao-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>

  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8">

    <div id="cao-code-curl">
<span style="color:#d4d4d4">curl --location </span><span style="color:#ce9178">'https://xts.rmoneyindia.coin:3000/interactive/orders/cancelall'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxxxxxx'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178">'{"exchangeSegment":"NSECM","exchangeInstrumentID":"1333"}'</span>
    </div>

    <div id="cao-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/cancelall"</span><br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"xxxxxxxxxx"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Content-Type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"application/json"</span><br>
<span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">payload</span><span style="color:#d4d4d4"> = {</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1333"</span><br>
<span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = </span><span style="color:#9cdcfe">await</span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_post</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">'order.cancelall'</span><span style="color:#d4d4d4">, json</span><span style="color:#9cdcfe">.dumps</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">params</span><span style="color:#d4d4d4">)</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#dcdcaa">return </span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_handle_response </span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">response</span><span style="color:#d4d4d4">,</span><span style="color:#dcdcaa">"Cancel All Order"</span><span style="color:#d4d4d4">)</span>
    </div>

    <div style="display:flex;justify-content:flex-end;margin-top:14px">
      <button onclick="(function(){var active=document.querySelector('[id^=cao-code-]:not([style*=none])');if(!active)return;navigator.clipboard.writeText(active.innerText).then(function(){var b=document.getElementById('cao-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="cao-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    </div>
  </div>
</div>

<script>
function caoShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('cao-code-' + l).style.display = 'none';
    document.getElementById('cao-tab-' + l).style.background = '#374151';
  });
  document.getElementById('cao-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>

---

## How It Works

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>User Sends Request</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Broker Finds Active Orders</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z"/></svg></div><span>Cancel Requests Sent</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg></div><span>Exchange Processes</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Status Updated</span></div>
</div>

---

## Which Orders Are Affected?

<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0 24px">

  <div style="border:1.5px solid #bbf7d0;border-radius:12px;overflow:hidden">
    <div style="background:#16a34a;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Can Be Cancelled</div>
    <div style="padding:14px 16px;background:#f0fdf4">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.2">
        <li>Open Orders</li>
        <li>Pending / New Orders</li>
        <li>Pending Trigger Orders</li>
        <li>Partially Filled (remaining qty)</li>
      </ul>
    </div>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ea580c;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Cannot Be Cancelled</div>
    <div style="padding:14px 16px;background:#ffffff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.2">
        <li>Fully Filled Orders</li>
        <li>Already Cancelled Orders</li>
        <li>Rejected Orders</li>
        <li>Expired Orders</li>
      </ul>
    </div>
  </div>

</div>

---

## Example

<table class="api-table">
  <thead>
    <tr><th>Order ID</th><th>Symbol</th><th>Before</th><th>After Cancel All</th></tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">1001</span></td><td>RELIANCE</td><td>Open</td><td>Cancelled</td></tr>
    <tr><td><span class="enum-badge">1002</span></td><td>TCS</td><td>Open</td><td>Cancelled</td></tr>
    <tr><td><span class="enum-badge">1003</span></td><td>INFY</td><td>Pending New</td><td>Cancelled</td></tr>
    <tr><td><span class="enum-badge">1004</span></td><td>HDFC</td><td>Filled</td><td>Filled (No Change)</td></tr>
  </tbody>
</table>

---

## Cancel All Orders vs Cancel Order

<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:0;align-items:stretch;margin:16px 0 24px;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
  <div style="padding:16px 20px;background:#ffffff">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:10px">CANCEL ORDER</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#92400e;line-height:2.2">
      <li>Cancels one specific order</li>
      <li>Requires individual Order ID</li>
      <li>Best for single order removal</li>
    </ul>
  </div>
  <div style="padding:16px 10px;background:#f3f4f6;text-align:center;font-size:20px;color:#6b7280;display:flex;align-items:center">→</div>
  <div style="padding:16px 20px;background:#f0fdf4">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:10px">CANCEL ALL ORDERS</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#166534;line-height:2.2">
      <li>Cancels all active orders at once</li>
      <li>No need to specify Order IDs</li>
      <li>Best for fast exits &amp; risk control</li>
    </ul>
  </div>
</div>

---

## Advantages & Limitations

<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:12px 0 24px">

  <div style="border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4">
    <div style="font-weight:700;color:#16a34a;font-size:13px;margin-bottom:8px">Advantages</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
      <li>Cancel multiple orders instantly</li>
      <li>Saves time in busy sessions</li>
      <li>Reduces market exposure quickly</li>
      <li>Prevents accidental executions</li>
      <li>Easier order management</li>
    </ul>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ea580c;font-size:13px;margin-bottom:8px">Limitations</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
      <li>Filled orders cannot be cancelled</li>
      <li>Orders mid-execution may still fill</li>
      <li>Depends on exchange acceptance</li>
      <li>Cannot undo after execution</li>
    </ul>
  </div>

</div>

---

## Common Use Cases

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:12px 0 24px">
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Market Volatility</div>
    <p style="font-size:12px;color:#374151;margin:0">Cancel all pending orders during sudden market movements to avoid unwanted fills.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">End of Session</div>
    <p style="font-size:12px;color:#374151;margin:0">Remove all unexecuted orders before the market closes.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Strategy Change</div>
    <p style="font-size:12px;color:#374151;margin:0">Cancel all existing orders before placing new ones with updated strategy.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Risk Management</div>
    <p style="font-size:12px;color:#374151;margin:0">Quickly reduce exposure by cancelling all pending orders at once.</p>
  </div>
</div>

!!! warning
    Review your active orders before using Cancel All Orders. Orders already being executed may still get filled before the cancellation is processed. Use carefully during live trading.
