<!-- ═══ GetIndexList GET ═══ -->
<h1 class="inst-hero-title">GetIndexList</h1>


<p style="color:#374151;font-size:13px;line-height:1.8;margin-bottom:18px">You can retrieve the list of indices by using the GET /instruments/indexlist request. In the response, you will receive the names of all indices that belong to the specified <strong>exchangeSegment</strong>.</p>

<div style="margin:18px 0 20px">
  <p style="font-weight:700;font-size:13px;color:#374151;border-left:3px solid #ff6b00;padding-left:8px;margin-bottom:8px">Endpoint</p>
  <div style="display:flex;align-items:center;gap:0;border:1.5px solid #e5e7eb;border-radius:8px;overflow:hidden">
    <span style="background:#e6f4ea;color:#1a7f37;font-weight:700;font-size:12px;padding:9px 14px;border-right:1.5px solid #bbf7d0;white-space:nowrap">GET</span>
    <span style="flex:1;padding:9px 14px;font-family:Consolas,monospace;font-size:12.5px;color:#374151;word-break:break-all" id="inst-indexlist-url">https://xts.rmoneyindia.co.in:3000/apibinarymarketdata/instruments/indexlist?exchangeSegment=1</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('inst-indexlist-url').innerText).then(function(){var b=document.getElementById('inst-indexlist-url-c');b.textContent='Copied!';setTimeout(function(){b.textContent='Copy'},1500)})" id="inst-indexlist-url-c" style="background:none;border:none;border-left:1.5px solid #e5e7eb;padding:9px 12px;cursor:pointer;color:#6b7280">Copy</button>
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
      <tr><td><strong>exchangeSegment</strong></td><td><a href="../Enums/#1-exchangesegments" style="color:#0a49c7;text-decoration:none">ExchangeSegments ↗</a></td><td>ExchangeSegment</td></tr>
      <tr><td><strong>indexList</strong></td><td>Array</td><td>IndexList</td></tr>
    </tbody>
  </table>
</div>

<h3 style="color:#1e293b;font-weight:700;font-size:13px;margin:18px 0 6px">Response Body JSON</h3>
<div style="position:relative;margin-bottom:24px">
  <div id="inst-indexlist-json" style="background:#1e1e1e;border-radius:10px 10px 0 0;padding:20px;font-family:Consolas,monospace;font-size:13px;line-height:1.9;overflow:auto;max-height:600px">
<span style="color:#ffd700">{</span> 
&nbsp;&nbsp;<span style="color:#9cdcfe">"type"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"success"</span><span style="color:#d4d4d4">,</span> 
&nbsp;&nbsp;<span style="color:#9cdcfe">"code"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"s-instrument-0007"</span><span style="color:#d4d4d4">,</span> 
&nbsp;&nbsp;<span style="color:#9cdcfe">"description"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"Index List successfully"</span><span style="color:#d4d4d4">,</span> 
&nbsp;&nbsp;<span style="color:#9cdcfe">"result"</span><span style="color:#d4d4d4">: </span><span style="color:#ffd700">{</span> 
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"exchangeSegment"</span><span style="color:#d4d4d4">: </span><span style="color:#ce9178">"1"</span><span style="color:#d4d4d4">,</span> 
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9cdcfe">"indexList"</span><span style="color:#d4d4d4">: [</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY 50_26000"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY BANK_26001"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"INDIA VIX_26002"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY IT_26003"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY 100_26004"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MIDCAP 50_26005"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY GS 15YR_26006"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY INFRA_26007"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY REALTY_26009"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY CPSE_26010"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY GS COMPSITE_26011"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY OIL AND GAS_26012"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY50 TR 1X INV_26013"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY PHARMA_26014"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY PSE_26015"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MIDCAP 150_26016"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MIDCAP 100_26017"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY SERV SECTOR_26018"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY 500_26019"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY ALPHA 50_26020"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY50 VALUE 20_26021"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY200 QUALTY30_26022"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY SMLCAP 250_26023"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY GROWSECT 15_26024"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY50 PR 1X INV_26025"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY50 EQL WGT_26026"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY PSU BANK_26027"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY SMLCAP 100_26028"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY LARGEMID250_26029"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY100 EQL WGT_26030"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY SMLCAP 50_26031"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY GS 10YR_26032"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY GS 10YR_26033"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY FIN SERVICE_26034"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MIDSML 400_26035"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY METAL_26036"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY CONSR DURBL_26037"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY DIV OPPS 50_26038"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY GS 15YRPLUS_26039"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MEDIA_26040"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY FMCG_26041"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY PVT BANK_26042"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY200MOMENTM30_26043"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"HANGSENG BEES-NAV_26044"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY100 LOWVOL30_26045"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY50 TR 2X LEV_26046"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY CONSUMPTION_26047"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY GS 8 13YR_26048"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY100ESGSECLDR_26049"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY GS 10YR CLN_26050"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY GS 4 8YR_26051"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY AUTO_26052"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY COMMODITIES_26053"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY NEXT 50_26054"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MNC_26055"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MID CAP LIQ 15_26056"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY HEALTHCARE_26057"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY500 MULTICAP_26058"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY ALPHALOWVOL_26059"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY FINSRV25 50_26060"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY50 PR 2X LEV_26061"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY100 QUALTY30_26062"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY50 DIV POINT_26063"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY 200_26064"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MID SELECT_26121"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MIDSML HLTH_26122"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MULTI INFRA_26123"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MULTI MFG_26124"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY TATA 25 CAP_26125"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY IND DEFENCE_26127"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY IND TOURISM_26128"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY CAPITAL MKT_26129"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY500MOMENTM50_26130"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTYSML250MQ 100_26131"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY TOP 10 EW_26132"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BHARATBOND-APR25_26134"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BHARATBOND-APR31_26136"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BHARATBOND-APR32_26137"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"BHARATBOND-APR33_26138"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY AQL 30_26139"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY AQLV 30_26140"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY EV_26141"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY HIGHBETA 50_26142"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY NEW CONSUMP_26143"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY CORP MAATR_26144"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY LOW VOL 50_26147"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MOBILITY_26148"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY QLTY LV 30_26147"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY SML250 Q50_26148"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY TOP 15 EW_26149"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY100 ALPHA 30_26150"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY100 ENH ESG_26151"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY200 VALUE 30_26152"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY500 EW_26153"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MS FIN SERV_26154"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY500 VALUE 50_26155"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY IND EW_26156"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY COREHOUSING_26157"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY FINSEREXBNK_26158"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MS HOUSING_26159"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY IPO_26160"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MS IND CONS_26162"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MS IT TELCM_26163"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY NONCYC CONS_26164"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY RURAL_26165"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY MS SHARIAH 25_26166"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY TRANS LOGIS_26167"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY50 SHARIAH_26168"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY500 LMS EQL_26169"</span><span style="color:#d4d4d4">,</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#ce9178">"NIFTY500 SHARIAH_26170"</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#d4d4d4">]</span><br>
&nbsp;&nbsp;<span style="color:#ffd700">}</span><br>
<span style="color:#ffd700">}</span>
  </div>
</div>