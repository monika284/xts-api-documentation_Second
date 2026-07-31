<h1 class="inst-hero-title">Instrument By ID</h1>
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
<div style="background:#1e1e1e;border-radius:10px;padding:20px 24px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:hidden" id="srch-response-json-box">
<span style="color:#ffd700">[</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-response-0010"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Provided Valid Credentials"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"token"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"eyJ1c2VySUQiOiJEVko4NTg4XzE4YzQ3NjQ1MzBjMWQ1MjllcOI0ZDAiLCJwdWJsaWNJZCI6IjIxMDlmZDllzGFkNzI3MjIzMgZiwiaWF0IjoxNzg2MzgzNzMzLCJleHAiOjE3ODU0OTUzMzR9.Wln6y89bGZdXl2TIIWXGOHJVxsR6cS9M0P6r6VQXo0"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"userID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"DVJ8588"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"appVersion"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"5.0.15"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"application_expiry_date"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"30-12-2028"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-search-0002"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Instruments Found"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">[</span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"StrikePrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">13800</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OptionType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">4</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"StrikeDifference"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">100</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NextExpiryExchangeInstrumentId"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">56603</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ContractExpiration"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"2026-09-29T14:30:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"RemainingExpiryDays"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">62</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"RemainingExpiryDaysABS"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">61.645833333333336</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ContractExpirationString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"29Sep2026"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HasContractExpired"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UnderlyingType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">3</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UnderlyingInstrumentId"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1100100016669</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UnderlyingIndexName"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BAJAJ-AUTO"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2627200047631</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">47631</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PreferredExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">-1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PreferredExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OppositeExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">-1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OppositeExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DisplayName"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BAJAJ-AUTO 29SEP2026 13800 PE"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BAJAJ-AUTO"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AlternateName"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"QuantityMultiplier"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Multiplier"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PriceNumerator"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PriceDenominator"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">75</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LotSize"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SymbolType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CfiCode"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"OPEXXX"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Status"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"OPTSTK"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MaxTradeVolume"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2147483647</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PriceBand"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"High"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2857.9</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Low"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1871.1</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"2857.90"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1871.10"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ByPassDPR"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BAJAJ-AUTO26SEP13800PE"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IsImpliedMarket"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IsTradeable"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TicksPerPoint"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">20</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TickSize"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0.05</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowExecBand"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighExecBand"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TERRage"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowExecBandString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"0.00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighExecBandString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"0.00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DecimalDisplace"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExtendedMarketProperties"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SettlementNo"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">67</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Missing"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UniqueKey"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">68</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BAJAJ-AUTO"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CompanyName"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">4</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BAJAJ-AUTO26SEP13800PE"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IssueStartDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">5</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"23Jul2026"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IssueMaturityDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">6</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"29Sep2026"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ListingDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">10</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"23Jul2026"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BookClosureStartDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">13</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"RecordDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">14</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BookClosureEndDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">15</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExpulsionDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">20</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Remarks"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">21</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MaxOrderQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">25</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"30"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExposureMargin"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">31</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"3.5"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">33</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"01Jan1980"</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CallAuctionIndicator"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">51</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">63</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Value"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"NORMAL"</span><span style="color:#ffd700">}</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MarketTypeStatusEligibility"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Normal"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Eligibile"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">true</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TradingStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OddLot"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Eligibile"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TradingStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"RetailDebt"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">3</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TradingStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Auction"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">4</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TradingStatus"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2</span><span style="color:#ffd700">}</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NameWithExchange"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BAJAJ-AUTO-NSEFO"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NameWithSeries"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BAJAJ-AUTO-OPTSTK"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DisplayNameWithExchange"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BAJAJ-AUTO 29SEP2026 PE 13800 - NSEFO"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DisplayNameWithSeries"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BAJAJ-AUTO 29SEP2026 PE 13800 - OPTSTK"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DisplayNameWithSeriesAndExchange"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BAJAJ-AUTO 29SEP2026 PE 13800 - OPTSTK - NSEFO"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FreezeQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2251</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IsPreopenEligible"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LastUpdateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FiftyTwoWeekHigh"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FiftyTwoWeekLow"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Bhavcopy"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Open"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"High"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Low"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Close"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotTrdQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotTrdVal"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TimeStamp"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"2026-07-30T00:00:05"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalTrades"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"OpenInterest"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SettlementPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2364.5</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AdditionalPreExpiryMarginPerc"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AdditionalMarginPercLong"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AdditionalMarginPercShort"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DeliveryMarginPerc"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SpecialMarginPercBuy"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SpecialMarginPercSell"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TenderMargin"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ELMLongMargin"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ELMShortMargin"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InitialMarginPerc"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExposureMarginPerc"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">3.5</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CallAuctionIndicator"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IssueStartDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IssueStartDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"0001-01-01T00:00:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"IssueMaturityDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"2026-09-29T14:30:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ListingDate"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">""</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ListingDateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"0001-01-01T00:00:00"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CurrentEligibleMarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentProductType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalMargin"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SettlementIndicator"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"P"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TradingSymbol"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"BAJAJ-AUTO26SEP13800PE"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BasePrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2364.5</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"UpdateFromPropertyChange"</span><span style="color:#d4d4d4">: </span><span style="color:#569cd6">false</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Industry"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CautionaryMessageInfo"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">[]</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Exchange_InstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"2_47631"</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}]</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">]</span>
</div>
<div style="display:flex;justify-content:flex-end;margin-top:14px">
      <button onclick="(function(){var active=document.querySelector('[id^=co-code-]:not([style*=none])');if(!active)return;navigator.clipboard.writeText(active.innerText).then(function(){var b=document.getElementById('co-ce-copy');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})})()" id="co-ce-copy" style="background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer">Copy</button>
</div>
<div style="margin:8px 0 24px">
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">
    <button onclick="coShowCode('curl',this)" id="co-tab-curl" style="background:linear-gradient(135deg,#ff7b00,#ff9500);color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">CURL</button>
    <button onclick="coShowCode('python',this)" id="co-tab-python" style="background:#374151;color:#fff;border:none;border-radius:6px 6px 0 0;padding:7px 18px;font-size:13px;font-weight:600;cursor:pointer">Python</button>
  </div>

  <div style="background:#1e1e1e;border-radius:0 6px 6px 6px;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8">

  <div id="co-code-curl">
<span style="color:#d4d4d4">curl --location </span><span style="color:#ce9178">'https://xts.rmoneyindia.co.in:3000/search/instrumentsbyid'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Content-Type: application/json'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--header </span><span style="color:#ce9178">'Authorization: YOUR_ACCESS_TOKEN'</span><span style="color:#d4d4d4"> \</span><br>
<span style="color:#d4d4d4">--data </span><span style="color:#ce9178">  '{
    "instruments": [
        {
            "exchangeSegment": 2,
            "exchangeInstrumentID": 47631
        }
    ]
}'</span>
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
<span style="color:#9cdcfe">resp</span><span style="color:#d4d4d4"> = </span><span style="color:#c586c0">await</span><span style="color:#d4d4d4"> xt_market_data.</span><span style="color:#dcdcaa">search_by_instrumentid</span><span style="color:#d4d4d4">(instruments)</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#dcdcaa">print</span><span style="color:#d4d4d4">(resp)</span><br>
<br>
<span style="color:#c586c0">if</span><span style="color:#d4d4d4"> __name__ == </span><span style="color:#ce9178">"__main__"</span><span style="color:#d4d4d4">:</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">asyncio.</span><span style="color:#dcdcaa">run</span><span style="color:#d4d4d4">(main())</span>
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
  btn.style.background = 'linear-gradient(135deg, #ff7b00, #ff9500)';
}
</script>
<hr style="border:none;border-top:2px dashed #e5e7eb;margin:32px 0">