(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [21, 27],
  {
    '+9q6': function(e, t, a) {
      'use strict';
      a.r(t);
      var o = a('9fIP'),
        c = a('MMYH'),
        n = a('8K1b'),
        r = a('K/z8'),
        s = a('sRHE'),
        i = a('ERkP'),
        p = a.n(i),
        l = (a('pIXK'), a('aWzz')),
        f = a.n(l),
        u = p.a.createElement;
      function b(e) {
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
            o = Object(s.a)(e);
          if (t) {
            var c = Object(s.a)(this).constructor;
            a = Reflect.construct(o, arguments, c);
          } else a = o.apply(this, arguments);
          return Object(r.a)(this, a);
        };
      }
      var d = { title: f.a.string, dataAOS: f.a.bool },
        m = (function(e) {
          Object(n.a)(a, e);
          var t = b(a);
          function a() {
            return Object(o.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: 'render',
                value: function() {
                  u('div', null);
                  return this.props.dataAOS
                    ? u(
                        'div',
                        { className: 'Title', 'data-aos': this.props.dataAOS },
                        u('span', { className: 'Title__Line' }),
                        u(
                          'span',
                          { className: 'Title__Text' },
                          this.props.title
                        )
                      )
                    : u(
                        'div',
                        { className: 'Title' },
                        u('span', { className: 'Title__Line' }),
                        u(
                          'span',
                          { className: 'Title__Text' },
                          this.props.title
                        )
                      );
                },
              },
            ]),
            a
          );
        })(i.Component);
      (m.propStyles = d), (t.default = m);
    },
    NLhV: function(e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'Partners', function() {
          return k;
        });
      var o = a('9fIP'),
        c = a('MMYH'),
        n = a('pWxA'),
        r = a('8K1b'),
        s = a('K/z8'),
        i = a('sRHE'),
        p = a('zjfJ'),
        l = a('ERkP'),
        f = a.n(l),
        u = (a('B9tj'), a('+9q6')),
        b = a('eNeL'),
        d = f.a.createElement;
      function m(e) {
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
            o = Object(i.a)(e);
          if (t) {
            var c = Object(i.a)(this).constructor;
            a = Reflect.construct(o, arguments, c);
          } else a = o.apply(this, arguments);
          return Object(s.a)(this, a);
        };
      }
      var g =
          'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fachaucatering.gif?alt=media&token=a626119c-a911-4be4-93f8-218468522c78',
        h =
          'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fajinomoto.jpg?alt=media&token=694be3cb-c516-4f7b-bc9e-bf2ff9b9677d',
        v =
          'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fbahuan.jpg?alt=media&token=f0a84c15-16c7-4e00-bc3b-058adf4ed1c9',
        y =
          'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fcocacola.png?alt=media&token=e206e1d7-ed72-4332-a6e5-81b9f328a0b7',
        O =
          'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fcp.png?alt=media&token=200074bd-b74a-43c2-a803-80908ca2f8cf',
        j =
          'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fmetro.png?alt=media&token=9c3fea39-40d2-4bcb-91f7-ce4d0c15fed8',
        w =
          'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fpepsi.png?alt=media&token=c76a1b60-0e81-40d3-bc13-d77bee33efb0',
        N = [g, h, v, y, O, j, w, g, h, v, y, O, j, w],
        k = (function(e) {
          Object(r.a)(a, e);
          var t = m(a);
          function a() {
            var e;
            Object(o.a)(this, a);
            for (var c = arguments.length, r = new Array(c), s = 0; s < c; s++)
              r[s] = arguments[s];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              Object(p.a)(Object(n.a)(e), 'componentDidMount', function() {
                new b.a('.swiper-container2', {
                  slidesPerView: 15,
                  spaceBetween: 0,
                  loop: !0,
                  autoplay: { delay: 1, disableOnInteraction: !0 },
                  freeMode: !0,
                  speed: 4e3,
                }).on('slideChange', function() {});
              }),
              e
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: 'render',
                value: function() {
                  return d(
                    'div',
                    { className: 'Partners' },
                    d(u.default, {
                      title: 'nh\xe0 cung c\u1ea5p c\u1ee7a ch\xfang t\xf4i',
                    }),
                    d(
                      'div',
                      { className: 'swiper-container2' },
                      d(
                        'div',
                        { className: 'swiper-wrapper SwiperWrapper' },
                        N.map(function(e, t) {
                          return d(
                            'div',
                            { key: t, className: 'swiper-slide' },
                            d('img', { src: e, alt: 'partner' })
                          );
                        })
                      ),
                      d('div', { className: 'swiper-pagination' })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(l.Component);
      t.default = k;
    },
  },
]);
