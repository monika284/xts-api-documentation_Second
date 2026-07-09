<h1 id="mtm-calculation" style="color:#ff6b00;font-weight:800;margin-bottom:6px">MTM (Mark-to-Market) Calculation</h1>
<p style="color:#6b7280;font-size:15px;margin-bottom:18px"><strong>MTM</strong> is the <strong>profit or loss on your open position based on the current market price (LTP)</strong>. It tells you how much you would gain or lose if you closed the position right now.</p>

<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:24px">
  <div style="display:flex;align-items:center;gap:7px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#c2410c">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    Real-time P&amp;L
  </div>
  <div style="display:flex;align-items:center;gap:7px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#c2410c">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    Unrealized Profit/Loss
  </div>
  <div style="display:flex;align-items:center;gap:7px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#c2410c">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    F&amp;O Daily Settlement
  </div>
  <div style="display:flex;align-items:center;gap:7px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:600;color:#c2410c">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    Position Monitoring
  </div>
</div>

---

<h2 id="mtm-what" style="color:#1e293b;font-weight:700;margin:28px 0 10px">What is MTM?</h2>

<div style="background:#fff7ed;border-left:4px solid #ff6b00;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:20px;font-size:14px;color:#374151;line-height:1.8">
<strong>MTM (Mark-to-Market) is the real-time profit or loss of an open position, calculated using the latest market price (LTP).</strong> Since the position has not been closed yet, this is an <strong>unrealized</strong> profit or loss — it changes continuously as the market price moves.
</div>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px">
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-size:12px;font-weight:700;color:#c2410c;margin-bottom:4px">OPEN POSITION</div>
    <div style="font-size:12px;color:#374151">MTM updates live with each LTP change</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-size:12px;font-weight:700;color:#c2410c;margin-bottom:4px">UNREALIZED</div>
    <div style="font-size:12px;color:#374151">No actual cash change until position closes</div>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-size:12px;font-weight:700;color:#c2410c;margin-bottom:4px">CONTINUOUS</div>
    <div style="font-size:12px;color:#374151">Recalculated every tick throughout the day</div>
  </div>
</div>

---

<h2 id="mtm-formula" style="color:#1e293b;font-weight:700;margin:28px 0 14px">MTM Formula</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px">

  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:12px 16px">
      <strong style="color:#fff;font-size:13px"> Long (Buy) Position</strong>
    </div>
    <div style="padding:16px">
      <div style="background:#1e1e1e;border-radius:8px;padding:14px 16px;font-family:Consolas,monospace;font-size:13px;color:#d4d4d4;line-height:1.8;margin-bottom:10px">
        <span style="color:#ce9178">MTM</span> <span style="color:#d4d4d4">= (</span><span style="color:#9cdcfe">LTP</span> <span style="color:#d4d4d4">−</span> <span style="color:#9cdcfe">Avg Buy Price</span><span style="color:#d4d4d4">)</span> <span style="color:#d4d4d4">×</span> <span style="color:#9cdcfe">Quantity</span>
      </div>
      <p style="margin:0;font-size:12px;color:#6b7280">If LTP &gt; Buy Price → <strong style="color:#16a34a">Profit</strong><br>If LTP &lt; Buy Price → <strong style="color:#dc2626">Loss</strong></p>
    </div>
  </div>

  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:12px 16px">
      <strong style="color:#fff;font-size:13px"> Short (Sell) Position</strong>
    </div>
    <div style="padding:16px">
      <div style="background:#1e1e1e;border-radius:8px;padding:14px 16px;font-family:Consolas,monospace;font-size:13px;color:#d4d4d4;line-height:1.8;margin-bottom:10px">
        <span style="color:#ce9178">MTM</span> <span style="color:#d4d4d4">= (</span><span style="color:#9cdcfe">Avg Sell Price</span> <span style="color:#d4d4d4">−</span> <span style="color:#9cdcfe">LTP</span><span style="color:#d4d4d4">)</span> <span style="color:#d4d4d4">×</span> <span style="color:#9cdcfe">Quantity</span>
      </div>
      <p style="margin:0;font-size:12px;color:#6b7280">If LTP &lt; Sell Price → <strong style="color:#16a34a">Profit</strong><br>If LTP &gt; Sell Price → <strong style="color:#dc2626">Loss</strong></p>
    </div>
  </div>

</div>

---

<h2 id="mtm-examples" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Examples</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px">

  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:12px 16px;display:flex;align-items:center;justify-content:space-between">
      <strong style="color:#fff;font-size:13px">Example 1 — Long Position (Profit)</strong>
      <span style="background:rgba(255,255,255,.2);color:#fff;font-size:11px;font-weight:700;border-radius:6px;padding:3px 10px">PROFIT</span>
    </div>
    <div style="padding:14px 16px">
      <div style="margin-bottom:12px;border:1px solid #f3f4f6;border-radius:8px;overflow:hidden">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;border-bottom:1px solid #f3f4f6"><span style="color:#6b7280">Stock</span><strong style="color:#374151">ABC Ltd.</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;background:#f8fafc;border-bottom:1px solid #f3f4f6"><span style="color:#6b7280">Quantity</span><strong style="color:#374151">100 shares</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;border-bottom:1px solid #f3f4f6"><span style="color:#6b7280">Avg Buy Price</span><strong style="color:#374151">₹500</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;background:#f8fafc"><span style="color:#6b7280">Current LTP</span><strong style="color:#ff6b00">₹530</strong></div>
      </div>
      <div style="background:#1e1e1e;border-radius:7px;padding:10px 13px;font-family:Consolas,monospace;font-size:12px;color:#d4d4d4;line-height:1.9;margin-bottom:8px">
        <span style="color:#9cdcfe">MTM</span> <span style="color:#d4d4d4">= (530 − 500) × 100</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">= ₹30 × 100</span>
      </div>
      <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:7px;padding:8px 13px;font-size:13px;font-weight:800;color:#16a34a;text-align:center">MTM = +₹3,000 Profit</div>
    </div>
  </div>

  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:12px 16px;display:flex;align-items:center;justify-content:space-between">
      <strong style="color:#fff;font-size:13px">Example 2 — Long Position (Loss)</strong>
      <span style="background:rgba(255,255,255,.2);color:#fff;font-size:11px;font-weight:700;border-radius:6px;padding:3px 10px">LOSS</span>
    </div>
    <div style="padding:14px 16px">
      <div style="margin-bottom:12px;border:1px solid #f3f4f6;border-radius:8px;overflow:hidden">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;border-bottom:1px solid #f3f4f6"><span style="color:#6b7280">Stock</span><strong style="color:#374151">ABC Ltd.</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;background:#f8fafc;border-bottom:1px solid #f3f4f6"><span style="color:#6b7280">Quantity</span><strong style="color:#374151">100 shares</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;border-bottom:1px solid #f3f4f6"><span style="color:#6b7280">Avg Buy Price</span><strong style="color:#374151">₹500</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;background:#f8fafc"><span style="color:#6b7280">Current LTP</span><strong style="color:#ff6b00">₹480</strong></div>
      </div>
      <div style="background:#1e1e1e;border-radius:7px;padding:10px 13px;font-family:Consolas,monospace;font-size:12px;color:#d4d4d4;line-height:1.9;margin-bottom:8px">
        <span style="color:#9cdcfe">MTM</span> <span style="color:#d4d4d4">= (480 − 500) × 100</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">= −₹20 × 100</span>
      </div>
      <div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:7px;padding:8px 13px;font-size:13px;font-weight:800;color:#b91c1c;text-align:center">MTM = −₹2,000 Loss</div>
    </div>
  </div>

  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:12px 16px;display:flex;align-items:center;justify-content:space-between">
      <strong style="color:#fff;font-size:13px">Example 3 — Short Position (Profit)</strong>
      <span style="background:rgba(255,255,255,.2);color:#fff;font-size:11px;font-weight:700;border-radius:6px;padding:3px 10px">PROFIT</span>
    </div>
    <div style="padding:14px 16px">
      <div style="margin-bottom:12px;border:1px solid #f3f4f6;border-radius:8px;overflow:hidden">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;border-bottom:1px solid #f3f4f6"><span style="color:#6b7280">Stock</span><strong style="color:#374151">ABC Ltd.</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;background:#f8fafc;border-bottom:1px solid #f3f4f6"><span style="color:#6b7280">Quantity</span><strong style="color:#374151">100 shares</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;border-bottom:1px solid #f3f4f6"><span style="color:#6b7280">Avg Sell Price</span><strong style="color:#374151">₹500</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;background:#f8fafc"><span style="color:#6b7280">Current LTP</span><strong style="color:#ff6b00">₹470</strong></div>
      </div>
      <div style="background:#1e1e1e;border-radius:7px;padding:10px 13px;font-family:Consolas,monospace;font-size:12px;color:#d4d4d4;line-height:1.9;margin-bottom:8px">
        <span style="color:#9cdcfe">MTM</span> <span style="color:#d4d4d4">= (500 − 470) × 100</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">= ₹30 × 100</span>
      </div>
      <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:7px;padding:8px 13px;font-size:13px;font-weight:800;color:#16a34a;text-align:center">MTM = +₹3,000 Profit</div>
    </div>
  </div>

  <div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:12px 16px;display:flex;align-items:center;justify-content:space-between">
      <strong style="color:#fff;font-size:13px">Example 4 — Short Position (Loss)</strong>
      <span style="background:rgba(255,255,255,.2);color:#fff;font-size:11px;font-weight:700;border-radius:6px;padding:3px 10px">LOSS</span>
    </div>
    <div style="padding:14px 16px">
      <div style="margin-bottom:12px;border:1px solid #f3f4f6;border-radius:8px;overflow:hidden">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;border-bottom:1px solid #f3f4f6"><span style="color:#6b7280">Stock</span><strong style="color:#374151">ABC Ltd.</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;background:#f8fafc;border-bottom:1px solid #f3f4f6"><span style="color:#6b7280">Quantity</span><strong style="color:#374151">100 shares</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;border-bottom:1px solid #f3f4f6"><span style="color:#6b7280">Avg Sell Price</span><strong style="color:#374151">₹500</strong></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 12px;font-size:12px;background:#f8fafc"><span style="color:#6b7280">Current LTP</span><strong style="color:#ff6b00">₹520</strong></div>
      </div>
      <div style="background:#1e1e1e;border-radius:7px;padding:10px 13px;font-family:Consolas,monospace;font-size:12px;color:#d4d4d4;line-height:1.9;margin-bottom:8px">
        <span style="color:#9cdcfe">MTM</span> <span style="color:#d4d4d4">= (500 − 520) × 100</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">= −₹20 × 100</span>
      </div>
      <div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:7px;padding:8px 13px;font-size:13px;font-weight:800;color:#b91c1c;text-align:center">MTM = −₹2,000 Loss</div>
    </div>
  </div>

</div>

---

<h2 id="mtm-changes" style="color:#1e293b;font-weight:700;margin:28px 0 14px">How MTM Changes with LTP</h2>
<p style="color:#6b7280;font-size:13px;margin:-8px 0 14px">You bought 100 shares at <strong>₹500</strong>. Watch how MTM moves with price:</p>

<div style="border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:24px">
  <div style="display:flex;background:linear-gradient(135deg,#ff7b00,#ff9500)">
    <div style="flex:1;padding:12px 18px;color:#fff;font-weight:700;font-size:13px">Current LTP</div>
    <div style="flex:1;padding:12px 18px;color:#fff;font-weight:700;font-size:13px;text-align:right">MTM</div>
    <div style="flex:1;padding:12px 18px;color:#fff;font-weight:700;font-size:13px;text-align:center">Status</div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:1;padding:11px 18px;color:#374151;font-weight:600;font-size:13px">₹490</div>
    <div style="flex:1;padding:11px 18px;font-weight:800;color:#374151;font-size:13px;text-align:right">−₹1,000</div>
    <div style="flex:1;padding:11px 18px;text-align:center"><span style="background:#fef2f2;color:#b91c1c;border:1px solid #fecaca;font-size:11px;font-weight:700;border-radius:5px;padding:2px 10px">Loss</span></div>
  </div>
  <div style="display:flex;align-items:center;background:#fff;border-top:1px solid #e5e7eb">
    <div style="flex:1;padding:11px 18px;color:#374151;font-weight:600;font-size:13px">₹500</div>
    <div style="flex:1;padding:11px 18px;font-weight:800;color:#374151;font-size:13px;text-align:right">₹0</div>
    <div style="flex:1;padding:11px 18px;text-align:center"><span style="background:#f1f5f9;color:#6b7280;border:1px solid #e2e8f0;font-size:11px;font-weight:700;border-radius:5px;padding:2px 10px">Break-even</span></div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:1;padding:11px 18px;color:#374151;font-weight:600;font-size:13px">₹510</div>
    <div style="flex:1;padding:11px 18px;font-weight:800;color:#16a34a;font-size:13px;text-align:right">+₹1,000</div>
    <div style="flex:1;padding:11px 18px;text-align:center"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;font-size:11px;font-weight:700;border-radius:5px;padding:2px 10px">Profit</span></div>
  </div>
  <div style="display:flex;align-items:center;background:#fff;border-top:1px solid #e5e7eb">
    <div style="flex:1;padding:11px 18px;color:#374151;font-weight:600;font-size:13px">₹520</div>
    <div style="flex:1;padding:11px 18px;font-weight:800;color:#16a34a;font-size:13px;text-align:right">+₹2,000</div>
    <div style="flex:1;padding:11px 18px;text-align:center"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;font-size:11px;font-weight:700;border-radius:5px;padding:2px 10px">Profit</span></div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:1;padding:11px 18px;color:#374151;font-weight:600;font-size:13px">₹540</div>
    <div style="flex:1;padding:11px 18px;font-weight:800;color:#16a34a;font-size:13px;text-align:right">+₹4,000</div>
    <div style="flex:1;padding:11px 18px;text-align:center"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;font-size:11px;font-weight:700;border-radius:5px;padding:2px 10px">Profit</span></div>
  </div>
</div>

---

<h2 id="mtm-vs-realized" style="color:#1e293b;font-weight:700;margin:28px 0 14px">MTM vs Realized P&amp;L</h2>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:12px;padding:18px 20px">
    <div style="font-size:13px;font-weight:800;color:#c2410c;margin-bottom:12px;border-bottom:1px solid #fed7aa;padding-bottom:8px">📊 MTM (Mark-to-Market)</div>
    <ul style="margin:0;padding-left:18px;font-size:13px;color:#374151;line-height:2">
      <li>Calculated on <strong>open positions</strong></li>
      <li>Changes with every market price movement</li>
      <li><strong>Unrealized</strong> profit or loss</li>
      <li>No cash impact until position is closed</li>
    </ul>
  </div>
  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:12px;padding:18px 20px">
    <div style="font-size:13px;font-weight:800;color:#c2410c;margin-bottom:12px;border-bottom:1px solid #fed7aa;padding-bottom:8px">✅ Realized P&amp;L</div>
    <ul style="margin:0;padding-left:18px;font-size:13px;color:#374151;line-height:2">
      <li>Calculated after position is <strong>closed</strong></li>
      <li>Fixed once the trade is completed</li>
      <li><strong>Actual</strong> booked profit or loss</li>
      <li>Cash is credited/debited to account</li>
    </ul>
  </div>
</div>

<div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;padding:18px 22px;margin-bottom:24px">
  <p style="margin:0 0 10px;font-size:13px;font-weight:700;color:#374151">Transition Example:</p>
  <div style="display:flex;align-items:center;flex-wrap:wrap;gap:10px;font-size:13px">
    <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:9px 14px;color:#c2410c;font-weight:600">Buy 100 shares @ ₹500</div>
    <div style="color:#ff6b00;font-size:18px;font-weight:700">→</div>
    <div style="background:#f8fafc;border:1.5px solid #e5e7eb;border-radius:8px;padding:9px 14px;color:#374151;font-weight:600">LTP = ₹520<br><span style="color:#ff6b00;font-size:12px">MTM = +₹2,000</span></div>
    <div style="color:#ff6b00;font-size:18px;font-weight:700">→</div>
    <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:9px 14px;color:#c2410c;font-weight:700">Sell @ ₹520<br><span style="font-size:12px">Realized = +₹2,000 | MTM = ₹0</span></div>
  </div>
</div>

---

<h2 id="mtm-why" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Why MTM is Important</h2>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:24px">
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600">Shows your <strong>real-time profit or loss</strong> on every open position</div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600">Helps you monitor open positions and decide to hold or exit</div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600">Used in <strong>F&amp;O daily settlement</strong> by exchanges</div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#374151;font-weight:600">Assists in managing overall trading risk across positions</div>
  <div style="background:#fff7ed;border:1px solid #fed7aa;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#c2410c;font-weight:600">Helps plan entries and exits based on current P&amp;L</div>
  <div style="background:#fff7ed;border:1px solid #fed7aa;border-left:3px solid #ff6b00;border-radius:8px;padding:12px 14px;font-size:13px;color:#c2410c;font-weight:600">Improves discipline — you always know where you stand</div>
</div>

---

<h2 id="mtm-reallife" style="color:#1e293b;font-weight:700;margin:28px 0 14px">Real-Life Example — Anita</h2>

<div style="background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:24px">
  <div style="background:linear-gradient(135deg,#ff7b00,#ff9500);padding:14px 20px">
    <p style="margin:0;color:#fff;font-size:13px;font-weight:700">Anita buys <strong>200 shares of XYZ Ltd.</strong> at <strong>₹150</strong> at market open.</p>
  </div>
  <div style="padding:20px">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">

      <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px">
        <div style="font-size:12px;font-weight:700;color:#c2410c;margin-bottom:8px">LTP rises to ₹160</div>
        <div style="background:#1e1e1e;border-radius:7px;padding:10px 13px;font-family:Consolas,monospace;font-size:12px;color:#d4d4d4;line-height:1.8;margin-bottom:8px">
          MTM = (160 − 150) × 200<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= ₹10 × 200
        </div>
        <div style="font-size:13px;font-weight:800;color:#c2410c;text-align:center;background:#fff;border:1.5px solid #fed7aa;border-radius:6px;padding:6px">+₹2,000 Profit</div>
      </div>

      <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px">
        <div style="font-size:12px;font-weight:700;color:#c2410c;margin-bottom:8px">LTP falls to ₹145</div>
        <div style="background:#1e1e1e;border-radius:7px;padding:10px 13px;font-family:Consolas,monospace;font-size:12px;color:#d4d4d4;line-height:1.8;margin-bottom:8px">
          MTM = (145 − 150) × 200<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= −₹5 × 200
        </div>
        <div style="font-size:13px;font-weight:800;color:#c2410c;text-align:center;background:#fff;border:1.5px solid #fed7aa;border-radius:6px;padding:6px">−₹1,000 Loss</div>
      </div>

    </div>
    <p style="margin:14px 0 0;font-size:13px;color: #01050c;text-align:center">Anita has <strong>not sold</strong> the shares — her MTM keeps updating with every price tick.</p>
  </div>
</div>

<div style="background:linear-gradient(135deg, #f8e0d6, #ff9500);border-radius:12px;padding:18px 22px;margin-bottom:24px">
  <p style="margin:0;font-size:14px;color: #0f0f0f;line-height:1.8"><strong>In Simple Words:</strong> MTM (Mark-to-Market) is the current profit or loss on an open position. It is calculated using the latest market price (LTP) and keeps updating as the market price changes. Once the position is closed, the MTM converts into Realized P&amp;L.</p>
</div>

---

<h2 id="mtm-calc-code" style="color:#1e293b;font-weight:700;margin:28px 0 10px">MTM Calculation</h2>
<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">
MTM represents the realized and unrealized profit or loss calculated using the user's current position and the instrument's Last Traded Price (LTP). MTM values are not provided in Interactive API responses; users must compute MTM on their end using current position data that can be fetched by <strong>GET Position api</strong> or Position data received on Interactive websocket. <strong>LastTradedPrice</strong> for a particular instrument can be fetched using marketdata apis &amp; websocket. Refer to the sample logic provided below.
</p>

<div style="position:relative;margin:8px 0 24px">
  <div style="background:#1e1e1e;border-radius:10px;padding:24px 24px 20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;max-height:220px;overflow:hidden;transition:max-height .4s ease" id="mtm-calc-box">
<span style="color:#9cdcfe">openBuyQty</span><span style="color:#d4d4d4"> = </span><span style="color:#dcdcaa">int</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"OpenBuyQuantity"</span><span style="color:#d4d4d4">])</span><br>
<span style="color:#9cdcfe">openSellQty</span><span style="color:#d4d4d4"> = </span><span style="color:#dcdcaa">int</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"OpenSellQuantity"</span><span style="color:#d4d4d4">])</span><br>
<br>
<span style="color:#6a9955"># Realized MTM</span><br>
<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">safe_div</span><span style="color:#d4d4d4">(numerator, denominator):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">return</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">float</span><span style="color:#d4d4d4">(numerator) / </span><span style="color:#dcdcaa">float</span><span style="color:#d4d4d4">(denominator) </span><span style="color:#c586c0">if</span><span style="color:#d4d4d4"> denominator </span><span style="color:#c586c0">else</span><span style="color:#d4d4d4"> </span><span style="color:#b5cea8">0.0</span><br>
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> openBuyQty == </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> openSellQty == </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">realizedMTM</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">0.0</span><br>
<span style="color:#c586c0">else</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">totalSquaredOffQuantity</span><span style="color:#d4d4d4"> = </span><span style="color:#dcdcaa">min</span><span style="color:#d4d4d4">(openBuyQty, openSellQty)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">sellWeightedAvgPrice</span><span style="color:#d4d4d4"> = </span><span style="color:#dcdcaa">safe_div</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"SumOfTradedQuantityAndPriceSell"</span><span style="color:#d4d4d4">], openSellQty)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">buyWeightedAvgPrice</span><span style="color:#d4d4d4"> = </span><span style="color:#dcdcaa">safe_div</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"SumOfTradedQuantityAndPriceBuy"</span><span style="color:#d4d4d4">], openBuyQty)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">realizedMTM</span><span style="color:#d4d4d4"> = (</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">totalSquaredOffQuantity</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">* (sellWeightedAvgPrice - buyWeightedAvgPrice)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">* (</span><span style="color:#dcdcaa">float</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"Multiplier"</span><span style="color:#d4d4d4">]) * PriceNumerator / PriceDenominator)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
<br>
<span style="color:#6a9955"># Unrealized MTM</span><br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">int</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"Quantity"</span><span style="color:#d4d4d4">]) &gt; </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">lastPrice</span><span style="color:#d4d4d4"> = lastPrice </span><span style="color:#c586c0">if</span><span style="color:#d4d4d4"> lastPrice </span><span style="color:#c586c0">and</span><span style="color:#d4d4d4"> lastPrice != </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">else</span><span style="color:#d4d4d4"> closePrice</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">squareOfPrice</span><span style="color:#d4d4d4"> = lastPrice</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> squareOfPrice == </span><span style="color:#b5cea8">0.0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">unRealizedMTM</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">0.0</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">else</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">buyWeightedAvgPrice</span><span style="color:#d4d4d4"> = </span><span style="color:#dcdcaa">float</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"SumOfTradedQuantityAndPriceBuy"</span><span style="color:#d4d4d4">]) / </span><span style="color:#dcdcaa">float</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"OpenBuyQuantity"</span><span style="color:#d4d4d4">])</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">unRealizedMTM</span><span style="color:#d4d4d4"> = </span><span style="color:#dcdcaa">abs</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">int</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"Quantity"</span><span style="color:#d4d4d4">])) * (squareOfPrice - buyWeightedAvgPrice) * (</span><span style="color:#dcdcaa">float</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"Multiplier"</span><span style="color:#d4d4d4">]) * PriceNumerator / PriceDenominator)</span><br>
<span style="color:#c586c0">else</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">lastPrice</span><span style="color:#d4d4d4"> = lastPrice </span><span style="color:#c586c0">if</span><span style="color:#d4d4d4"> lastPrice </span><span style="color:#c586c0">and</span><span style="color:#d4d4d4"> lastPrice != </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">else</span><span style="color:#d4d4d4"> closePrice</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">squareOfPrice</span><span style="color:#d4d4d4"> = lastPrice</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> squareOfPrice == </span><span style="color:#b5cea8">0.0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">unRealizedMTM</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">0.0</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">else</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">sellWeightedAvgPrice</span><span style="color:#d4d4d4"> = </span><span style="color:#dcdcaa">float</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"SumOfTradedQuantityAndPriceSell"</span><span style="color:#d4d4d4">]) / </span><span style="color:#dcdcaa">float</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"OpenSellQuantity"</span><span style="color:#d4d4d4">])</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">not</span><span style="color:#d4d4d4"> sellWeightedAvgPrice </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> sellWeightedAvgPrice != sellWeightedAvgPrice:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">sellWeightedAvgPrice</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">0.0</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">unRealizedMTM</span><span style="color:#d4d4d4"> = ( </span><span style="color:#dcdcaa">abs</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">int</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"Quantity"</span><span style="color:#d4d4d4">])) * (sellWeightedAvgPrice - squareOfPrice) * (</span><span style="color:#dcdcaa">float</span><span style="color:#d4d4d4">(position[</span><span style="color:#ce9178">"Multiplier"</span><span style="color:#d4d4d4">]) * PriceNumerator / PriceDenominator) )</span><br>
<br>
<span style="color:#9cdcfe">totalMTM</span><span style="color:#d4d4d4"> = realizedMTM + unRealizedMTM</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('mtm-calc-box').innerText;navigator.clipboard.writeText(t).then(function(btn){var b=document.getElementById('mtm-calc-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="mtm-calc-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(btn){var b=document.getElementById('mtm-calc-box');if(b.style.maxHeight==='none'){b.style.maxHeight='220px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})(this)" id="mtm-calc-toggle" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>
