(function (w, d) {
    "use strict";
    function ezheight() {
        var ez = Array.prototype.slice.call(d.querySelectorAll("[data-ezHeight]"));
        var hs = {};
        ez.forEach(function (v) {
            var a = v.getAttribute("data-ezHeight");
            var h = v.children[0].clientHeight;
            hs[a] = (!hs[a] || h > hs[a]) ? h : hs[a];
        });
        ez.forEach(function (v) {
            var a = v.getAttribute("data-ezHeight");
            v.style.height = hs[a] + "px";
        });
    }
    w.addEventListener("resize", ezheight);
    w.onload = ezheight;
}(window, document));
