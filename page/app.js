(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // node_modules/highcharts/highcharts.js
  var require_highcharts = __commonJS({
    "node_modules/highcharts/highcharts.js"(exports, module) {
      "use strict";
      (function(X, L) {
        typeof module === "object" && module.exports ? (L["default"] = L, module.exports = X.document ? L(X) : L) : typeof define === "function" && define.amd ? define("highcharts/highcharts", function() {
          return L(X);
        }) : (X.Highcharts && X.Highcharts.error(16, true), X.Highcharts = L(X));
      })(typeof window !== "undefined" ? window : exports, function(X) {
        function L(v, a2, E, H) {
          v.hasOwnProperty(a2) || (v[a2] = H.apply(null, E));
        }
        var a = {};
        L(a, "Core/Globals.js", [], function() {
          var v = typeof X !== "undefined" ? X : typeof window !== "undefined" ? window : {}, a2;
          (function(a3) {
            a3.SVG_NS = "http://www.w3.org/2000/svg";
            a3.product = "Highcharts";
            a3.version = "9.1.2";
            a3.win = v;
            a3.doc = a3.win.document;
            a3.svg = a3.doc && a3.doc.createElementNS && !!a3.doc.createElementNS(a3.SVG_NS, "svg").createSVGRect;
            a3.userAgent = a3.win.navigator && a3.win.navigator.userAgent || "";
            a3.isChrome = a3.userAgent.indexOf("Chrome") !== -1;
            a3.isFirefox = a3.userAgent.indexOf("Firefox") !== -1;
            a3.isMS = /(edge|msie|trident)/i.test(a3.userAgent) && !a3.win.opera;
            a3.isSafari = !a3.isChrome && a3.userAgent.indexOf("Safari") !== -1;
            a3.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(a3.userAgent);
            a3.isWebKit = a3.userAgent.indexOf("AppleWebKit") !== -1;
            a3.deg2rad = 2 * Math.PI / 360;
            a3.hasBidiBug = a3.isFirefox && 4 > parseInt(a3.userAgent.split("Firefox/")[1], 10);
            a3.hasTouch = !!a3.win.TouchEvent;
            a3.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"];
            a3.noop = function() {
            };
            a3.supportsPassiveEvents = function() {
              var v2 = false;
              if (!a3.isMS) {
                var u = Object.defineProperty({}, "passive", { get: function() {
                  v2 = true;
                } });
                a3.win.addEventListener && a3.win.removeEventListener && (a3.win.addEventListener("testPassive", a3.noop, u), a3.win.removeEventListener("testPassive", a3.noop, u));
              }
              return v2;
            }();
            a3.charts = [];
            a3.dateFormats = {};
            a3.seriesTypes = {};
            a3.symbolSizes = {};
            a3.chartCount = 0;
          })(a2 || (a2 = {}));
          return a2;
        });
        L(a, "Core/Utilities.js", [a["Core/Globals.js"]], function(a2) {
          function v(b2, d2, g2, r2) {
            var D = d2 ? "Highcharts error" : "Highcharts warning";
            b2 === 32 && (b2 = D + ": Deprecated member");
            var C = h(b2), M = C ? D + " #" + b2 + ": www.highcharts.com/errors/" + b2 + "/" : b2.toString();
            if (typeof r2 !== "undefined") {
              var l2 = "";
              C && (M += "?");
              J(r2, function(b3, Q) {
                l2 += "\n - " + Q + ": " + b3;
                C && (M += encodeURI(Q) + "=" + encodeURI(b3));
              });
              M += l2;
            }
            A(a2, "displayError", { chart: g2, code: b2, message: M, params: r2 }, function() {
              if (d2)
                throw Error(M);
              k.console && v.messages.indexOf(M) === -1 && console.warn(M);
            });
            v.messages.push(M);
          }
          function E(b2, d2) {
            var D = {};
            J(b2, function(g2, k2) {
              if (G(b2[k2], true) && !b2.nodeType && d2[k2])
                g2 = E(b2[k2], d2[k2]), Object.keys(g2).length && (D[k2] = g2);
              else if (G(b2[k2]) || b2[k2] !== d2[k2])
                D[k2] = b2[k2];
            });
            return D;
          }
          function H(b2, d2) {
            return parseInt(b2, d2 || 10);
          }
          function x(b2) {
            return typeof b2 === "string";
          }
          function y(b2) {
            b2 = Object.prototype.toString.call(b2);
            return b2 === "[object Array]" || b2 === "[object Array Iterator]";
          }
          function G(b2, d2) {
            return !!b2 && typeof b2 === "object" && (!d2 || !y(b2));
          }
          function B(b2) {
            return G(b2) && typeof b2.nodeType === "number";
          }
          function q(b2) {
            var d2 = b2 && b2.constructor;
            return !(!G(b2, true) || B(b2) || !d2 || !d2.name || d2.name === "Object");
          }
          function h(b2) {
            return typeof b2 === "number" && !isNaN(b2) && Infinity > b2 && -Infinity < b2;
          }
          function f(b2) {
            return typeof b2 !== "undefined" && b2 !== null;
          }
          function c(b2, d2, g2) {
            var k2;
            x(d2) ? f(g2) ? b2.setAttribute(d2, g2) : b2 && b2.getAttribute && ((k2 = b2.getAttribute(d2)) || d2 !== "class" || (k2 = b2.getAttribute(d2 + "Name"))) : J(d2, function(d3, g3) {
              b2.setAttribute(g3, d3);
            });
            return k2;
          }
          function e(b2, d2) {
            var g2;
            b2 || (b2 = {});
            for (g2 in d2)
              b2[g2] = d2[g2];
            return b2;
          }
          function t() {
            for (var b2 = arguments, d2 = b2.length, g2 = 0; g2 < d2; g2++) {
              var k2 = b2[g2];
              if (typeof k2 !== "undefined" && k2 !== null)
                return k2;
            }
          }
          function m(b2, d2) {
            a2.isMS && !a2.svg && d2 && typeof d2.opacity !== "undefined" && (d2.filter = "alpha(opacity=" + 100 * d2.opacity + ")");
            e(b2.style, d2);
          }
          function w(b2, g2, k2, r2, l2) {
            b2 = d.createElement(b2);
            g2 && e(b2, g2);
            l2 && m(b2, { padding: "0", border: "none", margin: "0" });
            k2 && m(b2, k2);
            r2 && r2.appendChild(b2);
            return b2;
          }
          function n(b2, d2) {
            return parseFloat(b2.toPrecision(d2 || 14));
          }
          function l(b2, d2, g2) {
            var D = a2.getStyle || l;
            if (d2 === "width")
              return d2 = Math.min(b2.offsetWidth, b2.scrollWidth), g2 = b2.getBoundingClientRect && b2.getBoundingClientRect().width, g2 < d2 && g2 >= d2 - 1 && (d2 = Math.floor(g2)), Math.max(0, d2 - (D(b2, "padding-left", true) || 0) - (D(b2, "padding-right", true) || 0));
            if (d2 === "height")
              return Math.max(0, Math.min(b2.offsetHeight, b2.scrollHeight) - (D(b2, "padding-top", true) || 0) - (D(b2, "padding-bottom", true) || 0));
            k.getComputedStyle || v(27, true);
            if (b2 = k.getComputedStyle(b2, void 0)) {
              var r2 = b2.getPropertyValue(d2);
              t(g2, d2 !== "opacity") && (r2 = H(r2));
            }
            return r2;
          }
          function J(b2, d2, g2) {
            for (var k2 in b2)
              Object.hasOwnProperty.call(b2, k2) && d2.call(g2 || b2[k2], b2[k2], k2, b2);
          }
          function K(b2, d2, g2) {
            function k2(d3, z) {
              var Q = b2.removeEventListener || a2.removeEventListenerPolyfill;
              Q && Q.call(b2, d3, z, false);
            }
            function r2(g3) {
              var z;
              if (b2.nodeName) {
                if (d2) {
                  var Q = {};
                  Q[d2] = true;
                } else
                  Q = g3;
                J(Q, function(b3, d3) {
                  if (g3[d3])
                    for (z = g3[d3].length; z--; )
                      k2(d3, g3[d3][z].fn);
                });
              }
            }
            var D = typeof b2 === "function" && b2.prototype || b2;
            if (Object.hasOwnProperty.call(D, "hcEvents")) {
              var l2 = D.hcEvents;
              d2 ? (D = l2[d2] || [], g2 ? (l2[d2] = D.filter(function(b3) {
                return g2 !== b3.fn;
              }), k2(d2, g2)) : (r2(l2), l2[d2] = [])) : (r2(l2), delete D.hcEvents);
            }
          }
          function A(b2, g2, k2, r2) {
            k2 = k2 || {};
            if (d.createEvent && (b2.dispatchEvent || b2.fireEvent && b2 !== a2)) {
              var D = d.createEvent("Events");
              D.initEvent(g2, true, true);
              k2 = e(D, k2);
              b2.dispatchEvent ? b2.dispatchEvent(k2) : b2.fireEvent(g2, k2);
            } else if (b2.hcEvents) {
              k2.target || e(k2, { preventDefault: function() {
                k2.defaultPrevented = true;
              }, target: b2, type: g2 });
              D = [];
              for (var l2 = b2, C = false; l2.hcEvents; )
                Object.hasOwnProperty.call(l2, "hcEvents") && l2.hcEvents[g2] && (D.length && (C = true), D.unshift.apply(D, l2.hcEvents[g2])), l2 = Object.getPrototypeOf(l2);
              C && D.sort(function(b3, z) {
                return b3.order - z.order;
              });
              D.forEach(function(d2) {
                d2.fn.call(b2, k2) === false && k2.preventDefault();
              });
            }
            r2 && !k2.defaultPrevented && r2.call(b2, k2);
          }
          var p = a2.charts, d = a2.doc, k = a2.win;
          "";
          (v || (v = {})).messages = [];
          var b;
          Math.easeInOutSine = function(b2) {
            return -0.5 * (Math.cos(Math.PI * b2) - 1);
          };
          var g = Array.prototype.find ? function(b2, d2) {
            return b2.find(d2);
          } : function(b2, d2) {
            var g2, k2 = b2.length;
            for (g2 = 0; g2 < k2; g2++)
              if (d2(b2[g2], g2))
                return b2[g2];
          };
          J({
            map: "map",
            each: "forEach",
            grep: "filter",
            reduce: "reduce",
            some: "some"
          }, function(b2, d2) {
            a2[d2] = function(g2) {
              var k2;
              v(32, false, void 0, (k2 = {}, k2["Highcharts." + d2] = "use Array." + b2, k2));
              return Array.prototype[b2].apply(g2, [].slice.call(arguments, 1));
            };
          });
          var r, F = function() {
            var b2 = Math.random().toString(36).substring(2, 9) + "-", d2 = 0;
            return function() {
              return "highcharts-" + (r ? "" : b2) + d2++;
            };
          }();
          k.jQuery && (k.jQuery.fn.highcharts = function() {
            var b2 = [].slice.call(arguments);
            if (this[0])
              return b2[0] ? (new a2[x(b2[0]) ? b2.shift() : "Chart"](this[0], b2[0], b2[1]), this) : p[c(this[0], "data-highcharts-chart")];
          });
          return { addEvent: function(b2, d2, g2, k2) {
            k2 === void 0 && (k2 = {});
            var r2 = typeof b2 === "function" && b2.prototype || b2;
            Object.hasOwnProperty.call(r2, "hcEvents") || (r2.hcEvents = {});
            r2 = r2.hcEvents;
            a2.Point && b2 instanceof a2.Point && b2.series && b2.series.chart && (b2.series.chart.runTrackerClick = true);
            var l2 = b2.addEventListener || a2.addEventListenerPolyfill;
            l2 && l2.call(b2, d2, g2, a2.supportsPassiveEvents ? { passive: k2.passive === void 0 ? d2.indexOf("touch") !== -1 : k2.passive, capture: false } : false);
            r2[d2] || (r2[d2] = []);
            r2[d2].push({
              fn: g2,
              order: typeof k2.order === "number" ? k2.order : Infinity
            });
            r2[d2].sort(function(b3, d3) {
              return b3.order - d3.order;
            });
            return function() {
              K(b2, d2, g2);
            };
          }, arrayMax: function(b2) {
            for (var d2 = b2.length, g2 = b2[0]; d2--; )
              b2[d2] > g2 && (g2 = b2[d2]);
            return g2;
          }, arrayMin: function(b2) {
            for (var d2 = b2.length, g2 = b2[0]; d2--; )
              b2[d2] < g2 && (g2 = b2[d2]);
            return g2;
          }, attr: c, clamp: function(b2, d2, g2) {
            return b2 > d2 ? b2 < g2 ? b2 : g2 : d2;
          }, cleanRecursively: E, clearTimeout: function(b2) {
            f(b2) && clearTimeout(b2);
          }, correctFloat: n, createElement: w, css: m, defined: f, destroyObjectProperties: function(b2, d2) {
            J(b2, function(g2, k2) {
              g2 && g2 !== d2 && g2.destroy && g2.destroy();
              delete b2[k2];
            });
          }, discardElement: function(d2) {
            b || (b = w("div"));
            d2 && b.appendChild(d2);
            b.innerHTML = "";
          }, erase: function(b2, d2) {
            for (var g2 = b2.length; g2--; )
              if (b2[g2] === d2) {
                b2.splice(g2, 1);
                break;
              }
          }, error: v, extend: e, extendClass: function(b2, d2) {
            var g2 = function() {
            };
            g2.prototype = new b2();
            e(g2.prototype, d2);
            return g2;
          }, find: g, fireEvent: A, getMagnitude: function(b2) {
            return Math.pow(10, Math.floor(Math.log(b2) / Math.LN10));
          }, getNestedProperty: function(b2, d2) {
            for (b2 = b2.split("."); b2.length && f(d2); ) {
              var g2 = b2.shift();
              if (typeof g2 === "undefined" || g2 === "__proto__")
                return;
              d2 = d2[g2];
              if (!f(d2) || typeof d2 === "function" || typeof d2.nodeType === "number" || d2 === k)
                return;
            }
            return d2;
          }, getStyle: l, inArray: function(b2, d2, g2) {
            v(32, false, void 0, { "Highcharts.inArray": "use Array.indexOf" });
            return d2.indexOf(b2, g2);
          }, isArray: y, isClass: q, isDOMElement: B, isFunction: function(b2) {
            return typeof b2 === "function";
          }, isNumber: h, isObject: G, isString: x, keys: function(b2) {
            v(32, false, void 0, { "Highcharts.keys": "use Object.keys" });
            return Object.keys(b2);
          }, merge: function() {
            var b2, d2 = arguments, g2 = {}, k2 = function(b3, d3) {
              typeof b3 !== "object" && (b3 = {});
              J(d3, function(g3, z) {
                z !== "__proto__" && z !== "constructor" && (!G(g3, true) || q(g3) || B(g3) ? b3[z] = d3[z] : b3[z] = k2(b3[z] || {}, g3));
              });
              return b3;
            };
            d2[0] === true && (g2 = d2[1], d2 = Array.prototype.slice.call(d2, 2));
            var r2 = d2.length;
            for (b2 = 0; b2 < r2; b2++)
              g2 = k2(g2, d2[b2]);
            return g2;
          }, normalizeTickInterval: function(b2, d2, g2, k2, r2) {
            var l2 = b2;
            g2 = t(g2, 1);
            var c2 = b2 / g2;
            d2 || (d2 = r2 ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], k2 === false && (g2 === 1 ? d2 = d2.filter(function(b3) {
              return b3 % 1 === 0;
            }) : 0.1 >= g2 && (d2 = [1 / g2])));
            for (k2 = 0; k2 < d2.length && !(l2 = d2[k2], r2 && l2 * g2 >= b2 || !r2 && c2 <= (d2[k2] + (d2[k2 + 1] || d2[k2])) / 2); k2++)
              ;
            return l2 = n(l2 * g2, -Math.round(Math.log(1e-3) / Math.LN10));
          }, objectEach: J, offset: function(b2) {
            var g2 = d.documentElement;
            b2 = b2.parentElement || b2.parentNode ? b2.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };
            return { top: b2.top + (k.pageYOffset || g2.scrollTop) - (g2.clientTop || 0), left: b2.left + (k.pageXOffset || g2.scrollLeft) - (g2.clientLeft || 0), width: b2.width, height: b2.height };
          }, pad: function(b2, d2, g2) {
            return Array((d2 || 2) + 1 - String(b2).replace("-", "").length).join(g2 || "0") + b2;
          }, pick: t, pInt: H, relativeLength: function(b2, d2, g2) {
            return /%$/.test(b2) ? d2 * parseFloat(b2) / 100 + (g2 || 0) : parseFloat(b2);
          }, removeEvent: K, splat: function(b2) {
            return y(b2) ? b2 : [b2];
          }, stableSort: function(b2, d2) {
            var g2 = b2.length, k2, r2;
            for (r2 = 0; r2 < g2; r2++)
              b2[r2].safeI = r2;
            b2.sort(function(b3, g3) {
              k2 = d2(b3, g3);
              return k2 === 0 ? b3.safeI - g3.safeI : k2;
            });
            for (r2 = 0; r2 < g2; r2++)
              delete b2[r2].safeI;
          }, syncTimeout: function(b2, d2, g2) {
            if (0 < d2)
              return setTimeout(b2, d2, g2);
            b2.call(0, g2);
            return -1;
          }, timeUnits: { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 314496e5 }, uniqueKey: F, useSerialIds: function(b2) {
            return r = t(b2, r);
          }, wrap: function(b2, d2, g2) {
            var k2 = b2[d2];
            b2[d2] = function() {
              var b3 = Array.prototype.slice.call(arguments), d3 = arguments, r2 = this;
              r2.proceed = function() {
                k2.apply(r2, arguments.length ? arguments : d3);
              };
              b3.unshift(k2);
              b3 = g2.apply(this, b3);
              r2.proceed = null;
              return b3;
            };
          } };
        });
        L(a, "Core/Color/Palette.js", [], function() {
          return {
            colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
            backgroundColor: "#ffffff",
            neutralColor100: "#000000",
            neutralColor80: "#333333",
            neutralColor60: "#666666",
            neutralColor40: "#999999",
            neutralColor20: "#cccccc",
            neutralColor10: "#e6e6e6",
            neutralColor5: "#f2f2f2",
            neutralColor3: "#f7f7f7",
            highlightColor100: "#003399",
            highlightColor80: "#335cad",
            highlightColor60: "#6685c2",
            highlightColor20: "#ccd6eb",
            highlightColor10: "#e6ebf5",
            positiveColor: "#06b535",
            negativeColor: "#f21313"
          };
        });
        L(a, "Core/Chart/ChartDefaults.js", [a["Core/Color/Palette.js"]], function(a2) {
          return { panning: { enabled: false, type: "x" }, styledMode: false, borderRadius: 0, colorCount: 10, defaultSeriesType: "line", ignoreHiddenSeries: true, spacing: [
            10,
            10,
            15,
            10
          ], resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }, zoomBySingleTouch: false, width: null, height: null, borderColor: a2.highlightColor80, backgroundColor: a2.backgroundColor, plotBorderColor: a2.neutralColor20 };
        });
        L(a, "Core/Color/Color.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u) {
          var v = u.isNumber, H = u.merge, x = u.pInt;
          u = function() {
            function u2(v2) {
              this.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function(q) {
                return [
                  x(q[1]),
                  x(q[2]),
                  x(q[3]),
                  parseFloat(q[4], 10)
                ];
              } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function(q) {
                return [x(q[1]), x(q[2]), x(q[3]), 1];
              } }];
              this.rgba = [];
              var B = a2.Color;
              if (B && B !== u2)
                return new B(v2);
              if (!(this instanceof u2))
                return new u2(v2);
              this.init(v2);
            }
            u2.parse = function(a3) {
              return new u2(a3);
            };
            u2.prototype.init = function(a3) {
              var B, q;
              if ((this.input = a3 = u2.names[a3 && a3.toLowerCase ? a3.toLowerCase() : ""] || a3) && a3.stops)
                this.stops = a3.stops.map(function(c) {
                  return new u2(c[1]);
                });
              else {
                if (a3 && a3.charAt && a3.charAt() === "#") {
                  var h = a3.length;
                  a3 = parseInt(a3.substr(1), 16);
                  h === 7 ? B = [(a3 & 16711680) >> 16, (a3 & 65280) >> 8, a3 & 255, 1] : h === 4 && (B = [(a3 & 3840) >> 4 | (a3 & 3840) >> 8, (a3 & 240) >> 4 | a3 & 240, (a3 & 15) << 4 | a3 & 15, 1]);
                }
                if (!B)
                  for (q = this.parsers.length; q-- && !B; ) {
                    var f = this.parsers[q];
                    (h = f.regex.exec(a3)) && (B = f.parse(h));
                  }
              }
              this.rgba = B || [];
            };
            u2.prototype.get = function(a3) {
              var B = this.input, q = this.rgba;
              if (typeof this.stops !== "undefined") {
                var h = H(B);
                h.stops = [].concat(h.stops);
                this.stops.forEach(function(f, c) {
                  h.stops[c] = [h.stops[c][0], f.get(a3)];
                });
              } else
                h = q && v(q[0]) ? a3 === "rgb" || !a3 && q[3] === 1 ? "rgb(" + q[0] + "," + q[1] + "," + q[2] + ")" : a3 === "a" ? q[3] : "rgba(" + q.join(",") + ")" : B;
              return h;
            };
            u2.prototype.brighten = function(a3) {
              var B, q = this.rgba;
              if (this.stops)
                this.stops.forEach(function(h) {
                  h.brighten(a3);
                });
              else if (v(a3) && a3 !== 0)
                for (B = 0; 3 > B; B++)
                  q[B] += x(255 * a3), 0 > q[B] && (q[B] = 0), 255 < q[B] && (q[B] = 255);
              return this;
            };
            u2.prototype.setOpacity = function(a3) {
              this.rgba[3] = a3;
              return this;
            };
            u2.prototype.tweenTo = function(a3, B) {
              var q = this.rgba, h = a3.rgba;
              h.length && q && q.length ? (a3 = h[3] !== 1 || q[3] !== 1, B = (a3 ? "rgba(" : "rgb(") + Math.round(h[0] + (q[0] - h[0]) * (1 - B)) + "," + Math.round(h[1] + (q[1] - h[1]) * (1 - B)) + "," + Math.round(h[2] + (q[2] - h[2]) * (1 - B)) + (a3 ? "," + (h[3] + (q[3] - h[3]) * (1 - B)) : "") + ")") : B = a3.input || "none";
              return B;
            };
            u2.names = { white: "#ffffff", black: "#000000" };
            return u2;
          }();
          "";
          return u;
        });
        L(a, "Core/Time.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u) {
          var v = a2.win, H = u.defined, x = u.error, y = u.extend, G = u.isObject, B = u.merge, q = u.objectEach, h = u.pad, f = u.pick, c = u.splat, e = u.timeUnits, t = a2.isSafari && Intl && Intl.DateTimeFormat.prototype.formatRange, m = a2.isSafari && Intl && !Intl.DateTimeFormat.prototype.formatRange;
          u = function() {
            function w(c2) {
              this.options = {};
              this.variableTimezone = this.useUTC = false;
              this.Date = v.Date;
              this.getTimezoneOffset = this.timezoneOffsetFunction();
              this.update(c2);
            }
            w.prototype.get = function(c2, l) {
              if (this.variableTimezone || this.timezoneOffset) {
                var e2 = l.getTime(), n = e2 - this.getTimezoneOffset(l);
                l.setTime(n);
                c2 = l["getUTC" + c2]();
                l.setTime(e2);
                return c2;
              }
              return this.useUTC ? l["getUTC" + c2]() : l["get" + c2]();
            };
            w.prototype.set = function(c2, l, e2) {
              if (this.variableTimezone || this.timezoneOffset) {
                if (c2 === "Milliseconds" || c2 === "Seconds" || c2 === "Minutes" && this.getTimezoneOffset(l) % 36e5 === 0)
                  return l["setUTC" + c2](e2);
                var n = this.getTimezoneOffset(l);
                n = l.getTime() - n;
                l.setTime(n);
                l["setUTC" + c2](e2);
                c2 = this.getTimezoneOffset(l);
                n = l.getTime() + c2;
                return l.setTime(n);
              }
              return this.useUTC || t && c2 === "FullYear" ? l["setUTC" + c2](e2) : l["set" + c2](e2);
            };
            w.prototype.update = function(c2) {
              var l = f(c2 && c2.useUTC, true);
              this.options = c2 = B(true, this.options || {}, c2);
              this.Date = c2.Date || v.Date || Date;
              this.timezoneOffset = (this.useUTC = l) && c2.timezoneOffset;
              this.getTimezoneOffset = this.timezoneOffsetFunction();
              this.variableTimezone = l && !(!c2.getTimezoneOffset && !c2.timezone);
            };
            w.prototype.makeTime = function(c2, l, e2, h2, t2, p) {
              if (this.useUTC) {
                var d = this.Date.UTC.apply(0, arguments);
                var k = this.getTimezoneOffset(d);
                d += k;
                var b = this.getTimezoneOffset(d);
                k !== b ? d += b - k : k - 36e5 !== this.getTimezoneOffset(d - 36e5) || m || (d -= 36e5);
              } else
                d = new this.Date(c2, l, f(e2, 1), f(h2, 0), f(t2, 0), f(p, 0)).getTime();
              return d;
            };
            w.prototype.timezoneOffsetFunction = function() {
              var c2 = this, l = this.options, e2 = l.moment || v.moment;
              if (!this.useUTC)
                return function(l2) {
                  return 6e4 * new Date(l2.toString()).getTimezoneOffset();
                };
              if (l.timezone) {
                if (e2)
                  return function(c3) {
                    return 6e4 * -e2.tz(c3, l.timezone).utcOffset();
                  };
                x(25);
              }
              return this.useUTC && l.getTimezoneOffset ? function(c3) {
                return 6e4 * l.getTimezoneOffset(c3.valueOf());
              } : function() {
                return 6e4 * (c2.timezoneOffset || 0);
              };
            };
            w.prototype.dateFormat = function(c2, l, e2) {
              if (!H(l) || isNaN(l))
                return a2.defaultOptions.lang && a2.defaultOptions.lang.invalidDate || "";
              c2 = f(c2, "%Y-%m-%d %H:%M:%S");
              var n = this, t2 = new this.Date(l), p = this.get("Hours", t2), d = this.get("Day", t2), k = this.get("Date", t2), b = this.get("Month", t2), g = this.get("FullYear", t2), r = a2.defaultOptions.lang, F = r && r.weekdays, D = r && r.shortWeekdays;
              t2 = y({ a: D ? D[d] : F[d].substr(0, 3), A: F[d], d: h(k), e: h(k, 2, " "), w: d, b: r.shortMonths[b], B: r.months[b], m: h(b + 1), o: b + 1, y: g.toString().substr(2, 2), Y: g, H: h(p), k: p, I: h(p % 12 || 12), l: p % 12 || 12, M: h(this.get("Minutes", t2)), p: 12 > p ? "AM" : "PM", P: 12 > p ? "am" : "pm", S: h(t2.getSeconds()), L: h(Math.floor(l % 1e3), 3) }, a2.dateFormats);
              q(t2, function(b2, d2) {
                for (; c2.indexOf("%" + d2) !== -1; )
                  c2 = c2.replace("%" + d2, typeof b2 === "function" ? b2.call(n, l) : b2);
              });
              return e2 ? c2.substr(0, 1).toUpperCase() + c2.substr(1) : c2;
            };
            w.prototype.resolveDTLFormat = function(e2) {
              return G(e2, true) ? e2 : (e2 = c(e2), { main: e2[0], from: e2[1], to: e2[2] });
            };
            w.prototype.getTimeTicks = function(c2, l, t2, h2) {
              var n = this, p = [], d = {}, k = new n.Date(l), b = c2.unitRange, g = c2.count || 1, r;
              h2 = f(h2, 1);
              if (H(l)) {
                n.set("Milliseconds", k, b >= e.second ? 0 : g * Math.floor(n.get("Milliseconds", k) / g));
                b >= e.second && n.set("Seconds", k, b >= e.minute ? 0 : g * Math.floor(n.get("Seconds", k) / g));
                b >= e.minute && n.set("Minutes", k, b >= e.hour ? 0 : g * Math.floor(n.get("Minutes", k) / g));
                b >= e.hour && n.set("Hours", k, b >= e.day ? 0 : g * Math.floor(n.get("Hours", k) / g));
                b >= e.day && n.set("Date", k, b >= e.month ? 1 : Math.max(1, g * Math.floor(n.get("Date", k) / g)));
                if (b >= e.month) {
                  n.set("Month", k, b >= e.year ? 0 : g * Math.floor(n.get("Month", k) / g));
                  var F = n.get("FullYear", k);
                }
                b >= e.year && n.set("FullYear", k, F - F % g);
                b === e.week && (F = n.get("Day", k), n.set("Date", k, n.get("Date", k) - F + h2 + (F < h2 ? -7 : 0)));
                F = n.get("FullYear", k);
                h2 = n.get("Month", k);
                var D = n.get("Date", k), m2 = n.get("Hours", k);
                l = k.getTime();
                !n.variableTimezone && n.useUTC || !H(t2) || (r = t2 - l > 4 * e.month || n.getTimezoneOffset(l) !== n.getTimezoneOffset(t2));
                l = k.getTime();
                for (k = 1; l < t2; )
                  p.push(l), l = b === e.year ? n.makeTime(F + k * g, 0) : b === e.month ? n.makeTime(F, h2 + k * g) : !r || b !== e.day && b !== e.week ? r && b === e.hour && 1 < g ? n.makeTime(F, h2, D, m2 + k * g) : l + b * g : n.makeTime(F, h2, D + k * g * (b === e.day ? 1 : 7)), k++;
                p.push(l);
                b <= e.hour && 1e4 > p.length && p.forEach(function(b2) {
                  b2 % 18e5 === 0 && n.dateFormat("%H%M%S%L", b2) === "000000000" && (d[b2] = "day");
                });
              }
              p.info = y(c2, { higherRanks: d, totalRange: b * g });
              return p;
            };
            return w;
          }();
          "";
          return u;
        });
        L(a, "Core/DefaultOptions.js", [a["Core/Globals.js"], a["Core/Chart/ChartDefaults.js"], a["Core/Color/Color.js"], a["Core/Color/Palette.js"], a["Core/Time.js"], a["Core/Utilities.js"]], function(a2, u, E, H, x, y) {
          var v = a2.isTouchDevice, B = a2.svg;
          E = E.parse;
          var q = y.merge;
          "";
          var h = {
            colors: H.colors,
            symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
            lang: {
              loading: "Loading...",
              months: "January February March April May June July August September October November December".split(" "),
              shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
              weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
              decimalPoint: ".",
              numericSymbols: "kMGTPE".split(""),
              resetZoom: "Reset zoom",
              resetZoomTitle: "Reset zoom level 1:1",
              thousandsSep: " "
            },
            global: {},
            time: { Date: void 0, getTimezoneOffset: void 0, timezone: void 0, timezoneOffset: 0, useUTC: true },
            chart: u,
            title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 },
            subtitle: { text: "", align: "center", widthAdjust: -44 },
            caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" },
            plotOptions: {},
            labels: { style: { position: "absolute", color: H.neutralColor80 } },
            legend: {
              enabled: true,
              align: "center",
              alignColumns: true,
              className: "highcharts-no-tooltip",
              layout: "horizontal",
              labelFormatter: function() {
                return this.name;
              },
              borderColor: H.neutralColor40,
              borderRadius: 0,
              navigation: { activeColor: H.highlightColor100, inactiveColor: H.neutralColor20 },
              itemStyle: { color: H.neutralColor80, cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" },
              itemHoverStyle: { color: H.neutralColor100 },
              itemHiddenStyle: { color: H.neutralColor20 },
              shadow: false,
              itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" },
              squareSymbol: true,
              symbolPadding: 5,
              verticalAlign: "bottom",
              x: 0,
              y: 0,
              title: { style: { fontWeight: "bold" } }
            },
            loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: H.backgroundColor, opacity: 0.5, textAlign: "center" } },
            tooltip: { enabled: true, animation: B, borderRadius: 3, dateTimeLabelFormats: {
              millisecond: "%A, %b %e, %H:%M:%S.%L",
              second: "%A, %b %e, %H:%M:%S",
              minute: "%A, %b %e, %H:%M",
              hour: "%A, %b %e, %H:%M",
              day: "%A, %b %e, %Y",
              week: "Week from %A, %b %e, %Y",
              month: "%B %Y",
              year: "%Y"
            }, footerFormat: "", padding: 8, snap: v ? 25 : 10, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: E(H.neutralColor3).setOpacity(0.85).get(), borderWidth: 1, shadow: true, style: {
              color: H.neutralColor80,
              cursor: "default",
              fontSize: "12px",
              whiteSpace: "nowrap"
            } },
            credits: { enabled: true, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: H.neutralColor40, fontSize: "9px" }, text: "Highcharts.com" }
          };
          h.chart.styledMode = false;
          "";
          var f = new x(q(h.global, h.time));
          return { defaultOptions: h, defaultTime: f, getOptions: function() {
            return h;
          }, setOptions: function(c) {
            q(true, h, c);
            if (c.time || c.global)
              a2.time ? a2.time.update(q(h.global, h.time, c.global, c.time)) : a2.time = f;
            return h;
          } };
        });
        L(a, "Core/Animation/Fx.js", [a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u, E) {
          var v = a2.parse, x = u.win, y = E.isNumber, G = E.objectEach;
          return function() {
            function a3(a4, h, f) {
              this.pos = NaN;
              this.options = h;
              this.elem = a4;
              this.prop = f;
            }
            a3.prototype.dSetter = function() {
              var a4 = this.paths, h = a4 && a4[0];
              a4 = a4 && a4[1];
              var f = this.now || 0, c = [];
              if (f !== 1 && h && a4)
                if (h.length === a4.length && 1 > f)
                  for (var e = 0; e < a4.length; e++) {
                    for (var t = h[e], m = a4[e], w = [], n = 0; n < m.length; n++) {
                      var l = t[n], J = m[n];
                      y(l) && y(J) && (m[0] !== "A" || n !== 4 && n !== 5) ? w[n] = l + f * (J - l) : w[n] = J;
                    }
                    c.push(w);
                  }
                else
                  c = a4;
              else
                c = this.toD || [];
              this.elem.attr("d", c, void 0, true);
            };
            a3.prototype.update = function() {
              var a4 = this.elem, h = this.prop, f = this.now, c = this.options.step;
              if (this[h + "Setter"])
                this[h + "Setter"]();
              else
                a4.attr ? a4.element && a4.attr(h, f, null, true) : a4.style[h] = f + this.unit;
              c && c.call(a4, f, this);
            };
            a3.prototype.run = function(q, h, f) {
              var c = this, e = c.options, t = function(e2) {
                return t.stopped ? false : c.step(e2);
              }, m = x.requestAnimationFrame || function(c2) {
                setTimeout(c2, 13);
              }, w = function() {
                for (var c2 = 0; c2 < a3.timers.length; c2++)
                  a3.timers[c2]() || a3.timers.splice(c2--, 1);
                a3.timers.length && m(w);
              };
              q !== h || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date(), this.start = q, this.end = h, this.unit = f, this.now = this.start, this.pos = 0, t.elem = this.elem, t.prop = this.prop, t() && a3.timers.push(t) === 1 && m(w)) : (delete e.curAnim[this.prop], e.complete && Object.keys(e.curAnim).length === 0 && e.complete.call(this.elem));
            };
            a3.prototype.step = function(a4) {
              var h = +new Date(), f = this.options, c = this.elem, e = f.complete, t = f.duration, m = f.curAnim;
              if (c.attr && !c.element)
                a4 = false;
              else if (a4 || h >= t + this.startTime) {
                this.now = this.end;
                this.pos = 1;
                this.update();
                var w = m[this.prop] = true;
                G(m, function(c2) {
                  c2 !== true && (w = false);
                });
                w && e && e.call(c);
                a4 = false;
              } else
                this.pos = f.easing((h - this.startTime) / t), this.now = this.start + (this.end - this.start) * this.pos, this.update(), a4 = true;
              return a4;
            };
            a3.prototype.initPath = function(a4, h, f) {
              function c(c2, l2) {
                for (; c2.length < K; ) {
                  var d = c2[0], k = l2[K - c2.length];
                  k && d[0] === "M" && (c2[0] = k[0] === "C" ? ["C", d[1], d[2], d[1], d[2], d[1], d[2]] : ["L", d[1], d[2]]);
                  c2.unshift(d);
                  w && (d = c2.pop(), c2.push(c2[c2.length - 1], d));
                }
              }
              function e(c2, l2) {
                for (; c2.length < K; )
                  if (l2 = c2[Math.floor(c2.length / n) - 1].slice(), l2[0] === "C" && (l2[1] = l2[5], l2[2] = l2[6]), w) {
                    var d = c2[Math.floor(c2.length / n)].slice();
                    c2.splice(c2.length / 2, 0, l2, d);
                  } else
                    c2.push(l2);
              }
              var t = a4.startX, m = a4.endX;
              f = f.slice();
              var w = a4.isArea, n = w ? 2 : 1;
              h = h && h.slice();
              if (!h)
                return [f, f];
              if (t && m && m.length) {
                for (a4 = 0; a4 < t.length; a4++)
                  if (t[a4] === m[0]) {
                    var l = a4;
                    break;
                  } else if (t[0] === m[m.length - t.length + a4]) {
                    l = a4;
                    var J = true;
                    break;
                  } else if (t[t.length - 1] === m[m.length - t.length + a4]) {
                    l = t.length - a4;
                    break;
                  }
                typeof l === "undefined" && (h = []);
              }
              if (h.length && y(l)) {
                var K = f.length + l * n;
                J ? (c(h, f), e(f, h)) : (c(f, h), e(h, f));
              }
              return [h, f];
            };
            a3.prototype.fillSetter = function() {
              a3.prototype.strokeSetter.apply(this, arguments);
            };
            a3.prototype.strokeSetter = function() {
              this.elem.attr(this.prop, v(this.start).tweenTo(v(this.end), this.pos), null, true);
            };
            a3.timers = [];
            return a3;
          }();
        });
        L(a, "Core/Animation/AnimationUtilities.js", [a["Core/Animation/Fx.js"], a["Core/Utilities.js"]], function(a2, u) {
          function v(c2) {
            return q(c2) ? h({ duration: 500, defer: 0 }, c2) : { duration: c2 ? 500 : 0, defer: 0 };
          }
          function H(c2, f2) {
            for (var e = a2.timers.length; e--; )
              a2.timers[e].elem !== c2 || f2 && f2 !== a2.timers[e].prop || (a2.timers[e].stopped = true);
          }
          var x = u.defined, y = u.getStyle, G = u.isArray, B = u.isNumber, q = u.isObject, h = u.merge, f = u.objectEach, c = u.pick;
          return { animate: function(c2, t, m) {
            var e, n = "", l, J;
            if (!q(m)) {
              var K = arguments;
              m = { duration: K[2], easing: K[3], complete: K[4] };
            }
            B(m.duration) || (m.duration = 400);
            m.easing = typeof m.easing === "function" ? m.easing : Math[m.easing] || Math.easeInOutSine;
            m.curAnim = h(t);
            f(t, function(f2, p) {
              H(c2, p);
              J = new a2(c2, m, p);
              l = void 0;
              p === "d" && G(t.d) ? (J.paths = J.initPath(c2, c2.pathArray, t.d), J.toD = t.d, e = 0, l = 1) : c2.attr ? e = c2.attr(p) : (e = parseFloat(y(c2, p)) || 0, p !== "opacity" && (n = "px"));
              l || (l = f2);
              typeof l === "string" && l.match("px") && (l = l.replace(/px/g, ""));
              J.run(e, l, n);
            });
          }, animObject: v, getDeferredAnimation: function(c2, a3, f2) {
            var e = v(a3), n = 0, l = 0;
            (f2 ? [f2] : c2.series).forEach(function(c3) {
              c3 = v(c3.options.animation);
              n = a3 && x(a3.defer) ? e.defer : Math.max(n, c3.duration + c3.defer);
              l = Math.min(e.duration, c3.duration);
            });
            c2.renderer.forExport && (n = 0);
            return { defer: Math.max(0, n - l), duration: Math.min(n, l) };
          }, setAnimation: function(e, a3) {
            a3.renderer.globalAnimation = c(e, a3.options.chart.animation, true);
          }, stop: H };
        });
        L(a, "Core/Renderer/HTML/AST.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u) {
          var v = a2.SVG_NS, H = u.attr, x = u.createElement, y = u.discardElement, G = u.error, B = u.isString, q = u.objectEach, h = u.splat;
          try {
            var f = !!new DOMParser().parseFromString("", "text/html");
          } catch (c) {
            f = false;
          }
          u = function() {
            function c(c2) {
              this.nodes = typeof c2 === "string" ? this.parseMarkup(c2) : c2;
            }
            c.filterUserAttributes = function(e) {
              q(e, function(a3, f2) {
                var h2 = true;
                c.allowedAttributes.indexOf(f2) === -1 && (h2 = false);
                ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(f2) !== -1 && (h2 = B(a3) && c.allowedReferences.some(function(c2) {
                  return a3.indexOf(c2) === 0;
                }));
                h2 || (G("Highcharts warning: Invalid attribute '" + f2 + "' in config"), delete e[f2]);
              });
              return e;
            };
            c.setElementHTML = function(e, a3) {
              e.innerHTML = "";
              a3 && new c(a3).addToDOM(e);
            };
            c.prototype.addToDOM = function(e) {
              function f2(e2, t) {
                var n;
                h(e2).forEach(function(l) {
                  var e3 = l.tagName, h2 = l.textContent ? a2.doc.createTextNode(l.textContent) : void 0;
                  if (e3)
                    if (e3 === "#text")
                      var m = h2;
                    else if (c.allowedTags.indexOf(e3) !== -1) {
                      e3 = a2.doc.createElementNS(e3 === "svg" ? v : t.namespaceURI || v, e3);
                      var p = l.attributes || {};
                      q(l, function(d, k) {
                        k !== "tagName" && k !== "attributes" && k !== "children" && k !== "textContent" && (p[k] = d);
                      });
                      H(e3, c.filterUserAttributes(p));
                      h2 && e3.appendChild(h2);
                      f2(l.children || [], e3);
                      m = e3;
                    } else
                      G("Highcharts warning: Invalid tagName '" + e3 + "' in config");
                  m && t.appendChild(m);
                  n = m;
                });
                return n;
              }
              return f2(this.nodes, e);
            };
            c.prototype.parseMarkup = function(c2) {
              var e = [];
              if (f)
                c2 = new DOMParser().parseFromString(c2, "text/html");
              else {
                var a3 = x("div");
                a3.innerHTML = c2;
                c2 = { body: a3 };
              }
              var h2 = function(c3, l) {
                var e2 = c3.nodeName.toLowerCase(), a4 = { tagName: e2 };
                if (e2 === "#text") {
                  e2 = c3.textContent || "";
                  if (/^[\s]*$/.test(e2))
                    return;
                  a4.textContent = e2;
                }
                if (e2 = c3.attributes) {
                  var f2 = {};
                  [].forEach.call(e2, function(d) {
                    f2[d.name] = d.value;
                  });
                  a4.attributes = f2;
                }
                if (c3.childNodes.length) {
                  var p = [];
                  [].forEach.call(c3.childNodes, function(d) {
                    h2(d, p);
                  });
                  p.length && (a4.children = p);
                }
                l.push(a4);
              };
              [].forEach.call(c2.body.childNodes, function(c3) {
                return h2(c3, e);
              });
              a3 && y(a3);
              return e;
            };
            c.allowedTags = "a b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(" ");
            c.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength type valign width x x1 x2 y y1 y2 zIndex".split(" ");
            c.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" ");
            return c;
          }();
          "";
          return u;
        });
        L(a, "Core/FormatUtilities.js", [a["Core/DefaultOptions.js"], a["Core/Utilities.js"]], function(a2, u) {
          function v(a3, f, c, e) {
            a3 = +a3 || 0;
            f = +f;
            var h = H.lang, m = (a3.toString().split(".")[1] || "").split("e")[0].length, w = a3.toString().split("e"), n = f;
            if (f === -1)
              f = Math.min(m, 20);
            else if (!G(f))
              f = 2;
            else if (f && w[1] && 0 > w[1]) {
              var l = f + +w[1];
              0 <= l ? (w[0] = (+w[0]).toExponential(l).split("e")[0], f = l) : (w[0] = w[0].split(".")[0] || 0, a3 = 20 > f ? (w[0] * Math.pow(10, w[1])).toFixed(f) : 0, w[1] = 0);
            }
            l = (Math.abs(w[1] ? w[0] : a3) + Math.pow(10, -Math.max(f, m) - 1)).toFixed(f);
            m = String(q(l));
            var J = 3 < m.length ? m.length % 3 : 0;
            c = B(c, h.decimalPoint);
            e = B(e, h.thousandsSep);
            a3 = (0 > a3 ? "-" : "") + (J ? m.substr(0, J) + e : "");
            a3 = 0 > +w[1] && !n ? "0" : a3 + m.substr(J).replace(/(\d{3})(?=\d)/g, "$1" + e);
            f && (a3 += c + l.slice(-f));
            w[1] && +a3 !== 0 && (a3 += "e" + w[1]);
            return a3;
          }
          var H = a2.defaultOptions, x = a2.defaultTime, y = u.getNestedProperty, G = u.isNumber, B = u.pick, q = u.pInt;
          return {
            dateFormat: function(a3, f, c) {
              return x.dateFormat(a3, f, c);
            },
            format: function(a3, f, c) {
              var e = "{", h = false, m = /f$/, w = /\.([0-9])/, n = H.lang, l = c && c.time || x;
              c = c && c.numberFormatter || v;
              for (var J = []; a3; ) {
                var K = a3.indexOf(e);
                if (K === -1)
                  break;
                var A = a3.slice(0, K);
                if (h) {
                  A = A.split(":");
                  e = y(A.shift() || "", f);
                  if (A.length && typeof e === "number")
                    if (A = A.join(":"), m.test(A)) {
                      var p = parseInt((A.match(w) || ["", "-1"])[1], 10);
                      e !== null && (e = c(e, p, n.decimalPoint, -1 < A.indexOf(",") ? n.thousandsSep : ""));
                    } else
                      e = l.dateFormat(A, e);
                  J.push(e);
                } else
                  J.push(A);
                a3 = a3.slice(K + 1);
                e = (h = !h) ? "}" : "{";
              }
              J.push(a3);
              return J.join("");
            },
            numberFormat: v
          };
        });
        L(a, "Core/Renderer/SVG/SVGElement.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Renderer/HTML/AST.js"], a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Color/Palette.js"], a["Core/Utilities.js"]], function(a2, u, E, H, x, y) {
          var v = a2.animate, B = a2.animObject, q = a2.stop, h = H.deg2rad, f = H.doc, c = H.noop, e = H.svg, t = H.SVG_NS, m = H.win, w = y.addEvent, n = y.attr, l = y.createElement, J = y.css, K = y.defined, A = y.erase, p = y.extend, d = y.fireEvent, k = y.isArray, b = y.isFunction, g = y.isNumber, r = y.isString, F = y.merge, D = y.objectEach, M = y.pick, C = y.pInt, O = y.syncTimeout, S = y.uniqueKey;
          a2 = function() {
            function a3() {
              this.element = void 0;
              this.onEvents = {};
              this.opacity = 1;
              this.renderer = void 0;
              this.SVG_NS = t;
              this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ");
            }
            a3.prototype._defaultGetter = function(b2) {
              b2 = M(this[b2 + "Value"], this[b2], this.element ? this.element.getAttribute(b2) : null, 0);
              /^[\-0-9\.]+$/.test(b2) && (b2 = parseFloat(b2));
              return b2;
            };
            a3.prototype._defaultSetter = function(b2, d2, g2) {
              g2.setAttribute(d2, b2);
            };
            a3.prototype.add = function(b2) {
              var d2 = this.renderer, g2 = this.element;
              b2 && (this.parentGroup = b2);
              this.parentInverted = b2 && b2.inverted;
              typeof this.textStr !== "undefined" && this.element.nodeName === "text" && d2.buildText(this);
              this.added = true;
              if (!b2 || b2.handleZ || this.zIndex)
                var k2 = this.zIndexSetter();
              k2 || (b2 ? b2.element : d2.box).appendChild(g2);
              if (this.onAdd)
                this.onAdd();
              return this;
            };
            a3.prototype.addClass = function(b2, d2) {
              var g2 = d2 ? "" : this.attr("class") || "";
              b2 = (b2 || "").split(/ /g).reduce(function(b3, d3) {
                g2.indexOf(d3) === -1 && b3.push(d3);
                return b3;
              }, g2 ? [g2] : []).join(" ");
              b2 !== g2 && this.attr("class", b2);
              return this;
            };
            a3.prototype.afterSetters = function() {
              this.doTransform && (this.updateTransform(), this.doTransform = false);
            };
            a3.prototype.align = function(b2, d2, g2) {
              var z = {}, k2 = this.renderer, c2 = k2.alignedObjects, a4, I, l2;
              if (b2) {
                if (this.alignOptions = b2, this.alignByTranslate = d2, !g2 || r(g2))
                  this.alignTo = a4 = g2 || "renderer", A(c2, this), c2.push(this), g2 = void 0;
              } else
                b2 = this.alignOptions, d2 = this.alignByTranslate, a4 = this.alignTo;
              g2 = M(g2, k2[a4], a4 === "scrollablePlotBox" ? k2.plotBox : void 0, k2);
              a4 = b2.align;
              var e2 = b2.verticalAlign;
              k2 = (g2.x || 0) + (b2.x || 0);
              c2 = (g2.y || 0) + (b2.y || 0);
              a4 === "right" ? I = 1 : a4 === "center" && (I = 2);
              I && (k2 += (g2.width - (b2.width || 0)) / I);
              z[d2 ? "translateX" : "x"] = Math.round(k2);
              e2 === "bottom" ? l2 = 1 : e2 === "middle" && (l2 = 2);
              l2 && (c2 += (g2.height - (b2.height || 0)) / l2);
              z[d2 ? "translateY" : "y"] = Math.round(c2);
              this[this.placed ? "animate" : "attr"](z);
              this.placed = true;
              this.alignAttr = z;
              return this;
            };
            a3.prototype.alignSetter = function(b2) {
              var d2 = { left: "start", center: "middle", right: "end" };
              d2[b2] && (this.alignValue = b2, this.element.setAttribute("text-anchor", d2[b2]));
            };
            a3.prototype.animate = function(b2, d2, g2) {
              var k2 = this, z = B(M(d2, this.renderer.globalAnimation, true));
              d2 = z.defer;
              M(f.hidden, f.msHidden, f.webkitHidden, false) && (z.duration = 0);
              z.duration !== 0 ? (g2 && (z.complete = g2), O(function() {
                k2.element && v(k2, b2, z);
              }, d2)) : (this.attr(b2, void 0, g2), D(b2, function(b3, d3) {
                z.step && z.step.call(this, b3, { prop: d3, pos: 1, elem: this });
              }, this));
              return this;
            };
            a3.prototype.applyTextOutline = function(b2) {
              var d2 = this.element;
              b2.indexOf("contrast") !== -1 && (b2 = b2.replace(/contrast/g, this.renderer.getContrast(d2.style.fill)));
              var g2 = b2.split(" ");
              b2 = g2[g2.length - 1];
              if ((g2 = g2[0]) && g2 !== "none" && H.svg) {
                this.fakeTS = true;
                this.ySetter = this.xSetter;
                g2 = g2.replace(/(^[\d\.]+)(.*?)$/g, function(b3, d3, g3) {
                  return 2 * Number(d3) + g3;
                });
                this.removeTextOutline();
                var k2 = f.createElementNS(t, "tspan");
                n(k2, { "class": "highcharts-text-outline", fill: b2, stroke: b2, "stroke-width": g2, "stroke-linejoin": "round" });
                [].forEach.call(d2.childNodes, function(b3) {
                  var d3 = b3.cloneNode(true);
                  d3.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(function(b4) {
                    return d3.removeAttribute(b4);
                  });
                  k2.appendChild(d3);
                });
                var c2 = f.createElementNS(t, "tspan");
                c2.textContent = "\u200B";
                ["x", "y"].forEach(function(b3) {
                  var g3 = d2.getAttribute(b3);
                  g3 && c2.setAttribute(b3, g3);
                });
                k2.appendChild(c2);
                d2.insertBefore(k2, d2.firstChild);
              }
            };
            a3.prototype.attr = function(b2, d2, g2, k2) {
              var z = this.element, Q = this.symbolCustomAttribs, c2, I = this, r2, a4;
              if (typeof b2 === "string" && typeof d2 !== "undefined") {
                var l2 = b2;
                b2 = {};
                b2[l2] = d2;
              }
              typeof b2 === "string" ? I = (this[b2 + "Getter"] || this._defaultGetter).call(this, b2, z) : (D(b2, function(d3, g3) {
                r2 = false;
                k2 || q(this, g3);
                this.symbolName && Q.indexOf(g3) !== -1 && (c2 || (this.symbolAttr(b2), c2 = true), r2 = true);
                !this.rotation || g3 !== "x" && g3 !== "y" || (this.doTransform = true);
                r2 || (a4 = this[g3 + "Setter"] || this._defaultSetter, a4.call(this, d3, g3, z), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g3) && this.updateShadows(g3, d3, a4));
              }, this), this.afterSetters());
              g2 && g2.call(this);
              return I;
            };
            a3.prototype.clip = function(b2) {
              return this.attr("clip-path", b2 ? "url(" + this.renderer.url + "#" + b2.id + ")" : "none");
            };
            a3.prototype.crisp = function(b2, d2) {
              d2 = d2 || b2.strokeWidth || 0;
              var g2 = Math.round(d2) % 2 / 2;
              b2.x = Math.floor(b2.x || this.x || 0) + g2;
              b2.y = Math.floor(b2.y || this.y || 0) + g2;
              b2.width = Math.floor((b2.width || this.width || 0) - 2 * g2);
              b2.height = Math.floor((b2.height || this.height || 0) - 2 * g2);
              K(b2.strokeWidth) && (b2.strokeWidth = d2);
              return b2;
            };
            a3.prototype.complexColor = function(b2, g2, z) {
              var Q = this.renderer, c2, r2, a4, I, l2, e2, f2, p2, n2, C2, h2 = [], t2;
              d(this.renderer, "complexColor", { args: arguments }, function() {
                b2.radialGradient ? r2 = "radialGradient" : b2.linearGradient && (r2 = "linearGradient");
                if (r2) {
                  a4 = b2[r2];
                  l2 = Q.gradients;
                  e2 = b2.stops;
                  n2 = z.radialReference;
                  k(a4) && (b2[r2] = a4 = { x1: a4[0], y1: a4[1], x2: a4[2], y2: a4[3], gradientUnits: "userSpaceOnUse" });
                  r2 === "radialGradient" && n2 && !K(a4.gradientUnits) && (I = a4, a4 = F(a4, Q.getRadialAttr(n2, I), { gradientUnits: "userSpaceOnUse" }));
                  D(a4, function(b3, d3) {
                    d3 !== "id" && h2.push(d3, b3);
                  });
                  D(e2, function(b3) {
                    h2.push(b3);
                  });
                  h2 = h2.join(",");
                  if (l2[h2])
                    C2 = l2[h2].attr("id");
                  else {
                    a4.id = C2 = S();
                    var d2 = l2[h2] = Q.createElement(r2).attr(a4).add(Q.defs);
                    d2.radAttr = I;
                    d2.stops = [];
                    e2.forEach(function(b3) {
                      b3[1].indexOf("rgba") === 0 ? (c2 = E.parse(b3[1]), f2 = c2.get("rgb"), p2 = c2.get("a")) : (f2 = b3[1], p2 = 1);
                      b3 = Q.createElement("stop").attr({
                        offset: b3[0],
                        "stop-color": f2,
                        "stop-opacity": p2
                      }).add(d2);
                      d2.stops.push(b3);
                    });
                  }
                  t2 = "url(" + Q.url + "#" + C2 + ")";
                  z.setAttribute(g2, t2);
                  z.gradient = h2;
                  b2.toString = function() {
                    return t2;
                  };
                }
              });
            };
            a3.prototype.css = function(b2) {
              var d2 = this.styles, g2 = {}, k2 = this.element, c2 = ["textOutline", "textOverflow", "width"], r2 = "", a4 = !d2;
              b2 && b2.color && (b2.fill = b2.color);
              d2 && D(b2, function(b3, k3) {
                d2 && d2[k3] !== b3 && (g2[k3] = b3, a4 = true);
              });
              if (a4) {
                d2 && (b2 = p(d2, g2));
                if (b2) {
                  if (b2.width === null || b2.width === "auto")
                    delete this.textWidth;
                  else if (k2.nodeName.toLowerCase() === "text" && b2.width)
                    var I = this.textWidth = C(b2.width);
                }
                this.styles = b2;
                I && !e && this.renderer.forExport && delete b2.width;
                if (k2.namespaceURI === this.SVG_NS) {
                  var l2 = function(b3, d3) {
                    return "-" + d3.toLowerCase();
                  };
                  D(b2, function(b3, d3) {
                    c2.indexOf(d3) === -1 && (r2 += d3.replace(/([A-Z])/g, l2) + ":" + b3 + ";");
                  });
                  r2 && n(k2, "style", r2);
                } else
                  J(k2, b2);
                this.added && (this.element.nodeName === "text" && this.renderer.buildText(this), b2 && b2.textOutline && this.applyTextOutline(b2.textOutline));
              }
              return this;
            };
            a3.prototype.dashstyleSetter = function(b2) {
              var d2 = this["stroke-width"];
              d2 === "inherit" && (d2 = 1);
              if (b2 = b2 && b2.toLowerCase()) {
                var g2 = b2.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b2 = g2.length; b2--; )
                  g2[b2] = "" + C(g2[b2]) * M(d2, NaN);
                b2 = g2.join(",").replace(/NaN/g, "none");
                this.element.setAttribute("stroke-dasharray", b2);
              }
            };
            a3.prototype.destroy = function() {
              var b2 = this, d2 = b2.element || {}, g2 = b2.renderer, k2 = d2.ownerSVGElement, c2 = g2.isSVG && d2.nodeName === "SPAN" && b2.parentGroup || void 0;
              d2.onclick = d2.onmouseout = d2.onmouseover = d2.onmousemove = d2.point = null;
              q(b2);
              if (b2.clipPath && k2) {
                var r2 = b2.clipPath;
                [].forEach.call(k2.querySelectorAll("[clip-path],[CLIP-PATH]"), function(b3) {
                  -1 < b3.getAttribute("clip-path").indexOf(r2.element.id) && b3.removeAttribute("clip-path");
                });
                b2.clipPath = r2.destroy();
              }
              if (b2.stops) {
                for (k2 = 0; k2 < b2.stops.length; k2++)
                  b2.stops[k2].destroy();
                b2.stops.length = 0;
                b2.stops = void 0;
              }
              b2.safeRemoveChild(d2);
              for (g2.styledMode || b2.destroyShadows(); c2 && c2.div && c2.div.childNodes.length === 0; )
                d2 = c2.parentGroup, b2.safeRemoveChild(c2.div), delete c2.div, c2 = d2;
              b2.alignTo && A(g2.alignedObjects, b2);
              D(b2, function(d3, g3) {
                b2[g3] && b2[g3].parentGroup === b2 && b2[g3].destroy && b2[g3].destroy();
                delete b2[g3];
              });
            };
            a3.prototype.destroyShadows = function() {
              (this.shadows || []).forEach(function(b2) {
                this.safeRemoveChild(b2);
              }, this);
              this.shadows = void 0;
            };
            a3.prototype.destroyTextPath = function(b2, d2) {
              var g2 = b2.getElementsByTagName("text")[0];
              if (g2) {
                if (g2.removeAttribute("dx"), g2.removeAttribute("dy"), d2.element.setAttribute("id", ""), this.textPathWrapper && g2.getElementsByTagName("textPath").length) {
                  for (b2 = this.textPathWrapper.element.childNodes; b2.length; )
                    g2.appendChild(b2[0]);
                  g2.removeChild(this.textPathWrapper.element);
                }
              } else if (b2.getAttribute("dx") || b2.getAttribute("dy"))
                b2.removeAttribute("dx"), b2.removeAttribute("dy");
              this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy());
            };
            a3.prototype.dSetter = function(b2, d2, g2) {
              k(b2) && (typeof b2[0] === "string" && (b2 = this.renderer.pathToSegments(b2)), this.pathArray = b2, b2 = b2.reduce(function(b3, d3, g3) {
                return d3 && d3.join ? (g3 ? b3 + " " : "") + d3.join(" ") : (d3 || "").toString();
              }, ""));
              /(NaN| {2}|^$)/.test(b2) && (b2 = "M 0 0");
              this[d2] !== b2 && (g2.setAttribute(d2, b2), this[d2] = b2);
            };
            a3.prototype.fadeOut = function(b2) {
              var d2 = this;
              d2.animate({ opacity: 0 }, { duration: M(b2, 150), complete: function() {
                d2.attr({ y: -9999 }).hide();
              } });
            };
            a3.prototype.fillSetter = function(b2, d2, g2) {
              typeof b2 === "string" ? g2.setAttribute(d2, b2) : b2 && this.complexColor(b2, d2, g2);
            };
            a3.prototype.getBBox = function(d2, g2) {
              var k2 = this.renderer, c2 = this.element, r2 = this.styles, l2 = this.textStr, e2 = k2.cache, I = k2.cacheKeys, F2 = c2.namespaceURI === this.SVG_NS;
              g2 = M(g2, this.rotation, 0);
              var P = k2.styledMode ? c2 && a3.prototype.getStyle.call(c2, "font-size") : r2 && r2.fontSize, f2;
              if (K(l2)) {
                var n2 = l2.toString();
                n2.indexOf("<") === -1 && (n2 = n2.replace(/[0-9]/g, "0"));
                n2 += ["", g2, P, this.textWidth, r2 && r2.textOverflow, r2 && r2.fontWeight].join();
              }
              n2 && !d2 && (f2 = e2[n2]);
              if (!f2) {
                if (F2 || k2.forExport) {
                  try {
                    var D2 = this.fakeTS && function(b2) {
                      var d3 = c2.querySelector(".highcharts-text-outline");
                      d3 && J(d3, { display: b2 });
                    };
                    b(D2) && D2("none");
                    f2 = c2.getBBox ? p({}, c2.getBBox()) : { width: c2.offsetWidth, height: c2.offsetHeight };
                    b(D2) && D2("");
                  } catch (V) {
                    "";
                  }
                  if (!f2 || 0 > f2.width)
                    f2 = {
                      width: 0,
                      height: 0
                    };
                } else
                  f2 = this.htmlGetBBox();
                k2.isSVG && (d2 = f2.width, k2 = f2.height, F2 && (f2.height = k2 = { "11px,17": 14, "13px,20": 16 }[r2 && r2.fontSize + "," + Math.round(k2)] || k2), g2 && (r2 = g2 * h, f2.width = Math.abs(k2 * Math.sin(r2)) + Math.abs(d2 * Math.cos(r2)), f2.height = Math.abs(k2 * Math.cos(r2)) + Math.abs(d2 * Math.sin(r2))));
                if (n2 && 0 < f2.height) {
                  for (; 250 < I.length; )
                    delete e2[I.shift()];
                  e2[n2] || I.push(n2);
                  e2[n2] = f2;
                }
              }
              return f2;
            };
            a3.prototype.getStyle = function(b2) {
              return m.getComputedStyle(this.element || this, "").getPropertyValue(b2);
            };
            a3.prototype.hasClass = function(b2) {
              return ("" + this.attr("class")).split(" ").indexOf(b2) !== -1;
            };
            a3.prototype.hide = function(b2) {
              b2 ? this.attr({ y: -9999 }) : this.attr({ visibility: "hidden" });
              return this;
            };
            a3.prototype.htmlGetBBox = function() {
              return { height: 0, width: 0, x: 0, y: 0 };
            };
            a3.prototype.init = function(b2, g2) {
              this.element = g2 === "span" ? l(g2) : f.createElementNS(this.SVG_NS, g2);
              this.renderer = b2;
              d(this, "afterInit");
            };
            a3.prototype.invert = function(b2) {
              this.inverted = b2;
              this.updateTransform();
              return this;
            };
            a3.prototype.on = function(b2, d2) {
              var g2 = this.onEvents;
              if (g2[b2])
                g2[b2]();
              g2[b2] = w(this.element, b2, d2);
              return this;
            };
            a3.prototype.opacitySetter = function(b2, d2, g2) {
              this.opacity = b2 = Number(Number(b2).toFixed(3));
              g2.setAttribute(d2, b2);
            };
            a3.prototype.removeClass = function(b2) {
              return this.attr("class", ("" + this.attr("class")).replace(r(b2) ? new RegExp("(^| )" + b2 + "( |$)") : b2, " ").replace(/ +/g, " ").trim());
            };
            a3.prototype.removeTextOutline = function() {
              var b2 = this.element.querySelector("tspan.highcharts-text-outline");
              b2 && this.safeRemoveChild(b2);
            };
            a3.prototype.safeRemoveChild = function(b2) {
              var d2 = b2.parentNode;
              d2 && d2.removeChild(b2);
            };
            a3.prototype.setRadialReference = function(b2) {
              var d2 = this.element.gradient && this.renderer.gradients[this.element.gradient];
              this.element.radialReference = b2;
              d2 && d2.radAttr && d2.animate(this.renderer.getRadialAttr(b2, d2.radAttr));
              return this;
            };
            a3.prototype.setTextPath = function(b2, d2) {
              var k2 = this.element, Q = this.text ? this.text.element : k2, r2 = { textAnchor: "text-anchor" }, a4 = false, l2 = this.textPathWrapper, I = !l2;
              d2 = F(true, { enabled: true, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, d2);
              var e2 = u.filterUserAttributes(d2.attributes);
              if (b2 && d2 && d2.enabled) {
                l2 && l2.element.parentNode === null ? (I = true, l2 = l2.destroy()) : l2 && this.removeTextOutline.call(l2.parentGroup);
                this.options && this.options.padding && (e2.dx = -this.options.padding);
                l2 || (this.textPathWrapper = l2 = this.renderer.createElement("textPath"), a4 = true);
                var P = l2.element;
                (d2 = b2.element.getAttribute("id")) || b2.element.setAttribute("id", d2 = S());
                if (I)
                  for (Q.setAttribute("y", 0), g(e2.dx) && Q.setAttribute("x", -e2.dx), b2 = [].slice.call(Q.childNodes), I = 0; I < b2.length; I++) {
                    var f2 = b2[I];
                    f2.nodeType !== Node.TEXT_NODE && f2.nodeName !== "tspan" || P.appendChild(f2);
                  }
                a4 && l2 && l2.add({ element: Q });
                P.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + d2);
                K(e2.dy) && (P.parentNode.setAttribute("dy", e2.dy), delete e2.dy);
                K(e2.dx) && (P.parentNode.setAttribute("dx", e2.dx), delete e2.dx);
                D(e2, function(b3, d3) {
                  P.setAttribute(r2[d3] || d3, b3);
                });
                k2.removeAttribute("transform");
                this.removeTextOutline.call(l2);
                this.text && !this.renderer.styledMode && this.attr({ fill: "none", "stroke-width": 0 });
                this.applyTextOutline = this.updateTransform = c;
              } else
                l2 && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(k2, b2), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline));
              return this;
            };
            a3.prototype.shadow = function(b2, d2, g2) {
              var k2 = [], c2 = this.element, z = this.oldShadowOptions, r2 = { color: x.neutralColor100, offsetX: this.parentInverted ? -1 : 1, offsetY: this.parentInverted ? -1 : 1, opacity: 0.15, width: 3 }, a4 = false, l2;
              b2 === true ? l2 = r2 : typeof b2 === "object" && (l2 = p(r2, b2));
              l2 && (l2 && z && D(l2, function(b3, d3) {
                b3 !== z[d3] && (a4 = true);
              }), a4 && this.destroyShadows(), this.oldShadowOptions = l2);
              if (!l2)
                this.destroyShadows();
              else if (!this.shadows) {
                var e2 = l2.opacity / l2.width;
                var F2 = this.parentInverted ? "translate(" + l2.offsetY + ", " + l2.offsetX + ")" : "translate(" + l2.offsetX + ", " + l2.offsetY + ")";
                for (r2 = 1; r2 <= l2.width; r2++) {
                  var f2 = c2.cloneNode(false);
                  var C2 = 2 * l2.width + 1 - 2 * r2;
                  n(f2, { stroke: b2.color || x.neutralColor100, "stroke-opacity": e2 * r2, "stroke-width": C2, transform: F2, fill: "none" });
                  f2.setAttribute("class", (f2.getAttribute("class") || "") + " highcharts-shadow");
                  g2 && (n(f2, "height", Math.max(n(f2, "height") - C2, 0)), f2.cutHeight = C2);
                  d2 ? d2.element.appendChild(f2) : c2.parentNode && c2.parentNode.insertBefore(f2, c2);
                  k2.push(f2);
                }
                this.shadows = k2;
              }
              return this;
            };
            a3.prototype.show = function(b2) {
              return this.attr({ visibility: b2 ? "inherit" : "visible" });
            };
            a3.prototype.strokeSetter = function(b2, d2, g2) {
              this[d2] = b2;
              this.stroke && this["stroke-width"] ? (a3.prototype.fillSetter.call(this, this.stroke, "stroke", g2), g2.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = true) : d2 === "stroke-width" && b2 === 0 && this.hasStroke ? (g2.removeAttribute("stroke"), this.hasStroke = false) : this.renderer.styledMode && this["stroke-width"] && (g2.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = true);
            };
            a3.prototype.strokeWidth = function() {
              if (!this.renderer.styledMode)
                return this["stroke-width"] || 0;
              var b2 = this.getStyle("stroke-width"), d2 = 0;
              if (b2.indexOf("px") === b2.length - 2)
                d2 = C(b2);
              else if (b2 !== "") {
                var g2 = f.createElementNS(t, "rect");
                n(g2, { width: b2, "stroke-width": 0 });
                this.element.parentNode.appendChild(g2);
                d2 = g2.getBBox().width;
                g2.parentNode.removeChild(g2);
              }
              return d2;
            };
            a3.prototype.symbolAttr = function(b2) {
              var d2 = this;
              "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(g2) {
                d2[g2] = M(b2[g2], d2[g2]);
              });
              d2.attr({ d: d2.renderer.symbols[d2.symbolName](d2.x, d2.y, d2.width, d2.height, d2) });
            };
            a3.prototype.textSetter = function(b2) {
              b2 !== this.textStr && (delete this.textPxLength, this.textStr = b2, this.added && this.renderer.buildText(this));
            };
            a3.prototype.titleSetter = function(b2) {
              var d2 = this.element, g2 = d2.getElementsByTagName("title")[0] || f.createElementNS(this.SVG_NS, "title");
              d2.insertBefore ? d2.insertBefore(g2, d2.firstChild) : d2.appendChild(g2);
              g2.textContent = String(M(b2, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            };
            a3.prototype.toFront = function() {
              var b2 = this.element;
              b2.parentNode.appendChild(b2);
              return this;
            };
            a3.prototype.translate = function(b2, d2) {
              return this.attr({ translateX: b2, translateY: d2 });
            };
            a3.prototype.updateShadows = function(b2, d2, g2) {
              var k2 = this.shadows;
              if (k2)
                for (var c2 = k2.length; c2--; )
                  g2.call(k2[c2], b2 === "height" ? Math.max(d2 - (k2[c2].cutHeight || 0), 0) : b2 === "d" ? this.d : d2, b2, k2[c2]);
            };
            a3.prototype.updateTransform = function() {
              var b2 = this.scaleX, d2 = this.scaleY, g2 = this.inverted, k2 = this.rotation, c2 = this.matrix, r2 = this.element, a4 = this.translateX || 0, l2 = this.translateY || 0;
              g2 && (a4 += this.width, l2 += this.height);
              a4 = ["translate(" + a4 + "," + l2 + ")"];
              K(c2) && a4.push("matrix(" + c2.join(",") + ")");
              g2 ? a4.push("rotate(90) scale(-1,1)") : k2 && a4.push("rotate(" + k2 + " " + M(this.rotationOriginX, r2.getAttribute("x"), 0) + " " + M(this.rotationOriginY, r2.getAttribute("y") || 0) + ")");
              (K(b2) || K(d2)) && a4.push("scale(" + M(b2, 1) + " " + M(d2, 1) + ")");
              a4.length && r2.setAttribute("transform", a4.join(" "));
            };
            a3.prototype.visibilitySetter = function(b2, d2, g2) {
              b2 === "inherit" ? g2.removeAttribute(d2) : this[d2] !== b2 && g2.setAttribute(d2, b2);
              this[d2] = b2;
            };
            a3.prototype.xGetter = function(b2) {
              this.element.nodeName === "circle" && (b2 === "x" ? b2 = "cx" : b2 === "y" && (b2 = "cy"));
              return this._defaultGetter(b2);
            };
            a3.prototype.zIndexSetter = function(b2, d2) {
              var g2 = this.renderer, k2 = this.parentGroup, c2 = (k2 || g2).element || g2.box, r2 = this.element;
              g2 = c2 === g2.box;
              var a4 = false;
              var l2 = this.added;
              var e2;
              K(b2) ? (r2.setAttribute("data-z-index", b2), b2 = +b2, this[d2] === b2 && (l2 = false)) : K(this[d2]) && r2.removeAttribute("data-z-index");
              this[d2] = b2;
              if (l2) {
                (b2 = this.zIndex) && k2 && (k2.handleZ = true);
                d2 = c2.childNodes;
                for (e2 = d2.length - 1; 0 <= e2 && !a4; e2--) {
                  k2 = d2[e2];
                  l2 = k2.getAttribute("data-z-index");
                  var f2 = !K(l2);
                  if (k2 !== r2) {
                    if (0 > b2 && f2 && !g2 && !e2)
                      c2.insertBefore(r2, d2[e2]), a4 = true;
                    else if (C(l2) <= b2 || f2 && (!K(b2) || 0 <= b2))
                      c2.insertBefore(r2, d2[e2 + 1] || null), a4 = true;
                  }
                }
                a4 || (c2.insertBefore(r2, d2[g2 ? 3 : 0] || null), a4 = true);
              }
              return a4;
            };
            return a3;
          }();
          a2.prototype["stroke-widthSetter"] = a2.prototype.strokeSetter;
          a2.prototype.yGetter = a2.prototype.xGetter;
          a2.prototype.matrixSetter = a2.prototype.rotationOriginXSetter = a2.prototype.rotationOriginYSetter = a2.prototype.rotationSetter = a2.prototype.scaleXSetter = a2.prototype.scaleYSetter = a2.prototype.translateXSetter = a2.prototype.translateYSetter = a2.prototype.verticalAlignSetter = function(b2, d2) {
            this[d2] = b2;
            this.doTransform = true;
          };
          "";
          return a2;
        });
        L(a, "Core/Renderer/RendererRegistry.js", [a["Core/Globals.js"]], function(a2) {
          var v;
          (function(v2) {
            var u;
            v2.rendererTypes = {};
            v2.getRendererType = function(a3) {
              a3 === void 0 && (a3 = u);
              return v2.rendererTypes[a3] || v2.rendererTypes[u];
            };
            v2.registerRendererType = function(x, y, G) {
              v2.rendererTypes[x] = y;
              if (!u || G)
                u = x, a2.Renderer = y;
            };
          })(v || (v = {}));
          return v;
        });
        L(a, "Core/Renderer/SVG/SVGLabel.js", [a["Core/Renderer/SVG/SVGElement.js"], a["Core/Utilities.js"]], function(a2, u) {
          var v = this && this.__extends || function() {
            var a3 = function(f, c) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c2, a4) {
                c2.__proto__ = a4;
              } || function(c2, a4) {
                for (var e in a4)
                  a4.hasOwnProperty(e) && (c2[e] = a4[e]);
              };
              return a3(f, c);
            };
            return function(f, c) {
              function e() {
                this.constructor = f;
              }
              a3(f, c);
              f.prototype = c === null ? Object.create(c) : (e.prototype = c.prototype, new e());
            };
          }(), H = u.defined, x = u.extend, y = u.isNumber, G = u.merge, B = u.pick, q = u.removeEvent;
          return function(h) {
            function f(c, a3, t, m, w, n, l, J, K, A) {
              var e = h.call(this) || this;
              e.paddingLeftSetter = e.paddingSetter;
              e.paddingRightSetter = e.paddingSetter;
              e.init(c, "g");
              e.textStr = a3;
              e.x = t;
              e.y = m;
              e.anchorX = n;
              e.anchorY = l;
              e.baseline = K;
              e.className = A;
              e.addClass(A === "button" ? "highcharts-no-tooltip" : "highcharts-label");
              A && e.addClass("highcharts-" + A);
              e.text = c.text("", 0, 0, J).attr({ zIndex: 1 });
              var d;
              typeof w === "string" && ((d = /^url\((.*?)\)$/.test(w)) || e.renderer.symbols[w]) && (e.symbolKey = w);
              e.bBox = f.emptyBBox;
              e.padding = 3;
              e.baselineOffset = 0;
              e.needsBox = c.styledMode || d;
              e.deferredAttr = {};
              e.alignFactor = 0;
              return e;
            }
            v(f, h);
            f.prototype.alignSetter = function(c) {
              c = { left: 0, center: 0.5, right: 1 }[c];
              c !== this.alignFactor && (this.alignFactor = c, this.bBox && y(this.xSetting) && this.attr({ x: this.xSetting }));
            };
            f.prototype.anchorXSetter = function(c, a3) {
              this.anchorX = c;
              this.boxAttr(a3, Math.round(c) - this.getCrispAdjust() - this.xSetting);
            };
            f.prototype.anchorYSetter = function(c, a3) {
              this.anchorY = c;
              this.boxAttr(a3, c - this.ySetting);
            };
            f.prototype.boxAttr = function(c, a3) {
              this.box ? this.box.attr(c, a3) : this.deferredAttr[c] = a3;
            };
            f.prototype.css = function(c) {
              if (c) {
                var e = {};
                c = G(c);
                f.textProps.forEach(function(a3) {
                  typeof c[a3] !== "undefined" && (e[a3] = c[a3], delete c[a3]);
                });
                this.text.css(e);
                var h2 = "width" in e;
                "fontSize" in e || "fontWeight" in e ? this.updateTextPadding() : h2 && this.updateBoxSize();
              }
              return a2.prototype.css.call(this, c);
            };
            f.prototype.destroy = function() {
              q(this.element, "mouseenter");
              q(this.element, "mouseleave");
              this.text && this.text.destroy();
              this.box && (this.box = this.box.destroy());
              a2.prototype.destroy.call(this);
            };
            f.prototype.fillSetter = function(c, a3) {
              c && (this.needsBox = true);
              this.fill = c;
              this.boxAttr(a3, c);
            };
            f.prototype.getBBox = function() {
              this.textStr && this.bBox.width === 0 && this.bBox.height === 0 && this.updateBoxSize();
              var c = this.padding, a3 = B(this.paddingLeft, c);
              return { width: this.width, height: this.height, x: this.bBox.x - a3, y: this.bBox.y - c };
            };
            f.prototype.getCrispAdjust = function() {
              return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
            };
            f.prototype.heightSetter = function(c) {
              this.heightSetting = c;
            };
            f.prototype.on = function(c, e) {
              var f2 = this, h2 = f2.text, w = h2 && h2.element.tagName === "SPAN" ? h2 : void 0;
              if (w) {
                var n = function(a3) {
                  (c === "mouseenter" || c === "mouseleave") && a3.relatedTarget instanceof Element && (f2.element.compareDocumentPosition(a3.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY || w.element.compareDocumentPosition(a3.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY) || e.call(f2.element, a3);
                };
                w.on(c, n);
              }
              a2.prototype.on.call(f2, c, n || e);
              return f2;
            };
            f.prototype.onAdd = function() {
              var c = this.textStr;
              this.text.add(this);
              this.attr({ text: H(c) ? c : "", x: this.x, y: this.y });
              this.box && H(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY });
            };
            f.prototype.paddingSetter = function(c, a3) {
              y(c) ? c !== this[a3] && (this[a3] = c, this.updateTextPadding()) : this[a3] = void 0;
            };
            f.prototype.rSetter = function(c, a3) {
              this.boxAttr(a3, c);
            };
            f.prototype.shadow = function(c) {
              c && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(c));
              return this;
            };
            f.prototype.strokeSetter = function(c, a3) {
              this.stroke = c;
              this.boxAttr(a3, c);
            };
            f.prototype["stroke-widthSetter"] = function(a3, e) {
              a3 && (this.needsBox = true);
              this["stroke-width"] = a3;
              this.boxAttr(e, a3);
            };
            f.prototype["text-alignSetter"] = function(a3) {
              this.textAlign = a3;
            };
            f.prototype.textSetter = function(a3) {
              typeof a3 !== "undefined" && this.text.attr({ text: a3 });
              this.updateTextPadding();
            };
            f.prototype.updateBoxSize = function() {
              var a3 = this.text.element.style, e = {}, h2 = this.padding, m = this.bBox = y(this.widthSetting) && y(this.heightSetting) && !this.textAlign || !H(this.text.textStr) ? f.emptyBBox : this.text.getBBox();
              this.width = this.getPaddedWidth();
              this.height = (this.heightSetting || m.height || 0) + 2 * h2;
              a3 = this.renderer.fontMetrics(a3 && a3.fontSize, this.text);
              this.baselineOffset = h2 + Math.min((this.text.firstLineMetrics || a3).b, m.height || Infinity);
              this.heightSetting && (this.baselineOffset += (this.heightSetting - a3.h) / 2);
              this.needsBox && (this.box || (h2 = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), h2.addClass((this.className === "button" ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), h2.add(this)), h2 = this.getCrispAdjust(), e.x = h2, e.y = (this.baseline ? -this.baselineOffset : 0) + h2, e.width = Math.round(this.width), e.height = Math.round(this.height), this.box.attr(x(e, this.deferredAttr)), this.deferredAttr = {});
            };
            f.prototype.updateTextPadding = function() {
              var a3 = this.text;
              this.updateBoxSize();
              var e = this.baseline ? 0 : this.baselineOffset, f2 = B(this.paddingLeft, this.padding);
              H(this.widthSetting) && this.bBox && (this.textAlign === "center" || this.textAlign === "right") && (f2 += { center: 0.5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width));
              if (f2 !== a3.x || e !== a3.y)
                a3.attr("x", f2), a3.hasBoxWidthChanged && (this.bBox = a3.getBBox(true)), typeof e !== "undefined" && a3.attr("y", e);
              a3.x = f2;
              a3.y = e;
            };
            f.prototype.widthSetter = function(a3) {
              this.widthSetting = y(a3) ? a3 : void 0;
            };
            f.prototype.getPaddedWidth = function() {
              var a3 = this.padding, e = B(this.paddingLeft, a3);
              a3 = B(this.paddingRight, a3);
              return (this.widthSetting || this.bBox.width || 0) + e + a3;
            };
            f.prototype.xSetter = function(a3) {
              this.x = a3;
              this.alignFactor && (a3 -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = true);
              this.xSetting = Math.round(a3);
              this.attr("translateX", this.xSetting);
            };
            f.prototype.ySetter = function(a3) {
              this.ySetting = this.y = Math.round(a3);
              this.attr("translateY", this.ySetting);
            };
            f.emptyBBox = { width: 0, height: 0, x: 0, y: 0 };
            f.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
            return f;
          }(a2);
        });
        L(a, "Core/Renderer/SVG/Symbols.js", [a["Core/Utilities.js"]], function(a2) {
          function v(a3, q, h, f, c) {
            var e = [];
            if (c) {
              var t = c.start || 0, m = G(c.r, h);
              h = G(c.r, f || h);
              var w = (c.end || 0) - 1e-3;
              f = c.innerR;
              var n = G(c.open, 1e-3 > Math.abs((c.end || 0) - t - 2 * Math.PI)), l = Math.cos(t), J = Math.sin(t), K = Math.cos(w), A = Math.sin(w);
              t = G(c.longArc, 1e-3 > w - t - Math.PI ? 0 : 1);
              e.push(["M", a3 + m * l, q + h * J], ["A", m, h, 0, t, G(c.clockwise, 1), a3 + m * K, q + h * A]);
              x(f) && e.push(n ? ["M", a3 + f * K, q + f * A] : ["L", a3 + f * K, q + f * A], ["A", f, f, 0, t, x(c.clockwise) ? 1 - c.clockwise : 0, a3 + f * l, q + f * J]);
              n || e.push(["Z"]);
            }
            return e;
          }
          function E(a3, q, h, f, c) {
            return c && c.r ? H(a3, q, h, f, c) : [["M", a3, q], ["L", a3 + h, q], ["L", a3 + h, q + f], ["L", a3, q + f], ["Z"]];
          }
          function H(a3, q, h, f, c) {
            c = c && c.r || 0;
            return [["M", a3 + c, q], ["L", a3 + h - c, q], ["C", a3 + h, q, a3 + h, q, a3 + h, q + c], ["L", a3 + h, q + f - c], ["C", a3 + h, q + f, a3 + h, q + f, a3 + h - c, q + f], ["L", a3 + c, q + f], ["C", a3, q + f, a3, q + f, a3, q + f - c], ["L", a3, q + c], ["C", a3, q, a3, q, a3 + c, q]];
          }
          var x = a2.defined, y = a2.isNumber, G = a2.pick;
          return { arc: v, callout: function(a3, q, h, f, c) {
            var e = Math.min(c && c.r || 0, h, f), t = e + 6, m = c && c.anchorX;
            c = c && c.anchorY || 0;
            var w = H(a3, q, h, f, { r: e });
            if (!y(m))
              return w;
            a3 + m >= h ? c > q + t && c < q + f - t ? w.splice(3, 1, ["L", a3 + h, c - 6], ["L", a3 + h + 6, c], ["L", a3 + h, c + 6], ["L", a3 + h, q + f - e]) : w.splice(3, 1, ["L", a3 + h, f / 2], ["L", m, c], ["L", a3 + h, f / 2], ["L", a3 + h, q + f - e]) : 0 >= a3 + m ? c > q + t && c < q + f - t ? w.splice(7, 1, ["L", a3, c + 6], ["L", a3 - 6, c], ["L", a3, c - 6], ["L", a3, q + e]) : w.splice(7, 1, ["L", a3, f / 2], ["L", m, c], ["L", a3, f / 2], ["L", a3, q + e]) : c && c > f && m > a3 + t && m < a3 + h - t ? w.splice(5, 1, ["L", m + 6, q + f], ["L", m, q + f + 6], ["L", m - 6, q + f], ["L", a3 + e, q + f]) : c && 0 > c && m > a3 + t && m < a3 + h - t && w.splice(1, 1, ["L", m - 6, q], ["L", m, q - 6], ["L", m + 6, q], ["L", h - e, q]);
            return w;
          }, circle: function(a3, q, h, f) {
            return v(a3 + h / 2, q + f / 2, h / 2, f / 2, { start: 0.5 * Math.PI, end: 2.5 * Math.PI, open: false });
          }, diamond: function(a3, q, h, f) {
            return [["M", a3 + h / 2, q], ["L", a3 + h, q + f / 2], ["L", a3 + h / 2, q + f], ["L", a3, q + f / 2], ["Z"]];
          }, rect: E, roundedRect: H, square: E, triangle: function(a3, q, h, f) {
            return [["M", a3 + h / 2, q], ["L", a3 + h, q + f], ["L", a3, q + f], ["Z"]];
          }, "triangle-down": function(a3, q, h, f) {
            return [["M", a3, q], ["L", a3 + h, q], ["L", a3 + h / 2, q + f], ["Z"]];
          } };
        });
        L(a, "Core/Renderer/SVG/TextBuilder.js", [a["Core/Renderer/HTML/AST.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u, E) {
          var v = u.doc, x = u.SVG_NS, y = E.attr, G = E.isString, B = E.objectEach, q = E.pick;
          return function() {
            function h(a3) {
              var c = a3.styles;
              this.renderer = a3.renderer;
              this.svgElement = a3;
              this.width = a3.textWidth;
              this.textLineHeight = c && c.lineHeight;
              this.textOutline = c && c.textOutline;
              this.ellipsis = !(!c || c.textOverflow !== "ellipsis");
              this.noWrap = !(!c || c.whiteSpace !== "nowrap");
              this.fontSize = c && c.fontSize;
            }
            h.prototype.buildSVG = function() {
              var f = this.svgElement, c = f.element, e = f.renderer, h2 = q(f.textStr, "").toString(), m = h2.indexOf("<") !== -1, w = c.childNodes, n = w.length;
              e = this.width && !f.added && e.box;
              var l = /<br.*?>/g;
              var J = [h2, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, this.fontSize, this.width].join();
              if (J !== f.textCache) {
                f.textCache = J;
                for (delete f.actualWidth; n--; )
                  c.removeChild(w[n]);
                m || this.ellipsis || this.width || h2.indexOf(" ") !== -1 && (!this.noWrap || l.test(h2)) ? h2 !== "" && (e && e.appendChild(c), h2 = new a2(h2), this.modifyTree(h2.nodes), h2.addToDOM(f.element), this.modifyDOM(), this.ellipsis && (c.textContent || "").indexOf("\u2026") !== -1 && f.attr("title", this.unescapeEntities(f.textStr || "", ["&lt;", "&gt;"])), e && e.removeChild(c)) : c.appendChild(v.createTextNode(this.unescapeEntities(h2)));
                G(this.textOutline) && f.applyTextOutline && f.applyTextOutline(this.textOutline);
              }
            };
            h.prototype.modifyDOM = function() {
              var a3 = this, c = this.svgElement, e = y(c.element, "x");
              c.firstLineMetrics = void 0;
              [].forEach.call(c.element.querySelectorAll("tspan.highcharts-br"), function(f, l) {
                f.nextSibling && f.previousSibling && (l === 0 && f.previousSibling.nodeType === 1 && (c.firstLineMetrics = c.renderer.fontMetrics(void 0, f.previousSibling)), y(f, { dy: a3.getLineHeight(f.nextSibling), x: e }));
              });
              var h2 = this.width || 0;
              if (h2) {
                var m = function(f, l) {
                  var n = f.textContent || "", w2 = n.replace(/([^\^])-/g, "$1- ").split(" "), m2 = !a3.noWrap && (1 < w2.length || 1 < c.element.childNodes.length), p = a3.getLineHeight(l), d = 0, k = c.actualWidth;
                  if (a3.ellipsis)
                    n && a3.truncate(f, n, void 0, 0, Math.max(0, h2 - parseInt(a3.fontSize || 12, 10)), function(b, d2) {
                      return b.substring(0, d2) + "\u2026";
                    });
                  else if (m2) {
                    n = [];
                    for (m2 = []; l.firstChild && l.firstChild !== f; )
                      m2.push(l.firstChild), l.removeChild(l.firstChild);
                    for (; w2.length; )
                      w2.length && !a3.noWrap && 0 < d && (n.push(f.textContent || ""), f.textContent = w2.join(" ").replace(/- /g, "-")), a3.truncate(f, void 0, w2, d === 0 ? k || 0 : 0, h2, function(b, d2) {
                        return w2.slice(0, d2).join(" ").replace(/- /g, "-");
                      }), k = c.actualWidth, d++;
                    m2.forEach(function(b) {
                      l.insertBefore(b, f);
                    });
                    n.forEach(function(b) {
                      l.insertBefore(v.createTextNode(b), f);
                      b = v.createElementNS(x, "tspan");
                      b.textContent = "\u200B";
                      y(b, { dy: p, x: e });
                      l.insertBefore(b, f);
                    });
                  }
                }, w = function(a4) {
                  [].slice.call(a4.childNodes).forEach(function(l) {
                    l.nodeType === Node.TEXT_NODE ? m(l, a4) : (l.className.baseVal.indexOf("highcharts-br") !== -1 && (c.actualWidth = 0), w(l));
                  });
                };
                w(c.element);
              }
            };
            h.prototype.getLineHeight = function(a3) {
              var c;
              a3 = a3.nodeType === Node.TEXT_NODE ? a3.parentElement : a3;
              this.renderer.styledMode || (c = a3 && /(px|em)$/.test(a3.style.fontSize) ? a3.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12);
              return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(c, a3 || this.svgElement.element).h;
            };
            h.prototype.modifyTree = function(a3) {
              var c = this, e = function(f, h2) {
                var w = f.tagName, n = c.renderer.styledMode, l = f.attributes || {};
                if (w === "b" || w === "strong")
                  n ? l["class"] = "highcharts-strong" : l.style = "font-weight:bold;" + (l.style || "");
                else if (w === "i" || w === "em")
                  n ? l["class"] = "highcharts-emphasized" : l.style = "font-style:italic;" + (l.style || "");
                G(l.style) && (l.style = l.style.replace(/(;| |^)color([ :])/, "$1fill$2"));
                w === "br" && (l["class"] = "highcharts-br", f.textContent = "\u200B", (h2 = a3[h2 + 1]) && h2.textContent && (h2.textContent = h2.textContent.replace(/^ +/gm, "")));
                w !== "#text" && w !== "a" && (f.tagName = "tspan");
                f.attributes = l;
                f.children && f.children.filter(function(a4) {
                  return a4.tagName !== "#text";
                }).forEach(e);
              };
              for (a3.forEach(e); a3[0] && a3[0].tagName === "tspan" && !a3[0].children; )
                a3.splice(0, 1);
            };
            h.prototype.truncate = function(a3, c, e, h2, m, w) {
              var f = this.svgElement, l = f.renderer, t = f.rotation, K = [], A = e ? 1 : 0, p = (c || e || "").length, d = p, k, b = function(b2, d2) {
                d2 = d2 || b2;
                var g2 = a3.parentNode;
                if (g2 && typeof K[d2] === "undefined")
                  if (g2.getSubStringLength)
                    try {
                      K[d2] = h2 + g2.getSubStringLength(0, e ? d2 + 1 : d2);
                    } catch (M) {
                      "";
                    }
                  else
                    l.getSpanWidth && (a3.textContent = w(c || e, b2), K[d2] = h2 + l.getSpanWidth(f, a3));
                return K[d2];
              };
              f.rotation = 0;
              var g = b(a3.textContent.length);
              if (h2 + g > m) {
                for (; A <= p; )
                  d = Math.ceil((A + p) / 2), e && (k = w(e, d)), g = b(d, k && k.length - 1), A === p ? A = p + 1 : g > m ? p = d - 1 : A = d;
                p === 0 ? a3.textContent = "" : c && p === c.length - 1 || (a3.textContent = k || w(c || e, d));
              }
              e && e.splice(0, d);
              f.actualWidth = g;
              f.rotation = t;
            };
            h.prototype.unescapeEntities = function(a3, c) {
              B(this.renderer.escapes, function(e, f) {
                c && c.indexOf(e) !== -1 || (a3 = a3.toString().replace(new RegExp(e, "g"), f));
              });
              return a3;
            };
            return h;
          }();
        });
        L(a, "Core/Renderer/SVG/SVGRenderer.js", [a["Core/Renderer/HTML/AST.js"], a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Color/Palette.js"], a["Core/Renderer/RendererRegistry.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Renderer/SVG/SVGLabel.js"], a["Core/Renderer/SVG/Symbols.js"], a["Core/Renderer/SVG/TextBuilder.js"], a["Core/Utilities.js"]], function(a2, u, E, H, x, y, G, B, q, h) {
          var f = E.charts, c = E.deg2rad, e = E.doc, t = E.isFirefox, m = E.isMS, w = E.isWebKit, n = E.noop, l = E.SVG_NS, J = E.symbolSizes, K = E.win, A = h.addEvent, p = h.attr, d = h.createElement, k = h.css, b = h.defined, g = h.destroyObjectProperties, r = h.extend, F = h.isArray, D = h.isNumber, M = h.isObject, C = h.isString, O = h.merge, v = h.pick, W = h.pInt, Y = h.uniqueKey, ba;
          E = function() {
            function z(b2, d2, g2, a3, k2, r2, c2) {
              this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0;
              this.init(b2, d2, g2, a3, k2, r2, c2);
            }
            z.prototype.init = function(b2, d2, g2, a3, r2, c2, z2) {
              var l2 = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }), Q = l2.element;
              z2 || l2.css(this.getStyle(a3));
              b2.appendChild(Q);
              p(b2, "dir", "ltr");
              b2.innerHTML.indexOf("xmlns") === -1 && p(Q, "xmlns", this.SVG_NS);
              this.isSVG = true;
              this.box = Q;
              this.boxWrapper = l2;
              this.alignedObjects = [];
              this.url = this.getReferenceURL();
              this.createElement("desc").add().element.appendChild(e.createTextNode("Created with Highcharts 9.1.2"));
              this.defs = this.createElement("defs").add();
              this.allowHTML = c2;
              this.forExport = r2;
              this.styledMode = z2;
              this.gradients = {};
              this.cache = {};
              this.cacheKeys = [];
              this.imgCount = 0;
              this.setSize(d2, g2, false);
              var I;
              t && b2.getBoundingClientRect && (d2 = function() {
                k(b2, { left: 0, top: 0 });
                I = b2.getBoundingClientRect();
                k(b2, { left: Math.ceil(I.left) - I.left + "px", top: Math.ceil(I.top) - I.top + "px" });
              }, d2(), this.unSubPixelFix = A(K, "resize", d2));
            };
            z.prototype.definition = function(b2) {
              return new a2([b2]).addToDOM(this.defs.element);
            };
            z.prototype.getReferenceURL = function() {
              if ((t || w) && e.getElementsByTagName("base").length) {
                if (!b(ba)) {
                  var d2 = Y();
                  d2 = new a2([{
                    tagName: "svg",
                    attributes: { width: 8, height: 8 },
                    children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: d2 }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": "url(#" + d2 + ")", fill: "rgba(0,0,0,0.001)" } }]
                  }]).addToDOM(e.body);
                  k(d2, { position: "fixed", top: 0, left: 0, zIndex: 9e5 });
                  var g2 = e.elementFromPoint(6, 6);
                  ba = (g2 && g2.id) === "hitme";
                  e.body.removeChild(d2);
                }
                if (ba)
                  return K.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20");
              }
              return "";
            };
            z.prototype.getStyle = function(b2) {
              return this.style = r({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, b2);
            };
            z.prototype.setStyle = function(b2) {
              this.boxWrapper.css(this.getStyle(b2));
            };
            z.prototype.isHidden = function() {
              return !this.boxWrapper.getBBox().width;
            };
            z.prototype.destroy = function() {
              var b2 = this.defs;
              this.box = null;
              this.boxWrapper = this.boxWrapper.destroy();
              g(this.gradients || {});
              this.gradients = null;
              b2 && (this.defs = b2.destroy());
              this.unSubPixelFix && this.unSubPixelFix();
              return this.alignedObjects = null;
            };
            z.prototype.createElement = function(b2) {
              var d2 = new this.Element();
              d2.init(this, b2);
              return d2;
            };
            z.prototype.getRadialAttr = function(b2, d2) {
              return { cx: b2[0] - b2[2] / 2 + (d2.cx || 0) * b2[2], cy: b2[1] - b2[2] / 2 + (d2.cy || 0) * b2[2], r: (d2.r || 0) * b2[2] };
            };
            z.prototype.buildText = function(b2) {
              new q(b2).buildSVG();
            };
            z.prototype.getContrast = function(b2) {
              b2 = u.parse(b2).rgba;
              b2[0] *= 1;
              b2[1] *= 1.2;
              b2[2] *= 0.5;
              return 459 < b2[0] + b2[1] + b2[2] ? "#000000" : "#FFFFFF";
            };
            z.prototype.button = function(b2, d2, g2, k2, c2, z2, l2, e2, f2, F2) {
              var I = this.label(b2, d2, g2, f2, void 0, void 0, F2, void 0, "button"), Q = this.styledMode, P = 0, h2 = c2 ? O(c2) : {};
              b2 = h2 && h2.style || {};
              h2 = a2.filterUserAttributes(h2);
              I.attr(O({ padding: 8, r: 2 }, h2));
              if (!Q) {
                h2 = O({ fill: H.neutralColor3, stroke: H.neutralColor20, "stroke-width": 1, style: { color: H.neutralColor80, cursor: "pointer", fontWeight: "normal" } }, { style: b2 }, h2);
                var D2 = h2.style;
                delete h2.style;
                z2 = O(h2, { fill: H.neutralColor10 }, a2.filterUserAttributes(z2 || {}));
                var n2 = z2.style;
                delete z2.style;
                l2 = O(h2, { fill: H.highlightColor10, style: {
                  color: H.neutralColor100,
                  fontWeight: "bold"
                } }, a2.filterUserAttributes(l2 || {}));
                var C2 = l2.style;
                delete l2.style;
                e2 = O(h2, { style: { color: H.neutralColor20 } }, a2.filterUserAttributes(e2 || {}));
                var N = e2.style;
                delete e2.style;
              }
              A(I.element, m ? "mouseover" : "mouseenter", function() {
                P !== 3 && I.setState(1);
              });
              A(I.element, m ? "mouseout" : "mouseleave", function() {
                P !== 3 && I.setState(P);
              });
              I.setState = function(b3) {
                b3 !== 1 && (I.state = P = b3);
                I.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][b3 || 0]);
                Q || I.attr([h2, z2, l2, e2][b3 || 0]).css([D2, n2, C2, N][b3 || 0]);
              };
              Q || I.attr(h2).css(r({ cursor: "default" }, D2));
              return I.on("touchstart", function(b3) {
                return b3.stopPropagation();
              }).on("click", function(b3) {
                P !== 3 && k2.call(I, b3);
              });
            };
            z.prototype.crispLine = function(d2, g2, a3) {
              a3 === void 0 && (a3 = "round");
              var k2 = d2[0], r2 = d2[1];
              b(k2[1]) && k2[1] === r2[1] && (k2[1] = r2[1] = Math[a3](k2[1]) - g2 % 2 / 2);
              b(k2[2]) && k2[2] === r2[2] && (k2[2] = r2[2] = Math[a3](k2[2]) + g2 % 2 / 2);
              return d2;
            };
            z.prototype.path = function(b2) {
              var d2 = this.styledMode ? {} : { fill: "none" };
              F(b2) ? d2.d = b2 : M(b2) && r(d2, b2);
              return this.createElement("path").attr(d2);
            };
            z.prototype.circle = function(b2, d2, g2) {
              b2 = M(b2) ? b2 : typeof b2 === "undefined" ? {} : { x: b2, y: d2, r: g2 };
              d2 = this.createElement("circle");
              d2.xSetter = d2.ySetter = function(b3, d3, g3) {
                g3.setAttribute("c" + d3, b3);
              };
              return d2.attr(b2);
            };
            z.prototype.arc = function(b2, d2, g2, a3, k2, r2) {
              M(b2) ? (a3 = b2, d2 = a3.y, g2 = a3.r, b2 = a3.x) : a3 = { innerR: a3, start: k2, end: r2 };
              b2 = this.symbol("arc", b2, d2, g2, g2, a3);
              b2.r = g2;
              return b2;
            };
            z.prototype.rect = function(b2, d2, g2, a3, k2, r2) {
              k2 = M(b2) ? b2.r : k2;
              var c2 = this.createElement("rect");
              b2 = M(b2) ? b2 : typeof b2 === "undefined" ? {} : { x: b2, y: d2, width: Math.max(g2, 0), height: Math.max(a3, 0) };
              this.styledMode || (typeof r2 !== "undefined" && (b2["stroke-width"] = r2, b2 = c2.crisp(b2)), b2.fill = "none");
              k2 && (b2.r = k2);
              c2.rSetter = function(b3, d3, g3) {
                c2.r = b3;
                p(g3, { rx: b3, ry: b3 });
              };
              c2.rGetter = function() {
                return c2.r || 0;
              };
              return c2.attr(b2);
            };
            z.prototype.setSize = function(b2, d2, g2) {
              this.width = b2;
              this.height = d2;
              this.boxWrapper.animate({ width: b2, height: d2 }, { step: function() {
                this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") });
              }, duration: v(g2, true) ? void 0 : 0 });
              this.alignElements();
            };
            z.prototype.g = function(b2) {
              var d2 = this.createElement("g");
              return b2 ? d2.attr({ "class": "highcharts-" + b2 }) : d2;
            };
            z.prototype.image = function(b2, d2, g2, a3, k2, c2) {
              var z2 = { preserveAspectRatio: "none" }, l2 = function(b3, d3) {
                b3.setAttributeNS ? b3.setAttributeNS("http://www.w3.org/1999/xlink", "href", d3) : b3.setAttribute("hc-svg-href", d3);
              };
              1 < arguments.length && r(z2, { x: d2, y: g2, width: a3, height: k2 });
              var I = this.createElement("image").attr(z2);
              z2 = function(d3) {
                l2(I.element, b2);
                c2.call(I, d3);
              };
              if (c2) {
                l2(I.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");
                var e2 = new K.Image();
                A(e2, "load", z2);
                e2.src = b2;
                e2.complete && z2({});
              } else
                l2(I.element, b2);
              return I;
            };
            z.prototype.symbol = function(g2, a3, c2, z2, l2, F2) {
              var I = this, Q = /^url\((.*?)\)$/, h2 = Q.test(g2), D2 = !h2 && (this.symbols[g2] ? g2 : "circle"), n2 = D2 && this.symbols[D2], C2;
              if (n2) {
                typeof a3 === "number" && (C2 = n2.call(this.symbols, Math.round(a3 || 0), Math.round(c2 || 0), z2 || 0, l2 || 0, F2));
                var p2 = this.path(C2);
                I.styledMode || p2.attr("fill", "none");
                r(p2, { symbolName: D2 || void 0, x: a3, y: c2, width: z2, height: l2 });
                F2 && r(p2, F2);
              } else if (h2) {
                var N = g2.match(Q)[1];
                var w2 = p2 = this.image(N);
                w2.imgwidth = v(J[N] && J[N].width, F2 && F2.width);
                w2.imgheight = v(J[N] && J[N].height, F2 && F2.height);
                var m2 = function(b2) {
                  return b2.attr({ width: b2.width, height: b2.height });
                };
                ["width", "height"].forEach(function(d2) {
                  w2[d2 + "Setter"] = function(d3, g3) {
                    var a4 = this["img" + g3];
                    this[g3] = d3;
                    b(a4) && (F2 && F2.backgroundSize === "within" && this.width && this.height && (a4 = Math.round(a4 * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(g3, a4), this.alignByTranslate || (d3 = ((this[g3] || 0) - a4) / 2, this.attr(g3 === "width" ? { translateX: d3 } : { translateY: d3 })));
                  };
                });
                b(a3) && w2.attr({ x: a3, y: c2 });
                w2.isImg = true;
                b(w2.imgwidth) && b(w2.imgheight) ? m2(w2) : (w2.attr({ width: 0, height: 0 }), d("img", { onload: function() {
                  var b2 = f[I.chartIndex];
                  this.width === 0 && (k(this, { position: "absolute", top: "-999em" }), e.body.appendChild(this));
                  J[N] = { width: this.width, height: this.height };
                  w2.imgwidth = this.width;
                  w2.imgheight = this.height;
                  w2.element && m2(w2);
                  this.parentNode && this.parentNode.removeChild(this);
                  I.imgCount--;
                  if (!I.imgCount && b2 && !b2.hasLoaded)
                    b2.onload();
                }, src: N }), this.imgCount++);
              }
              return p2;
            };
            z.prototype.clipRect = function(b2, d2, g2, a3) {
              var k2 = Y() + "-", r2 = this.createElement("clipPath").attr({ id: k2 }).add(this.defs);
              b2 = this.rect(b2, d2, g2, a3, 0).add(r2);
              b2.id = k2;
              b2.clipPath = r2;
              b2.count = 0;
              return b2;
            };
            z.prototype.text = function(d2, g2, a3, k2) {
              var r2 = {};
              if (k2 && (this.allowHTML || !this.forExport))
                return this.html(d2, g2, a3);
              r2.x = Math.round(g2 || 0);
              a3 && (r2.y = Math.round(a3));
              b(d2) && (r2.text = d2);
              d2 = this.createElement("text").attr(r2);
              k2 || (d2.xSetter = function(b2, d3, g3) {
                for (var a4 = g3.getElementsByTagName("tspan"), k3 = g3.getAttribute(d3), r3 = 0, c2; r3 < a4.length; r3++)
                  c2 = a4[r3], c2.getAttribute(d3) === k3 && c2.setAttribute(d3, b2);
                g3.setAttribute(d3, b2);
              });
              return d2;
            };
            z.prototype.fontMetrics = function(b2, d2) {
              b2 = !this.styledMode && /px/.test(b2) || !K.getComputedStyle ? b2 || d2 && d2.style && d2.style.fontSize || this.style && this.style.fontSize : d2 && y.prototype.getStyle.call(d2, "font-size");
              b2 = /px/.test(b2) ? W(b2) : 12;
              d2 = 24 > b2 ? b2 + 3 : Math.round(1.2 * b2);
              return { h: d2, b: Math.round(0.8 * d2), f: b2 };
            };
            z.prototype.rotCorr = function(b2, d2, g2) {
              var a3 = b2;
              d2 && g2 && (a3 = Math.max(a3 * Math.cos(d2 * c), 4));
              return { x: -b2 / 3 * Math.sin(d2 * c), y: a3 };
            };
            z.prototype.pathToSegments = function(b2) {
              for (var d2 = [], g2 = [], a3 = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 }, k2 = 0; k2 < b2.length; k2++)
                C(g2[0]) && D(b2[k2]) && g2.length === a3[g2[0].toUpperCase()] && b2.splice(k2, 0, g2[0].replace("M", "L").replace("m", "l")), typeof b2[k2] === "string" && (g2.length && d2.push(g2.slice(0)), g2.length = 0), g2.push(b2[k2]);
              d2.push(g2.slice(0));
              return d2;
            };
            z.prototype.label = function(b2, d2, g2, a3, k2, r2, c2, z2, l2) {
              return new G(this, b2, d2, g2, a3, k2, r2, c2, z2, l2);
            };
            z.prototype.alignElements = function() {
              this.alignedObjects.forEach(function(b2) {
                return b2.align();
              });
            };
            return z;
          }();
          r(E.prototype, {
            Element: y,
            SVG_NS: l,
            escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
            symbols: B,
            draw: n
          });
          x.registerRendererType("svg", E, true);
          "";
          return E;
        });
        L(a, "Core/Renderer/HTML/HTMLElement.js", [a["Core/Globals.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Utilities.js"]], function(a2, u, E) {
          var v = this && this.__extends || function() {
            var a3 = function(c2, e2) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c3) {
                a4.__proto__ = c3;
              } || function(a4, c3) {
                for (var l in c3)
                  c3.hasOwnProperty(l) && (a4[l] = c3[l]);
              };
              return a3(c2, e2);
            };
            return function(c2, e2) {
              function f2() {
                this.constructor = c2;
              }
              a3(c2, e2);
              c2.prototype = e2 === null ? Object.create(e2) : (f2.prototype = e2.prototype, new f2());
            };
          }(), x = a2.isFirefox, y = a2.isMS, G = a2.isWebKit, B = a2.win, q = E.css, h = E.defined, f = E.extend, c = E.pick, e = E.pInt;
          return function(a3) {
            function m() {
              return a3 !== null && a3.apply(this, arguments) || this;
            }
            v(m, a3);
            m.compose = function(a4) {
              a4 = a4.prototype;
              var c2 = m.prototype;
              a4.getSpanCorrection = c2.getSpanCorrection;
              a4.htmlCss = c2.htmlCss;
              a4.htmlGetBBox = c2.htmlGetBBox;
              a4.htmlUpdateTransform = c2.htmlUpdateTransform;
              a4.setSpanRotation = c2.setSpanRotation;
            };
            m.prototype.getSpanCorrection = function(a4, c2, l) {
              this.xCorr = -a4 * l;
              this.yCorr = -c2;
            };
            m.prototype.htmlCss = function(a4) {
              var e2 = this.element.tagName === "SPAN" && a4 && "width" in a4, l = c(e2 && a4.width, void 0);
              if (e2) {
                delete a4.width;
                this.textWidth = l;
                var h2 = true;
              }
              a4 && a4.textOverflow === "ellipsis" && (a4.whiteSpace = "nowrap", a4.overflow = "hidden");
              this.styles = f(this.styles, a4);
              q(this.element, a4);
              h2 && this.htmlUpdateTransform();
              return this;
            };
            m.prototype.htmlGetBBox = function() {
              var a4 = this.element;
              return {
                x: a4.offsetLeft,
                y: a4.offsetTop,
                width: a4.offsetWidth,
                height: a4.offsetHeight
              };
            };
            m.prototype.htmlUpdateTransform = function() {
              if (this.added) {
                var a4 = this.renderer, c2 = this.element, l = this.translateX || 0, f2 = this.translateY || 0, m2 = this.x || 0, t = this.y || 0, p = this.textAlign || "left", d = { left: 0, center: 0.5, right: 1 }[p], k = this.styles;
                k = k && k.whiteSpace;
                q(c2, { marginLeft: l, marginTop: f2 });
                !a4.styledMode && this.shadows && this.shadows.forEach(function(b2) {
                  q(b2, { marginLeft: l + 1, marginTop: f2 + 1 });
                });
                this.inverted && [].forEach.call(c2.childNodes, function(b2) {
                  a4.invertChild(b2, c2);
                });
                if (c2.tagName === "SPAN") {
                  var b = this.rotation, g = this.textWidth && e(this.textWidth), r = [b, p, c2.innerHTML, this.textWidth, this.textAlign].join(), F = void 0;
                  (F = g !== this.oldTextWidth) && !(F = g > this.oldTextWidth) && ((F = this.textPxLength) || (q(c2, { width: "", whiteSpace: k || "nowrap" }), F = c2.offsetWidth), F = F > g);
                  F && (/[ \-]/.test(c2.textContent || c2.innerText) || c2.style.textOverflow === "ellipsis") ? (q(c2, { width: g + "px", display: "block", whiteSpace: k || "normal" }), this.oldTextWidth = g, this.hasBoxWidthChanged = true) : this.hasBoxWidthChanged = false;
                  r !== this.cTT && (F = a4.fontMetrics(c2.style.fontSize, c2).b, !h(b) || b === (this.oldRotation || 0) && p === this.oldAlign || this.setSpanRotation(b, d, F), this.getSpanCorrection(!h(b) && this.textPxLength || c2.offsetWidth, F, d, b, p));
                  q(c2, { left: m2 + (this.xCorr || 0) + "px", top: t + (this.yCorr || 0) + "px" });
                  this.cTT = r;
                  this.oldRotation = b;
                  this.oldAlign = p;
                }
              } else
                this.alignOnAdd = true;
            };
            m.prototype.setSpanRotation = function(a4, c2, l) {
              var e2 = {}, f2 = y && !/Edge/.test(B.navigator.userAgent) ? "-ms-transform" : G ? "-webkit-transform" : x ? "MozTransform" : B.opera ? "-o-transform" : void 0;
              f2 && (e2[f2] = e2.transform = "rotate(" + a4 + "deg)", e2[f2 + (x ? "Origin" : "-origin")] = e2.transformOrigin = 100 * c2 + "% " + l + "px", q(this.element, e2));
            };
            return m;
          }(u);
        });
        L(a, "Core/Renderer/HTML/HTMLRenderer.js", [a["Core/Renderer/HTML/AST.js"], a["Core/Renderer/SVG/SVGElement.js"], a["Core/Renderer/SVG/SVGRenderer.js"], a["Core/Utilities.js"]], function(a2, u, E, H) {
          var v = this && this.__extends || function() {
            var a3 = function(f, c) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
                a4.__proto__ = c2;
              } || function(a4, c2) {
                for (var e in c2)
                  c2.hasOwnProperty(e) && (a4[e] = c2[e]);
              };
              return a3(f, c);
            };
            return function(f, c) {
              function e() {
                this.constructor = f;
              }
              a3(f, c);
              f.prototype = c === null ? Object.create(c) : (e.prototype = c.prototype, new e());
            };
          }(), y = H.attr, G = H.createElement, B = H.extend, q = H.pick;
          return function(h) {
            function f() {
              return h !== null && h.apply(this, arguments) || this;
            }
            v(f, h);
            f.compose = function(a3) {
              a3.prototype.html = f.prototype.html;
            };
            f.prototype.html = function(c, e, f2) {
              var h2 = this.createElement("span"), w = h2.element, n = h2.renderer, l = n.isSVG, t = function(a3, c2) {
                ["opacity", "visibility"].forEach(function(l2) {
                  a3[l2 + "Setter"] = function(d, k, b) {
                    var g = a3.div ? a3.div.style : c2;
                    u.prototype[l2 + "Setter"].call(this, d, k, b);
                    g && (g[k] = d);
                  };
                });
                a3.addedSetters = true;
              };
              h2.textSetter = function(c2) {
                c2 !== this.textStr && (delete this.bBox, delete this.oldTextWidth, a2.setElementHTML(this.element, q(c2, "")), this.textStr = c2, h2.doTransform = true);
              };
              l && t(h2, h2.element.style);
              h2.xSetter = h2.ySetter = h2.alignSetter = h2.rotationSetter = function(a3, c2) {
                c2 === "align" ? h2.alignValue = h2.textAlign = a3 : h2[c2] = a3;
                h2.doTransform = true;
              };
              h2.afterSetters = function() {
                this.doTransform && (this.htmlUpdateTransform(), this.doTransform = false);
              };
              h2.attr({ text: c, x: Math.round(e), y: Math.round(f2) }).css({ position: "absolute" });
              n.styledMode || h2.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize });
              w.style.whiteSpace = "nowrap";
              h2.css = h2.htmlCss;
              l && (h2.add = function(a3) {
                var c2 = n.box.parentNode, l2 = [];
                if (this.parentGroup = a3) {
                  var d = a3.div;
                  if (!d) {
                    for (; a3; )
                      l2.push(a3), a3 = a3.parentGroup;
                    l2.reverse().forEach(function(a4) {
                      function b(b2, d2) {
                        a4[d2] = b2;
                        d2 === "translateX" ? e2.left = b2 + "px" : e2.top = b2 + "px";
                        a4.doTransform = true;
                      }
                      var g = y(a4.element, "class"), k = a4.styles || {};
                      d = a4.div = a4.div || G("div", g ? { className: g } : void 0, { position: "absolute", left: (a4.translateX || 0) + "px", top: (a4.translateY || 0) + "px", display: a4.display, opacity: a4.opacity, cursor: k.cursor, pointerEvents: k.pointerEvents }, d || c2);
                      var e2 = d.style;
                      B(a4, { classSetter: function(b2) {
                        return function(d2) {
                          this.element.setAttribute("class", d2);
                          b2.className = d2;
                        };
                      }(d), on: function() {
                        l2[0].div && h2.on.apply({ element: l2[0].div, onEvents: h2.onEvents }, arguments);
                        return a4;
                      }, translateXSetter: b, translateYSetter: b });
                      a4.addedSetters || t(a4);
                    });
                  }
                } else
                  d = c2;
                d.appendChild(w);
                h2.added = true;
                h2.alignOnAdd && h2.htmlUpdateTransform();
                return h2;
              });
              return h2;
            };
            return f;
          }(E);
        });
        L(a, "Core/Foundation.js", [a["Core/Utilities.js"]], function(a2) {
          var v = a2.addEvent, E = a2.isFunction, H = a2.objectEach, x = a2.removeEvent;
          return { registerEventOptions: function(a3, u) {
            a3.eventOptions = a3.eventOptions || {};
            H(u.events, function(u2, q) {
              E(u2) && a3.eventOptions[q] !== u2 && (E(a3.eventOptions[q]) && x(a3, q, a3.eventOptions[q]), a3.eventOptions[q] = u2, v(a3, q, u2));
            });
          } };
        });
        L(a, "Core/Axis/AxisDefaults.js", [a["Core/Color/Palette.js"]], function(a2) {
          var v;
          (function(v2) {
            v2.defaultXAxisOptions = { alignTicks: true, allowDecimals: void 0, panningEnabled: true, zIndex: 2, zoomEnabled: true, dateTimeLabelFormats: { millisecond: { main: "%H:%M:%S.%L", range: false }, second: { main: "%H:%M:%S", range: false }, minute: { main: "%H:%M", range: false }, hour: { main: "%H:%M", range: false }, day: { main: "%e. %b" }, week: { main: "%e. %b" }, month: { main: "%b '%y" }, year: { main: "%Y" } }, endOnTick: false, gridLineDashStyle: "Solid", gridZIndex: 1, labels: {
              autoRotation: void 0,
              autoRotationLimit: 80,
              distance: void 0,
              enabled: true,
              indentation: 10,
              overflow: "justify",
              padding: 5,
              reserveSpace: void 0,
              rotation: void 0,
              staggerLines: 0,
              step: 0,
              useHTML: false,
              x: 0,
              zIndex: 7,
              style: { color: a2.neutralColor60, cursor: "default", fontSize: "11px" }
            }, maxPadding: 0.01, minorGridLineDashStyle: "Solid", minorTickLength: 2, minorTickPosition: "outside", minPadding: 0.01, offset: void 0, opposite: false, reversed: void 0, reversedStacks: false, showEmpty: true, showFirstLabel: true, showLastLabel: true, startOfWeek: 1, startOnTick: false, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: {
              align: "middle",
              rotation: 0,
              useHTML: false,
              x: 0,
              y: 0,
              style: { color: a2.neutralColor60 }
            }, type: "linear", uniqueNames: true, visible: true, minorGridLineColor: a2.neutralColor5, minorGridLineWidth: 1, minorTickColor: a2.neutralColor40, lineColor: a2.highlightColor20, lineWidth: 1, gridLineColor: a2.neutralColor10, gridLineWidth: void 0, tickColor: a2.highlightColor20 };
            v2.defaultYAxisOptions = { reversedStacks: true, endOnTick: true, maxPadding: 0.05, minPadding: 0.05, tickPixelInterval: 72, showLastLabel: true, labels: { x: -8 }, startOnTick: true, title: { rotation: 270, text: "Values" }, stackLabels: {
              animation: {},
              allowOverlap: false,
              enabled: false,
              crop: true,
              overflow: "justify",
              formatter: function() {
                var a3 = this.axis.chart.numberFormatter;
                return a3(this.total, -1);
              },
              style: { color: a2.neutralColor100, fontSize: "11px", fontWeight: "bold", textOutline: "1px contrast" }
            }, gridLineWidth: 1, lineWidth: 0 };
            v2.defaultLeftAxisOptions = { labels: { x: -15 }, title: { rotation: 270 } };
            v2.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } };
            v2.defaultBottomAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } };
            v2.defaultTopAxisOptions = { labels: {
              autoRotation: [-45],
              x: 0
            }, margin: 15, title: { rotation: 0 } };
          })(v || (v = {}));
          return v;
        });
        L(a, "Core/Axis/Tick.js", [a["Core/FormatUtilities.js"], a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u, E) {
          var v = u.deg2rad, x = E.clamp, y = E.correctFloat, G = E.defined, B = E.destroyObjectProperties, q = E.extend, h = E.fireEvent, f = E.isNumber, c = E.merge, e = E.objectEach, t = E.pick;
          u = function() {
            function m(a3, c2, l, e2, f2) {
              this.isNewLabel = this.isNew = true;
              this.axis = a3;
              this.pos = c2;
              this.type = l || "";
              this.parameters = f2 || {};
              this.tickmarkOffset = this.parameters.tickmarkOffset;
              this.options = this.parameters.options;
              h(this, "init");
              l || e2 || this.addLabel();
            }
            m.prototype.addLabel = function() {
              var c2 = this, e2 = c2.axis, l = e2.options, m2 = e2.chart, K = e2.categories, A = e2.logarithmic, p = e2.names, d = c2.pos, k = t(c2.options && c2.options.labels, l.labels), b = e2.tickPositions, g = d === b[0], r = d === b[b.length - 1], F = (!k.step || k.step === 1) && e2.tickInterval === 1;
              b = b.info;
              var D = c2.label, M;
              K = this.parameters.category || (K ? t(K[d], p[d], d) : d);
              A && f(K) && (K = y(A.lin2log(K)));
              if (e2.dateTime && b) {
                var C = m2.time.resolveDTLFormat(l.dateTimeLabelFormats[!l.grid && b.higherRanks[d] || b.unitName]);
                var O = C.main;
              }
              c2.isFirst = g;
              c2.isLast = r;
              var v2 = { axis: e2, chart: m2, dateTimeLabelFormat: O, isFirst: g, isLast: r, pos: d, tick: c2, tickPositionInfo: b, value: K };
              h(this, "labelFormat", v2);
              var W = function(b2) {
                return k.formatter ? k.formatter.call(b2, b2) : k.format ? (b2.text = e2.defaultLabelFormatter.call(b2), a2.format(k.format, b2, m2)) : e2.defaultLabelFormatter.call(b2, b2);
              };
              l = W.call(v2, v2);
              var u2 = C && C.list;
              c2.shortenLabel = u2 ? function() {
                for (M = 0; M < u2.length; M++)
                  if (q(v2, { dateTimeLabelFormat: u2[M] }), D.attr({ text: W.call(v2, v2) }), D.getBBox().width < e2.getSlotWidth(c2) - 2 * k.padding)
                    return;
                D.attr({ text: "" });
              } : void 0;
              F && e2._addedPlotLB && c2.moveLabel(l, k);
              G(D) || c2.movedLabel ? D && D.textStr !== l && !F && (!D.textWidth || k.style.width || D.styles.width || D.css({ width: null }), D.attr({ text: l }), D.textPxLength = D.getBBox().width) : (c2.label = D = c2.createLabel({ x: 0, y: 0 }, l, k), c2.rotation = 0);
            };
            m.prototype.createLabel = function(a3, e2, l) {
              var f2 = this.axis, h2 = f2.chart;
              if (a3 = G(e2) && l.enabled ? h2.renderer.text(e2, a3.x, a3.y, l.useHTML).add(f2.labelGroup) : null)
                h2.styledMode || a3.css(c(l.style)), a3.textPxLength = a3.getBBox().width;
              return a3;
            };
            m.prototype.destroy = function() {
              B(this, this.axis);
            };
            m.prototype.getPosition = function(a3, c2, l, e2) {
              var f2 = this.axis, n = f2.chart, p = e2 && n.oldChartHeight || n.chartHeight;
              a3 = { x: a3 ? y(f2.translate(c2 + l, null, null, e2) + f2.transB) : f2.left + f2.offset + (f2.opposite ? (e2 && n.oldChartWidth || n.chartWidth) - f2.right - f2.left : 0), y: a3 ? p - f2.bottom + f2.offset - (f2.opposite ? f2.height : 0) : y(p - f2.translate(c2 + l, null, null, e2) - f2.transB) };
              a3.y = x(a3.y, -1e5, 1e5);
              h(this, "afterGetPosition", { pos: a3 });
              return a3;
            };
            m.prototype.getLabelPosition = function(a3, c2, l, e2, f2, m2, p, d) {
              var k = this.axis, b = k.transA, g = k.isLinked && k.linkedParent ? k.linkedParent.reversed : k.reversed, r = k.staggerLines, F = k.tickRotCorr || { x: 0, y: 0 }, D = e2 || k.reserveSpaceDefault ? 0 : -k.labelOffset * (k.labelAlign === "center" ? 0.5 : 1), n = {}, C = f2.y;
              G(C) || (C = k.side === 0 ? l.rotation ? -8 : -l.getBBox().height : k.side === 2 ? F.y + 8 : Math.cos(l.rotation * v) * (F.y - l.getBBox(false, 0).height / 2));
              a3 = a3 + f2.x + D + F.x - (m2 && e2 ? m2 * b * (g ? -1 : 1) : 0);
              c2 = c2 + C - (m2 && !e2 ? m2 * b * (g ? 1 : -1) : 0);
              r && (l = p / (d || 1) % r, k.opposite && (l = r - l - 1), c2 += k.labelOffset / r * l);
              n.x = a3;
              n.y = Math.round(c2);
              h(this, "afterGetLabelPosition", { pos: n, tickmarkOffset: m2, index: p });
              return n;
            };
            m.prototype.getLabelSize = function() {
              return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
            };
            m.prototype.getMarkPath = function(a3, c2, l, e2, f2, h2) {
              return h2.crispLine([["M", a3, c2], ["L", a3 + (f2 ? 0 : -l), c2 + (f2 ? l : 0)]], e2);
            };
            m.prototype.handleOverflow = function(a3) {
              var c2 = this.axis, l = c2.options.labels, e2 = a3.x, f2 = c2.chart.chartWidth, h2 = c2.chart.spacing, p = t(c2.labelLeft, Math.min(c2.pos, h2[3]));
              h2 = t(c2.labelRight, Math.max(c2.isRadial ? 0 : c2.pos + c2.len, f2 - h2[1]));
              var d = this.label, k = this.rotation, b = { left: 0, center: 0.5, right: 1 }[c2.labelAlign || d.attr("align")], g = d.getBBox().width, r = c2.getSlotWidth(this), F = {}, D = r, M = 1, C;
              if (k || l.overflow !== "justify")
                0 > k && e2 - b * g < p ? C = Math.round(e2 / Math.cos(k * v) - p) : 0 < k && e2 + b * g > h2 && (C = Math.round((f2 - e2) / Math.cos(k * v)));
              else if (f2 = e2 + (1 - b) * g, e2 - b * g < p ? D = a3.x + D * (1 - b) - p : f2 > h2 && (D = h2 - a3.x + D * b, M = -1), D = Math.min(r, D), D < r && c2.labelAlign === "center" && (a3.x += M * (r - D - b * (r - Math.min(g, D)))), g > D || c2.autoRotation && (d.styles || {}).width)
                C = D;
              C && (this.shortenLabel ? this.shortenLabel() : (F.width = Math.floor(C) + "px", (l.style || {}).textOverflow || (F.textOverflow = "ellipsis"), d.css(F)));
            };
            m.prototype.moveLabel = function(a3, c2) {
              var l = this, f2 = l.label, h2 = l.axis, n = h2.reversed, p = false;
              f2 && f2.textStr === a3 ? (l.movedLabel = f2, p = true, delete l.label) : e(h2.ticks, function(d2) {
                p || d2.isNew || d2 === l || !d2.label || d2.label.textStr !== a3 || (l.movedLabel = d2.label, p = true, d2.labelPos = l.movedLabel.xy, delete d2.label);
              });
              if (!p && (l.labelPos || f2)) {
                var d = l.labelPos || f2.xy;
                f2 = h2.horiz ? n ? 0 : h2.width + h2.left : d.x;
                h2 = h2.horiz ? d.y : n ? h2.width + h2.left : 0;
                l.movedLabel = l.createLabel({ x: f2, y: h2 }, a3, c2);
                l.movedLabel && l.movedLabel.attr({ opacity: 0 });
              }
            };
            m.prototype.render = function(a3, c2, l) {
              var e2 = this.axis, f2 = e2.horiz, n = this.pos, p = t(this.tickmarkOffset, e2.tickmarkOffset);
              n = this.getPosition(f2, n, p, c2);
              p = n.x;
              var d = n.y;
              e2 = f2 && p === e2.pos + e2.len || !f2 && d === e2.pos ? -1 : 1;
              f2 = t(l, this.label && this.label.newOpacity, 1);
              l = t(l, 1);
              this.isActive = true;
              this.renderGridLine(c2, l, e2);
              this.renderMark(n, l, e2);
              this.renderLabel(n, c2, f2, a3);
              this.isNew = false;
              h(this, "afterRender");
            };
            m.prototype.renderGridLine = function(a3, c2, e2) {
              var l = this.axis, f2 = l.options, h2 = {}, p = this.pos, d = this.type, k = t(this.tickmarkOffset, l.tickmarkOffset), b = l.chart.renderer, g = this.gridLine, r = f2.gridLineWidth, F = f2.gridLineColor, D = f2.gridLineDashStyle;
              this.type === "minor" && (r = f2.minorGridLineWidth, F = f2.minorGridLineColor, D = f2.minorGridLineDashStyle);
              g || (l.chart.styledMode || (h2.stroke = F, h2["stroke-width"] = r || 0, h2.dashstyle = D), d || (h2.zIndex = 1), a3 && (c2 = 0), this.gridLine = g = b.path().attr(h2).addClass("highcharts-" + (d ? d + "-" : "") + "grid-line").add(l.gridGroup));
              if (g && (e2 = l.getPlotLinePath({ value: p + k, lineWidth: g.strokeWidth() * e2, force: "pass", old: a3 })))
                g[a3 || this.isNew ? "attr" : "animate"]({ d: e2, opacity: c2 });
            };
            m.prototype.renderMark = function(a3, c2, e2) {
              var l = this.axis, f2 = l.options, h2 = l.chart.renderer, p = this.type, d = l.tickSize(p ? p + "Tick" : "tick"), k = a3.x;
              a3 = a3.y;
              var b = t(f2[p !== "minor" ? "tickWidth" : "minorTickWidth"], !p && l.isXAxis ? 1 : 0);
              f2 = f2[p !== "minor" ? "tickColor" : "minorTickColor"];
              var g = this.mark, r = !g;
              d && (l.opposite && (d[0] = -d[0]), g || (this.mark = g = h2.path().addClass("highcharts-" + (p ? p + "-" : "") + "tick").add(l.axisGroup), l.chart.styledMode || g.attr({ stroke: f2, "stroke-width": b })), g[r ? "attr" : "animate"]({ d: this.getMarkPath(k, a3, d[0], g.strokeWidth() * e2, l.horiz, h2), opacity: c2 }));
            };
            m.prototype.renderLabel = function(a3, c2, e2, h2) {
              var l = this.axis, n = l.horiz, p = l.options, d = this.label, k = p.labels, b = k.step;
              l = t(this.tickmarkOffset, l.tickmarkOffset);
              var g = a3.x;
              a3 = a3.y;
              var r = true;
              d && f(g) && (d.xy = a3 = this.getLabelPosition(g, a3, d, n, k, l, h2, b), this.isFirst && !this.isLast && !p.showFirstLabel || this.isLast && !this.isFirst && !p.showLastLabel ? r = false : !n || k.step || k.rotation || c2 || e2 === 0 || this.handleOverflow(a3), b && h2 % b && (r = false), r && f(a3.y) ? (a3.opacity = e2, d[this.isNewLabel ? "attr" : "animate"](a3), this.isNewLabel = false) : (d.attr("y", -9999), this.isNewLabel = true));
            };
            m.prototype.replaceMovedLabel = function() {
              var a3 = this.label, c2 = this.axis, e2 = c2.reversed;
              if (a3 && !this.isNew) {
                var f2 = c2.horiz ? e2 ? c2.left : c2.width + c2.left : a3.xy.x;
                e2 = c2.horiz ? a3.xy.y : e2 ? c2.width + c2.top : c2.top;
                a3.animate({ x: f2, y: e2, opacity: 0 }, void 0, a3.destroy);
                delete this.label;
              }
              c2.isDirty = true;
              this.label = this.movedLabel;
              delete this.movedLabel;
            };
            return m;
          }();
          "";
          return u;
        });
        L(a, "Core/Axis/Axis.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Color/Color.js"], a["Core/Color/Palette.js"], a["Core/DefaultOptions.js"], a["Core/Foundation.js"], a["Core/Globals.js"], a["Core/Utilities.js"], a["Core/Axis/AxisDefaults.js"], a["Core/Axis/Tick.js"]], function(a2, u, E, H, x, y, G, B, q) {
          var h = a2.animObject, f = x.registerEventOptions, c = y.deg2rad, e = H.defaultOptions, t = G.arrayMax, m = G.arrayMin, w = G.clamp, n = G.correctFloat, l = G.defined, J = G.destroyObjectProperties, v = G.erase, A = G.error, p = G.extend, d = G.fireEvent, k = G.getMagnitude, b = G.isArray, g = G.isNumber, r = G.isString, F = G.merge, D = G.normalizeTickInterval, M = G.objectEach, C = G.pick, O = G.relativeLength, S = G.removeEvent, W = G.splat, Y = G.syncTimeout;
          a2 = function() {
            function a3(b2, a4) {
              this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0;
              this.init(b2, a4);
            }
            a3.prototype.init = function(b2, a4) {
              var c2 = a4.isX;
              this.chart = b2;
              this.horiz = b2.inverted && !this.isZAxis ? !c2 : c2;
              this.isXAxis = c2;
              this.coll = this.coll || (c2 ? "xAxis" : "yAxis");
              d(this, "init", { userOptions: a4 });
              this.opposite = C(a4.opposite, this.opposite);
              this.side = C(a4.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
              this.setOptions(a4);
              var k2 = this.options, r2 = k2.labels, e2 = k2.type;
              this.userOptions = a4;
              this.minPixelPadding = 0;
              this.reversed = C(k2.reversed, this.reversed);
              this.visible = k2.visible;
              this.zoomEnabled = k2.zoomEnabled;
              this.hasNames = e2 === "category" || k2.categories === true;
              this.categories = k2.categories || this.hasNames;
              this.names || (this.names = [], this.names.keys = {});
              this.plotLinesAndBandsGroups = {};
              this.positiveValuesOnly = !!this.logarithmic;
              this.isLinked = l(k2.linkedTo);
              this.ticks = {};
              this.labelEdge = [];
              this.minorTicks = {};
              this.plotLinesAndBands = [];
              this.alternateBands = {};
              this.len = 0;
              this.minRange = this.userMinRange = k2.minRange || k2.maxZoom;
              this.range = k2.range;
              this.offset = k2.offset || 0;
              this.min = this.max = null;
              a4 = C(k2.crosshair, W(b2.options.tooltip.crosshairs)[c2 ? 0 : 1]);
              this.crosshair = a4 === true ? {} : a4;
              b2.axes.indexOf(this) === -1 && (c2 ? b2.axes.splice(b2.xAxis.length, 0, this) : b2.axes.push(this), b2[this.coll].push(this));
              this.series = this.series || [];
              b2.inverted && !this.isZAxis && c2 && typeof this.reversed === "undefined" && (this.reversed = true);
              this.labelRotation = g(r2.rotation) ? r2.rotation : void 0;
              f(this, k2);
              d(this, "afterInit");
            };
            a3.prototype.setOptions = function(b2) {
              this.options = F(B.defaultXAxisOptions, this.coll === "yAxis" && B.defaultYAxisOptions, [
                B.defaultTopAxisOptions,
                B.defaultRightAxisOptions,
                B.defaultBottomAxisOptions,
                B.defaultLeftAxisOptions
              ][this.side], F(e[this.coll], b2));
              d(this, "afterSetOptions", { userOptions: b2 });
            };
            a3.prototype.defaultLabelFormatter = function(b2) {
              var a4 = this.axis;
              b2 = this.chart.numberFormatter;
              var d2 = g(this.value) ? this.value : NaN, c2 = a4.chart.time, k2 = this.dateTimeLabelFormat, r2 = e.lang, l2 = r2.numericSymbols;
              r2 = r2.numericSymbolMagnitude || 1e3;
              var z = a4.logarithmic ? Math.abs(d2) : a4.tickInterval, f2 = l2 && l2.length;
              if (a4.categories)
                var h2 = "" + this.value;
              else if (k2)
                h2 = c2.dateFormat(k2, d2);
              else if (f2 && 1e3 <= z)
                for (; f2-- && typeof h2 === "undefined"; )
                  a4 = Math.pow(r2, f2 + 1), z >= a4 && 10 * d2 % a4 === 0 && l2[f2] !== null && d2 !== 0 && (h2 = b2(d2 / a4, -1) + l2[f2]);
              typeof h2 === "undefined" && (h2 = 1e4 <= Math.abs(d2) ? b2(d2, -1) : b2(d2, -1, void 0, ""));
              return h2;
            };
            a3.prototype.getSeriesExtremes = function() {
              var b2 = this, a4 = b2.chart, k2;
              d(this, "getSeriesExtremes", null, function() {
                b2.hasVisibleSeries = false;
                b2.dataMin = b2.dataMax = b2.threshold = null;
                b2.softThreshold = !b2.isXAxis;
                b2.stacking && b2.stacking.buildStacks();
                b2.series.forEach(function(d2) {
                  if (d2.visible || !a4.options.chart.ignoreHiddenSeries) {
                    var c2 = d2.options, r2 = c2.threshold;
                    b2.hasVisibleSeries = true;
                    b2.positiveValuesOnly && 0 >= r2 && (r2 = null);
                    if (b2.isXAxis) {
                      if (c2 = d2.xData, c2.length) {
                        c2 = b2.logarithmic ? c2.filter(b2.validatePositiveValue) : c2;
                        k2 = d2.getXExtremes(c2);
                        var e2 = k2.min;
                        var z = k2.max;
                        g(e2) || e2 instanceof Date || (c2 = c2.filter(g), k2 = d2.getXExtremes(c2), e2 = k2.min, z = k2.max);
                        c2.length && (b2.dataMin = Math.min(C(b2.dataMin, e2), e2), b2.dataMax = Math.max(C(b2.dataMax, z), z));
                      }
                    } else if (d2 = d2.applyExtremes(), g(d2.dataMin) && (e2 = d2.dataMin, b2.dataMin = Math.min(C(b2.dataMin, e2), e2)), g(d2.dataMax) && (z = d2.dataMax, b2.dataMax = Math.max(C(b2.dataMax, z), z)), l(r2) && (b2.threshold = r2), !c2.softThreshold || b2.positiveValuesOnly)
                      b2.softThreshold = false;
                  }
                });
              });
              d(this, "afterGetSeriesExtremes");
            };
            a3.prototype.translate = function(b2, a4, d2, c2, k2, r2) {
              var e2 = this.linkedParent || this, l2 = c2 && e2.old ? e2.old.min : e2.min, z = e2.minPixelPadding;
              k2 = (e2.isOrdinal || e2.brokenAxis && e2.brokenAxis.hasBreaks || e2.logarithmic && k2) && e2.lin2val;
              var f2 = 1, I = 0;
              c2 = c2 && e2.old ? e2.old.transA : e2.transA;
              c2 || (c2 = e2.transA);
              d2 && (f2 *= -1, I = e2.len);
              e2.reversed && (f2 *= -1, I -= f2 * (e2.sector || e2.len));
              a4 ? (b2 = (b2 * f2 + I - z) / c2 + l2, k2 && (b2 = e2.lin2val(b2))) : (k2 && (b2 = e2.val2lin(b2)), b2 = g(l2) ? f2 * (b2 - l2) * c2 + I + f2 * z + (g(r2) ? c2 * r2 : 0) : void 0);
              return b2;
            };
            a3.prototype.toPixels = function(b2, a4) {
              return this.translate(b2, false, !this.horiz, null, true) + (a4 ? 0 : this.pos);
            };
            a3.prototype.toValue = function(b2, a4) {
              return this.translate(b2 - (a4 ? 0 : this.pos), true, !this.horiz, null, true);
            };
            a3.prototype.getPlotLinePath = function(b2) {
              function a4(b3, a5, d2) {
                if (M2 !== "pass" && b3 < a5 || b3 > d2)
                  M2 ? b3 = w(b3, a5, d2) : Z = true;
                return b3;
              }
              var c2 = this, k2 = c2.chart, r2 = c2.left, e2 = c2.top, l2 = b2.old, f2 = b2.value, z = b2.lineWidth, h2 = l2 && k2.oldChartHeight || k2.chartHeight, F2 = l2 && k2.oldChartWidth || k2.chartWidth, D2 = c2.transB, p2 = b2.translatedValue, M2 = b2.force, n2, m2, t2, q2, Z;
              b2 = { value: f2, lineWidth: z, old: l2, force: M2, acrossPanes: b2.acrossPanes, translatedValue: p2 };
              d(this, "getPlotLinePath", b2, function(b3) {
                p2 = C(p2, c2.translate(f2, null, null, l2));
                p2 = w(p2, -1e5, 1e5);
                n2 = t2 = Math.round(p2 + D2);
                m2 = q2 = Math.round(h2 - p2 - D2);
                g(p2) ? c2.horiz ? (m2 = e2, q2 = h2 - c2.bottom, n2 = t2 = a4(n2, r2, r2 + c2.width)) : (n2 = r2, t2 = F2 - c2.right, m2 = q2 = a4(m2, e2, e2 + c2.height)) : (Z = true, M2 = false);
                b3.path = Z && !M2 ? null : k2.renderer.crispLine([["M", n2, m2], ["L", t2, q2]], z || 1);
              });
              return b2.path;
            };
            a3.prototype.getLinearTickPositions = function(b2, a4, d2) {
              var g2 = n(Math.floor(a4 / b2) * b2);
              d2 = n(Math.ceil(d2 / b2) * b2);
              var c2 = [], k2;
              n(g2 + b2) === g2 && (k2 = 20);
              if (this.single)
                return [a4];
              for (a4 = g2; a4 <= d2; ) {
                c2.push(a4);
                a4 = n(a4 + b2, k2);
                if (a4 === r2)
                  break;
                var r2 = a4;
              }
              return c2;
            };
            a3.prototype.getMinorTickInterval = function() {
              var b2 = this.options;
              return b2.minorTicks === true ? C(b2.minorTickInterval, "auto") : b2.minorTicks === false ? null : b2.minorTickInterval;
            };
            a3.prototype.getMinorTickPositions = function() {
              var b2 = this.options, a4 = this.tickPositions, d2 = this.minorTickInterval, g2 = this.pointRangePadding || 0, c2 = this.min - g2;
              g2 = this.max + g2;
              var k2 = g2 - c2, r2 = [];
              if (k2 && k2 / d2 < this.len / 3) {
                var e2 = this.logarithmic;
                if (e2)
                  this.paddedTicks.forEach(function(b3, a5, g3) {
                    a5 && r2.push.apply(r2, e2.getLogTickPositions(d2, g3[a5 - 1], g3[a5], true));
                  });
                else if (this.dateTime && this.getMinorTickInterval() === "auto")
                  r2 = r2.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(d2), c2, g2, b2.startOfWeek));
                else
                  for (b2 = c2 + (a4[0] - c2) % d2; b2 <= g2 && b2 !== r2[0]; b2 += d2)
                    r2.push(b2);
              }
              r2.length !== 0 && this.trimTicks(r2);
              return r2;
            };
            a3.prototype.adjustForMinRange = function() {
              var b2 = this.options, a4 = this.logarithmic, d2 = this.min, g2 = this.max, c2 = 0, k2, r2, e2, f2;
              this.isXAxis && typeof this.minRange === "undefined" && !a4 && (l(b2.min) || l(b2.max) ? this.minRange = null : (this.series.forEach(function(b3) {
                e2 = b3.xData;
                f2 = b3.xIncrement ? 1 : e2.length - 1;
                if (1 < e2.length) {
                  for (k2 = f2; 0 < k2; k2--)
                    if (r2 = e2[k2] - e2[k2 - 1], !c2 || r2 < c2)
                      c2 = r2;
                }
              }), this.minRange = Math.min(5 * c2, this.dataMax - this.dataMin)));
              if (g2 - d2 < this.minRange) {
                var h2 = this.dataMax - this.dataMin >= this.minRange;
                var F2 = this.minRange;
                var D2 = (F2 - g2 + d2) / 2;
                D2 = [d2 - D2, C(b2.min, d2 - D2)];
                h2 && (D2[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin);
                d2 = t(D2);
                g2 = [d2 + F2, C(b2.max, d2 + F2)];
                h2 && (g2[2] = a4 ? a4.log2lin(this.dataMax) : this.dataMax);
                g2 = m(g2);
                g2 - d2 < F2 && (D2[0] = g2 - F2, D2[1] = C(b2.min, g2 - F2), d2 = t(D2));
              }
              this.min = d2;
              this.max = g2;
            };
            a3.prototype.getClosest = function() {
              var b2;
              this.categories ? b2 = 1 : this.series.forEach(function(a4) {
                var d2 = a4.closestPointRange, g2 = a4.visible || !a4.chart.options.chart.ignoreHiddenSeries;
                !a4.noSharedTooltip && l(d2) && g2 && (b2 = l(b2) ? Math.min(b2, d2) : d2);
              });
              return b2;
            };
            a3.prototype.nameToX = function(a4) {
              var d2 = b(this.categories), g2 = d2 ? this.categories : this.names, c2 = a4.options.x;
              a4.series.requireSorting = false;
              l(c2) || (c2 = this.options.uniqueNames ? d2 ? g2.indexOf(a4.name) : C(g2.keys[a4.name], -1) : a4.series.autoIncrement());
              if (c2 === -1) {
                if (!d2)
                  var k2 = g2.length;
              } else
                k2 = c2;
              typeof k2 !== "undefined" && (this.names[k2] = a4.name, this.names.keys[a4.name] = k2);
              return k2;
            };
            a3.prototype.updateNames = function() {
              var b2 = this, a4 = this.names;
              0 < a4.length && (Object.keys(a4.keys).forEach(function(b3) {
                delete a4.keys[b3];
              }), a4.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function(a5) {
                a5.xIncrement = null;
                if (!a5.points || a5.isDirtyData)
                  b2.max = Math.max(b2.max, a5.xData.length - 1), a5.processData(), a5.generatePoints();
                a5.data.forEach(function(d2, g2) {
                  if (d2 && d2.options && typeof d2.name !== "undefined") {
                    var c2 = b2.nameToX(d2);
                    typeof c2 !== "undefined" && c2 !== d2.x && (d2.x = c2, a5.xData[g2] = c2);
                  }
                });
              }));
            };
            a3.prototype.setAxisTranslation = function() {
              var b2 = this, a4 = b2.max - b2.min, g2 = b2.linkedParent, c2 = !!b2.categories, k2 = b2.isXAxis, e2 = b2.axisPointRange || 0, l2 = 0, f2 = 0, h2 = b2.transA;
              if (k2 || c2 || e2) {
                var F2 = b2.getClosest();
                g2 ? (l2 = g2.minPointOffset, f2 = g2.pointRangePadding) : b2.series.forEach(function(a5) {
                  var d2 = c2 ? 1 : k2 ? C(a5.options.pointRange, F2, 0) : b2.axisPointRange || 0, g3 = a5.options.pointPlacement;
                  e2 = Math.max(e2, d2);
                  if (!b2.single || c2)
                    a5 = a5.is("xrange") ? !k2 : k2, l2 = Math.max(l2, a5 && r(g3) ? 0 : d2 / 2), f2 = Math.max(f2, a5 && g3 === "on" ? 0 : d2);
                });
                g2 = b2.ordinal && b2.ordinal.slope && F2 ? b2.ordinal.slope / F2 : 1;
                b2.minPointOffset = l2 *= g2;
                b2.pointRangePadding = f2 *= g2;
                b2.pointRange = Math.min(e2, b2.single && c2 ? 1 : a4);
                k2 && (b2.closestPointRange = F2);
              }
              b2.translationSlope = b2.transA = h2 = b2.staticScale || b2.len / (a4 + f2 || 1);
              b2.transB = b2.horiz ? b2.left : b2.bottom;
              b2.minPixelPadding = h2 * l2;
              d(this, "afterSetAxisTranslation");
            };
            a3.prototype.minFromRange = function() {
              return this.max - this.range;
            };
            a3.prototype.setTickInterval = function(b2) {
              var a4 = this, c2 = a4.chart, r2 = a4.logarithmic, e2 = a4.options, f2 = a4.isXAxis, h2 = a4.isLinked, F2 = e2.tickPixelInterval, z = a4.categories, p2 = a4.softThreshold, M2 = e2.maxPadding, m2 = e2.minPadding, t2 = e2.tickInterval, q2 = g(a4.threshold) ? a4.threshold : null;
              a4.dateTime || z || h2 || this.getTickAmount();
              var w2 = C(a4.userMin, e2.min);
              var O2 = C(a4.userMax, e2.max);
              if (h2) {
                a4.linkedParent = c2[a4.coll][e2.linkedTo];
                var J2 = a4.linkedParent.getExtremes();
                a4.min = C(J2.min, J2.dataMin);
                a4.max = C(J2.max, J2.dataMax);
                e2.type !== a4.linkedParent.options.type && A(11, 1, c2);
              } else {
                if (p2 && l(q2)) {
                  if (a4.dataMin >= q2)
                    J2 = q2, m2 = 0;
                  else if (a4.dataMax <= q2) {
                    var v2 = q2;
                    M2 = 0;
                  }
                }
                a4.min = C(w2, J2, a4.dataMin);
                a4.max = C(O2, v2, a4.dataMax);
              }
              r2 && (a4.positiveValuesOnly && !b2 && 0 >= Math.min(a4.min, C(a4.dataMin, a4.min)) && A(10, 1, c2), a4.min = n(r2.log2lin(a4.min), 16), a4.max = n(r2.log2lin(a4.max), 16));
              a4.range && l(a4.max) && (a4.userMin = a4.min = w2 = Math.max(a4.dataMin, a4.minFromRange()), a4.userMax = O2 = a4.max, a4.range = null);
              d(a4, "foundExtremes");
              a4.beforePadding && a4.beforePadding();
              a4.adjustForMinRange();
              !(z || a4.axisPointRange || a4.stacking && a4.stacking.usePercentage || h2) && l(a4.min) && l(a4.max) && (c2 = a4.max - a4.min) && (!l(w2) && m2 && (a4.min -= c2 * m2), !l(O2) && M2 && (a4.max += c2 * M2));
              g(a4.userMin) || (g(e2.softMin) && e2.softMin < a4.min && (a4.min = w2 = e2.softMin), g(e2.floor) && (a4.min = Math.max(a4.min, e2.floor)));
              g(a4.userMax) || (g(e2.softMax) && e2.softMax > a4.max && (a4.max = O2 = e2.softMax), g(e2.ceiling) && (a4.max = Math.min(a4.max, e2.ceiling)));
              p2 && l(a4.dataMin) && (q2 = q2 || 0, !l(w2) && a4.min < q2 && a4.dataMin >= q2 ? a4.min = a4.options.minRange ? Math.min(q2, a4.max - a4.minRange) : q2 : !l(O2) && a4.max > q2 && a4.dataMax <= q2 && (a4.max = a4.options.minRange ? Math.max(q2, a4.min + a4.minRange) : q2));
              g(a4.min) && g(a4.max) && !this.chart.polar && a4.min > a4.max && (l(a4.options.min) ? a4.max = a4.min : l(a4.options.max) && (a4.min = a4.max));
              a4.tickInterval = a4.min === a4.max || typeof a4.min === "undefined" || typeof a4.max === "undefined" ? 1 : h2 && a4.linkedParent && !t2 && F2 === a4.linkedParent.options.tickPixelInterval ? t2 = a4.linkedParent.tickInterval : C(t2, this.tickAmount ? (a4.max - a4.min) / Math.max(this.tickAmount - 1, 1) : void 0, z ? 1 : (a4.max - a4.min) * F2 / Math.max(a4.len, F2));
              f2 && !b2 && a4.series.forEach(function(b3) {
                b3.processData(a4.min !== (a4.old && a4.old.min) || a4.max !== (a4.old && a4.old.max));
              });
              a4.setAxisTranslation();
              d(this, "initialAxisTranslation");
              a4.pointRange && !t2 && (a4.tickInterval = Math.max(a4.pointRange, a4.tickInterval));
              b2 = C(e2.minTickInterval, a4.dateTime && !a4.series.some(function(b3) {
                return b3.noSharedTooltip;
              }) ? a4.closestPointRange : 0);
              !t2 && a4.tickInterval < b2 && (a4.tickInterval = b2);
              a4.dateTime || a4.logarithmic || t2 || (a4.tickInterval = D(a4.tickInterval, void 0, k(a4.tickInterval), C(e2.allowDecimals, 0.5 > a4.tickInterval || this.tickAmount !== void 0), !!this.tickAmount));
              this.tickAmount || (a4.tickInterval = a4.unsquish());
              this.setTickPositions();
            };
            a3.prototype.setTickPositions = function() {
              var b2 = this.options, a4 = b2.tickPositions, g2 = this.getMinorTickInterval(), c2 = this.hasVerticalPanning(), k2 = this.coll === "colorAxis", e2 = (k2 || !c2) && b2.startOnTick;
              c2 = (k2 || !c2) && b2.endOnTick;
              k2 = b2.tickPositioner;
              this.tickmarkOffset = this.categories && b2.tickmarkPlacement === "between" && this.tickInterval === 1 ? 0.5 : 0;
              this.minorTickInterval = g2 === "auto" && this.tickInterval ? this.tickInterval / 5 : g2;
              this.single = this.min === this.max && l(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || b2.allowDecimals !== false);
              this.tickPositions = g2 = a4 && a4.slice();
              !g2 && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? g2 = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, b2.units), this.min, this.max, b2.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, true) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max) : (g2 = [this.min, this.max], A(19, false, this.chart)), g2.length > this.len && (g2 = [g2[0], g2.pop()], g2[0] === g2[1] && (g2.length = 1)), this.tickPositions = g2, k2 && (k2 = k2.apply(this, [this.min, this.max]))) && (this.tickPositions = g2 = k2);
              this.paddedTicks = g2.slice(0);
              this.trimTicks(g2, e2, c2);
              this.isLinked || (this.single && 2 > g2.length && !this.categories && !this.series.some(function(b3) {
                return b3.is("heatmap") && b3.options.pointPlacement === "between";
              }) && (this.min -= 0.5, this.max += 0.5), a4 || k2 || this.adjustTickAmount());
              d(this, "afterSetTickPositions");
            };
            a3.prototype.trimTicks = function(b2, a4, g2) {
              var c2 = b2[0], k2 = b2[b2.length - 1], e2 = !this.isOrdinal && this.minPointOffset || 0;
              d(this, "trimTicks");
              if (!this.isLinked) {
                if (a4 && c2 !== -Infinity)
                  this.min = c2;
                else
                  for (; this.min - e2 > b2[0]; )
                    b2.shift();
                if (g2)
                  this.max = k2;
                else
                  for (; this.max + e2 < b2[b2.length - 1]; )
                    b2.pop();
                b2.length === 0 && l(c2) && !this.options.tickPositions && b2.push((k2 + c2) / 2);
              }
            };
            a3.prototype.alignToOthers = function() {
              var b2 = {}, a4 = this.options, d2;
              this.chart.options.chart.alignTicks !== false && a4.alignTicks && a4.startOnTick !== false && a4.endOnTick !== false && !this.logarithmic && this.chart[this.coll].forEach(function(a5) {
                var g2 = a5.options;
                g2 = [a5.horiz ? g2.left : g2.top, g2.width, g2.height, g2.pane].join();
                a5.series.length && (b2[g2] ? d2 = true : b2[g2] = 1);
              });
              return d2;
            };
            a3.prototype.getTickAmount = function() {
              var b2 = this.options, a4 = b2.tickPixelInterval, d2 = b2.tickAmount;
              !l(b2.tickInterval) && !d2 && this.len < a4 && !this.isRadial && !this.logarithmic && b2.startOnTick && b2.endOnTick && (d2 = 2);
              !d2 && this.alignToOthers() && (d2 = Math.ceil(this.len / a4) + 1);
              4 > d2 && (this.finalTickAmt = d2, d2 = 5);
              this.tickAmount = d2;
            };
            a3.prototype.adjustTickAmount = function() {
              var b2 = this.options, a4 = this.tickInterval, d2 = this.tickPositions, c2 = this.tickAmount, k2 = this.finalTickAmt, e2 = d2 && d2.length, r2 = C(this.threshold, this.softThreshold ? 0 : null);
              if (this.hasData() && g(this.min) && g(this.max)) {
                if (e2 < c2) {
                  for (; d2.length < c2; )
                    d2.length % 2 || this.min === r2 ? d2.push(n(d2[d2.length - 1] + a4)) : d2.unshift(n(d2[0] - a4));
                  this.transA *= (e2 - 1) / (c2 - 1);
                  this.min = b2.startOnTick ? d2[0] : Math.min(this.min, d2[0]);
                  this.max = b2.endOnTick ? d2[d2.length - 1] : Math.max(this.max, d2[d2.length - 1]);
                } else
                  e2 > c2 && (this.tickInterval *= 2, this.setTickPositions());
                if (l(k2)) {
                  for (a4 = b2 = d2.length; a4--; )
                    (k2 === 3 && a4 % 2 === 1 || 2 >= k2 && 0 < a4 && a4 < b2 - 1) && d2.splice(a4, 1);
                  this.finalTickAmt = void 0;
                }
              }
            };
            a3.prototype.setScale = function() {
              var b2 = false, a4 = false;
              this.series.forEach(function(d2) {
                b2 = b2 || d2.isDirtyData || d2.isDirty;
                a4 = a4 || d2.xAxis && d2.xAxis.isDirty || false;
              });
              this.setAxisSize();
              var g2 = this.len !== (this.old && this.old.len);
              g2 || b2 || a4 || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = false, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = g2 || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks();
              b2 && this.panningState && (this.panningState.isDirty = true);
              d(this, "afterSetScale");
            };
            a3.prototype.setExtremes = function(b2, a4, g2, c2, k2) {
              var e2 = this, r2 = e2.chart;
              g2 = C(g2, true);
              e2.series.forEach(function(b3) {
                delete b3.kdTree;
              });
              k2 = p(k2, { min: b2, max: a4 });
              d(e2, "setExtremes", k2, function() {
                e2.userMin = b2;
                e2.userMax = a4;
                e2.eventArgs = k2;
                g2 && r2.redraw(c2);
              });
            };
            a3.prototype.zoom = function(b2, a4) {
              var g2 = this, c2 = this.dataMin, k2 = this.dataMax, e2 = this.options, r2 = Math.min(c2, C(e2.min, c2)), f2 = Math.max(k2, C(e2.max, k2));
              b2 = { newMin: b2, newMax: a4 };
              d(this, "zoom", b2, function(b3) {
                var a5 = b3.newMin, d2 = b3.newMax;
                if (a5 !== g2.min || d2 !== g2.max)
                  g2.allowZoomOutside || (l(c2) && (a5 < r2 && (a5 = r2), a5 > f2 && (a5 = f2)), l(k2) && (d2 < r2 && (d2 = r2), d2 > f2 && (d2 = f2))), g2.displayBtn = typeof a5 !== "undefined" || typeof d2 !== "undefined", g2.setExtremes(a5, d2, false, void 0, { trigger: "zoom" });
                b3.zoomed = true;
              });
              return b2.zoomed;
            };
            a3.prototype.setAxisSize = function() {
              var b2 = this.chart, a4 = this.options, d2 = a4.offsets || [0, 0, 0, 0], g2 = this.horiz, c2 = this.width = Math.round(O(C(a4.width, b2.plotWidth - d2[3] + d2[1]), b2.plotWidth)), k2 = this.height = Math.round(O(C(a4.height, b2.plotHeight - d2[0] + d2[2]), b2.plotHeight)), e2 = this.top = Math.round(O(C(a4.top, b2.plotTop + d2[0]), b2.plotHeight, b2.plotTop));
              a4 = this.left = Math.round(O(C(a4.left, b2.plotLeft + d2[3]), b2.plotWidth, b2.plotLeft));
              this.bottom = b2.chartHeight - k2 - e2;
              this.right = b2.chartWidth - c2 - a4;
              this.len = Math.max(g2 ? c2 : k2, 0);
              this.pos = g2 ? a4 : e2;
            };
            a3.prototype.getExtremes = function() {
              var b2 = this.logarithmic;
              return { min: b2 ? n(b2.lin2log(this.min)) : this.min, max: b2 ? n(b2.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax };
            };
            a3.prototype.getThreshold = function(b2) {
              var a4 = this.logarithmic, d2 = a4 ? a4.lin2log(this.min) : this.min;
              a4 = a4 ? a4.lin2log(this.max) : this.max;
              b2 === null || b2 === -Infinity ? b2 = d2 : b2 === Infinity ? b2 = a4 : d2 > b2 ? b2 = d2 : a4 < b2 && (b2 = a4);
              return this.translate(b2, 0, 1, 0, 1);
            };
            a3.prototype.autoLabelAlign = function(b2) {
              var a4 = (C(b2, 0) - 90 * this.side + 720) % 360;
              b2 = { align: "center" };
              d(this, "autoLabelAlign", b2, function(b3) {
                15 < a4 && 165 > a4 ? b3.align = "right" : 195 < a4 && 345 > a4 && (b3.align = "left");
              });
              return b2.align;
            };
            a3.prototype.tickSize = function(b2) {
              var a4 = this.options, g2 = C(a4[b2 === "tick" ? "tickWidth" : "minorTickWidth"], b2 === "tick" && this.isXAxis && !this.categories ? 1 : 0), c2 = a4[b2 === "tick" ? "tickLength" : "minorTickLength"];
              if (g2 && c2) {
                a4[b2 + "Position"] === "inside" && (c2 = -c2);
                var k2 = [c2, g2];
              }
              b2 = { tickSize: k2 };
              d(this, "afterTickSize", b2);
              return b2.tickSize;
            };
            a3.prototype.labelMetrics = function() {
              var b2 = this.tickPositions && this.tickPositions[0] || 0;
              return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[b2] && this.ticks[b2].label);
            };
            a3.prototype.unsquish = function() {
              var b2 = this.options.labels, a4 = this.horiz, d2 = this.tickInterval, k2 = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d2), e2 = b2.rotation, r2 = this.labelMetrics(), l2 = Math.max(this.max - this.min, 0), f2 = function(b3) {
                var a5 = b3 / (k2 || 1);
                a5 = 1 < a5 ? Math.ceil(a5) : 1;
                a5 * d2 > l2 && b3 !== Infinity && k2 !== Infinity && l2 && (a5 = Math.ceil(l2 / d2));
                return n(a5 * d2);
              }, h2 = d2, F2, D2, p2 = Number.MAX_VALUE;
              if (a4) {
                if (!b2.staggerLines && !b2.step)
                  if (g(e2))
                    var M2 = [e2];
                  else
                    k2 < b2.autoRotationLimit && (M2 = b2.autoRotation);
                M2 && M2.forEach(function(b3) {
                  if (b3 === e2 || b3 && -90 <= b3 && 90 >= b3) {
                    D2 = f2(Math.abs(r2.h / Math.sin(c * b3)));
                    var a5 = D2 + Math.abs(b3 / 360);
                    a5 < p2 && (p2 = a5, F2 = b3, h2 = D2);
                  }
                });
              } else
                b2.step || (h2 = f2(r2.h));
              this.autoRotation = M2;
              this.labelRotation = C(F2, g(e2) ? e2 : 0);
              return h2;
            };
            a3.prototype.getSlotWidth = function(b2) {
              var a4 = this.chart, d2 = this.horiz, c2 = this.options.labels, k2 = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), e2 = a4.margin[3];
              if (b2 && g(b2.slotWidth))
                return b2.slotWidth;
              if (d2 && 2 > c2.step)
                return c2.rotation ? 0 : (this.staggerLines || 1) * this.len / k2;
              if (!d2) {
                b2 = c2.style.width;
                if (b2 !== void 0)
                  return parseInt(String(b2), 10);
                if (e2)
                  return e2 - a4.spacing[3];
              }
              return 0.33 * a4.chartWidth;
            };
            a3.prototype.renderUnsquish = function() {
              var b2 = this.chart, a4 = b2.renderer, d2 = this.tickPositions, g2 = this.ticks, c2 = this.options.labels, k2 = c2.style, e2 = this.horiz, l2 = this.getSlotWidth(), f2 = Math.max(1, Math.round(l2 - 2 * c2.padding)), h2 = {}, F2 = this.labelMetrics(), D2 = k2.textOverflow, C2 = 0;
              r(c2.rotation) || (h2.rotation = c2.rotation || 0);
              d2.forEach(function(b3) {
                b3 = g2[b3];
                b3.movedLabel && b3.replaceMovedLabel();
                b3 && b3.label && b3.label.textPxLength > C2 && (C2 = b3.label.textPxLength);
              });
              this.maxLabelLength = C2;
              if (this.autoRotation)
                C2 > f2 && C2 > F2.h ? h2.rotation = this.labelRotation : this.labelRotation = 0;
              else if (l2) {
                var p2 = f2;
                if (!D2) {
                  var M2 = "clip";
                  for (f2 = d2.length; !e2 && f2--; ) {
                    var n2 = d2[f2];
                    if (n2 = g2[n2].label)
                      n2.styles && n2.styles.textOverflow === "ellipsis" ? n2.css({ textOverflow: "clip" }) : n2.textPxLength > l2 && n2.css({ width: l2 + "px" }), n2.getBBox().height > this.len / d2.length - (F2.h - F2.f) && (n2.specificTextOverflow = "ellipsis");
                  }
                }
              }
              h2.rotation && (p2 = C2 > 0.5 * b2.chartHeight ? 0.33 * b2.chartHeight : C2, D2 || (M2 = "ellipsis"));
              if (this.labelAlign = c2.align || this.autoLabelAlign(this.labelRotation))
                h2.align = this.labelAlign;
              d2.forEach(function(b3) {
                var a5 = (b3 = g2[b3]) && b3.label, d3 = k2.width, c3 = {};
                a5 && (a5.attr(h2), b3.shortenLabel ? b3.shortenLabel() : p2 && !d3 && k2.whiteSpace !== "nowrap" && (p2 < a5.textPxLength || a5.element.tagName === "SPAN") ? (c3.width = p2 + "px", D2 || (c3.textOverflow = a5.specificTextOverflow || M2), a5.css(c3)) : a5.styles && a5.styles.width && !c3.width && !d3 && a5.css({ width: null }), delete a5.specificTextOverflow, b3.rotation = h2.rotation);
              }, this);
              this.tickRotCorr = a4.rotCorr(F2.b, this.labelRotation || 0, this.side !== 0);
            };
            a3.prototype.hasData = function() {
              return this.series.some(function(b2) {
                return b2.hasData();
              }) || this.options.showEmpty && l(this.min) && l(this.max);
            };
            a3.prototype.addTitle = function(b2) {
              var a4 = this.chart.renderer, d2 = this.horiz, g2 = this.opposite, c2 = this.options.title, k2 = this.chart.styledMode, e2;
              this.axisTitle || ((e2 = c2.textAlign) || (e2 = (d2 ? { low: "left", middle: "center", high: "right" } : { low: g2 ? "right" : "left", middle: "center", high: g2 ? "left" : "right" })[c2.align]), this.axisTitle = a4.text(c2.text || "", 0, 0, c2.useHTML).attr({ zIndex: 7, rotation: c2.rotation, align: e2 }).addClass("highcharts-axis-title"), k2 || this.axisTitle.css(F(c2.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = true);
              k2 || c2.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" });
              this.axisTitle[b2 ? "show" : "hide"](b2);
            };
            a3.prototype.generateTick = function(b2) {
              var a4 = this.ticks;
              a4[b2] ? a4[b2].addLabel() : a4[b2] = new q(this, b2);
            };
            a3.prototype.getOffset = function() {
              var b2 = this, a4 = this, g2 = a4.chart, c2 = g2.renderer, k2 = a4.options, e2 = a4.tickPositions, r2 = a4.ticks, f2 = a4.horiz, h2 = a4.side, F2 = g2.inverted && !a4.isZAxis ? [1, 0, 3, 2][h2] : h2, D2 = a4.hasData(), p2 = k2.title, n2 = k2.labels, m2 = g2.axisOffset;
              g2 = g2.clipOffset;
              var t2 = [-1, 1, 1, -1][h2], q2 = k2.className, w2 = a4.axisParent, O2, Z = 0, ha = 0, A2 = 0;
              a4.showAxis = O2 = D2 || k2.showEmpty;
              a4.staggerLines = a4.horiz && n2.staggerLines || void 0;
              if (!a4.axisGroup) {
                var J2 = function(a5, d2, g3) {
                  return c2.g(a5).attr({ zIndex: g3 }).addClass("highcharts-" + b2.coll.toLowerCase() + d2 + " " + (b2.isRadial ? "highcharts-radial-axis" + d2 + " " : "") + (q2 || "")).add(w2);
                };
                a4.gridGroup = J2("grid", "-grid", k2.gridZIndex);
                a4.axisGroup = J2("axis", "", k2.zIndex);
                a4.labelGroup = J2("axis-labels", "-labels", n2.zIndex);
              }
              D2 || a4.isLinked ? (e2.forEach(function(b3) {
                a4.generateTick(b3);
              }), a4.renderUnsquish(), a4.reserveSpaceDefault = h2 === 0 || h2 === 2 || { 1: "left", 3: "right" }[h2] === a4.labelAlign, C(n2.reserveSpace, a4.labelAlign === "center" ? true : null, a4.reserveSpaceDefault) && e2.forEach(function(b3) {
                A2 = Math.max(r2[b3].getLabelSize(), A2);
              }), a4.staggerLines && (A2 *= a4.staggerLines), a4.labelOffset = A2 * (a4.opposite ? -1 : 1)) : M(r2, function(b3, a5) {
                b3.destroy();
                delete r2[a5];
              });
              if (p2 && p2.text && p2.enabled !== false && (a4.addTitle(O2), O2 && p2.reserveSpace !== false)) {
                a4.titleOffset = Z = a4.axisTitle.getBBox()[f2 ? "height" : "width"];
                var v2 = p2.offset;
                ha = l(v2) ? 0 : C(p2.margin, f2 ? 5 : 10);
              }
              a4.renderLine();
              a4.offset = t2 * C(k2.offset, m2[h2] ? m2[h2] + (k2.margin || 0) : 0);
              a4.tickRotCorr = a4.tickRotCorr || { x: 0, y: 0 };
              p2 = h2 === 0 ? -a4.labelMetrics().h : h2 === 2 ? a4.tickRotCorr.y : 0;
              D2 = Math.abs(A2) + ha;
              A2 && (D2 = D2 - p2 + t2 * (f2 ? C(n2.y, a4.tickRotCorr.y + 8 * t2) : n2.x));
              a4.axisTitleMargin = C(v2, D2);
              a4.getMaxLabelDimensions && (a4.maxLabelDimensions = a4.getMaxLabelDimensions(r2, e2));
              f2 = this.tickSize("tick");
              m2[h2] = Math.max(m2[h2], (a4.axisTitleMargin || 0) + Z + t2 * a4.offset, D2, e2 && e2.length && f2 ? f2[0] + t2 * a4.offset : 0);
              k2 = k2.offset ? 0 : 2 * Math.floor(a4.axisLine.strokeWidth() / 2);
              g2[F2] = Math.max(g2[F2], k2);
              d(this, "afterGetOffset");
            };
            a3.prototype.getLinePath = function(b2) {
              var a4 = this.chart, d2 = this.opposite, g2 = this.offset, c2 = this.horiz, k2 = this.left + (d2 ? this.width : 0) + g2;
              g2 = a4.chartHeight - this.bottom - (d2 ? this.height : 0) + g2;
              d2 && (b2 *= -1);
              return a4.renderer.crispLine([["M", c2 ? this.left : k2, c2 ? g2 : this.top], ["L", c2 ? a4.chartWidth - this.right : k2, c2 ? g2 : a4.chartHeight - this.bottom]], b2);
            };
            a3.prototype.renderLine = function() {
              this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }));
            };
            a3.prototype.getTitlePosition = function() {
              var b2 = this.horiz, a4 = this.left, g2 = this.top, c2 = this.len, k2 = this.options.title, e2 = b2 ? a4 : g2, r2 = this.opposite, l2 = this.offset, f2 = k2.x, h2 = k2.y, F2 = this.axisTitle, D2 = this.chart.renderer.fontMetrics(k2.style.fontSize, F2);
              F2 = Math.max(F2.getBBox(null, 0).height - D2.h - 1, 0);
              c2 = { low: e2 + (b2 ? 0 : c2), middle: e2 + c2 / 2, high: e2 + (b2 ? c2 : 0) }[k2.align];
              a4 = (b2 ? g2 + this.height : a4) + (b2 ? 1 : -1) * (r2 ? -1 : 1) * this.axisTitleMargin + [-F2, F2, D2.f, -F2][this.side];
              b2 = { x: b2 ? c2 + f2 : a4 + (r2 ? this.width : 0) + l2 + f2, y: b2 ? a4 + h2 - (r2 ? this.height : 0) + l2 : c2 + h2 };
              d(this, "afterGetTitlePosition", { titlePosition: b2 });
              return b2;
            };
            a3.prototype.renderMinorTick = function(b2, a4) {
              var d2 = this.minorTicks;
              d2[b2] || (d2[b2] = new q(this, b2, "minor"));
              a4 && d2[b2].isNew && d2[b2].render(null, true);
              d2[b2].render(null, false, 1);
            };
            a3.prototype.renderTick = function(b2, a4, d2) {
              var g2 = this.ticks;
              if (!this.isLinked || b2 >= this.min && b2 <= this.max || this.grid && this.grid.isColumn)
                g2[b2] || (g2[b2] = new q(this, b2)), d2 && g2[b2].isNew && g2[b2].render(a4, true, -1), g2[b2].render(a4);
            };
            a3.prototype.render = function() {
              var b2 = this, a4 = b2.chart, c2 = b2.logarithmic, k2 = b2.options, e2 = b2.isLinked, r2 = b2.tickPositions, l2 = b2.axisTitle, f2 = b2.ticks, F2 = b2.minorTicks, D2 = b2.alternateBands, p2 = k2.stackLabels, C2 = k2.alternateGridColor, n2 = b2.tickmarkOffset, m2 = b2.axisLine, t2 = b2.showAxis, w2 = h(a4.renderer.globalAnimation), O2, A2;
              b2.labelEdge.length = 0;
              b2.overlap = false;
              [f2, F2, D2].forEach(function(b3) {
                M(b3, function(b4) {
                  b4.isActive = false;
                });
              });
              if (b2.hasData() || e2) {
                var Z = b2.chart.hasRendered && b2.old && g(b2.old.min);
                b2.minorTickInterval && !b2.categories && b2.getMinorTickPositions().forEach(function(a5) {
                  b2.renderMinorTick(a5, Z);
                });
                r2.length && (r2.forEach(function(a5, d2) {
                  b2.renderTick(a5, d2, Z);
                }), n2 && (b2.min === 0 || b2.single) && (f2[-1] || (f2[-1] = new q(b2, -1, null, true)), f2[-1].render(-1)));
                C2 && r2.forEach(function(d2, g2) {
                  A2 = typeof r2[g2 + 1] !== "undefined" ? r2[g2 + 1] + n2 : b2.max - n2;
                  g2 % 2 === 0 && d2 < b2.max && A2 <= b2.max + (a4.polar ? -n2 : n2) && (D2[d2] || (D2[d2] = new y.PlotLineOrBand(b2)), O2 = d2 + n2, D2[d2].options = { from: c2 ? c2.lin2log(O2) : O2, to: c2 ? c2.lin2log(A2) : A2, color: C2, className: "highcharts-alternate-grid" }, D2[d2].render(), D2[d2].isActive = true);
                });
                b2._addedPlotLB || (b2._addedPlotLB = true, (k2.plotLines || []).concat(k2.plotBands || []).forEach(function(a5) {
                  b2.addPlotBandOrLine(a5);
                }));
              }
              [f2, F2, D2].forEach(function(b3) {
                var d2 = [], g2 = w2.duration;
                M(b3, function(b4, a5) {
                  b4.isActive || (b4.render(a5, false, 0), b4.isActive = false, d2.push(a5));
                });
                Y(function() {
                  for (var a5 = d2.length; a5--; )
                    b3[d2[a5]] && !b3[d2[a5]].isActive && (b3[d2[a5]].destroy(), delete b3[d2[a5]]);
                }, b3 !== D2 && a4.hasRendered && g2 ? g2 : 0);
              });
              m2 && (m2[m2.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(m2.strokeWidth()) }), m2.isPlaced = true, m2[t2 ? "show" : "hide"](t2));
              l2 && t2 && (k2 = b2.getTitlePosition(), g(k2.y) ? (l2[l2.isNew ? "attr" : "animate"](k2), l2.isNew = false) : (l2.attr("y", -9999), l2.isNew = true));
              p2 && p2.enabled && b2.stacking && b2.stacking.renderStackTotals();
              b2.old = { len: b2.len, max: b2.max, min: b2.min, transA: b2.transA, userMax: b2.userMax, userMin: b2.userMin };
              b2.isDirty = false;
              d(this, "afterRender");
            };
            a3.prototype.redraw = function() {
              this.visible && (this.render(), this.plotLinesAndBands.forEach(function(b2) {
                b2.render();
              }));
              this.series.forEach(function(b2) {
                b2.isDirty = true;
              });
            };
            a3.prototype.getKeepProps = function() {
              return this.keepProps || a3.keepProps;
            };
            a3.prototype.destroy = function(b2) {
              var a4 = this, g2 = a4.plotLinesAndBands, c2 = this.eventOptions;
              d(this, "destroy", { keepEvents: b2 });
              b2 || S(a4);
              [a4.ticks, a4.minorTicks, a4.alternateBands].forEach(function(b3) {
                J(b3);
              });
              if (g2)
                for (b2 = g2.length; b2--; )
                  g2[b2].destroy();
              "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b3) {
                a4[b3] && (a4[b3] = a4[b3].destroy());
              });
              for (var k2 in a4.plotLinesAndBandsGroups)
                a4.plotLinesAndBandsGroups[k2] = a4.plotLinesAndBandsGroups[k2].destroy();
              M(a4, function(b3, d2) {
                a4.getKeepProps().indexOf(d2) === -1 && delete a4[d2];
              });
              this.eventOptions = c2;
            };
            a3.prototype.drawCrosshair = function(b2, a4) {
              var g2 = this.crosshair, c2 = C(g2 && g2.snap, true), k2 = this.chart, e2, r2 = this.cross;
              d(this, "drawCrosshair", { e: b2, point: a4 });
              b2 || (b2 = this.cross && this.cross.e);
              if (g2 && (l(a4) || !c2) !== false) {
                c2 ? l(a4) && (e2 = C(this.coll !== "colorAxis" ? a4.crosshairPos : null, this.isXAxis ? a4.plotX : this.len - a4.plotY)) : e2 = b2 && (this.horiz ? b2.chartX - this.pos : this.len - b2.chartY + this.pos);
                if (l(e2)) {
                  var f2 = { value: a4 && (this.isXAxis ? a4.x : C(a4.stackY, a4.y)), translatedValue: e2 };
                  k2.polar && p(f2, { isCrosshair: true, chartX: b2 && b2.chartX, chartY: b2 && b2.chartY, point: a4 });
                  f2 = this.getPlotLinePath(f2) || null;
                }
                if (!l(f2)) {
                  this.hideCrosshair();
                  return;
                }
                c2 = this.categories && !this.isRadial;
                r2 || (this.cross = r2 = k2.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (c2 ? "category " : "thin ") + (g2.className || "")).attr({ zIndex: C(g2.zIndex, 2) }).add(), k2.styledMode || (r2.attr({ stroke: g2.color || (c2 ? u.parse(E.highlightColor20).setOpacity(0.25).get() : E.neutralColor20), "stroke-width": C(g2.width, 1) }).css({ "pointer-events": "none" }), g2.dashStyle && r2.attr({ dashstyle: g2.dashStyle })));
                r2.show().attr({ d: f2 });
                c2 && !g2.width && r2.attr({ "stroke-width": this.transA });
                this.cross.e = b2;
              } else
                this.hideCrosshair();
              d(this, "afterDrawCrosshair", { e: b2, point: a4 });
            };
            a3.prototype.hideCrosshair = function() {
              this.cross && this.cross.hide();
              d(this, "afterHideCrosshair");
            };
            a3.prototype.hasVerticalPanning = function() {
              var b2 = this.chart.options.chart.panning;
              return !!(b2 && b2.enabled && /y/.test(b2.type));
            };
            a3.prototype.validatePositiveValue = function(b2) {
              return g(b2) && 0 < b2;
            };
            a3.prototype.update = function(b2, a4) {
              var d2 = this.chart;
              b2 = F(this.userOptions, b2);
              this.destroy(true);
              this.init(d2, b2);
              d2.isDirtyBox = true;
              C(a4, true) && d2.redraw();
            };
            a3.prototype.remove = function(b2) {
              for (var a4 = this.chart, d2 = this.coll, g2 = this.series, c2 = g2.length; c2--; )
                g2[c2] && g2[c2].remove(false);
              v(a4.axes, this);
              v(a4[d2], this);
              a4[d2].forEach(function(b3, a5) {
                b3.options.index = b3.userOptions.index = a5;
              });
              this.destroy();
              a4.isDirtyBox = true;
              C(b2, true) && a4.redraw();
            };
            a3.prototype.setTitle = function(b2, a4) {
              this.update({ title: b2 }, a4);
            };
            a3.prototype.setCategories = function(b2, a4) {
              this.update({ categories: b2 }, a4);
            };
            a3.defaultOptions = B.defaultXAxisOptions;
            a3.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
            return a3;
          }();
          "";
          return a2;
        });
        L(a, "Core/Axis/DateTimeAxis.js", [a["Core/Axis/Axis.js"], a["Core/Utilities.js"]], function(a2, u) {
          var v = u.addEvent, H = u.getMagnitude, x = u.normalizeTickInterval, y = u.timeUnits, G = function() {
            function a3(a4) {
              this.axis = a4;
            }
            a3.prototype.normalizeTimeTickInterval = function(a4, h) {
              var f = h || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
              h = f[f.length - 1];
              var c = y[h[0]], e = h[1], t;
              for (t = 0; t < f.length && !(h = f[t], c = y[h[0]], e = h[1], f[t + 1] && a4 <= (c * e[e.length - 1] + y[f[t + 1][0]]) / 2); t++)
                ;
              c === y.year && a4 < 5 * c && (e = [1, 2, 5]);
              a4 = x(a4 / c, e, h[0] === "year" ? Math.max(H(a4 / c), 1) : 1);
              return { unitRange: c, count: a4, unitName: h[0] };
            };
            return a3;
          }();
          u = function() {
            function a3() {
            }
            a3.compose = function(a4) {
              a4.keepProps.push("dateTime");
              a4.prototype.getTimeTicks = function() {
                return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
              };
              v(a4, "init", function(a5) {
                a5.userOptions.type !== "datetime" ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new G(this));
              });
            };
            a3.AdditionsClass = G;
            return a3;
          }();
          u.compose(a2);
          return u;
        });
        L(a, "Core/Axis/LogarithmicAxis.js", [a["Core/Axis/Axis.js"], a["Core/Utilities.js"]], function(a2, u) {
          var v = u.addEvent, H = u.getMagnitude, x = u.normalizeTickInterval, y = u.pick, G = function() {
            function a3(a4) {
              this.axis = a4;
            }
            a3.prototype.getLogTickPositions = function(a4, h, f, c) {
              var e = this.axis, t = e.len, m = e.options, w = [];
              c || (this.minorAutoInterval = void 0);
              if (0.5 <= a4)
                a4 = Math.round(a4), w = e.getLinearTickPositions(a4, h, f);
              else if (0.08 <= a4) {
                var n = Math.floor(h), l, q = m = void 0;
                for (t = 0.3 < a4 ? [1, 2, 4] : 0.15 < a4 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; n < f + 1 && !q; n++) {
                  var v2 = t.length;
                  for (l = 0; l < v2 && !q; l++) {
                    var A = this.log2lin(this.lin2log(n) * t[l]);
                    A > h && (!c || m <= f) && typeof m !== "undefined" && w.push(m);
                    m > f && (q = true);
                    m = A;
                  }
                }
              } else
                h = this.lin2log(h), f = this.lin2log(f), a4 = c ? e.getMinorTickInterval() : m.tickInterval, a4 = y(a4 === "auto" ? null : a4, this.minorAutoInterval, m.tickPixelInterval / (c ? 5 : 1) * (f - h) / ((c ? t / e.tickPositions.length : t) || 1)), a4 = x(a4, void 0, H(a4)), w = e.getLinearTickPositions(a4, h, f).map(this.log2lin), c || (this.minorAutoInterval = a4 / 5);
              c || (e.tickInterval = a4);
              return w;
            };
            a3.prototype.lin2log = function(a4) {
              return Math.pow(10, a4);
            };
            a3.prototype.log2lin = function(a4) {
              return Math.log(a4) / Math.LN10;
            };
            return a3;
          }();
          u = function() {
            function a3() {
            }
            a3.compose = function(a4) {
              a4.keepProps.push("logarithmic");
              v(a4, "init", function(a5) {
                var f = this.logarithmic;
                a5.userOptions.type !== "logarithmic" ? this.logarithmic = void 0 : f || (this.logarithmic = new G(this));
              });
              v(a4, "afterInit", function() {
                var a5 = this.logarithmic;
                a5 && (this.lin2val = function(f) {
                  return a5.lin2log(f);
                }, this.val2lin = function(f) {
                  return a5.log2lin(f);
                });
              });
            };
            return a3;
          }();
          u.compose(a2);
          return u;
        });
        L(a, "Core/Axis/PlotLineOrBand.js", [a["Core/Axis/Axis.js"], a["Core/Color/Palette.js"], a["Core/Utilities.js"]], function(a2, u, E) {
          var v = E.arrayMax, x = E.arrayMin, y = E.defined, G = E.destroyObjectProperties, B = E.erase, q = E.extend, h = E.fireEvent, f = E.isNumber, c = E.merge, e = E.objectEach, t = E.pick, m = function() {
            function a3(a4, c2) {
              this.axis = a4;
              c2 && (this.options = c2, this.id = c2.id);
            }
            a3.prototype.render = function() {
              h(this, "render");
              var a4 = this, l = a4.axis, f2 = l.horiz, m2 = l.logarithmic, w = a4.options, p = w.label, d = a4.label, k = w.to, b = w.from, g = w.value, r = y(b) && y(k), F = y(g), D = a4.svgElem, M = !D, C = [], q2 = w.color, v2 = t(w.zIndex, 0), W = w.events;
              C = { "class": "highcharts-plot-" + (r ? "band " : "line ") + (w.className || "") };
              var B2 = {}, x2 = l.chart.renderer, z = r ? "bands" : "lines";
              m2 && (b = m2.log2lin(b), k = m2.log2lin(k), g = m2.log2lin(g));
              l.chart.styledMode || (F ? (C.stroke = q2 || u.neutralColor40, C["stroke-width"] = t(w.width, 1), w.dashStyle && (C.dashstyle = w.dashStyle)) : r && (C.fill = q2 || u.highlightColor10, w.borderWidth && (C.stroke = w.borderColor, C["stroke-width"] = w.borderWidth)));
              B2.zIndex = v2;
              z += "-" + v2;
              (m2 = l.plotLinesAndBandsGroups[z]) || (l.plotLinesAndBandsGroups[z] = m2 = x2.g("plot-" + z).attr(B2).add());
              M && (a4.svgElem = D = x2.path().attr(C).add(m2));
              if (F)
                C = l.getPlotLinePath({ value: g, lineWidth: D.strokeWidth(), acrossPanes: w.acrossPanes });
              else if (r)
                C = l.getPlotBandPath(b, k, w);
              else
                return;
              !a4.eventsAdded && W && (e(W, function(b2, d2) {
                D.on(d2, function(b3) {
                  W[d2].apply(a4, [b3]);
                });
              }), a4.eventsAdded = true);
              (M || !D.d) && C && C.length ? D.attr({ d: C }) : D && (C ? (D.show(true), D.animate({ d: C })) : D.d && (D.hide(), d && (a4.label = d = d.destroy())));
              p && (y(p.text) || y(p.formatter)) && C && C.length && 0 < l.width && 0 < l.height && !C.isFlat ? (p = c({ align: f2 && r && "center", x: f2 ? !r && 4 : 10, verticalAlign: !f2 && r && "middle", y: f2 ? r ? 16 : 10 : r ? 6 : -4, rotation: f2 && !r && 90 }, p), this.renderLabel(p, C, r, v2)) : d && d.hide();
              return a4;
            };
            a3.prototype.renderLabel = function(a4, c2, e2, f2) {
              var l = this.label, h2 = this.axis.chart.renderer;
              l || (l = { align: a4.textAlign || a4.align, rotation: a4.rotation, "class": "highcharts-plot-" + (e2 ? "band" : "line") + "-label " + (a4.className || "") }, l.zIndex = f2, f2 = this.getLabelText(a4), this.label = l = h2.text(f2, 0, 0, a4.useHTML).attr(l).add(), this.axis.chart.styledMode || l.css(a4.style));
              h2 = c2.xBounds || [c2[0][1], c2[1][1], e2 ? c2[2][1] : c2[0][1]];
              c2 = c2.yBounds || [
                c2[0][2],
                c2[1][2],
                e2 ? c2[2][2] : c2[0][2]
              ];
              e2 = x(h2);
              f2 = x(c2);
              l.align(a4, false, { x: e2, y: f2, width: v(h2) - e2, height: v(c2) - f2 });
              l.show(true);
            };
            a3.prototype.getLabelText = function(a4) {
              return y(a4.formatter) ? a4.formatter.call(this) : a4.text;
            };
            a3.prototype.destroy = function() {
              B(this.axis.plotLinesAndBands, this);
              delete this.axis;
              G(this);
            };
            return a3;
          }();
          q(a2.prototype, { getPlotBandPath: function(a3, c2, e2) {
            e2 === void 0 && (e2 = this.options);
            var l = this.getPlotLinePath({ value: c2, force: true, acrossPanes: e2.acrossPanes });
            e2 = this.getPlotLinePath({ value: a3, force: true, acrossPanes: e2.acrossPanes });
            var h2 = [], m2 = this.horiz, p = 1;
            a3 = !f(this.min) || !f(this.max) || a3 < this.min && c2 < this.min || a3 > this.max && c2 > this.max;
            if (e2 && l) {
              if (a3) {
                var d = e2.toString() === l.toString();
                p = 0;
              }
              for (a3 = 0; a3 < e2.length; a3 += 2) {
                c2 = e2[a3];
                var k = e2[a3 + 1], b = l[a3], g = l[a3 + 1];
                c2[0] !== "M" && c2[0] !== "L" || k[0] !== "M" && k[0] !== "L" || b[0] !== "M" && b[0] !== "L" || g[0] !== "M" && g[0] !== "L" || (m2 && b[1] === c2[1] ? (b[1] += p, g[1] += p) : m2 || b[2] !== c2[2] || (b[2] += p, g[2] += p), h2.push(["M", c2[1], c2[2]], ["L", k[1], k[2]], ["L", g[1], g[2]], ["L", b[1], b[2]], ["Z"]));
                h2.isFlat = d;
              }
            }
            return h2;
          }, addPlotBand: function(a3) {
            return this.addPlotBandOrLine(a3, "plotBands");
          }, addPlotLine: function(a3) {
            return this.addPlotBandOrLine(a3, "plotLines");
          }, addPlotBandOrLine: function(a3, c2) {
            var e2 = this, f2 = new m(this, a3), h2 = this.userOptions;
            this.visible && (f2 = f2.render());
            if (f2) {
              this._addedPlotLB || (this._addedPlotLB = true, (h2.plotLines || []).concat(h2.plotBands || []).forEach(function(a4) {
                e2.addPlotBandOrLine(a4);
              }));
              if (c2) {
                var t2 = h2[c2] || [];
                t2.push(a3);
                h2[c2] = t2;
              }
              this.plotLinesAndBands.push(f2);
            }
            return f2;
          }, removePlotBandOrLine: function(a3) {
            var c2 = this.plotLinesAndBands, e2 = this.options, f2 = this.userOptions;
            if (c2) {
              for (var h2 = c2.length; h2--; )
                c2[h2].id === a3 && c2[h2].destroy();
              [e2.plotLines || [], f2.plotLines || [], e2.plotBands || [], f2.plotBands || []].forEach(function(c3) {
                for (h2 = c3.length; h2--; )
                  (c3[h2] || {}).id === a3 && B(c3, c3[h2]);
              });
            }
          }, removePlotBand: function(a3) {
            this.removePlotBandOrLine(a3);
          }, removePlotLine: function(a3) {
            this.removePlotBandOrLine(a3);
          } });
          return m;
        });
        L(a, "Core/Tooltip.js", [a["Core/FormatUtilities.js"], a["Core/Globals.js"], a["Core/Color/Palette.js"], a["Core/Renderer/RendererRegistry.js"], a["Core/Utilities.js"]], function(a2, u, E, H, x) {
          var v = a2.format, G = u.doc, B = x.clamp, q = x.css, h = x.defined, f = x.discardElement, c = x.extend, e = x.fireEvent, t = x.isArray, m = x.isNumber, w = x.isString, n = x.merge, l = x.pick, J = x.splat, K = x.syncTimeout, A = x.timeUnits;
          "";
          a2 = function() {
            function a3(a4, c2) {
              this.container = void 0;
              this.crosshairs = [];
              this.distance = 0;
              this.isHidden = true;
              this.isSticky = false;
              this.now = {};
              this.options = {};
              this.outside = false;
              this.chart = a4;
              this.init(a4, c2);
            }
            a3.prototype.applyFilter = function() {
              var a4 = this.chart;
              a4.renderer.definition({ tagName: "filter", attributes: { id: "drop-shadow-" + a4.index, opacity: 0.5 }, children: [{ tagName: "feGaussianBlur", attributes: { "in": "SourceAlpha", stdDeviation: 1 } }, { tagName: "feOffset", attributes: { dx: 1, dy: 1 } }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", attributes: { type: "linear", slope: 0.3 } }] }, { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", attributes: { "in": "SourceGraphic" } }] }] });
            };
            a3.prototype.bodyFormatter = function(a4) {
              return a4.map(function(a5) {
                var b = a5.series.tooltipOptions;
                return (b[(a5.point.formatPrefix || "point") + "Formatter"] || a5.point.tooltipFormatter).call(a5.point, b[(a5.point.formatPrefix || "point") + "Format"] || "");
              });
            };
            a3.prototype.cleanSplit = function(a4) {
              this.chart.series.forEach(function(d) {
                var b = d && d.tt;
                b && (!b.isActive || a4 ? d.tt = b.destroy() : b.isActive = false);
              });
            };
            a3.prototype.defaultFormatter = function(a4) {
              var d = this.points || J(this);
              var b = [a4.tooltipFooterHeaderFormatter(d[0])];
              b = b.concat(a4.bodyFormatter(d));
              b.push(a4.tooltipFooterHeaderFormatter(d[0], true));
              return b;
            };
            a3.prototype.destroy = function() {
              this.label && (this.label = this.label.destroy());
              this.split && this.tt && (this.cleanSplit(this.chart, true), this.tt = this.tt.destroy());
              this.renderer && (this.renderer = this.renderer.destroy(), f(this.container));
              x.clearTimeout(this.hideTimer);
              x.clearTimeout(this.tooltipTimeout);
            };
            a3.prototype.getAnchor = function(a4, c2) {
              var b = this.chart;
              var d = b.pointer;
              var k = b.inverted, e2 = b.plotTop, f2 = b.plotLeft, l2 = 0, h2 = 0, p, m2;
              a4 = J(a4);
              this.followPointer && c2 ? (typeof c2.chartX === "undefined" && (c2 = d.normalize(c2)), d = [c2.chartX - f2, c2.chartY - e2]) : a4[0].tooltipPos ? d = a4[0].tooltipPos : (a4.forEach(function(a5) {
                p = a5.series.yAxis;
                m2 = a5.series.xAxis;
                l2 += a5.plotX || 0;
                h2 += a5.plotLow ? (a5.plotLow + (a5.plotHigh || 0)) / 2 : a5.plotY || 0;
                m2 && p && (k ? (l2 += e2 + b.plotHeight - m2.len - m2.pos, h2 += f2 + b.plotWidth - p.len - p.pos) : (l2 += m2.pos - f2, h2 += p.pos - e2));
              }), l2 /= a4.length, h2 /= a4.length, d = [k ? b.plotWidth - h2 : l2, k ? b.plotHeight - l2 : h2], this.shared && 1 < a4.length && c2 && (k ? d[0] = c2.chartX - f2 : d[1] = c2.chartY - e2));
              return d.map(Math.round);
            };
            a3.prototype.getDateFormat = function(a4, c2, b, g) {
              var d = this.chart.time, k = d.dateFormat("%m-%d %H:%M:%S.%L", c2), e2 = {
                millisecond: 15,
                second: 12,
                minute: 9,
                hour: 6,
                day: 3
              }, l2 = "millisecond";
              for (f2 in A) {
                if (a4 === A.week && +d.dateFormat("%w", c2) === b && k.substr(6) === "00:00:00.000") {
                  var f2 = "week";
                  break;
                }
                if (A[f2] > a4) {
                  f2 = l2;
                  break;
                }
                if (e2[f2] && k.substr(e2[f2]) !== "01-01 00:00:00.000".substr(e2[f2]))
                  break;
                f2 !== "week" && (l2 = f2);
              }
              if (f2)
                var h2 = d.resolveDTLFormat(g[f2]).main;
              return h2;
            };
            a3.prototype.getLabel = function() {
              var a4 = this, c2 = this.chart.renderer, b = this.chart.styledMode, g = this.options, e2 = "tooltip" + (h(g.className) ? " " + g.className : ""), f2 = g.style && g.style.pointerEvents || (!this.followPointer && g.stickOnContact ? "auto" : "none"), l2, p = function() {
                a4.inContact = true;
              }, C = function() {
                var b2 = a4.chart.hoverSeries;
                a4.inContact = false;
                if (b2 && b2.onMouseOut)
                  b2.onMouseOut();
              };
              if (!this.label) {
                if (this.outside) {
                  var m2 = this.chart.options.chart.style, t2 = H.getRendererType();
                  this.container = l2 = u.doc.createElement("div");
                  l2.className = "highcharts-tooltip-container";
                  q(l2, { position: "absolute", top: "1px", pointerEvents: f2, zIndex: Math.max(this.options.style && this.options.style.zIndex || 0, (m2 && m2.zIndex || 0) + 3) });
                  u.doc.body.appendChild(l2);
                  this.renderer = c2 = new t2(l2, 0, 0, m2, void 0, void 0, c2.styledMode);
                }
                this.split ? this.label = c2.g(e2) : (this.label = c2.label("", 0, 0, g.shape || "callout", null, null, g.useHTML, null, e2).attr({ padding: g.padding, r: g.borderRadius }), b || this.label.attr({ fill: g.backgroundColor, "stroke-width": g.borderWidth }).css(g.style).css({ pointerEvents: f2 }).shadow(g.shadow));
                b && g.shadow && (this.applyFilter(), this.label.attr({ filter: "url(#drop-shadow-" + this.chart.index + ")" }));
                if (a4.outside && !a4.split) {
                  var n2 = this.label, w2 = n2.xSetter, v2 = n2.ySetter;
                  n2.xSetter = function(b2) {
                    w2.call(n2, a4.distance);
                    l2.style.left = b2 + "px";
                  };
                  n2.ySetter = function(b2) {
                    v2.call(n2, a4.distance);
                    l2.style.top = b2 + "px";
                  };
                }
                this.label.on("mouseenter", p).on("mouseleave", C).attr({ zIndex: 8 }).add();
              }
              return this.label;
            };
            a3.prototype.getPosition = function(a4, c2, b) {
              var d = this.chart, k = this.distance, e2 = {}, f2 = d.inverted && b.h || 0, h2, C = this.outside, p = C ? G.documentElement.clientWidth - 2 * k : d.chartWidth, m2 = C ? Math.max(G.body.scrollHeight, G.documentElement.scrollHeight, G.body.offsetHeight, G.documentElement.offsetHeight, G.documentElement.clientHeight) : d.chartHeight, t2 = d.pointer.getChartPosition(), n2 = function(g) {
                var e3 = g === "x";
                return [g, e3 ? p : m2, e3 ? a4 : c2].concat(C ? [e3 ? a4 * t2.scaleX : c2 * t2.scaleY, e3 ? t2.left - k + (b.plotX + d.plotLeft) * t2.scaleX : t2.top - k + (b.plotY + d.plotTop) * t2.scaleY, 0, e3 ? p : m2] : [e3 ? a4 : c2, e3 ? b.plotX + d.plotLeft : b.plotY + d.plotTop, e3 ? d.plotLeft : d.plotTop, e3 ? d.plotLeft + d.plotWidth : d.plotTop + d.plotHeight]);
              }, q2 = n2("y"), w2 = n2("x"), v2 = !this.followPointer && l(b.ttBelow, !d.inverted === !!b.negative), A2 = function(b2, a5, d2, g, c3, r, l2) {
                var h3 = C ? b2 === "y" ? k * t2.scaleY : k * t2.scaleX : k, F = (d2 - g) / 2, I2 = g < c3 - k, D = c3 + k + g < a5, p2 = c3 - h3 - d2 + F;
                c3 = c3 + h3 - F;
                if (v2 && D)
                  e2[b2] = c3;
                else if (!v2 && I2)
                  e2[b2] = p2;
                else if (I2)
                  e2[b2] = Math.min(l2 - g, 0 > p2 - f2 ? p2 : p2 - f2);
                else if (D)
                  e2[b2] = Math.max(r, c3 + f2 + d2 > a5 ? c3 : c3 + f2);
                else
                  return false;
              }, J2 = function(b2, a5, d2, g, c3) {
                var r;
                c3 < k || c3 > a5 - k ? r = false : e2[b2] = c3 < d2 / 2 ? 1 : c3 > a5 - g / 2 ? a5 - g - 2 : c3 - d2 / 2;
                return r;
              }, u2 = function(b2) {
                var a5 = q2;
                q2 = w2;
                w2 = a5;
                h2 = b2;
              }, I = function() {
                A2.apply(0, q2) !== false ? J2.apply(0, w2) !== false || h2 || (u2(true), I()) : h2 ? e2.x = e2.y = 0 : (u2(true), I());
              };
              (d.inverted || 1 < this.len) && u2();
              I();
              return e2;
            };
            a3.prototype.getXDateFormat = function(a4, c2, b) {
              c2 = c2.dateTimeLabelFormats;
              var d = b && b.closestPointRange;
              return (d ? this.getDateFormat(d, a4.x, b.options.startOfWeek, c2) : c2.day) || c2.year;
            };
            a3.prototype.hide = function(a4) {
              var d = this;
              x.clearTimeout(this.hideTimer);
              a4 = l(a4, this.options.hideDelay, 500);
              this.isHidden || (this.hideTimer = K(function() {
                d.getLabel().fadeOut(a4 ? void 0 : a4);
                d.isHidden = true;
              }, a4));
            };
            a3.prototype.init = function(a4, c2) {
              this.chart = a4;
              this.options = c2;
              this.crosshairs = [];
              this.now = { x: 0, y: 0 };
              this.isHidden = true;
              this.split = c2.split && !a4.inverted && !a4.polar;
              this.shared = c2.shared || this.split;
              this.outside = l(c2.outside, !(!a4.scrollablePixelsX && !a4.scrollablePixelsY));
            };
            a3.prototype.isStickyOnContact = function() {
              return !(this.followPointer || !this.options.stickOnContact || !this.inContact);
            };
            a3.prototype.move = function(a4, k, b, g) {
              var d = this, e2 = d.now, f2 = d.options.animation !== false && !d.isHidden && (1 < Math.abs(a4 - e2.x) || 1 < Math.abs(k - e2.y)), l2 = d.followPointer || 1 < d.len;
              c(e2, { x: f2 ? (2 * e2.x + a4) / 3 : a4, y: f2 ? (e2.y + k) / 2 : k, anchorX: l2 ? void 0 : f2 ? (2 * e2.anchorX + b) / 3 : b, anchorY: l2 ? void 0 : f2 ? (e2.anchorY + g) / 2 : g });
              d.getLabel().attr(e2);
              d.drawTracker();
              f2 && (x.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                d && d.move(a4, k, b, g);
              }, 32));
            };
            a3.prototype.refresh = function(a4, c2) {
              var b = this.chart, d = this.options, k = J(a4), f2 = k[0], h2 = {}, p = [], C = d.formatter || this.defaultFormatter;
              h2 = this.shared;
              var m2 = b.styledMode;
              if (d.enabled) {
                x.clearTimeout(this.hideTimer);
                this.followPointer = !this.split && f2.series.tooltipOptions.followPointer;
                var n2 = this.getAnchor(a4, c2);
                var q2 = n2[0];
                var w2 = n2[1];
                !h2 || !t(a4) && a4.series && a4.series.noSharedTooltip ? h2 = f2.getLabelConfig() : (b.pointer.applyInactiveState(k), k.forEach(function(b2) {
                  b2.setState("hover");
                  p.push(b2.getLabelConfig());
                }), h2 = { x: f2.category, y: f2.y }, h2.points = p);
                this.len = p.length;
                a4 = C.call(h2, this);
                C = f2.series;
                this.distance = l(C.tooltipOptions.distance, 16);
                if (a4 === false)
                  this.hide();
                else {
                  if (this.split)
                    this.renderSplit(a4, k);
                  else if (k = q2, h2 = w2, c2 && b.pointer.isDirectTouch && (k = c2.chartX - b.plotLeft, h2 = c2.chartY - b.plotTop), b.polar || C.options.clip === false || C.shouldShowTooltip(k, h2))
                    c2 = this.getLabel(), d.style.width && !m2 || c2.css({ width: this.chart.spacingBox.width + "px" }), c2.attr({ text: a4 && a4.join ? a4.join("") : a4 }), c2.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + l(f2.colorIndex, C.colorIndex)), m2 || c2.attr({ stroke: d.borderColor || f2.color || C.color || E.neutralColor60 }), this.updatePosition({ plotX: q2, plotY: w2, negative: f2.negative, ttBelow: f2.ttBelow, h: n2[2] || 0 });
                  else {
                    this.hide();
                    return;
                  }
                  this.isHidden && this.label && this.label.attr({ opacity: 1 }).show();
                  this.isHidden = false;
                }
                e(this, "refresh");
              }
            };
            a3.prototype.renderSplit = function(a4, k) {
              function b(b2, a5, g, c2, k2) {
                k2 === void 0 && (k2 = true);
                g ? (a5 = T ? 0 : da, b2 = B(b2 - c2 / 2, N.left, N.right - c2 - (d.outside ? R : 0))) : (a5 -= V, b2 = k2 ? b2 - c2 - x2 : b2 + x2, b2 = B(b2, k2 ? b2 : N.left, N.right));
                return {
                  x: b2,
                  y: a5
                };
              }
              var d = this, e2 = d.chart, f2 = d.chart, h2 = f2.chartWidth, p = f2.chartHeight, C = f2.plotHeight, m2 = f2.plotLeft, t2 = f2.plotTop, n2 = f2.pointer, q2 = f2.scrollablePixelsY;
              q2 = q2 === void 0 ? 0 : q2;
              var v2 = f2.scrollablePixelsX, A2 = f2.scrollingContainer;
              A2 = A2 === void 0 ? { scrollLeft: 0, scrollTop: 0 } : A2;
              var J2 = A2.scrollLeft;
              A2 = A2.scrollTop;
              var K2 = f2.styledMode, x2 = d.distance, y = d.options, I = d.options.positioner, N = d.outside && typeof v2 !== "number" ? G.documentElement.getBoundingClientRect() : { left: J2, right: J2 + h2, top: A2, bottom: A2 + p }, P = d.getLabel(), U = this.renderer || e2.renderer, T = !(!e2.xAxis[0] || !e2.xAxis[0].opposite);
              e2 = n2.getChartPosition();
              var R = e2.left;
              e2 = e2.top;
              var V = t2 + A2, ca = 0, da = C - q2;
              w(a4) && (a4 = [false, a4]);
              a4 = a4.slice(0, k.length + 1).reduce(function(a5, g, c2) {
                if (g !== false && g !== "") {
                  c2 = k[c2 - 1] || { isHeader: true, plotX: k[0].plotX, plotY: C, series: {} };
                  var e3 = c2.isHeader, f3 = e3 ? d : c2.series;
                  g = g.toString();
                  var r = f3.tt, h3 = c2.isHeader;
                  var F = c2.series;
                  var p2 = "highcharts-color-" + l(c2.colorIndex, F.colorIndex, "none");
                  r || (r = { padding: y.padding, r: y.borderRadius }, K2 || (r.fill = y.backgroundColor, r["stroke-width"] = y.borderWidth), r = U.label("", 0, 0, y[h3 ? "headerShape" : "shape"] || "callout", void 0, void 0, y.useHTML).addClass((h3 ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + p2).attr(r).add(P));
                  r.isActive = true;
                  r.attr({ text: g });
                  K2 || r.css(y.style).shadow(y.shadow).attr({ stroke: y.borderColor || c2.color || F.color || E.neutralColor80 });
                  f3 = f3.tt = r;
                  h3 = f3.getBBox();
                  g = h3.width + f3.strokeWidth();
                  e3 && (ca = h3.height, da += ca, T && (V -= ca));
                  F = c2.plotX;
                  F = F === void 0 ? 0 : F;
                  p2 = c2.plotY;
                  p2 = p2 === void 0 ? 0 : p2;
                  r = c2.series;
                  if (c2.isHeader) {
                    F = m2 + F;
                    var D = t2 + C / 2;
                  } else {
                    var n3 = r.xAxis, M = r.yAxis;
                    F = n3.pos + B(F, -x2, n3.len + x2);
                    r.shouldShowTooltip(0, M.pos - t2 + p2, { ignoreX: true }) && (D = M.pos + p2);
                  }
                  F = B(F, N.left - x2, N.right + x2);
                  typeof D === "number" ? (h3 = h3.height + 1, p2 = I ? I.call(d, g, h3, c2) : b(F, D, e3, g), a5.push({ align: I ? 0 : void 0, anchorX: F, anchorY: D, boxWidth: g, point: c2, rank: l(p2.rank, e3 ? 1 : 0), size: h3, target: p2.y, tt: f3, x: p2.x })) : f3.isActive = false;
                }
                return a5;
              }, []);
              !I && a4.some(function(b2) {
                var a5 = (d.outside ? R : 0) + b2.anchorX;
                return a5 < N.left && a5 + b2.boxWidth < N.right ? true : a5 < R - N.left + b2.boxWidth && N.right - a5 > a5;
              }) && (a4 = a4.map(function(a5) {
                var d2 = b(a5.anchorX, a5.anchorY, a5.point.isHeader, a5.boxWidth, false);
                return c(a5, { target: d2.y, x: d2.x });
              }));
              d.cleanSplit();
              u.distribute(a4, da);
              var H2 = R, ea = R;
              a4.forEach(function(b2) {
                var a5 = b2.x, g = b2.boxWidth;
                b2 = b2.isHeader;
                b2 || (d.outside && R + a5 < H2 && (H2 = R + a5), !b2 && d.outside && H2 + g > ea && (ea = R + a5));
              });
              a4.forEach(function(b2) {
                var a5 = b2.x, g = b2.anchorX, c2 = b2.pos, k2 = b2.point.isHeader;
                c2 = { visibility: typeof c2 === "undefined" ? "hidden" : "inherit", x: a5, y: c2 + V, anchorX: g, anchorY: b2.anchorY };
                if (d.outside && a5 < g) {
                  var e3 = R - H2;
                  0 < e3 && (k2 || (c2.x = a5 + e3, c2.anchorX = g + e3), k2 && (c2.x = (ea - H2) / 2, c2.anchorX = g + e3));
                }
                b2.tt.attr(c2);
              });
              a4 = d.container;
              q2 = d.renderer;
              d.outside && a4 && q2 && (f2 = P.getBBox(), q2.setSize(f2.width + f2.x, f2.height + f2.y, false), a4.style.left = H2 + "px", a4.style.top = e2 + "px");
            };
            a3.prototype.drawTracker = function() {
              if (this.followPointer || !this.options.stickOnContact)
                this.tracker && this.tracker.destroy();
              else {
                var a4 = this.chart, c2 = this.label, b = this.shared ? a4.hoverPoints : a4.hoverPoint;
                if (c2 && b) {
                  var g = { x: 0, y: 0, width: 0, height: 0 };
                  b = this.getAnchor(b);
                  var e2 = c2.getBBox();
                  b[0] += a4.plotLeft - c2.translateX;
                  b[1] += a4.plotTop - c2.translateY;
                  g.x = Math.min(0, b[0]);
                  g.y = Math.min(0, b[1]);
                  g.width = 0 > b[0] ? Math.max(Math.abs(b[0]), e2.width - b[0]) : Math.max(Math.abs(b[0]), e2.width);
                  g.height = 0 > b[1] ? Math.max(Math.abs(b[1]), e2.height - Math.abs(b[1])) : Math.max(Math.abs(b[1]), e2.height);
                  this.tracker ? this.tracker.attr(g) : (this.tracker = c2.renderer.rect(g).addClass("highcharts-tracker").add(c2), a4.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }));
                }
              }
            };
            a3.prototype.styledModeFormat = function(a4) {
              return a4.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
            };
            a3.prototype.tooltipFooterHeaderFormatter = function(a4, c2) {
              var b = c2 ? "footer" : "header", d = a4.series, k = d.tooltipOptions, f2 = k.xDateFormat, l2 = d.xAxis, h2 = l2 && l2.options.type === "datetime" && m(a4.key), p = k[b + "Format"];
              c2 = { isFooter: c2, labelConfig: a4 };
              e(this, "headerFormatter", c2, function(b2) {
                h2 && !f2 && (f2 = this.getXDateFormat(a4, k, l2));
                h2 && f2 && (a4.point && a4.point.tooltipDateKeys || ["key"]).forEach(function(b3) {
                  p = p.replace("{point." + b3 + "}", "{point." + b3 + ":" + f2 + "}");
                });
                d.chart.styledMode && (p = this.styledModeFormat(p));
                b2.text = v(p, { point: a4, series: d }, this.chart);
              });
              return c2.text;
            };
            a3.prototype.update = function(a4) {
              this.destroy();
              n(true, this.chart.options.tooltip.userOptions, a4);
              this.init(this.chart, n(true, this.options, a4));
            };
            a3.prototype.updatePosition = function(a4) {
              var d = this.chart, b = d.pointer, c2 = this.getLabel(), e2 = a4.plotX + d.plotLeft;
              d = a4.plotY + d.plotTop;
              b = b.getChartPosition();
              a4 = (this.options.positioner || this.getPosition).call(this, c2.width, c2.height, a4);
              if (this.outside) {
                var f2 = (this.options.borderWidth || 0) + 2 * this.distance;
                this.renderer.setSize(c2.width + f2, c2.height + f2, false);
                if (b.scaleX !== 1 || b.scaleY !== 1)
                  q(this.container, { transform: "scale(" + b.scaleX + ", " + b.scaleY + ")" }), e2 *= b.scaleX, d *= b.scaleY;
                e2 += b.left - a4.x;
                d += b.top - a4.y;
              }
              this.move(Math.round(a4.x), Math.round(a4.y || 0), e2, d);
            };
            return a3;
          }();
          u.Tooltip = a2;
          return u.Tooltip;
        });
        L(a, "Core/Pointer.js", [a["Core/Color/Color.js"], a["Core/Globals.js"], a["Core/Color/Palette.js"], a["Core/Tooltip.js"], a["Core/Utilities.js"]], function(a2, u, E, H, x) {
          var v = a2.parse, G = u.charts, B = u.noop, q = x.addEvent, h = x.attr, f = x.css, c = x.defined, e = x.extend, t = x.find, m = x.fireEvent, w = x.isNumber, n = x.isObject, l = x.objectEach, J = x.offset, K = x.pick, A = x.splat;
          a2 = function() {
            function a3(a4, c2) {
              this.lastValidTouch = {};
              this.pinchDown = [];
              this.runChartClick = false;
              this.eventsToUnbind = [];
              this.chart = a4;
              this.hasDragged = false;
              this.options = c2;
              this.init(a4, c2);
            }
            a3.prototype.applyInactiveState = function(a4) {
              var d = [], b;
              (a4 || []).forEach(function(a5) {
                b = a5.series;
                d.push(b);
                b.linkedParent && d.push(b.linkedParent);
                b.linkedSeries && (d = d.concat(b.linkedSeries));
                b.navigatorSeries && d.push(b.navigatorSeries);
              });
              this.chart.series.forEach(function(b2) {
                d.indexOf(b2) === -1 ? b2.setState("inactive", true) : b2.options.inactiveOtherPoints && b2.setAllPointsToState("inactive");
              });
            };
            a3.prototype.destroy = function() {
              var d = this;
              this.eventsToUnbind.forEach(function(a4) {
                return a4();
              });
              this.eventsToUnbind = [];
              u.chartCount || (a3.unbindDocumentMouseUp && (a3.unbindDocumentMouseUp = a3.unbindDocumentMouseUp()), a3.unbindDocumentTouchEnd && (a3.unbindDocumentTouchEnd = a3.unbindDocumentTouchEnd()));
              clearInterval(d.tooltipTimeout);
              l(d, function(a4, b) {
                d[b] = void 0;
              });
            };
            a3.prototype.drag = function(a4) {
              var d = this.chart, b = d.options.chart, c2 = this.zoomHor, e2 = this.zoomVert, f2 = d.plotLeft, l2 = d.plotTop, h2 = d.plotWidth, C = d.plotHeight, p = this.mouseDownX || 0, m2 = this.mouseDownY || 0, t2 = n(b.panning) ? b.panning && b.panning.enabled : b.panning, q2 = b.panKey && a4[b.panKey + "Key"], w2 = a4.chartX, A2 = a4.chartY, J2 = this.selectionMarker;
              if (!J2 || !J2.touch) {
                if (w2 < f2 ? w2 = f2 : w2 > f2 + h2 && (w2 = f2 + h2), A2 < l2 ? A2 = l2 : A2 > l2 + C && (A2 = l2 + C), this.hasDragged = Math.sqrt(Math.pow(p - w2, 2) + Math.pow(m2 - A2, 2)), 10 < this.hasDragged) {
                  var u2 = d.isInsidePlot(p - f2, m2 - l2, { visiblePlotOnly: true });
                  d.hasCartesianSeries && (this.zoomX || this.zoomY) && u2 && !q2 && !J2 && (this.selectionMarker = J2 = d.renderer.rect(f2, l2, c2 ? 1 : h2, e2 ? 1 : C, 0).attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), d.styledMode || J2.attr({ fill: b.selectionMarkerFill || v(E.highlightColor80).setOpacity(0.25).get() }));
                  J2 && c2 && (c2 = w2 - p, J2.attr({ width: Math.abs(c2), x: (0 < c2 ? 0 : c2) + p }));
                  J2 && e2 && (c2 = A2 - m2, J2.attr({ height: Math.abs(c2), y: (0 < c2 ? 0 : c2) + m2 }));
                  u2 && !J2 && t2 && d.pan(a4, b.panning);
                }
              }
            };
            a3.prototype.dragStart = function(a4) {
              var d = this.chart;
              d.mouseIsDown = a4.type;
              d.cancelClick = false;
              d.mouseDownX = this.mouseDownX = a4.chartX;
              d.mouseDownY = this.mouseDownY = a4.chartY;
            };
            a3.prototype.drop = function(a4) {
              var d = this, b = this.chart, g = this.hasPinched;
              if (this.selectionMarker) {
                var r = { originalEvent: a4, xAxis: [], yAxis: [] }, l2 = this.selectionMarker, h2 = l2.attr ? l2.attr("x") : l2.x, p = l2.attr ? l2.attr("y") : l2.y, C = l2.attr ? l2.attr("width") : l2.width, t2 = l2.attr ? l2.attr("height") : l2.height, n2;
                if (this.hasDragged || g)
                  b.axes.forEach(function(b2) {
                    if (b2.zoomEnabled && c(b2.min) && (g || d[{ xAxis: "zoomX", yAxis: "zoomY" }[b2.coll]]) && w(h2) && w(p)) {
                      var e2 = b2.horiz, k = a4.type === "touchend" ? b2.minPixelPadding : 0, f2 = b2.toValue((e2 ? h2 : p) + k);
                      e2 = b2.toValue((e2 ? h2 + C : p + t2) - k);
                      r[b2.coll].push({ axis: b2, min: Math.min(f2, e2), max: Math.max(f2, e2) });
                      n2 = true;
                    }
                  }), n2 && m(b, "selection", r, function(a5) {
                    b.zoom(e(a5, g ? { animation: false } : null));
                  });
                w(b.index) && (this.selectionMarker = this.selectionMarker.destroy());
                g && this.scaleGroups();
              }
              b && w(b.index) && (f(b.container, { cursor: b._cursor }), b.cancelClick = 10 < this.hasDragged, b.mouseIsDown = this.hasDragged = this.hasPinched = false, this.pinchDown = []);
            };
            a3.prototype.findNearestKDPoint = function(a4, c2, b) {
              var d = this.chart, e2 = d.hoverPoint;
              d = d.tooltip;
              if (e2 && d && d.isStickyOnContact())
                return e2;
              var k;
              a4.forEach(function(a5) {
                var d2 = !(a5.noSharedTooltip && c2) && 0 > a5.options.findNearestPointBy.indexOf("y");
                a5 = a5.searchPoint(b, d2);
                if ((d2 = n(a5, true) && a5.series) && !(d2 = !n(k, true))) {
                  d2 = k.distX - a5.distX;
                  var g = k.dist - a5.dist, e3 = (a5.series.group && a5.series.group.zIndex) - (k.series.group && k.series.group.zIndex);
                  d2 = 0 < (d2 !== 0 && c2 ? d2 : g !== 0 ? g : e3 !== 0 ? e3 : k.series.index > a5.series.index ? -1 : 1);
                }
                d2 && (k = a5);
              });
              return k;
            };
            a3.prototype.getChartCoordinatesFromPoint = function(a4, c2) {
              var b = a4.series, d = b.xAxis;
              b = b.yAxis;
              var e2 = a4.shapeArgs;
              if (d && b) {
                var k = K(a4.clientX, a4.plotX), f2 = a4.plotY || 0;
                a4.isNode && e2 && w(e2.x) && w(e2.y) && (k = e2.x, f2 = e2.y);
                return c2 ? { chartX: b.len + b.pos - f2, chartY: d.len + d.pos - k } : { chartX: k + d.pos, chartY: f2 + b.pos };
              }
              if (e2 && e2.x && e2.y)
                return { chartX: e2.x, chartY: e2.y };
            };
            a3.prototype.getChartPosition = function() {
              if (this.chartPosition)
                return this.chartPosition;
              var a4 = this.chart.container, c2 = J(a4);
              this.chartPosition = { left: c2.left, top: c2.top, scaleX: 1, scaleY: 1 };
              var b = a4.offsetWidth;
              a4 = a4.offsetHeight;
              2 < b && 2 < a4 && (this.chartPosition.scaleX = c2.width / b, this.chartPosition.scaleY = c2.height / a4);
              return this.chartPosition;
            };
            a3.prototype.getCoordinates = function(a4) {
              var d = { xAxis: [], yAxis: [] };
              this.chart.axes.forEach(function(b) {
                d[b.isXAxis ? "xAxis" : "yAxis"].push({ axis: b, value: b.toValue(a4[b.horiz ? "chartX" : "chartY"]) });
              });
              return d;
            };
            a3.prototype.getHoverData = function(a4, c2, b, g, e2, f2) {
              var d = [];
              g = !(!g || !a4);
              var k = { chartX: f2 ? f2.chartX : void 0, chartY: f2 ? f2.chartY : void 0, shared: e2 };
              m(this, "beforeGetHoverData", k);
              var l2 = c2 && !c2.stickyTracking ? [c2] : b.filter(function(b2) {
                return k.filter ? k.filter(b2) : b2.visible && !(!e2 && b2.directTouch) && K(b2.options.enableMouseTracking, true) && b2.stickyTracking;
              });
              var r = g || !f2 ? a4 : this.findNearestKDPoint(l2, e2, f2);
              c2 = r && r.series;
              r && (e2 && !c2.noSharedTooltip ? (l2 = b.filter(function(b2) {
                return k.filter ? k.filter(b2) : b2.visible && !(!e2 && b2.directTouch) && K(b2.options.enableMouseTracking, true) && !b2.noSharedTooltip;
              }), l2.forEach(function(b2) {
                var a5 = t(b2.points, function(b3) {
                  return b3.x === r.x && !b3.isNull;
                });
                n(a5) && (b2.chart.isBoosting && (a5 = b2.getPoint(a5)), d.push(a5));
              })) : d.push(r));
              k = { hoverPoint: r };
              m(this, "afterGetHoverData", k);
              return { hoverPoint: k.hoverPoint, hoverSeries: c2, hoverPoints: d };
            };
            a3.prototype.getPointFromEvent = function(a4) {
              a4 = a4.target;
              for (var d; a4 && !d; )
                d = a4.point, a4 = a4.parentNode;
              return d;
            };
            a3.prototype.onTrackerMouseOut = function(a4) {
              a4 = a4.relatedTarget || a4.toElement;
              var d = this.chart.hoverSeries;
              this.isDirectTouch = false;
              if (!(!d || !a4 || d.stickyTracking || this.inClass(a4, "highcharts-tooltip") || this.inClass(a4, "highcharts-series-" + d.index) && this.inClass(a4, "highcharts-tracker")))
                d.onMouseOut();
            };
            a3.prototype.inClass = function(a4, c2) {
              for (var b; a4; ) {
                if (b = h(a4, "class")) {
                  if (b.indexOf(c2) !== -1)
                    return true;
                  if (b.indexOf("highcharts-container") !== -1)
                    return false;
                }
                a4 = a4.parentNode;
              }
            };
            a3.prototype.init = function(a4, c2) {
              this.options = c2;
              this.chart = a4;
              this.runChartClick = !(!c2.chart.events || !c2.chart.events.click);
              this.pinchDown = [];
              this.lastValidTouch = {};
              H && (a4.tooltip = new H(a4, c2.tooltip), this.followTouchMove = K(c2.tooltip.followTouchMove, true));
              this.setDOMEvents();
            };
            a3.prototype.normalize = function(a4, c2) {
              var b = a4.touches, d = b ? b.length ? b.item(0) : K(b.changedTouches, a4.changedTouches)[0] : a4;
              c2 || (c2 = this.getChartPosition());
              b = d.pageX - c2.left;
              d = d.pageY - c2.top;
              b /= c2.scaleX;
              d /= c2.scaleY;
              return e(a4, { chartX: Math.round(b), chartY: Math.round(d) });
            };
            a3.prototype.onContainerClick = function(a4) {
              var d = this.chart, b = d.hoverPoint;
              a4 = this.normalize(a4);
              var c2 = d.plotLeft, f2 = d.plotTop;
              d.cancelClick || (b && this.inClass(a4.target, "highcharts-tracker") ? (m(b.series, "click", e(a4, { point: b })), d.hoverPoint && b.firePointEvent("click", a4)) : (e(a4, this.getCoordinates(a4)), d.isInsidePlot(a4.chartX - c2, a4.chartY - f2, { visiblePlotOnly: true }) && m(d, "click", a4)));
            };
            a3.prototype.onContainerMouseDown = function(a4) {
              var d = ((a4.buttons || a4.button) & 1) === 1;
              a4 = this.normalize(a4);
              if (u.isFirefox && a4.button !== 0)
                this.onContainerMouseMove(a4);
              if (typeof a4.button === "undefined" || d)
                this.zoomOption(a4), d && a4.preventDefault && a4.preventDefault(), this.dragStart(a4);
            };
            a3.prototype.onContainerMouseLeave = function(d) {
              var c2 = G[K(a3.hoverChartIndex, -1)], b = this.chart.tooltip;
              d = this.normalize(d);
              c2 && (d.relatedTarget || d.toElement) && (c2.pointer.reset(), c2.pointer.chartPosition = void 0);
              b && !b.isHidden && this.reset();
            };
            a3.prototype.onContainerMouseEnter = function(a4) {
              delete this.chartPosition;
            };
            a3.prototype.onContainerMouseMove = function(a4) {
              var d = this.chart;
              a4 = this.normalize(a4);
              this.setHoverChartIndex();
              a4.preventDefault || (a4.returnValue = false);
              (d.mouseIsDown === "mousedown" || this.touchSelect(a4)) && this.drag(a4);
              d.openMenu || !this.inClass(a4.target, "highcharts-tracker") && !d.isInsidePlot(a4.chartX - d.plotLeft, a4.chartY - d.plotTop, { visiblePlotOnly: true }) || (this.inClass(a4.target, "highcharts-no-tooltip") ? this.reset(false, 0) : this.runPointActions(a4));
            };
            a3.prototype.onDocumentTouchEnd = function(d) {
              var c2 = G[K(a3.hoverChartIndex, -1)];
              c2 && c2.pointer.drop(d);
            };
            a3.prototype.onContainerTouchMove = function(a4) {
              if (this.touchSelect(a4))
                this.onContainerMouseMove(a4);
              else
                this.touch(a4);
            };
            a3.prototype.onContainerTouchStart = function(a4) {
              if (this.touchSelect(a4))
                this.onContainerMouseDown(a4);
              else
                this.zoomOption(a4), this.touch(a4, true);
            };
            a3.prototype.onDocumentMouseMove = function(a4) {
              var d = this.chart, b = this.chartPosition;
              a4 = this.normalize(a4, b);
              var c2 = d.tooltip;
              !b || c2 && c2.isStickyOnContact() || d.isInsidePlot(a4.chartX - d.plotLeft, a4.chartY - d.plotTop, { visiblePlotOnly: true }) || this.inClass(a4.target, "highcharts-tracker") || this.reset();
            };
            a3.prototype.onDocumentMouseUp = function(d) {
              var c2 = G[K(a3.hoverChartIndex, -1)];
              c2 && c2.pointer.drop(d);
            };
            a3.prototype.pinch = function(a4) {
              var d = this, b = d.chart, c2 = d.pinchDown, f2 = a4.touches || [], l2 = f2.length, h2 = d.lastValidTouch, p = d.hasZoom, C = {}, m2 = l2 === 1 && (d.inClass(a4.target, "highcharts-tracker") && b.runTrackerClick || d.runChartClick), t2 = {}, n2 = d.selectionMarker;
              1 < l2 && (d.initiated = true);
              p && d.initiated && !m2 && a4.cancelable !== false && a4.preventDefault();
              [].map.call(f2, function(a5) {
                return d.normalize(a5);
              });
              a4.type === "touchstart" ? ([].forEach.call(f2, function(a5, b2) {
                c2[b2] = { chartX: a5.chartX, chartY: a5.chartY };
              }), h2.x = [c2[0].chartX, c2[1] && c2[1].chartX], h2.y = [c2[0].chartY, c2[1] && c2[1].chartY], b.axes.forEach(function(a5) {
                if (a5.zoomEnabled) {
                  var d2 = b.bounds[a5.horiz ? "h" : "v"], c3 = a5.minPixelPadding, g = a5.toPixels(Math.min(K(a5.options.min, a5.dataMin), a5.dataMin)), e2 = a5.toPixels(Math.max(K(a5.options.max, a5.dataMax), a5.dataMax)), k = Math.max(g, e2);
                  d2.min = Math.min(a5.pos, Math.min(g, e2) - c3);
                  d2.max = Math.max(a5.pos + a5.len, k + c3);
                }
              }), d.res = true) : d.followTouchMove && l2 === 1 ? this.runPointActions(d.normalize(a4)) : c2.length && (n2 || (d.selectionMarker = n2 = e({ destroy: B, touch: true }, b.plotBox)), d.pinchTranslate(c2, f2, C, n2, t2, h2), d.hasPinched = p, d.scaleGroups(C, t2), d.res && (d.res = false, this.reset(false, 0)));
            };
            a3.prototype.pinchTranslate = function(a4, c2, b, g, e2, f2) {
              this.zoomHor && this.pinchTranslateDirection(true, a4, c2, b, g, e2, f2);
              this.zoomVert && this.pinchTranslateDirection(false, a4, c2, b, g, e2, f2);
            };
            a3.prototype.pinchTranslateDirection = function(a4, c2, b, g, e2, f2, l2, h2) {
              var d = this.chart, k = a4 ? "x" : "y", r = a4 ? "X" : "Y", F = "chart" + r, p = a4 ? "width" : "height", m2 = d["plot" + (a4 ? "Left" : "Top")], D = d.inverted, t2 = d.bounds[a4 ? "h" : "v"], n2 = c2.length === 1, M = c2[0][F], q2 = !n2 && c2[1][F];
              c2 = function() {
                typeof v2 === "number" && 20 < Math.abs(M - q2) && (P = h2 || Math.abs(A2 - v2) / Math.abs(M - q2));
                w2 = (m2 - A2) / P + M;
                I = d["plot" + (a4 ? "Width" : "Height")] / P;
              };
              var I, w2, P = h2 || 1, A2 = b[0][F], v2 = !n2 && b[1][F];
              c2();
              b = w2;
              if (b < t2.min) {
                b = t2.min;
                var J2 = true;
              } else
                b + I > t2.max && (b = t2.max - I, J2 = true);
              J2 ? (A2 -= 0.8 * (A2 - l2[k][0]), typeof v2 === "number" && (v2 -= 0.8 * (v2 - l2[k][1])), c2()) : l2[k] = [A2, v2];
              D || (f2[k] = w2 - m2, f2[p] = I);
              f2 = D ? 1 / P : P;
              e2[p] = I;
              e2[k] = b;
              g[D ? a4 ? "scaleY" : "scaleX" : "scale" + r] = P;
              g["translate" + r] = f2 * m2 + (A2 - f2 * M);
            };
            a3.prototype.reset = function(a4, c2) {
              var b = this.chart, d = b.hoverSeries, e2 = b.hoverPoint, k = b.hoverPoints, f2 = b.tooltip, l2 = f2 && f2.shared ? k : e2;
              a4 && l2 && A(l2).forEach(function(b2) {
                b2.series.isCartesian && typeof b2.plotX === "undefined" && (a4 = false);
              });
              if (a4)
                f2 && l2 && A(l2).length && (f2.refresh(l2), f2.shared && k ? k.forEach(function(a5) {
                  a5.setState(a5.state, true);
                  a5.series.isCartesian && (a5.series.xAxis.crosshair && a5.series.xAxis.drawCrosshair(null, a5), a5.series.yAxis.crosshair && a5.series.yAxis.drawCrosshair(null, a5));
                }) : e2 && (e2.setState(e2.state, true), b.axes.forEach(function(a5) {
                  a5.crosshair && e2.series[a5.coll] === a5 && a5.drawCrosshair(null, e2);
                })));
              else {
                if (e2)
                  e2.onMouseOut();
                k && k.forEach(function(a5) {
                  a5.setState();
                });
                if (d)
                  d.onMouseOut();
                f2 && f2.hide(c2);
                this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
                b.axes.forEach(function(a5) {
                  a5.hideCrosshair();
                });
                this.hoverX = b.hoverPoints = b.hoverPoint = null;
              }
            };
            a3.prototype.runPointActions = function(d, c2) {
              var b = this.chart, g = b.tooltip && b.tooltip.options.enabled ? b.tooltip : void 0, e2 = g ? g.shared : false, f2 = c2 || b.hoverPoint, k = f2 && f2.series || b.hoverSeries;
              c2 = this.getHoverData(f2, k, b.series, (!d || d.type !== "touchmove") && (!!c2 || k && k.directTouch && this.isDirectTouch), e2, d);
              f2 = c2.hoverPoint;
              k = c2.hoverSeries;
              var l2 = c2.hoverPoints;
              c2 = k && k.tooltipOptions.followPointer && !k.tooltipOptions.split;
              e2 = e2 && k && !k.noSharedTooltip;
              if (f2 && (f2 !== b.hoverPoint || g && g.isHidden)) {
                (b.hoverPoints || []).forEach(function(a4) {
                  l2.indexOf(a4) === -1 && a4.setState();
                });
                if (b.hoverSeries !== k)
                  k.onMouseOver();
                this.applyInactiveState(l2);
                (l2 || []).forEach(function(a4) {
                  a4.setState("hover");
                });
                b.hoverPoint && b.hoverPoint.firePointEvent("mouseOut");
                if (!f2.series)
                  return;
                b.hoverPoints = l2;
                b.hoverPoint = f2;
                f2.firePointEvent("mouseOver");
                g && g.refresh(e2 ? l2 : f2, d);
              } else
                c2 && g && !g.isHidden && (f2 = g.getAnchor([{}], d), b.isInsidePlot(f2[0], f2[1], { visiblePlotOnly: true }) && g.updatePosition({ plotX: f2[0], plotY: f2[1] }));
              this.unDocMouseMove || (this.unDocMouseMove = q(b.container.ownerDocument, "mousemove", function(b2) {
                var d2 = G[a3.hoverChartIndex];
                if (d2)
                  d2.pointer.onDocumentMouseMove(b2);
              }), this.eventsToUnbind.push(this.unDocMouseMove));
              b.axes.forEach(function(a4) {
                var c3 = K((a4.crosshair || {}).snap, true), g2;
                c3 && ((g2 = b.hoverPoint) && g2.series[a4.coll] === a4 || (g2 = t(l2, function(b2) {
                  return b2.series[a4.coll] === a4;
                })));
                g2 || !c3 ? a4.drawCrosshair(d, g2) : a4.hideCrosshair();
              });
            };
            a3.prototype.scaleGroups = function(a4, c2) {
              var b = this.chart;
              b.series.forEach(function(d) {
                var g = a4 || d.getPlotBox();
                d.xAxis && d.xAxis.zoomEnabled && d.group && (d.group.attr(g), d.markerGroup && (d.markerGroup.attr(g), d.markerGroup.clip(c2 ? b.clipRect : null)), d.dataLabelsGroup && d.dataLabelsGroup.attr(g));
              });
              b.clipRect.attr(c2 || b.clipBox);
            };
            a3.prototype.setDOMEvents = function() {
              var d = this, c2 = this.chart.container, b = c2.ownerDocument;
              c2.onmousedown = this.onContainerMouseDown.bind(this);
              c2.onmousemove = this.onContainerMouseMove.bind(this);
              c2.onclick = this.onContainerClick.bind(this);
              this.eventsToUnbind.push(q(c2, "mouseenter", this.onContainerMouseEnter.bind(this)));
              this.eventsToUnbind.push(q(c2, "mouseleave", this.onContainerMouseLeave.bind(this)));
              a3.unbindDocumentMouseUp || (a3.unbindDocumentMouseUp = q(b, "mouseup", this.onDocumentMouseUp.bind(this)));
              for (var g = this.chart.renderTo.parentElement; g && g.tagName !== "BODY"; )
                this.eventsToUnbind.push(q(g, "scroll", function() {
                  delete d.chartPosition;
                })), g = g.parentElement;
              u.hasTouch && (this.eventsToUnbind.push(q(c2, "touchstart", this.onContainerTouchStart.bind(this), { passive: false })), this.eventsToUnbind.push(q(c2, "touchmove", this.onContainerTouchMove.bind(this), { passive: false })), a3.unbindDocumentTouchEnd || (a3.unbindDocumentTouchEnd = q(b, "touchend", this.onDocumentTouchEnd.bind(this), { passive: false })));
            };
            a3.prototype.setHoverChartIndex = function() {
              var d = this.chart, c2 = u.charts[K(a3.hoverChartIndex, -1)];
              if (c2 && c2 !== d)
                c2.pointer.onContainerMouseLeave({ relatedTarget: true });
              c2 && c2.mouseIsDown || (a3.hoverChartIndex = d.index);
            };
            a3.prototype.touch = function(a4, c2) {
              var b = this.chart, d;
              this.setHoverChartIndex();
              if (a4.touches.length === 1)
                if (a4 = this.normalize(a4), (d = b.isInsidePlot(a4.chartX - b.plotLeft, a4.chartY - b.plotTop, { visiblePlotOnly: true })) && !b.openMenu) {
                  c2 && this.runPointActions(a4);
                  if (a4.type === "touchmove") {
                    c2 = this.pinchDown;
                    var e2 = c2[0] ? 4 <= Math.sqrt(Math.pow(c2[0].chartX - a4.chartX, 2) + Math.pow(c2[0].chartY - a4.chartY, 2)) : false;
                  }
                  K(e2, true) && this.pinch(a4);
                } else
                  c2 && this.reset();
              else
                a4.touches.length === 2 && this.pinch(a4);
            };
            a3.prototype.touchSelect = function(a4) {
              return !(!this.chart.options.chart.zoomBySingleTouch || !a4.touches || a4.touches.length !== 1);
            };
            a3.prototype.zoomOption = function(a4) {
              var d = this.chart, b = d.options.chart;
              d = d.inverted;
              var c2 = b.zoomType || "";
              /touch/.test(a4.type) && (c2 = K(b.pinchType, c2));
              this.zoomX = a4 = /x/.test(c2);
              this.zoomY = b = /y/.test(c2);
              this.zoomHor = a4 && !d || b && d;
              this.zoomVert = b && !d || a4 && d;
              this.hasZoom = a4 || b;
            };
            return a3;
          }();
          "";
          return a2;
        });
        L(a, "Core/MSPointer.js", [a["Core/Globals.js"], a["Core/Pointer.js"], a["Core/Utilities.js"]], function(a2, u, E) {
          function v() {
            var a3 = [];
            a3.item = function(a4) {
              return this[a4];
            };
            e(m, function(c2) {
              a3.push({ pageX: c2.pageX, pageY: c2.pageY, target: c2.target });
            });
            return a3;
          }
          function x(a3, c2, e2, f2) {
            var l = G[u.hoverChartIndex || NaN];
            a3.pointerType !== "touch" && a3.pointerType !== a3.MSPOINTER_TYPE_TOUCH || !l || (l = l.pointer, f2(a3), l[c2]({ type: e2, target: a3.currentTarget, preventDefault: q, touches: v() }));
          }
          var y = this && this.__extends || function() {
            var a3 = function(c2, e2) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c3) {
                a4.__proto__ = c3;
              } || function(a4, c3) {
                for (var e3 in c3)
                  c3.hasOwnProperty(e3) && (a4[e3] = c3[e3]);
              };
              return a3(c2, e2);
            };
            return function(c2, e2) {
              function f2() {
                this.constructor = c2;
              }
              a3(c2, e2);
              c2.prototype = e2 === null ? Object.create(e2) : (f2.prototype = e2.prototype, new f2());
            };
          }(), G = a2.charts, B = a2.doc, q = a2.noop, h = a2.win, f = E.addEvent, c = E.css, e = E.objectEach, t = E.removeEvent, m = {}, w = !!h.PointerEvent;
          return function(e2) {
            function l() {
              return e2 !== null && e2.apply(this, arguments) || this;
            }
            y(l, e2);
            l.isRequired = function() {
              return !(a2.hasTouch || !h.PointerEvent && !h.MSPointerEvent);
            };
            l.prototype.batchMSEvents = function(a3) {
              a3(this.chart.container, w ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
              a3(this.chart.container, w ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
              a3(B, w ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
            };
            l.prototype.destroy = function() {
              this.batchMSEvents(t);
              e2.prototype.destroy.call(this);
            };
            l.prototype.init = function(a3, f2) {
              e2.prototype.init.call(this, a3, f2);
              this.hasZoom && c(a3.container, { "-ms-touch-action": "none", "touch-action": "none" });
            };
            l.prototype.onContainerPointerDown = function(a3) {
              x(a3, "onContainerTouchStart", "touchstart", function(a4) {
                m[a4.pointerId] = { pageX: a4.pageX, pageY: a4.pageY, target: a4.currentTarget };
              });
            };
            l.prototype.onContainerPointerMove = function(a3) {
              x(a3, "onContainerTouchMove", "touchmove", function(a4) {
                m[a4.pointerId] = { pageX: a4.pageX, pageY: a4.pageY };
                m[a4.pointerId].target || (m[a4.pointerId].target = a4.currentTarget);
              });
            };
            l.prototype.onDocumentPointerUp = function(a3) {
              x(a3, "onDocumentTouchEnd", "touchend", function(a4) {
                delete m[a4.pointerId];
              });
            };
            l.prototype.setDOMEvents = function() {
              e2.prototype.setDOMEvents.call(this);
              (this.hasZoom || this.followTouchMove) && this.batchMSEvents(f);
            };
            return l;
          }(u);
        });
        L(a, "Core/Series/Point.js", [
          a["Core/Renderer/HTML/AST.js"],
          a["Core/Animation/AnimationUtilities.js"],
          a["Core/FormatUtilities.js"],
          a["Core/Globals.js"],
          a["Core/DefaultOptions.js"],
          a["Core/Utilities.js"]
        ], function(a2, u, E, H, x, y) {
          var v = u.animObject, B = E.format, q = x.defaultOptions, h = y.addEvent, f = y.defined, c = y.erase, e = y.extend, t = y.fireEvent, m = y.getNestedProperty, w = y.isArray, n = y.isFunction, l = y.isNumber, J = y.isObject, K = y.merge, A = y.objectEach, p = y.pick, d = y.syncTimeout, k = y.removeEvent, b = y.uniqueKey;
          "";
          u = function() {
            function g() {
              this.colorIndex = this.category = void 0;
              this.formatPrefix = "point";
              this.id = void 0;
              this.isNull = false;
              this.percentage = this.options = this.name = void 0;
              this.selected = false;
              this.total = this.series = void 0;
              this.visible = true;
              this.x = void 0;
            }
            g.prototype.animateBeforeDestroy = function() {
              var a3 = this, b2 = { x: a3.startXPos, opacity: 0 }, d2, c2 = a3.getGraphicalProps();
              c2.singular.forEach(function(c3) {
                d2 = c3 === "dataLabel";
                a3[c3] = a3[c3].animate(d2 ? { x: a3[c3].startXPos, y: a3[c3].startYPos, opacity: 0 } : b2);
              });
              c2.plural.forEach(function(b3) {
                a3[b3].forEach(function(b4) {
                  b4.element && b4.animate(e({ x: a3.startXPos }, b4.startYPos ? { x: b4.startXPos, y: b4.startYPos } : {}));
                });
              });
            };
            g.prototype.applyOptions = function(a3, b2) {
              var d2 = this.series, c2 = d2.options.pointValKey || d2.pointValKey;
              a3 = g.prototype.optionsToObject.call(this, a3);
              e(this, a3);
              this.options = this.options ? e(this.options, a3) : a3;
              a3.group && delete this.group;
              a3.dataLabels && delete this.dataLabels;
              c2 && (this.y = g.prototype.getNestedProperty.call(this, c2));
              this.formatPrefix = (this.isNull = p(this.isValid && !this.isValid(), this.x === null || !l(this.y))) ? "null" : "point";
              this.selected && (this.state = "select");
              "name" in this && typeof b2 === "undefined" && d2.xAxis && d2.xAxis.hasNames && (this.x = d2.xAxis.nameToX(this));
              typeof this.x === "undefined" && d2 && (this.x = typeof b2 === "undefined" ? d2.autoIncrement(this) : b2);
              return this;
            };
            g.prototype.destroy = function() {
              function a3() {
                if (b2.graphic || b2.dataLabel || b2.dataLabels)
                  k(b2), b2.destroyElements();
                for (h2 in b2)
                  b2[h2] = null;
              }
              var b2 = this, g2 = b2.series, e2 = g2.chart;
              g2 = g2.options.dataSorting;
              var f2 = e2.hoverPoints, l2 = v(b2.series.chart.renderer.globalAnimation), h2;
              b2.legendItem && e2.legend.destroyItem(b2);
              f2 && (b2.setState(), c(f2, b2), f2.length || (e2.hoverPoints = null));
              if (b2 === e2.hoverPoint)
                b2.onMouseOut();
              g2 && g2.enabled ? (this.animateBeforeDestroy(), d(a3, l2.duration)) : a3();
              e2.pointCount--;
            };
            g.prototype.destroyElements = function(a3) {
              var b2 = this;
              a3 = b2.getGraphicalProps(a3);
              a3.singular.forEach(function(a4) {
                b2[a4] = b2[a4].destroy();
              });
              a3.plural.forEach(function(a4) {
                b2[a4].forEach(function(a5) {
                  a5.element && a5.destroy();
                });
                delete b2[a4];
              });
            };
            g.prototype.firePointEvent = function(a3, b2, d2) {
              var c2 = this, g2 = this.series.options;
              (g2.point.events[a3] || c2.options && c2.options.events && c2.options.events[a3]) && c2.importEvents();
              a3 === "click" && g2.allowPointSelect && (d2 = function(a4) {
                c2.select && c2.select(null, a4.ctrlKey || a4.metaKey || a4.shiftKey);
              });
              t(c2, a3, b2, d2);
            };
            g.prototype.getClassName = function() {
              return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (typeof this.colorIndex !== "undefined" ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
            };
            g.prototype.getGraphicalProps = function(a3) {
              var b2 = this, d2 = [], c2, g2 = { singular: [], plural: [] };
              a3 = a3 || { graphic: 1, dataLabel: 1 };
              a3.graphic && d2.push("graphic", "upperGraphic", "shadowGroup");
              a3.dataLabel && d2.push("dataLabel", "dataLabelUpper", "connector");
              for (c2 = d2.length; c2--; ) {
                var e2 = d2[c2];
                b2[e2] && g2.singular.push(e2);
              }
              ["dataLabel", "connector"].forEach(function(d3) {
                var c3 = d3 + "s";
                a3[d3] && b2[c3] && g2.plural.push(c3);
              });
              return g2;
            };
            g.prototype.getLabelConfig = function() {
              return {
                x: this.category,
                y: this.y,
                color: this.color,
                colorIndex: this.colorIndex,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
              };
            };
            g.prototype.getNestedProperty = function(a3) {
              if (a3)
                return a3.indexOf("custom.") === 0 ? m(a3, this.options) : this[a3];
            };
            g.prototype.getZone = function() {
              var a3 = this.series, b2 = a3.zones;
              a3 = a3.zoneAxis || "y";
              var d2 = 0, c2;
              for (c2 = b2[d2]; this[a3] >= c2.value; )
                c2 = b2[++d2];
              this.nonZonedColor || (this.nonZonedColor = this.color);
              this.color = c2 && c2.color && !this.options.color ? c2.color : this.nonZonedColor;
              return c2;
            };
            g.prototype.hasNewShapeType = function() {
              return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
            };
            g.prototype.init = function(a3, d2, c2) {
              this.series = a3;
              this.applyOptions(d2, c2);
              this.id = f(this.id) ? this.id : b();
              this.resolveColor();
              a3.chart.pointCount++;
              t(this, "afterInit");
              return this;
            };
            g.prototype.optionsToObject = function(a3) {
              var b2 = {}, d2 = this.series, c2 = d2.options.keys, e2 = c2 || d2.pointArrayMap || ["y"], f2 = e2.length, k2 = 0, h2 = 0;
              if (l(a3) || a3 === null)
                b2[e2[0]] = a3;
              else if (w(a3))
                for (!c2 && a3.length > f2 && (d2 = typeof a3[0], d2 === "string" ? b2.name = a3[0] : d2 === "number" && (b2.x = a3[0]), k2++); h2 < f2; )
                  c2 && typeof a3[k2] === "undefined" || (0 < e2[h2].indexOf(".") ? g.prototype.setNestedProperty(b2, a3[k2], e2[h2]) : b2[e2[h2]] = a3[k2]), k2++, h2++;
              else
                typeof a3 === "object" && (b2 = a3, a3.dataLabels && (d2._hasPointLabels = true), a3.marker && (d2._hasPointMarkers = true));
              return b2;
            };
            g.prototype.resolveColor = function() {
              var a3 = this.series;
              var b2 = a3.chart.options.chart.colorCount;
              var d2 = a3.chart.styledMode;
              delete this.nonZonedColor;
              if (a3.options.colorByPoint) {
                if (!d2) {
                  b2 = a3.options.colors || a3.chart.options.colors;
                  var c2 = b2[a3.colorCounter];
                  b2 = b2.length;
                }
                d2 = a3.colorCounter;
                a3.colorCounter++;
                a3.colorCounter === b2 && (a3.colorCounter = 0);
              } else
                d2 || (c2 = a3.color), d2 = a3.colorIndex;
              this.colorIndex = p(this.options.colorIndex, d2);
              this.color = p(this.options.color, c2);
            };
            g.prototype.setNestedProperty = function(a3, b2, d2) {
              d2.split(".").reduce(function(a4, d3, c2, g2) {
                a4[d3] = g2.length - 1 === c2 ? b2 : J(a4[d3], true) ? a4[d3] : {};
                return a4[d3];
              }, a3);
              return a3;
            };
            g.prototype.tooltipFormatter = function(a3) {
              var b2 = this.series, d2 = b2.tooltipOptions, c2 = p(d2.valueDecimals, ""), g2 = d2.valuePrefix || "", e2 = d2.valueSuffix || "";
              b2.chart.styledMode && (a3 = b2.chart.tooltip.styledModeFormat(a3));
              (b2.pointArrayMap || ["y"]).forEach(function(b3) {
                b3 = "{point." + b3;
                if (g2 || e2)
                  a3 = a3.replace(RegExp(b3 + "}", "g"), g2 + b3 + "}" + e2);
                a3 = a3.replace(RegExp(b3 + "}", "g"), b3 + ":,." + c2 + "f}");
              });
              return B(a3, { point: this, series: this.series }, b2.chart);
            };
            g.prototype.update = function(a3, b2, d2, c2) {
              function g2() {
                e2.applyOptions(a3);
                var c3 = k2 && e2.hasDummyGraphic;
                c3 = e2.y === null ? !c3 : c3;
                k2 && c3 && (e2.graphic = k2.destroy(), delete e2.hasDummyGraphic);
                J(a3, true) && (k2 && k2.element && a3 && a3.marker && typeof a3.marker.symbol !== "undefined" && (e2.graphic = k2.destroy()), a3 && a3.dataLabels && e2.dataLabel && (e2.dataLabel = e2.dataLabel.destroy()), e2.connector && (e2.connector = e2.connector.destroy()));
                l2 = e2.index;
                f2.updateParallelArrays(e2, l2);
                r.data[l2] = J(r.data[l2], true) || J(a3, true) ? e2.options : p(a3, r.data[l2]);
                f2.isDirty = f2.isDirtyData = true;
                !f2.fixedBox && f2.hasCartesianSeries && (h2.isDirtyBox = true);
                r.legendType === "point" && (h2.isDirtyLegend = true);
                b2 && h2.redraw(d2);
              }
              var e2 = this, f2 = e2.series, k2 = e2.graphic, l2, h2 = f2.chart, r = f2.options;
              b2 = p(b2, true);
              c2 === false ? g2() : e2.firePointEvent("update", { options: a3 }, g2);
            };
            g.prototype.remove = function(a3, b2) {
              this.series.removePoint(this.series.data.indexOf(this), a3, b2);
            };
            g.prototype.select = function(a3, b2) {
              var d2 = this, c2 = d2.series, g2 = c2.chart;
              this.selectedStaging = a3 = p(a3, !d2.selected);
              d2.firePointEvent(a3 ? "select" : "unselect", { accumulate: b2 }, function() {
                d2.selected = d2.options.selected = a3;
                c2.options.data[c2.data.indexOf(d2)] = d2.options;
                d2.setState(a3 && "select");
                b2 || g2.getSelectedPoints().forEach(function(a4) {
                  var b3 = a4.series;
                  a4.selected && a4 !== d2 && (a4.selected = a4.options.selected = false, b3.options.data[b3.data.indexOf(a4)] = a4.options, a4.setState(g2.hoverPoints && b3.options.inactiveOtherPoints ? "inactive" : ""), a4.firePointEvent("unselect"));
                });
              });
              delete this.selectedStaging;
            };
            g.prototype.onMouseOver = function(a3) {
              var b2 = this.series.chart, d2 = b2.pointer;
              a3 = a3 ? d2.normalize(a3) : d2.getChartCoordinatesFromPoint(this, b2.inverted);
              d2.runPointActions(a3, this);
            };
            g.prototype.onMouseOut = function() {
              var a3 = this.series.chart;
              this.firePointEvent("mouseOut");
              this.series.options.inactiveOtherPoints || (a3.hoverPoints || []).forEach(function(a4) {
                a4.setState();
              });
              a3.hoverPoints = a3.hoverPoint = null;
            };
            g.prototype.importEvents = function() {
              if (!this.hasImportedEvents) {
                var a3 = this, b2 = K(a3.series.options.point, a3.options).events;
                a3.events = b2;
                A(b2, function(b3, d2) {
                  n(b3) && h(a3, d2, b3);
                });
                this.hasImportedEvents = true;
              }
            };
            g.prototype.setState = function(b2, d2) {
              var c2 = this.series, g2 = this.state, f2 = c2.options.states[b2 || "normal"] || {}, k2 = q.plotOptions[c2.type].marker && c2.options.marker, h2 = k2 && k2.enabled === false, r = k2 && k2.states && k2.states[b2 || "normal"] || {}, m2 = r.enabled === false, n2 = c2.stateMarkerGraphic, F = this.marker || {}, w2 = c2.chart, v2 = c2.halo, A2, J2 = k2 && c2.markerAttribs;
              b2 = b2 || "";
              if (!(b2 === this.state && !d2 || this.selected && b2 !== "select" || f2.enabled === false || b2 && (m2 || h2 && r.enabled === false) || b2 && F.states && F.states[b2] && F.states[b2].enabled === false)) {
                this.state = b2;
                J2 && (A2 = c2.markerAttribs(this, b2));
                if (this.graphic && !this.hasDummyGraphic) {
                  g2 && this.graphic.removeClass("highcharts-point-" + g2);
                  b2 && this.graphic.addClass("highcharts-point-" + b2);
                  if (!w2.styledMode) {
                    var I = c2.pointAttribs(this, b2);
                    var N = p(w2.options.chart.animation, f2.animation);
                    c2.options.inactiveOtherPoints && l(I.opacity) && ((this.dataLabels || []).forEach(function(a3) {
                      a3 && a3.animate({ opacity: I.opacity }, N);
                    }), this.connector && this.connector.animate({ opacity: I.opacity }, N));
                    this.graphic.animate(I, N);
                  }
                  A2 && this.graphic.animate(A2, p(w2.options.chart.animation, r.animation, k2.animation));
                  n2 && n2.hide();
                } else {
                  if (b2 && r) {
                    g2 = F.symbol || c2.symbol;
                    n2 && n2.currentSymbol !== g2 && (n2 = n2.destroy());
                    if (A2)
                      if (n2)
                        n2[d2 ? "animate" : "attr"]({ x: A2.x, y: A2.y });
                      else
                        g2 && (c2.stateMarkerGraphic = n2 = w2.renderer.symbol(g2, A2.x, A2.y, A2.width, A2.height).add(c2.markerGroup), n2.currentSymbol = g2);
                    !w2.styledMode && n2 && n2.attr(c2.pointAttribs(this, b2));
                  }
                  n2 && (n2[b2 && this.isInside ? "show" : "hide"](), n2.element.point = this);
                }
                f2 = f2.halo;
                A2 = (n2 = this.graphic || n2) && n2.visibility || "inherit";
                f2 && f2.size && n2 && A2 !== "hidden" && !this.isCluster ? (v2 || (c2.halo = v2 = w2.renderer.path().add(n2.parentGroup)), v2.show()[d2 ? "animate" : "attr"]({ d: this.haloPath(f2.size) }), v2.attr({ "class": "highcharts-halo highcharts-color-" + p(this.colorIndex, c2.colorIndex) + (this.className ? " " + this.className : ""), visibility: A2, zIndex: -1 }), v2.point = this, w2.styledMode || v2.attr(e({ fill: this.color || c2.color, "fill-opacity": f2.opacity }, a2.filterUserAttributes(f2.attributes || {})))) : v2 && v2.point && v2.point.haloPath && v2.animate({ d: v2.point.haloPath(0) }, null, v2.hide);
                t(this, "afterSetState", { state: b2 });
              }
            };
            g.prototype.haloPath = function(a3) {
              return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a3, this.plotY - a3, 2 * a3, 2 * a3);
            };
            return g;
          }();
          return H.Point = u;
        });
        L(a, "Core/Legend.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/FormatUtilities.js"], a["Core/Globals.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"]], function(a2, u, E, H, x) {
          var v = a2.animObject, G = a2.setAnimation, B = u.format;
          a2 = E.isFirefox;
          var q = E.marginNames;
          u = E.win;
          var h = x.addEvent, f = x.createElement, c = x.css, e = x.defined, t = x.discardElement, m = x.find, w = x.fireEvent, n = x.isNumber, l = x.merge, J = x.pick, K = x.relativeLength, A = x.stableSort, p = x.syncTimeout;
          x = x.wrap;
          var d = function() {
            function a3(a4, d2) {
              this.allItems = [];
              this.contentGroup = this.box = void 0;
              this.display = false;
              this.group = void 0;
              this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0;
              this.options = {};
              this.padding = 0;
              this.pages = [];
              this.proximate = false;
              this.scrollGroup = void 0;
              this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0;
              this.chart = a4;
              this.init(a4, d2);
            }
            a3.prototype.init = function(a4, d2) {
              this.chart = a4;
              this.setOptions(d2);
              d2.enabled && (this.render(), h(this.chart, "endResize", function() {
                this.legend.positionCheckboxes();
              }), this.proximate ? this.unchartrender = h(this.chart, "render", function() {
                this.legend.proximatePositions();
                this.legend.positionItems();
              }) : this.unchartrender && this.unchartrender());
            };
            a3.prototype.setOptions = function(a4) {
              var b = J(a4.padding, 8);
              this.options = a4;
              this.chart.styledMode || (this.itemStyle = a4.itemStyle, this.itemHiddenStyle = l(this.itemStyle, a4.itemHiddenStyle));
              this.itemMarginTop = a4.itemMarginTop || 0;
              this.itemMarginBottom = a4.itemMarginBottom || 0;
              this.padding = b;
              this.initialItemY = b - 5;
              this.symbolWidth = J(a4.symbolWidth, 16);
              this.pages = [];
              this.proximate = a4.layout === "proximate" && !this.chart.inverted;
              this.baseline = void 0;
            };
            a3.prototype.update = function(a4, d2) {
              var b = this.chart;
              this.setOptions(l(true, this.options, a4));
              this.destroy();
              b.isDirtyLegend = b.isDirtyBox = true;
              J(d2, true) && b.redraw();
              w(this, "afterUpdate");
            };
            a3.prototype.colorizeItem = function(a4, d2) {
              a4.legendGroup[d2 ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
              if (!this.chart.styledMode) {
                var b = this.options, c2 = a4.legendItem, g = a4.legendLine, e2 = a4.legendSymbol, f2 = this.itemHiddenStyle.color;
                b = d2 ? b.itemStyle.color : f2;
                var k = d2 ? a4.color || f2 : f2, l2 = a4.options && a4.options.marker, h2 = { fill: k };
                c2 && c2.css({ fill: b, color: b });
                g && g.attr({ stroke: k });
                e2 && (l2 && e2.isMarker && (h2 = a4.pointAttribs(), d2 || (h2.stroke = h2.fill = f2)), e2.attr(h2));
              }
              w(this, "afterColorizeItem", { item: a4, visible: d2 });
            };
            a3.prototype.positionItems = function() {
              this.allItems.forEach(this.positionItem, this);
              this.chart.isResizing || this.positionCheckboxes();
            };
            a3.prototype.positionItem = function(a4) {
              var b = this, d2 = this.options, c2 = d2.symbolPadding, f2 = !d2.rtl, k = a4._legendItemPos;
              d2 = k[0];
              k = k[1];
              var l2 = a4.checkbox, h2 = a4.legendGroup;
              h2 && h2.element && (c2 = { translateX: f2 ? d2 : this.legendWidth - d2 - 2 * c2 - 4, translateY: k }, f2 = function() {
                w(b, "afterPositionItem", { item: a4 });
              }, e(h2.translateY) ? h2.animate(c2, void 0, f2) : (h2.attr(c2), f2()));
              l2 && (l2.x = d2, l2.y = k);
            };
            a3.prototype.destroyItem = function(a4) {
              var b = a4.checkbox;
              ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function(b2) {
                a4[b2] && (a4[b2] = a4[b2].destroy());
              });
              b && t(a4.checkbox);
            };
            a3.prototype.destroy = function() {
              function a4(a5) {
                this[a5] && (this[a5] = this[a5].destroy());
              }
              this.getAllItems().forEach(function(b) {
                ["legendItem", "legendGroup"].forEach(a4, b);
              });
              "clipRect up down pager nav box title group".split(" ").forEach(a4, this);
              this.display = null;
            };
            a3.prototype.positionCheckboxes = function() {
              var a4 = this.group && this.group.alignAttr, d2 = this.clipHeight || this.legendHeight, e2 = this.titleHeight;
              if (a4) {
                var f2 = a4.translateY;
                this.allItems.forEach(function(b) {
                  var g = b.checkbox;
                  if (g) {
                    var k = f2 + e2 + g.y + (this.scrollOffset || 0) + 3;
                    c(g, { left: a4.translateX + b.checkboxOffset + g.x - 20 + "px", top: k + "px", display: this.proximate || k > f2 - 6 && k < f2 + d2 - 6 ? "" : "none" });
                  }
                }, this);
              }
            };
            a3.prototype.renderTitle = function() {
              var a4 = this.options, d2 = this.padding, c2 = a4.title, e2 = 0;
              c2.text && (this.title || (this.title = this.chart.renderer.label(c2.text, d2 - 3, d2 - 4, null, null, null, a4.useHTML, null, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(c2.style), this.title.add(this.group)), c2.width || this.title.css({ width: this.maxLegendWidth + "px" }), a4 = this.title.getBBox(), e2 = a4.height, this.offsetWidth = a4.width, this.contentGroup.attr({ translateY: e2 }));
              this.titleHeight = e2;
            };
            a3.prototype.setText = function(a4) {
              var b = this.options;
              a4.legendItem.attr({ text: b.labelFormat ? B(b.labelFormat, a4, this.chart) : b.labelFormatter.call(a4) });
            };
            a3.prototype.renderItem = function(a4) {
              var b = this.chart, d2 = b.renderer, c2 = this.options, e2 = this.symbolWidth, f2 = c2.symbolPadding || 0, k = this.itemStyle, h2 = this.itemHiddenStyle, p2 = c2.layout === "horizontal" ? J(c2.itemDistance, 20) : 0, m2 = !c2.rtl, t2 = a4.legendItem, n2 = !a4.series, q2 = !n2 && a4.series.drawLegendSymbol ? a4.series : a4, w2 = q2.options, v2 = this.createCheckboxForItem && w2 && w2.showCheckbox;
              w2 = e2 + f2 + p2 + (v2 ? 20 : 0);
              var A2 = c2.useHTML, u2 = a4.options.className;
              t2 || (a4.legendGroup = d2.g("legend-item").addClass("highcharts-" + q2.type + "-series highcharts-color-" + a4.colorIndex + (u2 ? " " + u2 : "") + (n2 ? " highcharts-series-" + a4.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), a4.legendItem = t2 = d2.text("", m2 ? e2 + f2 : -f2, this.baseline || 0, A2), b.styledMode || t2.css(l(a4.visible ? k : h2)), t2.attr({ align: m2 ? "left" : "right", zIndex: 2 }).add(a4.legendGroup), this.baseline || (this.fontMetrics = d2.fontMetrics(b.styledMode ? 12 : k.fontSize, t2), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, t2.attr("y", this.baseline), this.symbolHeight = c2.symbolHeight || this.fontMetrics.f, c2.squareSymbol && (this.symbolWidth = J(c2.symbolWidth, Math.max(this.symbolHeight, 16)), w2 = this.symbolWidth + f2 + p2 + (v2 ? 20 : 0), m2 && t2.attr("x", this.symbolWidth + f2))), q2.drawLegendSymbol(this, a4), this.setItemEvents && this.setItemEvents(a4, t2, A2));
              v2 && !a4.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(a4);
              this.colorizeItem(a4, a4.visible);
              !b.styledMode && k.width || t2.css({ width: (c2.itemWidth || this.widthOption || b.spacingBox.width) - w2 + "px" });
              this.setText(a4);
              b = t2.getBBox();
              a4.itemWidth = a4.checkboxOffset = c2.itemWidth || a4.legendItemWidth || b.width + w2;
              this.maxItemWidth = Math.max(this.maxItemWidth, a4.itemWidth);
              this.totalItemWidth += a4.itemWidth;
              this.itemHeight = a4.itemHeight = Math.round(a4.legendItemHeight || b.height || this.symbolHeight);
            };
            a3.prototype.layoutItem = function(a4) {
              var b = this.options, d2 = this.padding, c2 = b.layout === "horizontal", e2 = a4.itemHeight, f2 = this.itemMarginBottom, k = this.itemMarginTop, l2 = c2 ? J(b.itemDistance, 20) : 0, h2 = this.maxLegendWidth;
              b = b.alignColumns && this.totalItemWidth > h2 ? this.maxItemWidth : a4.itemWidth;
              c2 && this.itemX - d2 + b > h2 && (this.itemX = d2, this.lastLineHeight && (this.itemY += k + this.lastLineHeight + f2), this.lastLineHeight = 0);
              this.lastItemY = k + this.itemY + f2;
              this.lastLineHeight = Math.max(e2, this.lastLineHeight);
              a4._legendItemPos = [this.itemX, this.itemY];
              c2 ? this.itemX += b : (this.itemY += k + e2 + f2, this.lastLineHeight = e2);
              this.offsetWidth = this.widthOption || Math.max((c2 ? this.itemX - d2 - (a4.checkbox ? 0 : l2) : b) + d2, this.offsetWidth);
            };
            a3.prototype.getAllItems = function() {
              var a4 = [];
              this.chart.series.forEach(function(b) {
                var d2 = b && b.options;
                b && J(d2.showInLegend, e(d2.linkedTo) ? false : void 0, true) && (a4 = a4.concat(b.legendItems || (d2.legendType === "point" ? b.data : b)));
              });
              w(this, "afterGetAllItems", { allItems: a4 });
              return a4;
            };
            a3.prototype.getAlignment = function() {
              var a4 = this.options;
              return this.proximate ? a4.align.charAt(0) + "tv" : a4.floating ? "" : a4.align.charAt(0) + a4.verticalAlign.charAt(0) + a4.layout.charAt(0);
            };
            a3.prototype.adjustMargins = function(a4, d2) {
              var b = this.chart, c2 = this.options, g = this.getAlignment();
              g && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function(f2, k) {
                f2.test(g) && !e(a4[k]) && (b[q[k]] = Math.max(b[q[k]], b.legend[(k + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][k] * c2[k % 2 ? "x" : "y"] + J(c2.margin, 12) + d2[k] + (b.titleOffset[k] || 0)));
              });
            };
            a3.prototype.proximatePositions = function() {
              var a4 = this.chart, d2 = [], c2 = this.options.align === "left";
              this.allItems.forEach(function(b) {
                var e2;
                var g = c2;
                if (b.yAxis) {
                  b.xAxis.options.reversed && (g = !g);
                  b.points && (e2 = m(g ? b.points : b.points.slice(0).reverse(), function(a5) {
                    return n(a5.plotY);
                  }));
                  g = this.itemMarginTop + b.legendItem.getBBox().height + this.itemMarginBottom;
                  var f2 = b.yAxis.top - a4.plotTop;
                  b.visible ? (e2 = e2 ? e2.plotY : b.yAxis.height, e2 += f2 - 0.3 * g) : e2 = f2 + b.yAxis.height;
                  d2.push({ target: e2, size: g, item: b });
                }
              }, this);
              E.distribute(d2, a4.plotHeight);
              d2.forEach(function(b) {
                b.item._legendItemPos[1] = a4.plotTop - a4.spacing[0] + b.pos;
              });
            };
            a3.prototype.render = function() {
              var a4 = this.chart, d2 = a4.renderer, c2 = this.group, e2 = this.box, f2 = this.options, k = this.padding;
              this.itemX = k;
              this.itemY = this.initialItemY;
              this.lastItemY = this.offsetWidth = 0;
              this.widthOption = K(f2.width, a4.spacingBox.width - k);
              var l2 = a4.spacingBox.width - 2 * k - f2.x;
              -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (l2 /= 2);
              this.maxLegendWidth = this.widthOption || l2;
              c2 || (this.group = c2 = d2.g("legend").addClass(f2.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = d2.g().attr({ zIndex: 1 }).add(c2), this.scrollGroup = d2.g().add(this.contentGroup));
              this.renderTitle();
              var h2 = this.getAllItems();
              A(h2, function(a5, b) {
                return (a5.options && a5.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
              });
              f2.reversed && h2.reverse();
              this.allItems = h2;
              this.display = l2 = !!h2.length;
              this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
              h2.forEach(this.renderItem, this);
              h2.forEach(this.layoutItem, this);
              h2 = (this.widthOption || this.offsetWidth) + k;
              var m2 = this.lastItemY + this.lastLineHeight + this.titleHeight;
              m2 = this.handleOverflow(m2);
              m2 += k;
              e2 || (this.box = e2 = d2.rect().addClass("highcharts-legend-box").attr({ r: f2.borderRadius }).add(c2), e2.isNew = true);
              a4.styledMode || e2.attr({ stroke: f2.borderColor, "stroke-width": f2.borderWidth || 0, fill: f2.backgroundColor || "none" }).shadow(f2.shadow);
              0 < h2 && 0 < m2 && (e2[e2.isNew ? "attr" : "animate"](e2.crisp.call({}, { x: 0, y: 0, width: h2, height: m2 }, e2.strokeWidth())), e2.isNew = false);
              e2[l2 ? "show" : "hide"]();
              a4.styledMode && c2.getStyle("display") === "none" && (h2 = m2 = 0);
              this.legendWidth = h2;
              this.legendHeight = m2;
              l2 && this.align();
              this.proximate || this.positionItems();
              w(this, "afterRender");
            };
            a3.prototype.align = function(a4) {
              a4 === void 0 && (a4 = this.chart.spacingBox);
              var b = this.chart, d2 = this.options, c2 = a4.y;
              /(lth|ct|rth)/.test(this.getAlignment()) && 0 < b.titleOffset[0] ? c2 += b.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < b.titleOffset[2] && (c2 -= b.titleOffset[2]);
              c2 !== a4.y && (a4 = l(a4, { y: c2 }));
              this.group.align(l(d2, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : d2.verticalAlign }), true, a4);
            };
            a3.prototype.handleOverflow = function(a4) {
              var b = this, d2 = this.chart, c2 = d2.renderer, e2 = this.options, f2 = e2.y, k = this.padding;
              f2 = d2.spacingBox.height + (e2.verticalAlign === "top" ? -f2 : f2) - k;
              var l2 = e2.maxHeight, h2, m2 = this.clipRect, p2 = e2.navigation, t2 = J(p2.animation, true), n2 = p2.arrowSize || 12, w2 = this.nav, q2 = this.pages, v2, A2 = this.allItems, I = function(a5) {
                typeof a5 === "number" ? m2.attr({ height: a5 }) : m2 && (b.clipRect = m2.destroy(), b.contentGroup.clip());
                b.contentGroup.div && (b.contentGroup.div.style.clip = a5 ? "rect(" + k + "px,9999px," + (k + a5) + "px,0)" : "auto");
              }, N = function(a5) {
                b[a5] = c2.circle(0, 0, 1.3 * n2).translate(n2 / 2, n2 / 2).add(w2);
                d2.styledMode || b[a5].attr("fill", "rgba(0,0,0,0.0001)");
                return b[a5];
              };
              e2.layout !== "horizontal" || e2.verticalAlign === "middle" || e2.floating || (f2 /= 2);
              l2 && (f2 = Math.min(f2, l2));
              q2.length = 0;
              a4 && 0 < f2 && a4 > f2 && p2.enabled !== false ? (this.clipHeight = h2 = Math.max(f2 - 20 - this.titleHeight - k, 0), this.currentPage = J(this.currentPage, 1), this.fullHeight = a4, A2.forEach(function(a5, b2) {
                var d3 = a5._legendItemPos[1], c3 = Math.round(a5.legendItem.getBBox().height), e3 = q2.length;
                if (!e3 || d3 - q2[e3 - 1] > h2 && (v2 || d3) !== q2[e3 - 1])
                  q2.push(v2 || d3), e3++;
                a5.pageIx = e3 - 1;
                v2 && (A2[b2 - 1].pageIx = e3 - 1);
                b2 === A2.length - 1 && d3 + c3 - q2[e3 - 1] > h2 && d3 !== v2 && (q2.push(d3), a5.pageIx = e3);
                d3 !== v2 && (v2 = d3);
              }), m2 || (m2 = b.clipRect = c2.clipRect(0, k, 9999, 0), b.contentGroup.clip(m2)), I(h2), w2 || (this.nav = w2 = c2.g().attr({ zIndex: 1 }).add(this.group), this.up = c2.symbol("triangle", 0, 0, n2, n2).add(w2), N("upTracker").on("click", function() {
                b.scroll(-1, t2);
              }), this.pager = c2.text("", 15, 10).addClass("highcharts-legend-navigation"), d2.styledMode || this.pager.css(p2.style), this.pager.add(w2), this.down = c2.symbol("triangle-down", 0, 0, n2, n2).add(w2), N("downTracker").on("click", function() {
                b.scroll(1, t2);
              })), b.scroll(0), a4 = f2) : w2 && (I(), this.nav = w2.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0);
              return a4;
            };
            a3.prototype.scroll = function(a4, d2) {
              var b = this, c2 = this.chart, e2 = this.pages, g = e2.length, f2 = this.currentPage + a4;
              a4 = this.clipHeight;
              var k = this.options.navigation, l2 = this.pager, h2 = this.padding;
              f2 > g && (f2 = g);
              0 < f2 && (typeof d2 !== "undefined" && G(d2, c2), this.nav.attr({ translateX: h2, translateY: a4 + this.padding + 7 + this.titleHeight, visibility: "visible" }), [this.up, this.upTracker].forEach(function(a5) {
                a5.attr({ "class": f2 === 1 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
              }), l2.attr({ text: f2 + "/" + g }), [this.down, this.downTracker].forEach(function(a5) {
                a5.attr({ x: 18 + this.pager.getBBox().width, "class": f2 === g ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" });
              }, this), c2.styledMode || (this.up.attr({ fill: f2 === 1 ? k.inactiveColor : k.activeColor }), this.upTracker.css({ cursor: f2 === 1 ? "default" : "pointer" }), this.down.attr({ fill: f2 === g ? k.inactiveColor : k.activeColor }), this.downTracker.css({ cursor: f2 === g ? "default" : "pointer" })), this.scrollOffset = -e2[f2 - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = f2, this.positionCheckboxes(), d2 = v(J(d2, c2.renderer.globalAnimation, true)), p(function() {
                w(b, "afterScroll", { currentPage: f2 });
              }, d2.duration));
            };
            a3.prototype.setItemEvents = function(a4, d2, c2) {
              var b = this, e2 = b.chart.renderer.boxWrapper, g = a4 instanceof H, f2 = "highcharts-legend-" + (g ? "point" : "series") + "-active", k = b.chart.styledMode;
              (c2 ? [d2, a4.legendSymbol] : [a4.legendGroup]).forEach(function(c3) {
                if (c3)
                  c3.on("mouseover", function() {
                    a4.visible && b.allItems.forEach(function(b2) {
                      a4 !== b2 && b2.setState("inactive", !g);
                    });
                    a4.setState("hover");
                    a4.visible && e2.addClass(f2);
                    k || d2.css(b.options.itemHoverStyle);
                  }).on("mouseout", function() {
                    b.chart.styledMode || d2.css(l(a4.visible ? b.itemStyle : b.itemHiddenStyle));
                    b.allItems.forEach(function(b2) {
                      a4 !== b2 && b2.setState("", !g);
                    });
                    e2.removeClass(f2);
                    a4.setState();
                  }).on("click", function(d3) {
                    var c4 = function() {
                      a4.setVisible && a4.setVisible();
                      b.allItems.forEach(function(b2) {
                        a4 !== b2 && b2.setState(a4.visible ? "inactive" : "", !g);
                      });
                    };
                    e2.removeClass(f2);
                    d3 = { browserEvent: d3 };
                    a4.firePointEvent ? a4.firePointEvent("legendItemClick", d3, c4) : w(a4, "legendItemClick", d3, c4);
                  });
              });
            };
            a3.prototype.createCheckboxForItem = function(a4) {
              a4.checkbox = f("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: a4.selected, defaultChecked: a4.selected }, this.options.itemCheckboxStyle, this.chart.container);
              h(a4.checkbox, "click", function(b) {
                w(a4.series || a4, "checkboxClick", { checked: b.target.checked, item: a4 }, function() {
                  a4.select();
                });
              });
            };
            return a3;
          }();
          (/Trident\/7\.0/.test(u.navigator && u.navigator.userAgent) || a2) && x(d.prototype, "positionItem", function(a3, b) {
            var d2 = this, c2 = function() {
              b._legendItemPos && a3.call(d2, b);
            };
            c2();
            d2.bubbleLegend || setTimeout(c2);
          });
          E.Legend = d;
          return E.Legend;
        });
        L(a, "Core/Series/SeriesRegistry.js", [a["Core/Globals.js"], a["Core/DefaultOptions.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"]], function(a2, u, E, H) {
          var v = u.defaultOptions, y = H.error, G = H.extendClass, B = H.merge, q;
          (function(h) {
            function f(a3, e) {
              var c = v.plotOptions || {}, f2 = e.defaultOptions;
              e.prototype.pointClass || (e.prototype.pointClass = E);
              e.prototype.type = a3;
              f2 && (c[a3] = f2);
              h.seriesTypes[a3] = e;
            }
            h.seriesTypes = a2.seriesTypes;
            h.getSeries = function(a3, e) {
              e === void 0 && (e = {});
              var c = a3.options.chart;
              c = e.type || c.type || c.defaultSeriesType || "";
              var f2 = h.seriesTypes[c];
              h || y(17, true, a3, { missingModuleFor: c });
              c = new f2();
              typeof c.init === "function" && c.init(a3, e);
              return c;
            };
            h.registerSeriesType = f;
            h.seriesType = function(a3, e, t, m, w) {
              var c = v.plotOptions || {};
              e = e || "";
              c[a3] = B(c[e], t);
              f(a3, G(h.seriesTypes[e] || function() {
              }, m));
              h.seriesTypes[a3].prototype.type = a3;
              w && (h.seriesTypes[a3].prototype.pointClass = G(E, w));
              return h.seriesTypes[a3];
            };
          })(q || (q = {}));
          a2.seriesType = q.seriesType;
          return q;
        });
        L(a, "Core/Chart/Chart.js", [
          a["Core/Animation/AnimationUtilities.js"],
          a["Core/Axis/Axis.js"],
          a["Core/FormatUtilities.js"],
          a["Core/Foundation.js"],
          a["Core/Globals.js"],
          a["Core/Legend.js"],
          a["Core/MSPointer.js"],
          a["Core/DefaultOptions.js"],
          a["Core/Color/Palette.js"],
          a["Core/Pointer.js"],
          a["Core/Renderer/RendererRegistry.js"],
          a["Core/Series/SeriesRegistry.js"],
          a["Core/Time.js"],
          a["Core/Utilities.js"],
          a["Core/Renderer/HTML/AST.js"]
        ], function(a2, u, E, H, x, y, G, B, q, h, f, c, e, t, m) {
          var w = a2.animate, n = a2.animObject, l = a2.setAnimation, v = E.numberFormat, K = H.registerEventOptions, A = x.charts, p = x.doc, d = x.marginNames, k = x.win, b = B.defaultOptions, g = B.defaultTime, r = c.seriesTypes, F = t.addEvent, D = t.attr, M = t.cleanRecursively, C = t.createElement, O = t.css, S = t.defined, W = t.discardElement, Y = t.erase, ba = t.error, z = t.extend, Q = t.find, L2 = t.fireEvent, aa = t.getStyle, ja = t.isArray, I = t.isNumber, N = t.isObject, P = t.isString, U = t.merge, T = t.objectEach, R = t.pick, V = t.pInt, ca = t.relativeLength, da = t.removeEvent, fa = t.splat, ea = t.syncTimeout, ka = t.uniqueKey;
          a2 = function() {
            function a3(a4, b2, d2) {
              this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0;
              this.sharedClips = {};
              this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0;
              this.getArgs(a4, b2, d2);
            }
            a3.chart = function(b2, d2, c2) {
              return new a3(b2, d2, c2);
            };
            a3.prototype.getArgs = function(a4, b2, d2) {
              P(a4) || a4.nodeName ? (this.renderTo = a4, this.init(b2, d2)) : this.init(a4, b2);
            };
            a3.prototype.init = function(a4, d2) {
              var c2 = a4.plotOptions || {};
              L2(this, "init", { args: arguments }, function() {
                var g2 = U(b, a4), f2 = g2.chart;
                T(g2.plotOptions, function(a5, b2) {
                  N(a5) && (a5.tooltip = c2[b2] && U(c2[b2].tooltip) || void 0);
                });
                g2.tooltip.userOptions = a4.chart && a4.chart.forExport && a4.tooltip.userOptions || a4.tooltip;
                this.userOptions = a4;
                this.margin = [];
                this.spacing = [];
                this.bounds = { h: {}, v: {} };
                this.labelCollectors = [];
                this.callback = d2;
                this.isResizing = 0;
                this.options = g2;
                this.axes = [];
                this.series = [];
                this.time = a4.time && Object.keys(a4.time).length ? new e(a4.time) : x.time;
                this.numberFormatter = f2.numberFormatter || v;
                this.styledMode = f2.styledMode;
                this.hasCartesianSeries = f2.showAxes;
                this.index = A.length;
                A.push(this);
                x.chartCount++;
                K(this, f2);
                this.xAxis = [];
                this.yAxis = [];
                this.pointCount = this.colorCounter = this.symbolCounter = 0;
                L2(this, "afterInit");
                this.firstRender();
              });
            };
            a3.prototype.initSeries = function(a4) {
              var b2 = this.options.chart;
              b2 = a4.type || b2.type || b2.defaultSeriesType;
              var d2 = r[b2];
              d2 || ba(17, true, this, { missingModuleFor: b2 });
              b2 = new d2();
              typeof b2.init === "function" && b2.init(this, a4);
              return b2;
            };
            a3.prototype.setSeriesData = function() {
              this.getSeriesOrderByLinks().forEach(function(a4) {
                a4.points || a4.data || !a4.enabledDataSorting || a4.setData(a4.options.data, false);
              });
            };
            a3.prototype.getSeriesOrderByLinks = function() {
              return this.series.concat().sort(function(a4, b2) {
                return a4.linkedSeries.length || b2.linkedSeries.length ? b2.linkedSeries.length - a4.linkedSeries.length : 0;
              });
            };
            a3.prototype.orderSeries = function(a4) {
              var b2 = this.series;
              a4 = a4 || 0;
              for (var d2 = b2.length; a4 < d2; ++a4)
                b2[a4] && (b2[a4].index = a4, b2[a4].name = b2[a4].getName());
            };
            a3.prototype.isInsidePlot = function(a4, b2, d2) {
              d2 === void 0 && (d2 = {});
              var c2 = this.inverted, e2 = this.plotBox, g2 = this.plotLeft, f2 = this.plotTop, k2 = this.scrollablePlotBox, l2 = 0;
              var h2 = 0;
              d2.visiblePlotOnly && this.scrollingContainer && (h2 = this.scrollingContainer, l2 = h2.scrollLeft, h2 = h2.scrollTop);
              var I2 = d2.series;
              e2 = d2.visiblePlotOnly && k2 || e2;
              k2 = d2.inverted ? b2 : a4;
              b2 = d2.inverted ? a4 : b2;
              a4 = { x: k2, y: b2, isInsidePlot: true };
              if (!d2.ignoreX) {
                var r2 = I2 && (c2 ? I2.yAxis : I2.xAxis) || { pos: g2, len: Infinity };
                k2 = d2.paneCoordinates ? r2.pos + k2 : g2 + k2;
                k2 >= Math.max(l2 + g2, r2.pos) && k2 <= Math.min(l2 + g2 + e2.width, r2.pos + r2.len) || (a4.isInsidePlot = false);
              }
              !d2.ignoreY && a4.isInsidePlot && (c2 = I2 && (c2 ? I2.xAxis : I2.yAxis) || { pos: f2, len: Infinity }, d2 = d2.paneCoordinates ? c2.pos + b2 : f2 + b2, d2 >= Math.max(h2 + f2, c2.pos) && d2 <= Math.min(h2 + f2 + e2.height, c2.pos + c2.len) || (a4.isInsidePlot = false));
              L2(this, "afterIsInsidePlot", a4);
              return a4.isInsidePlot;
            };
            a3.prototype.redraw = function(a4) {
              L2(this, "beforeRedraw");
              var b2 = this.hasCartesianSeries ? this.axes : this.colorAxis || [], d2 = this.series, c2 = this.pointer, e2 = this.legend, g2 = this.userOptions.legend, f2 = this.renderer, k2 = f2.isHidden(), h2 = [], I2 = this.isDirtyBox, r2 = this.isDirtyLegend;
              this.setResponsive && this.setResponsive(false);
              l(this.hasRendered ? a4 : false, this);
              k2 && this.temporaryDisplay();
              this.layOutTitles();
              for (a4 = d2.length; a4--; ) {
                var m2 = d2[a4];
                if (m2.options.stacking || m2.options.centerInCategory) {
                  var p2 = true;
                  if (m2.isDirty) {
                    var t2 = true;
                    break;
                  }
                }
              }
              if (t2)
                for (a4 = d2.length; a4--; )
                  m2 = d2[a4], m2.options.stacking && (m2.isDirty = true);
              d2.forEach(function(a5) {
                a5.isDirty && (a5.options.legendType === "point" ? (typeof a5.updateTotals === "function" && a5.updateTotals(), r2 = true) : g2 && (g2.labelFormatter || g2.labelFormat) && (r2 = true));
                a5.isDirtyData && L2(a5, "updatedData");
              });
              r2 && e2 && e2.options.enabled && (e2.render(), this.isDirtyLegend = false);
              p2 && this.getStacks();
              b2.forEach(function(a5) {
                a5.updateNames();
                a5.setScale();
              });
              this.getMargins();
              b2.forEach(function(a5) {
                a5.isDirty && (I2 = true);
              });
              b2.forEach(function(a5) {
                var b3 = a5.min + "," + a5.max;
                a5.extKey !== b3 && (a5.extKey = b3, h2.push(function() {
                  L2(a5, "afterSetExtremes", z(a5.eventArgs, a5.getExtremes()));
                  delete a5.eventArgs;
                }));
                (I2 || p2) && a5.redraw();
              });
              I2 && this.drawChartBox();
              L2(this, "predraw");
              d2.forEach(function(a5) {
                (I2 || a5.isDirty) && a5.visible && a5.redraw();
                a5.isDirtyData = false;
              });
              c2 && c2.reset(true);
              f2.draw();
              L2(this, "redraw");
              L2(this, "render");
              k2 && this.temporaryDisplay(true);
              h2.forEach(function(a5) {
                a5.call();
              });
            };
            a3.prototype.get = function(a4) {
              function b2(b3) {
                return b3.id === a4 || b3.options && b3.options.id === a4;
              }
              for (var d2 = this.series, c2 = Q(this.axes, b2) || Q(this.series, b2), e2 = 0; !c2 && e2 < d2.length; e2++)
                c2 = Q(d2[e2].points || [], b2);
              return c2;
            };
            a3.prototype.getAxes = function() {
              var a4 = this, b2 = this.options, d2 = b2.xAxis = fa(b2.xAxis || {});
              b2 = b2.yAxis = fa(b2.yAxis || {});
              L2(this, "getAxes");
              d2.forEach(function(a5, b3) {
                a5.index = b3;
                a5.isX = true;
              });
              b2.forEach(function(a5, b3) {
                a5.index = b3;
              });
              d2.concat(b2).forEach(function(b3) {
                new u(a4, b3);
              });
              L2(this, "afterGetAxes");
            };
            a3.prototype.getSelectedPoints = function() {
              var a4 = [];
              this.series.forEach(function(b2) {
                a4 = a4.concat(b2.getPointsCollection().filter(function(a5) {
                  return R(a5.selectedStaging, a5.selected);
                }));
              });
              return a4;
            };
            a3.prototype.getSelectedSeries = function() {
              return this.series.filter(function(a4) {
                return a4.selected;
              });
            };
            a3.prototype.setTitle = function(a4, b2, d2) {
              this.applyDescription("title", a4);
              this.applyDescription("subtitle", b2);
              this.applyDescription("caption", void 0);
              this.layOutTitles(d2);
            };
            a3.prototype.applyDescription = function(a4, b2) {
              var d2 = this, c2 = a4 === "title" ? { color: q.neutralColor80, fontSize: this.options.isStock ? "16px" : "18px" } : { color: q.neutralColor60 };
              c2 = this.options[a4] = U(!this.styledMode && { style: c2 }, this.options[a4], b2);
              var e2 = this[a4];
              e2 && b2 && (this[a4] = e2 = e2.destroy());
              c2 && !e2 && (e2 = this.renderer.text(c2.text, 0, 0, c2.useHTML).attr({ align: c2.align, "class": "highcharts-" + a4, zIndex: c2.zIndex || 4 }).add(), e2.update = function(b3) {
                d2[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[a4]](b3);
              }, this.styledMode || e2.css(c2.style), this[a4] = e2);
            };
            a3.prototype.layOutTitles = function(a4) {
              var b2 = [0, 0, 0], d2 = this.renderer, c2 = this.spacingBox;
              ["title", "subtitle", "caption"].forEach(function(a5) {
                var e3 = this[a5], g2 = this.options[a5], f2 = g2.verticalAlign || "top";
                a5 = a5 === "title" ? f2 === "top" ? -3 : 0 : f2 === "top" ? b2[0] + 2 : 0;
                var k2;
                if (e3) {
                  this.styledMode || (k2 = g2.style && g2.style.fontSize);
                  k2 = d2.fontMetrics(k2, e3).b;
                  e3.css({ width: (g2.width || c2.width + (g2.widthAdjust || 0)) + "px" });
                  var l2 = Math.round(e3.getBBox(g2.useHTML).height);
                  e3.align(z({ y: f2 === "bottom" ? k2 : a5 + k2, height: l2 }, g2), false, "spacingBox");
                  g2.floating || (f2 === "top" ? b2[0] = Math.ceil(b2[0] + l2) : f2 === "bottom" && (b2[2] = Math.ceil(b2[2] + l2)));
                }
              }, this);
              b2[0] && (this.options.title.verticalAlign || "top") === "top" && (b2[0] += this.options.title.margin);
              b2[2] && this.options.caption.verticalAlign === "bottom" && (b2[2] += this.options.caption.margin);
              var e2 = !this.titleOffset || this.titleOffset.join(",") !== b2.join(",");
              this.titleOffset = b2;
              L2(this, "afterLayOutTitles");
              !this.isDirtyBox && e2 && (this.isDirtyBox = this.isDirtyLegend = e2, this.hasRendered && R(a4, true) && this.isDirtyBox && this.redraw());
            };
            a3.prototype.getChartSize = function() {
              var a4 = this.options.chart, b2 = a4.width;
              a4 = a4.height;
              var d2 = this.renderTo;
              S(b2) || (this.containerWidth = aa(d2, "width"));
              S(a4) || (this.containerHeight = aa(d2, "height"));
              this.chartWidth = Math.max(0, b2 || this.containerWidth || 600);
              this.chartHeight = Math.max(0, ca(a4, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
            };
            a3.prototype.temporaryDisplay = function(a4) {
              var b2 = this.renderTo;
              if (a4)
                for (; b2 && b2.style; )
                  b2.hcOrigStyle && (O(b2, b2.hcOrigStyle), delete b2.hcOrigStyle), b2.hcOrigDetached && (p.body.removeChild(b2), b2.hcOrigDetached = false), b2 = b2.parentNode;
              else
                for (; b2 && b2.style; ) {
                  p.body.contains(b2) || b2.parentNode || (b2.hcOrigDetached = true, p.body.appendChild(b2));
                  if (aa(b2, "display", false) === "none" || b2.hcOricDetached)
                    b2.hcOrigStyle = { display: b2.style.display, height: b2.style.height, overflow: b2.style.overflow }, a4 = { display: "block", overflow: "hidden" }, b2 !== this.renderTo && (a4.height = 0), O(b2, a4), b2.offsetWidth || b2.style.setProperty("display", "block", "important");
                  b2 = b2.parentNode;
                  if (b2 === p.body)
                    break;
                }
            };
            a3.prototype.setClassName = function(a4) {
              this.container.className = "highcharts-container " + (a4 || "");
            };
            a3.prototype.getContainer = function() {
              var a4 = this.options, b2 = a4.chart, d2 = ka(), c2, e2 = this.renderTo;
              e2 || (this.renderTo = e2 = b2.renderTo);
              P(e2) && (this.renderTo = e2 = p.getElementById(e2));
              e2 || ba(13, true, this);
              var g2 = V(D(e2, "data-highcharts-chart"));
              I(g2) && A[g2] && A[g2].hasRendered && A[g2].destroy();
              D(e2, "data-highcharts-chart", this.index);
              e2.innerHTML = "";
              b2.skipClone || e2.offsetWidth || this.temporaryDisplay();
              this.getChartSize();
              g2 = this.chartWidth;
              var k2 = this.chartHeight;
              O(e2, { overflow: "hidden" });
              this.styledMode || (c2 = z({ position: "relative", overflow: "hidden", width: g2 + "px", height: k2 + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none" }, b2.style || {}));
              this.container = d2 = C("div", { id: d2 }, c2, e2);
              this._cursor = d2.style.cursor;
              this.renderer = new (f.getRendererType(b2.renderer))(d2, g2, k2, void 0, b2.forExport, a4.exporting && a4.exporting.allowHTML, this.styledMode);
              l(void 0, this);
              this.setClassName(b2.className);
              if (this.styledMode)
                for (var h2 in a4.defs)
                  this.renderer.definition(a4.defs[h2]);
              else
                this.renderer.setStyle(b2.style);
              this.renderer.chartIndex = this.index;
              L2(this, "afterGetContainer");
            };
            a3.prototype.getMargins = function(a4) {
              var b2 = this.spacing, d2 = this.margin, c2 = this.titleOffset;
              this.resetMargins();
              c2[0] && !S(d2[0]) && (this.plotTop = Math.max(this.plotTop, c2[0] + b2[0]));
              c2[2] && !S(d2[2]) && (this.marginBottom = Math.max(this.marginBottom, c2[2] + b2[2]));
              this.legend && this.legend.display && this.legend.adjustMargins(d2, b2);
              L2(this, "getMargins");
              a4 || this.getAxisMargins();
            };
            a3.prototype.getAxisMargins = function() {
              var a4 = this, b2 = a4.axisOffset = [0, 0, 0, 0], c2 = a4.colorAxis, e2 = a4.margin, g2 = function(a5) {
                a5.forEach(function(a6) {
                  a6.visible && a6.getOffset();
                });
              };
              a4.hasCartesianSeries ? g2(a4.axes) : c2 && c2.length && g2(c2);
              d.forEach(function(d2, c3) {
                S(e2[c3]) || (a4[d2] += b2[c3]);
              });
              a4.setChartSize();
            };
            a3.prototype.reflow = function(a4) {
              var b2 = this, d2 = b2.options.chart, c2 = b2.renderTo, e2 = S(d2.width) && S(d2.height), g2 = d2.width || aa(c2, "width");
              d2 = d2.height || aa(c2, "height");
              c2 = a4 ? a4.target : k;
              delete b2.pointer.chartPosition;
              if (!e2 && !b2.isPrinting && g2 && d2 && (c2 === k || c2 === p)) {
                if (g2 !== b2.containerWidth || d2 !== b2.containerHeight)
                  t.clearTimeout(b2.reflowTimeout), b2.reflowTimeout = ea(function() {
                    b2.container && b2.setSize(void 0, void 0, false);
                  }, a4 ? 100 : 0);
                b2.containerWidth = g2;
                b2.containerHeight = d2;
              }
            };
            a3.prototype.setReflow = function(a4) {
              var b2 = this;
              a4 === false || this.unbindReflow ? a4 === false && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = F(k, "resize", function(a5) {
                b2.options && b2.reflow(a5);
              }), F(this, "destroy", this.unbindReflow));
            };
            a3.prototype.setSize = function(a4, b2, d2) {
              var c2 = this, e2 = c2.renderer;
              c2.isResizing += 1;
              l(d2, c2);
              d2 = e2.globalAnimation;
              c2.oldChartHeight = c2.chartHeight;
              c2.oldChartWidth = c2.chartWidth;
              typeof a4 !== "undefined" && (c2.options.chart.width = a4);
              typeof b2 !== "undefined" && (c2.options.chart.height = b2);
              c2.getChartSize();
              c2.styledMode || (d2 ? w : O)(c2.container, { width: c2.chartWidth + "px", height: c2.chartHeight + "px" }, d2);
              c2.setChartSize(true);
              e2.setSize(c2.chartWidth, c2.chartHeight, d2);
              c2.axes.forEach(function(a5) {
                a5.isDirty = true;
                a5.setScale();
              });
              c2.isDirtyLegend = true;
              c2.isDirtyBox = true;
              c2.layOutTitles();
              c2.getMargins();
              c2.redraw(d2);
              c2.oldChartHeight = null;
              L2(c2, "resize");
              ea(function() {
                c2 && L2(c2, "endResize", null, function() {
                  --c2.isResizing;
                });
              }, n(d2).duration);
            };
            a3.prototype.setChartSize = function(a4) {
              var b2 = this.inverted, d2 = this.renderer, c2 = this.chartWidth, e2 = this.chartHeight, g2 = this.options.chart, f2 = this.spacing, k2 = this.clipOffset, l2, h2, I2, r2;
              this.plotLeft = l2 = Math.round(this.plotLeft);
              this.plotTop = h2 = Math.round(this.plotTop);
              this.plotWidth = I2 = Math.max(0, Math.round(c2 - l2 - this.marginRight));
              this.plotHeight = r2 = Math.max(0, Math.round(e2 - h2 - this.marginBottom));
              this.plotSizeX = b2 ? r2 : I2;
              this.plotSizeY = b2 ? I2 : r2;
              this.plotBorderWidth = g2.plotBorderWidth || 0;
              this.spacingBox = d2.spacingBox = { x: f2[3], y: f2[0], width: c2 - f2[3] - f2[1], height: e2 - f2[0] - f2[2] };
              this.plotBox = d2.plotBox = { x: l2, y: h2, width: I2, height: r2 };
              b2 = 2 * Math.floor(this.plotBorderWidth / 2);
              c2 = Math.ceil(Math.max(b2, k2[3]) / 2);
              e2 = Math.ceil(Math.max(b2, k2[0]) / 2);
              this.clipBox = { x: c2, y: e2, width: Math.floor(this.plotSizeX - Math.max(b2, k2[1]) / 2 - c2), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(b2, k2[2]) / 2 - e2)) };
              a4 || (this.axes.forEach(function(a5) {
                a5.setAxisSize();
                a5.setAxisTranslation();
              }), d2.alignElements());
              L2(this, "afterSetChartSize", { skipAxes: a4 });
            };
            a3.prototype.resetMargins = function() {
              L2(this, "resetMargins");
              var a4 = this, b2 = a4.options.chart;
              ["margin", "spacing"].forEach(function(d2) {
                var c2 = b2[d2], e2 = N(c2) ? c2 : [c2, c2, c2, c2];
                ["Top", "Right", "Bottom", "Left"].forEach(function(c3, g2) {
                  a4[d2][g2] = R(b2[d2 + c3], e2[g2]);
                });
              });
              d.forEach(function(b3, d2) {
                a4[b3] = R(a4.margin[d2], a4.spacing[d2]);
              });
              a4.axisOffset = [0, 0, 0, 0];
              a4.clipOffset = [0, 0, 0, 0];
            };
            a3.prototype.drawChartBox = function() {
              var a4 = this.options.chart, b2 = this.renderer, d2 = this.chartWidth, c2 = this.chartHeight, e2 = this.styledMode, g2 = this.plotBGImage, f2 = a4.backgroundColor, k2 = a4.plotBackgroundColor, l2 = a4.plotBackgroundImage, h2 = this.plotLeft, I2 = this.plotTop, r2 = this.plotWidth, m2 = this.plotHeight, p2 = this.plotBox, t2 = this.clipRect, n2 = this.clipBox, P2 = this.chartBackground, w2 = this.plotBackground, q2 = this.plotBorder, A2, v2 = "animate";
              P2 || (this.chartBackground = P2 = b2.rect().addClass("highcharts-background").add(), v2 = "attr");
              if (e2)
                var N2 = A2 = P2.strokeWidth();
              else {
                N2 = a4.borderWidth || 0;
                A2 = N2 + (a4.shadow ? 8 : 0);
                f2 = { fill: f2 || "none" };
                if (N2 || P2["stroke-width"])
                  f2.stroke = a4.borderColor, f2["stroke-width"] = N2;
                P2.attr(f2).shadow(a4.shadow);
              }
              P2[v2]({ x: A2 / 2, y: A2 / 2, width: d2 - A2 - N2 % 2, height: c2 - A2 - N2 % 2, r: a4.borderRadius });
              v2 = "animate";
              w2 || (v2 = "attr", this.plotBackground = w2 = b2.rect().addClass("highcharts-plot-background").add());
              w2[v2](p2);
              e2 || (w2.attr({ fill: k2 || "none" }).shadow(a4.plotShadow), l2 && (g2 ? (l2 !== g2.attr("href") && g2.attr("href", l2), g2.animate(p2)) : this.plotBGImage = b2.image(l2, h2, I2, r2, m2).add()));
              t2 ? t2.animate({ width: n2.width, height: n2.height }) : this.clipRect = b2.clipRect(n2);
              v2 = "animate";
              q2 || (v2 = "attr", this.plotBorder = q2 = b2.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add());
              e2 || q2.attr({ stroke: a4.plotBorderColor, "stroke-width": a4.plotBorderWidth || 0, fill: "none" });
              q2[v2](q2.crisp({ x: h2, y: I2, width: r2, height: m2 }, -q2.strokeWidth()));
              this.isDirtyBox = false;
              L2(this, "afterDrawChartBox");
            };
            a3.prototype.propFromSeries = function() {
              var a4 = this, b2 = a4.options.chart, d2 = a4.options.series, c2, e2, g2;
              ["inverted", "angular", "polar"].forEach(function(f2) {
                e2 = r[b2.type || b2.defaultSeriesType];
                g2 = b2[f2] || e2 && e2.prototype[f2];
                for (c2 = d2 && d2.length; !g2 && c2--; )
                  (e2 = r[d2[c2].type]) && e2.prototype[f2] && (g2 = true);
                a4[f2] = g2;
              });
            };
            a3.prototype.linkSeries = function() {
              var a4 = this, b2 = a4.series;
              b2.forEach(function(a5) {
                a5.linkedSeries.length = 0;
              });
              b2.forEach(function(b3) {
                var d2 = b3.options.linkedTo;
                P(d2) && (d2 = d2 === ":previous" ? a4.series[b3.index - 1] : a4.get(d2)) && d2.linkedParent !== b3 && (d2.linkedSeries.push(b3), b3.linkedParent = d2, d2.enabledDataSorting && b3.setDataSortingOptions(), b3.visible = R(b3.options.visible, d2.options.visible, b3.visible));
              });
              L2(this, "afterLinkSeries");
            };
            a3.prototype.renderSeries = function() {
              this.series.forEach(function(a4) {
                a4.translate();
                a4.render();
              });
            };
            a3.prototype.renderLabels = function() {
              var a4 = this, b2 = a4.options.labels;
              b2.items && b2.items.forEach(function(d2) {
                var c2 = z(b2.style, d2.style), e2 = V(c2.left) + a4.plotLeft, g2 = V(c2.top) + a4.plotTop + 12;
                delete c2.left;
                delete c2.top;
                a4.renderer.text(d2.html, e2, g2).attr({ zIndex: 2 }).css(c2).add();
              });
            };
            a3.prototype.render = function() {
              var a4 = this.axes, b2 = this.colorAxis, d2 = this.renderer, c2 = this.options, e2 = function(a5) {
                a5.forEach(function(a6) {
                  a6.visible && a6.render();
                });
              }, g2 = 0;
              this.setTitle();
              this.legend = new y(this, c2.legend);
              this.getStacks && this.getStacks();
              this.getMargins(true);
              this.setChartSize();
              c2 = this.plotWidth;
              a4.some(function(a5) {
                if (a5.horiz && a5.visible && a5.options.labels.enabled && a5.series.length)
                  return g2 = 21, true;
              });
              var f2 = this.plotHeight = Math.max(this.plotHeight - g2, 0);
              a4.forEach(function(a5) {
                a5.setScale();
              });
              this.getAxisMargins();
              var k2 = 1.1 < c2 / this.plotWidth, l2 = 1.05 < f2 / this.plotHeight;
              if (k2 || l2)
                a4.forEach(function(a5) {
                  (a5.horiz && k2 || !a5.horiz && l2) && a5.setTickInterval(true);
                }), this.getMargins();
              this.drawChartBox();
              this.hasCartesianSeries ? e2(a4) : b2 && b2.length && e2(b2);
              this.seriesGroup || (this.seriesGroup = d2.g("series-group").attr({ zIndex: 3 }).add());
              this.renderSeries();
              this.renderLabels();
              this.addCredits();
              this.setResponsive && this.setResponsive();
              this.hasRendered = true;
            };
            a3.prototype.addCredits = function(a4) {
              var b2 = this, d2 = U(true, this.options.credits, a4);
              d2.enabled && !this.credits && (this.credits = this.renderer.text(d2.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
                d2.href && (k.location.href = d2.href);
              }).attr({ align: d2.position.align, zIndex: 8 }), b2.styledMode || this.credits.css(d2.style), this.credits.add().align(d2.position), this.credits.update = function(a5) {
                b2.credits = b2.credits.destroy();
                b2.addCredits(a5);
              });
            };
            a3.prototype.destroy = function() {
              var a4 = this, b2 = a4.axes, d2 = a4.series, c2 = a4.container, e2 = c2 && c2.parentNode, g2;
              L2(a4, "destroy");
              a4.renderer.forExport ? Y(A, a4) : A[a4.index] = void 0;
              x.chartCount--;
              a4.renderTo.removeAttribute("data-highcharts-chart");
              da(a4);
              for (g2 = b2.length; g2--; )
                b2[g2] = b2[g2].destroy();
              this.scroller && this.scroller.destroy && this.scroller.destroy();
              for (g2 = d2.length; g2--; )
                d2[g2] = d2[g2].destroy();
              "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(b3) {
                var d3 = a4[b3];
                d3 && d3.destroy && (a4[b3] = d3.destroy());
              });
              c2 && (c2.innerHTML = "", da(c2), e2 && W(c2));
              T(a4, function(b3, d3) {
                delete a4[d3];
              });
            };
            a3.prototype.firstRender = function() {
              var a4 = this, b2 = a4.options;
              if (!a4.isReadyToRender || a4.isReadyToRender()) {
                a4.getContainer();
                a4.resetMargins();
                a4.setChartSize();
                a4.propFromSeries();
                a4.getAxes();
                (ja(b2.series) ? b2.series : []).forEach(function(b3) {
                  a4.initSeries(b3);
                });
                a4.linkSeries();
                a4.setSeriesData();
                L2(a4, "beforeRender");
                h && (G.isRequired() ? a4.pointer = new G(a4, b2) : a4.pointer = new h(a4, b2));
                a4.render();
                a4.pointer.getChartPosition();
                if (!a4.renderer.imgCount && !a4.hasLoaded)
                  a4.onload();
                a4.temporaryDisplay(true);
              }
            };
            a3.prototype.onload = function() {
              this.callbacks.concat([this.callback]).forEach(function(a4) {
                a4 && typeof this.index !== "undefined" && a4.apply(this, [this]);
              }, this);
              L2(this, "load");
              L2(this, "render");
              S(this.index) && this.setReflow(this.options.chart.reflow);
              this.hasLoaded = true;
            };
            a3.prototype.addSeries = function(a4, b2, d2) {
              var c2 = this, e2;
              a4 && (b2 = R(b2, true), L2(c2, "addSeries", { options: a4 }, function() {
                e2 = c2.initSeries(a4);
                c2.isDirtyLegend = true;
                c2.linkSeries();
                e2.enabledDataSorting && e2.setData(a4.data, false);
                L2(c2, "afterAddSeries", { series: e2 });
                b2 && c2.redraw(d2);
              }));
              return e2;
            };
            a3.prototype.addAxis = function(a4, b2, d2, c2) {
              return this.createAxis(b2 ? "xAxis" : "yAxis", { axis: a4, redraw: d2, animation: c2 });
            };
            a3.prototype.addColorAxis = function(a4, b2, d2) {
              return this.createAxis("colorAxis", { axis: a4, redraw: b2, animation: d2 });
            };
            a3.prototype.createAxis = function(a4, b2) {
              var d2 = a4 === "colorAxis", c2 = b2.redraw, e2 = b2.animation;
              a4 = U(b2.axis, { index: this[a4].length, isX: a4 === "xAxis" });
              a4 = d2 ? new x.ColorAxis(this, a4) : new u(this, a4);
              d2 && (this.isDirtyLegend = true, this.axes.forEach(function(a5) {
                a5.series = [];
              }), this.series.forEach(function(a5) {
                a5.bindAxes();
                a5.isDirtyData = true;
              }));
              R(c2, true) && this.redraw(e2);
              return a4;
            };
            a3.prototype.showLoading = function(a4) {
              var b2 = this, d2 = b2.options, c2 = d2.loading, e2 = function() {
                g2 && O(g2, { left: b2.plotLeft + "px", top: b2.plotTop + "px", width: b2.plotWidth + "px", height: b2.plotHeight + "px" });
              }, g2 = b2.loadingDiv, f2 = b2.loadingSpan;
              g2 || (b2.loadingDiv = g2 = C("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, b2.container));
              f2 || (b2.loadingSpan = f2 = C("span", { className: "highcharts-loading-inner" }, null, g2), F(b2, "redraw", e2));
              g2.className = "highcharts-loading";
              m.setElementHTML(f2, R(a4, d2.lang.loading, ""));
              b2.styledMode || (O(g2, z(c2.style, { zIndex: 10 })), O(f2, c2.labelStyle), b2.loadingShown || (O(g2, { opacity: 0, display: "" }), w(g2, { opacity: c2.style.opacity || 0.5 }, { duration: c2.showDuration || 0 })));
              b2.loadingShown = true;
              e2();
            };
            a3.prototype.hideLoading = function() {
              var a4 = this.options, b2 = this.loadingDiv;
              b2 && (b2.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || w(b2, { opacity: 0 }, { duration: a4.loading.hideDuration || 100, complete: function() {
                O(b2, { display: "none" });
              } }));
              this.loadingShown = false;
            };
            a3.prototype.update = function(a4, b2, d2, c2) {
              var f2 = this, k2 = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, l2 = a4.isResponsiveOptions, h2 = [], r2, m2;
              L2(f2, "update", { options: a4 });
              l2 || f2.setResponsive(false, true);
              a4 = M(a4, f2.options);
              f2.userOptions = U(f2.userOptions, a4);
              var p2 = a4.chart;
              if (p2) {
                U(true, f2.options.chart, p2);
                "className" in p2 && f2.setClassName(p2.className);
                "reflow" in p2 && f2.setReflow(p2.reflow);
                if ("inverted" in p2 || "polar" in p2 || "type" in p2) {
                  f2.propFromSeries();
                  var t2 = true;
                }
                "alignTicks" in p2 && (t2 = true);
                "events" in p2 && K(this, p2);
                T(p2, function(a5, b3) {
                  f2.propsRequireUpdateSeries.indexOf("chart." + b3) !== -1 && (r2 = true);
                  f2.propsRequireDirtyBox.indexOf(b3) !== -1 && (f2.isDirtyBox = true);
                  f2.propsRequireReflow.indexOf(b3) !== -1 && (l2 ? f2.isDirtyBox = true : m2 = true);
                });
                !f2.styledMode && "style" in p2 && f2.renderer.setStyle(p2.style);
              }
              !f2.styledMode && a4.colors && (this.options.colors = a4.colors);
              a4.time && (this.time === g && (this.time = new e(a4.time)), U(true, f2.options.time, a4.time));
              T(a4, function(b3, d3) {
                if (f2[d3] && typeof f2[d3].update === "function")
                  f2[d3].update(b3, false);
                else if (typeof f2[k2[d3]] === "function")
                  f2[k2[d3]](b3);
                else
                  d3 !== "colors" && f2.collectionsWithUpdate.indexOf(d3) === -1 && U(true, f2.options[d3], a4[d3]);
                d3 !== "chart" && f2.propsRequireUpdateSeries.indexOf(d3) !== -1 && (r2 = true);
              });
              this.collectionsWithUpdate.forEach(function(b3) {
                if (a4[b3]) {
                  var c3 = [];
                  f2[b3].forEach(function(a5, b4) {
                    a5.options.isInternal || c3.push(R(a5.options.index, b4));
                  });
                  fa(a4[b3]).forEach(function(a5, e2) {
                    var g2 = S(a5.id), k3;
                    g2 && (k3 = f2.get(a5.id));
                    !k3 && f2[b3] && (k3 = f2[b3][c3 ? c3[e2] : e2]) && g2 && S(k3.options.id) && (k3 = void 0);
                    k3 && k3.coll === b3 && (k3.update(a5, false), d2 && (k3.touched = true));
                    !k3 && d2 && f2.collectionsWithInit[b3] && (f2.collectionsWithInit[b3][0].apply(f2, [a5].concat(f2.collectionsWithInit[b3][1] || []).concat([false])).touched = true);
                  });
                  d2 && f2[b3].forEach(function(a5) {
                    a5.touched || a5.options.isInternal ? delete a5.touched : h2.push(a5);
                  });
                }
              });
              h2.forEach(function(a5) {
                a5.chart && a5.remove(false);
              });
              t2 && f2.axes.forEach(function(a5) {
                a5.update({}, false);
              });
              r2 && f2.getSeriesOrderByLinks().forEach(function(a5) {
                a5.chart && a5.update({}, false);
              }, this);
              t2 = p2 && p2.width;
              p2 = p2 && (P(p2.height) ? ca(p2.height, t2 || f2.chartWidth) : p2.height);
              m2 || I(t2) && t2 !== f2.chartWidth || I(p2) && p2 !== f2.chartHeight ? f2.setSize(t2, p2, c2) : R(b2, true) && f2.redraw(c2);
              L2(f2, "afterUpdate", { options: a4, redraw: b2, animation: c2 });
            };
            a3.prototype.setSubtitle = function(a4, b2) {
              this.applyDescription("subtitle", a4);
              this.layOutTitles(b2);
            };
            a3.prototype.setCaption = function(a4, b2) {
              this.applyDescription("caption", a4);
              this.layOutTitles(b2);
            };
            a3.prototype.showResetZoom = function() {
              function a4() {
                d2.zoomOut();
              }
              var d2 = this, c2 = b.lang, e2 = d2.options.chart.resetZoomButton, g2 = e2.theme, f2 = g2.states, k2 = e2.relativeTo === "chart" || e2.relativeTo === "spacingBox" ? null : "scrollablePlotBox";
              L2(this, "beforeShowResetZoom", null, function() {
                d2.resetZoomButton = d2.renderer.button(c2.resetZoom, null, null, a4, g2, f2 && f2.hover).attr({ align: e2.position.align, title: c2.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(e2.position, false, k2);
              });
              L2(this, "afterShowResetZoom");
            };
            a3.prototype.zoomOut = function() {
              L2(this, "selection", { resetSelection: true }, this.zoom);
            };
            a3.prototype.zoom = function(a4) {
              var b2 = this, d2 = b2.pointer, c2 = b2.inverted ? d2.mouseDownX : d2.mouseDownY, e2 = false, g2;
              !a4 || a4.resetSelection ? (b2.axes.forEach(function(a5) {
                g2 = a5.zoom();
              }), d2.initiated = false) : a4.xAxis.concat(a4.yAxis).forEach(function(a5) {
                var f3 = a5.axis, k2 = b2.inverted ? f3.left : f3.top, l2 = b2.inverted ? k2 + f3.width : k2 + f3.height, h2 = f3.isXAxis, I2 = false;
                if (!h2 && c2 >= k2 && c2 <= l2 || h2 || !S(c2))
                  I2 = true;
                d2[h2 ? "zoomX" : "zoomY"] && I2 && (g2 = f3.zoom(a5.min, a5.max), f3.displayBtn && (e2 = true));
              });
              var f2 = b2.resetZoomButton;
              e2 && !f2 ? b2.showResetZoom() : !e2 && N(f2) && (b2.resetZoomButton = f2.destroy());
              g2 && b2.redraw(R(b2.options.chart.animation, a4 && a4.animation, 100 > b2.pointCount));
            };
            a3.prototype.pan = function(a4, b2) {
              var d2 = this, c2 = d2.hoverPoints;
              b2 = typeof b2 === "object" ? b2 : { enabled: b2, type: "x" };
              var e2 = d2.options.chart, g2 = d2.options.mapNavigation && d2.options.mapNavigation.enabled;
              e2 && e2.panning && (e2.panning = b2);
              var f2 = b2.type, k2;
              L2(this, "pan", { originalEvent: a4 }, function() {
                c2 && c2.forEach(function(a5) {
                  a5.setState();
                });
                var b3 = d2.xAxis;
                f2 === "xy" ? b3 = b3.concat(d2.yAxis) : f2 === "y" && (b3 = d2.yAxis);
                var e3 = {};
                b3.forEach(function(b4) {
                  if (b4.options.panningEnabled && !b4.options.isInternal) {
                    var c3 = b4.horiz, l2 = a4[c3 ? "chartX" : "chartY"];
                    c3 = c3 ? "mouseDownX" : "mouseDownY";
                    var h2 = d2[c3], r2 = b4.minPointOffset || 0, p2 = b4.reversed && !d2.inverted || !b4.reversed && d2.inverted ? -1 : 1, m2 = b4.getExtremes(), t2 = b4.toValue(h2 - l2, true) + r2 * p2, n2 = b4.toValue(h2 + b4.len - l2, true) - (r2 * p2 || b4.isXAxis && b4.pointRangePadding || 0), P2 = n2 < t2;
                    p2 = b4.hasVerticalPanning();
                    h2 = P2 ? n2 : t2;
                    t2 = P2 ? t2 : n2;
                    var q2 = b4.panningState;
                    !p2 || b4.isXAxis || q2 && !q2.isDirty || b4.series.forEach(function(a5) {
                      var b5 = a5.getProcessedData(true);
                      b5 = a5.getExtremes(b5.yData, true);
                      q2 || (q2 = {
                        startMin: Number.MAX_VALUE,
                        startMax: -Number.MAX_VALUE
                      });
                      I(b5.dataMin) && I(b5.dataMax) && (q2.startMin = Math.min(R(a5.options.threshold, Infinity), b5.dataMin, q2.startMin), q2.startMax = Math.max(R(a5.options.threshold, -Infinity), b5.dataMax, q2.startMax));
                    });
                    p2 = Math.min(R(q2 && q2.startMin, m2.dataMin), r2 ? m2.min : b4.toValue(b4.toPixels(m2.min) - b4.minPixelPadding));
                    n2 = Math.max(R(q2 && q2.startMax, m2.dataMax), r2 ? m2.max : b4.toValue(b4.toPixels(m2.max) + b4.minPixelPadding));
                    b4.panningState = q2;
                    b4.isOrdinal || (r2 = p2 - h2, 0 < r2 && (t2 += r2, h2 = p2), r2 = t2 - n2, 0 < r2 && (t2 = n2, h2 -= r2), b4.series.length && h2 !== m2.min && t2 !== m2.max && h2 >= p2 && t2 <= n2 && (b4.setExtremes(h2, t2, false, false, { trigger: "pan" }), d2.resetZoomButton || g2 || h2 === p2 || t2 === n2 || !f2.match("y") || (d2.showResetZoom(), b4.displayBtn = false), k2 = true), e3[c3] = l2);
                  }
                });
                T(e3, function(a5, b4) {
                  d2[b4] = a5;
                });
                k2 && d2.redraw(false);
                O(d2.container, { cursor: "move" });
              });
            };
            return a3;
          }();
          z(a2.prototype, {
            callbacks: [],
            collectionsWithInit: { xAxis: [a2.prototype.addAxis, [true]], yAxis: [a2.prototype.addAxis, [false]], series: [a2.prototype.addSeries] },
            collectionsWithUpdate: ["xAxis", "yAxis", "zAxis", "series"],
            propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
            propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
            propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
          });
          "";
          return a2;
        });
        L(a, "Mixins/LegendSymbol.js", [a["Core/Globals.js"], a["Core/Utilities.js"]], function(a2, u) {
          var v = u.merge, H = u.pick;
          return a2.LegendSymbolMixin = { drawRectangle: function(a3, v2) {
            var u2 = a3.symbolHeight, B = a3.options.squareSymbol;
            v2.legendSymbol = this.chart.renderer.rect(B ? (a3.symbolWidth - u2) / 2 : 0, a3.baseline - u2 + 1, B ? u2 : a3.symbolWidth, u2, H(a3.options.symbolRadius, u2 / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(v2.legendGroup);
          }, drawLineMarker: function(a3) {
            var u2 = this.options, x = u2.marker, B = a3.symbolWidth, q = a3.symbolHeight, h = q / 2, f = this.chart.renderer, c = this.legendGroup;
            a3 = a3.baseline - Math.round(0.3 * a3.fontMetrics.b);
            var e = {};
            this.chart.styledMode || (e = { "stroke-width": u2.lineWidth || 0 }, u2.dashStyle && (e.dashstyle = u2.dashStyle));
            this.legendLine = f.path([[
              "M",
              0,
              a3
            ], ["L", B, a3]]).addClass("highcharts-graph").attr(e).add(c);
            x && x.enabled !== false && B && (u2 = Math.min(H(x.radius, h), h), this.symbol.indexOf("url") === 0 && (x = v(x, { width: q, height: q }), u2 = 0), this.legendSymbol = x = f.symbol(this.symbol, B / 2 - u2, a3 - u2, 2 * u2, 2 * u2, x).addClass("highcharts-point").add(c), x.isMarker = true);
          } };
        });
        L(a, "Core/Series/Series.js", [
          a["Core/Animation/AnimationUtilities.js"],
          a["Core/Foundation.js"],
          a["Core/Globals.js"],
          a["Mixins/LegendSymbol.js"],
          a["Core/DefaultOptions.js"],
          a["Core/Color/Palette.js"],
          a["Core/Series/Point.js"],
          a["Core/Series/SeriesRegistry.js"],
          a["Core/Renderer/SVG/SVGElement.js"],
          a["Core/Utilities.js"]
        ], function(a2, u, E, H, x, y, G, B, q, h) {
          var f = a2.animObject, c = a2.setAnimation, e = u.registerEventOptions, t = E.hasTouch, m = E.svg, w = E.win, n = x.defaultOptions, l = B.seriesTypes, v = h.addEvent, K = h.arrayMax, A = h.arrayMin, p = h.clamp, d = h.cleanRecursively, k = h.correctFloat, b = h.defined, g = h.erase, r = h.error, F = h.extend, D = h.find, M = h.fireEvent, C = h.getNestedProperty, O = h.isArray, S = h.isNumber, W = h.isString, Y = h.merge, L2 = h.objectEach, z = h.pick, Q = h.removeEvent, ia = h.splat, aa = h.syncTimeout;
          a2 = function() {
            function a3() {
              this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0;
            }
            a3.prototype.init = function(a4, b2) {
              M(this, "init", { options: b2 });
              var d2 = this, c2 = a4.series;
              this.eventsToUnbind = [];
              d2.chart = a4;
              d2.options = d2.setOptions(b2);
              b2 = d2.options;
              d2.linkedSeries = [];
              d2.bindAxes();
              F(d2, { name: b2.name, state: "", visible: b2.visible !== false, selected: b2.selected === true });
              e(this, b2);
              var g2 = b2.events;
              if (g2 && g2.click || b2.point && b2.point.events && b2.point.events.click || b2.allowPointSelect)
                a4.runTrackerClick = true;
              d2.getColor();
              d2.getSymbol();
              d2.parallelArrays.forEach(function(a5) {
                d2[a5 + "Data"] || (d2[a5 + "Data"] = []);
              });
              d2.isCartesian && (a4.hasCartesianSeries = true);
              var f2;
              c2.length && (f2 = c2[c2.length - 1]);
              d2._i = z(f2 && f2._i, -1) + 1;
              d2.opacity = d2.options.opacity;
              a4.orderSeries(this.insert(c2));
              b2.dataSorting && b2.dataSorting.enabled ? d2.setDataSortingOptions() : d2.points || d2.data || d2.setData(b2.data, false);
              M(this, "afterInit");
            };
            a3.prototype.is = function(a4) {
              return l[a4] && this instanceof l[a4];
            };
            a3.prototype.insert = function(a4) {
              var b2 = this.options.index, d2;
              if (S(b2)) {
                for (d2 = a4.length; d2--; )
                  if (b2 >= z(a4[d2].options.index, a4[d2]._i)) {
                    a4.splice(d2 + 1, 0, this);
                    break;
                  }
                d2 === -1 && a4.unshift(this);
                d2 += 1;
              } else
                a4.push(this);
              return z(d2, a4.length - 1);
            };
            a3.prototype.bindAxes = function() {
              var a4 = this, b2 = a4.options, d2 = a4.chart, c2;
              M(this, "bindAxes", null, function() {
                (a4.axisTypes || []).forEach(function(e2) {
                  var g2 = 0;
                  d2[e2].forEach(function(d3) {
                    c2 = d3.options;
                    if (b2[e2] === g2 && !c2.isInternal || typeof b2[e2] !== "undefined" && b2[e2] === c2.id || typeof b2[e2] === "undefined" && c2.index === 0)
                      a4.insert(d3.series), a4[e2] = d3, d3.isDirty = true;
                    c2.isInternal || g2++;
                  });
                  a4[e2] || a4.optionalAxis === e2 || r(18, true, d2);
                });
              });
              M(this, "afterBindAxes");
            };
            a3.prototype.updateParallelArrays = function(a4, b2) {
              var d2 = a4.series, c2 = arguments, e2 = S(b2) ? function(c3) {
                var e3 = c3 === "y" && d2.toYData ? d2.toYData(a4) : a4[c3];
                d2[c3 + "Data"][b2] = e3;
              } : function(a5) {
                Array.prototype[b2].apply(d2[a5 + "Data"], Array.prototype.slice.call(c2, 2));
              };
              d2.parallelArrays.forEach(e2);
            };
            a3.prototype.hasData = function() {
              return this.visible && typeof this.dataMax !== "undefined" && typeof this.dataMin !== "undefined" || this.visible && this.yData && 0 < this.yData.length;
            };
            a3.prototype.autoIncrement = function() {
              var a4 = this.options, b2 = this.xIncrement, d2, c2 = a4.pointIntervalUnit, e2 = this.chart.time;
              b2 = z(b2, a4.pointStart, 0);
              this.pointInterval = d2 = z(this.pointInterval, a4.pointInterval, 1);
              c2 && (a4 = new e2.Date(b2), c2 === "day" ? e2.set("Date", a4, e2.get("Date", a4) + d2) : c2 === "month" ? e2.set("Month", a4, e2.get("Month", a4) + d2) : c2 === "year" && e2.set("FullYear", a4, e2.get("FullYear", a4) + d2), d2 = a4.getTime() - b2);
              this.xIncrement = b2 + d2;
              return b2;
            };
            a3.prototype.setDataSortingOptions = function() {
              var a4 = this.options;
              F(this, { requireSorting: false, sorted: false, enabledDataSorting: true, allowDG: false });
              b(a4.pointRange) || (a4.pointRange = 1);
            };
            a3.prototype.setOptions = function(a4) {
              var d2 = this.chart, c2 = d2.options, e2 = c2.plotOptions, g2 = d2.userOptions || {};
              a4 = Y(a4);
              d2 = d2.styledMode;
              var f2 = { plotOptions: e2, userOptions: a4 };
              M(this, "setOptions", f2);
              var k2 = f2.plotOptions[this.type], l2 = g2.plotOptions || {};
              this.userOptions = f2.userOptions;
              g2 = Y(k2, e2.series, g2.plotOptions && g2.plotOptions[this.type], a4);
              this.tooltipOptions = Y(n.tooltip, n.plotOptions.series && n.plotOptions.series.tooltip, n.plotOptions[this.type].tooltip, c2.tooltip.userOptions, e2.series && e2.series.tooltip, e2[this.type].tooltip, a4.tooltip);
              this.stickyTracking = z(a4.stickyTracking, l2[this.type] && l2[this.type].stickyTracking, l2.series && l2.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? true : g2.stickyTracking);
              k2.marker === null && delete g2.marker;
              this.zoneAxis = g2.zoneAxis;
              c2 = this.zones = (g2.zones || []).slice();
              !g2.negativeColor && !g2.negativeFillColor || g2.zones || (e2 = { value: g2[this.zoneAxis + "Threshold"] || g2.threshold || 0, className: "highcharts-negative" }, d2 || (e2.color = g2.negativeColor, e2.fillColor = g2.negativeFillColor), c2.push(e2));
              c2.length && b(c2[c2.length - 1].value) && c2.push(d2 ? {} : { color: this.color, fillColor: this.fillColor });
              M(this, "afterSetOptions", { options: g2 });
              return g2;
            };
            a3.prototype.getName = function() {
              return z(this.options.name, "Series " + (this.index + 1));
            };
            a3.prototype.getCyclic = function(a4, d2, c2) {
              var e2 = this.chart, g2 = this.userOptions, f2 = a4 + "Index", k2 = a4 + "Counter", l2 = c2 ? c2.length : z(e2.options.chart[a4 + "Count"], e2[a4 + "Count"]);
              if (!d2) {
                var h2 = z(g2[f2], g2["_" + f2]);
                b(h2) || (e2.series.length || (e2[k2] = 0), g2["_" + f2] = h2 = e2[k2] % l2, e2[k2] += 1);
                c2 && (d2 = c2[h2]);
              }
              typeof h2 !== "undefined" && (this[f2] = h2);
              this[a4] = d2;
            };
            a3.prototype.getColor = function() {
              this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = y.neutralColor20 : this.getCyclic("color", this.options.color || n.plotOptions[this.type].color, this.chart.options.colors);
            };
            a3.prototype.getPointsCollection = function() {
              return (this.hasGroupedData ? this.points : this.data) || [];
            };
            a3.prototype.getSymbol = function() {
              this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
            };
            a3.prototype.findPointIndex = function(a4, b2) {
              var d2 = a4.id, c2 = a4.x, e2 = this.points, g2, f2 = this.options.dataSorting;
              if (d2)
                var k2 = this.chart.get(d2);
              else if (this.linkedParent || this.enabledDataSorting) {
                var l2 = f2 && f2.matchByName ? "name" : "index";
                k2 = D(e2, function(b3) {
                  return !b3.touched && b3[l2] === a4[l2];
                });
                if (!k2)
                  return;
              }
              if (k2) {
                var h2 = k2 && k2.index;
                typeof h2 !== "undefined" && (g2 = true);
              }
              typeof h2 === "undefined" && S(c2) && (h2 = this.xData.indexOf(c2, b2));
              h2 !== -1 && typeof h2 !== "undefined" && this.cropped && (h2 = h2 >= this.cropStart ? h2 - this.cropStart : h2);
              !g2 && e2[h2] && e2[h2].touched && (h2 = void 0);
              return h2;
            };
            a3.prototype.updateData = function(a4, d2) {
              var c2 = this.options, e2 = c2.dataSorting, g2 = this.points, f2 = [], k2, l2, h2, r2 = this.requireSorting, p2 = a4.length === g2.length, m2 = true;
              this.xIncrement = null;
              a4.forEach(function(a5, d3) {
                var l3 = b(a5) && this.pointClass.prototype.optionsToObject.call({ series: this }, a5) || {};
                var m3 = l3.x;
                if (l3.id || S(m3)) {
                  if (m3 = this.findPointIndex(l3, h2), m3 === -1 || typeof m3 === "undefined" ? f2.push(a5) : g2[m3] && a5 !== c2.data[m3] ? (g2[m3].update(a5, false, null, false), g2[m3].touched = true, r2 && (h2 = m3 + 1)) : g2[m3] && (g2[m3].touched = true), !p2 || d3 !== m3 || e2 && e2.enabled || this.hasDerivedData)
                    k2 = true;
                } else
                  f2.push(a5);
              }, this);
              if (k2)
                for (a4 = g2.length; a4--; )
                  (l2 = g2[a4]) && !l2.touched && l2.remove && l2.remove(false, d2);
              else
                !p2 || e2 && e2.enabled ? m2 = false : (a4.forEach(function(a5, b2) {
                  a5 !== g2[b2].y && g2[b2].update && g2[b2].update(a5, false, null, false);
                }), f2.length = 0);
              g2.forEach(function(a5) {
                a5 && (a5.touched = false);
              });
              if (!m2)
                return false;
              f2.forEach(function(a5) {
                this.addPoint(a5, false, null, null, false);
              }, this);
              this.xIncrement === null && this.xData && this.xData.length && (this.xIncrement = K(this.xData), this.autoIncrement());
              return true;
            };
            a3.prototype.setData = function(a4, b2, d2, c2) {
              var e2 = this, g2 = e2.points, f2 = g2 && g2.length || 0, k2, l2 = e2.options, h2 = e2.chart, p2 = l2.dataSorting, m2 = null, t2 = e2.xAxis;
              m2 = l2.turboThreshold;
              var I = this.xData, n2 = this.yData, q2 = (k2 = e2.pointArrayMap) && k2.length, w2 = l2.keys, A2 = 0, v2 = 1, C2;
              a4 = a4 || [];
              k2 = a4.length;
              b2 = z(b2, true);
              p2 && p2.enabled && (a4 = this.sortData(a4));
              c2 !== false && k2 && f2 && !e2.cropped && !e2.hasGroupedData && e2.visible && !e2.isSeriesBoosting && (C2 = this.updateData(a4, d2));
              if (!C2) {
                e2.xIncrement = null;
                e2.colorCounter = 0;
                this.parallelArrays.forEach(function(a5) {
                  e2[a5 + "Data"].length = 0;
                });
                if (m2 && k2 > m2)
                  if (m2 = e2.getFirstValidPoint(a4), S(m2))
                    for (d2 = 0; d2 < k2; d2++)
                      I[d2] = this.autoIncrement(), n2[d2] = a4[d2];
                  else if (O(m2))
                    if (q2)
                      for (d2 = 0; d2 < k2; d2++)
                        c2 = a4[d2], I[d2] = c2[0], n2[d2] = c2.slice(1, q2 + 1);
                    else
                      for (w2 && (A2 = w2.indexOf("x"), v2 = w2.indexOf("y"), A2 = 0 <= A2 ? A2 : 0, v2 = 0 <= v2 ? v2 : 1), d2 = 0; d2 < k2; d2++)
                        c2 = a4[d2], I[d2] = c2[A2], n2[d2] = c2[v2];
                  else
                    r(12, false, h2);
                else
                  for (d2 = 0; d2 < k2; d2++)
                    typeof a4[d2] !== "undefined" && (c2 = { series: e2 }, e2.pointClass.prototype.applyOptions.apply(c2, [a4[d2]]), e2.updateParallelArrays(c2, d2));
                n2 && W(n2[0]) && r(14, true, h2);
                e2.data = [];
                e2.options.data = e2.userOptions.data = a4;
                for (d2 = f2; d2--; )
                  g2[d2] && g2[d2].destroy && g2[d2].destroy();
                t2 && (t2.minRange = t2.userMinRange);
                e2.isDirty = h2.isDirtyBox = true;
                e2.isDirtyData = !!g2;
                d2 = false;
              }
              l2.legendType === "point" && (this.processData(), this.generatePoints());
              b2 && h2.redraw(d2);
            };
            a3.prototype.sortData = function(a4) {
              var d2 = this, c2 = d2.options.dataSorting.sortKey || "y", e2 = function(a5, d3) {
                return b(d3) && a5.pointClass.prototype.optionsToObject.call({ series: a5 }, d3) || {};
              };
              a4.forEach(function(b2, c3) {
                a4[c3] = e2(d2, b2);
                a4[c3].index = c3;
              }, this);
              a4.concat().sort(function(a5, b2) {
                a5 = C(c2, a5);
                b2 = C(c2, b2);
                return b2 < a5 ? -1 : b2 > a5 ? 1 : 0;
              }).forEach(function(a5, b2) {
                a5.x = b2;
              }, this);
              d2.linkedSeries && d2.linkedSeries.forEach(function(b2) {
                var d3 = b2.options, c3 = d3.data;
                d3.dataSorting && d3.dataSorting.enabled || !c3 || (c3.forEach(function(d4, g2) {
                  c3[g2] = e2(b2, d4);
                  a4[g2] && (c3[g2].x = a4[g2].x, c3[g2].index = g2);
                }), b2.setData(c3, false));
              });
              return a4;
            };
            a3.prototype.getProcessedData = function(a4) {
              var b2 = this.xData, d2 = this.yData, c2 = b2.length;
              var e2 = 0;
              var g2 = this.xAxis, f2 = this.options;
              var k2 = f2.cropThreshold;
              var l2 = a4 || this.getExtremesFromAll || f2.getExtremesFromAll, h2 = this.isCartesian;
              a4 = g2 && g2.val2lin;
              f2 = !(!g2 || !g2.logarithmic);
              var m2 = this.requireSorting;
              if (g2) {
                g2 = g2.getExtremes();
                var p2 = g2.min;
                var t2 = g2.max;
              }
              if (h2 && this.sorted && !l2 && (!k2 || c2 > k2 || this.forceCrop)) {
                if (b2[c2 - 1] < p2 || b2[0] > t2)
                  b2 = [], d2 = [];
                else if (this.yData && (b2[0] < p2 || b2[c2 - 1] > t2)) {
                  e2 = this.cropData(this.xData, this.yData, p2, t2);
                  b2 = e2.xData;
                  d2 = e2.yData;
                  e2 = e2.start;
                  var I = true;
                }
              }
              for (k2 = b2.length || 1; --k2; )
                if (c2 = f2 ? a4(b2[k2]) - a4(b2[k2 - 1]) : b2[k2] - b2[k2 - 1], 0 < c2 && (typeof n2 === "undefined" || c2 < n2))
                  var n2 = c2;
                else
                  0 > c2 && m2 && (r(15, false, this.chart), m2 = false);
              return { xData: b2, yData: d2, cropped: I, cropStart: e2, closestPointRange: n2 };
            };
            a3.prototype.processData = function(a4) {
              var b2 = this.xAxis;
              if (this.isCartesian && !this.isDirty && !b2.isDirty && !this.yAxis.isDirty && !a4)
                return false;
              a4 = this.getProcessedData();
              this.cropped = a4.cropped;
              this.cropStart = a4.cropStart;
              this.processedXData = a4.xData;
              this.processedYData = a4.yData;
              this.closestPointRange = this.basePointRange = a4.closestPointRange;
            };
            a3.prototype.cropData = function(a4, b2, d2, c2, e2) {
              var g2 = a4.length, f2 = 0, k2 = g2, l2;
              e2 = z(e2, this.cropShoulder);
              for (l2 = 0; l2 < g2; l2++)
                if (a4[l2] >= d2) {
                  f2 = Math.max(0, l2 - e2);
                  break;
                }
              for (d2 = l2; d2 < g2; d2++)
                if (a4[d2] > c2) {
                  k2 = d2 + e2;
                  break;
                }
              return { xData: a4.slice(f2, k2), yData: b2.slice(f2, k2), start: f2, end: k2 };
            };
            a3.prototype.generatePoints = function() {
              var a4 = this.options, b2 = a4.data, d2 = this.data, c2, e2 = this.processedXData, g2 = this.processedYData, f2 = this.pointClass, k2 = e2.length, l2 = this.cropStart || 0, h2 = this.hasGroupedData, r2 = a4.keys, m2 = [], p2;
              a4 = a4.dataGrouping && a4.dataGrouping.groupAll ? l2 : 0;
              d2 || h2 || (d2 = [], d2.length = b2.length, d2 = this.data = d2);
              r2 && h2 && (this.options.keys = false);
              for (p2 = 0; p2 < k2; p2++) {
                var t2 = l2 + p2;
                if (h2) {
                  var n2 = new f2().init(this, [e2[p2]].concat(ia(g2[p2])));
                  n2.dataGroup = this.groupMap[a4 + p2];
                  n2.dataGroup.options && (n2.options = n2.dataGroup.options, F(n2, n2.dataGroup.options), delete n2.dataLabels);
                } else
                  (n2 = d2[t2]) || typeof b2[t2] === "undefined" || (d2[t2] = n2 = new f2().init(this, b2[t2], e2[p2]));
                n2 && (n2.index = h2 ? a4 + p2 : t2, m2[p2] = n2);
              }
              this.options.keys = r2;
              if (d2 && (k2 !== (c2 = d2.length) || h2))
                for (p2 = 0; p2 < c2; p2++)
                  p2 !== l2 || h2 || (p2 += k2), d2[p2] && (d2[p2].destroyElements(), d2[p2].plotX = void 0);
              this.data = d2;
              this.points = m2;
              M(this, "afterGeneratePoints");
            };
            a3.prototype.getXExtremes = function(a4) {
              return { min: A(a4), max: K(a4) };
            };
            a3.prototype.getExtremes = function(a4, b2) {
              var d2 = this.xAxis, c2 = this.yAxis, e2 = this.processedXData || this.xData, g2 = [], f2 = 0, k2 = 0;
              var l2 = 0;
              var h2 = this.requireSorting ? this.cropShoulder : 0, p2 = c2 ? c2.positiveValuesOnly : false, r2;
              a4 = a4 || this.stackedYData || this.processedYData || [];
              c2 = a4.length;
              d2 && (l2 = d2.getExtremes(), k2 = l2.min, l2 = l2.max);
              for (r2 = 0; r2 < c2; r2++) {
                var m2 = e2[r2];
                var t2 = a4[r2];
                var n2 = (S(t2) || O(t2)) && (t2.length || 0 < t2 || !p2);
                m2 = b2 || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !d2 || (e2[r2 + h2] || m2) >= k2 && (e2[r2 - h2] || m2) <= l2;
                if (n2 && m2)
                  if (n2 = t2.length)
                    for (; n2--; )
                      S(t2[n2]) && (g2[f2++] = t2[n2]);
                  else
                    g2[f2++] = t2;
              }
              a4 = { dataMin: A(g2), dataMax: K(g2) };
              M(this, "afterGetExtremes", { dataExtremes: a4 });
              return a4;
            };
            a3.prototype.applyExtremes = function() {
              var a4 = this.getExtremes();
              this.dataMin = a4.dataMin;
              this.dataMax = a4.dataMax;
              return a4;
            };
            a3.prototype.getFirstValidPoint = function(a4) {
              for (var b2 = null, d2 = a4.length, c2 = 0; b2 === null && c2 < d2; )
                b2 = a4[c2], c2++;
              return b2;
            };
            a3.prototype.translate = function() {
              this.processedXData || this.processData();
              this.generatePoints();
              var a4 = this.options, d2 = a4.stacking, c2 = this.xAxis, e2 = c2.categories, g2 = this.enabledDataSorting, f2 = this.yAxis, l2 = this.points, h2 = l2.length, r2 = !!this.modifyValue, m2, t2 = this.pointPlacementToXValue(), n2 = !!t2, q2 = a4.threshold, w2 = a4.startFromThreshold ? q2 : 0, A2, v2 = this.zoneAxis || "y", C2 = Number.MAX_VALUE;
              for (m2 = 0; m2 < h2; m2++) {
                var u2 = l2[m2], F2 = u2.x, D2 = u2.y, J = u2.low, B2 = d2 && f2.stacking && f2.stacking.stacks[(this.negStacks && D2 < (w2 ? 0 : q2) ? "-" : "") + this.stackKey], x2 = void 0, K2 = void 0;
                if (f2.positiveValuesOnly && !f2.validatePositiveValue(D2) || c2.positiveValuesOnly && !c2.validatePositiveValue(F2))
                  u2.isNull = true;
                u2.plotX = A2 = k(p(c2.translate(F2, 0, 0, 0, 1, t2, this.type === "flags"), -1e5, 1e5));
                if (d2 && this.visible && B2 && B2[F2]) {
                  var y2 = this.getStackIndicator(y2, F2, this.index);
                  u2.isNull || (x2 = B2[F2], K2 = x2.points[y2.key]);
                }
                O(K2) && (J = K2[0], D2 = K2[1], J === w2 && y2.key === B2[F2].base && (J = z(S(q2) && q2, f2.min)), f2.positiveValuesOnly && 0 >= J && (J = null), u2.total = u2.stackTotal = x2.total, u2.percentage = x2.total && u2.y / x2.total * 100, u2.stackY = D2, this.irregularWidths || x2.setOffset(this.pointXOffset || 0, this.barW || 0));
                u2.yBottom = b(J) ? p(f2.translate(J, 0, 1, 0, 1), -1e5, 1e5) : null;
                r2 && (D2 = this.modifyValue(D2, u2));
                u2.plotY = void 0;
                S(D2) && (D2 = f2.translate(D2, false, true, false, true), typeof D2 !== "undefined" && (u2.plotY = p(D2, -1e5, 1e5)));
                u2.isInside = this.isPointInside(u2);
                u2.clientX = n2 ? k(c2.translate(F2, 0, 0, 0, 1, t2)) : A2;
                u2.negative = u2[v2] < (a4[v2 + "Threshold"] || q2 || 0);
                u2.category = e2 && typeof e2[u2.x] !== "undefined" ? e2[u2.x] : u2.x;
                if (!u2.isNull && u2.visible !== false) {
                  typeof E2 !== "undefined" && (C2 = Math.min(C2, Math.abs(A2 - E2)));
                  var E2 = A2;
                }
                u2.zone = this.zones.length && u2.getZone();
                !u2.graphic && this.group && g2 && (u2.isNew = true);
              }
              this.closestPointRangePx = C2;
              M(this, "afterTranslate");
            };
            a3.prototype.getValidPoints = function(a4, b2, d2) {
              var c2 = this.chart;
              return (a4 || this.points || []).filter(function(a5) {
                return b2 && !c2.isInsidePlot(a5.plotX, a5.plotY, { inverted: c2.inverted }) ? false : a5.visible !== false && (d2 || !a5.isNull);
              });
            };
            a3.prototype.getClipBox = function(a4, b2) {
              var d2 = this.options, c2 = this.chart, e2 = c2.inverted, g2 = this.xAxis, f2 = g2 && this.yAxis, k2 = c2.options.chart.scrollablePlotArea || {};
              a4 && d2.clip === false && f2 ? a4 = e2 ? { y: -c2.chartWidth + f2.len + f2.pos, height: c2.chartWidth, width: c2.chartHeight, x: -c2.chartHeight + g2.len + g2.pos } : {
                y: -f2.pos,
                height: c2.chartHeight,
                width: c2.chartWidth,
                x: -g2.pos
              } : (a4 = this.clipBox || c2.clipBox, b2 && (a4.width = c2.plotSizeX, a4.x = (c2.scrollablePixelsX || 0) * (k2.scrollPositionX || 0)));
              return b2 ? { width: a4.width, x: a4.x } : a4;
            };
            a3.prototype.getSharedClipKey = function(a4) {
              if (this.sharedClipKey)
                return this.sharedClipKey;
              var b2 = [a4 && a4.duration, a4 && a4.easing, a4 && a4.defer, this.getClipBox(a4).height, this.options.xAxis, this.options.yAxis].join();
              if (this.options.clip !== false || a4)
                this.sharedClipKey = b2;
              return b2;
            };
            a3.prototype.setClip = function(a4) {
              var b2 = this.chart, d2 = this.options, c2 = b2.renderer, e2 = b2.inverted, g2 = this.clipBox, f2 = this.getClipBox(a4), k2 = this.getSharedClipKey(a4), l2 = b2.sharedClips[k2], h2 = b2.sharedClips[k2 + "m"];
              a4 && (f2.width = 0, e2 && (f2.x = b2.plotHeight + (d2.clip !== false ? 0 : b2.plotTop)));
              l2 ? b2.hasLoaded || l2.attr(f2) : (a4 && (b2.sharedClips[k2 + "m"] = h2 = c2.clipRect(e2 ? (b2.plotSizeX || 0) + 99 : -99, e2 ? -b2.plotLeft : -b2.plotTop, 99, e2 ? b2.chartWidth : b2.chartHeight)), b2.sharedClips[k2] = l2 = c2.clipRect(f2), l2.count = { length: 0 });
              a4 && !l2.count[this.index] && (l2.count[this.index] = true, l2.count.length += 1);
              if (d2.clip !== false || a4)
                this.group.clip(a4 || g2 ? l2 : b2.clipRect), this.markerGroup.clip(h2);
              a4 || (l2.count[this.index] && (delete l2.count[this.index], --l2.count.length), l2.count.length === 0 && (g2 || (b2.sharedClips[k2] = l2.destroy()), h2 && (b2.sharedClips[k2 + "m"] = h2.destroy())));
            };
            a3.prototype.animate = function(a4) {
              var b2 = this.chart, d2 = f(this.options.animation), c2 = this.sharedClipKey;
              if (a4)
                this.setClip(d2);
              else if (c2) {
                a4 = b2.sharedClips[c2];
                c2 = b2.sharedClips[c2 + "m"];
                var e2 = this.getClipBox(d2, true);
                a4 && a4.animate(e2, d2);
                c2 && c2.animate({ width: e2.width + 99, x: e2.x - (b2.inverted ? 0 : 99) }, d2);
              }
            };
            a3.prototype.afterAnimate = function() {
              this.setClip();
              M(this, "afterAnimate");
              this.finishedAnimating = true;
            };
            a3.prototype.drawPoints = function() {
              var a4 = this.points, b2 = this.chart, d2, c2, e2 = this.options.marker, g2 = this[this.specialGroup] || this.markerGroup, f2 = this.xAxis, k2 = z(e2.enabled, !f2 || f2.isRadial ? true : null, this.closestPointRangePx >= e2.enabledThreshold * e2.radius);
              if (e2.enabled !== false || this._hasPointMarkers)
                for (d2 = 0; d2 < a4.length; d2++) {
                  var l2 = a4[d2];
                  var h2 = (c2 = l2.graphic) ? "animate" : "attr";
                  var p2 = l2.marker || {};
                  var r2 = !!l2.marker;
                  if ((k2 && typeof p2.enabled === "undefined" || p2.enabled) && !l2.isNull && l2.visible !== false) {
                    var m2 = z(p2.symbol, this.symbol, "rect");
                    var t2 = this.markerAttribs(l2, l2.selected && "select");
                    this.enabledDataSorting && (l2.startXPos = f2.reversed ? -(t2.width || 0) : f2.width);
                    var n2 = l2.isInside !== false;
                    c2 ? c2[n2 ? "show" : "hide"](n2).animate(t2) : n2 && (0 < (t2.width || 0) || l2.hasImage) && (l2.graphic = c2 = b2.renderer.symbol(m2, t2.x, t2.y, t2.width, t2.height, r2 ? p2 : e2).add(g2), this.enabledDataSorting && b2.hasRendered && (c2.attr({ x: l2.startXPos }), h2 = "animate"));
                    c2 && h2 === "animate" && c2[n2 ? "show" : "hide"](n2).animate(t2);
                    if (c2 && !b2.styledMode)
                      c2[h2](this.pointAttribs(l2, l2.selected && "select"));
                    c2 && c2.addClass(l2.getClassName(), true);
                  } else
                    c2 && (l2.graphic = c2.destroy());
                }
            };
            a3.prototype.markerAttribs = function(a4, b2) {
              var d2 = this.options, c2 = d2.marker, e2 = a4.marker || {}, g2 = e2.symbol || c2.symbol, f2 = z(e2.radius, c2.radius);
              b2 && (c2 = c2.states[b2], b2 = e2.states && e2.states[b2], f2 = z(b2 && b2.radius, c2 && c2.radius, f2 + (c2 && c2.radiusPlus || 0)));
              a4.hasImage = g2 && g2.indexOf("url") === 0;
              a4.hasImage && (f2 = 0);
              a4 = { x: d2.crisp ? Math.floor(a4.plotX - f2) : a4.plotX - f2, y: a4.plotY - f2 };
              f2 && (a4.width = a4.height = 2 * f2);
              return a4;
            };
            a3.prototype.pointAttribs = function(a4, b2) {
              var d2 = this.options.marker, c2 = a4 && a4.options, e2 = c2 && c2.marker || {}, g2 = this.color, f2 = c2 && c2.color, k2 = a4 && a4.color;
              c2 = z(e2.lineWidth, d2.lineWidth);
              var l2 = a4 && a4.zone && a4.zone.color;
              a4 = 1;
              g2 = f2 || l2 || k2 || g2;
              f2 = e2.fillColor || d2.fillColor || g2;
              g2 = e2.lineColor || d2.lineColor || g2;
              b2 = b2 || "normal";
              d2 = d2.states[b2];
              b2 = e2.states && e2.states[b2] || {};
              c2 = z(b2.lineWidth, d2.lineWidth, c2 + z(b2.lineWidthPlus, d2.lineWidthPlus, 0));
              f2 = b2.fillColor || d2.fillColor || f2;
              g2 = b2.lineColor || d2.lineColor || g2;
              a4 = z(b2.opacity, d2.opacity, a4);
              return { stroke: g2, "stroke-width": c2, fill: f2, opacity: a4 };
            };
            a3.prototype.destroy = function(a4) {
              var b2 = this, d2 = b2.chart, c2 = /AppleWebKit\/533/.test(w.navigator.userAgent), e2, f2, k2 = b2.data || [], l2, p2;
              M(b2, "destroy");
              this.removeEvents(a4);
              (b2.axisTypes || []).forEach(function(a5) {
                (p2 = b2[a5]) && p2.series && (g(p2.series, b2), p2.isDirty = p2.forceRedraw = true);
              });
              b2.legendItem && b2.chart.legend.destroyItem(b2);
              for (f2 = k2.length; f2--; )
                (l2 = k2[f2]) && l2.destroy && l2.destroy();
              b2.clips && b2.clips.forEach(function(a5) {
                return a5.destroy();
              });
              h.clearTimeout(b2.animationTimeout);
              L2(b2, function(a5, b3) {
                a5 instanceof q && !a5.survive && (e2 = c2 && b3 === "group" ? "hide" : "destroy", a5[e2]());
              });
              d2.hoverSeries === b2 && (d2.hoverSeries = void 0);
              g(d2.series, b2);
              d2.orderSeries();
              L2(b2, function(d3, c3) {
                a4 && c3 === "hcEvents" || delete b2[c3];
              });
            };
            a3.prototype.applyZones = function() {
              var a4 = this, b2 = this.chart, d2 = b2.renderer, c2 = this.zones, e2, g2, f2 = this.clips || [], k2, l2 = this.graph, h2 = this.area, r2 = Math.max(b2.chartWidth, b2.chartHeight), m2 = this[(this.zoneAxis || "y") + "Axis"], t2 = b2.inverted, n2, q2, w2, A2 = false, v2, u2;
              if (c2.length && (l2 || h2) && m2 && typeof m2.min !== "undefined") {
                var C2 = m2.reversed;
                var F2 = m2.horiz;
                l2 && !this.showLine && l2.hide();
                h2 && h2.hide();
                var D2 = m2.getExtremes();
                c2.forEach(function(c3, I) {
                  e2 = C2 ? F2 ? b2.plotWidth : 0 : F2 ? 0 : m2.toPixels(D2.min) || 0;
                  e2 = p(z(g2, e2), 0, r2);
                  g2 = p(Math.round(m2.toPixels(z(c3.value, D2.max), true) || 0), 0, r2);
                  A2 && (e2 = g2 = m2.toPixels(D2.max));
                  n2 = Math.abs(e2 - g2);
                  q2 = Math.min(e2, g2);
                  w2 = Math.max(e2, g2);
                  m2.isXAxis ? (k2 = { x: t2 ? w2 : q2, y: 0, width: n2, height: r2 }, F2 || (k2.x = b2.plotHeight - k2.x)) : (k2 = { x: 0, y: t2 ? w2 : q2, width: r2, height: n2 }, F2 && (k2.y = b2.plotWidth - k2.y));
                  t2 && d2.isVML && (k2 = m2.isXAxis ? { x: 0, y: C2 ? q2 : w2, height: k2.width, width: b2.chartWidth } : { x: k2.y - b2.plotLeft - b2.spacingBox.x, y: 0, width: k2.height, height: b2.chartHeight });
                  f2[I] ? f2[I].animate(k2) : f2[I] = d2.clipRect(k2);
                  v2 = a4["zone-area-" + I];
                  u2 = a4["zone-graph-" + I];
                  l2 && u2 && u2.clip(f2[I]);
                  h2 && v2 && v2.clip(f2[I]);
                  A2 = c3.value > D2.max;
                  a4.resetZones && g2 === 0 && (g2 = void 0);
                });
                this.clips = f2;
              } else
                a4.visible && (l2 && l2.show(true), h2 && h2.show(true));
            };
            a3.prototype.invertGroups = function(a4) {
              function b2() {
                ["group", "markerGroup"].forEach(function(b3) {
                  d2[b3] && (c2.renderer.isVML && d2[b3].attr({ width: d2.yAxis.len, height: d2.xAxis.len }), d2[b3].width = d2.yAxis.len, d2[b3].height = d2.xAxis.len, d2[b3].invert(d2.isRadialSeries ? false : a4));
                });
              }
              var d2 = this, c2 = d2.chart;
              d2.xAxis && (d2.eventsToUnbind.push(v(c2, "resize", b2)), b2(), d2.invertGroups = b2);
            };
            a3.prototype.plotGroup = function(a4, d2, c2, e2, g2) {
              var f2 = this[a4], k2 = !f2;
              c2 = { visibility: c2, zIndex: e2 || 0.1 };
              typeof this.opacity === "undefined" || this.chart.styledMode || this.state === "inactive" || (c2.opacity = this.opacity);
              k2 && (this[a4] = f2 = this.chart.renderer.g().add(g2));
              f2.addClass("highcharts-" + d2 + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (b(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (f2.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), true);
              f2.attr(c2)[k2 ? "attr" : "animate"](this.getPlotBox());
              return f2;
            };
            a3.prototype.getPlotBox = function() {
              var a4 = this.chart, b2 = this.xAxis, d2 = this.yAxis;
              a4.inverted && (b2 = d2, d2 = this.xAxis);
              return { translateX: b2 ? b2.left : a4.plotLeft, translateY: d2 ? d2.top : a4.plotTop, scaleX: 1, scaleY: 1 };
            };
            a3.prototype.removeEvents = function(a4) {
              a4 || Q(this);
              this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function(a5) {
                a5();
              }), this.eventsToUnbind.length = 0);
            };
            a3.prototype.render = function() {
              var a4 = this, b2 = a4.chart, d2 = a4.options, c2 = f(d2.animation), e2 = !a4.finishedAnimating && b2.renderer.isSVG && c2.duration, g2 = a4.visible ? "inherit" : "hidden", k2 = d2.zIndex, l2 = a4.hasRendered, h2 = b2.seriesGroup, p2 = b2.inverted;
              M(this, "render");
              var m2 = a4.plotGroup("group", "series", g2, k2, h2);
              a4.markerGroup = a4.plotGroup("markerGroup", "markers", g2, k2, h2);
              e2 && a4.animate && a4.animate(true);
              m2.inverted = z(a4.invertible, a4.isCartesian) ? p2 : false;
              a4.drawGraph && (a4.drawGraph(), a4.applyZones());
              a4.visible && a4.drawPoints();
              a4.drawDataLabels && a4.drawDataLabels();
              a4.redrawPoints && a4.redrawPoints();
              a4.drawTracker && a4.options.enableMouseTracking !== false && a4.drawTracker();
              a4.invertGroups(p2);
              d2.clip === false || a4.sharedClipKey || l2 || m2.clip(b2.clipRect);
              e2 && a4.animate && a4.animate();
              l2 || (e2 && c2.defer && (e2 += c2.defer), a4.animationTimeout = aa(function() {
                a4.afterAnimate();
              }, e2 || 0));
              a4.isDirty = false;
              a4.hasRendered = true;
              M(a4, "afterRender");
            };
            a3.prototype.redraw = function() {
              var a4 = this.chart, b2 = this.isDirty || this.isDirtyData, d2 = this.group, c2 = this.xAxis, e2 = this.yAxis;
              d2 && (a4.inverted && d2.attr({ width: a4.plotWidth, height: a4.plotHeight }), d2.animate({ translateX: z(c2 && c2.left, a4.plotLeft), translateY: z(e2 && e2.top, a4.plotTop) }));
              this.translate();
              this.render();
              b2 && delete this.kdTree;
            };
            a3.prototype.searchPoint = function(a4, b2) {
              var d2 = this.xAxis, c2 = this.yAxis, e2 = this.chart.inverted;
              return this.searchKDTree({ clientX: e2 ? d2.len - a4.chartY + d2.pos : a4.chartX - d2.pos, plotY: e2 ? c2.len - a4.chartX + c2.pos : a4.chartY - c2.pos }, b2, a4);
            };
            a3.prototype.buildKDTree = function(a4) {
              function b2(a5, c3, e2) {
                var g2;
                if (g2 = a5 && a5.length) {
                  var f2 = d2.kdAxisArray[c3 % e2];
                  a5.sort(function(a6, b3) {
                    return a6[f2] - b3[f2];
                  });
                  g2 = Math.floor(g2 / 2);
                  return { point: a5[g2], left: b2(a5.slice(0, g2), c3 + 1, e2), right: b2(a5.slice(g2 + 1), c3 + 1, e2) };
                }
              }
              this.buildingKdTree = true;
              var d2 = this, c2 = -1 < d2.options.findNearestPointBy.indexOf("y") ? 2 : 1;
              delete d2.kdTree;
              aa(function() {
                d2.kdTree = b2(d2.getValidPoints(null, !d2.directTouch), c2, c2);
                d2.buildingKdTree = false;
              }, d2.options.kdNow || a4 && a4.type === "touchstart" ? 0 : 1);
            };
            a3.prototype.searchKDTree = function(a4, d2, c2) {
              function e2(a5, d3, c3, h2) {
                var p2 = d3.point, m2 = g2.kdAxisArray[c3 % h2], r2 = p2;
                var t2 = b(a5[f2]) && b(p2[f2]) ? Math.pow(a5[f2] - p2[f2], 2) : null;
                var n2 = b(a5[k2]) && b(p2[k2]) ? Math.pow(a5[k2] - p2[k2], 2) : null;
                n2 = (t2 || 0) + (n2 || 0);
                p2.dist = b(n2) ? Math.sqrt(n2) : Number.MAX_VALUE;
                p2.distX = b(t2) ? Math.sqrt(t2) : Number.MAX_VALUE;
                m2 = a5[m2] - p2[m2];
                n2 = 0 > m2 ? "left" : "right";
                t2 = 0 > m2 ? "right" : "left";
                d3[n2] && (n2 = e2(a5, d3[n2], c3 + 1, h2), r2 = n2[l2] < r2[l2] ? n2 : p2);
                d3[t2] && Math.sqrt(m2 * m2) < r2[l2] && (a5 = e2(a5, d3[t2], c3 + 1, h2), r2 = a5[l2] < r2[l2] ? a5 : r2);
                return r2;
              }
              var g2 = this, f2 = this.kdAxisArray[0], k2 = this.kdAxisArray[1], l2 = d2 ? "distX" : "dist";
              d2 = -1 < g2.options.findNearestPointBy.indexOf("y") ? 2 : 1;
              this.kdTree || this.buildingKdTree || this.buildKDTree(c2);
              if (this.kdTree)
                return e2(a4, this.kdTree, d2, d2);
            };
            a3.prototype.pointPlacementToXValue = function() {
              var a4 = this.options, b2 = a4.pointRange, d2 = this.xAxis;
              a4 = a4.pointPlacement;
              a4 === "between" && (a4 = d2.reversed ? -0.5 : 0.5);
              return S(a4) ? a4 * (b2 || d2.pointRange) : 0;
            };
            a3.prototype.isPointInside = function(a4) {
              return typeof a4.plotY !== "undefined" && typeof a4.plotX !== "undefined" && 0 <= a4.plotY && a4.plotY <= this.yAxis.len && 0 <= a4.plotX && a4.plotX <= this.xAxis.len;
            };
            a3.prototype.drawTracker = function() {
              var a4 = this, b2 = a4.options, d2 = b2.trackByArea, c2 = [].concat(d2 ? a4.areaPath : a4.graphPath), e2 = a4.chart, g2 = e2.pointer, f2 = e2.renderer, k2 = e2.options.tooltip.snap, l2 = a4.tracker, h2 = function(b3) {
                if (e2.hoverSeries !== a4)
                  a4.onMouseOver();
              }, p2 = "rgba(192,192,192," + (m ? 1e-4 : 2e-3) + ")";
              l2 ? l2.attr({ d: c2 }) : a4.graph && (a4.tracker = f2.path(c2).attr({ visibility: a4.visible ? "visible" : "hidden", zIndex: 2 }).addClass(d2 ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a4.group), e2.styledMode || a4.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: p2, fill: d2 ? p2 : "none", "stroke-width": a4.graph.strokeWidth() + (d2 ? 0 : 2 * k2) }), [a4.tracker, a4.markerGroup, a4.dataLabelsGroup].forEach(function(a5) {
                if (a5 && (a5.addClass("highcharts-tracker").on("mouseover", h2).on("mouseout", function(a6) {
                  g2.onTrackerMouseOut(a6);
                }), b2.cursor && !e2.styledMode && a5.css({ cursor: b2.cursor }), t))
                  a5.on("touchstart", h2);
              }));
              M(this, "afterDrawTracker");
            };
            a3.prototype.addPoint = function(a4, b2, d2, c2, e2) {
              var g2 = this.options, f2 = this.data, k2 = this.chart, l2 = this.xAxis;
              l2 = l2 && l2.hasNames && l2.names;
              var h2 = g2.data, p2 = this.xData, m2;
              b2 = z(b2, true);
              var r2 = { series: this };
              this.pointClass.prototype.applyOptions.apply(r2, [a4]);
              var t2 = r2.x;
              var n2 = p2.length;
              if (this.requireSorting && t2 < p2[n2 - 1])
                for (m2 = true; n2 && p2[n2 - 1] > t2; )
                  n2--;
              this.updateParallelArrays(r2, "splice", n2, 0, 0);
              this.updateParallelArrays(r2, n2);
              l2 && r2.name && (l2[t2] = r2.name);
              h2.splice(n2, 0, a4);
              m2 && (this.data.splice(n2, 0, null), this.processData());
              g2.legendType === "point" && this.generatePoints();
              d2 && (f2[0] && f2[0].remove ? f2[0].remove(false) : (f2.shift(), this.updateParallelArrays(r2, "shift"), h2.shift()));
              e2 !== false && M(this, "addPoint", { point: r2 });
              this.isDirtyData = this.isDirty = true;
              b2 && k2.redraw(c2);
            };
            a3.prototype.removePoint = function(a4, b2, d2) {
              var e2 = this, g2 = e2.data, f2 = g2[a4], k2 = e2.points, l2 = e2.chart, h2 = function() {
                k2 && k2.length === g2.length && k2.splice(a4, 1);
                g2.splice(a4, 1);
                e2.options.data.splice(a4, 1);
                e2.updateParallelArrays(f2 || { series: e2 }, "splice", a4, 1);
                f2 && f2.destroy();
                e2.isDirty = true;
                e2.isDirtyData = true;
                b2 && l2.redraw();
              };
              c(d2, l2);
              b2 = z(b2, true);
              f2 ? f2.firePointEvent("remove", null, h2) : h2();
            };
            a3.prototype.remove = function(a4, b2, d2, c2) {
              function e2() {
                g2.destroy(c2);
                f2.isDirtyLegend = f2.isDirtyBox = true;
                f2.linkSeries();
                z(a4, true) && f2.redraw(b2);
              }
              var g2 = this, f2 = g2.chart;
              d2 !== false ? M(g2, "remove", null, e2) : e2();
            };
            a3.prototype.update = function(a4, b2) {
              a4 = d(a4, this.userOptions);
              M(this, "update", { options: a4 });
              var c2 = this, e2 = c2.chart, g2 = c2.userOptions, f2 = c2.initialType || c2.type, k2 = e2.options.plotOptions, h2 = a4.type || g2.type || e2.options.chart.type, p2 = !(this.hasDerivedData || h2 && h2 !== this.type || typeof a4.pointStart !== "undefined" || typeof a4.pointInterval !== "undefined" || c2.hasOptionChanged("dataGrouping") || c2.hasOptionChanged("pointStart") || c2.hasOptionChanged("pointInterval") || c2.hasOptionChanged("pointIntervalUnit") || c2.hasOptionChanged("keys")), m2 = l[f2].prototype, t2, n2 = ["eventOptions", "navigatorSeries", "baseSeries"], q2 = c2.finishedAnimating && { animation: false }, w2 = {};
              h2 = h2 || f2;
              p2 && (n2.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), a4.visible !== false && n2.push("area", "graph"), c2.parallelArrays.forEach(function(a5) {
                n2.push(a5 + "Data");
              }), a4.data && (a4.dataSorting && F(c2.options.dataSorting, a4.dataSorting), this.setData(a4.data, false)));
              a4 = Y(g2, q2, {
                index: typeof g2.index === "undefined" ? c2.index : g2.index,
                pointStart: z(k2 && k2.series && k2.series.pointStart, g2.pointStart, c2.xData[0])
              }, !p2 && { data: c2.options.data }, a4);
              p2 && a4.data && (a4.data = c2.options.data);
              n2 = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(n2);
              n2.forEach(function(a5) {
                n2[a5] = c2[a5];
                delete c2[a5];
              });
              g2 = false;
              if (l[h2]) {
                if (g2 = h2 !== c2.type, c2.remove(false, false, false, true), g2)
                  if (Object.setPrototypeOf)
                    Object.setPrototypeOf(c2, l[h2].prototype);
                  else {
                    k2 = Object.hasOwnProperty.call(c2, "hcEvents") && c2.hcEvents;
                    for (t2 in m2)
                      c2[t2] = void 0;
                    F(c2, l[h2].prototype);
                    k2 ? c2.hcEvents = k2 : delete c2.hcEvents;
                  }
              } else
                r(17, true, e2, { missingModuleFor: h2 });
              n2.forEach(function(a5) {
                c2[a5] = n2[a5];
              });
              c2.init(e2, a4);
              if (p2 && this.points) {
                var A2 = c2.options;
                A2.visible === false ? (w2.graphic = 1, w2.dataLabel = 1) : c2._hasPointLabels || (a4 = A2.marker, h2 = A2.dataLabels, a4 && (a4.enabled === false || "symbol" in a4) && (w2.graphic = 1), h2 && h2.enabled === false && (w2.dataLabel = 1));
                this.points.forEach(function(a5) {
                  a5 && a5.series && (a5.resolveColor(), Object.keys(w2).length && a5.destroyElements(w2), A2.showInLegend === false && a5.legendItem && e2.legend.destroyItem(a5));
                }, this);
              }
              c2.initialType = f2;
              e2.linkSeries();
              g2 && c2.linkedSeries.length && (c2.isDirtyData = true);
              M(this, "afterUpdate");
              z(b2, true) && e2.redraw(p2 ? void 0 : false);
            };
            a3.prototype.setName = function(a4) {
              this.name = this.options.name = this.userOptions.name = a4;
              this.chart.isDirtyLegend = true;
            };
            a3.prototype.hasOptionChanged = function(a4) {
              var b2 = this.options[a4], d2 = this.chart.options.plotOptions, c2 = this.userOptions[a4];
              return c2 ? b2 !== c2 : b2 !== z(d2 && d2[this.type] && d2[this.type][a4], d2 && d2.series && d2.series[a4], b2);
            };
            a3.prototype.onMouseOver = function() {
              var a4 = this.chart, b2 = a4.hoverSeries;
              a4.pointer.setHoverChartIndex();
              if (b2 && b2 !== this)
                b2.onMouseOut();
              this.options.events.mouseOver && M(this, "mouseOver");
              this.setState("hover");
              a4.hoverSeries = this;
            };
            a3.prototype.onMouseOut = function() {
              var a4 = this.options, b2 = this.chart, d2 = b2.tooltip, c2 = b2.hoverPoint;
              b2.hoverSeries = null;
              if (c2)
                c2.onMouseOut();
              this && a4.events.mouseOut && M(this, "mouseOut");
              !d2 || this.stickyTracking || d2.shared && !this.noSharedTooltip || d2.hide();
              b2.series.forEach(function(a5) {
                a5.setState("", true);
              });
            };
            a3.prototype.setState = function(a4, b2) {
              var d2 = this, c2 = d2.options, e2 = d2.graph, g2 = c2.inactiveOtherPoints, f2 = c2.states, k2 = c2.lineWidth, l2 = c2.opacity, h2 = z(f2[a4 || "normal"] && f2[a4 || "normal"].animation, d2.chart.options.chart.animation);
              c2 = 0;
              a4 = a4 || "";
              if (d2.state !== a4 && ([d2.group, d2.markerGroup, d2.dataLabelsGroup].forEach(function(b3) {
                b3 && (d2.state && b3.removeClass("highcharts-series-" + d2.state), a4 && b3.addClass("highcharts-series-" + a4));
              }), d2.state = a4, !d2.chart.styledMode)) {
                if (f2[a4] && f2[a4].enabled === false)
                  return;
                a4 && (k2 = f2[a4].lineWidth || k2 + (f2[a4].lineWidthPlus || 0), l2 = z(f2[a4].opacity, l2));
                if (e2 && !e2.dashstyle)
                  for (f2 = { "stroke-width": k2 }, e2.animate(f2, h2); d2["zone-graph-" + c2]; )
                    d2["zone-graph-" + c2].animate(f2, h2), c2 += 1;
                g2 || [d2.group, d2.markerGroup, d2.dataLabelsGroup, d2.labelBySeries].forEach(function(a5) {
                  a5 && a5.animate({ opacity: l2 }, h2);
                });
              }
              b2 && g2 && d2.points && d2.setAllPointsToState(a4 || void 0);
            };
            a3.prototype.setAllPointsToState = function(a4) {
              this.points.forEach(function(b2) {
                b2.setState && b2.setState(a4);
              });
            };
            a3.prototype.setVisible = function(a4, b2) {
              var d2 = this, c2 = d2.chart, e2 = d2.legendItem, g2 = c2.options.chart.ignoreHiddenSeries, f2 = d2.visible;
              var k2 = (d2.visible = a4 = d2.options.visible = d2.userOptions.visible = typeof a4 === "undefined" ? !f2 : a4) ? "show" : "hide";
              ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function(a5) {
                if (d2[a5])
                  d2[a5][k2]();
              });
              if (c2.hoverSeries === d2 || (c2.hoverPoint && c2.hoverPoint.series) === d2)
                d2.onMouseOut();
              e2 && c2.legend.colorizeItem(d2, a4);
              d2.isDirty = true;
              d2.options.stacking && c2.series.forEach(function(a5) {
                a5.options.stacking && a5.visible && (a5.isDirty = true);
              });
              d2.linkedSeries.forEach(function(b3) {
                b3.setVisible(a4, false);
              });
              g2 && (c2.isDirtyBox = true);
              M(d2, k2);
              b2 !== false && c2.redraw();
            };
            a3.prototype.show = function() {
              this.setVisible(true);
            };
            a3.prototype.hide = function() {
              this.setVisible(false);
            };
            a3.prototype.select = function(a4) {
              this.selected = a4 = this.options.selected = typeof a4 === "undefined" ? !this.selected : a4;
              this.checkbox && (this.checkbox.checked = a4);
              M(this, a4 ? "select" : "unselect");
            };
            a3.prototype.shouldShowTooltip = function(a4, b2, d2) {
              d2 === void 0 && (d2 = {});
              d2.series = this;
              d2.visiblePlotOnly = true;
              return this.chart.isInsidePlot(a4, b2, d2);
            };
            a3.defaultOptions = {
              lineWidth: 2,
              allowPointSelect: false,
              crisp: true,
              showCheckbox: false,
              animation: { duration: 1e3 },
              events: {},
              marker: {
                enabledThreshold: 2,
                lineColor: y.backgroundColor,
                lineWidth: 0,
                radius: 4,
                states: { normal: { animation: true }, hover: { animation: { duration: 50 }, enabled: true, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: y.neutralColor20, lineColor: y.neutralColor100, lineWidth: 2 } }
              },
              point: { events: {} },
              dataLabels: { animation: {}, align: "center", defer: true, formatter: function() {
                var a4 = this.series.chart.numberFormatter;
                return typeof this.y !== "number" ? "" : a4(this.y, -1);
              }, padding: 5, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 },
              cropThreshold: 300,
              opacity: 1,
              pointRange: 0,
              softThreshold: true,
              states: { normal: { animation: true }, hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: 0.25 } }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 50 }, opacity: 0.2 } },
              stickyTracking: true,
              turboThreshold: 1e3,
              findNearestPointBy: "x"
            };
            return a3;
          }();
          F(a2.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, cropShoulder: 1, directTouch: false, drawLegendSymbol: H.drawLineMarker, isCartesian: true, kdAxisArray: ["clientX", "plotY"], parallelArrays: [
            "x",
            "y"
          ], pointClass: G, requireSorting: true, sorted: true });
          B.series = a2;
          "";
          "";
          return a2;
        });
        L(a, "Extensions/ScrollablePlotArea.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Axis/Axis.js"], a["Core/Chart/Chart.js"], a["Core/Series/Series.js"], a["Core/Renderer/RendererRegistry.js"], a["Core/Utilities.js"]], function(a2, u, E, H, x, y) {
          var v = a2.stop, B = y.addEvent, q = y.createElement, h = y.merge, f = y.pick;
          B(E, "afterSetChartSize", function(a3) {
            var c = this.options.chart.scrollablePlotArea, f2 = c && c.minWidth;
            c = c && c.minHeight;
            if (!this.renderer.forExport) {
              if (f2) {
                if (this.scrollablePixelsX = f2 = Math.max(0, f2 - this.chartWidth)) {
                  this.scrollablePlotBox = this.renderer.scrollablePlotBox = h(this.plotBox);
                  this.plotBox.width = this.plotWidth += f2;
                  this.inverted ? this.clipBox.height += f2 : this.clipBox.width += f2;
                  var m = { 1: { name: "right", value: f2 } };
                }
              } else
                c && (this.scrollablePixelsY = f2 = Math.max(0, c - this.chartHeight)) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = h(this.plotBox), this.plotBox.height = this.plotHeight += f2, this.inverted ? this.clipBox.width += f2 : this.clipBox.height += f2, m = { 2: { name: "bottom", value: f2 } });
              m && !a3.skipAxes && this.axes.forEach(function(a4) {
                m[a4.side] ? a4.getPlotLinePath = function() {
                  var c2 = m[a4.side].name, e = this[c2];
                  this[c2] = e - m[a4.side].value;
                  var f3 = u.prototype.getPlotLinePath.apply(this, arguments);
                  this[c2] = e;
                  return f3;
                } : (a4.setAxisSize(), a4.setAxisTranslation());
              });
            }
          });
          B(E, "render", function() {
            this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
          });
          E.prototype.setUpScrolling = function() {
            var a3 = this, e = {
              WebkitOverflowScrolling: "touch",
              overflowX: "hidden",
              overflowY: "hidden"
            };
            this.scrollablePixelsX && (e.overflowX = "auto");
            this.scrollablePixelsY && (e.overflowY = "auto");
            this.scrollingParent = q("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo);
            this.scrollingContainer = q("div", { className: "highcharts-scrolling" }, e, this.scrollingParent);
            B(this.scrollingContainer, "scroll", function() {
              a3.pointer && delete a3.pointer.chartPosition;
            });
            this.innerContainer = q("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer);
            this.innerContainer.appendChild(this.container);
            this.setUpScrolling = null;
          };
          E.prototype.moveFixedElements = function() {
            var a3 = this.container, e = this.fixedRenderer, f2 = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "), h2;
            this.scrollablePixelsX && !this.inverted ? h2 = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? h2 = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? h2 = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (h2 = ".highcharts-yaxis");
            h2 && f2.push(h2 + ":not(.highcharts-radial-axis)", h2 + "-labels:not(.highcharts-radial-axis-labels)");
            f2.forEach(function(c) {
              [].forEach.call(a3.querySelectorAll(c), function(a4) {
                (a4.namespaceURI === e.SVG_NS ? e.box : e.box.parentNode).appendChild(a4);
                a4.style.pointerEvents = "auto";
              });
            });
          };
          E.prototype.applyFixed = function() {
            var a3 = !this.fixedDiv, e = this.options.chart, h2 = e.scrollablePlotArea, m = x.getRendererType();
            a3 ? (this.fixedDiv = q("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (e.style && e.style.zIndex || 0) + 2, top: 0 }, null, true), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = e = new m(this.fixedDiv, this.chartWidth, this.chartHeight, this.options.chart.style), this.scrollableMask = e.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": f(h2.opacity, 0.85), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), B(this, "afterShowResetZoom", this.moveFixedElements), B(this, "afterDrilldown", this.moveFixedElements), B(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
            if (this.scrollableDirty || a3)
              this.scrollableDirty = false, this.moveFixedElements();
            e = this.chartWidth + (this.scrollablePixelsX || 0);
            m = this.chartHeight + (this.scrollablePixelsY || 0);
            v(this.container);
            this.container.style.width = e + "px";
            this.container.style.height = m + "px";
            this.renderer.boxWrapper.attr({ width: e, height: m, viewBox: [0, 0, e, m].join(" ") });
            this.chartBackground.attr({ width: e, height: m });
            this.scrollingContainer.style.height = this.chartHeight + "px";
            a3 && (h2.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * h2.scrollPositionX), h2.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * h2.scrollPositionY));
            m = this.axisOffset;
            a3 = this.plotTop - m[0] - 1;
            h2 = this.plotLeft - m[3] - 1;
            e = this.plotTop + this.plotHeight + m[2] + 1;
            m = this.plotLeft + this.plotWidth + m[1] + 1;
            var w = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), n = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
            a3 = this.scrollablePixelsX ? [["M", 0, a3], ["L", this.plotLeft - 1, a3], ["L", this.plotLeft - 1, e], ["L", 0, e], ["Z"], ["M", w, a3], ["L", this.chartWidth, a3], ["L", this.chartWidth, e], ["L", w, e], ["Z"]] : this.scrollablePixelsY ? [["M", h2, 0], ["L", h2, this.plotTop - 1], ["L", m, this.plotTop - 1], ["L", m, 0], ["Z"], ["M", h2, n], ["L", h2, this.chartHeight], ["L", m, this.chartHeight], ["L", m, n], ["Z"]] : [["M", 0, 0]];
            this.redrawTrigger !== "adjustHeight" && this.scrollableMask.attr({ d: a3 });
          };
          B(u, "afterInit", function() {
            this.chart.scrollableDirty = true;
          });
          B(H, "show", function() {
            this.chart.scrollableDirty = true;
          });
          "";
        });
        L(a, "Core/Axis/StackingAxis.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Utilities.js"]], function(a2, u) {
          var v = a2.getDeferredAnimation, H = u.addEvent, x = u.destroyObjectProperties, y = u.fireEvent, G = u.isNumber, B = u.objectEach, q = function() {
            function a3(a4) {
              this.oldStacks = {};
              this.stacks = {};
              this.stacksTouched = 0;
              this.axis = a4;
            }
            a3.prototype.buildStacks = function() {
              var a4 = this.axis, c = a4.series, e = a4.options.reversedStacks, h = c.length, m;
              if (!a4.isXAxis) {
                this.usePercentage = false;
                for (m = h; m--; ) {
                  var q2 = c[e ? m : h - m - 1];
                  q2.setStackedPoints();
                  q2.setGroupedPoints();
                }
                for (m = 0; m < h; m++)
                  c[m].modifyStacks();
                y(a4, "afterBuildStacks");
              }
            };
            a3.prototype.cleanStacks = function() {
              if (!this.axis.isXAxis) {
                if (this.oldStacks)
                  var a4 = this.stacks = this.oldStacks;
                B(a4, function(a5) {
                  B(a5, function(a6) {
                    a6.cumulative = a6.total;
                  });
                });
              }
            };
            a3.prototype.resetStacks = function() {
              var a4 = this, c = this.stacks;
              this.axis.isXAxis || B(c, function(c2) {
                B(c2, function(e, f) {
                  G(e.touched) && e.touched < a4.stacksTouched ? (e.destroy(), delete c2[f]) : (e.total = null, e.cumulative = null);
                });
              });
            };
            a3.prototype.renderStackTotals = function() {
              var a4 = this.axis, c = a4.chart, e = c.renderer, h = this.stacks;
              a4 = v(c, a4.options.stackLabels && a4.options.stackLabels.animation || false);
              var m = this.stackTotalGroup = this.stackTotalGroup || e.g("stack-labels").attr({
                visibility: "visible",
                zIndex: 6,
                opacity: 0
              }).add();
              m.translate(c.plotLeft, c.plotTop);
              B(h, function(a5) {
                B(a5, function(a6) {
                  a6.render(m);
                });
              });
              m.animate({ opacity: 1 }, a4);
            };
            return a3;
          }();
          return function() {
            function a3() {
            }
            a3.compose = function(f) {
              H(f, "init", a3.onInit);
              H(f, "destroy", a3.onDestroy);
            };
            a3.onDestroy = function() {
              var a4 = this.stacking;
              if (a4) {
                var c = a4.stacks;
                B(c, function(a5, f) {
                  x(a5);
                  c[f] = null;
                });
                a4 && a4.stackTotalGroup && a4.stackTotalGroup.destroy();
              }
            };
            a3.onInit = function() {
              this.stacking || (this.stacking = new q(this));
            };
            return a3;
          }();
        });
        L(a, "Extensions/Stacking.js", [a["Core/Axis/Axis.js"], a["Core/Chart/Chart.js"], a["Core/FormatUtilities.js"], a["Core/Globals.js"], a["Core/Series/Series.js"], a["Core/Axis/StackingAxis.js"], a["Core/Utilities.js"]], function(a2, u, E, H, x, y, G) {
          var v = E.format, q = G.correctFloat, h = G.defined, f = G.destroyObjectProperties, c = G.isArray, e = G.isNumber, t = G.objectEach, m = G.pick, w = function() {
            function a3(a4, c2, e2, f2, h2) {
              var d = a4.chart.inverted;
              this.axis = a4;
              this.isNegative = e2;
              this.options = c2 = c2 || {};
              this.x = f2;
              this.total = null;
              this.points = {};
              this.hasValidPoints = false;
              this.stack = h2;
              this.rightCliff = this.leftCliff = 0;
              this.alignOptions = { align: c2.align || (d ? e2 ? "left" : "right" : "center"), verticalAlign: c2.verticalAlign || (d ? "middle" : e2 ? "bottom" : "top"), y: c2.y, x: c2.x };
              this.textAlign = c2.textAlign || (d ? e2 ? "right" : "left" : "center");
            }
            a3.prototype.destroy = function() {
              f(this, this.axis);
            };
            a3.prototype.render = function(a4) {
              var c2 = this.axis.chart, e2 = this.options, f2 = e2.format;
              f2 = f2 ? v(f2, this, c2) : e2.formatter.call(this);
              this.label ? this.label.attr({ text: f2, visibility: "hidden" }) : (this.label = c2.renderer.label(f2, null, null, e2.shape, null, null, e2.useHTML, false, "stack-labels"), f2 = { r: e2.borderRadius || 0, text: f2, rotation: e2.rotation, padding: m(e2.padding, 5), visibility: "hidden" }, c2.styledMode || (f2.fill = e2.backgroundColor, f2.stroke = e2.borderColor, f2["stroke-width"] = e2.borderWidth, this.label.css(e2.style)), this.label.attr(f2), this.label.added || this.label.add(a4));
              this.label.labelrank = c2.plotSizeY;
            };
            a3.prototype.setOffset = function(a4, c2, f2, n, p) {
              var d = this.axis, k = d.chart;
              n = d.translate(d.stacking.usePercentage ? 100 : n ? n : this.total, 0, 0, 0, 1);
              f2 = d.translate(f2 ? f2 : 0);
              f2 = h(n) && Math.abs(n - f2);
              a4 = m(p, k.xAxis[0].translate(this.x)) + a4;
              d = h(n) && this.getStackBox(k, this, a4, n, c2, f2, d);
              c2 = this.label;
              f2 = this.isNegative;
              a4 = m(this.options.overflow, "justify") === "justify";
              var b = this.textAlign;
              c2 && d && (p = c2.getBBox(), n = c2.padding, b = b === "left" ? k.inverted ? -n : n : b === "right" ? p.width : k.inverted && b === "center" ? p.width / 2 : k.inverted ? f2 ? p.width + n : -n : p.width / 2, f2 = k.inverted ? p.height / 2 : f2 ? -n : p.height, this.alignOptions.x = m(this.options.x, 0), this.alignOptions.y = m(this.options.y, 0), d.x -= b, d.y -= f2, c2.align(this.alignOptions, null, d), k.isInsidePlot(c2.alignAttr.x + b - this.alignOptions.x, c2.alignAttr.y + f2 - this.alignOptions.y) ? c2.show() : (c2.alignAttr.y = -9999, a4 = false), a4 && x.prototype.justifyDataLabel.call(this.axis, c2, this.alignOptions, c2.alignAttr, p, d), c2.attr({ x: c2.alignAttr.x, y: c2.alignAttr.y }), m(!a4 && this.options.crop, true) && ((k = e(c2.x) && e(c2.y) && k.isInsidePlot(c2.x - n + c2.width, c2.y) && k.isInsidePlot(c2.x + n, c2.y)) || c2.hide()));
            };
            a3.prototype.getStackBox = function(a4, c2, e2, f2, h2, d, k) {
              var b = c2.axis.reversed, g = a4.inverted, l = k.height + k.pos - (g ? a4.plotLeft : a4.plotTop);
              c2 = c2.isNegative && !b || !c2.isNegative && b;
              return { x: g ? c2 ? f2 - k.right : f2 - d + k.pos - a4.plotLeft : e2 + a4.xAxis[0].transB - a4.plotLeft, y: g ? k.height - e2 - h2 : c2 ? l - f2 - d : l - f2, width: g ? d : h2, height: g ? h2 : d };
            };
            return a3;
          }();
          u.prototype.getStacks = function() {
            var a3 = this, c2 = a3.inverted;
            a3.yAxis.forEach(function(a4) {
              a4.stacking && a4.stacking.stacks && a4.hasVisibleSeries && (a4.stacking.oldStacks = a4.stacking.stacks);
            });
            a3.series.forEach(function(e2) {
              var f2 = e2.xAxis && e2.xAxis.options || {};
              !e2.options.stacking || e2.visible !== true && a3.options.chart.ignoreHiddenSeries !== false || (e2.stackKey = [e2.type, m(e2.options.stack, ""), c2 ? f2.top : f2.left, c2 ? f2.height : f2.width].join());
            });
          };
          y.compose(a2);
          x.prototype.setGroupedPoints = function() {
            var a3 = this.yAxis.stacking;
            this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? x.prototype.setStackedPoints.call(this, "group") : a3 && t(a3.stacks, function(c2, e2) {
              e2.slice(-5) === "group" && (t(c2, function(a4) {
                return a4.destroy();
              }), delete a3.stacks[e2]);
            });
          };
          x.prototype.setStackedPoints = function(a3) {
            var e2 = a3 || this.options.stacking;
            if (e2 && (this.visible === true || this.chart.options.chart.ignoreHiddenSeries === false)) {
              var f2 = this.processedXData, n = this.processedYData, t2 = [], p = n.length, d = this.options, k = d.threshold, b = m(d.startFromThreshold && k, 0);
              d = d.stack;
              a3 = a3 ? this.type + "," + e2 : this.stackKey;
              var g = "-" + a3, r = this.negStacks, v2 = this.yAxis, u2 = v2.stacking.stacks, B = v2.stacking.oldStacks, C, x2;
              v2.stacking.stacksTouched += 1;
              for (x2 = 0; x2 < p; x2++) {
                var y2 = f2[x2];
                var E2 = n[x2];
                var G2 = this.getStackIndicator(G2, y2, this.index);
                var H2 = G2.key;
                var z = (C = r && E2 < (b ? 0 : k)) ? g : a3;
                u2[z] || (u2[z] = {});
                u2[z][y2] || (B[z] && B[z][y2] ? (u2[z][y2] = B[z][y2], u2[z][y2].total = null) : u2[z][y2] = new w(v2, v2.options.stackLabels, C, y2, d));
                z = u2[z][y2];
                E2 !== null ? (z.points[H2] = z.points[this.index] = [m(z.cumulative, b)], h(z.cumulative) || (z.base = H2), z.touched = v2.stacking.stacksTouched, 0 < G2.index && this.singleStacks === false && (z.points[H2][0] = z.points[this.index + "," + y2 + ",0"][0])) : z.points[H2] = z.points[this.index] = null;
                e2 === "percent" ? (C = C ? a3 : g, r && u2[C] && u2[C][y2] ? (C = u2[C][y2], z.total = C.total = Math.max(C.total, z.total) + Math.abs(E2) || 0) : z.total = q(z.total + (Math.abs(E2) || 0))) : e2 === "group" ? (c(E2) && (E2 = E2[0]), E2 !== null && (z.total = (z.total || 0) + 1)) : z.total = q(z.total + (E2 || 0));
                z.cumulative = e2 === "group" ? (z.total || 1) - 1 : m(z.cumulative, b) + (E2 || 0);
                E2 !== null && (z.points[H2].push(z.cumulative), t2[x2] = z.cumulative, z.hasValidPoints = true);
              }
              e2 === "percent" && (v2.stacking.usePercentage = true);
              e2 !== "group" && (this.stackedYData = t2);
              v2.stacking.oldStacks = {};
            }
          };
          x.prototype.modifyStacks = function() {
            var a3 = this, c2 = a3.stackKey, e2 = a3.yAxis.stacking.stacks, f2 = a3.processedXData, h2, p = a3.options.stacking;
            a3[p + "Stacker"] && [c2, "-" + c2].forEach(function(d) {
              for (var c3 = f2.length, b, g; c3--; )
                if (b = f2[c3], h2 = a3.getStackIndicator(h2, b, a3.index, d), g = (b = e2[d] && e2[d][b]) && b.points[h2.key])
                  a3[p + "Stacker"](g, b, c3);
            });
          };
          x.prototype.percentStacker = function(a3, c2, e2) {
            c2 = c2.total ? 100 / c2.total : 0;
            a3[0] = q(a3[0] * c2);
            a3[1] = q(a3[1] * c2);
            this.stackedYData[e2] = a3[1];
          };
          x.prototype.getStackIndicator = function(a3, c2, e2, f2) {
            !h(a3) || a3.x !== c2 || f2 && a3.key !== f2 ? a3 = { x: c2, index: 0, key: f2 } : a3.index++;
            a3.key = [e2, c2, a3.index].join();
            return a3;
          };
          H.StackItem = w;
          "";
          return H.StackItem;
        });
        L(a, "Series/Line/LineSeries.js", [a["Core/Color/Palette.js"], a["Core/Series/Series.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, u, E, H) {
          var v = this && this.__extends || function() {
            var a3 = function(q, h) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c) {
                a4.__proto__ = c;
              } || function(a4, c) {
                for (var e in c)
                  c.hasOwnProperty(e) && (a4[e] = c[e]);
              };
              return a3(q, h);
            };
            return function(q, h) {
              function f() {
                this.constructor = q;
              }
              a3(q, h);
              q.prototype = h === null ? Object.create(h) : (f.prototype = h.prototype, new f());
            };
          }(), y = H.defined, G = H.merge;
          H = function(B) {
            function q() {
              var a3 = B !== null && B.apply(this, arguments) || this;
              a3.data = void 0;
              a3.options = void 0;
              a3.points = void 0;
              return a3;
            }
            v(q, B);
            q.prototype.drawGraph = function() {
              var h = this, f = this.options, c = (this.gappedPath || this.getGraphPath).call(this), e = this.chart.styledMode, t = [["graph", "highcharts-graph"]];
              e || t[0].push(f.lineColor || this.color || a2.neutralColor20, f.dashStyle);
              t = h.getZonesGraphs(t);
              t.forEach(function(a3, t2) {
                var m = a3[0], l = h[m], q2 = l ? "animate" : "attr";
                l ? (l.endX = h.preventGraphAnimation ? null : c.xMap, l.animate({ d: c })) : c.length && (h[m] = l = h.chart.renderer.path(c).addClass(a3[1]).attr({ zIndex: 1 }).add(h.group));
                l && !e && (m = { stroke: a3[2], "stroke-width": f.lineWidth, fill: h.fillGraph && h.color || "none" }, a3[3] ? m.dashstyle = a3[3] : f.linecap !== "square" && (m["stroke-linecap"] = m["stroke-linejoin"] = "round"), l[q2](m).shadow(2 > t2 && f.shadow));
                l && (l.startX = c.xMap, l.isArea = c.isArea);
              });
            };
            q.prototype.getGraphPath = function(a3, f, c) {
              var e = this, h = e.options, m = h.step, q2, n = [], l = [], v2;
              a3 = a3 || e.points;
              (q2 = a3.reversed) && a3.reverse();
              (m = {
                right: 1,
                center: 2
              }[m] || m && 3) && q2 && (m = 4 - m);
              a3 = this.getValidPoints(a3, false, !(h.connectNulls && !f && !c));
              a3.forEach(function(t, q3) {
                var p = t.plotX, d = t.plotY, k = a3[q3 - 1];
                (t.leftCliff || k && k.rightCliff) && !c && (v2 = true);
                t.isNull && !y(f) && 0 < q3 ? v2 = !h.connectNulls : t.isNull && !f ? v2 = true : (q3 === 0 || v2 ? q3 = [["M", t.plotX, t.plotY]] : e.getPointSpline ? q3 = [e.getPointSpline(a3, t, q3)] : m ? (q3 = m === 1 ? [["L", k.plotX, d]] : m === 2 ? [["L", (k.plotX + p) / 2, k.plotY], ["L", (k.plotX + p) / 2, d]] : [["L", p, k.plotY]], q3.push(["L", p, d])) : q3 = [["L", p, d]], l.push(t.x), m && (l.push(t.x), m === 2 && l.push(t.x)), n.push.apply(n, q3), v2 = false);
              });
              n.xMap = l;
              return e.graphPath = n;
            };
            q.prototype.getZonesGraphs = function(a3) {
              this.zones.forEach(function(f, c) {
                c = ["zone-graph-" + c, "highcharts-graph highcharts-zone-graph-" + c + " " + (f.className || "")];
                this.chart.styledMode || c.push(f.color || this.color, f.dashStyle || this.options.dashStyle);
                a3.push(c);
              }, this);
              return a3;
            };
            q.defaultOptions = G(u.defaultOptions, {});
            return q;
          }(u);
          E.registerSeriesType("line", H);
          "";
          return H;
        });
        L(a, "Series/Area/AreaSeries.js", [
          a["Core/Color/Color.js"],
          a["Mixins/LegendSymbol.js"],
          a["Core/Series/SeriesRegistry.js"],
          a["Core/Utilities.js"]
        ], function(a2, u, E, H) {
          var v = this && this.__extends || function() {
            var a3 = function(c, e) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
                a4.__proto__ = c2;
              } || function(a4, c2) {
                for (var e2 in c2)
                  c2.hasOwnProperty(e2) && (a4[e2] = c2[e2]);
              };
              return a3(c, e);
            };
            return function(c, e) {
              function f() {
                this.constructor = c;
              }
              a3(c, e);
              c.prototype = e === null ? Object.create(e) : (f.prototype = e.prototype, new f());
            };
          }(), y = a2.parse, G = E.seriesTypes.line;
          a2 = H.extend;
          var B = H.merge, q = H.objectEach, h = H.pick;
          H = function(a3) {
            function c() {
              var c2 = a3 !== null && a3.apply(this, arguments) || this;
              c2.data = void 0;
              c2.options = void 0;
              c2.points = void 0;
              return c2;
            }
            v(c, a3);
            c.prototype.drawGraph = function() {
              this.areaPath = [];
              a3.prototype.drawGraph.apply(this);
              var c2 = this, f = this.areaPath, m = this.options, q2 = [["area", "highcharts-area", this.color, m.fillColor]];
              this.zones.forEach(function(a4, e) {
                q2.push(["zone-area-" + e, "highcharts-area highcharts-zone-area-" + e + " " + a4.className, a4.color || c2.color, a4.fillColor || m.fillColor]);
              });
              q2.forEach(function(a4) {
                var e = a4[0], t = c2[e], n = t ? "animate" : "attr", q3 = {};
                t ? (t.endX = c2.preventGraphAnimation ? null : f.xMap, t.animate({ d: f })) : (q3.zIndex = 0, t = c2[e] = c2.chart.renderer.path(f).addClass(a4[1]).add(c2.group), t.isArea = true);
                c2.chart.styledMode || (q3.fill = h(a4[3], y(a4[2]).setOpacity(h(m.fillOpacity, 0.75)).get()));
                t[n](q3);
                t.startX = f.xMap;
                t.shiftUnit = m.step ? 2 : 1;
              });
            };
            c.prototype.getGraphPath = function(a4) {
              var c2 = G.prototype.getGraphPath, e = this.options, f = e.stacking, n = this.yAxis, l, q2 = [], v2 = [], u2 = this.index, p = n.stacking.stacks[this.stackKey], d = e.threshold, k = Math.round(n.getThreshold(e.threshold));
              e = h(e.connectNulls, f === "percent");
              var b = function(b2, c3, e2) {
                var g2 = a4[b2];
                b2 = f && p[g2.x].points[u2];
                var h2 = g2[e2 + "Null"] || 0;
                e2 = g2[e2 + "Cliff"] || 0;
                g2 = true;
                if (e2 || h2) {
                  var l2 = (h2 ? b2[0] : b2[1]) + e2;
                  var m = b2[0] + e2;
                  g2 = !!h2;
                } else
                  !f && a4[c3] && a4[c3].isNull && (l2 = m = d);
                typeof l2 !== "undefined" && (v2.push({ plotX: r, plotY: l2 === null ? k : n.getThreshold(l2), isNull: g2, isCliff: true }), q2.push({ plotX: r, plotY: m === null ? k : n.getThreshold(m), doCurve: false }));
              };
              a4 = a4 || this.points;
              f && (a4 = this.getStackPoints(a4));
              for (l = 0; l < a4.length; l++) {
                f || (a4[l].leftCliff = a4[l].rightCliff = a4[l].leftNull = a4[l].rightNull = void 0);
                var g = a4[l].isNull;
                var r = h(a4[l].rectPlotX, a4[l].plotX);
                var F = f ? h(a4[l].yBottom, k) : k;
                if (!g || e)
                  e || b(l, l - 1, "left"), g && !f && e || (v2.push(a4[l]), q2.push({ x: l, plotX: r, plotY: F })), e || b(l, l + 1, "right");
              }
              l = c2.call(this, v2, true, true);
              q2.reversed = true;
              g = c2.call(this, q2, true, true);
              (F = g[0]) && F[0] === "M" && (g[0] = ["L", F[1], F[2]]);
              g = l.concat(g);
              g.length && g.push(["Z"]);
              c2 = c2.call(this, v2, false, e);
              g.xMap = l.xMap;
              this.areaPath = g;
              return c2;
            };
            c.prototype.getStackPoints = function(a4) {
              var c2 = this, e = [], f = [], n = this.xAxis, l = this.yAxis, v2 = l.stacking.stacks[this.stackKey], u2 = {}, A = l.series, p = A.length, d = l.options.reversedStacks ? 1 : -1, k = A.indexOf(c2);
              a4 = a4 || this.points;
              if (this.options.stacking) {
                for (var b = 0; b < a4.length; b++)
                  a4[b].leftNull = a4[b].rightNull = void 0, u2[a4[b].x] = a4[b];
                q(v2, function(a5, b2) {
                  a5.total !== null && f.push(b2);
                });
                f.sort(function(a5, b2) {
                  return a5 - b2;
                });
                var g = A.map(function(a5) {
                  return a5.visible;
                });
                f.forEach(function(a5, b2) {
                  var r = 0, m, t;
                  if (u2[a5] && !u2[a5].isNull)
                    e.push(u2[a5]), [-1, 1].forEach(function(e2) {
                      var h2 = e2 === 1 ? "rightNull" : "leftNull", l2 = 0, r2 = v2[f[b2 + e2]];
                      if (r2)
                        for (var n2 = k; 0 <= n2 && n2 < p; ) {
                          var q3 = A[n2].index;
                          m = r2.points[q3];
                          m || (q3 === c2.index ? u2[a5][h2] = true : g[n2] && (t = v2[a5].points[q3]) && (l2 -= t[1] - t[0]));
                          n2 += d;
                        }
                      u2[a5][e2 === 1 ? "rightCliff" : "leftCliff"] = l2;
                    });
                  else {
                    for (var q2 = k; 0 <= q2 && q2 < p; ) {
                      if (m = v2[a5].points[A[q2].index]) {
                        r = m[1];
                        break;
                      }
                      q2 += d;
                    }
                    r = h(r, 0);
                    r = l.translate(r, 0, 1, 0, 1);
                    e.push({ isNull: true, plotX: n.translate(a5, 0, 0, 0, 1), x: a5, plotY: r, yBottom: r });
                  }
                });
              }
              return e;
            };
            c.defaultOptions = B(G.defaultOptions, { threshold: 0 });
            return c;
          }(G);
          a2(H.prototype, { singleStacks: false, drawLegendSymbol: u.drawRectangle });
          E.registerSeriesType("area", H);
          "";
          return H;
        });
        L(a, "Series/Spline/SplineSeries.js", [a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, u) {
          var v = this && this.__extends || function() {
            var a3 = function(v2, q) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, f) {
                a4.__proto__ = f;
              } || function(a4, f) {
                for (var c in f)
                  f.hasOwnProperty(c) && (a4[c] = f[c]);
              };
              return a3(v2, q);
            };
            return function(v2, q) {
              function h() {
                this.constructor = v2;
              }
              a3(v2, q);
              v2.prototype = q === null ? Object.create(q) : (h.prototype = q.prototype, new h());
            };
          }(), H = a2.seriesTypes.line, x = u.merge, y = u.pick;
          u = function(a3) {
            function u2() {
              var q = a3 !== null && a3.apply(this, arguments) || this;
              q.data = void 0;
              q.options = void 0;
              q.points = void 0;
              return q;
            }
            v(u2, a3);
            u2.prototype.getPointSpline = function(a4, h, f) {
              var c = h.plotX || 0, e = h.plotY || 0, t = a4[f - 1];
              f = a4[f + 1];
              if (t && !t.isNull && t.doCurve !== false && !h.isCliff && f && !f.isNull && f.doCurve !== false && !h.isCliff) {
                a4 = t.plotY || 0;
                var m = f.plotX || 0;
                f = f.plotY || 0;
                var q = 0;
                var n = (1.5 * c + (t.plotX || 0)) / 2.5;
                var l = (1.5 * e + a4) / 2.5;
                m = (1.5 * c + m) / 2.5;
                var v2 = (1.5 * e + f) / 2.5;
                m !== n && (q = (v2 - l) * (m - c) / (m - n) + e - v2);
                l += q;
                v2 += q;
                l > a4 && l > e ? (l = Math.max(a4, e), v2 = 2 * e - l) : l < a4 && l < e && (l = Math.min(a4, e), v2 = 2 * e - l);
                v2 > f && v2 > e ? (v2 = Math.max(f, e), l = 2 * e - v2) : v2 < f && v2 < e && (v2 = Math.min(f, e), l = 2 * e - v2);
                h.rightContX = m;
                h.rightContY = v2;
              }
              h = ["C", y(t.rightContX, t.plotX, 0), y(t.rightContY, t.plotY, 0), y(n, c, 0), y(l, e, 0), c, e];
              t.rightContX = t.rightContY = void 0;
              return h;
            };
            u2.defaultOptions = x(H.defaultOptions);
            return u2;
          }(H);
          a2.registerSeriesType("spline", u);
          "";
          return u;
        });
        L(a, "Series/AreaSpline/AreaSplineSeries.js", [
          a["Series/Area/AreaSeries.js"],
          a["Series/Spline/SplineSeries.js"],
          a["Mixins/LegendSymbol.js"],
          a["Core/Series/SeriesRegistry.js"],
          a["Core/Utilities.js"]
        ], function(a2, u, E, H, x) {
          var v = this && this.__extends || function() {
            var a3 = function(f, c) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
                a4.__proto__ = c2;
              } || function(a4, c2) {
                for (var e in c2)
                  c2.hasOwnProperty(e) && (a4[e] = c2[e]);
              };
              return a3(f, c);
            };
            return function(f, c) {
              function e() {
                this.constructor = f;
              }
              a3(f, c);
              f.prototype = c === null ? Object.create(c) : (e.prototype = c.prototype, new e());
            };
          }(), G = a2.prototype, B = x.extend, q = x.merge;
          x = function(h) {
            function f() {
              var a3 = h !== null && h.apply(this, arguments) || this;
              a3.data = void 0;
              a3.points = void 0;
              a3.options = void 0;
              return a3;
            }
            v(f, h);
            f.defaultOptions = q(u.defaultOptions, a2.defaultOptions);
            return f;
          }(u);
          B(x.prototype, { getGraphPath: G.getGraphPath, getStackPoints: G.getStackPoints, drawGraph: G.drawGraph, drawLegendSymbol: E.drawRectangle });
          H.registerSeriesType("areaspline", x);
          "";
          return x;
        });
        L(a, "Series/Column/ColumnSeries.js", [
          a["Core/Animation/AnimationUtilities.js"],
          a["Core/Color/Color.js"],
          a["Core/Globals.js"],
          a["Mixins/LegendSymbol.js"],
          a["Core/Color/Palette.js"],
          a["Core/Series/Series.js"],
          a["Core/Series/SeriesRegistry.js"],
          a["Core/Utilities.js"]
        ], function(a2, u, E, H, x, y, G, B) {
          var q = this && this.__extends || function() {
            var a3 = function(d, b) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, b2) {
                a4.__proto__ = b2;
              } || function(a4, b2) {
                for (var d2 in b2)
                  b2.hasOwnProperty(d2) && (a4[d2] = b2[d2]);
              };
              return a3(d, b);
            };
            return function(d, b) {
              function c2() {
                this.constructor = d;
              }
              a3(d, b);
              d.prototype = b === null ? Object.create(b) : (c2.prototype = b.prototype, new c2());
            };
          }(), h = a2.animObject, f = u.parse, c = E.hasTouch;
          a2 = E.noop;
          var e = B.clamp, t = B.css, m = B.defined, v = B.extend, n = B.fireEvent, l = B.isArray, J = B.isNumber, K = B.merge, A = B.pick, p = B.objectEach;
          B = function(a3) {
            function d() {
              var b = a3 !== null && a3.apply(this, arguments) || this;
              b.borderWidth = void 0;
              b.data = void 0;
              b.group = void 0;
              b.options = void 0;
              b.points = void 0;
              return b;
            }
            q(d, a3);
            d.prototype.animate = function(a4) {
              var b = this, d2 = this.yAxis, c2 = b.options, f2 = this.chart.inverted, k = {}, l2 = f2 ? "translateX" : "translateY";
              if (a4)
                k.scaleY = 1e-3, a4 = e(d2.toPixels(c2.threshold), d2.pos, d2.pos + d2.len), f2 ? k.translateX = a4 - d2.len : k.translateY = a4, b.clipBox && b.setClip(), b.group.attr(k);
              else {
                var p2 = Number(b.group.attr(l2));
                b.group.animate({ scaleY: 1 }, v(h(b.options.animation), { step: function(a5, c3) {
                  b.group && (k[l2] = p2 + c3.pos * (d2.pos - p2), b.group.attr(k));
                } }));
              }
            };
            d.prototype.init = function(b, d2) {
              a3.prototype.init.apply(this, arguments);
              var c2 = this;
              b = c2.chart;
              b.hasRendered && b.series.forEach(function(a4) {
                a4.type === c2.type && (a4.isDirty = true);
              });
            };
            d.prototype.getColumnMetrics = function() {
              var a4 = this, d2 = a4.options, c2 = a4.xAxis, e2 = a4.yAxis, f2 = c2.options.reversedStacks;
              f2 = c2.reversed && !f2 || !c2.reversed && f2;
              var k, l2 = {}, h2 = 0;
              d2.grouping === false ? h2 = 1 : a4.chart.series.forEach(function(b) {
                var d3 = b.yAxis, c3 = b.options;
                if (b.type === a4.type && (b.visible || !a4.chart.options.chart.ignoreHiddenSeries) && e2.len === d3.len && e2.pos === d3.pos) {
                  if (c3.stacking && c3.stacking !== "group") {
                    k = b.stackKey;
                    typeof l2[k] === "undefined" && (l2[k] = h2++);
                    var f3 = l2[k];
                  } else
                    c3.grouping !== false && (f3 = h2++);
                  b.columnIndex = f3;
                }
              });
              var p2 = Math.min(Math.abs(c2.transA) * (c2.ordinal && c2.ordinal.slope || d2.pointRange || c2.closestPointRange || c2.tickInterval || 1), c2.len), m2 = p2 * d2.groupPadding, t2 = (p2 - 2 * m2) / (h2 || 1);
              d2 = Math.min(d2.maxPointWidth || c2.len, A(d2.pointWidth, t2 * (1 - 2 * d2.pointPadding)));
              a4.columnMetrics = { width: d2, offset: (t2 - d2) / 2 + (m2 + ((a4.columnIndex || 0) + (f2 ? 1 : 0)) * t2 - p2 / 2) * (f2 ? -1 : 1), paddedWidth: t2, columnCount: h2 };
              return a4.columnMetrics;
            };
            d.prototype.crispCol = function(a4, d2, c2, e2) {
              var b = this.chart, f2 = this.borderWidth, g = -(f2 % 2 ? 0.5 : 0);
              f2 = f2 % 2 ? 0.5 : 1;
              b.inverted && b.renderer.isVML && (f2 += 1);
              this.options.crisp && (c2 = Math.round(a4 + c2) + g, a4 = Math.round(a4) + g, c2 -= a4);
              e2 = Math.round(d2 + e2) + f2;
              g = 0.5 >= Math.abs(d2) && 0.5 < e2;
              d2 = Math.round(d2) + f2;
              e2 -= d2;
              g && e2 && (--d2, e2 += 1);
              return { x: a4, y: d2, width: c2, height: e2 };
            };
            d.prototype.adjustForMissingColumns = function(a4, d2, c2, e2) {
              var b = this, f2 = this.options.stacking;
              if (!c2.isNull && 1 < e2.columnCount) {
                var g = 0, k = 0;
                p(this.yAxis.stacking && this.yAxis.stacking.stacks, function(a5) {
                  if (typeof c2.x === "number" && (a5 = a5[c2.x.toString()])) {
                    var d3 = a5.points[b.index], e3 = a5.total;
                    f2 ? (d3 && (g = k), a5.hasValidPoints && k++) : l(d3) && (g = d3[1], k = e3 || 0);
                  }
                });
                a4 = (c2.plotX || 0) + ((k - 1) * e2.paddedWidth + d2) / 2 - d2 - g * e2.paddedWidth;
              }
              return a4;
            };
            d.prototype.translate = function() {
              var a4 = this, d2 = a4.chart, c2 = a4.options, f2 = a4.dense = 2 > a4.closestPointRange * a4.xAxis.transA;
              f2 = a4.borderWidth = A(c2.borderWidth, f2 ? 0 : 1);
              var k = a4.xAxis, l2 = a4.yAxis, h2 = c2.threshold, p2 = a4.translatedThreshold = l2.getThreshold(h2), t2 = A(c2.minPointLength, 5), n2 = a4.getColumnMetrics(), q2 = n2.width, v2 = a4.barW = Math.max(q2, 1 + 2 * f2), u2 = a4.pointXOffset = n2.offset, w = a4.dataMin, x2 = a4.dataMax;
              d2.inverted && (p2 -= 0.5);
              c2.pointPadding && (v2 = Math.ceil(v2));
              y.prototype.translate.apply(a4);
              a4.points.forEach(function(b) {
                var f3 = A(b.yBottom, p2), g = 999 + Math.abs(f3), r = q2, C = b.plotX || 0;
                g = e(b.plotY, -g, l2.len + g);
                C += u2;
                var F = v2, D = Math.min(g, f3), z = Math.max(g, f3) - D;
                if (t2 && Math.abs(z) < t2) {
                  z = t2;
                  var B2 = !l2.reversed && !b.negative || l2.reversed && b.negative;
                  J(h2) && J(x2) && b.y === h2 && x2 <= h2 && (l2.min || 0) < h2 && (w !== x2 || (l2.max || 0) <= h2) && (B2 = !B2);
                  D = Math.abs(D - p2) > t2 ? f3 - t2 : p2 - (B2 ? t2 : 0);
                }
                m(b.options.pointWidth) && (r = F = Math.ceil(b.options.pointWidth), C -= Math.round((r - q2) / 2));
                c2.centerInCategory && (C = a4.adjustForMissingColumns(C, r, b, n2));
                b.barX = C;
                b.pointWidth = r;
                b.tooltipPos = d2.inverted ? [e(l2.len + l2.pos - d2.plotLeft - g, l2.pos - d2.plotLeft, l2.len + l2.pos - d2.plotLeft), k.len + k.pos - d2.plotTop - C - F / 2, z] : [k.left - d2.plotLeft + C + F / 2, e(g + l2.pos - d2.plotTop, l2.pos - d2.plotTop, l2.len + l2.pos - d2.plotTop), z];
                b.shapeType = a4.pointClass.prototype.shapeType || "rect";
                b.shapeArgs = a4.crispCol.apply(a4, b.isNull ? [C, p2, F, 0] : [C, D, F, z]);
              });
            };
            d.prototype.drawGraph = function() {
              this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
            };
            d.prototype.pointAttribs = function(a4, d2) {
              var b = this.options, c2 = this.pointAttrToOptions || {};
              var e2 = c2.stroke || "borderColor";
              var g = c2["stroke-width"] || "borderWidth", k = a4 && a4.color || this.color, l2 = a4 && a4[e2] || b[e2] || k, h2 = a4 && a4[g] || b[g] || this[g] || 0;
              c2 = a4 && a4.options.dashStyle || b.dashStyle;
              var p2 = A(a4 && a4.opacity, b.opacity, 1);
              if (a4 && this.zones.length) {
                var m2 = a4.getZone();
                k = a4.options.color || m2 && (m2.color || a4.nonZonedColor) || this.color;
                m2 && (l2 = m2.borderColor || l2, c2 = m2.dashStyle || c2, h2 = m2.borderWidth || h2);
              }
              d2 && a4 && (a4 = K(b.states[d2], a4.options.states && a4.options.states[d2] || {}), d2 = a4.brightness, k = a4.color || typeof d2 !== "undefined" && f(k).brighten(a4.brightness).get() || k, l2 = a4[e2] || l2, h2 = a4[g] || h2, c2 = a4.dashStyle || c2, p2 = A(a4.opacity, p2));
              e2 = { fill: k, stroke: l2, "stroke-width": h2, opacity: p2 };
              c2 && (e2.dashstyle = c2);
              return e2;
            };
            d.prototype.drawPoints = function() {
              var a4 = this, d2 = this.chart, c2 = a4.options, e2 = d2.renderer, f2 = c2.animationLimit || 250, k;
              a4.points.forEach(function(b) {
                var g = b.graphic, l2 = !!g, h2 = g && d2.pointCount < f2 ? "animate" : "attr";
                if (J(b.plotY) && b.y !== null) {
                  k = b.shapeArgs;
                  g && b.hasNewShapeType() && (g = g.destroy());
                  a4.enabledDataSorting && (b.startXPos = a4.xAxis.reversed ? -(k ? k.width || 0 : 0) : a4.xAxis.width);
                  g || (b.graphic = g = e2[b.shapeType](k).add(b.group || a4.group)) && a4.enabledDataSorting && d2.hasRendered && d2.pointCount < f2 && (g.attr({ x: b.startXPos }), l2 = true, h2 = "animate");
                  if (g && l2)
                    g[h2](K(k));
                  if (c2.borderRadius)
                    g[h2]({ r: c2.borderRadius });
                  d2.styledMode || g[h2](a4.pointAttribs(b, b.selected && "select")).shadow(b.allowShadow !== false && c2.shadow, null, c2.stacking && !c2.borderRadius);
                  g && (g.addClass(b.getClassName(), true), g.attr({ visibility: b.visible ? "inherit" : "hidden" }));
                } else
                  g && (b.graphic = g.destroy());
              });
            };
            d.prototype.drawTracker = function() {
              var a4 = this, d2 = a4.chart, e2 = d2.pointer, f2 = function(a5) {
                var b = e2.getPointFromEvent(a5);
                typeof b !== "undefined" && (e2.isDirectTouch = true, b.onMouseOver(a5));
              }, k;
              a4.points.forEach(function(a5) {
                k = l(a5.dataLabels) ? a5.dataLabels : a5.dataLabel ? [a5.dataLabel] : [];
                a5.graphic && (a5.graphic.element.point = a5);
                k.forEach(function(b) {
                  b.div ? b.div.point = a5 : b.element.point = a5;
                });
              });
              a4._hasTracking || (a4.trackerGroups.forEach(function(b) {
                if (a4[b]) {
                  a4[b].addClass("highcharts-tracker").on("mouseover", f2).on("mouseout", function(a5) {
                    e2.onTrackerMouseOut(a5);
                  });
                  if (c)
                    a4[b].on("touchstart", f2);
                  !d2.styledMode && a4.options.cursor && a4[b].css(t).css({ cursor: a4.options.cursor });
                }
              }), a4._hasTracking = true);
              n(this, "afterDrawTracker");
            };
            d.prototype.remove = function() {
              var a4 = this, d2 = a4.chart;
              d2.hasRendered && d2.series.forEach(function(b) {
                b.type === a4.type && (b.isDirty = true);
              });
              y.prototype.remove.apply(a4, arguments);
            };
            d.defaultOptions = K(y.defaultOptions, { borderRadius: 0, centerInCategory: false, groupPadding: 0.2, marker: null, pointPadding: 0.1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: {
              hover: { halo: false, brightness: 0.1 },
              select: { color: x.neutralColor20, borderColor: x.neutralColor100 }
            }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: true, stickyTracking: false, tooltip: { distance: 6 }, threshold: 0, borderColor: x.backgroundColor });
            return d;
          }(y);
          v(B.prototype, { cropShoulder: 0, directTouch: true, drawLegendSymbol: H.drawRectangle, getSymbol: a2, negStacks: true, trackerGroups: ["group", "dataLabelsGroup"] });
          G.registerSeriesType("column", B);
          "";
          "";
          return B;
        });
        L(a, "Series/Bar/BarSeries.js", [
          a["Series/Column/ColumnSeries.js"],
          a["Core/Series/SeriesRegistry.js"],
          a["Core/Utilities.js"]
        ], function(a2, u, E) {
          var v = this && this.__extends || function() {
            var a3 = function(v2, q) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, f) {
                a4.__proto__ = f;
              } || function(a4, f) {
                for (var c in f)
                  f.hasOwnProperty(c) && (a4[c] = f[c]);
              };
              return a3(v2, q);
            };
            return function(v2, q) {
              function h() {
                this.constructor = v2;
              }
              a3(v2, q);
              v2.prototype = q === null ? Object.create(q) : (h.prototype = q.prototype, new h());
            };
          }(), x = E.extend, y = E.merge;
          E = function(u2) {
            function x2() {
              var a3 = u2 !== null && u2.apply(this, arguments) || this;
              a3.data = void 0;
              a3.options = void 0;
              a3.points = void 0;
              return a3;
            }
            v(x2, u2);
            x2.defaultOptions = y(a2.defaultOptions, {});
            return x2;
          }(a2);
          x(E.prototype, { inverted: true });
          u.registerSeriesType("bar", E);
          "";
          return E;
        });
        L(a, "Series/Scatter/ScatterSeries.js", [a["Series/Column/ColumnSeries.js"], a["Series/Line/LineSeries.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, u, E, H) {
          var v = this && this.__extends || function() {
            var a3 = function(h, f) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, e) {
                a4.__proto__ = e;
              } || function(a4, e) {
                for (var c in e)
                  e.hasOwnProperty(c) && (a4[c] = e[c]);
              };
              return a3(h, f);
            };
            return function(h, f) {
              function c() {
                this.constructor = h;
              }
              a3(h, f);
              h.prototype = f === null ? Object.create(f) : (c.prototype = f.prototype, new c());
            };
          }(), y = H.addEvent, G = H.extend, B = H.merge;
          H = function(a3) {
            function h() {
              var f = a3 !== null && a3.apply(this, arguments) || this;
              f.data = void 0;
              f.options = void 0;
              f.points = void 0;
              return f;
            }
            v(h, a3);
            h.prototype.applyJitter = function() {
              var a4 = this, c = this.options.jitter, e = this.points.length;
              c && this.points.forEach(function(f, h2) {
                ["x", "y"].forEach(function(m, t) {
                  var l = "plot" + m.toUpperCase();
                  if (c[m] && !f.isNull) {
                    var n = a4[m + "Axis"];
                    var q = c[m] * n.transA;
                    if (n && !n.isLog) {
                      var v2 = Math.max(0, f[l] - q);
                      n = Math.min(n.len, f[l] + q);
                      t = 1e4 * Math.sin(h2 + t * e);
                      f[l] = v2 + (n - v2) * (t - Math.floor(t));
                      m === "x" && (f.clientX = f.plotX);
                    }
                  }
                });
              });
            };
            h.prototype.drawGraph = function() {
              this.options.lineWidth ? a3.prototype.drawGraph.call(this) : this.graph && (this.graph = this.graph.destroy());
            };
            h.defaultOptions = B(u.defaultOptions, {
              lineWidth: 0,
              findNearestPointBy: "xy",
              jitter: { x: 0, y: 0 },
              marker: { enabled: true },
              tooltip: { headerFormat: '<span style="color:{point.color}">\u25CF</span> <span style="font-size: 10px"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" }
            });
            return h;
          }(u);
          G(H.prototype, { drawTracker: a2.prototype.drawTracker, sorted: false, requireSorting: false, noSharedTooltip: true, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: false });
          y(H, "afterTranslate", function() {
            this.applyJitter();
          });
          E.registerSeriesType("scatter", H);
          "";
          return H;
        });
        L(a, "Mixins/CenteredSeries.js", [a["Core/Globals.js"], a["Core/Series/Series.js"], a["Core/Utilities.js"]], function(a2, u, E) {
          var v = E.isNumber, x = E.pick, y = E.relativeLength, G = a2.deg2rad;
          return a2.CenteredSeriesMixin = { getCenter: function() {
            var a3 = this.options, q = this.chart, h = 2 * (a3.slicedOffset || 0), f = q.plotWidth - 2 * h, c = q.plotHeight - 2 * h, e = a3.center, t = Math.min(f, c), m = a3.size, v2 = a3.innerSize || 0;
            typeof m === "string" && (m = parseFloat(m));
            typeof v2 === "string" && (v2 = parseFloat(v2));
            a3 = [x(e[0], "50%"), x(e[1], "50%"), x(m && 0 > m ? void 0 : a3.size, "100%"), x(v2 && 0 > v2 ? void 0 : a3.innerSize || 0, "0%")];
            !q.angular || this instanceof u || (a3[3] = 0);
            for (e = 0; 4 > e; ++e)
              m = a3[e], q = 2 > e || e === 2 && /%$/.test(m), a3[e] = y(m, [f, c, t, a3[2]][e]) + (q ? h : 0);
            a3[3] > a3[2] && (a3[3] = a3[2]);
            return a3;
          }, getStartAndEndRadians: function(a3, q) {
            a3 = v(a3) ? a3 : 0;
            q = v(q) && q > a3 && 360 > q - a3 ? q : a3 + 360;
            return { start: G * (a3 + -90), end: G * (q + -90) };
          } };
        });
        L(a, "Series/Pie/PiePoint.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/Series/Point.js"], a["Core/Utilities.js"]], function(a2, u, E) {
          var v = this && this.__extends || function() {
            var a3 = function(c, e) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c2) {
                a4.__proto__ = c2;
              } || function(a4, c2) {
                for (var e2 in c2)
                  c2.hasOwnProperty(e2) && (a4[e2] = c2[e2]);
              };
              return a3(c, e);
            };
            return function(c, e) {
              function f() {
                this.constructor = c;
              }
              a3(c, e);
              c.prototype = e === null ? Object.create(e) : (f.prototype = e.prototype, new f());
            };
          }(), x = a2.setAnimation, y = E.addEvent, G = E.defined;
          a2 = E.extend;
          var B = E.isNumber, q = E.pick, h = E.relativeLength;
          E = function(a3) {
            function c() {
              var c2 = a3 !== null && a3.apply(this, arguments) || this;
              c2.labelDistance = void 0;
              c2.options = void 0;
              c2.series = void 0;
              return c2;
            }
            v(c, a3);
            c.prototype.getConnectorPath = function() {
              var a4 = this.labelPosition, c2 = this.series.options.dataLabels, f = c2.connectorShape, h2 = this.connectorShapes;
              h2[f] && (f = h2[f]);
              return f.call(this, { x: a4.final.x, y: a4.final.y, alignment: a4.alignment }, a4.connectorPosition, c2);
            };
            c.prototype.getTranslate = function() {
              return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 };
            };
            c.prototype.haloPath = function(a4) {
              var c2 = this.shapeArgs;
              return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c2.x, c2.y, c2.r + a4, c2.r + a4, { innerR: c2.r - 1, start: c2.start, end: c2.end });
            };
            c.prototype.init = function() {
              u.prototype.init.apply(this, arguments);
              var a4 = this;
              a4.name = q(a4.name, "Slice");
              var c2 = function(c3) {
                a4.slice(c3.type === "select");
              };
              y(a4, "select", c2);
              y(a4, "unselect", c2);
              return a4;
            };
            c.prototype.isValid = function() {
              return B(this.y) && 0 <= this.y;
            };
            c.prototype.setVisible = function(a4, c2) {
              var e = this, f = e.series, h2 = f.chart, l = f.options.ignoreHiddenPoint;
              c2 = q(c2, l);
              a4 !== e.visible && (e.visible = e.options.visible = a4 = typeof a4 === "undefined" ? !e.visible : a4, f.options.data[f.data.indexOf(e)] = e.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function(c3) {
                if (e[c3])
                  e[c3][a4 ? "show" : "hide"](a4);
              }), e.legendItem && h2.legend.colorizeItem(e, a4), a4 || e.state !== "hover" || e.setState(""), l && (f.isDirty = true), c2 && h2.redraw());
            };
            c.prototype.slice = function(a4, c2, f) {
              var e = this.series;
              x(f, e.chart);
              q(c2, true);
              this.sliced = this.options.sliced = G(a4) ? a4 : !this.sliced;
              e.options.data[e.data.indexOf(this)] = this.options;
              this.graphic && this.graphic.animate(this.getTranslate());
              this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
            };
            return c;
          }(u);
          a2(E.prototype, { connectorShapes: { fixedOffset: function(a3, c, e) {
            var f = c.breakAt;
            c = c.touchingSliceAt;
            return [["M", a3.x, a3.y], e.softConnector ? ["C", a3.x + (a3.alignment === "left" ? -5 : 5), a3.y, 2 * f.x - c.x, 2 * f.y - c.y, f.x, f.y] : ["L", f.x, f.y], ["L", c.x, c.y]];
          }, straight: function(a3, c) {
            c = c.touchingSliceAt;
            return [["M", a3.x, a3.y], ["L", c.x, c.y]];
          }, crookedLine: function(a3, c, e) {
            c = c.touchingSliceAt;
            var f = this.series, m = f.center[0], q2 = f.chart.plotWidth, n = f.chart.plotLeft;
            f = a3.alignment;
            var l = this.shapeArgs.r;
            e = h(e.crookDistance, 1);
            q2 = f === "left" ? m + l + (q2 + n - m - l) * (1 - e) : n + (m - l) * e;
            e = ["L", q2, a3.y];
            m = true;
            if (f === "left" ? q2 > a3.x || q2 < c.x : q2 < a3.x || q2 > c.x)
              m = false;
            a3 = [["M", a3.x, a3.y]];
            m && a3.push(e);
            a3.push(["L", c.x, c.y]);
            return a3;
          } } });
          return E;
        });
        L(a, "Series/Pie/PieSeries.js", [a["Mixins/CenteredSeries.js"], a["Series/Column/ColumnSeries.js"], a["Core/Globals.js"], a["Mixins/LegendSymbol.js"], a["Core/Color/Palette.js"], a["Series/Pie/PiePoint.js"], a["Core/Series/Series.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Renderer/SVG/Symbols.js"], a["Core/Utilities.js"]], function(a2, u, E, H, x, y, G, B, q, h) {
          var f = this && this.__extends || function() {
            var a3 = function(c2, e2) {
              a3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a4, c3) {
                a4.__proto__ = c3;
              } || function(a4, c3) {
                for (var d in c3)
                  c3.hasOwnProperty(d) && (a4[d] = c3[d]);
              };
              return a3(c2, e2);
            };
            return function(c2, e2) {
              function f2() {
                this.constructor = c2;
              }
              a3(c2, e2);
              c2.prototype = e2 === null ? Object.create(e2) : (f2.prototype = e2.prototype, new f2());
            };
          }(), c = a2.getStartAndEndRadians;
          E = E.noop;
          var e = h.clamp, t = h.extend, m = h.fireEvent, v = h.merge, n = h.pick, l = h.relativeLength;
          h = function(a3) {
            function h2() {
              var c2 = a3 !== null && a3.apply(this, arguments) || this;
              c2.center = void 0;
              c2.data = void 0;
              c2.maxLabelDistance = void 0;
              c2.options = void 0;
              c2.points = void 0;
              return c2;
            }
            f(h2, a3);
            h2.prototype.animate = function(a4) {
              var c2 = this, d = c2.points, e2 = c2.startAngleRad;
              a4 || d.forEach(function(a5) {
                var b = a5.graphic, d2 = a5.shapeArgs;
                b && d2 && (b.attr({ r: n(a5.startR, c2.center && c2.center[3] / 2), start: e2, end: e2 }), b.animate({ r: d2.r, start: d2.start, end: d2.end }, c2.options.animation));
              });
            };
            h2.prototype.drawEmpty = function() {
              var a4 = this.startAngleRad, c2 = this.endAngleRad, d = this.options;
              if (this.total === 0 && this.center) {
                var e2 = this.center[0];
                var b = this.center[1];
                this.graph || (this.graph = this.chart.renderer.arc(e2, b, this.center[1] / 2, 0, a4, c2).addClass("highcharts-empty-series").add(this.group));
                this.graph.attr({ d: q.arc(e2, b, this.center[2] / 2, 0, { start: a4, end: c2, innerR: this.center[3] / 2 }) });
                this.chart.styledMode || this.graph.attr({ "stroke-width": d.borderWidth, fill: d.fillColor || "none", stroke: d.color || x.neutralColor20 });
              } else
                this.graph && (this.graph = this.graph.destroy());
            };
            h2.prototype.drawPoints = function() {
              var a4 = this.chart.renderer;
              this.points.forEach(function(c2) {
                c2.graphic && c2.hasNewShapeType() && (c2.graphic = c2.graphic.destroy());
                c2.graphic || (c2.graphic = a4[c2.shapeType](c2.shapeArgs).add(c2.series.group), c2.delayedRendering = true);
              });
            };
            h2.prototype.generatePoints = function() {
              a3.prototype.generatePoints.call(this);
              this.updateTotals();
            };
            h2.prototype.getX = function(a4, c2, d) {
              var f2 = this.center, b = this.radii ? this.radii[d.index] || 0 : f2[2] / 2;
              a4 = Math.asin(e((a4 - f2[1]) / (b + d.labelDistance), -1, 1));
              return f2[0] + (c2 ? -1 : 1) * Math.cos(a4) * (b + d.labelDistance) + (0 < d.labelDistance ? (c2 ? -1 : 1) * this.options.dataLabels.padding : 0);
            };
            h2.prototype.hasData = function() {
              return !!this.processedXData.length;
            };
            h2.prototype.redrawPoints = function() {
              var a4 = this, c2 = a4.chart, d = c2.renderer, e2, b, f2, h3, l2 = a4.options.shadow;
              this.drawEmpty();
              !l2 || a4.shadowGroup || c2.styledMode || (a4.shadowGroup = d.g("shadow").attr({ zIndex: -1 }).add(a4.group));
              a4.points.forEach(function(g) {
                var k = {};
                b = g.graphic;
                if (!g.isNull && b) {
                  var p = void 0;
                  h3 = g.shapeArgs;
                  e2 = g.getTranslate();
                  c2.styledMode || (p = g.shadowGroup, l2 && !p && (p = g.shadowGroup = d.g("shadow").add(a4.shadowGroup)), p && p.attr(e2), f2 = a4.pointAttribs(g, g.selected && "select"));
                  g.delayedRendering ? (b.setRadialReference(a4.center).attr(h3).attr(e2), c2.styledMode || b.attr(f2).attr({ "stroke-linejoin": "round" }).shadow(l2, p), g.delayedRendering = false) : (b.setRadialReference(a4.center), c2.styledMode || v(true, k, f2), v(true, k, h3, e2), b.animate(k));
                  b.attr({ visibility: g.visible ? "inherit" : "hidden" });
                  b.addClass(g.getClassName(), true);
                } else
                  b && (g.graphic = b.destroy());
              });
            };
            h2.prototype.sortByAngle = function(a4, c2) {
              a4.sort(function(a5, e2) {
                return typeof a5.angle !== "undefined" && (e2.angle - a5.angle) * c2;
              });
            };
            h2.prototype.translate = function(a4) {
              this.generatePoints();
              var e2 = 0, d = this.options, f2 = d.slicedOffset, b = f2 + (d.borderWidth || 0), g = c(d.startAngle, d.endAngle), h3 = this.startAngleRad = g.start;
              g = (this.endAngleRad = g.end) - h3;
              var q2 = this.points, t2 = d.dataLabels.distance;
              d = d.ignoreHiddenPoint;
              var v2, u2 = q2.length;
              a4 || (this.center = a4 = this.getCenter());
              for (v2 = 0; v2 < u2; v2++) {
                var w = q2[v2];
                var A = h3 + e2 * g;
                !w.isValid() || d && !w.visible || (e2 += w.percentage / 100);
                var x2 = h3 + e2 * g;
                var y2 = { x: a4[0], y: a4[1], r: a4[2] / 2, innerR: a4[3] / 2, start: Math.round(1e3 * A) / 1e3, end: Math.round(1e3 * x2) / 1e3 };
                w.shapeType = "arc";
                w.shapeArgs = y2;
                w.labelDistance = n(w.options.dataLabels && w.options.dataLabels.distance, t2);
                w.labelDistance = l(w.labelDistance, y2.r);
                this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, w.labelDistance);
                x2 = (x2 + A) / 2;
                x2 > 1.5 * Math.PI ? x2 -= 2 * Math.PI : x2 < -Math.PI / 2 && (x2 += 2 * Math.PI);
                w.slicedTranslation = { translateX: Math.round(Math.cos(x2) * f2), translateY: Math.round(Math.sin(x2) * f2) };
                y2 = Math.cos(x2) * a4[2] / 2;
                var B2 = Math.sin(x2) * a4[2] / 2;
                w.tooltipPos = [a4[0] + 0.7 * y2, a4[1] + 0.7 * B2];
                w.half = x2 < -Math.PI / 2 || x2 > Math.PI / 2 ? 1 : 0;
                w.angle = x2;
                A = Math.min(b, w.labelDistance / 5);
                w.labelPosition = { natural: { x: a4[0] + y2 + Math.cos(x2) * w.labelDistance, y: a4[1] + B2 + Math.sin(x2) * w.labelDistance }, "final": {}, alignment: 0 > w.labelDistance ? "center" : w.half ? "right" : "left", connectorPosition: { breakAt: { x: a4[0] + y2 + Math.cos(x2) * A, y: a4[1] + B2 + Math.sin(x2) * A }, touchingSliceAt: { x: a4[0] + y2, y: a4[1] + B2 } } };
              }
              m(this, "afterTranslate");
            };
            h2.prototype.updateTotals = function() {
              var a4, c2 = 0, d = this.points, e2 = d.length, b = this.options.ignoreHiddenPoint;
              for (a4 = 0; a4 < e2; a4++) {
                var f2 = d[a4];
                !f2.isValid() || b && !f2.visible || (c2 += f2.y);
              }
              this.total = c2;
              for (a4 = 0; a4 < e2; a4++)
                f2 = d[a4], f2.percentage = 0 < c2 && (f2.visible || !b) ? f2.y / c2 * 100 : 0, f2.total = c2;
            };
            h2.defaultOptions = v(G.defaultOptions, {
              center: [null, null],
              clip: false,
              colorByPoint: true,
              dataLabels: { allowOverlap: true, connectorPadding: 5, connectorShape: "fixedOffset", crookDistance: "70%", distance: 30, enabled: true, formatter: function() {
                return this.point.isNull ? void 0 : this.point.name;
              }, softConnector: true, x: 0 },
              fillColor: void 0,
              ignoreHiddenPoint: true,
              inactiveOtherPoints: true,
              legendType: "point",
              marker: null,
              size: null,
              showInLegend: false,
              slicedOffset: 10,
              stickyTracking: false,
              tooltip: { followPointer: true },
              borderColor: x.backgroundColor,
              borderWidth: 1,
              lineWidth: void 0,
              states: { hover: { brightness: 0.1 } }
            });
            return h2;
          }(G);
          t(h.prototype, {
            axisTypes: [],
            directTouch: true,
            drawGraph: void 0,
            drawLegendSymbol: H.drawRectangle,
            drawTracker: u.prototype.drawTracker,
            getCenter: a2.getCenter,
            getSymbol: E,
            isCartesian: false,
            noSharedTooltip: true,
            pointAttribs: u.prototype.pointAttribs,
            pointClass: y,
            requireSorting: false,
            searchPoint: E,
            trackerGroups: ["group", "dataLabelsGroup"]
          });
          B.registerSeriesType("pie", h);
          "";
          return h;
        });
        L(a, "Core/Series/DataLabels.js", [a["Core/Animation/AnimationUtilities.js"], a["Core/FormatUtilities.js"], a["Core/Globals.js"], a["Core/Color/Palette.js"], a["Core/Series/Series.js"], a["Core/Series/SeriesRegistry.js"], a["Core/Utilities.js"]], function(a2, u, E, H, x, y, G) {
          var v = a2.getDeferredAnimation, q = u.format;
          a2 = E.noop;
          y = y.seriesTypes;
          var h = G.arrayMax, f = G.clamp, c = G.defined, e = G.extend, t = G.fireEvent, m = G.isArray, w = G.merge, n = G.objectEach, l = G.pick, J = G.relativeLength, K = G.splat, A = G.stableSort;
          "";
          E.distribute = function(a3, c2, e2) {
            function b(a4, b2) {
              return a4.target - b2.target;
            }
            var d, k = true, h2 = a3, m2 = [];
            var p = 0;
            var n2 = h2.reducedLen || c2;
            for (d = a3.length; d--; )
              p += a3[d].size;
            if (p > n2) {
              A(a3, function(a4, b2) {
                return (b2.rank || 0) - (a4.rank || 0);
              });
              for (p = d = 0; p <= n2; )
                p += a3[d].size, d++;
              m2 = a3.splice(d - 1, a3.length);
            }
            A(a3, b);
            for (a3 = a3.map(function(a4) {
              return { size: a4.size, targets: [a4.target], align: l(a4.align, 0.5) };
            }); k; ) {
              for (d = a3.length; d--; )
                k = a3[d], p = (Math.min.apply(0, k.targets) + Math.max.apply(0, k.targets)) / 2, k.pos = f(p - k.size * k.align, 0, c2 - k.size);
              d = a3.length;
              for (k = false; d--; )
                0 < d && a3[d - 1].pos + a3[d - 1].size > a3[d].pos && (a3[d - 1].size += a3[d].size, a3[d - 1].targets = a3[d - 1].targets.concat(a3[d].targets), a3[d - 1].align = 0.5, a3[d - 1].pos + a3[d - 1].size > c2 && (a3[d - 1].pos = c2 - a3[d - 1].size), a3.splice(d, 1), k = true);
            }
            h2.push.apply(h2, m2);
            d = 0;
            a3.some(function(a4) {
              var b2 = 0;
              if (a4.targets.some(function() {
                h2[d].pos = a4.pos + b2;
                if (typeof e2 !== "undefined" && Math.abs(h2[d].pos - h2[d].target) > e2)
                  return h2.slice(0, d + 1).forEach(function(a5) {
                    delete a5.pos;
                  }), h2.reducedLen = (h2.reducedLen || c2) - 0.1 * c2, h2.reducedLen > 0.1 * c2 && E.distribute(h2, c2, e2), true;
                b2 += h2[d].size;
                d++;
              }))
                return true;
            });
            A(h2, b);
          };
          x.prototype.drawDataLabels = function() {
            function a3(a4, b2) {
              var c2 = b2.filter;
              return c2 ? (b2 = c2.operator, a4 = a4[c2.property], c2 = c2.value, b2 === ">" && a4 > c2 || b2 === "<" && a4 < c2 || b2 === ">=" && a4 >= c2 || b2 === "<=" && a4 <= c2 || b2 === "==" && a4 == c2 || b2 === "===" && a4 === c2 ? true : false) : true;
            }
            function d(a4, b2) {
              var c2 = [], d2;
              if (m(a4) && !m(b2))
                c2 = a4.map(function(a5) {
                  return w(a5, b2);
                });
              else if (m(b2) && !m(a4))
                c2 = b2.map(function(b3) {
                  return w(a4, b3);
                });
              else if (m(a4) || m(b2))
                for (d2 = Math.max(a4.length, b2.length); d2--; )
                  c2[d2] = w(a4[d2], b2[d2]);
              else
                c2 = w(a4, b2);
              return c2;
            }
            var e2 = this, b = e2.chart, f2 = e2.options, h2 = f2.dataLabels, u2 = e2.points, x2, A2 = e2.hasRendered || 0, C = h2.animation;
            C = h2.defer ? v(b, C, e2) : { defer: 0, duration: 0 };
            var y2 = b.renderer;
            h2 = d(d(b.options.plotOptions && b.options.plotOptions.series && b.options.plotOptions.series.dataLabels, b.options.plotOptions && b.options.plotOptions[e2.type] && b.options.plotOptions[e2.type].dataLabels), h2);
            t(this, "drawDataLabels");
            if (m(h2) || h2.enabled || e2._hasPointLabels) {
              var B = e2.plotGroup("dataLabelsGroup", "data-labels", A2 ? "inherit" : "hidden", h2.zIndex || 6);
              B.attr({ opacity: +A2 });
              !A2 && (A2 = e2.dataLabelsGroup) && (e2.visible && B.show(true), A2[f2.animation ? "animate" : "attr"]({ opacity: 1 }, C));
              u2.forEach(function(g) {
                x2 = K(d(h2, g.dlOptions || g.options && g.options.dataLabels));
                x2.forEach(function(d2, k) {
                  var h3 = d2.enabled && (!g.isNull || g.dataLabelOnNull) && a3(g, d2), m2 = g.dataLabels ? g.dataLabels[k] : g.dataLabel, p = g.connectors ? g.connectors[k] : g.connector, r = l(d2.distance, g.labelDistance), t2 = !m2;
                  if (h3) {
                    var v2 = g.getLabelConfig();
                    var u3 = l(d2[g.formatPrefix + "Format"], d2.format);
                    v2 = c(u3) ? q(u3, v2, b) : (d2[g.formatPrefix + "Formatter"] || d2.formatter).call(v2, d2);
                    u3 = d2.style;
                    var w2 = d2.rotation;
                    b.styledMode || (u3.color = l(d2.color, u3.color, e2.color, H.neutralColor100), u3.color === "contrast" ? (g.contrastColor = y2.getContrast(g.color || e2.color), u3.color = !c(r) && d2.inside || 0 > r || f2.stacking ? g.contrastColor : H.neutralColor100) : delete g.contrastColor, f2.cursor && (u3.cursor = f2.cursor));
                    var x3 = { r: d2.borderRadius || 0, rotation: w2, padding: d2.padding, zIndex: 1 };
                    b.styledMode || (x3.fill = d2.backgroundColor, x3.stroke = d2.borderColor, x3["stroke-width"] = d2.borderWidth);
                    n(x3, function(a4, b2) {
                      typeof a4 === "undefined" && delete x3[b2];
                    });
                  }
                  !m2 || h3 && c(v2) ? h3 && c(v2) && (m2 ? x3.text = v2 : (g.dataLabels = g.dataLabels || [], m2 = g.dataLabels[k] = w2 ? y2.text(v2, 0, -9999, d2.useHTML).addClass("highcharts-data-label") : y2.label(v2, 0, -9999, d2.shape, null, null, d2.useHTML, null, "data-label"), k || (g.dataLabel = m2), m2.addClass(" highcharts-data-label-color-" + g.colorIndex + " " + (d2.className || "") + (d2.useHTML ? " highcharts-tracker" : ""))), m2.options = d2, m2.attr(x3), b.styledMode || m2.css(u3).shadow(d2.shadow), m2.added || m2.add(B), d2.textPath && !d2.useHTML && (m2.setTextPath(g.getDataLabelPath && g.getDataLabelPath(m2) || g.graphic, d2.textPath), g.dataLabelPath && !d2.textPath.enabled && (g.dataLabelPath = g.dataLabelPath.destroy())), e2.alignDataLabel(g, m2, d2, null, t2)) : (g.dataLabel = g.dataLabel && g.dataLabel.destroy(), g.dataLabels && (g.dataLabels.length === 1 ? delete g.dataLabels : delete g.dataLabels[k]), k || delete g.dataLabel, p && (g.connector = g.connector.destroy(), g.connectors && (g.connectors.length === 1 ? delete g.connectors : delete g.connectors[k])));
                });
              });
            }
            t(this, "afterDrawDataLabels");
          };
          x.prototype.alignDataLabel = function(a3, c2, f2, b, g) {
            var d = this, k = this.chart, h2 = this.isCartesian && k.inverted, m2 = this.enabledDataSorting, p = l(a3.dlBox && a3.dlBox.centerX, a3.plotX, -9999), n2 = l(a3.plotY, -9999), q2 = c2.getBBox(), t2 = f2.rotation, v2 = f2.align, u2 = k.isInsidePlot(p, Math.round(n2), { inverted: h2, paneCoordinates: true, series: d }), w2 = l(f2.overflow, m2 ? "none" : "justify") === "justify", x2 = this.visible && a3.visible !== false && (a3.series.forceDL || m2 && !w2 || u2 || l(f2.inside, !!this.options.stacking) && b && k.isInsidePlot(p, h2 ? b.x + 1 : b.y + b.height - 1, { inverted: h2, paneCoordinates: true, series: d }));
            var A2 = function(b2) {
              m2 && d.xAxis && !w2 && d.setDataLabelStartPos(a3, c2, g, u2, b2);
            };
            if (x2) {
              var y2 = k.renderer.fontMetrics(k.styledMode ? void 0 : f2.style.fontSize, c2).b;
              b = e({ x: h2 ? this.yAxis.len - n2 : p, y: Math.round(h2 ? this.xAxis.len - p : n2), width: 0, height: 0 }, b);
              e(f2, { width: q2.width, height: q2.height });
              t2 ? (w2 = false, p = k.renderer.rotCorr(y2, t2), p = { x: b.x + (f2.x || 0) + b.width / 2 + p.x, y: b.y + (f2.y || 0) + { top: 0, middle: 0.5, bottom: 1 }[f2.verticalAlign] * b.height }, A2(p), c2[g ? "attr" : "animate"](p).attr({ align: v2 }), A2 = (t2 + 720) % 360, A2 = 180 < A2 && 360 > A2, v2 === "left" ? p.y -= A2 ? q2.height : 0 : v2 === "center" ? (p.x -= q2.width / 2, p.y -= q2.height / 2) : v2 === "right" && (p.x -= q2.width, p.y -= A2 ? 0 : q2.height), c2.placed = true, c2.alignAttr = p) : (A2(b), c2.align(f2, void 0, b), p = c2.alignAttr);
              w2 && 0 <= b.height ? this.justifyDataLabel(c2, f2, p, q2, b, g) : l(f2.crop, true) && (x2 = k.isInsidePlot(p.x, p.y, { paneCoordinates: true, series: d }) && k.isInsidePlot(p.x + q2.width, p.y + q2.height, { paneCoordinates: true, series: d }));
              if (f2.shape && !t2)
                c2[g ? "attr" : "animate"]({ anchorX: h2 ? k.plotWidth - a3.plotY : a3.plotX, anchorY: h2 ? k.plotHeight - a3.plotX : a3.plotY });
            }
            g && m2 && (c2.placed = false);
            x2 || m2 && !w2 || (c2.hide(true), c2.placed = false);
          };
          x.prototype.setDataLabelStartPos = function(a3, c2, e2, b, f2) {
            var d = this.chart, g = d.inverted, k = this.xAxis, h2 = k.reversed, l2 = g ? c2.height / 2 : c2.width / 2;
            a3 = (a3 = a3.pointWidth) ? a3 / 2 : 0;
            k = g ? f2.x : h2 ? -l2 - a3 : k.width - l2 + a3;
            f2 = g ? h2 ? this.yAxis.height - l2 + a3 : -l2 - a3 : f2.y;
            c2.startXPos = k;
            c2.startYPos = f2;
            b ? c2.visibility === "hidden" && (c2.show(), c2.attr({ opacity: 0 }).animate({ opacity: 1 })) : c2.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, c2.hide);
            d.hasRendered && (e2 && c2.attr({ x: c2.startXPos, y: c2.startYPos }), c2.placed = true);
          };
          x.prototype.justifyDataLabel = function(a3, c2, e2, b, f2, h2) {
            var d = this.chart, g = c2.align, k = c2.verticalAlign, l2 = a3.box ? 0 : a3.padding || 0, m2 = c2.x;
            m2 = m2 === void 0 ? 0 : m2;
            var p = c2.y;
            var n2 = p === void 0 ? 0 : p;
            p = (e2.x || 0) + l2;
            if (0 > p) {
              g === "right" && 0 <= m2 ? (c2.align = "left", c2.inside = true) : m2 -= p;
              var r = true;
            }
            p = (e2.x || 0) + b.width - l2;
            p > d.plotWidth && (g === "left" && 0 >= m2 ? (c2.align = "right", c2.inside = true) : m2 += d.plotWidth - p, r = true);
            p = e2.y + l2;
            0 > p && (k === "bottom" && 0 <= n2 ? (c2.verticalAlign = "top", c2.inside = true) : n2 -= p, r = true);
            p = (e2.y || 0) + b.height - l2;
            p > d.plotHeight && (k === "top" && 0 >= n2 ? (c2.verticalAlign = "bottom", c2.inside = true) : n2 += d.plotHeight - p, r = true);
            r && (c2.x = m2, c2.y = n2, a3.placed = !h2, a3.align(c2, void 0, f2));
            return r;
          };
          y.pie && (y.pie.prototype.dataLabelPositioners = { radialDistributionY: function(a3) {
            return a3.top + a3.distributeBox.pos;
          }, radialDistributionX: function(a3, c2, e2, b) {
            return a3.getX(e2 < c2.top + 2 || e2 > c2.bottom - 2 ? b : e2, c2.half, c2);
          }, justify: function(a3, c2, e2) {
            return e2[0] + (a3.half ? -1 : 1) * (c2 + a3.labelDistance);
          }, alignToPlotEdges: function(a3, c2, e2, b) {
            a3 = a3.getBBox().width;
            return c2 ? a3 + b : e2 - a3 - b;
          }, alignToConnectors: function(a3, c2, e2, b) {
            var d = 0, f2;
            a3.forEach(function(a4) {
              f2 = a4.dataLabel.getBBox().width;
              f2 > d && (d = f2);
            });
            return c2 ? d + b : e2 - d - b;
          } }, y.pie.prototype.drawDataLabels = function() {
            var a3 = this, d = a3.data, e2, b = a3.chart, f2 = a3.options.dataLabels || {}, m2 = f2.connectorPadding, n2, q2 = b.plotWidth, t2 = b.plotHeight, v2 = b.plotLeft, u2 = Math.round(b.chartWidth / 3), A2, y2 = a3.center, B = y2[2] / 2, G2 = y2[1], z, J2, K2, L2, X2 = [[], []], I, N, P, U, T = [0, 0, 0, 0], R = a3.dataLabelPositioners, V;
            a3.visible && (f2.enabled || a3._hasPointLabels) && (d.forEach(function(a4) {
              a4.dataLabel && a4.visible && a4.dataLabel.shortened && (a4.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a4.dataLabel.shortened = false);
            }), x.prototype.drawDataLabels.apply(a3), d.forEach(function(a4) {
              a4.dataLabel && (a4.visible ? (X2[a4.half].push(a4), a4.dataLabel._pos = null, !c(f2.style.width) && !c(a4.options.dataLabels && a4.options.dataLabels.style && a4.options.dataLabels.style.width) && a4.dataLabel.getBBox().width > u2 && (a4.dataLabel.css({ width: Math.round(0.7 * u2) + "px" }), a4.dataLabel.shortened = true)) : (a4.dataLabel = a4.dataLabel.destroy(), a4.dataLabels && a4.dataLabels.length === 1 && delete a4.dataLabels));
            }), X2.forEach(function(d2, g) {
              var h2 = d2.length, k = [], p;
              if (h2) {
                a3.sortByAngle(d2, g - 0.5);
                if (0 < a3.maxLabelDistance) {
                  var n3 = Math.max(0, G2 - B - a3.maxLabelDistance);
                  var r = Math.min(G2 + B + a3.maxLabelDistance, b.plotHeight);
                  d2.forEach(function(a4) {
                    0 < a4.labelDistance && a4.dataLabel && (a4.top = Math.max(0, G2 - B - a4.labelDistance), a4.bottom = Math.min(G2 + B + a4.labelDistance, b.plotHeight), p = a4.dataLabel.getBBox().height || 21, a4.distributeBox = { target: a4.labelPosition.natural.y - a4.top + p / 2, size: p, rank: a4.y }, k.push(a4.distributeBox));
                  });
                  n3 = r + p - n3;
                  E.distribute(k, n3, n3 / 5);
                }
                for (U = 0; U < h2; U++) {
                  e2 = d2[U];
                  K2 = e2.labelPosition;
                  z = e2.dataLabel;
                  P = e2.visible === false ? "hidden" : "inherit";
                  N = n3 = K2.natural.y;
                  k && c(e2.distributeBox) && (typeof e2.distributeBox.pos === "undefined" ? P = "hidden" : (L2 = e2.distributeBox.size, N = R.radialDistributionY(e2)));
                  delete e2.positionIndex;
                  if (f2.justify)
                    I = R.justify(e2, B, y2);
                  else
                    switch (f2.alignTo) {
                      case "connectors":
                        I = R.alignToConnectors(d2, g, q2, v2);
                        break;
                      case "plotEdges":
                        I = R.alignToPlotEdges(z, g, q2, v2);
                        break;
                      default:
                        I = R.radialDistributionX(a3, e2, N, n3);
                    }
                  z._attr = {
                    visibility: P,
                    align: K2.alignment
                  };
                  V = e2.options.dataLabels || {};
                  z._pos = { x: I + l(V.x, f2.x) + ({ left: m2, right: -m2 }[K2.alignment] || 0), y: N + l(V.y, f2.y) - 10 };
                  K2.final.x = I;
                  K2.final.y = N;
                  l(f2.crop, true) && (J2 = z.getBBox().width, n3 = null, I - J2 < m2 && g === 1 ? (n3 = Math.round(J2 - I + m2), T[3] = Math.max(n3, T[3])) : I + J2 > q2 - m2 && g === 0 && (n3 = Math.round(I + J2 - q2 + m2), T[1] = Math.max(n3, T[1])), 0 > N - L2 / 2 ? T[0] = Math.max(Math.round(-N + L2 / 2), T[0]) : N + L2 / 2 > t2 && (T[2] = Math.max(Math.round(N + L2 / 2 - t2), T[2])), z.sideOverflow = n3);
                }
              }
            }), h(T) === 0 || this.verifyDataLabelOverflow(T)) && (this.placeDataLabels(), this.points.forEach(function(c2) {
              V = w(f2, c2.options.dataLabels);
              if (n2 = l(V.connectorWidth, 1)) {
                var d2;
                A2 = c2.connector;
                if ((z = c2.dataLabel) && z._pos && c2.visible && 0 < c2.labelDistance) {
                  P = z._attr.visibility;
                  if (d2 = !A2)
                    c2.connector = A2 = b.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + c2.colorIndex + (c2.className ? " " + c2.className : "")).add(a3.dataLabelsGroup), b.styledMode || A2.attr({ "stroke-width": n2, stroke: V.connectorColor || c2.color || H.neutralColor60 });
                  A2[d2 ? "attr" : "animate"]({ d: c2.getConnectorPath() });
                  A2.attr("visibility", P);
                } else
                  A2 && (c2.connector = A2.destroy());
              }
            }));
          }, y.pie.prototype.placeDataLabels = function() {
            this.points.forEach(function(a3) {
              var c2 = a3.dataLabel, e2;
              c2 && a3.visible && ((e2 = c2._pos) ? (c2.sideOverflow && (c2._attr.width = Math.max(c2.getBBox().width - c2.sideOverflow, 0), c2.css({ width: c2._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), c2.shortened = true), c2.attr(c2._attr), c2[c2.moved ? "animate" : "attr"](e2), c2.moved = true) : c2 && c2.attr({ y: -9999 }));
              delete a3.distributeBox;
            }, this);
          }, y.pie.prototype.alignDataLabel = a2, y.pie.prototype.verifyDataLabelOverflow = function(a3) {
            var c2 = this.center, e2 = this.options, b = e2.center, g = e2.minSize || 80, h2 = e2.size !== null;
            if (!h2) {
              if (b[0] !== null)
                var l2 = Math.max(c2[2] - Math.max(a3[1], a3[3]), g);
              else
                l2 = Math.max(c2[2] - a3[1] - a3[3], g), c2[0] += (a3[3] - a3[1]) / 2;
              b[1] !== null ? l2 = f(l2, g, c2[2] - Math.max(a3[0], a3[2])) : (l2 = f(l2, g, c2[2] - a3[0] - a3[2]), c2[1] += (a3[0] - a3[2]) / 2);
              l2 < c2[2] ? (c2[2] = l2, c2[3] = Math.min(J(e2.innerSize || 0, l2), l2), this.translate(c2), this.drawDataLabels && this.drawDataLabels()) : h2 = true;
            }
            return h2;
          });
          y.column && (y.column.prototype.alignDataLabel = function(a3, c2, e2, b, f2) {
            var d = this.chart.inverted, g = a3.series, h2 = a3.dlBox || a3.shapeArgs, k = l(a3.below, a3.plotY > l(this.translatedThreshold, g.yAxis.len)), m2 = l(e2.inside, !!this.options.stacking);
            h2 && (b = w(h2), 0 > b.y && (b.height += b.y, b.y = 0), h2 = b.y + b.height - g.yAxis.len, 0 < h2 && h2 < b.height && (b.height -= h2), d && (b = { x: g.yAxis.len - b.y - b.height, y: g.xAxis.len - b.x - b.width, width: b.height, height: b.width }), m2 || (d ? (b.x += k ? 0 : b.width, b.width = 0) : (b.y += k ? b.height : 0, b.height = 0)));
            e2.align = l(e2.align, !d || m2 ? "center" : k ? "right" : "left");
            e2.verticalAlign = l(e2.verticalAlign, d || m2 ? "middle" : k ? "top" : "bottom");
            x.prototype.alignDataLabel.call(this, a3, c2, e2, b, f2);
            e2.inside && a3.contrastColor && c2.css({ color: a3.contrastColor });
          });
        });
        L(a, "Extensions/OverlappingDataLabels.js", [a["Core/Chart/Chart.js"], a["Core/Utilities.js"]], function(a2, u) {
          function v(a3, f) {
            var c = false;
            if (a3) {
              var e = a3.newOpacity;
              a3.oldOpacity !== e && (a3.alignAttr && a3.placed ? (a3[e ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), c = true, a3.alignAttr.opacity = e, a3[a3.isOld ? "animate" : "attr"](a3.alignAttr, null, function() {
                f.styledMode || a3.css({ pointerEvents: e ? "auto" : "none" });
              }), x(f, "afterHideOverlappingLabel")) : a3.attr({ opacity: e }));
              a3.isOld = true;
            }
            return c;
          }
          var H = u.addEvent, x = u.fireEvent, y = u.isArray, G = u.isNumber, B = u.objectEach, q = u.pick;
          H(a2, "render", function() {
            var a3 = this, f = [];
            (this.labelCollectors || []).forEach(function(a4) {
              f = f.concat(a4());
            });
            (this.yAxis || []).forEach(function(a4) {
              a4.stacking && a4.options.stackLabels && !a4.options.stackLabels.allowOverlap && B(a4.stacking.stacks, function(a5) {
                B(a5, function(a6) {
                  a6.label && a6.label.visibility !== "hidden" && f.push(a6.label);
                });
              });
            });
            (this.series || []).forEach(function(c) {
              var e = c.options.dataLabels;
              c.visible && (e.enabled !== false || c._hasPointLabels) && (e = function(c2) {
                return c2.forEach(function(c3) {
                  c3.visible && (y(c3.dataLabels) ? c3.dataLabels : c3.dataLabel ? [c3.dataLabel] : []).forEach(function(e2) {
                    var h = e2.options;
                    e2.labelrank = q(h.labelrank, c3.labelrank, c3.shapeArgs && c3.shapeArgs.height);
                    h.allowOverlap ? (e2.oldOpacity = e2.opacity, e2.newOpacity = 1, v(e2, a3)) : f.push(e2);
                  });
                });
              }, e(c.nodes || []), e(c.points));
            });
            this.hideOverlappingLabels(f);
          });
          a2.prototype.hideOverlappingLabels = function(a3) {
            var f = this, c = a3.length, e = f.renderer, h, m, q2, n = false;
            var l = function(a4) {
              var c2, d = a4.box ? 0 : a4.padding || 0, f2 = c2 = 0, b;
              if (a4 && (!a4.alignAttr || a4.placed)) {
                var g = a4.alignAttr || { x: a4.attr("x"), y: a4.attr("y") };
                var h2 = a4.parentGroup;
                a4.width || (c2 = a4.getBBox(), a4.width = c2.width, a4.height = c2.height, c2 = e.fontMetrics(null, a4.element).h);
                var l2 = a4.width - 2 * d;
                (b = { left: "0", center: "0.5", right: "1" }[a4.alignValue]) ? f2 = +b * l2 : G(a4.x) && Math.round(a4.x) !== a4.translateX && (f2 = a4.x - a4.translateX);
                return { x: g.x + (h2.translateX || 0) + d - (f2 || 0), y: g.y + (h2.translateY || 0) + d - c2, width: a4.width - 2 * d, height: a4.height - 2 * d };
              }
            };
            for (m = 0; m < c; m++)
              if (h = a3[m])
                h.oldOpacity = h.opacity, h.newOpacity = 1, h.absoluteBox = l(h);
            a3.sort(function(a4, c2) {
              return (c2.labelrank || 0) - (a4.labelrank || 0);
            });
            for (m = 0; m < c; m++) {
              var u2 = (l = a3[m]) && l.absoluteBox;
              for (h = m + 1; h < c; ++h) {
                var y2 = (q2 = a3[h]) && q2.absoluteBox;
                !u2 || !y2 || l === q2 || l.newOpacity === 0 || q2.newOpacity === 0 || y2.x >= u2.x + u2.width || y2.x + y2.width <= u2.x || y2.y >= u2.y + u2.height || y2.y + y2.height <= u2.y || ((l.labelrank < q2.labelrank ? l : q2).newOpacity = 0);
              }
            }
            a3.forEach(function(a4) {
              v(a4, f) && (n = true);
            });
            n && x(f, "afterHideAllOverlappingLabels");
          };
        });
        L(a, "Core/Responsive.js", [a["Core/Utilities.js"]], function(a2) {
          var v = a2.extend, E = a2.find, H = a2.isArray, x = a2.isObject, y = a2.merge, G = a2.objectEach, B = a2.pick, q = a2.splat, h = a2.uniqueKey, f = function() {
            function a3() {
            }
            a3.prototype.currentOptions = function(a4) {
              function c(a5, f3, h2, m) {
                var l;
                G(a5, function(a6, d) {
                  if (!m && -1 < e.collectionsWithUpdate.indexOf(d) && f3[d])
                    for (a6 = q(a6), h2[d] = [], l = 0; l < Math.max(a6.length, f3[d].length); l++)
                      f3[d][l] && (a6[l] === void 0 ? h2[d][l] = f3[d][l] : (h2[d][l] = {}, c(a6[l], f3[d][l], h2[d][l], m + 1)));
                  else
                    x(a6) ? (h2[d] = H(a6) ? [] : {}, c(a6, f3[d] || {}, h2[d], m + 1)) : h2[d] = typeof f3[d] === "undefined" ? null : f3[d];
                });
              }
              var e = this, f2 = {};
              c(a4, this.options, f2, 0);
              return f2;
            };
            a3.prototype.matchResponsiveRule = function(a4, c) {
              var e = a4.condition;
              (e.callback || function() {
                return this.chartWidth <= B(e.maxWidth, Number.MAX_VALUE) && this.chartHeight <= B(e.maxHeight, Number.MAX_VALUE) && this.chartWidth >= B(e.minWidth, 0) && this.chartHeight >= B(e.minHeight, 0);
              }).call(this) && c.push(a4._id);
            };
            a3.prototype.setResponsive = function(a4, c) {
              var e = this.options.responsive, f2 = this.currentResponsive, n = [];
              !c && e && e.rules && e.rules.forEach(function(a5) {
                typeof a5._id === "undefined" && (a5._id = h());
                this.matchResponsiveRule(a5, n);
              }, this);
              c = y.apply(void 0, n.map(function(a5) {
                return E((e || {}).rules || [], function(c2) {
                  return c2._id === a5;
                });
              }).map(function(a5) {
                return a5 && a5.chartOptions;
              }));
              c.isResponsiveOptions = true;
              n = n.toString() || void 0;
              n !== (f2 && f2.ruleIds) && (f2 && this.update(f2.undoOptions, a4, true), n ? (f2 = this.currentOptions(c), f2.isResponsiveOptions = true, this.currentResponsive = { ruleIds: n, mergedOptions: c, undoOptions: f2 }, this.update(c, a4, true)) : this.currentResponsive = void 0);
            };
            return a3;
          }();
          a2 = function() {
            function a3() {
            }
            a3.compose = function(a4) {
              v(a4.prototype, f.prototype);
              return a4;
            };
            return a3;
          }();
          "";
          "";
          return a2;
        });
        L(a, "masters/highcharts.src.js", [
          a["Core/Globals.js"],
          a["Core/Utilities.js"],
          a["Core/DefaultOptions.js"],
          a["Core/Animation/Fx.js"],
          a["Core/Animation/AnimationUtilities.js"],
          a["Core/Renderer/HTML/AST.js"],
          a["Core/FormatUtilities.js"],
          a["Core/Renderer/SVG/SVGElement.js"],
          a["Core/Renderer/SVG/SVGRenderer.js"],
          a["Core/Renderer/HTML/HTMLElement.js"],
          a["Core/Renderer/HTML/HTMLRenderer.js"],
          a["Core/Axis/Axis.js"],
          a["Core/Axis/PlotLineOrBand.js"],
          a["Core/Axis/Tick.js"],
          a["Core/Pointer.js"],
          a["Core/MSPointer.js"],
          a["Core/Chart/Chart.js"],
          a["Core/Series/Series.js"],
          a["Core/Responsive.js"],
          a["Core/Color/Color.js"],
          a["Core/Time.js"]
        ], function(a2, u, E, H, x, y, G, B, q, h, f, c, e, t, m, w, n, l, J, K, A) {
          a2.animate = x.animate;
          a2.animObject = x.animObject;
          a2.getDeferredAnimation = x.getDeferredAnimation;
          a2.setAnimation = x.setAnimation;
          a2.stop = x.stop;
          a2.timers = H.timers;
          a2.AST = y;
          a2.Axis = c;
          a2.Chart = n;
          a2.chart = n.chart;
          a2.Fx = H;
          a2.PlotLineOrBand = e;
          a2.Pointer = w.isRequired() ? w : m;
          a2.Series = l;
          a2.SVGElement = B;
          a2.SVGRenderer = q;
          a2.Tick = t;
          a2.Time = A;
          a2.Color = K;
          a2.color = K.parse;
          f.compose(q);
          h.compose(B);
          a2.defaultOptions = E.defaultOptions;
          a2.getOptions = E.getOptions;
          a2.time = E.defaultTime;
          a2.setOptions = E.setOptions;
          a2.dateFormat = G.dateFormat;
          a2.format = G.format;
          a2.numberFormat = G.numberFormat;
          a2.addEvent = u.addEvent;
          a2.arrayMax = u.arrayMax;
          a2.arrayMin = u.arrayMin;
          a2.attr = u.attr;
          a2.clearTimeout = u.clearTimeout;
          a2.correctFloat = u.correctFloat;
          a2.createElement = u.createElement;
          a2.css = u.css;
          a2.defined = u.defined;
          a2.destroyObjectProperties = u.destroyObjectProperties;
          a2.discardElement = u.discardElement;
          a2.erase = u.erase;
          a2.error = u.error;
          a2.extend = u.extend;
          a2.extendClass = u.extendClass;
          a2.find = u.find;
          a2.fireEvent = u.fireEvent;
          a2.getMagnitude = u.getMagnitude;
          a2.getStyle = u.getStyle;
          a2.inArray = u.inArray;
          a2.isArray = u.isArray;
          a2.isClass = u.isClass;
          a2.isDOMElement = u.isDOMElement;
          a2.isFunction = u.isFunction;
          a2.isNumber = u.isNumber;
          a2.isObject = u.isObject;
          a2.isString = u.isString;
          a2.keys = u.keys;
          a2.merge = u.merge;
          a2.normalizeTickInterval = u.normalizeTickInterval;
          a2.objectEach = u.objectEach;
          a2.offset = u.offset;
          a2.pad = u.pad;
          a2.pick = u.pick;
          a2.pInt = u.pInt;
          a2.relativeLength = u.relativeLength;
          a2.removeEvent = u.removeEvent;
          a2.splat = u.splat;
          a2.stableSort = u.stableSort;
          a2.syncTimeout = u.syncTimeout;
          a2.timeUnits = u.timeUnits;
          a2.uniqueKey = u.uniqueKey;
          a2.useSerialIds = u.useSerialIds;
          a2.wrap = u.wrap;
          J.compose(n);
          return a2;
        });
        a["masters/highcharts.src.js"]._modules = a;
        return a["masters/highcharts.src.js"];
      });
    }
  });

  // page/request.ts
  var require_request = __commonJS({
    "page/request.ts"(exports, module) {
      var Highcharts = require_highcharts();
      Array.prototype.groupBy = function(propertyName) {
        let map = new Map(), groups = [];
        this.forEach((item) => {
          let key = item[propertyName];
          if (map.has(key)) {
            let elm = map.get(key);
            elm.push(item);
            map.set(key, elm);
          } else {
            map.set(key, [item]);
          }
        });
        for (const it of Array.from(map)) {
          groups.push(Object.defineProperty(new Object(), it[0], {
            value: it[1],
            enumerable: true,
            writable: false
          }));
        }
        return groups;
      };
      var Chart = class {
        constructor(container, title, data) {
          this.renderChart(container, title, data);
        }
        renderChart(container, title, data) {
          Highcharts.chart(container, {
            chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: "pie"
            },
            title: {
              text: title
            },
            tooltip: {
              pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
            },
            accessibility: {
              point: {
                valueSuffix: "%"
              }
            },
            plotOptions: {
              pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                  enabled: true,
                  format: "<b>{point.name}</b>: {point.percentage:.1f} %"
                }
              }
            },
            series: [{
              name: "Brands",
              colorByPoint: true,
              data
            }]
          });
        }
      };
      var HttpRequest = class {
        static async SendAsync(objRequest) {
          const request = await fetch(objRequest);
          const data = await request.json();
          return data;
        }
      };
      var Wallet = class {
        constructor(data) {
          this.cryptos = [];
          this.prices = [];
          this.seriesData = [];
          this.GetTokens(data);
        }
        async Converter(amount, from, to = "USD") {
          let objRequest = new Request("http://cryptodata.somee.com/api/conversion", {
            method: "POST",
            body: JSON.stringify({
              baseUrl: "https://sandbox-api.coinmarketcap.com",
              endpoint: "v1/tools/price-conversion",
              params: {
                amount,
                convert: from,
                to
              }
            })
          });
          return await HttpRequest.SendAsync(objRequest);
        }
        toNumber(value) {
          return Number.parseInt(value);
        }
        toFloat(value, fixed) {
          let number = Number(value);
          return fixed ? Number(number.toFixed(fixed)) : number;
        }
      };
      var WalletKucoin = class extends Wallet {
        constructor(data, container, title) {
          super(data);
          this.container = container;
          this.title = title;
          this.Render();
        }
        GetCapital() {
          throw new Error("Method not implemented.");
        }
        GetTokens(tokens) {
          this.cryptos = tokens.data.filter((x) => x.balance !== "0").map((t) => {
            let currency = t.currency, holds = this.toFloat(t.holds.toString(), 7), balance = this.toFloat(t.balance.toString(), 7), available = this.toFloat(t.available.toString(), 7), type = t.type;
            return { currency, balance, available, holds, type };
          });
          console.log("groupbu", this.cryptos.groupBy("currency"));
        }
        Render() {
          const series = this.cryptos.map((token) => {
            let { currency: name, balance: y } = token;
            y = parseFloat(y.toFixed(7));
            return { name, y };
          });
          new Chart(this.container, this.title, series);
        }
      };
      var WalletBinance = class extends Wallet {
        constructor(data, container, title) {
          super(data);
          this.container = container;
          this.title = title;
          this.Render();
        }
        GetCapital() {
          throw new Error("Method not implemented.");
        }
        GetTokens(tokens) {
          this.cryptos = tokens.filter((x) => x.free != "0" || x.locked != "0").map((x) => {
            let coin = x.coin, free = this.toFloat(x.free.toString(), 7), locked = this.toFloat(x.locked.toString(), 7), balance = free + locked;
            return { coin, free, locked, balance };
          });
        }
        Render() {
          const series = this.cryptos.map((token) => {
            let { coin: name, balance: y } = token;
            y = parseFloat(y.toFixed(7));
            return { name, y };
          });
          new Chart(this.container, this.title, series);
        }
      };
      module.exports = {
        HRequest: HttpRequest,
        WKucoin: WalletKucoin,
        WBinance: WalletBinance
      };
    }
  });

  // page/app.ts
  var { HRequest, WKucoin, WBinance } = require_request();
  window.addEventListener("load", () => {
    if (!GetDataStorage("Kucoin")) {
      localStorage.setItem("kucoin", JSON.stringify([]));
    }
    if (!GetDataStorage("binance")) {
      localStorage.setItem("binance", JSON.stringify([]));
    }
  });
  function createElement(config) {
    let element = document.createElement(`${config.element}`);
    let key;
    for (key in config) {
      element.setAttribute(key, `${config[key]}`);
    }
    ;
    return element;
  }
  function clear() {
    const inputs = document.querySelectorAll("input[type=text]");
    inputs.forEach((element) => {
      element.value = "";
    });
  }
  var select = document.querySelector(".selected-exchange");
  select?.addEventListener("change", WalletToggle);
  function WalletToggle() {
    const input = document.querySelector("input[name=apiPassphrase]");
    if (input?.classList.contains("hide")) {
      input?.classList.remove("hide");
    } else {
      input?.classList.add("hide");
    }
    clear();
  }
  var submit = document.forms[0];
  submit?.addEventListener("submit", Save);
  var walletOptions = document.querySelector(".wallet-options");
  walletOptions?.addEventListener("click", async (evt) => {
    SelectedOption(evt);
  });
  function Save(evt) {
    evt.preventDefault();
    let wallet = select?.value;
    let credential = GetFormData(evt.target);
    StoreCredential(credential, wallet);
    clear();
  }
  function StoreCredential(credential, wallet) {
    if (!IsExists(credential, wallet)) {
      let credentials = GetDataStorage(wallet) ?? [];
      credentials.push(credential);
      SetDataStorage(wallet, credentials);
      return;
    }
    console.error("ya existe");
  }
  function IsExists(credential, storageName) {
    let collection = GetDataStorage(storageName) ?? [];
    if (collection.length > 0) {
      return collection.find(findVal(credential)) ? true : false;
    }
    return false;
  }
  function findVal(credential) {
    return function(old) {
      return old.apiKey == credential.apiKey && old.apiSecret == credential.apiSecret && old.apiPassphrase == credential.apiPassphrase;
    };
  }
  function GetFormData(form) {
    return Object.fromEntries(new FormData(form).entries());
  }
  function GetDataStorage(wallet) {
    let storage = localStorage.getItem(wallet);
    return JSON.parse(storage ?? "[]");
  }
  function SetDataStorage(wallet, credentials) {
    let serialize = JSON.stringify(credentials);
    localStorage.setItem(wallet, serialize);
  }
  async function SendRequestAsync(wallet, body) {
    let uri = `http://localhost:8190/api/v1/Wallet/${wallet}`;
    let objRequest = new Request(uri, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body)
    });
    return await HRequest.SendAsync(objRequest);
  }
  async function WalletRequestAsync(wallet) {
    let collection = GetDataStorage(wallet);
    let arrPromise = collection?.map(async (credential) => await SendRequestAsync(wallet, credential));
    return await Promise.all(arrPromise);
  }
  async function AllWalletRequestAsync() {
    return await Promise.all([WalletRequestAsync("binance"), WalletRequestAsync("kucoin")]);
  }
  async function SelectedOption(evt) {
    let { id: target } = evt.target;
    let divCount = 0;
    let chartContainer = document.querySelector(".highcharts-figure");
    switch (target) {
      case "all":
        console.log(await AllWalletRequestAsync());
        break;
      case "binance":
        for await (const iterator of await WalletRequestAsync("binance")) {
          let id = `chart-binance-n${++divCount}`;
          let subContainer = createElement({ element: "div", id });
          chartContainer?.appendChild(subContainer);
          new WBinance(iterator, id, "Portfolio");
        }
        break;
      case "kucoin":
        for (const iterator of await WalletRequestAsync("kucoin")) {
          let id = `chart-kucoin6-n${++divCount}`;
          let subContainer = createElement({ element: "div", id });
          chartContainer?.appendChild(subContainer);
          new WKucoin(iterator, id, "Portfolio");
        }
        break;
    }
    divCount = 0;
  }
})();
