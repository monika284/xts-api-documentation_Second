/**
 * float-cards.js
 * Auto-adds hover float effect to all inline-styled card divs across all pages.
 * Targets <div> elements that have BOTH border: AND border-radius: in their
 * inline style — these are content cards, never plain grid containers.
 * Dark code boxes (#1e1e1e background) are skipped.
 */
(function () {
    function applyFloatCards() {
        var els = document.querySelectorAll(
            '.md-content div[style], .md-content section[style], .md-content article[style]'
        );
        for (var i = 0; i < els.length; i++) {
            var el = els[i];
            /* skip already processed */
            if (el.classList.contains('auto-float')) continue;
            var style = el.getAttribute('style') || '';
            var hasBorder       = /border\s*:/.test(style);
            var hasBorderRadius = /border-radius\s*:/.test(style);
            /* skip dark code boxes */
            var isDarkBox = /#1e1e1e|#1a1a2e|#0f172a/.test(style);
            /* skip elements nested inside an already-floated card */
            var isNested = !!el.closest('.auto-float');
            if (hasBorder && hasBorderRadius && !isDarkBox && !isNested) {
                el.classList.add('auto-float');
            }
        }
    }

    /* First page load */
    document.addEventListener('DOMContentLoaded', applyFloatCards);

    /* MkDocs Material instant navigation — fires on every page swap */
    if (typeof document$ !== 'undefined') {
        document$.subscribe(function () { applyFloatCards(); });
    }
})();
