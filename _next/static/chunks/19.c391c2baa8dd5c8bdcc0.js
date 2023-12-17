(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [19, 27],
  {
    '+9q6': function(t, e, r) {
      'use strict';
      r.r(e);
      var n = r('9fIP'),
        o = r('MMYH'),
        i = r('8K1b'),
        a = r('K/z8'),
        c = r('sRHE'),
        u = r('ERkP'),
        s = r.n(u),
        l = (r('pIXK'), r('aWzz')),
        f = r.n(l),
        h = s.a.createElement;
      function p(t) {
        var e = (function() {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function() {
          var r,
            n = Object(c.a)(t);
          if (e) {
            var o = Object(c.a)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Object(a.a)(this, r);
        };
      }
      var y = { title: f.a.string, dataAOS: f.a.bool },
        v = (function(t) {
          Object(i.a)(r, t);
          var e = p(r);
          function r() {
            return Object(n.a)(this, r), e.apply(this, arguments);
          }
          return (
            Object(o.a)(r, [
              {
                key: 'render',
                value: function() {
                  h('div', null);
                  return this.props.dataAOS
                    ? h(
                        'div',
                        { className: 'Title', 'data-aos': this.props.dataAOS },
                        h('span', { className: 'Title__Line' }),
                        h(
                          'span',
                          { className: 'Title__Text' },
                          this.props.title
                        )
                      )
                    : h(
                        'div',
                        { className: 'Title' },
                        h('span', { className: 'Title__Line' }),
                        h(
                          'span',
                          { className: 'Title__Text' },
                          this.props.title
                        )
                      );
                },
              },
            ]),
            r
          );
        })(u.Component);
      (v.propStyles = y), (e.default = v);
    },
    '8ZQb': function(t, e, r) {
      'use strict';
      var n = r('9fIP'),
        o = r('MMYH'),
        i = r('8K1b'),
        a = r('K/z8'),
        c = r('sRHE'),
        u = r('ERkP'),
        s = r.n(u),
        l = (r('wyi6'), s.a.createElement);
      function f(t) {
        var e = (function() {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function() {
          var r,
            n = Object(c.a)(t);
          if (e) {
            var o = Object(c.a)(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return Object(a.a)(this, r);
        };
      }
      var h = (function(t) {
        Object(i.a)(r, t);
        var e = f(r);
        function r() {
          return Object(n.a)(this, r), e.apply(this, arguments);
        }
        return (
          Object(o.a)(r, [
            {
              key: 'render',
              value: function() {
                return l('button', { className: 'Btn' }, this.props.text);
              },
            },
          ]),
          r
        );
      })(u.Component);
      e.a = h;
    },
    xSYh: function(t, e, r) {
      'use strict';
      r.r(e);
      var n = r('QsI/'),
        o = r('ERkP'),
        i = r.n(o),
        a = r('AU4o'),
        c = r.n(a),
        u = (r('ckM2'), r('TWeG'), r('+9q6')),
        s = r('8ZQb'),
        l = i.a.createElement;
      function f() {
        f = function() {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function(t, e, r) {
              t[e] = r.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          c = i.asyncIterator || '@@asyncIterator',
          u = i.toStringTag || '@@toStringTag';
        function s(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          s({}, '');
        } catch (t) {
          s = function(t, e, r) {
            return (t[e] = r);
          };
        }
        function l(t, e, r, n) {
          var i = e && e.prototype instanceof m ? e : m,
            a = Object.create(i.prototype),
            c = new P(n || []);
          return o(a, '_invoke', { value: j(t, r, c) }), a;
        }
        function h(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = l;
        var p = 'suspendedStart',
          y = 'executing',
          v = 'completed',
          d = {};
        function m() {}
        function g() {}
        function w() {}
        var b = {};
        s(b, a, function() {
          return this;
        });
        var E = Object.getPrototypeOf,
          x = E && E(E(R([])));
        x && x !== r && n.call(x, a) && (b = x);
        var L = (w.prototype = m.prototype = Object.create(b));
        function O(t) {
          ['next', 'throw', 'return'].forEach(function(e) {
            s(t, e, function(t) {
              return this._invoke(e, t);
            });
          });
        }
        function _(t, e) {
          function r(o, i, a, c) {
            var u = h(t[o], t, i);
            if ('throw' !== u.type) {
              var s = u.arg,
                l = s.value;
              return l && 'object' == typeof l && n.call(l, '__await')
                ? e.resolve(l.__await).then(
                    function(t) {
                      r('next', t, a, c);
                    },
                    function(t) {
                      r('throw', t, a, c);
                    }
                  )
                : e.resolve(l).then(
                    function(t) {
                      (s.value = t), a(s);
                    },
                    function(t) {
                      return r('throw', t, a, c);
                    }
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, '_invoke', {
            value: function(t, n) {
              function o() {
                return new e(function(e, o) {
                  r(t, n, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function j(e, r, n) {
          var o = p;
          return function(i, a) {
            if (o === y) throw new Error('Generator is already running');
            if (o === v) {
              if ('throw' === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = N(c, n);
                if (u) {
                  if (u === d) continue;
                  return u;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if (o === p) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = y;
              var s = h(e, r, n);
              if ('normal' === s.type) {
                if (((o = n.done ? v : 'suspendedYield'), s.arg === d))
                  continue;
                return { value: s.arg, done: n.done };
              }
              'throw' === s.type &&
                ((o = v), (n.method = 'throw'), (n.arg = s.arg));
            }
          };
        }
        function N(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((r.method = 'return'),
                (r.arg = t),
                N(e, r),
                'throw' === r.method)) ||
                ('return' !== n &&
                  ((r.method = 'throw'),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var i = h(o, e.iterator, r.arg);
          if ('throw' === i.type)
            return (
              (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), d
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                (r.delegate = null),
                d)
              : a
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              d);
        }
        function k(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function T(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(k, this),
            this.reset(!0);
        }
        function R(e) {
          if (e || '' === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(typeof e + ' is not iterable');
        }
        return (
          (g.prototype = w),
          o(L, 'constructor', { value: w, configurable: !0 }),
          o(w, 'constructor', { value: g, configurable: !0 }),
          (g.displayName = s(w, u, 'GeneratorFunction')),
          (e.isGeneratorFunction = function(t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function(t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, w)
                : ((t.__proto__ = w), s(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(L)),
              t
            );
          }),
          (e.awrap = function(t) {
            return { __await: t };
          }),
          O(_.prototype),
          s(_.prototype, c, function() {
            return this;
          }),
          (e.AsyncIterator = _),
          (e.async = function(t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new _(l(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function(t) {
                  return t.done ? t.value : a.next();
                });
          }),
          O(L),
          s(L, u, 'Generator'),
          s(L, a, function() {
            return this;
          }),
          s(L, 'toString', function() {
            return '[object Generator]';
          }),
          (e.keys = function(t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = R),
          (P.prototype = {
            constructor: P,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(T),
                !e)
              )
                for (var r in this)
                  't' === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = 'throw'),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = 'next'), (r.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ('root' === a.tryLoc) return o('end');
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, 'catchLoc'),
                    s = n.call(a, 'finallyLoc');
                  if (u && s) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), d)
                  : this.complete(a)
              );
            },
            complete: function(t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                d
              );
            },
            finish: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), T(r), d;
              }
            },
            catch: function(t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    T(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function(e, r, n) {
              return (
                (this.delegate = { iterator: R(e), resultName: r, nextLoc: n }),
                'next' === this.method && (this.arg = t),
                d
              );
            },
          }),
          e
        );
      }
      var h = c()(
          function() {
            return Promise.all([r.e(0), r.e(24)]).then(r.bind(null, 'DeL4'));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return ['DeL4'];
              },
              modules: ['./NewsItem/NewsItem'],
            },
          }
        ),
        p = function(t) {
          return l(
            'div',
            { className: 'News' },
            l(u.default, { title: 'Tin n\u1ed5i b\u1eadt' }),
            l(
              'div',
              { className: 'News__Content' },
              l(h, {
                title:
                  'Canape l\xe0 g\xec? Nh\u1eefng th\xf4ng tin th\xfa v\u1ecb v\u1ec1 Canape',
                brief: '',
                image:
                  'https://img.taste.com.au/8MQ39R4L/taste/2016/11/classic-canape-trio-90416-1.jpeg',
              }),
              l(h, {
                title: 'Ch\u01b0\u01a1ng tr\xecnh Taste Of Australia 2018',
                brief: '',
                image: '/static/img/news_2.jpg',
              }),
              l(h, {
                title: 'Connect - Employee Newsletter 1',
                brief: '',
                image: '/static/img/news_3.jpg',
              })
            ),
            l(
              'div',
              { className: 'text-center mt-4' },
              l(s.a, { text: 'Xem t\u1ea5t c\u1ea3' })
            )
          );
        };
      (p.getInitialProps = Object(n.a)(
        f().mark(function t() {
          return f().wrap(function(t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  console.log('heheh');
                case 1:
                case 'end':
                  return t.stop();
              }
          }, t);
        })
      )),
        (e.default = p);
    },
  },
]);
