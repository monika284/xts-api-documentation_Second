<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">Authentication</h1>
<p class="iov-subtitle"><strong>Authentication (Auth)</strong> is the process of verifying a user's identity before allowing access to Market Data APIs — the security check that confirms you are an authorized user.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5z"/></svg></div><span>Secure access</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Prevents unauthorized use</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Account protection</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg></div><span>API usage control</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Request tracking</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Valid users only</span></div>
</div>

---

## How Authentication Works

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg></div><span>Send Login Request</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Server Validates</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5z"/></svg></div><span>Token Generated</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Token Returned</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>API Access Granted</span></div>
</div>

---

## Login &amp; Logout APIs

<div style="border:1.5px solid #f78d23;border-radius:14px;overflow:hidden;margin:16px 0 24px">
  <div style="background: #f86c08;padding:12px 20px;color:#fff;font-weight:700;font-size:15px">Login (POST)</div>
  <div style="padding:18px 20px;background: #faf9f9">
    <p style="font-size:13px;color:#374151;margin:0 0 14px">You are logging in to the authentication using the <strong>POST</strong> method request. You will receive a token parameter in the response which is used to authenticate subsequent requests. All request headers should have the content type set to <code>application/json</code>.</p>

  <div style="font-weight:700;color:#c2410c;font-size:12px;margin-bottom:6px">URL</div>
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:16px">
      <div style="flex:1;background:#1e1e1e;color:#d4d4d4;border-radius:8px;padding:10px 14px;font-family:Consolas,monospace;font-size:12.5px;overflow-x:auto;white-space:nowrap">https://xts.rmoneyindia.co.in:3000/apimarketdata/auth/login</div>
      
  </div>

  <div style="font-weight:700;color:#c2410c;font-size:12px;margin-bottom:6px">Request Body Parameters</div>
    <table style="width:100%;border-collapse:collapse;margin-bottom:16px;font-size:12.5px">
      <thead>
        <tr style="background:#ff6b00;color:#fff">
          <th style="text-align:left;padding:8px 12px;font-weight:700">Parameter Name</th>
          <th style="text-align:left;padding:8px 12px;font-weight:700">Type</th>
          <th style="text-align:left;padding:8px 12px;font-weight:700">Mandatory</th>
          <th style="text-align:left;padding:8px 12px;font-weight:700">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#ffffff;border-bottom:1px solid #fed7aa">
          <td style="padding:8px 12px;color:#374151">secretKey</td>
          <td style="padding:8px 12px;color:#374151">RawString</td>
          <td style="padding:8px 12px;color:#374151">Y</td>
          <td style="padding:8px 12px;color:#374151">The predefined secret key assigned to the client</td>
        </tr>
        <tr style="background:#fffaf5;border-bottom:1px solid #fed7aa">
          <td style="padding:8px 12px;color:#374151">appKey</td>
          <td style="padding:8px 12px;color:#374151">RawString</td>
          <td style="padding:8px 12px;color:#374151">Y</td>
          <td style="padding:8px 12px;color:#374151">The App Key issued for the client</td>
        </tr>
      </tbody>
    </table>

  <div style="font-weight:700;color:#c2410c;font-size:12px;margin-bottom:6px">Request Body JSON</div>
    <div style="background:#1e1e1e;border-radius:10px;padding:18px 20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;margin-bottom:16px">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"secretKey"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"xxxxxxxxxxxx"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"appKey"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"xxxxxxxxxxxx"</span><br>
<span style="color:#ffd700">}</span>
    </div>

  <div style="font-weight:700;color:#c2410c;font-size:12px;margin-bottom:6px">Response Body Parameters</div>
    <table style="width:100%;border-collapse:collapse;margin-bottom:16px;font-size:12.5px">
      <thead>
        <tr style="background:#ff6b00;color:#fff">
          <th style="text-align:left;padding:8px 12px;font-weight:700">Parameter Name</th>
          <th style="text-align:left;padding:8px 12px;font-weight:700">Type</th>
          <th style="text-align:left;padding:8px 12px;font-weight:700">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#ffffff;border-bottom:1px solid #fed7aa">
          <td style="padding:8px 12px;color:#374151">token</td>
          <td style="padding:8px 12px;color:#374151">Token</td>
          <td style="padding:8px 12px;color:#374151">The authentication token used to authorize every subsequent request</td>
        </tr>
        <tr style="background:#fffaf5;border-bottom:1px solid #fed7aa">
          <td style="padding:8px 12px;color:#374151">userID</td>
          <td style="padding:8px 12px;color:#374151">UserID</td>
          <td style="padding:8px 12px;color:#374151">UserID of the logged-in client</td>
        </tr>
        <tr style="background:#ffffff;border-bottom:1px solid #fed7aa">
          <td style="padding:8px 12px;color:#374151">appVersion</td>
          <td style="padding:8px 12px;color:#374151">AppVersion</td>
          <td style="padding:8px 12px;color:#374151">Market Data App version</td>
        </tr>
        <tr style="background:#fffaf5">
          <td style="padding:8px 12px;color:#374151">application_expiry_date</td>
          <td style="padding:8px 12px;color:#374151">ApplicationExpiryDate</td>
          <td style="padding:8px 12px;color:#374151">Application key expiry date</td>
        </tr>
      </tbody>
    </table>

  <div style="font-weight:700;color:#c2410c;font-size:12px;margin-bottom:6px">Response Body JSON</div>
    <div style="background:#1e1e1e;border-radius:10px;padding:18px 20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-response-0010"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Provided Valid Credentials"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"token"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"userID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"DVJ8588"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"appVersion"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"5.0.15"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"application_expiry_date"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"30-12-2028"</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">}</span>
    </div>
  </div>
</div>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="coShowCode('curl',this)" id="co-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="coShowCode('python',this)" id="co-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>

  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8">

    <div id="code-curl">
<span style="color:#d4d4d4">curl --location </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/apimarketdata/auth/login'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178"> "appKey": "YOUR_API_KEY",
    "secretKey": "YOUR_SECRET_KEY",
    "source": "YOUR_SOURCE"</span>
</div>

<div id="code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> os</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> dotenv </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> load_dotenv</span><br>
<span style="color:#dcdcaa">load_dotenv</span><span style="color:#d4d4d4">()</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> xts_api_client.xts_connect_async </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> XTSConnect</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> asyncio</span><br>
<br>
<span style="color:#9cdcfe">API_key</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_MARKETDATA_API_KEY"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">API_secret</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_MARKETDATA_SECRET_KEY"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">API_source</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_SOURCE"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">API_root</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_API_URL"</span><span style="color:#d4d4d4">)</span><br>
<br>
<span style="color:#c586c0">async def</span><span style="color:#dcdcaa"> main</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">xt_market_data</span><span style="color:#d4d4d4"> = </span><span style="color:#4ec9b0">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">apiKey</span><span style="color:#d4d4d4"> = API_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">secretKey</span><span style="color:#d4d4d4"> = API_secret,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">source</span><span style="color:#d4d4d4"> = API_source,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root</span><span style="color:#d4d4d4"> = API_root</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response_marketdata_login</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(response_marketdata_login)</span><br>
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> __name__ == </span><span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(main())</span>
</div>

<div style="display:flex;justify-content:flex-end;margin-top:14px">
      <button onclick="(function(){var active=document.querySelector('[id^=code-]:not([style*=none])');if(!active)return;navigator.clipboard.writeText(active.innerText).then(function(){var b=document.getElementById('co-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="co-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    </div>
  </div>
</div>

<script>
function coShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('co-code-' + l).style.display = 'none';
    document.getElementById('co-tab-' + l).style.background = '#374151';
  });
  document.getElementById('co-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>
<div style="border:1.5px solid #eb820b;border-radius:14px;overflow:hidden;margin:0 0 24px">
  <div style="background: #ff6b00;padding:12px 20px;color:#fff;font-weight:700;font-size:15px">Logout (DELETE)</div>
  <div style="padding:18px 20px;background: #faf9f9">
    <p style="font-size:13px;color:#374151;margin:0 0 14px">You are logging out of the application using the <strong>DELETE</strong> method request. You will need to pass the Token/Authorization value in the request header. You will receive a success/failure message in the response.</p>

  <div style="font-weight:700;color:#c2410c;font-size:12px;margin-bottom:6px">URL</div>
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:16px">
      <div style="flex:1;background:#1e1e1e;color:#d4d4d4;border-radius:8px;padding:10px 14px;font-family:Consolas,monospace;font-size:12.5px;overflow-x:auto;white-space:nowrap">https://xts.rmoneyindia.co.in:3000/apimarketdata/auth/logout</div>
   </div>

  <div style="font-weight:700;color:#c2410c;font-size:12px;margin-bottom:6px">Response Body JSON</div>
    <div style="background:#1e1e1e;border-radius:10px;padding:18px 20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-login-0005"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"successfully logged out"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">{}</span><br>
<span style="color:#ffd700">}</span>
    </div>
  </div>
</div>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="coShowCode('curl',this)" id="tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="coShowCode('python',this)" id="tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>

  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8">

  <div id="co-code-curl">
<span style="color:#d4d4d4">curl --location </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/apimarketdata/auth/login'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178"> "appKey": "YOUR_API_KEY",
    "secretKey": "YOUR_SECRET_KEY",
    "source": "YOUR_SOURCE"</span>
</div>

<div id="co-code-python" style="display:none">
  <span style="color:#c586c0">import</span><span style="color:#d4d4d4"> os</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> dotenv </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> load_dotenv</span><br>
<span style="color:#dcdcaa">load_dotenv</span><span style="color:#d4d4d4">()</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> xts_api_client.xts_connect_async </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> XTSConnect</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> asyncio</span><br>
<br>
<span style="color:#9cdcfe">API_key</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_MARKETDATA_API_KEY"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">API_secret</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_MARKETDATA_SECRET_KEY"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">API_source</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_SOURCE"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#9cdcfe">API_root</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_API_URL"</span><span style="color:#d4d4d4">)</span><br>
<br>
<span style="color:#c586c0">async def</span><span style="color:#dcdcaa"> main</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">xt_market_data</span><span style="color:#d4d4d4"> = </span><span style="color:#4ec9b0">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">apiKey</span><span style="color:#d4d4d4"> = API_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">secretKey</span><span style="color:#d4d4d4"> = API_secret,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">source</span><span style="color:#d4d4d4"> = API_source,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root</span><span style="color:#d4d4d4"> = API_root</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">response_marketdata_login</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xt_market_data.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(response_marketdata_login)</span><br>
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> __name__ == </span><span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(main())</span>
</div>

<div style="display:flex;justify-content:flex-end;margin-top:14px">
      <button onclick="(function(){var active=document.querySelector('[id^=co-code-]:not([style*=none])');if(!active)return;navigator.clipboard.writeText(active.innerText).then(function(){var b=document.getElementById('co-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="co-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    </div>
  </div>
</div>

<script>
function coShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('co-code-' + l).style.display = 'none';
    document.getElementById('co-tab-' + l).style.background = '#374151';
  });
  document.getElementById('co-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>

---

## Step 1 — Send Login Request

The user provides credentials:

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.8;margin:12px 0">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"secretKey"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"xxxxx"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"appKey"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"xxxxx"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"source"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"WebAPI"</span><br>
<span style="color:#ffd700">}</span>
</div>

---

## Step 2 — Server Validates Credentials

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:12px 0 24px">
  <div style="border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4">
    <div style="font-weight:700;color:#166534;font-size:13px;margin-bottom:4px">✔ App Key valid?</div>
    <p style="font-size:12px;color:#374151;margin:0">Checks if the App Key exists and is active.</p>
  </div>
  <div style="border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4">
    <div style="font-weight:700;color:#166534;font-size:13px;margin-bottom:4px">✔ Secret Key valid?</div>
    <p style="font-size:12px;color:#374151;margin:0">Matches the Secret Key against stored records.</p>
  </div>
  <div style="border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4">
    <div style="font-weight:700;color:#166534;font-size:13px;margin-bottom:4px">✔ Access rights?</div>
    <p style="font-size:12px;color:#374151;margin:0">Confirms the user has permission to access data.</p>
  </div>
</div>

---

## Step 3 — Token Generated & Returned

If validation succeeds, the server returns an access token:

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.8;margin:12px 0">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"token"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"eyJhbGciOiJIUzI1Ni..."</span><br>
<span style="color:#ffd700">}</span>
</div>

---

## Step 4 — Use Token in Future Requests

Include the token in every API request header:

<div style="background:#1e1e1e;border-radius:10px;padding:16px 20px;font-family:Consolas,monospace;font-size:14px;margin:12px 0">
<span style="color:#4fc3f7">Authorization</span><span style="color:#d4d4d4">: Bearer </span><span style="color:#ce9178">&lt;token&gt;</span>
</div>

---

## What is an Access Token?

<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:0;align-items:center;margin:16px 0 24px;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
  <div style="padding:16px 20px;background:#ffffff">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:6px">WITHOUT TOKEN</div>
    <code style="font-size:13px;color:#9a3412">Login every single API call</code>
  </div>
  <div style="padding:16px 10px;background:#f3f4f6;text-align:center;font-size:20px;color:#6b7280;align-self:stretch;display:flex;align-items:center">→</div>
  <div style="padding:16px 20px;background:#f0fdf4">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:6px">WITH TOKEN</div>
    <code style="font-size:13px;color:#166534">Login once → use token for all calls</code>
  </div>
</div>

---

## Authentication Failure Errors

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin:12px 0 24px">
  <div style="border:1.5px solid #fdba74;border-radius:10px;overflow:hidden">
    <div style="background:#ea580c;padding:10px 16px;color: #fff;font-weight:700;font-size:13px">Invalid Credentials</div>
    <div style="padding:12px 16px;background: #ffffff;font-family:Consolas,monospace;font-size:12px;color:#374151;line-height:1.8">
      <span style="color: #013a24">"type"</span>: <span style="color: #ce9178">"error"</span>,<br>
      <span style="color: #013b1b">"description"</span>: <span style="color: #ce9178">"Invalid App Key"</span>
    </div>
  </div>
  <div style="border:1.5px solid #fdba74;border-radius:10px;overflow:hidden">
    <div style="background:#ea580c;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Expired Token</div>
    <div style="padding:12px 16px;background:#ffffff;font-family:Consolas,monospace;font-size:12px;color:#374151;line-height:1.8">
      <span style="color:#013b1b">"type"</span>: <span style="color:#ce9178">"error"</span>,<br>
      <span style="color:#013b1b">"description"</span>: <span style="color:#ce9178">"Session Expired"</span>
    </div>
  </div>
  <div style="border:1.5px solid #fdba74;border-radius:10px;overflow:hidden">
    <div style="background:#ea580c;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Unauthorized Access</div>
    <div style="padding:12px 16px;background:#ffffff;font-family:Consolas,monospace;font-size:12px;color:#374151;line-height:1.8">
      <span style="color:#013b1b">"type"</span>: <span style="color:#ce9178">"error"</span>,<br>
      <span style="color:#013b1b">"description"</span>: <span style="color:#ce9178">"Authentication Failed"</span>
    </div>
  </div>
</div>

---

## APIs That Require Authentication

Authentication is the **first API call** before accessing any of these:

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin:12px 0 24px">
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:12px 16px;background:#ffffff;font-size:13px;font-weight:600;color:#c2410c"> Real-time Quotes</div>
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:12px 16px;background:#ffffff;font-size:13px;font-weight:600;color:#c2410c">OHLC Data</div>
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:12px 16px;background:#ffffff;font-size:13px;font-weight:600;color:#c2410c"> Market Depth</div>
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:12px 16px;background:#ffffff;font-size:13px;font-weight:600;color:#c2410c"> Instruments</div>
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:12px 16px;background:#ffffff;font-size:13px;font-weight:600;color:#c2410c"> WebSocket</div>
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:12px 16px;background:#ffffff;font-size:13px;font-weight:600;color:#c2410c"> Historical Data</div>
</div>

---

## Security Best Practices

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:12px 0 24px">
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px"> Keep Keys Private</div>
    <p style="font-size:13px;color:#374151;margin:0">Never expose App Key, Secret Key, or Access Token in public code or repositories.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px"> Use HTTPS</div>
    <p style="font-size:13px;color:#374151;margin:0">Always communicate through secure encrypted connections.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px"> Store Tokens Securely</div>
    <p style="font-size:13px;color:#374151;margin:0">Avoid storing tokens in client-side code or public repositories.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px"> Refresh Expired Sessions</div>
    <p style="font-size:13px;color:#374151;margin:0">Generate a new token when the current session expires.</p>
  </div>
</div>

---

## Real-Life Analogy

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:12px 0 24px">
  <div style="border:2px solid #fed7aa;border-radius:14px;overflow:hidden">
    <div style="background:#ff6b00;padding:12px 18px;color:#fff;font-weight:700;font-size:14px"> Office Building</div>
    <div style="padding:14px 18px;background:#ffffff">
      <ul style="margin:0;padding-left:18px;font-size:13px;color:#374151;line-height:2.2">
        <li>Building = Market Data API</li>
        <li>ID Card Check = Authentication</li>
        <li>Access Card = Token</li>
        <li>Office Entry = API Access</li>
      </ul>
    </div>
  </div>
  <div style="border:2px solid #bbf7d0;border-radius:14px;overflow:hidden">
    <div style="background: #16a34a;padding:12px 18px;color:#fff;font-weight:700;font-size:14px">✔ Key Takeaway</div>
    <div style="padding:14px 18px;background: #fff;font-size:13px;color:#374151;line-height:2">
      Without the ID card, you cannot enter the building.<br><br>
      Similarly, without authentication, you <strong>cannot access market data</strong>.
    </div>
  </div>
</div>