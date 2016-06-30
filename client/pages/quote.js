// Mithril component for quote generation
import $ from "jquery";
var QuoteForm = {};

//for simplicity, we use this component to namespace the model classes
QuoteForm.vm = {};

QuoteForm.vm.submitForm = function() {
    var vm = QuoteForm.vm;
    console.log('running submit');
    $.ajax({
        url: '/addQuote',
        type: 'POST',
        data: {
            name: vm.name(),
            addressStreet: vm.addressStreet(),
            addressCity: vm.addressCity(),
            addressState: vm.addressState(),
            addressZip: vm.addressZip(),
            phone: vm.phone(),
            email: vm.email(),
            shape: vm.shape(),
            corner: vm.corner(),
            selectedTools: vm.selectedTools(),
            quantity1: vm.quantity1(),
            quantity2: vm.quantity2(),
            quantity3: vm.quantity3(),
            quantity4: vm.quantity4(),
            quantity5: vm.quantity5(),
            substrate: vm.substrate(),
            substrateMSI: vm.substrateMSI(),
            finish: vm.finish(),
            finishMSI: vm.finishMSI(),
            numDesigns: vm.numDesigns(),
            costPerDesign: vm.costPerDesign(),
            margin: vm.margin(),
            prepressCharges: vm.prepressCharges(),
            copyCharges: vm.copyCharges(),
            overallCost1: vm.overallCost1(),
            overallCost2: vm.overallCost2(),
            overallCost3: vm.overallCost3(),
            overallCost4: vm.overallCost4(),
            overallCost5: vm.overallCost5(),
        },
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
            console.log(data);
            window.location('/preview/' + data._id);
        }
    });
};


QuoteForm.controller = function(args) {
    var vm = QuoteForm.vm;
    const app = window.app;

    vm.defaultMSI = {
        "Semi Gloss AT20 - 53269": 0.41,
        "White Bopp - 79536": 0.57,
        "Clear Bopp - 79560": 0.59,
        "Silver Paper - 53909": 0.69,
        "Silver Bopp - 79248": 0.68,
        "Paper Perm - 53272": 0.43,
        "Matte Litho - 19958": 0.44
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

    vm.tools = app.service('tools').find();

    vm.selectedTools = m.prop([]);

    vm.quantity1 = m.prop(100);
    vm.quantity2 = m.prop(100);
    vm.quantity3 = m.prop(100);
    vm.quantity4 = m.prop(100);
    vm.quantity5 = m.prop(100);

    vm.substrate = m.prop('White Paper');
    vm.substrateMSI = m.prop(0.45);
    vm.finish = m.prop('Gloss'); // TODO may be plural?
    vm.finishMSI = m.prop(0.20);

    vm.numDesigns = m.prop(1);
    vm.costPerDesign = m.prop(15);

    vm.margin = m.prop(40);

    vm.prepressCharges = m.prop(0);
    vm.copyCharges = m.prop(0);

    vm.overallCost1 = m.prop(0);
    vm.overallCost2 = m.prop(0);
    vm.overallCost3 = m.prop(0);
    vm.overallCost4 = m.prop(0);
    vm.overallCost5 = m.prop(0);

    // This function synthesizes the inputs into a single cost number and sets to vm.totalChildCost()
    vm.calculate = function() {

    };
};

//here's the view
QuoteForm.view = function(ctrl, args) {
    var vm = QuoteForm.vm;
    vm.calculate();

    return m("div", [
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
                        data: vm.tools(), // TODO: does this still work if the service takes a long time to load?
                        format: function(tool) {
                            return `${tool.name} ${tool.acrossWeb}x${tool.aroundWeb}`;
                        },
                        value: vm.selectedTools,
                        onchange: function(val) {
                            console.log(val);
                        },
                        tags: false,
                        width: '100%',
                        multiple: "multiple"
                    }),
                ]),
                m('h2', 'Paper & Finish'),
                m('.label-header', 'Substrate'),
                calc.radios(vm.substrate, _.map(vm.defaultMSI, function(value, key) {
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
                }, {
                    val: 'Matte',
                    label: 'Matte',
                }], function() {
                    if (vm.finish() == "Gloss") vm.finishMSI(0.20);
                    else if (vm.finish() == "UV") vm.finishMSI(0.50);
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
                    header: 'Number of labels (quantity 1)',
                    val: vm.quantity1,
                    type: 'number',
                    range: [0, 1000000, 100]
                }),
                calc.range({
                    header: 'Number of labels (quantity 2)',
                    val: vm.quantity2,
                    type: 'number',
                    range: [0, 1000000, 100]
                }),
                calc.range({
                    header: 'Number of labels (quantity 3)',
                    val: vm.quantity3,
                    type: 'number',
                    range: [0, 1000000, 100]
                }),
                calc.range({
                    header: 'Number of labels (quantity 4)',
                    val: vm.quantity4,
                    type: 'number',
                    range: [0, 1000000, 100]
                }),
                calc.range({
                    header: 'Number of labels (quantity 5)',
                    val: vm.quantity5,
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
                calc.resultDisplay(calc.formatMoney(vm.overallCost1()), 'Overall Cost (quantity 1)'),
                calc.resultDisplay(calc.formatMoney(vm.overallCost2()), 'Overall Cost (quantity 2)'),
                calc.resultDisplay(calc.formatMoney(vm.overallCost3()), 'Overall Cost (quantity 3)'),
                calc.resultDisplay(calc.formatMoney(vm.overallCost4()), 'Overall Cost (quantity 4)'),
                calc.resultDisplay(calc.formatMoney(vm.overallCost5()), 'Overall Cost (quantity 5)'),
                m('button.submit', {
                    onclick: vm.submitForm
                }, 'Submit'),
            ])
        ])
    ]);
};

window.QuoteForm = QuoteForm;
