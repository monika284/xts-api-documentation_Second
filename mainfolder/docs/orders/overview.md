<div class="oov-wrap">

<!-- ═══ HERO ═══ -->
<div class="oov-hero">
  <div class="oov-hero-top">
    <div class="oov-hero-icon"></div>
    <div>
      <h1 class="oov-hero-title">Orders API</h1>
      <p class="oov-hero-sub">Place, modify, cancel and track orders across NSE, BSE, MCX and NCDEX in real-time via a single unified REST API.</p>
    </div>
  </div>
  <div class="oov-use-chips">
    <span>Place Order</span>
    <span>Modify Order</span>
    <span>Cancel Order</span>
    <span>Track Status</span>
    <span>Order History</span>
  </div>
</div>

<!-- ═══ BASIC ═══ -->
<div class="oov-section">
  <div class="oov-level-badge">Basic</div>
  <h2 id="understanding-orders" class="oov-section-title">Understanding Orders</h2>

  <div class="oov-concepts">

    <div class="oov-concept-card">
      <div class="oov-cc-icon oov-cc-what"></div>
      <div class="oov-cc-body">
        <strong>What is an Order?</strong>
        <p>A structured instruction to buy or sell a financial instrument at a specific price and quantity on an exchange.</p>
        <div class="oov-buysell">
          <span class="oov-buy">BUY</span>
          <span class="oov-sell">SELL</span>
        </div>
      </div>
    </div>

    <div class="oov-concept-card">
      <div class="oov-cc-icon oov-cc-comp"></div>
      <div class="oov-cc-body">
        <strong>Order Components</strong>
        <div class="oov-comp-list">
          <div class="oov-comp-item"><span class="oov-comp-key">Symbol</span><span class="oov-comp-val">RELIANCE</span></div>
          <div class="oov-comp-item"><span class="oov-comp-key">Exchange</span><span class="oov-comp-val">NSE</span></div>
          <div class="oov-comp-item"><span class="oov-comp-key">Price</span><span class="oov-comp-val">&#8377;2,500</span></div>
          <div class="oov-comp-item"><span class="oov-comp-key">Quantity</span><span class="oov-comp-val">10</span></div>
          <div class="oov-comp-item"><span class="oov-comp-key">Type</span><span class="oov-comp-val">LIMIT</span></div>
        </div>
      </div>
    </div>

    <div class="oov-concept-card">
      <div class="oov-cc-icon oov-cc-prod"></div>
      <div class="oov-cc-body">
        <strong>Product Types</strong>
        <div class="oov-prod-list">
          <div class="oov-prod-item"><span class="oov-prod-tag oov-prod-mis">MIS</span><span>Intraday — auto square-off at EOD</span></div>
          <div class="oov-prod-item"><span class="oov-prod-tag oov-prod-cnc">CNC</span><span>Delivery — carry overnight</span></div>
          <div class="oov-prod-item"><span class="oov-prod-tag oov-prod-nrml">NRML</span><span>F&amp;O / Currency — normal margin</span></div>
        </div>
      </div>
    </div>

  </div>

  <!-- ORDER TICKET VISUAL -->
  <h3 id="order-ticket" class="oov-section-title">Order Ticket Preview</h3>
  <div class="oov-ticket-wrap">

    <div class="oov-ticket">
      <div class="oov-ticket-header">
        <div>
          <span class="oov-ticket-sym">RELIANCE</span>
          <span class="oov-ticket-exch">NSE &middot; EQ</span>
        </div>
        <span class="oov-ticket-live">&#9679; LIVE</span>
      </div>
      <div class="oov-ticket-toggle">
        <button class="oov-tt-buy oov-tt-active">BUY</button>
        <button class="oov-tt-sell">SELL</button>
      </div>
      <div class="oov-ticket-fields">
        <div class="oov-tf-row"><label>Order Type</label><div class="oov-tf-select">LIMIT &#9660;</div></div>
        <div class="oov-tf-row"><label>Product</label><div class="oov-tf-select">MIS &#9660;</div></div>
        <div class="oov-tf-row oov-tf-highlight"><label>Price (&#8377;)</label><div class="oov-tf-num">2,500.00</div></div>
        <div class="oov-tf-row"><label>Quantity</label><div class="oov-tf-num">10</div></div>
        <div class="oov-tf-row"><label>Validity</label><div class="oov-tf-select">DAY &#9660;</div></div>
      </div>
      <div class="oov-ticket-margin">Margin Required: <strong>&#8377;25,000</strong></div>
      <button class="oov-place-btn">PLACE BUY ORDER</button>
    </div>

    <div class="oov-ticket-info">
      <p>This is a <strong>static preview</strong> of what an order ticket looks like. Use the Orders API to build and submit orders programmatically in your application.</p>
      <h4 class="oov-ti-title">Supported Exchanges &amp; Segments</h4>
      <div class="oov-seg-grid">
        <span class="oov-seg-chip">NSE &middot; CASH</span>
        <span class="oov-seg-chip">BSE &middot; CASH</span>
        <span class="oov-seg-chip">NSE &middot; F&amp;O</span>
        <span class="oov-seg-chip">BSE &middot; F&amp;O</span>
        <span class="oov-seg-chip">MCX</span>
        <span class="oov-seg-chip">NCDEX</span>
        <span class="oov-seg-chip">Currency</span>
      </div>
    </div>

  </div>

  <!-- ORDER TYPES -->
  <h3 id="order-types" class="oov-section-title">Order Types Supported</h3>
  <div class="oov-types">
    <div class="oov-type-chip"><span>Market</span></div>
    <div class="oov-type-chip"><span>Limit</span></div>
    <div class="oov-type-chip"><span>Stop Loss</span></div>
    <div class="oov-type-chip"><span>Bracket</span></div>
    <div class="oov-type-chip"><span>Cover</span></div>
    <div class="oov-type-chip"><span>AMO</span></div>
    <div class="oov-type-chip"><span>GTT</span></div>
  </div>

</div>

<!-- ═══ INTERMEDIATE ═══ -->
<div class="oov-section">
  <div class="oov-level-badge">Intermediate</div>
  <h2 id="api-endpoints" class="oov-section-title">API Endpoints</h2>

  <div class="oov-ep-grid">
    <div class="oov-ep-card">
      <span class="oov-ep-method oov-ep-post">POST</span>
      <div class="oov-ep-detail">
        <code>/interactive/orders</code>
        <p>Place a new order on the exchange</p>
      </div>
    </div>
    <div class="oov-ep-card">
      <span class="oov-ep-method oov-ep-put">PUT</span>
      <div class="oov-ep-detail">
        <code>/interactive/orders</code>
        <p>Modify an existing open order</p>
      </div>
    </div>
    <div class="oov-ep-card">
      <span class="oov-ep-method oov-ep-delete">DELETE</span>
      <div class="oov-ep-detail">
        <code>/interactive/orders</code>
        <p>Cancel an active order</p>
      </div>
    </div>
    <div class="oov-ep-card">
      <span class="oov-ep-method oov-ep-get">GET</span>
      <div class="oov-ep-detail">
        <code>/interactive/orders</code>
        <p>Fetch order book and history</p>
      </div>
    </div>
  </div>

  <h3 id="request-parameters" class="oov-section-title">Order Request Parameters</h3>
  <div class="oov-table-wrap">
    <table class="oov-table">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>exchange</td><td>Exchange on which order will be placed</td><td>NSE</td></tr>
        <tr><td>segment</td><td>Trading segment</td><td>CASH</td></tr>
        <tr><td>symboltoken</td><td>Instrument token from Instruments API</td><td>2885</td></tr>
        <tr><td>transactiontype</td><td>Buy or Sell</td><td><span class="oov-tag-buy">BUY</span> / <span class="oov-tag-sell">SELL</span></td></tr>
        <tr><td>ordertype</td><td>Type of order</td><td><span class="oov-tag-blue">LIMIT</span></td></tr>
        <tr><td>producttype</td><td>Product type for margin calculation</td><td>MIS</td></tr>
        <tr><td>price</td><td>Price for limit / SL / SL-M orders</td><td>2500.00</td></tr>
        <tr><td>quantity</td><td>Number of units to buy or sell</td><td>10</td></tr>
        <tr><td>validity</td><td>Order validity window</td><td><span class="oov-tag-teal">DAY</span></td></tr>
      </tbody>
    </table>
  </div>

  <div class="oov-req-res">
    <div class="oov-rr-block">
      <div class="oov-cb-label">&#9658; Request &mdash; Place Order</div>
      <div class="oov-code-block"><pre>{
  "exchange": "NSE",
  "tradingsymbol": "RELIANCE",
  "symboltoken": "2885",
  "transactiontype": "BUY",
  "ordertype": "LIMIT",
  "producttype": "MIS",
  "price": "2500.00",
  "quantity": "10",
  "validity": "DAY"
}</pre></div>
    </div>
    <div class="oov-rr-block">
      <div class="oov-cb-label">&#9658; Response</div>
      <div class="oov-code-block"><pre>{
  "stat": "Ok",
  "norenordno": "23051600001234",
  "exchordid": "221016123456789",
  "status": "OPEN",
  "tradingsymbol": "RELIANCE",
  "transactiontype": "BUY",
  "ordertype": "LIMIT",
  "price": 2500.00,
  "quantity": 10,
  "filledquantity": 0,
  "pendingquantity": 10,
  "orderdate": "2024-05-16 10:15:30"
}</pre></div>
    </div>
  </div>

</div>

<!-- ═══ ADVANCED ═══ -->
<div class="oov-section">
  <div class="oov-level-badge">Advanced</div>
  <h2 id="order-lifecycle" class="oov-section-title">Order Lifecycle</h2>

  <div class="oov-lifecycle-flow">
    <div class="oov-lf-step">
      <div class="oov-lf-num">1</div>
      <div class="oov-lf-dot oov-lf-teal"></div>
      <strong>Order Placed</strong>
      <span>API request submitted</span>
    </div>
    <div class="oov-lf-arrow">&#8594;</div>
    <div class="oov-lf-step">
      <div class="oov-lf-num">2</div>
      <div class="oov-lf-dot oov-lf-orange"></div>
      <strong>Open</strong>
      <span>Active in exchange</span>
    </div>
    <div class="oov-lf-arrow">&#8594;</div>
    <div class="oov-lf-step">
      <div class="oov-lf-num">3</div>
      <div class="oov-lf-dot oov-lf-blue"></div>
      <strong>Partial Fill</strong>
      <span>Part qty executed</span>
    </div>
    <div class="oov-lf-arrow">&#8594;</div>
    <div class="oov-lf-step">
      <div class="oov-lf-num">4</div>
      <div class="oov-lf-dot oov-lf-green"></div>
      <strong>Filled</strong>
      <span>Fully executed</span>
    </div>
    <div class="oov-lf-or">or</div>
    <div class="oov-lf-step">
      <div class="oov-lf-num">5</div>
      <div class="oov-lf-dot oov-lf-red"></div>
      <strong>Cancelled</strong>
      <span>By user or exchange</span>
    </div>
  </div>

  <div class="oov-status-strip">
    <span class="oov-ss oov-ss-open">OPEN</span>
    <span class="oov-ss oov-ss-partial">PARTIALLY FILLED</span>
    <span class="oov-ss oov-ss-filled">FILLED</span>
    <span class="oov-ss oov-ss-cancelled">CANCELLED</span>
    <span class="oov-ss oov-ss-rejected">REJECTED</span>
  </div>

  <h3 id="advanced-strategies" class="oov-section-title">Advanced Order Strategies</h3>
  <div class="oov-strategy-grid">
    <div class="oov-strat-card">
      <div class="oov-strat-icon oov-si-bracket"></div>
      <strong>Bracket Order</strong>
      <p>Main order with automatic target and stop-loss legs. SL is cancelled automatically when the target is hit.</p>
      <span class="oov-strat-tag">Risk Control</span>
    </div>
    <div class="oov-strat-card">
      <div class="oov-strat-icon oov-si-cover"></div>
      <strong>Cover Order</strong>
      <p>Limit or market order with a mandatory stop-loss. Offers higher leverage due to built-in risk protection.</p>
      <span class="oov-strat-tag">High Leverage</span>
    </div>
    <div class="oov-strat-card">
      <div class="oov-strat-icon oov-si-amo"></div>
      <strong>AMO &mdash; After Market Order</strong>
      <p>Place orders outside market hours (4 PM &ndash; 9 AM). Queued and routed to exchange at next market open.</p>
      <span class="oov-strat-tag">Pre-market</span>
    </div>
    <div class="oov-strat-card">
      <div class="oov-strat-icon oov-si-gtt"></div>
      <strong>GTT &mdash; Good Till Triggered</strong>
      <p>Set price trigger conditions. Order is placed automatically when the price level is reached.</p>
      <span class="oov-strat-tag">Trigger-based</span>
    </div>
  </div>

  <h3 id="best-practices" class="oov-section-title">Best Practices</h3>
  <div class="oov-practices">
    <div class="oov-practice">
      <strong>Validate Before Placing</strong>
      <p>Always use the Instruments API to resolve the correct <code>symboltoken</code>, <code>exchange</code>, and <code>segment</code> before placing any order.</p>
    </div>
    <div class="oov-practice">
      <strong>Handle Partial Fills</strong>
      <p>Monitor <code>filledquantity</code> and <code>pendingquantity</code> in responses. Re-submit remaining quantity during volatile sessions.</p>
    </div>
    <div class="oov-practice">
      <strong>Use WebSocket for Status</strong>
      <p>Subscribe to order update events via WebSocket for real-time status instead of polling the GET /orders endpoint repeatedly.</p>
    </div>
    <div class="oov-practice">
      <strong>Rate Limit Management</strong>
      <p>Add exponential backoff and request queuing in high-frequency algo strategies to stay within API per-second limits.</p>
    </div>
  </div>

</div>

<!-- USE CASES -->
<div class="oov-usecases">
  <h2 id="use-cases" class="oov-uc-title">Use Cases</h2>
  <div class="oov-uc-grid">
    <div class="oov-uc-item">
      <div>
        <strong>Algo Trading</strong>
        <span>Automate your strategies and execute trades programmatically.</span>
      </div>
    </div>
    <div class="oov-uc-item">
      <div>
        <strong>Trading Platforms</strong>
        <span>Build advanced order management systems and dashboards.</span>
      </div>
    </div>
    <div class="oov-uc-item">
      <div>
        <strong>Portfolio Rebalancing</strong>
        <span>Automate portfolio rebalancing with basket orders.</span>
      </div>
    </div>
    <div class="oov-uc-item">
      <div>
        <strong>Strategy Backtesting</strong>
        <span>Paper-trade strategies using simulated order flows.</span>
      </div>
    </div>
    <div class="oov-uc-item">
      <div>
        <strong>Risk Management</strong>
        <span>Place automatic stop-loss orders to protect live positions.</span>
      </div>
    </div>
  </div>
</div>

<!-- SUMMARY TABLE -->
<div class="oov-summary">
  <h2 id="summary" class="oov-section-title">Quick Reference</h2>
  <div class="oov-table-wrap">
    <table class="oov-table oov-sum-table">
      <thead><tr><th>Feature</th><th>Details</th></tr></thead>
      <tbody>
        <tr><td>Place Order</td><td>POST /interactive/orders</td></tr>
        <tr><td>Modify Order</td><td>PUT /interactive/orders</td></tr>
        <tr><td>Cancel Order</td><td>DELETE /interactive/orders</td></tr>
        <tr><td>Order History</td><td>GET /interactive/orders</td></tr>
        <tr><td>Order Types</td><td>Market, Limit, SL, SL-M, Bracket, Cover, AMO, GTT</td></tr>
        <tr><td>Product Types</td><td>MIS, CNC, NRML, BO, CO</td></tr>
        <tr><td>Exchanges</td><td>NSE, BSE, MCX, NCDEX</td></tr>
        <tr><td>Real-time Status</td><td>WebSocket order update events</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="oov-related-chips">
  <span>Place Order</span>
  <span>Modify Order</span>
  <span>Cancel Order</span>
  <span>Order History</span>
  <span>Trade Book</span>
  <span>WebSocket Events</span>
</div>

</div>
