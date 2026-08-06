<div class="po-wrap">

<!-- ═══════════════════ HERO ═══════════════════ -->
<div class="auth-hero">
  <h1 id="Cancel-Order" class="auth-hero-title">Cancel Order API</h1>
  <p class="auth-hero-sub">Stop a <strong>pending or open order</strong> before the exchange executes it. Send the Order ID — the broker cancels it and releases your blocked margin back to your account.</p>
</div>
<h2 id="endpoint" class="auth-section-title">Endpoint</h2>

<div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px;background:#f9fafb;display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:8px 0 24px">
  <span style="background:#ffffff;border:1.5px solid #fed7aa;color:#ea580c;font-weight:700;font-size:12px;padding:4px 12px;border-radius:6px;flex-shrink:0">DELETE</span>
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
    <tr><td><span class="enum-badge">AppOrderID</span></td><td>AppOrderID</td><td>Y</td><td>Unique order ID</td></tr>
    <tr><td><span class="enum-badge">OrderUniqueIdentifier</span></td><td>OrderUniqueIdentifier</td><td>Y</td><td>Echo back to identify order</td></tr>
    <tr><td><span class="enum-badge">ClientID</span></td><td>ClientID</td><td>N</td><td>ClientID which is send in request body</td></tr>
  </tbody>
</table>

<h2 id="response" class="auth-section-title">Response Body JSON</h2>

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8" id="co-res-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-user-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Request sent"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AppOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1200043151</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ClientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">]</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('co-res-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('co-res-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="co-res-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<h2 id="code-examples" class="auth-section-title">Code Examples</h2>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="coShowCode('curl',this)" id="co-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="coShowCode('python',this)" id="co-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>

  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8">

    <div id="co-code-curl">
<span style="color:#d4d4d4">curl --location --request DELETE </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxxxxxx'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178">"appOrderID": "1210991676",
    "orderUniqueIdentifier": "order12345"</span>
    </div>

<div id="co-code-python" style="display:none">
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
&nbsp;&nbsp;<span style="color:#9cdcfe">resp</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xt_interactive_data.</span><span style="color:#dcdcaa">cancel_order</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">appOrderID</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">"12109916 76"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">orderUniqueIdentifier</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">"order12345"</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(resp)</span><br>
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> __name__ == </span><span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">asyncio</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(main())</span>
    </div>

    <div style="display:flex;justify-content:flex-end;margin-top:14px">
      <button onclick="(function(){var active=document.querySelector('[id^=co-code-]:not([style*=none])');if(!active)return;navigator.clipboard.writeText(active.innerText).then(function(){var b=document.getElementById('co-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="co-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    </div>
  </div>
</div>

<script>
function coShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('co-code-' + l).style.display = 'none';
    document.getElementById('co-tab-' + l).style.background = '#374151';
  });
  document.getElementById('co-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>
<!-- ═══════════════════ BEGINNER ═══════════════════ -->
<h2 id="basic-workflow" class="auth-section-title">Basic Workflow</h2>
<div class="po-flow">
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">User</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Cancel Order API</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Broker Server</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Stock Exchange</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step po-flow-step--success"><div class="po-flow-icon">✅</div><div class="po-flow-label">Order Cancelled</div></div>
</div>
<!-- ═══════════════════ INTERMEDIATE ═══════════════════ -->
<h2 id="which-can-be-cancelled" class="auth-section-title">Which Orders Can Be Cancelled?</h2>
<div class="co-status-grid">
  <div class="co-can-card">
    <div class="co-can-icon"></div>
    <div class="co-can-label">Open Order</div>
    <div class="co-can-example">BUY RELIANCE @ ₹2850 — Status: Open</div>
    <div class="co-can-note">Order is live in the exchange order book. Can be cancelled.</div>
  </div>
  <div class="co-can-card">
    <div class="co-can-icon"></div>
    <div class="co-can-label">Pending / New Order</div>
    <div class="co-can-example">SELL TCS @ ₹4200 — Status: New</div>
    <div class="co-can-note">Order just placed, not yet matched. Can be cancelled.</div>
  </div>
  <div class="co-cannot-card">
    <div class="co-cannot-icon"></div>
    <div class="co-cannot-label">Completely Filled Order</div>
    <div class="co-cannot-example">BUY INFY @ ₹1600 — Status: Filled</div>
    <div class="co-cannot-note">Trade already executed. Cannot be cancelled.</div>
  </div>
  <div class="co-cannot-card">
    <div class="co-cannot-icon"></div>
    <div class="co-cannot-label">Already Cancelled Order</div>
    <div class="co-cannot-example">Status: Cancelled</div>
    <div class="co-cannot-note">Order already cancelled. Duplicate request rejected.</div>
  </div>
</div>

<h2 id="common-uses" class="auth-section-title">Common Use Cases</h2>
<div class="po-adv-grid">
  <div class="po-adv-card">
    <div class="po-adv-title"> Wrong Order Placement</div>
    <p>Accidentally placed 100 shares instead of 10? Cancel the order immediately before it executes.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title"> Market Conditions Changed</div>
    <p>Stock price is moving against your expectation. Cancel the pending order and avoid unwanted trades.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title"> Better Price Available</div>
    <p>Cancel the existing limit order and place a new one at a better price to improve your entry.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title"> Risk Management</div>
    <p>Remove unwanted pending orders during highly volatile sessions to control exposure.</p>
  </div>
</div>

<h2 id="partial-fill" class="auth-section-title">Partial Fill Scenario</h2>
<div class="auth-req-row">
  <div class="auth-req-block">
    <div class="auth-req-label" style="background:#3b82f6">Original Order</div>
    <div class="auth-code-block"><pre>BUY 100 Shares of RELIANCE
Status = Partially Filled
Executed = 60 Shares
Remaining = 40 Shares</pre></div>
  </div>
  <div class="auth-req-block">
    <div class="auth-req-label" style="background:#22c55e">After Cancel Request</div>
    <div class="auth-code-block"><pre>Executed 60 shares → Remain valid
Remaining 40 shares → Cancelled

Final Status: Partially Filled → Cancelled
Margin for 40 shares released back</pre></div>
  </div>
</div>
<p class="auth-text" style="margin-top:8px;">When you cancel a partially filled order, only the <b>remaining unfilled quantity</b> is cancelled. The already-executed shares are locked and cannot be undone.</p>

<!-- ═══════════════════ ADVANCED ═══════════════════ -->
<h2 id="order-states" class="auth-section-title">Order Life Cycle</h2>
<div class="po-lifecycle-grid">
  <div class="po-lc-col">
    <div class="po-lc-title">Successful Cancellation</div>
    <div class="po-lc-steps">
      <div class="po-lc-step po-lc-new">New</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-open">Open</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-partial">Cancel Request</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-cancel">Cancelled</div>
    </div>
  </div>
  <div class="po-lc-col">
    <div class="po-lc-title">Already Executed</div>
    <div class="po-lc-steps">
      <div class="po-lc-step po-lc-new">New</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-open">Open</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-filled">Filled</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-reject">Cancel Rejected</div>
    </div>
  </div>
  <div class="po-lc-col">
    <div class="po-lc-title">Partial Fill Cancel</div>
    <div class="po-lc-steps">
      <div class="po-lc-step po-lc-new">New</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-open">Open</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-partial">Partially Filled</div>
      <div class="po-lc-arrow">↓</div>
      <div class="po-lc-step po-lc-cancel">Partial → Cancelled</div>
    </div>
  </div>
</div>

<h2 id="advanced-concepts" class="auth-section-title">Advanced Concepts</h2>
<div class="po-adv-grid">
  <div class="po-adv-card">
    <div class="po-adv-title"> Exchange Validation</div>
    <p>Before cancelling, the exchange checks the current order status, whether it has already been matched, and whether cancellation is allowed for that order type.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title"> Risk Management System</div>
    <p>Broker systems verify user permissions, order ownership, and any exchange-level restrictions before forwarding the cancel request.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title"> Margin Release</div>
    <p>After successful cancellation, the funds or margins that were blocked for the order are released back to the user's available balance.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title"> Race Condition</div>
    <p>If the order executes at the exact same moment as your cancel request, the cancel may be rejected and the trade will have gone through. Always check the final status.</p>
  </div>
</div>

<h2 id="complete-flow" class="auth-section-title">Complete Cancel Order Flow</h2>
<div class="po-full-flow">
  <div class="po-ff-step"> User</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Cancel Order API</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step">Broker Risk Management</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Order Management System (OMS)</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Exchange</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Order Removed from Book</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step"> Margin Released</div><div class="po-ff-arr">↓</div>
  <div class="po-ff-step po-ff-final"> Confirmation Returned</div>
</div>

<!-- ─── Summary ─── -->
<div class="po-summary">
  <strong>In Simple Words:</strong> Cancel Order API allows users to stop a pending or open order before it gets executed. It helps traders avoid unwanted trades, manage risk, and adjust to changing market conditions — and releases blocked funds back to the account instantly.
</div>

<style>
.co-status-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin: 16px 0; }
.co-can-card { background: #f0fdf4; border: 1.5px solid #86efac; border-radius: 10px; padding: 16px; text-align: center; }
.co-can-icon { font-size: 24px; margin-bottom: 6px; }
.co-can-label { font-weight: 700; font-size: 14px; color: #15803d; margin-bottom: 6px; }
.co-can-example { font-family: monospace; font-size: 12px; background: rgba(0,0,0,0.05); padding: 5px 10px; border-radius: 5px; margin-bottom: 6px; }
.co-can-note { font-size: 12px; color: #374151; }
.co-cannot-card { background: #ffffff; border: 1.5px solid #fdba74; border-radius: 10px; padding: 16px; text-align: center; }
.co-cannot-icon { font-size: 24px; margin-bottom: 6px; }
.co-cannot-label { font-weight: 700; font-size: 14px; color: #9a3412; margin-bottom: 6px; }
.co-cannot-example { font-family: monospace; font-size: 12px; background: rgba(0,0,0,0.05); padding: 5px 10px; border-radius: 5px; margin-bottom: 6px; }
.co-cannot-note { font-size: 12px; color: #374151; }
</style>

</div>
