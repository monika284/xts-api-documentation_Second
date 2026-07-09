<div class="auth-wrap">

<!-- ═══════════════════ HERO ═══════════════════ -->
<div class="auth-hero">
  <h1 id="Authentication" class="auth-hero-title">Authentication</h1>
  <p class="auth-hero-sub">Authentication is the process of verifying <strong>who is making an API request</strong> before granting access to trading data and operations. Think of it like entering a secured building.</p>
  <div class="auth-analogy-row">
    <div class="auth-ana-card">
      <strong>Building</strong>
      <span>= RMoney API</span>
    </div>
    <div class="auth-ana-card">
      <strong>Security Guard</strong>
      <span>= Authentication System</span>
    </div>
    <div class="auth-ana-card">
      <strong>ID Card</strong>
      <span>= API Key / Access Token</span>
    </div>
  </div>
</div>

<!-- ═══════════════════ BASIC ═══════════════════ -->


<h2 id="why-authentication" class="auth-section-title">Why Authentication is Required</h2>
<div class="auth-why-grid">
  <div class="auth-why-item"><span>Protect user accounts from unauthorized use</span></div>
  <div class="auth-why-item"><span>Prevent unauthorized access to trading APIs</span></div>
  <div class="auth-why-item"><span>Secure all trading and order operations</span></div>
  <div class="auth-why-item"><span>Keep financial data private and safe</span></div>
  <div class="auth-why-item"><span>Track and audit API usage per application</span></div>
</div>

<h2 id="components" class="auth-section-title">Authentication Components</h2>
<div class="auth-components">
  <div class="auth-comp">
    <h3 class="auth-comp-title">API Key</h3>
    <p class="auth-comp-desc">Identifies your application to the RMoney server.</p>
    <div class="auth-comp-code">RMY_xxxxxxxxxxxxxxxxx</div>
    <ul class="auth-comp-list">
      <li>Identifies the application</li>
      <li>Tracks API usage per app</li>
      <li>Blocks unauthorized applications</li>
    </ul>
  </div>
  <div class="auth-comp">
    <h3 class="auth-comp-title">API Secret</h3>
    <p class="auth-comp-desc">Private key paired with your API Key for verification.</p>
    <div class="auth-comp-code">xxxxxxxxxxxxxxxxxxxxxxxx</div>
    <div class="auth-comp-warn">Never expose in frontend code. Store only in backend environment variables.</div>
  </div>
  <div class="auth-comp">
    <h3 class="auth-comp-title">Access Token</h3>
    <p class="auth-comp-desc">Proves the logged-in user's identity on every request.</p>
    <div class="auth-comp-code">eyJhbGciOiJIUzI1NiIs...</div>
    <ul class="auth-comp-list">
      <li>Authenticates each API request</li>
      <li>Grants access to user resources</li>
      <li>Expires after 24 hours</li>
    </ul>
  </div>
</div>

<!-- ════════════════ INTERMEDIATE ════════════════ -->


<h2 id="auth-flow" class="auth-section-title">Authentication Flow</h2>
<div class="auth-two-col">
  <div class="auth-flow-col">
    <p class="auth-col-label">Step-by-step process</p>
    <div class="auth-flow-steps">
      <div class="auth-flow-step"><strong>1</strong><span>Register your application on the portal</span></div>
      <div class="auth-flow-step"><strong>2</strong><span>Get your API Key and API Secret</span></div>
      <div class="auth-flow-step"><strong>3</strong><span>Call the Login API with credentials</span></div>
      <div class="auth-flow-step"><strong>4</strong><span>Receive an Access Token in the response</span></div>
      <div class="auth-flow-step"><strong>5</strong><span>Send the token in every API request header</span></div>
      <div class="auth-flow-step"><strong>6</strong><span>Access API resources — place orders, fetch data</span></div>
    </div>
  </div>
  <div class="auth-token-col">
    <p class="auth-col-label">Token validation inside the server</p>
    <div class="auth-valid-steps">
      <div class="auth-valid-step"><span>Request Received</span></div>
      <div class="auth-valid-step"><span>Extract Token from Header</span></div>
      <div class="auth-valid-step"><span>Verify Token Signature</span></div>
      <div class="auth-valid-step"><span>Check Token Expiry</span></div>
      <div class="auth-valid-step"><span>Validate User Identity</span></div>
      <div class="auth-valid-step"><span>Allow Request to Proceed</span></div>
    </div>
  </div>
</div>

<h2 id="login-request" class="auth-section-title">Login Request and Response</h2>
<div class="auth-req-row">
  <div class="auth-req-block">
    <div class="auth-req-label">Demo Request</div>
    <div class="auth-code-block"><pre>POST /interactive/user/session

{
  "clientId":  "RM12345",
  "password":  "••••••••"
}</pre></div>
  </div>
  <div class="auth-req-block">
    <div class="auth-req-label">Demo Response</div>
    <div class="auth-code-block"><pre>{
  "type": "success",
  "result": {
    "token":  "eyJhbGciOiJIUzI1NiIs...",
    "userID": "RM12345",
    "isInvestorClient": false
  }
}</pre></div>
  </div>
</div>

<h2 id="using-token" class="auth-section-title">Using the Token</h2>
<p class="auth-text">Include the token in the <code>Authorization</code> header of every protected API call. No <code>Bearer</code> prefix is needed — send the raw token value.</p>
<div class="auth-code-block"><pre>GET /interactive/portfolio/holdings

Authorization: eyJhbGciOiJIUzI1NiIs...


GET /interactive/orders

Authorization: eyJhbGciOiJIUzI1NiIs...</pre></div>

<!-- ═══════════════════ ADVANCED ════════════════ -->

<h2 id="auth-errors" class="auth-section-title">Authentication Errors</h2>
<div class="auth-errors-grid">
  <div class="auth-error-card">
    <div class="auth-error-title">Invalid Token</div>
    <div class="auth-error-code">{ "error": "Invalid Token" }</div>
    <div class="auth-error-desc">The token value is incorrect or malformed.</div>
  </div>
  <div class="auth-error-card">
    <div class="auth-error-title">Expired Token</div>
    <div class="auth-error-code">{ "error": "Token Expired" }</div>
    <div class="auth-error-desc">Token is valid but past its 24-hour lifetime. Refresh it.</div>
  </div>
  <div class="auth-error-card">
    <div class="auth-error-title">Unauthorized</div>
    <div class="auth-error-code">{ "error": "Unauthorized" }</div>
    <div class="auth-error-desc">No token was provided in the Authorization header.</div>
  </div>
</div>

<h2 id="best-practices" class="auth-section-title">Security Best Practices</h2>
<div class="auth-practices">
  <div class="auth-practice">
    <h4>Keep Secrets Secure</h4>
    <p>Store API secrets only in backend environment variables. Never commit them to code repositories or expose them in frontend apps.</p>
  </div>
  <div class="auth-practice">
    <h4>Always Use HTTPS</h4>
    <p>All API calls must use <code>https://</code>. Plain HTTP exposes your token to network interception and man-in-the-middle attacks.</p>
  </div>
  <div class="auth-practice">
    <h4>Rotate Tokens Regularly</h4>
    <p>Do not use the same token indefinitely. Refresh access tokens before they expire and immediately revoke compromised tokens.</p>
  </div>
  <div class="auth-practice">
    <h4>Validate Before Requesting</h4>
    <p>Always check if your token is still valid before making an API call. Re-authenticate proactively instead of handling 401 errors reactively.</p>
  </div>
</div>

<!-- ═══════════════════ SUMMARY ════════════════ -->
<h2 id="summary" class="auth-section-title">Summary</h2>
<div class="auth-summary-wrap">
  <table class="auth-sum-table">
    <thead>
      <tr><th>Component</th><th>Purpose</th><th>Where Used</th></tr>
    </thead>
    <tbody>
      <tr><td>API Key</td><td>Identifies your application</td><td>Login request body</td></tr>
      <tr><td>API Secret</td><td>Proves application authenticity</td><td>Login request body</td></tr>
      <tr><td>Token</td><td>Identifies the logged-in user</td><td>Authorization header on every request</td></tr>
      <tr><td>Refresh Token</td><td>Generates a new access token without re-login</td><td>Token refresh endpoint</td></tr>
    </tbody>
  </table>
</div>

</div>
