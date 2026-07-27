<!-- ═══════════════ XTS API OVERVIEW ═══════════════ -->
<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">XTS API</h1>
<p class="iov-subtitle"><strong>XTS API (Xtreme Trading System API)</strong> is a complete trading framework that connects your application directly to brokers and stock exchanges — enabling market data, order management, portfolio services, and real-time updates.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v2H9V6a3 3 0 0 1 3-3zm0 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg></div><span>Secure authentication</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zm0 8h18v2H3v-2zm0 8h18v2H3v-2z"/></svg></div><span>Place &amp; manage orders</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5z"/></svg></div><span>Portfolio &amp; holdings</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>Real-time WebSocket</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Live market quotes</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.3 0 6 2.7 6 6 0 1-.3 2-.7 2.8l1.5 1.5C19.5 15 20 13.6 20 12c0-4.4-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6 0-1 .3-2 .7-2.8L5.2 7.7C4.5 9 4 10.4 4 12c0 4.4 3.6 8 8 8v3l4-4-4-4v3z"/></svg></div><span>Easy integration</span></div>
</div>

---

## What is XTS API?

<p class="iov-lead">XTS API acts as a <strong>bridge between your application and the stock exchange</strong>. It separates into two independent channels — Market Data (read-only feeds) and Interactive (two-way trading operations) — so network traffic never interferes with your orders.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0">
  <div class="iov-api-card" style="border:2px solid #bbf7d0;border-radius:14px;overflow:hidden">
    <div style="background:#16a34a;padding:14px 18px;display:flex;align-items:center;gap:12px">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <div><div style="color:#fff;font-weight:700;font-size:18px">Market Data API</div><div style="color:#bbf7d0;font-size:12px">Read-only market information</div></div>
    </div>
    <div style="padding:14px 18px;background:#fff">
      <ul style="margin:0;padding-left:18px;font-size:13px;color:#374151;line-height:2">
        <li>Live market quotes &amp; OHLC</li>
        <li>Historical price data</li>
        <li>Market depth (order book)</li>
        <li>Instrument search</li>
        <li>WebSocket quote streaming</li>
      </ul>
    </div>
  </div>
  <div class="iov-api-card" style="border:2px solid #fed7aa;border-radius:14px;overflow:hidden">
    <div style="background:#ff6b00;padding:14px 18px;display:flex;align-items:center;gap:12px">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
      <div><div style="color:#fff;font-weight:700;font-size:18px">Interactive API</div><div style="color:#ffedd5;font-size:12px">Two-way trading operations</div></div>
    </div>
    <div style="padding:14px 18px;background:#fff">
      <ul style="margin:0;padding-left:18px;font-size:13px;color:#374151;line-height:2">
        <li>User authentication &amp; sessions</li>
        <li>Place / Modify / Cancel orders</li>
        <li>Holdings &amp; positions</li>
        <li>Funds &amp; margin</li>
        <li>Real-time order updates</li>
      </ul>
    </div>
  </div>
</div>

## API Request Flow

<div class="iov-workflow">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg></div><span>User Login</span></div>
  <div class="iov-wf-arrow">&rarr;</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v2H9V6a3 3 0 0 1 3-3zm0 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg></div><span>Authentication</span></div>
  <div class="iov-wf-arrow">&rarr;</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Access Token</span></div>
  <div class="iov-wf-arrow">&rarr;</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>API Request</span></div>
  <div class="iov-wf-arrow">&rarr;</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/></svg></div><span>XTS Gateway</span></div>
  <div class="iov-wf-arrow">&rarr;</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg></div><span>Broker / Exchange</span></div>
  <div class="iov-wf-arrow">&rarr;</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7l-2 4h8l-2-4h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 14H3V4h18v12z"/></svg></div><span>Response</span></div>
</div>

## REST vs WebSocket

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0 24px">
  <div class="iov-api-card" style="border:1.5px solid #dbeafe;border-radius:12px;overflow:hidden">
    <div style="background:#1d4ed8;padding:12px 18px"><div style="color:#fff;font-weight:700;font-size:14px">REST APIs</div><div style="color:#bfdbfe;font-size:12px">Request → Response pattern</div></div>
    <div style="padding:14px 18px;background:#fff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2"><li>Login &amp; authentication</li><li>Place / modify / cancel orders</li><li>Fetch holdings &amp; positions</li><li>Check funds &amp; margin</li></ul>
    </div>
  </div>
  <div class="iov-api-card" style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:12px 18px"><div style="color:#fff;font-weight:700;font-size:14px">WebSocket APIs</div><div style="color:#ffedd5;font-size:12px">Continuous real-time stream</div></div>
    <div style="padding:14px 18px;background:#fff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2"><li>Live market quotes</li><li>Order status updates</li><li>Trade execution alerts</li><li>Position P&amp;L changes</li></ul>
    </div>
  </div>
</div>

---

# Welcome to RMoney APIs

<div class="hp-section">
<h2 id="about-rmoney" class="hp-section-title">About RMoney</h2>
<p class="hp-lead">RMoney is a technology-driven stock broking and investment platform that provides traders and investors with access to financial markets through modern trading applications, desktop platforms, and APIs.</p>
<p class="hp-lead">RMoney enables users to trade across multiple market segments including Equity, Futures &amp; Options (F&amp;O), Currency, and Commodities. Along with manual trading, RMoney also provides API-based trading infrastructure that allows developers and traders to build custom applications, automate trading strategies, and access market data programmatically.</p>
</div>

---

<div class="hp-section">
<div class="hp-two-col">

<div>
<h2 id="what-are-rmoney-apis" class="hp-section-title">What are RMoney APIs?</h2>
<p class="hp-lead">RMoney APIs are a collection of developer interfaces that allow applications to communicate directly with the RMoney trading ecosystem. Instead of placing orders manually, developers can use APIs to perform actions automatically.</p>
<ul class="hp-bullets">
  <li>Retrieve live market prices</li>
  <li>Access historical market data</li>
  <li>Place buy and sell orders</li>
  <li>Track positions and holdings</li>
  <li>Monitor portfolios</li>
  <li>Receive real-time market updates</li>
  <li>Build algorithmic trading systems</li>
</ul>
<p class="hp-note">These APIs are based on the Symphony XTS framework and are designed for high-speed trading and market data access.</p>
</div>

<div>
<h2 id="why-use-rmoney-apis" class="hp-section-title">Why Use RMoney APIs?</h2>
<p class="hp-lead">RMoney APIs help developers and traders build powerful financial applications without needing to create trading infrastructure from scratch.</p>
<ul class="hp-bullets">
  <li>Automated trading</li>
  <li>Real-time market access</li>
  <li>Fast order execution</li>
  <li>Portfolio management</li>
  <li>Custom trading dashboards</li>
  <li>Strategy automation</li>
  <li>Market analytics</li>
  <li>Trading bots</li>
</ul>
<p class="hp-note">Whether you are building a simple stock tracker or a complete algorithmic trading platform, RMoney APIs provide the building blocks required for development.</p>
</div>

</div>
</div>

---

<div class="hp-section">
<h2 id="api-categories" class="hp-section-title">API Categories</h2>
<p class="hp-lead">RMoney APIs are divided into different categories based on functionality.</p>
<div class="hp-cat-grid">

  <a href="/market/overview/" class="hp-cat-card">
    <h3>Market Data APIs</h3>
    <p>Access live and historical market information for stocks, derivatives, and more. Commonly used in charting applications, watchlists, screeners, and analytics platforms.</p>
    <ul>
      <li>Get real-time stock prices</li>
      <li>Access historical data</li>
      <li>Retrieve OHLC candles</li>
      <li>View market depth</li>
      <li>Search instruments</li>
      <li>Receive tick-by-tick updates</li>
    </ul>
    <span class="hp-cat-link">Explore Market Data APIs &rarr;</span>
  </a>

  <a href="/orders/overview/" class="hp-cat-card">
    <h3>Trading APIs</h3>
    <p>Place and manage orders directly through your application. The foundation of automated trading systems and trading platforms.</p>
    <ul>
      <li>Place orders</li>
      <li>Modify orders</li>
      <li>Cancel orders</li>
      <li>Check order status</li>
      <li>Track positions</li>
      <li>Manage portfolios</li>
    </ul>
    <span class="hp-cat-link">Explore Trading APIs &rarr;</span>
  </a>

  <a href="/portfolio/overview/" class="hp-cat-card">
    <h3>Portfolio APIs</h3>
    <p>Monitor investments and trading activity with detailed account information. Useful for portfolio management systems and investment dashboards.</p>
    <ul>
      <li>Holdings</li>
      <li>Positions</li>
      <li>Funds &amp; margins</li>
      <li>Profit &amp; Loss</li>
      <li>Account summary</li>
    </ul>
    <span class="hp-cat-link">Explore Portfolio APIs &rarr;</span>
  </a>

  <a href="/websocket/overview/" class="hp-cat-card">
    <h3>WebSocket APIs</h3>
    <p>Receive real-time streaming data with persistent WebSocket connections. Ideal for low-latency trading applications.</p>
    <ul>
      <li>Live market ticks</li>
      <li>Real-time quotes</li>
      <li>Order updates</li>
      <li>Position updates</li>
      <li>Market depth updates</li>
    </ul>
    <span class="hp-cat-link">Explore WebSocket APIs &rarr;</span>
  </a>

</div>
</div>

---

<div class="hp-section">
<div class="hp-two-col">

<div>
<h2 id="supported-segments" class="hp-section-title">Supported Market Segments</h2>
<p class="hp-lead">RMoney APIs support multiple trading segments through a unified interface, allowing developers to manage different asset classes using a single API ecosystem.</p>
<div class="hp-seg-grid">
  <span class="hp-seg-pill">Equity</span>
  <span class="hp-seg-pill">Equity Intraday</span>
  <span class="hp-seg-pill">Futures</span>
  <span class="hp-seg-pill">Options</span>
  <span class="hp-seg-pill">Currency</span>
  <span class="hp-seg-pill">Commodities</span>
</div>
</div>

<div>
<h2 id="technology-integration" class="hp-section-title">Technology &amp; Integration</h2>
<p class="hp-lead">RMoney APIs can be integrated with various technologies and programming languages, allowing developers to build applications using their preferred technology stack.</p>
<div class="hp-tech-grid">
  <span class="hp-tech-pill">Python</span>
  <span class="hp-tech-pill">Java</span>
  <span class="hp-tech-pill">C++</span>
  <span class="hp-tech-pill">C#</span>
  <span class="hp-tech-pill">JavaScript</span>
  <span class="hp-tech-pill">.NET</span>
  <span class="hp-tech-pill">Excel</span>
</div>
</div>

</div>
</div>

---

<div class="hp-section">
<h2 id="who-can-use" class="hp-section-title">Who Can Use RMoney APIs?</h2>
<p class="hp-lead">RMoney APIs are designed for a wide range of users in the financial and technology space.</p>
<div class="hp-who-grid">

  <div class="hp-who-card">
    <div class="hp-who-icon">&#128200;</div>
    <h4>Traders</h4>
    <p>Automate strategies and execute trades faster than manual trading.</p>
  </div>

  <div class="hp-who-card">
    <div class="hp-who-icon">&#128187;</div>
    <h4>Developers</h4>
    <p>Build custom trading applications and financial tools.</p>
  </div>

  <div class="hp-who-card">
    <div class="hp-who-icon">&#127970;</div>
    <h4>FinTech Companies</h4>
    <p>Integrate market data and trading capabilities into products.</p>
  </div>

  <div class="hp-who-card">
    <div class="hp-who-icon">&#128300;</div>
    <h4>Researchers</h4>
    <p>Analyze historical data and develop quantitative models.</p>
  </div>

  <div class="hp-who-card">
    <div class="hp-who-icon">&#129302;</div>
    <h4>Algo Traders</h4>
    <p>Automate complete trading workflows using APIs.</p>
  </div>

</div>
</div>

---

<div class="hp-section">
<h2 id="api-workflow" class="hp-section-title">Typical API Workflow</h2>
<p class="hp-lead">A typical RMoney API workflow covers the full cycle from login to real-time updates, powering most trading and investment applications.</p>
<div class="hp-wf-grid">
  <div class="hp-wf-step">User logs in</div>
  <div class="hp-wf-step">Authentication token is generated</div>
  <div class="hp-wf-step">Application requests market data</div>
  <div class="hp-wf-step">User selects an instrument</div>
  <div class="hp-wf-step">Order is placed</div>
  <div class="hp-wf-step">Order status is monitored</div>
  <div class="hp-wf-step">Positions and portfolio are updated</div>
  <div class="hp-wf-step">Real-time updates via WebSocket streams</div>
</div>
</div>

---

<div class="hp-section">
<h2 id="key-features" class="hp-section-title">Key Features</h2>
<div class="hp-feat-grid">
  <div class="hp-feat-item">Real-Time Market Data</div>
  <div class="hp-feat-item">Historical Market Data</div>
  <div class="hp-feat-item">Fast Order Execution</div>
  <div class="hp-feat-item">Portfolio Tracking</div>
  <div class="hp-feat-item">Multi-Segment Trading</div>
  <div class="hp-feat-item">WebSocket Streaming</div>
  <div class="hp-feat-item">Strategy Automation</div>
  <div class="hp-feat-item">Order Management</div>
  <div class="hp-feat-item">Instrument Search</div>
  <div class="hp-feat-item">Risk Monitoring</div>
  <div class="hp-feat-item">Algo Trading Support</div>
  <div class="hp-feat-item">Developer-Friendly APIs</div>
</div>
</div>

---

<div class="hp-section">
<h2 id="getting-started" class="hp-section-title">Getting Started</h2>
<p class="hp-lead">Follow these steps to start using RMoney APIs and build your first trading application.</p>
<div class="hp-start-steps">
  <div class="hp-start-step"><p>Open an RMoney trading account.</p></div>
  <div class="hp-start-step"><p>Request API access from the RMoney team.</p></div>
  <div class="hp-start-step"><p>Generate your API credentials from the dashboard.</p></div>
  <div class="hp-start-step"><p>Authenticate your application using the Interactive API.</p></div>
  <div class="hp-start-step"><p>Start accessing market data and trading services.</p></div>
</div>

<h2>Ready to Build?</h2>
<p>Once authenticated, you can build trading applications, analytics platforms, investment tools, and automated trading systems using the RMoney API ecosystem.</p>
<div class="qsn">
<h3 id="exit-bracket-order" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Reference Manual</h3>
<h2><bold>📘 The Complete Reference Manual: Symphony XTS API v2 & Python Client Library</h2>
<p>Welcome! This is a comprehensive, standalone guide designed for new users and programmers to master the Symphony XTS Front-End API (v2.0) and its official Python client library, xts-api-client.</p>
<p>No prior experience with trading APIs is required. We explain everything from high-level architecture to low-level parameters, supplemented by visual diagrams and code examples.<p>
<h3 id="ref-1-concepts" style="display:flex;align-items:center;gap:10px;margin:28px 0 10px;padding:10px 16px;background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 8px 8px 0"><span style="background:#ff6b00;color:#fff;border-radius:50%;min-width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">1</span><span style="color:#1e293b;font-weight:700;font-size:18px">High-Level Concepts &amp; Mental Models</span></h3>
<h4>What is XTS?</h4>
<p>Symphony XTS is a high-speed trading system interface. It sits between your custom software (trading bot, dashboard, or scanner) and the stock brokers/exchanges (like NSE, BSE, MCX).</p>
<h4>The Two-Channel Split (Dual Engine)</h4>
<p>To prevent network traffic jams, XTS separates commands into two entirely independent channels:</p>
<div style="text-align: center;">
<img src="../imgs/xts_flow.png" alt="XTS file Architecture">
</div>
<div style="text-align: center">
<img src="../imgs/4th.png" alt="XTS Architecture">
<img src="../imgs/9th.png" alt="XTS Architecture">
</div>
<ul>
    <li><strong>Interactive API :</strong> Private and secure. Used to place trades, check cash balances, query open positions, and get instant notifications when your orders fill.
    <li><strong>Market Data API :</strong>  Public and read-only. Used to fetch stock names, request historical candle data, and stream real-time price updates (LTP, bid/ask spreads).
</ul>
<h3 id="ref-2-vocabulary" style="display:flex;align-items:center;gap:10px;margin:28px 0 10px;padding:10px 16px;background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 8px 8px 0"><span style="background:#ff6b00;color:#fff;border-radius:50%;min-width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">2</span><span style="color:#1e293b;font-weight:700;font-size:18px">Technical Vocabulary &amp; Business Rules</span></h3>
<p>Before writing code, you must understand the terminology used in API parameters:</p>
<h4><bold>A. Exchange Segments</h4>
<p>Tells XTS which market segment you are querying:</p>
  <ul>
     <li><strong>NSECM (1): </strong>National Stock Exchange Cash Market (Buying actual shares of Reliance, TCS, etc.)</li>
     <li><strong>NSEFO (2):</strong>National Stock Exchange Futures & Options (Trading Nifty options/futures)</li>
     <li><strong>NSECD (3): </strong>National Stock Exchange Currency Derivatives (USD/INR trading)</li>
     <li><strong>MCXFO (51):</strong> Multi Commodity Exchange Futures & Options (Gold, Silver, Crude Oil)</li>
     <li><strong>BSECM (11) & BSEFO (12):</strong> Bombay Stock Exchange equivalents</li>
  </ul>
<h4><bold>B. Product Types</h4>
<p>Tells the broker how to manage the trade margin and holding period:</p>
  <ul>
     <li><strong>MIS (Margin Intraday Square-off):</strong> Closed automatically before market shuts. Offers high leverage.</li>
     <li><strong>NRML (Normal): </strong>Used to hold futures & options contracts for multiple days.</li>
     <li><strong>CNC (Cash and Carry):</strong> Used to buy actual stock shares for long-term investing. No leverage.</li>
  </ul>
<h4><bold>C. Order Types</h4>
  <ul>
     <li><strong>MARKET:</strong> Buys/sells immediately at the best available current market price.</li>
     <li><strong> LIMIT:</strong> Executes only at your specified price or better.</li>
     <li><strong>STOPMARKET:</strong> Triggered when the market price hits a target trigger price, then executes as a Market order.</li>
     <li><strong>STOPLIMIT: </strong>Triggered when the market price hits a target trigger price, then places a Limit order.</li>
  </ul>
<h4><bold>D. Time In Force (Validity)</h4>
  <ul>
     <li><strong>DAY: </strong>The order is valid until the market closes today.</li>
     <li><strong> IOC (Immediate or Cancel):</strong> The order must execute instantly, or any unfilled part is cancelled.</li>
     <li><strong>FOK (Fill or Kill): </strong>The entire order must execute instantly in full, or the whole order is cancelled.</li>
  </ul>
<h3 id="ref-3-architecture" style="display:flex;align-items:center;gap:10px;margin:28px 0 10px;padding:10px 16px;background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 8px 8px 0"><span style="background:#ff6b00;color:#fff;border-radius:50%;min-width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">3</span><span style="color:#1e293b;font-weight:700;font-size:18px">Library Architecture &amp; File Structure</span></h3>
<p>Here is a map of the <strong>xts-api-client</strong> package, detailing what each file does:
<div style="text-align: center">
<img src="../imgs/3rd.png" alt="XTS file Architecture">
</div>
<h3 id="ref-4-auth" style="display:flex;align-items:center;gap:10px;margin:28px 0 10px;padding:10px 16px;background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 8px 8px 0"><span style="background:#ff6b00;color:#fff;border-radius:50%;min-width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">4</span><span style="color:#1e293b;font-weight:700;font-size:18px">REST API Reference: Authentication &amp; Session</span></h3>
<p>Every action requires a session token. Here is the lifecycle of an XTS session:</p>
<div style="text-align: center">
<img src="../imgs/5th.png" alt="XTS file Architecture" data-no-lb>
</div>

---

<div class="hp-section">
<h2 id="authentication-endpoints" class="hp-section-title">Authentication Endpoints</h2>
<ul class="hp-bullets">
  <li><strong>Interactive Login:</strong> <code>POST /interactive/user/session</code></li>
  <li><strong>Interactive Logout:</strong> <code>DELETE /interactive/user/session</code></li>
  <li><strong>Market Data Login:</strong> <code>POST /apimarketdata/auth/login</code></li>
  <li><strong>Market Data Logout:</strong> <code>DELETE /apimarketdata/auth/logout</code></li>
</ul>

<h2 id="auth-code-example" class="hp-section-title">Python Authentication Code Example</h2>

```python
import asyncio
from xts_api_client.xts_connect_async import XTSConnect

async def manage_session():
    # 1. Initialize the clients
    interactive_client = XTSConnect(
        apiKey="your_interactive_key",
        secretKey="your_interactive_secret",
        source="WEBAPI",
        root="https://api.yourbroker.com"
    )

    # 2. Login (This fetches and automatically saves the token to client.token)
    login_resp = await interactive_client.interactive_login()
    print("Interactive Logged In! Token:", interactive_client.token)
    print("User ID:", interactive_client.userID)

    # 3. Log out to clean up session
    logout_resp = await interactive_client.interactive_logout()
    print("Logged out successfully!")

asyncio.run(manage_session())
```

</div>
<h3 id="ref-5-interactive" style="display:flex;align-items:center;gap:10px;margin:28px 0 10px;padding:10px 16px;background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 8px 8px 0"><span style="background:#ff6b00;color:#fff;border-radius:50%;min-width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">5</span><span style="color:#1e293b;font-weight:700;font-size:18px">Interactive API (Trading Operations)</span></h3>
<p>The Interactive client manages your money, orders, and positions.</p>
<h4><bold>A. Order Placement & The Order Lifecycle</h4>
<p>When you submit an order, it moves through a state machine inside the exchange:</p>
<div style="text-align: center">
<img src="../imgs/7th.png" alt="XTS file Architecture">
</div>
<h4><bold>B. Order Parameters Deep Dive</h4>
<p>When calling <strong>place_order()</strong>, you must specify the following parameters:</p>

```python
response = await client.place_order(
    exchangeSegment="NSECM",           # "NSECM", "NSEFO", "MCXFO"
    exchangeInstrumentID=2885,         # Numeric code for the stock (e.g. 2885 for RELIANCE)
    productType="MIS",                 # "MIS" (Intraday), "NRML" (F&O Carryover), "CNC" (Equity Delivery)
    orderType="LIMIT",                 # "MARKET", "LIMIT", "STOPMARKET", "STOPLIMIT"
    orderSide="BUY",                   # "BUY" or "SELL"
    timeInForce="DAY",                 # "DAY", "IOC"
    disclosedQuantity=0,               # Quantity visible to public order book (0 hides nothing)
    orderQuantity=10,                  # Total quantity to buy/sell
    limitPrice=2450.50,                # Price to execute (required if LIMIT or STOPLIMIT)
    stopPrice=0.0,                     # Trigger price (required if STOPMARKET or STOPLIMIT)
    orderUniqueIdentifier="my_bot_01"  # Custom string tag to track this specific order
)
```

<h4>C. Advanced Order Types (Cover &amp; Bracket)</h4>
<h5>1. Cover Orders (CO)</h5>
<p>A Cover Order has a <strong>stop-loss order chained directly to it</strong>. It is highly leveraged and requires an entry transaction and a trigger price (the stop-loss activation level).</p>
<div class="qsn-flow">
  <div class="qsn-flow-box">1. Entry Order<br><small>(Market or Limit)</small></div>
  <div class="qsn-flow-arrow">
    <span class="qsn-arrow-label">If Filled</span>
    <span class="qsn-arrow-line">&#10230;</span>
  </div>
  <div class="qsn-flow-box">2. Stop Loss triggerPrice<br><small>(Active on Exchange)</small></div>
  <div class="qsn-flow-arrow">
    <span class="qsn-arrow-label">If price hits Trigger level</span>
    <span class="qsn-arrow-line">&#10230;</span>
  </div>
  <div class="qsn-flow-box">3. Executed Exit<br><small>(Market Order)</small></div>
</div>
<p><strong>Cover Order Parameters &amp; Code:</strong></p>

```python
# Place a Cover Order: Buy Reliance at market, stop-loss trigger active at ₹2400
co_response = await client.place_cover_order(
    exchangeSegment="NSECM",
    exchangeInstrumentID=2885,
    orderSide="BUY",
    orderType="MARKET",
    orderQuantity=5,
    disclosedQuantity=0,
    limitPrice=0.0,                    # 0.0 because orderType is MARKET
    stopPrice=2400.0,                  # Stop Loss Trigger level
    orderUniqueIdentifier="co_trade_01"
)
```
<h5>2. Bracket Orders (BO)</h5>
<p>A Bracket Order surrounds your entry order with two bracket legs: a <strong>Take Profit Target </strong>and a<strong> Stop-Loss Protection. </strong>Both exit orders are sent to the exchange as a <strong>One-Cancels-the-Other (OCO) </strong> pair.</p>
<div style="text-align: center">
<img src="../imgs/6th.png" alt="XTS file Architecture">
</div>
<p><strong>Bracket Order Parameters &amp; Code:</strong></p>

```python
# Place a Bracket Order: Buy Reliance at ₹2450. Sell at ₹2500 for profit (+50) or ₹2420 for loss (-30)
bo_response = await client.place_bracketorder(
    exchangeSegment="NSECM",
    exchangeInstrumentID=2885,
    orderType="LIMIT",
    orderSide="BUY",
    disclosedQuantity=0,
    orderQuantity=10,
    limitPrice=2450.00,
    squarOff=50.0,                     # Profit target offset (added to entry price)
    stopLossPrice=30.0,                # Stop-Loss protection offset (subtracted from entry price)
    trailingStoploss=0.0,              # 0.0 means inactive. Set value to adjust SL up as price rises
    isProOrder=False,                  # Set True for proprietary trading accounts
    orderUniqueIdentifier="bo_trade_01"
)
```

<h4>D. Spread &amp; GTT Orders</h4>

<h5>1. Spread Orders</h5>
<p>Spread orders let you trade price differences between two stock options or futures contracts simultaneously (e.g. buying July Futures and selling August Futures).</p>
<ul class="hp-bullets">
  <li><strong>Place Spread:</strong> <code>POST /interactive/orders/spread</code></li>
  <li><strong>Modify Spread:</strong> <code>PUT /interactive/orders/spread</code></li>
  <li><strong>Cancel Spread:</strong> <code>DELETE /interactive/orders/spread</code></li>
</ul>

<h5>2. GTT (Good-Till-Triggered) Orders</h5>
<p>GTT orders remain active in the system for <strong>weeks or months</strong> until a target trigger price is hit. Once hit, it launches a standard order.</p>
<ul class="hp-bullets">
  <li><strong>Place GTT:</strong> <code>POST /interactive/orders/gtt</code></li>
  <li><strong>GTT Order Book:</strong> <code>GET /interactive/orders/gtt/orderbook</code></li>
  <li><strong>Cancel GTT:</strong> <code>DELETE /interactive/orders/gtt</code></li>
</ul>

<h4>E. Portfolio Management &amp; Positions</h4>
<p>Once you have active trades, you query your balances and positions:</p>

```python
async def query_portfolio(client):
    # 1. Available margin and cash balance
    balance = await client.get_balance()
    available_cash = balance['result']['BalanceList'][0]['limitObject']['RMSSubLimits']['cashAvailable']
    print(f"Available Cash: ₹{available_cash}")

    # 2. Holdings (Long-term stocks held in your demat account)
    holdings = await client.get_holding()
    print("Holdings List:", holdings['result'])

    # 3. Daywise positions (Today's trading activity)
    day_pos = await client.get_position_daywise()

    # 4. Netwise positions (Current active net open positions)
    net_pos = await client.get_position_netwise()
    for pos in net_pos['result']:
        print(f"Instrument: {pos['ExchangeInstrumentID']} | Open Qty: {pos['NetQty']} | MTM PnL: ₹{pos['MTM']}")

    # 5. Convert Position (e.g., convert Intraday 'MIS' to Delivery 'CNC')
    await client.convert_position(
        exchangeSegment="NSECM",
        exchangeInstrumentID=2885,
        targetQty=5,
        isDayWise=True,
        oldProductType="MIS",
        newProductType="CNC"
    )
```

<h4>F. Margin Calculator APIs</h4>
<p>You can request how much cash margin is required to place or modify orders <em>before</em> actually sending them:</p>
<ul class="hp-bullets">
  <li><strong>Regular Margin:</strong> <code>POST /interactive/margin/regular</code></li>
  <li><strong>Cover Margin:</strong> <code>POST /interactive/margin/cover</code></li>
  <li><strong>Bracket Margin:</strong> <code>POST /interactive/margin/bracket</code></li>
</ul>

---

<h3 id="ref-6-marketdata" style="display:flex;align-items:center;gap:10px;margin:28px 0 10px;padding:10px 16px;background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 8px 8px 0"><span style="background:#ff6b00;color:#fff;border-radius:50%;min-width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">6</span><span style="color:#1e293b;font-weight:700;font-size:18px">Market Data API (Feeds &amp; Queries)</span></h3>
<p>The Market Data client fetches historical chart candles, instrument identifiers, and subscriptions.</p>

```python
async def query_market_data(market_client):
    # 1. Search for a security by trading symbol
    search_resp = await market_client.search_by_scriptname("TATAMOTORS")
    instrument_id = search_resp['result'][0]['ExchangeInstrumentID']
    print(f"TATA Motors Instrument ID: {instrument_id}")

    # 2. Query Expiry Dates for Options/Futures contracts
    expiries = await market_client.get_expiry_date(
        exchangeSegment=2,             # NSEFO
        series="OPTIDX",               # Index Option
        symbol="NIFTY"
    )
    print("Nifty Option Expiries:", expiries['result'])

    # 3. Retrieve Historical Chart Candles (OHLC)
    candles = await market_client.get_ohlc(
        exchangeSegment=1,             # NSECM
        exchangeInstrumentID=22,       # NIFTY Index
        startTime="Jun 01 2026 091500",  # MMM DD YYYY HHMMSS
        endTime="Jun 15 2026 153000",
        compressionValue=5             # 5-minute intervals
    )
    print("Raw Candle Data:", candles['result']['dataReponse'][:200])
```

<h3 id="ref-7-websocket" style="display:flex;align-items:center;gap:10px;margin:28px 0 10px;padding:10px 16px;background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 8px 8px 0"><span style="background:#ff6b00;color:#fff;border-radius:50%;min-width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">7</span><span style="color:#1e293b;font-weight:700;font-size:18px">Real-time Socket Streaming (WebSockets via Socket.IO)</span></h3>
<p>WebSockets establish a constant, open channel of communication. Data flows automatically without your software having to ask for it.</p>

<h4>Step 1: Connection URL Breakdown</h4>
<p>The library connects to the socket using a specific query string:</p>
<ul class="hp-bullets">
  <li><strong>Interactive Socket:</strong> <code>{root_url}/?token={token}&amp;userID={userID}&amp;apiType=INTERACTIVE</code></li>
  <li><strong>Market Data Socket:</strong> <code>{root_url}/?token={token}&amp;userID={userID}&amp;publishFormat=JSON&amp;broadcastMode=Full</code></li>
</ul>

<h4>Step 2: The Event Code Map</h4>
<p>The Market Data socket streams message packets prefixed with numeric <strong>event codes</strong>:</p>
<div style="text-align: center">
<img src="../imgs/8th.png" alt="XTS file Architecture">
</div>

<h4>Step 3: Complete WebSocket Listener Implementation</h4>
<p>To catch these events, you subclass <code>MarketDataSocketClient</code> (for prices) or <code>InteractiveSocketClient</code> (for trading updates) and assign it to the socket managers:</p>

```python
import asyncio
from xts_api_client.xts_connect_async import XTSConnect
from xts_api_client.market_data_socket import MDSocket_io
from xts_api_client.market_data_socket_client import MarketDataSocketClient

# 1. Create your listener implementation
class RealTimePriceFeed(MarketDataSocketClient):
    async def on_connect(self):
        print(" Connected to live price feeds!")

    async def on_disconnect(self):
        print(" Socket disconnected!")

    async def on_error(self, data):
        print(" Error from Socket:", data)

    # Event 1512: LTP Ticks
    async def on_event_last_traded_price_full(self, data):
        print(f"Price Tick -> ID: {data['ExchangeInstrumentID']} | Price: ₹{data['LastTradedPrice']}")

    # Event 1501: Bid/Ask Depth Ticks
    async def on_event_touchline_full(self, data):
        print(f"Spread -> Bid: {data['BidInfo']['Price']} | Ask: {data['AskInfo']['Price']}")

# 2. Main initialization script
async def stream_prices():
    # Login HTTP first
    client = XTSConnect(
        apiKey="your_market_key",
        secretKey="your_market_secret",
        source="WEBAPI",
        root="https://api.yourbroker.com"
    )
    await client.marketdata_login()

    # Assign socket listener
    listener = RealTimePriceFeed()
    socket_client = MDSocket_io(
        token=client.token,
        userID=client.userID,
        root_url=client.root,
        marketdatasocketclient=listener
    )

    # Establish connection
    await socket_client.connect()

    # Subscribe to Reliance (2885) and Nifty (22)
    instruments = [
        {"exchangeSegment": 1, "exchangeInstrumentID": 2885},
        {"exchangeSegment": 1, "exchangeInstrumentID": 22}
    ]
    await client.send_subscription(Instruments=instruments, xtsMessageCode=1512)

    # Keep the program running to see ticks stream
    await asyncio.sleep(20)

    # Clean up
    await socket_client.disconnect()
    await client.marketdata_logout()

if __name__ == "__main__":
    asyncio.run(stream_prices())
```

<h3 id="ref-8-mtm" style="display:flex;align-items:center;gap:10px;margin:28px 0 10px;padding:10px 16px;background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 8px 8px 0"><span style="background:#ff6b00;color:#fff;border-radius:50%;min-width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">8</span><span style="color:#1e293b;font-weight:700;font-size:18px">Mark-To-Market (MTM) PnL Calculations</span></h3>
<p>Symphony calculates your unrealized profit or loss (PnL) in real-time. Here is how the math works:</p>
<div class="qsn-formula">Total PnL = Realized PnL + Unrealized PnL</div>

<h4>Realized PnL</h4>
<p>Realized PnL is locked in when you complete a trade loop (Buy and Sell the same contract).</p>
<div class="qsn-formula">Realized PnL = (Sell Price &minus; Buy Price) &times; Traded Quantity</div>

<h4>Unrealized PnL</h4>
<p>Unrealized PnL fluctuates as the market price moves. It is calculated on open positions:</p>
<ul class="hp-bullets">
  <li><strong>For Long Positions (Open Quantity &gt; 0):</strong>
    <div class="qsn-formula">Unrealized PnL = (Current LTP &minus; Average Buy Price) &times; Open Quantity</div>
  </li>
  <li><strong>For Short Positions (Open Quantity &lt; 0):</strong>
    <div class="qsn-formula">Unrealized PnL = (Average Sell Price &minus; Current LTP) &times; Open Quantity (Absolute)</div>
  </li>
</ul>

<h3 id="ref-9-helpers" style="display:flex;align-items:center;gap:10px;margin:28px 0 10px;padding:10px 16px;background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 8px 8px 0"><span style="background:#ff6b00;color:#fff;border-radius:50%;min-width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">9</span><span style="color:#1e293b;font-weight:700;font-size:18px">Helper Library Utilities</span></h3>
<p>The client library includes <code>xts_api_client.helper.helper</code> to parse and manage incoming data structures automatically.</p>

<h4>1. Master List Parser (Pandas DataFrame)</h4>
<p>Symphony sends large stock master files as pipeline-separated string streams. The helper converts them to clean Pandas dataframes:</p>

```python
from xts_api_client.helper.helper import cm_master_string_to_df, fo_master_string_to_df

# Assume 'raw_csv_response' is retrieved from get_master() call
df_equities = cm_master_string_to_df(raw_csv_response)
# You can now run pandas queries
print(df_equities[df_equities['Name'] == 'RELIANCE'])
```

<h4>2. MS-DOS Time Zone Converter</h4>
<p>Exchange times are given as seconds elapsed since the MS-DOS Epoch (1980-01-01). The helper translates this to standard Unix nanoseconds:</p>

```python
from xts_api_client.helper.helper import dostime_secomds_to_unixtime

unix_nanoseconds = dostime_secomds_to_unixtime(1464972900)
print("Standard Unix timestamp:", unix_nanoseconds)
```

<h4>3. Account-Wide Squareoff Helper</h4>
<p>The helper provides a routine to retrieve all your open positions and instantly exit them at market price to protect capital in emergencies:</p>

```python
from xts_api_client.helper.helper import async_squareoff_all_positions_

# Retrieve all positions and close them out
sq_off_ids = await async_squareoff_all_positions_(interactive_client)
print("Emergency Squared off Order IDs:", sq_off_ids)
```

<h3 id="ref-10-robust" style="display:flex;align-items:center;gap:10px;margin:28px 0 10px;padding:10px 16px;background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 8px 8px 0"><span style="background:#ff6b00;color:#fff;border-radius:50%;min-width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0">10</span><span style="color:#1e293b;font-weight:700;font-size:18px">Robust Code Design: Reconnections &amp; Retries</span></h3>
<p>To deploy algorithms safely, you must handle network disconnects or API timeouts. Here is a production-grade template for a <code>Gateway</code> wrapper that you can copy to build your systems:</p>

```python
import asyncio
import logging
from xts_api_client.xts_connect_async import XTSConnect
from xts_api_client.interactive_socket import OrderSocket_io
from xts_api_client.interactive_socket_client import InteractiveSocketClient
from httpx import PoolTimeout, ConnectTimeout, ReadTimeout

class OrderCallbackHandler(InteractiveSocketClient):
    def __init__(self, gateway):
        self.gateway = gateway

    async def on_connect(self):
        self.gateway.connected = True
        logging.info("WebSocket connected!")

    async def on_disconnect(self):
        self.gateway.connected = False
        logging.warning("WebSocket lost! Reconnecting...")
        asyncio.create_task(self.gateway.reconnect())

class XTSGateway:
    def __init__(self, api_url, key, secret):
        self.api_url = api_url
        self.key = key
        self.secret = secret
        self.client = None
        self.socket = None
        self.connected = False

    async def connect(self):
        # 1. Login REST API
        self.client = XTSConnect(self.key, self.secret, "WEBAPI", self.api_url)
        await self.client.interactive_login()

        # 2. Start WebSocket Connection
        self.socket = OrderSocket_io(
            token=self.client.token,
            userID=self.client.userID,
            root_url=self.client.root,
            reconnection=True,
            interactiveSocketClient=OrderCallbackHandler(self)
        )
        await self.socket.connect()

    async def place_order_safe(self, params: dict, retries=4):
        """Places orders with auto-retry on HTTP timeouts"""
        for attempt in range(retries):
            try:
                response = await self.client.place_order(**params)
                return response
            except (PoolTimeout, ConnectTimeout, ReadTimeout) as timeout_exc:
                logging.warning(f"Timeout on attempt {attempt+1}/{retries}. Retrying...")
                await asyncio.sleep(0.5)
        raise RuntimeError("Failed to place order: Connection Timed Out")
```
