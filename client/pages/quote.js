// Mithril component for quote generation

var QuoteForm = {};

//for simplicity, we use this component to namespace the model classes
QuoteForm.vm = {};

QuoteForm.vm.init = function() {
    var vm = QuoteForm.vm;

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
        "3/4 x 5 3/4 rectangle",
        "2 x 8 rectangle",
        "2 1/16 x 3 1/4 rectangle",
        "2 1/8 x 3 1/2 rectangle",
        "3 x 9 rectangle",
        "3 x 9 rectangle",
        "3 1/4 x 2 1/8 rectangle",
        "4 x 5 rectangle",
        "4 1/2 x 2 1/2 rectangle",
        "4 1/2 x 3 rectangle",
        "4 7/8 x 3 rectangle",
        "4.2836 x 5.5 special",
        "11.45 x 7.3303 special",
        "4 1/8 x 4 1/4 special",
        "10 1/2 x 3 1/4 special",
        "3.8431 x 4.3281 special",
        "2.019 x 4 special",
        "2.4033 x 8.25 special",
        "2.0404 x 5.5107 special",
        "1 11/16 circle",
        "2 circle",
        "3 circle",
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

var initialized = false;

QuoteForm.vm.config = function(attrs) {
  if (!initialized) {
    initialized = true;
    var vm = QuoteForm.vm;
    var app = attrs.app;
    vm.tools = app.service('tools').find();
  }
}

QuoteForm.controller = function() {
    QuoteForm.vm.init();
};

//here's the view
QuoteForm.view = function(ctrl, attrs) {
    var vm = QuoteForm.vm;
    vm.config(attrs);
    // console.log(vm.tools());
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
                        data: vm.tools,
                        value: vm.selectedTools,
                        onchange: function (val) {
                            console.log(val);
                        },
                        tags: false,
                        width: '100%',
                        multiple: "multiple"
                    }),
                ]),
                m('h2', 'Paper & Finish'),
                m('.label-header', 'Substrate'),
                calc.radios(vm.substrate, _.map(vm.defaultMSI, function(value, key){
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
}

window.QuoteForm = QuoteForm;

