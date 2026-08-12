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

  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background: #ffffff">
    <div style="font-weight:700;color: #ff6b00;font-size:13px;margin-bottom:8px">Exchange Info</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color: #374151;line-height:2.1">
      <li>Exchange Segment</li>
      <li>Exchange Instrument ID</li>
    </ul>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:8px">Instrument Info</div>
    <ul style="margin:0;padding-left:16px;font-size:13px;color:#374151;line-height:2.1">
      <li>Trading Symbol</li>
      <li>Instrument Name</li>
      <li>Series</li>
    </ul>
  </div>

  <div style="border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;background:#ffffff">
    <div style="font-weight:700;color:#ff6b00;font-size:13px;margin-bottom:8px">Derivatives Info</div>
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


