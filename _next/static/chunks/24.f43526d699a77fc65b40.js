(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [24],
  {
    DeL4: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('9fIP'),
        s = a('MMYH'),
        c = a('8K1b'),
        r = a('K/z8'),
        o = a('sRHE'),
        i = a('ERkP'),
        u = a.n(i),
        l = (a('xGVU'), u.a.createElement);
      function f(e) {
        var t = (function() {
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
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var a,
            n = Object(o.a)(e);
          if (t) {
            var s = Object(o.a)(this).constructor;
            a = Reflect.construct(n, arguments, s);
          } else a = n.apply(this, arguments);
          return Object(r.a)(this, a);
        };
      }
      var m = (function(e) {
        Object(c.a)(a, e);
        var t = f(a);
        function a() {
          return Object(n.a)(this, a), t.apply(this, arguments);
        }
        return (
          Object(s.a)(a, [
            {
              key: 'render',
              value: function() {
                return l(
                  'div',
                  { className: 'NewsItem' },
                  l(
                    'div',
                    { className: 'NewsItem__Header' },
                    l('img', {
                      className: 'NewsItem__Image',
                      src: this.props.image,
                      alt: 'tin tuc',
                    })
                  ),
                  l('div', { className: 'NewsItem__Tag' }, 'TIN T\u1ee8C'),
                  l('div', { className: 'NewsItem__Title' }, this.props.title),
                  l(
                    'div',
                    { className: 'NewsItem__Footer' },
                    l(
                      'span',
                      { className: 'NewsItem__Footer__Datetime' },
                      'May 07, 2018'
                    ),
                    l(
                      'span',
                      { className: 'NewsItem__Footer__Like' },
                      'Th\xedch 0'
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(i.Component);
      t.default = m;
    },
  },
]);
