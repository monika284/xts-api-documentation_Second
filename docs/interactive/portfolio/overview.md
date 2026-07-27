<div class="po-wrap">

<!-- ═══ HERO ═══ -->
<div class="auth-hero">
  <h1 id="Portfolio" class="auth-hero-title">Portfolio Overview</h1>
  <p class="auth-hero-sub">Get a complete picture of your account — what you <strong>own</strong>, what <strong>positions</strong> you hold, and how your investments are <strong>performing</strong> in real time.</p>
  <div class="auth-analogy-row">
    <div class="auth-ana-card"><strong>Digital Folder</strong><span>= Portfolio</span></div>
    <div class="auth-ana-card"><strong>Bank Statement</strong><span>= Holdings API</span></div>
    <div class="auth-ana-card"><strong>Report Card</strong><span>= P&amp;L Summary</span></div>
  </div>
</div>

<!-- ═══ BEGINNER ═══ -->
<h2 id="what-is-portfolio" class="auth-section-title">What is a Portfolio?</h2>
<p class="auth-text">A portfolio is a <strong>digital folder</strong> that holds all the stocks, mutual funds, bonds, and other securities owned by an investor. Just like a bank statement shows your money, the portfolio shows all your investments in one place.</p>

<div class="po-analogy-grid">
  <div class="po-analogy-col">
    <div class="po-analogy-head">Real-Life Example</div>
    <div class="po-analogy-item"><span class="po-label">20 shares</span><span>Reliance Industries</span></div>
    <div class="po-analogy-item"><span class="po-label">10 shares</span><span>TCS</span></div>
    <div class="po-analogy-item"><span class="po-label">50 shares</span><span>HDFC Bank</span></div>
    <div class="po-analogy-item"><span class="po-label">Together</span><span>= Your Portfolio</span></div>
  </div>
  <div class="po-analogy-divider">↔</div>
  <div class="po-analogy-col">
    <div class="po-analogy-head">What Portfolio API Gives</div>
    <div class="po-analogy-item"><span class="po-label">Holdings</span><span>Stocks you own</span></div>
    <div class="po-analogy-item"><span class="po-label">Positions</span><span>Active open trades</span></div>
    <div class="po-analogy-item"><span class="po-label">Market Value</span><span>Current worth</span></div>
    <div class="po-analogy-item"><span class="po-label">P&amp;L</span><span>Profit or Loss</span></div>
  </div>
</div>

<h2 id="why-important" class="auth-section-title">Why is Portfolio Important?</h2>
<div class="auth-why-grid">
  <div class="auth-why-item"><span>Track all investments in one place</span></div>
  <div class="auth-why-item"><span>Monitor profit and loss in real time</span></div>
  <div class="auth-why-item"><span>Understand current holdings and their value</span></div>
  <div class="auth-why-item"><span>Measure overall investment performance</span></div>
  <div class="auth-why-item"><span>Make better, data-driven decisions</span></div>
  <div class="auth-why-item"><span>Diversify risk across different assets</span></div>
</div>

<h2 id="portfolio-workflow" class="auth-section-title">Portfolio Workflow</h2>
<div class="po-flow">
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">User Makes API Request</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Broker Server</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Account Database</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">Holdings &amp; Positions Retrieved</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step"><div class="po-flow-icon"></div><div class="po-flow-label">P&amp;L Calculated</div></div>
  <div class="po-flow-arrow">↓</div>
  <div class="po-flow-step po-flow-step--success"><div class="po-flow-icon">✅</div><div class="po-flow-label">Portfolio Data Returned</div></div>
</div>

<!-- ═══ INTERMEDIATE ═══ -->
<h2 id="components" class="auth-section-title">Portfolio Components</h2>
<div class="po-type-grid">
  <div class="po-type-card">
    <div class="po-type-badge">HOLDINGS</div>
    <p>Stocks and securities you currently own in your Demat account. Remain until you sell them.</p>
    <div class="po-type-example">Reliance × 20 | TCS × 10 | Infosys × 15</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">POSITIONS</div>
    <p>Currently active trades — intraday (Day) and carry-forward (Net) positions.</p>
    <div class="po-type-example">Buy Reliance @ ₹2800 → hold / sell same day</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">AVERAGE PRICE</div>
    <p>Average cost per share across multiple buy transactions.</p>
    <div class="po-type-example">(10×₹100 + 10×₹120) ÷ 20 = ₹110</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">MARKET VALUE</div>
    <p>Current worth of your holdings at live market price.</p>
    <div class="po-type-example">20 shares × ₹2900 = ₹58,000</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">INVESTED VALUE</div>
    <p>Total amount you originally paid to buy the shares.</p>
    <div class="po-type-example">20 shares × ₹2800 = ₹56,000</div>
  </div>
  <div class="po-type-card">
    <div class="po-type-badge">P&amp;L</div>
    <p>Profit or loss — difference between Market Value and Invested Value.</p>
    <div class="po-type-example">₹58,000 − ₹56,000 = ₹2,000 Profit</div>
  </div>
</div>

<h2 id="position-types" class="auth-section-title">Position Types</h2>
<div class="po-side-grid">
  <div class="po-side-card po-side-buy">
    <div class="po-side-title">Day Position</div>
    <p>Intraday trades opened and closed on the same trading day.</p>
    <div class="po-side-example">Buy Reliance @ ₹2800 → Sell @ ₹2820 same day</div>
    <p class="po-side-note">Profit = ₹20 per share (Realized)</p>
  </div>
  <div class="po-side-card po-side-sell">
    <div class="po-side-title">Net Position</div>
    <p>Positions carried forward beyond the current trading session.</p>
    <div class="po-side-example">Buy TCS today → Hold for several days</div>
    <p class="po-side-note">Profit is Unrealized until you sell</p>
  </div>
</div>

<h2 id="api-endpoints" class="auth-section-title">Portfolio API Endpoints</h2>
<div class="po-prod-grid">
  <div class="po-prod-card">
    <div class="po-prod-name">Holdings</div>
    <div class="po-prod-full">GET /interactive/portfolio/holdings</div>
    <p>All stocks currently owned. Includes symbol, qty, avg price, current price, market value.</p>
    <div class="po-prod-ex">Long-term delivery stocks in Demat</div>
  </div>
  <div class="po-prod-card">
    <div class="po-prod-name">Positions</div>
    <div class="po-prod-full">GET /interactive/portfolio/positions</div>
    <p>Active positions — intraday and carry-forward. Includes realized &amp; unrealized P&amp;L.</p>
    <div class="po-prod-ex">Open trades and their current status</div>
  </div>
  <div class="po-prod-card">
    <div class="po-prod-name">Funds</div>
    <div class="po-prod-full">GET /interactive/user/balance</div>
    <p>Available cash, used margin, and full balance breakdown across all segments.</p>
    <div class="po-prod-ex">Cash available + margin limits</div>
  </div>
</div>

<!-- ═══ ADVANCED ═══ -->
<h2 id="internal-working" class="auth-section-title">What Happens Internally?</h2>
<div class="auth-flow-steps">
  <div class="auth-flow-step"><strong>1</strong><span><b>User requests portfolio</b> — API call with valid session token</span></div>
  <div class="auth-flow-step"><strong>2</strong><span><b>Portfolio API validates session</b> — checks auth token</span></div>
  <div class="auth-flow-step"><strong>3</strong><span><b>Broker server fetches data</b> — holdings and positions from database</span></div>
  <div class="auth-flow-step"><strong>4</strong><span><b>Market prices retrieved</b> — live LTP fetched for each instrument</span></div>
  <div class="auth-flow-step"><strong>5</strong><span><b>P&amp;L calculated</b> — realized and unrealized computed per position</span></div>
  <div class="auth-flow-step"><strong>6</strong><span><b>Portfolio data returned</b> — full structured JSON response</span></div>
</div>

<h2 id="pnl" class="auth-section-title">P&amp;L Formulas</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0">

  <!-- Realized P&L -->
  <div style="border:1.5px solid #bbf7d0;border-radius:12px;overflow:hidden;background:#fff">
    <div style="background:#16a34a;padding:12px 18px;display:flex;align-items:center;gap:10px">
      <span style="font-size:20px"></span>
      <div>
        <div style="color:#fff;font-weight:700;font-size:15px">Realized P&amp;L</div>
        <div style="color:#bbf7d0;font-size:12px">Profit / loss from closed trades</div>
      </div>
    </div>
    <div style="padding:16px 18px">
      <p style="font-size:13px;color:#374151;margin:0 0 12px">Locked in when you <strong>complete a trade</strong> — Buy + Sell same stock.</p>
      <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px 14px;margin-bottom:12px">
        <div style="font-size:11px;font-weight:700;color:#16a34a;margin-bottom:6px;letter-spacing:.05em">FORMULA</div>
        <code style="font-size:13px;color:#111827;display:block">Realized P&amp;L = (Sell Price − Buy Price) × Qty</code>
      </div>
      <div style="background:#f9fafb;border-radius:8px;padding:12px 14px">
        <div style="font-size:11px;font-weight:700;color:#6b7280;margin-bottom:8px;letter-spacing:.05em">EXAMPLE</div>
        <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid #e5e7eb"><span style="color:#6b7280">Bought @</span><span style="font-weight:600">₹100</span></div>
        <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid #e5e7eb"><span style="color:#6b7280">Sold @</span><span style="font-weight:600">₹120</span></div>
        <div style="display:flex;justify-content:space-between;font-size:13px;padding:6px 0;margin-top:2px"><span style="color:#16a34a;font-weight:700">Profit</span><span style="color:#16a34a;font-weight:700">+₹20 per share</span></div>
      </div>
    </div>
  </div>

  <!-- Unrealized P&L -->
  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden;background:#fff">
    <div style="background:#f97316;padding:12px 18px;display:flex;align-items:center;gap:10px">
      <span style="font-size:20px"></span>
      <div>
        <div style="color:#fff;font-weight:700;font-size:15px">Unrealized P&amp;L</div>
        <div style="color:#ffedd5;font-size:12px">Floating profit / loss on open positions</div>
      </div>
    </div>
    <div style="padding:16px 18px">
      <p style="font-size:13px;color:#374151;margin:0 0 12px">Fluctuates with market price. <strong>Not in funds</strong> until position is closed.</p>
      <div style="background:#ffffff;border:1px solid #fed7aa;border-radius:8px;padding:12px 14px;margin-bottom:12px">
        <div style="font-size:11px;font-weight:700;color:#f97316;margin-bottom:6px;letter-spacing:.05em">FORMULA</div>
        <code style="font-size:12px;color:#111827;display:block;margin-bottom:4px">Long &nbsp;: P&amp;L = (LTP − Avg Buy Price) × Open Qty</code>
        <code style="font-size:12px;color:#111827;display:block">Short : P&amp;L = (Avg Sell Price − LTP) × Open Qty</code>
      </div>
      <div style="background:#f9fafb;border-radius:8px;padding:12px 14px">
        <div style="font-size:11px;font-weight:700;color:#6b7280;margin-bottom:8px;letter-spacing:.05em">EXAMPLE (LONG)</div>
        <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid #e5e7eb"><span style="color:#6b7280">Bought Reliance @</span><span style="font-weight:600">₹2,800</span></div>
        <div style="display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px solid #e5e7eb"><span style="color:#6b7280">Current LTP</span><span style="font-weight:600">₹2,900</span></div>
        <div style="display:flex;justify-content:space-between;font-size:13px;padding:6px 0;margin-top:2px"><span style="color:#f97316;font-weight:700">Unrealized</span><span style="color:#f97316;font-weight:700">+₹100 per share</span></div>
      </div>
    </div>
  </div>

</div>

<h2 id="use-cases" class="auth-section-title">Why Traders Use Portfolio APIs</h2>
<div class="po-adv-grid">
  <div class="po-adv-card">
    <div class="po-adv-title">Investment Tracking</div>
    <p>Monitor all investments across exchanges in one unified dashboard.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title">Risk Management</div>
    <p>Understand exposure to different stocks and sectors, and limit concentration risk.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title">Performance Analysis</div>
    <p>Measure gains and losses precisely — both realized and unrealized — over any period.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title">Portfolio Diversification</div>
    <p>Spread investment across Banking, IT, Pharma, FMCG to reduce market volatility risk.</p>
  </div>
  <div class="po-adv-card">
    <div class="po-adv-title">Automated Management</div>
    <p>Build robo-advisors and rebalancing bots that act on live portfolio data.</p>
  </div>
</div>

<h2 id="diversification" class="auth-section-title">Diversification Example</h2>
<div class="po-tif-grid">
  <div class="po-tif-card">
    <div class="po-tif-badge" style="background:#1e40af">Concentrated Risk</div>
    <p><strong>100% in one sector</strong> — if that sector crashes, your entire portfolio suffers.</p>
    <div class="po-type-example">₹1,00,000 → All in IT stocks</div>
  </div>
  <div class="po-tif-card">
    <div class="po-tif-badge" style="background:#16a34a">Diversified</div>
    <p><strong>Spread across sectors</strong> — one sector falls but others can offset the loss.</p>
    <div class="po-type-example">Banking 25% | IT 25% | Pharma 25% | FMCG 25%</div>
  </div>
</div>

<div class="po-summary">
  <strong>In Simple Words:</strong> A Portfolio is a complete collection of all investments owned by a user. Portfolio APIs return holdings, positions, investment value, market value, and profit or loss — allowing traders and apps to track and manage investments efficiently. Think of it as a <em>report card for your investments</em>, showing where your money is and how it is performing.
</div>

</div>
