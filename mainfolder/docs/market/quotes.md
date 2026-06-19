<div class="qt-wrap">

<!-- ═══════════════════ HERO ═══════════════════ -->
<div class="qt-hero">
  <h1 class="qt-hero-title">Quotes</h1>
  <p class="qt-hero-sub">The Quotes API provides <strong>real-time market information</strong> for tradable instruments — last traded price, bid and ask, open/high/low/close, volume, and market depth. It is the primary source of live pricing data for every application built on the RMoney platform.</p>
  <div class="qt-use-chips">
    <span>Trading Platforms</span>
    <span>Watchlists</span>
    <span>Portfolio Trackers</span>
    <span>Market Dashboards</span>
    <span>Algorithmic Trading</span>
  </div>
</div>

<!-- ═══════════════════ BASIC ═══════════════════ -->
<div class="qt-level-badge">Basic</div>

<h2 id="price-components" class="qt-section-title">Market Data Components</h2>
<p class="qt-text">Every quote response contains these core price fields. Understanding what each field means is essential before making trading decisions.</p>
<div class="qt-price-grid">

  <div class="qt-price-card">
    <div class="qt-pc-icon qt-pci-ltp"></div>
    <div class="qt-pc-name">LTP</div>
    <div class="qt-pc-long">Last Traded Price</div>
    <div class="qt-pc-desc">The most recent price at which this instrument was actually traded on the exchange.</div>
    <div class="qt-pc-value">&#8377;2965.50</div>
  </div>

  <div class="qt-price-card">
    <div class="qt-pc-icon qt-pci-open"></div>
    <div class="qt-pc-name">Open</div>
    <div class="qt-pc-long">Opening Price</div>
    <div class="qt-pc-desc">The first traded price when the exchange opened for the current session.</div>
    <div class="qt-pc-value">&#8377;2940.00</div>
  </div>

  <div class="qt-price-card">
    <div class="qt-pc-icon qt-pci-high"></div>
    <div class="qt-pc-name">High</div>
    <div class="qt-pc-long">Day High</div>
    <div class="qt-pc-desc">The highest price at which this instrument has traded during the current session.</div>
    <div class="qt-pc-value">&#8377;2975.25</div>
  </div>

  <div class="qt-price-card">
    <div class="qt-pc-icon qt-pci-low"></div>
    <div class="qt-pc-name">Low</div>
    <div class="qt-pc-long">Day Low</div>
    <div class="qt-pc-desc">The lowest price at which this instrument has traded during the current session.</div>
    <div class="qt-pc-value">&#8377;2935.80</div>
  </div>

  <div class="qt-price-card">
    <div class="qt-pc-icon qt-pci-close"></div>
    <div class="qt-pc-name">Close</div>
    <div class="qt-pc-long">Previous Close</div>
    <div class="qt-pc-desc">The official closing price from the previous trading session. Used to calculate today's P&amp;L.</div>
    <div class="qt-pc-value">&#8377;2938.10</div>
  </div>

  <div class="qt-price-card">
    <div class="qt-pc-icon qt-pci-vol"></div>
    <div class="qt-pc-name">Volume</div>
    <div class="qt-pc-long">Total Traded Volume</div>
    <div class="qt-pc-desc">The total number of shares or contracts traded from market open to the current moment.</div>
    <div class="qt-pc-value">12,54,789</div>
  </div>

</div>

<h2 id="how-it-works" class="qt-section-title">Quote Retrieval Flow</h2>
<div class="qt-flow-wrap">
  <div class="qt-flow-step qt-fs-app">
    <div class="qt-fs-icon qt-fsi-app"></div>
    <div class="qt-fs-body"><strong>Your Application</strong><span>Sends instrument token + segment</span></div>
  </div>
  <div class="qt-flow-arrow"></div>
  <div class="qt-flow-step qt-fs-api">
    <div class="qt-fs-icon qt-fsi-api"></div>
    <div class="qt-fs-body"><strong>Quotes API</strong><span>Validates token and routes request</span></div>
  </div>
  <div class="qt-flow-arrow"></div>
  <div class="qt-flow-step qt-fs-server">
    <div class="qt-fs-icon qt-fsi-server"></div>
    <div class="qt-fs-body"><strong>Market Data Server</strong><span>Fetches live data from exchange feed</span></div>
  </div>
  <div class="qt-flow-arrow"></div>
  <div class="qt-flow-step qt-fs-response">
    <div class="qt-fs-icon qt-fsi-response"></div>
    <div class="qt-fs-body"><strong>Quote Response</strong><span>LTP, OHLC, volume, depth returned</span></div>
  </div>
</div>

<!-- ════════════════ INTERMEDIATE ════════════════ -->
<div class="qt-level-badge">Intermediate</div>

<h2 id="endpoint" class="qt-section-title">API Endpoint</h2>
<div class="qt-ep-card">
  <div class="qt-ep-row">
    <span class="qt-ep-method">POST</span>
    <code class="qt-ep-path">/apimarketdata/instruments/quotes</code>
  </div>
  <p class="qt-ep-desc">Returns live quote data for one or more instruments. Pass instrument tokens and exchange segment codes in the request body.</p>
</div>

<h2 id="request-response" class="qt-section-title">Request and Response</h2>
<div class="qt-req-row">
  <div class="qt-req-block">
    <div class="qt-req-label">Request Body</div>
    <div class="qt-code-block"><pre>POST /apimarketdata/instruments/quotes
Authorization: &lt;market-token&gt;

{
  "instruments": [
    {
      "exchangeInstrumentID": 2885,
      "exchangeSegment":      1
    }
  ],
  "xtsMessageCode":  1501,
  "publishFormat":   "JSON"
}</pre></div>
  </div>
  <div class="qt-req-block">
    <div class="qt-req-label">Response</div>
    <div class="qt-code-block"><pre>{
  "type": "success",
  "result": {
    "listQuotes": [
      {
        "ExchangeInstrumentID": 2885,
        "TradingSymbol":        "RELIANCE",
        "LastTradedPrice":      2965.50,
        "Open":                 2940.00,
        "High":                 2975.25,
        "Low":                  2935.80,
        "Close":                2938.10,
        "Volume":               1254789,
        "BidPrice":             2965.40,
        "AskPrice":             2965.60
      }
    ]
  }
}</pre></div>
  </div>
</div>

<h2 id="response-fields" class="qt-section-title">Response Fields</h2>
<div class="qt-fields-wrap">
  <table class="qt-fields-table">
    <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><code>ExchangeInstrumentID</code></td><td>Integer</td><td>Instrument token identifying the security</td></tr>
      <tr><td><code>TradingSymbol</code></td><td>String</td><td>Exchange-recognized trading symbol</td></tr>
      <tr><td><code>LastTradedPrice</code></td><td>Decimal</td><td>Most recent executed trade price</td></tr>
      <tr><td><code>Open</code></td><td>Decimal</td><td>First traded price of the current session</td></tr>
      <tr><td><code>High</code></td><td>Decimal</td><td>Highest traded price of the current session</td></tr>
      <tr><td><code>Low</code></td><td>Decimal</td><td>Lowest traded price of the current session</td></tr>
      <tr><td><code>Close</code></td><td>Decimal</td><td>Previous session's official closing price</td></tr>
      <tr><td><code>Volume</code></td><td>Integer</td><td>Total quantity traded since market open</td></tr>
      <tr><td><code>BidPrice</code></td><td>Decimal</td><td>Best buy order price in the order book</td></tr>
      <tr><td><code>AskPrice</code></td><td>Decimal</td><td>Best sell order price in the order book</td></tr>
      <tr><td><code>OpenInterest</code></td><td>Integer</td><td>Outstanding derivative contracts (F&amp;O only)</td></tr>
    </tbody>
  </table>
</div>

<h2 id="bid-ask" class="qt-section-title">Bid, Ask, and Spread</h2>
<div class="qt-depth-concepts">
  <div class="qt-spread-visual">
    <div class="qt-sv-bid">
      <div class="qt-sv-label">Bid Price</div>
      <div class="qt-sv-sub">Best buy order</div>
      <div class="qt-sv-price qt-price-green">&#8377;2965.40</div>
      <div class="qt-sv-bar qt-bar-green" style="width:70%"></div>
    </div>
    <div class="qt-sv-spread">
      <div class="qt-sv-label">Spread</div>
      <div class="qt-sv-sub">Ask &#8722; Bid</div>
      <div class="qt-sv-price qt-price-gray">&#8377;0.20</div>
    </div>
    <div class="qt-sv-ask">
      <div class="qt-sv-label">Ask Price</div>
      <div class="qt-sv-sub">Best sell order</div>
      <div class="qt-sv-price qt-price-red">&#8377;2965.60</div>
      <div class="qt-sv-bar qt-bar-red" style="width:70%"></div>
    </div>
  </div>
  <div class="qt-bid-ask-cards">
    <div class="qt-ba-card qt-ba-bid">
      <div class="qt-ba-label">Bid</div>
      <div class="qt-ba-name">Highest Buy Order</div>
      <div class="qt-ba-desc">The maximum price buyers are currently willing to pay. If you want to sell immediately, you sell at the Bid.</div>
    </div>
    <div class="qt-ba-card qt-ba-ask">
      <div class="qt-ba-label">Ask</div>
      <div class="qt-ba-name">Lowest Sell Order</div>
      <div class="qt-ba-desc">The minimum price sellers are willing to accept. If you want to buy immediately, you buy at the Ask.</div>
    </div>
    <div class="qt-ba-card qt-ba-spread">
      <div class="qt-ba-label">Spread</div>
      <div class="qt-ba-name">Ask minus Bid</div>
      <div class="qt-ba-desc">A tighter spread means higher liquidity. A wide spread means fewer buyers and sellers are active.</div>
    </div>
  </div>
</div>

<!-- ═══════════════════ ADVANCED ════════════════ -->
<div class="qt-level-badge">Advanced</div>

<h2 id="market-depth" class="qt-section-title">Market Depth (Level 2 Data)</h2>
<p class="qt-text">Market depth shows <strong>all pending buy and sell orders</strong> in the order book — not just the best bid/ask. Use message code <code>1502</code> to subscribe to depth data.</p>
<div class="qt-depth-wrap">
  <div class="qt-depth-side qt-ds-bids">
    <div class="qt-ds-header">Bids (Buy Orders)</div>
    <div class="qt-depth-row">
      <span class="qt-dr-qty">1,200</span>
      <span class="qt-dr-bar-wrap"><span class="qt-dr-bar qt-drb-bid" style="width:80%"></span></span>
      <span class="qt-dr-price qt-drp-bid">2965.40</span>
    </div>
    <div class="qt-depth-row">
      <span class="qt-dr-qty">850</span>
      <span class="qt-dr-bar-wrap"><span class="qt-dr-bar qt-drb-bid" style="width:57%"></span></span>
      <span class="qt-dr-price qt-drp-bid">2965.30</span>
    </div>
    <div class="qt-depth-row">
      <span class="qt-dr-qty">600</span>
      <span class="qt-dr-bar-wrap"><span class="qt-dr-bar qt-drb-bid" style="width:40%"></span></span>
      <span class="qt-dr-price qt-drp-bid">2965.20</span>
    </div>
    <div class="qt-depth-row">
      <span class="qt-dr-qty">400</span>
      <span class="qt-dr-bar-wrap"><span class="qt-dr-bar qt-drb-bid" style="width:27%"></span></span>
      <span class="qt-dr-price qt-drp-bid">2965.10</span>
    </div>
    <div class="qt-depth-row">
      <span class="qt-dr-qty">200</span>
      <span class="qt-dr-bar-wrap"><span class="qt-dr-bar qt-drb-bid" style="width:13%"></span></span>
      <span class="qt-dr-price qt-drp-bid">2965.00</span>
    </div>
  </div>
  <div class="qt-depth-divider">
    <div class="qt-dd-ltp">LTP</div>
    <div class="qt-dd-price">2965.50</div>
    <div class="qt-dd-spread">Spread: 0.20</div>
  </div>
  <div class="qt-depth-side qt-ds-asks">
    <div class="qt-ds-header">Asks (Sell Orders)</div>
    <div class="qt-depth-row">
      <span class="qt-dr-price qt-drp-ask">2965.60</span>
      <span class="qt-dr-bar-wrap"><span class="qt-dr-bar qt-drb-ask" style="width:60%"></span></span>
      <span class="qt-dr-qty">900</span>
    </div>
    <div class="qt-depth-row">
      <span class="qt-dr-price qt-drp-ask">2965.70</span>
      <span class="qt-dr-bar-wrap"><span class="qt-dr-bar qt-drb-ask" style="width:100%"></span></span>
      <span class="qt-dr-qty">1,500</span>
    </div>
    <div class="qt-depth-row">
      <span class="qt-dr-price qt-drp-ask">2965.80</span>
      <span class="qt-dr-bar-wrap"><span class="qt-dr-bar qt-drb-ask" style="width:80%"></span></span>
      <span class="qt-dr-qty">1,200</span>
    </div>
    <div class="qt-depth-row">
      <span class="qt-dr-price qt-drp-ask">2965.90</span>
      <span class="qt-dr-bar-wrap"><span class="qt-dr-bar qt-drb-ask" style="width:47%"></span></span>
      <span class="qt-dr-qty">700</span>
    </div>
    <div class="qt-depth-row">
      <span class="qt-dr-price qt-drp-ask">2966.00</span>
      <span class="qt-dr-bar-wrap"><span class="qt-dr-bar qt-drb-ask" style="width:33%"></span></span>
      <span class="qt-dr-qty">500</span>
    </div>
  </div>
</div>

<h2 id="multiple-quotes" class="qt-section-title">Multiple Quotes in One Request</h2>
<p class="qt-text">Pass multiple instrument objects in the <code>instruments</code> array. All quotes are returned in a single response — more efficient than one request per symbol.</p>
<div class="qt-req-row">
  <div class="qt-req-block">
    <div class="qt-req-label">Request — 3 Instruments</div>
    <div class="qt-code-block"><pre>{
  "instruments": [
    { "exchangeInstrumentID": 2885, "exchangeSegment": 1 },
    { "exchangeInstrumentID": 11536, "exchangeSegment": 1 },
    { "exchangeInstrumentID": 10604, "exchangeSegment": 1 }
  ],
  "xtsMessageCode": 1501,
  "publishFormat":  "JSON"
}</pre></div>
  </div>
  <div class="qt-req-block">
    <div class="qt-req-label">Response</div>
    <div class="qt-code-block"><pre>{
  "type": "success",
  "result": {
    "listQuotes": [
      {
        "TradingSymbol":   "RELIANCE",
        "LastTradedPrice": 2965.50
      },
      {
        "TradingSymbol":   "TCS",
        "LastTradedPrice": 4120.75
      },
      {
        "TradingSymbol":   "INFY",
        "LastTradedPrice": 1685.40
      }
    ]
  }
}</pre></div>
  </div>
</div>

<h2 id="message-codes" class="qt-section-title">Quote Subscription Codes</h2>
<div class="qt-codes-grid">
  <div class="qt-code-card">
    <div class="qt-cc-code">1501</div>
    <div class="qt-cc-name">Touchline</div>
    <div class="qt-cc-desc">LTP, bid, ask, volume, OHLC — standard real-time quote data</div>
  </div>
  <div class="qt-code-card">
    <div class="qt-cc-code">1502</div>
    <div class="qt-cc-name">Market Depth</div>
    <div class="qt-cc-desc">Full 5-level order book — all pending bids and asks</div>
  </div>
  <div class="qt-code-card">
    <div class="qt-cc-code">1505</div>
    <div class="qt-cc-name">Candle Data</div>
    <div class="qt-cc-desc">OHLC candles with configurable compression intervals</div>
  </div>
  <div class="qt-code-card">
    <div class="qt-cc-code">1510</div>
    <div class="qt-cc-name">Open Interest</div>
    <div class="qt-cc-desc">Total open contracts — for derivatives (F&amp;O) instruments only</div>
  </div>
  <div class="qt-code-card">
    <div class="qt-cc-code">1512</div>
    <div class="qt-cc-name">LTP Only</div>
    <div class="qt-cc-desc">Last traded price only — lightest payload, highest frequency</div>
  </div>
</div>

<h2 id="use-cases" class="qt-section-title">Common Use Cases</h2>
<div class="qt-uses-grid">
  <div class="qt-use-card">
    <div class="qt-uc-icon qt-uci-watchlist"></div>
    <h4>Watchlist</h4>
    <p>Display live prices for a selected list of instruments. Refresh every second or use WebSocket for real-time push.</p>
  </div>
  <div class="qt-use-card">
    <div class="qt-uc-icon qt-uci-terminal"></div>
    <h4>Trading Terminal</h4>
    <p>Show the full market picture — LTP, bid/ask, depth, volume — for a trader to make decisions.</p>
  </div>
  <div class="qt-use-card">
    <div class="qt-uc-icon qt-uci-portfolio"></div>
    <h4>Portfolio Tracker</h4>
    <p>Fetch current LTP for each holding to calculate unrealized P&amp;L in real time.</p>
  </div>
  <div class="qt-use-card">
    <div class="qt-uc-icon qt-uci-algo"></div>
    <h4>Algorithmic Trading</h4>
    <p>Poll quotes to trigger automated buy/sell signals based on price conditions.</p>
  </div>
  <div class="qt-use-card">
    <div class="qt-uc-icon qt-uci-dashboard"></div>
    <h4>Market Dashboard</h4>
    <p>Aggregate quotes for top gainers, losers, most active, and index data.</p>
  </div>
</div>

<h2 id="best-practices" class="qt-section-title">Best Practices</h2>
<div class="qt-practices-grid">
  <div class="qt-practice">
    <h4>Use Tokens, Not Symbol Names</h4>
    <p>Always pass <code>exchangeInstrumentID</code>. Symbol name matching is slower and ambiguous — tokens are exact.</p>
  </div>
  <div class="qt-practice">
    <h4>Batch Multiple Instruments</h4>
    <p>Send all instruments in a single request rather than one call per symbol. Reduces overhead and respects rate limits.</p>
  </div>
  <div class="qt-practice">
    <h4>Use WebSocket for High Frequency</h4>
    <p>For live streaming prices, use WebSocket subscriptions (code 1501/1512) instead of repeated REST polling.</p>
  </div>
  <div class="qt-practice">
    <h4>Cache Non-Volatile Fields</h4>
    <p>Open, previous close, and lot size don't change during the day. Cache them — only poll fields like LTP and volume.</p>
  </div>
</div>

<h2 id="common-errors" class="qt-section-title">Common Errors</h2>
<div class="qt-errors-row">
  <div class="qt-error-card">
    <div class="qt-err-pill qt-err-amber">400</div>
    <strong>Invalid Instrument</strong>
    <span>The instrument token does not exist in the given exchange segment.</span>
  </div>
  <div class="qt-error-card">
    <div class="qt-err-pill qt-err-red">401</div>
    <strong>Unauthorized</strong>
    <span>Market data token is missing, invalid, or expired.</span>
  </div>
  <div class="qt-error-card">
    <div class="qt-err-pill qt-err-red">429</div>
    <strong>Rate Limit Exceeded</strong>
    <span>Too many quote requests per second. Switch to WebSocket for continuous data.</span>
  </div>
  <div class="qt-error-card">
    <div class="qt-err-pill qt-err-amber">404</div>
    <strong>Symbol Not Found</strong>
    <span>The requested symbol does not exist or has expired (F&amp;O contracts).</span>
  </div>
</div>

<!-- ═══════════════════ SUMMARY ════════════════ -->
<h2 id="summary" class="qt-section-title">Summary</h2>
<div class="qt-summary-wrap">
  <table class="qt-sum-table">
    <thead><tr><th>Field</th><th>Meaning</th><th>Used For</th></tr></thead>
    <tbody>
      <tr><td>LastTradedPrice</td><td>Most recent executed price</td><td>Watchlist, portfolio P&amp;L</td></tr>
      <tr><td>Open / High / Low</td><td>Intraday price range</td><td>Chart rendering, range analysis</td></tr>
      <tr><td>Close</td><td>Yesterday's closing price</td><td>Change % calculation</td></tr>
      <tr><td>Volume</td><td>Total quantity traded today</td><td>Liquidity analysis</td></tr>
      <tr><td>BidPrice / AskPrice</td><td>Best pending buy / sell orders</td><td>Spread analysis, order placement</td></tr>
      <tr><td>OpenInterest</td><td>Active derivative contracts</td><td>F&amp;O sentiment analysis</td></tr>
    </tbody>
  </table>
  <div class="qt-related">
    <div class="qt-related-label">Related APIs</div>
    <div class="qt-related-chips">
      <span>Instruments API</span>
      <span>OHLC API</span>
      <span>Market Depth API</span>
      <span>WebSocket API</span>
      <span>Orders API</span>
    </div>
  </div>
</div>

</div>
