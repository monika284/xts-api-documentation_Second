<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>

<h1 id="what-is-cover-order" style="color:#ff6b00;font-weight:800;margin-bottom:6px">User</h1>


<p>The User APIs are used for authentication, account management, and retrieving user-specific information. These APIs provide secure access to the RMoney Interactive API and allow applications to manage user sessions and account details.</p>

<h3 id="POST-Login-API" style="color: #ff6b00;font-weight:800;margin-bottom:6px">POST Login API</h3>POST Login API

<p>The Login API is used to log in to the trading account. After successful login, it creates a session and allows the user to access Interactive API services.</p>

<p><strong>Example:</strong> User logs in before placing orders or checking portfolio details.</p>

### URL
<div class="aec-card">
  <div class="aec-top">
    <span class="aec-label">ENDPOINT</span>
    <span class="aec-badge-post">POST</span>
  </div>
  <div class="aec-url-row">
    <span class="aec-base">https://xts.rmoneyindia.co.in:3000</span><span class="aec-path">/interactive/user/session</span>
  </div>
  <div class="aec-footer">
      <button class="aec-copy-btn" onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/interactive/user/session');this.textContent='✔ Copied';setTimeout(()=>this.textContent='Copy URL',2000)">Copy URL</button>
  </div>
</div>
## Request Body Parameters

<table class="param-table">
    <thead>
        <tr>
            <th>Parameter Name</th>
            <th>Type</th>
            <th>Mandatory</th>
            <th>Description</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>secretKey</td>
            <td>
                SecretKey
                <span class="info-icon"></span>
            </td>
            <td><strong>Y</strong></td>
            <td>The predefined secret key assigned to the client.</td>
        </tr>

        <tr>
            <td>appKey</td>
            <td>
                AppKey
                <span class="info-icon"></span>
            </td>
            <td><strong>Y</strong></td>
            <td>The application key used for authentication.</td>
        </tr>

        <tr>
            <td>source</td>
            <td>
                String
                <span class="info-icon"></span>
            </td>  
            <td><strong>Y</strong></td>
            <td>Identifies the client application or platform from which the API request is sent. It helps the XTS server recognize the origin of the request and apply the appropriate permissions and validations.</td>
        </tr>
    </tbody>
</table>

## Request Body JSON
```json
{
  "secretKey": "Wsa5455#gT",
  "appKey": "6fa9csdfdas52caf2332c713",
  "source": "WebAPI"
}
```
## Response Body Parameters
<p>
The following parameters are returned in the response after a successful login request.
These values contain user information, authentication token, and other details required for subsequent API calls.
</p>
<table class="api-table">
<thead>
<tr>
<th>Parameter Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>enums</td>
<td>Object</td>
<td>Contains all enumeration values such as socketEvent, orderSide, positionSquareOffMode, productType, orderType, TimeInForce, etc.</td>
</tr>

<tr>
<td>clientCodes</td>
<td>Array</td>
<td>List of client codes associated with the user. For dealer accounts, multiple clients may be returned.</td>
</tr>

<tr>
<td>exchangeSegmentArray</td>
<td>Array</td>
<td>Contains exchange segments available to the user.</td>
</tr>

<tr>
<td>token</td>
<td>String</td>
<td>Authentication token used in all subsequent API requests until logout.</td>
</tr>

<tr>
<td>userID</td>
<td>String</td>
<td>Unique identifier of the logged-in user.</td>
</tr>

<tr>
<td>isInvestorClient</td>
<td>Boolean</td>
<td>Indicates whether the logged-in user is an investor client or a dealer.</td>
</tr>

<tr>
<td>isOneTouchUser</td>
<td>Boolean</td>
<td>Shows whether One Touch functionality is enabled for the user.</td>
</tr>

</tbody>
</table>
## Response Body JSON
<div class="response-container">

    <pre id="response-json" class="json-box"></pre>

    <div class="json-actions">
        <button onclick="copyJSON()">Copy</button>
        <button id="toggle-btn" onclick="toggleJSON()" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
    </div>

</div>

<script>
const responseData = {
  "type": "success",
  "code": "s-user-0001",
  "description": "Valid User.",
  "result": {
    "enums": {
      "socketEvent": [
        "joined","error","warning","success","order","trade","logout",
        "position","tradeConversion","marketStatusUpdate",
        "exchangeAdapterState","gttOrder","gttOrderRejection"
      ],
      "orderSide": ["BUY", "SELL"],
      "positionSqureOffMode": ["DayWise", "NetWise"],
      "positionSquareOffQuantityType": ["Percentage", "ExactQty"],
      "dayOrNet": ["DAY", "NET"]
    },
    "clientCodes": ["RM"],
    "userID": "RM",
    "isInvestorClient": true,
    "isOneTouchUser": false
  }
};

const _rjEl = document.getElementById("response-json");
_rjEl.textContent = JSON.stringify(responseData, null, 2);
_rjEl.classList.add("language-json");
hljs.highlightElement(_rjEl);

function copyJSON() {
    navigator.clipboard.writeText(_rjEl.innerText);
    alert("Copied!");
}

function toggleJSON() {
    const btn = document.getElementById("toggle-btn");
    if (_rjEl.style.maxHeight === "none") {
        _rjEl.style.maxHeight = "300px";
        btn.textContent = "Show Full";
    } else {
        _rjEl.style.maxHeight = "none";
        btn.textContent = "Show Less";
    }
}
</script>
## Code Example

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="ucShowCode('curl',this)" id="uc-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="ucShowCode('python',this)" id="uc-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;" id="uc-ce-box">
    <div id="uc-code-curl">
<span style="color:#d4d4d4">curl --location </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/user/session'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178">'{"secretKey":"Doqg107#6V","appKey":"5a75a8676cabe678"}'</span>
    </div>
<div id="uc-code-python" style="display:none">
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
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> __name__ == </span><span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(main())</span>
</div>  
    </div>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=uc-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('uc-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="uc-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>  </div>

<script>
function ucShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('uc-code-' + l).style.display = 'none';
    document.getElementById('uc-tab-' + l).style.background = '#374151';
  });
  document.getElementById('uc-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>
---
<h3 id="Session-Logout" style="color: #ff6b00;font-weight:800;margin-bottom:6px">Session Logout (DELETE)</h3>
 

<p>This call invalidates the session token and terminates the API session. After this, the user must go through the login flow again and retrieve a new session token from the login response before performing further activities. This does not log the user out of the XTS TWS application.</p>

### URL
<div class="aec-card">
  <div class="aec-top">
    <span class="aec-label">ENDPOINT</span>
    <span class="aec-badge-delete">DELETE</span>
  </div>
  <div class="aec-url-row">
    <span class="aec-base">https://xts.rmoneyindia.co.in:3000</span><span class="aec-path">/interactive/user/session</span>
  </div>
  <div class="aec-footer">
      <button class="aec-copy-btn" onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/interactive/user/session');this.textContent='✔ Copied';setTimeout(()=>this.textContent='Copy URL',2000)">Copy URL</button>
  </div>
</div>

## Response Body Parameters
<div class="response-container">

    <pre id="response-json-logout" class="json-box"></pre>

    <div class="json-actions">
        <button onclick="copyJSONLogout()">Copy</button>
        <button id="toggle-btn-logout" onclick="toggleJSONLogout()" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
    </div>

</div>

<script>
const logoutResponseData = {
  "type": "success",
  "code": "s-user-0001",
  "description": "successfully logout from all API.",
  "result": ""
};

const _rjLogoutEl = document.getElementById("response-json-logout");
_rjLogoutEl.textContent = JSON.stringify(logoutResponseData, null, 2);
_rjLogoutEl.classList.add("language-json");
hljs.highlightElement(_rjLogoutEl);

function copyJSONLogout() {
    navigator.clipboard.writeText(_rjLogoutEl.innerText);
    alert("Copied!");
}

function toggleJSONLogout() {
    const btn = document.getElementById("toggle-btn-logout");
    if (_rjLogoutEl.style.maxHeight === "none") {
        _rjLogoutEl.style.maxHeight = "300px";
        btn.textContent = "Show Full";
    } else {
        _rjLogoutEl.style.maxHeight = "none";
        btn.textContent = "Show Less";
    }
}
</script>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Code Examples</h3>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="logoutShowCode('curl',this)" id="logout-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="logoutShowCode('python',this)" id="logout-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="logout-ce-box">
    <div id="logout-code-curl">
<span style="color:#d4d4d4">curl --location --request DELETE </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span>
    </div>
    <div id="logout-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/user/session"</span><br>
<br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"xxxxxx"</span><br>
<span style="color:#d4d4d4">}</span><br>
<br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = requests.</span><span style="color:#dcdcaa">delete</span><span style="color:#d4d4d4">(url, headers=headers)</span><br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(response.text)</span>
    </div>
    <div id="logout-code-go" style="display:none">
<span style="color:#c586c0">package</span><span style="color:#d4d4d4"> main</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> (</span><span style="color:#ce9178">"fmt"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"net/http"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"io/ioutil"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">func</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">() {</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">, _ := http.</span><span style="color:#dcdcaa">NewRequest</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"DELETE"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder"</span><span style="color:#d4d4d4">, </span><span style="color:#569cd6">nil</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">.Header.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">res</span><span style="color:#d4d4d4">, _ := (&amp;http.Client{}).</span><span style="color:#dcdcaa">Do</span><span style="color:#d4d4d4">(req); </span><span style="color:#c586c0">defer</span><span style="color:#d4d4d4"> res.Body.</span><span style="color:#dcdcaa">Close</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">b</span><span style="color:#d4d4d4">, _ := ioutil.</span><span style="color:#dcdcaa">ReadAll</span><span style="color:#d4d4d4">(res.Body); fmt.</span><span style="color:#dcdcaa">Println</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">(b))<br>}</span>
    </div>
    <div id="logout-code-nodejs" style="display:none">
<span style="color:#c586c0">const</span><span style="color:#d4d4d4"> axios = </span><span style="color:#dcdcaa">require</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'axios'</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#dcdcaa">axios</span><span style="color:#d4d4d4">({method:</span><span style="color:#ce9178">'delete'</span><span style="color:#d4d4d4">,url:</span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder'</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4">:{</span><span style="color:#ce9178">'Authorization'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'xxxxxx'</span><span style="color:#d4d4d4">},</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">params</span><span style="color:#d4d4d4">:{clientID:</span><span style="color:#ce9178">'RM'</span><span style="color:#d4d4d4">,appOrderID:</span><span style="color:#ce9178">'1343000794'</span><span style="color:#d4d4d4">,exchangeSegment:</span><span style="color:#ce9178">'NSECM'</span><span style="color:#d4d4d4">,exchangeInstrumentID:</span><span style="color:#ce9178">'2885'</span><span style="color:#d4d4d4">}})</span><br>
<span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">then</span><span style="color:#d4d4d4">(r=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(r.data)).</span><span style="color:#dcdcaa">catch</span><span style="color:#d4d4d4">(e=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(e));</span>
    </div>
    <div id="logout-code-csharp" style="display:none">
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> HttpClient();</span><br>
<span style="color:#d4d4d4">client.DefaultRequestHeaders.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> response = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> client.</span><span style="color:#dcdcaa">DeleteAsync</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder?clientID=RM&amp;appOrderID=1343000794&amp;exchangeSegment=NSECM&amp;exchangeInstrumentID=2885"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#d4d4d4">Console.</span><span style="color:#dcdcaa">WriteLine</span><span style="color:#d4d4d4">(</span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> response.Content.</span><span style="color:#dcdcaa">ReadAsStringAsync</span><span style="color:#d4d4d4">());</span>
    </div>
    <div id="logout-code-java" style="display:none">
<span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> </span><span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#4ec9b0">Request</span><span style="color:#d4d4d4"> req = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> Request.</span><span style="color:#4ec9b0">Builder</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">url</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder?clientID=RM&amp;appOrderID=1343000794&amp;exchangeSegment=NSECM&amp;exchangeInstrumentID=2885"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">delete</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">addHeader</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">build</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#d4d4d4">System.out.</span><span style="color:#dcdcaa">println</span><span style="color:#d4d4d4">(client.</span><span style="color:#dcdcaa">newCall</span><span style="color:#d4d4d4">(req).</span><span style="color:#dcdcaa">execute</span><span style="color:#d4d4d4">().body().</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">());</span>
    </div>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=logout-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('logout-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="logout-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('logout-ce-box');var btn=document.getElementById('logout-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="logout-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<script>
function logoutShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('logout-code-' + l).style.display = 'none';
    document.getElementById('logout-tab-' + l).style.background = '#374151';
  });
  document.getElementById('logout-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>

---

<h3 id="hostlookup" style="color: #ff6b00;font-weight:800;margin-bottom:6px">HostLookUP</h3>
<p>The API consumer must first send an <strong>HTTP POST</strong> request to the HostLookUp endpoint with the predefined <strong>access password</strong> and <strong>version</strong>.</p>

<ul>
<li>If the provided access password and version are valid, the consumer will receive a UniqueKey and ConnectionString in the response.</li>
<li>This initial request to the HostLookUp service is required to obtain the UniqueKey and ConnectionString of the Interactive API server, use these values for all subsequent connections.</li>
</ul>

### URL
<div class="aec-card">
  <div class="aec-top">
    <span class="aec-label">ENDPOINT</span>
    <span class="aec-badge-post">POST</span>
  </div>
  <div class="aec-url-row">
    <span class="aec-base">https://xts.rmoneyindia.co.in:3000</span><span class="aec-path">/hostlookup</span>
  </div>
  <div class="aec-footer">
      <button class="aec-copy-btn" onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/hostlookup');this.textContent='✔ Copied';setTimeout(()=>this.textContent='Copy URL',2000)">Copy URL</button>
  </div>
</div>

## Request Body Parameters

<table class="param-table">
    <thead>
        <tr>
            <th>Parameter Name</th>
            <th>Type</th>
            <th>Mandatory</th>
            <th>Description</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>AccessPassword</td>
            <td>
                AccessPassword
                <span class="info-icon"></span>
            </td>
            <td><strong>Y</strong></td>
            <td>The UniqueKey is generated by the server during the HostLookUp process.</td>
        </tr>

        <tr>
            <td>Version</td>
            <td>
                Version
                <span class="info-icon"></span>
            </td>
            <td><strong>Y</strong></td>
            <td>Api Version number of the server.</td>
        </tr>
    </tbody>
</table>

## Request Body JSON
```json
{
  "AccessPassword": "2021HostLookUpAccess",
  "version": "interactive_1.0.1"
}
```
## Response Body Parameters
<p>
The following parameters are returned in the response after a successful HostLookUp request.
These values contain the UniqueKey and ConnectionString required to connect to the Interactive API server.
</p>
<table class="api-table">
<thead>
<tr>
<th>Parameter Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>

<tbody>
<tr>
<td>uniqueKey</td>
<td>UniqueKey</td>
<td>The UniqueKey is generated by the server during the HostLookUp process.</td>
</tr>

<tr>
<td>connectionString</td>
<td>ConnectionString</td>
<td>IP address of the server to which the client needs to connect.</td>
</tr>

<tr>
<td>timeStamp</td>
<td>Timestamps</td>
<td>Timestamp of the server when the UniqueKey is returned to the user.</td>
</tr>

<tr>
<td>remarks</td>
<td>Remarks</td>
<td>Any remarks added by the server in the HostLookUp API.</td>
</tr>

</tbody>
</table>
## Response Body JSON
<div class="response-container">

    <pre id="response-json-hostlookup" class="json-box"></pre>

    <div class="json-actions">
        <button onclick="copyJSONHostlookup()">Copy</button>
        <button id="toggle-btn-hostlookup" onclick="toggleJSONHostlookup()" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
    </div>

</div>

<script>
const hostlookupResponseData = {
  "type": "success",
  "code": "hostlookup",
  "description": "Hostlookup successful",
  "result": {
    "uniqueKey": "O+UT8gtksswxyU0gRFCh2vsqSM2Ft+qVV",
    "connectionString": "https://xts.rmoneyindia.co.in:3000/interactive",
    "timeStamp": "0",
    "remarks": ""
  }
};

const _rjHostlookupEl = document.getElementById("response-json-hostlookup");
_rjHostlookupEl.textContent = JSON.stringify(hostlookupResponseData, null, 2);
_rjHostlookupEl.classList.add("language-json");
hljs.highlightElement(_rjHostlookupEl);

function copyJSONHostlookup() {
    navigator.clipboard.writeText(_rjHostlookupEl.innerText);
    alert("Copied!");
}

function toggleJSONHostlookup() {
    const btn = document.getElementById("toggle-btn-hostlookup");
    if (_rjHostlookupEl.style.maxHeight === "none") {
        _rjHostlookupEl.style.maxHeight = "300px";
        btn.textContent = "Show Full";
    } else {
        _rjHostlookupEl.style.maxHeight = "none";
        btn.textContent = "Show Less";
    }
}
</script>

## Response Body JSON (Failure)
<div class="response-container">

    <pre id="response-json-hostlookup-fail" class="json-box"></pre>

    <div class="json-actions">
        <button onclick="copyJSONHostlookupFail()">Copy</button>
        <button id="toggle-btn-hostlookup-fail" onclick="toggleJSONHostlookupFail()" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
    </div>

</div>

<script>
const hostlookupFailData = {
  "type": "string",
  "code": "string",
  "description": "Reason for failed reques"
};

const _rjHostlookupFailEl = document.getElementById("response-json-hostlookup-fail");
_rjHostlookupFailEl.textContent = JSON.stringify(hostlookupFailData, null, 2);
_rjHostlookupFailEl.classList.add("language-json");
hljs.highlightElement(_rjHostlookupFailEl);

function copyJSONHostlookupFail() {
    navigator.clipboard.writeText(_rjHostlookupFailEl.innerText);
    alert("Copied!");
}

function toggleJSONHostlookupFail() {
    const btn = document.getElementById("toggle-btn-hostlookup-fail");
    if (_rjHostlookupFailEl.style.maxHeight === "none") {
        _rjHostlookupFailEl.style.maxHeight = "300px";
        btn.textContent = "Show Full";
    } else {
        _rjHostlookupFailEl.style.maxHeight = "none";
        btn.textContent = "Show Less";
    }
}
</script>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Code Examples</h3>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="hluShowCode('curl',this)" id="hlu-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="hluShowCode('python',this)" id="hlu-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="hlu-ce-box">
    <div id="hlu-code-curl">
<span style="color:#d4d4d4">curl --location --request DELETE </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span>
    </div>
    <div id="hlu-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> json</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/hostlookup"</span><br>
<br>
<span style="color:#9cdcfe">payload</span><span style="color:#d4d4d4"> = json.</span><span style="color:#dcdcaa">dumps</span><span style="color:#d4d4d4">({</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"AccessPassword"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"2021HostLookUpAccess"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"version"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"interactive_1.0.1"</span><br>
<span style="color:#d4d4d4">})</span><br>
<br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"Content-Type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"application/json"</span><br>
<span style="color:#d4d4d4">}</span><br>
<br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = requests.</span><span style="color:#dcdcaa">post</span><span style="color:#d4d4d4">(url, headers=headers, data=payload)</span><br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(response.text)</span>
    </div>
    <div id="hlu-code-go" style="display:none">
<span style="color:#c586c0">package</span><span style="color:#d4d4d4"> main</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> (</span><span style="color:#ce9178">"fmt"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"net/http"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"io/ioutil"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">func</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">() {</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">, _ := http.</span><span style="color:#dcdcaa">NewRequest</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"DELETE"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder"</span><span style="color:#d4d4d4">, </span><span style="color:#569cd6">nil</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">.Header.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">res</span><span style="color:#d4d4d4">, _ := (&amp;http.Client{}).</span><span style="color:#dcdcaa">Do</span><span style="color:#d4d4d4">(req); </span><span style="color:#c586c0">defer</span><span style="color:#d4d4d4"> res.Body.</span><span style="color:#dcdcaa">Close</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">b</span><span style="color:#d4d4d4">, _ := ioutil.</span><span style="color:#dcdcaa">ReadAll</span><span style="color:#d4d4d4">(res.Body); fmt.</span><span style="color:#dcdcaa">Println</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">(b))<br>}</span>
    </div>
    <div id="hlu-code-nodejs" style="display:none">
<span style="color:#c586c0">const</span><span style="color:#d4d4d4"> axios = </span><span style="color:#dcdcaa">require</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'axios'</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#dcdcaa">axios</span><span style="color:#d4d4d4">({method:</span><span style="color:#ce9178">'delete'</span><span style="color:#d4d4d4">,url:</span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder'</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4">:{</span><span style="color:#ce9178">'Authorization'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'xxxxxx'</span><span style="color:#d4d4d4">},</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">params</span><span style="color:#d4d4d4">:{clientID:</span><span style="color:#ce9178">'RM'</span><span style="color:#d4d4d4">,appOrderID:</span><span style="color:#ce9178">'1343000794'</span><span style="color:#d4d4d4">,exchangeSegment:</span><span style="color:#ce9178">'NSECM'</span><span style="color:#d4d4d4">,exchangeInstrumentID:</span><span style="color:#ce9178">'2885'</span><span style="color:#d4d4d4">}})</span><br>
<span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">then</span><span style="color:#d4d4d4">(r=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(r.data)).</span><span style="color:#dcdcaa">catch</span><span style="color:#d4d4d4">(e=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(e));</span>
    </div>
    <div id="hlu-code-csharp" style="display:none">
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> HttpClient();</span><br>
<span style="color:#d4d4d4">client.DefaultRequestHeaders.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> response = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> client.</span><span style="color:#dcdcaa">DeleteAsync</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder?clientID=RM&amp;appOrderID=1343000794&amp;exchangeSegment=NSECM&amp;exchangeInstrumentID=2885"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#d4d4d4">Console.</span><span style="color:#dcdcaa">WriteLine</span><span style="color:#d4d4d4">(</span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> response.Content.</span><span style="color:#dcdcaa">ReadAsStringAsync</span><span style="color:#d4d4d4">());</span>
    </div>
    <div id="hlu-code-java" style="display:none">
<span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> </span><span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#4ec9b0">Request</span><span style="color:#d4d4d4"> req = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> Request.</span><span style="color:#4ec9b0">Builder</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">url</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder?clientID=RM&amp;appOrderID=1343000794&amp;exchangeSegment=NSECM&amp;exchangeInstrumentID=2885"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">delete</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">addHeader</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">build</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#d4d4d4">System.out.</span><span style="color:#dcdcaa">println</span><span style="color:#d4d4d4">(client.</span><span style="color:#dcdcaa">newCall</span><span style="color:#d4d4d4">(req).</span><span style="color:#dcdcaa">execute</span><span style="color:#d4d4d4">().body().</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">());</span>
    </div>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=hlu-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('hlu-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="hlu-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('hlu-ce-box');var btn=document.getElementById('hlu-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="hlu-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<script>
function hluShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('hlu-code-' + l).style.display = 'none';
    document.getElementById('hlu-tab-' + l).style.background = '#374151';
  });
  document.getElementById('hlu-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>
---

<h3 id="Get-Profile" style="color: #ff6b00;font-weight:800;margin-bottom:6px">Get Profile (GET)</h3>

<p>Using the session token, the user can access their profile stored with the broker. The profile can be retrieved at any point in time.</p>

### URL
<div class="aec-card">
  <div class="aec-top">
    <span class="aec-label">ENDPOINT</span>
    <span class="aec-badge-get">GET</span>
  </div>
  <div class="aec-url-row">
    <span class="aec-base">https://xts.rmoneyindia.co.in:3000</span><span class="aec-path">/interactive/user/profile?clientID=SYMP</span>
  </div>
  <div class="aec-footer">
      <button class="aec-copy-btn" onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/interactive/user/profile?clientID=SYMP');this.textContent='✔ Copied';setTimeout(()=>this.textContent='Copy URL',2000)">Copy URL</button>
  </div>
</div>

## Request Body Parameters

<table class="param-table">
    <thead>
        <tr>
            <th>Parameter Name</th>
            <th>Type</th>
            <th>Mandatory</th>
            <th>Description</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>clientID</td>
            <td>
                ClientID
                <span class="info-icon"></span>
            </td>
            <td>N</td>
            <td>Client ID Mandatory in case of Dealer</td>
        </tr>
    </tbody>
</table>

## Response Body Parameters

<table class="api-table">
<thead>
<tr>
<th>Parameter Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>

<tbody>
<tr><td>ClientId</td><td>ClientID</td><td>User login ID.</td></tr>
<tr><td>ClientName</td><td>ClientName</td><td>Registered name of the client.</td></tr>
<tr><td>EmailId</td><td>EmailId</td><td>Registered email address of the client.</td></tr>
<tr><td>MobileNo</td><td>MobileNo</td><td>Registered mobile number of the client.</td></tr>
<tr><td>PAN</td><td>PAN</td><td>Client's Permanent Account Number (for compliance/KYC).</td></tr>
<tr><td>IsClientAutoSquareoff</td><td>IncludeInAutoSquareoffBlocked</td><td>Whether auto square-off is blocked for the client.</td></tr>
<tr><td>IncludeInAutoSquareoffBlocked</td><td>IncludeInAutoSquareoffBlocked</td><td>Whether auto square-off is blocked for the client.</td></tr>
<tr><td>IsProClient</td><td>IsProClient</td><td>Indicates if the client is a proprietary client.</td></tr>
<tr><td>IsInvestorClient</td><td>IsInvestorClient</td><td>Indicates if the client is categorized as an investor client.</td></tr>
<tr><td>ResidentialAddress</td><td>ResidentialAddress</td><td>Client's registered residential address.</td></tr>
<tr><td>OfficeAddress</td><td>OfficeAddress</td><td>Client's registered office address.</td></tr>
<tr><td>ClientBankInfoList</td><td>ClientBankInfoList</td><td>Bank account details linked to the client.</td></tr>
<tr><td>Clientid</td><td>ClientID</td><td>User login ID.</td></tr>
<tr><td>AccountNumber</td><td>AccountNumber</td><td>Bank account number.</td></tr>
<tr><td>AccountType</td><td>AccountType</td><td>Type of account ("Savings", "Current", etc.).</td></tr>
<tr><td>BankName</td><td>BankName</td><td>Name of the bank.</td></tr>
<tr><td>BankBranchName</td><td>BankBranchName</td><td>Bank branch name.</td></tr>
<tr><td>BankCity</td><td>BankCity</td><td>City where the bank branch is located.</td></tr>
<tr><td>CustomerId</td><td>CustomerId</td><td>Customer identifier as provided by the bank.</td></tr>
<tr><td>BankCityPincode</td><td>BankCityPincode</td><td>Pincode of the bank's city.</td></tr>
<tr><td>BankIFSCCode</td><td>BankIFSCCode</td><td>IFSC code for the bank branch.</td></tr>
<tr><td>ClientExchangeDetailsList</td><td>ClientExchangeDetailsList</td><td>Exchange-specific details mapped to the client. Each exchange (e.g., NSECM, BSEFO, etc.) will appear as a nested object.</td></tr>
<tr><td>Clientid</td><td>ClientID</td><td>User login ID.</td></tr>
<tr><td>ExchangeSegNumber</td><td>ExchangeSegNumber</td><td>Segment number used internally to identify the exchange segment.</td></tr>
<tr><td>Enabled</td><td>Enabled</td><td>Whether this exchange segment is active for the client.</td></tr>
<tr><td>ParticipantCode</td><td>ParticipantCode</td><td>Participant/broker code provided by the exchange.</td></tr>
</tbody>
</table>

## Response Body JSON
<div class="response-container">

    <pre id="response-json-profile" class="json-box"></pre>

    <div class="json-actions">
        <button onclick="copyJSONProfile()">Copy</button>
        <button id="toggle-btn-profile" onclick="toggleJSONProfile()" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
    </div>

</div>

<script>
const profileResponseData = {
  "type": "success",
  "code": "s-user-0001",
  "description": "User profile",
  "result": {
    "ClientId": "SYMP1",
    "ClientName": "SYMP",
    "EmailId": "symp.t@symphonyfintech.com",
    "MobileNo": "5555587878",
    "PAN": "HSDIG23423"
  }
};

const _rjProfileEl = document.getElementById("response-json-profile");
_rjProfileEl.textContent = JSON.stringify(profileResponseData, null, 2);
_rjProfileEl.classList.add("language-json");
hljs.highlightElement(_rjProfileEl);

function copyJSONProfile() {
    navigator.clipboard.writeText(_rjProfileEl.innerText);
    alert("Copied!");
}

function toggleJSONProfile() {
    const btn = document.getElementById("toggle-btn-profile");
    if (_rjProfileEl.style.maxHeight === "none") {
        _rjProfileEl.style.maxHeight = "300px";
        btn.textContent = "Show Full";
    } else {
        _rjProfileEl.style.maxHeight = "none";
        btn.textContent = "Show Less";
    }
}
</script>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Code Examples</h3>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="profileShowCode('curl',this)" id="profile-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="profileShowCode('python',this)" id="profile-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="profile-ce-box">
    <div id="profile-code-curl">
<span style="color:#d4d4d4">curl --location --request DELETE </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span>
    </div>
    <div id="profile-code-python" style="display:none">
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
<span style="color:#9cdcfe">resp</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xt_interactive_data.</span><span style="color:#dcdcaa">get_profile</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(resp)</span><br>
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> __name__ == </span><span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(main())</span>
    </div>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=profile-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('profile-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="profile-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('profile-ce-box');var btn=document.getElementById('profile-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="profile-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<script>
function profileShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('profile-code-' + l).style.display = 'none';
    document.getElementById('profile-tab-' + l).style.background = '#374151';
  });
  document.getElementById('profile-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>


---

<h3 id="Brokerage" style="color: #ff6b00;font-weight:800;margin-bottom:6px">Brokerage (POST)</h3>

<p>Using the session token, the user can access their profile stored with the broker. The profile can be retrieved at any point in time.</p>

### URL
<div class="aec-card">
  <div class="aec-top">
    <span class="aec-label">ENDPOINT</span>
    <span class="aec-badge-post">POST</span>
  </div>
  <div class="aec-url-row">
    <span class="aec-base">https://xts.rmoneyindia.co.in:3000</span><span class="aec-path">/interactive/user/calculatebrokerage</span>
  </div>
  <div class="aec-footer">
      <button class="aec-copy-btn" onclick="navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/interactive/user/calculatebrokerage');this.textContent='✔ Copied';setTimeout(()=>this.textContent='Copy URL',2000)">Copy URL</button>
  </div>
</div>

## Request Body Parameters

<table class="param-table">
    <thead>
        <tr>
            <th>Parameter Name</th>
            <th>Type</th>
            <th>Mandatory</th>
            <th>Description</th>
        </tr>
    </thead>

    <tbody>
        <tr><td>clientID</td><td>ClientID<span class="info-icon"></span></td><td><strong>Y</strong></td><td>CLIENT ID</td></tr>
        <tr><td>exchangeSegment</td><td>ExchangeSegment<span class="info-icon"></span></td><td><strong>Y</strong></td><td>Exchange Scrip code or Symbol Token is unique identifier</td></tr>
        <tr><td>exchangeInstrumentID</td><td>ExchangeInstrumentID<span class="info-icon"></span></td><td><strong>Y</strong></td><td>Exchange Scrip code or Symbol Token is unique identifier</td></tr>
        <tr><td>productType</td><td>ProductType<span class="info-icon"></span></td><td><strong>Y</strong></td><td>ProductType</td></tr>
        <tr><td>orderSide</td><td>OrderSide<span class="info-icon"></span></td><td><strong>Y</strong></td><td>OrderSide</td></tr>
        <tr><td>orderQty</td><td>OrderQuantity<span class="info-icon"></span></td><td><strong>Y</strong></td><td>Quantity to transact. In terms of Lots</td></tr>
        <tr><td>orderPrice</td><td>Price<span class="info-icon"></span></td><td><strong>Y</strong></td><td>The price to execute the order at</td></tr>
    </tbody>
</table>

## Request Body JSON
```json
{
  "clientID": "SYMP",
  "brokerageOrderInformation": [
    {
      "exchangeSegment": 2,
      "exchangeInstrumentID": 37054,
      "productType": "NRML",
      "orderSide": "BUY",
      "orderQty": 75,
      "orderPrice": 25000
    }
  ]
}
```

## Response Body Parameters

<table class="api-table">
<thead>
<tr>
<th>Parameter Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>

<tbody>
<tr><td>AppOrderID</td><td>AppOrderID</td><td>Unique order ID</td></tr>
<tr><td>OrderUniqueIdentifier</td><td>OrderUniqueIdentifier</td><td>Echo back to identify order</td></tr>
<tr><td>ClientID</td><td>ClientID</td><td>ClientID which is sent in request body</td></tr>
<tr><td>Brokerage</td><td>Brokerage</td><td>Brokerage value</td></tr>
<tr><td>STTOrCTT</td><td>STTOrCTT</td><td>Securities Transaction Tax / CTT</td></tr>
<tr><td>ExchangeTurnoverCharges</td><td>ExchangeTurnoverCharges</td><td>Exchange turnover fees</td></tr>
<tr><td>ExchangeCharges</td><td>ExchangeCharges</td><td>Exchange transaction charges</td></tr>
<tr><td>GST</td><td>GST</td><td>Goods and Services Tax</td></tr>
<tr><td>SebiCharges</td><td>SebiCharges</td><td>SEBI regulatory charges</td></tr>
<tr><td>StampDuty</td><td>StampDuty</td><td>Stamp duty on trade</td></tr>
<tr><td>ClearingCharges</td><td>ClearingCharges</td><td>Clearing corporation fees</td></tr>
<tr><td>DPCharges</td><td>DPCharges</td><td>Depository participant charges</td></tr>
<tr><td>Total</td><td>Total</td><td>Total charges</td></tr>
</tbody>
</table>

## Response Body JSON
<div class="response-container">

    <pre id="response-json-brokerage" class="json-box"></pre>

    <div class="json-actions">
        <button onclick="copyJSONBrokerage()">Copy</button>
        <button id="toggle-btn-brokerage" onclick="toggleJSONBrokerage()" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
    </div>

</div>

<script>
const brokerageResponseData = {
  "type": "success",
  "code": "s-user-0003",
  "description": "OK",
  "result": {
    "AppOrderID": 0,
    "OrderUniqueIdentifier": "",
    "ClientID": "SYMP",
    "Brokerage": 0,
    "STTOrCTT": 0,
    "ExchangeTurnoverCharges": 18.75,
    "ExchangeCharges": 18.75,
    "GST": 47.5875,
    "SebiCharges": 1.875,
    "StampDuty": 93.75,
    "ClearingCharges": 18.75,
    "DPCharges": 18.75,
    "Total": 187924.4625
  }
};

const _rjBrokerageEl = document.getElementById("response-json-brokerage");
_rjBrokerageEl.textContent = JSON.stringify(brokerageResponseData, null, 2);
_rjBrokerageEl.classList.add("language-json");
hljs.highlightElement(_rjBrokerageEl);

function copyJSONBrokerage() {
    navigator.clipboard.writeText(_rjBrokerageEl.innerText);
    alert("Copied!");
}

function toggleJSONBrokerage() {
    const btn = document.getElementById("toggle-btn-brokerage");
    if (_rjBrokerageEl.style.maxHeight === "none") {
        _rjBrokerageEl.style.maxHeight = "300px";
        btn.textContent = "Show Full";
    } else {
        _rjBrokerageEl.style.maxHeight = "none";
        btn.textContent = "Show Less";
    }
}
</script>

<h3 style="color:#1e293b;font-weight:700;margin:24px 0 10px;font-size:15px">Code Examples</h3>

<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="brokerageShowCode('curl',this)" id="brokerage-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="brokerageShowCode('python',this)" id="brokerage-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>
  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;max-height:320px;overflow:hidden;transition:max-height .4s ease" id="brokerage-ce-box">
    <div id="brokerage-code-curl">
<span style="color:#d4d4d4">curl --location --request DELETE </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: xxxxxx'</span>
    </div>
    <div id="brokerage-code-python" style="display:none">
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> requests</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> json</span><br>
<br>
<span style="color:#9cdcfe">url</span><span style="color:#d4d4d4"> = </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/user/calculatebrokerage"</span><br>
<br>
<span style="color:#9cdcfe">payload</span><span style="color:#d4d4d4"> = json.</span><span style="color:#dcdcaa">dumps</span><span style="color:#d4d4d4">({</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"clientID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"SYMP"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"brokerageOrderInformation"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">47664</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"productType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NRML"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderSide"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BUY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">75</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"orderPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">123</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">}</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">]</span><br>
<span style="color:#d4d4d4">})</span><br>
<br>
<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4"> = {</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"Content-Type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"application/json"</span><br>
<span style="color:#d4d4d4">}</span><br>
<br>
<span style="color:#9cdcfe">response</span><span style="color:#d4d4d4"> = requests.</span><span style="color:#dcdcaa">post</span><span style="color:#d4d4d4">(url, headers=headers, data=payload)</span><br>
<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(response.text)</span>
    </div>
    <div id="brokerage-code-go" style="display:none">
<span style="color:#c586c0">package</span><span style="color:#d4d4d4"> main</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> (</span><span style="color:#ce9178">"fmt"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"net/http"</span><span style="color:#d4d4d4">;</span><span style="color:#ce9178">"io/ioutil"</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">func</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">() {</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">, _ := http.</span><span style="color:#dcdcaa">NewRequest</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"DELETE"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder"</span><span style="color:#d4d4d4">, </span><span style="color:#569cd6">nil</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">req</span><span style="color:#d4d4d4">.Header.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">res</span><span style="color:#d4d4d4">, _ := (&amp;http.Client{}).</span><span style="color:#dcdcaa">Do</span><span style="color:#d4d4d4">(req); </span><span style="color:#c586c0">defer</span><span style="color:#d4d4d4"> res.Body.</span><span style="color:#dcdcaa">Close</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">b</span><span style="color:#d4d4d4">, _ := ioutil.</span><span style="color:#dcdcaa">ReadAll</span><span style="color:#d4d4d4">(res.Body); fmt.</span><span style="color:#dcdcaa">Println</span><span style="color:#d4d4d4">(</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">(b))<br>}</span>
    </div>
    <div id="brokerage-code-nodejs" style="display:none">
<span style="color:#c586c0">const</span><span style="color:#d4d4d4"> axios = </span><span style="color:#dcdcaa">require</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">'axios'</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#dcdcaa">axios</span><span style="color:#d4d4d4">({method:</span><span style="color:#ce9178">'delete'</span><span style="color:#d4d4d4">,url:</span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder'</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">headers</span><span style="color:#d4d4d4">:{</span><span style="color:#ce9178">'Authorization'</span><span style="color:#d4d4d4">:</span><span style="color:#ce9178">'xxxxxx'</span><span style="color:#d4d4d4">},</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">params</span><span style="color:#d4d4d4">:{clientID:</span><span style="color:#ce9178">'RM'</span><span style="color:#d4d4d4">,appOrderID:</span><span style="color:#ce9178">'1343000794'</span><span style="color:#d4d4d4">,exchangeSegment:</span><span style="color:#ce9178">'NSECM'</span><span style="color:#d4d4d4">,exchangeInstrumentID:</span><span style="color:#ce9178">'2885'</span><span style="color:#d4d4d4">}})</span><br>
<span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">then</span><span style="color:#d4d4d4">(r=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(r.data)).</span><span style="color:#dcdcaa">catch</span><span style="color:#d4d4d4">(e=>console.</span><span style="color:#dcdcaa">log</span><span style="color:#d4d4d4">(e));</span>
    </div>
    <div id="brokerage-code-csharp" style="display:none">
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> HttpClient();</span><br>
<span style="color:#d4d4d4">client.DefaultRequestHeaders.</span><span style="color:#dcdcaa">Add</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#c586c0">var</span><span style="color:#d4d4d4"> response = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> client.</span><span style="color:#dcdcaa">DeleteAsync</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder?clientID=RM&amp;appOrderID=1343000794&amp;exchangeSegment=NSECM&amp;exchangeInstrumentID=2885"</span><span style="color:#d4d4d4">);</span><br>
<span style="color:#d4d4d4">Console.</span><span style="color:#dcdcaa">WriteLine</span><span style="color:#d4d4d4">(</span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> response.Content.</span><span style="color:#dcdcaa">ReadAsStringAsync</span><span style="color:#d4d4d4">());</span>
    </div>
    <div id="brokerage-code-java" style="display:none">
<span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4"> client = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> </span><span style="color:#4ec9b0">OkHttpClient</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#4ec9b0">Request</span><span style="color:#d4d4d4"> req = </span><span style="color:#c586c0">new</span><span style="color:#d4d4d4"> Request.</span><span style="color:#4ec9b0">Builder</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">url</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000/interactive/orders/gttorder?clientID=RM&amp;appOrderID=1343000794&amp;exchangeSegment=NSECM&amp;exchangeInstrumentID=2885"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">delete</span><span style="color:#d4d4d4">().</span><span style="color:#dcdcaa">addHeader</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Authorization"</span><span style="color:#d4d4d4">,</span><span style="color:#ce9178">"xxxxxx"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">build</span><span style="color:#d4d4d4">();</span><br>
<span style="color:#d4d4d4">System.out.</span><span style="color:#dcdcaa">println</span><span style="color:#d4d4d4">(client.</span><span style="color:#dcdcaa">newCall</span><span style="color:#d4d4d4">(req).</span><span style="color:#dcdcaa">execute</span><span style="color:#d4d4d4">().body().</span><span style="color:#dcdcaa">string</span><span style="color:#d4d4d4">());</span>
    </div>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var a=document.querySelector('[id^=brokerage-code-]:not([style*=none])');if(!a)return;navigator.clipboard.writeText(a.innerText).then(function(){var b=document.getElementById('brokerage-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="brokerage-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(){var b=document.getElementById('brokerage-ce-box');var btn=document.getElementById('brokerage-ce-show');if(b.style.maxHeight==='none'){b.style.maxHeight='320px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})()" id="brokerage-ce-show" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
</div>

<script>
function brokerageShowCode(lang, btn) {
  ['curl','python'].forEach(function(l) {
    document.getElementById('brokerage-code-' + l).style.display = 'none';
    document.getElementById('brokerage-tab-' + l).style.background = '#374151';
  });
  document.getElementById('brokerage-code-' + lang).style.display = 'block';
  btn.style.background = 'linear-gradient(135deg,#ff7b00,#ff9500)';
}
</script>
