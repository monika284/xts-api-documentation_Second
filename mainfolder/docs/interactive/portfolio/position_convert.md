<h1 id="position-convert" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Position Convert</h1>
<p style="color:#6b7280;font-size:15px;margin-bottom:18px">Change the product type of an open position without closing the trade — for example, convert Intraday (MIS) to Delivery (CNC) to hold overnight.</p>

<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:24px">
  <div style="display:flex;align-items:center;gap:7px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#c2410c">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
    No Re-entry Needed
  </div>
  <div style="display:flex;align-items:center;gap:7px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#15803d">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
    MIS → CNC / NRML
  </div>
  <div style="display:flex;align-items:center;gap:7px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#1d4ed8">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Avoid Auto Square-off
  </div>
  <div style="display:flex;align-items:center;gap:7px;background:#fdf4ff;border:1.5px solid #e9d5ff;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#7c3aed">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    Qty &amp; P&amp;L Preserved
  </div>
</div>

---

<h2 id="conv-what" style="color:#1e293b;font-weight:700;margin:28px 0 10px">What is Position Convert?</h2>

<div style="background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:20px;font-size:14px;color:#374151;line-height:1.8">
<strong>Position Convert</strong> is the process of <strong>changing the product type of an existing open position</strong> without closing the trade. Only the <strong>product category</strong> changes — the stock, quantity, buy/sell price, and P&amp;L all remain the same.
</div>

<h2 id="conv-why" style="color:#1e293b;font-weight:700;margin:28px 0 12px">Why is Position Conversion Needed?</h2>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px">
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:14px 16px;font-size:13px;color:#374151;font-weight:600">Bought intraday but want to hold it for several days</div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:14px 16px;font-size:13px;color:#374151;font-weight:600">Accidentally selected the wrong product type on order placement</div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:14px 16px;font-size:13px;color:#374151;font-weight:600">Want to avoid automatic intraday square-off</div>
</div>

---

<h2 id="conv-examples" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Examples</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px">

  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:12px 16px">
      <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.8);letter-spacing:.05em;margin-bottom:2px">EXAMPLE 1</div>
      <div style="font-size:13px;font-weight:700;color:#fff">Intraday → Delivery</div>
    </div>
    <div style="padding:14px 16px;font-size:13px;color:#374151">
      <p style="margin:0 0 12px">You buy <strong>100 shares of ABC Ltd. at ₹500</strong> as <strong>Intraday (MIS)</strong>. Later you decide to keep them as an investment.</p>
      <div style="display:flex;align-items:center;gap:10px;justify-content:center;padding:10px 0">
        <div style="background:#fff1f2;border:1.5px solid #fca5a5;border-radius:8px;padding:8px 16px;text-align:center;font-size:12px;font-weight:700;color:#dc2626">Intraday<br><span style="font-size:11px;font-weight:400">MIS</span></div>
        <div style="font-size:20px;color:#ff6b00;font-weight:700">→</div>
        <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:8px 16px;text-align:center;font-size:12px;font-weight:700;color:#15803d">Delivery<br><span style="font-size:11px;font-weight:400">CNC</span></div>
      </div>
      <p style="margin:8px 0 0;font-size:12px;color:#6b7280">Shares will be credited to your Demat after settlement (subject to sufficient funds).</p>
    </div>
  </div>

  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:12px 16px">
      <div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.8);letter-spacing:.05em;margin-bottom:2px">EXAMPLE 2</div>
      <div style="font-size:13px;font-weight:700;color:#fff">Delivery → Intraday</div>
    </div>
    <div style="padding:14px 16px;font-size:13px;color:#374151">
      <p style="margin:0 0 12px">You accidentally placed a <strong>Delivery (CNC)</strong> order but only wanted to trade for the day.</p>
      <div style="display:flex;align-items:center;gap:10px;justify-content:center;padding:10px 0">
        <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:8px;padding:8px 16px;text-align:center;font-size:12px;font-weight:700;color:#15803d">Delivery<br><span style="font-size:11px;font-weight:400">CNC</span></div>
        <div style="font-size:20px;color:#ff6b00;font-weight:700">→</div>
        <div style="background:#fff1f2;border:1.5px solid #fca5a5;border-radius:8px;padding:8px 16px;text-align:center;font-size:12px;font-weight:700;color:#dc2626">Intraday<br><span style="font-size:11px;font-weight:400">MIS</span></div>
      </div>
      <p style="margin:8px 0 0;font-size:12px;color:#6b7280">Now the trade is treated as an intraday position (if broker allows it).</p>
    </div>
  </div>

</div>

---

<h2 id="conv-types" style="color:#1e293b;font-weight:700;margin:28px 0 10px">Common Position Conversions</h2>

<table class="api-table">
  <thead>
    <tr><th>From</th><th>To</th><th>Note</th></tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">Intraday (MIS)</span></td><td>Delivery (CNC)</td><td>Most common — hold overnight</td></tr>
    <tr><td><span class="enum-badge">Delivery (CNC)</span></td><td>Intraday (MIS)</td><td>If allowed by broker</td></tr>
    <tr><td><span class="enum-badge">Margin</span></td><td>Delivery</td><td>Convert margin position to delivery</td></tr>
    <tr><td><span class="enum-badge">Delivery</span></td><td>Margin</td><td>Subject to broker rules</td></tr>
    <tr><td><span class="enum-badge">NRML</span></td><td>MIS</td><td>For derivatives, if supported</td></tr>
    <tr><td><span class="enum-badge">MIS</span></td><td>NRML</td><td>For derivatives, if supported</td></tr>
  </tbody>
</table>

---

<h2 id="conv-what-changes" style="color:#1e293b;font-weight:700;margin:28px 0 12px">What Changes During Conversion?</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px">
  <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:16px 18px">
    <div style="font-size:12px;font-weight:700;color:#15803d;margin-bottom:10px;letter-spacing:.04em">✔ STAYS THE SAME</div>
    <ul style="margin:0;padding:0;list-style:none;font-size:13px;color:#374151">
      <li style="padding:5px 0;border-bottom:1px solid #dcfce7;display:flex;gap:8px"><span style="color:#15803d">●</span> Stock or contract</li>
      <li style="padding:5px 0;border-bottom:1px solid #dcfce7;display:flex;gap:8px"><span style="color:#15803d">●</span> Quantity</li>
      <li style="padding:5px 0;border-bottom:1px solid #dcfce7;display:flex;gap:8px"><span style="color:#15803d">●</span> Buy / Sell price</li>
      <li style="padding:5px 0;border-bottom:1px solid #dcfce7;display:flex;gap:8px"><span style="color:#15803d">●</span> Average price</li>
      <li style="padding:5px 0;display:flex;gap:8px"><span style="color:#15803d">●</span> P&amp;L (based on market)</li>
    </ul>
  </div>
  <div style="background:#fff1f2;border:1.5px solid #fca5a5;border-radius:10px;padding:16px 18px">
    <div style="font-size:12px;font-weight:700;color:#dc2626;margin-bottom:10px;letter-spacing:.04em">✦ WHAT CHANGES</div>
    <ul style="margin:0;padding:0;list-style:none;font-size:13px;color:#374151">
      <li style="padding:5px 0;border-bottom:1px solid #fecdd3;display:flex;gap:8px"><span style="color:#dc2626">●</span> Product type (MIS / CNC / NRML)</li>
      <li style="padding:5px 0;border-bottom:1px solid #fecdd3;display:flex;gap:8px"><span style="color:#dc2626">●</span> Margin requirement</li>
      <li style="padding:5px 0;border-bottom:1px solid #fecdd3;display:flex;gap:8px"><span style="color:#dc2626">●</span> Square-off behavior</li>
      <li style="padding:5px 0;display:flex;gap:8px"><span style="color:#dc2626">●</span> Settlement treatment</li>
    </ul>
  </div>
</div>

---

<h2 id="conv-when" style="color:#1e293b;font-weight:700;margin:28px 0 12px">When Can You Convert?</h2>

<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:24px">
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #15803d;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151"><strong style="color:#15803d">✔</strong> Position is still open</div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #15803d;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151"><strong style="color:#15803d">✔</strong> Market is open (within conversion window)</div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #15803d;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151"><strong style="color:#15803d">✔</strong> Sufficient funds or margin available</div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #15803d;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151"><strong style="color:#15803d">✔</strong> Exchange and broker support the conversion</div>
</div>

---

<h2 id="conv-workflow" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Position Conversion Workflow</h2>

<div style="display:flex;flex-direction:column;align-items:flex-start;gap:0;margin-bottom:24px">
  <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border-radius:8px;padding:10px 18px;font-size:12px;font-weight:700">Place an Order</div>
  <div style="margin-left:22px;color:#ff6b00;font-size:18px;line-height:1.2">↓</div>
  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:10px 18px;font-size:12px;font-weight:600;color:#374151">Position is Created</div>
  <div style="margin-left:22px;color:#ff6b00;font-size:18px;line-height:1.2">↓</div>
  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:10px 18px;font-size:12px;font-weight:600;color:#374151">Need to Change Product Type?</div>
  <div style="margin-left:22px;color:#ff6b00;font-size:18px;line-height:1.2">↓</div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:10px 18px;font-size:12px;font-weight:600;color:#c2410c">Submit Position Conversion Request via API</div>
  <div style="margin-left:22px;color:#ff6b00;font-size:18px;line-height:1.2">↓</div>
  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:10px 18px;font-size:12px;font-weight:600;color:#374151">Broker Validates Funds, Margin &amp; Rules</div>
  <div style="margin-left:22px;color:#ff6b00;font-size:18px;line-height:1.2">↓</div>
  <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:10px 18px;font-size:12px;font-weight:700;color:#15803d">Position Continues with New Product Type ✔</div>
</div>

---

<h2 id="conv-real-example" style="color:#1e293b;font-weight:700;margin:28px 0 12px">Real-Life Example</h2>

<div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;padding:20px 24px;margin-bottom:24px">
  <p style="margin:0 0 14px;font-size:14px;color:#374151">Rahul buys <strong>100 shares of XYZ Ltd. at ₹300</strong> as <strong>Intraday (MIS)</strong>. By afternoon, the stock is rising and he believes it will continue for a few days. He converts the position.</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px">
    <div style="background:#fff1f2;border-radius:8px;padding:12px;text-align:center">
      <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.05em;margin-bottom:4px">BEFORE</div>
      <div style="font-size:14px;font-weight:800;color:#dc2626">MIS</div>
      <div style="font-size:11px;color:#6b7280;margin-top:2px">Intraday</div>
    </div>
    <div style="background:#fff7ed;border-radius:8px;padding:12px;text-align:center;display:flex;align-items:center;justify-content:center">
      <div style="font-size:22px;color:#ff6b00;font-weight:700">→</div>
    </div>
    <div style="background:#f0fdf4;border-radius:8px;padding:12px;text-align:center">
      <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.05em;margin-bottom:4px">AFTER</div>
      <div style="font-size:14px;font-weight:800;color:#15803d">CNC</div>
      <div style="font-size:11px;color:#6b7280;margin-top:2px">Delivery</div>
    </div>
  </div>
  <p style="margin:0;font-size:13px;color:#6b7280">Shares are credited to Rahul's Demat after settlement. He can now hold them for as long as he wants.</p>
</div>

---

<h2 id="conv-benefits" style="color:#1e293b;font-weight:700;margin:28px 0 12px">Benefits</h2>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px">
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600">Avoid automatic intraday square-off</div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600">Correct an incorrect product selection</div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600">Hold shares for the long term</div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600">Adjust strategy without a new order</div>
  <div style="background:#fff7ed;border:1px solid #fed7aa;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#c2410c;font-weight:600">Save time &amp; brokerage on re-entry</div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde047;border-radius:10px;padding:14px 18px;display:flex;gap:12px;align-items:flex-start;margin:8px 0 24px">
  <span style="font-size:18px;flex-shrink:0">⚠️</span>
  <div style="font-size:13px;color:#713f12;line-height:1.7">
    <strong>Things to Remember:</strong><br>
    Not every position can be converted. Some brokers charge additional fees or require extra margin. Derivative positions (Futures &amp; Options) may have different conversion rules. Once a position is <strong>fully closed</strong>, it cannot be converted.
  </div>
</div>

<div style="background:linear-gradient(135deg,#ff6b00,#ff9500);border-radius:12px;padding:18px 22px;margin-bottom:32px">
  <p style="margin:0;font-size:14px;color:#fff;line-height:1.8"><strong>In Simple Words:</strong> Position Convert means changing the product type of an open position (such as Intraday to Delivery) without closing the trade. This lets you continue holding the same position under a different trading category, subject to your broker's rules.</p>
</div>

---

<h2 id="conv-api" style="color:#1e293b;font-weight:700;margin:28px 0 6px">Convert Position API</h2>
<p style="color:#6b7280;font-size:14px;margin-bottom:16px;line-height:1.7">Convert Position API enables users to convert their open positions from <strong>NRML (Normal)</strong> to <strong>MIS (Margin Intraday Square-off)</strong> or vice versa, provided there is sufficient margin or funds in the account to complete the conversion.</p>

<div class="aec-card">
  <div class="aec-top">
    <span class="aec-label">ENDPOINT</span>
    <span class="aec-badge-post" style="background:#eff6ff;color:#1d4ed8;border:1.5px solid #bfdbfe">PUT</span>
  </div>
  <div class="aec-url-row">
    <span class="aec-base">https://xts.rmoneyindia.co.in:3000</span><span class="aec-path">/interactive/portfolio/positions/convert</span>
  </div>
  <div class="aec-footer">
    <span class="aec-auth">Requires: valid <code>Authorization</code> token</span>
    <button class="aec-copy-btn" onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/interactive/portfolio/positions/convert');this.textContent='✔ Copied';setTimeout(()=>this.textContent='Copy URL',2000)">Copy URL</button>
  </div>
</div>

<h3 id="conv-req-params" style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Request Body Parameters</h3>

<table class="api-table">
  <thead>
    <tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">exchangeSegment</span></td>
      <td>DayOrNet</td>
      <td><strong>Y</strong></td>
      <td><strong>Net</strong> → The actual, current net position portfolio<br><strong>Day</strong> → A snapshot of buying and selling activity for that particular day</td>
    </tr>
    <tr>
      <td><span class="enum-badge">exchangeInstrumentID</span></td>
      <td>ClientID</td>
      <td><strong>Y</strong></td>
      <td>Client ID — mandatory in case of Dealer</td>
    </tr>
    <tr>
      <td><span class="enum-badge">oldProductType</span></td>
      <td>ProductType</td>
      <td><strong>Y</strong></td>
      <td>Current product type of the position (e.g., MIS, CNC, NRML)</td>
    </tr>
    <tr>
      <td><span class="enum-badge">newProductType</span></td>
      <td>ProductType</td>
      <td><strong>Y</strong></td>
      <td>Target product type to convert to (e.g., CNC, NRML, MIS)</td>
    </tr>
    <tr>
      <td><span class="enum-badge">isDayWise</span></td>
      <td>IsDayWise</td>
      <td><strong>Y</strong></td>
      <td>IsDayWise position conversion</td>
    </tr>
    <tr>
      <td><span class="enum-badge">targetQty</span></td>
      <td>Quantity</td>
      <td><strong>Y</strong></td>
      <td>Quantity that needs to convert</td>
    </tr>
    <tr>
      <td><span class="enum-badge">statisticsLevel</span></td>
      <td>StatisticsLevel</td>
      <td><strong>Y</strong></td>
      <td>StatisticsLevel for the position</td>
    </tr>
    <tr>
      <td><span class="enum-badge">isInterOpPosition</span></td>
      <td>sInterOpPosition</td>
      <td><strong>Y</strong></td>
      <td>Interoperability is enabled or disabled</td>
    </tr>
  </tbody>
</table>

<h3 id="conv-req-json" style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Request Body JSON</h3>

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8" id="conv-req-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"oldProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NRML"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"newProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"MIS"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"isDayWise"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"targetQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"statisticsLevel"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ParentLevel"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"isInterOpPosition"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('conv-req-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('conv-req-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="conv-req-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<h3 id="conv-res-json" style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Response Body JSON</h3>

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8" id="conv-res-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-portfolio-0005"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success position convert"</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('conv-res-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('conv-res-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="conv-res-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<h3 id="conv-code-ex" style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Code Examples</h3>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="convShowCode('curl',this)" id="conv-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="convShowCode('python',this)" id="conv-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="conv-ce-box">
    <div id="conv-code-curl">
<span style="color:#d4d4d4">curl --location --request PUT </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/portfolio/positions/convert'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178">'{'</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"exchangeSegment": "NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"exchangeInstrumentID": 2885</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"targetQty": 1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"isDayWise": true</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"oldProductType": "NRML"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"newProductType": "MIS"</span><span style="color:#d4d4d4">,</span><br>

<span style="color:#ce9178">'}'</span>
    </div>
    <div id="conv-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> os</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> dotenv </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> load_dotenv</span><br>
<span style="color:#dcdcaa">load_dotenv</span><span style="color:#d4d4d4">()</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> xts_api_client.xts_connect_async </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> XTSConnect</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> asyncio</span><br>
<br>
<span style="color:#9cdcfe">API_key</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_Interactive_API_KEY"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">API_secret</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_Interactive_SECRET_KEY"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">API_source</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_SOURCE"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">API_root</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_API_URL"</span><span style="color:#d4d4d4">)</span><br>
<br>
<span style="color:#c586c0">async def</span><span style="color:#dcdcaa"> main</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">xt_interactive_data</span><span style="color:#d4d4d4"> = </span><span style="color:#4ec9b0">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">apiKey</span><span style="color:#d4d4d4"> = API_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">secretKey</span><span style="color:#d4d4d4"> = API_secret,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">source</span><span style="color:#d4d4d4"> = API_source,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root</span><span style="color:#d4d4d4"> = API_root</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response_interactive_login</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xt_interactive_data.</span><span style="color:#dcdcaa">interactive_login</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(response_interactive_login)</span><br>
<span style="color:#9cdcfe">resp</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xt_interactive_data.</span><span style="color:#dcdcaa">convert_position</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(resp)</span><br>
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> __name__ == </span><span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(main())</span>
    </div>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=conv-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('conv-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="conv-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('conv-ce-box');var btn=document.getElementById('conv-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="conv-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<script>
function convShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('conv-code-' + l).style.display = 'none';
    document.getElementById('conv-tab-' + l).style.background = '#374151';
  });
  document.getElementById('conv-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>
