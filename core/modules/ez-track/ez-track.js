(function (w, d) {
    "use strict";
    w.onload = function () {
        var track = Array.prototype.slice.call(d.getElementsByClassName("ez-track"));

        function move_track(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            switch (e.type) {
                case "mousedown":
                    if (e.target.tagName === "A") {
                        e.target.isClicked = e.timeStamp;
                    }
                    e.currentTarget.isClicked = true;
                    e.currentTarget.pos = e.pageX;
                    break;
                case "mouseup":
                case "mouseleave":
                    if (e.target.tagName === "A" && e.timeStamp - e.target.isClicked < 250) {
                        w.open(e.target.href);
                    }
                    e.currentTarget.isClicked = false;
                    break;
                case "mousemove":
                    if (e.currentTarget.isClicked === true) {
                        e.currentTarget.children[0].scrollLeft += e.currentTarget.pos - e.pageX;
                        e.currentTarget.pos = e.pageX;
                    }
                    break;
            }
        }
        track.forEach(function (t) {
            t.addEventListener("mousedown", move_track);
            t.addEventListener("mousemove", move_track);
            t.addEventListener("mouseup", move_track);
            t.addEventListener("mouseleave", move_track);
            t.addEventListener("click", move_track);
        });
    }
}(window, document));
