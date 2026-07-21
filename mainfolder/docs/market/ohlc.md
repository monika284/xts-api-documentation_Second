<div class="ohlc-wrap">

<!-- ═══════════════════ HERO ═══════════════════ -->
<div class="ohlc-hero">
  <h1 class="ohlc-hero-title">OHLC Data</h1>
  <p class="ohlc-hero-sub">The OHLC API provides <strong>historical candlestick price data</strong> for any tradable instrument — the foundation of every charting system, technical indicator, and backtesting engine. Each candle encodes four prices (Open, High, Low, Close) over a specific time interval.</p>
  <div class="ohlc-use-chips">
    <span>Candlestick Charts</span>
    <span>Technical Indicators</span>
    <span>Backtesting</span>
    <span>Market Trend Analysis</span>
    <span>Price Performance</span>
  </div>
</div>

<!-- ═══════════════════ BASIC ═══════════════════ -->


<h2 id="what-is-ohlc" class="ohlc-section-title">What is OHLC?</h2>
<p class="ohlc-text">OHLC stands for <strong>Open, High, Low, Close</strong>. Each value describes a different price point within a fixed time window — whether that window is 1 minute or 1 day.</p>
<div class="ohlc-ohlc-grid">
  <div class="ohlc-ohlc-card">
    <div class="ohlc-ohlc-letter">O</div>
    <div class="ohlc-ohlc-body">
      <div class="ohlc-ohlc-name">Open</div>
      <div class="ohlc-ohlc-desc">The first traded price when the candle interval began. For a daily candle this is the market open price.</div>
      <div class="ohlc-ohlc-value">&#8377;2940.00</div>
    </div>
  </div>
  <div class="ohlc-ohlc-card">
    <div class="ohlc-ohlc-letter ohlc-letter-h">H</div>
    <div class="ohlc-ohlc-body">
      <div class="ohlc-ohlc-name">High</div>
      <div class="ohlc-ohlc-desc">The maximum price reached during the entire candle interval. Represents the top of the upper wick.</div>
      <div class="ohlc-ohlc-value">&#8377;2975.25</div>
    </div>
  </div>
  <div class="ohlc-ohlc-card">
    <div class="ohlc-ohlc-letter ohlc-letter-l">L</div>
    <div class="ohlc-ohlc-body">
      <div class="ohlc-ohlc-name">Low</div>
      <div class="ohlc-ohlc-desc">The minimum price reached during the entire candle interval. Represents the bottom of the lower wick.</div>
      <div class="ohlc-ohlc-value">&#8377;2935.80</div>
    </div>
  </div>
  <div class="ohlc-ohlc-card">
    <div class="ohlc-ohlc-letter ohlc-letter-c">C</div>
    <div class="ohlc-ohlc-body">
      <div class="ohlc-ohlc-name">Close</div>
      <div class="ohlc-ohlc-desc">The last traded price when the candle interval ended. This is the most important price for most indicators.</div>
      <div class="ohlc-ohlc-value">&#8377;2965.50</div>
    </div>
  </div>
</div>

<h2 id="candle-structure" class="ohlc-section-title">Candlestick Structure</h2>
<div class="ohlc-candle-explainer">
  <div class="ohlc-candle-diagram">
    <div class="ohlc-cd-row ohlc-cd-high">
      <div class="ohlc-cd-label-left ohlc-cl-high">High<br><span>&#8377;2975.25</span></div>
      <div class="ohlc-cd-center">
        <div class="ohlc-wick-top"></div>
      </div>
      <div class="ohlc-cd-label-right"></div>
    </div>
    <div class="ohlc-cd-row ohlc-cd-close">
      <div class="ohlc-cd-label-left ohlc-cl-close">Close<br><span>&#8377;2965.50</span></div>
      <div class="ohlc-cd-center">
        <div class="ohlc-body-top"></div>
      </div>
      <div class="ohlc-cd-label-right ohlc-cr-bull">Bullish</div>
    </div>
    <div class="ohlc-cd-row ohlc-cd-body">
      <div class="ohlc-cd-label-left"></div>
      <div class="ohlc-cd-center">
        <div class="ohlc-candle-body"></div>
      </div>
      <div class="ohlc-cd-label-right ohlc-cr-body">Close &gt; Open</div>
    </div>
    <div class="ohlc-cd-row ohlc-cd-open">
      <div class="ohlc-cd-label-left ohlc-cl-open">Open<br><span>&#8377;2940.00</span></div>
      <div class="ohlc-cd-center">
        <div class="ohlc-body-bottom"></div>
      </div>
      <div class="ohlc-cd-label-right"></div>
    </div>
    <div class="ohlc-cd-row ohlc-cd-low">
      <div class="ohlc-cd-label-left ohlc-cl-low">Low<br><span>&#8377;2935.80</span></div>
      <div class="ohlc-cd-center">
        <div class="ohlc-wick-bottom"></div>
      </div>
      <div class="ohlc-cd-label-right"></div>
    </div>
  </div>
  <div class="ohlc-candle-legend">
    <div class="ohlc-cl-item">
      <div class="ohlc-cli-line ohlc-line-wick"></div>
      <div class="ohlc-cli-text">
        <strong>Wick (Shadow)</strong>
        <span>Thin vertical lines showing the full High-to-Low range for the interval</span>
      </div>
    </div>
    <div class="ohlc-cl-item">
      <div class="ohlc-cli-box ohlc-box-bull"></div>
      <div class="ohlc-cli-text">
        <strong>Green Body (Bullish)</strong>
        <span>Close is higher than Open — price moved up during this interval</span>
      </div>
    </div>
    <div class="ohlc-cl-item">
      <div class="ohlc-cli-box ohlc-box-bear"></div>
      <div class="ohlc-cli-text">
        <strong>Red Body (Bearish)</strong>
        <span>Close is lower than Open — price moved down during this interval</span>
      </div>
    </div>
  </div>
</div>

<!-- ════════════════ INTERMEDIATE ════════════════ -->


<h2 id="endpoint" class="ohlc-section-title">API Endpoint</h2>
<div class="ohlc-ep-card">
  <div class="ohlc-ep-row">
    <span class="ohlc-ep-method">POST</span>
    <code class="ohlc-ep-path">/apimarketdata/instruments/ohlc</code>
  </div>
  <p class="ohlc-ep-desc">Returns historical OHLC candle data for a specific instrument. Pass the exchange segment, instrument ID, time range, and compression interval in the request body.</p>
</div>

<h2 id="request-response" class="ohlc-section-title">Request and Response</h2>
<div class="ohlc-req-row">
  <div class="ohlc-req-block">
    <div class="ohlc-req-label">Request Body</div>
    <div class="ohlc-code-block"><pre>POST /apimarketdata/instruments/ohlc
Authorization: &lt;market-token&gt;

{
  "exchangeSegment":      1,
  "exchangeInstrumentID": 2885,
  "startTime":  "Jun 14 2026 090000",
  "endTime":    "Jun 15 2026 153000",
  "compressionValue": 1
}</pre></div>
  </div>
  <div class="ohlc-req-block">
    <div class="ohlc-req-label">Response</div>
    <div class="ohlc-code-block"><pre>{
  "type": "success",
  "result": {
    "dataReponse": "1718342400|2940.00|2975.25|2935.80|2965.50|1254789|0||
1718428800|2910.00|2945.00|2895.00|2930.00|987654|0||"
  }
}</pre></div>
  </div>
</div>
<div class="ohlc-pipe-note">
  <div class="ohlc-pn-icon"></div>
  <div>The response is <strong>pipe-separated</strong>: <code>timestamp | open | high | low | close | volume | OI | | </code> — each candle on its own line.</div>
</div>

<h2 id="parameters" class="ohlc-section-title">Request Parameters</h2>
<div class="ohlc-params-wrap">
  <table class="ohlc-params-table">
    <thead><tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>exchangeSegment</code></td><td>Integer</td><td><span class="ohlc-req-yes">Yes</span></td><td>Exchange segment code (1=NSECM, 2=NSEFO, etc.)</td></tr>
      <tr><td><code>exchangeInstrumentID</code></td><td>Integer</td><td><span class="ohlc-req-yes">Yes</span></td><td>Unique instrument token from the master file</td></tr>
      <tr><td><code>startTime</code></td><td>String</td><td><span class="ohlc-req-yes">Yes</span></td><td>Start of the historical range — format: <code>Mmm DD YYYY HHMMSS</code></td></tr>
      <tr><td><code>endTime</code></td><td>String</td><td><span class="ohlc-req-yes">Yes</span></td><td>End of the historical range — same format as startTime</td></tr>
      <tr><td><code>compressionValue</code></td><td>Integer</td><td><span class="ohlc-req-yes">Yes</span></td><td>Candle interval in minutes (see table below)</td></tr>
    </tbody>
  </table>
</div>

<h2 id="intervals" class="ohlc-section-title">Supported Intervals (compressionValue)</h2>
<div class="ohlc-intervals-grid">
  <div class="ohlc-interval-card">
    <div class="ohlc-ic-value">1</div>
    <div class="ohlc-ic-label">1 Minute</div>
    <div class="ohlc-ic-use">Intraday scalping, HFT signals</div>
    <div class="ohlc-ic-bar" style="width:8%"></div>
  </div>
  <div class="ohlc-interval-card">
    <div class="ohlc-ic-value">5</div>
    <div class="ohlc-ic-label">5 Minutes</div>
    <div class="ohlc-ic-use">Intraday momentum strategies</div>
    <div class="ohlc-ic-bar" style="width:18%"></div>
  </div>
  <div class="ohlc-interval-card">
    <div class="ohlc-ic-value">15</div>
    <div class="ohlc-ic-label">15 Minutes</div>
    <div class="ohlc-ic-use">Short-term trend following</div>
    <div class="ohlc-ic-bar" style="width:33%"></div>
  </div>
  <div class="ohlc-interval-card">
    <div class="ohlc-ic-value">30</div>
    <div class="ohlc-ic-label">30 Minutes</div>
    <div class="ohlc-ic-use">Intraday support and resistance</div>
    <div class="ohlc-ic-bar" style="width:50%"></div>
  </div>
  <div class="ohlc-interval-card">
    <div class="ohlc-ic-value">60</div>
    <div class="ohlc-ic-label">1 Hour</div>
    <div class="ohlc-ic-use">Swing trading, multi-day trends</div>
    <div class="ohlc-ic-bar" style="width:70%"></div>
  </div>
  <div class="ohlc-interval-card">
    <div class="ohlc-ic-value">1440</div>
    <div class="ohlc-ic-label">1 Day</div>
    <div class="ohlc-ic-use">Long-term analysis, EOD charts</div>
    <div class="ohlc-ic-bar" style="width:100%"></div>
  </div>
</div>

<h2 id="response-format" class="ohlc-section-title">Response Format — Parsed</h2>
<p class="ohlc-text">Split the pipe-separated string on <code>||</code> to get candles, then split each candle on <code>|</code> to get the 7 fields:</p>
<div class="ohlc-parse-grid">
  <div class="ohlc-parse-card">
    <div class="ohlc-pc-index">0</div>
    <div class="ohlc-pc-name">Timestamp</div>
    <div class="ohlc-pc-val">1718342400</div>
    <div class="ohlc-pc-note">Unix epoch seconds — convert to datetime</div>
  </div>
  <div class="ohlc-parse-card">
    <div class="ohlc-pc-index">1</div>
    <div class="ohlc-pc-name">Open</div>
    <div class="ohlc-pc-val">2940.00</div>
    <div class="ohlc-pc-note">First traded price in interval</div>
  </div>
  <div class="ohlc-parse-card">
    <div class="ohlc-pc-index">2</div>
    <div class="ohlc-pc-name">High</div>
    <div class="ohlc-pc-val">2975.25</div>
    <div class="ohlc-pc-note">Highest price in interval</div>
  </div>
  <div class="ohlc-parse-card">
    <div class="ohlc-pc-index">3</div>
    <div class="ohlc-pc-name">Low</div>
    <div class="ohlc-pc-val">2935.80</div>
    <div class="ohlc-pc-note">Lowest price in interval</div>
  </div>
  <div class="ohlc-parse-card">
    <div class="ohlc-pc-index">4</div>
    <div class="ohlc-pc-name">Close</div>
    <div class="ohlc-pc-val">2965.50</div>
    <div class="ohlc-pc-note">Last traded price in interval</div>
  </div>
  <div class="ohlc-parse-card">
    <div class="ohlc-pc-index">5</div>
    <div class="ohlc-pc-name">Volume</div>
    <div class="ohlc-pc-val">1254789</div>
    <div class="ohlc-pc-note">Total quantity traded</div>
  </div>
  <div class="ohlc-parse-card">
    <div class="ohlc-pc-index">6</div>
    <div class="ohlc-pc-name">Open Interest</div>
    <div class="ohlc-pc-val">0</div>
    <div class="ohlc-pc-note">Outstanding contracts (F&amp;O only)</div>
  </div>
</div>

<!-- ═══════════════ INTRADAY CANDLE OHLC (GET) ═══════════════ -->
<h2 id="intraday-candle-ohlc" class="ohlc-section-title">Intraday Candle OHLC</h2>

<p class="ohlc-text">The XTS Front-end API provides intraday archived OHLC (candlestick) data from the date of access for Equity segments of NSECM and BSECM. For FO segments, OHLC data is available only for currently traded contracts, and expired contracts are not supported.</p>
<p class="ohlc-text">The response is delivered in candle format, including timestamp (epoch time since 1970), <strong>Open, High, Low, Close, Volume, and Open Interest (OI)</strong>. The minimum supported interval is <strong>60 seconds (1 minute)</strong>, with additional supported intervals for the GET OHLC request detailed in the table below.</p>

<p class="ohlc-text"><strong>Compression Value Table</strong></p>
<div class="ohlc-params-wrap">
  <table class="ohlc-params-table">
    <thead><tr><th>Expected Timeframe</th><th>Compression</th></tr></thead>
    <tbody>
      <tr><td>1 minute</td><td>60</td></tr>
      <tr><td>2 minutes</td><td>120</td></tr>
      <tr><td>3 minutes</td><td>180</td></tr>
      <tr><td>4 minutes</td><td>240</td></tr>
      <tr><td>5 minutes</td><td>300</td></tr>
      <tr><td>7 minutes</td><td>420</td></tr>
      <tr><td>10 minutes</td><td>600</td></tr>
      <tr><td>15 minutes</td><td>900</td></tr>
      <tr><td>30 minutes</td><td>1800</td></tr>
      <tr><td>1 hour</td><td>3600</td></tr>
      <tr><td>2 hours</td><td>7200</td></tr>
      <tr><td>3 hours</td><td>10800</td></tr>
      <tr><td>4 hours</td><td>14400</td></tr>
      <tr><td>1 day</td><td>D</td></tr>
      <tr><td>1 week</td><td>W</td></tr>
      <tr><td>1 month</td><td>M</td></tr>
    </tbody>
  </table>
</div>

<div style="margin:8px 0 18px">
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#fff7ed;color:#c2410c;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #fed7aa;white-space:nowrap">GET</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="ohlc-intraday-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata/instruments/ohlc?exchangeSegment=1&amp;exchangeInstrumentID=2885&amp;startTime=Jan 27 2025 090000&amp;endTime=Jan 28 2025 153000&amp;compressionValue=D</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('ohlc-intraday-url').innerText).then(function(){var b=document.getElementById('ohlc-intraday-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="ohlc-intraday-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280;font-size:13px;font-weight:600">Copy</button>
  </div>
</div>

<p class="ohlc-text"><strong>Request Body Parameters</strong></p>
<div class="ohlc-params-wrap">
  <table class="ohlc-params-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>exchangeSegment</code></td><td>ExchangeSegment</td><td><span class="ohlc-req-yes">Y</span></td><td>Exchange segment.</td></tr>
      <tr><td><code>exchangeInstrumentID</code></td><td>ExchangeInstrumentID</td><td><span class="ohlc-req-yes">Y</span></td><td>Exchange Scrip code or Symbol Token is unique identifier.</td></tr>
      <tr><td><code>startTime</code></td><td>StartTime</td><td><span class="ohlc-req-yes">Y</span></td><td>Date and time in MMM DD YYYY HHMMSS format. Default value is Jan 27 2025 090000</td></tr>
      <tr><td><code>endTime</code></td><td>EndTime</td><td><span class="ohlc-req-yes">Y</span></td><td>Date and time in MMM DD YYYY HHMMSS format. Default value is Jan 28 2025 153000</td></tr>
      <tr><td><code>compressionValue</code></td><td>CompressionValue</td><td><span class="ohlc-req-yes">Y</span></td><td>String value representing time interval. Default value is D. Allowed values are In1Minute (60), In2Minute (120), In3Minute (180), In5Minute (300), In10Minute (600), In15Minute (900), In30Minute (1800), In60Minute (3600)</td></tr>
    </tbody>
  </table>
</div>

<p class="ohlc-text"><strong>Response Body JSON</strong></p>
<div class="ohlc-code-block"><pre>[
  {
    "type": "success",
    "code": "s-instrument-0002",
    "description": "Data found",
    "result": {
      "exchangeSegment": 1,
      "exchangeInstrumentID": "22",
      "dataResponse": "1737331200|1316|1316|1300.25|1305.45|14040244|0|"
    }
  }
]</pre></div>

<!-- ═══════════════════ ADVANCED ════════════════ -->


<h2 id="technical-analysis" class="ohlc-section-title">Technical Analysis with OHLC</h2>
<p class="ohlc-text">Every major technical indicator is derived from OHLC values. Here are the most commonly computed using this data:</p>
<div class="ohlc-ta-grid">
  <div class="ohlc-ta-group">
    <div class="ohlc-ta-group-label">Trend Indicators</div>
    <div class="ohlc-ta-chips">
      <span>Moving Average (MA)</span>
      <span>Exponential MA (EMA)</span>
      <span>MACD</span>
      <span>SuperTrend</span>
      <span>Parabolic SAR</span>
    </div>
  </div>
  <div class="ohlc-ta-group">
    <div class="ohlc-ta-group-label">Momentum Indicators</div>
    <div class="ohlc-ta-chips">
      <span>RSI</span>
      <span>Stochastic Oscillator</span>
      <span>CCI</span>
      <span>Williams %R</span>
      <span>MFI</span>
    </div>
  </div>
  <div class="ohlc-ta-group">
    <div class="ohlc-ta-group-label">Volatility Indicators</div>
    <div class="ohlc-ta-chips">
      <span>Bollinger Bands</span>
      <span>ATR</span>
      <span>Keltner Channel</span>
      <span>Donchian Channel</span>
    </div>
  </div>
  <div class="ohlc-ta-group">
    <div class="ohlc-ta-group-label">Volume &amp; Price</div>
    <div class="ohlc-ta-chips">
      <span>VWAP</span>
      <span>OBV</span>
      <span>Support Levels</span>
      <span>Resistance Levels</span>
      <span>Pivot Points</span>
    </div>
  </div>
</div>

<h2 id="data-flow" class="ohlc-section-title">Data Flow</h2>
<div class="ohlc-flow-wrap">
  <div class="ohlc-flow-step">
    <div class="ohlc-flow-num">1</div>
    <div class="ohlc-flow-body">
      <strong>Client Application</strong>
      <span>Sends instrument token, time range, and compression interval</span>
    </div>
  </div>
  <div class="ohlc-flow-arrow"></div>
  <div class="ohlc-flow-step">
    <div class="ohlc-flow-num">2</div>
    <div class="ohlc-flow-body">
      <strong>OHLC API</strong>
      <span>Validates request parameters and routes to historical data store</span>
    </div>
  </div>
  <div class="ohlc-flow-arrow"></div>
  <div class="ohlc-flow-step">
    <div class="ohlc-flow-num">3</div>
    <div class="ohlc-flow-body">
      <strong>Historical Market Data</strong>
      <span>Fetches tick data, aggregates into OHLC candles by interval</span>
    </div>
  </div>
  <div class="ohlc-flow-arrow"></div>
  <div class="ohlc-flow-step">
    <div class="ohlc-flow-num">4</div>
    <div class="ohlc-flow-body">
      <strong>OHLC Response</strong>
      <span>Pipe-delimited candle data returned in chronological order</span>
    </div>
  </div>
  <div class="ohlc-flow-arrow"></div>
  <div class="ohlc-flow-step">
    <div class="ohlc-flow-num">5</div>
    <div class="ohlc-flow-body">
      <strong>Charts and Analytics</strong>
      <span>Parse, render, and compute indicators on the candle array</span>
    </div>
  </div>
</div>

<h2 id="best-practices" class="ohlc-section-title">Best Practices</h2>
<div class="ohlc-practices-grid">
  <div class="ohlc-practice">
    <h4>Match Interval to Strategy</h4>
    <p>Use 1-min candles for intraday scalping, 1-day candles for swing trading. Fetching daily candles for a 1-min strategy wastes data resolution.</p>
  </div>
  <div class="ohlc-practice">
    <h4>Request Only What You Need</h4>
    <p>Narrow the date range to the minimum required. Fetching years of 1-min data is slow and expensive — paginate if you need large historical ranges.</p>
  </div>
  <div class="ohlc-practice">
    <h4>Cache Historical Data</h4>
    <p>Past candles never change. Once fetched, store them locally and only request the most recent candles on subsequent calls.</p>
  </div>
  <div class="ohlc-practice">
    <h4>Use WebSocket for Live Candles</h4>
    <p>For the current (in-progress) candle, use WebSocket message code <code>1505</code> instead of polling the OHLC endpoint every second.</p>
  </div>
</div>

<h2 id="common-errors" class="ohlc-section-title">Common Errors</h2>
<div class="ohlc-errors-row">
  <div class="ohlc-error-card">
    <div class="ohlc-err-pill ohlc-err-amber">400</div>
    <strong>Invalid Interval</strong>
    <span>The compressionValue is not a supported minute value.</span>
  </div>
  <div class="ohlc-error-card">
    <div class="ohlc-err-pill ohlc-err-amber">400</div>
    <strong>Invalid Date Range</strong>
    <span>startTime is after endTime, or the format is incorrect.</span>
  </div>
  <div class="ohlc-error-card">
    <div class="ohlc-err-pill ohlc-err-amber">404</div>
    <strong>Instrument Not Found</strong>
    <span>The exchangeInstrumentID does not exist in the given segment.</span>
  </div>
  <div class="ohlc-error-card">
    <div class="ohlc-err-pill ohlc-err-red">401</div>
    <strong>Unauthorized</strong>
    <span>Market data token is missing, expired, or invalid.</span>
  </div>
</div>

<!-- ═══════════════════ SUMMARY ════════════════ -->
<h2 id="summary" class="ohlc-section-title">Summary</h2>
<div class="ohlc-summary-wrap">
  <table class="ohlc-sum-table">
    <thead><tr><th>Term</th><th>Meaning</th><th>Used For</th></tr></thead>
    <tbody>
      <tr><td>Open</td><td>First price in the interval</td><td>Candle body start</td></tr>
      <tr><td>High</td><td>Maximum price in the interval</td><td>Upper wick, range analysis</td></tr>
      <tr><td>Low</td><td>Minimum price in the interval</td><td>Lower wick, support levels</td></tr>
      <tr><td>Close</td><td>Last price in the interval</td><td>Most indicators, body end</td></tr>
      <tr><td>compressionValue</td><td>Candle duration in minutes</td><td>Chart timeframe selection</td></tr>
      <tr><td>Bullish candle</td><td>Close &gt; Open (green)</td><td>Price moved up in interval</td></tr>
      <tr><td>Bearish candle</td><td>Close &lt; Open (red)</td><td>Price moved down in interval</td></tr>
    </tbody>
  </table>
  <div class="ohlc-related">
    <div class="ohlc-related-label">Related APIs</div>
    <div class="ohlc-related-chips">
      <span>Instruments API</span>
      <span>Quotes API</span>
      <span>Market Depth API</span>
      <span>WebSocket API</span>
    </div>
  </div>
</div>

</div>
