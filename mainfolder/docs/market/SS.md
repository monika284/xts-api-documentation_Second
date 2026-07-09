<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">Socket Streaming</h1>
<p class="iov-subtitle"><strong>Socket Streaming</strong> creates a live connection between your application and the Market Data server. Once connected, market updates are automatically pushed in real time — no repeated requests needed.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Real-time updates</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg></div><span>Low latency</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>No repeated calls</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5z"/></svg></div><span>WebSocket based</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Live price &amp; depth</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>Efficient bandwidth</span></div>
</div>

---

## How Socket Streaming Works

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5z"/></svg></div><span>Connect</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/></svg></div><span>Subscribe</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Receive Updates</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></div><span>Unsubscribe</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Disconnect</span></div>
</div>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin:20px 0 8px">
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px">1. Connect</div>
    <p style="font-size:13px;color:#374151;margin:0">Establish a WebSocket connection with the Market Data server using your authentication token.</p>
  </div>
  <div style="border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;background:#eff6ff">
    <div style="font-weight:700;color:#1d4ed8;font-size:13px;margin-bottom:6px">2. Subscribe</div>
    <p style="font-size:13px;color:#374151;margin:0">Subscribe to instruments using Exchange Segment and Exchange Instrument ID. Server starts tracking them.</p>
  </div>
  <div style="border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4">
    <div style="font-weight:700;color:#16a34a;font-size:13px;margin-bottom:6px">3. Receive Updates</div>
    <p style="font-size:13px;color:#374151;margin:0">Server automatically pushes data whenever market changes occur. No additional requests needed.</p>
  </div>
  <div style="border:1.5px solid #e9d5ff;border-radius:10px;padding:14px 16px;background:#faf5ff">
    <div style="font-weight:700;color:#7c3aed;font-size:13px;margin-bottom:6px">4. Unsubscribe</div>
    <p style="font-size:13px;color:#374151;margin:0">Stop receiving updates for specific instruments at any time without closing the connection.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;background:#f9fafb">
    <div style="font-weight:700;color:#374151;font-size:13px;margin-bottom:6px">5. Disconnect</div>
    <p style="font-size:13px;color:#374151;margin:0">Close the WebSocket connection when streaming is no longer required.</p>
  </div>
</div>

---

## Types of Data Available

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px;margin:16px 0 24px">

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Touchline Data</div>
    <div style="padding:14px 16px;background:#ffffff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Last Traded Price (LTP)</li>
        <li>Open / High / Low / Close</li>
        <li>Volume</li>
      </ul>
    </div>
  </div>

  <div style="border:1.5px solid #bfdbfe;border-radius:12px;overflow:hidden">
    <div style="background:#1d4ed8;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Market Depth Data</div>
    <div style="padding:14px 16px;background:#eff6ff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Best 5 Buy Prices</li>
        <li>Best 5 Sell Prices</li>
        <li>Buy &amp; Sell Quantities</li>
      </ul>
    </div>
  </div>

  <div style="border:1.5px solid #bbf7d0;border-radius:12px;overflow:hidden">
    <div style="background:#16a34a;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Index Data</div>
    <div style="padding:14px 16px;background:#f0fdf4">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>NIFTY 50</li>
        <li>SENSEX</li>
        <li>BANK NIFTY &amp; others</li>
      </ul>
    </div>
  </div>

  <div style="border:1.5px solid #e9d5ff;border-radius:12px;overflow:hidden">
    <div style="background:#7c3aed;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Trade Data</div>
    <div style="padding:14px 16px;background:#faf5ff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Trade Price</li>
        <li>Trade Quantity</li>
        <li>Trade Time</li>
      </ul>
    </div>
  </div>

</div>

---

## Socket Events

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
      <td>- <strong>Socket connection established successfully.</strong><br>- Fired when the client connects to the WebSocket server.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">success</span></td>
      <td>- <strong>A request or operation completed successfully.</strong><br>- Returned after a valid subscribe or unsubscribe action.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">warning</span></td>
      <td>- <strong>A non-critical issue that may require attention.</strong><br>- Does not stop the connection but should be noted.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">error</span></td>
      <td>- <strong>An operation failed or could not be completed.</strong><br>- Check the error message for details and retry if needed.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">trade</span></td>
      <td>- <strong>Sent when a trade is executed in the market.</strong><br>- Contains trade price, quantity, and time details.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">order</span></td>
      <td>- <strong>Sent when an order-related update is available.</strong><br>- Includes status changes like filled, partial fill, or cancelled.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">position</span></td>
      <td>- <strong>Sent when there is a change in positions or holdings.</strong><br>- Helps track live portfolio changes in real time.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">logout</span></td>
      <td>- <strong>User has been disconnected from the socket session.</strong><br>- Reconnection may be required after this event.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">tradeConversion</span></td>
      <td>- <strong>Sent when a position is converted from one product type to another.</strong><br>- Example: MIS to NRML or CNC conversion.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">getOrder</span></td>
      <td>- <strong>Returns details of existing orders.</strong><br>- Use to fetch current order status and information.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">getOrderRejection</span></td>
      <td>- <strong>Returns information about rejected orders.</strong><br>- Includes the rejection reason for debugging and user notification.</td>
    </tr>
  </tbody>
</table>

---

## Example Workflow

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:2.2;margin:12px 0">
<span style="color:#6a9955">// Step 1 — Login &amp; get token</span><br>
<span style="color:#9cdcfe">token</span> <span style="color:#d4d4d4">= </span><span style="color:#ce9178">"eyJhbGci..."</span><br><br>
<span style="color:#6a9955">// Step 2 — Connect to WebSocket</span><br>
<span style="color:#4fc3f7">connect</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"wss://marketdata.server"</span><span style="color:#d4d4d4">, token)</span><br><br>
<span style="color:#6a9955">// Step 3 — Subscribe to instruments</span><br>
<span style="color:#4fc3f7">subscribe</span><span style="color:#d4d4d4">([</span><span style="color:#ce9178">"NSECM:2885"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"NSECM:11536"</span><span style="color:#d4d4d4">])</span>&nbsp;&nbsp;<span style="color:#6a9955">// RELIANCE, TCS</span><br><br>
<span style="color:#6a9955">// Step 4 — Server pushes live updates automatically</span><br>
<span style="color:#dcdcaa">onData</span><span style="color:#d4d4d4">(event → process price update)</span><br><br>
<span style="color:#6a9955">// Step 5 — Unsubscribe RELIANCE</span><br>
<span style="color:#4fc3f7">unsubscribe</span><span style="color:#d4d4d4">([</span><span style="color:#ce9178">"NSECM:2885"</span><span style="color:#d4d4d4">])</span><br><br>
<span style="color:#6a9955">// Step 6 — Disconnect</span><br>
<span style="color:#4fc3f7">disconnect</span><span style="color:#d4d4d4">()</span>
</div>

---

## Benefits

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin:12px 0 24px">
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Real-time Updates</div>
    <p style="font-size:12px;color:#374151;margin:0">Market data pushed instantly on change</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Low Latency</div>
    <p style="font-size:12px;color:#374151;margin:0">Minimal delay between market event and delivery</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Reduced API Calls</div>
    <p style="font-size:12px;color:#374151;margin:0">No need to poll repeatedly for updates</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Efficient Bandwidth</div>
    <p style="font-size:12px;color:#374151;margin:0">Only changed data is transmitted over the wire</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Better UX</div>
    <p style="font-size:12px;color:#374151;margin:0">Smooth, responsive trading application experience</p>
  </div>
</div>
