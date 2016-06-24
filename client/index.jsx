require('file?name=js/[name].[ext]!./js/mithril.js');
require('file?name=js/[name].[ext]!./js/calc.js');

require('./js/mithril.js');
require('./js/calc.js');

// Move static files to the right place
require('file?name=[name].[ext]!./index.html');
require('file?name=[name].[ext]!./signup.html');
require('file?name=[name].[ext]!./login.html');
require('file?name=[name].[ext]!./normalize.css');
require('file?name=[name].[ext]!./flexblocks.css');
require('file?name=[name].[ext]!./site.css');
// require('!style!css!sass!./styles/main.scss');

var io = require('socket.io-client');
var feathers = require('feathers-client');

const socket = io();
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
window.app = feathers()
    .configure(feathers.socketio(socket))
    .configure(feathers.hooks())
    // Use localStorage to store our login token
    .configure(feathers.authentication({
      storage: window.localStorage
    }));

// var App = require('./components/App.jsx');
// const container = document.getElementById('container');
// ReactDOM.render(<App />, container);

//this application only has one component: calculator
var calculator = {};

//for simplicity, we use this component to namespace the model classes
calculator.vm = {};

calculator.vm.init = function() {
    var vm = calculator.vm;

    vm.name = m.prop('');
    vm.addressStreet = m.prop('');
    vm.addressCity = m.prop('');
    vm.addressState = m.prop('');
    vm.addressZip = m.prop('');
    vm.phone = m.prop('');
    vm.email = m.prop('');

    vm.shape = m.prop('Rectangle'); // Circle, Triangle, Star 
    vm.corner = m.prop('Square'); // Round
    vm.tools = m.prop({
        "tool1": false,
        "tool2": false
    });
    vm.customTool = m.prop('');

    vm.quantity = m.prop(100);

    vm.substrate = m.prop('White Paper');
    vm.finish = m.prop('Glossy'); // TODO may be plural?

    vm.numDesigns = m.prop(1);
    vm.costPerDesign = m.prop(15);

    vm.margin = m.prop(40);

    vm.prepressCharges = m.prop(0);
    vm.copyCharges = m.prop(0);

    vm.overallCost = m.prop(0);

    // This function synthesizes the inputs into a single cost number and sets to vm.totalChildCost()
    vm.calculate = function() {

    };

};

calculator.controller = function() {
    calculator.vm.init();
};

//here's the view
calculator.view = function(ctrl) {
    var vm = calculator.vm;

    vm.calculate();

    return m("html", [
        m("head", [
            m("link", {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro|Source+Code+Pro:700'
            }),
            m("link", {
                rel: 'stylesheet',
                href: 'normalize.css'
            }),
            m("link", {
                rel: 'stylesheet',
                href: 'flexblocks.css'
            }),
            m("link", {
                rel: 'stylesheet',
                href: 'site.css'
            }),
            m("meta", {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            })
        ]),
        m("body", {
            config: function(el) {
                window.setInterval(function() {
                    parent.postMessage((el.offsetHeight || el.clientHeight), '*');
                }, 500);
            }
        }, [
            m('h1.title', 'ATL Order Form'),
            m('.calc.row.center.gap-5', [

                // COLUMN 1: CLIENT INFO
                m('div', [
                    m('h1', 'Client Information'),
                    m('.calc-item.col.gap-2.justify', [
                        m('div', [
                            m('.label-header', 'Name'),
                        ]),
                        m('input.input-text.good border', {
                            onchange: m.withAttr('value', vm.name),
                            value: vm.name()
                        })
                    ]),
                    m('.calc-item.col.gap-2.justify', [
                        m('div', [
                            m('.label-header', 'Address'),
                        ]),
                        m('input.input-text.good border', {
                            onchange: m.withAttr('value', vm.addressStreet),
                            value: vm.addressStreet()
                        })
                    ]),
                    m('.calc-item.col.gap-2.justify', [
                        m('div', [
                            m('.label-header', 'City'),
                        ]),
                        m('input.input-text.good border', {
                            onchange: m.withAttr('value', vm.addressCity),
                            value: vm.addressCity()
                        })
                    ]),
                    m('.calc-item.col.gap-2.justify', [
                        m('div', [
                            m('.label-header', 'State'),
                        ]),
                        m('input.input-text.good border', {
                            onchange: m.withAttr('value', vm.addressState),
                            value: vm.addressState()
                        })
                    ]),
                    m('.calc-item.col.gap-2.justify', [
                        m('div', [
                            m('.label-header', 'Zip Code'),
                        ]),
                        m('input.input-text.good border', {
                            onchange: m.withAttr('value', vm.addressZip),
                            value: vm.addressZip()
                        })
                    ]),
                    m('.calc-item.col.gap-2.justify', [
                        m('div', [
                            m('.label-header', 'Phone'),
                        ]),
                        m('input.input-text.good border', {
                            onchange: m.withAttr('value', vm.phone),
                            value: vm.phone()
                        })
                    ]),
                    m('.calc-item.col.gap-2.justify', [
                        m('div', [
                            m('.label-header', 'Email'),
                        ]),
                        m('input.input-text.good border', {
                            onchange: m.withAttr('value', vm.email),
                            value: vm.email()
                        })
                    ])
                ]),
                // COLUMN 2: EQUIPMENT / PAPER / FINISH
                m('div', [
                    m('h1', 'Printing Details'),
                    m('.label-header', 'Shape'),
                    calc.radios(vm.shape, [{
                        val: 'Rectangle',
                        label: 'Rectangle',
                    }, {
                        val: 'Circle',
                        label: 'Circle',
                    }]),
                    m('.label-header', 'Corner'),
                    calc.radios(vm.corner, [{
                        val: 'Square',
                        label: 'Square',
                    }, {
                        val: 'Rounded',
                        label: 'Rounded',
                    }]),
                    m('.label-header', 'Tools'),
                    populateTools(),
                    m('input', {
                        type: 'text',
                        placeholder: "Add a tool...",
                        onchange: m.withAttr("value", vm.customTool),
                        value: vm.customTool()
                    }),
                    m('button', {
                        onclick: function () {
                            if (vm.customTool().length) {
                                // Add custom tool to tool dict
                                var tools = vm.tools();
                                tools[vm.customTool()] = false;
                                vm.tools(tools);
                                vm.customTool("");
                            }
                        }
                    }, "Add"),
                    m('h2', 'Paper & Finish'),
                    m('.label-header', 'Substrate'),
                    calc.radios(vm.substrate, [{
                        val: 'Need list of substrates',
                        label: 'Need list of substrates',
                    }]),
                    m('.label-header', 'Finish'),
                    calc.radios(vm.finish, [{
                        val: 'Need list of finishes',
                        label: 'Need list of finishes',
                    }])
                ]),
                // COLUMN 3: QUANTITY AND ADDITIONAL INFO
                m('div', [
                    m('h1', 'Order Details'),
                    m('h2', 'Quantity'),
                    calc.range({
                        header: 'Number of labels',
                        val: vm.quantity,
                        type: 'number',
                        range: [0, 1000000, 100]
                    }),
                    m('h2', 'Designs'),
                    calc.range({
                        header: 'Number of designs',
                        hint: 'Each additional design causes',
                        val: vm.numDesigns,
                        range: [1, 8, 1]
                    }),
                    calc.range({
                        header: 'Cost Per Design',
                        type: 'money',
                        val: vm.costPerDesign,
                        range: [0, 30, 1]
                    }),
                    calc.range({
                        header: 'Margin',
                        type: 'percent',
                        val: vm.margin,
                        range: [0, 200, 1]
                    }),
                    calc.range({
                        header: 'Prepress Charges',
                        type: 'money',
                        val: vm.prepressCharges,
                        range: [0, 500, 1]
                    }),
                    calc.range({
                        header: 'Copy Charges',
                        type: 'money',
                        val: vm.copyCharges,
                        range: [0, 500, 1]
                    })
                ]),
                // COLUMN 4: RESULTS AND SUBMISSION
                m('div', [
                    m('h1', 'Results'),
                    calc.resultDisplay(calc.formatMoney(vm.overallCost()), 'Overall Cost'),
                    m('button.submit', 'Submit'),
                ])
            ])  
        ])
    ]);
};

var populateTools = function () {
    var tools = Object.keys(calculator.vm.tools());
    var populate = []
    for (var i in tools) {
        populate.push({
            val: tools[i],
            label: tools[i]
        });
    }
    return  calc.checklist(calculator.vm.tools, populate);
}

//initialize the application
m.mount(document, calculator);


// app.authenticate().then(function() {


// }).catch(function(err) {
//     if (err) console.log(err);
//     if (window.location.hostname == 'boltiq.com') window.location = window.location.href + 'login.html';
// });


module.exports = app;
