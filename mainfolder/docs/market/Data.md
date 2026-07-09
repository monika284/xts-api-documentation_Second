<h1 style="color:#ff6b00;font-weight:800;margin-bottom:6px">Data Types &amp; Business Rules</h1>
<p class="iov-subtitle">The following data types, data values, business types, and validation rules define the structure and constraints for all Market Data API fields.</p>

---

<table class="api-table">
  <thead>
    <tr>
      <th>DataName</th>
      <th>DataType</th>
      <th>Size</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>ExchangeInstrumentID</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Unique instrument identifier assigned by the exchange.</td></tr>
    <tr><td>ExchangeSegment</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Exchange segment this instrument belongs to.</td></tr>
    <tr><td>InstrumentType</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Type of the instrument (Equity, Futures, Options, etc.).</td></tr>
    <tr><td>Name</td><td><span class="dt dt-string">String</span></td><td>50</td><td>Name of the instrument.</td></tr>
    <tr><td>Description</td><td><span class="dt dt-string">String</span></td><td>MAX</td><td>Full description of the instrument.</td></tr>
    <tr><td>ISIN</td><td><span class="dt dt-string">String</span></td><td>20</td><td>International Securities Identification Number.</td></tr>
    <tr><td>ExchangeSeries</td><td><span class="dt dt-string">String</span></td><td>10</td><td>Exchange series identifier for the instrument.</td></tr>
    <tr><td>DisplayInMarketWatchFlag</td><td><span class="dt dt-integer">Integer</span></td><td>5</td><td>Flag to indicate if the instrument should be displayed in market watch.</td></tr>
    <tr><td>ExchangeInstrumentStatus</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Current status of the instrument on the exchange.</td></tr>
    <tr><td>ContractExpiration</td><td><span class="dt dt-long">Long</span></td><td>20</td><td>Expiration date/time of the contract.</td></tr>
    <tr><td>ContractType</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Type classification of the contract.</td></tr>
    <tr><td>ContractSubType</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Sub-type classification of the contract.</td></tr>
    <tr><td>StrikePrice</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Strike price for options contracts.</td></tr>
    <tr><td>UnderlyingInstrumentID</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Exchange instrument ID of the underlying asset.</td></tr>
    <tr><td>UnderlyingIndexOption</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Underlying index for index options.</td></tr>
    <tr><td>OpenPrice</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Opening price for the current session.</td></tr>
    <tr><td>High</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Highest traded price during the session.</td></tr>
    <tr><td>Low</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Lowest traded price during the session.</td></tr>
    <tr><td>Close</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Closing price for the session.</td></tr>
    <tr><td>PreviousClose</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Closing price from the previous session.</td></tr>
    <tr><td>LastTradedPrice</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Most recent traded price of the instrument.</td></tr>
    <tr><td>LastTradedQuantity</td><td><span class="dt dt-long">Long</span></td><td>15</td><td>Quantity traded in the most recent trade.</td></tr>
    <tr><td>AverageTradedPrice</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Volume-weighted average traded price for the session.</td></tr>
    <tr><td>Volume</td><td><span class="dt dt-long">Long</span></td><td>15</td><td>Total traded volume in the session.</td></tr>
    <tr><td>TotalValueTraded</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Total monetary value of all trades in the session.</td></tr>
    <tr><td>TotalSellQuantity</td><td><span class="dt dt-long">Long</span></td><td>15</td><td>Total quantity available on the sell side of the order book.</td></tr>
    <tr><td>TotalBuyQuantity</td><td><span class="dt dt-long">Long</span></td><td>15</td><td>Total quantity available on the buy side of the order book.</td></tr>
    <tr><td>OrderBookDepth</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Number of price levels available in the order book.</td></tr>
    <tr><td>TokenID</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Unique token identifier for the instrument.</td></tr>
    <tr><td>Expiry</td><td><span class="dt dt-string">String</span></td><td>20</td><td>Expiry date of the contract in string format.</td></tr>
    <tr><td>ContractLotSize</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Standard lot size for the contract.</td></tr>
    <tr><td>ContractScaledLotSize</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Scaled lot size for the contract.</td></tr>
    <tr><td>LotSizeInformation</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Additional lot size details for the instrument.</td></tr>
    <tr><td>OptionType</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Option type identifier (CE, PE, etc.).</td></tr>
    <tr><td>Multiplier</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Price multiplier applied to the instrument value.</td></tr>
    <tr><td>Bid</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Best bid price in the order book.</td></tr>
    <tr><td>Ask</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Best ask price in the order book.</td></tr>
    <tr><td>BidSize</td><td><span class="dt dt-long">Long</span></td><td>15</td><td>Quantity available at the best bid price.</td></tr>
    <tr><td>AskSize</td><td><span class="dt dt-long">Long</span></td><td>15</td><td>Quantity available at the best ask price.</td></tr>
    <tr><td>IssuedCapital</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Total capital issued by the company.</td></tr>
    <tr><td>FreefloatHolding</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Percentage of shares available for public trading.</td></tr>
    <tr><td>ContractLotSizeMultiplier</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Multiplier for the contract lot size.</td></tr>
    <tr><td>ContractLotSizeMultiplierScaling</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Scaling factor for the lot size multiplier.</td></tr>
    <tr><td>TickSize</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Minimum price movement allowed for the instrument.</td></tr>
    <tr><td>LastUpdateTime</td><td><span class="dt dt-string">String</span></td><td>50</td><td>Timestamp of the last data update.</td></tr>
    <tr><td>PriceBand</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Upper/lower price band limits for the instrument.</td></tr>
    <tr><td>Delivery</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Delivery mode applicable for the instrument.</td></tr>
    <tr><td>ContractMaxQuantity</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Maximum quantity allowed per contract order.</td></tr>
    <tr><td>ContractMaxQuantityScaling</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Scaling factor for the maximum contract quantity.</td></tr>
    <tr><td>BoardLotQuantity</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Minimum number of units that can be traded in one lot.</td></tr>
    <tr><td>FaceValue</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Face value of the security per unit/share.</td></tr>
    <tr><td>Spread</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Difference between best buy and sell price.</td></tr>
    <tr><td>CallAuction1Flag</td><td><span class="dt dt-boolean">Boolean</span></td><td>5</td><td>Indicates if a first call auction is applicable.</td></tr>
    <tr><td>GSMIndicator</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Indicator for market segments or trading type.</td></tr>
    <tr><td>MinimumQty</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Minimum tradable quantity for the instrument.</td></tr>
    <tr><td>QuantityMultiplier</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Multiplier applied to quantity for derivatives/contracts.</td></tr>
    <tr><td>PriceNumerator</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Numerator for representing price fractions.</td></tr>
    <tr><td>PriceDenominator</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Denominator for representing price fractions.</td></tr>
    <tr><td>SymbolType</td><td><span class="dt dt-integer">Integer</span></td><td>20</td><td>Symbol classification type (e.g., Common, Preferred).</td></tr>
    <tr><td>CfiCode</td><td><span class="dt dt-string">String</span></td><td>50</td><td>Classification of Financial Instruments code.</td></tr>
    <tr><td>Status</td><td><span class="dt dt-string">String</span></td><td>50</td><td>Current status of the instrument (Active, Inactive).</td></tr>
    <tr><td>TicksPerPoint</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Number of ticks per point for price movement.</td></tr>
    <tr><td>IsImpliedMarket</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Indicates if the market is derived from implied instruments.</td></tr>
    <tr><td>IsTradeable</td><td><span class="dt dt-boolean">Boolean</span></td><td>5</td><td>Indicates if the instrument is currently tradeable.</td></tr>
    <tr><td>MaxTradeVolume</td><td><span class="dt dt-long">Long</span></td><td>15</td><td>Maximum allowed trade volume per order.</td></tr>
    <tr><td>DecimalDisplace</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Number of decimal places used for pricing.</td></tr>
    <tr><td>Eligible</td><td><span class="dt dt-boolean">Boolean</span></td><td>5</td><td>Indicates if the instrument is eligible for trading.</td></tr>
    <tr><td>TradingStatus</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Current trading status (Active, Suspended, Halted).</td></tr>
    <tr><td>DisplayNameWithExchange</td><td><span class="dt dt-string">String</span></td><td>50</td><td>Display name including exchange information.</td></tr>
    <tr><td>FiftyTwoWeekHigh</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Highest price of the instrument in the past 52 weeks.</td></tr>
    <tr><td>FiftyTwoWeekLow</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Lowest price of the instrument in the past 52 weeks.</td></tr>
    <tr><td>TotTrdQty</td><td><span class="dt dt-long">Long</span></td><td>15</td><td>Total traded quantity in the session.</td></tr>
    <tr><td>TotTrdVal</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Total traded value in the session.</td></tr>
    <tr><td>TimeStamp</td><td><span class="dt dt-string">String</span></td><td>50</td><td>Timestamp of the data snapshot.</td></tr>
    <tr><td>TotalTrades</td><td><span class="dt dt-long">Long</span></td><td>15</td><td>Total number of trades executed in the session.</td></tr>
    <tr><td>OpenInterest</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Open interest for derivatives contracts.</td></tr>
    <tr><td>SettlementPrice</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Price used for settlement of derivatives contracts.</td></tr>
    <tr><td>AdditionalPreExpiryMarginPerc</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Additional margin percentage applicable before expiry.</td></tr>
    <tr><td>AdditionalMarginPercLong</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Additional margin percentage for long positions.</td></tr>
    <tr><td>AdditionalMarginPercShort</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Additional margin percentage for short positions.</td></tr>
    <tr><td>DeliveryMarginPerc</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Margin percentage required for delivery-based trades.</td></tr>
    <tr><td>SpecialMarginPercBuy</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Special margin percentage for buying positions.</td></tr>
    <tr><td>SpecialMarginPercSell</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Special margin percentage for selling positions.</td></tr>
    <tr><td>TenderMargin</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Margin required for participating in tender offers.</td></tr>
    <tr><td>ELMLongMargin</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Extreme loss margin for long positions.</td></tr>
    <tr><td>ELMShortMargin</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Extreme loss margin for short positions.</td></tr>
    <tr><td>InitialMarginPerc</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Initial margin percentage for derivatives contracts.</td></tr>
    <tr><td>ExposureMarginPerc</td><td><span class="dt dt-double">Double</span></td><td>(15,4)</td><td>Margin based on exposure limit.</td></tr>
    <tr><td>CallAuctionIndicator</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Indicates if the instrument is part of a call auction.</td></tr>
    <tr><td>CurrentEligibleMarketType</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Market types the instrument is eligible for currently.</td></tr>
    <tr><td>InstrumentLazyLoader</td><td><span class="dt dt-integer">Integer</span></td><td>10</td><td>Indicates if instrument data is loaded lazily for performance.</td></tr>
    <tr><td>StartTime</td><td><span class="dt dt-string">String</span></td><td>30</td><td>The starting timestamp from which OHLC data should be retrieved.</td></tr>
    <tr><td>EndTime</td><td><span class="dt dt-string">String</span></td><td>30</td><td>The ending timestamp up to which OHLC data should be retrieved.</td></tr>
    <tr><td>CompressionValue</td><td><span class="dt dt-string">String</span></td><td>30</td><td>The interval or granularity of OHLC data.</td></tr>
  </tbody>
</table>
