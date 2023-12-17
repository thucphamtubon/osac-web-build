(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7, 27],
  {
    '+9q6': function(t, e, n) {
      'use strict';
      n.r(e);
      var c = n('9fIP'),
        a = n('MMYH'),
        r = n('8K1b'),
        i = n('K/z8'),
        o = n('sRHE'),
        s = n('ERkP'),
        u = n.n(s),
        l = (n('pIXK'), n('aWzz')),
        f = n.n(l),
        p = u.a.createElement;
      function h(t) {
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
            c = Object(o.a)(t);
          if (e) {
            var a = Object(o.a)(this).constructor;
            n = Reflect.construct(c, arguments, a);
          } else n = c.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var m = { title: f.a.string, dataAOS: f.a.bool },
        v = (function(t) {
          Object(r.a)(n, t);
          var e = h(n);
          function n() {
            return Object(c.a)(this, n), e.apply(this, arguments);
          }
          return (
            Object(a.a)(n, [
              {
                key: 'render',
                value: function() {
                  p('div', null);
                  return this.props.dataAOS
                    ? p(
                        'div',
                        { className: 'Title', 'data-aos': this.props.dataAOS },
                        p('span', { className: 'Title__Line' }),
                        p(
                          'span',
                          { className: 'Title__Text' },
                          this.props.title
                        )
                      )
                    : p(
                        'div',
                        { className: 'Title' },
                        p('span', { className: 'Title__Line' }),
                        p(
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
        })(s.Component);
      (v.propStyles = m), (e.default = v);
    },
    cCqs: function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'ItemServices', function() {
          return _;
        });
      var c = n('9fIP'),
        a = n('MMYH'),
        r = n('8K1b'),
        i = n('K/z8'),
        o = n('sRHE'),
        s = n('ERkP'),
        u = n.n(s),
        l = (n('njYc'), n('mtCy'), u.a.createElement);
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
          var n,
            c = Object(o.a)(t);
          if (e) {
            var a = Object(o.a)(this).constructor;
            n = Reflect.construct(c, arguments, a);
          } else n = c.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var p = {
          can_tin: '/static/img/bep-truong-hoc.jpg',
          bep_an_cong_nghiep: '/static/img/business-lunch.jpg',
          to_chuc_tiec: '/static/img/pranzo-sociale.jpg',
          dich_vu_khac: '/static/img/catering.jpg',
        },
        h = (function(t) {
          Object(r.a)(n, t);
          var e = f(n);
          function n() {
            return Object(c.a)(this, n), e.apply(this, arguments);
          }
          return (
            Object(a.a)(n, [
              {
                key: 'render',
                value: function() {
                  return l(
                    'div',
                    {
                      className: 'ItemService',
                      'data-aos': 'flip-left',
                      'data-aos-duration': '800',
                      'data-aos-easing': 'ease-in-out',
                      'data-aos-anchor-placement': 'top-bottom',
                    },
                    l('div', {
                      className: 'ItemService__Img',
                      style: {
                        backgroundImage: 'url('.concat(
                          p[this.props.image],
                          ')'
                        ),
                      },
                    }),
                    l(
                      'div',
                      { className: 'ItemService__Title' },
                      this.props.title
                    )
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        m = n('+9q6'),
        v = u.a.createElement;
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
            c = Object(o.a)(t);
          if (e) {
            var a = Object(o.a)(this).constructor;
            n = Reflect.construct(c, arguments, a);
          } else n = c.apply(this, arguments);
          return Object(i.a)(this, n);
        };
      }
      var _ = (function(t) {
        Object(r.a)(n, t);
        var e = d(n);
        function n() {
          return Object(c.a)(this, n), e.apply(this, arguments);
        }
        return (
          Object(a.a)(n, [
            {
              key: 'render',
              value: function() {
                return v(
                  u.a.Fragment,
                  null,
                  v(m.default, {
                    title: 'S\u1ea3n Ph\u1ea9m - D\u1ecbch v\u1ee5',
                  }),
                  v(
                    'div',
                    { className: 'ItemServices' },
                    v(h, {
                      image: 'bep_an_cong_nghiep',
                      title: 'b\u1ebfp \u0103n c\xf4ng nghi\u1ec7p',
                    }),
                    v(h, {
                      image: 'can_tin',
                      title: 'b\u1ebfp \u0103n tr\u01b0\u1eddng h\u1ecdc',
                    }),
                    v(h, {
                      image: 'to_chuc_tiec',
                      title: 't\u1ed5 ch\u1ee9c ti\u1ec7c',
                    }),
                    v(h, {
                      image: 'dich_vu_khac',
                      title: 'd\u1ecbch v\u1ee5 kh\xe1c',
                    })
                  )
                );
              },
            },
          ]),
          n
        );
      })(s.Component);
      e.default = _;
    },
  },
]);
