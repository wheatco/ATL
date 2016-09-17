// Mithril component for quote review

var m = require('mithril');

/**********
QUOTE TABLE
**********/

function tableWithQuotes(quotes, editCallback, reviewCallback) {
  var header = [
    m('tr', [
      m('th', 'ID'),
      m('th', 'Client'),
      m('th', 'Phone'),
      m('th', 'Email'),
      m('th.edit', 'Edit'),
      m('th.preview', 'Review')
    ])
  ];
  var rows = []
  if (quotes) {
    rows = quotes.map(function(quote) {
      return m('tr', [
        m('td', quote.quote_id),
        m('td', quote.name),
        m('td', quote.phone),
        m('td.hyphenate', quote.email),
        m('td', [
          m('button.previewButton', {
            onclick: function(e) {
              editCallback(quote);
            }
          }, 'edit')
        ]),
        m('td',[
          m('button.previewButton', {
            onclick: function(e) {
              reviewCallback(quote);
            }
          }, 'review')
        ])
      ]);
    });
  }

  header.push.apply(header, rows);
  return header;
}

/********
MAIN PAGE
********/

var AdminPage = {
  vm: {},
  controller: function(args) {
    var vm = AdminPage.vm;
    const app = window.app;

    vm.quotes = m.prop([]);
    app.service('quotes').find().then(quotes => {
      vm.quotes(quotes.data);
    });
  },
  view: function(ctrl, args) {
    var vm = AdminPage.vm;
    return m('div', [
      m('h1.title', 'Administration'),
      m('.calc.column.admin-page', [
        m('h2', 'Quotes'),
        m('table', tableWithQuotes(vm.quotes(),
          quote => { m.route("/quote/"+quote.quote_id) },
          quote => { window.open('/previewQuote?q=' + quote._id); })
        )
      ])
    ]);
  }
}

module.exports = AdminPage