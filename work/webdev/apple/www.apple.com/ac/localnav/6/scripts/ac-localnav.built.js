! function t(e, i, n) {
    function s(a, o) {
        if (!i[a]) {
            if (!e[a]) {
                var h = "function" == typeof require && require;
                if (!o && h) return h(a, !0);
                if (r) return r(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = i[a] = {
                exports: {}
            };
            e[a][0].call(u.exports, (function(t) {
                return s(e[a][1][t] || t)
            }), u, u.exports, t, e, i, n)
        }
        return i[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < n.length; a++) s(n[a]);
    return s
}({
    1: [function(t, e, i) {
        "use strict";
        var n = t(2),
            s = t(4),
            r = t(7),
            a = function(t, e) {
                e = e || {}, this._tabbables = null, this._excludeHidden = e.excludeHidden, this._firstTabbableElement = e.firstFocusElement, this._lastTabbableElement = null, this._relatedTarget = null, this.el = t, this._handleOnFocus = this._handleOnFocus.bind(this)
            },
            o = a.prototype;
        o.start = function(t) {
            this.updateTabbables(), s(this.el, null, this._excludeHidden);
            let e = document.activeElement;
            this._firstTabbableElement ? this.el.contains(document.activeElement) || t || (this._firstTabbableElement.focus(), e = this._firstTabbableElement) : console.warn("this._firstTabbableElement is null, CircularTab needs at least one tabbable element."), this._relatedTarget = e, document.addEventListener("focus", this._handleOnFocus, !0)
        }, o.stop = function() {
            r(this.el), document.removeEventListener("focus", this._handleOnFocus, !0)
        }, o.updateTabbables = function() {
            this._tabbables = n.getTabbableElements(this.el, this._excludeHidden), this._firstTabbableElement = this._firstTabbableElement || this._tabbables[0], this._lastTabbableElement = this._tabbables[this._tabbables.length - 1]
        }, o._handleOnFocus = function(t) {
            if (this.el.contains(t.target)) this._relatedTarget = t.target;
            else {
                if (t.preventDefault(), this.updateTabbables(), this._relatedTarget === this._lastTabbableElement || null === this._relatedTarget) return this._firstTabbableElement.focus(), void(this._relatedTarget = this._firstTabbableElement);
                if (this._relatedTarget === this._firstTabbableElement && this._lastTabbableElement) return this._lastTabbableElement.focus(), void(this._relatedTarget = this._lastTabbableElement)
            }
        }, o.destroy = function() {
            this.stop(), this.el = null, this._tabbables = null, this._firstTabbableElement = null, this._lastTabbableElement = null, this._relatedTarget = null, this._handleOnFocus = null
        }, e.exports = a
    }, {
        2: 2,
        4: 4,
        7: 7
    }],
    2: [function(t, e, i) {
        "use strict";
        var n = t(9),
            s = function() {
                this.focusableSelectors = n.selectors
            },
            r = s.prototype;
        r.isFocusableElement = function(t, e, i) {
            return !(e && !this._isDisplayed(t)) && (n.nodeName[t.nodeName] ? !t.disabled : !t.contentEditable || (i = i || parseFloat(t.getAttribute("tabindex")), !isNaN(i)))
        }, r.isTabbableElement = function(t, e) {
            if (e && !this._isDisplayed(t)) return !1;
            var i = t.getAttribute("tabindex");
            return i = parseFloat(i), isNaN(i) ? this.isFocusableElement(t, e, i) : i >= 0
        }, r._isDisplayed = function(t) {
            var e = t.getBoundingClientRect();
            return (0 !== e.top || 0 !== e.left || 0 !== e.width || 0 !== e.height) && "hidden" !== window.getComputedStyle(t).visibility
        }, r.getTabbableElements = function(t, e) {
            for (var i = t.querySelectorAll(this.focusableSelectors), n = i.length, s = [], r = 0; r < n; r++) this.isTabbableElement(i[r], e) && s.push(i[r]);
            return s
        }, r.getFocusableElements = function(t, e) {
            for (var i = t.querySelectorAll(this.focusableSelectors), n = i.length, s = [], r = 0; r < n; r++) this.isFocusableElement(i[r], e) && s.push(i[r]);
            return s
        }, e.exports = new s
    }, {
        9: 9
    }],
    3: [function(t, e, i) {
        "use strict";
        var n = t(8),
            s = t(2),
            r = function(t, e) {
                var i = t.getAttribute("data-original-" + e);
                i || (i = t.getAttribute(e) || "", t.setAttribute("data-original-" + e, i))
            };
        e.exports = function(t, e) {
            if (s.isFocusableElement(t, e)) r(t, "tabindex"), t.setAttribute("tabindex", "-1");
            else
                for (var i = s.getTabbableElements(t, e), a = i.length; a--;) r(i[a], "tabindex"), i[a].setAttribute("tabindex", "-1");
            r(t, n.HIDDEN), t.setAttribute(n.HIDDEN, "true")
        }
    }, {
        2: 2,
        8: 8
    }],
    4: [function(t, e, i) {
        "use strict";
        var n = t(3);
        e.exports = function t(e, i, s) {
            i = i || document.body;
            for (var r = e, a = e; r = r.previousElementSibling;) n(r, s);
            for (; a = a.nextElementSibling;) n(a, s);
            e.parentElement && e.parentElement !== i && t(e.parentElement, i, s)
        }
    }, {
        3: 3
    }],
    5: [function(t, e, i) {
        "use strict";
        e.exports = function(t, e) {
            let i;
            i = t instanceof NodeList ? t : [].concat(t), e = Array.isArray(e) ? e : [].concat(e), i.forEach(t => {
                e.forEach(e => {
                    t.removeAttribute(e)
                })
            })
        }
    }, {}],
    6: [function(t, e, i) {
        "use strict";
        var n = t(5),
            s = t(8),
            r = "data-original-",
            a = function(t, e) {
                var i = t.getAttribute(r + e);
                null !== i && ("" === i ? n(t, e) : t.setAttribute(e, i), n(t, r + e))
            };
        e.exports = function(t) {
            a(t, "tabindex"), a(t, s.HIDDEN);
            for (var e = t.querySelectorAll("[".concat(r + "tabindex", "]")), i = e.length; i--;) a(e[i], "tabindex")
        }
    }, {
        5: 5,
        8: 8
    }],
    7: [function(t, e, i) {
        "use strict";
        var n = t(6);
        e.exports = function t(e, i) {
            i = i || document.body;
            for (var s = e, r = e; s = s.previousElementSibling;) n(s);
            for (; r = r.nextElementSibling;) n(r);
            e.parentElement && e.parentElement !== i && t(e.parentElement, i)
        }
    }, {
        6: 6
    }],
    8: [function(t, e, i) {
        "use strict";
        e.exports = {
            AUTOCOMPLETE: "aria-autocomplete",
            CHECKED: "aria-checked",
            DISABLED: "aria-disabled",
            EXPANDED: "aria-expanded",
            HASPOPUP: "aria-haspopup",
            HIDDEN: "aria-hidden",
            INVALID: "aria-invalid",
            LABEL: "aria-label",
            LEVEL: "aria-level",
            MULTILINE: "aria-multiline",
            MULTISELECTABLE: "aria-multiselectable",
            ORIENTATION: "aria-orientation",
            PRESSED: "aria-pressed",
            READONLY: "aria-readonly",
            REQUIRED: "aria-required",
            SELECTED: "aria-selected",
            SORT: "aria-sort",
            VALUEMAX: "aria-valuemax",
            VALUEMIN: "aria-valuemin",
            VALUENOW: "aria-valuenow",
            VALUETEXT: "aria-valuetext",
            ATOMIC: "aria-atomic",
            BUSY: "aria-busy",
            LIVE: "aria-live",
            RELEVANT: "aria-relevant",
            DROPEFFECT: "aria-dropeffect",
            GRABBED: "aria-grabbed",
            ACTIVEDESCENDANT: "aria-activedescendant",
            CONTROLS: "aria-controls",
            DESCRIBEDBY: "aria-describedby",
            FLOWTO: "aria-flowto",
            LABELLEDBY: "aria-labelledby",
            OWNS: "aria-owns",
            POSINSET: "aria-posinset",
            SETSIZE: "aria-setsize"
        }
    }, {}],
    9: [function(t, e, i) {
        "use strict";
        e.exports = {
            selectors: ["input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "[tabindex]", "[contenteditable]"].join(","),
            nodeName: {
                INPUT: "input",
                SELECT: "select",
                TEXTAREA: "textarea",
                BUTTON: "button",
                OPTGROUP: "optgroup",
                OPTION: "option",
                MENUITEM: "menuitem",
                FIELDSET: "fieldset",
                OBJECT: "object",
                A: "a"
            }
        }
    }, {}],
    10: [function(t, e, i) {
        "use strict";
        e.exports = Object.freeze({
            ELEMENT: 1,
            TEXT: 3,
            COMMENT: 8,
            DOCUMENT: 9,
            DOCUMENT_TYPE: 10,
            DOCUMENT_FRAGMENT: 11
        })
    }, {}],
    11: [function(t, e, i) {
        "use strict";
        var n = t(12);
        e.exports = function(t, e) {
            return n.insertNode(t, "insertBefore"), n.childNode(e, "insertBefore"), n.hasParentNode(e, "insertBefore"), e.parentNode.insertBefore(t, e)
        }
    }, {
        12: 12
    }],
    12: [function(t, e, i) {
        "use strict";
        var n = t(14),
            s = t(10),
            r = s.COMMENT,
            a = s.DOCUMENT_FRAGMENT,
            o = s.ELEMENT,
            h = s.TEXT,
            c = [o, h, r, a],
            u = [o, h, r],
            l = [o, a];
        e.exports = {
            parentNode: function(t, e, i) {
                if (i = i || "target", t && !n(t, l)) throw new TypeError(e + ": " + i + " must be an Element, or Document Fragment")
            },
            childNode: function(t, e, i) {
                if (i = i || "target", t && !n(t, u)) throw new TypeError(e + ": " + i + " must be an Element, TextNode, or Comment")
            },
            insertNode: function(t, e, i) {
                if (i = i || "node", t && !n(t, c)) throw new TypeError(e + ": " + i + " must be an Element, TextNode, Comment, or Document Fragment")
            },
            hasParentNode: function(t, e, i) {
                if (i = i || "target", !t.parentNode) throw new TypeError(e + ": " + i + " must have a parentNode")
            }
        }
    }, {
        10: 10,
        14: 14
    }],
    13: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            return !(!t || !t.nodeType)
        }
    }, {}],
    14: [function(t, e, i) {
        "use strict";
        var n = t(13);
        e.exports = function(t, e) {
            return !!n(t) && ("number" == typeof e ? t.nodeType === e : !!Array.isArray(e) && -1 !== e.indexOf(t.nodeType))
        }
    }, {
        13: 13
    }],
    15: [function(t, e, i) {
        "use strict";
        e.exports = {
            EventEmitterMicro: t(16)
        }
    }, {
        16: 16
    }],
    16: [function(t, e, i) {
        "use strict";

        function n() {
            this._events = {}
        }
        var s = n.prototype;
        s.on = function(t, e) {
            this._events[t] = this._events[t] || [], this._events[t].unshift(e)
        }, s.once = function(t, e) {
            var i = this;
            this.on(t, (function n(s) {
                i.off(t, n), void 0 !== s ? e(s) : e()
            }))
        }, s.off = function(t, e) {
            if (this.has(t)) {
                if (1 === arguments.length) return this._events[t] = null, void delete this._events[t];
                var i = this._events[t].indexOf(e); - 1 !== i && this._events[t].splice(i, 1)
            }
        }, s.trigger = function(t, e) {
            if (this.has(t))
                for (var i = this._events[t].length - 1; i >= 0; i--) void 0 !== e ? this._events[t][i](e) : this._events[t][i]()
        }, s.has = function(t) {
            return t in this._events != !1 && 0 !== this._events[t].length
        }, s.destroy = function() {
            for (var t in this._events) this._events[t] = null;
            this._events = null
        }, e.exports = n
    }, {}],
    17: [function(t, e, i) {
        "use strict";
        e.exports = class {
            constructor(t, e) {
                this._target = t, this._tests = {}, this.addTests(e)
            }
            addTests(t) {
                this._tests = Object.assign(this._tests, t)
            }
            htmlClass() {
                this._target.classList.remove("no-js"), this._target.classList.add("js");
                for (let t of Object.keys(this._tests)) this._addClass(t)
            }
            _supports(t) {
                return void 0 !== this._tests[t] && ("function" == typeof this._tests[t] && (this._tests[t] = this._tests[t]()), this._tests[t])
            }
            _addClass(t, e) {
                e = e || "no-", this._supports(t) ? this._target.classList.add(t) : this._target.classList.add(e + t)
            }
        }
    }, {}],
    18: [function(t, e, i) {
        "use strict";
        var n = t(14),
            s = t(42),
            r = t(45),
            a = t(54),
            o = t(1),
            h = t(19),
            c = t(21),
            u = t(20),
            l = t(10).ELEMENT,
            d = {
                className: "localnav"
            },
            _ = function(t, e) {
                var i;
                e = Object.assign({}, d, e), this.el = t, i = e.selector || "." + e.className, this._selectors = {
                    traySelector: e.traySelector || "." + e.className + "-menu-tray",
                    viewportEmitterID: e.viewportEmitterID || e.className + "-viewport-emitter",
                    curtainID: e.curtainID || e.className + "-curtain",
                    menuStateID: e.menuStateID || e.className + "-menustate",
                    menuOpeningClassName: e.menuOpeningClassName || e.className + "-opening"
                }, this._selectors.clickAwaySelector = i + ", #" + this._selectors.curtainID + ", #" + this._selectors.menuStateID, this.tray = this.el.querySelector(this._selectors.traySelector), this.stickyEnabled = this._getStickyEnabled(), this._transitionsAvailable = r("transition"), this._viewports = new a(this._selectors.viewportEmitterID), this.stickyEnabled && (this._sticky = new c(this.el, e)), this.circTab = new o(this.el), this._initializeMenu()
            };
        _.create = function(t, e) {
            return new _(t, e)
        };
        var m = _.prototype;
        m._getStickyEnabled = function() {
            return this.el.hasAttribute("data-sticky")
        }, m._initializeMenu = function() {
            var t = document.getElementById(this._selectors.menuStateID),
                e = document.getElementById(this._selectors.menuStateID + "-open"),
                i = document.getElementById(this._selectors.menuStateID + "-close"),
                n = "onpopstate" in window ? "popstate" : "beforeunload";
            t && e && i && (this.menu = new h(t, e, i), this.menu.on("open", this._onMenuOpen.bind(this)), this.menu.on("close", this._onMenuClose.bind(this)), this._viewports.on("change:viewport", this._onViewportChange.bind(this)), window.addEventListener("scroll", this._onScroll.bind(this)), window.addEventListener("touchmove", this._onScroll.bind(this)), window.addEventListener("keydown", this._onKeyDown.bind(this)), this.tray.addEventListener("click", this._onTrayClick.bind(this)), this._closeMenu = this._closeMenu.bind(this), window.addEventListener(n, this._closeMenu), window.addEventListener("orientationchange", this._closeMenu), new u(this._selectors.clickAwaySelector).on("click", this._closeMenu), this._transitionsAvailable && this.tray.addEventListener("transitionend", this._enableMenuScroll.bind(this)))
        }, m._onMenuOpen = function() {
            this._menuCollapseOnScroll = null, this.circTab.start(), this.tray.removeAttribute("aria-hidden", "false"), this._transitionsAvailable && this._disableMenuScrollbar()
        }, m._onMenuClose = function() {
            this.tray.setAttribute("aria-hidden", "true"), this.circTab.stop()
        }, m._onScroll = function(t) {
            var e;
            this.menu.isOpen() && (null === this._menuCollapseOnScroll && (this._menuCollapseOnScroll = this.tray.offsetHeight >= this.tray.scrollHeight), this._menuCollapseOnScroll ? (this._closeMenu(), this.menu.anchorOpen.focus()) : (e = t.target, n(e, l) && s(e, this._selectors.traySelector, !0) || (t.preventDefault(), this._menuCollapseOnScroll = !0)))
        }, m._onTrayClick = function(t) {
            "href" in t.target && this._closeMenu()
        }, m._onKeyDown = function(t) {
            !this.menu.isOpen() || "Escape" !== t.code && 27 !== t.keyCode || (this._closeMenu(), this.menu.anchorOpen.focus())
        }, m._onViewportChange = function(t) {
            "medium" !== t.to && "large" !== t.to || this._closeMenu()
        }, m._disableMenuScrollbar = function() {
            this.el.classList.add(this._selectors.menuOpeningClassName)
        }, m._enableMenuScroll = function() {
            this.el.classList.remove(this._selectors.menuOpeningClassName)
        }, m._closeMenu = function() {
            this.menu.close()
        }, m.destroy = function() {}, e.exports = _
    }, {
        1: 1,
        10: 10,
        14: 14,
        19: 19,
        20: 20,
        21: 21,
        42: 42,
        45: 45,
        54: 54
    }],
    19: [function(t, e, i) {
        "use strict";
        var n = t(16);

        function s(t, e, i) {
            n.call(this), this.el = t, this.anchorOpen = e, this.anchorClose = i, this._lastOpen = this.el.checked, this.el.addEventListener("change", this.update.bind(this)), this.anchorOpen.addEventListener("click", this._anchorOpenClick.bind(this)), this.anchorClose.addEventListener("click", this._anchorCloseClick.bind(this)), this.anchorOpen.addEventListener("keydown", this._anchorOpenKeyDown.bind(this)), this.anchorClose.addEventListener("keydown", this._anchorCloseKeyDown.bind(this)), window.location.hash === "#" + t.id && (window.location.hash = "")
        }
        s.create = function(t, e, i) {
            return new s(t, e, i)
        };
        var r = n.prototype,
            a = s.prototype = Object.create(r);
        s.prototype.constructor = s, a.update = function() {
            var t = this.isOpen();
            t !== this._lastOpen && (this.trigger(t ? "open" : "close"), this._lastOpen = t)
        }, a.isOpen = function() {
            return this.el.checked
        }, a.toggle = function() {
            this.isOpen() ? this.close() : this.open()
        }, a.open = function() {
            this.el.checked || (this.el.checked = !0, this.update())
        }, a.close = function() {
            this.el.checked && (this.el.checked = !1, this.update())
        }, a._anchorOpenClick = function(t) {
            t.preventDefault(), this.open(), this.anchorClose.focus()
        }, a._anchorCloseClick = function(t) {
            t.preventDefault(), this.close(), this.anchorOpen.focus()
        }, a._anchorOpenKeyDown = function(t) {
            "Space" !== t.code && 32 !== t.keyCode || this._anchorOpenClick(t)
        }, a._anchorCloseKeyDown = function(t) {
            "Space" !== t.code && 32 !== t.keyCode || this._anchorCloseClick(t)
        }, e.exports = s
    }, {
        16: 16
    }],
    20: [function(t, e, i) {
        "use strict";
        var n = t(16),
            s = t(43);

        function r(t) {
            n.call(this), this._selector = t, this._touching = !1, document.addEventListener("click", this._onClick.bind(this)), document.addEventListener("touchstart", this._onTouchStart.bind(this)), document.addEventListener("touchend", this._onTouchEnd.bind(this))
        }
        var a = n.prototype,
            o = r.prototype = Object.create(a);
        r.prototype.constructor = r, o._checkTarget = function(t) {
            var e = t.target;
            s(e, this._selector, !0).length || this.trigger("click", t)
        }, o._onClick = function(t) {
            this._touching || this._checkTarget(t)
        }, o._onTouchStart = function(t) {
            this._touching = !0, this._checkTarget(t)
        }, o._onTouchEnd = function() {
            this._touching = !1
        }, e.exports = r
    }, {
        16: 16,
        43: 43
    }],
    21: [function(t, e, i) {
        "use strict";
        var n = t(15).EventEmitterMicro,
            s = t(45),
            r = t(11),
            a = t(41),
            o = t(53),
            h = o.browser.edge,
            c = function(t, e) {
                n.call(this), this.el = t, this.stuck = !1, this._selectors = {
                    placeholderID: e.placeholderID || e.className + "-sticky-placeholder",
                    stuckClassName: e.stuckClassName || e.className + "-sticking"
                }, this._createPlaceholder(), this._featureDetection(), this._updatePosition = this._updatePosition.bind(this), this._updatePlaceholderOffset = this._updatePlaceholderOffset.bind(this), window.addEventListener("scroll", this._updatePosition), document.addEventListener("touchmove", this._updatePosition), window.addEventListener("resize", this._updatePlaceholderOffset), window.addEventListener("orientationchange", this._updatePlaceholderOffset), "acStore" in window && (window.acStore.getStorefront().then(this._updatePlaceholderOffset), window.acStore.on("storefrontChange", this._updatePlaceholderOffset))
            };
        c.create = function(t, e) {
            return new c(t, e)
        };
        var u = n.prototype,
            l = c.prototype = Object.create(u);
        c.prototype.constructor = c, l._featureDetection = function() {
            var t = "css-sticky";
            s("position", "sticky") && !h || (t = "no-" + t), this.el.classList.add(t), this.placeholder.classList.add(t)
        }, l._createPlaceholder = function() {
            this.placeholder = document.createElement("div"), this.placeholder.id = this._selectors.placeholderID, r(this.placeholder, this.el), this._updatePlaceholderOffset()
        }, l._updatePlaceholderOffset = function() {
            var t = this.placeholder.offsetTop;
            (t += document.documentElement.offsetTop + document.body.offsetTop) !== this._placeholderOffset && (this._placeholderOffset = t, this._updatePosition())
        }, l._updatePosition = function() {
            a("y") > this._placeholderOffset ? this.stuck || (this.el.classList.add(this._selectors.stuckClassName), this.placeholder.classList.add(this._selectors.stuckClassName), this.stuck = !0, this.trigger("stuck")) : this.stuck && (this.el.classList.remove(this._selectors.stuckClassName), this.placeholder.classList.remove(this._selectors.stuckClassName), this.stuck = !1, this.trigger("unstuck"))
        }, e.exports = c
    }, {
        11: 11,
        15: 15,
        41: 41,
        45: 45,
        53: 53
    }],
    22: [function(t, e, i) {
        "use strict";
        var n = t(26),
            s = t(24),
            r = t(28),
            a = t(29),
            o = t(25),
            h = function(t, e) {
                var i = r(t),
                    s = !1 !== e && r(e);
                return n[t] = n[e] = n[i] = n[s] = {
                    dom: e,
                    css: s
                }, e
            };
        e.exports = function(t) {
            var e, i, r, c;
            if ((t += "") in n) return n[t].dom;
            for (r = s(), i = (t = a(t)).charAt(0).toUpperCase() + t.substring(1), e = "filter" === t ? ["WebkitFilter", "filter"] : (t + " " + o.dom.join(i + " ") + i).split(" "), c = 0; c < e.length; c++)
                if (void 0 !== r.style[e[c]]) return 0 !== c && o.reduce(c - 1), h(t, e[c]);
            return h(t, !1)
        }
    }, {
        24: 24,
        25: 25,
        26: 26,
        28: 28,
        29: 29
    }],
    23: [function(t, e, i) {
        "use strict";
        var n = t(22),
            s = t(27),
            r = t(25),
            a = t(26),
            o = {},
            h = /(\([^\)]+\))/gi,
            c = /([^ ,;\(]+(\([^\)]+\))?)/gi;
        e.exports = function(t, e) {
            var i;
            return e += "", !!(t = n(t)) && (s(t, e) ? e : (i = a[t].css, "" !== (e = (e = e.replace(c, (function(e) {
                var n, a, c, u;
                if ("#" === e[0] || !isNaN(e[0])) return e;
                if (a = e.replace(h, ""), (c = i + ":" + a) in o) return !1 === o[c] ? "" : e.replace(a, o[c]);
                for (n = r.css.map((function(t) {
                        return t + e
                    })), n = [e].concat(n), u = 0; u < n.length; u++)
                    if (s(t, n[u])) return 0 !== u && r.reduce(u - 1), o[c] = n[u].replace(h, ""), n[u];
                return o[c] = !1, ""
            }))).trim()) && e))
        }
    }, {
        22: 22,
        25: 25,
        26: 26,
        27: 27
    }],
    24: [function(t, e, i) {
        "use strict";
        var n;
        e.exports = function() {
            return n ? (n.style.cssText = "", n.removeAttribute("style")) : n = document.createElement("_"), n
        }, e.exports.resetElement = function() {
            n = null
        }
    }, {}],
    25: [function(t, e, i) {
        "use strict";
        var n = ["-webkit-", "-moz-", "-ms-"],
            s = ["Webkit", "Moz", "ms"],
            r = ["webkit", "moz", "ms"],
            a = function() {
                this.initialize()
            },
            o = a.prototype;
        o.initialize = function() {
            this.reduced = !1, this.css = n, this.dom = s, this.evt = r
        }, o.reduce = function(t) {
            this.reduced || (this.reduced = !0, this.css = [this.css[t]], this.dom = [this.dom[t]], this.evt = [this.evt[t]])
        }, e.exports = new a
    }, {}],
    26: [function(t, e, i) {
        "use strict";
        e.exports = {}
    }, {}],
    27: [function(t, e, i) {
        "use strict";
        var n, s, r = t(26),
            a = t(24),
            o = !1;
        e.exports = function(t, e) {
            var i, h;
            if (function() {
                    var t;
                    if (!o) {
                        o = !0, n = "CSS" in window && "supports" in window.CSS, s = !1, t = a();
                        try {
                            t.style.width = "invalid"
                        } catch (t) {
                            s = !0
                        }
                    }
                }(), n) return t = r[t].css, CSS.supports(t, e);
            if (i = (h = a()).style[t], s) try {
                h.style[t] = e
            } catch (t) {
                return !1
            } else h.style[t] = e;
            return h.style[t] && h.style[t] !== i
        }, e.exports.resetFlags = function() {
            o = !1
        }
    }, {
        24: 24,
        26: 26
    }],
    28: [function(t, e, i) {
        "use strict";
        var n = /^(webkit|moz|ms)/gi;
        e.exports = function(t) {
            return "cssfloat" === t.toLowerCase() ? "float" : (n.test(t) && (t = "-" + t), t.replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2").replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase())
        }
    }, {}],
    29: [function(t, e, i) {
        "use strict";
        var n = /-([a-z])/g;
        e.exports = function(t) {
            return "float" === t.toLowerCase() ? "cssFloat" : ("Ms" === (t = t.replace(n, (function(t, e) {
                return e.toUpperCase()
            }))).substr(0, 2) && (t = "ms" + t.substring(2)), t)
        }
    }, {}],
    30: [function(t, e, i) {
        "use strict";
        e.exports = {
            majorVersionNumber: "3.x"
        }
    }, {}],
    31: [function(t, e, i) {
        "use strict";
        var n, s = t(15).EventEmitterMicro,
            r = t(37),
            a = t(36);

        function o(t) {
            t = t || {}, s.call(this), this.id = a.getNewID(), this.executor = t.executor || r, this._reset(), this._willRun = !1, this._didDestroy = !1
        }(n = o.prototype = Object.create(s.prototype)).run = function() {
            return this._willRun || (this._willRun = !0), this._subscribe()
        }, n.cancel = function() {
            this._unsubscribe(), this._willRun && (this._willRun = !1), this._reset()
        }, n.destroy = function() {
            var t = this.willRun();
            return this.cancel(), this.executor = null, s.prototype.destroy.call(this), this._didDestroy = !0, t
        }, n.willRun = function() {
            return this._willRun
        }, n.isRunning = function() {
            return this._isRunning
        }, n._subscribe = function() {
            return this.executor.subscribe(this)
        }, n._unsubscribe = function() {
            return this.executor.unsubscribe(this)
        }, n._onAnimationFrameStart = function(t) {
            this._isRunning = !0, this._willRun = !1, this._didEmitFrameData || (this._didEmitFrameData = !0, this.trigger("start", t))
        }, n._onAnimationFrameEnd = function(t) {
            this._willRun || (this.trigger("stop", t), this._reset())
        }, n._reset = function() {
            this._didEmitFrameData = !1, this._isRunning = !1
        }, e.exports = o
    }, {
        15: 15,
        36: 36,
        37: 37
    }],
    32: [function(t, e, i) {
        "use strict";
        var n, s = t(16);

        function r(t) {
            t = t || {}, this._reset(), this.updatePhases(), this.eventEmitter = new s, this._willRun = !1, this._totalSubscribeCount = -1, this._requestAnimationFrame = window.requestAnimationFrame, this._cancelAnimationFrame = window.cancelAnimationFrame, this._boundOnAnimationFrame = this._onAnimationFrame.bind(this), this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
        }(n = r.prototype).frameRequestedPhase = "requested", n.startPhase = "start", n.runPhases = ["update", "external", "draw"], n.endPhase = "end", n.disabledPhase = "disabled", n.beforePhaseEventPrefix = "before:", n.afterPhaseEventPrefix = "after:", n.subscribe = function(t, e) {
            return this._totalSubscribeCount++, this._nextFrameSubscribers[t.id] || (e ? this._nextFrameSubscribersOrder.unshift(t.id) : this._nextFrameSubscribersOrder.push(t.id), this._nextFrameSubscribers[t.id] = t, this._nextFrameSubscriberArrayLength++, this._nextFrameSubscriberCount++, this._run()), this._totalSubscribeCount
        }, n.subscribeImmediate = function(t, e) {
            return this._totalSubscribeCount++, this._subscribers[t.id] || (e ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, t.id) : this._subscribersOrder.unshift(t.id), this._subscribers[t.id] = t, this._subscriberArrayLength++, this._subscriberCount++), this._totalSubscribeCount
        }, n.unsubscribe = function(t) {
            return !!this._nextFrameSubscribers[t.id] && (this._nextFrameSubscribers[t.id] = null, this._nextFrameSubscriberCount--, 0 === this._nextFrameSubscriberCount && this._cancel(), !0)
        }, n.getSubscribeID = function() {
            return this._totalSubscribeCount += 1
        }, n.destroy = function() {
            var t = this._cancel();
            return this.eventEmitter.destroy(), this.eventEmitter = null, this.phases = null, this._subscribers = null, this._subscribersOrder = null, this._nextFrameSubscribers = null, this._nextFrameSubscribersOrder = null, this._rafData = null, this._boundOnAnimationFrame = null, this._onExternalAnimationFrame = null, t
        }, n.useExternalAnimationFrame = function(t) {
            if ("boolean" == typeof t) {
                var e = this._isUsingExternalAnimationFrame;
                return t && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), !this._willRun || t || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this._isUsingExternalAnimationFrame = t, t ? this._boundOnExternalAnimationFrame : e || !1
            }
        }, n.updatePhases = function() {
            this.phases || (this.phases = []), this.phases.length = 0, this.phases.push(this.frameRequestedPhase), this.phases.push(this.startPhase), Array.prototype.push.apply(this.phases, this.runPhases), this.phases.push(this.endPhase), this._runPhasesLength = this.runPhases.length, this._phasesLength = this.phases.length
        }, n._run = function() {
            if (!this._willRun) return this._willRun = !0, 0 === this.lastFrameTime && (this.lastFrameTime = performance.now()), this._animationFrameActive = !0, this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)), this.phase === this.disabledPhase && (this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex]), !0
        }, n._cancel = function() {
            var t = !1;
            return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame), this._animationFrame = null), this._animationFrameActive = !1, this._willRun = !1, t = !0), this._isRunning || this._reset(), t
        }, n._onAnimationFrame = function(t) {
            for (this._subscribers = this._nextFrameSubscribers, this._subscribersOrder = this._nextFrameSubscribersOrder, this._subscriberArrayLength = this._nextFrameSubscriberArrayLength, this._subscriberCount = this._nextFrameSubscriberCount, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this.phaseIndex = 0, this.phase = this.phases[this.phaseIndex], this._isRunning = !0, this._willRun = !1, this._didRequestNextRAF = !1, this._rafData.delta = t - this.lastFrameTime, this.lastFrameTime = t, this._rafData.fps = 0, this._rafData.delta >= 1e3 && (this._rafData.delta = 0), 0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta), this._rafData.time = t, this._rafData.naturalFps = this._rafData.fps, this._rafData.timeNow = Date.now(), this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
            for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
                for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
                this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
            }
            for (this.phaseIndex++, this.phase = this.phases[this.phaseIndex], this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase), this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++) null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
            this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase), this._willRun ? (this.phaseIndex = 0, this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
        }, n._onExternalAnimationFrame = function(t) {
            this._isUsingExternalAnimationFrame && this._onAnimationFrame(t)
        }, n._reset = function() {
            this._rafData || (this._rafData = {}), this._rafData.time = 0, this._rafData.delta = 0, this._rafData.fps = 0, this._rafData.naturalFps = 0, this._rafData.timeNow = 0, this._subscribers = {}, this._subscribersOrder = [], this._currentSubscriberIndex = -1, this._subscriberArrayLength = 0, this._subscriberCount = 0, this._nextFrameSubscribers = {}, this._nextFrameSubscribersOrder = [], this._nextFrameSubscriberArrayLength = 0, this._nextFrameSubscriberCount = 0, this._didEmitFrameData = !1, this._animationFrame = null, this._animationFrameActive = !1, this._isRunning = !1, this._shouldReset = !1, this.lastFrameTime = 0, this._runPhaseIndex = -1, this.phaseIndex = -1, this.phase = this.disabledPhase
        }, e.exports = r
    }, {
        16: 16
    }],
    33: [function(t, e, i) {
        "use strict";
        var n = t(35),
            s = function(t) {
                this.phase = t, this.rafEmitter = new n, this._cachePhaseIndex(), this.requestAnimationFrame = this.requestAnimationFrame.bind(this), this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this), this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this), this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this), this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this), this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)), this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart), this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase), this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase), this._frameCallbacks = [], this._currentFrameCallbacks = [], this._nextFrameCallbacks = [], this._phaseActive = !1, this._currentFrameID = -1, this._cancelFrameIdx = -1, this._frameCallbackLength = 0, this._currentFrameCallbacksLength = 0, this._nextFrameCallbacksLength = 0, this._frameCallbackIteration = 0
            },
            r = s.prototype;
        r.requestAnimationFrame = function(t, e) {
            return !0 === e && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0), this._frameCallbacks.push(this._currentFrameID, t), this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1), this._currentFrameCallbacks.push(this._currentFrameID, t), this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(), this._nextFrameCallbacks.push(this._currentFrameID, t), this._nextFrameCallbacksLength += 2), this._currentFrameID
        }, r.cancelAnimationFrame = function(t) {
            this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(t), this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(t), this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(t), this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
        }, r._onRAFExecuted = function(t) {
            for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) this._frameCallbacks[this._frameCallbackIteration + 1](t.time, t);
            this._frameCallbacks.length = 0, this._frameCallbackLength = 0
        }, r._onBeforeRAFExecutorStart = function() {
            Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)), this._currentFrameCallbacksLength = this._nextFrameCallbacksLength, this._nextFrameCallbacks.length = 0, this._nextFrameCallbacksLength = 0
        }, r._onBeforeRAFExecutorPhase = function() {
            this._phaseActive = !0, Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)), this._frameCallbackLength = this._currentFrameCallbacksLength, this._currentFrameCallbacks.length = 0, this._currentFrameCallbacksLength = 0
        }, r._onAfterRAFExecutorPhase = function() {
            this._phaseActive = !1
        }, r._cachePhaseIndex = function() {
            this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
        }, r._cancelRunningAnimationFrame = function() {
            this._frameCallbacks.splice(this._cancelFrameIdx, 2), this._frameCallbackLength -= 2
        }, r._cancelCurrentAnimationFrame = function() {
            this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2), this._currentFrameCallbacksLength -= 2
        }, r._cancelNextAnimationFrame = function() {
            this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2), this._nextFrameCallbacksLength -= 2, 0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel()
        }, e.exports = s
    }, {
        35: 35
    }],
    34: [function(t, e, i) {
        "use strict";
        var n = t(33),
            s = function() {
                this.events = {}
            },
            r = s.prototype;
        r.requestAnimationFrame = function(t) {
            return this.events[t] || (this.events[t] = new n(t)), this.events[t].requestAnimationFrame
        }, r.cancelAnimationFrame = function(t) {
            return this.events[t] || (this.events[t] = new n(t)), this.events[t].cancelAnimationFrame
        }, e.exports = new s
    }, {
        33: 33
    }],
    35: [function(t, e, i) {
        "use strict";
        var n = t(31),
            s = function(t) {
                n.call(this, t)
            };
        (s.prototype = Object.create(n.prototype))._subscribe = function() {
            return this.executor.subscribe(this, !0)
        }, e.exports = s
    }, {
        31: 31
    }],
    36: [function(t, e, i) {
        "use strict";
        var n = t(39).SharedInstance,
            s = t(30).majorVersionNumber,
            r = function() {
                this._currentID = 0
            };
        r.prototype.getNewID = function() {
            return this._currentID++, "raf:" + this._currentID
        }, e.exports = n.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", s, r)
    }, {
        30: 30,
        39: 39
    }],
    37: [function(t, e, i) {
        "use strict";
        var n = t(39).SharedInstance,
            s = t(30).majorVersionNumber,
            r = t(32);
        e.exports = n.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", s, r)
    }, {
        30: 30,
        32: 32,
        39: 39
    }],
    38: [function(t, e, i) {
        "use strict";
        var n = t(34);
        e.exports = n.requestAnimationFrame("update")
    }, {
        34: 34
    }],
    39: [function(t, e, i) {
        "use strict";
        e.exports = {
            SharedInstance: t(40)
        }
    }, {
        40: 40
    }],
    40: [function(t, e, i) {
        "use strict";
        var n, s = window,
            r = s.AC,
            a = (n = {}, {
                get: function(t, e) {
                    var i = null;
                    return n[t] && n[t][e] && (i = n[t][e]), i
                },
                set: function(t, e, i) {
                    return n[t] || (n[t] = {}), n[t][e] = "function" == typeof i ? new i : i, n[t][e]
                },
                share: function(t, e, i) {
                    var n = this.get(t, e);
                    return n || (n = this.set(t, e, i)), n
                },
                remove: function(t, e) {
                    var i = typeof e;
                    if ("string" !== i && "number" !== i) n[t] && (n[t] = null);
                    else {
                        if (!n[t] || !n[t][e]) return;
                        n[t][e] = null
                    }
                }
            });
        r || (r = s.AC = {}), r.SharedInstance || (r.SharedInstance = a), e.exports = r.SharedInstance
    }, {}],
    41: [function(t, e, i) {
        "use strict";

        function n(t) {
            return "x" === t ? window.scrollX || window.pageXOffset : window.scrollY || window.pageYOffset
        }

        function s(t, e, i) {
            return "x" === e ? i ? n("x") : t.scrollLeft : i ? n("y") : t.scrollTop
        }
        e.exports = function(t, e) {
            var i = typeof t;
            e = "string" === i ? t : e;
            var n = (t = t && "string" !== i ? t : window) === window;
            return e && /^[xy]$/i.test(e) ? s(t, e, n) : {
                x: s(t, "x", n),
                y: s(t, "y", n)
            }
        }
    }, {}],
    42: [function(t, e, i) {
        "use strict";
        var n = t(14),
            s = t(44),
            r = t(10).ELEMENT;
        e.exports = function(t, e, i, a) {
            if (s.childNode(t, "ancestors"), s.selector(e, "ancestors"), i && n(t, r) && (!e || t.matches(e))) return t;
            if (t !== (a = a || document.body))
                for (;
                    (t = t.parentNode) && n(t, r);) {
                    if (!e || t.matches(e)) return t;
                    if (t === a) break
                }
            return null
        }
    }, {
        10: 10,
        14: 14,
        44: 44
    }],
    43: [function(t, e, i) {
        "use strict";
        var n = t(14),
            s = t(44),
            r = t(10).ELEMENT;
        e.exports = function(t, e, i, a) {
            var o = [];
            if (s.childNode(t, "ancestors"), s.selector(e, "ancestors"), i && n(t, r) && (!e || t.matches(e)) && o.push(t), t !== (a = a || document.body))
                for (;
                    (t = t.parentNode) && n(t, r) && (e && !t.matches(e) || o.push(t), t !== a););
            return o
        }
    }, {
        10: 10,
        14: 14,
        44: 44
    }],
    44: [function(t, e, i) {
        "use strict";
        var n = t(14),
            s = t(10),
            r = s.COMMENT,
            a = s.DOCUMENT_FRAGMENT,
            o = s.DOCUMENT,
            h = s.ELEMENT,
            c = s.TEXT,
            u = [h, o, a],
            l = [h, c, r];
        e.exports = {
            parentNode: function(t, e) {
                if (!t || !n(t, u)) throw new TypeError(e + ": node must be an Element, Document, or Document Fragment")
            },
            childNode: function(t, e) {
                if (!t || !n(t, l)) throw new TypeError(e + ": node must be an Element, TextNode, or Comment")
            },
            selector: function(t, e, i) {
                if (i = "boolean" == typeof i && i, (t || i) && "string" != typeof t) throw new TypeError(e + ": selector must be a string")
            }
        }
    }, {
        10: 10,
        14: 14
    }],
    45: [function(t, e, i) {
        "use strict";
        var n = t(23),
            s = t(22),
            r = t(48);

        function a(t, e) {
            return void 0 !== e ? !!n(t, e) : !!s(t)
        }
        e.exports = r(a), e.exports.original = a
    }, {
        22: 22,
        23: 23,
        48: 48
    }],
    46: [function(t, e, i) {
        "use strict";
        e.exports = {
            getWindow: function() {
                return window
            },
            getDocument: function() {
                return document
            },
            getNavigator: function() {
                return navigator
            }
        }
    }, {}],
    47: [function(t, e, i) {
        "use strict";
        var n = t(46),
            s = t(49);

        function r() {
            var t = n.getWindow(),
                e = n.getDocument(),
                i = n.getNavigator();
            return !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0)
        }
        e.exports = s(r), e.exports.original = r
    }, {
        46: 46,
        49: 49
    }],
    48: [function(t, e, i) {
        "use strict";
        var n = function() {
            var t, e = "";
            for (t = 0; t < arguments.length; t++) t > 0 && (e += ","), e += arguments[t];
            return e
        };
        e.exports = function(t, e) {
            e = e || n;
            var i = function i() {
                var n = arguments,
                    s = e.apply(this, n);
                return s in i.cache || (i.cache[s] = t.apply(this, n)), i.cache[s]
            };
            return i.cache = {}, i
        }
    }, {}],
    49: [function(t, e, i) {
        "use strict";
        e.exports = function(t) {
            var e;
            return function() {
                return void 0 === e && (e = t.apply(this, arguments)), e
            }
        }
    }, {}],
    50: [function(t, e, i) {
        "use strict";
        e.exports = {
            browser: {
                safari: !1,
                chrome: !1,
                firefox: !1,
                ie: !1,
                opera: !1,
                android: !1,
                edge: !1,
                edgeChromium: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0,
                    documentMode: !1
                }
            },
            os: {
                osx: !1,
                ios: !1,
                android: !1,
                windows: !1,
                linux: !1,
                fireos: !1,
                chromeos: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0
                }
            }
        }
    }, {}],
    51: [function(t, e, i) {
        "use strict";
        e.exports = {
            browser: [{
                name: "edge",
                userAgent: "Edge",
                version: ["rv", "Edge"],
                test: function(t) {
                    return t.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === t.ua
                }
            }, {
                name: "edgeChromium",
                userAgent: "Edge",
                version: ["rv", "Edg"],
                test: function(t) {
                    return t.ua.indexOf("Edg") > -1 && -1 === t.ua.indexOf("Edge")
                }
            }, {
                name: "chrome",
                userAgent: "Chrome"
            }, {
                name: "firefox",
                test: function(t) {
                    return t.ua.indexOf("Firefox") > -1 && -1 === t.ua.indexOf("Opera")
                },
                version: "Firefox"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "safari",
                test: function(t) {
                    return t.ua.indexOf("Safari") > -1 && t.vendor.indexOf("Apple") > -1
                },
                version: "Version"
            }, {
                name: "ie",
                test: function(t) {
                    return t.ua.indexOf("IE") > -1 || t.ua.indexOf("Trident") > -1
                },
                version: ["MSIE", "rv"],
                parseDocumentMode: function() {
                    var t = !1;
                    return document.documentMode && (t = parseInt(document.documentMode, 10)), t
                }
            }, {
                name: "opera",
                userAgent: "Opera",
                version: ["Version", "Opera"]
            }],
            os: [{
                name: "windows",
                test: function(t) {
                    return t.ua.indexOf("Windows") > -1
                },
                version: "Windows NT"
            }, {
                name: "osx",
                userAgent: "Mac",
                test: function(t) {
                    return t.ua.indexOf("Macintosh") > -1
                }
            }, {
                name: "ios",
                test: function(t) {
                    return t.ua.indexOf("iPhone") > -1 || t.ua.indexOf("iPad") > -1
                },
                version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux",
                userAgent: "Linux",
                test: function(t) {
                    return (t.ua.indexOf("Linux") > -1 || t.platform.indexOf("Linux") > -1) && -1 === t.ua.indexOf("Android")
                }
            }, {
                name: "fireos",
                test: function(t) {
                    return t.ua.indexOf("Firefox") > -1 && t.ua.indexOf("Mobile") > -1
                },
                version: "rv"
            }, {
                name: "android",
                userAgent: "Android",
                test: function(t) {
                    return t.ua.indexOf("Android") > -1
                }
            }, {
                name: "chromeos",
                userAgent: "CrOS"
            }]
        }
    }, {}],
    52: [function(t, e, i) {
        "use strict";
        var n = t(50),
            s = t(51);

        function r(t, e) {
            if ("function" == typeof t.parseVersion) return t.parseVersion(e);
            var i, n = t.version || t.userAgent;
            "string" == typeof n && (n = [n]);
            for (var s, r = n.length, a = 0; a < r; a++)
                if ((s = e.match((i = n[a], new RegExp(i + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")))) && s.length > 1) return s[1].replace(/_/g, ".");
            return !1
        }

        function a(t, e, i) {
            for (var n, s, a = t.length, o = 0; o < a; o++)
                if ("function" == typeof t[o].test ? !0 === t[o].test(i) && (n = t[o].name) : i.ua.indexOf(t[o].userAgent) > -1 && (n = t[o].name), n) {
                    if (e[n] = !0, "string" == typeof(s = r(t[o], i.ua))) {
                        var h = s.split(".");
                        e.version.string = s, h && h.length > 0 && (e.version.major = parseInt(h[0] || 0), e.version.minor = parseInt(h[1] || 0), e.version.patch = parseInt(h[2] || 0))
                    } else "edge" === n && (e.version.string = "12.0.0", e.version.major = "12", e.version.minor = "0", e.version.patch = "0");
                    return "function" == typeof t[o].parseDocumentMode && (e.version.documentMode = t[o].parseDocumentMode()), e
                }
            return e
        }
        e.exports = function(t) {
            var e = {};
            return e.browser = a(s.browser, n.browser, t), e.os = a(s.os, n.os, t), e
        }
    }, {
        50: 50,
        51: 51
    }],
    53: [function(t, e, i) {
        "use strict";
        var n = {
            ua: window.navigator.userAgent,
            platform: window.navigator.platform,
            vendor: window.navigator.vendor
        };
        e.exports = t(52)(n)
    }, {
        52: 52
    }],
    54: [function(t, e, i) {
        "use strict";
        var n = t(15).EventEmitterMicro,
            s = t(38),
            r = "viewport-emitter",
            a = {
                removeNamespace: !0
            },
            o = "data-viewport-emitter-dispatch",
            h = "data-viewport-emitter-state",
            c = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)",
            u = "only screen and (orientation: portrait)",
            l = "only screen and (orientation: landscape)",
            d = "change:any",
            _ = "change:orientation",
            m = "change:retina",
            f = "change:viewport";

        function p(t, e) {
            n.call(this), this._id = t || r, this._options = Object.assign({}, a, e), this._allowDOMEventDispatch = !1, this._allowElementStateData = !1, this._options.removeNamespace = "boolean" != typeof this._options.removeNamespace || this._options.removeNamespace, this._el = this._initViewportEl(this._id), this._resizing = !1, this._mediaQueryLists = {
                resolution: {
                    retina: window.matchMedia(c)
                },
                orientation: {
                    portrait: window.matchMedia(u),
                    landscape: window.matchMedia(l)
                }
            }, this._viewport = this._getViewport(this._options.removeNamespace), this._retina = this._getRetina(this._mediaQueryLists.resolution.retina), this._orientation = this._initOrientation(), this._addListeners(), this._updateElementStateData()
        }
        Object.defineProperty(p, "DOM_DISPATCH_ATTRIBUTE", {
            get: function() {
                return o
            }
        }), Object.defineProperty(p, "DOM_STATE_ATTRIBUTE", {
            get: function() {
                return h
            }
        });
        var b = p.prototype = Object.create(n.prototype);
        Object.defineProperty(b, "id", {
            get: function() {
                return this._id
            }
        }), Object.defineProperty(b, "element", {
            get: function() {
                return this._el
            }
        }), Object.defineProperty(b, "mediaQueryLists", {
            get: function() {
                return this._mediaQueryLists
            }
        }), Object.defineProperty(b, "viewport", {
            get: function() {
                return this._viewport
            }
        }), Object.defineProperty(b, "retina", {
            get: function() {
                return this._retina
            }
        }), Object.defineProperty(b, "orientation", {
            get: function() {
                return this._orientation
            }
        }), Object.defineProperty(b, "hasDomDispatch", {
            get: function() {
                return this._allowDOMEventDispatch
            }
        }), b.destroy = function() {
            for (var t in this._removeListeners(), this._options) this._options[t] = null;
            for (var e in this._mediaQueryLists) {
                var i = this._mediaQueryLists[e];
                for (var s in i) i[s] = null
            }
            this._id = null, this._el = null, this._viewport = null, this._retina = null, this._orientation = null, n.prototype.destroy.call(this)
        }, b._initViewportEl = function(t) {
            var e = document.getElementById(t);
            return e || ((e = document.createElement("div")).id = t, e = document.body.appendChild(e)), e.hasAttribute(o) || (e.setAttribute(o, ""), this._allowDOMEventDispatch = !0), e.hasAttribute(h) || (this._allowElementStateData = !0), e
        }, b._dispatch = function(t, e) {
            var i = {
                viewport: this._viewport,
                orientation: this._orientation,
                retina: this._retina
            };
            if (this._allowDOMEventDispatch) {
                var n = new CustomEvent(t, {
                        detail: e
                    }),
                    s = new CustomEvent(d, {
                        detail: i
                    });
                this._el.dispatchEvent(n), this._el.dispatchEvent(s)
            }
            this.trigger(t, e), this.trigger(d, i)
        }, b._addListeners = function() {
            this._onOrientationChange = this._onOrientationChange.bind(this), this._onRetinaChange = this._onRetinaChange.bind(this), this._onViewportChange = this._onViewportChange.bind(this), this._onViewportChangeUpdate = this._onViewportChangeUpdate.bind(this), this._mediaQueryLists.orientation.portrait.addListener(this._onOrientationChange), this._mediaQueryLists.orientation.landscape.addListener(this._onOrientationChange), this._mediaQueryLists.resolution.retina.addListener(this._onRetinaChange), window.addEventListener("resize", this._onViewportChange)
        }, b._removeListeners = function() {
            this._mediaQueryLists.orientation.portrait.removeListener(this._onOrientationChange), this._mediaQueryLists.orientation.landscape.removeListener(this._onOrientationChange), this._mediaQueryLists.resolution.retina.removeListener(this._onRetinaChange), window.removeEventListener("resize", this._onViewportChange)
        }, b._updateElementStateData = function() {
            if (this._allowElementStateData) {
                var t = JSON.stringify({
                    viewport: this._viewport,
                    orientation: this._orientation,
                    retina: this._retina
                });
                this._el.setAttribute(h, t)
            }
        }, b._getViewport = function(t) {
            var e = window.getComputedStyle(this._el, "::before").content;
            return e ? (e = e.replace(/["']/g, ""), t ? e.split(":").pop() : e) : null
        }, b._getRetina = function(t) {
            return t.matches
        }, b._getOrientation = function(t) {
            var e = this._orientation;
            if (t.matches) {
                return t.media.match(/portrait|landscape/)[0]
            }
            return e
        }, b._initOrientation = function() {
            var t = this._getOrientation(this._mediaQueryLists.orientation.portrait);
            return t || this._getOrientation(this._mediaQueryLists.orientation.landscape)
        }, b._onViewportChange = function() {
            this._resizing || (this._resizing = !0, s(this._onViewportChangeUpdate))
        }, b._onViewportChangeUpdate = function() {
            var t = this._viewport;
            if (this._viewport = this._getViewport(this._options.removeNamespace), t !== this._viewport) {
                var e = {
                    from: t,
                    to: this._viewport
                };
                this._updateElementStateData(), this._dispatch(f, e)
            }
            this._resizing = !1
        }, b._onRetinaChange = function(t) {
            var e = this._retina;
            if (this._retina = this._getRetina(t), e !== this._retina) {
                var i = {
                    from: e,
                    to: this._retina
                };
                this._updateElementStateData(), this._dispatch(m, i)
            }
        }, b._onOrientationChange = function(t) {
            var e = this._orientation;
            if (this._orientation = this._getOrientation(t), e !== this._orientation) {
                var i = {
                    from: e,
                    to: this._orientation
                };
                this._updateElementStateData(), this._dispatch(_, i)
            }
        }, e.exports = p
    }, {
        15: 15,
        38: 38
    }],
    55: [function(t, e, i) {
        "use strict";
        var n = t(18),
            s = t(17),
            r = t(56),
            a = function(t) {
                new s(t, r).htmlClass(), n.call(this, t, {
                    className: "ac-ln",
                    selector: "#ac-localnav"
                });
                var e = this.el.querySelectorAll("a.ac-ln-menucta-anchor");
                this._updateComingSoonSubheadClasses(), this._sticky && (this._analyticsRegion = this.el.getAttribute("data-analytics-region"), this._updateAnalyticsRegion = this._updateAnalyticsRegion.bind(this), this._sticky.on("stuck", this._updateAnalyticsRegion), this._sticky.on("unstuck", this._updateAnalyticsRegion)), e.forEach(t => {
                    "button" !== t.getAttribute("role") && t.setAttribute("role", "button")
                }), this._viewports.on("change:viewport", this._onViewportChange.bind(this))
            },
            o = n.prototype,
            h = a.prototype = Object.create(o);
        a.prototype.constructor = a, h._getStickyEnabled = function() {
            return !document.body.classList.contains("ac-platter-content") && (!document.body.classList.contains("ac-platter-page") && o._getStickyEnabled.call(this))
        }, h._updateAnalyticsRegion = function() {
            var t = this._analyticsRegion;
            this._sticky.stuck && (t += " locked"), this.el.setAttribute("data-analytics-region", t)
        }, h._updateComingSoonSubheadClasses = function() {
            if (this.el.querySelector(".ac-ln-title-comingsoon, .ac-ln-title-subhead")) {
                this.el.classList.contains("ac-localnav-stacked") || this.el.classList.add("ac-localnav-stacked");
                const t = getComputedStyle(document.documentElement).getPropertyValue("--r-localnav-stacked-height");
                document.documentElement.style.setProperty("--r-localnav-height", t)
            }
        }, h._onViewportChange = function() {
            this._updateComingSoonSubheadClasses()
        }, e.exports = a
    }, {
        17: 17,
        18: 18,
        56: 56
    }],
    56: [function(t, e, i) {
        "use strict";
        var n = t(47);
        e.exports = {
            touch: n
        }
    }, {
        47: 47
    }],
    57: [function(t, e, i) {
        "use strict";
        var n = t(55),
            s = document.getElementById("ac-localnav");
        s && (e.exports = new n(s))
    }, {
        55: 55
    }]
}, {}, [57]);