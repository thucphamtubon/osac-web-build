(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [27],
  {
    '+9q6': function(t, e, n) {
      'use strict';
      n.r(e);
      var a = n('9fIP'),
        r = n('MMYH'),
        s = n('8K1b'),
        c = n('K/z8'),
        i = n('sRHE'),
        o = n('ERkP'),
        l = n.n(o),
        u = (n('pIXK'), n('aWzz')),
        p = n.n(u),
        f = l.a.createElement;
      function d(t) {
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
          var n,
            a = Object(i.a)(t);
          if (e) {
            var r = Object(i.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(c.a)(this, n);
        };
      }
      var h = { title: p.a.string, dataAOS: p.a.bool },
        _ = (function(t) {
          Object(s.a)(n, t);
          var e = d(n);
          function n() {
            return Object(a.a)(this, n), e.apply(this, arguments);
          }
          return (
            Object(r.a)(n, [
              {
                key: 'render',
                value: function() {
                  f('div', null);
                  return this.props.dataAOS
                    ? f(
                        'div',
                        { className: 'Title', 'data-aos': this.props.dataAOS },
                        f('span', { className: 'Title__Line' }),
                        f(
                          'span',
                          { className: 'Title__Text' },
                          this.props.title
                        )
                      )
                    : f(
                        'div',
                        { className: 'Title' },
                        f('span', { className: 'Title__Line' }),
                        f(
                          'span',
                          { className: 'Title__Text' },
                          this.props.title
                        )
                      );
                },
              },
            ]),
            n
          );
        })(o.Component);
      (_.propStyles = h), (e.default = _);
    },
  },
]);
