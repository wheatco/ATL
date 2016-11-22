// Mithril component for quote review

var m = require('mithril');

function printDate(d) {
  var date
  try{
    date = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear()
  }
  catch(e){
    date = "";
  }
  if (date) return date
  else return ""
}

/**********
QUOTE TABLE
**********/

function tableWithQuotes(quotes, editCallback, deleteCallback, reviewCallback) {
  var header = [
    m('tr', [
      m('th', 'ID'),
      m('th.client', 'Client'),
      m('th.description', 'Description'),
      m('th.email', 'Email'),
      m('th.date', 'Date'),
      m('th.edit', 'Edit'),
      m('th.delete', 'Delete'),
      m('th.preview', 'Review')
    ])
  ];
  var rows = []
  if (quotes) {
    rows = quotes.map(function(quote) {
      return m('tr', [
        m('td', quote.quote_id),
        m('td.hyphenate', quote.name),
        m('td.hyphenate', quote.description),
        m('td.hyphenate', quote.email),
        m('td', printDate(new Date(quote.createdAt))),
        m('td', [
          m('button.previewButton', {
            onclick: function(e) {
              editCallback(quote);
            }
          }, 'edit')
        ]),
        m('td', [
          m('button.previewButton', {
            onclick: function(e) {
              deleteCallback(quote);
            }
          }, 'delete')
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
    this.reloadQuotes = () => {
      app.service('quotes').find().then(quotes => {
        vm.quotes(quotes.data);
      });
    }
    this.deleteQuote = quote => {
      if (confirm('Are you sure you want to delete this quote?')) {
        app.service('quotes').remove(quote._id).then(this.reloadQuotes);
      }
    }
    this.reloadQuotes();
  },
  view: function(ctrl, args) {
    var vm = AdminPage.vm;
    return m('div', [
      m('h1.title', 'Administration'),
      m('.calc.column.admin-page', [
        m('h2', 'Quotes'),
        m('table', tableWithQuotes(vm.quotes(),
          quote => { m.route("/quote/"+quote.quote_id) },
          ctrl.deleteQuote,
          quote => { m.route('/review/' + quote.quote_id) })
        )
      ])
    ]);
  }
}

module.exports = AdminPage