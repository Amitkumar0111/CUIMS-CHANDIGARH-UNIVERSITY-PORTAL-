!function (e, t) {
    function n(t) {
        var n = y()
            , o = n.querySelector("h2")
            , r = n.querySelector("p")
            , a = n.querySelector("button.cancel")
            , c = n.querySelector("button.confirm");
        if (o.innerHTML = w(t.title).split("\n").join("<br>"),
            r.innerHTML = w(t.text || "").split("\n").join("<br>"),
            t.text && S(r),
            C(n.querySelectorAll(".icon")),
            t.type) {
            for (var l = !1, s = 0; s < d.length; s++)
                if (t.type === d[s]) {
                    l = !0;
                    break
                }
            if (!l)
                return e.console.error("Unknown alert type: " + t.type),
                    !1;
            var u = n.querySelector(".icon." + t.type);
            switch (S(u),
            t.type) {
                case "success":
                    v(u, "animate"),
                        v(u.querySelector(".tip"), "animateSuccessTip"),
                        v(u.querySelector(".long"), "animateSuccessLong");
                    break;
                case "error":
                    v(u, "animateErrorIcon"),
                        v(u.querySelector(".x-mark"), "animateXMark");
                    break;
                case "warning":
                    v(u, "pulseWarning"),
                        v(u.querySelector(".body"), "pulseWarningIns"),
                        v(u.querySelector(".dot"), "pulseWarningIns")
            }
        }
        if (t.imageUrl) {
            var f = n.querySelector(".icon.custom");
            f.style.backgroundImage = "url(" + t.imageUrl + ")",
                S(f);
            var m = 80
                , p = 80;
            if (t.imageSize) {
                var g = t.imageSize.split("x")[0]
                    , b = t.imageSize.split("x")[1];
                g && b ? (m = g,
                    p = b,
                    f.css({
                        width: g + "px",
                        height: b + "px"
                    })) : e.console.error("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize)
            }
            f.setAttribute("style", f.getAttribute("style") + "width:" + m + "px; height:" + p + "px")
        }
        n.setAttribute("data-has-cancel-button", t.showCancelButton),
            t.showCancelButton ? a.style.display = "inline-block" : C(a),
            t.cancelButtonText && (a.innerHTML = w(t.cancelButtonText)),
            t.confirmButtonText && (c.innerHTML = w(t.confirmButtonText)),
            c.style.backgroundColor = t.confirmButtonColor,
            i(c, t.confirmButtonColor),
            n.setAttribute("data-allow-ouside-click", t.allowOutsideClick);
        var h = t.doneFunction ? !0 : !1;
        n.setAttribute("data-has-done-function", h),
            n.setAttribute("data-timer", t.timer)
    }
    function o(e, t) {
        e = String(e).replace(/[^0-9a-f]/gi, ""),
            e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
            t = t || 0;
        var n = "#", o, r;
        for (r = 0; 3 > r; r++)
            o = parseInt(e.substr(2 * r, 2), 16),
                o = Math.round(Math.min(Math.max(0, o + o * t), 255)).toString(16),
                n += ("00" + o).substr(o.length);
        return n
    }
    function r(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    }
    function a(e) {
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
    }
    function i(e, t) {
        var n = a(t);
        e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
    }
    function c() {
        var e = y();
        T(p(), 10),
            S(e),
            v(e, "showSweetAlert"),
            b(e, "hideSweetAlert"),
            I = t.activeElement;
        var n = e.querySelector("button.confirm");
        n.focus(),
            setTimeout(function () {
                v(e, "visible")
            }, 500);
        var o = e.getAttribute("data-timer");
        "null" !== o && "" !== o && (e.timeout = setTimeout(function () {
            l()
        }, o))
    }
    function l() {
        var n = y();
        E(p(), 5),
            E(n, 5),
            b(n, "showSweetAlert"),
            v(n, "hideSweetAlert"),
            b(n, "visible");
        var o = n.querySelector(".icon.success");
        b(o, "animate"),
            b(o.querySelector(".tip"), "animateSuccessTip"),
            b(o.querySelector(".long"), "animateSuccessLong");
        var r = n.querySelector(".icon.error");
        b(r, "animateErrorIcon"),
            b(r.querySelector(".x-mark"), "animateXMark");
        var a = n.querySelector(".icon.warning");
        b(a, "pulseWarning"),
            b(a.querySelector(".body"), "pulseWarningIns"),
            b(a.querySelector(".dot"), "pulseWarningIns"),
            e.onkeydown = M,
            t.onclick = A,
            I && I.focus(),
            z = void 0,
            clearTimeout(n.timeout)
    }
    function s() {
        var e = y();
        e.style.marginTop = B(y())
    }
    var u = ".sweet-alert", f = ".sweet-overlay", d = ["error", "warning", "info", "success"], m = {
        title: "",
        text: "",
        type: null,
        allowOutsideClick: !1,
        showCancelButton: !1,
        closeOnConfirm: !0,
        closeOnCancel: !0,
        confirmButtonText: "OK",
        confirmButtonColor: "#AEDEF4",
        cancelButtonText: "Cancel",
        imageUrl: null,
        imageSize: null,
        timer: null
    }, y = function () {
        return t.querySelector(u)
    }, p = function () {
        return t.querySelector(f)
    }, g = function (e, t) {
        return new RegExp(" " + t + " ").test(" " + e.className + " ")
    }, v = function (e, t) {
        g(e, t) || (e.className += " " + t)
    }, b = function (e, t) {
        var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
        if (g(e, t)) {
            for (; n.indexOf(" " + t + " ") >= 0;)
                n = n.replace(" " + t + " ", " ");
            e.className = n.replace(/^\s+|\s+$/g, "")
        }
    }, w = function (e) {
        var n = t.createElement("div");
        return n.appendChild(t.createTextNode(e)),
            n.innerHTML
    }, h = function (e) {
        e.style.opacity = "",
            e.style.display = "block"
    }, S = function (e) {
        if (e && !e.length)
            return h(e);
        for (var t = 0; t < e.length; ++t)
            h(e[t])
    }, x = function (e) {
        e.style.opacity = "",
            e.style.display = "none"
    }, C = function (e) {
        if (e && !e.length)
            return x(e);
        for (var t = 0; t < e.length; ++t)
            x(e[t])
    }, k = function (e, t) {
        for (var n = t.parentNode; null !== n;) {
            if (n === e)
                return !0;
            n = n.parentNode
        }
        return !1
    }, B = function (e) {
        e.style.left = "-9999px",
            e.style.display = "block";
        var t = e.clientHeight, n;
        return n = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding"), 10) : parseInt(e.currentStyle.padding),
            e.style.left = "",
            e.style.display = "none",
            "-" + parseInt(t / 2 + n) + "px"
    }, T = function (e, t) {
        if (+e.style.opacity < 1) {
            t = t || 16,
                e.style.opacity = 0,
                e.style.display = "block";
            var n = +new Date
                , o = function () {
                    e.style.opacity = +e.style.opacity + (new Date - n) / 100,
                        n = +new Date,
                        +e.style.opacity < 1 && setTimeout(o, t)
                };
            o()
        }
        e.style.display = "block"
    }, E = function (e, t) {
        t = t || 16,
            e.style.opacity = 1;
        var n = +new Date
            , o = function () {
                e.style.opacity = +e.style.opacity - (new Date - n) / 100,
                    n = +new Date,
                    +e.style.opacity > 0 ? setTimeout(o, t) : e.style.display = "none"
            };
        o()
    }, q = function (n) {
        if (MouseEvent) {
            var o = new MouseEvent("click", {
                view: e,
                bubbles: !1,
                cancelable: !0
            });
            n.dispatchEvent(o)
        } else if (t.createEvent) {
            var r = t.createEvent("MouseEvents");
            r.initEvent("click", !1, !1),
                n.dispatchEvent(r)
        } else
            t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
    }, O = function (t) {
        "function" == typeof t.stopPropagation ? (t.stopPropagation(),
            t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
    }, I, A, M, z;
    e.sweetAlertInitialize = function () {
        var e = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert" tabIndex="-1"><div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span></div><div class="icon warning"> <span class="body"></span> <span class="dot"></span> </div> <div class="icon info"></div> <div class="icon success"> <span class="line tip"></span> <span class="line long"></span> <div class="placeholder"></div> <div class="fix"></div> </div> <div class="icon custom"></div> <h2>Title</h2><p>Text</p><button class="cancel" tabIndex="2">Cancel</button><button class="confirm" tabIndex="1">OK</button></div>'
            , n = t.createElement("div");
        n.innerHTML = e,
            t.body.appendChild(n)
    }
        ,
        e.sweetAlert = e.swal = function () {
            function a(t) {
                var n = t || e.event
                    , o = n.keyCode || n.which;
                if (-1 !== [9, 13, 32, 27].indexOf(o)) {
                    for (var r = n.target || n.srcElement, a = -1, c = 0; c < S.length; c++)
                        if (r === S[c]) {
                            a = c;
                            break
                        }
                    9 === o ? (r = -1 === a ? w : a === S.length - 1 ? S[0] : S[a + 1],
                        O(n),
                        r.focus(),
                        i(r, f.confirmButtonColor)) : (r = 13 === o || 32 === o ? -1 === a ? w : void 0 : 27 !== o || h.hidden || "none" === h.style.display ? void 0 : h,
                            void 0 !== r && q(r, n))
                }
            }
            function u(t) {
                var n = t || e.event
                    , o = n.target || n.srcElement
                    , r = n.relatedTarget
                    , a = g(d, "visible");
                if (a) {
                    var i = -1;
                    if (null !== r) {
                        for (var c = 0; c < S.length; c++)
                            if (r === S[c]) {
                                i = c;
                                break
                            }
                        -1 === i && o.focus()
                    } else
                        z = o
                }
            }
            if (void 0 === arguments[0])
                return e.console.error("sweetAlert expects at least 1 attribute!"),
                    !1;
            var f = r({}, m);
            switch (typeof arguments[0]) {
                case "string":
                    f.title = arguments[0],
                        f.text = arguments[1] || "",
                        f.type = arguments[2] || "";
                    break;
                case "object":
                    if (void 0 === arguments[0].title)
                        return e.console.error('Missing "title" argument!'),
                            !1;
                    f.title = arguments[0].title,
                        f.text = arguments[0].text || m.text,
                        f.type = arguments[0].type || m.type,
                        f.allowOutsideClick = arguments[0].allowOutsideClick || m.allowOutsideClick,
                        f.showCancelButton = void 0 !== arguments[0].showCancelButton ? arguments[0].showCancelButton : m.showCancelButton,
                        f.closeOnConfirm = void 0 !== arguments[0].closeOnConfirm ? arguments[0].closeOnConfirm : m.closeOnConfirm,
                        f.closeOnCancel = void 0 !== arguments[0].closeOnCancel ? arguments[0].closeOnCancel : m.closeOnCancel,
                        f.timer = arguments[0].timer || m.timer,
                        f.confirmButtonText = m.showCancelButton ? "Confirm" : m.confirmButtonText,
                        f.confirmButtonText = arguments[0].confirmButtonText || m.confirmButtonText,
                        f.confirmButtonColor = arguments[0].confirmButtonColor || m.confirmButtonColor,
                        f.cancelButtonText = arguments[0].cancelButtonText || m.cancelButtonText,
                        f.imageUrl = arguments[0].imageUrl || m.imageUrl,
                        f.imageSize = arguments[0].imageSize || m.imageSize,
                        f.doneFunction = arguments[1] || null;
                    break;
                default:
                    return e.console.error('Unexpected type of argument! Expected "string" or "object", got ' + typeof arguments[0]),
                        !1
            }
            n(f),
                s(),
                c();
            for (var d = y(), p = function (t) {
                var n = t || e.event
                    , r = n.target || n.srcElement
                    , a = "confirm" === r.className
                    , i = g(d, "visible")
                    , c = f.doneFunction && "true" === d.getAttribute("data-has-done-function");
                switch (n.type) {
                    case "mouseover":
                        a && (r.style.backgroundColor = o(f.confirmButtonColor, -.04));
                        break;
                    case "mouseout":
                        a && (r.style.backgroundColor = f.confirmButtonColor);
                        break;
                    case "mousedown":
                        a && (r.style.backgroundColor = o(f.confirmButtonColor, -.14));
                        break;
                    case "mouseup":
                        a && (r.style.backgroundColor = o(f.confirmButtonColor, -.04));
                        break;
                    case "focus":
                        var s = d.querySelector("button.confirm")
                            , u = d.querySelector("button.cancel");
                        a ? u.style.boxShadow = "none" : s.style.boxShadow = "none";
                        break;
                    case "click":
                        if (a && c && i)
                            f.doneFunction(!0),
                                f.closeOnConfirm && l();
                        else if (c && i) {
                            var m = String(f.doneFunction).replace(/\s/g, "")
                                , y = "function(" === m.substring(0, 9) && ")" !== m.substring(9, 10);
                            y && f.doneFunction(!1),
                                f.closeOnCancel && l()
                        } else
                            l()
                }
            }, v = d.querySelectorAll("button"), b = 0; b < v.length; b++)
                v[b].onclick = p,
                    v[b].onmouseover = p,
                    v[b].onmouseout = p,
                    v[b].onmousedown = p,
                    v[b].onfocus = p;
            A = t.onclick,
                t.onclick = function (t) {
                    var n = t || e.event
                        , o = n.target || n.srcElement
                        , r = d === o
                        , a = k(d, o)
                        , i = g(d, "visible")
                        , c = "true" === d.getAttribute("data-allow-ouside-click");
                    !r && !a && i && c && l()
                }
                ;
            var w = d.querySelector("button.confirm")
                , h = d.querySelector("button.cancel")
                , S = d.querySelectorAll("button:not([type=hidden])");
            M = e.onkeydown,
                e.onkeydown = a,
                w.onblur = u,
                h.onblur = u,
                e.onfocus = function () {
                    e.setTimeout(function () {
                        void 0 !== z && (z.focus(),
                            z = void 0)
                    }, 0)
                }
        }
        ,
        e.swal.setDefaults = function (e) {
            if (!e)
                throw new Error("userParams is required");
            if ("object" != typeof e)
                throw new Error("userParams has to be a object");
            r(m, e)
        }
        ,
        function () {
            "complete" === t.readyState || "interactive" === t.readyState && t.body ? e.sweetAlertInitialize() : t.addEventListener ? t.addEventListener("DOMContentLoaded", function n() {
                t.removeEventListener("DOMContentLoaded", arguments.callee, !1),
                    e.sweetAlertInitialize()
            }, !1) : t.attachEvent && t.attachEvent("onreadystatechange", function () {
                "complete" === t.readyState && (t.detachEvent("onreadystatechange", arguments.callee),
                    e.sweetAlertInitialize())
            })
        }()
}(window, document);
