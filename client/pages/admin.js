// Mithril component for quote review

var m = require('mithril');

function printDate(d) {
  var date
  try{
    date = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear()
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
  console.log("In tableWithQuotes: ", quotes);
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
      console.log("this is the quote to print: ", quote);
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
      // app.service('quotes').find().then(quotes => {
      //   vm.quotes(quotes.data);
      // });
    vm.quotes([{
        "_id": "57dfeded4fa8e71d00848e23",
        "description": "",
        "__v": 0,
        "prepressCharges": 0,
        "margin": 60,
        "costPerDesign": 15,
        "numDesigns": 1,
        "finishMSI": 0.2,
        "finish": "Laminate Gloss",
        "substrateMSI": 0.57,
        "substrate": "White Bopp - 79536",
        "numColors": 4,
        "quantity5": 0,
        "quantity4": 0,
        "quantity3": 0,
        "quantity2": 0,
        "quantity1": 200,
        "toolOverhead": 200,
        "toolAcross": 2.5,
        "toolAround": 2.5,
        "corner": "",
        "shape": "Rectangle",
        "selectedToolID": "0",
        "email": "joeh@at-l.com",
        "phone": "",
        "addressZip": "14411",
        "addressState": "NY",
        "addressCity": "Albion",
        "addressStreet": "27 e bank st ",
        "name": "joie de vivre ",
        "quote_id": 1,
        "selectedToolSize": "",
        "margin1": 60,
        "margin2": 60,
        "margin3": 60,
        "margin4": 60,
        "margin5": 60,
        "updatedAt": "2017-02-08T21:15:15.776Z",
        "createdAt": "2016-09-19T13:53:49.458Z",
        "overallCost5": {
          "perLabel": 0,
          "total": 0
        },
        "overallCost4": {
          "perLabel": 0,
          "total": 0
        },
        "overallCost3": {
          "perLabel": 0,
          "total": 0
        },
        "overallCost2": {
          "perLabel": 0,
          "total": 0
        },
        "overallCost1": {
          "perLabel": 1.1554048030089894,
          "total": 446.08096060179787
        }
      }]);
    }
    console.log(vm.quotes());
    this.deleteQuote = quote => {
      if (confirm('Are you sure you want to delete this quote?')) {
        app.service('quotes').remove(quote._id).then(this.reloadQuotes);
      }
    }
    this.reloadQuotes();
  },
  view: function(ctrl, args) {
    var vm = AdminPage.vm;
    console.log("making admin page with these quotes: ", vm.quotes())
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
