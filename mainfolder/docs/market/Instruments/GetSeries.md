<!-- ═══ GetSeries GET ═══ -->
<h1 class="inst-hero-title">GetSeries</h1>

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
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"series"</span><span style="color:#d4d4d4">: [</span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"SM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"EQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"N0"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"N1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"SG"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"N2"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"RR"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ST"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BE"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BZ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"GS"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"SPOT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Z7"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"GB"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"N4"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BU"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Z8"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"N7"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"N8"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"TB"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"N9"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ND"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"MF"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NE"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"SF"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"IV"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NU"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NA"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NH"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YS"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YD"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"P1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Z1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Y9"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NB"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"N3"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"N6"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NG"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Z5"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NI"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZK"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YV"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NK"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NN"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YB"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"N5"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Z9"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NX"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YK"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YM"</span<span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"AZ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZR"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NR"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Z4"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NW"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NS"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZJ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YG"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BA"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NO"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YZ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Y5"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Y3"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YL"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NJ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YI"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"SZ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NL"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YR"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Y7"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Z2"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YA"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"AM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NP"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NZ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Y8"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NF"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YJ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"D1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"AK"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZM"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZZ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"E1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YX"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZP"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"W1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NV"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BV"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YW"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Y1"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZI"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Y4"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"IT"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Z6"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Y2"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZN"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"AN"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZL"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Y0"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BC"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZO"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BX"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Y6"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YU"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YQ"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZF"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZS"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZH"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BW"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"AL"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Z3"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"ZY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BS"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YP"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"Z0"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YY"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BR"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"YH"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">]</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
  <div style="display:flex;justify-content:flex-end;gap:8px;padding:10px 14px;background:#2d2d2d;border-radius:0 0 10px 10px">
    <button data-cbupgraded="1" onclick="(function(btn){var box=document.getElementById('inst-series-json');var exp=box.style.maxHeight==='none';box.style.maxHeight=exp?'220px':'none';btn.textContent=exp?'Show Full':'Collapse';})(this)" style="background:#3a3a3a;color:#d4d4d4;border:1px solid #555;padding:5px 14px;border-radius:6px;font-size:12px;cursor:pointer">Show Full</button>
    <button data-cbupgraded="1" onclick="navigator.clipboard.writeText(document.getElementById('inst-series-json').innerText)" style="background:#ff6b00;color:#fff;border:none;padding:5px 14px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer">Copy</button>
  </div>
</div>
