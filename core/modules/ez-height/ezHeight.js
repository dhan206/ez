(function (w, d, $) {
    "use strict";

    var ezHeight = function () {
        var heights = {};
        $("[data-ezHeight]").each(function (i, e) {
            if (!heights[$(e).attr("data-ezHeight")]) {
                heights[$(e).attr("data-ezHeight")] = $(e).find(">div:first").height();
            } else if ($(e).find(">div:first").height() > heights[$(e).attr("data-ezHeight")]) {
                heights[$(e).attr("data-ezHeight")] = $(e).find(">div:first").height();
            }
        });
        for (var h in heights) {
            $("[data-ezHeight='" + h + "']").height(heights[h]);
        };
    };
    $(w).resize(ezHeight);
    var loader = setInterval(function () {
        ezHeight();
        if (d.readyState === "complete") {
            clearInterval(loader);
        }
    }, 100);
}(window, document, jQuery));
