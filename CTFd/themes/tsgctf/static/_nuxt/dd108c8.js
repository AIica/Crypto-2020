(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
  0: function (t, e, n) {
    "use strict";
    n.d(e, "k", (function () {
      return y
    })), n.d(e, "m", (function () {
      return x
    })), n.d(e, "l", (function () {
      return w
    })), n.d(e, "e", (function () {
      return O
    })), n.d(e, "b", (function () {
      return j
    })), n.d(e, "s", (function () {
      return k
    })), n.d(e, "g", (function () {
      return _
    })), n.d(e, "h", (function () {
      return C
    })), n.d(e, "d", (function () {
      return S
    })), n.d(e, "r", (function () {
      return $
    })), n.d(e, "j", (function () {
      return T
    })), n.d(e, "t", (function () {
      return P
    })), n.d(e, "o", (function () {
      return E
    })), n.d(e, "q", (function () {
      return A
    })), n.d(e, "f", (function () {
      return D
    })), n.d(e, "c", (function () {
      return M
    })), n.d(e, "i", (function () {
      return N
    })), n.d(e, "p", (function () {
      return L
    })), n.d(e, "a", (function () {
      return V
    })), n.d(e, "n", (function () {
      return W
    })), n.d(e, "u", (function () {
      return J
    }));
    n(21), n(44), n(11), n(38), n(57), n(75);
    var r = n(22), o = (n(125), n(219), n(48)), c = (n(35), n(36), n(220), n(222), n(224), n(225), n(85), n(12), n(2)),
      f = (n(20), n(10), n(6), n(17), n(25), n(4)), l = n(1);

    function d(object, t) {
      var e = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(object, t).enumerable
        }))), e.push.apply(e, n)
      }
      return e
    }

    function h(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? d(Object(source), !0).forEach((function (e) {
          Object(f.a)(t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }

    function m(t, e) {
      var n;
      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (n = function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return v(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(t, e)
        }(t)) || e && t && "number" == typeof t.length) {
          n && (t = n);
          var i = 0, r = function () {
          };
          return {
            s: r, n: function () {
              return i >= t.length ? {done: !0} : {done: !1, value: t[i++]}
            }, e: function (t) {
              throw t
            }, f: r
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var o, c = !0, f = !1;
      return {
        s: function () {
          n = t[Symbol.iterator]()
        }, n: function () {
          var t = n.next();
          return c = t.done, t
        }, e: function (t) {
          f = !0, o = t
        }, f: function () {
          try {
            c || null == n.return || n.return()
          } finally {
            if (f) throw o
          }
        }
      }
    }

    function v(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n
    }

    function y(t) {
      l.default.config.errorHandler && l.default.config.errorHandler(t)
    }

    function x(t) {
      return t.then((function (t) {
        return t.default || t
      }))
    }

    function w(t) {
      return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
    }

    function O(t) {
      var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], r = t.$children || [], o = m(r);
      try {
        for (o.s(); !(e = o.n()).done;) {
          var c = e.value;
          c.$fetch ? n.push(c) : c.$children && O(c, n)
        }
      } catch (t) {
        o.e(t)
      } finally {
        o.f()
      }
      return n
    }

    function j(t, e) {
      if (e || !t.options.__hasNuxtData) {
        var n = t.options._originDataFn || t.options.data || function () {
          return {}
        };
        t.options._originDataFn = n, t.options.data = function () {
          var data = n.call(this, this);
          return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), h(h({}, data), e)
        }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
      }
    }

    function k(t) {
      return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = l.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
    }

    function _(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
      return Array.prototype.concat.apply([], t.matched.map((function (t, r) {
        return Object.keys(t[n]).map((function (o) {
          return e && e.push(r), t[n][o]
        }))
      })))
    }

    function C(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return _(t, e, "instances")
    }

    function S(t, e) {
      return Array.prototype.concat.apply([], t.matched.map((function (t, n) {
        return Object.keys(t.components).reduce((function (r, o) {
          return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
        }), [])
      })))
    }

    function $(t, e) {
      return Promise.all(S(t, function () {
        var t = Object(c.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
          return regeneratorRuntime.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                if ("function" != typeof n || n.options) {
                  t.next = 4;
                  break
                }
                return t.next = 3, n();
              case 3:
                n = t.sent;
              case 4:
                return o.components[c] = n = k(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
              case 6:
              case"end":
                return t.stop()
            }
          }), t)
        })));
        return function (e, n, r, o) {
          return t.apply(this, arguments)
        }
      }()))
    }

    function T(t) {
      return R.apply(this, arguments)
    }

    function R() {
      return (R = Object(c.a)(regeneratorRuntime.mark((function t(e) {
        return regeneratorRuntime.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              if (e) {
                t.next = 2;
                break
              }
              return t.abrupt("return");
            case 2:
              return t.next = 4, $(e);
            case 4:
              return t.abrupt("return", h(h({}, e), {}, {
                meta: _(e).map((function (t, n) {
                  return h(h({}, t.options.meta), (e.matched[n] || {}).meta)
                }))
              }));
            case 5:
            case"end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function P(t, e) {
      return I.apply(this, arguments)
    }

    function I() {
      return (I = Object(c.a)(regeneratorRuntime.mark((function t(e, n) {
        var c, f, l, d;
        return regeneratorRuntime.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return e.context || (e.context = {
                isStatic: !0,
                isDev: !1,
                isHMR: !1,
                app: e,
                store: e.store,
                payload: n.payload,
                error: n.error,
                base: "/ctf/",
                env: {session: ""}
              }, n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function (t, path, n) {
                if (t) {
                  e.context._redirected = !0;
                  var r = Object(o.a)(path);
                  if ("number" == typeof t || "undefined" !== r && "object" !== r || (n = path || {}, path = t, r = Object(o.a)(path), t = 302), "object" === r && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = K(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                  e.context.next({path: path, query: n, status: t})
                }
              }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([T(n.route), T(n.from)]);
            case 3:
              c = t.sent, f = Object(r.a)(c, 2), l = f[0], d = f[1], n.route && (e.context.route = l), n.from && (e.context.from = d), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
            case 15:
            case"end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    function E(t, e) {
      return !t.length || e._redirected || e._errored ? Promise.resolve() : A(t[0], e).then((function () {
        return E(t.slice(1), e)
      }))
    }

    function A(t, e) {
      var n;
      return (n = 2 === t.length ? new Promise((function (n) {
        t(e, (function (t, data) {
          t && e.error(t), n(data = data || {})
        }))
      })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
    }

    function D(base, t) {
      var path = decodeURI(window.location.pathname);
      return "hash" === t ? window.location.hash.replace(/^#\//, "") : (base && (path.endsWith("/") ? path : path + "/").startsWith(base) && (path = path.slice(base.length)), (path || "/") + window.location.search + window.location.hash)
    }

    function M(t, e) {
      return function (t, e) {
        for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(o.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", z(e)));
        return function (e, r) {
          for (var path = "", data = e || {}, o = (r || {}).pretty ? B : encodeURIComponent, c = 0; c < t.length; c++) {
            var f = t[c];
            if ("string" != typeof f) {
              var l = data[f.name || "pathMatch"], d = void 0;
              if (null == l) {
                if (f.optional) {
                  f.partial && (path += f.prefix);
                  continue
                }
                throw new TypeError('Expected "' + f.name + '" to be defined')
              }
              if (Array.isArray(l)) {
                if (!f.repeat) throw new TypeError('Expected "' + f.name + '" to not repeat, but received `' + JSON.stringify(l) + "`");
                if (0 === l.length) {
                  if (f.optional) continue;
                  throw new TypeError('Expected "' + f.name + '" to not be empty')
                }
                for (var h = 0; h < l.length; h++) {
                  if (d = o(l[h]), !n[c].test(d)) throw new TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '", but received `' + JSON.stringify(d) + "`");
                  path += (0 === h ? f.prefix : f.delimiter) + d
                }
              } else {
                if (d = f.asterisk ? B(l, !0) : o(l), !n[c].test(d)) throw new TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but received "' + d + '"');
                path += f.prefix + d
              }
            } else path += f
          }
          return path
        }
      }(function (t, e) {
        var n, r = [], o = 0, c = 0, path = "", f = e && e.delimiter || "/";
        for (; null != (n = U.exec(t));) {
          var l = n[0], d = n[1], h = n.index;
          if (path += t.slice(c, h), c = h + l.length, d) path += d[1]; else {
            var m = t[c], v = n[2], y = n[3], x = n[4], w = n[5], O = n[6], j = n[7];
            path && (r.push(path), path = "");
            var k = null != v && null != m && m !== v, _ = "+" === O || "*" === O, C = "?" === O || "*" === O,
              S = n[2] || f, pattern = x || w;
            r.push({
              name: y || o++,
              prefix: v || "",
              delimiter: S,
              optional: C,
              repeat: _,
              partial: k,
              asterisk: Boolean(j),
              pattern: pattern ? F(pattern) : j ? ".*" : "[^" + G(S) + "]+?"
            })
          }
        }
        c < t.length && (path += t.substr(c));
        path && r.push(path);
        return r
      }(t, e), e)
    }

    function N(t, e) {
      var n = {}, r = h(h({}, t), e);
      for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
      return n
    }

    function L(t) {
      var e;
      if (t.message || "string" == typeof t) e = t.message || t; else try {
        e = JSON.stringify(t, null, 2)
      } catch (n) {
        e = "[".concat(t.constructor.name, "]")
      }
      return h(h({}, t), {}, {
        message: e,
        statusCode: t.statusCode || t.status || t.response && t.response.status || 500
      })
    }

    window.onNuxtReadyCbs = [], window.onNuxtReady = function (t) {
      window.onNuxtReadyCbs.push(t)
    };
    var U = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

    function B(t, e) {
      var n = e ? /[?#]/g : /[/?#]/g;
      return encodeURI(t).replace(n, (function (t) {
        return "%" + t.charCodeAt(0).toString(16).toUpperCase()
      }))
    }

    function G(t) {
      return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
    }

    function F(t) {
      return t.replace(/([=!:$/()])/g, "\\$1")
    }

    function z(t) {
      return t && t.sensitive ? "" : "i"
    }

    function K(t, e) {
      var n, o = t.indexOf("://");
      -1 !== o ? (n = t.substring(0, o), t = t.substring(o + 3)) : t.startsWith("//") && (t = t.substring(2));
      var c, f = t.split("/"), l = (n ? n + "://" : "//") + f.shift(), path = f.join("/");
      if ("" === path && 1 === f.length && (l += "/"), 2 === (f = path.split("#")).length) {
        var d = f, h = Object(r.a)(d, 2);
        path = h[0], c = h[1]
      }
      return l += path ? "/" + path : "", e && "{}" !== JSON.stringify(e) && (l += (2 === t.split("?").length ? "&" : "?") + function (t) {
        return Object.keys(t).sort().map((function (e) {
          var n = t[e];
          return null == n ? "" : Array.isArray(n) ? n.slice().map((function (t) {
            return [e, "=", t].join("")
          })).join("&") : e + "=" + n
        })).filter(Boolean).join("&")
      }(e)), l += c ? "#" + c : ""
    }

    function V(t, e, n) {
      t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
    }

    function H(path) {
      return path.replace(/\/+$/, "") || "/"
    }

    function W(t, e) {
      return H(t) === H(e)
    }

    function J(t) {
      try {
        window.history.scrollRestoration = t
      } catch (t) {
      }
    }
  }, 119: function (t, e, n) {
    "use strict";
    e.a = {}
  }, 121: function (t, e, n) {
    n(12);
    var r = n(334);

    function o() {
      return (o = r(regeneratorRuntime.mark((function t() {
        var e, r, o;
        return regeneratorRuntime.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              if (!(!1 in navigator)) {
                t.next = 2;
                break
              }
              throw new Error("serviceWorker is not supported in current browser!");
            case 2:
              return t.next = 4, n.e(18).then(n.bind(null, 420));
            case 4:
              return e = t.sent, r = e.Workbox, o = new r("/ctf/sw.js", {scope: "/ctf/"}), t.next = 9, o.register();
            case 9:
              return t.abrupt("return", o);
            case 10:
            case"end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    window.$workbox = function () {
      return o.apply(this, arguments)
    }().catch((function (t) {
    }))
  }, 122: function (t, e, n) {
    "use strict";
    (function (t) {
      e.a = function (e, n) {
        e.app.isStatic = "true" === t.env.NUXT_ENV_STATIC
      }
    }).call(this, n(76))
  }, 123: function (t, e, n) {
    "use strict";
    n(21), n(11), n(10), n(6), n(17);
    var r = n(4), o = n(23);

    function c(object, t) {
      var e = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(object, t).enumerable
        }))), e.push.apply(e, n)
      }
      return e
    }

    var f = {
      props: {to: {required: !0, type: String}}, computed: function (t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? c(Object(source), !0).forEach((function (e) {
            Object(r.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }({}, Object(o.c)(["isStatic"]))
    }, l = n(29), component = Object(l.a)(f, (function () {
      var t = this.$createElement, e = this._self._c || t;
      return this.isStatic ? e("a", {attrs: {href: this.to}}, [this._t("default")], 2) : e("nuxt-link", {attrs: {to: this.to}}, [this._t("default")], 2)
    }), [], !1, null, null, null);
    e.a = component.exports
  }, 144: function (t, e, n) {
    var content = n(229);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, n(64).default)("72daabed", content, !0, {sourceMap: !1})
  }, 145: function (t, e, n) {
    var content = n(231);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, n(64).default)("3191d5ad", content, !0, {sourceMap: !1})
  }, 146: function (t, e, n) {
    var content = n(233);
    "string" == typeof content && (content = [[t.i, content, ""]]), content.locals && (t.exports = content.locals);
    (0, n(64).default)("932a8f60", content, !0, {sourceMap: !1})
  }, 192: function (t, e, n) {
    "use strict";
    n(6), n(12);
    var r = n(2), o = n(1), c = n(0), f = window.__NUXT__;

    function l() {
      if (!this._hydrated) return this.$fetch()
    }

    function d() {
      if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
        var t;
        this._hydrated = !0, this._fetchKey = +this.$vnode.elm.dataset.fetchKey;
        var data = f.fetch[this._fetchKey];
        if (data && data._error) this.$fetchState.error = data._error; else for (var e in data) o.default.set(this.$data, e, data[e])
      }
    }

    function h() {
      var t = this;
      return this._fetchPromise || (this._fetchPromise = m.call(this).then((function () {
        delete t._fetchPromise
      }))), this._fetchPromise
    }

    function m() {
      return v.apply(this, arguments)
    }

    function v() {
      return (v = Object(r.a)(regeneratorRuntime.mark((function t() {
        var e, n, r, o = this;
        return regeneratorRuntime.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
            case 9:
              t.next = 15;
              break;
            case 11:
              t.prev = 11, t.t0 = t.catch(6), e = Object(c.p)(t.t0);
            case 15:
              if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                t.next = 19;
                break
              }
              return t.next = 19, new Promise((function (t) {
                return setTimeout(t, r)
              }));
            case 19:
              this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function () {
                return o.$nuxt.nbFetching--
              }));
            case 23:
            case"end":
              return t.stop()
          }
        }), t, this, [[6, 11]])
      })))).apply(this, arguments)
    }

    e.a = {
      beforeCreate: function () {
        Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
          pending: !1,
          error: null,
          timestamp: Date.now()
        }), this.$fetch = h.bind(this), Object(c.a)(this, "created", d), Object(c.a)(this, "beforeMount", l))
      }
    }
  }, 198: function (t, e, n) {
    t.exports = n(199)
  }, 199: function (t, e, n) {
    "use strict";
    n.r(e), function (t) {
      n(44), n(11), n(38), n(35), n(36), n(20);
      var e = n(48), r = (n(12), n(208), n(2)),
        o = (n(57), n(75), n(10), n(6), n(17), n(25), n(139), n(211), n(215), n(217), n(1)), c = n(182), f = n(119),
        l = n(0), d = n(28), h = n(192), m = n(84);

      function v(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (Array.isArray(t) || (n = function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return y(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
          }(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var i = 0, r = function () {
            };
            return {
              s: r, n: function () {
                return i >= t.length ? {done: !0} : {done: !1, value: t[i++]}
              }, e: function (t) {
                throw t
              }, f: r
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, c = !0, f = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]()
          }, n: function () {
            var t = n.next();
            return c = t.done, t
          }, e: function (t) {
            f = !0, o = t
          }, f: function () {
            try {
              c || null == n.return || n.return()
            } finally {
              if (f) throw o
            }
          }
        }
      }

      function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
        return n
      }

      o.default.__nuxt__fetch__mixin__ || (o.default.mixin(h.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(m.a.name, m.a), o.default.component("NLink", m.a), t.fetch || (t.fetch = c.a);
      var x, w, O = [], j = window.__NUXT__ || {};
      Object.assign(o.default.config, {silent: !0, performance: !1});
      var k = o.default.config.errorHandler || console.error;

      function _(t, e, n) {
        for (var r = function (component) {
          var t = function (component, t) {
            if (!component || !component.options || !component.options[t]) return {};
            var option = component.options[t];
            if ("function" == typeof option) {
              for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
              return option.apply(void 0, n)
            }
            return option
          }(component, "transition", e, n) || {};
          return "string" == typeof t ? {name: t} : t
        }, o = n ? Object(l.g)(n) : [], c = Math.max(t.length, o.length), f = [], d = function (i) {
          var e = Object.assign({}, r(t[i])), n = Object.assign({}, r(o[i]));
          Object.keys(e).filter((function (t) {
            return void 0 !== e[t] && !t.toLowerCase().includes("leave")
          })).forEach((function (t) {
            n[t] = e[t]
          })), f.push(n)
        }, i = 0; i < c; i++) d(i);
        return f
      }

      function C(t, e, n) {
        return S.apply(this, arguments)
      }

      function S() {
        return (S = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
          var o, c, f, d, h = this;
          return regeneratorRuntime.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                if (this._routeChanged = Boolean(x.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(l.i)(e.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                  t.next = 12;
                  break
                }
                return t.next = 9, Object(l.r)(e, (function (t, e) {
                  return {Component: t, instance: e}
                }));
              case 9:
                o = t.sent, o.some((function (t) {
                  var r = t.Component, o = t.instance, c = r.options.watchQuery;
                  return !0 === c || (Array.isArray(c) ? c.some((function (t) {
                    return h._diffQuery[t]
                  })) : "function" == typeof c && c.apply(o, [e.query, n.query]))
                })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
              case 12:
                r(), t.next = 26;
                break;
              case 15:
                if (t.prev = 15, t.t0 = t.catch(5), c = t.t0 || {}, f = c.statusCode || c.status || c.response && c.response.status || 500, d = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(d)) {
                  t.next = 23;
                  break
                }
                return window.location.reload(!0), t.abrupt("return");
              case 23:
                this.error({statusCode: f, message: d}), this.$nuxt.$emit("routeChanged", e, n, c), r();
              case 26:
              case"end":
                return t.stop()
            }
          }), t, this, [[5, 15]])
        })))).apply(this, arguments)
      }

      function $(t, e) {
        return j.serverRendered && e && Object(l.b)(t, e), t._Ctor = t, t
      }

      function T(t) {
        var path = Object(l.f)(t.options.base, t.options.mode);
        return Object(l.d)(t.match(path), function () {
          var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
            var f;
            return regeneratorRuntime.wrap((function (t) {
              for (; ;) switch (t.prev = t.next) {
                case 0:
                  if ("function" != typeof e || e.options) {
                    t.next = 4;
                    break
                  }
                  return t.next = 3, e();
                case 3:
                  e = t.sent;
                case 4:
                  return f = $(Object(l.s)(e), j.data ? j.data[c] : null), r.components[o] = f, t.abrupt("return", f);
                case 7:
                case"end":
                  return t.stop()
              }
            }), t)
          })));
          return function (e, n, r, o, c) {
            return t.apply(this, arguments)
          }
        }())
      }

      function R(t, e, n) {
        var r = this, o = [], c = !1;
        if (void 0 !== n && (o = [], (n = Object(l.s)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function (t) {
          t.options.middleware && (o = o.concat(t.options.middleware))
        }))), o = o.map((function (t) {
          return "function" == typeof t ? t : ("function" != typeof f.a[t] && (c = !0, r.error({
            statusCode: 500,
            message: "Unknown middleware " + t
          })), f.a[t])
        })), !c) return Object(l.o)(o, e)
      }

      function P(t, e, n) {
        return I.apply(this, arguments)
      }

      function I() {
        return (I = Object(r.a)(regeneratorRuntime.mark((function t(e, n, o) {
          var c, f, h, m, y, w, j, k, C, S, $, T, P, I, E, A = this;
          return regeneratorRuntime.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                  t.next = 2;
                  break
                }
                return t.abrupt("return", o());
              case 2:
                return !1, e === n ? (O = [], !0) : (c = [], O = Object(l.g)(n, c).map((function (t, i) {
                  return Object(l.c)(n.matched[c[i]].path)(n.params)
                }))), f = !1, h = function (path) {
                  n.path === path.path && A.$loading.finish && A.$loading.finish(), n.path !== path.path && A.$loading.pause && A.$loading.pause(), f || (f = !0, o(path))
                }, t.next = 8, Object(l.t)(x, {route: e, from: n, next: h.bind(this)});
              case 8:
                if (this._dateLastError = x.nuxt.dateErr, this._hadError = Boolean(x.nuxt.err), m = [], (y = Object(l.g)(e, m)).length) {
                  t.next = 27;
                  break
                }
                return t.next = 15, R.call(this, y, x.context);
              case 15:
                if (!f) {
                  t.next = 17;
                  break
                }
                return t.abrupt("return");
              case 17:
                return w = (d.a.options || d.a).layout, t.next = 20, this.loadLayout("function" == typeof w ? w.call(d.a, x.context) : w);
              case 20:
                return j = t.sent, t.next = 23, R.call(this, y, x.context, j);
              case 23:
                if (!f) {
                  t.next = 25;
                  break
                }
                return t.abrupt("return");
              case 25:
                return x.context.error({
                  statusCode: 404,
                  message: "This page could not be found"
                }), t.abrupt("return", o());
              case 27:
                return y.forEach((function (t) {
                  t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                })), this.setTransitions(_(y, e, n)), t.prev = 29, t.next = 32, R.call(this, y, x.context);
              case 32:
                if (!f) {
                  t.next = 34;
                  break
                }
                return t.abrupt("return");
              case 34:
                if (!x.context._errored) {
                  t.next = 36;
                  break
                }
                return t.abrupt("return", o());
              case 36:
                return "function" == typeof (k = y[0].options.layout) && (k = k(x.context)), t.next = 40, this.loadLayout(k);
              case 40:
                return k = t.sent, t.next = 43, R.call(this, y, x.context, k);
              case 43:
                if (!f) {
                  t.next = 45;
                  break
                }
                return t.abrupt("return");
              case 45:
                if (!x.context._errored) {
                  t.next = 47;
                  break
                }
                return t.abrupt("return", o());
              case 47:
                C = !0, t.prev = 48, S = v(y), t.prev = 50, S.s();
              case 52:
                if (($ = S.n()).done) {
                  t.next = 63;
                  break
                }
                if ("function" == typeof (T = $.value).options.validate) {
                  t.next = 56;
                  break
                }
                return t.abrupt("continue", 61);
              case 56:
                return t.next = 58, T.options.validate(x.context);
              case 58:
                if (C = t.sent) {
                  t.next = 61;
                  break
                }
                return t.abrupt("break", 63);
              case 61:
                t.next = 52;
                break;
              case 63:
                t.next = 68;
                break;
              case 65:
                t.prev = 65, t.t0 = t.catch(50), S.e(t.t0);
              case 68:
                return t.prev = 68, S.f(), t.finish(68);
              case 71:
                t.next = 77;
                break;
              case 73:
                return t.prev = 73, t.t1 = t.catch(48), this.error({
                  statusCode: t.t1.statusCode || "500",
                  message: t.t1.message
                }), t.abrupt("return", o());
              case 77:
                if (C) {
                  t.next = 80;
                  break
                }
                return this.error({statusCode: 404, message: "This page could not be found"}), t.abrupt("return", o());
              case 80:
                return t.next = 82, Promise.all(y.map(function () {
                  var t = Object(r.a)(regeneratorRuntime.mark((function t(r, i) {
                    var o, c, f, d, h, v, y, w, p;
                    return regeneratorRuntime.wrap((function (t) {
                      for (; ;) switch (t.prev = t.next) {
                        case 0:
                          if (r._path = Object(l.c)(e.matched[m[i]].path)(e.params), r._dataRefresh = !1, o = r._path !== O[i], A._routeChanged && o ? r._dataRefresh = !0 : A._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : A._queryChanged && (!0 === (f = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(f) ? r._dataRefresh = f.some((function (t) {
                            return A._diffQuery[t]
                          })) : "function" == typeof f && (P || (P = Object(l.h)(e)), r._dataRefresh = f.apply(P[i], [e.query, n.query]))), A._hadError || !A._isMounted || r._dataRefresh) {
                            t.next = 6;
                            break
                          }
                          return t.abrupt("return");
                        case 6:
                          return d = [], h = r.options.asyncData && "function" == typeof r.options.asyncData, v = Boolean(r.options.fetch) && r.options.fetch.length, y = h && v ? 30 : 45, h && ((w = Object(l.q)(r.options.asyncData, x.context)).then((function (t) {
                            Object(l.b)(r, t), A.$loading.increase && A.$loading.increase(y)
                          })), d.push(w)), A.$loading.manual = !1 === r.options.loading, v && ((p = r.options.fetch(x.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function (t) {
                            A.$loading.increase && A.$loading.increase(y)
                          })), d.push(p)), t.abrupt("return", Promise.all(d));
                        case 14:
                        case"end":
                          return t.stop()
                      }
                    }), t)
                  })));
                  return function (e, n) {
                    return t.apply(this, arguments)
                  }
                }()));
              case 82:
                f || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), t.next = 99;
                break;
              case 85:
                if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (I = t.t2 || {}).message) {
                  t.next = 90;
                  break
                }
                return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, I));
              case 90:
                return O = [], Object(l.k)(I), "function" == typeof (E = (d.a.options || d.a).layout) && (E = E(x.context)), t.next = 96, this.loadLayout(E);
              case 96:
                this.error(I), this.$nuxt.$emit("routeChanged", e, n, I), o();
              case 99:
              case"end":
                return t.stop()
            }
          }), t, this, [[29, 85], [48, 73], [50, 65, 68, 71]])
        })))).apply(this, arguments)
      }

      function E(t, n) {
        Object(l.d)(t, (function (t, n, r, c) {
          return "object" !== Object(e.a)(t) || t.options || ((t = o.default.extend(t))._Ctor = t, r.components[c] = t), t
        }))
      }

      function A(t) {
        var e = Boolean(this.$options.nuxt.err);
        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
        var n = e ? (d.a.options || d.a).layout : t.matched[0].components.default.options.layout;
        "function" == typeof n && (n = n(x.context)), this.setLayout(n)
      }

      function D(t) {
        t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
      }

      function M(t, e) {
        var n = this;
        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
          var r = Object(l.h)(t), c = Object(l.g)(t);
          o.default.nextTick((function () {
            r.forEach((function (t, i) {
              if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                var e = t.constructor.options.data.call(t);
                for (var n in e) o.default.set(t.$data, n, e[n]);
                window.$nuxt.$nextTick((function () {
                  window.$nuxt.$emit("triggerScroll")
                }))
              }
            })), D(n)
          }))
        }
      }

      function N(t) {
        window.onNuxtReadyCbs.forEach((function (e) {
          "function" == typeof e && e(t)
        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), w.afterEach((function (e, n) {
          o.default.nextTick((function () {
            return t.$nuxt.$emit("routeChanged", e, n)
          }))
        }))
      }

      function L() {
        return (L = Object(r.a)(regeneratorRuntime.mark((function t(e) {
          var n, r, c, f;
          return regeneratorRuntime.wrap((function (t) {
            for (; ;) switch (t.prev = t.next) {
              case 0:
                return x = e.app, w = e.router, e.store, n = new o.default(x), r = function () {
                  n.$mount("#__nuxt"), w.afterEach(E), w.afterEach(A.bind(n)), w.afterEach(M.bind(n)), o.default.nextTick((function () {
                    N(n)
                  }))
                }, t.next = 7, Promise.all(T(w));
              case 7:
                if (c = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), c.length && (n.setTransitions(_(c, w.currentRoute)), O = w.currentRoute.matched.map((function (t) {
                  return Object(l.c)(t.path)(w.currentRoute.params)
                }))), n.$loading = {}, j.error && n.error(j.error), w.beforeEach(C.bind(n)), w.beforeEach(P.bind(n)), !j.serverRendered || !Object(l.n)(j.routePath, n.context.route.path)) {
                  t.next = 16;
                  break
                }
                return t.abrupt("return", r());
              case 16:
                return f = function () {
                  E(w.currentRoute, w.currentRoute), A.call(n, w.currentRoute), D(n), r()
                }, t.next = 19, new Promise((function (t) {
                  return setTimeout(t, 0)
                }));
              case 19:
                P.call(n, w.currentRoute, w.currentRoute, (function (path) {
                  if (path) {
                    var t = w.afterEach((function (e, n) {
                      t(), f()
                    }));
                    w.push(path, void 0, (function (t) {
                      t && k(t)
                    }))
                  } else f()
                }));
              case 20:
              case"end":
                return t.stop()
            }
          }), t)
        })))).apply(this, arguments)
      }

      Object(d.b)(null, j.config).then((function (t) {
        return L.apply(this, arguments)
      })).catch(k)
    }.call(this, n(30))
  }, 228: function (t, e, n) {
    "use strict";
    n(144)
  }, 229: function (t, e, n) {
    (e = n(63)(!1)).push([t.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]), t.exports = e
  }, 230: function (t, e, n) {
    "use strict";
    n(145)
  }, 231: function (t, e, n) {
    (e = n(63)(!1)).push([t.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), t.exports = e
  }, 232: function (t, e, n) {
    "use strict";
    n(146)
  }, 233: function (t, e, n) {
    var r = n(63), o = n(195), c = n(234), f = n(235);
    e = r(!1);
    var l = o(c), d = o(f);
    e.push([t.i, '@font-face{font-family:"Fredoka One";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/fredokaone/v8/k3kUo8kEI-tA1RRcTZGmTlHGCaI.ttf) format("truetype")}@font-face{font-family:"Roboto";font-style:normal;font-weight:100;src:url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1MmgVxIIzc.ttf) format("truetype")}html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background-image:url(' + l + '),radial-gradient(circle,#06151b 0,#040414 100%);background-color:#130414;background-size:cover;background-position:50%;background-attachment:fixed;color:#fff;height:100vh;overflow:auto}body{min-height:100vh}a{text-decoration:none;color:inherit}input[type=email],input[type=password],input[type=text],input[type=url],select{border:0;outline:0;border-radius:9999px;padding:0 1rem;font-family:"Roboto",sans-serif;font-size:1.4rem;height:1.7em}input[type=checkbox]{display:none}input[type=checkbox]+label{position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding-left:1.2rem}input[type=checkbox]+label:before{content:"";display:block;width:.8rem;height:.8rem;left:0;top:.3rem;border:1px solid #fff;position:absolute;opacity:.8;transition:all .07s}input[type=checkbox]:checked+label:before{width:8px;top:-.2rem;left:.2rem;border-top-color:transparent;border-left-color:transparent;transform:translateY(5px) rotate(45deg)}button{border:0;color:inherit;cursor:pointer}button[type=submit]{width:6rem;height:2.5rem;border-radius:9999px;font-size:1.5rem;font-family:"Fredoka One",cursive;font-weight:300;background:linear-gradient(90deg,#3e91a6,#5e0fa9)}table{width:100%;max-width:800px;margin:0 auto;font-size:1.5rem;border-collapse:collapse}table a{color:#90cbff}tbody td{font-family:"Roboto"}tr{height:3rem}tbody tr{border-top:1px solid hsla(0,0%,100%,.7)}*,:after,:before{box-sizing:border-box;margin:0}.header{width:100%;height:4rem;line-height:4rem;position:fixed;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,rgba(0,0,0,.8),rgba(0,0,0,.3) 70%,transparent);color:hsla(0,0%,100%,.8);z-index:1}.header .title{font-family:"Fredoka One",cursive;font-weight:300;font-size:2rem;display:block;letter-spacing:1px;margin-left:1rem;white-space:nowrap}.header .spacer{flex:1 1 0}.header .menu{display:flex;font-family:"Roboto",sans-serif;font-size:1.2rem;margin-right:1rem;text-transform:uppercase}.header .menu-item{margin:0 .5rem}.header .dropdown{position:relative}.header .dropdown-trigger{display:flex;align-items:center;height:100%;cursor:pointer}.header .dropdown-trigger:after{content:"";display:inline-block;width:0;height:0;margin-left:.5rem;border-top:6px solid #fff;border-left:6px solid transparent;border-right:6px solid transparent;vertical-align:middle}.header .teamname{text-transform:none;max-width:10rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right}.header .team-score{font-family:"Fredoka One",cursive;font-weight:300}.header .dropdown-menu{z-index:1;position:absolute;top:calc(100% - .5rem);right:0;background:#520514;line-height:3rem;display:flex;flex-direction:column;box-shadow:0 0 5px #000}.header .dropdown-menu-item{height:3rem;padding:0 1rem}.header .dropdown-menu-item:hover{background:hsla(0,0%,100%,.2)}.root-content{padding:4rem 1rem 0;min-height:calc(100vh - 13rem)}section>h2.title{font-size:4rem;font-family:"Fredoka One",cursive;font-weight:300;text-align:center;text-transform:uppercase;letter-spacing:1px;margin-top:3rem;margin-bottom:1rem;word-break:break-word}section>h2.title span{color:#0096fa;-webkit-text-fill-color:transparent;background:linear-gradient(90deg,#974dff,#29d277);-webkit-background-clip:text;background-clip:text;font-weight:500}.footer{text-align:center;margin-top:5rem;padding-bottom:1rem;color:hsla(0,0%,100%,.8);line-height:1.2rem}.footer:before{content:"";display:inline-block;width:8rem;height:1px;background:#fff;margin-bottom:1.2rem}.footer a{color:#90cbff}.footer .flatt-line{line-height:3.5rem}.footer .flatt-line:before{content:"";display:inline-block;width:1rem;height:1rem}.footer .flatt{vertical-align:middle;width:18rem}.footer .ojigineko{background:url(' + d + ");background-size:cover;display:inline-block;width:1rem;height:1rem;opacity:0;vertical-align:-28%;transition:opacity .2s}.footer .flatt-line:hover .ojigineko{opacity:.3}.table-wrap{overflow-x:auto}", ""]), t.exports = e
  }, 234: function (t, e, n) {
    t.exports = n.p + "img/background.2835806.svg"
  }, 235: function (t, e, n) {
    t.exports = n.p + "img/ojigineko-white.2d3b848.gif"
  }, 236: function (t, e, n) {
    "use strict";
    n.r(e), function (t) {
      n.d(e, "state", (function () {
        return h
      })), n.d(e, "getters", (function () {
        return m
      })), n.d(e, "mutations", (function () {
        return v
      })), n.d(e, "actions", (function () {
        return y
      }));
      n(21), n(11), n(17), n(10), n(6), n(20), n(12);
      var r = n(2), o = n(4), c = (n(77), n(46)), f = n.n(c);

      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function (t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }

      function d(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? l(Object(source), !0).forEach((function (e) {
            Object(o.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }

      var h = function () {
        return {
          configs: [],
          csrfToken: void 0,
          isLoggedIn: !0,
          isInTeam: !0,
          isStarted: !0,
          isEnded: !1,
          isVerified: !0,
          isStatic: null,
          contestEnd: null,
          contestStart: null,
          user: {},
          team: {},
          rules: "",
          countries: [["AF", "Afghanistan"], ["AX", "Åland Islands"], ["AL", "Albania"], ["DZ", "Algeria"], ["AS", "American Samoa"], ["AD", "Andorra"], ["AO", "Angola"], ["AI", "Anguilla"], ["AQ", "Antarctica"], ["AG", "Antigua & Barbuda"], ["AR", "Argentina"], ["AM", "Armenia"], ["AW", "Aruba"], ["AC", "Ascension Island"], ["AU", "Australia"], ["AT", "Austria"], ["AZ", "Azerbaijan"], ["BS", "Bahamas"], ["BH", "Bahrain"], ["BD", "Bangladesh"], ["BB", "Barbados"], ["BY", "Belarus"], ["BE", "Belgium"], ["BZ", "Belize"], ["BJ", "Benin"], ["BM", "Bermuda"], ["BT", "Bhutan"], ["BO", "Bolivia"], ["BA", "Bosnia & Herzegovina"], ["BW", "Botswana"], ["BR", "Brazil"], ["IO", "British Indian Ocean Territory"], ["VG", "British Virgin Islands"], ["BN", "Brunei"], ["BG", "Bulgaria"], ["BF", "Burkina Faso"], ["BI", "Burundi"], ["KH", "Cambodia"], ["CM", "Cameroon"], ["CA", "Canada"], ["IC", "Canary Islands"], ["CV", "Cape Verde"], ["BQ", "Caribbean Netherlands"], ["KY", "Cayman Islands"], ["CF", "Central African Republic"], ["EA", "Ceuta & Melilla"], ["TD", "Chad"], ["CL", "Chile"], ["CN", "China"], ["CX", "Christmas Island"], ["CC", "Cocos [Keeling] Islands"], ["CO", "Colombia"], ["KM", "Comoros"], ["CG", "Congo - Brazzaville"], ["CD", "Congo - Kinshasa"], ["CK", "Cook Islands"], ["CR", "Costa Rica"], ["CI", "Côte d’Ivoire"], ["HR", "Croatia"], ["CU", "Cuba"], ["CW", "Curaçao"], ["CY", "Cyprus"], ["CZ", "Czechia"], ["DK", "Denmark"], ["DG", "Diego Garcia"], ["DJ", "Djibouti"], ["DM", "Dominica"], ["DO", "Dominican Republic"], ["EC", "Ecuador"], ["EG", "Egypt"], ["SV", "El Salvador"], ["GQ", "Equatorial Guinea"], ["ER", "Eritrea"], ["EE", "Estonia"], ["ET", "Ethiopia"], ["EZ", "Eurozone"], ["FK", "Falkland Islands"], ["FO", "Faroe Islands"], ["FJ", "Fiji"], ["FI", "Finland"], ["FR", "France"], ["GF", "French Guiana"], ["PF", "French Polynesia"], ["TF", "French Southern Territories"], ["GA", "Gabon"], ["GM", "Gambia"], ["GE", "Georgia"], ["DE", "Germany"], ["GH", "Ghana"], ["GI", "Gibraltar"], ["GR", "Greece"], ["GL", "Greenland"], ["GD", "Grenada"], ["GP", "Guadeloupe"], ["GU", "Guam"], ["GT", "Guatemala"], ["GG", "Guernsey"], ["GN", "Guinea"], ["GW", "Guinea-Bissau"], ["GY", "Guyana"], ["HT", "Haiti"], ["HN", "Honduras"], ["HK", "Hong Kong SAR China"], ["HU", "Hungary"], ["IS", "Iceland"], ["IN", "India"], ["ID", "Indonesia"], ["IR", "Iran"], ["IQ", "Iraq"], ["IE", "Ireland"], ["IM", "Isle of Man"], ["IL", "Israel"], ["IT", "Italy"], ["JM", "Jamaica"], ["JP", "Japan"], ["JE", "Jersey"], ["JO", "Jordan"], ["KZ", "Kazakhstan"], ["KE", "Kenya"], ["KI", "Kiribati"], ["XK", "Kosovo"], ["KW", "Kuwait"], ["KG", "Kyrgyzstan"], ["LA", "Laos"], ["LV", "Latvia"], ["LB", "Lebanon"], ["LS", "Lesotho"], ["LR", "Liberia"], ["LY", "Libya"], ["LI", "Liechtenstein"], ["LT", "Lithuania"], ["LU", "Luxembourg"], ["MO", "Macau SAR China"], ["MK", "Macedonia"], ["MG", "Madagascar"], ["MW", "Malawi"], ["MY", "Malaysia"], ["MV", "Maldives"], ["ML", "Mali"], ["MT", "Malta"], ["MH", "Marshall Islands"], ["MQ", "Martinique"], ["MR", "Mauritania"], ["MU", "Mauritius"], ["YT", "Mayotte"], ["MX", "Mexico"], ["FM", "Micronesia"], ["MD", "Moldova"], ["MC", "Monaco"], ["MN", "Mongolia"], ["ME", "Montenegro"], ["MS", "Montserrat"], ["MA", "Morocco"], ["MZ", "Mozambique"], ["MM", "Myanmar [Burma]"], ["NA", "Namibia"], ["NR", "Nauru"], ["NP", "Nepal"], ["NL", "Netherlands"], ["NC", "New Caledonia"], ["NZ", "New Zealand"], ["NI", "Nicaragua"], ["NE", "Niger"], ["NG", "Nigeria"], ["NU", "Niue"], ["NF", "Norfolk Island"], ["KP", "North Korea"], ["MP", "Northern Mariana Islands"], ["NO", "Norway"], ["OM", "Oman"], ["PK", "Pakistan"], ["PW", "Palau"], ["PS", "Palestinian Territories"], ["PA", "Panama"], ["PG", "Papua New Guinea"], ["PY", "Paraguay"], ["PE", "Peru"], ["PH", "Philippines"], ["PN", "Pitcairn Islands"], ["PL", "Poland"], ["PT", "Portugal"], ["PR", "Puerto Rico"], ["QA", "Qatar"], ["RE", "Réunion"], ["RO", "Romania"], ["RU", "Russia"], ["RW", "Rwanda"], ["WS", "Samoa"], ["SM", "San Marino"], ["ST", "São Tomé & Príncipe"], ["SA", "Saudi Arabia"], ["SN", "Senegal"], ["RS", "Serbia"], ["SC", "Seychelles"], ["SL", "Sierra Leone"], ["SG", "Singapore"], ["SX", "Sint Maarten"], ["SK", "Slovakia"], ["SI", "Slovenia"], ["SB", "Solomon Islands"], ["SO", "Somalia"], ["ZA", "South Africa"], ["GS", "South Georgia & South Sandwich Islands"], ["KR", "South Korea"], ["SS", "South Sudan"], ["ES", "Spain"], ["LK", "Sri Lanka"], ["BL", "St. Barthélemy"], ["SH", "St. Helena"], ["KN", "St. Kitts & Nevis"], ["LC", "St. Lucia"], ["MF", "St. Martin"], ["PM", "St. Pierre & Miquelon"], ["VC", "St. Vincent & Grenadines"], ["SD", "Sudan"], ["SR", "Suriname"], ["SJ", "Svalbard & Jan Mayen"], ["SZ", "Swaziland"], ["SE", "Sweden"], ["CH", "Switzerland"], ["SY", "Syria"], ["TW", "Taiwan"], ["TJ", "Tajikistan"], ["TZ", "Tanzania"], ["TH", "Thailand"], ["TL", "Timor-Leste"], ["TG", "Togo"], ["TK", "Tokelau"], ["TO", "Tonga"], ["TT", "Trinidad & Tobago"], ["TA", "Tristan da Cunha"], ["TN", "Tunisia"], ["TR", "Turkey"], ["TM", "Turkmenistan"], ["TC", "Turks & Caicos Islands"], ["TV", "Tuvalu"], ["UM", "U.S. Outlying Islands"], ["VI", "U.S. Virgin Islands"], ["UG", "Uganda"], ["UA", "Ukraine"], ["AE", "United Arab Emirates"], ["GB", "United Kingdom"], ["US", "United States"], ["UY", "Uruguay"], ["UZ", "Uzbekistan"], ["VU", "Vanuatu"], ["VA", "Vatican City"], ["VE", "Venezuela"], ["VN", "Vietnam"], ["WF", "Wallis & Futuna"], ["EH", "Western Sahara"], ["YE", "Yemen"], ["ZM", "Zambia"], ["ZW", "Zimbabwe"]]
        }
      }, m = {
        ctfName: function (t) {
          var e = t.configs;
          return f()(e.find((function (t) {
            return "ctf_name" === t.key
          })), ["value"], "")
        }
      }, v = {
        setConfigs: function (s, t) {
          s.configs = t
        }, setIsLoggedIn: function (s, t) {
          s.isLoggedIn = t
        }, setIsInTeam: function (s, t) {
          s.isInTeam = t
        }, setIsStarted: function (s, t) {
          s.isStarted = t
        }, setIsEnded: function (s, t) {
          s.isEnded = t
        }, setIsVerified: function (s, t) {
          s.isVerified = t
        }, setIsStatic: function (s, t) {
          s.isStatic = t
        }, setRules: function (s, t) {
          s.rules = t
        }, setCsrfToken: function (s, t) {
          s.csrfToken = t
        }, setUser: function (s, t) {
          s.user = d(d({}, s.user), t)
        }, setTeam: function (s, t) {
          s.team = d(d({}, s.team), t)
        }, setStart: function (s, t) {
          s.contestStart = new Date(t).getTime()
        }, setEnd: function (s, t) {
          s.contestEnd = new Date(t).getTime()
        }
      }, y = {
        nuxtServerInit: function (e) {
          (0, e.commit)("setIsStatic", "true" === t.env.NUXT_ENV_STATIC)
        }, nuxtClientInit: function (e, n) {
          return Object(r.a)(regeneratorRuntime.mark((function r() {
            var o;
            return regeneratorRuntime.wrap((function (r) {
              for (; ;) switch (r.prev = r.next) {
                case 0:
                  return o = e.dispatch, (0, e.commit)("setIsStatic", "true" === t.env.NUXT_ENV_STATIC), r.next = 4, Promise.all([o("updateUser", n), o("updateTeam", n), o("updateDates", n), o("updateCsrfToken", n), o("notifications/updateNotifications", n)]);
                case 4:
                case"end":
                  return r.stop()
              }
            }), r)
          })))()
        }, updateConfigs: function (t, e) {
          return Object(r.a)(regeneratorRuntime.mark((function n() {
            var r, o, c, data;
            return regeneratorRuntime.wrap((function (n) {
              for (; ;) switch (n.prev = n.next) {
                case 0:
                  return r = t.commit, o = e.$axios, n.next = 4, o.get("/ctf/api/v1/configs");
                case 4:
                  c = n.sent, data = c.data, "application/json" === c.headers["content-type"] ? r("setConfigs", data.data.map((function (t) {
                    return {key: t.key, value: t.value}
                  }))) : r("setIsLoggedIn", !1, {root: !0});
                case 8:
                case"end":
                  return n.stop()
              }
            }), n)
          })))()
        }, updateUser: function (t, e) {
          return Object(r.a)(regeneratorRuntime.mark((function n() {
            var r, o, c, data;
            return regeneratorRuntime.wrap((function (n) {
              for (; ;) switch (n.prev = n.next) {
                case 0:
                  return r = t.commit, o = e.$axios, n.next = 4, o.get("/ctf/api/v1/users/me");
                case 4:
                  c = n.sent, data = c.data, "application/json" === c.headers["content-type"] ? r("setUser", data.data) : r("setIsLoggedIn", !1, {root: !0});
                case 8:
                case"end":
                  return n.stop()
              }
            }), n)
          })))()
        }, updateTeam: function (t, e) {
          return Object(r.a)(regeneratorRuntime.mark((function n() {
            var r, o, c, data;
            return regeneratorRuntime.wrap((function (n) {
              for (; ;) switch (n.prev = n.next) {
                case 0:
                  return r = t.commit, o = e.$axios, n.next = 4, o.get("/ctf/api/v1/teams/me");
                case 4:
                  c = n.sent, data = c.data, "application/json" === c.headers["content-type"] ? 0 === Object.keys(data.data).length ? r("setIsInTeam", !1, {root: !0}) : r("setTeam", data.data) : r("setIsInTeam", !1, {root: !0});
                case 8:
                case"end":
                  return n.stop()
              }
            }), n)
          })))()
        }, updateDates: function (t, e) {
          return Object(r.a)(regeneratorRuntime.mark((function n() {
            var r, o, c, data;
            return regeneratorRuntime.wrap((function (n) {
              for (; ;) switch (n.prev = n.next) {
                case 0:
                  return r = t.commit, o = e.$axios, n.next = 4, o.get("/ctf/api/v1/dates");
                case 4:
                  c = n.sent, data = c.data, "application/json" === c.headers["content-type"] ? (r("setIsStarted", data.data.is_started), r("setIsEnded", data.data.is_ended), r("setIsVerified", data.data.is_verified), r("setStart", data.data.start), r("setEnd", data.data.end)) : r("setIsLoggedIn", !1, {root: !0});
                case 8:
                case"end":
                  return n.stop()
              }
            }), n)
          })))()
        }, updateRules: function (t, e) {
          return Object(r.a)(regeneratorRuntime.mark((function n() {
            var r, o, c, data;
            return regeneratorRuntime.wrap((function (n) {
              for (; ;) switch (n.prev = n.next) {
                case 0:
                  return r = t.commit, o = e.$axios, n.next = 4, o.get("/ctf/api/v1/rules");
                case 4:
                  c = n.sent, data = c.data, "application/json" === c.headers["content-type"] && r("setRules", data.data.content);
                case 8:
                case"end":
                  return n.stop()
              }
            }), n)
          })))()
        }, updateCsrfToken: function (t, e) {
          return Object(r.a)(regeneratorRuntime.mark((function n() {
            var r, s, o, data, meta, c;
            return regeneratorRuntime.wrap((function (n) {
              for (; ;) switch (n.prev = n.next) {
                case 0:
                  if (r = t.commit, s = t.state, e.$axios, !s.isStatic) {
                    n.next = 4;
                    break
                  }
                  return n.abrupt("return");
                case 4:
                  n.next = 12;
                  break;
                case 7:
                  o = n.sent, (data = o.data).nonce && r("setCsrfToken", data.nonce), n.next = 14;
                  break;
                case 12:
                  (meta = document.querySelector("meta[name=csrf-token]")) && (c = meta.getAttribute("content"), r("setCsrfToken", c));
                case 14:
                case"end":
                  return n.stop()
              }
            }), n)
          })))()
        }
      }
    }.call(this, n(76))
  }, 268: function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "state", (function () {
      return w
    })), n.d(e, "getters", (function () {
      return O
    })), n.d(e, "mutations", (function () {
      return j
    })), n.d(e, "actions", (function () {
      return k
    }));
    n(21), n(11), n(17), n(57), n(75), n(12);
    var r = n(2), o = (n(269), n(25), n(22)), c = (n(270), n(77), n(4)), f = (n(10), n(6), n(20), n(89), n(1)),
      l = n(46), d = n.n(l), h = n(186), m = n.n(h);

    function v(object, t) {
      var e = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(object, t).enumerable
        }))), e.push.apply(e, n)
      }
      return e
    }

    function y(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? v(Object(source), !0).forEach((function (e) {
          Object(c.a)(t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : v(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }

    var x = ["cooldown", "warmup", "pwn", "rev", "web", "crypto", "stego"], w = function () {
      return {challenges: [], challengeSolves: [], solves: new Set}
    }, O = {
      getChallenges: function (s) {
        return s.challenges.map((function (t) {
          return y(y({}, t), {}, {
            solved: s.solves.has(t.id), solves: d()(s.challengeSolves.find((function (e) {
              return e.id === t.id
            })), "solves", 0)
          })
        }))
      }, getCategories: function (s, g) {
        return Object.entries(m()(g.getChallenges, (function (t) {
          return t.category
        }))).map((function (t) {
          var e = Object(o.a)(t, 2);
          return {
            name: e[0], challenges: e[1].sort((function (a, b) {
              return a.value - b.value
            }))
          }
        })).sort((function (a, b) {
          var t = x.indexOf(a.name.toLowerCase()), e = x.indexOf(b.name.toLowerCase());
          return (-1 === t ? 9999 : t) - (-1 === e ? 9999 : e)
        }))
      }
    }, j = {
      setChallenges: function (s, t) {
        var e = s.challenges || [];
        s.challenges = t.map((function (t) {
          var n = e.find((function (e) {
            return e.id === t.id
          }));
          if (!n) return t;
          for (var r = 0, c = Object.entries(t); r < c.length; r++) {
            var l = Object(o.a)(c[r], 2), d = l[0], h = l[1];
            f.default.set(n, d, h)
          }
          return n
        }))
      }, setChallengeSolves: function (s, t) {
        s.challengeSolves = t
      }, setSolves: function (s, t) {
        s.solves = new Set(t.map((function (t) {
          return t.challenge_id
        })))
      }, setChallengeDetail: function (s, t) {
        var e = t.id, data = t.data, n = s.challenges.findIndex((function (t) {
          return t.id === e
        }));
        f.default.set(s.challenges, n, y(y({}, s.challenges[n]), {}, {details: data}))
      }
    }, k = {
      updateChallenges: function (t, e) {
        return Object(r.a)(regeneratorRuntime.mark((function n() {
          var r, o, c, f, l, data, h, m, v, y;
          return regeneratorRuntime.wrap((function (n) {
            for (; ;) switch (n.prev = n.next) {
              case 0:
                return r = t.commit, o = t.dispatch, c = t.rootState, f = e.$axios, n.prev = 2, n.next = 5, f.get("/ctf/api/v1/challenges");
              case 5:
                if (l = n.sent, data = l.data, h = l.headers, m = l.request, "application/json" !== h["content-type"]) {
                  n.next = 17;
                  break
                }
                if (r("setIsStarted", !0, {root: !0}), r("setChallenges", data.data), !c.isStatic) {
                  n.next = 15;
                  break
                }
                return n.next = 15, Promise.all(data.data.map((function (t) {
                  var e = t.id;
                  return o("getDetail", {$axios: f, id: e})
                })));
              case 15:
                n.next = 20;
                break;
              case 17:
                return "/team" === (v = new URL(m.responseURL)).pathname ? r("setIsInTeam", !1, {root: !0}) : "/confirm" === v.pathname ? r("setIsVerified", !1, {root: !0}) : r("setIsLoggedIn", !1, {root: !0}), n.abrupt("return");
              case 20:
                n.next = 27;
                break;
              case 22:
                return n.prev = 22, n.t0 = n.catch(2), (y = d()(n.t0, ["response", "data", "message"], "")).includes("not started") ? r("setIsStarted", !1, {root: !0}) : y.includes("has ended") ? r("setIsEnded", !0, {root: !0}) : r("setIsInTeam", !1, {root: !0}), n.abrupt("return");
              case 27:
                return n.next = 29, o("updateSolved", {$axios: f});
              case 29:
              case"end":
                return n.stop()
            }
          }), n, null, [[2, 22]])
        })))()
      }, updateChallengeSolves: function (t, e) {
        return Object(r.a)(regeneratorRuntime.mark((function n() {
          var r, o, c, data, f, l, d;
          return regeneratorRuntime.wrap((function (n) {
            for (; ;) switch (n.prev = n.next) {
              case 0:
                return r = t.commit, t.dispatch, t.rootState, o = e.$axios, n.prev = 2, n.next = 5, o.get("/ctf/api/v1/challenges/solves");
              case 5:
                c = n.sent, data = c.data, f = c.headers, l = c.request, "application/json" === f["content-type"] ? (r("setIsStarted", !0, {root: !0}), r("setChallengeSolves", data.data)) : "/team" === (d = new URL(l.responseURL)).pathname ? r("setIsInTeam", !1, {root: !0}) : "/confirm" === d.pathname ? r("setIsVerified", !1, {root: !0}) : r("setIsLoggedIn", !1, {root: !0}), n.next = 14;
                break;
              case 12:
                n.prev = 12, n.t0 = n.catch(2);
              case 14:
              case"end":
                return n.stop()
            }
          }), n, null, [[2, 12]])
        })))()
      }, updateSolved: function (t, e) {
        return Object(r.a)(regeneratorRuntime.mark((function n() {
          var r, o, c, data, f, l, d;
          return regeneratorRuntime.wrap((function (n) {
            for (; ;) switch (n.prev = n.next) {
              case 0:
                return r = t.commit, o = e.$axios, n.next = 4, o.get("/ctf/api/v1/teams/me/solves");
              case 4:
                c = n.sent, data = c.data, f = c.headers, l = c.request, "application/json" === f["content-type"] ? r("setSolves", data.data) : "/team" === (d = new URL(l.responseURL)).pathname ? r("setIsInTeam", !1, {root: !0}) : "/confirm" === d.pathname ? r("setIsVerified", !1, {root: !0}) : r("setIsLoggedIn", !1, {root: !0});
              case 9:
              case"end":
                return n.stop()
            }
          }), n)
        })))()
      }, getDetail: function (t, e) {
        return Object(r.a)(regeneratorRuntime.mark((function n() {
          var r, o, c, f, data, l, d, h;
          return regeneratorRuntime.wrap((function (n) {
            for (; ;) switch (n.prev = n.next) {
              case 0:
                return r = t.commit, o = e.$axios, c = e.id, n.next = 4, o.get("/ctf/api/v1/challenges/".concat(c));
              case 4:
                f = n.sent, data = f.data, l = f.headers, d = f.request, "application/json" === l["content-type"] ? r("setChallengeDetail", {
                  id: c,
                  data: data.data
                }) : "/team" === (h = new URL(d.responseURL)).pathname ? r("setIsInTeam", !1, {root: !0}) : "/confirm" === h.pathname ? r("setIsVerified", !1, {root: !0}) : r("setIsLoggedIn", !1, {root: !0});
              case 9:
              case"end":
                return n.stop()
            }
          }), n)
        })))()
      }
    }
  }, 28: function (t, e, n) {
    "use strict";
    n.d(e, "b", (function () {
      return It
    })), n.d(e, "a", (function () {
      return R
    }));
    n(12), n(21), n(11), n(10), n(6), n(17);
    var r = n(2), o = n(4), c = (n(25), n(1)), f = n(23), l = n(183), d = n(120), h = n.n(d), m = n(49), v = n.n(m),
      y = n(61), x = n(0);
    "scrollRestoration" in window.history && (Object(x.u)("manual"), window.addEventListener("beforeunload", (function () {
      Object(x.u)("auto")
    })), window.addEventListener("load", (function () {
      Object(x.u)("manual")
    })));
    var w = function () {
    }, O = y.a.prototype.push;
    y.a.prototype.push = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w,
        n = arguments.length > 2 ? arguments[2] : void 0;
      return O.call(this, t, e, n)
    }, c.default.use(y.a);
    var j = {
      mode: "history",
      base: decodeURI("/ctf/"),
      linkActiveClass: "nuxt-link-active",
      linkExactActiveClass: "nuxt-link-exact-active",
      scrollBehavior: function (t, e, n) {
        var r = !1, o = Object(x.g)(t);
        (o.some((function (t) {
          return t.options.scrollToTop
        })) || o.length < 2 && o.every((function (t) {
          return !1 !== t.options.scrollToTop
        }))) && (r = {x: 0, y: 0}), n && (r = n);
        var c = window.$nuxt;
        return (t.path === e.path && t.hash !== e.hash || t === e) && c.$nextTick((function () {
          return c.$emit("triggerScroll")
        })), new Promise((function (e) {
          c.$once("triggerScroll", (function () {
            if (t.hash) {
              var n = t.hash;
              void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
              try {
                document.querySelector(n) && (r = {selector: n})
              } catch (t) {
                console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
              }
            }
            e(r)
          }))
        }))
      },
      routes: [{
        path: "/about", component: function () {
          return Object(x.m)(n.e(2).then(n.bind(null, 492)))
        }, name: "about"
      }, {
        path: "/challenges", component: function () {
          return Object(x.m)(Promise.all([n.e(17), n.e(3)]).then(n.bind(null, 486)))
        }, name: "challenges"
      }, {
        path: "/confirm", component: function () {
          return Object(x.m)(n.e(4).then(n.bind(null, 491)))
        }, name: "confirm"
      }, {
        path: "/login", component: function () {
          return Object(x.m)(n.e(6).then(n.bind(null, 490)))
        }, name: "login"
      }, {
        path: "/notifications", component: function () {
          return Object(x.m)(n.e(7).then(n.bind(null, 489)))
        }, name: "notifications"
      }, {
        path: "/register", component: function () {
          return Object(x.m)(n.e(8).then(n.bind(null, 488)))
        }, name: "register"
      }, {
        path: "/reset_password", component: function () {
          return Object(x.m)(n.e(9).then(n.bind(null, 487)))
        }, name: "reset_password"
      }, {
        path: "/scoreboard", component: function () {
          return Object(x.m)(n.e(10).then(n.bind(null, 496)))
        }, name: "scoreboard"
      }, {
        path: "/settings", component: function () {
          return Object(x.m)(n.e(11).then(n.bind(null, 495)))
        }, name: "settings"
      }, {
        path: "/team", component: function () {
          return Object(x.m)(n.e(12).then(n.bind(null, 449)))
        }, name: "team"
      }, {
        path: "/teams/new", component: function () {
          return Object(x.m)(n.e(14).then(n.bind(null, 494)))
        }, name: "teams-new"
      }, {
        path: "/teams/:id?", component: function () {
          return Object(x.m)(n.e(13).then(n.bind(null, 493)))
        }, name: "teams-id"
      }, {
        path: "/", component: function () {
          return Object(x.m)(n.e(5).then(n.bind(null, 497)))
        }, name: "index"
      }],
      fallback: !1
    };

    function k() {
      return new y.a(j)
    }

    var _ = {
        name: "NuxtChild",
        functional: !0,
        props: {
          nuxtChildKey: {type: String, default: ""},
          keepAlive: Boolean,
          keepAliveProps: {type: Object, default: void 0}
        },
        render: function (t, e) {
          var n = e.parent, data = e.data, r = e.props, o = n.$createElement;
          data.nuxtChild = !0;
          for (var c = n, f = n.$nuxt.nuxt.transitions, l = n.$nuxt.nuxt.defaultTransition, d = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && d++, n = n.$parent;
          data.nuxtChildDepth = d;
          var h = f[d] || l, m = {};
          C.forEach((function (t) {
            void 0 !== h[t] && (m[t] = h[t])
          }));
          var v = {};
          S.forEach((function (t) {
            "function" == typeof h[t] && (v[t] = h[t].bind(c))
          }));
          var y = v.beforeEnter;
          if (v.beforeEnter = function (t) {
            if (window.$nuxt.$nextTick((function () {
              window.$nuxt.$emit("triggerScroll")
            })), y) return y.call(c, t)
          }, !1 === h.css) {
            var x = v.leave;
            (!x || x.length < 2) && (v.leave = function (t, e) {
              x && x.call(c, t), c.$nextTick(e)
            })
          }
          var w = o("routerView", data);
          return r.keepAlive && (w = o("keep-alive", {props: r.keepAliveProps}, [w])), o("transition", {
            props: m,
            on: v
          }, [w])
        }
      },
      C = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
      S = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
      $ = {
        name: "NuxtError", props: {error: {type: Object, default: null}}, computed: {
          statusCode: function () {
            return this.error && this.error.statusCode || 500
          }, message: function () {
            return this.error.message || "Error"
          }
        }, head: function () {
          return {
            title: this.message,
            meta: [{name: "viewport", content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"}]
          }
        }
      }, T = (n(228), n(29)), R = Object(T.a)($, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "__nuxt-error-page"}, [n("div", {staticClass: "error"}, [n("svg", {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "90",
            height: "90",
            fill: "#DBE1EC",
            viewBox: "0 0 48 48"
          }
        }, [n("path", {attrs: {d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]), t._v(" "), n("div", {staticClass: "title"}, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? n("p", {staticClass: "description"}, [void 0 === t.$route ? n("a", {
          staticClass: "error-link",
          attrs: {href: "/"}
        }) : n("NuxtLink", {
          staticClass: "error-link",
          attrs: {to: "/"}
        }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
      }), [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "logo"}, [e("a", {
          attrs: {
            href: "https://nuxtjs.org",
            target: "_blank",
            rel: "noopener"
          }
        }, [this._v("Nuxt.js")])])
      }], !1, null, null, null).exports, P = (n(35), n(36), n(85), n(22)), I = {
        name: "Nuxt",
        components: {NuxtChild: _, NuxtError: R},
        props: {
          nuxtChildKey: {type: String, default: void 0},
          keepAlive: Boolean,
          keepAliveProps: {type: Object, default: void 0},
          name: {type: String, default: "default"}
        },
        errorCaptured: function (t) {
          this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
        },
        computed: {
          routerViewKey: function () {
            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(x.c)(this.$route.matched[0].path)(this.$route.params);
            var t = Object(P.a)(this.$route.matched, 1)[0];
            if (!t) return this.$route.path;
            var e = t.components.default;
            if (e && e.options) {
              var n = e.options;
              if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
            }
            return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
          }
        },
        beforeCreate: function () {
          c.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
        },
        render: function (t) {
          var e = this;
          return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function () {
            return e.errorFromNuxtError = !1
          })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {props: {to: "/"}}, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function () {
            return e.displayingNuxtError = !1
          })), t(R, {props: {error: this.nuxt.err}})) : t("NuxtChild", {key: this.routerViewKey, props: this.$props})
        }
      }, E = (n(44), n(38), n(20), {
        name: "NuxtLoading", data: function () {
          return {
            percent: 0,
            show: !1,
            canSucceed: !0,
            reversed: !1,
            skipTimerCount: 0,
            rtl: !1,
            throttle: 200,
            duration: 5e3,
            continuous: !1
          }
        }, computed: {
          left: function () {
            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
          }
        }, beforeDestroy: function () {
          this.clear()
        }, methods: {
          clear: function () {
            clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
          }, start: function () {
            var t = this;
            return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function () {
              return t.startTimer()
            }), this.throttle) : this.startTimer(), this
          }, set: function (t) {
            return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
          }, get: function () {
            return this.percent
          }, increase: function (t) {
            return this.percent = Math.min(100, Math.floor(this.percent + t)), this
          }, decrease: function (t) {
            return this.percent = Math.max(0, Math.floor(this.percent - t)), this
          }, pause: function () {
            return clearInterval(this._timer), this
          }, resume: function () {
            return this.startTimer(), this
          }, finish: function () {
            return this.percent = this.reversed ? 0 : 100, this.hide(), this
          }, hide: function () {
            var t = this;
            return this.clear(), setTimeout((function () {
              t.show = !1, t.$nextTick((function () {
                t.percent = 0, t.reversed = !1
              }))
            }), 500), this
          }, fail: function (t) {
            return this.canSucceed = !1, this
          }, startTimer: function () {
            var t = this;
            this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function () {
              t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
            }), 100)
          }
        }, render: function (t) {
          var e = t(!1);
          return this.show && (e = t("div", {
            staticClass: "nuxt-progress",
            class: {"nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed},
            style: {width: this.percent + "%", left: this.left}
          })), e
        }
      }), A = (n(230), Object(T.a)(E, void 0, void 0, !1, null, null, null).exports), D = n(123), M = n(185);

    function N(object, t) {
      var e = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(object, t).enumerable
        }))), e.push.apply(e, n)
      }
      return e
    }

    var L = {
      components: {IsoLink: D.a}, directives: {onClickaway: M.directive}, data: function () {
        return {isDropping: !1, isMobile: !1}
      }, computed: function (t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2 ? N(Object(source), !0).forEach((function (e) {
            Object(o.a)(t, e, source[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : N(Object(source)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
          }))
        }
        return t
      }({}, Object(f.c)(["isStatic", "isLoggedIn", "isInTeam", "team", "user"])), mounted: function () {
        var t = this;
        window.innerWidth <= 900 && (this.isMobile = !0), window.addEventListener("resize", (function () {
          window.innerWidth <= 900 ? t.isMobile = !0 : t.isMobile = !1
        }))
      }, methods: {
        onClickaway: function () {
          this.isDropping = !1
        }, onClickDropdown: function (t) {
          "A" === t.target.tagName && (this.isDropping = !1)
        }, logout: function (t) {
          t.preventDefault(), location.href = "/ctf/logout"
        }
      }, head: function () {
        return {title: "NY QUEST 2021"}
      }
    }, U = (n(232), Object(T.a)(L, (function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("div", [n("div", {staticClass: "header"}, [n("div", {staticClass: "title"}, [n("iso-link", {attrs: {to: "/"}}, [t._v("NY QUEST 2021")])], 1), t._v(" "), n("div", {staticClass: "spacer"}), t._v(" "), t.isLoggedIn ? n("div", [t.isMobile ? n("div", {staticClass: "menu"}, [n("div", {
        directives: [{
          name: "on-clickaway",
          rawName: "v-on-clickaway",
          value: t.onClickaway,
          expression: "onClickaway"
        }], staticClass: "menu-item dropdown"
      }, [n("div", {
        staticClass: "dropdown-trigger", on: {
          click: function (e) {
            t.isDropping = !t.isDropping
          }
        }
      }, [n("div", {staticClass: "teamname"}, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.team && t.team.name) + "\n\t\t\t\t\t\t")])]), t._v(" "), t.isDropping ? n("div", {
        staticClass: "dropdown-menu",
        on: {click: t.onClickDropdown}
      }, [n("iso-link", {
        staticClass: "dropdown-menu-item",
        attrs: {to: "/notifications"}
      }, [t._v("Notifications")]), t._v(" "), n("iso-link", {
        staticClass: "dropdown-menu-item",
        attrs: {to: "/about"}
      }, [t._v("About")]), t._v(" "), n("iso-link", {
        staticClass: "dropdown-menu-item",
        attrs: {to: "/scoreboard"}
      }, [t._v("Scoreboard")]), t._v(" "), n("iso-link", {
        staticClass: "dropdown-menu-item",
        attrs: {to: "/challenges"}
      }, [t._v("Challenges")]), t._v(" "), t.isStatic ? t._e() : n("iso-link", {
        staticClass: "dropdown-menu-item",
        attrs: {to: t.isInTeam ? "/teams/" + (t.team && t.team.id) : "/team"}
      }, [t._v("Team")]), t._v(" "), t.isStatic ? t._e() : n("iso-link", {
        staticClass: "dropdown-menu-item",
        attrs: {to: "/settings"}
      }, [t._v("Settings")]), t._v(" "), t.isStatic ? t._e() : n("a", {
        staticClass: "dropdown-menu-item",
        attrs: {href: "/logout"},
        on: {click: t.logout}
      }, [t._v("Logout")])], 1) : t._e()])]) : n("div", {staticClass: "menu"}, [n("div", {staticClass: "menu-item"}, [n("iso-link", {attrs: {to: "/notifications"}}, [t._v("Notifications")])], 1), t._v(" "), n("div", {staticClass: "menu-item"}, [n("iso-link", {attrs: {to: "/about"}}, [t._v("About")])], 1), t._v(" "), n("div", {staticClass: "menu-item"}, [n("iso-link", {attrs: {to: "/scoreboard"}}, [t._v("Scoreboard")])], 1), t._v(" "), n("div", {staticClass: "menu-item"}, [n("iso-link", {attrs: {to: "/challenges"}}, [t._v("Challenges")])], 1), t._v(" "), t.isStatic ? t._e() : n("div", {
        directives: [{
          name: "on-clickaway",
          rawName: "v-on-clickaway",
          value: t.onClickaway,
          expression: "onClickaway"
        }], staticClass: "menu-item dropdown"
      }, [n("div", {
        staticClass: "dropdown-trigger", on: {
          click: function (e) {
            t.isDropping = !t.isDropping
          }
        }
      }, [n("div", {staticClass: "teamname"}, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.team && t.team.name) + "\n\t\t\t\t\t\t")])]), t._v(" "), t.isDropping ? n("div", {
        staticClass: "dropdown-menu",
        on: {click: t.onClickDropdown}
      }, [n("iso-link", {
        staticClass: "dropdown-menu-item",
        attrs: {to: t.isInTeam ? "/teams/" + (t.team && t.team.id) : "/team"}
      }, [t._v("Team")]), t._v(" "), n("iso-link", {
        staticClass: "dropdown-menu-item",
        attrs: {to: "/settings"}
      }, [t._v("Settings")]), t._v(" "), n("a", {
        staticClass: "dropdown-menu-item",
        attrs: {href: "/logout"},
        on: {click: t.logout}
      }, [t._v("Logout")])], 1) : t._e()])])]) : n("div", [t.isMobile ? n("div", {staticClass: "menu"}, [n("div", {
        directives: [{
          name: "on-clickaway",
          rawName: "v-on-clickaway",
          value: t.onClickaway,
          expression: "onClickaway"
        }], staticClass: "menu-item dropdown"
      }, [n("div", {
        staticClass: "dropdown-trigger", on: {
          click: function (e) {
            t.isDropping = !t.isDropping
          }
        }
      }, [n("div", {staticClass: "teamname"}, [t._v("\n\t\t\t\t\t\t\tMenu\n\t\t\t\t\t\t")])]), t._v(" "), t.isDropping ? n("div", {
        staticClass: "dropdown-menu",
        on: {click: t.onClickDropdown}
      }, [n("iso-link", {
        staticClass: "dropdown-menu-item",
        attrs: {to: "/about"}
      }, [t._v("About")]), t._v(" "), n("iso-link", {
        staticClass: "dropdown-menu-item",
        attrs: {to: "/scoreboard"}
      }, [t._v("Scoreboard")]), t._v(" "), n("iso-link", {
        staticClass: "dropdown-menu-item",
        attrs: {to: "/login"}
      }, [t._v("Login")]), t._v(" "), n("iso-link", {
        staticClass: "dropdown-menu-item",
        attrs: {to: "/register"}
      }, [t._v("Register")])], 1) : t._e()])]) : n("div", {staticClass: "menu"}, [n("div", {staticClass: "menu-item"}, [n("iso-link", {attrs: {to: "/about"}}, [t._v("About")])], 1), t._v(" "), n("div", {staticClass: "menu-item"}, [n("iso-link", {attrs: {to: "/scoreboard"}}, [t._v("Scoreboard")])], 1), t._v(" "), n("div", {staticClass: "menu-item"}, [n("iso-link", {attrs: {to: "/login"}}, [t._v("Login")])], 1), t._v(" "), n("div", {staticClass: "menu-item"}, [n("iso-link", {attrs: {to: "/register"}}, [t._v("Register")])], 1)])])]), t._v(" "), n("div", {staticClass: "root-content"}, [n("nuxt")], 1)])
    }), [], !1, null, null, null).exports);

    function B(t, e) {
      var n;
      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (n = function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return G(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return G(t, e)
        }(t)) || e && t && "number" == typeof t.length) {
          n && (t = n);
          var i = 0, r = function () {
          };
          return {
            s: r, n: function () {
              return i >= t.length ? {done: !0} : {done: !1, value: t[i++]}
            }, e: function (t) {
              throw t
            }, f: r
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var o, c = !0, f = !1;
      return {
        s: function () {
          n = t[Symbol.iterator]()
        }, n: function () {
          var t = n.next();
          return c = t.done, t
        }, e: function (t) {
          f = !0, o = t
        }, f: function () {
          try {
            c || null == n.return || n.return()
          } finally {
            if (f) throw o
          }
        }
      }
    }

    function G(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n
    }

    var F = {_default: Object(x.s)(U)}, z = {
      render: function (t, e) {
        var n = t("NuxtLoading", {ref: "loading"}), r = t(this.layout || "nuxt"),
          o = t("div", {domProps: {id: "__layout"}, key: this.layoutName}, [r]), c = t("transition", {
            props: {name: "layout", mode: "out-in"}, on: {
              beforeEnter: function (t) {
                window.$nuxt.$nextTick((function () {
                  window.$nuxt.$emit("triggerScroll")
                }))
              }
            }
          }, [o]);
        return t("div", {domProps: {id: "__nuxt"}}, [n, c])
      }, data: function () {
        return {isOnline: !0, layout: null, layoutName: "", nbFetching: 0}
      }, beforeCreate: function () {
        c.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
      }, created: function () {
        this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
      }, mounted: function () {
        var t = this;
        return Object(r.a)(regeneratorRuntime.mark((function e() {
          return regeneratorRuntime.wrap((function (e) {
            for (; ;) switch (e.prev = e.next) {
              case 0:
                t.$loading = t.$refs.loading;
              case 1:
              case"end":
                return e.stop()
            }
          }), e)
        })))()
      }, watch: {"nuxt.err": "errorChanged"}, computed: {
        isOffline: function () {
          return !this.isOnline
        }, isFetching: function () {
          return this.nbFetching > 0
        }, isPreview: function () {
          return Boolean(this.$options.previewData)
        }
      }, methods: {
        refreshOnlineStatus: function () {
          void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
        }, refresh: function () {
          var t = this;
          return Object(r.a)(regeneratorRuntime.mark((function e() {
            var n, r;
            return regeneratorRuntime.wrap((function (e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  if ((n = Object(x.h)(t.$route)).length) {
                    e.next = 3;
                    break
                  }
                  return e.abrupt("return");
                case 3:
                  return t.$loading.start(), r = n.map((function (e) {
                    var p = [];
                    if (e.$options.fetch && e.$options.fetch.length && p.push(Object(x.q)(e.$options.fetch, t.context)), e.$fetch) p.push(e.$fetch()); else {
                      var n, r = B(Object(x.e)(e.$vnode.componentInstance));
                      try {
                        for (r.s(); !(n = r.n()).done;) {
                          var component = n.value;
                          p.push(component.$fetch())
                        }
                      } catch (t) {
                        r.e(t)
                      } finally {
                        r.f()
                      }
                    }
                    return e.$options.asyncData && p.push(Object(x.q)(e.$options.asyncData, t.context).then((function (t) {
                      for (var n in t) c.default.set(e.$data, n, t[n])
                    }))), Promise.all(p)
                  })), e.prev = 5, e.next = 8, Promise.all(r);
                case 8:
                  e.next = 15;
                  break;
                case 10:
                  e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(x.k)(e.t0), t.error(e.t0);
                case 15:
                  t.$loading.finish();
                case 16:
                case"end":
                  return e.stop()
              }
            }), e, null, [[5, 10]])
          })))()
        }, errorChanged: function () {
          if (this.nuxt.err) {
            this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
            var t = (R.options || R).layout;
            "function" == typeof t && (t = t(this.context)), this.setLayout(t)
          }
        }, setLayout: function (t) {
          return t && F["_" + t] || (t = "default"), this.layoutName = t, this.layout = F["_" + t], this.layout
        }, loadLayout: function (t) {
          return t && F["_" + t] || (t = "default"), Promise.resolve(F["_" + t])
        }
      }, components: {NuxtLoading: A}
    };
    n(57), n(125);

    function K(t, e) {
      var n;
      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (n = function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return V(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return V(t, e)
        }(t)) || e && t && "number" == typeof t.length) {
          n && (t = n);
          var i = 0, r = function () {
          };
          return {
            s: r, n: function () {
              return i >= t.length ? {done: !0} : {done: !1, value: t[i++]}
            }, e: function (t) {
              throw t
            }, f: r
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var o, c = !0, f = !1;
      return {
        s: function () {
          n = t[Symbol.iterator]()
        }, n: function () {
          var t = n.next();
          return c = t.done, t
        }, e: function (t) {
          f = !0, o = t
        }, f: function () {
          try {
            c || null == n.return || n.return()
          } finally {
            if (f) throw o
          }
        }
      }
    }

    function V(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n
    }

    c.default.use(f.a);
    var H = ["state", "getters", "actions", "mutations"], W = {};
    (W = function (t, e) {
      if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
      return "function" != typeof t && (t = Object.assign({}, t)), Z(t, e)
    }(n(236), "store/index.js")).modules = W.modules || {}, X(n(268), "challenges.js"), X(n(330), "notifications.js"), X(n(331), "scoreboard.js"), X(n(332), "teams.js"), X(n(333), "users.js");
    var J = W instanceof Function ? W : function () {
      return new f.a.Store(Object.assign({strict: !1}, W))
    };

    function Z(t, e) {
      if (t.state && "function" != typeof t.state) {
        console.warn("'state' should be a method that returns an object in ".concat(e));
        var n = Object.assign({}, t.state);
        t = Object.assign({}, t, {
          state: function () {
            return n
          }
        })
      }
      return t
    }

    function X(t, e) {
      t = t.default || t;
      var n = e.replace(/\.(js|mjs)$/, "").split("/"), r = n[n.length - 1], o = "store/".concat(e);
      if (t = "state" === r ? function (t, e) {
        if ("function" != typeof t) {
          console.warn("".concat(e, " should export a method that returns an object"));
          var n = Object.assign({}, t);
          return function () {
            return n
          }
        }
        return Z(t, e)
      }(t, o) : Z(t, o), H.includes(r)) {
        var c = r;
        Q(Y(W, n, {isProperty: !0}), t, c)
      } else {
        "index" === r && (n.pop(), r = n[n.length - 1]);
        var f, l = Y(W, n), d = K(H);
        try {
          for (d.s(); !(f = d.n()).done;) {
            var h = f.value;
            Q(l, t[h], h)
          }
        } catch (t) {
          d.e(t)
        } finally {
          d.f()
        }
        !1 === t.namespaced && delete l.namespaced
      }
    }

    function Y(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.isProperty,
        o = void 0 !== r && r;
      if (!e.length || o && 1 === e.length) return t;
      var c = e.shift();
      return t.modules[c] = t.modules[c] || {}, t.modules[c].namespaced = !0, t.modules[c].modules = t.modules[c].modules || {}, Y(t.modules[c], e, {isProperty: o})
    }

    function Q(t, e, n) {
      e && ("state" === n ? t.state = e || t.state : t[n] = Object.assign({}, t[n], e))
    }

    var tt = n(121), et = n.n(tt), nt = function (t, e) {
      return ot.apply(this, arguments)
    };

    function ot() {
      return (ot = Object(r.a)(regeneratorRuntime.mark((function t(e, n) {
        var r;
        return regeneratorRuntime.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              r = {
                "64x64": "/ctf/themes/tsgctf/static/_nuxt/icons/icon_64.59a784.png",
                "120x120": "/ctf/themes/tsgctf/static/_nuxt/icons/icon_120.59a784.png",
                "144x144": "/ctf/themes/tsgctf/static/_nuxt/icons/icon_144.59a784.png",
                "152x152": "/ctf/themes/tsgctf/static/_nuxt/icons/icon_152.59a784.png",
                "192x192": "/ctf/themes/tsgctf/static/_nuxt/icons/icon_192.59a784.png",
                "384x384": "/ctf/themes/tsgctf/static/_nuxt/icons/icon_384.59a784.png",
                "512x512": "/ctf/themes/tsgctf/static/_nuxt/icons/icon_512.59a784.png"
              }, n("icon", (function (t) {
                return r[t + "x" + t] || ""
              }));
            case 3:
            case"end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }

    window.$OneSignal = window.OneSignal = window.OneSignal || [], OneSignal.push(["init", {
      appId: "6acee8f3-7842-4a55-91f6-b63ac21a667d",
      allowLocalhostAsSecureOrigin: !0,
      welcomeNotification: {disable: !0}
    }]);
    var at = function (t, e) {
      e("OneSignal", OneSignal)
    }, it = n(187), st = n.n(it), ct = function (t, e) {
      t.app;
      e("md", new st.a("default"))
    }, ut = n(62), ft = n.n(ut), lt = n(188), pt = n.n(lt);

    function ht(t, e) {
      var n;
      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (n = function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return mt(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mt(t, e)
        }(t)) || e && t && "number" == typeof t.length) {
          n && (t = n);
          var i = 0, r = function () {
          };
          return {
            s: r, n: function () {
              return i >= t.length ? {done: !0} : {done: !1, value: t[i++]}
            }, e: function (t) {
              throw t
            }, f: r
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var o, c = !0, f = !1;
      return {
        s: function () {
          n = t[Symbol.iterator]()
        }, n: function () {
          var t = n.next();
          return c = t.done, t
        }, e: function (t) {
          f = !0, o = t
        }, f: function () {
          try {
            c || null == n.return || n.return()
          } finally {
            if (f) throw o
          }
        }
      }
    }

    function mt(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n
    }

    for (var gt = {
      setBaseURL: function (t) {
        this.defaults.baseURL = t
      }, setHeader: function (t, e) {
        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
          o = ht(Array.isArray(r) ? r : [r]);
        try {
          for (o.s(); !(n = o.n()).done;) {
            var c = n.value;
            if (!e) return void delete this.defaults.headers[c][t];
            this.defaults.headers[c][t] = e
          }
        } catch (t) {
          o.e(t)
        } finally {
          o.f()
        }
      }, setToken: function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
          r = t ? (e ? e + " " : "") + t : null;
        this.setHeader("Authorization", r, n)
      }, onRequest: function (t) {
        this.interceptors.request.use((function (e) {
          return t(e) || e
        }))
      }, onResponse: function (t) {
        this.interceptors.response.use((function (e) {
          return t(e) || e
        }))
      }, onRequestError: function (t) {
        this.interceptors.request.use(void 0, (function (e) {
          return t(e) || Promise.reject(e)
        }))
      }, onResponseError: function (t) {
        this.interceptors.response.use(void 0, (function (e) {
          return t(e) || Promise.reject(e)
        }))
      }, onError: function (t) {
        this.onRequestError(t), this.onResponseError(t)
      }, create: function (t) {
        return xt(pt()(t, this.defaults))
      }
    }, bt = function () {
      var t = yt[vt];
      gt["$" + t] = function () {
        return this[t].apply(this, arguments).then((function (t) {
          return t && t.data
        }))
      }
    }, vt = 0, yt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; vt < yt.length; vt++) bt();
    var xt = function (t) {
      var e = ft.a.create(t);
      return e.CancelToken = ft.a.CancelToken, e.isCancel = ft.a.isCancel, function (t) {
        for (var e in gt) t[e] = gt[e].bind(t)
      }(e), wt(e), e
    }, wt = function (t) {
      var e = {
        finish: function () {
        }, start: function () {
        }, fail: function () {
        }, set: function () {
        }
      }, n = function () {
        var t = "undefined" != typeof window && window.$nuxt;
        return t && t.$loading && t.$loading.set ? t.$loading : e
      }, r = 0;
      t.onRequest((function (t) {
        t && !1 === t.progress || r++
      })), t.onResponse((function (t) {
        t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
      })), t.onError((function (t) {
        t && t.config && !1 === t.config.progress || (r--, ft.a.isCancel(t) || (n().fail(), n().finish()))
      }));
      var o = function (t) {
        if (r) {
          var progress = 100 * t.loaded / (t.total * r);
          n().set(Math.min(100, progress))
        }
      };
      t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
    }, Ot = function (t, e) {
      var n = xt({
        baseURL: "/",
        headers: {
          common: {Accept: "application/json, text/plain, */*"},
          delete: {},
          get: {},
          head: {},
          post: {},
          put: {},
          patch: {}
        }
      });
      t.$axios = n, e("axios", n)
    }, jt = function () {
      var t = Object(r.a)(regeneratorRuntime.mark((function t(e) {
        return regeneratorRuntime.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return t.next = 3, e.store.dispatch("nuxtClientInit", e);
            case 3:
            case"end":
              return t.stop()
          }
        }), t)
      })));
      return function (e) {
        return t.apply(this, arguments)
      }
    }(), kt = function (t) {
      var e = t.$axios, n = t.store, r = t.env;
      e.onRequest((function (t) {
        void 0 !== n.state.csrfToken && (t.headers.common["csrf-token"] = n.state.csrfToken), n.state.isStatic && (t.headers.common.cookie = "session=".concat(r.session))
      }))
    }, _t = n(189);
    c.default.use(_t.a, {locale: "en"});
    var Ct = n(122), St = n(191), $t = n.n(St);
    n(418);

    function Tt(object, t) {
      var e = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(object, t).enumerable
        }))), e.push.apply(e, n)
      }
      return e
    }

    function Rt(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? Tt(Object(source), !0).forEach((function (e) {
          Object(o.a)(t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : Tt(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }

    c.default.use($t.a, {}), c.default.component(h.a.name, h.a), c.default.component(v.a.name, Rt(Rt({}, v.a), {}, {
      render: function (t, e) {
        return v.a._warned || (v.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), v.a.render(t, e)
      }
    })), c.default.component(_.name, _), c.default.component("NChild", _), c.default.component(I.name, I), Object.defineProperty(c.default.prototype, "$nuxt", {
      get: function () {
        return this.$root.$options.$nuxt
      }, configurable: !0
    }), c.default.use(l.a, {
      keyName: "head",
      attribute: "data-n-head",
      ssrAttribute: "data-n-head-ssr",
      tagIDKeyName: "hid"
    });
    var Pt = {
      name: "page",
      mode: "out-in",
      appear: !0,
      appearClass: "appear",
      appearActiveClass: "appear-active",
      appearToClass: "appear-to"
    };
    f.a.Store.prototype.registerModule;

    function It(t) {
      return Et.apply(this, arguments)
    }

    function Et() {
      return (Et = Object(r.a)(regeneratorRuntime.mark((function t(e) {
        var n, r, o, f, l, d, path, h, m = arguments;
        return regeneratorRuntime.wrap((function (t) {
          for (; ;) switch (t.prev = t.next) {
            case 0:
              return h = function (t, e) {
                if (!t) throw new Error("inject(key, value) has no key provided");
                if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                f[t = "$" + t] = e, f.context[t] || (f.context[t] = e), o[t] = f[t];
                var n = "__nuxt_" + t + "_installed__";
                c.default[n] || (c.default[n] = !0, c.default.use((function () {
                  Object.prototype.hasOwnProperty.call(c.default.prototype, t) || Object.defineProperty(c.default.prototype, t, {
                    get: function () {
                      return this.$root.$options[t]
                    }
                  })
                })))
              }, n = m.length > 1 && void 0 !== m[1] ? m[1] : {}, t.next = 4, k();
            case 4:
              return r = t.sent, (o = J(e)).$router = r, f = Rt({
                head: {
                  title: "NY QUEST 2021",
                  meta: [{charset: "utf-8"}, {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                  }, {
                    name: "description",
                    hid: "description",
                    content: "NY QUEST 2021 is an on-line CTF organized by TSG, the official computer society of The University of Tokyo"
                  }, {name: "apple-mobile-web-app-title", content: "NY QUEST 2021"}, {
                    name: "og:title",
                    content: "NY QUEST 2021"
                  }, {name: "og:site_name", content: "NY QUEST 2021"}, {
                    name: "og:description",
                    content: "NY QUEST 2021 is an on-line CTF organized by TSG, the official computer society of The University of Tokyo"
                  }, {name: "og:type", content: "website"}, {
                    name: "og:url",
                    content: "https://score.ctf.tsg.ne.jp"
                  }, {name: "og:image", content: "/themes/tsgctf/static/ogimage.jpg"}, {
                    name: "twitter:card",
                    content: "summary"
                  }, {name: "twitter:site", content: "@tsg_ut"}, {
                    name: "twitter:title",
                    content: "NY QUEST 2021"
                  }, {
                    name: "twitter:description",
                    content: "NY QUEST 2021 is an on-line CTF organized by TSG, the official computer society of The University of Tokyo"
                  }, {name: "twitter:image", content: "/themes/tsgctf/static/ogimage.jpg"}, {
                    name: "twitter:image:alt",
                    content: "NY QUEST 2021"
                  }, {hid: "mobile-web-app-capable", name: "mobile-web-app-capable", content: "yes"}, {
                    hid: "author",
                    name: "author",
                    content: "Koki Takahashi"
                  }, {hid: "theme-color", name: "theme-color", content: "#fff"}],
                  link: [{rel: "icon", type: "image/png", href: "/themes/tsgctf/static/favicon.png"}, {
                    rel: "manifest",
                    href: "/ctf/themes/tsgctf/static/_nuxt/manifest.ce7405cb.json"
                  }, {
                    rel: "shortcut icon",
                    href: "/ctf/themes/tsgctf/static/_nuxt/icons/icon_64.59a784.png"
                  }, {
                    rel: "apple-touch-icon",
                    href: "/ctf/themes/tsgctf/static/_nuxt/icons/icon_512.59a784.png",
                    sizes: "512x512"
                  }],
                  style: [],
                  script: [{async: !0, src: "https://cdn.onesignal.com/sdks/OneSignalSDK.js", hid: "onesignal"}],
                  htmlAttrs: {lang: "en"}
                }, store: o, router: r, nuxt: {
                  defaultTransition: Pt, transitions: [Pt], setTransitions: function (t) {
                    return Array.isArray(t) || (t = [t]), t = t.map((function (t) {
                      return t = t ? "string" == typeof t ? Object.assign({}, Pt, {name: t}) : Object.assign({}, Pt, t) : Pt
                    })), this.$options.nuxt.transitions = t, t
                  }, err: null, dateErr: null, error: function (t) {
                    t = t || null, f.context._errored = Boolean(t), t = t ? Object(x.p)(t) : null;
                    var n = f.nuxt;
                    return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                  }
                }
              }, z), o.app = f, l = e ? e.next : function (t) {
                return f.router.push(t)
              }, e ? d = r.resolve(e.url).route : (path = Object(x.f)(r.options.base, r.options.mode), d = r.resolve(path).route), t.next = 13, Object(x.t)(f, {
                store: o,
                route: d,
                next: l,
                error: f.nuxt.error.bind(f),
                payload: e ? e.payload : void 0,
                req: e ? e.req : void 0,
                res: e ? e.res : void 0,
                beforeRenderFns: e ? e.beforeRenderFns : void 0,
                ssrContext: e
              });
            case 13:
              if (h("config", n), window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state), f.context.enablePreview = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                f.previewData = Object.assign({}, t), h("preview", t)
              }, "function" != typeof et.a) {
                t.next = 19;
                break
              }
              return t.next = 19, et()(f.context, h);
            case 19:
              return t.next = 22, nt(f.context, h);
            case 22:
              return t.next = 25, at(f.context, h);
            case 25:
              return t.next = 28, ct(f.context, h);
            case 28:
              return t.next = 31, Ot(f.context, h);
            case 31:
              if ("function" != typeof jt) {
                t.next = 34;
                break
              }
              return t.next = 34, jt(f.context, h);
            case 34:
              return t.next = 37, kt(f.context);
            case 37:
              t.next = 40;
              break;
            case 40:
              if ("function" != typeof Ct.a) {
                t.next = 43;
                break
              }
              return t.next = 43, Object(Ct.a)(f.context, h);
            case 43:
              t.next = 46;
              break;
            case 46:
              f.context.enablePreview = function () {
                console.warn("You cannot call enablePreview() outside a plugin.")
              }, t.next = 50;
              break;
            case 50:
              return t.abrupt("return", {store: o, app: f, router: r});
            case 51:
            case"end":
              return t.stop()
          }
        }), t)
      })))).apply(this, arguments)
    }
  }, 330: function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "state", (function () {
      return l
    })), n.d(e, "getters", (function () {
      return d
    })), n.d(e, "mutations", (function () {
      return h
    })), n.d(e, "actions", (function () {
      return m
    }));
    n(21), n(11), n(10), n(6), n(17), n(12);
    var r = n(2), o = n(4);

    function c(object, t) {
      var e = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(object, t).enumerable
        }))), e.push.apply(e, n)
      }
      return e
    }

    function f(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? c(Object(source), !0).forEach((function (e) {
          Object(o.a)(t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }

    var l = function () {
      return {notifications: []}
    }, d = {
      getNotifications: function (s) {
        return s.notifications.slice().sort((function (a, b) {
          return b.id - a.id
        })).map((function (t) {
          return f(f({}, t), {}, {date: new Date(t.date)})
        }))
      }
    }, h = {
      setNotifications: function (s, t) {
        s.notifications = t
      }
    }, m = {
      updateNotifications: function (t, e) {
        return Object(r.a)(regeneratorRuntime.mark((function n() {
          var r, o, c, data;
          return regeneratorRuntime.wrap((function (n) {
            for (; ;) switch (n.prev = n.next) {
              case 0:
                return r = t.commit, o = e.$axios, n.next = 4, o.get("/ctf/api/v1/notifications");
              case 4:
                c = n.sent, data = c.data, "application/json" === c.headers["content-type"] ? r("setNotifications", data.data) : r("setIsLoggedIn", !1, {root: !0});
              case 8:
              case"end":
                return n.stop()
            }
          }), n)
        })))()
      }
    }
  }, 331: function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "state", (function () {
      return d
    })), n.d(e, "getters", (function () {
      return h
    })), n.d(e, "mutations", (function () {
      return m
    })), n.d(e, "actions", (function () {
      return v
    }));
    n(21), n(11), n(17), n(12);
    var r = n(2), o = (n(25), n(4)), c = n(47);
    n(165), n(10), n(6), n(20), n(89), n(77);

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

    function l(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? f(Object(source), !0).forEach((function (e) {
          Object(o.a)(t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }

    var d = function () {
      return {scoreboard: [], teams: []}
    }, h = {
      getScore: function (s) {
        return function (t) {
          var e = function (t, e, n) {
            return t.scoreboard[n].find((function (t) {
              return t.account_id === e
            })) || {score: 0, pos: t.scoreboard[n].length + 1}
          };
          return {test: e(s, t, "test"), ctf: e(s, t, "ctf")}
        }
      }, getScoreboard: function (s) {
        var t = function (t, e) {
          var n = new Set(t.scoreboard[e].map((function (t) {
            return t.account_id
          }))), r = t.teams.filter((function (t) {
            var e = t.id;
            return !n.has(e)
          })), o = new Map(t.teams.map((function (t) {
            return [t.id, t]
          })));
          return [].concat(Object(c.a)(t.scoreboard[e].map((function (t) {
            return l(l({}, t), {}, {
              country: o.has(t.account_id) ? o.get(t.account_id).country : null,
              hidden: t.hidden
            })
          }))), Object(c.a)(r.map((function (n) {
            return {
              name: n.name,
              account_id: n.id,
              country: n.country,
              pos: t.scoreboard[e].length + 1,
              score: 0,
              hidden: n.hidden
            }
          }))))
        };
        return {test: t(s, "ctf"), other: t(s, "ctf")}
      }
    }, m = {
      setScoreboard: function (s, t) {
        s.scoreboard = t
      }, setTeams: function (s, t) {
        s.teams = t
      }
    }, v = {
      update: function (t, e) {
        return Object(r.a)(regeneratorRuntime.mark((function n() {
          var r, o;
          return regeneratorRuntime.wrap((function (n) {
            for (; ;) switch (n.prev = n.next) {
              case 0:
                return r = t.dispatch, o = e.$axios, n.next = 4, Promise.all([r("updateScoreboard", {$axios: o}), r("updateTeams", {$axios: o})]);
              case 4:
              case"end":
                return n.stop()
            }
          }), n)
        })))()
      }, updateScoreboard: function (t, e) {
        return Object(r.a)(regeneratorRuntime.mark((function n() {
          var r, o, c, data;
          return regeneratorRuntime.wrap((function (n) {
            for (; ;) switch (n.prev = n.next) {
              case 0:
                return r = t.commit, o = e.$axios, n.next = 4, o.get("/ctf/api/v1/scoreboard");
              case 4:
                c = n.sent, data = c.data, "application/json" === c.headers["content-type"] ? r("setScoreboard", data.data) : r("setIsLoggedIn", !1, {root: !0});
              case 8:
              case"end":
                return n.stop()
            }
          }), n)
        })))()
      }, updateTeams: function (t, e) {
        return Object(r.a)(regeneratorRuntime.mark((function n() {
          var r, o, c, data;
          return regeneratorRuntime.wrap((function (n) {
            for (; ;) switch (n.prev = n.next) {
              case 0:
                return r = t.commit, o = e.$axios, n.next = 4, o.get("/ctf/api/v1/teams");
              case 4:
                c = n.sent, data = c.data, "application/json" === c.headers["content-type"] ? r("setTeams", data.data) : r("setIsLoggedIn", !1, {root: !0});
              case 8:
              case"end":
                return n.stop()
            }
          }), n)
        })))()
      }
    }
  }, 332: function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "state", (function () {
      return h
    })), n.d(e, "getters", (function () {
      return m
    })), n.d(e, "mutations", (function () {
      return v
    })), n.d(e, "actions", (function () {
      return y
    }));
    n(21), n(11), n(17);
    var r = n(47), o = (n(89), n(38), n(4)), c = n(22), f = (n(12), n(2));
    n(10), n(6), n(20), n(165);

    function l(object, t) {
      var e = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(object);
        t && (n = n.filter((function (t) {
          return Object.getOwnPropertyDescriptor(object, t).enumerable
        }))), e.push.apply(e, n)
      }
      return e
    }

    function d(t) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? l(Object(source), !0).forEach((function (e) {
          Object(o.a)(t, e, source[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
        }))
      }
      return t
    }

    var h = function () {
      return {teams: new Map}
    }, m = {
      getTeam: function (s, t) {
        return s.teams.get(t)
      }
    }, v = {
      setTeam: function (s, t) {
        s.teams.set(t.id, t)
      }
    }, y = {
      getTeam: function (t, e) {
        return Object(f.a)(regeneratorRuntime.mark((function n() {
          var o, f, l, h, m, v, y, x, w, O, j, k, _;
          return regeneratorRuntime.wrap((function (n) {
            for (; ;) switch (n.prev = n.next) {
              case 0:
                return o = t.commit, f = t.dispatch, l = t.rootState, h = e.$axios, m = e.id, n.next = 4, Promise.all([h.get("/ctf/api/v1/teams/".concat(m)), h.get("/ctf/api/v1/teams/".concat(m, "/solves"))]);
              case 4:
                if (v = n.sent, y = Object(c.a)(v, 2), x = y[0], w = x.data, O = x.headers, j = y[1].data, "application/json" !== O["content-type"]) {
                  n.next = 18;
                  break
                }
                if (k = d(d({}, w.data), {}, {solves: j.data}), o("setTeam", k), !l.isStatic) {
                  n.next = 17;
                  break
                }
                return _ = Array.from(new Set([].concat(Object(r.a)(j.data.map((function (t) {
                  return t.user
                }))), Object(r.a)(w.data.members)))), n.next = 17, f("users/getUsers", {$axios: h, ids: _}, {root: !0});
              case 17:
                return n.abrupt("return", k);
              case 18:
                return o("setIsLoggedIn", !1, {root: !0}), n.abrupt("return", null);
              case 20:
              case"end":
                return n.stop()
            }
          }), n)
        })))()
      }
    }
  }, 333: function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "state", (function () {
      return o
    })), n.d(e, "getters", (function () {
      return c
    })), n.d(e, "mutations", (function () {
      return f
    })), n.d(e, "actions", (function () {
      return l
    }));
    n(10), n(6), n(20), n(12);
    var r = n(2), o = (n(77), function () {
      return {users: []}
    }), c = {
      getUser: function (s) {
        return function (t) {
          return s.users.find((function (e) {
            return e.id === t
          }))
        }
      }
    }, f = {
      setUser: function (s, t) {
        s.users.push(t)
      }
    }, l = {
      getUser: function (t, e) {
        return Object(r.a)(regeneratorRuntime.mark((function n() {
          var r, o, c, f, l, data;
          return regeneratorRuntime.wrap((function (n) {
            for (; ;) switch (n.prev = n.next) {
              case 0:
                if (r = t.commit, o = t.getters.getUser, c = e.$axios, f = e.id, !o(f)) {
                  n.next = 4;
                  break
                }
                return n.abrupt("return");
              case 4:
                return n.next = 6, c.get("/ctf/api/v1/users/".concat(f));
              case 6:
                l = n.sent, data = l.data, "application/json" === l.headers["content-type"] ? r("setUser", data.data) : r("setIsLoggedIn", !1, {root: !0});
              case 10:
              case"end":
                return n.stop()
            }
          }), n)
        })))()
      }, getUsers: function (t, e) {
        return Object(r.a)(regeneratorRuntime.mark((function n() {
          var r, o, c;
          return regeneratorRuntime.wrap((function (n) {
            for (; ;) switch (n.prev = n.next) {
              case 0:
                return t.commit, r = t.dispatch, o = e.$axios, c = e.ids, n.next = 4, Promise.all(c.map((function (t) {
                  return r("getUser", {$axios: o, id: t})
                })));
              case 4:
              case"end":
                return n.stop()
            }
          }), n)
        })))()
      }
    }
  }, 84: function (t, e, n) {
    "use strict";
    n(10), n(44), n(11), n(20), n(38), n(25), n(35), n(36), n(6), n(57), n(75);
    var r = n(1);

    function o(t, e) {
      var n;
      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (n = function (t, e) {
          if (!t) return;
          if ("string" == typeof t) return c(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === n && t.constructor && (n = t.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(t);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
        }(t)) || e && t && "number" == typeof t.length) {
          n && (t = n);
          var i = 0, r = function () {
          };
          return {
            s: r, n: function () {
              return i >= t.length ? {done: !0} : {done: !1, value: t[i++]}
            }, e: function (t) {
              throw t
            }, f: r
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var o, f = !0, l = !1;
      return {
        s: function () {
          n = t[Symbol.iterator]()
        }, n: function () {
          var t = n.next();
          return f = t.done, t
        }, e: function (t) {
          l = !0, o = t
        }, f: function () {
          try {
            f || null == n.return || n.return()
          } finally {
            if (l) throw o
          }
        }
      }
    }

    function c(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n
    }

    var f = window.requestIdleCallback || function (t) {
      var e = Date.now();
      return setTimeout((function () {
        t({
          didTimeout: !1, timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - e))
          }
        })
      }), 1)
    }, l = window.cancelIdleCallback || function (t) {
      clearTimeout(t)
    }, d = window.IntersectionObserver && new window.IntersectionObserver((function (t) {
      t.forEach((function (t) {
        var e = t.intersectionRatio, link = t.target;
        e <= 0 || link.__prefetch()
      }))
    }));
    e.a = {
      name: "NuxtLink",
      extends: r.default.component("RouterLink"),
      props: {prefetch: {type: Boolean, default: !0}, noPrefetch: {type: Boolean, default: !1}},
      mounted: function () {
        this.prefetch && !this.noPrefetch && (this.handleId = f(this.observe, {timeout: 2e3}))
      },
      beforeDestroy: function () {
        l(this.handleId), this.__observed && (d.unobserve(this.$el), delete this.$el.__prefetch)
      },
      methods: {
        observe: function () {
          d && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), d.observe(this.$el), this.__observed = !0)
        }, shouldPrefetch: function () {
          return this.getPrefetchComponents().length > 0
        }, canPrefetch: function () {
          var t = navigator.connection;
          return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
        }, getPrefetchComponents: function () {
          return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function (t) {
            return t.components.default
          })).filter((function (t) {
            return "function" == typeof t && !t.options && !t.__prefetched
          }))
        }, prefetchLink: function () {
          if (this.canPrefetch()) {
            d.unobserve(this.$el);
            var t, e = o(this.getPrefetchComponents());
            try {
              for (e.s(); !(t = e.n()).done;) {
                var n = t.value, r = n();
                r instanceof Promise && r.catch((function () {
                })), n.__prefetched = !0
              }
            } catch (t) {
              e.e(t)
            } finally {
              e.f()
            }
          }
        }
      }
    }
  }
}, [[198, 15, 1, 16]]]);