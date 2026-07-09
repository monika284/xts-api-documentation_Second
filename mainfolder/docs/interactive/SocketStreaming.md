<h1 id="socket-streaming" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Socket Streaming</h1>
<p style="color:#6b7280;font-size:15px;margin-bottom:18px"><strong>Socket Streaming</strong> is a way to receive <strong>live, real-time data from the server without sending repeated requests</strong>. Once connected, the server automatically pushes new data whenever it becomes available.</p>

<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:24px">
  <div style="display:flex;align-items:center;gap:7px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#c2410c">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    Real-time Data
  </div>
  <div style="display:flex;align-items:center;gap:7px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#c2410c">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>
    Persistent Connection
  </div>
  <div style="display:flex;align-items:center;gap:7px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#c2410c">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    Low Latency
  </div>
  <div style="display:flex;align-items:center;gap:7px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#c2410c">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    Live Trading Ready
  </div>
</div>

---

<h2 id="ss-what" style="color:#1e293b;font-weight:700;margin:28px 0 10px">What is Socket Streaming?</h2>

<div style="background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:20px;font-size:14px;color:#374151;line-height:1.8">
<strong>Socket Streaming is a real-time communication method where the server continuously pushes live data to the client over a single, always-open connection.</strong> You connect once, and the server sends updates automatically — no repeated requests needed.
</div>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px">
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-size:12px;font-weight:700;color:#c2410c;margin-bottom:4px">CONNECT ONCE</div>
    <div style="font-size:12px;color:#374151">Open a single persistent connection to the server</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-size:12px;font-weight:700;color:#c2410c;margin-bottom:4px">SERVER PUSHES</div>
    <div style="font-size:12px;color:#374151">Server automatically sends updates as they happen</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-size:12px;font-weight:700;color:#c2410c;margin-bottom:4px">INSTANT UPDATES</div>
    <div style="font-size:12px;color:#374151">Zero wait — data arrives the moment it changes</div>
  </div>
</div>

---

<h2 id="ss-why" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Why Use Socket Streaming?</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px">

  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:12px 16px">
      <strong style="color:#fff;font-size:13px"> Without Socket Streaming (Polling)</strong>
    </div>
    <div style="padding:14px 16px">
      <div style="background:#1e1e1e;border-radius:8px;padding:14px 16px;font-family:Consolas,monospace;font-size:12px;color:#d4d4d4;line-height:2">
        <span style="color:#9cdcfe">Client</span> <span style="color:#d4d4d4">→ Request latest price</span><br>
        <span style="color:#ce9178">Server</span> <span style="color:#d4d4d4">→ ₹250</span><br>
        <br>
        <span style="color:#9cdcfe">Client</span> <span style="color:#d4d4d4">→ Request latest price</span><br>
        <span style="color:#ce9178">Server</span> <span style="color:#d4d4d4">→ ₹251</span><br>
        <br>
        <span style="color:#9cdcfe">Client</span> <span style="color:#d4d4d4">→ Request latest price</span><br>
        <span style="color:#ce9178">Server</span> <span style="color:#d4d4d4">→ ₹249</span>
      </div>
      <p style="margin:10px 0 0;font-size:12px;color:#374151">Many API requests — even when data has not changed.</p>
    </div>
  </div>

  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:12px 16px">
      <strong style="color:#fff;font-size:13px"> With Socket Streaming</strong>
    </div>
    <div style="padding:14px 16px">
      <div style="background:#1e1e1e;border-radius:8px;padding:14px 16px;font-family:Consolas,monospace;font-size:12px;color:#d4d4d4;line-height:2">
        <span style="color:#9cdcfe">Client</span> <span style="color:#d4d4d4">───────────────► </span><span style="color:#ce9178">Server</span><br>
        <span style="color:#6b7280">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Connect Once</span><br>
        <br>
        <span style="color:#ce9178">Server</span> <span style="color:#d4d4d4">─► ₹250</span><br>
        <span style="color:#ce9178">Server</span> <span style="color:#d4d4d4">─► ₹251</span><br>
        <span style="color:#ce9178">Server</span> <span style="color:#d4d4d4">─► ₹249</span><br>
        <span style="color:#ce9178">Server</span> <span style="color:#d4d4d4">─► ₹252</span>
      </div>
      <p style="margin:10px 0 0;font-size:12px;color:#374151">Server automatically pushes updates as prices change.</p>
    </div>
  </div>

</div>

---

<h2 id="ss-how" style="color:#1e293b;font-weight:700;margin:28px 0 14px">How Socket Streaming Works</h2>

<div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;padding:20px 24px;margin-bottom:24px">
  <div style="display:flex;flex-direction:column;align-items:center;gap:0">

    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border-radius:8px;padding:10px 28px;font-size:13px;font-weight:700;text-align:center">Application Starts</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>
    <div style="color:#ff6b00;font-size:16px;font-weight:700">▼</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>

    <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:10px 28px;font-size:13px;font-weight:600;color:#374151;text-align:center">Connect to WebSocket Server</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>
    <div style="color:#ff6b00;font-size:16px;font-weight:700">▼</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>

    <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:10px 28px;font-size:13px;font-weight:600;color:#374151;text-align:center">Connection Established</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>
    <div style="color:#ff6b00;font-size:16px;font-weight:700">▼</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>

    <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:10px 28px;font-size:13px;font-weight:600;color:#374151;text-align:center">Subscribe to Required Data</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>
    <div style="color:#ff6b00;font-size:16px;font-weight:700">▼</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>

    <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:10px 28px;font-size:13px;font-weight:600;color:#374151;text-align:center">Server Sends Live Updates</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>
    <div style="color:#ff6b00;font-size:16px;font-weight:700">▼</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>

    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:10px 28px;font-size:13px;font-weight:700;color:#15803d;text-align:center">Application Updates Screen Instantly</div>
  </div>
</div>

---

<h2 id="ss-example" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Example in a Trading Application</h2>
<p style="color:#6b7280;font-size:13px;margin:-8px 0 14px">Suppose you subscribe to <strong>ABC Ltd.</strong> The server pushes prices automatically throughout the session:</p>

<div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:24px">
  <table style="width:100%;border-collapse:collapse;font-size:13px">
    <thead>
      <tr style="background:linear-gradient(135deg,#ff7b00,#ff9500)">
        <th style="padding:12px 18px;color:#fff;font-weight:700;text-align:left">Time</th>
        <th style="padding:12px 18px;color:#fff;font-weight:700;text-align:left">Event</th>
        <th style="padding:12px 18px;color:#fff;font-weight:700;text-align:right">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#f8fafc"><td style="padding:10px 18px;color:#6b7280;font-family:Consolas,monospace">9:15:00 AM</td><td style="padding:10px 18px;color:#374151;font-weight:600">Market opens — first tick received</td><td style="padding:10px 18px;font-weight:800;color:#374151;text-align:right">₹500</td></tr>
      <tr style="background:#fff"><td style="padding:10px 18px;color:#6b7280;font-family:Consolas,monospace">9:15:03 AM</td><td style="padding:10px 18px;color:#374151;font-weight:600">Price update pushed by server</td><td style="padding:10px 18px;font-weight:800;color:#ff6b00;text-align:right">₹501 ▲</td></tr>
      <tr style="background:#f8fafc"><td style="padding:10px 18px;color:#6b7280;font-family:Consolas,monospace">9:15:07 AM</td><td style="padding:10px 18px;color:#374151;font-weight:600">Price update pushed by server</td><td style="padding:10px 18px;font-weight:800;color:#374151;text-align:right">₹499 ▼</td></tr>
      <tr style="background:#fff"><td style="padding:10px 18px;color:#6b7280;font-family:Consolas,monospace">9:15:12 AM</td><td style="padding:10px 18px;color:#374151;font-weight:600">Price update pushed by server</td><td style="padding:10px 18px;font-weight:800;color:#ff6b00;text-align:right">₹503 ▲</td></tr>
    </tbody>
  </table>
  <div style="background:#fff7ed;border-top:1.5px solid #fed7aa;padding:10px 18px;font-size:12px;color:#c2410c;font-weight:600">No API requests were made after the initial connection — all updates delivered automatically.</div>
</div>

---

<h2 id="ss-data-types" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Data That Can Be Streamed</h2>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:24px">
  <div style="background:#fff7ed;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600"> Live stock prices (LTP)</div>
  <div style="background:#fff7ed;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600">Market depth (Bid / Ask)</div>
  <div style="background:#fff7ed;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600"> OHLC (Open, High, Low, Close)</div>
  <div style="background:#fff7ed;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600"> Volume &amp; market statistics</div>
  <div style="background:#fff7ed;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600">Index values (NIFTY, SENSEX)</div>
  <div style="background:#fff7ed;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600">Order status updates</div>
  <div style="background:#fff7ed;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600"> Trade confirmations</div>
  <div style="background:#fff7ed;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600">Position updates</div>
  <div style="background:#fff7ed;border:1px solid #fed7aa;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#c2410c;font-weight:600">Portfolio updates</div>
</div>

---

<h2 id="ss-vs-rest" style="color:#1e293b;font-weight:700;margin:28px 0 14px">REST API vs Socket Streaming</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:24px">

  <div>
    <div style="background:#374151;padding:14px 20px">
      <div style="font-size:14px;font-weight:800;color:#fff">REST API</div>
      <div style="font-size:11px;color:#9ca3af;margin-top:2px">Request → Response</div>
    </div>
    <div style="background:#f8fafc;border-right:1.5px solid #e5e7eb">
      <div style="padding:12px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#374151">Client <strong>requests</strong> data from server</div>
      <div style="padding:12px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#374151">One request returns <strong>one response</strong></div>
      <div style="padding:12px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#374151">Suitable for <strong>static or occasional</strong> data</div>
      <div style="padding:12px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#374151">Requires <strong>repeated API calls</strong> for updates</div>
      <div style="padding:12px 20px;font-size:13px;color:#374151;font-weight:600">Higher latency for live updates</div>
    </div>
  </div>

  <div>
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:14px 20px">
      <div style="font-size:14px;font-weight:800;color:#fff">Socket Streaming</div>
      <div style="font-size:11px;color:rgba(255,255,255,.7);margin-top:2px">Connect Once → Receive Always</div>
    </div>
    <div style="background:#fff">
      <div style="padding:12px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#374151;font-weight:600">Server <strong>pushes</strong> data automatically</div>
      <div style="padding:12px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#374151;font-weight:600">One connection delivers <strong>continuous</strong> updates</div>
      <div style="padding:12px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#374151;font-weight:600">Designed for <strong>live market data</strong></div>
      <div style="padding:12px 20px;border-bottom:1px solid #e5e7eb;font-size:13px;color:#374151;font-weight:600"><strong>No repeated requests</strong> after connection</div>
      <div style="padding:12px 20px;font-size:13px;color:#ff6b00;font-weight:800">Very low latency </div>
    </div>
  </div>

</div>

---

<h2 id="ss-advantages" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Advantages of Socket Streaming</h2>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:24px">
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:20px;margin-bottom:6px"></div>
    <div style="font-size:12px;font-weight:700;color:#c2410c">Real-time updates</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:20px;margin-bottom:6px"></div>
    <div style="font-size:12px;font-weight:700;color:#c2410c">Faster than polling</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:20px;margin-bottom:6px"></div>
    <div style="font-size:12px;font-weight:700;color:#c2410c">Lower network overhead</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:20px;margin-bottom:6px"></div>
    <div style="font-size:12px;font-weight:700;color:#c2410c">Reduced server load</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:20px;margin-bottom:6px"></div>
    <div style="font-size:12px;font-weight:700;color:#c2410c">Better user experience</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:20px;margin-bottom:6px"></div>
    <div style="font-size:12px;font-weight:700;color:#c2410c">Ideal for live trading</div>
  </div>
</div>

---

<h2 id="ss-remember" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Things to Remember</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px">
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;display:flex;align-items:flex-start;gap:10px">
    <span style="font-size:18px;margin-top:1px"></span>
    <div style="font-size:13px;color:#374151">The connection stays <strong>open until it is closed</strong> or disconnected by either side.</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;display:flex;align-items:flex-start;gap:10px">
    <span style="font-size:18px;margin-top:1px"></span>
    <div style="font-size:13px;color:#374151">If the connection drops, the client should <strong>reconnect automatically</strong>.</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;display:flex;align-items:flex-start;gap:10px">
    <span style="font-size:18px;margin-top:1px"></span>
    <div style="font-size:13px;color:#374151">You must <strong>subscribe</strong> to specific symbols or data types after connecting.</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;display:flex;align-items:flex-start;gap:10px">
    <span style="font-size:18px;margin-top:1px"></span>
    <div style="font-size:13px;color:#374151">Multiple symbols can be streamed <strong>over the same single connection</strong>.</div>
  </div>
</div>

---

<h2 id="ss-analogy" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Real-Life Analogy — Cricket Match</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px">
  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:12px 16px">
      <strong style="color:#fff;font-size:13px"> REST API — Refreshing Scorecard</strong>
    </div>
    <div style="padding:14px 16px;font-size:13px;color:#374151;line-height:1.8">
      Like <strong>refreshing a webpage every 10 seconds</strong> to see the latest cricket score. You get the score, but only when you ask — and you may miss updates in between.
    </div>
  </div>
  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:12px 16px">
      <strong style="color:#fff;font-size:13px"> Socket Streaming — Live TV</strong>
    </div>
    <div style="padding:14px 16px;font-size:13px;color:#374151;line-height:1.8">
      Like watching the match <strong>live on TV</strong>. The score updates the instant a wicket falls or a run is scored — no refresh needed, no delay.
    </div>
  </div>
</div>

---

<h2 id="ss-rmoney" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Socket Streaming in RMoney Market Data API</h2>
<p style="color:#6b7280;font-size:13px;margin:-8px 0 14px">The RMoney Market Data API uses socket streaming to deliver live market data across all subscribed instruments.</p>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px">
  <div style="background:#fff;border:1.5px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px">
    <div style="font-size:12px;font-weight:700;color:#ff6b00;margin-bottom:4px">LIVE QUOTES</div>
    <div style="font-size:12px;color:#374151">Real-time price updates for subscribed instruments</div>
  </div>
  <div style="background:#fff;border:1.5px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px">
    <div style="font-size:12px;font-weight:700;color:#ff6b00;margin-bottom:4px">MARKET DEPTH</div>
    <div style="font-size:12px;color:#374151">Best bid and ask prices with available quantities</div>
  </div>
  <div style="background:#fff;border:1.5px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px">
    <div style="font-size:12px;font-weight:700;color:#ff6b00;margin-bottom:4px">OHLC UPDATES</div>
    <div style="font-size:12px;color:#374151">Open, High, Low, and Close prices streamed live</div>
  </div>
  <div style="background:#fff;border:1.5px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px">
    <div style="font-size:12px;font-weight:700;color:#ff6b00;margin-bottom:4px">VOLUME</div>
    <div style="font-size:12px;color:#374151">Total traded volume and other market statistics</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px">
    <div style="font-size:12px;font-weight:700;color:#c2410c;margin-bottom:4px">INDEX UPDATES</div>
    <div style="font-size:12px;color:#374151">Live values of NIFTY, SENSEX, and other indices</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px">
    <div style="font-size:12px;font-weight:700;color:#c2410c;margin-bottom:4px">MULTI-SYMBOL</div>
    <div style="font-size:12px;color:#374151">Stream multiple instruments over one connection</div>
  </div>
</div>

<h3 id="ss-rmoney-flow" style="color:#1e293b;font-weight:700;margin:24px 0 14px;font-size:15px">Typical Flow</h3>

<div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;padding:20px 24px;margin-bottom:24px">
  <div style="display:flex;flex-direction:column;align-items:center;gap:0">

    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border-radius:8px;padding:10px 28px;font-size:13px;font-weight:700;text-align:center">Connect to WebSocket</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>
    <div style="color:#ff6b00;font-size:16px;font-weight:700">▼</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>

    <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:10px 28px;font-size:13px;font-weight:600;color:#374151;text-align:center">Authenticate (if required)</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>
    <div style="color:#ff6b00;font-size:16px;font-weight:700">▼</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>

    <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:10px 28px;font-size:13px;font-weight:600;color:#374151;text-align:center">Subscribe to Instruments</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>
    <div style="color:#ff6b00;font-size:16px;font-weight:700">▼</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>

    <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:10px 28px;font-size:13px;font-weight:600;color:#374151;text-align:center">Receive Live Market Data</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>
    <div style="color:#ff6b00;font-size:16px;font-weight:700">▼</div>
    <div style="width:2px;height:20px;background:#e5e7eb"></div>

    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:10px 28px;font-size:13px;font-weight:700;color:#15803d;text-align:center">Unsubscribe or Disconnect</div>
  </div>
</div>

<div style="background:linear-gradient(135deg, #fff6f6, #ff9500);border-radius:12px;padding:18px 22px;margin-bottom:24px">
  <p style="margin:0;font-size:14px;color: #0a0101;line-height:1.8"><strong>In Simple Words:</strong> Socket Streaming lets your application receive live updates over a single, continuous connection. Once connected, the server automatically sends new market data — such as prices, orders, or positions — as soon as it changes, making it ideal for real-time trading applications.</p>
</div>

---

<h2 id="ss-connection" style="color:#1e40af;font-weight:700;margin:28px 0 8px">Establishment of socket connection</h2>

<div style="position:relative;margin:8px 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;max-height:220px;overflow:hidden;transition:max-height .4s ease" id="ss-conn-box">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> socketio</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://developers.symphonyfintech.in"</span><span style="color:#6a9955">&nbsp;&nbsp;&nbsp;&nbsp;# base url</span><br>
<span style="color:#9cdcfe">userID</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"SYMP"</span><span style="color:#6a9955">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#userID received from login api</span><br>
<span style="color:#9cdcfe">token</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#6a9955">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#Token generated from login api</span><br>
<span style="color:#9cdcfe">apiType</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"INTERACTIVE"</span><br>
<span style="color:#9cdcfe">socketio_path</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"/1interactive/socket.io"</span><span style="color:#6a9955">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#note:- /1interactive is endpoint you have recieved from hostlookup load balance step</span><br>
<span style="color:#9cdcfe">logger</span><span style="color:#d4d4d4"> = </span><span style="color:#569cd6">False</span><span style="color:#d4d4d4">  </span><span style="color:#6a9955"># or "True"</span><br>
<br>
<span style="color:#9cdcfe">sio</span><span style="color:#d4d4d4"> = socketio.</span><span style="color:#dcdcaa">Client</span><span style="color:#d4d4d4">()</span><br>
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> __name__ == </span><span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">try</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">connectionString</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">f"{url}?token={token}&amp;userID={userID}&amp;apiType={apiType}"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">sio</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">connect</span><span style="color:#d4d4d4">(url=connectionString, socketio_path=socketio_path, transports=[</span><span style="color:#ce9178">"websocket"</span><span style="color:#d4d4d4">])</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">sio</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">wait</span><span style="color:#d4d4d4">()</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">except</span><span style="color:#d4d4d4"> KeyboardInterrupt:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Stopping client..."</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">sio</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">disconnect</span><span style="color:#d4d4d4">()</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">except</span><span style="color:#d4d4d4"> Exception </span><span style="color:#c586c0">as</span><span style="color:#d4d4d4"> e:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Connection failed:"</span><span style="color:#d4d4d4">, e)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('ss-conn-box').innerText;navigator.clipboard.writeText(t).then(function(btn){var b=document.getElementById('ss-conn-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="ss-conn-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(btn){var b=document.getElementById('ss-conn-box');if(b.style.maxHeight==='none'){b.style.maxHeight='220px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})(this)" id="ss-conn-tog" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<div style="border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin:16px 0 24px;font-size:13px;color:#374151;line-height:1.9">
  <strong style="color:#1e40af">Note:</strong>
  <ul style="margin:6px 0 0;padding-left:20px">
    <li>XTS uses <strong>Socket.io</strong> protocol for the Interactive order related data.</li>
    <li>Users must note that some programming languages does not support socket.io protocol directly, so they need to find compatible websocket libraries.</li>
  </ul>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-connect" style="color:#1e40af;font-weight:700;margin:20px 0 6px">Connect</h2>
<p style="color:#2563eb;font-size:13px;margin:0 0 10px">This event triggers when socket connection is successfull.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-conn-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"connect"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">connect</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Connection Established"</span><span style="color:#d4d4d4">)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-conn-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-conn-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-conn-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-joined" style="color:#1e40af;font-weight:700;margin:20px 0 6px">Joined</h2>
<p style="color:#2563eb;font-size:13px;margin:0 0 10px">If a successful connection is established with the server, this event will be raised to indicate that the user has been connected.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-joined-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"joined"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_joined</span><span style="color:#d4d4d4">(data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Socket Joined"</span><span style="color:#d4d4d4">, data)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-joined-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-joined-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-joined-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-error" style="color:#1e40af;font-weight:700;margin:20px 0 6px">Error</h2>
<p style="color:#2563eb;font-size:13px;margin:0 0 10px">In case of any error with the server, this event will be raised along with the cause of the error. For example, if you send an incorrect token while connecting, the server will raise this event and disconnect your socket connection.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-err-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"error"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_error</span><span style="color:#d4d4d4">(data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Error"</span><span style="color:#d4d4d4">, data)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-err-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-err-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-err-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-disconnect" style="color:#1e40af;font-weight:700;margin:20px 0 6px">Disconnect</h2>
<p style="color:#2563eb;font-size:13px;margin:0 0 10px">In case a socket disconnection occurs with the server, this event will be raised to indicate the disconnection.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-disc-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"disconnect"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_disconnect</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Disconnected"</span><span style="color:#d4d4d4">)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-disc-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-disc-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-disc-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-orders" style="color:#1e40af;font-weight:700;margin:20px 0 6px">Orders</h2>
<p style="color:#2563eb;font-size:13px;margin:0 0 10px">To listen for order state change events such as New, Filled, Partially Filled, etc., register for this event.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-ord-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"order"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_order</span><span style="color:#d4d4d4">(data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Order Received:- "</span><span style="color:#d4d4d4">,data)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-ord-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-ord-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-ord-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>
<p style="color:#374151;font-size:13px;margin:10px 0 6px">Below is order object you will receive when any of your order state changes</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;max-height:300px;overflow:hidden;transition:max-height .4s ease;" id="ss-ord-json-box" data-cbupgraded="1">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LoginID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ClientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"AppOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">648468730</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderReferenceID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"GeneratedBy"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"WSAPI"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1005239196374100"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderCategoryType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NORMAL"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">16921</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"LIMIT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NRML"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TimeInForce"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"DAY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"New"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderAverageTradedPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2615.8</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LeavesQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"CumulativeQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderDisclosedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderGeneratedDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"14-05-2021 11:17:29"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeTransactTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"14-05-2021 11:17:30"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LastUpdateDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"14-05-2021 11:17:29"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderExpiryDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01-01-1900 00:00:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"CancelRejectReason"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"454845"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderLegStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SingleOrderLeg"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"IsSpread"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"BolegDetails"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">4</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageVersion"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">4</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ApplicationType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"SequenceNumber"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('ss-ord-json-box').innerText;navigator.clipboard.writeText(t).then(function(btn){var b=document.getElementById('ss-ord-json-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="ss-ord-json-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(btn){var b=document.getElementById('ss-ord-json-box');if(b.style.maxHeight==='none'){b.style.maxHeight='300px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})(this)" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-trade" style="color:#1e40af;font-weight:700;margin:20px 0 6px">Trade</h2>
<p style="color:#2563eb;font-size:13px;margin:0 0 10px">When any order gets executed (fully or partially filled), a new trade event will be generated. The server will raise trade events, and you can listen to these events by registering for them.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-trade-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"trade"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_trade</span><span style="color:#d4d4d4">(data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Trade Recieved:- "</span><span style="color:#d4d4d4">, data)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-trade-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-trade-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-trade-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>
<p style="color:#374151;font-size:13px;margin:10px 0 6px">Below is trade object you will receive when any trade happens on your account.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;max-height:300px;overflow:hidden;transition:max-height .4s ease;" id="ss-trade-json-box" data-cbupgraded="1">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LoginID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"YMS"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ClientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"YMSCL1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"AppOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">648468731</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderReferenceID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"GeneratedBy"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"TWSAPI"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1005239196374109"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderCategoryType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NORMAL"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">16921</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Limit"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NRML"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TimeInForce"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"DAY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Filled"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderAverageTradedPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">44.00</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LeavesQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"CumulativeQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderDisclosedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderGeneratedDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"14-05-2021 11:17:29"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeTransactTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"14-05-2021 11:17:30"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LastUpdateDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"14-05-2021 11:17:29"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"454845"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderLegStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SingleOrderLeg"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LastTradedPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">44</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LastTradedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LastExecutionTransactTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"14-05-2021 11:17:29"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExecutionID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1320599156383056"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExecutionReportIndex"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">3</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"IsSpread"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">9005</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageVersion"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">4</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TokenID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ApplicationType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"SequenceNumber"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('ss-trade-json-box').innerText;navigator.clipboard.writeText(t).then(function(btn){var b=document.getElementById('ss-trade-json-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="ss-trade-json-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(btn){var b=document.getElementById('ss-trade-json-box');if(b.style.maxHeight==='none'){b.style.maxHeight='300px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})(this)" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-position" style="color:#1e40af;font-weight:700;margin:20px 0 6px">Position</h2>
<p style="color:#2563eb;font-size:13px;margin:0 0 10px">If any position change occurs in your account, the server will raise this event to indicate the updated position. By registering for this event, you can track position changes.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-pos-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"position"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_position</span><span style="color:#d4d4d4">(data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Position Recieved:- "</span><span style="color:#d4d4d4">, data)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-pos-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-pos-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-pos-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>
<p style="color:#374151;font-size:13px;margin:10px 0 6px">Below is Position object that you will receive when any position change happens on your account.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;max-height:300px;overflow:hidden;transition:max-height .4s ease;" id="ss-pos-json-box" data-cbupgraded="1">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LoginID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"AccountID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TradingSymbol"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"22"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"CNC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"Multiplier"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MarketLot"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"BuyAveragePrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">41.78</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"SellAveragePrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">41.63</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LongPosition"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">5</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ShortPosition"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"NetPosition"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">5</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"BuyValue"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1671.00</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"SellValue"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2498.00</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"NetValue"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">827.00</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"UnrealizedMTM"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"RealizedMTM"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MTM"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"BEP"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"SumOfTradedQuantityAndPriceBuy"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1671.00</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"SumOfTradedQuantityAndPriceSell"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2498.00</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"StatisticsLevel"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ParentLevel"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"IsInterOpPosition"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"childPositions"</span><span style="color:#d4d4d4">: [{}],</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">9002</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageVersion"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TokenID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ApplicationType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"SequenceNumber"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('ss-pos-json-box').innerText;navigator.clipboard.writeText(t).then(function(btn){var b=document.getElementById('ss-pos-json-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="ss-pos-json-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(btn){var b=document.getElementById('ss-pos-json-box');if(b.style.maxHeight==='none'){b.style.maxHeight='300px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})(this)" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-trconv" style="color:#1e40af;font-weight:700;margin:20px 0 6px">Trade conversion</h2>
<p style="color:#2563eb;font-size:13px;margin:0 0 10px">If any trade conversion occurs in your account, the server will raise this event to indicate the trade conversion status. By registering for this event, you can track the trade conversion status.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-trconv-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"tradeConversion"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_tradeconversion</span><span style="color:#d4d4d4">(data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"TradeConversion Recieved:- "</span><span style="color:#d4d4d4">, data)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-trconv-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-trconv-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-trconv-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>
<p style="color:#374151;font-size:13px;margin:10px 0 6px">Below is Position object that you will receive when any position change happens on your account.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;max-height:300px;overflow:hidden;transition:max-height .4s ease;" id="ss-trconv-json-box" data-cbupgraded="1">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LoginID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ClientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"Success"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ErrorMessage"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OriginalProduct"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"MIS"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TargetProduct"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NRML"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OriginalQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">10</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TargetQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">10</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"EntityType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Client"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentId"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TargetEntityId"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"NetValue"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">-2587.5</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"Status"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"PositionConverted"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"RejectionReason"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"RejectedBy"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"Price"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">-2587.5</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"NOWTimeStamp"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"2021-10-29T17:22:25.945707"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Buy"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"IsProOrder"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">9007</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageVersion"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">4</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TokenID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ApplicationType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"SequenceNumber"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('ss-trconv-json-box').innerText;navigator.clipboard.writeText(t).then(function(btn){var b=document.getElementById('ss-trconv-json-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="ss-trconv-json-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(btn){var b=document.getElementById('ss-trconv-json-box');if(b.style.maxHeight==='none'){b.style.maxHeight='300px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})(this)" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-gttorder" style="color:#1e40af;font-weight:700;margin:20px 0 6px">GTT Order</h2>
<p style="color:#2563eb;font-size:13px;margin:0 0 10px">When any GTT order gets executed, a new trade event will be generated. The server will raise trade events &amp; you can listen to this event by registering it.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-gttord-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"gttOrder"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_gttOrder</span><span style="color:#d4d4d4">(data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"GTT Order Recieved:- "</span><span style="color:#d4d4d4">, data)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-gttord-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-gttord-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-gttord-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>
<p style="color:#374151;font-size:13px;margin:10px 0 6px">Below is the gttOrder object that you will receive when any gttOrder change happens on your account.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;max-height:300px;overflow:hidden;transition:max-height .4s ease;" id="ss-gttord-json-box" data-cbupgraded="1">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LoginID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ClientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"AppOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1311100040"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderReferenceID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"GeneratedBy"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Web"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeOrderID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderCategoryType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NORMAL"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1333</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Limit"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"CNC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TimeInForce"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"None"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1500</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TradingSymbol"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"HDFCBANK"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderStopPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1500</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"New"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderAverageTradedPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LeavesQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"CumulativeQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderDisclosedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderGeneratedDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"21-04-2026 16:51:27"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeTransactTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"21-04-2026 16:51:27"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"LastUpdateDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"21-04-2026 16:51:27"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderExpiryDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"21-04-2026 16:51:27"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"CancelRejectReason"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderUniqueIdentifier"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"OrderLegStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SingleOrderLeg"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"BolegDetails"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"IsSpread"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"SecurityType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">9004</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageVersion"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">4</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"TokenID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ApplicationType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"SequenceNumber"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('ss-gttord-json-box').innerText;navigator.clipboard.writeText(t).then(function(btn){var b=document.getElementById('ss-gttord-json-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="ss-gttord-json-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(btn){var b=document.getElementById('ss-gttord-json-box');if(b.style.maxHeight==='none'){b.style.maxHeight='300px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})(this)" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-gttrej" style="color:#1e40af;font-weight:700;margin:20px 0 6px">GTT Order Rejection</h2>
<p style="color:#2563eb;font-size:13px;margin:0 0 10px">When any GTT order gets rejected, a new trade event will be generated. The server will raise trade events &amp; you can listen to this event by registering it.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-gttrej-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"gttOrderRejection"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_gttOrderRejection</span><span style="color:#d4d4d4">(data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"GTT Order Rejection Recieved:- "</span><span style="color:#d4d4d4">, data)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-gttrej-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-gttrej-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-gttrej-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>
<p style="color:#374151;font-size:13px;margin:10px 0 6px">Below is gttOrderRejection object that you will receive when any gttOrder rejection change happens on your account.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-gttrej-json-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"Type"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">783</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"Data"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ErrorString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Gateway:Freeze Quantity: Required Limit[1000000] Freeze Quantity Limit[6]"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"ClientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"UserID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP1"</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('ss-gttrej-json-box').innerText;navigator.clipboard.writeText(t).then(function(btn){var b=document.getElementById('ss-gttrej-json-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="ss-gttrej-json-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-msu" style="color:#1e40af;font-weight:700;margin:20px 0 2px">Market Status Update</h2>
<p style="color:#6b7280;font-size:12px;margin:0 0 8px">marketStatusUpdate</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-msu-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"marketStatusUpdate"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_marketStatusUpdate</span><span style="color:#d4d4d4">(data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"marketStatusUpdate Recieved:- "</span><span style="color:#d4d4d4">, data)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-msu-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-msu-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-msu-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>
<p style="color:#374151;font-size:13px;margin:10px 0 6px">Below is marketStatusUpdate.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-msu-json-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"timeStamp"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"9-16-2025 1:30:00 PM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"marketSession"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NormalStart"</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('ss-msu-json-box').innerText;navigator.clipboard.writeText(t).then(function(btn){var b=document.getElementById('ss-msu-json-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="ss-msu-json-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-eas" style="color:#1e40af;font-weight:700;margin:20px 0 2px">Exchange Adapter State</h2>
<p style="color:#6b7280;font-size:12px;margin:0 0 8px">exchangeAdapterState</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-eas-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"exchangeAdapterState"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_exchangeAdapterState</span><span style="color:#d4d4d4">(data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"exchangeAdapterState Recieved:- "</span><span style="color:#d4d4d4">, data)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-eas-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-eas-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-eas-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:1.5px dashed #bfdbfe;margin:20px 0">

<h2 id="ss-ev-logout" style="color:#1e40af;font-weight:700;margin:20px 0 6px">Logout</h2>
<p style="color:#2563eb;font-size:13px;margin:0 0 10px">When your session is logged out by the server, it will raise this event. By registering for this event, you can track your session state.</p>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:18px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9" id="ss-ev-logout-box">
<span style="color:#d4d4d4">@sio.</span><span style="color:#dcdcaa">on</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"logout"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_logout</span><span style="color:#d4d4d4">(data):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Logout Recieved:- "</span><span style="color:#d4d4d4">, data)</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="navigator.clipboard.writeText(document.getElementById('ss-ev-logout-box').innerText).then(function(btn){var b=document.getElementById('ss-ev-logout-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ss-ev-logout-c" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>
<p style="color:#374151;font-size:13px;margin:10px 0 0"><strong>Note:</strong> Here you will not get any data object from the server. This event itself notifies that the session has been closed by the server.</p>
