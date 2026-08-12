<div class="po-wrap">

<!-- ═══ HERO ═══ -->
<div class="auth-hero">
  <h1 id="funds" class="auth-hero-title">Funds Overview</h1>
  <p class="auth-hero-sub">Funds represent the <strong>money available in your trading account</strong>. They determine buying power, margin utilisation, and whether you can place new orders.</p>
  <div class="auth-analogy-row">
    <div class="auth-ana-card"><strong>Trading Wallet</strong><span>= Funds</span></div>
    <div class="auth-ana-card"><strong>Credit Limit</strong><span>= Margin Available</span></div>
    <div class="auth-ana-card"><strong>Blocked Amount</strong><span>= Pending Orders</span></div>
  </div>
</div>

<!-- ═══ BEGINNER ═══ -->
<h2 id="what-are-funds" class="auth-section-title">What are Funds?</h2>
<p class="auth-text">Funds are like the <strong>wallet of your trading account</strong>. They show how much money you have, how much is being used, and how much is still free for trading. Without sufficient funds, orders cannot be placed.</p>

<div class="po-analogy-grid">
  <div class="po-analogy-col">
    <div class="po-analogy-head">Real-Life Example</div>
    <div class="po-analogy-item"><span class="po-label">Total</span><span>₹1,00,000</span></div>
    <div class="po-analogy-item"><span class="po-label">In Stocks</span><span>₹20,000</span></div>
    <div class="po-analogy-item"><span class="po-label">Blocked</span><span>₹10,000</span></div>
    <div class="po-analogy-item"><span class="po-label">Free</span><span>₹70,000</span></div>
  </div>
  <div class="po-analogy-divider">↔</div>
  <div class="po-analogy-col">
    <div class="po-analogy-head">Funds API Returns</div>
    <div class="po-analogy-item"><span class="po-label">Cash Balance</span><span>Total deposited</span></div>
    <div class="po-analogy-item"><span class="po-label">Used Margin</span><span>Blocked for trades</span></div>
    <div class="po-analogy-item"><span class="po-label">Available</span><span>Ready to trade</span></div>
    <div class="po-analogy-item"><span class="po-label">Buying Power</span><span>With leverage</span></div>
  </div>
</div>

<h2 id="why-important" class="auth-section-title">Why are Funds Important?</h2>
<div class="auth-why-grid">
  <div class="auth-why-item"><span>Know how much money is available for trading</span></div>
  <div class="auth-why-item"><span>Manage risk and prevent overtrading</span></div>
  <div class="auth-why-item"><span>Understand margin utilisation at a glance</span></div>
  <div class="auth-why-item"><span>Monitor deposits and withdrawals</span></div>
  <div class="auth-why-item"><span>Check buying power before placing orders</span></div>
  <div class="auth-why-item"><span>Track blocked and available amounts in real time</span></div>
</div>

<h2 id="funds-workflow" class="auth-section-title">How Funds Flow</h2>
<div class="po-flow">
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">User Deposits Money</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Funds Become Available</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">User Places Orders</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Margin Gets Blocked</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Trades Execute</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step po-flow-step--success"><div class="po-flow-icon"></div><div class="po-flow-label">Funds Updated with P&amp;L</div></div>
</div>

<!-- ═══ INTERMEDIATE ═══ -->
<h2 id="components" class="auth-section-title">Fund Components</h2>
<div class="po-type-grid">
  <div class="po-type-card">
    <div class="po-type-badge">AVAILABLE BALANCE</div>
    <p>Amount currently free for placing new orders.</p>
    <div class="po-type-example">₹1,00,000 − ₹20,000 used = ₹80,000 available</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">UTILISED MARGIN</div>
    <p>Amount blocked by open positions and pending orders.</p>
    <div class="po-type-example">Order requires ₹15,000 → ₹15,000 gets blocked</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">CASH BALANCE</div>
    <p>Actual money deposited via bank transfers, profits, or withdrawals.</p>
    <div class="po-type-example">Bank transfer → Trading account → Cash balance</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">BUYING POWER</div>
    <p>Total trading capacity including broker-provided leverage.</p>
    <div class="po-type-example">₹50,000 × 5× margin = ₹2,50,000 buying power</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">BLOCKED FUNDS</div>
    <p>Amounts reserved for pending orders, margin, and fees — released when order executes or cancels.</p>
    <div class="po-type-example">Buy 100 @ ₹100 → ₹10,000 blocked until fill/cancel</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">PAY-IN / PAY-OUT</div>
    <p>Pay-In is money added today. Pay-Out is money withdrawn today.</p>
    <div class="po-type-example">Deposit ₹25,000 ↑ &nbsp;|&nbsp; Withdraw ₹10,000 ↓</div>
  </div>
</div>

<h2 id="pnl-effect" class="auth-section-title">How P&amp;L Affects Funds</h2>
<div class="auth-req-row">
  <div class="auth-req-block">
    <div class="auth-req-label">Profit Adds to Funds</div>
    <div class="auth-code-block"><pre>Bought  @ ₹100
Sold    @ ₹120
Profit  = ₹20 per share

→ ₹20 gets ADDED to available balance</pre></div>
  </div>
  <div class="auth-req-block">
    <div class="auth-req-label">Loss Reduces Funds</div>
    <div class="auth-code-block"><pre>Bought  @ ₹100
Sold    @ ₹85
Loss    = ₹15 per share

→ ₹15 gets DEDUCTED from available balance</pre></div>
  </div>
</div>

<h2 id="api-endpoint" class="auth-section-title">API Endpoint</h2>
<div class="aec-card">
  <div class="aec-top">
    <span class="aec-label">ENDPOINT</span>
    <span class="aec-badge-post" style="background:#eff6ff;color:#1d4ed8;border-color:#bfdbfe">GET</span>
  </div>
  <div class="aec-url-row">
    <span class="aec-base">https://xts.rmoneyindia.co.in:3000</span><span class="aec-path">/interactive/user/balance</span>
  </div>
  <div class="aec-footer">
    <span class="aec-auth"> Requires: valid <code>Authorization</code> token</span>
    <button class="aec-copy-btn" onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/interactive/user/balance');this.textContent='✔ Copied';setTimeout(()=>this.textContent='Copy URL',2000)">Copy URL</button>
  </div>
</div>
</div>

## Request Body Parameters

<table class="param-table">
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
            <td>clientID</td>
            <td>
                ClientID
                <span class="info-icon"></span>
            </td>
            <td>N</td>
            <td>Client ID Mandatory in case of Dealer</td>
        </tr>
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
<tr><td>BalanceList</td><td>BalanceList</td><td>-</td></tr>
<tr><td>limitHeader</td><td>LimitHeader</td><td>A pipe (|) separated string, often representing category tags like segment|exchange|product (here "ALL|ALL|ALL" = applies to all).</td></tr>
<tr><td>limitObject</td><td>limitObject</td><td>Main object holding multiple limit &amp; margin details.</td></tr>
<tr><td>RMSSubLimits</td><td>RMSSubLimitsList</td><td>Represents RMS (Risk Management System) <strong>sub-limits</strong>.</td></tr>
<tr><td>cashAvailable</td><td>CashAvailable</td><td>Total free cash available for trading.</td></tr>
<tr><td>collateral</td><td>Collateral</td><td>Value of pledged securities/collateral.</td></tr>
<tr><td>marginUtilized</td><td>MarginUtilized</td><td>Margin currently blocked/used for trades.</td></tr>
<tr><td>netMarginAvailable</td><td>NetMarginAvailable</td><td>Remaining margin after utilization (cashAvailable + collateral - marginUtilized).</td></tr>
<tr><td>MTM</td><td>MTM</td><td>Mark-to-Market profit/loss.</td></tr>
<tr><td>UnrealizedMTM</td><td>UnrealizedMTM</td><td>P/L from open positions not yet squared off.</td></tr>
<tr><td>RealizedMTM</td><td>RealizedMTM</td><td>P/L from closed positions.</td></tr>
<tr><td>MarginAvailable</td><td>MarginAvailableList</td><td>Represents types of available margins.</td></tr>
<tr><td>CashMarginAvailable</td><td>CashMarginAvailable</td><td>Actual cash margin balance available.</td></tr>
<tr><td>AdhocMargin</td><td>AdhocMargin</td><td>Temporary/adhoc margin assigned by broker/RMS.</td></tr>
<tr><td>NotinalCash</td><td>NotinalCash</td><td>Virtual/notional cash margin (non-cash benefit).</td></tr>
<tr><td>PayInAmount</td><td>PayInAmount</td><td>Funds incoming from client.</td></tr>
<tr><td>PayOutAmount</td><td>PayOutAmount</td><td>Funds payable back to client.</td></tr>
<tr><td>CNCSellBenifit</td><td>CNCSellBenifit</td><td>Margins benefit from CNC (Cash &amp; Carry) sell transactions.</td></tr>
<tr><td>DirectCollateral</td><td>DirectCollateral</td><td>Margin directly from pledged collateral.</td></tr>
<tr><td>HoldingCollateral</td><td>HoldingCollateral</td><td>Margins benefit from stock holdings.</td></tr>
<tr><td>ClientBranchAdhoc</td><td>ClientBranchAdhoc</td><td>Branch-level adhoc margin allocated.</td></tr>
<tr><td>SellOptionsPremium</td><td>SellOptionsPremium</td><td>Premium received from option selling credited as margin.</td></tr>
<tr><td>TotalBranchAdhoc</td><td>TotalBranchAdhoc</td><td>Total adhoc margin provided at branch level.</td></tr>
<tr><td>AdhocFOMargin</td><td>AdhocFOMargin</td><td>Temporary margin for Futures &amp; Options.</td></tr>
<tr><td>AdhocCurrencyMargin</td><td>AdhocCurrencyMargin</td><td>Temporary margin for currency derivatives.</td></tr>
<tr><td>AdhocCommodityMargin</td><td>AdhocCommodityMargin</td><td>Temporary margin for commodities.</td></tr>
<tr><td>marginUtilizedList</td><td>marginUtilizedList</td><td>Represents how margin is being consumed.</td></tr>
<tr><td>CrossExposureMarginPresent</td><td>CrossExposureMarginPresent</td><td>Margin blocked for gross exposure positions.</td></tr>
<tr><td>BuyExposureMarginPresent</td><td>BuyExposureMarginPresent</td><td>Margin blocked for buy exposure.</td></tr>
<tr><td>SellExposureMarginPresent</td><td>SellExposureMarginPresent</td><td>Margin blocked for sell exposure.</td></tr>
<tr><td>VarELMarginPresent</td><td>VarELMarginPresent</td><td>Margin blocked under VaR + ELM requirement.</td></tr>
<tr><td>ScripBasketMarginPresent</td><td>ScripBasketMarginPresent</td><td>Margin blocked for scrip basket restrictions.</td></tr>
<tr><td>CrossExposureLimitPresent</td><td>CrossExposureLimitPresent</td><td>Limit consumed against gross exposure.</td></tr>
<tr><td>BuyExposureLimitPresent</td><td>BuyExposureLimitPresent</td><td>Limit consumed for buying exposure.</td></tr>
<tr><td>SellExposureLimitPresent</td><td>SellExposureLimitPresent</td><td>Limit consumed for selling exposure.</td></tr>
<tr><td>CNCLimitUsed</td><td>CNCLimitUsed</td><td>Limit used under CNC products.</td></tr>
<tr><td>CNCAamountUsed</td><td>CNCAamountUsed</td><td>Amount utilized under CNC trades.</td></tr>
<tr><td>MarginUsed</td><td>MarginUsed</td><td>Total margin currently blocked/used.</td></tr>
<tr><td>LimitUsed</td><td>LimitUsed</td><td>Other limits consumed (if applicable).</td></tr>
<tr><td>TotalSpanMargin</td><td>TotalSpanMargin</td><td>Margin utilized as SPAN (F&amp;O requirement).</td></tr>
<tr><td>ExposureMarginPresent</td><td>ExposureMarginPresent</td><td>Exposure margin used (non-SPAN component).</td></tr>
<tr><td>limitsAssigned</td><td>limitsAssignedList</td><td>Represents maximum limits allocated to accounts.</td></tr>
<tr><td>CNCLimit</td><td>CNCLimit</td><td>Maximum CNC (delivery) trading limit assigned.</td></tr>
<tr><td>TurnoverLimitPresent</td><td>TurnoverLimitPresent</td><td>Turnover limit allocated.</td></tr>
<tr><td>MTMLossLimitPresent</td><td>MTMLossLimitPresent</td><td>Limit on MTM loss allowed.</td></tr>
<tr><td>BuyExposureLimit</td><td>BuyExposureLimit</td><td>Maximum exposure allowed for buy trades.</td></tr>
<tr><td>SellExposureLimit</td><td>SellExposureLimit</td><td>Maximum exposure allowed for sell trades.</td></tr>
<tr><td>CrossExposureLimit</td><td>CrossExposureLimit</td><td>Overall gross exposure limit assigned.</td></tr>
<tr><td>CrossExposureDerivativesLimit</td><td>CrossExposureDerivativesLimit</td><td>Cross exposure limit for derivatives.</td></tr>
<tr><td>BuyExposureFuturesLimit</td><td>BuyExposureFuturesLimit</td><td>Exposure limit for futures buy trades.</td></tr>
<tr><td>BuyExposureOptionsLimit</td><td>BuyExposureOptionsLimit</td><td>Exposure limit for options buy trades.</td></tr>
<tr><td>SellExposureOptionsLimit</td><td>SellExposureOptionsLimit</td><td>Exposure limit for options sell trades.</td></tr>
<tr><td>SellExposureFuturesLimit</td><td>SellExposureFuturesLimit</td><td>Exposure limit for futures sell trades.</td></tr>
<tr><td>AccountID</td><td>AccountID</td><td>User login ID.</td></tr>
</tbody>
</table>

## Response Body JSON
<div style="position:relative;margin:8px 0 24px">
  <pre id="response-json-balance" style="background: #1e1e1e;color:#d4d4d4;border-radius:8px;padding:20px;font-family:Consolas,Menlo,monospace;font-size:13px;line-height:1.6;overflow:auto;max-height:420px;white-space:pre;margin:0">{
  "type": "success",
  "code": "s-user-0002",
  "description": "OK",
  "result": {
    "BalanceList": [
      {
        "limitHeader": "ALL|ALL|ALL",
        "limitObject": {
          "RMSSubLimits": {
            "cashAvailable": "267.2",
            "collateral": 0,
            "marginUtilized": "0",
            "netMarginAvailable": "267.2",
            "MTM": "0",
            "UnrealizedMTM": "0",
            "RealizedMTM": "0"
          },
          "marginAvailable": {
            "CashMarginAvailable": "267.2",
            "AdhocMargin": "0",
            "NotinalCash": "0",
            "PayInAmount": "0",
            "PayOutAmount": "0",
            "CNCSellBenifit": "0",
            "DirectCollateral": "0",
            "HoldingCollateral": "0",
            "ClientBranchAdhoc": "0",
            "SellOptionsPremium": "0",
            "NetOptionPremium": "0",
            "BuyOptionsPremium": "0",
            "TotalBranchAdhoc": "0",
            "AdhocFOMargin": "NaN",
            "AdhocCurrencyMargin": "NaN",
            "AdhocCommodityMargin": "NaN"
          },
          "marginUtilized": {
            "GrossExposureMarginPresent": "0",
            "BuyExposureMarginPresent": "0",
            "SellExposureMarginPresent": "0",
            "VarELMarginPresent": "0",
            "ScripBasketMarginPresent": "0",
            "GrossExposureLimitPresent": "0",
            "BuyExposureLimitPresent": "0",
            "SellExposureLimitPresent": "0",
            "CNCLimitUsed": "0",
            "CNCAmountUsed": "0",
            "MarginUsed": "0",
            "LimitUsed": "NaN",
            "TotalSpanMargin": "0",
            "ExposureMarginPresent": "0"
          },
          "limitsAssigned": {
            "CNCLimit": "0",
            "TurnoverLimitPresent": "0",
            "MTMLossLimitPresent": "0",
            "BuyExposureLimit": "0",
            "SellExposureLimit": "0",
            "GrossExposureLimit": "0",
            "GrossExposureDerivativesLimit": "0",
            "BuyExposureFuturesLimit": "0",
            "BuyExposureOptionsLimit": "0",
            "SellExposureOptionsLimit": "0",
            "SellExposureFuturesLimit": "0",
            "AdhocOptionsBuy": "0",
            "AdhocCashCNCMargin": "0"
          },
          "AccountID": "DVJ8588"
        }
      },
      {
        "limitHeader": "CASH|NSE|MTF",
        "limitObject": {
          "RMSSubLimits": {
            "cashAvailable": "0",
            "collateral": 0,
            "marginUtilized": "0",
            "netMarginAvailable": "0",
            "MTM": "0",
            "UnrealizedMTM": "0",
            "RealizedMTM": "0"
          },
          "marginAvailable": {
            "CashMarginAvailable": "0",
            "AdhocMargin": "0",
            "NotinalCash": "0",
            "PayInAmount": "0",
            "PayOutAmount": "0",
            "CNCSellBenifit": "0",
            "DirectCollateral": "0",
            "HoldingCollateral": "0",
            "ClientBranchAdhoc": "0",
            "SellOptionsPremium": "0",
            "NetOptionPremium": "0",
            "BuyOptionsPremium": "0",
            "TotalBranchAdhoc": "0",
            "AdhocFOMargin": "NaN",
            "AdhocCurrencyMargin": "NaN",
            "AdhocCommodityMargin": "NaN"
          },
          "marginUtilized": {
            "GrossExposureMarginPresent": "0",
            "BuyExposureMarginPresent": "0",
            "SellExposureMarginPresent": "0",
            "VarELMarginPresent": "0",
            "ScripBasketMarginPresent": "0",
            "GrossExposureLimitPresent": "0",
            "BuyExposureLimitPresent": "0",
            "SellExposureLimitPresent": "0",
            "CNCLimitUsed": "0",
            "CNCAmountUsed": "0",
            "MarginUsed": "0",
            "LimitUsed": "NaN",
            "TotalSpanMargin": "0",
            "ExposureMarginPresent": "0"
          },
          "limitsAssigned": {
            "CNCLimit": "0",
            "TurnoverLimitPresent": "0",
            "MTMLossLimitPresent": "0",
            "BuyExposureLimit": "0",
            "SellExposureLimit": "0",
            "GrossExposureLimit": "0",
            "GrossExposureDerivativesLimit": "0",
            "BuyExposureFuturesLimit": "0",
            "BuyExposureOptionsLimit": "0",
            "SellExposureOptionsLimit": "0",
            "SellExposureFuturesLimit": "0",
            "AdhocOptionsBuy": "0",
            "AdhocCashCNCMargin": "0"
          },
          "AccountID": "DVJ8588"
        }
      }
    ]
  }
}</pre>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){navigator.clipboard.writeText(document.getElementById('response-json-balance').innerText);var b=document.getElementById('balance-json-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})()" id="balance-json-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var p=document.getElementById('response-json-balance');var btn=document.getElementById('balance-json-toggle');if(p.style.maxHeight==='none'){p.style.maxHeight='420px';btn.textContent='Show Full'}else{p.style.maxHeight='none';btn.textContent='Show Less'}})()" id="balance-json-toggle" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Code Examples</h3>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="balanceShowCode('curl',this)" id="balance-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="balanceShowCode('python',this)" id="balance-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="balance-ce-box">
    <div id="balance-code-curl">
<span style="color:#d4d4d4">curl --location --request GET </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/user/balance'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span>
    </div>
    <div id="balance-code-python" style="display:none">
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
<br>
&nbsp;&nbsp;<span style="color:#9cdcfe">resp</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xt_interactive_data.</span><span style="color:#dcdcaa">get_balance</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(resp)</span><br>
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> __name__ == </span><span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">asyncio</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(main())</span>
    </div>
    <div id="balance-code-go" style="display:none">
<span style="color:#c586c0">package</span><span style="color:#d4d4d4"> main</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> (</span><span style="color:#ce9178">"fmt"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"net/http"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"io/ioutil"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">func</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">() {</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">, _ := http.</span><span style="color:#dcdcaa">NewRequest</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"DELETE"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder"</span><span style="color:#d4d4d4">, </span><span style="color:#569cd6">nil</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">.Header.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">res</span><span style="color:#d4d4d4">, _ := (&amp;http.Client{}).</span><span style="color:#dcdcaa">Do</span><span style="color:#d4d4d4">(req); </span><span style="color:#c586c0">defer</span><span style="color:#d4d4d4"> res.Body.</span><span style="color:#dcdcaa">Close</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">b</span><span style="color:#d4d4d4">, _ := ioutil.</span><span style="color:#dcdcaa">ReadAll</span><span style="color:#d4d4d4">(res.Body); fmt.</span><span style="color:#dcdcaa">Println</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">(b))<br>}</span>
    </div>
    <div id="balance-code-nodejs" style="display:none">
<span style="color:#c586c0">const</span><span style="color:#d4d4d4"> axios = </span><span style="color:#dcdcaa">require</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'axios'</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#dcdcaa">axios</span><span style="color:#d4d4d4">({method:</span><span style="color:#ce9178">'delete'</span><span style="color:#d4d4d4">,url:</span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder'</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4">:{</span><span style="color:#ce9178">'Authorization'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'xxxxxx'</span><span style="color:#d4d4d4">},</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">params</span><span style="color:#d4d4d4">:{clientID:</span><span style="color:#ce9178">'RM'</span><span style="color:#d4d4d4">,appOrderID:</span><span style="color:#ce9178">'1343000794'</span><span style="color:#d4d4d4">,exchangeSegment:</span><span style="color:#ce9178">'NSECM'</span><span style="color:#d4d4d4">,exchangeInstrumentID:</span><span style="color:#ce9178">'2885'</span><span style="color:#d4d4d4">}})</span><br>
<span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">then</span><span style="color:#d4d4d4">(r=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(r.data)).</span><span style="color:#dcdcaa">catch</span><span style="color:#d4d4d4">(e=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(e));</span>
    </div>
    <div id="balance-code-csharp" style="display:none">
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> HttpClient();</span><br>
<span style="color:#d4d4d4">client.DefaultRequestHeaders.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> response = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> client.</span><span style="color:#dcdcaa">DeleteAsync</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder?clientID=RM&amp;appOrderID=1343000794&amp;exchangeSegment=NSECM&amp;exchangeInstrumentID=2885"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#d4d4d4">Console.</span><span style="color:#dcdcaa">WriteLine</span><span style="color:#d4d4d4">(</span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> response.Content.</span><span style="color:#dcdcaa">ReadAsStringAsync</span><span style="color:#d4d4d4">());</span>
    </div>
    <div id="balance-code-java" style="display:none">
<span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> </span><span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#4ec9b0">Request</span><span style="color:#d4d4d4"> req = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> Request.</span><span style="color:#4ec9b0">Builder</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">url</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder?clientID=RM&amp;appOrderID=1343000794&amp;exchangeSegment=NSECM&amp;exchangeInstrumentID=2885"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">delete</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">addHeader</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">build</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#d4d4d4">System.out.</span><span style="color:#dcdcaa">println</span><span style="color:#d4d4d4">(client.</span><span style="color:#dcdcaa">newCall</span><span style="color:#d4d4d4">(req).</span><span style="color:#dcdcaa">execute</span><span style="color:#d4d4d4">().body().</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">());</span>
    </div>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=balance-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('balance-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="balance-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('balance-ce-box');var btn=document.getElementById('balance-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="balance-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<script>
function balanceShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('balance-code-' + l).style.display = 'none';
    document.getElementById('balance-tab-' + l).style.background = '#374151';
  });
  document.getElementById('balance-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>


<h2 id="response" class="auth-section-title">API Response Fields</h2>
<table class="auth-expiry-table" style="width:100%">
  <thead>
    <tr><th>Field</th><th>Description</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr><td><code>cashAvailable</code></td><td>Free cash in the trading account</td><td>₹50,000</td></tr>
    <tr><td><code>utilisedAmount</code></td><td>Margin blocked by open orders/positions</td><td>₹12,500</td></tr>
    <tr><td><code>netAvailableMargin</code></td><td>Cash + collateral − used margin</td><td>₹52,500</td></tr>
    <tr><td><code>collateralValue</code></td><td>Value of pledged securities as margin</td><td>₹15,000</td></tr>
    <tr><td><code>payin</code></td><td>Money added to account today</td><td>₹0</td></tr>
    <tr><td><code>payout</code></td><td>Money withdrawn today</td><td>₹0</td></tr>
  </tbody>
</table>

<!-- ═══ ADVANCED ═══ -->
<h2 id="internal-working" class="auth-section-title">What Happens Internally?</h2>
<div class="auth-flow-steps">
  <div class="auth-flow-step"><strong>1</strong><span><b>User requests fund details</b> — API call with valid session token</span></div>
  <div class="auth-flow-step"><strong>2</strong><span><b>Session validation</b> — broker server verifies auth token</span></div>
  <div class="auth-flow-step"><strong>3</strong><span><b>Ledger data retrieved</b> — cash balance, deposits, withdrawals fetched</span></div>
  <div class="auth-flow-step"><strong>4</strong><span><b>Margin engine calculates usage</b> — sums all blocked amounts from open orders and positions</span></div>
  <div class="auth-flow-step"><strong>5</strong><span><b>Account balances updated</b> — net available margin computed</span></div>
  <div class="auth-flow-step"><strong>6</strong><span><b>Response returned</b> — full structured JSON with all fund fields</span></div>
</div>

<h2 id="advanced-concepts" class="auth-section-title">Advanced Concepts</h2>
<div class="po-adv-grid">
  <div class="po-adv-card">
    <div class="po-adv-title">Margin Leverage</div>
    <p>Broker provides extra trading capacity. With 5× leverage, ₹20,000 capital can trade ₹1,00,000 worth of positions.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title">Realized P&amp;L</div>
    <p>Profit from closed trades is added to available funds immediately after the trade settles.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title">Unrealized P&amp;L</div>
    <p>Floating profit/loss on open positions. Not yet in funds — becomes real only when position is closed.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title">Risk Monitoring</div>
    <p>Broker systems continuously check margin, exposure, and losses. Orders are rejected if funds fall below required margin.</p>
  </div>
</div>

<h2 id="use-cases" class="auth-section-title">Common Use Cases</h2>
<div class="po-tif-grid">
  <div class="po-tif-card">
    <div class="po-tif-badge" style="background: #ff6b00">Before Placing Orders</div>
    <p>Always check available balance before placing large orders to avoid rejection due to insufficient margin.</p>
  </div>
  <div class="po-tif-card">
    <div class="po-tif-badge" style="background: #ff6b00">Risk Management</div>
    <p>Monitor margin utilisation and set alerts when available balance falls below a safe threshold.</p>
  </div>
  <div class="po-tif-card">
    <div class="po-tif-badge" style="background: #ff6b00">Withdrawals</div>
    <p>Use Pay-Out field to know the withdrawable balance without disturbing active positions.</p>
  </div>
  <div class="po-tif-card">
    <div class="po-tif-badge" style="background: #ff6b00">Margin Trading</div>
    <p>Track leveraged positions — ensure enough buffer so broker does not square off positions automatically.</p>
  </div>
</div>

<div class="po-summary">
  <strong>In Simple Words:</strong> Funds represent the money available in a trading account. They determine how much a user can trade, how much margin is used, and how much remains available. The Funds API provides a complete view of cash balance, margin, blocked amounts, and buying power — helping users manage their trading efficiently. Think of Funds as the <em>wallet of your trading account</em>, where money flows in and out as trades execute.
</div>

</div>
