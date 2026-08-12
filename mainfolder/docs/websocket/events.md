<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">WebSocket Events</h1>
<p class="iov-subtitle"><strong>WebSocket Events</strong> are real-time notifications sent by the server to inform the client about connection status, orders, trades, positions, and other important market activities.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Connection events</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Order updates</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Trade notifications</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg></div><span>Position changes</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg></div><span>Error alerts</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>Real-time push</span></div>
</div>

---

## Connection & System Events

<table class="api-table">
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">joined</span></td>
      <td>- <strong>WebSocket connection established successfully.</strong><br>- The client is now connected and ready to receive data.<br>- Usually the first event received after connecting.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">success</span></td>
      <td>- <strong>A request or operation completed successfully.</strong><br>- Confirms that the requested action was processed.<br>- Commonly received after a successful subscription request.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">warning</span></td>
      <td>- <strong>A non-critical issue or notification.</strong><br>- The connection remains active and operational.<br>- Used to alert the client about potential issues.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">error</span></td>
      <td>- <strong>An operation failed or could not be completed.</strong><br>- Usually includes an error message or reason.<br>- May occur due to invalid requests or authentication failures.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">logout</span></td>
      <td>- <strong>User session has ended and connection is closed.</strong><br>- No further updates will be received until reconnection.<br>- Re-authenticate to resume streaming.</td>
    </tr>
  </tbody>
</table>

---

## Trading Events

<table class="api-table">
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">order</span></td>
      <td>- <strong>An order-related update has occurred.</strong><br>- Sent when an order is placed, modified, cancelled, or status changes.<br>- Helps track order activity in real time.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">trade</span></td>
      <td>- <strong>A trade has been executed.</strong><br>- Sent when a buy and sell order are matched.<br>- Provides trade execution details like price, quantity, and time.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">position</span></td>
      <td>- <strong>A position-related update has occurred.</strong><br>- Sent when there is a change in open positions or holdings.<br>- Helps users monitor their portfolio in real time.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">tradeConversion</span></td>
      <td>- <strong>A trade or position has been converted.</strong><br>- Example: Converting a position from MIS to CNC.<br>- Sent after successful product type conversion.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">getOrder</span></td>
      <td>- <strong>Returns details of existing orders.</strong><br>- Used to retrieve order information through the socket connection.<br>- Provides current order status and related data.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">getOrderRejection</span></td>
      <td>- <strong>An order has been rejected.</strong><br>- Includes the rejection reason from the system or exchange.<br>- Helps users identify and resolve order issues.</td>
    </tr>
  </tbody>
</table>

---

## Market Data Events

Override these methods in your `MarketDataSocketClient` subclass to receive data.

### Connection Events

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:2;margin:12px 0">
<span style="color:#c586c0">class</span> <span style="color:#4ec9b0">MyFeed</span><span style="color:#d4d4d4">(</span><span style="color:#4ec9b0">MarketDataSocketClient</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;<span style="color:#c586c0">async def</span> <span style="color:#dcdcaa">on_connect</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Connected!"</span><span style="color:#d4d4d4">)</span><br><br>
&nbsp;&nbsp;<span style="color:#c586c0">async def</span> <span style="color:#dcdcaa">on_disconnect</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Disconnected!"</span><span style="color:#d4d4d4">)</span><br><br>
&nbsp;&nbsp;<span style="color:#c586c0">async def</span> <span style="color:#dcdcaa">on_error</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">data</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Error:"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">data</span><span style="color:#d4d4d4">)</span>
</div>

### Price Events

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin:16px 0 24px">

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Event 1512 — LTP Only</div>
    <div style="padding:14px 16px;background:#ffffff">
      <p style="font-size:12px;color:#374151;margin:0 0 10px">Lightweight LTP-only tick. Lowest bandwidth option.</p>
      <div style="background:#1e1e1e;border-radius:6px;padding:10px 12px;font-family:Consolas,monospace;font-size:12px;color:#ce9178">on_event_last_traded_price_full</div>
    </div>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Event 1501 — Touchline</div>
    <div style="padding:14px 16px;background:#ffffff">
      <p style="font-size:12px;color:#374151;margin:0 0 10px">LTP plus best bid/ask and volume.</p>
      <div style="background:#1e1e1e;border-radius:6px;padding:10px 12px;font-family:Consolas,monospace;font-size:12px;color:#ce9178">on_event_touchline_full</div>
    </div>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Event 1502 — Market Depth</div>
    <div style="padding:14px 16px;background:#ffffff">
      <p style="font-size:12px;color:#374151;margin:0 0 10px">Full 5-level order book.</p>
      <div style="background:#1e1e1e;border-radius:6px;padding:10px 12px;font-family:Consolas,monospace;font-size:12px;color:#ce9178">on_event_market_depth_full</div>
    </div>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Event 1505 — OHLC Candle</div>
    <div style="padding:14px 16px;background:#ffffff">
      <p style="font-size:12px;color:#374151;margin:0 0 10px">Live Open, High, Low, Close candle data.</p>
      <div style="background:#1e1e1e;border-radius:6px;padding:10px 12px;font-family:Consolas,monospace;font-size:12px;color:#ce9178">on_event_candle_data_full</div>
    </div>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Event 1510 — Open Interest</div>
    <div style="padding:14px 16px;background:#ffffff">
      <p style="font-size:12px;color:#374151;margin:0 0 10px">Total active futures/options contracts.</p>
      <div style="background:#1e1e1e;border-radius:6px;padding:10px 12px;font-family:Consolas,monospace;font-size:12px;color:#ce9178">on_event_open_interest_full</div>
    </div>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Event 1507 — Market Status</div>
    <div style="padding:14px 16px;background:#ffffff">
      <p style="font-size:12px;color:#374151;margin:0 0 10px">Exchange session state updates.</p>
      <div style="background:#1e1e1e;border-radius:6px;padding:10px 12px;font-family:Consolas,monospace;font-size:12px;color:#ce9178">on_event_instrument_property_change_full</div>
    </div>
  </div>

</div>

---

## Interactive (Order) Events

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:2;margin:12px 0">
<span style="color:#c586c0">class</span> <span style="color:#4ec9b0">MyOrderHandler</span><span style="color:#d4d4d4">(</span><span style="color:#4ec9b0">InteractiveSocketClient</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;<span style="color:#c586c0">async def</span> <span style="color:#dcdcaa">on_order</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">data</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"Order {data['AppOrderID']} → {data['OrderStatus']}"</span><span style="color:#d4d4d4">)</span><br><br>
&nbsp;&nbsp;<span style="color:#c586c0">async def</span> <span style="color:#dcdcaa">on_trade</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">data</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"Trade: {data['TradingSymbol']}  {data['TradedQuantity']} @ {data['TradedPrice']}"</span><span style="color:#d4d4d4">)</span><br><br>
&nbsp;&nbsp;<span style="color:#c586c0">async def</span> <span style="color:#dcdcaa">on_position</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">data</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"Position: {data['TradingSymbol']}  NetQty: {data['NetQty']}"</span><span style="color:#d4d4d4">)</span>
</div>

---

## Event Code Reference

<table class="api-table">
  <thead>
    <tr>
      <th>Code</th>
      <th>Event</th>
      <th>Bandwidth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">1512</span></td>
      <td>LTP only</td>
      <td>Very low</td>
    </tr>
    <tr>
      <td><span class="enum-badge">1501</span></td>
      <td>Touchline (LTP + bid/ask)</td>
      <td>Low</td>
    </tr>
    <tr>
      <td><span class="enum-badge">1502</span></td>
      <td>Full depth (5 levels)</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td><span class="enum-badge">1505</span></td>
      <td>OHLC candle</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td><span class="enum-badge">1510</span></td>
      <td>Open interest</td>
      <td>Low</td>
    </tr>
    <tr>
      <td><span class="enum-badge">1507</span></td>
      <td>Market status</td>
      <td>Very low</td>
    </tr>
  </tbody>
</table>

!!! tip
    Subscribe only to the event codes you actually need. Using `1502` (full depth) for hundreds of instruments simultaneously uses significantly more bandwidth than `1512` (LTP only).
