(window.webpackJsonp = window.webpackJsonp || []).push([[10], {
  429: function (t, e, n) {
    var o;
    o = function () {
      return function (t) {
        var e = {};

        function n(o) {
          if (e[o]) return e[o].exports;
          var r = e[o] = {i: o, l: !1, exports: {}};
          return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }

        return n.m = t, n.c = e, n.i = function (t) {
          return t
        }, n.d = function (t, e, o) {
          n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: o})
        }, n.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default
          } : function () {
            return t
          };
          return n.d(e, "a", e), e
        }, n.o = function (object, t) {
          return Object.prototype.hasOwnProperty.call(object, t)
        }, n.p = "/dist/", n(n.s = 2)
      }([function (t, e, n) {
        n(8);
        var o = n(6)(n(1), n(7), "data-v-25adc6c0", null);
        t.exports = o.exports
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var o = n(3), r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        e.default = {
          name: "ToggleButton",
          props: {
            value: {type: Boolean, default: !1},
            name: {type: String},
            disabled: {type: Boolean, default: !1},
            tag: {type: String},
            sync: {type: Boolean, default: !1},
            speed: {type: Number, default: 300},
            color: {
              type: [String, Object], validator: function (t) {
                return n.i(o.a)(t) || n.i(o.b)(t, "checked") || n.i(o.b)(t, "unchecked") || n.i(o.b)(t, "disabled")
              }
            },
            switchColor: {
              type: [String, Object], validator: function (t) {
                return n.i(o.a)(t) || n.i(o.b)(t, "checked") || n.i(o.b)(t, "unchecked")
              }
            },
            cssColors: {type: Boolean, default: !1},
            labels: {
              type: [Boolean, Object], default: !1, validator: function (t) {
                return "object" === (void 0 === t ? "undefined" : r(t)) ? t.checked || t.unchecked : "boolean" == typeof t
              }
            },
            height: {type: Number, default: 22},
            width: {type: Number, default: 50},
            margin: {type: Number, default: 3},
            fontSize: {type: Number}
          },
          computed: {
            className: function () {
              return ["vue-js-switch", {toggled: this.toggled, disabled: this.disabled}]
            }, coreStyle: function () {
              return {
                width: n.i(o.c)(this.width),
                height: n.i(o.c)(this.height),
                backgroundColor: this.cssColors ? null : this.disabled ? this.colorDisabled : this.colorCurrent,
                borderRadius: n.i(o.c)(Math.round(this.height / 2))
              }
            }, buttonRadius: function () {
              return this.height - 2 * this.margin
            }, distance: function () {
              return n.i(o.c)(this.width - this.height + this.margin)
            }, buttonStyle: function () {
              var t = "transform " + this.speed + "ms", e = n.i(o.c)(this.margin),
                r = this.toggled ? n.i(o.d)(this.distance, e) : n.i(o.d)(e, e),
                c = this.switchColor ? this.switchColorCurrent : null;
              return {
                width: n.i(o.c)(this.buttonRadius),
                height: n.i(o.c)(this.buttonRadius),
                transition: t,
                transform: r,
                background: c
              }
            }, labelStyle: function () {
              return {lineHeight: n.i(o.c)(this.height), fontSize: this.fontSize ? n.i(o.c)(this.fontSize) : null}
            }, colorChecked: function () {
              var t = this.color;
              return n.i(o.e)(t) ? n.i(o.f)(t, "checked", "#75c791") : t || "#75c791"
            }, colorUnchecked: function () {
              return n.i(o.f)(this.color, "unchecked", "#bfcbd9")
            }, colorDisabled: function () {
              return n.i(o.f)(this.color, "disabled", this.colorCurrent)
            }, colorCurrent: function () {
              return this.toggled ? this.colorChecked : this.colorUnchecked
            }, labelChecked: function () {
              return n.i(o.f)(this.labels, "checked", "on")
            }, labelUnchecked: function () {
              return n.i(o.f)(this.labels, "unchecked", "off")
            }, switchColorChecked: function () {
              return n.i(o.f)(this.switchColor, "checked", "#fff")
            }, switchColorUnchecked: function () {
              return n.i(o.f)(this.switchColor, "unchecked", "#fff")
            }, switchColorCurrent: function () {
              return this.switchColor, n.i(o.e)(this.switchColor) ? this.toggled ? this.switchColorChecked : this.switchColorUnchecked : this.switchColor || "#fff"
            }
          },
          watch: {
            value: function (t) {
              this.sync && (this.toggled = !!t)
            }
          },
          data: function () {
            return {toggled: !!this.value}
          },
          methods: {
            toggle: function (t) {
              var e = !this.toggled;
              this.sync || (this.toggled = e), this.$emit("input", e), this.$emit("change", {
                value: e,
                tag: this.tag,
                srcEvent: t
              })
            }
          }
        }
      }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var o = n(0), r = n.n(o);
        n.d(e, "ToggleButton", (function () {
          return r.a
        }));
        var c = !1;
        e.default = {
          install: function (t) {
            c || (t.component("ToggleButton", r.a), c = !0)
          }
        }
      }, function (t, e, n) {
        "use strict";
        n.d(e, "a", (function () {
          return r
        })), n.d(e, "e", (function () {
          return c
        })), n.d(e, "b", (function () {
          return l
        })), n.d(e, "f", (function () {
          return d
        })), n.d(e, "c", (function () {
          return h
        })), n.d(e, "d", (function () {
          return f
        }));
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r = function (t) {
          return "string" == typeof t
        }, c = function (t) {
          return "object" === (void 0 === t ? "undefined" : o(t))
        }, l = function (object, t) {
          return c(object) && object.hasOwnProperty(t)
        }, d = function (object, t, e) {
          return l(object, t) ? object[t] : e
        }, h = function (t) {
          return t + "px"
        }, f = function (t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0px";
          return "translate3d(" + t + ", " + e + ", " + n + ")"
        }
      }, function (t, e, n) {
        (t.exports = n(5)()).push([t.i, ".vue-js-switch[data-v-25adc6c0]{display:none;position:relative;vertical-align:middle;user-select:none;font-size:10px;cursor:pointer}.vue-js-switch .v-switch-input[data-v-25adc6c0]{opacity:0;position:absolute;width:1px;height:1px}.vue-js-switch .v-switch-label[data-v-25adc6c0]{position:absolute;top:0;font-weight:600;color:#fff;z-index:1}.vue-js-switch .v-switch-label.v-left[data-v-25adc6c0]{left:10px}.vue-js-switch .v-switch-label.v-right[data-v-25adc6c0]{right:10px}.vue-js-switch .v-switch-core[data-v-25adc6c0]{display:block;position:relative;box-sizing:border-box;outline:0;margin:0;transition:border-color .3s,background-color .3s;user-select:none}.vue-js-switch .v-switch-core .v-switch-button[data-v-25adc6c0]{display:block;position:absolute;overflow:hidden;top:0;left:0;border-radius:100%;background-color:#fff;z-index:2}.vue-js-switch.disabled[data-v-25adc6c0]{pointer-events:none;opacity:.6}", ""])
      }, function (t, e) {
        t.exports = function () {
          var t = [];
          return t.toString = function () {
            for (var t = [], i = 0; i < this.length; i++) {
              var e = this[i];
              e[2] ? t.push("@media " + e[2] + "{" + e[1] + "}") : t.push(e[1])
            }
            return t.join("")
          }, t.i = function (e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var o = {}, i = 0; i < this.length; i++) {
              var r = this[i][0];
              "number" == typeof r && (o[r] = !0)
            }
            for (i = 0; i < e.length; i++) {
              var c = e[i];
              "number" == typeof c[0] && o[c[0]] || (n && !c[2] ? c[2] = n : n && (c[2] = "(" + c[2] + ") and (" + n + ")"), t.push(c))
            }
          }, t
        }
      }, function (t, e) {
        t.exports = function (t, e, n, o) {
          var r, c = t = t || {}, l = typeof t.default;
          "object" !== l && "function" !== l || (r = t, c = t.default);
          var d = "function" == typeof c ? c.options : c;
          if (e && (d.render = e.render, d.staticRenderFns = e.staticRenderFns), n && (d._scopeId = n), o) {
            var h = Object.create(d.computed || null);
            Object.keys(o).forEach((function (t) {
              var e = o[t];
              h[t] = function () {
                return e
              }
            })), d.computed = h
          }
          return {esModule: r, exports: c, options: d}
        }
      }, function (t, e) {
        t.exports = {
          render: function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("label", {class: t.className}, [n("input", {
              staticClass: "v-switch-input",
              attrs: {type: "checkbox", name: t.name, disabled: t.disabled},
              domProps: {checked: t.value},
              on: {
                change: function (e) {
                  return e.stopPropagation(), t.toggle(e)
                }
              }
            }), t._v(" "), n("div", {
              staticClass: "v-switch-core",
              style: t.coreStyle
            }, [n("div", {
              staticClass: "v-switch-button",
              style: t.buttonStyle
            })]), t._v(" "), t.labels ? [t.toggled ? n("span", {
              staticClass: "v-switch-label v-left",
              style: t.labelStyle
            }, [t._t("checked", [[t._v(t._s(t.labelChecked))]])], 2) : n("span", {
              staticClass: "v-switch-label v-right",
              style: t.labelStyle
            }, [t._t("unchecked", [[t._v(t._s(t.labelUnchecked))]])], 2)] : t._e()], 2)
          }, staticRenderFns: []
        }
      }, function (t, e, n) {
        var content = n(4);
        "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals), n(9)("2283861f", content, !0)
      }, function (t, e, n) {
        var o = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var r = n(10), c = {}, head = o && (document.head || document.getElementsByTagName("head")[0]), l = null, d = 0,
          h = !1, f = function () {
          }, v = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

        function m(t) {
          for (var i = 0; i < t.length; i++) {
            var e = t[i], n = c[e.id];
            if (n) {
              n.refs++;
              for (var o = 0; o < n.parts.length; o++) n.parts[o](e.parts[o]);
              for (; o < e.parts.length; o++) n.parts.push(w(e.parts[o]));
              n.parts.length > e.parts.length && (n.parts.length = e.parts.length)
            } else {
              var r = [];
              for (o = 0; o < e.parts.length; o++) r.push(w(e.parts[o]));
              c[e.id] = {id: e.id, refs: 1, parts: r}
            }
          }
        }

        function y() {
          var t = document.createElement("style");
          return t.type = "text/css", head.appendChild(t), t
        }

        function w(t) {
          var e, n, o = document.querySelector('style[data-vue-ssr-id~="' + t.id + '"]');
          if (o) {
            if (h) return f;
            o.parentNode.removeChild(o)
          }
          if (v) {
            var r = d++;
            o = l || (l = y()), e = k.bind(null, o, r, !1), n = k.bind(null, o, r, !0)
          } else o = y(), e = S.bind(null, o), n = function () {
            o.parentNode.removeChild(o)
          };
          return e(t), function (o) {
            if (o) {
              if (o.css === t.css && o.media === t.media && o.sourceMap === t.sourceMap) return;
              e(t = o)
            } else n()
          }
        }

        t.exports = function (t, e, n) {
          h = n;
          var o = r(t, e);
          return m(o), function (e) {
            for (var n = [], i = 0; i < o.length; i++) {
              var l = o[i];
              (d = c[l.id]).refs--, n.push(d)
            }
            for (e ? m(o = r(t, e)) : o = [], i = 0; i < n.length; i++) {
              var d;
              if (0 === (d = n[i]).refs) {
                for (var h = 0; h < d.parts.length; h++) d.parts[h]();
                delete c[d.id]
              }
            }
          }
        };
        var _, C = (_ = [], function (t, e) {
          return _[t] = e, _.filter(Boolean).join("\n")
        });

        function k(t, e, n, o) {
          var r = n ? "" : o.css;
          if (t.styleSheet) t.styleSheet.cssText = C(e, r); else {
            var c = document.createTextNode(r), l = t.childNodes;
            l[e] && t.removeChild(l[e]), l.length ? t.insertBefore(c, l[e]) : t.appendChild(c)
          }
        }

        function S(t, e) {
          var n = e.css, o = e.media, r = e.sourceMap;
          if (o && t.setAttribute("media", o), r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), t.styleSheet) t.styleSheet.cssText = n; else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n))
          }
        }
      }, function (t, e) {
        t.exports = function (t, e) {
          for (var n = [], o = {}, i = 0; i < e.length; i++) {
            var r = e[i], c = r[0], l = {id: t + ":" + i, css: r[1], media: r[2], sourceMap: r[3]};
            o[c] ? o[c].parts.push(l) : n.push(o[c] = {id: c, parts: [l]})
          }
          return n
        }
      }])
    }, t.exports = o()
  }, 444: function (t, e, n) {
    var content = n(473);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, n(64).default)("18dea18d", content, !0, {sourceMap: !1})
  }, 472: function (t, e, n) {
    "use strict";
    n(444)
  }, 473: function (t, e, n) {
    (e = n(63)(!1)).push([t.i, ".Scoreboard table .place{padding-right:1rem;width:6rem;text-align:right}.Scoreboard .team{max-width:18rem;text-overflow:ellipsis;overflow:hidden}.Scoreboard .team-flag{display:inline-block;width:27px;height:18px;background-size:contain;background-position:50%;background-repeat:no-repeat}.Scoreboard tr.active{background:rgba(255,0,0,.3)}", ""]), t.exports = e
  }, 496: function (t, e, n) {
    "use strict";
    n.r(e);
    n(21), n(11), n(10), n(6), n(17), n(12);
    var o = n(2), r = n(4), c = n(23), l = n(123), d = n(1), h = n(429);

    function f(object, t) {
      var e = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(object, t).enumerable
        }))), e.push.apply(e, n)
      }
      return e
    }

    function v(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? f(Object(source), !0).forEach((function (e) {
          Object(r.a)(t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }

    d.default.component("ToggleButton", h.ToggleButton);
    var m = {
      components: {IsoLink: l.a},
      data: function () {
        return {mode: !0}
      },
      computed: v(v({}, Object(c.b)({scoreboard: "scoreboard/getScoreboard"})), Object(c.c)({
        isStatic: "isStatic",
        myTeam: "team"
      })),
      asyncData: function (t) {
        return Object(o.a)(regeneratorRuntime.mark((function e() {
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, t.store.dispatch("scoreboard/update", t);
              case 2:
              case"end":
                return e.stop()
            }
          }), e)
        })))()
      },
      mounted: function () {
        var t = this;
        this.isStatic || (this.interval = setInterval((function () {
          t.$store.dispatch("scoreboard/update", {$axios: t.$axios})
        }), 6e4))
      },
      destroyed: function () {
        clearInterval(this.interval)
      },
      methods: {
        getFlagStyle: function (t) {
          return null === t || "" === t ? {backgroundColor: "transparent"} : {backgroundImage: "url(https://cdn.jsdelivr.net/gh/behdad/region-flags@gh-pages/svg/".concat(t.toUpperCase(), ".svg)")}
        }
      },
      head: function () {
        return {title: "Scoreboard - NY QUEST 2021"}
      }
    }, y = (n(472), n(29)), component = Object(y.a)(m, (function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("section", {staticClass: "Scoreboard"}, [n("h2", {staticClass: "title"}, [t._m(0), t._v(" "), n("div", [n("toggle-button", {
        attrs: {
          labels: {
            checked: "Test",
            unchecked: "CTF"
          },
          width: 100,
          height: 30,
          color: {checked: "#FFFAFA", unchecked: "#FFFAFA", disabled: "#CCCCCC"},
          "switch-color": {checked: "#000000", unchecked: "#000000"}
        }, model: {
          value: t.mode, callback: function (e) {
            t.mode = e
          }, expression: "mode"
        }
      })], 1)]), t._v(" "), n("div", {staticClass: "table-wrap"}, [n("table", {staticClass: "scoreboard"}, [t._m(1), t._v(" "), n("tbody", [t.mode ? t._e() : t._l(t.scoreboard.other, (function (e) {
        return e.hidden ? t._e() : n("tr", {
          key: e.name,
          class: {active: e.account_id === t.myTeam.id}
        }, [n("th", {
          staticClass: "place",
          attrs: {scope: "row"}
        }, [t._v(t._s(e.pos))]), t._v(" "), n("td", {staticClass: "team"}, [n("div", {
          staticClass: "team-flag",
          style: t.getFlagStyle(e.country)
        }), t._v(" "), n("iso-link", {attrs: {to: "/teams/" + e.account_id}}, [t._v(t._s(e.name))])], 1), t._v(" "), n("td", [t._v(t._s(e.score))])])
      })), t._v(" "), t.mode ? t._l(t.scoreboard.test, (function (e) {
        return e.hidden ? t._e() : n("tr", {
          key: e.name,
          class: {active: e.account_id === t.myTeam.id}
        }, [n("th", {
          staticClass: "place",
          attrs: {scope: "row"}
        }, [t._v(t._s(e.pos))]), t._v(" "), n("td", {staticClass: "team"}, [n("div", {
          staticClass: "team-flag",
          style: t.getFlagStyle(e.country)
        }), t._v(" "), n("iso-link", {attrs: {to: "/teams/" + e.account_id}}, [t._v(t._s(e.name))])], 1), t._v(" "), n("td", [t._v(t._s(e.score))])])
      })) : t._e()], 2)])])])
    }), [function () {
      var t = this.$createElement, e = this._self._c || t;
      return e("span", [this._v("Score"), e("wbr"), this._v("board")])
    }, function () {
      var t = this.$createElement, e = this._self._c || t;
      return e("thead", [e("tr", [e("td", {
        staticClass: "place",
        attrs: {scope: "col"}
      }, [e("b", [this._v("Place")])]), this._v(" "), e("td", {attrs: {scope: "col"}}, [e("b", [this._v("Team")])]), this._v(" "), e("td", {attrs: {scope: "col"}}, [e("b", [this._v("Score")])])])])
    }], !1, null, null, null);
    e.default = component.exports
  }
}]);