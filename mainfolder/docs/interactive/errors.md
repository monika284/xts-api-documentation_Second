<div class="err-wrap">

<!-- ═══════════════════ HERO ═══════════════════ -->
<div class="err-hero">
  <h1 id="Erroe-codes" class="err-hero-title">Error Codes</h1>
  <p class="err-hero-sub">When an API request fails, RMoney returns an error code with a message so you can identify the problem and fix it fast. Understanding error codes is essential to building reliable trading applications.</p>
  <div class="err-why-grid">
    <div class="err-why-item"><span>Identify problems quickly without guessing</span></div>
    <div class="err-why-item"><span>Debug API requests with precise context</span></div>
    <div class="err-why-item"><span>Handle failures gracefully in your application</span></div>
    <div class="err-why-item"><span>Improve overall application reliability</span></div>
  </div>
</div>

<!-- ═══════════════════ BASIC ═══════════════════ -->


<h2 id="how-errors-work" class="err-section-title">How Errors Work</h2>
<div class="err-flow-wrap">
  <div class="err-flow-col">
    <div class="err-flow-box err-fb-app">Your Application</div>
    <div class="err-flow-down">
      <div class="err-flow-line"></div>
      <div class="err-flow-label">API Request</div>
      <div class="err-flow-line"></div>
    </div>
    <div class="err-flow-box err-fb-api">RMoney API</div>
    <div class="err-flow-fork">
      <div class="err-fork-branch err-fork-left">
        <div class="err-fork-lv err-line-green"></div>
        <div class="err-flow-outcome err-fo-success">
          <strong>Success</strong>
          <span>Response Data</span>
        </div>
      </div>
      <div class="err-fork-branch err-fork-right">
        <div class="err-fork-lv err-line-red"></div>
        <div class="err-flow-outcome err-fo-failure">
          <strong>Failure</strong>
          <span>Error Code + Message</span>
        </div>
      </div>
    </div>
  </div>
</div>

<h2 id="response-format" class="err-section-title">Error Response Format</h2>
<p class="err-text">Every error response from the RMoney API follows this consistent structure:</p>
<div class="err-resp-anatomy">
  <div class="err-code-block"><pre>{
  "type":        "error",
  "code":        "InvalidInput",
  "description": "Quantity must be greater than zero",
  "result":      {}
}</pre></div>
  <div class="err-resp-fields">
    <div class="err-resp-field">
      <code>type</code>
      <span>Always <strong>"error"</strong> when the request fails</span>
    </div>
    <div class="err-resp-field">
      <code>code</code>
      <span>Short machine-readable error identifier</span>
    </div>
    <div class="err-resp-field">
      <code>description</code>
      <span>Human-readable explanation of the error</span>
    </div>
    <div class="err-resp-field">
      <code>result</code>
      <span>Empty object on failure</span>
    </div>
  </div>
</div>

<!-- ════════════════ INTERMEDIATE ════════════════ -->


<h2 id="2xx" class="err-section-title">2xx — Success Responses</h2>
<div class="err-cat-header err-cat-green">
  <div class="err-cat-badge-large">2xx</div>
  <div class="err-cat-info">
    <strong>Request completed successfully</strong>
    <span>These are not errors — they confirm everything went right.</span>
  </div>
</div>
<div class="err-cards-row">
  <div class="err-card">
    <div class="err-code-pill err-green">200</div>
    <div class="err-card-body">
      <div class="err-card-name">OK</div>
      <div class="err-card-desc">Request completed. Data is in the response.</div>
      <div class="err-mini-code"><pre>{ "type": "success", "result": { ... } }</pre></div>
    </div>
  </div>
  <div class="err-card">
    <div class="err-code-pill err-green">201</div>
    <div class="err-card-body">
      <div class="err-card-name">Created</div>
      <div class="err-card-desc">Resource was created (e.g. order placed).</div>
      <div class="err-mini-code"><pre>{ "type": "success", "result": { "AppOrderID": 1234 } }</pre></div>
    </div>
  </div>
  <div class="err-card">
    <div class="err-code-pill err-green">204</div>
    <div class="err-card-body">
      <div class="err-card-name">No Content</div>
      <div class="err-card-desc">Successful but no response body (e.g. logout).</div>
      <div class="err-mini-code"><pre>HTTP 204 — empty body</pre></div>
    </div>
  </div>
</div>

<h2 id="4xx" class="err-section-title">4xx — Client Errors</h2>
<div class="err-cat-header err-cat-amber">
  <div class="err-cat-badge-large">4xx</div>
  <div class="err-cat-info">
    <strong>Problem with your request</strong>
    <span>Fix the request before retrying — these errors won't resolve on their own.</span>
  </div>
</div>
<div class="err-details-grid">

  <div class="err-detail">
    <div class="err-detail-header">
      <div class="err-code-pill err-amber">400</div>
      <div>
        <div class="err-detail-name">Bad Request</div>
        <div class="err-detail-desc">The API cannot understand the request due to invalid or missing data.</div>
      </div>
    </div>
    <div class="err-reasons-row">
      <div class="err-reason-item">Missing required fields</div>
      <div class="err-reason-item">Invalid parameter format</div>
      <div class="err-reason-item">Incorrect data types</div>
    </div>
    <div class="err-code-block"><pre>{ "type": "error", "code": "InvalidInput",
  "description": "Invalid Request Parameters" }</pre></div>
  </div>

  <div class="err-detail">
    <div class="err-detail-header">
      <div class="err-code-pill err-red">401</div>
      <div>
        <div class="err-detail-name">Unauthorized</div>
        <div class="err-detail-desc">Authentication failed. The request has no valid access token.</div>
      </div>
    </div>
    <div class="err-reasons-row">
      <div class="err-reason-item">Missing Authorization header</div>
      <div class="err-reason-item">Invalid token value</div>
      <div class="err-reason-item">Token has expired</div>
    </div>
    <div class="err-code-block"><pre>{ "type": "error", "code": "Unauthorized",
  "description": "Unauthorized Access" }</pre></div>
  </div>

  <div class="err-detail">
    <div class="err-detail-header">
      <div class="err-code-pill err-red">403</div>
      <div>
        <div class="err-detail-name">Forbidden</div>
        <div class="err-detail-desc">Token is valid but you don't have permission for this resource.</div>
      </div>
    </div>
    <div class="err-reasons-row">
      <div class="err-reason-item">Account not enabled for F&amp;O</div>
      <div class="err-reason-item">Segment access not granted</div>
    </div>
    <div class="err-code-block"><pre>{ "type": "error", "code": "Forbidden",
  "description": "Access Denied" }</pre></div>
  </div>

  <div class="err-detail">
    <div class="err-detail-header">
      <div class="err-code-pill err-amber">404</div>
      <div>
        <div class="err-detail-name">Not Found</div>
        <div class="err-detail-desc">The requested endpoint or resource does not exist.</div>
      </div>
    </div>
    <div class="err-reasons-row">
      <div class="err-reason-item">Typo in the endpoint path</div>
      <div class="err-reason-item">Order ID does not exist</div>
    </div>
    <div class="err-code-block"><pre>{ "type": "error", "code": "NotFound",
  "description": "Resource Not Found" }</pre></div>
  </div>

  <div class="err-detail">
    <div class="err-detail-header">
      <div class="err-code-pill err-amber">405</div>
      <div>
        <div class="err-detail-name">Method Not Allowed</div>
        <div class="err-detail-desc">The HTTP method used is not supported for this endpoint.</div>
      </div>
    </div>
    <div class="err-reasons-row">
      <div class="err-reason-item">Used POST on a GET-only endpoint</div>
      <div class="err-reason-item">Wrong HTTP verb in the request</div>
    </div>
    <div class="err-code-block"><pre>{ "type": "error", "code": "MethodNotAllowed",
  "description": "Method Not Allowed" }</pre></div>
  </div>

  <div class="err-detail">
    <div class="err-detail-header">
      <div class="err-code-pill err-red">429</div>
      <div>
        <div class="err-detail-name">Too Many Requests</div>
        <div class="err-detail-desc">You have exceeded the allowed number of API calls per second or minute.</div>
      </div>
    </div>
    <div class="err-reasons-row">
      <div class="err-reason-item">Sending requests in a tight loop</div>
      <div class="err-reason-item">Polling instead of using WebSocket</div>
    </div>
    <div class="err-code-block"><pre>{ "type": "error", "code": "RateLimitExceeded",
  "description": "Too Many Requests" }</pre></div>
  </div>

</div>

<h2 id="5xx" class="err-section-title">5xx — Server Errors</h2>
<div class="err-cat-header err-cat-red">
  <div class="err-cat-badge-large">5xx</div>
  <div class="err-cat-info">
    <strong>Problem on the server side</strong>
    <span>Not caused by your request. Retry with exponential backoff — usually temporary.</span>
  </div>
</div>
<div class="err-cards-row err-cards-2col">
  <div class="err-card">
    <div class="err-code-pill err-red">500</div>
    <div class="err-card-body">
      <div class="err-card-name">Internal Server Error</div>
      <div class="err-card-desc">Unexpected failure inside the API server.</div>
      <div class="err-mini-code"><pre>{ "description": "Internal Server Error" }</pre></div>
    </div>
  </div>
  <div class="err-card">
    <div class="err-code-pill err-red">502</div>
    <div class="err-card-body">
      <div class="err-card-name">Bad Gateway</div>
      <div class="err-card-desc">Server received an invalid response from an upstream service.</div>
      <div class="err-mini-code"><pre>{ "description": "Bad Gateway" }</pre></div>
    </div>
  </div>
  <div class="err-card">
    <div class="err-code-pill err-red">503</div>
    <div class="err-card-body">
      <div class="err-card-name">Service Unavailable</div>
      <div class="err-card-desc">API is down for maintenance or overloaded. Retry later.</div>
      <div class="err-mini-code"><pre>{ "description": "Service Temporarily Unavailable" }</pre></div>
    </div>
  </div>
  <div class="err-card">
    <div class="err-code-pill err-red">504</div>
    <div class="err-card-body">
      <div class="err-card-name">Gateway Timeout</div>
      <div class="err-card-desc">Server took too long to respond. Retry with a smaller request.</div>
      <div class="err-mini-code"><pre>{ "description": "Gateway Timeout" }</pre></div>
    </div>
  </div>
</div>

<!-- ═══════════════════ ADVANCED ════════════════ -->


<h2 id="trading-errors" class="err-section-title">Common Trading API Errors</h2>
<div class="err-trading-grid">
  <div class="err-trade-card">
    <div class="err-trade-body">
      <strong>Insufficient Funds</strong>
      <span>Not enough balance or margin to place the order.</span>
      <div class="err-mini-code"><pre>{ "description": "Insufficient Funds" }</pre></div>
    </div>
  </div>
  <div class="err-trade-card">
    <div class="err-trade-body">
      <strong>Invalid Symbol</strong>
      <span>Trading symbol not found in the exchange segment.</span>
      <div class="err-mini-code"><pre>{ "description": "Symbol Not Found" }</pre></div>
    </div>
  </div>
  <div class="err-trade-card">
    <div class="err-trade-body">
      <strong>Market Closed</strong>
      <span>Request sent outside trading hours. Exchange is closed.</span>
      <div class="err-mini-code"><pre>{ "description": "Market is Closed" }</pre></div>
    </div>
  </div>
  <div class="err-trade-card">
    <div class="err-trade-body">
      <strong>Invalid Quantity</strong>
      <span>Order quantity is zero, negative, or not a valid lot size.</span>
      <div class="err-mini-code"><pre>{ "description": "Invalid Quantity" }</pre></div>
    </div>
  </div>
  <div class="err-trade-card">
    <div class="err-trade-body">
      <strong>Order Rejected</strong>
      <span>Exchange or RMS rejected the order after it was sent.</span>
      <div class="err-mini-code"><pre>{ "description": "Order Rejected by Exchange" }</pre></div>
    </div>
  </div>
  <div class="err-trade-card">
    <div class="err-trade-body">
      <strong>Token Expired</strong>
      <span>Login session expired. Re-authenticate to continue.</span>
      <div class="err-mini-code"><pre>{ "description": "Access Token Expired" }</pre></div>
    </div>
  </div>
</div>

<h2 id="error-handling" class="err-section-title">Error Handling Best Practices</h2>
<div class="err-practices-col">

  <div class="err-practice-card">
    <div class="err-pc-body">
      <h4>Validate Inputs Before Calling</h4>
      <p>Check all required fields, types, and quantity values before sending the request. A 400 error means the problem is in your request, not the server.</p>
      <div class="err-pc-checks">
        <div class="err-pc-check">Required fields are present</div>
        <div class="err-pc-check">Quantities are positive integers</div>
        <div class="err-pc-check">Exchange segment codes are valid</div>
      </div>
    </div>
  </div>

  <div class="err-practice-card">
    <div class="err-pc-body">
      <h4>Handle 401 Proactively</h4>
      <p>Don't wait for a 401 response. Track your token's issue time and refresh it before the 24-hour window expires.</p>
      <div class="err-auth-steps">
        <div class="err-auth-step">Receive 401 Unauthorized</div>
        <div class="err-auth-arrow"></div>
        <div class="err-auth-step">Use Refresh Token to re-authenticate</div>
        <div class="err-auth-arrow"></div>
        <div class="err-auth-step">Retry original request with new token</div>
      </div>
    </div>
  </div>

  <div class="err-practice-card">
    <div class="err-pc-body">
      <h4>Retry Temporary Failures with Backoff</h4>
      <p>Server errors (429, 500, 502, 503, 504) are usually temporary. Use exponential backoff to avoid overwhelming the server.</p>
      <div class="err-backoff">
        <div class="err-backoff-step">
          <span class="err-backoff-try">Retry 1</span>
          <span class="err-backoff-bar" style="width:50px"></span>
          <span class="err-backoff-delay">1 second</span>
        </div>
        <div class="err-backoff-step">
          <span class="err-backoff-try">Retry 2</span>
          <span class="err-backoff-bar" style="width:90px"></span>
          <span class="err-backoff-delay">2 seconds</span>
        </div>
        <div class="err-backoff-step">
          <span class="err-backoff-try">Retry 3</span>
          <span class="err-backoff-bar" style="width:150px"></span>
          <span class="err-backoff-delay">4 seconds</span>
        </div>
        <div class="err-backoff-step">
          <span class="err-backoff-try">Give up</span>
          <span class="err-backoff-bar err-bo-red" style="width:50px"></span>
          <span class="err-backoff-delay">Alert user</span>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- ═══════════════════ SUMMARY ════════════════ -->
<h2 id="summary" class="err-section-title">Error Code Summary</h2>
<div class="err-summary-wrap">
  <div class="err-sum-group">
    <div class="err-sum-group-label err-sum-green">2xx Success</div>
    <div class="err-sum-rows">
      <div class="err-sum-row"><span class="err-sum-code err-green">200</span><span>OK — request completed</span></div>
      <div class="err-sum-row"><span class="err-sum-code err-green">201</span><span>Created — resource was made</span></div>
      <div class="err-sum-row"><span class="err-sum-code err-green">204</span><span>No Content — success, no body</span></div>
    </div>
  </div>
  <div class="err-sum-group">
    <div class="err-sum-group-label err-sum-amber">4xx Client Errors</div>
    <div class="err-sum-rows">
      <div class="err-sum-row"><span class="err-sum-code err-amber">400</span><span>Bad Request — fix your input</span></div>
      <div class="err-sum-row"><span class="err-sum-code err-red">401</span><span>Unauthorized — re-authenticate</span></div>
      <div class="err-sum-row"><span class="err-sum-code err-red">403</span><span>Forbidden — access denied</span></div>
      <div class="err-sum-row"><span class="err-sum-code err-amber">404</span><span>Not Found — wrong endpoint or ID</span></div>
      <div class="err-sum-row"><span class="err-sum-code err-amber">405</span><span>Method Not Allowed — wrong HTTP verb</span></div>
      <div class="err-sum-row"><span class="err-sum-code err-red">429</span><span>Rate Limited — slow down requests</span></div>
    </div>
  </div>
  <div class="err-sum-group">
    <div class="err-sum-group-label err-sum-red">5xx Server Errors</div>
    <div class="err-sum-rows">
      <div class="err-sum-row"><span class="err-sum-code err-red">500</span><span>Server Error — retry with backoff</span></div>
      <div class="err-sum-row"><span class="err-sum-code err-red">502</span><span>Bad Gateway — retry</span></div>
      <div class="err-sum-row"><span class="err-sum-code err-red">503</span><span>Unavailable — wait and retry</span></div>
      <div class="err-sum-row"><span class="err-sum-code err-red">504</span><span>Timeout — retry smaller request</span></div>
    </div>
  </div>
</div>

</div>
