<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">Search API</h1>
<p class="iov-subtitle">The <strong>Search API</strong> acts like a search box in a trading application — enter a stock or instrument name and get back matching instruments with all the details needed for market data and trading APIs.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div><span>Symbol search</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6 12H6v-.5c0-2 4-3.1 6-3.1s6 1.1 6 3.1V18z"/></svg></div><span>Instrument details</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>F&amp;O contracts</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg></div><span>Exchange master data</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-4h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"/></svg></div><span>Pre-trade lookup</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg></div><span>Multi-exchange support</span></div>
</div>

---

## How Search API Works

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div><span>Enter Keyword</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg></div><span>Search Master Data</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg></div><span>Match Instruments</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Results Returned</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Use in Other APIs</span></div>
</div>

---

## Request

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"searchString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RELIANCE"</span><br>
<span style="color:#ffd700">}</span>
</div>

---

## Response

<div style="background:#1e1e1e;border-radius:10px;padding:20px;font-family:Consolas,monospace;font-size:14px;line-height:1.9;margin:12px 0">
<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"tradingSymbol"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RELIANCE"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"series"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"EQ"</span><br>
<span style="color:#ffd700">}</span>
</div>

---

## Information Returned

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:16px 0 24px">

  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:8px">Exchange Info</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
      <li>Exchange Segment</li>
      <li>Exchange Instrument ID</li>
    </ul>
  </div>

  <div style="border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;background:#eff6ff">
    <div style="font-weight:700;color:#1d4ed8;font-size:13px;margin-bottom:8px">Instrument Info</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
      <li>Trading Symbol</li>
      <li>Instrument Name</li>
      <li>Series</li>
    </ul>
  </div>

  <div style="border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;background:#f0fdf4">
    <div style="font-weight:700;color:#16a34a;font-size:13px;margin-bottom:8px">Derivatives Info</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
      <li>Expiry Date</li>
      <li>Strike Price</li>
      <li>Option Type (CE/PE)</li>
    </ul>
  </div>

</div>

---

## Common Use Cases

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px;margin:12px 0 24px">
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px"> Stock Search</div>
    <p style="font-size:13px;color:#374151;margin:0">Search stocks by symbol name to get their exchange instrument ID and trading details.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px"> F&amp;O Contracts</div>
    <p style="font-size:13px;color:#374151;margin:0">Find Futures and Options contracts with expiry date, strike price, and option type.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px"> Market Data Sub</div>
    <p style="font-size:13px;color:#374151;margin:0">Get instrument details required to subscribe to live market data feeds.</p>
  </div>
  <div style="border:1.5px solid #e5e7eb;border-radius:10px;padding:14px 16px">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:6px"> Instrument ID</div>
    <p style="font-size:13px;color:#374151;margin:0">Retrieve exchange instrument IDs that are required as input by other trading and market APIs.</p>
  </div>
</div>

<hr style="border:none;border-top:2px dashed #e5e7eb;margin:32px 0">

<h2 id="srch-byid" style="color:#ff6b00;font-weight:800;margin:28px 0 8px">Instruments By ID <span style="background:#fff7ed;color:#c2410c;font-size:14px;font-weight:700;border-radius:6px;padding:3px 12px;vertical-align:middle;border:1px solid #fed7aa">POST</span></h2>
<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:10px">You can search for instruments by using the POST /search/instrumentsbyid request. In the response, you will receive the instrument details based on the <strong>instrumentID</strong> provided in the request.</p>
<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">The request body must have the content type <strong>application/json</strong> and must contain valid JSON.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#fff7ed;color:#c2410c;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #fed7aa;white-space:nowrap">POST</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="srch-byid-url">https://xts.rmoneyindia.co.in:3000/apimarketdata/search/instrumentsbyid</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('srch-byid-url').innerText).then(function(){var b=document.getElementById('srch-byid-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="srch-byid-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead>
      <tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>instruments</strong></td><td>Array</td><td>Y</td><td>Array of instrument objects</td></tr>
      <tr><td><strong>exchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color: #0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>Y</td><td>ExchangeSegment</td></tr>
      <tr><td><strong>exchangeInstrumentID</strong></td><td><a  style="color: #010816;text-decoration:none">ExchangeInstrumentID 👁</a></td><td>Y</td><td>Exchange Scrip code or Symbol Token is unique identifier</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead>
      <tr><th>Parameter Name</th><th>Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>AGM</strong></td><td><a  style="color: #010816;text-decoration:none">AGM 👁</a></td><td>Indicates if an Annual General Meeting is scheduled for the company</td></tr>
      <tr><td><strong>AllOrNone</strong></td><td><a  style="color:#010816;text-decoration:none">AllOrNone 👁</a></td><td>Indicates if the order must be executed fully or not at all.</td></tr>
      <tr><td><strong>Bonus</strong></td><td><a  style="color:#010816;text-decoration:none">Bonus 👁</a></td><td>Bonus shares declared per existing share.</td></tr>
      <tr><td><strong>Dividend</strong></td><td><a  style="color:#010816;text-decoration:none">Dividend 👁</a></td><td>Dividend amount declared per share.</td></tr>
      <tr><td><strong>EGM</strong></td><td><a  style="color:#010816;text-decoration:none">EGM 👁</a></td><td>Indicates if an Extraordinary General Meeting is scheduled.</td></tr>
      <tr><td><strong>AuctionDetailInfo</strong></td><td>Object</td><td>Additional details about an auction event.</td></tr>
      <tr><td><strong>AuctionNumber</strong></td><td><a  style="color:#010816;text-decoration:none">AuctionNumber 👁</a></td><td>Unique identifier for a specific auction.</td></tr>
      <tr><td><strong>AuctionStatus</strong></td><td><a  style="color:#010816;text-decoration:none">AuctionStatus 👁</a></td><td>Current status of an auction.</td></tr>
      <tr><td><strong>InitiatorType</strong></td><td><a  style="color:#010816;text-decoration:none">InitiatorType 👁</a></td><td>Type of entity initiating the auction or corporate action.</td></tr>
      <tr><td><strong>SettlementPeriod</strong></td><td><a  style="color:#010816;text-decoration:none">SettlementPeriod 👁</a></td><td>Number of days for settlement of trades.</td></tr>
      <tr><td><strong>TotalBuyQty</strong></td><td><a  style="color:#010816;text-decoration:none">TotalBuyQty 👁</a></td><td>Total buy quantity in the auction or order book.</td></tr>
      <tr><td><strong>TotalSellQty</strong></td><td><a  style="color:#010816;text-decoration:none">TotalSellQty 👁</a></td><td>Total sell quantity in the auction or order book.</td></tr>
      <tr><td><strong>AuctionQty</strong></td><td><a  style="color:#010816;text-decoration:none">AuctionQty 👁</a></td><td>Quantity allocated in the auction.</td></tr>
      <tr><td><strong>AuctionPrice</strong></td><td><a  style="color:#010816;text-decoration:none">AuctionPrice 👁</a></td><td>Price at which auction quantity is settled.</td></tr>
      <tr><td><strong>BestBuyPrice</strong></td><td><a  style="color:#010816;text-decoration:none">BestBuyPrice 👁</a></td><td>Highest buy price currently in the stock.</td></tr>
      <tr><td><strong>BestSellPrice</strong></td><td><a  style="color:#010816;text-decoration:none">BestSellPrice 👁</a></td><td>Lowest sell price currently in the stock.</td></tr>
      <tr><td><strong>ELMargin</strong></td><td><a  style="color:#010816;text-decoration:none">ELMargin 👁</a></td><td>Extreme Loss Margin required for the instrument.</td></tr>
      <tr><td><strong>Interest</strong></td><td><a  style="color:#010816;text-decoration:none">Interest 👁</a></td><td>Interest rate applicable to a debt instrument or derivative.</td></tr>
      <tr><td><strong>ISIN</strong></td><td><a  style="color:#010816;text-decoration:none">ISIN 👁</a></td><td>International Securities Identification Number, unique per security.</td></tr>
      <tr><td><strong>MinimumFill</strong></td><td><a  style="color:#010816;text-decoration:none">MinimumFill 👁</a></td><td>Minimum quantity that can be executed in a single order.</td></tr>
      <tr><td><strong>Rights</strong></td><td><a  style="color:#010816;text-decoration:none">Rights 👁</a></td><td>Number of rights shares issued per existing share.</td></tr>
      <tr><td><strong>IssuedCapital</strong></td><td><a  style="color:#010816;text-decoration:none">IssuedCapital 👁</a></td><td>Total capital issued by the company.</td></tr>
      <tr><td><strong>BoardLotQuantity</strong></td><td><a  style="color:#010816;text-decoration:none">BoardLotQuantity 👁</a></td><td>Minimum number of units that can be traded in one lot.</td></tr>
      <tr><td><strong>FaceValue</strong></td><td><a  style="color:#010816;text-decoration:none">FaceValue 👁</a></td><td>Face value of the security per unit/share.</td></tr>
      <tr><td><strong>Spread</strong></td><td><a  style="color:#010816;text-decoration:none">Spread 👁</a></td><td>Difference between best buy and sell price.</td></tr>
      <tr><td><strong>CallAuction1Flag</strong></td><td><a  style="color:#010816;text-decoration:none">CallAuction1Flag 👁</a></td><td>Indicates if a first call auction is applicable.</td></tr>
      <tr><td><strong>GSMIndicator</strong></td><td><a  style="color:#010816;text-decoration:none">GSMIndicator 👁</a></td><td>Indicator for market segments or trading type.</td></tr>
      <tr><td><strong>InstrumentID</strong></td><td><a  style="color:#010816;text-decoration:none">InstrumentID 👁</a></td><td>Unique identifier for the instrument in the system.</td></tr>
      <tr><td><strong>ExchangeInstrumentID</strong></td><td><a  style="color:#010816;text-decoration:none">ExchangeInstrumentID 👁</a></td><td>Identifier of the instrument as per the exchange.</td></tr>
      <tr><td><strong>DisplayName</strong></td><td><a  style="color:#010816;text-decoration:none">DisplayName 👁</a></td><td>Name of the instrument as displayed in UI.</td></tr>
      <tr><td><strong>Name</strong></td><td><a  style="color:#010816;text-decoration:none">Name 👁</a></td><td>The official symbol or short name of the instrument as defined by the exchange.</td></tr>
      <tr><td><strong>MinimumQty</strong></td><td><a  style="color:#010816;text-decoration:none">MinimumQty 👁</a></td><td>Minimum tradable quantity for the instrument.</td></tr>
      <tr><td><strong>QuantityMultiplier</strong></td><td><a  style="color:#010816;text-decoration:none">QuantityMultiplier 👁</a></td><td>Multiplier applied to quantity for derivatives/contracts.</td></tr>
      <tr><td><strong>PriceNumerator</strong></td><td><a  style="color:#010816;text-decoration:none">PriceNumerator 👁</a></td><td>Numerator for representing price fractions.</td></tr>
      <tr><td><strong>PriceDenominator</strong></td><td><a  style="color:#010816;text-decoration:none">PriceDenominator 👁</a></td><td>Denominator for representing price fractions.</td></tr>
      <tr><td><strong>LotSize</strong></td><td><a  style="color:#010816;text-decoration:none">LotSize 👁</a></td><td>Number of units per lot.</td></tr>
      <tr><td><strong>InstrumentType</strong></td><td><a href="../Enums/#3-instrumenttype" style="color: #0646c5;text-decoration:none">InstrumentType ↗</a></td><td>Type of instrument (Equity, Option, Future, etc.).</td></tr>
      <tr><td><strong>SymbolType</strong></td><td><a  style="color:#010816;text-decoration:none">SymbolType 👁</a></td><td>Symbol classification type (e.g., Common, Preferred).</td></tr>
      <tr><td><strong>CfiCode</strong></td><td><a style="color:#010816;text-decoration:none">CfiCode 👁</a></td><td>Classification of Financial Instruments code.</td></tr>
      <tr><td><strong>Status</strong></td><td><a  style="color:#010816;text-decoration:none">Status 👁</a></td><td>Current status of the instrument (Active, Inactive).</td></tr>
      <tr><td><strong>TicksPerPoint</strong></td><td><a  style="color:#010816;text-decoration:none">TicksPerPoint 👁</a></td><td>Number of ticks per point for price movement.</td></tr>
      <tr><td><strong>TickSize</strong></td><td><a  style="color:#010816;text-decoration:none">TickSize 👁</a></td><td>Minimum price movement allowed for the instrument.</td></tr>
      <tr><td><strong>Description</strong></td><td><a  style="color:#010816;text-decoration:none">Description 👁</a></td><td>Additional description of the instrument.</td></tr>
      <tr><td><strong>IsImpliedMarket</strong></td><td><a  style="color:#010816;text-decoration:none">IsImpliedMarket 👁</a></td><td>Indicates if the market is derived from implied instruments.</td></tr>
      <tr><td><strong>IsTradeable</strong></td><td><a  style="color:#010816;text-decoration:none">IsTradeable 👁</a></td><td>Indicates if the instrument is currently tradeable.</td></tr>
      <tr><td><strong>ExchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color: #034cdf;text-decoration:none">ExchangeSegment ↗</a></td><td>ExchangeSegment</td></tr>
      <tr><td><strong>Series</strong></td><td><a  style="color:#010816;text-decoration:none">Series 👁</a></td><td>The exchange-defined series under which the instrument is listed (e.g., EQ, BL, A).</td></tr>
      <tr><td><strong>MaxTradeVolume</strong></td><td><a  style="color:#010816;text-decoration:none">MaxTradeVolume 👁</a></td><td>Maximum allowed trade volume per order.</td></tr>
      <tr><td><strong>PriceBand</strong></td><td>Object</td><td>Object containing high and low price limits for the instrument.</td></tr>
      <tr><td><strong>High</strong></td><td><a  style="color:#010816;text-decoration:none">High 👁</a></td><td>Highest price of the instrument in the trading session.</td></tr>
      <tr><td><strong>Low</strong></td><td><a  style="color:#010816;text-decoration:none">Low 👁</a></td><td>Lowest price of the instrument in the trading session.</td></tr>
      <tr><td><strong>DecimalDisplace</strong></td><td><a  style="color:#010816;text-decoration:none">DecimalDisplace 👁</a></td><td>Number of decimal places used for pricing.</td></tr>
      <tr><td><strong>ExtendedMarketProperties</strong></td><td>Object</td><td>Additional properties related to extended trading sessions.</td></tr>
      <tr><td><strong>CallAuctionIndicator</strong></td><td>Object</td><td>Indicates if the instrument is in a call auction.</td></tr>
      <tr><td><strong>ExpulsionDate</strong></td><td>Object</td><td>Date when the instrument is expelled from the exchange.</td></tr>
      <tr><td><strong>IssueMaturityDate</strong></td><td>Object</td><td>Maturity date for debt instruments.</td></tr>
      <tr><td><strong>ReAdmissionDate</strong></td><td>Object</td><td>Date when the instrument is readmitted to trading.</td></tr>
      <tr><td><strong>CorporateAction</strong></td><td>Object</td><td>Type of corporate action applicable (Bonus, Dividend, Split).</td></tr>
      <tr><td><strong>NoDeliveryEndDate</strong></td><td>Object</td><td>End date of no-delivery period for corporate action.</td></tr>
      <tr><td><strong>IssueRate</strong></td><td>Object</td><td>Rate of issue for debt instruments or IPOs.</td></tr>
      <tr><td><strong>SettlementNo</strong></td><td>Object</td><td>Settlement number associated with the trade or contract.</td></tr>
      <tr><td><strong>InterestPaymentDate</strong></td><td>Object</td><td>Date on which interest is paid for debt instruments.</td></tr>
      <tr><td><strong>ListingDate</strong></td><td>Object</td><td>Date when the instrument was listed on the exchange.</td></tr>
      <tr><td><strong>CompanyName</strong></td><td>Object</td><td>Name of the issuing company.</td></tr>
      <tr><td><strong>UniqueKey</strong></td><td>Object</td><td>Unique identifier for the instrument across systems.</td></tr>
      <tr><td><strong>CreditRating</strong></td><td>Object</td><td>Credit rating of the instrument or issuer.</td></tr>
      <tr><td><strong>RecordDate</strong></td><td>Object</td><td>Date on which shareholders are recorded for corporate actions.</td></tr>
      <tr><td><strong>NoDeliveryStartDate</strong></td><td>Object</td><td>Start date of no-delivery period for corporate actions.</td></tr>
      <tr><td><strong>MarketType</strong></td><td>Object</td><td>Type of market segment (Normal, Auction, OddLot, etc.).</td></tr>
      <tr><td><strong>BookClosureStartDate</strong></td><td>Object</td><td>Start date of book closure period for corporate actions.</td></tr>
      <tr><td><strong>ExDate</strong></td><td>Object</td><td>Ex-dividend or ex-rights date.</td></tr>
      <tr><td><strong>WarningPercent</strong></td><td>Object</td><td>Warning percentage for price movement alerts.</td></tr>
      <tr><td><strong>IssueStartDate</strong></td><td>Object</td><td>Start date for issuance of new shares or debt.</td></tr>
      <tr><td><strong>BookClosureEndDate</strong></td><td>Object</td><td>End date of book closure period.</td></tr>
      <tr><td><strong>Remarks</strong></td><td>Object</td><td>Additional remarks or notes related to the instrument.</td></tr>
      <tr><td><strong>MarketTypeStatusEligibility</strong></td><td>Object</td><td>Eligibility status for a particular market type.</td></tr>
      <tr><td><strong>Normal</strong></td><td>Object</td><td>Indicates if the instrument is eligible for normal trading.</td></tr>
      <tr><td><strong>OddLot</strong></td><td>Object</td><td>Indicates if odd-lot trading is allowed.</td></tr>
      <tr><td><strong>RetailDebt</strong></td><td>Object</td><td>Indicates if the instrument is a retail debt security.</td></tr>
      <tr><td><strong>Auction</strong></td><td>Object</td><td>Indicates if the instrument is part of an auction.</td></tr>
      <tr><td><strong>CallAuction1</strong></td><td>Object</td><td>Flag for first call auction participation.</td></tr>
      <tr><td><strong>CallAuction2</strong></td><td>Object</td><td>Flag for second call auction participation.</td></tr>
      <tr><td><strong>MarketType</strong></td><td><a href="../Enums/#2-markettype" style="color: #0649cf;text-decoration:none">MarketType ↗</a></td><td>Current market type of the instrument.</td></tr>
      <tr><td><strong>Eligible</strong></td><td><a  style="color:#010816;text-decoration:none">Eligible 👁</a></td><td>Indicates if the instrument is eligible for trading.</td></tr>
      <tr><td><strong>TradingStatus</strong></td><td><a  style="color:#010816;text-decoration:none">TradingStatus 👁</a></td><td>Current trading status (Active, Suspended, Halted).</td></tr>
      <tr><td><strong>NameWithSeries</strong></td><td><a  style="color:#010816;text-decoration:none">NameWithSeries 👁</a></td><td>Name combined with series for display purposes.</td></tr>
      <tr><td><strong>DisplayNameWithExchange</strong></td><td><a  style="color:#010816;text-decoration:none">DisplayNameWithExchange 👁</a></td><td>Display name including exchange info.</td></tr>
      <tr><td><strong>FreezeQty</strong></td><td><a  style="color:#010816;text-decoration:none">FreezeQty 👁</a></td><td>Quantity frozen/unavailable for trading.</td></tr>
      <tr><td><strong>LastUpdateTime</strong></td><td><a  style="color:#010816;text-decoration:none">LastUpdateTime 👁</a></td><td>Last update time of the instrument data.</td></tr>
      <tr><td><strong>FiftyTwoWeekHigh</strong></td><td><a  style="color:#010816;text-decoration:none">FiftyTwoWeekHigh 👁</a></td><td>Highest price in the past 52 weeks.</td></tr>
      <tr><td><strong>FiftyTwoWeekLow</strong></td><td><a  style="color:#010816;text-decoration:none">FiftyTwoWeekLow 👁</a></td><td>Lowest price in the past 52 weeks.</td></tr>
      <tr><td><strong>Bhavcopy</strong></td><td>Object</td><td>Snapshot or file reference of daily trading data.</td></tr>
      <tr><td><strong>Open</strong></td><td><a  style="color:#010816;text-decoration:none">Open 👁</a></td><td>Opening price of the instrument for the trading session.</td></tr>
      <tr><td><strong>High</strong></td><td><a  style="color:#010816;text-decoration:none">High 👁</a></td><td>Highest price during the trading session.</td></tr>
      <tr><td><strong>Low</strong></td><td><a  style="color:#010816;text-decoration:none">Low 👁</a></td><td>Lowest price during the trading session.</td></tr>
      <tr><td><strong>Close</strong></td><td><a  style="color:#010816;text-decoration:none">Close 👁</a></td><td>Closing price of the instrument for the session.</td></tr>
      <tr><td><strong>TotTrdQty</strong></td><td><a  style="color:#010816;text-decoration:none">TotTrdQty 👁</a></td><td>Total traded quantity in the session.</td></tr>
      <tr><td><strong>TotTrdVal</strong></td><td><a  style="color:#010816;text-decoration:none">TotTrdVal 👁</a></td><td>Total traded value in the session.</td></tr>
      <tr><td><strong>TimeStamp</strong></td><td><a  style="color:#010816;text-decoration:none">TimeStamp 👁</a></td><td>Timestamp of the data snapshot.</td></tr>
      <tr><td><strong>TotalTrades</strong></td><td><a  style="color:#010816;text-decoration:none">TotalTrades 👁</a></td><td>Total number of trades executed in the session.</td></tr>
      <tr><td><strong>OpenInterest</strong></td><td><a  style="color:#010816;text-decoration:none">OpenInterest 👁</a></td><td>Open interest for derivatives contracts.</td></tr>
      <tr><td><strong>SettlementPrice</strong></td><td><a  style="color:#010816;text-decoration:none">SettlementPrice 👁</a></td><td>Price used for settlement of derivatives contracts.</td></tr>
      <tr><td><strong>AdditionalPreExpiryMarginPerc</strong></td><td><a  style="color:#010816;text-decoration:none">AdditionalPreExpiryMarginPerc 👁</a></td><td>Additional margin percentage applicable before expiry.</td></tr>
      <tr><td><strong>AdditionalMarginPercLong</strong></td><td><a  style="color:#010816;text-decoration:none">AdditionalMarginPercLong 👁</a></td><td>Additional margin percentage for long positions.</td></tr>
      <tr><td><strong>AdditionalMarginPercShort</strong></td><td><a  style="color:#010816;text-decoration:none">AdditionalMarginPercShort 👁</a></td><td>Additional margin percentage for short positions.</td></tr>
      <tr><td><strong>DeliveryMarginPerc</strong></td><td><a  style="color:#010816;text-decoration:none">DeliveryMarginPerc 👁</a></td><td>Margin percentage required for delivery-based trades.</td></tr>
      <tr><td><strong>SpecialMarginPercBuy</strong></td><td><a  style="color:#010816;text-decoration:none">SpecialMarginPercBuy 👁</a></td><td>Special margin percentage for buying positions.</td></tr>
      <tr><td><strong>SpecialMarginPercSell</strong></td><td><a  style="color:#010816;text-decoration:none">SpecialMarginPercSell 👁</a></td><td>Special margin percentage for selling positions.</td></tr>
      <tr><td><strong>TenderMargin</strong></td><td><a  style="color:#010816;text-decoration:none">TenderMargin 👁</a></td><td>Margin required for participating in tender offers.</td></tr>
      <tr><td><strong>ELMLongMargin</strong></td><td><a  style="color:#010816;text-decoration:none">ELMLongMargin 👁</a></td><td>Extreme loss margin for long positions.</td></tr>
      <tr><td><strong>ELMShortMargin</strong></td><td><a  style="color:#010816;text-decoration:none">ELMShortMargin 👁</a></td><td>Extreme loss margin for short positions.</td></tr>
      <tr><td><strong>InitialMarginPerc</strong></td><td><a  style="color:#010816;text-decoration:none">InitialMarginPerc 👁</a></td><td>Initial margin percentage for derivatives contracts.</td></tr>
      <tr><td><strong>ExposureMarginPerc</strong></td><td><a  style="color:#010816;text-decoration:none">ExposureMarginPerc 👁</a></td><td>Margin based on exposure limit.</td></tr>
      <tr><td><strong>CallAuctionIndicator</strong></td><td>Object</td><td>Indicates if the instrument is part of a call auction.</td></tr>
      <tr><td><strong>MarketType</strong></td><td><a href="../Enums/#2-markettype" style="color: #0a4ed6;text-decoration:none">MarketType ↗</a></td><td>Current market type for trading.</td></tr>
      <tr><td><strong>CurrentEligibleMarketType</strong></td><td><a  style="color:#010816;text-decoration:none">CurrentEligibleMarketType 👁</a></td><td>Market types the instrument is eligible for currently.</td></tr>
      <tr><td><strong>InstrumentLazyLoader</strong></td><td><a  style="color:#010816;text-decoration:none">InstrumentLazyLoader 👁</a></td><td>Indicates if instrument data is loaded lazily for performance.</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body JSON</h3>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;max-height:220px;overflow:hidden;transition:max-height .4s ease" id="srch-byid-json-box">
<span style="color:#ffd700">[</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-response-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Instruments Found"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AGM"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AllOrNone"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Bonus"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Dividend"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"EGM"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AuctionDetailInfo"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AuctionNumber"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AuctionStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InitiatorType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SettlementPeriod"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalBuyQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalSellQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AuctionQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AuctionPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BestBuyPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BestSellPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ELMargin"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">5</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Interest"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ISIN"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"INE012A01025"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MinimumFill"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Rights"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"VaRMargin"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">10.28</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IssuedCapital"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">8924587534</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BoardLotQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FaceValue"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">100</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Spread"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CallAuction1Flag"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"GSMIndicator"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1100100003045</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">22</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DisplayName"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AuctionNumber"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MinimumQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"QuantityMultiplier"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PriceNumerator"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PriceDenominator"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LotSize"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">8</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SymbolType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CfiCode"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ESXXXX"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Status"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ESXXXX"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TicksPerPoint"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">20</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TickSize"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0.05</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC LIMITED-EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IsImpliedMarket"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IsTradeable"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Series"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MaxTradeVolume"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2147483647</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PriceBand"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"High"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">330.45</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Low"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">270.45</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DecimalDisplace"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExtendedMarketProperties"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CallAuctionIndicator"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"CallAuctionIndicator"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExpulsionDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ExpulsionDate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IssueMaturityDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"IssueMaturityDate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ReAdmissionDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ReAdmissionDate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CorporateAction"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"CorporateAction"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NoDeliveryEndDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NoDeliveryEndDate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IssueRate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"IssueRate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SettlementNo"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"CallAuctionIndicator"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Missing"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InterestPaymentDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"InterestPaymentDate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ListingDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ListingDate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CompanyName"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"CompanyName"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC LIMITED-EQ"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UniqueKey"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"UniqueKey"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CreditRating"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"CreditRating"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"270.45-330.45"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"RecordDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RecordDate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NoDeliveryStartDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NoDeliveryStartDate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"MarketType"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NORMAL"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BookClosureStartDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BookClosureStartDate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"19Feb2019"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ExDate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"19Feb2020"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"WarningPercent"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"WarningPercent"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"0"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IssueStartDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"IssueStartDate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"24Oct1994"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BookClosureEndDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BookClosureEndDate"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"28Feb2019"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Remarks"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Remarks"</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"AGM/CHANGE IN RTA"</span><span style="color:#ffd700">}</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MarketTypeStatusEligibility"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Normal"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Eligibile"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TradingStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">6</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OddLot"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Eligibile"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TradingStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"RetailDebt"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">3</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Eligibile"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TradingStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Auction"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">4</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Eligibile"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TradingStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CallAuction1"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">5</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Eligibile"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TradingStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CallAuction2"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">6</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Eligibile"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TradingStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#ffd700">}</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NameWithSeries"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC-EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DisplayNameWithExchange"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ACC - NSECM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FreezeQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">374832</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LastUpdateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1220519308</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FiftyTwoWeekHigh"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">351.3</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FiftyTwoWeekLow"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">232.35</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Bhavcopy"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Open"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">266</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"High"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">267.9</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Low"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">261.5</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Close"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">263.75</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotTrdQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">42967696</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotTrdVal"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">11389044523.95</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TimeStamp"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"0001-01-01T00:00:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalTrades"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">197824</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OpenInterest"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SettlementPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AdditionalPreExpiryMarginPerc"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AdditionalMarginPercLong"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AdditionalMarginPercShort"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DeliveryMarginPerc"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SpecialMarginPercBuy"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SpecialMarginPercSell"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TenderMargin"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ELMLongMargin"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ELMShortMargin"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InitialMarginPerc"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExposureMarginPerc"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CallAuctionIndicator"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CurrentEligibleMarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentLazyLoader"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">null</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">]</span>
  </div>
</div>
<div style="display:flex;gap:10px;margin-bottom:24px">
  <button onclick="(function(btn){var b=btn;var box=document.getElementById('srch-byid-json-box');var t=b.innerText;if(box.style.maxHeight&&box.style.maxHeight!='none'){navigator.clipboard.writeText(box.innerText);b.innerText='✔ Copied';setTimeout(function(){b.innerText=t},2000)}else{navigator.clipboard.writeText(box.innerText);b.innerText='✔ Copied';setTimeout(function(){b.innerText=t},2000)}})(this)" style="background:#374151;color:#fff;border:none;padding:7px 18px;border-radius:6px;font-size:13px;cursor:pointer">Copy</button>
  <button data-cbupgraded="1" onclick="(function(btn){var b=btn;var box=document.getElementById('srch-byid-json-box');if(box.style.maxHeight==='none'){box.style.maxHeight='220px';b.textContent='Show Full'}else{box.style.maxHeight='none';b.textContent='Collapse'}})(this)" style="background:#ff6b00;color:#fff;border:none;padding:7px 18px;border-radius:6px;font-size:13px;cursor:pointer">Show Full</button>
</div>

<hr style="border:none;border-top:2px dashed #e5e7eb;margin:32px 0">

<h2 id="srch-bystr" style="color:#ff6b00;font-weight:800;margin:28px 0 8px">Instruments By Search String <span style="background:#e6f4ea;color:#1a7f37;font-size:14px;font-weight:700;border-radius:6px;padding:3px 12px;vertical-align:middle;border:1px solid #bbf7d0">GET</span></h2>
<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">You can search for instruments by using the GET /search/instruments request. In the response, you will receive the instrument details based on the <strong>searchString</strong> provided in the request.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#e6f4ea;color:#1a7f37;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #bbf7d0;white-space:nowrap">GET</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="srch-bystr-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata//apimarketdata/search/instruments</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('srch-bystr-url').innerText).then(function(){var b=document.getElementById('srch-bystr-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="srch-bystr-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
  </div>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Request Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead>
      <tr><th>Parameter Name</th><th>Type</th><th>Mandatory</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>searchString</strong></td><td>String</td><td>Y</td><td>Search keyword to find matching instruments (e.g., RELIANCE)</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body Parameters</h3>
<div style="overflow-x:auto;margin-bottom:20px">
  <table class="api-table">
    <thead>
      <tr><th>Parameter Name</th><th>Type</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>ExchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color: #0747c7;text-decoration:none">ExchangeSegment ↗</a></td><td>Exchange segment in which the instrument is listed.</td></tr>
      <tr><td><strong>ExchangeInstrumentID</strong></td><td><a  style="color:#010816;text-decoration:none">ExchangeInstrumentID 👁</a></td><td>Exchange script code or Symbol Token is unique identifier.</td></tr>
      <tr><td><strong>InstrumentType</strong></td><td><a href="../Enums/#3-instrumenttype" style="color: #0748ca;text-decoration:none">InstrumentType ↗</a></td><td>Type of financial instrument.</td></tr>
      <tr><td><strong>Name</strong></td><td><a  style="color:#010816;text-decoration:none">Name 👁</a></td><td>The official symbol or short name of the instrument as defined by the exchange.</td></tr>
      <tr><td><strong>DisplayName</strong></td><td><a  style="color:#010816;text-decoration:none">DisplayName 👁</a></td><td>A user-friendly name of the instrument used for display purposes in applications.</td></tr>
      <tr><td><strong>Description</strong></td><td><a  style="color:#010816;text-decoration:none">Description 👁</a></td><td>A detailed description of the instrument, including company or contract details.</td></tr>
      <tr><td><strong>Series</strong></td><td><a  style="color:#010816;text-decoration:none">Series 👁</a></td><td>The exchange-defined series under which the instrument is listed (e.g., EQ, BL, A).</td></tr>
      <tr><td><strong>NameWithSeries</strong></td><td><a  style="color:#010816;text-decoration:none">NameWithSeries 👁</a></td><td>The instrument name appended with its series (e.g., &lsquo;RELIANCE-EQ&rsquo;).</td></tr>
      <tr><td><strong>InstrumentID</strong></td><td><a  style="color:#010816;text-decoration:none">InstrumentID 👁</a></td><td>A unique system-generated identifier assigned to the instrument or trading system.</td></tr>
      <tr><td><strong>PriceBand</strong></td><td>Object</td><td>The permitted price range within which the instrument can trade during a session.</td></tr>
      <tr><td><strong>High</strong></td><td><a  style="color:#010816;text-decoration:none">High 👁</a></td><td>The upper limit of the price band for the instrument.</td></tr>
      <tr><td><strong>Low</strong></td><td><a style="color:#010816;text-decoration:none">Low 👁</a></td><td>The lower limit of the price band for the instrument.</td></tr>
      <tr><td><strong>CreditRating</strong></td><td><a  style="color:#010816;text-decoration:none">CreditRating 👁</a></td><td>The credit rating assigned to the instrument, if applicable (typically for debt instruments).</td></tr>
      <tr><td><strong>HighString</strong></td><td><a  style="color:#010816;text-decoration:none">HighString 👁</a></td><td>The upper price band is represented as a formatted string.</td></tr>
      <tr><td><strong>LowString</strong></td><td><a  style="color:#010816;text-decoration:none">LowString 👁</a></td><td>The lower price band is represented as a formatted string.</td></tr>
      <tr><td><strong>HighExecBandString</strong></td><td><a  style="color:#010816;text-decoration:none">HighExecBandString 👁</a></td><td>The upper execution price band displayed as a formatted string.</td></tr>
      <tr><td><strong>LowExecBandString</strong></td><td><a  style="color:#010816;text-decoration:none">LowExecBandString 👁</a></td><td>The lower execution price band displayed as a formatted string.</td></tr>
      <tr><td><strong>FreezeQty</strong></td><td><a  style="color:#010816;text-decoration:none">FreezeQty 👁</a></td><td>The maximum order quantity allowed per order for the instrument.</td></tr>
      <tr><td><strong>TickSize</strong></td><td><a  style="color:#010816;text-decoration:none">TickSize 👁</a></td><td>The minimum price movement allowed for the instrument.</td></tr>
      <tr><td><strong>LotSize</strong></td><td><a  style="color:#010816;text-decoration:none">LotSize 👁</a></td><td>The minimum tradable quantity for the instrument.</td></tr>
      <tr><td><strong>UnderlyingInstrumentId</strong></td><td><a  style="color:#010816;text-decoration:none">UnderlyingInstrumentId 👁</a></td><td>The unique instrument identifier of the underlying asset for a derivative contract.</td></tr>
      <tr><td><strong>UnderlyingIndexName</strong></td><td><a  style="color:#010816;text-decoration:none">UnderlyingIndexName 👁</a></td><td>The name of the underlying index on which the derivative contract is based.</td></tr>
      <tr><td><strong>ContractExpirationString</strong></td><td><a  style="color:#010816;text-decoration:none">ContractExpirationString 👁</a></td><td>The contract expiration date represented as a formatted string.</td></tr>
      <tr><td><strong>RemainingExpiryDays</strong></td><td><a  style="color:#010816;text-decoration:none">RemainingExpiryDays 👁</a></td><td>The number of calendar days remaining until the contract expires.</td></tr>
      <tr><td><strong>ExchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color: #0644be;text-decoration:none">ExchangeSegment ↗</a></td><td>Exchange segment in which the instrument is listed.</td></tr>
      <tr><td><strong>ExchangeInstrumentID</strong></td><td><a  style="color:#010816;text-decoration:none">ExchangeInstrumentID 👁</a></td><td>Exchange script code or Symbol Token is unique identifier.</td></tr>
      <tr><td><strong>StrikePrice</strong></td><td><a  style="color:#010816;text-decoration:none">StrikePrice 👁</a></td><td>The strike price at which the option buyer can buy or sell the underlying asset.</td></tr>
      <tr><td><strong>OptionType</strong></td><td><a href="../Enums/#9-optiontype" style="color: #0a52e4;text-decoration:none">OptionType ↗</a></td><td>Defines whether the option is a Call or Put.</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body JSON</h3>
<div style="position:relative;margin:0 0 6px">
  <div style="background:#1e1e1e;border-radius:10px;padding:20px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;max-height:220px;overflow:hidden;transition:max-height .4s ease" id="srch-bystr-json-box">
<span style="color:#ffd700">[</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">8</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RELIANCE"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DisplayName"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RELIANCE"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RELIANCE INDUSTRIES LTD-EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Series"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NameWithSeries"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"RELIANCE-EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1100100002885</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PriceBand"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"High"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1452.3</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Low"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1188.25</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1452.30"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1188.25"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighExecBandString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1452.30"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowExecBandString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1188.25"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CreditRating"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1188.25-1452.30"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FreezeQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">382</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TickSize"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0.05</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LotSize"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UnderlyingInstrumentId"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UnderlyingIndexName"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ContractExpirationString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"RemainingExpiryDays"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2885</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"StrikePrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OptionType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">]</span>
  </div>
</div>
<div style="display:flex;gap:10px;margin-bottom:24px">
  <button onclick="(function(btn){var b=btn;var box=document.getElementById('srch-bystr-json-box');navigator.clipboard.writeText(box.innerText);b.innerText='✔ Copied';setTimeout(function(){b.innerText='Copy'},2000)})(this)">
  
</div>
