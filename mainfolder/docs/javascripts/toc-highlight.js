/* TOC heading highlight — scroll to heading and flash it on anchor navigation */

(function () {
  function highlightHeading(id) {
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;

    /* remove any existing animation so it can replay */
    el.classList.remove('heading-highlight');
    void el.offsetWidth; /* force reflow */
    el.classList.add('heading-highlight');

    el.addEventListener('animationend', function () {
      el.classList.remove('heading-highlight');
    }, { once: true });
  }

  /* On page load — highlight the heading matching the URL hash */
  function onLoad() {
    if (location.hash) {
      var id = decodeURIComponent(location.hash.slice(1));
      /* slight delay so MkDocs Material finishes rendering */
      setTimeout(function () { highlightHeading(id); }, 120);
    }
  }

  /* When user clicks a TOC anchor link */
  function onTocClick(e) {
    var link = e.target.closest('a[href*="#"]');
    if (!link) return;

    var href = link.getAttribute('href') || '';
    var hash = href.includes('#') ? href.split('#').pop() : '';
    if (!hash) return;

    /* if it's a same-page anchor, highlight immediately after scroll */
    var targetPage = href.split('#')[0];
    var currentPage = location.pathname.split('/').pop() || 'index.html';

    if (!targetPage || targetPage === currentPage || href.startsWith('#')) {
      setTimeout(function () { highlightHeading(hash); }, 80);
    }
    /* cross-page: onLoad() will handle it after navigation */
  }

  /* Attach to TOC nav and in-page anchors */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href*="#"]');
    if (link) onTocClick(e);
  });

  /* hashchange fires on back/forward and same-page hash changes */
  window.addEventListener('hashchange', function () {
    var id = decodeURIComponent(location.hash.slice(1));
    setTimeout(function () { highlightHeading(id); }, 80);
  });

  /* MkDocs Material uses instant navigation — hook into it */
  document.addEventListener('DOMContentLoaded', onLoad);

  /* Also run when MkDocs Material swaps the page via instant loading */
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function () { onLoad(); });
  }
})();
