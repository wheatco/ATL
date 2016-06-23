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
    vm.tool = m.prop('');

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

    return calc.calc(function() {
        return [
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
                m('.label-header', 'Tool'),
                calc.radios(vm.tool, [{
                    val: 'Need list of tools',
                    label: 'Need list of tools',
                }]),

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
                m('h2', 'Results'),
                calc.resultDisplay(calc.formatMoney(vm.overallCost()), 'Overall Cost'),
                m('h2', 'Submit'),
                m('button.submit', 'Submit')
            ])
            


            // calc.range({
            //     header: 'Number of Children including this baby',
            //     hint: 'Each additional child typically reduces the cost.',
            //     val: vm.numChildren,
            //     range: [1, 8, 1]
            // }),


            // calc.range({
            //     header: 'Number of Children including this baby',
            //     hint: 'Each additional child typically reduces the cost.',
            //     val: vm.numChildren,
            //     range: [1, 8, 1]
            // }),
            // m('.calc-item.col.gap-2.justify', [
            //     m('div', [
            //         m('.label-header', 'ZIP Code'),
            //         m('.hint', 'Different areas have different costs of living.'),
            //     ]),
            //     m('input.input-text.good border', {
            //         onchange: m.withAttr('value', vm.zipCode),
            //         value: vm.zipCode()
            //     })
            // ]),
            // m('h2', 'Logistics'),

            // calc.radios(vm.daycare, [{
            //     val: 0,
            //     label: 'No Daycare',
            // }, {
            //     val: 973,
            //     label: 'Full-time',
            //     hint: 'Full time daycare costs $973/month',
            // }, {
            //     val: 487,
            //     label: 'Part-time',
            //     hint: 'Part time daycare costs $487/month',
            // }]),

            // calc.checkbox(vm.oneParentWillTakeTimeOff, 'taking unpaid time off work', 'Taking time off can allow families to avoid some or even all daycare, but not all companies have PTO for new parents, and this could result in lost income.'),

            // vm.oneParentWillTakeTimeOff() ?
            // calc.range({
            //     header: 'Unpaid wage losses from time off',
            //     hint: 'If unpaid time must be taken off, this is lost income, and we'll add it to your logistics expenses.',
            //     val: vm.lossesFromTimeOff,
            //     type: 'money',
            //     range: [20000, 250000, 5000]
            // }) : null,
            // m('h2', 'Medical'),
            // calc.checkbox(vm.hasInsurance, 'We Have Insurance', 'Medical insurance often reduces the hospital costs of having a baby.'), !vm.hasInsurance() ? calc.checkbox(vm.cSection, 'We're getting a C-Section', 'A C-Section is a surgical procedure. If it is not covered by insurance, costs $6,500 extra on average.') : null,
            // m('h2', 'Clothing'),
            // calc.radios(vm.clothing, [{
            //     val: 1000,
            //     label: 'New Clothing',
            //     hint: 'Clothing costs about $1,000 for the first year.'
            // }, {
            //     val: 1500,
            //     label: 'Premium New Clothing',
            //     hint: 'Premium clothing costs about $1,500 for the first year.'
            // }, {
            //     val: 0,
            //     label: 'hand-me-downs'
            // }, ]),
            // m('h2', 'Equipment'),
            // m('.calc-item', [
            //     m('.hint', 'Each of these items is essential, but you may already have some leftover from another baby or family member. If you already have an item, check it, and we'll take it off your final bill.')
            // ]),
            // calc.checkbox(vm.hasCarSeat, 'Already Have Car Seat'),
            // calc.checkbox(vm.hasCribAndMattress, 'Already Have crib + mattress'),
            // calc.checkbox(vm.hasBabyBag, 'Already have Baby Bag + Nursing Supplies'),
            // calc.checkbox(vm.hasStroller, 'Already have Stroller'),
            // m('h2', 'Consumables'),
            // calc.checkbox(vm.babyFormula, 'Using Baby Formula?', 'Baby formula costs $1,750 for the first year.'),

            // calc.radios(vm.diapers, [{
            //     val: 2400,
            //     label: 'Disposable diapers',
            //     hint: 'Disposable diapers cost about $2,400 for the first year.'
            // }, {
            //     val: 1680,
            //     label: 'Reusable (w/ washing service)',
            //     hint: 'Reusable diapers with a premium washing service is $1,680 for the first year.'
            // }, {
            //     val: 600,
            //     label: 'Reusable (hand washing)',
            //     hint: 'Reusable diapers cost about $300 for the first year and detergent, water, and energy will also be about $300 for the first year.'
            // }]),


            // m('h2', 'Results'),
            // calc.resultDisplay(calc.formatMoney(vm.totalChildCost()), 'Baby Cost', 'This is the total first-year cost of having this baby.'),
            // calc.pieChart([{
            //     label: 'Logistics: ' + calc.formatMoney(vm.logisticCost()),
            //     val: vm.logisticCost(),
            //     color: '#E09E4D'
            // }, {
            //     label: 'Medical: ' + calc.formatMoney(vm.medicalCost()),
            //     val: vm.medicalCost(),
            //     color: '#4A90E2'
            // }, {
            //     label: 'Equipment: ' + calc.formatMoney(vm.equipmentCost()),
            //     val: vm.equipmentCost(),
            //     color: '#90DFA7'
            // }, {
            //     label: 'Consumables: ' + calc.formatMoney(vm.consumablesCost()),
            //     val: vm.consumablesCost(),
            //     color: 'rgba(24, 196, 141, 1)'
            // }]),
        ];
    });
};

//initialize the application
m.mount(document, calculator);



// app.authenticate().then(function() {


// }).catch(function(err) {
//     if (err) console.log(err);
//     if (window.location.hostname == 'boltiq.com') window.location = window.location.href + 'login.html';
// });


module.exports = app;
