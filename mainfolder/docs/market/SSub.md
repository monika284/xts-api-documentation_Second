<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">Socket Subscription</h1>
<p class="iov-subtitle"><strong>Socket Subscription</strong> tells the Market Data server which instruments you want to track. After subscribing, live market updates for those instruments are automatically pushed to your application in real time.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Live updates</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div><span>Instrument tracking</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>No repeated requests</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Price streaming</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>Low latency</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg></div><span>Multi-instrument</span></div>
</div>

---

## How Subscription Works

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5z"/></svg></div><span>Connect &amp; Auth</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg></div><span>Send Subscription</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg></div><span>Server Registers</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Live Data Pushed</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></div><span>Unsubscribe</span></div>
</div>

---

## Information Required

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:2;margin:12px 0">
<span style="color:#9cdcfe">exchangeSegment</span><span style="color:#d4d4d4">      : </span><span style="color:#ce9178">"NSECM"</span><span style="color:#6a9955">&nbsp;&nbsp;// e.g. NSECM, NSEFO, BSECM</span><br>
<span style="color:#9cdcfe">exchangeInstrumentID</span><span style="color:#d4d4d4"> : </span><span style="color:#b5cea8">2885</span><span style="color:#6a9955">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// unique instrument identifier</span><br>
<span style="color:#9cdcfe">messageCode</span><span style="color:#d4d4d4">          : </span><span style="color:#b5cea8">1501</span><span style="color:#6a9955">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 1501=Touchline, 1502=Depth</span>
</div>

---

## Data Available Through Subscription

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px;margin:16px 0 24px">

  <div style="border:1.5px solid #fed7aa;border-radius:12px;overflow:hidden">
    <div style="background:#ff6b00;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Touchline Data</div>
    <div style="padding:14px 16px;background:#ffffff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Last Traded Price (LTP)</li>
        <li>Open / High / Low / Close</li>
        <li>Volume</li>
      </ul>
    </div>
  </div>

  <div style="border:1.5px solid #bfdbfe;border-radius:12px;overflow:hidden">
    <div style="background:#1d4ed8;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Market Depth Data</div>
    <div style="padding:14px 16px;background:#eff6ff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Best Buy Prices</li>
        <li>Best Sell Prices</li>
        <li>Bid &amp; Ask Quantities</li>
      </ul>
    </div>
  </div>

  <div style="border:1.5px solid #bbf7d0;border-radius:12px;overflow:hidden">
    <div style="background:#16a34a;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Index Data</div>
    <div style="padding:14px 16px;background:#f0fdf4">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Live Index Values</li>
        <li>Change</li>
        <li>Percentage Change</li>
      </ul>
    </div>
  </div>

  <div style="border:1.5px solid #e9d5ff;border-radius:12px;overflow:hidden">
    <div style="background:#7c3aed;padding:10px 16px;color:#fff;font-weight:700;font-size:13px">Trade Data</div>
    <div style="padding:14px 16px;background:#faf5ff">
      <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
        <li>Trade Price</li>
        <li>Trade Quantity</li>
        <li>Trade Time</li>
      </ul>
    </div>
  </div>

</div>

---

## Example Workflow

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:2.2;margin:12px 0">
<span style="color:#6a9955">// Step 1 — Connect to WebSocket server</span><br>
<span style="color:#4fc3f7">connect</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"wss://marketdata.server"</span><span style="color:#d4d4d4">, token)</span><br><br>
<span style="color:#6a9955">// Step 2 — Subscribe to RELIANCE and TCS</span><br>
<span style="color:#4fc3f7">subscribe</span><span style="color:#d4d4d4">({</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">instruments</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">{ </span><span style="color:#9cdcfe">exchangeSegment</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">exchangeInstrumentID</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4"> },</span>&nbsp;<span style="color:#6a9955">// RELIANCE</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">{ </span><span style="color:#9cdcfe">exchangeSegment</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">exchangeInstrumentID</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">11536</span><span style="color:#d4d4d4"> }</span>&nbsp;<span style="color:#6a9955">// TCS</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">],</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">messageCode</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1501</span><br>
<span style="color:#d4d4d4">})</span><br><br>
<span style="color:#6a9955">// Step 3 — Receive live updates automatically</span><br>
<span style="color:#dcdcaa">onData</span><span style="color:#d4d4d4">(event → process price update)</span><br><br>
<span style="color:#6a9955">// Step 4 — Add more instruments anytime</span><br>
<span style="color:#4fc3f7">subscribe</span><span style="color:#d4d4d4">([{ </span><span style="color:#9cdcfe">exchangeSegment</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSEFO"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">exchangeInstrumentID</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">35001</span><span style="color:#d4d4d4"> }])</span><br><br>
<span style="color:#6a9955">// Step 5 — Unsubscribe when no longer needed</span><br>
<span style="color:#4fc3f7">unsubscribe</span><span style="color:#d4d4d4">([</span><span style="color:#ce9178">"NSECM:2885"</span><span style="color:#d4d4d4">])</span>
</div>

---

## Benefits

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(175px,1fr));gap:12px;margin:12px 0 24px">
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Real-time Updates</div>
    <p style="font-size:12px;color:#374151;margin:0">Data pushed instantly on market change</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Low Latency</div>
    <p style="font-size:12px;color:#374151;margin:0">Minimal delay between event and delivery</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Reduced API Calls</div>
    <p style="font-size:12px;color:#374151;margin:0">No repeated polling for updates</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Efficient Bandwidth</div>
    <p style="font-size:12px;color:#374151;margin:0">Only changed data transmitted</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Better Trading UX</div>
    <p style="font-size:12px;color:#374151;margin:0">Smooth, responsive app experience</p>
  </div>
</div>

---

## Subscribe to Socket

<p>This API request is used to subscribe to market data over a WebSocket connection for specified exchange instruments and message codes provided in the request. Upon successful subscription, the user receives an acknowledgment response containing the latest quote data along with the remaining subscription count, which is AppKey-specific and configurable via the API dashboard. Once subscribed, real-time market data for the specified instrument(s) will be continuously streamed on the market data WebSocket.</p>

<p><strong>URL</strong></p>
<div style="display:flex;align-items:center;background:#f8f9fa;border:1px solid #dee2e6;border-radius:6px;padding:8px 14px;gap:10px;margin:6px 0 18px 0;">
  <span style="flex-shrink:0;background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:4px;padding:3px 10px;font-size:12px;font-weight:700;">PUT</span>
  <code style="flex:1;font-size:12px;color:#374151;word-break:break-all;">https://xts.rmoneyindia.co.in:3000/apimarketdata/instruments/subscription</code>
  <button onclick="var t=this;navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/apimarketdata/instruments/subscription').then(function(){t.innerHTML='&#10003; Copied!';setTimeout(function(){t.innerHTML='&#128203; Copy';},1500);});" style="flex-shrink:0;background:#1a73e8;color:#fff;border:none;border-radius:6px;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap;">&#128203; Copy</button>
</div>

<p><strong>Request Body Parameters</strong></p>
<div class="site-table-wrap">
  <table class="site-table">
    <thead>
      <tr>
        <th style="padding:10px 14px;text-align:left;">Parameter Name</th>
        <th style="padding:10px 14px;text-align:left;">Type</th>
        <th style="padding:10px 14px;text-align:left;">Mandatory</th>
        <th style="padding:10px 14px;text-align:left;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:10px 14px;">instruments</td>
        <td style="padding:10px 14px;">Array</td>
        <td style="padding:10px 14px;">Y</td>
        <td style="padding:10px 14px;">Array of instrument objects</td>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb;background:#fafafa;">
        <td style="padding:10px 14px;">exchangeSegment</td>
        <td style="padding:10px 14px;">ExchangeSegment</td>
        <td style="padding:10px 14px;">Y</td>
        <td style="padding:10px 14px;">ExchangeSegment</td>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:10px 14px;">exchangeInstrumentID</td>
        <td style="padding:10px 14px;">ExchangeInstrumentID</td>
        <td style="padding:10px 14px;">Y</td>
        <td style="padding:10px 14px;">Exchange Scrip code or Symbol Token is unique identifier</td>
      </tr>
      <tr style="background:#fafafa;">
        <td style="padding:10px 14px;">MessageCode</td>
        <td style="padding:10px 14px;">Integer</td>
        <td style="padding:10px 14px;">Y</td>
        <td style="padding:10px 14px;">It is system generated message code</td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>Request Body JSON</strong></p>
<div style="position:relative;background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;margin:6px 0 4px 0;overflow:auto;">
<span style="color:#d4d4d4">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"instruments"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">22</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">}</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">],</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"xtsMessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1582</span><br>
<span style="color:#d4d4d4">}</span>
</div>
  <button onclick="navigator.clipboard.writeText('{\"instruments\":[{\"exchangeSegment\":1,\"exchangeInstrumentID\":22}],\"xtsMessageCode\":1582}').then(function(){var t=event.target;t.innerHTML='&#10003; Copied!';setTimeout(function(){t.innerHTML='&#128203; Copy';},1500);});" style="background:#1a73e8;color:#fff;border:none;border-radius:6px;padding:6px 16px;font-size:12px;font-weight:600;cursor:pointer;">&#128203; Copy</button>

<p><strong>Response Body JSON</strong></p>
<div style="position:relative;background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;margin:6px 0 4px 0;overflow:auto;">
<span style="color:#d4d4d4">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-session-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Instrument subscribed successfully!"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: {</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"mdp"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1501</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"quotesList"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">22</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">}</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">],</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"listQuotes"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"{\"MessageCode\":1501,\"ExchangeSegment\":1,\"ExchangeInstrumentID\":\"22\",\"LastTradedPrice\":1723,\"LastTradedQunatity\":15,\"TotalBuyQuantity\":18446,\"TotalSellQuantity\":25283,\"TotalTradedQuantity\":189238,\"Average...\"}"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">],</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Remaining_Subscription_Count"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">48</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">}</span><br>
<span style="color:#d4d4d4">}</span>
</div>
  <button onclick="navigator.clipboard.writeText('{\"type\":\"success\",\"code\":\"s-session-0001\",\"description\":\"Instrument subscribed successfully!\",\"result\":{\"mdp\":1501,\"quotesList\":[{\"exchangeSegment\":1,\"exchangeInstrumentID\":22}],\"listQuotes\":[\"...\"],\"Remaining_Subscription_Count\":48}}').then(function(){var t=event.target;t.innerHTML='&#10003; Copied!';setTimeout(function(){t.innerHTML='&#128203; Copy';},1500);});" style="background:#1a73e8;color:#fff;border:none;border-radius:6px;padding:6px 16px;font-size:12px;font-weight:600;cursor:pointer;">&#128203; Copy</button>

---

## Unsubscribe to Socket

<p>This API request is used to unsubscribe from market data streaming for instruments that are already subscribed. Upon successful unsubscription, the server sends an acknowledgment confirming the unsubscription, stops sending market data for the specified instrument(s) on the WebSocket, and releases the corresponding subscription count, making it available for future subscriptions.</p>

<p><strong>URL</strong></p>
<div style="display:flex;align-items:center;background:#f8f9fa;border:1px solid #dee2e6;border-radius:6px;padding:8px 14px;gap:10px;margin:6px 0 18px 0;">
  <span style="flex-shrink:0;background:#fff3e0;color:#e65100;border:1px solid #ffcc80;border-radius:4px;padding:3px 10px;font-size:12px;font-weight:700;">PUT</span>
  <code style="flex:1;font-size:12px;color:#374151;word-break:break-all;">https://xts.rmoneyindia.co.in:3000/apimarketdata/instruments/subscription</code>
  <button onclick="var t=this;navigator.clipboard.writeText('https://xts.rmoneyindia.co.in:3000/apimarketdata/instruments/subscription').then(function(){t.innerHTML='&#10003; Copied!';setTimeout(function(){t.innerHTML='&#128203; Copy';},1500);});" style="flex-shrink:0;background:#1a73e8;color:#fff;border:none;border-radius:6px;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap;">&#128203; Copy</button>
</div>

<p><strong>Request Body Parameters</strong></p>
<div class="site-table-wrap">
  <table class="site-table">
    <thead>
      <tr>
        <th style="padding:10px 14px;text-align:left;">Parameter Name</th>
        <th style="padding:10px 14px;text-align:left;">Type</th>
        <th style="padding:10px 14px;text-align:left;">Mandatory</th>
        <th style="padding:10px 14px;text-align:left;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:10px 14px;">instruments</td>
        <td style="padding:10px 14px;">Array</td>
        <td style="padding:10px 14px;">Y</td>
        <td style="padding:10px 14px;">Array of instrument objects</td>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb;background:#fafafa;">
        <td style="padding:10px 14px;">exchangeSegment</td>
        <td style="padding:10px 14px;">ExchangeSegment</td>
        <td style="padding:10px 14px;">Y</td>
        <td style="padding:10px 14px;">ExchangeSegment</td>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:10px 14px;">exchangeInstrumentID</td>
        <td style="padding:10px 14px;">ExchangeInstrumentID</td>
        <td style="padding:10px 14px;">Y</td>
        <td style="padding:10px 14px;">Exchange Scrip code or Symbol Token is unique identifier</td>
      </tr>
      <tr style="background:#fafafa;">
        <td style="padding:10px 14px;">xtsMessageCode</td>
        <td style="padding:10px 14px;">xtsMessageCode</td>
        <td style="padding:10px 14px;">Y</td>
        <td style="padding:10px 14px;">It is system generated message code</td>
      </tr>
    </tbody>
  </table>
</div>

<p><strong>Request Body JSON</strong></p>
<div style="position:relative;background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;margin:6px 0 4px 0;overflow:auto;">
<span style="color:#d4d4d4">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"instruments"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">22</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">}</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">],</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"xtsMessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1502</span><br>
<span style="color:#d4d4d4">}</span>
</div>

  <button onclick="navigator.clipboard.writeText('{\"instruments\":[{\"exchangeSegment\":1,\"exchangeInstrumentID\":22}],\"xtsMessageCode\":1502}').then(function(){var t=event.target;t.innerHTML='&#10003; Copied!';setTimeout(function(){t.innerHTML='&#128203; Copy';},1500);});" style="background:#1a73e8;color:#fff;border:none;border-radius:6px;padding:6px 16px;font-size:12px;font-weight:600;cursor:pointer;">&#128203; Copy</button>

<p><strong>Response Body JSON</strong></p>
<div style="position:relative;background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;margin:6px 0 4px 0;overflow:auto;">
<span style="color:#d4d4d4">[</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-response-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Instrument subscription deleted!"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: {</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Remaining_Subscription_Count"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">4</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">}</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">}</span><br>
<span style="color:#d4d4d4">]</span>
</div>
  <button onclick="navigator.clipboard.writeText('[{\"type\":\"success\",\"code\":\"s-response-0001\",\"description\":\"Instrument subscription deleted!\",\"result\":{\"Remaining_Subscription_Count\":4}}]').then(function(){var t=event.target;t.innerHTML='&#10003; Copied!';setTimeout(function(){t.innerHTML='&#128203; Copy';},1500);});" style="background:#1a73e8;color:#fff;border:none;border-radius:6px;padding:6px 16px;font-size:12px;font-weight:600;cursor:pointer;">&#128203; Copy</button>
