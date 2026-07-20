<!-- ═══ GetOptionSymbol GET ═══ -->
<h1 class="inst-hero-title">GetOptionSymbol</h1>

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
