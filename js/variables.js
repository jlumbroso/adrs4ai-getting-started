/* Guidebook variables — localStorage-backed, identifiers only, never
   secrets. Sentinels ⟨name⟩ in the rendered text (including inside code
   blocks) are wrapped in spans on load and substituted live from the
   inputs on /docs/variables/ and in-page. Storage failures (private
   windows, cleared data) degrade to showing the sentinels. */
(function () {
  if (window.__gbVars) return;
  window.__gbVars = true;

  function key(n) { return "gb-var-" + n; }
  function get(n) { try { return localStorage.getItem(key(n)) || ""; } catch (e) { return ""; } }
  function set(n, v) { try { localStorage.setItem(key(n), v); } catch (e) { /* degrade */ } }

  var names = new Set();

  function wrapSentinels() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) {
      var t = walker.currentNode;
      if (t.nodeValue.indexOf("⟨") !== -1) nodes.push(t);
    }
    nodes.forEach(function (t) {
      var p = t.parentElement;
      if (p && (p.closest("script,style,textarea") || p.classList.contains("gb-var"))) return;
      var s = t.nodeValue, re = /⟨([a-z0-9][a-z0-9-]*)⟩/g;
      var frag = document.createDocumentFragment(), last = 0, m;
      while ((m = re.exec(s))) {
        frag.appendChild(document.createTextNode(s.slice(last, m.index)));
        var span = document.createElement("span");
        span.className = "gb-var";
        span.dataset.gbVar = m[1];
        span.textContent = "⟨" + m[1] + "⟩";
        frag.appendChild(span);
        names.add(m[1]);
        last = re.lastIndex;
      }
      if (last === 0) return;
      frag.appendChild(document.createTextNode(s.slice(last)));
      t.parentNode.replaceChild(frag, t);
    });
  }

  function render(n) {
    var v = get(n);
    document.querySelectorAll('span.gb-var[data-gb-var="' + n + '"]').forEach(function (el) {
      el.textContent = v || "⟨" + n + "⟩";
      el.classList.toggle("gb-var-set", !!v);
    });
    document.querySelectorAll('input[data-gb-var="' + n + '"]').forEach(function (i) {
      if (i.value !== v) i.value = v;
    });
  }

  function init() {
    wrapSentinels();
    document.querySelectorAll("input[data-gb-var]").forEach(function (i) {
      names.add(i.dataset.gbVar);
      i.addEventListener("input", function () {
        set(i.dataset.gbVar, i.value.trim());
        render(i.dataset.gbVar);
      });
    });
    names.forEach(render);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
