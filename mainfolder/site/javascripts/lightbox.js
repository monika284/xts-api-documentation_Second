/* ── Image Lightbox (click to open, scroll to zoom, drag to pan) ── */
(function () {
    var overlay, lbImg, scale, posX, posY, isDragging, startX, startY;

    function build() {
        overlay = document.createElement('div');
        overlay.id = 'lb-overlay';
        overlay.innerHTML =
            '<span id="lb-close">&times;</span>' +
            '<span id="lb-hint">Scroll to zoom &nbsp;·&nbsp; Drag to pan &nbsp;·&nbsp; Esc to close</span>' +
            '<div id="lb-frame"><img id="lb-img" draggable="false"></div>';
        document.body.appendChild(overlay);

        lbImg = document.getElementById('lb-img');

        /* Close on backdrop or × button */
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay || e.target.id === 'lb-close') closeLb();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLb();
        });

        /* Zoom with mouse wheel */
        overlay.addEventListener('wheel', function (e) {
            e.preventDefault();
            var delta = e.deltaY < 0 ? 0.15 : -0.15;
            scale = Math.min(Math.max(scale + delta, 0.5), 8);
            applyTransform();
        }, { passive: false });

        /* Drag to pan */
        lbImg.addEventListener('mousedown', function (e) {
            isDragging = true;
            startX = e.clientX - posX;
            startY = e.clientY - posY;
            lbImg.style.cursor = 'grabbing';
            e.preventDefault();
        });
        document.addEventListener('mousemove', function (e) {
            if (!isDragging) return;
            posX = e.clientX - startX;
            posY = e.clientY - startY;
            applyTransform();
        });
        document.addEventListener('mouseup', function () {
            if (isDragging) { isDragging = false; if (lbImg) lbImg.style.cursor = 'grab'; }
        });

        /* Touch pinch-zoom */
        var lastDist = null;
        overlay.addEventListener('touchmove', function (e) {
            if (e.touches.length === 2) {
                var dx = e.touches[0].clientX - e.touches[1].clientX;
                var dy = e.touches[0].clientY - e.touches[1].clientY;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (lastDist) {
                    scale = Math.min(Math.max(scale * (dist / lastDist), 0.5), 8);
                    applyTransform();
                }
                lastDist = dist;
                e.preventDefault();
            } else { lastDist = null; }
        }, { passive: false });
        overlay.addEventListener('touchend', function () { lastDist = null; });
    }

    function applyTransform() {
        lbImg.style.transform =
            'translate(' + posX + 'px,' + posY + 'px) scale(' + scale + ')';
    }

    function openLb(src, alt) {
        if (!overlay) build();
        lbImg = document.getElementById('lb-img');
        lbImg.src = src;
        lbImg.alt = alt || '';
        lbImg.style.cursor = 'grab';
        scale = 1; posX = 0; posY = 0;
        applyTransform();
        overlay.style.display = 'flex';
        requestAnimationFrame(function () { overlay.classList.add('lb-open'); });
        document.body.style.overflow = 'hidden';
    }

    function closeLb() {
        if (!overlay) return;
        overlay.classList.remove('lb-open');
        setTimeout(function () { overlay.style.display = 'none'; }, 220);
        document.body.style.overflow = '';
    }

    function init() {
        document.querySelectorAll('.md-content img').forEach(function (el) {
            if (el.closest('.md-header') || el.closest('.md-nav') || el.dataset.lbDone || el.hasAttribute('data-no-lb')) return;
            el.dataset.lbDone = '1';
            el.style.cursor = 'zoom-in';
            el.addEventListener('click', function (e) {
                e.preventDefault();
                openLb(el.src, el.alt);
            });
        });
    }

    /* Works with MkDocs Material instant navigation */
    if (typeof document$ !== 'undefined') {
        document$.subscribe(function () { setTimeout(init, 200); });
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
}());
