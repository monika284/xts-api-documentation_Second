<h1 style="color: #111827;"><strong> Interactive API Overview </h1>

<p class="iov-subtitle">The Interactive API allows developers to connect their applications with the RMoney trading platform. Using these APIs, you can authenticate users, retrieve account information, place and manage orders, access portfolio details, and build custom trading applications.</p>

<!-- Top feature strip -->
<div class="iov-features">
  <div class="iov-feature">
    <div class="iov-feat-icon iov-icon-orange">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v2H9V6a3 3 0 0 1 3-3zm0 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>
    </div>
    <span>Secure user authentication</span>
  </div>
  <div class="iov-feature">
    <div class="iov-feat-icon iov-icon-blue">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zm0 8h18v2H3v-2zm0 8h18v2H3v-2zM1 7h2v2H1V7zm0 8h2v2H1v-2z"/></svg>
    </div>
    <span>Place and manage orders</span>
  </div>
  <div class="iov-feature">
    <div class="iov-feat-icon iov-icon-green">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 17h8v1H8v-1zm0-3h8v1H8v-1zm0-3h5v1H8v-1z"/></svg>
    </div>
    <span>Access portfolio information</span>
  </div>
  <div class="iov-feature">
    <div class="iov-feat-icon iov-icon-purple">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
    </div>
    <span>Retrieve account and positions</span>
  </div>
  <div class="iov-feature">
    <div class="iov-feat-icon iov-icon-yellow">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
    </div>
    <span>Real-time operations</span>
  </div>
  <div class="iov-feature">
    <div class="iov-feat-icon iov-icon-teal">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.3 0 6 2.7 6 6 0 1-.3 2-.7 2.8l1.5 1.5C19.5 15 20 13.6 20 12c0-4.4-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6 0-1 .3-2 .7-2.8L5.2 7.7C4.5 9 4 10.4 4 12c0 4.4 3.6 8 8 8v3l4-4-4-4v3z"/></svg>
    </div>
    <span>Seamless integration</span>
  </div>
</div>

---

## What is Interactive API?

<p class="iov-lead">Interactive APIs enable two-way communication between your application and the RMoney trading system. Unlike Market Data APIs that only provide information, Interactive APIs allow you to perform actions such as placing orders, modifying trades, and managing portfolios.</p>

---

## Available API Modules

<div class="iov-modules">

  <div class="iov-module-card">
    <div class="iov-module-header">
      <div class="iov-module-icon iov-mod-orange">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v2H9V6a3 3 0 0 1 3-3zm0 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>
      </div>
      <h3 class="iov-mod-orange-text">Authentication</h3>
    </div>
    <p>Used to securely authenticate users and generate access tokens required for API requests.</p>
    <ul class="iov-mod-list">
      <li>Login authentication</li>
      <li>Access token generation</li>
      <li>Session management</li>
      <li>Secure API access</li>
    </ul>
    <a href="/interactive/Authentication/" class="iov-mod-link iov-link-orange">View Authentication &rarr;</a>
  </div>

  <div class="iov-module-card">
    <div class="iov-module-header">
      <div class="iov-module-icon iov-mod-blue">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm-1 17.93V18h2v1.93A8 8 0 0 1 4.07 13H6v-2H4.07A8 8 0 0 1 11 4.07V6h2V4.07A8 8 0 0 1 19.93 11H18v2h1.93A8 8 0 0 1 13 19.93z"/></svg>
      </div>
      <h3 class="iov-mod-blue-text">Base URL &amp; Endpoints</h3>
    </div>
    <p>Provides the base URLs and endpoint structure for all Interactive API requests.</p>
    <ul class="iov-mod-list">
      <li>Production API endpoints</li>
      <li>Request formats</li>
      <li>Response formats</li>
      <li>HTTP methods support</li>
    </ul>
    <a href="/interactive/baseurl/" class="iov-mod-link iov-link-blue">View Endpoints &rarr;</a>
  </div>

  <div class="iov-module-card">
    <div class="iov-module-header">
      <div class="iov-module-icon iov-mod-green">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
      </div>
      <h3 class="iov-mod-green-text">Error Codes</h3>
    </div>
    <p>Returns standardized error messages and status codes when a request fails.</p>
    <ul class="iov-mod-list">
      <li>Authentication errors</li>
      <li>Validation errors</li>
      <li>Order rejection messages</li>
      <li>System error responses</li>
    </ul>
    <a href="/interactive/errors/" class="iov-mod-link iov-link-green">View Error Codes &rarr;</a>
  </div>

</div>

---

## Interactive API Workflow

<div class="iov-workflow">
  <div class="iov-wf-step">
    <div class="iov-wf-icon iov-wf-orange">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
    </div>
    <span>User Login</span>
  </div>
  <div class="iov-wf-arrow">&rarr;</div>
  <div class="iov-wf-step">
    <div class="iov-wf-icon iov-wf-blue">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3v2H9V6a3 3 0 0 1 3-3zm0 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>
    </div>
    <span>Authentication API</span>
  </div>
  <div class="iov-wf-arrow">&rarr;</div>
  <div class="iov-wf-step">
    <div class="iov-wf-icon iov-wf-green">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    </div>
    <span>Access Token Generated</span>
  </div>
  <div class="iov-wf-arrow">&rarr;</div>
  <div class="iov-wf-step">
    <div class="iov-wf-icon iov-wf-purple">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
    </div>
    <span>API Request Sent</span>
  </div>
  <div class="iov-wf-arrow">&rarr;</div>
  <div class="iov-wf-step">
    <div class="iov-wf-icon iov-wf-orange">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5"/><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <span>RMoney Trading System</span>
  </div>
  <div class="iov-wf-arrow">&rarr;</div>
  <div class="iov-wf-step">
    <div class="iov-wf-icon iov-wf-teal">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7l-8 5.3-8-5.3V6l8 5.3L20 6v2.7z"/></svg>
    </div>
    <span>API Response Returned</span>
  </div>
  <div class="iov-wf-arrow">&rarr;</div>
  <div class="iov-wf-step">
    <div class="iov-wf-icon iov-wf-blue">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7l-2 4h8l-2-4h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 14H3V4h18v12z"/></svg>
    </div>
    <span>Application Display</span>
  </div>
</div>

---

## Common Use Cases

<div class="iov-usecases">

  <div class="iov-uc-card">
    <div class="iov-uc-icon iov-uc-blue">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 1.01L7 1a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-1.99zM17 19H7V5h10v14z"/></svg>
    </div>
    <h4>Trading Applications</h4>
    <p>Build desktop, web or mobile trading platforms.</p>
  </div>

  <div class="iov-uc-card">
    <div class="iov-uc-icon iov-uc-green">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg>
    </div>
    <h4>Automated Trading</h4>
    <p>Execute trading strategies programmatically.</p>
  </div>

  <div class="iov-uc-card">
    <div class="iov-uc-icon iov-uc-orange">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 17h8v1H8v-1zm0-3h8v1H8v-1zm0-3h5v1H8v-1z"/></svg>
    </div>
    <h4>Portfolio Management</h4>
    <p>Track holdings, positions, and account balances.</p>
  </div>

  <div class="iov-uc-card">
    <div class="iov-uc-icon iov-uc-purple">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.1-1.6-5.6-4.5-6.3V4a1.5 1.5 0 1 0-3 0v.7C7.6 5.4 6 7.9 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
    </div>
    <h4>Trading Notifications</h4>
    <p>Receive order status and execution updates.</p>
  </div>

  <div class="iov-uc-card">
    <div class="iov-uc-icon iov-uc-teal">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4L22 5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
    <h4>Investment Platforms</h4>
    <p>Integrate trading functionality into investment apps.</p>
  </div>

</div>

---

## Important Note

<div class="iov-note">
  <div class="iov-note-body">
    <div class="iov-note-icon-left">&#8505;</div>
    <div>
      <strong>Important Note</strong>
      <p>Most Interactive API endpoints require a valid access token. Always authenticate first before making API requests.</p>
    </div>
  </div>
  <div class="iov-note-shield">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5 11.5c0 1-2.2 2.5-5 2.5s-5-1.5-5-2.5v-.8c0-1.7 3.4-2.7 5-2.7s5 1 5 2.7v.8z"/></svg>
  </div>
</div>

## Next Steps

- [Authentication Guide](Authentication.md) — Set up API access and generate your token
- [Base URL & Endpoints](baseurl.md) — Understand the API structure and request formats
- [Error Codes Reference](errors.md) — Handle errors and troubleshoot responses
