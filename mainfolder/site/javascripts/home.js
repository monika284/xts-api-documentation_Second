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

    var all = document.querySelectorAll("h1[id], h2[id], h3[id]");
    var headings = Array.from(all).filter(function (h) {
        return !h.closest(".md-sidebar") && !h.closest(".md-nav") && !h.closest(".md-header");
    });

    if (!headings.length) return;

    var html = '<div class="custom-toc"><h4>TABLE OF CONTENTS</h4><ul>';
    headings.forEach(function (h) {
        html += '<li class="' + (h.tagName === "H3" ? "toc-h3" : "") + '">'
             +  '<a href="#' + h.id + '">' + h.textContent.trim() + '</a></li>';
    });
    html += '</ul></div>';
    sidebar.innerHTML = html;

    initScrollSpy();
}

/* ── Boot ────────────────────────────────────────────────── */
function boot() {
    setTimeout(function () {
        injectToc();
        enhanceSidebar();
    }, 150);
}

if (typeof document$ !== "undefined") {
    document$.subscribe(boot);
} else {
    document.addEventListener("DOMContentLoaded", boot);
}
