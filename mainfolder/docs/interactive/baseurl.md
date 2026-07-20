<div class="burl-wrap">

<!-- ═══════════════════ HERO ═══════════════════ -->
<div class="burl-hero">
  <h1 id="Base-url-endpoints" class="burl-hero-title">Base URL &amp; Endpoints</h1>
  <p class="burl-hero-sub">Before making any API request, you need to know <strong>where the API lives</strong> and <strong>which path to call</strong>. This page explains the building blocks of every RMoney API call.</p>
  <div class="burl-formula-row">
    <div class="burl-formula-part">
      <strong>Base URL</strong>
      <span>Main server address</span>
    </div>
    <div class="burl-formula-plus">+</div>
    <div class="burl-formula-part">
      <strong>Endpoint</strong>
      <span>Specific resource path</span>
    </div>
    <div class="burl-formula-plus">=</div>
    <div class="burl-formula-result">
      <strong>Full API URL</strong>
      <span>Complete request address</span>
    </div>
  </div>
</div>

<!-- ═══════════════════ BASIC ═══════════════════ -->
<h2 id="what-is-base-url" class="burl-section-title">What is a Base URL?</h2>
<div class="burl-concept-row">
  <div class="burl-concept-card">
    <h3 class="burl-concept-title">Base URL</h3>
    <p class="burl-concept-desc">The main address of the API server. Every request starts here — think of it as the building's street address.</p>
    <div class="burl-concept-example">
      <div class="burl-ce-label">Interactive API</div>
      <code>https://xts.rmoneyindia.co.in:3000</code>
    </div>
    <div class="burl-concept-example">
      <div class="burl-ce-label">Market Data API</div>
      <code>https://xts.rmoneyindia.co.in:3000</code>
    </div>
  </div>
  <div class="burl-concept-card">
    <h3 class="burl-concept-title">Endpoint</h3>
    <p class="burl-concept-desc">A specific path that accesses a particular resource or action. Think of it as the room number inside the building.</p>
    <div class="burl-concept-example">
      <div class="burl-ce-label">Login — Interactive</div>
      <code>/interactive/user/session</code>
    </div>
    <div class="burl-concept-example">
      <div class="burl-ce-label">Login — Market Data</div>
      <code>/apimarketdata/auth/login</code>
    </div>
    <div class="burl-concept-example">
      <div class="burl-ce-label">Place Order</div>
      <code>/interactive/orders</code>
    </div>
  </div>
</div>

<h2 id="url-structure" class="burl-section-title">URL Structure</h2>
<div class="burl-anatomy-wrap">
  <div class="burl-anatomy">
    <div class="burl-anat-part">
      <div class="burl-anat-text">https://</div>
      <div class="burl-anat-arrow"></div>
      <div class="burl-anat-label">Protocol</div>
    </div>
    <div class="burl-anat-part">
      <div class="burl-anat-text">xts.rmoneyindia.co.in:3000</div>
      <div class="burl-anat-arrow"></div>
      <div class="burl-anat-label">Domain + Port</div>
    </div>
    <div class="burl-anat-part">
      <div class="burl-anat-text">/interactive/orders</div>
      <div class="burl-anat-arrow"></div>
      <div class="burl-anat-label">Endpoint</div>
    </div>
  </div>
</div>

<!-- ════════════════ INTERMEDIATE ════════════════ -->
<h2 id="api-categories" class="burl-section-title">Available API Categories</h2>
<div class="burl-categories">
  <div class="burl-cat-item">
    <strong>Authentication</strong>
    <code>/interactive/user/session</code>
  </div>
  <div class="burl-cat-item">
    <strong>Orders</strong>
    <code>/interactive/orders</code>
  </div>
  <div class="burl-cat-item">
    <strong>Portfolio</strong>
    <code>/interactive/portfolio</code>
  </div>
  <div class="burl-cat-item">
    <strong>Funds</strong>
    <code>/interactive/user/balance</code>
  </div>
  <div class="burl-cat-item">
    <strong>Market Data</strong>
    <code>/apimarketdata/instruments</code>
  </div>
  <div class="burl-cat-item">
    <strong>WebSocket</strong>
    <code>ws://xts.rmoneyindia.co.in:3000</code>
  </div>
</div>

<h2 id="auth-endpoints" class="burl-section-title">Authentication Endpoints</h2>
<div class="burl-ep-group">
  <table class="burl-ep-table">
    <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><span class="burl-post">POST</span></td><td><code>/interactive/user/session</code></td><td>Interactive login — get trading token</td></tr>
      <tr><td><span class="burl-delete">DELETE</span></td><td><code>/interactive/user/session</code></td><td>Interactive logout</td></tr>
      <tr><td><span class="burl-post">POST</span></td><td><code>/apimarketdata/auth/login</code></td><td>Market Data login — get market token</td></tr>
      <tr><td><span class="burl-delete">DELETE</span></td><td><code>/apimarketdata/auth/logout</code></td><td>Market Data logout</td></tr>
    </tbody>
  </table>
</div>

<h2 id="market-endpoints" class="burl-section-title">Market Data Endpoints</h2>
<div class="burl-ep-group">
  <table class="burl-ep-table">
    <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><span class="burl-post">POST</span></td><td><code>/apimarketdata/instruments/quotes</code></td><td>Get live quotes</td></tr>
      <tr><td><span class="burl-get">POST</span></td><td><code>/apimarketdata/instruments/master</code></td><td>Full instrument list</td></tr>
      <tr><td><span class="burl-post">POST</span></td><td><code>/apimarketdata/instruments/ohlc</code></td><td>Historical OHLC candles</td></tr>
      <tr><td><span class="burl-get">GET</span></td><td><code>/apimarketdata/instruments/search</code></td><td>Search instruments by name</td></tr>
    </tbody>
  </table>
</div>

<h2 id="orders-endpoints" class="burl-section-title">Orders Endpoints</h2>
<div class="burl-ep-group">
  <table class="burl-ep-table">
    <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><span class="burl-get">GET</span></td><td><code>/interactive/orders</code></td><td>Get order book</td></tr>
      <tr><td><span class="burl-post">POST</span></td><td><code>/interactive/orders</code></td><td>Place new order</td></tr>
      <tr><td><span class="burl-put">PUT</span></td><td><code>/interactive/orders</code></td><td>Modify existing order</td></tr>
      <tr><td><span class="burl-delete">DELETE</span></td><td><code>/interactive/orders</code></td><td>Cancel order</td></tr>
      <tr><td><span class="burl-get">GET</span></td><td><code>/interactive/orders/trades</code></td><td>Get trade book</td></tr>
    </tbody>
  </table>
</div>

<h2 id="portfolio-endpoints" class="burl-section-title">Portfolio Endpoints</h2>
<div class="burl-ep-group">
  <table class="burl-ep-table">
    <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><span class="burl-get">GET</span></td><td><code>/interactive/portfolio/holdings</code></td><td>Demat holdings</td></tr>
      <tr><td><span class="burl-get">GET</span></td><td><code>/interactive/portfolio/positions</code></td><td>Open positions</td></tr>
      <tr><td><span class="burl-get">POST</span></td><td><code>/interactive/user/balance</code></td><td>Account funds and margin</td></tr>
      <tr><td><span class="burl-put">PUT</span></td><td><code>/interactive/portfolio/positions</code></td><td>Convert position product type</td></tr>
    </tbody>
  </table>
</div>

<!-- ═══════════════════ ADVANCED ════════════════ -->
<h2 id="http-methods" class="burl-section-title">HTTP Methods Explained</h2>
<div class="burl-methods-grid">
  <div class="burl-method-card">
    <div class="burl-mc-badge burl-get">GET</div>
    <h4>Retrieve Data</h4>
    <p>Fetch existing resources without changing anything.</p>
    <div class="burl-mc-example">GET /interactive/orders</div>
  </div>
  <div class="burl-method-card">
    <div class="burl-mc-badge burl-post">POST</div>
    <h4>Create Resource</h4>
    <p>Send data to create a new resource or trigger an action.</p>
    <div class="burl-mc-example">POST /interactive/orders</div>
  </div>
  <div class="burl-method-card">
    <div class="burl-mc-badge burl-put">PUT</div>
    <h4>Update Resource</h4>
    <p>Modify an existing resource with new values.</p>
    <div class="burl-mc-example">PUT /interactive/orders</div>
  </div>
  <div class="burl-method-card">
    <div class="burl-mc-badge burl-delete">DELETE</div>
    <h4>Remove Resource</h4>
    <p>Delete or cancel an existing resource.</p>
    <div class="burl-mc-example">DELETE /interactive/orders</div>
  </div>
</div>

<h2 id="sample-request" class="burl-section-title">Sample Request and Response</h2>
<div class="burl-req-row">
  <div class="burl-req-block">
    <div class="burl-req-label">Request</div>
    <div class="burl-code-block"><pre>GET /interactive/orders
Host: xts.rmoneyindia.co.in:3000
Authorization: eyJhbGciOiJIUzI1NiIs...
Content-Type: application/json</pre></div>
  </div>
  <div class="burl-req-block">
    <div class="burl-req-label">Response</div>
    <div class="burl-code-block"><pre>{
  "type": "success",
  "result": [
    {
      "AppOrderID": 1234567890,
      "TradingSymbol": "RELIANCE",
      "OrderSide": "BUY",
      "OrderQuantity": 10,
      "OrderStatus": "Open"
    }
  ]
}</pre></div>
  </div>
</div>

<h2 id="best-practices" class="burl-section-title">Best Practices</h2>
<div class="burl-practices">
  <div class="burl-practice">
    <h4>Always Use HTTPS</h4>
    <p>Never use plain HTTP. HTTPS encrypts all data in transit including your access token.</p>
  </div>
  <div class="burl-practice">
    <h4>Include Authorization Header</h4>
    <p>Every protected endpoint requires your session token in the Authorization header.</p>
  </div>
  <div class="burl-practice">
    <h4>Validate Responses</h4>
    <p>Always check the <code>type</code> field — even a 200 OK can contain a business-logic error.</p>
  </div>
  <div class="burl-practice">
    <h4>Handle Rate Limits</h4>
    <p>Add delays between bulk requests. Avoid hammering endpoints — use WebSocket for live data instead.</p>
  </div>
  <div class="burl-practice">
    <h4>Handle Error Codes</h4>
    <p>Map all HTTP status codes (401, 429, 500, etc.) to appropriate retry or alert logic in your app.</p>
  </div>
  <div class="burl-practice">
    <h4>Store Base URL in Config</h4>
    <p>Never hardcode the base URL. Store it in environment variables so switching environments is instant.</p>
  </div>
</div>

<h2 id="response-codes" class="burl-section-title">Common Response Codes</h2>
<div class="burl-resp-codes">
  <div class="burl-resp-item">
    <div class="burl-resp-code burl-rc-success">200</div>
    <div class="burl-resp-info"><strong>OK</strong><span>Request succeeded</span></div>
  </div>
  <div class="burl-resp-item">
    <div class="burl-resp-code burl-rc-success">201</div>
    <div class="burl-resp-info"><strong>Created</strong><span>Resource was created</span></div>
  </div>
  <div class="burl-resp-item">
    <div class="burl-resp-code burl-rc-warn">400</div>
    <div class="burl-resp-info"><strong>Bad Request</strong><span>Invalid parameters in request</span></div>
  </div>
  <div class="burl-resp-item">
    <div class="burl-resp-code burl-rc-error">401</div>
    <div class="burl-resp-info"><strong>Unauthorized</strong><span>Missing or invalid token</span></div>
  </div>
  <div class="burl-resp-item">
    <div class="burl-resp-code burl-rc-error">403</div>
    <div class="burl-resp-info"><strong>Forbidden</strong><span>Token valid but access denied</span></div>
  </div>
  <div class="burl-resp-item">
    <div class="burl-resp-code burl-rc-warn">404</div>
    <div class="burl-resp-info"><strong>Not Found</strong><span>Endpoint or resource not found</span></div>
  </div>
  <div class="burl-resp-item">
    <div class="burl-resp-code burl-rc-warn">429</div>
    <div class="burl-resp-info"><strong>Too Many Requests</strong><span>Rate limit exceeded</span></div>
  </div>
  <div class="burl-resp-item">
    <div class="burl-resp-code burl-rc-error">500</div>
    <div class="burl-resp-info"><strong>Server Error</strong><span>Unexpected server-side failure</span></div>
  </div>
</div>

<!-- ═══════════════════ SUMMARY ════════════════ -->
<h2 id="summary" class="burl-section-title">Summary</h2>
<div class="burl-summary">
  <div class="burl-sum-formula">
    <span class="burl-sum-part">Base URL</span>
    <span class="burl-sum-op">+</span>
    <span class="burl-sum-part">Endpoint</span>
    <span class="burl-sum-op">=</span>
    <span class="burl-sum-result">Full API URL</span>
  </div>
  <div class="burl-sum-example">
    <div class="burl-code-block"><pre>https://xts.rmoneyindia.co.in:3000  +  /interactive/orders
=
https://xts.rmoneyindia.co.in:3000/interactive/orders</pre></div>
  </div>
  <table class="burl-sum-table">
    <thead><tr><th>Term</th><th>Meaning</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td>Base URL</td><td>Main API server address</td><td><code>https://xts.rmoneyindia.co.in:3000</code></td></tr>
      <tr><td>Endpoint</td><td>Specific resource path</td><td><code>/interactive/orders</code></td></tr>
      <tr><td>Full URL</td><td>Base URL + Endpoint</td><td><code>https://xts.rmoneyindia.co.in:3000/interactive/orders</code></td></tr>
      <tr><td>HTTP Method</td><td>Action to perform</td><td><code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code></td></tr>
    </tbody>
  </table>
</div>

</div>
