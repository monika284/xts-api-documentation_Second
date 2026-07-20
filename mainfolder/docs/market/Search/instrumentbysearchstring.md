<h1 class="inst-hero-title">Instrument By Search String</h1>
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
