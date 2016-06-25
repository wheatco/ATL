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
var _ = require('lodash');

var $ = require('jquery');
var select2 = require('select2');

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

var Select2 = {
    view: function(ctrl, attrs) {
        return m("select", {config: Select2.config(attrs)});
    },
    config: function(ctrl) {
        return function(element, isInitialized) {
            var el = $(element);
            if (!isInitialized) {
                 el.select2({
                    tags: false,
                    data: ctrl.data,
                    width: '100%',
                    multiple: "multiple"
                }).on("change", function(e) {
                    var val = el.select2("val");
                    ctrl.value(val);
                    ctrl.onchange(val);
                });
            }
        };
    }
};

//this application only has one component: calculator
var calculator = {};

//for simplicity, we use this component to namespace the model classes
calculator.vm = {};

calculator.vm.init = function() {
    var vm = calculator.vm;

    vm.defaultMSI = {
        "Semi Gloss AT20 - 53269":  0.41,
        "White Bopp - 79536":  0.57,
        "Clear Bopp - 79560":  0.59,
        "Silver Paper - 53909":  0.69,
        "Silver Bopp - 79248":  0.68,
        "Paper Perm - 53272":  0.43,
        "Matte Litho - 19958":  0.44
    }

    vm.name = m.prop('');
    vm.addressStreet = m.prop('');
    vm.addressCity = m.prop('');
    vm.addressState = m.prop('');
    vm.addressZip = m.prop('');
    vm.phone = m.prop('');
    vm.email = m.prop('');

    vm.shape = m.prop('Rectangle'); // Circle, Triangle, Star 
    vm.corner = m.prop('Square'); // Round

    vm.tools = [
        "Router",
        "Band Saw"
    ]

    vm.selectedTools = m.prop([]);

    vm.quantity = m.prop(100);

    vm.substrate = m.prop('White Paper');
    vm.substrateMSI = m.prop(0.45);
    vm.finish = m.prop('Gloss'); // TODO may be plural?
    vm.finishMSI = m.prop(0.20);

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
                href: 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css'
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
                    m('.select-wrapper', [
                        m.component(Select2, {
                            data: vm.tools,
                            value: vm.selectedTools,
                            onchange: function (val) {
                                console.log(vm.selectedTools());
                            } 
                        }),
                    ]),
                    m('h2', 'Paper & Finish'),
                    m('.label-header', 'Substrate'),
                    calc.radios(vm.substrate, _.map(vm.defaultMSI, function(value, key){
                        console.log(value, key);
                        return {
                            val: key,
                            label: key
                        };
                    }), function() {
                        vm.substrateMSI(vm.defaultMSI[vm.substrate()]);
                    }),
                    calc.range({
                        header: 'Substrate MSI',
                        hint: 'Each additional design causes',
                        val: vm.substrateMSI,
                        range: [0.0, 1.5, 0.01]
                    }),
                    m('.label-header', 'Finish'),
                    calc.radios(vm.finish, [{
                        val: 'Gloss',
                        label: 'Gloss',
                    },{
                        val: 'Matte',
                        label: 'Matte',
                    }], function() {
                        if (vm.finish() == "Gloss") vm.finishMSI(0.20);
                        else vm.finishMSI(0.40);
                    }),
                    calc.range({
                        header: 'Finish MSI',
                        hint: 'Each additional design causes',
                        val: vm.finishMSI,
                        range: [0.0, 1.5, 0.01]
                    }),
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


//initialize the application
m.mount(document, calculator);

module.exports = app;
