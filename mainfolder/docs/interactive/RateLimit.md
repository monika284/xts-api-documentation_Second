<!-- ═══════════════ RATE LIMITING ═══════════════ -->
<h1 id="Rate-Limit" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Rate Limiting</h1>
<p class="iov-subtitle">Rate limiting controls the number of requests a client can make to an API within a specific time period — maintaining platform stability, ensuring fair usage, and protecting backend services from excessive traffic.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/></svg></div><span>Per-second limits</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg></div><span>429 Too Many Requests</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14l-5-5 1.4-1.4L12 14.2l7.6-7.6L21 8l-9 9z"/></svg></div><span>Rate-limit headers</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg></div><span>Unified throttle</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.3 0 6 2.7 6 6 0 1-.3 2-.7 2.8l1.5 1.5C19.5 15 20 13.6 20 12c0-4.4-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6 0-1 .3-2 .7-2.8L5.2 7.7C4.5 9 4 10.4 4 12c0 4.4 3.6 8 8 8v3l4-4-4-4v3z"/></svg></div><span>Exponential backoff</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Fair resource allocation</span></div>
</div>

---

## Why Rate Limiting Is Important

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin:16px 0 24px">
  <div style="border:1.5px solid #fed7aa;border-radius:12px;padding:16px;background:#ffffff">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color: #c2410c;font-size:13px;margin-bottom:4px">Prevent Overload</div>
    <p style="font-size:12px;color:#374151;margin:0">Stops servers from being overwhelmed during peak traffic periods.</p>
  </div>
  <div style="border:1.5px solid #fed7aa;border-radius:12px;padding:16px;background:#ffffff">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#c2410c;font-size:13px;margin-bottom:4px">Fair Usage</div>
    <p style="font-size:12px;color:#374151;margin:0">Ensures equal resource allocation among all users and clients.</p>
  </div>
  <div style="border:1.5px solid #fed7aa;border-radius:12px;padding:16px;background:#ffffff">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#c2410c;font-size:13px;margin-bottom:4px">Reliability</div>
    <p style="font-size:12px;color:#374151;margin:0">Maintains consistent API performance and platform availability.</p>
  </div>
  <div style="border:1.5px solid #fed7aa;border-radius:12px;padding:16px;background:#ffffff">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#c2410c;font-size:13px;margin-bottom:4px">Abuse Protection</div>
    <p style="font-size:12px;color:#374151;margin:0">Guards against accidental loops, bots, and excessive automation.</p>
  </div>
</div>

---

## How Rate Limits Work

Each endpoint is assigned a maximum number of requests allowed **per second (RPS)**. Requests beyond the limit are rejected until the window resets.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0">
  <div style="border:2px solid #f15d06;border-radius:12px;overflow:hidden">
    <div style="background: #ea580c;padding:10px 16px;color:#fff;font-weight:700;font-size:13px;display:flex;align-items:center;gap:8px"><span></span> Allowed — 10 req/sec limit</div>
    <div style="padding:14px 16px;background:#ffffff">
      <div style="font-family:monospace;font-size:13px;color:#9a3412;background:#ffffff;border-radius:8px;padding:10px 14px;line-height:2">
        Request 1 &nbsp;→ ✓<br>
        Request 2 &nbsp;→ ✓<br>
        Request 3 &nbsp;→ ✓<br>
        <span style="color:#9ca3af">⋮ (up to 10)</span><br>
        Request 10 →  ✓
      </div>
      <p style="font-size:12px;color: #ea580c;margin:8px 0 0;font-weight:600">10 requests within 1 second — accepted</p>
    </div>
  </div>
  <div style="border:2px solid #f15d06;border-radius:12px;overflow:hidden">
    <div style="background: #ea580c;padding:10px 16px;color:#fff;font-weight:700;font-size:13px;display:flex;align-items:center;gap:8px"><span></span> Rejected — 10 req/sec limit</div>
    <div style="padding:14px 16px;background:#ffffff">
      <div style="font-family:monospace;font-size:13px;color:#9a3412;background:#ffffff;border-radius:8px;padding:10px 14px;line-height:2">
        Request 1–10 → ✓<br>
        Request 11 &nbsp;&nbsp;→ ✗ 429<br>
        Request 12 &nbsp;&nbsp;→ ✗ 429<br>
        Request 13 &nbsp;&nbsp;→ ✗ 429<br>
        Request 14 &nbsp;&nbsp;→ ✗ 429
      </div>
      <p style="font-size:12px;color: #ea580c;margin:8px 0 0;font-weight:600">15 requests within 1 second — 5 rejected</p>
    </div>
  </div>
</div>

---

## Rate Limit Response

When the rate limit is exceeded the API returns **HTTP 429**:

<div style="border:1.5px solid #fdba74;border-radius:12px;overflow:hidden;margin:12px 0">
  <div style="background:#ea580c;padding:8px 16px;font-size:12px;font-weight:700;color:#fff;letter-spacing:.05em;display:flex;align-items:center;gap:8px">
    <span style="background:#fff;color:#ea580c;border-radius:4px;padding:1px 8px;font-size:11px;font-weight:800">429</span> Too Many Requests
  </div>
  <pre style="margin:0;padding:14px 16px;font-size:13px;font-family:monospace;color:#111827;background:#ffffff;line-height:1.8">{
  "type": "error",
  "code": "RATE_LIMIT_EXCEEDED",
  "description": "Request rate exceeded the allowed limit. Please retry after some time."
}</pre>
</div>

---

## Rate Limit Headers

<div style="display:flex;flex-direction:column;gap:10px;margin:12px 0 18px">
  <div style="display:flex;align-items:center;gap:20px;padding:14px 18px;border:1.5px solid #e5e7eb;border-left:4px solid #ff6b00;border-radius:8px;background:#fff">
    <code style="color:#c2410c;font-weight:700;font-size:13px;min-width:210px;white-space:nowrap">X-RateLimit-Limit</code>
    <span style="color:#374151;font-size:13px">Maximum requests allowed per window</span>
  </div>
  <div style="display:flex;align-items:center;gap:20px;padding:14px 18px;border:1.5px solid #e5e7eb;border-left:4px solid #ff6b00;border-radius:8px;background:#fff">
    <code style="color:#c2410c;font-weight:700;font-size:13px;min-width:210px;white-space:nowrap">X-RateLimit-Remaining</code>
    <span style="color:#374151;font-size:13px">Remaining requests in the current window</span>
  </div>
  <div style="display:flex;align-items:center;gap:20px;padding:14px 18px;border:1.5px solid #e5e7eb;border-left:4px solid #ff6b00;border-radius:8px;background:#fff">
    <code style="color:#c2410c;font-weight:700;font-size:13px;min-width:210px;white-space:nowrap">X-RateLimit-Reset</code>
    <span style="color:#374151;font-size:13px">Unix timestamp when the limit resets</span>
  </div>
</div>

<div style="border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden;margin:10px 0">
  <div style="background:#f9fafb;padding:8px 16px;font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;text-transform:uppercase;border-bottom:1px solid #e5e7eb">EXAMPLE RESPONSE HEADERS</div>
  <pre style="margin:0;padding:12px 16px;font-size:13px;font-family:monospace;color:#374151;line-height:2">X-RateLimit-Limit: 10
X-RateLimit-Remaining: 3
X-RateLimit-Reset: 1718700000</pre>
</div>

---

## Rate Limits Table

<div style="border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden;margin:12px 0">
  <div style="display:flex;background:linear-gradient(135deg,#ff7b00,#ff9500)">
    <div style="flex:0 0 30%;padding:12px 18px;color:#fff;font-weight:700;font-size:13px">API Name</div>
    <div style="flex:0 0 36%;padding:12px 18px;color:#fff;font-weight:700;font-size:13px">Endpoint</div>
    <div style="flex:0 0 16%;padding:12px 18px;color:#fff;font-weight:700;font-size:13px">Method</div>
    <div style="flex:1;padding:12px 18px;color:#fff;font-weight:700;font-size:13px">Limit (Req/Sec)</div>
  </div>
  <div style="display:flex;align-items:center;background:#fff3e6;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Unified Order API Throttle Limit</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-size:12px;color: #030303">Unified Order API Throttle Limit</div>
    <div style="flex:0 0 16%;padding:11px 18px"><a href="#unified-order-throttle-limit" style="text-decoration:none"><span style="background:#fff3e6;color:#c2410c;border:1px solid #fed7aa;border-radius:5px;padding:4px 10px;font-size:12px;font-weight:700;white-space:nowrap">See Note ↓</span></a></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151;font-weight:700">10</div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Balance</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/user/balance</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">GET</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#fff;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Profile</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/user/profile</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">GET</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Brokerage Calculator</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/user/calculatebrokerage</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">POST</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">10</div>
  </div>
  <div style="display:flex;align-items:center;background:#fff;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Cancel All</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders/cancelall</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">POST</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Orderbook / Order History</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">GET</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#fff;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Tradebook</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders/trades</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">GET</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Spread Orderbook</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders/spread</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">GET</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#fff;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Place GTT Order</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders/gttorder</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">POST</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Modify GTT Order</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders/gttorder</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#fefce8;color:#a16207;border:1px solid #fde047;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">PUT</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#fff;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Cancel GTT Order</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders/gttorder</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#fef2f2;color:#b91c1c;border:1px solid #fecaca;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">DELETE</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">GTT Orderbook</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders/gttorderbook</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">GET</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#fff;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Holding</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/portfolio/holdings</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">GET</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Position</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/portfolio/positions</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">GET</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#fff;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Position Convert</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/portfolio/positions/convert</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#fefce8;color:#a16207;border:1px solid #fde047;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">PUT</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">10</div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Regular Order Margin</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders/margindetails</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">POST</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">10</div>
  </div>
  <div style="display:flex;align-items:center;background:#fff;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Regular Order Modify Margin</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders/modifyordermargindetails</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">POST</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">10</div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Cover Order Margin</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders/comargindetails</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">POST</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">10</div>
  </div>
  <div style="display:flex;align-items:center;background:#fff;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Cover Order Modify Margin</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders/comodifymargindetails</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">POST</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">10</div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Bracket Order Margin</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/orders/bomargindetails</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">POST</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">10</div>
  </div>
  <div style="display:flex;align-items:center;background:#fff;border-top:1px solid #e5e7eb">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Exchange Status</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/status/exchange</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">GET</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
  <div style="display:flex;align-items:center;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:none">
    <div style="flex:0 0 30%;padding:11px 18px;font-size:13px;color:#374151">Exchange Message</div>
    <div style="flex:0 0 36%;padding:11px 18px;font-family:monospace;font-size:12px;color:#374151">/messages/exchange</div>
    <div style="flex:0 0 16%;padding:11px 18px"><span style="background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;border-radius:5px;padding:2px 8px;font-size:11px;font-weight:700">GET</span></div>
    <div style="flex:1;padding:11px 18px;font-size:13px;color:#374151">1</div>
  </div>
</div>

<div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 18px;background:#ffffff;margin:8px 0 20px;font-size:13px;color:#374151">
  <strong style="color:#c2410c">Note — Unified Order Throttle Limit:</strong><br>
  This is a combined rate limit applied across all order-related APIs listed below.<br>
  The standard limit is <strong>10 requests per second</strong>, shared cumulatively among these APIs:<br>
  <span style="color:#6b7280;font-size:12px">Place Order, Modify Order, Cancel Order, Place BO (Bracket Order), Modify BO, Cancel BO, Place CO (Cover Order), Exit Cover, Place Spread Order, Modify Spread Order, Cancel Spread Order.</span>
</div>

---

## Unified Order Throttle Limit

Certain order-management APIs share a **combined throttle limit** — the total across all three endpoints cannot exceed 10 req/second.

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:16px 0">
  <div style="border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
    <div style="background:#374151;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Unified Order APIs</div>
    <div style="padding:14px 16px;background:#f9fafb">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="background:#ffffff;color:#c2410c;border:1px solid #fed7aa;border-radius:4px;padding:2px 8px;font-size:11px;font-weight:700">POST</span><span style="font-family:monospace;font-size:13px;color:#374151">Place Order</span></div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px"><span style="background:#ffffff;color:#c2410c;border:1px solid #fed7aa;border-radius:4px;padding:2px 8px;font-size:11px;font-weight:700">PUT</span><span style="font-family:monospace;font-size:13px;color:#374151">Modify Order</span></div>
      <div style="display:flex;align-items:center;gap:10px"><span style="background:#ffffff;color:#c2410c;border:1px solid #fed7aa;border-radius:4px;padding:2px 8px;font-size:11px;font-weight:700">DELETE</span><span style="font-family:monospace;font-size:13px;color:#374151">Cancel Order</span></div>
      <div style="margin-top:12px;padding:8px 12px;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;font-size:13px;color:#374151;text-align:center"><strong>Shared limit: 10 requests/second</strong></div>
    </div>
  </div>
  <div style="border:1.5px solid #fdba74;border-radius:12px;overflow:hidden">
    <div style="background:#ea580c;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Example — Limit Exceeded</div>
    <div style="padding:14px 16px;background:#ffffff;font-family:monospace;font-size:13px;line-height:2">
      <span style="color:#16a34a">Place Order</span> &nbsp;→ 5 req<br>
      <span style="color:#2563eb">Modify Order</span> → 3 req<br>
      <span style="color:#ea580c">Cancel Order</span> → 4 req<br>
      <div style="border-top:1px solid #fdba74;margin:6px 0"></div>
      Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <strong style="color: #ea580c">12 req/sec</strong><br>
      <span style="color:#ea580c;font-weight:700">→ Rate limit exceeded (max 10)</span>
    </div>
  </div>
</div>

---

## Best Practices

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:16px 0 24px">
  <div style="border:1.5px solid #fed7aa;border-radius:12px;padding:16px;background:#ffffff">
    <div style="font-size:20px;margin-bottom:6px"></div>
    <div style="font-weight:700;color: #c2410c;font-size:13px;margin-bottom:4px">Exponential Backoff</div>
    <p style="font-size:12px;color: #374151;margin:0">On 429, wait 1s → retry. If still failing, wait 2s → 4s → 8s before each retry.</p>
  </div>
  <div style="border:1.5px solid #fed7aa;border-radius:12px;padding:16px;background:#ffffff">
    <div style="font-size:20px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#c2410c;font-size:13px;margin-bottom:4px">Cache Responses</div>
    <p style="font-size:12px;color:#374151;margin:0">Cache frequently requested data (e.g., instruments, profile) to avoid redundant API calls.</p>
  </div>
  <div style="border:1.5px solid #fed7aa;border-radius:12px;padding:16px;background:#ffffff">
    <div style="font-size:20px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#c2410c;font-size:13px;margin-bottom:4px">Monitor Headers</div>
    <p style="font-size:12px;color:#374151;margin:0">Read <code>X-RateLimit-Remaining</code> before sending batches to stay within limits.</p>
  </div>
  <div style="border:1.5px solid #fed7aa;border-radius:12px;padding:16px;background:#ffffff">
    <div style="font-size:20px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#c2410c;font-size:13px;margin-bottom:4px">Queue Requests</div>
    <p style="font-size:12px;color:#374151;margin:0">Queue non-critical requests and spread them over time rather than bursting all at once.</p>
  </div>
  <div style="border:1.5px solid #fed7aa;border-radius:12px;padding:16px;background:#ffffff">
    <div style="font-size:20px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#c2410c;font-size:13px;margin-bottom:4px">Avoid Polling</div>
    <p style="font-size:12px;color:#374151;margin:0">Use WebSocket streaming instead of repeatedly polling REST endpoints for updates.</p>
  </div>
  <div style="border:1.5px solid #fed7aa;border-radius:12px;padding:16px;background:#ffffff">
    <div style="font-size:20px;margin-bottom:6px">⏱</div>
    <div style="font-weight:700;color:#c2410c;font-size:13px;margin-bottom:4px">Respect Retry Intervals</div>
    <p style="font-size:12px;color:#374151;margin:0">Wait the duration specified by the API in the retry response before re-sending.</p>
  </div>
</div>

---

## Notes

<div style="border:1.5px solid #fed7aa;border-radius:12px;padding:16px 20px;background:#ffffff;margin:12px 0">
  <ul style="margin:0;padding-left:20px;font-size:13px;color:#374151;line-height:2.2">
    <li>Rate limits may vary by endpoint — always check the endpoint-specific table.</li>
    <li>Limits are subject to change to ensure platform stability.</li>
    <li>Repeated violations may result in temporary throttling or access restrictions.</li>
  </ul>
</div>
