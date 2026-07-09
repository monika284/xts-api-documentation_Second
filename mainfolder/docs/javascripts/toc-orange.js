/* Apply orange highlight to TOC sidebar links whose target heading has color:#ff6b00 */
document$.subscribe(function () {
    setTimeout(function applyOrange() {
        var links = document.querySelectorAll('.custom-toc a');
        if (!links.length) { setTimeout(applyOrange, 150); return; }
        links.forEach(function (a) {
            var id = (a.getAttribute('href') || '').replace(/^#/, '');
            if (!id) return;
            var target = document.getElementById(id);
            if (!target) return;
            var style = target.getAttribute('style') || '';
            if (/color\s*:\s*#ff6b00/i.test(style)) {
                a.style.borderLeft   = '3px solid #ff6b00';
                a.style.paddingLeft  = '10px';
                a.style.fontWeight   = '700';
                a.style.color        = '#ff6b00';
                a.style.background   = '#fff0e5';
                a.style.borderRadius = '0 6px 6px 0';
                a.style.display      = 'block';
                a.style.marginTop    = '2px';
            }
        });
    }, 200);
});
