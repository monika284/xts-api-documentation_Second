<!-- ═══ GetEquitySymbol GET ═══ -->
<h1 class="inst-hero-title">GetEquitySymbol</h1>

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
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-rds-0"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"ok"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"ExchangeInstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1333</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentType"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">8</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Name"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"HDFCBANK"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"DisplayName"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"HDFCBANK"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"HDFC BANK LTD-EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Series"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"NameWithSeries"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"HDFCBANK-EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"InstrumentID"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">1100100001333</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"PriceBand"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"High"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">901.55</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"Low"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">737.65</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"CreditRating"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"737.65-901.55"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"901.55"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowString"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"737.65"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighExecBandString"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0.00</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowExecBandString"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0.00</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"HighExecBand"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"LowExecBand"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"TERRange"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">0.00-0.00</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ffd700">}</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"FreezeQty"</span><span style="color:#d4d4d4">: </span><span style="color:#b5cea8">107805</span><span style="color:#d4d4d4">,</span><br>
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