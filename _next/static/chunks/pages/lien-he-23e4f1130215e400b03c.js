_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [15],
  {
    alsc: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('zjfJ'),
        c = (t('vYUz'), t('ERkP')),
        s = t.n(c),
        l = t('F6ED'),
        o = s.a.createElement;
      function i(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          a &&
            (n = n.filter(function(a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function m(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? i(Object(t), !0).forEach(function(a) {
                Object(n.a)(e, a, t[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function(a) {
                Object.defineProperty(
                  e,
                  a,
                  Object.getOwnPropertyDescriptor(t, a)
                );
              });
        }
        return e;
      }
      a.default = function() {
        var e = Object(c.useState)({}),
          a = e[0],
          t = e[1],
          s = function(e) {
            var c = e.target,
              s = c.name,
              l = c.value;
            t(m(m({}, a), {}, Object(n.a)({}, s, l)));
          };
        return o(
          l.a,
          null,
          o(
            'div',
            { className: 'lh' },
            o(
              'div',
              { className: 'lh__banner' },
              o(
                'div',
                { className: 'background__white' },
                o(
                  'h1',
                  { className: 'text-center text-white lh__title' },
                  'Li\xean H\u1ec7'
                ),
                o('div', { className: 'text-center osac__line' }, '__________'),
                o(
                  'p',
                  {
                    className: 'text-white lh__title__content',
                    align: 'justify',
                  },
                  'Ch\xfang t\xf4i lu\xf4n s\u1eb5n s\xe0ng n\u1eafm b\u1eaft nh\u1eefng c\u01a1 h\u1ed9i h\u1ee3p t\xe1c kinh doanh nh\u1eb1m \u0111em l\u1ea1i l\u1ee3i \xedch cho t\u1ea5t c\u1ea3 c\xe1c b\xean tham gia tr\xean tinh th\u1ea7n x\xe2y d\u1ef1ng s\u1ef1 h\u1ee3p t\xe1c th\xe0nh c\xf4ng, l\xe2u d\xe0i v\xe0 b\u1ec1n v\u1eefng.'
                )
              )
            ),
            o(
              'div',
              { className: 'container ' },
              o(
                'div',
                { className: 'row my-5' },
                o(
                  'section',
                  { className: 'col-md-6 lh__right' },
                  o(
                    'h3',
                    { className: 'my-4 osac__color' },
                    'Li\xean h\u1ec7 \xc1 CH\xc2U Catering'
                  ),
                  o(
                    'div',
                    { className: '' },
                    o(
                      'ul',
                      { className: 'list-unstyled' },
                      o(
                        'li',
                        { className: 'd-flex mb-3' },
                        o('i', {
                          className: 'fa fa-map-marker fa-2x osac__color mr-3',
                        }),
                        o(
                          'p',
                          { style: { lineHeight: '20px' } },
                          'S\u1ed1 54 \u0110. 44, KP. 2, P. Ho\xe0 Ph\xfa, TP. Th\u1ee7 D\u1ea7u M\u1ed9t, B\xecnh D\u01b0\u01a1ng'
                        )
                      ),
                      o(
                        'li',
                        { className: 'd-flex mb-3' },
                        o('i', {
                          className: 'fa fa-phone fa-2x osac__color mr-3',
                        }),
                        o(
                          'p',
                          null,
                          o('a', { href: 'tel:0916186046' }, '091.6186.046')
                        )
                      ),
                      o(
                        'li',
                        { className: 'd-flex mb-3' },
                        o('i', {
                          className: 'fa fa-envelope fa-2x osac__color mr-3',
                        }),
                        o(
                          'p',
                          null,
                          o(
                            'a',
                            { href: 'mailto:sales@achaucatering.com' },
                            'sales@achaucatering.com'
                          )
                        )
                      )
                    )
                  )
                ),
                o(
                  'section',
                  { className: 'lh__form col-md-6 mb-4' },
                  o(
                    'form',
                    {
                      id: 'contact-form',
                      name: 'contact-form',
                      method: 'POST',
                    },
                    o(
                      'div',
                      { className: 'form-group' },
                      o(
                        'div',
                        { className: 'md-form mb-0' },
                        o(
                          'label',
                          { htmlFor: 'name', className: '' },
                          'H\u1ecd t\xean:'
                        ),
                        o('input', {
                          type: 'text',
                          id: 'name',
                          name: 'name',
                          className: 'form-control form-control-sm osac__input',
                          required: !0,
                          value: a.name || '',
                          onChange: s,
                        })
                      )
                    ),
                    o(
                      'div',
                      { className: 'form-group' },
                      o(
                        'div',
                        { className: 'md-form mb-0' },
                        o(
                          'label',
                          { htmlFor: 'email', className: '' },
                          'Email:'
                        ),
                        o('input', {
                          type: 'email',
                          id: 'email',
                          name: 'email',
                          className: 'form-control form-control-sm osac__input',
                          required: !0,
                          value: a.email || '',
                          onChange: s,
                        })
                      )
                    ),
                    o(
                      'div',
                      { className: 'form-group ' },
                      o(
                        'div',
                        { className: 'md-form mb-0' },
                        o(
                          'label',
                          { htmlFor: 'subject', className: '' },
                          'Ch\u1ee7 \u0110\u1ec1:'
                        ),
                        o('input', {
                          type: 'text',
                          id: 'subject',
                          name: 'subject',
                          className: 'form-control form-control-sm osac__input',
                          required: !0,
                          value: a.subject || '',
                          onChange: s,
                        })
                      )
                    ),
                    o(
                      'div',
                      { className: 'form-group' },
                      o(
                        'div',
                        { className: 'md-form' },
                        o('label', { htmlFor: 'message' }, 'N\u1ed9i Dung:'),
                        o('textarea', {
                          id: 'message',
                          name: 'message',
                          rows: '2',
                          className: 'form-control md-textarea osac__input',
                          required: !0,
                          value: a.message || '',
                          onChange: s,
                        })
                      )
                    ),
                    o(
                      'div',
                      { className: 'text-center text-md-left' },
                      o(
                        'button',
                        {
                          type: 'submit',
                          className: 'btn btn-block osac__button g-recaptcha',
                          onClick: function(e) {
                            $.ajax({
                              type: 'POST',
                              url: 'http://localhost:3001/sendMail',
                              data: {
                                message: {
                                  from_email: a.email || '',
                                  to: [
                                    {
                                      email: 'admin@achaucatering.com',
                                      name: 'Admin Hung',
                                      type: 'to',
                                    },
                                  ],
                                  autotext: 'true',
                                  subject: a.subject,
                                  html: String(
                                    "<div>\n      <div style='color: red font-weight: bold'>Email \u0111\u01b0\u1ee3c g\u1edfi t\u1eeb trang achaucatering.com/lien-he</div>\n      <div style='font-weight: bold'>T\xean ng\u01b0\u1eddi g\u1eedi: "
                                      .concat(
                                        a.name,
                                        "</div>\n      <div style='font-weight: bold'>Email li\xean h\u1ec7: "
                                      )
                                      .concat(
                                        a.email,
                                        "</div>\n      <br>\n      <div style='font-weight: bold'>N\u1ed9i dung:</div>\n      <div>"
                                      )
                                      .concat(a.message, '</div>\n    </div>')
                                  ),
                                },
                              },
                              success: function(e) {},
                            }).done(function(e) {});
                          },
                        },
                        'G\u1eedi Li\xean H\u1ec7'
                      )
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    'dd+/': function(e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/lien-he',
        function() {
          return t('alsc');
        },
      ]);
    },
  },
  [['dd+/', 1, 2, 3, 4, 0]],
]);
