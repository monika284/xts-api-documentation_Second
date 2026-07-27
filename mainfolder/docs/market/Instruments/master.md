<!-- ═══ Master POST ═══ -->
<h1 class="inst-hero-title">Master</h1>


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
