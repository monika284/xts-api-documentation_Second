<h1 id="Enums" style="color:#ff6b00;font-weight:800;margin-bottom:6px">Enums with Numeric Constants</h1>
<p class="iov-subtitle"><strong>Enums (Enumerations)</strong> are predefined sets of values used by the API to represent options, states, or configurations — using compact numeric codes for speed, consistency, and reduced payload.</p>

<div class="iov-features">
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg></div><span>Faster processing</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Standardized values</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg></div><span>Reduced payload</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-purple"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/></svg></div><span>Prevents invalid values</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-yellow"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg></div><span>Less coding errors</span></div>
  <div class="iov-feature"><div class="iov-feat-icon iov-icon-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a5 5 0 0 0-5 5v2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5z"/></svg></div><span>Easier validation</span></div>
</div>

---

## What are Enums?

Instead of sending long descriptive text, APIs use short codes internally. For example:

<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:0;align-items:center;margin:16px 0 24px;border:1.5px solid #e5e7eb;border-radius:12px;overflow:hidden">
  <div style="padding:16px 20px;background:#ffffff">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:6px">WITHOUT ENUMS</div>
    <code style="font-size:13px;color:#9a3412">"productType": "Margin Intraday Square Off"</code>
  </div>
  <div style="padding:16px 10px;background:#f3f4f6;text-align:center;font-size:20px;color:#6b7280;align-self:stretch;display:flex;align-items:center">→</div>
  <div style="padding:16px 20px;background:#f0fdf4">
    <div style="font-size:11px;font-weight:700;color:#9ca3af;letter-spacing:.06em;margin-bottom:6px">WITH ENUMS</div>
    <code style="font-size:13px;color:#166534">"productType": 1</code>
    <div style="font-size:12px;color:#6b7280;margin-top:4px">where <code>1 = MIS</code></div>
  </div>
</div>

---

## How Enums Work Internally

<div class="iov-workflow" style="flex-wrap:wrap">
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-orange"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></div><span>Send <code>productType: 1</code></span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-blue"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/></svg></div><span>API maps <code>1 = MIS</code></span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-green"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg></div><span>Broker processes intraday order</span></div>
  <div class="iov-wf-arrow">→</div>
  <div class="iov-wf-step"><div class="iov-wf-icon iov-wf-teal"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div><span>Response returned</span></div>
</div>

---

## Best Practices

**Use enum names instead of hardcoding numbers**

```python
# Avoid
productType = 1

# Prefer
productType = ProductType.MIS
```

**Validate values before sending**

```text
✔  BUY
✔  SELL
✖  PURCHASE   ← not a valid enum value
```

---
## 1. Exchange Segments

<div class="table-container">
  <table class="api-table">
    <thead>
      <tr style="font-size:midium">
        <th><strong>Enum Name</strong></th>
        <th><strong>Numeric Code</strong></th>
        <th><strong>Description</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="enum-badge">NSECM</span></td>
        <td>1</td>
        <td>
          - <Strong>NSE(National Stock Exchange)Cash Market</Strong><br>
          - It is a normal buying/selling cash market in NSE.<br>
          - Most of the traders trade here on thr regular basis.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">NSEFO</span></td>
        <td>2</td>
        <td>
        - <Strong>NSE Futures & Options</Strong><br>
        - Derivatives segment of NSE where equity futures, index futures,
          and options contracts are traded.<br>
        - It is a market of future & options trading in NSE.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">NSECD</span></td>
        <td>3</td>
        <td>
        - <Strong>NSE Currency </Strong><br>
        - Currency trading segment at NSE for exchange-traded currency
          futures and options (USD/INR, EUR/INR, etc.)<br>
        - It is a market of currency trading in NSE.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">BSECM</span></td>
        <td>11</td>
        <td>
        - <Strong>BSE(Bombay Stock Exchange)Cash Market</Strong><br>
        - Cash/equity segment of BSE, the oldest stock exchange in Asia,
          where stocks are bought and sold.<br>
        - It is a normal buying/selling trades market in BSE.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">BSEFO</span></td>
        <td>12</td>
        <td>
        - <Strong>BSE Futures & Options</Strong><br>
        - Derivatives segment of BSE offering equity derivatives, index
          derivatives, and stock futures/options.<br>
        - It is a Future & Options trade market in BSE
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">BSECD</span></td>
        <td>13</td>
        <td>
        - <Strong>BSE Currency Derivative</Strong><br>
        - Currency derivatives platform of BSE that allows trading in
          exchange-listed currency futures and options.<br>
        - It is a Currency trade market in BSE.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">MCXFO</span></td>
        <td>51</td>
        <td>
        - <Strong>MCX(Multi Commodity Exchange)Future & Option</Strong><br>
        - Derivatives trading segment of MCX for commodities such as gold,
          silver, crude oil, natural gas, and agricultural products.<br>
        - It is a Commodity(e.g. Physical Goods/Products) trade market
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">NCDEX</span></td>
        <td>21</td>
        <td>
        - <Strong>National Commodity And Derivatives Exchange.</Strong><br>
        - A leading exchange focused on agricultural commodity futures like
          soybean, chana, guar, and other agri-products.<br>
        - It is a Agriculture Commodity Exchange market
        </td>
      </tr>
    </tbody>
  </table>
</div>

## 2. ProductType
<div class="enum-section">
  <table class="api-table">
    <thead>
      <tr>
        <th>Enum Name</th>
        <th>Numeric Code</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="enum-badge">MIS</span></td>
        <td>1</td>
        <td>
        - <Strong>Margin Intraday Square-off</strong><br>
        - Intraday trading product type where positions must be squared off before market close. Provides higher leverage compared to delivery.<br>
        - MIS is used for same-day trading only called Intraday Trading.<br>
        - All trades must be closed before the market closes (9:15 AM – 3:30 PM).<br>
        - The broker gives extra money (leverage), so you can trade with a larger amount.<br>
        - If you don't close the trade, the broker will automatically close it before market close.<br>
        - After closing the trade, the broker takes back its money, and you keep your money along with any profit (or bear any loss).
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">NRML</span></td>
        <td>2</td>
        <td>
        - <Strong>Normal</Strong><br>
        - Standard product type used for carrying forward positions overnight in derivatives or cash without compulsory intraday square-off.<br>
        - NRML is used to keep trades overnight or for multiple days.<br>
        - You do not need to close the trade on the same day.<br>
        - It is mainly used for Futures and Options (F&O) trading.<br>
        - You can hold the trade until the contract expiry date; after expiry, the position expires or is settled automatically.<br>
        - Brokers also provide leverage in NRML, but it is usually lower than the leverage available in MIS.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">CNC</span></td>
        <td>4</td>
        <td>
        - <Strong>Cash And Carry </Strong><br>
        - Delivery-based product type for equity trades. Shares are delivered to the Demat account, with no leverage.<br>
        - CNC is used for real stock delivery and long-term investing.<br>
        - Trades are done using your own money, with little or no leverage.<br>
        - It is mainly used for buying and selling shares (equity).<br>
        - There is no need to close the position on the same day.<br>
        - You can hold the shares for as long as you want, such as days, months, or even years.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">CO</span></td>
        <td>8</td>
        <td>
        - <Strong>Cover Order</Strong><br>
        - CO is mainly used for intraday (same-day) trading.<br>
        - Intraday order type where a market or limit order is placed along with a mandatory stop-loss order. Provides higher leverage while controlling risk.<br>
        - It focuses on safety and risk control.<br>
        - A stop-loss (loss limit) order is compulsory with every trade.<br>
        - Brokers usually provide higher leverage because the risk is controlled.<br>
        - If the market moves against you and reaches the stop-loss price, the trade is automatically exited to limit the loss.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">BO</span></td>
        <td>16</td>
        <td style="padding:14px">
          <div style="padding-left:14px;text-indent:-14px;margin-bottom:4px">- <strong>Bracket Order</strong></div>
          <div style="padding-left:14px;text-indent:-14px;margin-bottom:4px">- Advanced order type where a main order is placed with both a target (profit booking) and stop-loss. Once one is executed, the other is automatically cancelled. Can also include a trailing stop-loss.</div>
          <div style="padding-left:14px;text-indent:-14px;margin-bottom:4px">- BO focuses on both profit target and stop-loss.</div>
          <div style="padding-left:14px;text-indent:-14px;margin-bottom:4px">- It is used to balance profit and loss automatically.</div>
          <div style="padding-left:14px;text-indent:-14px;margin-bottom:4px">- It contains three orders: Entry Order, Target Profit Order, and Stop-Loss Order.</div>
          <div style="padding-left:14px;text-indent:-14px;margin-bottom:4px">- When the market reaches either the target price or the stop-loss price, the trade exits automatically.</div>
          <div style="padding-left:14px;text-indent:-14px">- It is mainly used for intraday trading and helps traders manage risk and profit together.</div>
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">MTF</span></td>
        <td>32</td>
        <td>
        - <Strong>Margin Trading Faciity</Strong><br>
        <div style="padding-left:14px;text-indent:-14px;margin-bottom:4px">- Allows investors to buy stocks by partly paying upfront and borrowing the balance from the broker. Shares can be carried forward as long as margin requirements are met.</div>
        - MTF is used for buying shares with the help of money borrowed from the broker.<br>
        - The broker charges interest on the borrowed amount.<br>
        - You can hold the shares for as long as you want, such as days, months, or even years.<br>
        - The borrowed amount remains with the broker, and interest is charged until it is repaid.<br>
        - It allows you to buy more shares than you could using only your own money.
        </td>
      </tr>
    </tbody>
  </table>
</div>

## 3. OrderType
<div class="enum-section">
  <table class="api-table">
    <thead>
      <tr>
        <th>Enum Name</th>
        <th>Numeric Code</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="enum-badge">Market</span></td>
        <td>1</td>
        <td>
        - <Strong>Market Order</Strong><br>
        - An order to buy or sell immediately at the best available price in the market.<br>
        - A Market Order is executed immediately at the current market price.<br>
        - You only specify the quantity to buy or sell; the price is decided by the market.<br>
        - It is used when quick execution is more important than getting a specific price.<br>
        - <strong>Example: </Strong>If TCS is trading around ₹3500 and you place a Market Buy Order, it will be executed immediately at the best available market price.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">Limit</span></td>
        <td>2</td>
        <td>
        - <Strong> Limit Order </Strong><br>
        - An order to buy or sell at a specified price (or better).<br>
        - In a Limit Order, you set the price at which you want to buy or sell.<br>
        - The trade is executed only if the market reaches your specified price or a better price.<br>
        - It is used when getting a specific price is more important than immediate execution.<br>
        <div style="padding-left:14px;text-indent:-14px;margin-bottom:4px">- <strong>Example:</strong> If the current TCS price is ₹3500 and you place a Buy Limit Order at ₹3480, the order will execute only if TCS falls to ₹3480 or below; otherwise, it will remain pending.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">StopMarket</span></td>
        <td>4</td>
        <td>
        - <Strong>StopMarket Order</Strong><br>
        - An order that becomes a market order once a specified trigger price is reached. Used mainly to limit losses.<br>
        - In a Stop Market Order, you set a trigger price (stop price).<br>
        - When the market reaches the trigger price, the order becomes a Market Order and is executed immediately at the best available price.<br>
        - It is mainly used to limit losses or protect profits automatically.<br>
        <div style="padding-left:14px;text-indent:-14px;margin-bottom:4px">- <Strong>Example:</Strong> If you bought TCS at ₹3500 and set a Stop Market Sell Order with a trigger price of ₹3480, then when TCS falls to ₹3480, the order is activated and the shares are sold immediately at the current market price.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">StopLimit</span></td>
        <td>8</td>
        <td>
        - <Strong>StopLimit Order</Strong><br>
        - An order that becomes a limit order once the trigger price is reached. It executes only at the specified limit price or better.<br>
        - In a Stop Limit Order, you set both a trigger price and a limit price.<br>
        - When the market reaches the trigger price, a Limit Order is placed at the specified limit price.<br>
        - It is used to control the execution price while limiting losses or protecting profits.<br>
        <div style="padding-left:14px;text-indent:-14px;margin-bottom:4px">- <Strong>Example:</Strong> If you bought TCS at ₹3500, you can set a trigger price of ₹3480 and a limit price of ₹3475. When TCS reaches ₹3480, a sell order at ₹3475 is placed. The trade will execute only at ₹3475 or a better price.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">OCO</span></td>
        <td>32</td>
        <td>
        - <Strong>One Cancels the Other</Strong><br>
        - A conditional order where two linked orders are placed — if one gets executed, the other is automatically cancelled.<br>
        - OCO contains two orders together, usually a Target Order and a Stop-Loss Order.<br>
        - It helps you manage both profit and loss automatically.<br>
        - When one order is executed, the other order is automatically cancelled.<br>
        - It is useful when you want to set both a profit target and a loss limit without monitoring the market continuously.
        </td>
      </tr>
      <tr>
        <td><span class="enum-badge">MTF</span></td>
        <td>32</td>
        <td>
        - <Strong>Margin Trading Facility</Strong><br>
        - MTF allows you to buy shares using money borrowed from the broker.<br>
        - You can hold the shares for a long time (days, months, or years); there is no need to close the trade on the same day<br> 
        - The broker charges interest on the borrowed amount until it is repaid.<br>
        - It helps you buy more shares than you could with only your own money.
        </td>
      </tr>
    </tbody>
  </table>
</div>

## 4. OrderSide
<table class="api-table">
    <thead>
        <tr>
            <th>Enum Name</th>
            <th>Numeric Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="enum-badge">BUY</span></td>
            <td>49</td>
            <td>
            - <Strong>BUY means purchasing a stock or contract.</Strong><br>
            - Indicates a purchase transaction. Used when entering a long position (expecting the price to rise).<br>
            - You buy when you expect the price to go up.<br>
            - Profit is made if you sell later at a higher price.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">SELL</span></td>
            <td>50</td>
            <td>
            - <Strong>SELL means selling a stock or contract.</Strong><br>
            - Indicates a sale transaction. Used when exiting a long position or initiating a short position (expecting the price to fall).<br>
            - You sell when you expect the price to go down or when you want to book profit.<br>
            - Profit is made if you buy back later at a lower price (short selling) or if you sell shares you already own at a higher price.
            </td>
        </tr>
    </tbody>
</table>

## 5. TimeInForce

<table class="api-table">
    <thead>
        <tr>
            <th>Enum Name</th>
            <th>Numeric Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="enum-badge">DAY</span></td>
            <td>1</td>
            <td>
            - <Strong>Day Order</Strong><br>
            - The order remains active only for the current trading day.<br>
            - If the order is not executed by market close, it is automatically cancelled.<br>
            - Order remains valid only for the trading day. If not executed by market close, it is cancelled automatically.
            <td>
        </tr>
        <tr>
            <td><span class="enum-badge">GTC</span></td>
            <td>2</td>
            <td>
            - <Strong>Good Till Cancelled</Strong><br>
            - The order remains active until you cancel it manually.<br>
            - It can stay active for many days if it is not executed.<br>
            - The order is cancelled only when you manually cancel it.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">IOC</span></td>
            <td>4</td>
            <td>
            - <Strong>Immediate Or Cancel</Strong><br>
            - The order must be executed immediately.<br>
            - If only some quantity can be executed, the remaining quantity is cancelled instantly.<br>
            - Any unfilled part of the order does not stay pending.<br>
            - <Strong>Example:</Strong> If you place an IOC order to buy 100 shares and only 60 shares are available, those 60 shares are bought immediately and the remaining 40 shares are cancelled.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">GTD</span></td>
            <td>8</td>
            <td>
            - <Strong>Good Till Date </Strong><br>
            - The order remains active until a specific date set by you.<br>
            - It can stay active for many days until that date.<br>
            - If the order is not executed by the specified date, it is automatically cancelled.
            <td>
        </tr>
        <tr>
            <td><span class="enum-badge">EOS</span></td>
            <td>16</td>
            <td>
            - <Strong>End Of Session</Strong><br>
            - The order remains active only until the end of the current trading session (market day).<br>
            - The order must be executed before the session ends.<br>
            - If the order is not executed by the end of the session, it is automatically cancelled.<br>
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">COL</span></td>
            <td>32</td>
            <td>
            - <Strong>Close of Trading Session </Strong><br>      
            - COL means the order is intended to be executed near the market closing time.<br>
            - It helps traders place orders based on the closing price of the trading session.<br>
            - The order is processed during the market closing period.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">GTDYS</span></td>
            <td>128</td>
            <td>
            - <Strong>Good Till Defined Yielding Sessions </Strong><br>
            - The order remains active for a predefined number of trading sessions.<br>
            - It stays active across multiple market days until the defined session limit is reached.<br>
            - If the order is not executed within those sessions, it is automatically cancelled.
            </td>
        </tr>
    </tbody>
</table>

## 6. Order Status
<table class="api-table">
    <thead>
        <tr>
            <th>Enum Name</th>
            <th>Numeric Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="enum-badge">Open or New</span></td>
            <td>48</td>
            <td>
            - <Strong>Open/New means a new order has been placed and is waiting to be executed.</Strong><br>
            - The order is active in the market but has not been fully or partially traded yet.<br>
            - The order can later be executed, modified, or cancelled.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">PartiallyFilled</span></td>
            <td>49</td>
            <td>
            - <Strong>PartiallyFilled Order</Strong><br>
            - It means only some part of the order has been executed.The remaining quantity is still active and waiting to be executed.<br>
            - The order stays open until the remaining quantity is filled or cancelled.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">Filled</span></td>
            <td>50</td>
            <td>
            - <Strong>Filled Order</Strong><br>
            - Filled means the order has been completely executed.<br>
            - All the requested quantity has been bought or sold successfully.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">Cancelled</span></td>
            <td>52</td>
            <td>
            - <Strong>Cancelled Order</Strong><br>
            - Cancelled means the order has been cancelled and will not be executed.<br>
            - The order may be cancelled by you, the broker, or the exchange.<br>
            - No quantity will be traded after the order is cancelled.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">Replaced</span></td>
            <td>53</td>
            <td>
            - <Strong>Replaced Order</Strong><br>
            - Replaced means an existing order has been modified or updated.<br>
            - The old order is replaced with a new one having the updated details.Changes may include price, quantity, or other order parameters.
            <td>
        </tr>
        <tr>
            <td><span class="enum-badge">PendingCancel</span></td>
            <td>54</td>
            <td>
            - <Strong>PendingCancel Order</Strong><br>
            - PendingCancel means a cancellation request has been sent, but the order has not been cancelled yet.<br>
            - The system or exchange is processing the cancellation request.The order status will change to Cancelled once the cancellation is completed.
        </tr>
        <tr>
            <td><span class="enum-badge">Rejected</span></td>
            <td>56</td>
            <td>
            - <Strong>Rejected Order</Strong><br>
            - Rejected means the order was not accepted by the exchange or broker.<br>
            - The order is not executed and becomes inactive.<br>
            - Common reasons include insufficient funds, invalid price, or trading restrictions.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">PendingNew</span></td>
            <td>65</td>
            <td>
            - <Strong>PendingNew Order</Strong><br>
            - PendingNew means the order has been received but has not yet become active in the market.<br>
            - The exchange or broker is still processing the order.Once processing is complete, the status changes to Open/New.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">PendingReplace</span></td>
            <td>69</td>
            <td>
            - <strong>PendingReplace Order</Strong><br>
            - PendingReplace means a request to modify an existing order has been sent, but the changes have not been applied yet.<br>
            - The exchange or broker is still processing the modification request.<br>
            - Once the modification is completed, the order status changes to Replaced.
             </td>
        </tr>
    </tbody>
</table>

## 7. Order Source
<table class="api-table">
    <thead>
        <tr>
            <th>Enum Name</th>
            <th>Numeric Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="enum-badge">TWS</span></td>
            <td>1</td>
            <td>
            - <Strong>Trader Workstation</Strong><br>
            - TWS refers to a trading terminal or trading platform used to place and manage orders.<br>
            - It provides access to market data and trading features.<br>
            - Traders can buy, sell, modify, and monitor orders through TWS.<br>
            - <Strong>Example:</Strong> A trader using a desktop trading application to place an order for 100 TCS shares is using a TWS (Trader Workstation).
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">TWSAPI</span></td>
            <td>2</td>
            <td>
            - <Strong>Trader Workstation API</Strong><br>
            - TWSAPI means orders are placed programmatically through an API instead of manually.<br>
            - It allows applications or trading algorithms to connect directly to the trading platform.<br>
            - Orders can be placed, modified, and monitored automatically using code.<br>
            - <Strong>Example:</Strong> A Python program that automatically buys 100 TCS shares through the broker's API is using TWSAPI.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">WEB</span></td>
            <td>21</td>
            <td>
            - <Strong>WEB means the order was placed through a web-based trading platform or website.</Strong><br>
            - Orders entered manually by the trader through the broker's web-based trading platform.<br>
            - It indicates that the source of the order is the broker's web application.<br>
            - Traders can place, modify, and monitor orders using a browser.<br>
            - <Strong>Example:</Strong> If you log in to your broker's website and buy 100 TCS shares, the order source will be WEB.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">WEBAPI</span></td>
            <td>22</td>
            <td>
            - <Strong>WEBAPI means the order was placed through a web-based API, not manually through the website.</Strong><br>
            - It allows applications or programs to place and manage orders automatically.<br>
            - It allows applications or programs to place and manage orders automatically.<br>
            - <Strong>Example:</Strong> A Python script using a broker's REST API to buy 100 TCS shares is using WEBAPI.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">MOBILEANDROID</span></td>
            <td>41</td>
            <td>
            - <Strong>MOBILEANDROID means the order was placed using the broker's Android mobile app.</Strong><br>
            - It indicates that the source of the order is an Android device.<br>
            - Traders can place, modify, and track orders through the mobile app.<br>
            - <Strong>Example:</Strong> If you use your Android phone to buy 100 TCS shares through the broker's app, the order source will be MOBILEANDROID.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">MOBILEIOS</span></td>
            <td>81</td>
            <td>
            - <Strong>MOBILEIOS means the order was placed using the broker's iPhone or iPad app.</Strong><br>
            - It indicates that the source of the order is an iOS device.<br>
            - Traders can place, modify, and track orders through the mobile app.<br>
            - <Strong>Example:</Strong> If you use your iPhone to buy 100 TCS shares through the broker's app, the order source will be MOBILEIOS.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">EnterpriseWeb</span></td>
            <td>154</td>
            <td>
            - <Strong>EnterpriseWeb means the order was placed through an enterprise or institutional web platform.</Strong><br>
            - It is typically used by organizations, brokers, or large clients rather than individual retail traders.<br>
            - Orders can be placed and managed through a specialized web-based interface.<br>
            - <Strong>Example:</Strong> If a mutual fund or a corporate client places an order through the broker's enterprise web portal, the order source will be EnterpriseWeb.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">EnterpriseMobile</span></td>
            <td>155</td>
            <td>
            - <Strong>EnterpriseMobile means the order was placed through an enterprise or institutional mobile application.</Strong><br>
            - It is mainly used by organizations, brokers, or large clients, not regular retail traders.<br>
            - Orders can be placed and managed through a specialized mobile platform.<br>
            - <Strong>Example:</Strong> If a mutual fund manager places an order using the broker's enterprise mobile app, the order source will be EnterpriseMobile.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">EnterpriseTWS</span></td>
            <td>156</td>
            <td>
            - <Strong>EnterpriseTWS means the order was placed through an enterprise or institutional trading workstation (TWS).</Strong><br>
            - It is mainly used by organizations, brokers, or large clients rather than individual retail traders.<br>
            - Orders can be placed, modified, and monitored through a professional trading terminal.<br>
            - <Strong>Example:</Strong> If a mutual fund or a brokerage firm places an order using its enterprise trading workstation, the order source will be EnterpriseTWS.
            </td>
        </tr>
    </tbody>
</table>

## 8. Position Square Off Mode
<table class="api-table">
    <thead>
        <tr>
            <th>Enum Name</th>
            <th>Numeric Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="enum-badge">DayWise</span></td>
            <td>1</td>
            <td>
            - <Strong>DayWise means positions or statistics are calculated separately for each trading day.</Strong><br>
            - Only the trades done on the current day are considered.<br>
            - At the end of the day, the values are reset for the next trading day.<br>
            - <Strong>Example:</Strong> If you buy and sell 100 TCS shares today, the profit/loss will be shown only for today's trades under DayWise.**
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">NetWise</span></td>
            <td>2</td>
            <td>
            - <Strong>NetWise means all trades are combined together to show the overall (net) position.</Strong><br>
            - It considers both previous and current trades instead of only today's trades.<br>
            - It shows your total quantity, average price, and overall profit/loss.<br>
            - <Srtong>Example:</Strong> If you bought 100 TCS shares yesterday and 50 more today, NetWise will show a total position of 150 shares.**
            </td>
        </tr>
    </tbody>
</table>

## 9. Position Square Off Quantity Type

<table class="api-table">
    <thead>
        <tr>
            <th>Enum Name</th>
            <th>Numeric Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="enum-badge">Percentage</span></td>
            <td>0</td>
            <td>
            - <Strong>Percentage means values are shown in percentage (%) instead of actual numbers.</Strong><br>
            - It helps compare profit, loss, growth, or performance easily.<br>
            - The result is displayed as a percentage of the total value.<br>
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">ExactQty</span></td>
            <td>1</td>
            <td>
            - <Strong>ExactQty means the exact quantity requested must be executed.</Strong>
            - The order will not be partially filled.<br>
            - If the full quantity is not available, the order may remain pending or fail based on the order rules.
            </td>
        </tr>
    </tbody>
</table>

## 10. MarketType

<table class="api-table">
    <thead>
        <tr>
            <th>Enum Name</th>
            <th>Numeric Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="enum-badge">Normal</span></td>
            <td>1</td>
            <td>
            - <Strong>Normal means regular trading.</Strong><br>
            - It is the standard order type used for normal buy and sell transactions.<br>
            - No special conditions or restrictions are applied to the order.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">Oddlot</span></td>
            <td>2</td>
            <td>
            - <Strong>It means the order is an odd lot type</Strong><br>
            - It is used when quantity is less than the standard trading lot size<br>
            - These are small or non-standard share quantities (not full lots)<br>
            - It is treated separately from normal lot trading in the system.Useful for small quantity or partial share trading orders<br>
            - <Strong>Example:</Strong><br>
                • Suppose the normal trading lot size is 100 shares<br>
                • A trader places an order for 25 shares of Reliance Industries<br>
                • Since 25 is less than the standard lot size (100), it is treated as an Odd Lot order<br>
                • In the system/API, this order will be marked as: Oddlot = 2
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">RetailDebt</span></td>
            <td>3</td>
            <td>
            - <Strong>represents a retail debt order type</Strong><br>
            - It is used for buying/selling debt instruments like bonds or government securities<br>
            - These trades are done by retail (individual) investors, not big institutions<br>
            - It usually involves small investment amounts
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">Auction</span></td>
            <td>4</td>
            <td>
            - <Strong>represents orders placed in an auction market</Strong><br>
            - It is used when securities are traded through a bidding process instead of normal trading<br>
            - Buyers and sellers submit bids, and the best price gets matched<br>
            - It is often used in special cases like exchange auctions or settlement auctions
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">CallAuction1</span></td>
            <td>5</td>
            <td>
            - <Strong>represents a specific call auction order type (Phase 1)</Strong><br>
            - Used to find a single fair market price by matching many buy and sell orders at once.<br>
            - Orders are first collected, then the system calculates one price, and finally trades are executed together in one batch.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">CallAuction2</span></td>
            <td>6</td>
            <td>
            - <Sreong>means a second type of call auction session where orders are not executed instantly.</Srong><br>
            - Orders are first collected and then a single fair price is discovered by the system.<br>
            - After price discovery, all matching buy and sell orders are executed together in one batch.<br>
            - it is a batch trading mode where trades happen together at one final auction price.
            </td>
        </tr>
    </tbody>
</table>
<!-- ================== 11. OrderLegStatus ================== -->

## 11. OrderLegStatus
<table class="api-table">
  <thead>
    <tr>
      <th>Enum Name</th>
      <th>Numeric Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">SingleOrderLeg</span></td>
      <td>1</td>
      <td>
      - <Strong>means the order contains only one trading instruction (one leg).</Strong><br>
      - It is a regular standalone order, not part of a multi-leg strategy.<br>
      - The order is executed independently without being linked to other orders.<br>
      - In simple words: one order = one action (buy or sell) on a single instrument.<br>
      <td>
    </tr>
    <tr>
      <td><span class="enum-badge">SpreadFirstLeg</span></td>
      <td>2</td>
      <td>
       -<Strong> means this order is the first leg of a spread strategy.</Strong><br>
       - A spread strategy consists of two or more linked orders executed together.<br>
       - The first leg is the initial buy or sell order in the spread.<br>
       - <Strong>Example:</Strong> Buy NIFTY July Futures (first leg) and Sell NIFTY August Futures (second leg).
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">SpreadSecondLeg</span></td>
      <td>3</td>
      <td>
      - <Strong>means this order is the second leg of a spread strategy.</Strong><br>
      - It is linked to the first leg and forms part of a multi-leg trade.<br>
      - Both legs work together to implement a spread trading strategy.<br>
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">MultilegFirstLeg</span></td>
      <td>4</td>
      <td>
      - <strong>means this order is the first leg of a multi-leg trading strategy.</Strong><br>
      - A multi-leg strategy contains two or more linked orders that work together.<br>
      - This is the starting order of the strategy, followed by additional legs.<br>
      - <Strong>Example:</Strong> Buy a Call Option as the first leg of an options strategy.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">MultilegSecondLeg</span></td>
      <td>5</td>
      <td>
      - <Strong>means this order is the second leg of a multi-leg trading strategy.</Strong><br>
      - It is linked to the first leg and helps complete the overall strategy.<br>
      - Multiple legs are used together to achieve a specific trading objective.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">MultilegThirdLeg</span></td>
      <td>6</td>
      <td>
      - <Strong>means this order is the third leg of a multi-leg trading strategy.</Strong><br>
      - It is linked with the first and second legs as part of the same strategy.<br>
      - Multi-leg strategies use several connected orders to achieve a trading goal.
      </td>
    </tr>
  </tbody>
</table>
<!-- ================== 12. Bo_Leg_Details ================== -->

## 12. Bo_Leg_Details
<table class="api-table">
  <thead>
    <tr>
      <th>Enum Name</th>
      <th>Numeric Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">EntryLeg</span></td>
      <td>1</td>
      <td>
      - <Strong>indicates that this order is the entry (starting) leg of a trading strategy.</Strong><br>
      - It is the first order placed to open or initiate a position before any related exit or adjustment orders.
    </tr>
    <tr>
      <td><span class="enum-badge">ProfitTargetExitLeg</span></td>
      <td>2</td>
      <td>
      - <Strong>indicates that this order is used to exit a position when the desired profit target is reached.</Strong><br>
      - It helps automatically close the trade and lock in profits once the specified target price is achieved.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">StoplossExitLeg</span></td>
      <td>3</td>
      <td>
      - <Strong>indicates that this order is used to exit a position when the price reaches a predefined loss limit.</Strong><br>
      - It helps reduce potential losses by automatically closing the trade when the stop-loss price is triggered.
\      </td>
    </tr>
  </tbody>
</table>
<!-- ================== 13. DayOrNet ================== -->

## 13. DayOrNet
<table class="api-table">
  <thead>
    <tr>
      <th>Enum Name</th>
      <th>Numeric Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">DAY</span></td>
      <td>1</td>
      <td>
      - <Strong>means the order remains active only for the current trading day.</Strong><br>
      - If the order is not executed by the end of the trading session, it is automatically cancelled.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">NET</span></td>
      <td>2</td>
      <td>
      - <Strong>means the position is viewed and managed on a net basis, where all buy and sell trades are combined into a single net position.</Strong><br>
      - Includes delivery trades (CNC) or carry-forward derivative positions (NRML).<br>
      - For example, if you buy 100 shares and sell 40 shares, your net position becomes 60 shares long.
      </td>
    </tr>
  </tbody>
</table>

## 14. InstrumentType

<table class="api-table">
  <thead>
    <tr>
      <th>Enum Name</th>
      <th>Numeric Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">Futures</span></td>
      <td>1</td>
      <td>
      - <Strong>Futures are contracts to buy or sell an asset at a predetermined price on a future date.</Strong><br>
      - They are commonly used for hedging risk or speculating on price movements.<br>
      - Standardized derivative contracts to buy or sell an asset (stock, index, commodity, or currency) at a predetermined price on a future date.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">Options</span></td>
      <td>2</td>
      <td>
      - <Strong>Options are contracts that give the buyer the right, but not the obligation, to buy or sell an asset at a specified price before expiry.</Strong><br>
      - They are used for hedging and advanced trading strategies.<br>
      - Derivative contracts that give the buyer the right, but not the obligation, to buy (Call) or sell (Put) the underlying asset at a fixed price within a specified time.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">Spread</span></td>
      <td>4</td>
      <td>
      - <Strong>Spread is a trading strategy involving two or more related positions taken together.</Strong><br>
      - It aims to profit from the price difference between the instruments.<br>
      - A strategy involving simultaneous buying and selling of related instruments.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">Equity</span></td>
      <td>8</td>
      <td>
      - <Strong>Equity represents ownership shares in a company.</Strong><br>
      - Investors buy and sell equities to participate in the company's growth and returns.<br>
      - Shares of listed companies traded in the cash market segment.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">Spot</span></td>
      <td>16</td>
      <td>
      -<Strong>Spot refers to the immediate purchase or sale of a financial instrument at the current market price.</Strong><br>
      - Settlement usually occurs within the standard exchange settlement cycle.<br>
      - Trades for immediate delivery and settlement at the current market price, typically used in currencies and commodities.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">PreferenceShares</span></td>
      <td>32</td>
      <td>
      - <Strong>Preference Shares are shares that provide priority in dividend payments over common equity shares.</Strong><br>
      - They generally have fixed dividends but limited voting rights.<br>
      - A class of shares that provides fixed dividends and has priority over equity shares in dividend distribution and liquidation, but usually with limited voting rights.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">Debentures</span></td>
      <td>64</td>
      <td>
      - <Strong>Debentures are debt instruments issued by companies to raise funds from investors.</Strong><br>
      - They pay fixed interest and are repaid on a specified maturity date.<br>
      - Long-term debt instruments issued by companies or governments to raise funds. Typically carry fixed interest payments.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">Warrants</span></td>
      <td>128</td>
      <td>
      - <Strong>Warrants are financial instruments that give the holder the right to buy a company's shares at a fixed price before a certain date.</Strong><br>
      - They are often issued along with bonds or other securities.<br>
      - Financial instruments that give the holder the right to buy equity shares at a specific price before a set expiry date.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">Miscellaneous</span></td>
      <td>256</td>
      <td>
      - <Strong>Miscellaneous includes financial instruments that do not fall under standard categories.</Strong><br>
      - It serves as a generic classification for special or uncommon instruments.<br>
      - Category for instruments that do not fall into standard classifications (used for special or rare products).
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">MutualFund</span></td>
      <td>512</td>
      <td>
      - <Strong>Mutual Fund is an investment vehicle that pools money from multiple investors and invests in a diversified portfolio.</Strong><br>
      - It is managed by professional fund managers on behalf of investors.<br>
      - Units of pooled investment schemes managed by Asset Management Companies (AMCs).
      </td>
    </tr>
  </tbody>
</table>

## 15. TradingSession
<table class="api-table">
  <thead>
    <tr>
      <th>Enum Name</th>
      <th>Numeric Code</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="enum-badge">PreOpenStart</span></td>
      <td>0</td>
      <td>
      - <Strong>Indicates the start of the Pre-Open Market session.</Strong><br>
      - During this phase, traders can place, modify, or cancel orders.<br>
      - No trades are executed yet.<br>
      - The beginning of the pre-open session where orders can be placed but are not matched immediately.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">PreOpenEnd</span></td>
      <td>1</td>
      <td>
      - <Strong>Indicates the end of the Pre-Open Market session.</Strong><br>
      - The system finalizes price discovery based on collected orders.<br>
      - Trading is about to move to the normal market session.<br>
      - The end of the pre-open session when accumulated orders are matched and the opening price is determined.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">NormalStart</span></td>
      <td>2</td>
      <td>
      - <Strong>Indicates the start of the regular trading session. </Strong><br>
      - Orders are matched and executed continuously.<br>
      - Normal buying and selling begins.<br>
      - The start of the regular trading session where continuous matching of buy and sell orders happens.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">NormalEnd</span></td>
      <td>4</td>
      <td>
      - <Strong> Indicates the end of the regular trading session.</Strong><br>
      - No new trades are executed after market close.<br>
      -Remaining unexecuted DAY orders are cancelled.<br>
      - The close of the regular trading session; after this point, no further trades are executed in the normal market.
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">PreClosingStart</span></td>
      <td>8</td>
      <td>
      - <Strong>Indicates the start of the Pre-Closing session. </Strong><br>
      - Used to determine the closing price of securities.<br>
      - Orders may be collected for closing price calculation.<br>
      - The start of the pre-closing session, where the system collects data to calculate the closing price (closing auction).
      </td>
    </tr>
    <tr>
      <td><span class="enum-badge">PreClosingEnd</span></td>
      <td>16</td>
      <td>
      - <Strong>Indicates the end of the Pre-Closing session. </Strong><br>
      - The final closing price is determined.<br>
      - Market moves toward complete closure.<br>
      - The end of the pre-closing session when the official closing price is determined and published.
      </td>
    </tr>
  </tbody>
</table>

## 16. ValuationType

<table class="api-table">
    <thead>
        <tr>
            <th>Enum Name</th>
            <th>Numeric Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="enum-badge">NONE</span></td>
            <td>0</td>
            <td>
            - <Strong>No valuation method is applied.</Strong><br>
            - The position or instrument is not valued using a specific calculation.<br>
            - Used when valuation is not required.<br>
            - Default flag when no special settlement type is applied. The order follows the normal market settlement rules.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">CL</span></td>
            <td>1</td>
            <td>
            - <Strong>Valuation is based on the Closing Price.</Strong><br>
            - The last closing market price is used for calculation.<br>
            - Commonly used for end-of-day valuations.<br>
            - Orders specifically placed to be executed at the market's closing price during the closing session.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">LT</span></td>
            <td>2</td>
            <td>
            - <Strong>Commonly used for end-of-day valuations.</Strong><br>
            - Commonly used for end-of-day valuations.<br>
            - Reflects the current market value more closely.<br>
            - Segment used for block deals, bulk trades, or special limited trading windows defined by the exchange.
            </td>
        </tr>
    </tbody>
</table>

## 17. HoldingType
<table class="api-table">
    <thead>
        <tr>
            <th>Enum Name</th>
            <th>Numeric Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="enum-badge">T1_Holdings</span></td>
            <td>1</td>
            <td>
            - <Strong>Shares purchased today but not yet settled.</Strong><br>
            - These shares are waiting to be credited to the Demat account.<br>
            - Usually become regular holdings after settlement.<br>
            - Securities bought but not yet fully settled (i.e., on T+1 day).
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">Holdings</span></td>
            <td>3</td>
            <td>
            - <Strong>Shares that are fully settled and available in the Demat account.</Strong><br>
            - Can be sold or held as a long-term investment.<br>
            - Represents regular stock holdings.<br>
            - Fully settled securities that are credited to the client's Demat account.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">MTFHoldings</span></td>
            <td>3</td>
            <td>
            - <Strong>Shares purchased through the Margin Trading Facility (MTF).</Strong><br>
            - The broker provides funding for part of the purchase value.<br>
            - Investors can take larger positions using margin.<br>
            Securities purchased under Margin Trading Facility where part of the funds are borrowed from the broker.
            </td>
        </tr>
    </tbody>
</table>

## 18. StatisticsLevel

<table class="api-table">
    <thead>
        <tr>
            <th>Enum Name</th>
            <th>Numeric Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="enum-badge">ParentLevel</span></td>
            <td>0</td>
            <td>
            - <Strong>Represents the main or top-level statistics category.</Strong><br>
            - Used to group related statistical data together.<br>
            - Acts as the parent for one or more child levels.<br>
            - Represents the top-level entity in a hierarchy.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">ChildLevel</span></td>
            <td>1</td>
            <td>
            - <Strong>Represents a sub-category under a parent level.</Strong><br>
            - Contains detailed statistics related to the parent category.<br>
            - Used for more granular data analysis.<br>
            - Represents a sub-entity under a parent.
            </td>
        </tr>
    </tbody>
</table>

## 19. Socket Event

<table class="api-table">
    <thead>
        <tr>
            <th>Enum Name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="enum-badge">joined</span></td>
            <td>
            - <Strong>Indicates that the socket connection has been established successfully.</Strong><br>
            - The client is now connected and ready to receive data.<br>
            - Sent when a user joins the socket session.<br>
            - Sent when a client successfully connects and joins the WebSocket channel. Confirms that the real-time stream is active.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">error</span></td>
            <td>
            - <Strong>Indicates that an error occurred during the socket operation.</Strong><br>
            - The requested action could not be completed successfully.<br>
            - Usually includes error details or a message.<br>
            - Indicates a failure or issue (e.g., invalid request, authentication failure, or system error). Requires client-side handling.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">warning</span></td>
            <td>
            - <Strong>Indicates a non-critical issue or alert.</Strong><br>
            - The connection is still active, but attention may be required.<br>
            - Used to notify about potential problems.<br>
            - Non-critical issue or advisory message (e.g., rate-limit approaching, deprecated API usage).
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">success</span></td>
            <td>
            - <Strong>Indicates that an operation completed successfully.</Strong><br>
            - Confirms that the requested action was processed.<br>
            - Usually returned after a successful request.<br>
            - Confirms that a client request was processed successfully (e.g., order placement acknowledged).
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">order</span></td>
            <td>
            - <Strong>Indicates an order-related event.</Strong><br>
            - Used to send updates about order placement or status changes.<br>
            - Helps track order activity in real time.<br>
            - Event carrying real-time updates about an order lifecycle — placed, modified, filled, cancelled, or rejected.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">trade</span></td>
            <td>
            - <Strong>Indicates a trade execution event.</Strong><br>
            - Sent when an order is matched and executed.<br>
            - Provides trade details and execution information.<br>
            - Sent when an order results in an actual trade execution (full or partial). Contains trade ID, price, and quantity details.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">logout</span></td>
            <td>
            - <Strong>Indicates that the user has been disconnected or logged out.</Strong><br>
            - The socket session is closed.<br>
            - No further updates will be received until reconnection.<br>
            - Notification that the session or WebSocket connection has been terminated — either manually or due to token expiry.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">position</span></td>
            <td>
            - <Strong>Indicates a position-related update.</Strong><br>
            - Sent when there is a change in the user's holdings or positions.<br>
            - Helps track open positions in real time.<br>
            - Real-time updates about portfolio positions, including intraday (DayWise) or carry-forward (NetWise) quantities.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">tradeConversion</span></td>
            <td>
            - <Strong>Indicates a trade conversion event.</Strong><br>
            - Sent when a trade or position is converted from one product type to another.<br>
            - <Strong>Example:</Strong> Converting MIS to CNC.<br>
            - Event triggered when an order/trade is converted from one product type to another (e.g., Intraday MIS → Delivery CNC).
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">gttOrder</span></td>
            <td>
            - <Strong>Indicates a request or response for order details.</Strong><br>
            - Used to fetch information about existing orders.<br>
            - Returns order-related data.<br>
            - Event update for GTT Orders (orders that activate only when a trigger price is met).
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">gttOrderRejection</span></td>
            <td>
            - <Strong>Indicates an order rejection event or request.</Strong><br>
            - Sent when an order is rejected by the system or exchange.<br>
            - Provides the reason for rejection.<br>
            - Notification when a GTT Order fails to activate due to invalid conditions, margin shortfall, or exchange rejection.
            </td>
        </tr>
    </tbody>
</table>

## 20. Order Session Type

<table class="api-table">
    <thead>
        <tr>
            <th>Enum Name</th>
            <th>Numeric Code</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><span class="enum-badge">AMO</span></td>
            <td>1</td>
            <td>
            - <Strong>AMO (After Market Order) allows orders to be placed after market hours.</Strong><br>
            - The order is sent to the exchange when the market opens.<br>
            - Useful when you cannot place orders during trading hours.<br>
            - Standard market order placed during regular market hours.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">OT</span></td>
            <td>2</td>
            <td>
            - <Strong>OT (Order Through Trading Hours) indicates a regular order placed during market hours.</Strong><br>
            - The order is sent directly to the exchange for execution.<br>
            - Used for normal day-to-day trading.<br>
            - <em>After Market Order</em> — Orders placed after market hours to be processed when the market opens.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">INSTI</span></td>
            <td>4</td>
            <td>
            - <Strong>INSTI indicates that the order is placed by an institutional investor.</Strong><br>
            - Typically used by banks, mutual funds, or large financial institutions.<br>
            - Such orders are usually larger in size than retail orders.<br>
            - <em>Institutional</em> — Orders placed through institutional trading sessions.
            </td>
        </tr>
        <tr>
            <td><span class="enum-badge">GTT</span></td>
            <td>5</td>
            <td>
            - <Strong>GTT (Good Till Triggered) is an order that remains active until a specified trigger price is reached.</Strong><br>
            - The order is automatically placed when the trigger condition is met.<br>
            - Useful for long-term buy or sell targets.<br>
            - Good Till Triggered — Order remains pending until the trigger condition is met.
            </td>
        </tr>
    </tbody>
</table>