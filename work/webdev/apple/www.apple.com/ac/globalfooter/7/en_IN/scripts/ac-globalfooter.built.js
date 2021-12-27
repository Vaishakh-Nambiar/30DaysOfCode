! function t(e, i, n) {
    function r(o, c) {
        if (!i[o]) {
            if (!e[o]) {
                var a = "function" == typeof require && require;
                if (!c && a) return a(o, !0);
                if (s) return s(o, !0);
                var l = new Error("Cannot find module '" + o + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var h = i[o] = {
                exports: {}
            };
            e[o][0].call(h.exports, (function(t) {
                return r(e[o][1][t] || t)
            }), h, h.exports, t, e, i, n)
        }
        return i[o].exports
    }
    for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
    return r
}({
    1: [function(t, e, i) {
        "use strict";
        const n = t(2),
            r = {
                className: "footer"
            };
        e.exports = class {
            constructor(t, e) {
                e = Object.assign({}, r, e), this.el = t, this._selectors = {
                    wrapper: "." + e.className,
                    directory: e.directorySelector || `.${e.className}-directory`,
                    mini: e.miniSelector || `.${e.className}-mini`
                }, this._initializeDirectory(), this._initializeLangLink()
            }
            _initializeDirectory() {
                if (this._directory = this.el.querySelector(this._selectors.directory), !this._directory) return;
                this._directory.querySelectorAll(this._selectors.directory + "-column-section-state").forEach(t => {
                    const e = t.nextElementSibling,
                        i = e.querySelector(this._selectors.directory + "-column-section-anchor-open"),
                        r = e.querySelector(this._selectors.directory + "-column-section-anchor-close");
                    n.create(t, i, r)
                })
            }
            _initializeLangLink() {
                if (this._langLink = this.el.querySelector(this._selectors.mini + "-locale-lang"), !this._langLink) return;
                let t = window.location.pathname;
                const e = this._langLink.getAttribute("data-locale-current"),
                    i = this._langLink.pathname;
                if (t.includes(e)) {
                    t = t.replace(e, i);
                    t.startsWith("/") || (t = "/" + t), this._langLink.href = t
                }
            }
        }
    }, {
        2: 2
    }],
    2: [function(t, e, i) {
        "use strict";
        class n {
            constructor(t, e, i) {
                this.el = t, this.anchorOpen = e, this.anchorClose = i, this._lastOpen = this.el.checked, this.el.addEventListener("change", this.update.bind(this)), this.anchorOpen.addEventListener("click", this._anchorOpenClick.bind(this)), this.anchorClose.addEventListener("click", this._anchorCloseClick.bind(this)), window.location.hash === "#" + t.id && (window.location.hash = "")
            }
            static create(t, e, i) {
                return new n(t, e, i)
            }
            update() {
                const t = this.isOpen();
                t !== this._lastOpen && (this._lastOpen = t)
            }
            isOpen() {
                return this.el.checked
            }
            toggle() {
                this.isOpen() ? this.close() : this.open()
            }
            open() {
                this.el.checked || (this.el.checked = !0, this.update())
            }
            close() {
                this.el.checked && (this.el.checked = !1, this.update())
            }
            _anchorOpenClick(t) {
                t.preventDefault(), this.open(), this.anchorClose.focus()
            }
            _anchorCloseClick(t) {
                t.preventDefault(), this.close(), this.anchorOpen.focus()
            }
        }
        e.exports = n
    }, {}],
    3: [function(t, e, i) {
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
    4: [function(t, e, i) {
        e.exports = function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
    }, {}],
    5: [function(t, e, i) {
        e.exports = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, {}],
    6: [function(t, e, i) {
        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        e.exports = function(t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t
        }
    }, {}],
    7: [function(t, e, i) {
        function n(t) {
            return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, n(t)
        }
        e.exports = n
    }, {}],
    8: [function(t, e, i) {
        var n = t(11);
        e.exports = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && n(t, e)
        }
    }, {
        11: 11
    }],
    9: [function(t, e, i) {
        e.exports = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
    }, {}],
    10: [function(t, e, i) {
        var n = t(12),
            r = t(4);
        e.exports = function(t, e) {
            return !e || "object" !== n(e) && "function" != typeof e ? r(t) : e
        }
    }, {
        12: 12,
        4: 4
    }],
    11: [function(t, e, i) {
        function n(t, i) {
            return e.exports = n = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            }, n(t, i)
        }
        e.exports = n
    }, {}],
    12: [function(t, e, i) {
        function n(t) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = n = function(t) {
                return typeof t
            } : e.exports = n = function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, n(t)
        }
        e.exports = n
    }, {}],
    13: [function(t, e, i) {
        "use strict";
        var n = t(14),
            r = document.getElementById("ac-globalfooter");
        r && (e.exports = new n(r))
    }, {
        14: 14
    }],
    14: [function(t, e, i) {
        "use strict";
        var n = t(9),
            r = n(t(5)),
            s = n(t(6)),
            o = n(t(8)),
            c = n(t(10)),
            a = n(t(7));

        function l(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var i, n = (0, a.default)(t);
                if (e) {
                    var r = (0, a.default)(this).constructor;
                    i = Reflect.construct(n, arguments, r)
                } else i = n.apply(this, arguments);
                return (0, c.default)(this, i)
            }
        }
        var h = t(1),
            u = t(3),
            f = function(t) {
                (0, o.default)(i, t);
                var e = l(i);

                function i(t) {
                    var n;
                    return (0, r.default)(this, i), n = e.call(this, t, {
                        className: "ac-gf",
                        miniSelector: ".ac-gf-footer"
                    }), new u(t).htmlClass(), n._initializeBuyStrip(), n
                }
                return (0, s.default)(i, [{
                    key: "_initializeBuyStrip",
                    value: function() {
                        var t = this;
                        (this._buystrip = this.el.querySelector("".concat(this._selectors.wrapper, "-buystrip")), this._buystrip) && (this._buystrip.querySelectorAll("".concat(this._selectors.wrapper, "-buystrip-info-content")).forEach((function(e) {
                            t._makeBlockLink(e)
                        })), this._initializeChatLink())
                    }
                }, {
                    key: "_makeBlockLink",
                    value: function(t) {
                        var e = t.querySelector("a");
                        if (e) {
                            var i = document.createElement("a");
                            i.className = "ac-gf-block", i.href = e.href, "analyticsTitle" in e.dataset && (i.dataset.analyticsTitle = e.dataset.analyticsTitle), "analyticsExitLink" in e.dataset && (i.dataset.analyticsExitLink = e.dataset.analyticsExitLink);
                            var n = document.createElement("span");
                            for (n.className = "".concat(e.className, " ac-gf-block-link"), n.innerHTML = e.innerHTML, e.parentNode.classList.add("with-cta"), e.parentNode.replaceChild(n, e), t.insertBefore(i, t.firstChild); t.childNodes.length > 1;) {
                                var r = t.childNodes[1];
                                if (r.href) break;
                                i.appendChild(r)
                            }
                        }
                    }
                }, {
                    key: "_initializeChatLink",
                    value: function() {
                        if (this._chatLink = this._buystrip.querySelector("".concat(this._selectors.wrapper, "-buystrip-info-cta-chat")), this._chatLink) {
                            var t = this._chatLink.parentNode;
                            t.href && (this._chatLink = t), this._onChatLinkClick = this._onChatLinkClick.bind(this), this._chatLink.addEventListener("click", this._onChatLinkClick)
                        }
                    }
                }, {
                    key: "_onChatLinkClick",
                    value: function(t) {
                        t.preventDefault(), window.open(this._chatLink.href, "chat", "width=375,height=773")
                    }
                }]), i
            }(h);
        e.exports = f
    }, {
        1: 1,
        10: 10,
        3: 3,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9
    }]
}, {}, [13]);