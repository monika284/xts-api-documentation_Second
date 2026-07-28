/* ── Home icon in header ────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
    var searchLabel = document.querySelector('label[for="__search"]');
    if (searchLabel) {
        var homeBtn = document.createElement("a");
        homeBtn.href = "/";
        homeBtn.className = "md-header__button md-icon";
        homeBtn.setAttribute("aria-label", "Home");
        homeBtn.title = "Home";
        homeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
        searchLabel.parentNode.insertBefore(homeBtn, searchLabel);
    }
});

/* ── Helpers ─────────────────────────────────────────────── */
function isHomePage() {
    var p = window.location.pathname;
    return p === "/" || p === "/index.html" || p.endsWith("/.");
}

/* ── Left sidebar section icons ──────────────────────────── */
var SECTION_ICONS = {
    "Home": "si-home",
    "Getting Started": "si-start",
    "Interactive API": "si-code",
    "Market Data API": "si-chart",
    "Orders": "si-cart",
    "Portfolio": "si-folder",
    "WebSocket": "si-ws",
    "Reference": "si-ref"
};

function enhanceSidebar() {
    /* Target both section labels and top-level page links */
    var els = document.querySelectorAll(
        ".md-nav--primary .md-nav__item--section > label.md-nav__link," +
        ".md-nav--primary > .md-nav__list > .md-nav__item > a.md-nav__link"
    );
    els.forEach(function (el) {
        if (el.classList.contains("nav-si")) return; /* already done */
        var span = el.querySelector(".md-ellipsis");
        var text = (span ? span.textContent : el.textContent).trim();
        var cls  = SECTION_ICONS[text];
        if (cls) el.classList.add("nav-si", cls);
    });
}

/* ── Right-sidebar scroll spy ────────────────────────────── */
var _spyOff = null;

function initScrollSpy() {
    if (_spyOff) { _spyOff(); _spyOff = null; }
    if (isHomePage()) return;

    setTimeout(function () {
        var toc   = document.querySelector(".custom-toc");
        if (!toc) return;

        var links = Array.from(toc.querySelectorAll('a[href^="#"]'));
        if (!links.length) return;

        var pairs = links.map(function (link) {
            var id = link.getAttribute("href").slice(1);
            return { el: document.getElementById(id), link: link };
        }).filter(function (p) { return p.el; });

        if (!pairs.length) return;

        function activate() {
            var top  = window.scrollY + 130;
            var best = pairs[0];
            pairs.forEach(function (p) {
                if (p.el.getBoundingClientRect().top + window.scrollY <= top) best = p;
            });
            links.forEach(function (l) { l.classList.remove("toc-active"); });
            best.link.classList.add("toc-active");

            /* auto-scroll the TOC item into view if out of sight */
            var tocWrap = document.querySelector(".md-sidebar--secondary .md-sidebar__scrollwrap");
            if (tocWrap) {
                var linkTop  = best.link.offsetTop;
                var wrapH    = tocWrap.clientHeight;
                var wrapScrl = tocWrap.scrollTop;
                if (linkTop < wrapScrl + 20 || linkTop > wrapScrl + wrapH - 40) {
                    tocWrap.scrollTo({ top: linkTop - wrapH / 2, behavior: "smooth" });
                }
            }
        }

        window.addEventListener("scroll", activate, { passive: true });
        activate();
        _spyOff = function () { window.removeEventListener("scroll", activate); };
    }, 250);
}

/* ── Home-page right sidebar content ────────────────────── */
function injectHomeSidebar(sidebar) {
    sidebar.innerHTML =
        '<div class="custom-toc">' +
            '<h4>TABLE OF CONTENTS</h4>' +
            '<ul>' +
                '<li><a href="#api-categories">API Categories</a></li>' +
                '<li><a href="/GS/intro/">Getting Started</a></li>' +
                '<li><a href="/interactive/Authentication/">Authentication</a></li>' +
                '<li><a href="/interactive/overview/">Common Use Cases</a></li>' +
                '<li><a href="mailto:support@rmoneyindia.com">Support</a></li>' +
            '</ul>' +
        '</div>' +
        '<div class="hm-sb-topics">' +
            '<h4>POPULAR TOPICS</h4>' +
            '<ol>' +
                '<li><a href="/interactive/Authentication/">Authentication</a></li>' +
                '<li><a href="/orders/place_order/">Place Order</a></li>' +
                '<li><a href="/market/quotes/">Get Quotes</a></li>' +
                '<li><a href="/orders/overview/">Order Book</a></li>' +
                '<li><a href="/websocket/overview/">WebSocket Feeds</a></li>' +
            '</ol>' +
        '</div>' +
        '<div class="hm-sb-cta">' +
            '<h4>Ready to build?</h4>' +
            '<p>Get your API key and start building in minutes.</p>' +
            '<a href="https://xts.rmoneyindia.co.in:3000/dashboard#!/login" class="hm-sb-cta-btn">Get API Key &rarr;</a>' +
        '</div>' +
        '<div class="hm-sb-help">' +
            '<h4>NEED HELP?</h4>' +
            '<p>Cannot find what you are looking for? We are here to help.</p>' +
            '<a href="mailto:support@rmoneyindia.com" class="hm-sb-help-btn">Contact Support</a>' +
        '</div>';
}

/* ── Right-sidebar TOC injection ─────────────────────────── */
function injectToc() {
    var sidebar = document.querySelector(".md-sidebar--secondary .md-sidebar__scrollwrap");
    if (!sidebar) {
        var fixed = document.getElementById("custom-toc-fixed");
        if (!fixed) {
            fixed = document.createElement("div");
            fixed.id = "custom-toc-fixed";
            document.body.appendChild(fixed);
        }
        sidebar = fixed;
    }

    if (isHomePage()) { injectHomeSidebar(sidebar); return; }

    /* Decorative card-heading classes that should NOT appear in the TOC */
    var UI_CLS = /^(auth-comp-title|burl-concept-title|iov-mod-)/;

    var all = document.querySelectorAll("h1, h2, h3");
    var usedIds = {};
    var headings = Array.from(all).filter(function (h) {
        /* skip sidebar / nav / header */
        if (h.closest(".md-sidebar") || h.closest(".md-nav") || h.closest(".md-header")) return false;
        /* skip MkDocs admonition artifacts like <h2>!!! tip</h2> */
        var text = h.textContent.trim();
        if (!text || /^!!!/.test(text)) return false;
        /* skip decorative UI-component headings (class-based) */
        var cls = h.className || '';
        if (UI_CLS.test(cls)) return false;
        /* auto-assign an id to headings that are missing one */
        if (!h.id) {
            var base = 'toc-' + text.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50);
            var candidate = base;
            var n = 1;
            while (usedIds[candidate] || document.getElementById(candidate)) {
                candidate = base + '-' + (++n);
            }
            h.id = candidate;
        }
        usedIds[h.id] = true;
        return true;
    });

    if (!headings.length) return;

    var html = '<div class="custom-toc"><h4>TABLE OF CONTENTS</h4><ul>';
    headings.forEach(function (h) {
        /* Prefer the first direct text node (e.g. "Instruments By ID" before a POST/GET badge span).
           Fall back to last-span label, then full textContent. */
        var label = '';
        for (var n = 0; n < h.childNodes.length; n++) {
            if (h.childNodes[n].nodeType === 3 && h.childNodes[n].textContent.trim()) {
                label = h.childNodes[n].textContent.trim();
                break;
            }
        }
        if (!label) {
            var labelSpan = h.querySelector('span:last-child');
            label = labelSpan ? labelSpan.textContent.trim() : h.textContent.trim();
        }
        var liCls = "";
        var aStyle = "";
        var inlineStyle = h.getAttribute("style") || "";
        var isOrange = /color\s*:\s*#ff6b00/i.test(inlineStyle);
        if (h.tagName === "H3") {
            liCls = isOrange ? "toc-orange-h" : "toc-h3";
        } else if (h.tagName === "H2" || h.tagName === "H1") {
            liCls = isOrange ? "toc-orange-h" : "";
        }
        if (isOrange) {
            aStyle = ' style="border-left:3px solid #ff6b00;padding-left:10px;font-weight:700;color:#ff6b00;background:#fff0e5;border-radius:0 6px 6px 0;display:block;"';
        }
        html += '<li class="' + liCls + '">'
             +  '<a href="#' + h.id + '"' + aStyle + '>' + label + '</a></li>';
    });
    html += '</ul></div>';
    sidebar.innerHTML = html;

    initScrollSpy();
}

/* ── Boot ────────────────────────────────────────────────── */
/* ── Copy icon buttons ───────────────────────────────────── */
var COPY_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
var CHECK_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

function upgradeCopyButtons() {
    document.querySelectorAll('button').forEach(function(btn) {
        if (btn.dataset.copyUpgraded) return;
        var txt = btn.textContent.trim();
        var isCopy = /copy/i.test(txt) || btn.classList.contains('copy-btn');
        if (!isCopy) return;

        btn.dataset.copyUpgraded = '1';
        var origOnclick = btn.getAttribute('onclick');
        btn.removeAttribute('onclick');
        btn.innerHTML = COPY_ICON;
        btn.title = 'Copy';
        btn.classList.add('copy-icon-btn');

        btn.addEventListener('click', async function() {
            var self = this;
            if (!origOnclick) return;
            var origWrite = navigator.clipboard.writeText.bind(navigator.clipboard);
            navigator.clipboard.writeText = async function(text) {
                navigator.clipboard.writeText = origWrite;
                await origWrite(text);
                self.innerHTML = CHECK_ICON;
                self.title = 'Copied!';
                setTimeout(function() {
                    self.innerHTML = COPY_ICON;
                    self.title = 'Copy';
                }, 1500);
            };
            try { (new Function('b', origOnclick))(self); }
            catch(e) { navigator.clipboard.writeText = origWrite; }
        });
    });
}

/* ── Auto-upgrade code boxes (add Copy + Show Full) ─────── */
function upgradeCodeBoxes() {
    var CB_CLASSES = [
        'auth-code-block','burl-code-block','qt-code-block',
        'dep-code-block','inst-code-block','ohlc-code-block',
        'err-code-block','oov-code-block'
    ];

    var SF_BTN_CSS = 'background:#374151;color:#fff;border:none;border-radius:7px;padding:6px 18px;font-size:13px;font-weight:600;cursor:pointer';

    function makeShowFull(box) {
        var btn = document.createElement('button');
        btn.textContent = 'Show Full';
        btn.style.cssText = SF_BTN_CSS;
        btn.addEventListener('click', function() {
            if (box.style.maxHeight === 'none') {
                box.style.maxHeight = '220px';
                box.style.overflow  = 'auto';
                btn.textContent = 'Show Full';
            } else {
                box.style.maxHeight = 'none';
                box.style.overflow  = 'auto';
                btn.textContent = 'Show Less';
            }
        });
        return btn;
    }

    function brLines(box) {
        return (box.innerHTML.match(/<br\s*\/?>/gi) || []).length + 1;
    }

    function addButtons(box) {
        if (box.dataset.cbupgraded) return;
        box.dataset.cbupgraded = '1';

        var needsSF = brLines(box) > 5;

        if (needsSF) {
            box.style.maxHeight = '220px';
            box.style.overflow  = 'auto';
            box.style.transition = 'max-height .4s ease';
        }

        var btnRow = document.createElement('div');
        btnRow.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;margin-top:6px';

        var copyBtn = document.createElement('button');
        copyBtn.innerHTML = COPY_ICON;
        copyBtn.title = 'Copy';
        copyBtn.className = 'copy-icon-btn';
        copyBtn.dataset.copyUpgraded = '1';
        copyBtn.addEventListener('click', async function() {
            try {
                await navigator.clipboard.writeText(box.innerText || box.textContent);
                copyBtn.innerHTML = CHECK_ICON; copyBtn.title = 'Copied!';
                setTimeout(function() { copyBtn.innerHTML = COPY_ICON; copyBtn.title = 'Copy'; }, 1500);
            } catch(e) {}
        });
        btnRow.appendChild(copyBtn);

        if (needsSF) btnRow.appendChild(makeShowFull(box));

        box.parentNode.insertBefore(btnRow, box.nextSibling);
    }

    /* 1. CSS-class code boxes */
    CB_CLASSES.forEach(function(cls) {
        document.querySelectorAll('.' + cls).forEach(addButtons);
    });

    /* 2. ALL inline background:#1e1e1e boxes */
    document.querySelectorAll('[style*="background:#1e1e1e"]').forEach(function(box) {
        if (box.dataset.cbupgraded) return;
        if (box.querySelector('button, .json-actions')) return; /* internal buttons */
        if (box.classList.contains('json-box')) return;

        var needsSF = brLines(box) > 5;

        /* Check if there is already an external button row (next sibling with buttons) */
        var next = box.nextElementSibling;
        var hasExternalRow = next && next.querySelector && next.querySelector('button');

        if (hasExternalRow) {
            box.dataset.cbupgraded = '1';
            box.style.overflow = 'auto'; /* enable scroll on all boxes with external buttons */
            /* Already has Collapse/Expand/ShowFull → leave it alone */
            if (/Show Full|Show Less|Collapse|Expand/.test(next.textContent)) return;
            /* Has only Copy → inject Show Full into the row if content > 5 lines */
            if (needsSF) {
                box.style.maxHeight = '220px';
                box.style.overflow  = 'auto';
                box.style.transition = 'max-height .4s ease';
                next.appendChild(makeShowFull(box));
            }
            return;
        }

        /* No external row at all → add full button set */
        addButtons(box);
    });

    /* 3. Nested json-box pattern (outer #1e1e1e wrapper → inner .json-box with max-height) */
    document.querySelectorAll('[style*="background:#1e1e1e"]').forEach(function(outer) {
        var inner = outer.querySelector('.json-box');
        if (!inner) return;
        if (inner.dataset.cbupgraded) return;
        inner.dataset.cbupgraded = '1';
        inner.style.overflow = 'auto';
    });

    /* 4. Tabbed code boxes with internal Copy button — add Show Full externally, no extra Copy */
    document.querySelectorAll('[style*="background:#1e1e1e"]').forEach(function(box) {
        if (box.dataset.cbupgraded) return;
        if (box.classList.contains('json-box')) return;
        if (!box.querySelector('button')) return; /* only targets boxes with internal buttons */

        box.dataset.cbupgraded = '1';
        box.style.overflow = 'auto';

        var needsSF = brLines(box) > 5;
        if (!needsSF) return;

        box.style.maxHeight = '220px';
        box.style.transition = 'max-height .4s ease';

        var next = box.nextElementSibling;
        var hasExternalSF = next && next.querySelector && next.querySelector('button') &&
                            /Show Full|Show Less|Collapse|Expand/.test(next.textContent);
        if (hasExternalSF) return;

        var btnRow = document.createElement('div');
        btnRow.style.cssText = 'display:flex;justify-content:flex-end;gap:8px;margin-top:6px';
        btnRow.appendChild(makeShowFull(box));
        box.parentNode.insertBefore(btnRow, box.nextSibling);
    });

    /* Final sweep: fix any remaining overflow:hidden on ALL #1e1e1e boxes (incl. pre-marked) */
    document.querySelectorAll('[style*="background:#1e1e1e"]').forEach(function(box) {
        if (box.style.overflow === 'hidden') box.style.overflow = 'auto';
        var inner = box.querySelector('.json-box');
        if (inner && inner.style.overflow === 'hidden') inner.style.overflow = 'auto';
    });
}

function hideHomeSidebars() {
    var path = window.location.pathname;
    var isHome = path === '/' || path === '/index.html';
    if (isHome) {
        document.body.classList.add('hm-no-sidebar');
    } else {
        document.body.classList.remove('hm-no-sidebar');
    }
}

function styleSimpleWordsBoxes() {
    document.querySelectorAll('strong, b').forEach(function(el) {
        var txt = el.textContent.trim();
        if (txt === 'In Simple Words' || txt === 'In Simple Words:') {
            var box = el.closest('div');
            if (box && !box.classList.contains('isw-box')) {
                box.classList.add('isw-box');
            }
        }
    });
}

function boot() {
    hideHomeSidebars();
    setTimeout(function () {
        hideHomeSidebars();
        injectToc();
        enhanceSidebar();
        upgradeCodeBoxes();   /* must run before upgradeCopyButtons */
        upgradeCopyButtons();
        styleSimpleWordsBoxes();
    }, 150);
}

if (typeof document$ !== "undefined") {
    document$.subscribe(boot);
} else {
    document.addEventListener("DOMContentLoaded", boot);
}

/* ── Field Data Tooltip (👁 links) ───────────────────────── */
var MARKET_FIELD_DATA = {
  "ExchangeInstrumentID":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Unique instrument identifier assigned by the exchange."},
  "ExchangeSegment":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Exchange segment this instrument belongs to."},
  "InstrumentType":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Type of the instrument (Equity, Futures, Options, etc.)."},
  "Name":{"type":"String","cls":"dt-string","size":"50","desc":"Name of the instrument."},
  "Description":{"type":"String","cls":"dt-string","size":"MAX","desc":"Full description of the instrument."},
  "ISIN":{"type":"String","cls":"dt-string","size":"20","desc":"International Securities Identification Number."},
  "ExchangeSeries":{"type":"String","cls":"dt-string","size":"10","desc":"Exchange series identifier for the instrument."},
  "ContractExpiration":{"type":"Long","cls":"dt-long","size":"20","desc":"Expiration date/time of the contract."},
  "StrikePrice":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Strike price for options contracts."},
  "UnderlyingInstrumentID":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Exchange instrument ID of the underlying asset."},
  "High":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Highest traded price during the session."},
  "Low":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Lowest traded price during the session."},
  "Close":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Closing price for the session."},
  "Open":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Opening price of the instrument for the session."},
  "PreviousClose":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Closing price from the previous session."},
  "LastTradedPrice":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Most recent traded price of the instrument."},
  "LastTradedQuantity":{"type":"Long","cls":"dt-long","size":"15","desc":"Quantity traded in the most recent trade."},
  "AverageTradedPrice":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Volume-weighted average traded price for the session."},
  "Volume":{"type":"Long","cls":"dt-long","size":"15","desc":"Total traded volume in the session."},
  "TotalValueTraded":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Total monetary value of all trades in the session."},
  "TotalSellQuantity":{"type":"Long","cls":"dt-long","size":"15","desc":"Total quantity available on the sell side of the order book."},
  "TotalBuyQuantity":{"type":"Long","cls":"dt-long","size":"15","desc":"Total quantity available on the buy side of the order book."},
  "TotalSellQuantity":{"type":"Long","cls":"dt-long","size":"15","desc":"The total quantity of sell orders currently available in the market."},
  "TotalTradedQuantity":{"type":"Long","cls":"dt-long","size":"15","desc":"The cumulative quantity of the instrument traded during the trading session."},
  "Symbol":{"type":"String","cls":"dt-string","size":"50","desc":"Exchange defined trading code used to identify an instrument."},
  "ExpiryDate":{"type":"String","cls":"dt-string","size":"30","desc":"The expiry date of the derivative contract in DDMMMYYYY format (e.g., 30Jan2025)."},
  "mdp":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Market data point — the xtsMessageCode for the subscribed instrument."},
  "AverageTradedPrice":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"The volume weighted average price (VWAP) of all trades executed during the trading session."},
  "OptionType":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Option type identifier (CE, PE, etc.)."},
  "Bid":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Best bid price in the order book."},
  "Ask":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Best ask price in the order book."},
  "IssuedCapital":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Total capital issued by the company."},
  "TickSize":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Minimum price movement allowed for the instrument."},
  "LastUpdateTime":{"type":"String","cls":"dt-string","size":"50","desc":"Timestamp of the last data update."},
  "BoardLotQuantity":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Minimum number of units that can be traded in one lot."},
  "FaceValue":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Face value of the security per unit/share."},
  "Spread":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Difference between best buy and sell price."},
  "CallAuction1Flag":{"type":"Boolean","cls":"dt-boolean","size":"5","desc":"Indicates if a first call auction is applicable."},
  "GSMIndicator":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Indicator for market segments or trading type."},
  "MinimumQty":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Minimum tradable quantity for the instrument."},
  "QuantityMultiplier":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Multiplier applied to quantity for derivatives/contracts."},
  "PriceNumerator":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Numerator for representing price fractions."},
  "PriceDenominator":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Denominator for representing price fractions."},
  "SymbolType":{"type":"Integer","cls":"dt-integer","size":"20","desc":"Symbol classification type (e.g., Common, Preferred)."},
  "CfiCode":{"type":"String","cls":"dt-string","size":"50","desc":"Classification of Financial Instruments code."},
  "Status":{"type":"String","cls":"dt-string","size":"50","desc":"Current status of the instrument (Active, Inactive)."},
  "TicksPerPoint":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Number of ticks per point for price movement."},
  "IsImpliedMarket":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Indicates if the market is derived from implied instruments."},
  "IsTradeable":{"type":"Boolean","cls":"dt-boolean","size":"5","desc":"Indicates if the instrument is currently tradeable."},
  "MaxTradeVolume":{"type":"Long","cls":"dt-long","size":"15","desc":"Maximum allowed trade volume per order."},
  "DecimalDisplace":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Number of decimal places used for pricing."},
  "Eligible":{"type":"Boolean","cls":"dt-boolean","size":"5","desc":"Indicates if the instrument is eligible for trading."},
  "TradingStatus":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Current trading status (Active, Suspended, Halted)."},
  "DisplayNameWithExchange":{"type":"String","cls":"dt-string","size":"50","desc":"Display name including exchange information."},
  "FiftyTwoWeekHigh":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Highest price of the instrument in the past 52 weeks."},
  "FiftyTwoWeekLow":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Lowest price of the instrument in the past 52 weeks."},
  "TotTrdQty":{"type":"Long","cls":"dt-long","size":"15","desc":"Total traded quantity in the session."},
  "TotTrdVal":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Total traded value in the session."},
  "TimeStamp":{"type":"String","cls":"dt-string","size":"50","desc":"Timestamp of the data snapshot."},
  "TotalTrades":{"type":"Long","cls":"dt-long","size":"15","desc":"Total number of trades executed in the session."},
  "OpenInterest":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Open interest for derivatives contracts."},
  "SettlementPrice":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Price used for settlement of derivatives contracts."},
  "AdditionalPreExpiryMarginPerc":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Additional margin percentage applicable before expiry."},
  "AdditionalMarginPercLong":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Additional margin percentage for long positions."},
  "AdditionalMarginPercShort":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Additional margin percentage for short positions."},
  "DeliveryMarginPerc":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Margin percentage required for delivery-based trades."},
  "SpecialMarginPercBuy":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Special margin percentage for buying positions."},
  "SpecialMarginPercSell":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Special margin percentage for selling positions."},
  "TenderMargin":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Margin required for participating in tender offers."},
  "ELMLongMargin":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Extreme loss margin for long positions."},
  "ELMShortMargin":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Extreme loss margin for short positions."},
  "InitialMarginPerc":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Initial margin percentage for derivatives contracts."},
  "ExposureMarginPerc":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Margin based on exposure limit."},
  "CallAuctionIndicator":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Indicates if the instrument is part of a call auction."},
  "CurrentEligibleMarketType":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Market types the instrument is eligible for currently."},
  "InstrumentLazyLoader":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Indicates if instrument data is loaded lazily for performance."},
  "AGM":{"type":"Boolean","cls":"dt-boolean","size":"5","desc":"Indicates if an Annual General Meeting is scheduled for the company."},
  "AllOrNone":{"type":"Boolean","cls":"dt-boolean","size":"5","desc":"Indicates if the order must be executed fully or not at all."},
  "Bonus":{"type":"Boolean","cls":"dt-boolean","size":"5","desc":"Bonus shares declared per existing share."},
  "Dividend":{"type":"Boolean","cls":"dt-boolean","size":"5","desc":"Dividend amount declared per share."},
  "EGM":{"type":"Boolean","cls":"dt-boolean","size":"5","desc":"Indicates if an Extraordinary General Meeting is scheduled."},
  "AuctionNumber":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Unique identifier for a specific auction."},
  "AuctionStatus":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Current status of an auction."},
  "InitiatorType":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Type of entity initiating the auction or corporate action."},
  "SettlementPeriod":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Number of days for settlement of trades."},
  "TotalBuyQty":{"type":"Long","cls":"dt-long","size":"15","desc":"Total buy quantity in the auction or order book."},
  "TotalSellQty":{"type":"Long","cls":"dt-long","size":"15","desc":"Total sell quantity in the auction or order book."},
  "AuctionQty":{"type":"Long","cls":"dt-long","size":"15","desc":"Quantity allocated in the auction."},
  "AuctionPrice":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Price at which auction quantity is settled."},
  "BestBuyPrice":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Highest buy price currently in the stock."},
  "BestSellPrice":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Lowest sell price currently in the stock."},
  "ELMargin":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Extreme Loss Margin required for the instrument."},
  "Interest":{"type":"Boolean","cls":"dt-boolean","size":"5","desc":"Interest rate applicable to a debt instrument or derivative."},
  "MinimumFill":{"type":"Boolean","cls":"dt-boolean","size":"5","desc":"Minimum quantity that can be executed in a single order."},
  "Rights":{"type":"Boolean","cls":"dt-boolean","size":"5","desc":"Number of rights shares issued per existing share."},
  "InstrumentID":{"type":"Long","cls":"dt-long","size":"15","desc":"Unique identifier for the instrument in the system."},
  "DisplayName":{"type":"String","cls":"dt-string","size":"50","desc":"Name of the instrument as displayed in UI."},
  "LotSize":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Number of units per lot."},
  "Series":{"type":"String","cls":"dt-string","size":"10","desc":"The exchange-defined series under which the instrument is listed."},
  "FreezeQty":{"type":"Long","cls":"dt-long","size":"15","desc":"Quantity frozen/unavailable for trading."},
  "NameWithSeries":{"type":"String","cls":"dt-string","size":"50","desc":"Name combined with series for display purposes."},
  "CreditRating":{"type":"String","cls":"dt-string","size":"50","desc":"Credit rating of the instrument or issuer."},
  "HighString":{"type":"String","cls":"dt-string","size":"20","desc":"Upper price band represented as a formatted string."},
  "LowString":{"type":"String","cls":"dt-string","size":"20","desc":"Lower price band represented as a formatted string."},
  "HighExecBandString":{"type":"String","cls":"dt-string","size":"20","desc":"Upper execution price band displayed as a formatted string."},
  "LowExecBandString":{"type":"String","cls":"dt-string","size":"20","desc":"Lower execution price band displayed as a formatted string."},
  "UnderlyingInstrumentId":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Unique instrument identifier of the underlying asset for a derivative contract."},
  "UnderlyingIndexName":{"type":"String","cls":"dt-string","size":"50","desc":"Name of the underlying index on which the derivative contract is based."},
  "ContractExpirationString":{"type":"String","cls":"dt-string","size":"30","desc":"Contract expiration date represented as a formatted string."},
  "RemainingExpiryDays":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Calendar days remaining until the contract expires."},
  "xtsMessageCode":{"type":"Integer","cls":"dt-integer","size":"10","desc":"System generated message code for market data events."},
  "MessageCode":{"type":"Integer","cls":"dt-integer","size":"10","desc":"System generated message code."},
  "MessageVersion":{"type":"Integer","cls":"dt-integer","size":"10","desc":"System generated message version."},
  "ApplicationType":{"type":"Integer","cls":"dt-integer","size":"10","desc":"System generated Application Type."},
  "TokenID":{"type":"Integer","cls":"dt-integer","size":"10","desc":"System generated Token ID."},
  "ExchangeTimeStamp":{"type":"Long","cls":"dt-long","size":"15","desc":"Timestamp representing the time at which an event occurred, as recorded by the exchange."},
  "Size":{"type":"Long","cls":"dt-long","size":"15","desc":"Total quantity available at the Ask or Bid price."},
  "Price":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"Highest price at which buyers are willing to purchase the instrument."},
  "TotalOrders":{"type":"Integer","cls":"dt-integer","size":"10","desc":"Total number of buy orders placed at the bid or ask price."},
  "BuyBackMarketMaker":{"type":"Boolean","cls":"dt-boolean","size":"5","desc":"Indicates whether the bid is placed by a buy back market maker."},
  "LastTradedTime":{"type":"Long","cls":"dt-long","size":"15","desc":"The timestamp at which the most recent trade occurred (exchange time)."},
  "PercentChange":{"type":"Double","cls":"dt-double","size":"(15,4)","desc":"The percentage change in price compared to the previous close."},
  "BuyBackTotalBuy":{"type":"Long","cls":"dt-long","size":"15","desc":"Buy back buy quantity placed under buy back activity (exchange specific)."},
  "BuyBackTotalSell":{"type":"Long","cls":"dt-long","size":"15","desc":"The total sell quantity placed under buy back activity (exchange specific)."},
  "BookType":{"type":"Integer","cls":"dt-integer","size":"10","desc":"BookType classification of the instrument."},
  "XMarketType":{"type":"Integer","cls":"dt-integer","size":"10","desc":"XMarketType of the instrument."}
};

(function () {
  var tip = null;
  var hideTimer = null;

  function createTip() {
    if (tip) return;
    tip = document.createElement("div");
    tip.id = "mkt-field-tip";
    tip.style.cssText = [
      "position:fixed",
      "z-index:99999",
      "background:#fff",
      "border:1.5px solid #e5e7eb",
      "border-radius:10px",
      "padding:14px 16px",
      "box-shadow:0 6px 24px rgba(0,0,0,0.13)",
      "font-size:13px",
      "min-width:220px",
      "max-width:300px",
      "display:none",
      "pointer-events:none",
      "line-height:1.5"
    ].join(";");
    document.body.appendChild(tip);
  }

  function showTip(el) {
    if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
    var text = el.textContent.trim();
    if (text.indexOf("👁") === -1 && text.indexOf("👁") === -1) return;
    var fname = text.replace(/\s*👁\s*$/, "").trim();
    var fd = MARKET_FIELD_DATA[fname];
    if (!fd) return;

    createTip();

    tip.innerHTML =
      '<div style="margin-bottom:8px;border-bottom:1px solid #f3f4f6;padding-bottom:8px">' +
        '<div style="font-size:10px;text-transform:uppercase;letter-spacing:.6px;color:#9ca3af;margin-bottom:3px">Field Name</div>' +
        '<div style="font-weight:700;color:#111827;font-size:14px">' + fname + '</div>' +
      '</div>' +
      '<div style="margin-bottom:7px">' +
        '<div style="font-size:10px;text-transform:uppercase;letter-spacing:.6px;color:#9ca3af;margin-bottom:4px">Data Type</div>' +
        '<span class="dt ' + fd.cls + '">' + fd.type + '</span>' +
      '</div>' +
      '<div style="margin-bottom:7px">' +
        '<div style="font-size:10px;text-transform:uppercase;letter-spacing:.6px;color:#9ca3af;margin-bottom:3px">Size</div>' +
        '<div style="color:#374151">' + fd.size + '</div>' +
      '</div>' +
      '<div>' +
        '<div style="font-size:10px;text-transform:uppercase;letter-spacing:.6px;color:#9ca3af;margin-bottom:3px">Description</div>' +
        '<div style="color:#374151">' + fd.desc + '</div>' +
      '</div>';

    var rect = el.getBoundingClientRect();
    var left = rect.left;
    var top = rect.bottom + 8;
    if (left + 310 > window.innerWidth) { left = window.innerWidth - 316; }
    if (top + 200 > window.innerHeight) { top = rect.top - 8 - tip.offsetHeight; }
    tip.style.left = Math.max(8, left) + "px";
    tip.style.top = Math.max(8, top) + "px";
    tip.style.display = "block";
  }

  function hideTip() {
    hideTimer = setTimeout(function () {
      if (tip) tip.style.display = "none";
    }, 80);
  }

  document.addEventListener("mouseover", function (e) {
    var el = e.target.closest ? e.target.closest("a") : null;
    if (!el) return;
    showTip(el);
  });

  document.addEventListener("mouseout", function (e) {
    var el = e.target.closest ? e.target.closest("a") : null;
    if (!el) return;
    var text = el.textContent.trim();
    if (text.indexOf("👁") !== -1) hideTip();
  });

  document.addEventListener("scroll", function () {
    if (tip) tip.style.display = "none";
  }, true);
})();
