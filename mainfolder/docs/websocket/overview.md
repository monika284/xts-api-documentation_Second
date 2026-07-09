<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">WebSocket Overview</h1>
<p class="iov-subtitle"><strong>WebSocket</strong> creates a live connection between your application and the RMoney server. Once connected, the server automatically sends real-time market updates whenever prices or market information change — no repeated requests needed.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Real-time streaming</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5z"/></svg></div><span>Persistent connection</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>Low latency</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Full-duplex</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg></div><span>Reduced API calls</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg></div><span>High volume data</span></div>
</div>

---

## Two WebSocket Channels

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin:16px 0 24px">

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:12px 18px;color:#fff;font-weight:700;font-size:14px">Market Data Socket</div>
    <div style="padding:16px 18px;background:#ffffff">
      <p style="font-size:13px;color:#374151;margin:0 0 10px">Live prices, bid/ask, depth, OHLC ticks</p>
      <div style="background:#1e1e1e;border-radius:8px;padding:10px 14px;font-family:Consolas,monospace;font-size:12px;color:#ce9178;word-break:break-all">{root}/?token=...&amp;publishFormat=JSON&amp;broadcastMode=Full</div>
    </div>
  </div>

  <div style="border:1.5px solid #bfdbfe;border-radius:12px;overflow:hidden">
    <div style="background:#1d4ed8;padding:12px 18px;color:#fff;font-weight:700;font-size:14px">Interactive Socket</div>
    <div style="padding:16px 18px;background:#eff6ff">
      <p style="font-size:13px;color:#374151;margin:0 0 10px">Order updates, trade confirmations, position changes</p>
      <div style="background:#1e1e1e;border-radius:8px;padding:10px 14px;font-family:Consolas,monospace;font-size:12px;color:#ce9178;word-break:break-all">{root}/?token=...&amp;userID=...&amp;apiType=INTERACTIVE</div>
    </div>
  </div>

</div>

---

## WebSocket Lifecycle

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5z"/></svg></div><span>Connect</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Authenticate</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg></div><span>Subscribe</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Stream Data</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></div><span>Disconnect</span></div>
</div>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:20px 0 8px">
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px">1. Connect</div>
    <p style="font-size:13px;color:#374151;margin:0">Client establishes a WebSocket connection with the RMoney server.</p>
  </div>
  <div style="border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;background:#eff6ff">
    <div style="font-weight:700;color:#1d4ed8;font-size:13px;margin-bottom:6px">2. Authenticate</div>
    <p style="font-size:13px;color:#374151;margin:0">Validates the session using the token received from the Login API.</p>
  </div>
  <div style="border:1.5px solid #e9d5ff;border-radius:10px;padding:14px 16px;background:#faf5ff">
    <div style="font-weight:700;color:#7c3aed;font-size:13px;margin-bottom:6px">3. Subscribe</div>
    <p style="font-size:13px;color:#374151;margin:0">Register instruments or data streams with an event code to start receiving updates.</p>
  </div>
  <div style="border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4">
    <div style="font-weight:700;color:#16a34a;font-size:13px;margin-bottom:6px">4. Stream Data</div>
    <p style="font-size:13px;color:#374151;margin:0">Server continuously pushes market updates whenever data changes.</p>
  </div>
  <div style="border:1.5px solid #fde68a;border-radius:10px;padding:14px 16px;background:#fffbeb">
    <div style="font-weight:700;color:#d97706;font-size:13px;margin-bottom:6px">5. Unsubscribe</div>
    <p style="font-size:13px;color:#374151;margin:0">Stop updates for selected instruments without closing the connection.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;background:#f9fafb">
    <div style="font-weight:700;color:#374151;font-size:13px;margin-bottom:6px">6. Disconnect</div>
    <p style="font-size:13px;color:#374151;margin:0">Close the WebSocket connection when streaming is no longer needed.</p>
  </div>
</div>

---

## Event Codes (Market Data)

<table class="api-table">
  <thead>
    <tr>
      <th>Code</th>
      <th>Data Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">1512</span></td>
      <td>LTP Only</td>
      <td>Last Traded Price only — minimal data, maximum speed.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">1501</span></td>
      <td>Touchline</td>
      <td>LTP, Bid, Ask, Volume, Open Interest — full top-of-book data.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">1502</span></td>
      <td>Market Depth</td>
      <td>Full 5-level bid/ask order book depth.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">1505</span></td>
      <td>OHLC Candle</td>
      <td>Live Open, High, Low, Close candle data for a given interval.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">1510</span></td>
      <td>Open Interest</td>
      <td>Total open futures/options contracts for a derivative instrument.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">1507</span></td>
      <td>Market Status</td>
      <td>Exchange session state — Open, Closed, Pre-open, etc.</td>
    </tr>
  </tbody>
</table>

---

## WebSocket vs REST API

<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:0;align-items:stretch;margin:16px 0 24px;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
  <div style="padding:16px 20px;background:#ffffff">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:10px">REST API</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#9a3412;line-height:2.2">
      <li>Request every time data is needed</li>
      <li>Higher latency per request</li>
      <li>More network overhead</li>
      <li>Not suitable for real-time feeds</li>
    </ul>
  </div>
  <div style="padding:16px 10px;background:#f3f4f6;text-align:center;font-size:20px;color:#6b7280;display:flex;align-items:center">→</div>
  <div style="padding:16px 20px;background:#f0fdf4">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:10px">WebSocket</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#166534;line-height:2.2">
      <li>Data pushed automatically on change</li>
      <li>Ultra-low latency</li>
      <li>Minimal network overhead</li>
      <li>Built for real-time applications</li>
    </ul>
  </div>
</div>

---

## When to Use What

<table class="api-table">
  <thead>
    <tr>
      <th>Use Case</th>
      <th>Recommended</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Live price feed for a dashboard</td>
      <td><span class="enum-badge">WebSocket — Market Data</span></td>
    </tr>
    <tr>
      <td>Real-time order status updates</td>
      <td><span class="enum-badge">WebSocket — Interactive</span></td>
    </tr>
    <tr>
      <td>Fetching historical candles</td>
      <td><span class="enum-badge">REST — OHLC endpoint</span></td>
    </tr>
    <tr>
      <td>Placing / modifying / cancelling orders</td>
      <td><span class="enum-badge">REST — Interactive API</span></td>
    </tr>
    <tr>
      <td>One-time instrument lookup</td>
      <td><span class="enum-badge">REST — Instruments endpoint</span></td>
    </tr>
  </tbody>
</table>

---

## Common Use Cases

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:12px 0 24px">
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">💹 Live Market Quotes</div>
    <p style="font-size:12px;color:#374151;margin:0">Stream real-time bid/ask prices for any instrument.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">📈 Touchline Streaming</div>
    <p style="font-size:12px;color:#374151;margin:0">Receive LTP, open, high, low, close, and volume updates.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">📋 Market Depth</div>
    <p style="font-size:12px;color:#374151;margin:0">View best 5 buy/sell prices and quantities in real time.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">📊 Index Updates</div>
    <p style="font-size:12px;color:#374151;margin:0">Track NIFTY, SENSEX, BANKNIFTY live index values.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">🔔 Trade Notifications</div>
    <p style="font-size:12px;color:#374151;margin:0">Get instant alerts when trades are executed in the market.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:12px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">📂 Order &amp; Position</div>
    <p style="font-size:12px;color:#374151;margin:0">Real-time order status and position change tracking.</p>
  </div>
</div>

See [Connection](connection.md) for setup details and [Events](events.md) for handling data.
