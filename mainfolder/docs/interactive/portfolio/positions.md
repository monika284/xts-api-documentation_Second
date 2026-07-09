<h1 id="positions" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Positions</h1>
<p style="color:#6b7280;font-size:15px;margin-bottom:18px">View and manage your currently active open trades — both intraday (MIS) and overnight (NRML/CNC) positions across all exchange segments.</p>

<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:24px">
  <div style="display:flex;align-items:center;gap:7px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#c2410c">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    Day-wise &amp; Net-wise
  </div>
  <div style="display:flex;align-items:center;gap:7px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#15803d">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
    Real-time MTM PnL
  </div>
  <div style="display:flex;align-items:center;gap:7px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#1d4ed8">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
    Product Conversion
  </div>
  <div style="display:flex;align-items:center;gap:7px;background:#fdf4ff;border:1.5px solid #e9d5ff;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#7c3aed">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    All Segments
  </div>
</div>

---

<h2 id="pos-overview" style="color:#1e293b;font-weight:700;margin:28px 0 10px">What is a Position?</h2>

<div style="background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:20px;font-size:14px;color:#374151;line-height:1.8">
A <strong>Position</strong> shows <strong>how many shares or contracts you currently hold in a particular security</strong> after all your buy and sell trades. Think of it as a real-time summary of your activity for each stock or instrument.
</div>

<h3 id="pos-simple-example" style="color:#1e293b;font-weight:700;margin:20px 0 10px;font-size:15px">Simple Example — ACC Ltd.</h3>

<table class="api-table">
  <thead>
    <tr><th>Action</th><th style="text-align:right">Quantity</th><th style="text-align:right">Running Position</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><span style="display:inline-flex;align-items:center;gap:6px;background:#f0fdf4;color:#15803d;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:12px;font-weight:700">▲ Buy</span></td>
      <td style="text-align:right;font-weight:600">100</td>
      <td style="text-align:right;font-weight:700;color:#15803d">+100</td>
    </tr>
    <tr>
      <td><span style="display:inline-flex;align-items:center;gap:6px;background:#f0fdf4;color:#15803d;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:12px;font-weight:700">▲ Buy</span></td>
      <td style="text-align:right;font-weight:600">50</td>
      <td style="text-align:right;font-weight:700;color:#15803d">+150</td>
    </tr>
    <tr>
      <td><span style="display:inline-flex;align-items:center;gap:6px;background:#fff1f2;color:#be123c;border:1px solid #fecdd3;border-radius:6px;padding:3px 10px;font-size:12px;font-weight:700">▼ Sell</span></td>
      <td style="text-align:right;font-weight:600">30</td>
      <td style="text-align:right;font-weight:700;color:#ff6b00">+120</td>
    </tr>
  </tbody>
</table>
<p style="font-size:13px;color:#6b7280;margin-top:6px">Your <strong>current position</strong> is <strong style="color:#ff6b00">120 shares</strong> of ACC Ltd.</p>

---

<h2 id="pos-types" style="color:#1e293b;font-weight:700;margin:28px 0 16px">Types of Positions</h2>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:24px">

  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:12px;padding:20px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <div style="background:#16a34a;color:#fff;border-radius:8px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px">▲</div>
      <strong style="font-size:15px;color:#15803d">Long Position</strong>
    </div>
    <p style="font-size:13px;color:#374151;margin:0 0 12px;line-height:1.7">You have <strong>bought more than you sold</strong>. You own shares.</p>
    <div style="background:#fff;border-radius:8px;padding:10px 14px;font-size:12px;color:#374151;line-height:1.8">
      Buy 100 shares<br>Sell 20 shares<br>
      <strong style="color:#16a34a">Position: +80 (Long)</strong>
    </div>
  </div>

  <div style="background:#fff1f2;border:1.5px solid #fca5a5;border-radius:12px;padding:20px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <div style="background:#dc2626;color:#fff;border-radius:8px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px">▼</div>
      <strong style="font-size:15px;color:#b91c1c">Short Position</strong>
    </div>
    <p style="font-size:13px;color:#374151;margin:0 0 12px;line-height:1.7">You have <strong>sold more than you bought</strong>. Allowed in intraday &amp; derivatives.</p>
    <div style="background:#fff;border-radius:8px;padding:10px 14px;font-size:12px;color:#374151;line-height:1.8">
      Sell 100 shares<br>Buy 40 shares<br>
      <strong style="color:#dc2626">Position: −60 (Short)</strong>
    </div>
  </div>

  <div style="background:#f8fafc;border:1.5px solid #cbd5e1;border-radius:12px;padding:20px">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <div style="background:#64748b;color:#fff;border-radius:8px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px">●</div>
      <strong style="font-size:15px;color:#475569">Closed Position</strong>
    </div>
    <p style="font-size:13px;color:#374151;margin:0 0 12px;line-height:1.7">All bought quantity is sold (or vice versa). <strong>No open holding remains.</strong></p>
    <div style="background:#fff;border-radius:8px;padding:10px 14px;font-size:12px;color:#374151;line-height:1.8">
      Buy 100 shares<br>Sell 100 shares<br>
      <strong style="color:#64748b">Position: 0 (Closed)</strong>
    </div>
  </div>

</div>

---

<h2 id="pos-fields" style="color:#1e293b;font-weight:700;margin:28px 0 10px">Position Information</h2>
<p style="color:#6b7280;font-size:13px;margin:-4px 0 14px">A position entry includes the following key fields:</p>

<table class="api-table">
  <thead>
    <tr><th>Field</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">Symbol</span></td><td>Name of the stock or contract</td></tr>
    <tr><td><span class="enum-badge">Exchange</span></td><td>Exchange where it is traded — NSE, BSE, MCX, etc.</td></tr>
    <tr><td><span class="enum-badge">ProductType</span></td><td>Delivery, Intraday, Margin, Futures, Options, etc.</td></tr>
    <tr><td><span class="enum-badge">BuyQuantity</span></td><td>Total quantity purchased</td></tr>
    <tr><td><span class="enum-badge">SellQuantity</span></td><td>Total quantity sold</td></tr>
    <tr><td><span class="enum-badge">NetQuantity</span></td><td>Buy Quantity − Sell Quantity</td></tr>
    <tr><td><span class="enum-badge">BuyAveragePrice</span></td><td>Average price of all buy trades</td></tr>
    <tr><td><span class="enum-badge">SellAveragePrice</span></td><td>Average price of all sell trades</td></tr>
    <tr><td><span class="enum-badge">LTP</span></td><td>Last Traded Price — latest market price of the security</td></tr>
    <tr><td><span class="enum-badge">MTM / P&amp;L</span></td><td>Current profit or loss based on market price</td></tr>
  </tbody>
</table>

---

<h2 id="pos-vs-holdings" style="color:#1e293b;font-weight:700;margin:28px 0 16px">Position vs Holdings</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:24px">
  <div style="background:linear-gradient(135deg,#fff7ed,#fff);padding:18px 20px;border-right:1px solid #e5e7eb">
    <div style="font-size:13px;font-weight:700;color:#ff6b00;margin-bottom:12px;display:flex;align-items:center;gap:8px">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      POSITION
    </div>
    <ul style="margin:0;padding:0;list-style:none;font-size:13px;color:#374151">
      <li style="padding:7px 0;border-bottom:1px solid #f3f4f6;display:flex;gap:8px"><span style="color:#ff6b00;flex-shrink:0">▸</span> Shows your active trading position</li>
      <li style="padding:7px 0;border-bottom:1px solid #f3f4f6;display:flex;gap:8px"><span style="color:#ff6b00;flex-shrink:0">▸</span> Includes intraday and derivative trades</li>
      <li style="padding:7px 0;border-bottom:1px solid #f3f4f6;display:flex;gap:8px"><span style="color:#ff6b00;flex-shrink:0">▸</span> Changes throughout the trading day</li>
      <li style="padding:7px 0;display:flex;gap:8px"><span style="color:#ff6b00;flex-shrink:0">▸</span> Can be Long or Short</li>
    </ul>
  </div>
  <div style="background:linear-gradient(135deg,#f0fdf4,#fff);padding:18px 20px">
    <div style="font-size:13px;font-weight:700;color:#16a34a;margin-bottom:12px;display:flex;align-items:center;gap:8px">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2"/></svg>
      HOLDINGS
    </div>
    <ul style="margin:0;padding:0;list-style:none;font-size:13px;color:#374151">
      <li style="padding:7px 0;border-bottom:1px solid #f3f4f6;display:flex;gap:8px"><span style="color:#16a34a;flex-shrink:0">▸</span> Shows stocks owned in your Demat account</li>
      <li style="padding:7px 0;border-bottom:1px solid #f3f4f6;display:flex;gap:8px"><span style="color:#16a34a;flex-shrink:0">▸</span> Only delivery shares are shown</li>
      <li style="padding:7px 0;border-bottom:1px solid #f3f4f6;display:flex;gap:8px"><span style="color:#16a34a;flex-shrink:0">▸</span> Changes only when delivery is credited/debited</li>
      <li style="padding:7px 0;display:flex;gap:8px"><span style="color:#16a34a;flex-shrink:0">▸</span> Always represents owned shares</li>
    </ul>
  </div>
</div>

---

<h2 id="pos-real-example" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Real-Life Example</h2>

<div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;padding:20px 24px;margin-bottom:24px">
  <p style="margin:0 0 14px;font-size:14px;color:#374151">Imagine you buy <strong>100 shares of XYZ Ltd. at ₹500</strong>, then sell <strong>40 shares at ₹520</strong>.</p>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:14px">
    <div style="background:#fff7ed;border-radius:8px;padding:12px;text-align:center">
      <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.05em;margin-bottom:4px">BUY QTY</div>
      <div style="font-size:22px;font-weight:800;color:#ff6b00">100</div>
    </div>
    <div style="background:#fff1f2;border-radius:8px;padding:12px;text-align:center">
      <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.05em;margin-bottom:4px">SELL QTY</div>
      <div style="font-size:22px;font-weight:800;color:#dc2626">40</div>
    </div>
    <div style="background:#f0fdf4;border-radius:8px;padding:12px;text-align:center">
      <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.05em;margin-bottom:4px">NET POSITION</div>
      <div style="font-size:22px;font-weight:800;color:#16a34a">60</div>
    </div>
    <div style="background:#eff6ff;border-radius:8px;padding:12px;text-align:center">
      <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.05em;margin-bottom:4px">MARKET PRICE</div>
      <div style="font-size:22px;font-weight:800;color:#1d4ed8">₹530</div>
    </div>
  </div>
  <p style="margin:0;font-size:13px;color:#6b7280;line-height:1.7">Your remaining <strong>60 shares</strong> are valued at the latest price of <strong>₹530</strong>. Unrealized P&amp;L = (530 − 500) × 60 = <strong style="color:#16a34a">₹1,800 profit</strong>.</p>
</div>

---

<h2 id="pos-why" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Why Positions Are Important</h2>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px">
  <div style="background:#fff;border:1px solid #fed7aa;border-left:3px solid #ff6b00;border-radius:8px;padding:14px 16px;font-size:13px;color:#374151;font-weight:600">Track your current open trades</div>
  <div style="background:#fff;border:1px solid #fed7aa;border-left:3px solid #ff6b00;border-radius:8px;padding:14px 16px;font-size:13px;color:#374151;font-weight:600">Monitor real-time P&amp;L</div>
  <div style="background:#fff;border:1px solid #fed7aa;border-left:3px solid #ff6b00;border-radius:8px;padding:14px 16px;font-size:13px;color:#374151;font-weight:600">See quantity you own or need to close</div>
  <div style="background:#fff;border:1px solid #fed7aa;border-left:3px solid #ff6b00;border-radius:8px;padding:14px 16px;font-size:13px;color:#374151;font-weight:600">Make informed buy/sell decisions</div>
  <div style="background:#fff;border:1px solid #fed7aa;border-left:3px solid #ff6b00;border-radius:8px;padding:14px 16px;font-size:13px;color:#374151;font-weight:600">Manage risk by monitoring exposure</div>
  <div style="background:#fff;border:1px solid #fed7aa;border-left:3px solid #ff6b00;border-radius:8px;padding:14px 16px;font-size:13px;color:#c2410c;font-weight:600">Avoid auto square-off penalties</div>
</div>

<div style="background:linear-gradient(135deg, #f8e1d7, #ff9500);border-radius:12px;padding:18px 22px;margin-bottom:32px">
  <p style="margin:0;font-size:14px;color: #0c0c0c;line-height:1.8"><strong>In Simple Words:</strong> A Position is a real-time summary of your trading activity for a particular stock or contract. It shows how many units you currently hold (or owe), along with their current profit or loss.</p>
</div>

---

<h2 id="get-positions" style="color:#1e293b;font-weight:700;margin:28px 0 10px">Get Positions</h2>
<p style="color:#6b7280;font-size:13px;margin:-4px 0 16px">Fetch all open positions — day-wise and net-wise — for the authenticated user.</p>

<div class="aec-card">
  <div class="aec-top">
    <span class="aec-label">ENDPOINT</span>
    <span class="aec-badge-post" style="background:#f0fdf4;color:#16a34a;border:1.5px solid #bbf7d0">GET</span>
  </div>
  <div class="aec-url-row">
    <span class="aec-base">https://xts.rmoneyindia.co.in:3000</span><span class="aec-path">/interactive/portfolio/positions</span>
  </div>
  <div class="aec-footer">
    <span class="aec-auth">Requires: valid <code>Authorization</code> token</span>
    <button class="aec-copy-btn" onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/interactive/portfolio/positions');this.textContent='✔ Copied';setTimeout(()=>this.textContent='Copy URL',2000)">Copy URL</button>
  </div>
</div>

<h3 id="pos-req-params" style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Request Parameters</h3>

<table class="api-table">
  <thead>
    <tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">dayOrNet</span></td><td>String</td><td><strong>Y</strong></td><td>Position type — <code>DayWise</code> for intraday, <code>NetWise</code> for net open positions</td></tr>
    <tr><td><span class="enum-badge">clientID</span></td><td>ClientID</td><td>N</td><td>Client ID — mandatory for dealer accounts</td></tr>
  </tbody>
</table>

<h3 id="pos-res-params" style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Response Body Parameters</h3>

<table class="api-table">
  <thead>
    <tr><th>Parameter Name</th><th>Type</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><span class="enum-badge">AccountID</span></td><td>AccountID</td><td>Client account ID</td></tr>
    <tr><td><span class="enum-badge">TradingSymbol</span></td><td>TradingSymbol</td><td>Symbol name (e.g., ACC, RELIANCE)</td></tr>
    <tr><td><span class="enum-badge">ExchangeSegment</span></td><td>ExchangeSegment</td><td>Exchange segment (e.g., NSECM, NSEFO)</td></tr>
    <tr><td><span class="enum-badge">ExchangeInstrumentID</span></td><td>ExchangeInstrumentID</td><td>Token ID of the trading instrument</td></tr>
    <tr><td><span class="enum-badge">ProductType</span></td><td>ProductType</td><td>CNC / MIS / NRML</td></tr>
    <tr><td><span class="enum-badge">Marketlot</span></td><td>Integer</td><td>Market lot size for the instrument</td></tr>
    <tr><td><span class="enum-badge">Multiplier</span></td><td>Integer</td><td>Multiplier for the instrument</td></tr>
    <tr><td><span class="enum-badge">BuyAveragePrice</span></td><td>Price</td><td>Average price of buy trades</td></tr>
    <tr><td><span class="enum-badge">SellAveragePrice</span></td><td>Price</td><td>Average price of sell trades</td></tr>
    <tr><td><span class="enum-badge">OpenBuyQuantity</span></td><td>Quantity</td><td>Open buy quantity pending execution</td></tr>
    <tr><td><span class="enum-badge">OpenSellQuantity</span></td><td>Quantity</td><td>Open sell quantity pending execution</td></tr>
    <tr><td><span class="enum-badge">Quantity</span></td><td>Quantity</td><td>Net open quantity</td></tr>
    <tr><td><span class="enum-badge">BuyAmount</span></td><td>Amount</td><td>Total buy amount</td></tr>
    <tr><td><span class="enum-badge">SellAmount</span></td><td>Amount</td><td>Total sell amount</td></tr>
    <tr><td><span class="enum-badge">NetAmount</span></td><td>Amount</td><td>Net amount (SellAmount − BuyAmount)</td></tr>
    <tr><td><span class="enum-badge">UnrealizedMTM</span></td><td>Price</td><td>Unrealized mark-to-market PnL</td></tr>
    <tr><td><span class="enum-badge">RealizedMTM</span></td><td>Price</td><td>Realized PnL from completed trades</td></tr>
    <tr><td><span class="enum-badge">MTM</span></td><td>Price</td><td>Total mark-to-market PnL</td></tr>
    <tr><td><span class="enum-badge">BEP</span></td><td>Price</td><td>Break-even price</td></tr>
    <tr><td><span class="enum-badge">SumOfTradedQuantityAndPriceBuy</span></td><td>Amount</td><td>Sum of (qty × price) for all buy trades</td></tr>
    <tr><td><span class="enum-badge">SumOfTradedQuantityAndPriceSell</span></td><td>Amount</td><td>Sum of (qty × price) for all sell trades</td></tr>
    <tr><td><span class="enum-badge">statisticsLevel</span></td><td>String</td><td>Position statistics level (e.g., ParentLevel)</td></tr>
    <tr><td><span class="enum-badge">isInterOpPosition</span></td><td>Boolean</td><td>Whether this is an inter-operability position</td></tr>
    <tr><td><span class="enum-badge">childPositions</span></td><td>Object</td><td>Child position details (string-valued fields)</td></tr>
    <tr><td><span class="enum-badge">MessageCode</span></td><td>Integer</td><td>System message code</td></tr>
    <tr><td><span class="enum-badge">MessageVersion</span></td><td>Integer</td><td>Message format version</td></tr>
    <tr><td><span class="enum-badge">TokenID</span></td><td>Integer</td><td>Internal token ID</td></tr>
    <tr><td><span class="enum-badge">ApplicationType</span></td><td>Integer</td><td>Application type flag</td></tr>
    <tr><td><span class="enum-badge">SequenceNumber</span></td><td>Integer</td><td>Order sequence number</td></tr>
  </tbody>
</table>

<h3 id="pos-res-json" style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Response Body JSON</h3>

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:260px;overflow:hidden;transition:max-height .4s ease" id="pos-res-box">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-portfolio-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Success position"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AccountID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TradingSymbol"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">22</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"CNC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Marketlot"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Multiplier"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BuyAveragePrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">41.78</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SellAveragePrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">41.63</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OpenBuyQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">10</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OpenSellQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Quantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">10</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BuyAmount"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1671</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SellAmount"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2498</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NetAmount"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">827</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UnrealizedMTM"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"RealizedMTM"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MTM"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BEP"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SumOfTradedQuantityAndPriceBuy"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1671</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SumOfTradedQuantityAndPriceSell"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2498</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"statisticsLevel"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ParentLevel"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"isInterOpPosition"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"true"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"childPositions"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AccountID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RM1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TradingSymbol"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"22"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"CNC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BuyAveragePrice"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"41.78"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SellAveragePrice"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"41.63"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Quantity"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"10"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BuyAmount"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1671.00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SellAmount"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"2498.00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NetAmount"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"827.00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MTM"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"0"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"statisticsLevel"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ParentLevel"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"isInterOpPosition"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"true"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">9002</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageVersion"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TokenID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ApplicationType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SequenceNumber"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">]</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('pos-res-box').innerText;navigator.clipboard.writeText(t).then(function(){var b=document.getElementById('pos-res-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="pos-res-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('pos-res-box');var btn=document.getElementById('pos-res-show');if(b.style.maxHeight==='none'){b.style.maxHeight='260px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="pos-res-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<h3 id="pos-code-ex" style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Code Examples</h3>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="posShowCode('curl',this)" id="pos-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="posShowCode('python',this)" id="pos-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="pos-ce-box">
    <div id="pos-code-curl">
<span style="color:#d4d4d4">curl --location </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/portfolio/positions?dayOrNet=DayWise'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span>
    </div>
    
    <div id="pos-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/portfolio/positions"</span><br>
<br>
<span style="color:#9cdcfe">payload</span><span style="color:#d4d4d4"> = {}</span><br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><span style="color:#ce9178">'Authorization'</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">'xxxxxx'</span><span style="color:#d4d4d4">}</span><br>
<span style="color:#9cdcfe">params</span><span style="color:#d4d4d4"> = {</span><span style="color:#ce9178">'dayOrNet'</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">'DayWise'</span><span style="color:#d4d4d4">}</span><br>
<br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = </span><span style="color:#9cdcfe">await</span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_Get</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">'portfolio.positions'</span><span style="color:#d4d4d4">, json</span><span style="color:#9cdcfe">.dumps</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">params</span><span style="color:#d4d4d4">)</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#dcdcaa">return </span><span style="color:#d4d4d4"> self.</span><span style="color:#dcdcaa">_handle_response </span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">response</span><span style="color:#d4d4d4">,</span><span style="color:#dcdcaa">"Positions"</span><span style="color:#d4d4d4">)</span>
    </div>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=pos-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('pos-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="pos-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('pos-ce-box');var btn=document.getElementById('pos-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="pos-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<script>
function posShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('pos-code-' + l).style.display = 'none';
    document.getElementById('pos-tab-' + l).style.background = '#374151';
  });
  document.getElementById('pos-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>

