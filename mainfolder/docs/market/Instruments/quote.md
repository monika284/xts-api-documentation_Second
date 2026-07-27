<h1 class="inst-hero-title">Quote</h1>

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
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-quotes-0001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Get quotes successfully!"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"mdp"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1502</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"quotesList"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">26000</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"listQuotes"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageCode"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1502</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"MessageVersion"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">4</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ApplicationType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TokenID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">26000</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeTimeStamp"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1469013860</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Bids"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">[{</span><span style="color:#9cdcfe"> "Size"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Price"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TotalOrders"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"BuyBackMarketMaker"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#ffd700"> }]</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Asks"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe"> "Size"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Price"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TotalOrders"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"BuyBackMarketMaker"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#ffd700"> }</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Touchline"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BidInfo"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe"> "Size"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Price"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TotalOrders"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"BuyBackMarketMaker"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#ffd700"> }</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AskInfo"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><span style="color:#9cdcfe"> "Size"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"Price"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"TotalOrders"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">, </span><span style="color:#9cdcfe">"BuyBackMarketMaker"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#ffd700"> }</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LastTradedPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">24211.9</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LastTradedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalBuyQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalSellQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalTradedQuantity"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"AverageTradedPrice"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">24211.9</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LastTradedTime"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1469013860</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LastUpdateTime"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1469013860</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PercentChange"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">-0.5</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Open"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">24190.05</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"High"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">24262.35</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Low"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">24149.9</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Close"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">24334.3</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TotalValueTraded"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">null</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BuyBackTotalBuy"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BuyBackTotalSell"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"BookType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"XMarketType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"SequenceNumber"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">2066937848651797</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-quote-res-json');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-quote-res-json').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>
