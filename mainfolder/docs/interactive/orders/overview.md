<h1 id="Orders-API" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Orders API</h1>

<p>Place, modify, cancel and track orders across <strong>NSE, BSE, MCX</strong> and <strong>NCDEX</strong> in real-time via a single unified REST API.</p>
  
<!-- Info box -->
<div class="oov-info-box">
  <p>The Orders API lets you build fully automated trading systems — from simple order placement to complex bracket and GTT strategies — with real-time status updates via WebSocket.</p>
</div>

<!-- ═══ ACTION CARDS ═══ -->
<p class="oov-section-title">What You Can Do</p>
<div class="oov-actions">
  <div class="oov-action-card">
    <strong>Place Order</strong>
    <span>Send BUY / SELL to any exchange segment</span>
  </div>
  <div class="oov-action-card">
    <strong>Modify Order</strong>
    <span>Update price, qty or type before execution</span>
  </div>
  <div class="oov-action-card">
    <strong>Cancel Order</strong>
    <span>Remove any open or pending order instantly</span>
  </div>
  <div class="oov-action-card">
    <strong>Track Status</strong>
    <span>Poll order book or use WebSocket events</span>
  </div>
  <div class="oov-action-card">
    <strong>Order History</strong>
    <span>Fetch full trade and order history</span>
  </div>
</div>

<!-- ═══ ORDER TYPES ═══ -->
### Order Types Supported
<div class="oov-types">
  <div class="oov-type-chip"><span>Market</span></div>
  <div class="oov-type-chip"><span>Limit</span></div>
  <div class="oov-type-chip"><span>Stop Loss</span></div>
  <div class="oov-type-chip"><span>Bracket</span></div>
  <div class="oov-type-chip"><span>Cover</span></div>
  <div class="oov-type-chip"><span>AMO</span></div>
  <div class="oov-type-chip"><span>GTT</span></div>
</div>

<!-- ═══ ENDPOINTS ═══ -->
### API Endpoints
<div class="oov-table-wrap">
  <table class="oov-table">
    <thead>
      <tr><th>Method</th><th>Endpoint</th><th>Action</th></tr>
    </thead>
    <tbody>
      <tr><td><span class="oov-tag-teal">POST</span></td><td><code>/interactive/orders</code></td><td>Place a new order</td></tr>
      <tr><td><span class="oov-tag-blue">PUT</span></td><td><code>/interactive/orders</code></td><td>Modify an existing open order</td></tr>
      <tr><td><span class="oov-tag-sell">DELETE</span></td><td><code>/interactive/orders</code></td><td>Cancel an active order</td></tr>
      <tr><td><span class="oov-tag-buy">GET</span></td><td><code>/interactive/orders</code></td><td>Fetch order book and history</td></tr>
    </tbody>
  </table>
</div>

<!-- ═══ REQUEST & RESPONSE ═══ -->
### Request & Response Example
<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">
  <div>
    <div style="font-size:12px;font-weight:700;color:#6b7280;margin-bottom:6px;text-transform:uppercase;letter-spacing:.05em">▶ Request — Place Order</div>
    <div class="oov-code-block"><pre>{
  "exchangeSegment": "NSECM",
  "exchangeInstrumentID": 2885,
  "productType": "MIS",
  "orderType": "LIMIT",
  "orderSide": "BUY",
  "timeInForce": "DAY",
  "orderQuantity": 10,
  "limitPrice": 2500.00
}</pre></div>
  </div>
  <div>
    <div style="font-size:12px;font-weight:700;color:#6b7280;margin-bottom:6px;text-transform:uppercase;letter-spacing:.05em">▶ Response</div>
    <div class="oov-code-block"><pre>{
  "type": "success",
  "code": "s-order-0001",
  "description": "Order placed successfully",
  "result": {
    "AppOrderID": 1234567890,
    "OrderStatus": "New"
  }
}</pre></div>
  </div>
</div>

<!-- ═══ LIFECYCLE ═══ -->
### Order Lifecycle
<div class="oov-lifecycle">
  <div class="oov-lc-step">
    <strong>Order Placed</strong>
    <span>API request submitted</span>
  </div>
  <div class="oov-lc-step">
    <strong>Open</strong>
    <span>Active in exchange book</span>
  </div>
  <div class="oov-lc-step">
    <strong>Partial Fill</strong>
    <span>Part qty executed</span>
  </div>
  <div class="oov-lc-step">
    <strong>Filled</strong>
    <span>Fully executed</span>
  </div>
  <div class="oov-lc-step">
    <strong>Cancelled</strong>
    <span>By user or exchange</span>
  </div>
</div>

<!-- ═══ BOTTOM ROW ═══ -->
<div class="oov-bottom-row">

  <div class="oov-status-list">
    <div class="oov-status"><strong>OPEN</strong><span>Order is live in exchange order book</span></div>
    <div class="oov-status"><strong>PARTIALLY FILLED</strong><span>Some quantity has been executed</span></div>
    <div class="oov-status"><strong>FILLED</strong><span>Entire quantity executed successfully</span></div>
    <div class="oov-status"><strong>CANCELLED</strong><span>Order removed before execution</span></div>
    <div class="oov-status"><strong>REJECTED</strong><span>Exchange or broker rejected the order</span></div>
  </div>

  <div class="oov-benefit-list">
    <div class="oov-benefit">
      <div><strong>Fast Execution</strong><span>Sub-millisecond order routing to exchange via co-located servers</span></div>
    </div>
    <div class="oov-benefit">
      <div><strong>Real-time Updates</strong><span>Live order status via WebSocket — no polling needed</span></div>
    </div>
    <div class="oov-benefit">
      <div><strong>Multiple Segments</strong><span>NSE, BSE, MCX, NCDEX — all via a single unified API</span></div>
    </div>
    <div class="oov-benefit">
      <div><strong>Secure & Reliable</strong><span>Token-based auth with rate limiting and audit logs</span></div>
    </div>
  </div>

</div>

<!-- ═══ USE CASES + QUICK REFERENCE ═══ -->
<div class="oov-uc-qr-row">
  <div>
    <p class="oov-section-title">Use Cases</p>
    <div class="oov-uc-grid">
      <div class="oov-uc-item">
        <strong>Algo Trading</strong>
        <span>Automate strategies and execute trades programmatically at scale</span>
      </div>
      <div class="oov-uc-item">
        <strong>Trading Platforms</strong>
        <span>Build advanced order management systems and live dashboards</span>
      </div>
      <div class="oov-uc-item">
        <strong>Portfolio Rebalancing</strong>
        <span>Automate rebalancing with basket orders across segments</span>
      </div>
      <div class="oov-uc-item">
        <strong>Strategy Backtesting</strong>
        <span>Paper-trade strategies using simulated order flows</span>
      </div>
      <div class="oov-uc-item">
        <strong>Risk Management</strong>
        <span>Place automatic stop-loss orders to protect live positions</span>
      </div>
    </div>
  </div>
  <div>
    <p class="oov-section-title">Quick Reference</p>
    <div class="oov-table-wrap">
      <table class="oov-table oov-sum-table">
        <thead><tr><th>Feature</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td>Place Order</td><td><span class="oov-m-post">POST</span> /interactive/orders</td></tr>
          <tr><td>Modify Order</td><td><span class="oov-m-put">PUT</span> /interactive/orders</td></tr>
          <tr><td>Cancel Order</td><td><span class="oov-m-del">DELETE</span> /interactive/orders</td></tr>
          <tr><td>Order History</td><td><span class="oov-m-get">GET</span> /interactive/orders</td></tr>
          <tr><td>Order Types</td><td><span class="oov-qr-tag">Market</span> <span class="oov-qr-tag">Limit</span> <span class="oov-qr-tag">SL</span> <span class="oov-qr-tag">Bracket</span> <span class="oov-qr-tag">Cover</span> <span class="oov-qr-tag">AMO</span> <span class="oov-qr-tag">GTT</span></td></tr>
          <tr><td>Product Types</td><td><span class="oov-qr-tag">MIS</span> <span class="oov-qr-tag">CNC</span> <span class="oov-qr-tag">NRML</span> <span class="oov-qr-tag">BO</span> <span class="oov-qr-tag">CO</span></td></tr>
          <tr><td>Exchanges</td><td><span class="oov-qr-tag oov-qr-tag-blue">NSE</span> <span class="oov-qr-tag oov-qr-tag-blue">BSE</span> <span class="oov-qr-tag oov-qr-tag-blue">MCX</span> <span class="oov-qr-tag oov-qr-tag-blue">NCDEX</span></td></tr>
          <tr><td>Real-time Status</td><td><span class="oov-qr-ws-dot"></span> WebSocket order update events</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
