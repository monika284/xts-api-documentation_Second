<h1 id="what-is-cover-order" style="color:#ff6b00;font-weight:800;margin-bottom:6px">User</h1>


<p>The User APIs are used for authentication, account management, and retrieving user-specific information. These APIs provide secure access to the RMoney Interactive API and allow applications to manage user sessions and account details.</p>

### POST Login API

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

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"></script>

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
</div>

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