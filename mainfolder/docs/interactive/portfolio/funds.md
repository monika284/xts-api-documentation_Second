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
  <div class="po-flow-step po-flow-step--success"><div class="po-flow-icon">✅</div><div class="po-flow-label">Funds Updated with P&amp;L</div></div>
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
    <div class="auth-req-label" style="background:#16a34a">Profit Adds to Funds</div>
    <div class="auth-code-block"><pre>Bought  @ ₹100
Sold    @ ₹120
Profit  = ₹20 per share

→ ₹20 gets ADDED to available balance</pre></div>
  </div>
  <div class="auth-req-block">
    <div class="auth-req-label" style="background:#ea580c">Loss Reduces Funds</div>
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
    <div class="po-tif-badge" style="background:#ff6b00">Before Placing Orders</div>
    <p>Always check available balance before placing large orders to avoid rejection due to insufficient margin.</p>
  </div>
  <div class="po-tif-card">
    <div class="po-tif-badge" style="background:#1e40af">Risk Management</div>
    <p>Monitor margin utilisation and set alerts when available balance falls below a safe threshold.</p>
  </div>
  <div class="po-tif-card">
    <div class="po-tif-badge" style="background:#16a34a">Withdrawals</div>
    <p>Use Pay-Out field to know the withdrawable balance without disturbing active positions.</p>
  </div>
  <div class="po-tif-card">
    <div class="po-tif-badge" style="background:#7c3aed">Margin Trading</div>
    <p>Track leveraged positions — ensure enough buffer so broker does not square off positions automatically.</p>
  </div>
</div>

<div class="po-summary">
  <strong>In Simple Words:</strong> Funds represent the money available in a trading account. They determine how much a user can trade, how much margin is used, and how much remains available. The Funds API provides a complete view of cash balance, margin, blocked amounts, and buying power — helping users manage their trading efficiently. Think of Funds as the <em>wallet of your trading account</em>, where money flows in and out as trades execute.
</div>

</div>
