<h1 id="Dtat-Types" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Data Types &amp; Business Rules</h1>
<p class="iov-subtitle"><strong>Data Types</strong> define what kind of value a field stores. <strong>Business Rules</strong> define how that data must behave — enforcing exchange and broker requirements to keep every request valid and consistent.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Ensures valid data</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg></div><span>Consistent API requests</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5z"/></svg></div><span>Exchange compliant</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg></div><span>Prevents errors</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg></div><span>Broker validation</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg></div><span>Reduces trading errors</span></div>
</div>

---

## Data Types

| Data Type | Example | Description |
|---|---|---|
| String | `"RELIANCE"` | Text values |
| Integer | `100` | Whole numbers |
| Double | `1250.50` | Decimal numbers |
| Boolean | `true` | True or false |
| Array | `["BUY", "SELL"]` | List of values |
| Object | `{ "price": 100 }` | Grouped fields |

---

## Common Data Types in API Requests

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin:16px 0 24px">

  <div style="border:1.5px solid #f7982b;border-radius:12px;overflow:hidden">
    <div style="background: #f8b45a;padding:9px 16px;color: #ffff;font-weight:700;font-size:13px">String</div>
    <div style="padding:14px 16px;background: #f9fafb">
      <p style="font-size:13px;color:#6b7280;margin:0 0 8px">Stores text values — exchange names, symbols, order sides.</p>
      <pre style="margin:0;font-size:12px;background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:10px;color:#374151">{ "exchangeSegment": "NSECM" }</pre>
    </div>
  </div>

  <div style="border:1.5px solid #f78821;border-radius:12px;overflow:hidden">
    <div style="background: #f8b45a;padding:9px 16px;color: #ffff;font-weight:700;font-size:13px">Integer</div>
    <div style="padding:14px 16px;background:#f9fafb">
      <p style="font-size:13px;color:#6b7280;margin:0 0 8px">Stores whole numbers — quantities, instrument IDs.</p>
      <pre style="margin:0;font-size:12px;background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:10px;color:#374151">{ "quantity": 100 }</pre>
    </div>
  </div>

  <div style="border:1.5px solid #fdb530;border-radius:12px;overflow:hidden">
    <div style="background: #f8b45a;padding:9px 16px;color: #ffff;font-weight:700;font-size:13px">Double</div>
    <div style="padding:14px 16px;background:#f9fafb">
      <p style="font-size:13px;color:#6b7280;margin:0 0 8px">Stores decimal values — prices, stop loss levels.</p>
      <pre style="margin:0;font-size:12px;background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:10px;color:#374151">{ "price": 2500.50 }</pre>
    </div>
  </div>

  <div style="border:1.5px solid #fdb530;border-radius:12px;overflow:hidden">
    <div style="background: #f8b45a;padding:9px 16px;color: #ffff;font-weight:700;font-size:13px">Boolean</div>
    <div style="padding:14px 16px;background:#f9fafb">
      <p style="font-size:13px;color:#6b7280;margin:0 0 8px">Stores true/false flags — investor type, spread orders.</p>
      <pre style="margin:0;font-size:12px;background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:10px;color:#374151">{ "isInvestorClient": true }</pre>
    </div>
  </div>

  <div style="border:1.5px solid #fdb530;border-radius:12px;overflow:hidden">
    <div style="background: #f8b45a;padding:9px 16px;color: #ffff;font-weight:700;font-size:13px">Array</div>
    <div style="padding:14px 16px;background:#f9fafb">
      <p style="font-size:13px;color:#6b7280;margin:0 0 8px">Stores multiple values — order sides, segments.</p>
      <pre style="margin:0;font-size:12px;background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:10px;color:#374151">{ "orderSide": ["BUY","SELL"] }</pre>
    </div>
  </div>

  <div style="border:1.5px solid #fdb530;border-radius:12px;overflow:hidden">
    <div style="background: #f8b45a;padding:9px 16px;color: #ffff;font-weight:700;font-size:13px">Object</div>
    <div style="padding:14px 16px;background:#f9fafb">
      <p style="font-size:13px;color:#6b7280;margin:0 0 8px">Groups related fields — exchange info, nested configs.</p>
      <pre style="margin:0;font-size:12px;background:#fff;border:1px solid #e5e7eb;border-radius:6px;padding:10px;color:#374151">{ "exchangeInfo": {
  "NSECM": { "productType": "MIS" }
}}</pre>
    </div>
  </div>

</div>

---

## Business Rules

Business rules are predefined validations that every request must satisfy before reaching the exchange.

### Examples

<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:14px 0 20px">

  <div style="border:1.5px solid #fa8703;border-radius:10px;overflow:hidden">
    <div style="background: #fcb96e;padding:8px 14px;color:#0e0b01;font-weight:700;font-size:12px"> Quantity Must Be Positive</div>
    <div style="padding:12px 14px;background: #f8e3c7;font-family:monospace;font-size:13px;color:#166534">Quantity = 10 &nbsp;→ Accepted</div>
    <div style="padding:8px 14px 12px;background: #f8e3c7;font-family:monospace;font-size:13px;color:#9a3412;border-top:1px solid #fdba74">Quantity = -5 → Rejected</div>
  </div>

  <div style="border:1.5px solid #fcb86b;border-radius:10px;overflow:hidden">
    <div style="background: #fcb96e;padding:8px 14px;color:#0e0b01;font-weight:700;font-size:12px"> Price Must Be Greater Than Zero</div>
    <div style="padding:12px 14px;background: #f8e3c7;font-family:monospace;font-size:13px;color:#166534">Price = 2500 &nbsp;→ Accepted</div>
    <div style="padding:8px 14px 12px;background: #f8e3c7;font-family:monospace;font-size:13px;color:#9a3412;border-top:1px solid #fdba74">Price = 0 &nbsp;&nbsp;&nbsp;&nbsp;→ Rejected</div>
  </div>

  <div style="border:1.5px solid #fcb86b;border-radius:10px;overflow:hidden">
    <div style="background: #fcb96e;padding:8px 14px;color:#0e0b01;font-weight:700;font-size:12px"> Order Side Must Be BUY or SELL</div>
    <div style="padding:12px 14px;background: #f8e3c7;font-family:monospace;font-size:13px;color:#166534">BUY / SELL &nbsp;→ Accepted</div>
    <div style="padding:8px 14px 12px;background: #f8e3c7;font-family:monospace;font-size:13px;color:#9a3412;border-top:1px solid #fdba74">PURCHASE &nbsp;&nbsp;&nbsp;→ Rejected</div>
  </div>

  <div style="border:1.5px solid #fcb86b;border-radius:10px;overflow:hidden">
    <div style="background: #fcb96e;padding:8px 14px;color:#0e0b01;font-weight:700;font-size:12px"> Stop Loss Logic (BUY order)</div>
    <div style="padding:12px 14px;background: #f8e3c7;font-family:monospace;font-size:13px;color:#166534;line-height:1.8">SL Price &lt; Trigger &lt; Limit</div>
    <div style="padding:8px 14px 12px;background: #f8e3c7;font-family:monospace;font-size:13px;color:#9a3412;border-top:1px solid #fdba74">Any other order → Rejected</div>
  </div>

</div>

### Common Business Rules

| Rule | Description |
|---|---|
| Quantity > 0 | Quantity cannot be zero or negative |
| Price > 0 | Price must be greater than zero |
| Valid Product Type | Must be MIS, NRML, CNC, CO, or BO |
| Valid Exchange Segment | Exchange must exist and be active |
| Market Hours Check | Orders only during trading hours |
| Margin Availability | Sufficient funds must be available |
| Authentication Required | Valid session token required |
| Valid Instrument | Instrument must exist on the exchange |

---

## How Validation Works

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>User Request</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg></div><span>Validate Data Types</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg></div><span>Apply Business Rules</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5z"/></svg></div><span>Broker Checks</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Exchange Validation</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7l-2 4h8l-2-4h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 14H3V4h18v12z"/></svg></div><span>Response Generated</span></div>
</div>

---

## API Field Reference

<div class="table-container">
  <table class="api-table">
    <thead>
      <tr>
        <th><strong>Field Name</strong></th>
        <th><strong>Data Type</strong></th>
        <th><strong>Size</strong></th>
        <th><strong>Description</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr><td><span class="enum-badge">ClientID</span></td><td>String</td><td>15</td><td>Client ID. Mandatory in case of Dealer.</td></tr>
      <tr><td><span class="enum-badge">UserID</span></td><td>String</td><td>15</td><td>UserID of investor client.</td></tr>
      <tr><td><span class="enum-badge">ExchangeSegment</span></td><td>String</td><td>15</td><td>Exchange Segment identifier.</td></tr>
      <tr><td><span class="enum-badge">ExchangeInstrumentID</span></td><td>Integer</td><td>10</td><td>Exchange Scrip code or Symbol Token — unique identifier for the instrument.</td></tr>
      <tr><td><span class="enum-badge">ProductType</span></td><td>String</td><td>4</td><td>Product type (MIS, NRML, CNC, CO, BO).</td></tr>
      <tr><td><span class="enum-badge">OrderType</span></td><td>String</td><td>10</td><td>Order type (Market, Limit, StopLimit, StopMarket).</td></tr>
      <tr><td><span class="enum-badge">OrderSide</span></td><td>String</td><td>4</td><td>Order side — BUY or SELL.</td></tr>
      <tr><td><span class="enum-badge">TimeInForce</span></td><td>String</td><td>5</td><td>Order validity (DAY, IOC, GTC, GTD, EOS).</td></tr>
      <tr><td><span class="enum-badge">Quantity</span></td><td>Integer</td><td>10</td><td>Quantity to transact. In terms of Lots.</td></tr>
      <tr><td><span class="enum-badge">Price</span></td><td>Double</td><td>(15,4)</td><td>Price in Rupees. Up to 4 decimal places.</td></tr>
      <tr><td><span class="enum-badge">OrderUniqueIdentifier</span></td><td>String</td><td>20</td><td>Echo back to identify order.</td></tr>
      <tr><td><span class="enum-badge">AppOrderID</span></td><td>Integer</td><td>10</td><td>Unique Order ID as received in Order Entry Response.</td></tr>
      <tr><td><span class="enum-badge">AccessPassword</span></td><td>String</td><td>20</td><td>Access Password of a server.</td></tr>
      <tr><td><span class="enum-badge">Version</span></td><td>String</td><td>20</td><td>API Version number of the server.</td></tr>
      <tr><td><span class="enum-badge">UniqueKey</span></td><td>String</td><td>50</td><td>Generated by the server during the HostLookUp process.</td></tr>
      <tr><td><span class="enum-badge">ConnectionString</span></td><td>String</td><td>200</td><td>IP address of the server to which the client needs to connect.</td></tr>
      <tr><td><span class="enum-badge">Remarks</span></td><td>String</td><td>50</td><td>Any remarks added by the server in the HostLookUp API.</td></tr>
      <tr><td><span class="enum-badge">ExchangeOrderID</span></td><td>String</td><td>20</td><td>Unique OrderID generated by the exchange.</td></tr>
      <tr><td><span class="enum-badge">OrderReferenceID</span></td><td>String</td><td>20</td><td>Unique OrderReferenceID to identify more than 1 leg orders.</td></tr>
      <tr><td><span class="enum-badge">IsSpread</span></td><td>Boolean</td><td>5</td><td>Indicates Spread order or normal order.</td></tr>
      <tr><td><span class="enum-badge">OrderCategoryType</span></td><td>String</td><td>10</td><td>Represents order market type (MarketType).</td></tr>
      <tr><td><span class="enum-badge">GeneratedBy</span></td><td>String</td><td>15</td><td>Source from which the operation has been performed.</td></tr>
      <tr><td><span class="enum-badge">MessageCode</span></td><td>String</td><td>10</td><td>API MessageCode.</td></tr>
      <tr><td><span class="enum-badge">MessageVersion</span></td><td>String</td><td>10</td><td>API Message Version.</td></tr>
      <tr><td><span class="enum-badge">TokenID</span></td><td>String</td><td>10</td><td>API TokenID.</td></tr>
      <tr><td><span class="enum-badge">ApplicationType</span></td><td>String</td><td>15</td><td>API ApplicationType.</td></tr>
      <tr><td><span class="enum-badge">SequenceNumber</span></td><td>String</td><td>15</td><td>API SequenceNumber.</td></tr>
      <tr><td><span class="enum-badge">Timestamps</span></td><td>String</td><td>20</td><td>Timestamp of the event.</td></tr>
      <tr><td><span class="enum-badge">OrderStatus</span></td><td>String</td><td>20</td><td>Current status of the order.</td></tr>
      <tr><td><span class="enum-badge">RejectReason</span></td><td>String</td><td>500</td><td>Reason if order is rejected or cancelled.</td></tr>
      <tr><td><span class="enum-badge">OrderExpiryDate</span></td><td>String</td><td>20</td><td>Expiry date of order when validity is set to GTD (Good Till Date).</td></tr>
      <tr><td><span class="enum-badge">EntryAppOrderID</span></td><td>Integer</td><td>10</td><td>Unique order ID for the main/entry order.</td></tr>
      <tr><td><span class="enum-badge">ExitAppOrderID</span></td><td>Integer</td><td>10</td><td>Unique order ID for the linked exit order (Stop-Loss or Target).</td></tr>
      <tr><td><span class="enum-badge">BuyExposureMarginPresent</span></td><td>Double</td><td>(15,4)</td><td>Margin blocked for buy exposure.</td></tr>
      <tr><td><span class="enum-badge">SellExposureMarginPresent</span></td><td>Double</td><td>(15,4)</td><td>Margin blocked for sell exposure.</td></tr>
      <tr><td><span class="enum-badge">VarELMarginPresent</span></td><td>Double</td><td>(15,4)</td><td>Margin blocked under VaR &amp; ELM requirement.</td></tr>
      <tr><td><span class="enum-badge">ScripBasketMarginPresent</span></td><td>Double</td><td>(15,4)</td><td>Margin blocked for scrip basket restrictions.</td></tr>
      <tr><td><span class="enum-badge">GrossExposureLimitPresent</span></td><td>Double</td><td>(15,4)</td><td>Limit consumed against gross exposure.</td></tr>
      <tr><td><span class="enum-badge">BuyExposureLimitPresent</span></td><td>Double</td><td>(15,4)</td><td>Limit consumed for buy exposure.</td></tr>
      <tr><td><span class="enum-badge">SellExposureLimitPresent</span></td><td>Double</td><td>(15,4)</td><td>Limit consumed for sell exposure.</td></tr>
      <tr><td><span class="enum-badge">CNCLimitUsed</span></td><td>Double</td><td>(15,4)</td><td>Limit used under CNC products.</td></tr>
      <tr><td><span class="enum-badge">CNCAmountUsed</span></td><td>Double</td><td>(15,4)</td><td>Amount utilized under CNC trades.</td></tr>
      <tr><td><span class="enum-badge">MarginUsed</span></td><td>Double</td><td>(15,4)</td><td>Total margin currently blocked/used.</td></tr>
      <tr><td><span class="enum-badge">LimitUsed</span></td><td>Double</td><td>(15,4)</td><td>Other limits consumed (if applicable).</td></tr>
      <tr><td><span class="enum-badge">TotalSpanMargin</span></td><td>Double</td><td>(15,4)</td><td>Margin utilized as SPAN (F&amp;O requirement).</td></tr>
      <tr><td><span class="enum-badge">ExposureMarginPresent</span></td><td>Double</td><td>(15,4)</td><td>Exposure margin used (non-SPAN component).</td></tr>
      <tr><td><span class="enum-badge">CNCLimit</span></td><td>Double</td><td>(15,4)</td><td>Maximum CNC (delivery) trading limit assigned.</td></tr>
      <tr><td><span class="enum-badge">TurnoverLimitPresent</span></td><td>Double</td><td>(15,4)</td><td>Turnover limit allocated.</td></tr>
      <tr><td><span class="enum-badge">MTMLossLimitPresent</span></td><td>Double</td><td>(15,4)</td><td>Limit on MTM loss allowed.</td></tr>
      <tr><td><span class="enum-badge">BuyExposureLimit</span></td><td>Double</td><td>(15,4)</td><td>Maximum exposure allowed for buy trades.</td></tr>
      <tr><td><span class="enum-badge">SellExposureLimit</span></td><td>Double</td><td>(15,4)</td><td>Maximum exposure allowed for sell trades.</td></tr>
      <tr><td><span class="enum-badge">GrossExposureLimit</span></td><td>Double</td><td>(15,4)</td><td>Overall gross exposure limit assigned.</td></tr>
      <tr><td><span class="enum-badge">GrossExposureDerivativesLimit</span></td><td>Double</td><td>(15,4)</td><td>Gross exposure limit for derivatives.</td></tr>
      <tr><td><span class="enum-badge">BuyExposureFuturesLimit</span></td><td>Double</td><td>(15,4)</td><td>Exposure limit for futures buy trades.</td></tr>
      <tr><td><span class="enum-badge">BuyExposureOptionsLimit</span></td><td>Double</td><td>(15,4)</td><td>Exposure limit for options buy trades.</td></tr>
      <tr><td><span class="enum-badge">SellExposureOptionsLimit</span></td><td>Double</td><td>(15,4)</td><td>Exposure limit for options sell trades.</td></tr>
      <tr><td><span class="enum-badge">SellExposureFuturesLimit</span></td><td>Double</td><td>(15,4)</td><td>Exposure limit for futures sell trades.</td></tr>
      <tr><td><span class="enum-badge">ClientName</span></td><td>String</td><td>15</td><td>User login ID.</td></tr>
      <tr><td><span class="enum-badge">EmailId</span></td><td>String</td><td>50</td><td>Registered email address of the client.</td></tr>
      <tr><td><span class="enum-badge">MobileNo</span></td><td>String</td><td>10</td><td>Registered mobile number of the client.</td></tr>
      <tr><td><span class="enum-badge">PAN</span></td><td>String</td><td>15</td><td>Client Permanent Account Number (for compliance/KYC).</td></tr>
      <tr><td><span class="enum-badge">IncludeInAutoSquareoff</span></td><td>Boolean</td><td>5</td><td>Whether the client positions are eligible for auto square-off.</td></tr>
      <tr><td><span class="enum-badge">IncludeInAutoSquareoffBlocked</span></td><td>Boolean</td><td>5</td><td>Whether auto square-off is blocked for the client.</td></tr>
      <tr><td><span class="enum-badge">IsProClient</span></td><td>Boolean</td><td>5</td><td>Indicates if the client is a proprietary client.</td></tr>
      <tr><td><span class="enum-badge">ResidAddress</span></td><td>String</td><td>500</td><td>Client residential address.</td></tr>
      <tr><td><span class="enum-badge">OfficeAddress</span></td><td>String</td><td>500</td><td>Client registered office address.</td></tr>
      <tr><td><span class="enum-badge">AccountNumber</span></td><td>String</td><td>15</td><td>Bank account number.</td></tr>
      <tr><td><span class="enum-badge">AccountType</span></td><td>String</td><td>10</td><td>Type of account (Savings, Current, etc.).</td></tr>
      <tr><td><span class="enum-badge">BankName</span></td><td>String</td><td>100</td><td>Name of the bank.</td></tr>
      <tr><td><span class="enum-badge">BankBranchName</span></td><td>String</td><td>100</td><td>Bank branch name.</td></tr>
      <tr><td><span class="enum-badge">BankCity</span></td><td>String</td><td>50</td><td>City where the bank branch is located.</td></tr>
      <tr><td><span class="enum-badge">CustomerId</span></td><td>String</td><td>15</td><td>Customer identifier as provided by the bank.</td></tr>
      <tr><td><span class="enum-badge">BankCityPincode</span></td><td>String</td><td>10</td><td>Pincode of the bank city.</td></tr>
      <tr><td><span class="enum-badge">BankIFSCCode</span></td><td>String</td><td>15</td><td>IFSC code for the bank branch.</td></tr>
      <tr><td><span class="enum-badge">ExchangeSegNumber</span></td><td>Integer</td><td>2</td><td>Exchange Segment number.</td></tr>
      <tr><td><span class="enum-badge">Enabled</span></td><td>Boolean</td><td>5</td><td>Whether this exchange segment is active for the client.</td></tr>
      <tr><td><span class="enum-badge">ParticipantCode</span></td><td>String</td><td>15</td><td>Participant/broker code provided by the exchange.</td></tr>
      <tr><td><span class="enum-badge">IsValid</span></td><td>Boolean</td><td>5</td><td>Indicates whether the order is valid based on margin checks. <code>true</code> means the order can proceed.</td></tr>
      <tr><td><span class="enum-badge">MarginRequired</span></td><td>Double</td><td>(15,4)</td><td>Total margin required (in currency units) to place the order.</td></tr>
      <tr><td><span class="enum-badge">MarginAvailable</span></td><td>Double</td><td>(15,4)</td><td>Total margin currently available in the user account.</td></tr>
      <tr><td><span class="enum-badge">MarginShortfall</span></td><td>Double</td><td>(15,4)</td><td>Margin deficit amount if available margin is insufficient.</td></tr>
      <tr><td><span class="enum-badge">ErrorMessage</span></td><td>String</td><td>500</td><td>Error message when <code>IsValid = false</code>. Empty string means no error.</td></tr>
    </tbody>
  </table>
</div>

