<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">WebSocket Connection</h1>
<p class="iov-subtitle"><strong>WebSocket Connection</strong> is the first step in real-time market data streaming. It creates a live link between your application and the Market Data server, allowing market updates to be delivered instantly.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5z"/></svg></div><span>Secure connection</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Token authentication</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Live streaming</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.5 18.5l6-6 4 4 7-8.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Auto-reconnect</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>Low latency</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Continuous session</span></div>
</div>

---

## How Connection Works

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg></div><span>Login via REST</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Initiate Connection</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4z"/></svg></div><span>Authenticate</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>joined Event</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg></div><span>Subscribe &amp; Stream</span></div>
</div>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;margin:20px 0 8px">
  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px">1. Login via REST</div>
    <p style="font-size:13px;color:#374151;margin:0">Login through the REST API to receive a Market Data token and userID.</p>
  </div>
  <div style="border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;background:#eff6ff">
    <div style="font-weight:700;color:#1d4ed8;font-size:13px;margin-bottom:6px">2. Initiate Connection</div>
    <p style="font-size:13px;color:#374151;margin:0">Client sends a connection request to the WebSocket server endpoint.</p>
  </div>
  <div style="border:1.5px solid #e9d5ff;border-radius:10px;padding:14px 16px;background:#faf5ff">
    <div style="font-weight:700;color:#7c3aed;font-size:13px;margin-bottom:6px">3. Authenticate</div>
    <p style="font-size:13px;color:#374151;margin:0">Server validates the token. If valid, the WebSocket connection is established.</p>
  </div>
  <div style="border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4">
    <div style="font-weight:700;color:#16a34a;font-size:13px;margin-bottom:6px">4. joined Event</div>
    <p style="font-size:13px;color:#374151;margin:0">Server fires the <code>joined</code> event confirming the connection is active.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;background:#f9fafb">
    <div style="font-weight:700;color:#374151;font-size:13px;margin-bottom:6px">5. Subscribe &amp; Stream</div>
    <p style="font-size:13px;color:#374151;margin:0">Client subscribes to instruments and live data starts streaming automatically.</p>
  </div>
</div>

---

## Connection Status Events

<table class="api-table">
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">joined</span></td>
      <td>- <strong>Connection established successfully.</strong><br>- Fired when the client connects and is authenticated by the server.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">success</span></td>
      <td>- <strong>Connection request processed successfully.</strong><br>- Returned after a valid connect or subscribe action completes.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">error</span></td>
      <td>- <strong>Connection could not be established or authentication failed.</strong><br>- Check the token validity and server URL before retrying.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">logout</span></td>
      <td>- <strong>Session ended and connection has been closed.</strong><br>- Reconnect and re-authenticate to resume streaming.</td>
    </tr>
  </tbody>
</table>

---

## Step 1 — Login via REST

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:2;margin:12px 0">
<span style="color:#c586c0">from</span> <span style="color:#4ec9b0">xts_api_client.xts_connect_async</span> <span style="color:#c586c0">import</span> <span style="color:#4ec9b0">XTSConnect</span><br><br>
<span style="color:#9cdcfe">client</span> <span style="color:#d4d4d4">= </span><span style="color:#4ec9b0">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">apiKey</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">"your_api_key"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">secretKey</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">"your_secret_key"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">source</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">"WEBAPI"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">root</span><span style="color:#d4d4d4">=</span><span style="color:#ce9178">"https://xts.rmoneyindia.co.in:3000"</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">await</span> <span style="color:#9cdcfe">client</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
<span style="color:#6a9955"># client.token and client.userID are now set</span>
</div>

---

## Step 2 — Connect Market Data WebSocket

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:2;margin:12px 0">
<span style="color:#c586c0">from</span> <span style="color:#4ec9b0">xts_api_client.market_data_socket</span> <span style="color:#c586c0">import</span> <span style="color:#4ec9b0">MDSocket_io</span><br>
<span style="color:#c586c0">from</span> <span style="color:#4ec9b0">xts_api_client.market_data_socket_client</span> <span style="color:#c586c0">import</span> <span style="color:#4ec9b0">MarketDataSocketClient</span><br><br>
<span style="color:#c586c0">class</span> <span style="color:#4ec9b0">MyPriceFeed</span><span style="color:#d4d4d4">(</span><span style="color:#4ec9b0">MarketDataSocketClient</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;<span style="color:#c586c0">async def</span> <span style="color:#dcdcaa">on_connect</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Connected to market data feed!"</span><span style="color:#d4d4d4">)</span><br><br>
&nbsp;&nbsp;<span style="color:#c586c0">async def</span> <span style="color:#dcdcaa">on_event_last_traded_price_full</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">data</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"LTP: {data['TradingSymbol']} @ {data['LastTradedPrice']}"</span><span style="color:#d4d4d4">)</span><br><br>
<span style="color:#9cdcfe">socket</span> <span style="color:#d4d4d4">= </span><span style="color:#4ec9b0">MDSocket_io</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">token</span><span style="color:#d4d4d4">=</span><span style="color:#9cdcfe">client</span><span style="color:#d4d4d4">.</span><span style="color:#9cdcfe">token</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">userID</span><span style="color:#d4d4d4">=</span><span style="color:#9cdcfe">client</span><span style="color:#d4d4d4">.</span><span style="color:#9cdcfe">userID</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">root_url</span><span style="color:#d4d4d4">=</span><span style="color:#9cdcfe">client</span><span style="color:#d4d4d4">.</span><span style="color:#9cdcfe">root</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">marketdatasocketclient</span><span style="color:#d4d4d4">=</span><span style="color:#4ec9b0">MyPriceFeed</span><span style="color:#d4d4d4">()</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">await</span> <span style="color:#9cdcfe">socket</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">connect</span><span style="color:#d4d4d4">()</span>
</div>


## complete example of market data socket connection

<div style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:2;overflow-x:auto;">
<span style="color:#ce9178">"""</span><br>
<span style="color:#ce9178">Market Data Socket - Continuous streaming with auto-reconnection</span><br>
<span style="color:#ce9178">"""</span><br>
<br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> asyncio</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> json</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> typing </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> Any</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> dotenv </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> load_dotenv</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> xts_api_client.market_data_socket </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> MDSocket_io</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> xts_api_client.xts_connect_async </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> XTSConnect</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> xts_api_client.market_data_socket_client </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> MarketDataSocketClient</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> os</span><br>
<br>
<span style="color:#dcdcaa">load_dotenv</span><span style="color:#d4d4d4">()</span><br>
<br>
<br>
<span style="color:#c586c0">class</span><span style="color:#d4d4d4"> </span><span style="color:#4ec9b0">SimpleMarketDataClient</span><span style="color:#d4d4d4">(MarketDataSocketClient):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""Handles market data socket events"""</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_connect</span><span style="color:#d4d4d4">(self) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[OK] Market Data Socket Connected"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_disconnect</span><span style="color:#d4d4d4">(self) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[DISCONNECTED] Market Data Socket Disconnected"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_error</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[ERROR] Market Data Error: {data}"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_message</span><span style="color:#d4d4d4">(self, data: Any = </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_last_traded_price_full</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">_print_ltp</span><span style="color:#d4d4d4">(data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_last_traded_price_partial</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">_print_ltp</span><span style="color:#d4d4d4">(data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_touchline_full</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">_print_ltp</span><span style="color:#d4d4d4">(data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_touchline_partial</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">_print_ltp</span><span style="color:#d4d4d4">(data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_market_data_full</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_market_data_partial</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_candle_data_full</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_candle_data_partial</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_market_status_full</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_openinterest_full</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_openinterest_partial</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_instrument_change_full</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_event_instrument_change_partial</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">_print_ltp</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">try</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> isinstance(data, str):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">data</span><span style="color:#d4d4d4"> = json.</span><span style="color:#dcdcaa">loads</span><span style="color:#d4d4d4">(data)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> isinstance(data, dict):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">touchline</span><span style="color:#d4d4d4"> = data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Touchline"</span><span style="color:#d4d4d4">, {}) </span><span style="color:#c586c0">if</span><span style="color:#d4d4d4"> isinstance(data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Touchline"</span><span style="color:#d4d4d4">), dict) </span><span style="color:#c586c0">else</span><span style="color:#d4d4d4"> {}</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">instrument_id</span><span style="color:#d4d4d4"> = (</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"exchangeInstrumentID"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">or</span><span style="color:#d4d4d4"> touchline.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"exchangeInstrumentID"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">or</span><span style="color:#d4d4d4"> touchline.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">ltp</span><span style="color:#d4d4d4"> = (</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"ltp"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"LastTradedPrice"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">or</span><span style="color:#d4d4d4"> touchline.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"ltp"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">or</span><span style="color:#d4d4d4"> touchline.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"LastTradedPrice"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> ltp </span><span style="color:#c586c0">and</span><span style="color:#d4d4d4"> instrument_id:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[LTP] Instrument: {instrument_id} | LTP: {ltp}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">except</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
<br>
<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"""Connect and stream market data"""</span><br>
<br>
&nbsp;&nbsp;<span style="color:#9cdcfe">api_key</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_MARKETDATA_API_KEY"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">strip</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">secret_key</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_MARKETDATA_SECRET_KEY"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">strip</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">api_url</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_API_URL"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">strip</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">source</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_SOURCE"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"WEBAPI"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">strip</span><span style="color:#d4d4d4">()</span><br>
<br>
&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">not</span><span style="color:#d4d4d4"> all([api_key, secret_key, api_url]):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[FAILED] Missing credentials in .env"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Required: XTS_MARKETDATA_API_KEY, XTS_MARKETDATA_SECRET_KEY, XTS_API_URL"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">return</span><br>
<br>
&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Market Data Socket - Starting Connection"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"API URL: {api_url}\n"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">0</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">max_attempts</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">10</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">retry_delay</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">3</span><br>
<br>
&nbsp;&nbsp;<span style="color:#c586c0">while</span><span style="color:#d4d4d4"> attempt &lt; max_attempts:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">md_socket</span><span style="color:#d4d4d4"> = </span><span style="color:#569cd6">None</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">try</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt == </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[STEP 1/5] Logging in to Market Data API..."</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">xtc</span><span style="color:#d4d4d4"> = </span><span style="color:#4ec9b0">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">apiKey</span><span style="color:#d4d4d4">=api_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">secretKey</span><span style="color:#d4d4d4">=secret_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">source</span><span style="color:#d4d4d4">=source,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root</span><span style="color:#d4d4d4">=api_url</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">login_resp</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xtc.</span><span style="color:#dcdcaa">marketdata_login</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> login_resp.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"type"</span><span style="color:#d4d4d4">) != </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[FAILED] Login error: {login_resp}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> += </span><span style="color:#b5cea8">1</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(retry_delay)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">continue</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt == </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[OK] Logged in successfully"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"&nbsp;&nbsp;&nbsp;&nbsp;User ID: {xtc.userID}\n"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[STEP 2/5] Creating WebSocket..."</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">callback</span><span style="color:#d4d4d4"> = </span><span style="color:#4ec9b0">SimpleMarketDataClient</span><span style="color:#d4d4d4">()</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">md_socket</span><span style="color:#d4d4d4"> = </span><span style="color:#4ec9b0">MDSocket_io</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">token</span><span style="color:#d4d4d4">=xtc.token,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">userID</span><span style="color:#d4d4d4">=xtc.userID,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root_url</span><span style="color:#d4d4d4">=xtc.root,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">reconnection</span><span style="color:#d4d4d4">=</span><span style="color:#569cd6">False</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">marketdatasocketclient</span><span style="color:#d4d4d4">=callback</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt == </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[STEP 3/5] Connecting WebSocket..."</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> md_socket.</span><span style="color:#dcdcaa">connect</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(</span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">not</span><span style="color:#d4d4d4"> md_socket.connected:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[FAILED] Socket did not connect properly"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> += </span><span style="color:#b5cea8">1</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt &lt; max_attempts:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[RETRY] Attempt {attempt}/{max_attempts} in {retry_delay}s...\n"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(retry_delay)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">continue</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt == </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[OK] WebSocket connected\n"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[STEP 4/5] Subscribing to instruments..."</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955"># Using RELIANCE (2885) cash equity on Segment 1 (NSECM) as default</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">instruments</span><span style="color:#d4d4d4"> = [{</span><span style="color:#ce9178">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2029</span><span style="color:#d4d4d4">}]</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">sub_resp</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xtc.</span><span style="color:#dcdcaa">send_subscription</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">Instruments</span><span style="color:#d4d4d4">=instruments,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">xtsMessageCode</span><span style="color:#d4d4d4">=</span><span style="color:#b5cea8">1501</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> sub_resp.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"type"</span><span style="color:#d4d4d4">) != </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[FAILED] Subscription error: {sub_resp}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> += </span><span style="color:#b5cea8">1</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(retry_delay)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">continue</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt == </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[OK] Subscribed to instruments\n"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[STEP 5/5] Streaming data..."</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"="</span><span style="color:#d4d4d4"> * </span><span style="color:#b5cea8">60</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[RUNNING] Market Data Socket is RUNNING"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Press Ctrl+C to stop\n"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">0</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955"># Stream data until disconnected</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">while</span><span style="color:#d4d4d4"> md_socket </span><span style="color:#c586c0">and</span><span style="color:#d4d4d4"> md_socket.connected:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(</span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[DISCONNECTED] Connection lost - attempting reconnect..."</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">1</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">except</span><span style="color:#d4d4d4"> KeyboardInterrupt:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"\n\n[STOP] User stopped connection"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">break</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">except</span><span style="color:#d4d4d4"> Exception </span><span style="color:#c586c0">as</span><span style="color:#d4d4d4"> e:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[ERROR] {str(e)[:100]}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> += </span><span style="color:#b5cea8">1</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt &lt; max_attempts:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[RETRY] Attempt {attempt}/{max_attempts} in {retry_delay}s...\n"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(retry_delay)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">finally</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> md_socket:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">try</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> md_socket.</span><span style="color:#dcdcaa">disconnect</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">except</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt &gt;= max_attempts:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[FAILED] Reached max reconnection attempts ({max_attempts})"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[OK] Market Data Socket stopped"</span><span style="color:#d4d4d4">)</span><br>
<br>
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> __name__ == </span><span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">asyncio</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(main())</span>

</div>
  <button onclick="var t=this;navigator.clipboard.writeText('import socketio\n\nurl = \"https://xts.rmoneyindia.co.in:3000\"\nuserID = \"\"\ntoken = \"\"\nbroadcastMode = \"Full\"\npublishFormat = \"JSON\"\nsocketio_path = \"/apimarketdata/socketio\"\nlogger = False\nsio = socketio.Client()').then(function(){t.innerHTML='&#10003; Copied!';setTimeout(function(){t.innerHTML='&#128203; Copy';},1500);});" style="background:#1a73e8;color:#fff;border:none;border-radius:6px;padding:6px 16px;font-size:12px;font-weight:600;cursor:pointer;">&#128203; Copy</button>

---

## Step 3 — Connect Interactive WebSocket

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:2;margin:12px 0">
<span style="color:#c586c0">from</span> <span style="color:#4ec9b0">xts_api_client.interactive_socket</span> <span style="color:#c586c0">import</span> <span style="color:#4ec9b0">OrderSocket_io</span><br>
<span style="color:#c586c0">from</span> <span style="color:#4ec9b0">xts_api_client.interactive_socket_client</span> <span style="color:#c586c0">import</span> <span style="color:#4ec9b0">InteractiveSocketClient</span><br><br>
<span style="color:#c586c0">class</span> <span style="color:#4ec9b0">MyOrderFeed</span><span style="color:#d4d4d4">(</span><span style="color:#4ec9b0">InteractiveSocketClient</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;<span style="color:#c586c0">async def</span> <span style="color:#dcdcaa">on_order</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">data</span><span style="color:#d4d4d4">):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"Order: {data['OrderStatus']} for {data['TradingSymbol']}"</span><span style="color:#d4d4d4">)</span><br><br>
<span style="color:#9cdcfe">order_socket</span> <span style="color:#d4d4d4">= </span><span style="color:#4ec9b0">OrderSocket_io</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">token</span><span style="color:#d4d4d4">=</span><span style="color:#9cdcfe">interactive_client</span><span style="color:#d4d4d4">.</span><span style="color:#9cdcfe">token</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">userID</span><span style="color:#d4d4d4">=</span><span style="color:#9cdcfe">interactive_client</span><span style="color:#d4d4d4">.</span><span style="color:#9cdcfe">userID</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">root_url</span><span style="color:#d4d4d4">=</span><span style="color:#9cdcfe">interactive_client</span><span style="color:#d4d4d4">.</span><span style="color:#9cdcfe">root</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">reconnection</span><span style="color:#d4d4d4">=</span><span style="color:#569cd6">True</span><br>
<span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">await</span> <span style="color:#9cdcfe">order_socket</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">connect</span><span style="color:#d4d4d4">()</span>
</div>


## Complete example of order socket connection


<div style="position:relative;margin:8px 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;max-height:220px;overflow:hidden;transition:max-height .4s ease" id="ss-conn-box">
<span style="color:#ce9178">"""</span><br>
<span style="color:#ce9178">Order Socket - Continuous streaming with auto-reconnection</span><br>
<span style="color:#ce9178">"""</span><br>
<br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> asyncio</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> json</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> typing </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> Any</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> dotenv </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> load_dotenv</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> xts_api_client.interactive_socket </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> OrderSocket_io</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> xts_api_client.xts_connect_async </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> XTSConnect</span><br>
<span style="color:#c586c0">from</span><span style="color:#d4d4d4"> xts_api_client.interactive_socket_client </span><span style="color:#c586c0">import</span><span style="color:#d4d4d4"> InteractiveSocketClient</span><br>
<span style="color:#c586c0">import</span><span style="color:#d4d4d4"> os</span><br>
<br>
<span style="color:#dcdcaa">load_dotenv</span><span style="color:#d4d4d4">()</span><br>
<br>
<br>
<span style="color:#c586c0">class</span><span style="color:#d4d4d4"> </span><span style="color:#4ec9b0">SimpleOrderClient</span><span style="color:#d4d4d4">(InteractiveSocketClient):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"""Handles order socket events"""</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_connect</span><span style="color:#d4d4d4">(self) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[OK] Order Socket Connected"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_disconnect</span><span style="color:#d4d4d4">(self) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[DISCONNECTED] Order Socket Disconnected"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_error</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[ERROR] Order Error: {data}"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_joined</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[OK] Joined Order Socket room: {data}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_message</span><span style="color:#d4d4d4">(self, data: Any = </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_order</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">_print_order_update</span><span style="color:#d4d4d4">(data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_position</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">_print_position_update</span><span style="color:#d4d4d4">(data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">on_trade</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">self</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">_print_trade_update</span><span style="color:#d4d4d4">(data)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">_print_order_update</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">try</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> isinstance(data, str):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">data</span><span style="color:#d4d4d4"> = json.</span><span style="color:#dcdcaa">loads</span><span style="color:#d4d4d4">(data)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> isinstance(data, dict):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">order_id</span><span style="color:#d4d4d4"> = data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"appOrderID"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"AppOrderID"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"orderId"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"OrderID"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">status</span><span style="color:#d4d4d4"> = data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"orderStatus"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"OrderStatus"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">qty</span><span style="color:#d4d4d4"> = data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"orderQty"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"OrderQty"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"OrderQuantity"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"OrderQty"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">filled</span><span style="color:#d4d4d4"> = data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"filledQty"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"FilledQty"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"CumulativeQuantity"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">price</span><span style="color:#d4d4d4"> = data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"orderPrice"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"OrderPrice"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"OrderAverageTradedPrice"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> order_id:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[ORDER] ID: {order_id} | Status: {status} | Qty: {qty} | Filled: {filled} | Price: {price}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">except</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">_print_position_update</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">try</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> isinstance(data, str):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">data</span><span style="color:#d4d4d4"> = json.</span><span style="color:#dcdcaa">loads</span><span style="color:#d4d4d4">(data)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> isinstance(data, dict):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">instrument_id</span><span style="color:#d4d4d4"> = data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"exchangeInstrumentID"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">net_qty</span><span style="color:#d4d4d4"> = data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"netQty"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"NetPosition"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Quantity"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> instrument_id:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[POSITION] Instrument: {instrument_id} | Net Qty: {net_qty}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">except</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">_print_trade_update</span><span style="color:#d4d4d4">(self, data: Any) -&gt; </span><span style="color:#569cd6">None</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">try</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> isinstance(data, str):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">data</span><span style="color:#d4d4d4"> = json.</span><span style="color:#dcdcaa">loads</span><span style="color:#d4d4d4">(data)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> isinstance(data, dict):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">order_id</span><span style="color:#d4d4d4"> = data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"appOrderID"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"AppOrderID"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"orderId"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"OrderID"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">qty</span><span style="color:#d4d4d4"> = data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"tradeQty"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"LastTradedQuantity"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Quantity"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">price</span><span style="color:#d4d4d4"> = data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"tradePrice"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"LastTradedPrice"</span><span style="color:#d4d4d4">) </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> data.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Price"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> order_id:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[TRADE] Order: {order_id} | Qty: {qty} | Price: {price}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">except</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
<br>
<span style="color:#c586c0">async</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">def</span><span style="color:#d4d4d4"> </span><span style="color:#dcdcaa">main</span><span style="color:#d4d4d4">():</span><br>
&nbsp;&nbsp;<span style="color:#ce9178">"""Connect and stream order data"""</span><br>
<br>
&nbsp;&nbsp;<span style="color:#9cdcfe">api_key</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_INTERACTIVE_API_KEY"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">strip</span><span style="color:#d4d4d4">() </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_ORDER_API_KEY"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">strip</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">secret_key</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_INTERACTIVE_SECRET_KEY"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">strip</span><span style="color:#d4d4d4">() </span><span style="color:#c586c0">or</span><span style="color:#d4d4d4"> os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_ORDER_SECRET_KEY"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">strip</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">api_url</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_API_URL"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">strip</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">source</span><span style="color:#d4d4d4"> = os.</span><span style="color:#dcdcaa">getenv</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"XTS_SOURCE"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"WEBAPI"</span><span style="color:#d4d4d4">).</span><span style="color:#dcdcaa">strip</span><span style="color:#d4d4d4">()</span><br>
<br>
&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">not</span><span style="color:#d4d4d4"> all([api_key, secret_key, api_url]):</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[FAILED] Missing credentials in .env"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Required: XTS_INTERACTIVE_API_KEY, XTS_INTERACTIVE_SECRET_KEY, XTS_API_URL"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">return</span><br>
<br>
&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Order Socket - Starting Connection"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"API URL: {api_url}\n"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">0</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">max_attempts</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">10</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">retry_delay</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">3</span><br>
<br>
&nbsp;&nbsp;<span style="color:#c586c0">while</span><span style="color:#d4d4d4"> attempt &lt; max_attempts:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">order_socket</span><span style="color:#d4d4d4"> = </span><span style="color:#569cd6">None</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">try</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt == </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[STEP 1/4] Logging in to Order API..."</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">xtc</span><span style="color:#d4d4d4"> = </span><span style="color:#4ec9b0">XTSConnect</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">apiKey</span><span style="color:#d4d4d4">=api_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">secretKey</span><span style="color:#d4d4d4">=secret_key,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">source</span><span style="color:#d4d4d4">=source,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root</span><span style="color:#d4d4d4">=api_url</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">login_resp</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xtc.</span><span style="color:#dcdcaa">interactive_login</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> login_resp.</span><span style="color:#dcdcaa">get</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"type"</span><span style="color:#d4d4d4">) != </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[FAILED] Login error: {login_resp}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> += </span><span style="color:#b5cea8">1</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(retry_delay)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">continue</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt == </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[OK] Logged in successfully"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"&nbsp;&nbsp;&nbsp;&nbsp;User ID: {xtc.userID}\n"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[STEP 2/4] Creating WebSocket..."</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">callback</span><span style="color:#d4d4d4"> = </span><span style="color:#4ec9b0">SimpleOrderClient</span><span style="color:#d4d4d4">()</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">order_socket</span><span style="color:#d4d4d4"> = </span><span style="color:#4ec9b0">OrderSocket_io</span><span style="color:#d4d4d4">(</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">token</span><span style="color:#d4d4d4">=xtc.token,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">userID</span><span style="color:#d4d4d4">=xtc.userID,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">root_url</span><span style="color:#d4d4d4">=xtc.root,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">reconnection</span><span style="color:#d4d4d4">=</span><span style="color:#569cd6">False</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">interativeSocketClient</span><span style="color:#d4d4d4">=callback</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt == </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[STEP 3/4] Connecting WebSocket..."</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> order_socket.</span><span style="color:#dcdcaa">connect</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(</span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> </span><span style="color:#c586c0">not</span><span style="color:#d4d4d4"> order_socket.connected:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[FAILED] Socket did not connect properly"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> += </span><span style="color:#b5cea8">1</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt &lt; max_attempts:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[RETRY] Attempt {attempt}/{max_attempts} in {retry_delay}s...\n"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(retry_delay)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">continue</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt == </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[OK] WebSocket connected\n"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[STEP 4/4] Streaming order/trade/position updates..."</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"="</span><span style="color:#d4d4d4"> * </span><span style="color:#b5cea8">60</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[RUNNING] Order Socket is RUNNING"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"Press Ctrl+C to stop\n"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">0</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#6a9955"># Stream data until disconnected</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">while</span><span style="color:#d4d4d4"> order_socket </span><span style="color:#c586c0">and</span><span style="color:#d4d4d4"> order_socket.connected:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(</span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[DISCONNECTED] Connection lost - attempting reconnect..."</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> = </span><span style="color:#b5cea8">1</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">except</span><span style="color:#d4d4d4"> KeyboardInterrupt:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"\n\n[STOP] User stopped connection"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">break</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">except</span><span style="color:#d4d4d4"> Exception </span><span style="color:#c586c0">as</span><span style="color:#d4d4d4"> e:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[ERROR] {str(e)[:100]}"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">attempt</span><span style="color:#d4d4d4"> += </span><span style="color:#b5cea8">1</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt &lt; max_attempts:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[RETRY] Attempt {attempt}/{max_attempts} in {retry_delay}s...\n"</span><span style="color:#d4d4d4">)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> asyncio.</span><span style="color:#dcdcaa">sleep</span><span style="color:#d4d4d4">(retry_delay)</span><br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">finally</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> order_socket:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">try</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">await</span><span style="color:#d4d4d4"> order_socket.</span><span style="color:#dcdcaa">disconnect</span><span style="color:#d4d4d4">()</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">except</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#c586c0">pass</span><br>
<br>
&nbsp;&nbsp;<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> attempt &gt;= max_attempts:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">f"[FAILED] Reached max reconnection attempts ({max_attempts})"</span><span style="color:#d4d4d4">)</span><br>
<br>
&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(</span><span style="color:#ce9178">"[OK] Order Socket stopped"</span><span style="color:#d4d4d4">)</span><br>
<br>
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> __name__ == </span><span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">asyncio</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(main())</span>

  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
    <button onclick="(function(){var t=document.getElementById('ss-conn-box').innerText;navigator.clipboard.writeText(t).then(function(btn){var b=document.getElementById('ss-conn-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="ss-conn-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
    <button onclick="(function(btn){var b=document.getElementById('ss-conn-box');if(b.style.maxHeight==='none'){b.style.maxHeight='220px';btn.textContent='Show Full'}else{b.style.maxHeight='none';btn.textContent='Show Less'}})(this)" id="ss-conn-tog" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Show Full</button>
  </div>
  </div>
---

## Step 4 — Subscribe to Instruments

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:2;margin:12px 0">
<span style="color:#9cdcfe">instruments</span> <span style="color:#d4d4d4">= [</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">{ </span><span style="color:#ce9178">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4"> },</span>&nbsp;<span style="color:#6a9955"># RELIANCE</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">{ </span><span style="color:#ce9178">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">22</span><span style="color:#d4d4d4"> }</span>&nbsp;<span style="color:#6a9955"># NIFTY</span><br>
<span style="color:#d4d4d4">]</span><br>
<span style="color:#c586c0">await</span> <span style="color:#9cdcfe">client</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">send_subscription</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">Instruments</span><span style="color:#d4d4d4">=</span><span style="color:#9cdcfe">instruments</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">xtsMessageCode</span><span style="color:#d4d4d4">=</span><span style="color:#b5cea8">1512</span><span style="color:#d4d4d4">)</span>
</div>

---

## Step 5 — Unsubscribe and Disconnect

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:2;margin:12px 0">
<span style="color:#c586c0">await</span> <span style="color:#9cdcfe">client</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">send_unsubscription</span><span style="color:#d4d4d4">(</span><span style="color:#9cdcfe">Instruments</span><span style="color:#d4d4d4">=</span><span style="color:#9cdcfe">instruments</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">xtsMessageCode</span><span style="color:#d4d4d4">=</span><span style="color:#b5cea8">1512</span><span style="color:#d4d4d4">)</span><br>
<span style="color:#c586c0">await</span> <span style="color:#9cdcfe">socket</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">disconnect</span><span style="color:#d4d4d4">()</span><br>
<span style="color:#c586c0">await</span> <span style="color:#9cdcfe">client</span><span style="color:#d4d4d4">.</span><span style="color:#dcdcaa">marketdata_logout</span><span style="color:#d4d4d4">()</span>
</div>

---

## Connection Parameters

<table class="api-table">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">token</span></td>
      <td>- <strong>Session token from the Login API.</strong><br>- Required to authenticate the WebSocket connection.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">userID</span></td>
      <td>- <strong>User ID returned from the Login API.</strong><br>- Identifies the user session on the server.</td>
    </tr>
    <tr>
      <td><span class="enum-badge">root_url</span></td>
      <td>- <strong>Base URL of the Market Data server.</strong><br>- Example: <code>https://xts.rmoneyindia.co.in:3000</code></td>
    </tr>
    <tr>
      <td><span class="enum-badge">reconnection</span></td>
      <td>- <strong>Auto-reconnect on disconnect.</strong><br>- Set to <code>True</code> to automatically reconnect if the connection drops.</td>
    </tr>
  </tbody>
</table>

---

## Benefits

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(175px,1fr));gap:12px;margin:12px 0 16px">
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Real-time</div>
    <p style="font-size:12px;color:#374151;margin:0">Instant data on market change</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Low Latency</div>
    <p style="font-size:12px;color:#374151;margin:0">Minimal delay in delivery</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Continuous</div>
    <p style="font-size:12px;color:#374151;margin:0">Stays open throughout session</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Fewer Calls</div>
    <p style="font-size:12px;color:#374151;margin:0">No repeated REST polling</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px;text-align:center">
    <div style="font-size:22px;margin-bottom:6px"></div>
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:4px">Auto-Reconnect</div>
    <p style="font-size:12px;color:#374151;margin:0">Handles drops gracefully</p>
  </div>
</div>

!!! tip
    Always login via REST before connecting the WebSocket. The token from login is required to authenticate the socket connection.
