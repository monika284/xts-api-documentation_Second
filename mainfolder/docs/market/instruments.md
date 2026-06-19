<div class="inst-wrap">

<!-- ═══════════════════ HERO ═══════════════════ -->
<div class="inst-hero">
  <h1 class="inst-hero-title">Instruments</h1>
  <p class="inst-hero-sub">The Instruments API provides the <strong>master list of all tradable securities</strong> across supported exchanges — stocks, futures, options, currencies, indices, and commodities. It is the foundation for every other API in the platform.</p>
  <div class="inst-why-grid">
    <div class="inst-why-item"><span>Search securities by name or symbol</span></div>
    <div class="inst-why-item"><span>Retrieve instrument tokens for market data subscriptions</span></div>
    <div class="inst-why-item"><span>Get correct exchange and segment identifiers</span></div>
    <div class="inst-why-item"><span>Validate lot size and tick size before placing orders</span></div>
    <div class="inst-why-item"><span>Map trading symbols across Quotes, OHLC, and WebSocket APIs</span></div>
    <div class="inst-why-item"><span>Build symbol search for your trading application</span></div>
  </div>
</div>

<!-- ═══════════════════ BASIC ═══════════════════ -->
<div class="inst-level-badge">Basic</div>

<h2 id="what-is-instrument" class="inst-section-title">What is an Instrument?</h2>
<p class="inst-text">An instrument is any financial asset that can be traded in a market. Every security — whether it is a stock, derivative, or currency pair — is represented as an instrument in the RMoney API.</p>
<div class="inst-examples-row">
  <div class="inst-ex-pill inst-ex-eq">Reliance Industries</div>
  <div class="inst-ex-pill inst-ex-eq">TCS</div>
  <div class="inst-ex-pill inst-ex-idx">NIFTY 50</div>
  <div class="inst-ex-pill inst-ex-fut">Bank Nifty Futures</div>
  <div class="inst-ex-pill inst-ex-cur">USDINR</div>
  <div class="inst-ex-pill inst-ex-opt">NIFTY 25000 CE</div>
</div>

<h2 id="instrument-structure" class="inst-section-title">Instrument Structure</h2>
<p class="inst-text">Every instrument belongs to an exchange and segment. The full hierarchy from exchange down to trading symbol is:</p>
<div class="inst-hierarchy">
  <div class="inst-hier-step inst-hs-exchange">
    <div class="inst-hs-icon inst-hsi-exchange"></div>
    <div class="inst-hs-body">
      <strong>Exchange</strong>
      <span>Trading venue — NSE, BSE, MCX</span>
    </div>
    <div class="inst-hs-example">NSE</div>
  </div>
  <div class="inst-hier-arrow"></div>
  <div class="inst-hier-step inst-hs-segment">
    <div class="inst-hs-icon inst-hsi-segment"></div>
    <div class="inst-hs-body">
      <strong>Segment</strong>
      <span>Asset class — Equity, F&amp;O, Currency</span>
    </div>
    <div class="inst-hs-example">Equity (CM)</div>
  </div>
  <div class="inst-hier-arrow"></div>
  <div class="inst-hier-step inst-hs-instrument">
    <div class="inst-hs-icon inst-hsi-instrument"></div>
    <div class="inst-hs-body">
      <strong>Instrument</strong>
      <span>The actual security</span>
    </div>
    <div class="inst-hs-example">Reliance Industries Ltd</div>
  </div>
  <div class="inst-hier-arrow"></div>
  <div class="inst-hier-step inst-hs-symbol">
    <div class="inst-hs-icon inst-hsi-symbol"></div>
    <div class="inst-hs-body">
      <strong>Trading Symbol</strong>
      <span>Symbol used in API calls</span>
    </div>
    <div class="inst-hs-example">RELIANCE</div>
  </div>
</div>

<!-- ════════════════ INTERMEDIATE ════════════════ -->
<div class="inst-level-badge">Intermediate</div>

<h2 id="instrument-types" class="inst-section-title">Instrument Types</h2>
<div class="inst-types-grid">

  <div class="inst-type-card">
    <div class="inst-tc-header">
      <div class="inst-tc-icon inst-tci-eq"></div>
      <div class="inst-tc-name">Equity</div>
    </div>
    <div class="inst-tc-desc">Company shares listed on NSE or BSE cash market.</div>
    <div class="inst-tc-chips">
      <span>RELIANCE</span><span>TCS</span><span>INFY</span><span>HDFCBANK</span>
    </div>
    <div class="inst-tc-meta">
      <span class="inst-tc-tag">NSE CM</span>
      <span class="inst-tc-tag">BSE CM</span>
    </div>
  </div>

  <div class="inst-type-card">
    <div class="inst-tc-header">
      <div class="inst-tc-icon inst-tci-fut"></div>
      <div class="inst-tc-name">Futures</div>
    </div>
    <div class="inst-tc-desc">Contracts to buy or sell an asset at a specified future date and price.</div>
    <div class="inst-tc-chips">
      <span>NIFTY JUL FUT</span><span>BANKNIFTY JUL FUT</span><span>RELIANCE FUT</span>
    </div>
    <div class="inst-tc-meta">
      <span class="inst-tc-tag">NSE FO</span>
      <span class="inst-tc-tag">MCX FO</span>
    </div>
  </div>

  <div class="inst-type-card">
    <div class="inst-tc-header">
      <div class="inst-tc-icon inst-tci-opt"></div>
      <div class="inst-tc-name">Options</div>
    </div>
    <div class="inst-tc-desc">Contracts giving the right (not obligation) to buy or sell at a strike price.</div>
    <div class="inst-tc-chips">
      <span>NIFTY 25000 CE</span><span>NIFTY 25000 PE</span>
    </div>
    <div class="inst-tc-meta">
      <span class="inst-tc-tag">Call (CE)</span>
      <span class="inst-tc-tag">Put (PE)</span>
    </div>
  </div>

  <div class="inst-type-card">
    <div class="inst-tc-header">
      <div class="inst-tc-icon inst-tci-cur"></div>
      <div class="inst-tc-name">Currency</div>
    </div>
    <div class="inst-tc-desc">Foreign exchange instruments traded on the NSE Currency Derivatives segment.</div>
    <div class="inst-tc-chips">
      <span>USDINR</span><span>EURINR</span><span>GBPINR</span>
    </div>
    <div class="inst-tc-meta">
      <span class="inst-tc-tag">NSE CD</span>
    </div>
  </div>

  <div class="inst-type-card">
    <div class="inst-tc-header">
      <div class="inst-tc-icon inst-tci-idx"></div>
      <div class="inst-tc-name">Indices</div>
    </div>
    <div class="inst-tc-desc">Market benchmarks representing a basket of securities. Not directly tradable — used for reference and derivatives.</div>
    <div class="inst-tc-chips">
      <span>NIFTY 50</span><span>BANK NIFTY</span><span>SENSEX</span>
    </div>
    <div class="inst-tc-meta">
      <span class="inst-tc-tag">Reference only</span>
    </div>
  </div>

</div>

<h2 id="instrument-attributes" class="inst-section-title">Instrument Attributes</h2>
<div class="inst-attrs-wrap">
  <table class="inst-attrs-table">
    <thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td><code>ExchangeInstrumentID</code></td><td>Integer</td><td>Unique numeric identifier for the instrument</td><td><code>2885</code></td></tr>
      <tr><td><code>ExchangeSegment</code></td><td>Integer</td><td>Exchange segment code (1=NSECM, 2=NSEFO…)</td><td><code>1</code></td></tr>
      <tr><td><code>TradingSymbol</code></td><td>String</td><td>Symbol used in orders and market data</td><td><code>RELIANCE</code></td></tr>
      <tr><td><code>Name</code></td><td>String</td><td>Full company or instrument name</td><td><code>Reliance Industries Ltd</code></td></tr>
      <tr><td><code>Series</code></td><td>String</td><td>Instrument series — EQ, FUT, CE, PE</td><td><code>EQ</code></td></tr>
      <tr><td><code>LotSize</code></td><td>Integer</td><td>Minimum quantity for derivatives</td><td><code>75</code></td></tr>
      <tr><td><code>TickSize</code></td><td>Decimal</td><td>Minimum price movement allowed</td><td><code>0.05</code></td></tr>
    </tbody>
  </table>
</div>

<h2 id="api-endpoints" class="inst-section-title">API Endpoints</h2>
<div class="inst-ep-cards">
  <div class="inst-ep-card">
    <div class="inst-ep-top">
      <span class="inst-ep-method inst-get">GET</span>
      <code class="inst-ep-path">/apimarketdata/instruments/master</code>
    </div>
    <div class="inst-ep-desc">Download the full instruments master file for one or more exchange segments. Returns pipe-separated CSV data.</div>
  </div>
  <div class="inst-ep-card">
    <div class="inst-ep-top">
      <span class="inst-ep-method inst-get">GET</span>
      <code class="inst-ep-path">/apimarketdata/instruments/search</code>
    </div>
    <div class="inst-ep-desc">Search for instruments by name or symbol. Returns a list of matching instruments with tokens and exchange details.</div>
  </div>
</div>

<h2 id="sample-request" class="inst-section-title">Sample Request and Response</h2>
<div class="inst-req-row">
  <div class="inst-req-block">
    <div class="inst-req-label">Search Request</div>
    <div class="inst-code-block"><pre>GET /apimarketdata/instruments/search
    ?searchString=Reliance
    &amp;exchangeSegment=1

Authorization: &lt;market-data-token&gt;</pre></div>
  </div>
  <div class="inst-req-block">
    <div class="inst-req-label">Response</div>
    <div class="inst-code-block"><pre>{
  "type": "success",
  "result": [
    {
      "ExchangeInstrumentID": 2885,
      "ExchangeSegment":      1,
      "TradingSymbol":        "RELIANCE",
      "Name":                 "Reliance Industries Ltd",
      "Series":               "EQ",
      "LotSize":              1,
      "TickSize":             0.05
    }
  ]
}</pre></div>
  </div>
</div>

<!-- ═══════════════════ ADVANCED ════════════════ -->
<div class="inst-level-badge">Advanced</div>

<h2 id="key-fields" class="inst-section-title">Understanding Key Fields</h2>
<div class="inst-fields-grid">

  <div class="inst-field-card">
    <div class="inst-field-icon inst-fi-token"></div>
    <div class="inst-field-body">
      <div class="inst-field-name">ExchangeInstrumentID</div>
      <div class="inst-field-desc">The unique numeric identifier for this instrument on the exchange. This is the token you pass to Quotes, OHLC, and WebSocket APIs.</div>
      <div class="inst-field-example"><span>Example</span><code>2885</code></div>
      <div class="inst-field-used">Used in: Quotes API, OHLC API, WebSocket subscriptions</div>
    </div>
  </div>

  <div class="inst-field-card">
    <div class="inst-field-icon inst-fi-exchange"></div>
    <div class="inst-field-body">
      <div class="inst-field-name">ExchangeSegment</div>
      <div class="inst-field-desc">Integer code identifying which exchange segment the instrument belongs to. Must match when placing orders or fetching data.</div>
      <div class="inst-seg-chips">
        <span>1 = NSECM</span><span>2 = NSEFO</span><span>3 = NSECD</span>
        <span>11 = BSECM</span><span>51 = MCXFO</span>
      </div>
    </div>
  </div>

  <div class="inst-field-card">
    <div class="inst-field-icon inst-fi-symbol"></div>
    <div class="inst-field-body">
      <div class="inst-field-name">TradingSymbol</div>
      <div class="inst-field-desc">The exchange-recognized symbol used when placing buy/sell orders. For derivatives, includes expiry and strike details.</div>
      <div class="inst-field-example"><span>Equity</span><code>RELIANCE</code></div>
      <div class="inst-field-example"><span>Future</span><code>NIFTY25JULFUT</code></div>
      <div class="inst-field-example"><span>Option</span><code>NIFTY2572025000CE</code></div>
    </div>
  </div>

  <div class="inst-field-card">
    <div class="inst-field-icon inst-fi-lot"></div>
    <div class="inst-field-body">
      <div class="inst-field-name">LotSize</div>
      <div class="inst-field-desc">Minimum tradeable quantity. For equity the lot size is 1. For derivatives, orders must be in multiples of the lot size or the exchange will reject them.</div>
      <div class="inst-lot-examples">
        <div class="inst-lot-row"><span>NIFTY FUT</span><strong>75 units</strong></div>
        <div class="inst-lot-row"><span>BANKNIFTY FUT</span><strong>35 units</strong></div>
        <div class="inst-lot-row"><span>RELIANCE EQ</span><strong>1 unit</strong></div>
      </div>
    </div>
  </div>

  <div class="inst-field-card">
    <div class="inst-field-icon inst-fi-tick"></div>
    <div class="inst-field-body">
      <div class="inst-field-name">TickSize</div>
      <div class="inst-field-desc">The minimum price increment for a limit order. Prices that are not multiples of tick size are rejected by the exchange.</div>
      <div class="inst-tick-ladder">
        <div class="inst-tick-row inst-tr-valid">100.00</div>
        <div class="inst-tick-row inst-tr-valid">100.05</div>
        <div class="inst-tick-row inst-tr-valid">100.10</div>
        <div class="inst-tick-row inst-tr-invalid">100.03 — invalid</div>
      </div>
    </div>
  </div>

  <div class="inst-field-card">
    <div class="inst-field-icon inst-fi-series"></div>
    <div class="inst-field-body">
      <div class="inst-field-name">Series</div>
      <div class="inst-field-desc">The instrument series defines the type of financial contract within an exchange segment.</div>
      <div class="inst-series-chips">
        <span class="inst-sc-eq">EQ</span>
        <span class="inst-sc-fut">FUTIDX</span>
        <span class="inst-sc-fut">FUTSTK</span>
        <span class="inst-sc-opt">OPTIDX</span>
        <span class="inst-sc-opt">OPTSTK</span>
      </div>
    </div>
  </div>

</div>

<h2 id="use-cases" class="inst-section-title">Common Use Cases</h2>
<div class="inst-uses-row">

  <div class="inst-use-card">
    <div class="inst-use-num">1</div>
    <div class="inst-use-body">
      <h4>Search Before Trading</h4>
      <p>Search by company name to find the correct trading symbol and instrument ID before placing an order.</p>
      <div class="inst-use-flow">
        <span>Search "Reliance"</span>
        <span class="inst-uf-arrow"></span>
        <span>Get RELIANCE + token 2885</span>
        <span class="inst-uf-arrow"></span>
        <span>Place order with RELIANCE</span>
      </div>
    </div>
  </div>

  <div class="inst-use-card">
    <div class="inst-use-num">2</div>
    <div class="inst-use-body">
      <h4>Subscribe to Market Data</h4>
      <p>Get the instrument token and pass it to the Quotes or WebSocket API to receive live prices.</p>
      <div class="inst-use-flow">
        <span>Fetch token = 2885</span>
        <span class="inst-uf-arrow"></span>
        <span>Subscribe via WebSocket</span>
        <span class="inst-uf-arrow"></span>
        <span>Receive live LTP</span>
      </div>
    </div>
  </div>

  <div class="inst-use-card">
    <div class="inst-use-num">3</div>
    <div class="inst-use-body">
      <h4>Build a Symbol Directory</h4>
      <p>Download the full master file daily at market open. Cache it locally so your app can do instant symbol lookups without hitting the API on every search.</p>
      <div class="inst-use-flow">
        <span>Download master on startup</span>
        <span class="inst-uf-arrow"></span>
        <span>Parse into local index</span>
        <span class="inst-uf-arrow"></span>
        <span>Search from cache</span>
      </div>
    </div>
  </div>

</div>

<h2 id="workflow" class="inst-section-title">Instruments API Workflow</h2>
<div class="inst-workflow">
  <div class="inst-wf-step">
    <div class="inst-wf-num">1</div>
    <div class="inst-wf-body">
      <strong>Fetch Instruments Master</strong>
      <span>Download the full list once per day at market start</span>
    </div>
  </div>
  <div class="inst-wf-arrow"></div>
  <div class="inst-wf-step">
    <div class="inst-wf-num">2</div>
    <div class="inst-wf-body">
      <strong>Search Instrument</strong>
      <span>Look up by name or symbol to get token and exchange</span>
    </div>
  </div>
  <div class="inst-wf-arrow"></div>
  <div class="inst-wf-step">
    <div class="inst-wf-num">3</div>
    <div class="inst-wf-body">
      <strong>Get Instrument Token</strong>
      <span>Extract ExchangeInstrumentID and ExchangeSegment</span>
    </div>
  </div>
  <div class="inst-wf-arrow"></div>
  <div class="inst-wf-step">
    <div class="inst-wf-num">4</div>
    <div class="inst-wf-body">
      <strong>Fetch Quotes / Subscribe WebSocket</strong>
      <span>Pass the token to get live market data</span>
    </div>
  </div>
  <div class="inst-wf-arrow"></div>
  <div class="inst-wf-step">
    <div class="inst-wf-num">5</div>
    <div class="inst-wf-body">
      <strong>Place Order</strong>
      <span>Use TradingSymbol + ExchangeSegment in the order payload</span>
    </div>
  </div>
</div>

<h2 id="best-practices" class="inst-section-title">Best Practices</h2>
<div class="inst-practices-grid">
  <div class="inst-practice">
    <h4>Cache the Master File Locally</h4>
    <p>The master file contains thousands of instruments. Download once at startup and cache in memory — don't re-fetch on every symbol lookup.</p>
  </div>
  <div class="inst-practice">
    <h4>Refresh Daily</h4>
    <p>The master file changes each day (new contracts, expired options). Re-download at market open (9:00 AM) to stay current.</p>
  </div>
  <div class="inst-practice">
    <h4>Use Instrument Tokens, Not Names</h4>
    <p>Always use ExchangeInstrumentID for API calls. Symbol names can change; tokens are stable identifiers used by the exchange.</p>
  </div>
  <div class="inst-practice">
    <h4>Verify Lot Size Before Orders</h4>
    <p>Check the lot size for every derivative before placement. An order quantity that is not a multiple of lot size will be rejected.</p>
  </div>
</div>

<h2 id="common-errors" class="inst-section-title">Common Errors</h2>
<div class="inst-errors-row">
  <div class="inst-error-card">
    <div class="inst-err-code">404</div>
    <div class="inst-err-body">
      <strong>Instrument Not Found</strong>
      <span>The instrument ID or symbol does not exist in the exchange segment.</span>
    </div>
  </div>
  <div class="inst-error-card">
    <div class="inst-err-code">400</div>
    <div class="inst-err-body">
      <strong>Invalid Exchange</strong>
      <span>The ExchangeSegment code is incorrect or not supported.</span>
    </div>
  </div>
  <div class="inst-error-card">
    <div class="inst-err-code">400</div>
    <div class="inst-err-body">
      <strong>Invalid Symbol</strong>
      <span>The TradingSymbol does not match any instrument in the segment.</span>
    </div>
  </div>
  <div class="inst-error-card">
    <div class="inst-err-code">410</div>
    <div class="inst-err-body">
      <strong>Instrument Expired</strong>
      <span>The contract (futures/options) has passed its expiry date.</span>
    </div>
  </div>
</div>

<!-- ═══════════════════ SUMMARY ════════════════ -->
<h2 id="summary" class="inst-section-title">Summary</h2>
<div class="inst-summary-wrap">
  <table class="inst-sum-table">
    <thead><tr><th>Term</th><th>Meaning</th><th>Used For</th></tr></thead>
    <tbody>
      <tr><td>Instrument</td><td>Any tradable financial asset</td><td>Foundation for all API calls</td></tr>
      <tr><td>ExchangeInstrumentID</td><td>Unique numeric token</td><td>Quotes, OHLC, WebSocket</td></tr>
      <tr><td>TradingSymbol</td><td>Exchange-recognized symbol</td><td>Order placement</td></tr>
      <tr><td>ExchangeSegment</td><td>Exchange + asset class code</td><td>All API calls</td></tr>
      <tr><td>Series</td><td>Contract type (EQ/FUT/CE/PE)</td><td>Filtering instruments</td></tr>
      <tr><td>LotSize</td><td>Minimum trade quantity</td><td>Derivative order validation</td></tr>
      <tr><td>TickSize</td><td>Minimum price movement</td><td>Limit order price validation</td></tr>
    </tbody>
  </table>
</div>

</div>
