// Mithril component for quote generation
import $ from 'jquery';
import m from 'mithril';
import _ from 'lodash';
var QuoteForm = {};


//for simplicity, we use this component to namespace the model classes
QuoteForm.vm = {};

QuoteForm.vm.submitForm = function() {
    var vm = QuoteForm.vm;
    console.log('running submit');
    $.ajax({
        //I changed this from /addQuote to actually connect to the endpoint
        // --joe
        url: '/quotes',
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
            selectedTool: vm.selectedTool(),
            toolAcross: vm.toolAcross(),
            toolAround: vm.toolAround(),
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
            overallCost1: vm.overallCost1(),
            overallCost2: vm.overallCost2(),
            overallCost3: vm.overallCost3(),
            overallCost4: vm.overallCost4(),
            overallCost5: vm.overallCost5(),
        },
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
            console.log(data);
            window.location.href = '/previewQuote?q=' + data._id;
        }
    });
};


QuoteForm.controller = function(args) {
    var vm = QuoteForm.vm;
    const app = window.app;

    vm.defaultMSI = {
        'Semi Gloss AT20 - 53269': 0.41,
        'White Bopp - 79536': 0.57,
        'Clear Bopp - 79560': 0.59,
        'Silver Paper - 53909': 0.69,
        'Silver Bopp - 79248': 0.68,
        'Paper Perm - 53272': 0.43,
        'Matte Litho - 19958': 0.44
    };

    vm.name = m.prop('');
    vm.addressStreet = m.prop('');
    vm.addressCity = m.prop('');
    vm.addressState = m.prop('');
    vm.addressZip = m.prop('');
    vm.phone = m.prop('');
    vm.email = m.prop('');

    vm.shape = m.prop('Rectangle'); // Circle, Triangle, Star 
    vm.corner = m.prop('Square'); // Round

    vm.cornerSizes = [
        '1/3',
        '1/4',
        '1/8',
        '1/16',
        '1/32',
        '1/64'
    ]; 
    vm.cornerSize = m.prop('');
    vm.tools = app.service('tools').find();

    vm.selectedTool = m.prop([]);
    vm.toolAcross = m.prop([]);
    vm.toolAround = m.prop([]);

    vm.quantity1 = m.prop(100);
    vm.quantity2 = m.prop(0);
    vm.quantity3 = m.prop(0);
    vm.quantity4 = m.prop(0);
    vm.quantity5 = m.prop(0);

    vm.substrate = m.prop('White Paper');
    vm.substrateMSI = m.prop(0.45);
    vm.finish = m.prop('Gloss'); // TODO may be plural?
    vm.finishMSI = m.prop(0.20);

    vm.numDesigns = m.prop(1);
    vm.costPerDesign = m.prop(15);

    vm.margin = m.prop(40);

    vm.prepressCharges = m.prop(0);

    vm.overallCost1 = m.prop(0);
    vm.overallCost2 = m.prop(0);
    vm.overallCost3 = m.prop(0);
    vm.overallCost4 = m.prop(0);
    vm.overallCost5 = m.prop(0);

    vm.calculateForQuantity = function(quantity) {
        var inchesInFoot = 12;
        var minHr = 60;

        // Hardcoded entries based on their exact job requirements and specific machine type.
        var maxImageAreaWebWidth = 11.84;
        var maxImageAreaRepeatLength = 17.70;
        var acrossGutter = 0.1250;
        var aroundGutter = 0.1250;
        var prepressRateHr = 25;
        var prepressMins = 15;
        var pressCostHr = 123.27;
        var pressSpeed = 50; // linFt/Min
        var finishingCostHr = 45.00;
        var finishingSpeed = 120;
        var rewindCostHr = 45.00;
        var rewindSpeed = 150;
        var setupFt = 60;
        var wasteLinFt = 0.01; // percent
        var substrateWidth = 13.00;
        var multiColorCostImpression = 0.0175;

        var labelsAcrossTheWeb = Math.floor(
            maxImageAreaWebWidth / (vm.toolAcross() + acrossGutter));
        var labelsAroundTheWeb = Math.floor(
            maxImageAreaRepeatLength / (vm.toolAround() + aroundGutter));

        var labelsPerFrame = labelsAcrossTheWeb * labelsAroundTheWeb;
        var repeatLength = labelsAroundTheWeb * (vm.toolAround() + aroundGutter);

        var productionFrames = Math.ceil(quantity / labelsPerFrame);
        var productionLinFt = productionFrames * repeatLength / inchesInFoot;

        var totalLinFt = (productionLinFt + setupFt) * (1 + wasteLinFt);
        var msi = totalLinFt * inchesInFoot * substrateWidth / 1000; // milli-square-inches?

        var totalPrePressTimeCost = prepressRateHr * prepressMins / minHr;

        var totalPressRunMinutes = totalLinFt / pressSpeed;
        var totalPressRunTimeCost = totalPressRunMinutes / minHr * pressCostHr;

        var totalFinishingMiniutes = totalLinFt / finishingSpeed;
        var totalFinishingTimeCost = totalFinishingMiniutes / minHr * finishingCostHr;

        var totalRewindMinutes = totalLinFt / rewindSpeed;
        var totalRewindTimeCost = totalRewindMinutes / minHr * rewindCostHr;

        var totalTimeCost = totalPrePressTimeCost +
            totalPressRunTimeCost +
            totalFinishingTimeCost +
            totalRewindTimeCost;

        var totalImpressions = labelsPerFrame * productionFrames;

        var totalDigitalConsumablesCost = multiColorCostImpression * totalImpressions;

        var totalSubstrateCost = vm.substrateMSI() * msi;
        var totalFinishingCost = vm.finishMSI() * msi;

        var totalPhysicalConsumablesCost =
            totalSubstrateCost +
            totalFinishingCost;

        var totalExtraneousCosts =
            (Number(vm.numDesigns()) * Number(vm.costPerDesign())) +
            Number(vm.prepressCharges());

        // console.log(vm.numDesigns() * vm.costPerDesign(), vm.prepressCharges() console.log(vm.prepressCharges(), totalExtraneousCosts);

        var totalCost = Number(totalTimeCost) +
            Number(totalDigitalConsumablesCost) +
            Number(totalPhysicalConsumablesCost) +
            Number(totalExtraneousCosts);

        // calculate in margin
        return (1 + vm.margin() / 100) * totalCost;
    };

    // This function synthesizes the inputs into a single cost number and sets to vm.totalChildCost()
    vm.calculate = function() {
        vm.overallCost1(vm.calculateForQuantity(vm.quantity1()));
        vm.quantity2() !== 0 ? vm.overallCost2(vm.calculateForQuantity(vm.quantity2())) : vm.overallCost2(0);
        vm.quantity3() !== 0 ? vm.overallCost3(vm.calculateForQuantity(vm.quantity3())) : vm.overallCost3(0);
        vm.quantity4() !== 0 ? vm.overallCost4(vm.calculateForQuantity(vm.quantity4())) : vm.overallCost4(0);
        vm.quantity5() !== 0 ? vm.overallCost5(vm.calculateForQuantity(vm.quantity5())) : vm.overallCost5(0);
    };
};

//here's the view
QuoteForm.view = function(ctrl, args) {
    var vm = QuoteForm.vm;
    vm.calculate();

    return m('div', [
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
                m('h2', 'Tools'),
                // m('.label-header', 'Shape'),
                // calc.radios(vm.shape, [{
                //     val: 'Rectangle',
                //     label: 'Rectangle',
                // }, {
                //     val: 'Circle',
                //     label: 'Circle',
                // }]),
                m('.label-header', 'Corner Shape'),
                calc.radios(vm.corner, [{
                    val: 'Square',
                    label: 'Square',
                }, {
                    val: 'Rounded',
                    label: 'Rounded',
                }]),
                m('.calc-item.col.gap-3.justify', [
                    m('.label-header', 'Across the web (in)'),
                    m('input.input-text.good.input-number', {
                        type: 'Number',
                    }),
                ]),
                m('.calc-item.col.gap-3.justify', [
                    m('.label-header', 'Around the web (in)'),
                    m('input.input-text.good.input-number', {
                        type: 'Number',
                    }),
                ]),
                m('.label-header', 'Corner Size'),
                calc.radios(vm.cornerSize, vm.cornerSizes.map(size => {
                    return {
                        val: size,
                        label: size + ' inches'
                    };
                })),
                m('.select-wrapper', [
                    m.component(Select2, {
                        data: vm.tools(), // TODO: does this still work if the service takes a long time to load?
                        format: function(tool) {
                            // TODO: this is a bit jank
                            vm.selectedTool(tool.name);
                            vm.toolAcross(tool.acrossWeb);
                            vm.toolAround(tool.aroundWeb);
                            return `${tool.acrossWeb}x${tool.aroundWeb} - ${tool.name}`;
                        },
                        value: vm.selectedTool,
                        onchange: function(val) {
                            console.log(val);
                        },
                        tags: false,
                        width: '100%',
                        multiple: 'multiple'
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
                }, {
                    val: 'UV',
                    label: 'UV',
                }, {
                    val: 'Laminate',
                    label: 'Laminate',
                }], function() {
                    if (vm.finish() == 'Gloss') vm.finishMSI(0.20);
                    else if (vm.finish() == 'UV') vm.finishMSI(0.05);
                    else if (vm.finish() == 'Laminate') vm.finishMSI(0.30);
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
