(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [22],
  {
    '8ZQb': function(t, e, a) {
      'use strict';
      var n = a('9fIP'),
        c = a('MMYH'),
        o = a('8K1b'),
        r = a('K/z8'),
        s = a('sRHE'),
        i = a('ERkP'),
        u = a.n(i),
        f = (a('wyi6'), u.a.createElement);
      function l(t) {
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
          var a,
            n = Object(s.a)(t);
          if (e) {
            var c = Object(s.a)(this).constructor;
            a = Reflect.construct(n, arguments, c);
          } else a = n.apply(this, arguments);
          return Object(r.a)(this, a);
        };
      }
      var h = (function(t) {
        Object(o.a)(a, t);
        var e = l(a);
        function a() {
          return Object(n.a)(this, a), e.apply(this, arguments);
        }
        return (
          Object(c.a)(a, [
            {
              key: 'render',
              value: function() {
                return f('button', { className: 'Btn' }, this.props.text);
              },
            },
          ]),
          a
        );
      })(i.Component);
      e.a = h;
    },
    CQ0a: function(t, e, a) {
      'use strict';
      a.r(e),
        a.d(e, 'ReasonItem', function() {
          return p;
        });
      var n = a('9fIP'),
        c = a('MMYH'),
        o = a('8K1b'),
        r = a('K/z8'),
        s = a('sRHE'),
        i = a('ERkP'),
        u = a.n(i),
        f = (a('wZUI'), a('8ZQb'), u.a.createElement);
      function l(t) {
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
          var a,
            n = Object(s.a)(t);
          if (e) {
            var c = Object(s.a)(this).constructor;
            a = Reflect.construct(n, arguments, c);
          } else a = n.apply(this, arguments);
          return Object(r.a)(this, a);
        };
      }
      var h = {
          chat_luong_tieu_chuan: '/static/img/reason_1.jpg',
          nguon_thuc_pham_an_toan:
            'https://s3-us-west-2.amazonaws.com/chotroi/osac/reasons/tu-nhien-2-ec63b.jpg',
          dich_vu_linh_hoat:
            'https://images.jdmagicbox.com/comp/shimla/x3/0177px177.x177.180201094501.x6x3/catalogue/vermaz-tiffin-service-panthagati-shimla-tiffin-services-cadazksasy.jpg',
          kinh_nghiem_va_uy_tinh:
            'https://s3-us-west-2.amazonaws.com/chotroi/osac/reasons/chatluongvauytin.jpg',
          khach_hang_la_trong_tam:
            'https://s3-us-west-2.amazonaws.com/chotroi/osac/reasons/khachhanglatrongtam.jpg',
          luon_luon_cai_tien:
            'https://images.jdmagicbox.com/comp/shimla/x3/0177px177.x177.180201094501.x6x3/catalogue/vermaz-tiffin-service-panthagati-shimla-tiffin-services-cadazksasy.jpg',
        },
        p = (function(t) {
          Object(o.a)(a, t);
          var e = l(a);
          function a() {
            return Object(n.a)(this, a), e.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: 'render',
                value: function() {
                  return f(
                    'div',
                    {
                      className: 'ReasonItem',
                      'data-aos': 'fade-up',
                      'data-aos-duration': '1400',
                    },
                    f('div', {
                      className: 'ReasonItem__Image',
                      style: {
                        backgroundImage: 'url('.concat(
                          h[this.props.image],
                          ')'
                        ),
                      },
                    }),
                    f(
                      'div',
                      { className: 'ReasonItem__Title' },
                      this.props.title
                    ),
                    f(
                      'div',
                      { className: 'ReasonItem__Content' },
                      this.props.content
                    )
                  );
                },
              },
            ]),
            a
          );
        })(i.Component);
      e.default = p;
    },
  },
]);
