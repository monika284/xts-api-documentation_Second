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
<div style="overflow-x:auto">
  <table class="api-table">
    <thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td><span class="enum-badge">ExchangeInstrumentID</span></td><td>Integer</td><td>Unique numeric identifier for the instrument</td><td><span class="enum-badge">2885</span></td></tr>
      <tr><td><span class="enum-badge">ExchangeSegment</span></td><td>Integer</td><td>Exchange segment code (1=NSECM, 2=NSEFO…)</td><td><span class="enum-badge">1</span></td></tr>
      <tr><td><span class="enum-badge">TradingSymbol</span></td><td>String</td><td>Symbol used in orders and market data</td><td><span class="enum-badge">RELIANCE</span></td></tr>
      <tr><td><span class="enum-badge">Name</span></td><td>String</td><td>Full company or instrument name</td><td><span class="enum-badge">Reliance Industries Ltd</span></td></tr>
      <tr><td><span class="enum-badge">Series</span></td><td>String</td><td>Instrument series — EQ, FUT, CE, PE</td><td><span class="enum-badge">EQ</span></td></tr>
      <tr><td><span class="enum-badge">LotSize</span></td><td>Integer</td><td>Minimum quantity for derivatives</td><td><span class="enum-badge">75</span></td></tr>
      <tr><td><span class="enum-badge">TickSize</span></td><td>Decimal</td><td>Minimum price movement allowed</td><td><span class="enum-badge">0.05</span></td></tr>
    </tbody>
  </table>
</div>



<!-- ═══════════════════ ADVANCED ════════════════ -->


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
<div style="overflow-x:auto">
  <table class="api-table">
    <thead><tr><th>Term</th><th>Meaning</th><th>Used For</th></tr></thead>
    <tbody>
      <tr><td>Instrument</td><td>Any tradable financial asset</td><td>Foundation for all API calls</td></tr>
      <tr><td><span class="enum-badge">ExchangeInstrumentID</span></td><td>Unique numeric token</td><td>Quotes, OHLC, WebSocket</td></tr>
      <tr><td><span class="enum-badge">TradingSymbol</span></td><td>Exchange-recognized symbol</td><td>Order placement</td></tr>
      <tr><td><span class="enum-badge">ExchangeSegment</span></td><td>Exchange + asset class code</td><td>All API calls</td></tr>
      <tr><td><span class="enum-badge">Series</span></td><td>Contract type (EQ/FUT/CE/PE)</td><td>Filtering instruments</td></tr>
      <tr><td><span class="enum-badge">LotSize</span></td><td>Minimum trade quantity</td><td>Derivative order validation</td></tr>
      <tr><td><span class="enum-badge">TickSize</span></td><td>Minimum price movement</td><td>Limit order price validation</td></tr>
    </tbody>
  </table>
</div>

<hr style="border:none;border-top:2px dashed #e5e7eb;margin:40px 0">

<!-- ═══ Master POST ═══ -->
<h3 id="modify-bracket-order" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Master</h3>

<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:12px">XTS provides an API call to fetch all tradable instruments as well as additional data in a single structure. This call can be made once per day, and the response can be persisted in local storage or a file based on your application design. You can then fetch instruments or symbols from this dataset throughout the day.</p>
<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">The structure of the response is as follows. The pipe (|) and line-separated values can be easily tokenized and bulk-loaded into your storage of choice.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#fff7ed;color:#c2410c;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #fed7aa;white-space:nowrap">POST</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="inst-master-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata/instruments/master</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('inst-master-url').innerText).then(function(){var b=document.getElementById('inst-master-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="inst-master-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>exchangeSegmentList</strong></td><td>Array</td><td>Y</td><td>Array of exchange segments</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body JSON</h3>
<div style="position:relative;margin-bottom:24px">
  <div id="inst-master-json-box" style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:hidden;max-height:220px">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegmentList"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NSECD"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NSEFO"</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">]</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-master-json-box');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-master-json-box').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 10px">Terminology</h3>
<div style="background:#fafafa;border:1px solid #e5e7eb;border-radius:10px;padding:22px 24px;margin-bottom:24px;display:flex;flex-direction:column;gap:18px">

  <div>
    <p style="font-weight:700;font-size:13px;color:#1e293b;margin-bottom:8px">If InstrumentType is Equities then use below header format:</p>
    <div style="background:#f0f0f0;border-radius:6px;padding:10px 14px;font-family:Consolas,monospace;font-size:11.5px;color:#374151;word-break:break-all;line-height:1.8;margin-bottom:8px">ExchangeSegment|ExchangeInstrumentID|InstrumentType|Name|Description|Series|NameWithSeries|InstrumentID|PriceBand.High|PriceBand.Low|FreezeQty|TickSize|LotSize|Multiplier|DisplayName|ISIN|PriceNumerator|PriceDenominator|DetailedDescription|ExtendedSurvIndicator|CautionIndicator|GSMIndicator</div>
    <p style="font-size:12px;color:#ff6b00;font-weight:600;margin-bottom:4px">Example:</p>
    <div style="background:#f0f0f0;border-radius:6px;padding:10px 14px;font-family:Consolas,monospace;font-size:11px;color:#374151;word-break:break-all;line-height:1.8">NSECM|2885|8|RELIANCE|RELIANCE-EQ|EQ|RELIANCE-EQ|11001000002885|1598|1307.6|6766210.1|1|1|1|RELIANCE|INE002A01018|1|1|RELIANCE INDUSTRIES LTD-EQ|0|1|1</div>
  </div>

  <div>
    <p style="font-weight:700;font-size:13px;color:#1e293b;margin-bottom:8px">If InstrumentType is Options then use below header format:</p>
    <div style="background:#f0f0f0;border-radius:6px;padding:10px 14px;font-family:Consolas,monospace;font-size:11.5px;color:#374151;word-break:break-all;line-height:1.8;margin-bottom:8px">ExchangeSegment|ExchangeInstrumentID|InstrumentType|Name|Description|Series|NameWithSeries|InstrumentID|PriceBand.High|PriceBand.Low|FreezeQty|TickSize|LotSize|Multiplier|UnderlyingInstrumentId|UnderlyingIndexName|ContractExpiration|StrikePrice|OptionType|DisplayName|PriceNumerator|PriceDenominator|DetailedDescription</div>
    <p style="font-size:12px;color:#ff6b00;font-weight:600;margin-bottom:4px">Example:</p>
    <div style="background:#f0f0f0;border-radius:6px;padding:10px 14px;font-family:Consolas,monospace;font-size:11px;color:#374151;word-break:break-all;line-height:1.8">NSEFO|48225|2|INIFTY|NIFTY2621725700PE|OPTIDX|NIFTY-OPTIDX|26048000048225|588|114.5|180|10.05|65|1|-1|Nifty 50|2026-02-17T14:30:00|25700|4|NIFTY 17FEB2026 PE 25700|1|1|NIFTY2621725700PE</div>
  </div>

  <div>
    <p style="font-weight:700;font-size:13px;color:#1e293b;margin-bottom:8px">If InstrumentType is Futures, spread then use below header format:</p>
    <div style="background:#f0f0f0;border-radius:6px;padding:10px 14px;font-family:Consolas,monospace;font-size:11.5px;color:#374151;word-break:break-all;line-height:1.8;margin-bottom:8px">ExchangeSegment|ExchangeInstrumentID|InstrumentType|Name|Description|Series|NameWithSeries|InstrumentID|PriceBand.High|PriceBand.Low|FreezeQty|TickSize|LotSize|Multiplier|UnderlyingInstrumentId|UnderlyingIndexName|ContractExpiration|DisplayName|PriceNumerator|PriceDenominator|DetailedDescription</div>
    <p style="font-size:12px;color:#ff6b00;font-weight:600;margin-bottom:4px">Example:</p>
    <div style="background:#f0f0f0;border-radius:6px;padding:10px 14px;font-family:Consolas,monospace;font-size:11px;color:#374151;word-break:break-all;line-height:1.8">NSEFO|49229|1|NIFTY|NIFTY|NIFTY26JANFUT|FUTIDX|NIFTY-FUTIDX|26002700049229|28369.8|23211.8|180|10.1|65|1|-1|Nifty 50|2026-01-27T14:30:00|NIFTY 27JAN2026|1|1|NIFTY26JANFUT</div>
  </div>

</div>

<hr style="border:none;border-top:2px dashed #e5e7eb;margin:40px 0">

<!-- ═══ Quote POST ═══ -->
<h3 id="Quote" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Quote</h3>

<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">You can fetch the quote details by using the POST /instruments/quotes request. In the response, you will receive the quote details based on the exchangeSegment and instrumentID, along with the publishFormat provided in the request. The request body must have the content type application/json and should be valid JSON.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#fff7ed;color:#c2410c;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #fed7aa;white-space:nowrap">POST</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="inst-quote-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata/instruments/quotes</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('inst-quote-url').innerText).then(function(){var b=document.getElementById('inst-quote-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="inst-quote-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>instruments</strong></td><td>Array</td><td>Y</td><td>Array of instrument objects</td></tr>
      <tr><td><strong>exchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>Y</td><td>ExchangeSegment</td></tr>
      <tr><td><strong>exchangeInstrumentID</strong></td><td><a style="color:#010816;text-decoration:none">ExchangeInstrumentID 👁</a></td><td>Y</td><td>Exchange Scrip code or Symbol Token is unique identifier</td></tr>
      <tr><td><strong>xtsMessageCode</strong></td><td><a href="../Enums/#4-xts-message-code" style="color:#0a49c7;text-decoration:none">xtsMessageCode ↗</a></td><td>Y</td><td>It is system generated message code</td></tr>
      <tr><td><strong>publishFormat</strong></td><td><a href="../Enums/#10-publishformat" style="color:#0a49c7;text-decoration:none">PublishFormat ↗</a></td><td>Y</td><td>PublishFormat</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body JSON</h3>
<div style="position:relative;margin-bottom:24px">
  <div id="inst-quote-req-json" style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:hidden;max-height:220px">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"instruments"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">22</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">],</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"xtsMessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1502</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"publishFormat"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"JSON"</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-quote-req-json');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-quote-req-json').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>mdp</strong></td><td><a style="color:#010816;text-decoration:none">mdp 👁</a></td><td>xtsMessageCode</td></tr>
      <tr><td><strong>quotesList</strong></td><td>Object</td><td>Response of subscribed instrument</td></tr>
      <tr><td><strong>listQuotes</strong></td><td>Object</td><td>Market data for the list of requested instruments</td></tr>
      <tr><td><strong>MessageCode</strong></td><td><a style="color:#010816;text-decoration:none">MessageCode 👁</a></td><td>It is system generated message code</td></tr>
      <tr><td><strong>MessageVersion</strong></td><td><a style="color:#010816;text-decoration:none">MessageVersion 👁</a></td><td>It is system generated message version</td></tr>
      <tr><td><strong>ApplicationType</strong></td><td><a style="color:#010816;text-decoration:none">ApplicationType 👁</a></td><td>It is system generated ApplicationType</td></tr>
      <tr><td><strong>TokenID</strong></td><td><a style="color:#010816;text-decoration:none">TokenID 👁</a></td><td>It is system generated TokenID</td></tr>
      <tr><td><strong>ExchangeSegment</strong></td><td></td><td>ExchangeSegment</td></tr>
      <tr><td><strong>ExchangeInstrumentID</strong></td><td><a style="color:#010816;text-decoration:none">ExchangeInstrumentID 👁</a></td><td>Exchange Scrip code or Symbol Token is unique identifier</td></tr>
      <tr><td><strong>ExchangeTimeStamp</strong></td><td><a style="color:#010816;text-decoration:none">ExchangeTimeStamp 👁</a></td><td>A timestamp represents the time at which an event occurred, as recorded by the exchange.</td></tr>
      <tr><td><strong>Bids</strong></td><td>Object</td><td>The bid price displayed in most quote services is the highest bid price in the market. The ask or offer price on the other hand is the lowest price a seller of a particular stock is willing to sell a share of that given stock.</td></tr>
      <tr><td><strong>Asks</strong></td><td>Object</td><td>The ask price is the lowest price a seller is willing to accept for a share/unit of a stock.</td></tr>
      <tr><td><strong>Size</strong></td><td><a style="color:#010816;text-decoration:none">Size 👁</a></td><td>Total quantity available at the Ask or Bid price</td></tr>
      <tr><td><strong>Price</strong></td><td><a style="color:#010816;text-decoration:none">Price 👁</a></td><td>Highest price at which buyers are willing to purchase the instrument</td></tr>
      <tr><td><strong>TotalOrders</strong></td><td><a style="color:#010816;text-decoration:none">TotalOrders 👁</a></td><td>Total number of buy orders placed at the bid or ask price.</td></tr>
      <tr><td><strong>BuyBackMarketMaker</strong></td><td><a style="color:#010816;text-decoration:none">BuyBackMarketMaker 👁</a></td><td>Indicates whether the bid is placed by a buy back market maker.</td></tr>
      <tr><td><strong>Touchline</strong></td><td>Object</td><td>Touchline represents the best Bid and best ask prices for a security at any given time during the trading day.</td></tr>
      <tr><td><strong>BidInfo</strong></td><td>Object</td><td>The bid price displayed in most quote services represents the highest price a buyer is willing to pay in the market.</td></tr>
      <tr><td><strong>AskInfo</strong></td><td>Object</td><td>The ask price is the lowest price at which a seller is willing to accept for a share of a given stock.</td></tr>
      <tr><td><strong>LastTradedPrice</strong></td><td><a style="color:#010816;text-decoration:none">LastTradedPrice 👁</a></td><td>The price at which the most recent trade for the instrument was executed.</td></tr>
      <tr><td><strong>LastTradedQuantity</strong></td><td><a style="color:#010816;text-decoration:none">LastTradedQuantity 👁</a></td><td>The quantity traded in the most recent transaction.</td></tr>
      <tr><td><strong>TotalBuyQuantity</strong></td><td><a style="color:#010816;text-decoration:none">TotalBuyQuantity 👁</a></td><td>The total quantity of buy orders currently available in the market.</td></tr>
      <tr><td><strong>TotalSellQuantity</strong></td><td><a style="color:#010816;text-decoration:none">TotalSellQuantity 👁</a></td><td>The total quantity of sell orders currently available in the market.</td></tr>
      <tr><td><strong>TotalTradedQuantity</strong></td><td><a style="color:#010816;text-decoration:none">TotalTradedQuantity 👁</a></td><td>The cumulative quantity of the instrument traded during the trading session.</td></tr>
      <tr><td><strong>AverageTradedPrice</strong></td><td><a style="color:#010816;text-decoration:none">AverageTradedPrice 👁</a></td><td>The volume weighted average price (VWAP) of all trades executed during the trading session.</td></tr>
      <tr><td><strong>LastTradedTime</strong></td><td><a style="color:#010816;text-decoration:none">LastTradedTime 👁</a></td><td>The timestamp at which the most recent trade occurred (exchange time).</td></tr>
      <tr><td><strong>LastUpdateTime</strong></td><td><a style="color:#010816;text-decoration:none">LastUpdateTime 👁</a></td><td>The timestamp of the latest market data update received from the exchange.</td></tr>
      <tr><td><strong>PercentChange</strong></td><td><a style="color:#010816;text-decoration:none">PercentChange 👁</a></td><td>The percentage change in price compared to the previous close.</td></tr>
      <tr><td><strong>Open</strong></td><td><a style="color:#010816;text-decoration:none">Open 👁</a></td><td>The price at which the instrument first traded when the market opened for the session.</td></tr>
      <tr><td><strong>High</strong></td><td><a style="color:#010816;text-decoration:none">High 👁</a></td><td>The highest traded price of the instrument during the trading session.</td></tr>
      <tr><td><strong>Low</strong></td><td><a style="color:#010816;text-decoration:none">Low 👁</a></td><td>The lowest traded price of the instrument during the trading session.</td></tr>
      <tr><td><strong>Close</strong></td><td><a style="color:#010816;text-decoration:none">Close 👁</a></td><td>The most recent traded price or the official closing price of the session.</td></tr>
      <tr><td><strong>TotalValueTraded</strong></td><td><a style="color:#010816;text-decoration:none">TotalValueTraded 👁</a></td><td>The total traded value during the session, calculated as price × quantity for all trades.</td></tr>
      <tr><td><strong>BuyBackTotalBuy</strong></td><td><a style="color:#010816;text-decoration:none">BuyBackTotalBuy 👁</a></td><td>The total buy quantity placed under buy back activity (exchange specific).</td></tr>
      <tr><td><strong>BuyBackTotalSell</strong></td><td><a style="color:#010816;text-decoration:none">BuyBackTotalSell 👁</a></td><td>The total sell quantity placed under buy back activity (exchange specific).</td></tr>
      <tr><td><strong>BookType</strong></td><td><a style="color:#010816;text-decoration:none">BookType 👁</a></td><td>BookType</td></tr>
      <tr><td><strong>XMarketType</strong></td><td><a style="color:#010816;text-decoration:none">XMarketType 👁</a></td><td>XMarketType</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body JSON</h3>
<div style="position:relative;margin-bottom:24px">
  <div id="inst-quote-res-json" style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:hidden;max-height:220px">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-response-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Instrument subscribed successfully!"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"mdp"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1502</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"quotesList"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"listQuotes"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1502</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageVersion"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ApplicationType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TokenID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeTimeStamp"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1305682353</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Bids"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe"> "Size"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Price"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TotalOrders"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"BuyBackMarketMaker"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#ffd700"> }</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Asks"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe"> "Size"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">14016</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Price"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">900.05</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TotalOrders"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">10</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"BuyBackMarketMaker"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#ffd700"> }</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Touchline"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BidInfo"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe"> "Size"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Price"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TotalOrders"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"BuyBackMarketMaker"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#ffd700"> }</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AskInfo"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe"> "Size"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">14016</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Price"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">900.05</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TotalOrders"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">10</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"BuyBackMarketMaker"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#ffd700"> }</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LastTradedPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">900.05</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LastTradedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalBuyQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalSellQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">14016</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalTradedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">14005561</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AverageTradedPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">900.01</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LastTradedTime"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1305682353</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LastUpdateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1305687353</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PercentChange"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Open"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">900</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"High"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">900.1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Low"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">900.7</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Close"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">900.05</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalValueTraded"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1805602348</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BuyBackTotalBuy"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">30125</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BuyBackTotalSell"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">16983</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BookType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"XMarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-quote-res-json');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-quote-res-json').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:2px dashed #e5e7eb;margin:40px 0">

<!-- ═══ GetIndexList GET ═══ -->
<h3 id="GetIndexList" style="color:#ff6b00;font-weight:800;margin-bottom:6px">GetIndexList</h3>

<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">You can retrieve the list of indices by using the GET /instruments/indexlist request. In the response, you will receive the names of all indices that belong to the specified <strong>exchangeSegment</strong>.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#e6f4ea;color:#1a7f37;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #bbf7d0;white-space:nowrap">GET</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="inst-indexlist-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata/instruments/indexlist?exchangeSegment=1</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('inst-indexlist-url').innerText).then(function(){var b=document.getElementById('inst-indexlist-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="inst-indexlist-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>exchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>Y</td><td>ExchangeSegment</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>exchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>ExchangeSegment</td></tr>
      <tr><td><strong>indexList</strong></td><td>Array</td><td>IndexList</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body JSON</h3>
<div style="position:relative;margin-bottom:24px">
  <div id="inst-indexlist-json" style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:hidden;max-height:220px">
<span style="color:#ffd700">[</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-response-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Record Found"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"indexList"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY 50_26007"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY BANK_26001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"INDIA VIX_26007"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY IT_26007"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY 100_26007"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MIDCAP 50_26005"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY GS 11 15YR_26006"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY INFRA_26007"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">]</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">]</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-indexlist-json');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-indexlist-json').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:2px dashed #e5e7eb;margin:40px 0">

<!-- ═══ GetSeries GET ═══ -->
<h3 id="GetSeries" style="color:#ff6b00;font-weight:800;margin-bottom:6px">GetSeries</h3>

<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">You can search for the series by using the GET /instruments/instrument/series request. In the response, you will receive the series that you searched for based on the <strong>exchangeSegment</strong> sent in the request.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#e6f4ea;color:#1a7f37;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #bbf7d0;white-space:nowrap">GET</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="inst-series-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata/instruments/instrument/series?exchangeSegment=1</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('inst-series-url').innerText).then(function(){var b=document.getElementById('inst-series-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="inst-series-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>exchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>Y</td><td>ExchangeSegment</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>series</strong></td><td>Array</td><td>The series field represents to the trading category or segment under which an instrument is listed on the exchange.</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body JSON</h3>
<div style="position:relative;margin-bottom:24px">
  <div id="inst-series-json" style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:hidden;max-height:220px">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-response-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Record Found"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"series"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BL"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"SM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"W1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"MF"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"SL"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"W"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">]</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-series-json');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-series-json').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:2px dashed #e5e7eb;margin:40px 0">

<!-- ═══ GetEquitySymbol GET ═══ -->
<h3 id="GetEquitySymbol" style="color:#ff6b00;font-weight:800;margin-bottom:6px">GetEquitySymbol</h3>

<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">You can search for the equity symbol by using the GET /instruments/instrument/symbol request. In the response, you will receive the equity symbol information based on the <strong>exchangeSegment</strong>, <strong>series</strong>, and <strong>symbol</strong> provided in the request.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#e6f4ea;color:#1a7f37;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #bbf7d0;white-space:nowrap">GET</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="inst-eqsym-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata/instruments/instrument/symbol?exchangeSegment=1&amp;series=EQ&amp;symbol=Acc</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('inst-eqsym-url').innerText).then(function(){var b=document.getElementById('inst-eqsym-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="inst-eqsym-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>exchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>Y</td><td>ExchangeSegment</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>ExchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>ExchangeSegment</td></tr>
      <tr><td><strong>ExchangeInstrumentID</strong></td><td><a style="color:#010816;text-decoration:none">ExchangeInstrumentID 👁</a></td><td>Exchange Scrip code or Symbol Token is unique identifier</td></tr>
      <tr><td><strong>InstrumentType</strong></td><td><a href="../Enums/#3-instrumenttype" style="color:#0a49c7;text-decoration:none">InstrumentType ↗</a></td><td>InstrumentType</td></tr>
      <tr><td><strong>Name</strong></td><td><a style="color:#010816;text-decoration:none">Name 👁</a></td><td>The official symbol or short name of the instrument as defined by the exchange.</td></tr>
      <tr><td><strong>DisplayName</strong></td><td><a style="color:#010816;text-decoration:none">DisplayName 👁</a></td><td>A user-friendly name of the instrument used for display purposes in applications.</td></tr>
      <tr><td><strong>Description</strong></td><td><a style="color:#010816;text-decoration:none">Description 👁</a></td><td>A detailed description of the instrument, including company or contract details.</td></tr>
      <tr><td><strong>Series</strong></td><td><a style="color:#010816;text-decoration:none">Series 👁</a></td><td>The exchange defined series under which the instrument is listed (eg. EQ, SL, A).</td></tr>
      <tr><td><strong>NameWithSeries</strong></td><td><a style="color:#010816;text-decoration:none">NameWithSeries 👁</a></td><td>The instrument name appended with its series (e.g., RELIANCE EQ).</td></tr>
      <tr><td><strong>InstrumentID</strong></td><td><a style="color:#010816;text-decoration:none">InstrumentID 👁</a></td><td>A unique system-generated identifier assigned to the instrument by the exchange or trading system.</td></tr>
      <tr><td><strong>PriceBand</strong></td><td>Object</td><td>The permitted price range within which the instrument can trade during a session.</td></tr>
      <tr><td><strong>High</strong></td><td><a style="color:#010816;text-decoration:none">High 👁</a></td><td>The upper limit of the price band for the instrument.</td></tr>
      <tr><td><strong>Low</strong></td><td><a style="color:#010816;text-decoration:none">Low 👁</a></td><td>The lower limit of the price band for the instrument.</td></tr>
      <tr><td><strong>CreditRating</strong></td><td><a style="color:#010816;text-decoration:none">CreditRating 👁</a></td><td>The credit rating assigned to the instrument, if applicable (typically for debt instruments).</td></tr>
      <tr><td><strong>FreezeQty</strong></td><td><a style="color:#010816;text-decoration:none">FreezeQty 👁</a></td><td>The maximum order quantity allowed per order for the instrument.</td></tr>
      <tr><td><strong>TickSize</strong></td><td><a style="color:#010816;text-decoration:none">TickSize 👁</a></td><td>The minimum price movement allowed for the instrument.</td></tr>
      <tr><td><strong>LotSize</strong></td><td><a style="color:#010816;text-decoration:none">LotSize 👁</a></td><td>The minimum tradable quantity for the instrument.</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body JSON</h3>
<div style="position:relative;margin-bottom:24px">
  <div id="inst-eqsym-json" style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:hidden;max-height:220px">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-response-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Record Found"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">22</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DisplayName"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC LIMITED"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Series"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NameWithSeries"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC-EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1100100000022</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PriceBand"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"High"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1804.2</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Low"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1476.0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CreditRating"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1476.00-1804.00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1804.00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1476.00"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FreezeQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">66476</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TickSize"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0.05</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LotSize"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-eqsym-json');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-eqsym-json').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:2px dashed #e5e7eb;margin:40px 0">

<!-- ═══ GetExpiryDate GET ═══ -->
<h3 id="GetExpiryDate" style="color:#ff6b00;font-weight:800;margin-bottom:6px">GetExpiryDate</h3>

<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">You can search for the expiry date by using the GET /instruments/instrument/expiryDate request. In the response, you will receive the expiry date based on the <strong>exchangeSegment</strong>, <strong>series</strong>, and <strong>symbol</strong> provided in the request.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#e6f4ea;color:#1a7f37;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #bbf7d0;white-space:nowrap">GET</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="inst-expiry-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata/instruments/instrument/expiryDate?exchangeSegment=2&amp;series=FUTIDX&amp;symbol=NIFTY</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('inst-expiry-url').innerText).then(function(){var b=document.getElementById('inst-expiry-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="inst-expiry-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>exchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>Y</td><td>ExchangeSegment</td></tr>
      <tr><td><strong>series</strong></td><td><a style="color:#010816;text-decoration:none">Series 👁</a></td><td>Y</td><td>The exchange defined series under which the instrument is listed (eg. EQ, SL, A).</td></tr>
      <tr><td><strong>symbol</strong></td><td><a style="color:#010816;text-decoration:none">Symbol 👁</a></td><td>Y</td><td>Exchange defined trading code used to identify an instrument.</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body JSON</h3>
<div style="position:relative;margin-bottom:24px">
  <div id="inst-expiry-json" style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:hidden;max-height:220px">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"2025-01-30T14:30:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"2025-02-27T14:30:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"2025-03-27T14:30:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"2025-06-26T14:30:00"</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">]</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-expiry-json');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-expiry-json').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:2px dashed #e5e7eb;margin:40px 0">

<!-- ═══ GetFutureSymbol GET ═══ -->
<h3 id="GetFutureSymbol" style="color:#ff6b00;font-weight:800;margin-bottom:6px">GetFutureymbol</h3>

<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">You can search for the future symbol by using the GET /instruments/instrument/futureSymbol request. In the response, you will receive the future symbol based on the <strong>exchangeSegment</strong>, <strong>series</strong>, <strong>symbol</strong>, and <strong>expiryDate</strong> provided in the request.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#e6f4ea;color:#1a7f37;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #bbf7d0;white-space:nowrap">GET</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="inst-futsym-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata/instruments/instrument/futureSymbol?exchangeSegment=2&amp;series=FUTIDX&amp;symbol=NIFTY&amp;expiryDate=30Jan2025</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('inst-futsym-url').innerText).then(function(){var b=document.getElementById('inst-futsym-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="inst-futsym-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>exchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>Y</td><td>ExchangeSegment</td></tr>
      <tr><td><strong>series</strong></td><td><a style="color:#010816;text-decoration:none">Series 👁</a></td><td>Y</td><td>The exchange defined series under which the instrument is listed (eg. EQ, SL, A).</td></tr>
      <tr><td><strong>symbol</strong></td><td><a style="color:#010816;text-decoration:none">Symbol 👁</a></td><td>Y</td><td>Exchange defined trading code used to identify an instrument.</td></tr>
      <tr><td><strong>expiryDate</strong></td><td><a style="color:#010816;text-decoration:none">ExpiryDate 👁</a></td><td>Y</td><td>ExpiryDate represents the date on which a derivative contract expires and is settled as per exchange rules.</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>ExchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>ExchangeSegment</td></tr>
      <tr><td><strong>ExchangeInstrumentID</strong></td><td><a style="color:#010816;text-decoration:none">ExchangeInstrumentID 👁</a></td><td>Exchange Scrip code or Symbol Token is unique identifier</td></tr>
      <tr><td><strong>InstrumentType</strong></td><td><a href="../Enums/#3-instrumenttype" style="color:#0a49c7;text-decoration:none">InstrumentType ↗</a></td><td>InstrumentType</td></tr>
      <tr><td><strong>Name</strong></td><td><a style="color:#010816;text-decoration:none">Name 👁</a></td><td>The official symbol or short name of the instrument as defined by the exchange.</td></tr>
      <tr><td><strong>DisplayName</strong></td><td><a style="color:#010816;text-decoration:none">DisplayName 👁</a></td><td>A user-friendly name of the instrument used for display purposes in applications.</td></tr>
      <tr><td><strong>Description</strong></td><td><a style="color:#010816;text-decoration:none">Description 👁</a></td><td>A detailed description of the instrument, including company or contract details.</td></tr>
      <tr><td><strong>Series</strong></td><td><a style="color:#010816;text-decoration:none">Series 👁</a></td><td>The exchange defined series under which the instrument is listed (eg. EQ, SL, A).</td></tr>
      <tr><td><strong>NameWithSeries</strong></td><td><a style="color:#010816;text-decoration:none">NameWithSeries 👁</a></td><td>The instrument name appended with its series (e.g., NIFTY FUT).</td></tr>
      <tr><td><strong>InstrumentID</strong></td><td><a style="color:#010816;text-decoration:none">InstrumentID 👁</a></td><td>A unique system-generated identifier assigned to the instrument by the exchange or trading system.</td></tr>
      <tr><td><strong>PriceBand</strong></td><td>Object</td><td>The permitted price range within which the instrument can trade during a session.</td></tr>
      <tr><td><strong>High</strong></td><td><a style="color:#010816;text-decoration:none">High 👁</a></td><td>The upper limit of the price band for the instrument.</td></tr>
      <tr><td><strong>Low</strong></td><td><a style="color:#010816;text-decoration:none">Low 👁</a></td><td>The lower limit of the price band for the instrument.</td></tr>
      <tr><td><strong>CreditRating</strong></td><td><a style="color:#010816;text-decoration:none">CreditRating 👁</a></td><td>The credit rating assigned to the instrument, if applicable (typically for debt instruments).</td></tr>
      <tr><td><strong>HighString</strong></td><td><a style="color:#010816;text-decoration:none">HighString 👁</a></td><td>Upper price band represented as a formatted string.</td></tr>
      <tr><td><strong>LowString</strong></td><td><a style="color:#010816;text-decoration:none">LowString 👁</a></td><td>Lower price band represented as a formatted string.</td></tr>
      <tr><td><strong>HighExecBandString</strong></td><td><a style="color:#010816;text-decoration:none">HighExecBandString 👁</a></td><td>Upper execution price band displayed as a formatted string.</td></tr>
      <tr><td><strong>LowExecBandString</strong></td><td><a style="color:#010816;text-decoration:none">LowExecBandString 👁</a></td><td>Lower execution price band displayed as a formatted string.</td></tr>
      <tr><td><strong>FreezeQty</strong></td><td><a style="color:#010816;text-decoration:none">FreezeQty 👁</a></td><td>The maximum order quantity allowed per order for the instrument.</td></tr>
      <tr><td><strong>TickSize</strong></td><td><a style="color:#010816;text-decoration:none">TickSize 👁</a></td><td>The minimum price movement allowed for the instrument.</td></tr>
      <tr><td><strong>LotSize</strong></td><td><a style="color:#010816;text-decoration:none">LotSize 👁</a></td><td>The minimum tradable quantity for the instrument.</td></tr>
      <tr><td><strong>UnderlyingInstrumentId</strong></td><td><a style="color:#010816;text-decoration:none">UnderlyingInstrumentId 👁</a></td><td>The unique instrument identifier of the underlying asset for a derivative contract.</td></tr>
      <tr><td><strong>UnderlyingIndexName</strong></td><td><a style="color:#010816;text-decoration:none">UnderlyingIndexName 👁</a></td><td>The name of the underlying index on which the derivative contract is based.</td></tr>
      <tr><td><strong>ContractExpiration</strong></td><td><a style="color:#010816;text-decoration:none">ContractExpiration 👁</a></td><td>The date on which a derivative contract expires and is settled as per exchange rules.</td></tr>
      <tr><td><strong>ContractExpirationString</strong></td><td><a style="color:#010816;text-decoration:none">ContractExpirationString 👁</a></td><td>The contract expiration date represented as a formatted string.</td></tr>
      <tr><td><strong>RemainingExpiryDays</strong></td><td><a style="color:#010816;text-decoration:none">RemainingExpiryDays 👁</a></td><td>The number of calendar days remaining until the contract expires.</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body JSON</h3>
<div style="position:relative;margin-bottom:24px">
  <div id="inst-futsym-json" style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:hidden;max-height:220px">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-response-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Record Found"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">49229</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NIFTY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NIFTY26JANFUT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Series"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"FUTIDX"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NameWithSeries"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NIFTY-FUTIDX"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">26002700049229</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PriceBand"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"High"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">28369.8</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Low"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">23211.8</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CreditRating"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"23211.80-28369.80"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"28369.80"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"23211.80"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighExecBandString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"28369.80"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowExecBandString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"23211.80"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FreezeQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1800</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TickSize"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0.05</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LotSize"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">25</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UnderlyingInstrumentId"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">26000</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UnderlyingIndexName"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Nifty 50"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ContractExpiration"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"2026-01-27T14:30:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ContractExpirationString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"27JAN2026"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"RemainingExpiryDays"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">8</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-futsym-json');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-futsym-json').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:2px dashed #e5e7eb;margin:40px 0">

<!-- ═══ GetOptionType GET ═══ -->
<h3 id="GetOptionType" style="color:#ff6b00;font-weight:800;margin-bottom:6px">GetOptionType</h3>

<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">You can search for the option type by using the GET /instruments/instrument/optionType request. In the response, you will receive the option types based on the <strong>exchangeSegment</strong>, <strong>series</strong>, <strong>symbol</strong>, and <strong>expiryDate</strong> provided in the request.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#e6f4ea;color:#1a7f37;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #bbf7d0;white-space:nowrap">GET</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="inst-opttype-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata/instruments/instrument/optionType?exchangeSegment=2&amp;series=OPTIDX&amp;symbol=NIFTY&amp;expiryDate=30Jan2025</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('inst-opttype-url').innerText).then(function(){var b=document.getElementById('inst-opttype-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="inst-opttype-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>exchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>Y</td><td>ExchangeSegment</td></tr>
      <tr><td><strong>series</strong></td><td><a style="color:#010816;text-decoration:none">Series 👁</a></td><td>Y</td><td>The exchange defined series under which the instrument is listed (eg. EQ, SL, A).</td></tr>
      <tr><td><strong>symbol</strong></td><td><a style="color:#010816;text-decoration:none">Symbol 👁</a></td><td>Y</td><td>Exchange defined trading code used to identify an instrument.</td></tr>
      <tr><td><strong>expiryDate</strong></td><td><a style="color:#010816;text-decoration:none">ExpiryDate 👁</a></td><td>Y</td><td>ExpiryDate represents the date on which a derivative contract expires.</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>series</strong></td><td>Array</td><td>Array of option types (CE, PE) available for the given expiry.</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body JSON</h3>
<div style="position:relative;margin-bottom:24px">
  <div id="inst-opttype-json" style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:hidden;max-height:220px">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-response-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Record Found"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"series"</span><span style="color:#d4d4d4">: [</span><span style="color:#ce9178">"CE"</span><span style="color:#d4d4d4">, </span><span style="color:#ce9178">"PE"</span><span style="color:#d4d4d4">]</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-opttype-json');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-opttype-json').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:2px dashed #e5e7eb;margin:40px 0">

<!-- ═══ GetStrikePrice GET ═══ -->
<h3 id="GetStrikePrice" style="color:#ff6b00;font-weight:800;margin-bottom:6px">GetStrikePrice</h3>

<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">You can search for the strike prices by using the GET /instruments/instrument/strikePrice request. In the response, you will receive all strike prices available for the specified <strong>exchangeSegment</strong>, <strong>series</strong>, <strong>symbol</strong>, <strong>expiryDate</strong>, and <strong>optionType</strong>.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#e6f4ea;color:#1a7f37;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #bbf7d0;white-space:nowrap">GET</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="inst-strike-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata/instruments/instrument/strikePrice?exchangeSegment=2&amp;series=OPTIDX&amp;symbol=NIFTY&amp;expiryDate=30Jan2025&amp;optionType=CE</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('inst-strike-url').innerText).then(function(){var b=document.getElementById('inst-strike-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="inst-strike-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>exchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>Y</td><td>ExchangeSegment</td></tr>
      <tr><td><strong>series</strong></td><td><a style="color:#010816;text-decoration:none">Series 👁</a></td><td>Y</td><td>The exchange defined series under which the instrument is listed (eg. EQ, SL, A).</td></tr>
      <tr><td><strong>symbol</strong></td><td><a style="color:#010816;text-decoration:none">Symbol 👁</a></td><td>Y</td><td>Exchange defined trading code used to identify an instrument.</td></tr>
      <tr><td><strong>expiryDate</strong></td><td><a style="color:#010816;text-decoration:none">ExpiryDate 👁</a></td><td>Y</td><td>ExpiryDate represents the date on which a derivative contract expires.</td></tr>
      <tr><td><strong>optionType</strong></td><td><a href="../Enums/#9-optiontype" style="color:#0a49c7;text-decoration:none">OptionType ↗</a></td><td>Y</td><td>OptionType</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body JSON</h3>
<div style="position:relative;margin-bottom:24px">
  <div id="inst-strike-json" style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:hidden;max-height:220px">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"22000"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"22500"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"23000"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"23500"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"24000"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"24500"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"25000"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"25500"</span><br>
&nbsp;&nbsp;<span style="color:#d4d4d4">]</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-strike-json');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-strike-json').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

<hr style="border:none;border-top:2px dashed #e5e7eb;margin:40px 0">

<!-- ═══ GetOptionSymbol GET ═══ -->
<h3 id="GetOptionSymbol" style="color:#ff6b00;font-weight:800;margin-bottom:6px">GetOptionSymbol</h3>

<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">You can search for the option symbol by using the GET /instruments/instrument/optionSymbol request. In the response, you will receive the option symbol based on the <strong>exchangeSegment</strong>, <strong>series</strong>, <strong>symbol</strong>, <strong>expiryDate</strong>, <strong>optionType</strong>, and <strong>strikePrice</strong> provided in the request.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#e6f4ea;color:#1a7f37;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #bbf7d0;white-space:nowrap">GET</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="inst-optsym-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata/instruments/instrument/optionSymbol?exchangeSegment=2&amp;series=OPTIDX&amp;symbol=NIFTY&amp;expiryDate=30Jan2025&amp;optionType=CE&amp;strikePrice=25000</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('inst-optsym-url').innerText).then(function(){var b=document.getElementById('inst-optsym-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="inst-optsym-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>exchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>Y</td><td>ExchangeSegment</td></tr>
      <tr><td><strong>series</strong></td><td><a style="color:#010816;text-decoration:none">Series 👁</a></td><td>Y</td><td>The exchange defined series under which the instrument is listed (eg. EQ, SL, A).</td></tr>
      <tr><td><strong>symbol</strong></td><td><a style="color:#010816;text-decoration:none">Symbol 👁</a></td><td>Y</td><td>Exchange defined trading code used to identify an instrument.</td></tr>
      <tr><td><strong>expiryDate</strong></td><td><a style="color:#010816;text-decoration:none">ExpiryDate 👁</a></td><td>Y</td><td>ExpiryDate represents the date on which a derivative contract expires.</td></tr>
      <tr><td><strong>optionType</strong></td><td><a href="../Enums/#9-optiontype" style="color:#0a49c7;text-decoration:none">OptionType ↗</a></td><td>Y</td><td>OptionType</td></tr>
      <tr><td><strong>strikePrice</strong></td><td><a style="color:#010816;text-decoration:none">StrikePrice 👁</a></td><td>Y</td><td>The strike price is the predetermined price at which the buyer of a call option can exercise their rights to buy the underlying asset.</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead><tr><th>Parameter Name</th><th>Type</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td><strong>ExchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>ExchangeSegment</td></tr>
      <tr><td><strong>ExchangeInstrumentID</strong></td><td><a style="color:#010816;text-decoration:none">ExchangeInstrumentID 👁</a></td><td>Exchange Scrip code or Symbol Token is unique identifier</td></tr>
      <tr><td><strong>InstrumentType</strong></td><td><a href="../Enums/#3-instrumenttype" style="color:#0a49c7;text-decoration:none">InstrumentType ↗</a></td><td>InstrumentType</td></tr>
      <tr><td><strong>Name</strong></td><td><a style="color:#010816;text-decoration:none">Name 👁</a></td><td>The official symbol or short name of the instrument as defined by the exchange.</td></tr>
      <tr><td><strong>DisplayName</strong></td><td><a style="color:#010816;text-decoration:none">DisplayName 👁</a></td><td>A user-friendly name of the instrument used for display purposes in applications.</td></tr>
      <tr><td><strong>Description</strong></td><td><a style="color:#010816;text-decoration:none">Description 👁</a></td><td>A detailed description of the instrument, including company or contract details.</td></tr>
      <tr><td><strong>Series</strong></td><td><a style="color:#010816;text-decoration:none">Series 👁</a></td><td>The exchange defined series under which the instrument is listed (eg. EQ, SL, A).</td></tr>
      <tr><td><strong>NameWithSeries</strong></td><td><a style="color:#010816;text-decoration:none">NameWithSeries 👁</a></td><td>The instrument name appended with its series.</td></tr>
      <tr><td><strong>InstrumentID</strong></td><td><a style="color:#010816;text-decoration:none">InstrumentID 👁</a></td><td>A unique system-generated identifier assigned to the instrument by the exchange or trading system.</td></tr>
      <tr><td><strong>PriceBand</strong></td><td>Object</td><td>The permitted price range within which the instrument can trade during a session.</td></tr>
      <tr><td><strong>High</strong></td><td><a style="color:#010816;text-decoration:none">High 👁</a></td><td>The upper limit of the price band for the instrument.</td></tr>
      <tr><td><strong>Low</strong></td><td><a style="color:#010816;text-decoration:none">Low 👁</a></td><td>The lower limit of the price band for the instrument.</td></tr>
      <tr><td><strong>CreditRating</strong></td><td><a style="color:#010816;text-decoration:none">CreditRating 👁</a></td><td>The credit rating assigned to the instrument, if applicable.</td></tr>
      <tr><td><strong>HighString</strong></td><td><a style="color:#010816;text-decoration:none">HighString 👁</a></td><td>Upper price band represented as a formatted string.</td></tr>
      <tr><td><strong>LowString</strong></td><td><a style="color:#010816;text-decoration:none">LowString 👁</a></td><td>Lower price band represented as a formatted string.</td></tr>
      <tr><td><strong>HighExecBandString</strong></td><td><a style="color:#010816;text-decoration:none">HighExecBandString 👁</a></td><td>Upper execution price band displayed as a formatted string.</td></tr>
      <tr><td><strong>LowExecBandString</strong></td><td><a style="color:#010816;text-decoration:none">LowExecBandString 👁</a></td><td>Lower execution price band displayed as a formatted string.</td></tr>
      <tr><td><strong>FreezeQty</strong></td><td><a style="color:#010816;text-decoration:none">FreezeQty 👁</a></td><td>The maximum order quantity allowed per order for the instrument.</td></tr>
      <tr><td><strong>TickSize</strong></td><td><a style="color:#010816;text-decoration:none">TickSize 👁</a></td><td>The minimum price movement allowed for the instrument.</td></tr>
      <tr><td><strong>LotSize</strong></td><td><a style="color:#010816;text-decoration:none">LotSize 👁</a></td><td>The minimum tradable quantity for the instrument.</td></tr>
      <tr><td><strong>UnderlyingInstrumentId</strong></td><td><a style="color:#010816;text-decoration:none">UnderlyingInstrumentId 👁</a></td><td>The unique instrument identifier of the underlying asset for a derivative contract.</td></tr>
      <tr><td><strong>UnderlyingIndexName</strong></td><td><a style="color:#010816;text-decoration:none">UnderlyingIndexName 👁</a></td><td>The name of the underlying index on which the derivative contract is based.</td></tr>
      <tr><td><strong>ContractExpiration</strong></td><td><a style="color:#010816;text-decoration:none">ContractExpiration 👁</a></td><td>The date on which a derivative contract expires and is settled as per exchange rules.</td></tr>
      <tr><td><strong>ContractExpirationString</strong></td><td><a style="color:#010816;text-decoration:none">ContractExpirationString 👁</a></td><td>The contract expiration date represented as a formatted string.</td></tr>
      <tr><td><strong>RemainingExpiryDays</strong></td><td><a style="color:#010816;text-decoration:none">RemainingExpiryDays 👁</a></td><td>The number of calendar days remaining until the contract expires.</td></tr>
      <tr><td><strong>StrikePrice</strong></td><td><a style="color:#010816;text-decoration:none">StrikePrice 👁</a></td><td>The strike price is the predetermined price at which the option can be exercised.</td></tr>
      <tr><td><strong>OptionType</strong></td><td><a href="../Enums/#9-optiontype" style="color:#0a49c7;text-decoration:none">OptionType ↗</a></td><td>OptionType</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body JSON</h3>
<div style="position:relative;margin-bottom:24px">
  <div id="inst-optsym-json" style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:hidden;max-height:220px">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-response-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Record Found"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">48225</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NIFTY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NIFTY2621725000CE"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Series"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"OPTIDX"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NameWithSeries"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NIFTY-OPTIDX"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">26048000048225</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PriceBand"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"High"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">588.0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Low"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0.05</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CreditRating"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"0.05-588.00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"588.00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"0.05"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighExecBandString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"588.00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowExecBandString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"0.05"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FreezeQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1800</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TickSize"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0.05</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LotSize"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">25</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UnderlyingInstrumentId"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">26000</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UnderlyingIndexName"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Nifty 50"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ContractExpiration"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"2025-01-30T14:30:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ContractExpirationString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"30JAN2025"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"RemainingExpiryDays"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">3</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"StrikePrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">25000</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OptionType"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"CE"</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-optsym-json');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-optsym-json').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>

</div>
