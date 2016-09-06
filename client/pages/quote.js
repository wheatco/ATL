// Mithril component for quote generation
import $ from 'jquery';
import m from 'mithril';
import _ from 'lodash';
var QuoteForm = {};

//for simplicity, we use this component to namespace the model classes
QuoteForm.vm = {};

QuoteForm.vm.submitForm = function() {
    var vm = QuoteForm.vm;
    $.ajax({
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
            window.location.href = '/previewQuote?q=' + data._id;
        }
    });
};

QuoteForm.vm.getTools = function() {
    // TODO: make this a mongo query?
    var vm = QuoteForm.vm;
    var selectedCornerSize = vm.cornerSize();
    app.service('tools').find().then(tools => {
        tools = tools.data;
        var closest = [];
        // First, filter by corner shape and size
        for (var i = 0; i < tools.length; i++) {
            var tool = tools[i];
            if (tool.cornerSize == selectedCornerSize) {
                // Euclidean distance because why not
                tool.distance = Math.sqrt(Math.pow(tool.acrossWeb - vm.toolAcross(), 2) + Math.pow(tool.aroundWeb - vm.toolAround(), 2));
                closest.push(tool);
            }
        }
        // Sort by closest
        closest.sort(function(a, b) {
            return a.distance - b.distance;
        });
        // Limit to 10
        closest = closest.slice(0, 10);
        vm.tools(closest);
    }).then(() => {
        vm.cornerSize(selectedCornerSize);
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

    vm.cornerSizes = m.prop([
        '1/3',
        '1/4',
        '1/8',
        '1/16',
        '1/32',
        '1/64'
    ]);
    vm.cornerSize = m.prop('1/3');
    vm.selectedTool = m.prop('');
    vm.selectedToolObject = m.prop(null);
    vm.toolAcross = m.prop(0);
    vm.toolAround = m.prop(0);
    vm.tools = m.prop([]);
    vm.getTools();

    vm.quantity1 = m.prop(100);
    vm.quantity2 = m.prop(0);
    vm.quantity3 = m.prop(0);
    vm.quantity4 = m.prop(0);
    vm.quantity5 = m.prop(0);

    vm.numColors = m.prop(4)

    vm.substrate = m.prop('White Paper');
    vm.substrateMSI = m.prop(0.45);
    vm.finish = m.prop('Gloss'); // TODO may be plural?
    vm.finishMSI = m.prop(0.20);

    vm.numDesigns = m.prop(1);
    vm.costPerDesign = m.prop(15);

    vm.margin = m.prop(60);

    vm.prepressCharges = m.prop(0);

    vm.overallCost1 = m.prop(0);
    vm.overallCost2 = m.prop(0);
    vm.overallCost3 = m.prop(0);
    vm.overallCost4 = m.prop(0);
    vm.overallCost5 = m.prop(0);

    vm.calculateForQuantity = function(quantity) {
        var applyMargin = function(num) {
            return num / (1 - vm.margin() / 100);
        }

        var inchesInFoot = 12;
        var minHr = 60;

        // Hardcoded entries based on their exact job requirements and specific machine type.
        var maxImageAreaWebWidth = 11.84;
        var maxImageAreaRepeatLength = 17.70;
        var colorsPerFrame = vm.numColors() || 4;
        var acrossGutter = 0.1250;
        var aroundGutter = 0.1250;
        var prepressRateHr = 25;
        var prepressMins = 15;
        var pressCostHr = 123.27;
        var pressSpeed = 50; // linFt/Min
        var finishingCostHr = 82.54;
        var finishingSpeed = 120;
        var finishingSetupMinutes = 15;
        var rewindCostHr = 45.00;
        var rewindSpeed = 150;
        var rewindSetupMinPerLane = 4;
        var setupFt = 85;
        var setupFrames = setupFt * 12 / maxImageAreaRepeatLength;
        var wasteLinFt = 0.01; // percent
        var substrateWidth = 13.00;
        var multiColorCostImpression = 0.0201;

        var tool = vm.selectedToolObject() || {acrossWeb: 0, aroundWeb:0};

        var labelsAcrossTheWeb = Math.floor(
            maxImageAreaWebWidth / (tool.acrossWeb + acrossGutter));
        var labelsAroundTheWeb = Math.floor(
            maxImageAreaRepeatLength / (tool.aroundWeb + aroundGutter));

        var labelsPerFrame = labelsAcrossTheWeb * labelsAroundTheWeb;

        var repeatLength = labelsAroundTheWeb * (Number(vm.toolAround()) + aroundGutter);

        var productionFrames = Math.ceil(quantity / labelsPerFrame);
        var productionLinFt = productionFrames * repeatLength / inchesInFoot;

        var totalLinFt = (productionLinFt + setupFt) * (1 + wasteLinFt);
        var msi = totalLinFt * inchesInFoot * substrateWidth / 1000; // milli-square-inches?

        var totalPrePressTimeCost = prepressRateHr * prepressMins / minHr;

        var totalPressRunMinutes = totalLinFt / pressSpeed + prepressMins;
        var totalPressRunTimeCost = totalPressRunMinutes / minHr * pressCostHr;

        var totalFinishingMiniutes = totalLinFt / finishingSpeed + finishingSetupMinutes;
        var totalFinishingTimeCost = totalFinishingMiniutes / minHr * finishingCostHr;

        var totalRewindMinutes = totalLinFt / rewindSpeed + rewindSetupMinPerLane * labelsAcrossTheWeb;
        var totalRewindTimeCost = totalRewindMinutes / minHr * rewindCostHr;

        var totalTimeCost = totalPrePressTimeCost +
            totalPressRunTimeCost +
            totalFinishingTimeCost +
            totalRewindTimeCost;

        var totalImpressions = colorsPerFrame * (productionFrames + setupFrames);

        var totalDigitalConsumablesCost = multiColorCostImpression * totalImpressions;

        var totalSubstrateCost = vm.substrateMSI() * msi;
        var totalFinishingCost = vm.finishMSI() * msi;

        var totalPhysicalConsumablesCost =
            totalSubstrateCost +
            totalFinishingCost;

        var totalExtraneousCosts =
            (Number(vm.numDesigns()) * Number(vm.costPerDesign())) +
            Number(vm.prepressCharges());

        var subTotalCost = Number(totalTimeCost) +
            Number(totalDigitalConsumablesCost) +
            Number(totalPhysicalConsumablesCost)/* +
            Number(totalExtraneousCosts);*/

        var debugObject = {
            labelsAcrossTheWeb: labelsAcrossTheWeb,
            labelsAroundTheWeb: labelsAroundTheWeb,
            labelsPerFrame: labelsPerFrame,
            repeatLength: repeatLength,
            productionFrames: productionFrames,
            productionLinFt: productionLinFt,
            totalLinFt: totalLinFt,
            msi: msi,
            totalPrePressTimeCost: totalPrePressTimeCost,
            totalPressRunMinutes: totalPressRunMinutes,
            totalPressRunTimeCost: totalPressRunTimeCost,
            totalFinishingMiniutes: totalFinishingMiniutes,
            totalFinishingTimeCost: totalFinishingTimeCost,
            totalRewindMinutes: totalRewindMinutes,
            totalRewindTimeCost: totalRewindTimeCost,
            totalTimeCost: totalTimeCost,
            totalImpressions: totalImpressions,
            totalDigitalConsumablesCost: totalDigitalConsumablesCost,
            totalSubstrateCost: totalSubstrateCost,
            totalFinishingCost: totalFinishingCost,
            totalPhysicalConsumablesCost: totalPhysicalConsumablesCost,
            totalExtraneousCosts: totalExtraneousCosts,
            subTotalCost: subTotalCost,
        };
        // console.debug(debugObject);

        // calculate in margin
        // returns [totalCost, costPerLabel]
        return {total: Number(applyMargin(subTotalCost)+Number(totalExtraneousCosts)), perLabel: Number(applyMargin(subTotalCost) / quantity)}

        // return (1 + vm.margin() / 100) * totalCost;
    };

    // This function synthesizes the inputs into a single cost number and sets to vm.totalChildCost()
    vm.calculate = function() {
        vm.quantity1() != 0 ? vm.overallCost1(vm.calculateForQuantity(vm.quantity1())) : vm.overallCost1({total: 0, perLabel: 0});
        vm.quantity2() != 0 ? vm.overallCost2(vm.calculateForQuantity(vm.quantity2())) : vm.overallCost2({total: 0, perLabel: 0});
        vm.quantity3() != 0 ? vm.overallCost3(vm.calculateForQuantity(vm.quantity3())) : vm.overallCost3({total: 0, perLabel: 0});
        vm.quantity4() != 0 ? vm.overallCost4(vm.calculateForQuantity(vm.quantity4())) : vm.overallCost4({total: 0, perLabel: 0});
        vm.quantity5() != 0 ? vm.overallCost5(vm.calculateForQuantity(vm.quantity5())) : vm.overallCost5({total: 0, perLabel: 0});
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
                m('.label-header', 'Shape'),
                calc.radios(vm.shape, [{
                    val: 'Rectangle',
                    label: 'Rectangle',
                }, {
                    val: 'Circle',
                    label: 'Circle',
                }]),
                m('h2', 'Tool'),
                m('.calc-item.col.gap-2.justify', [
                    m('div', [
                        m('.label-header', 'Across the Web'),
                    ]),
                    m('input.input-text.good.input-number', {
                        type: 'Number',
                        min: 0,
                        value: vm.toolAcross(),
                        onchange: function(e) {
                            m.withAttr('value', vm.toolAcross)(e);
                            vm.getTools();
                        }
                    }),
                ]),
                m('.calc-item.col.gap-2.justify', [
                    m('div', [
                        m('.label-header', 'Around the Web'),
                    ]),
                    m('input.input-text.good.input-number', {
                        type: 'Number',
                        min: 0,
                        value: vm.toolAround(),
                        onchange: function(e) {
                            m.withAttr('value', vm.toolAround)(e);
                            vm.getTools();
                        }
                    }),
                ]),
                m('.label-header', 'Corner Size (in)'),
                m.component(Select2, {
                    data: vm.cornerSizes,
                    value: vm.cornerSize,
                    onchange: function(val) {
                        vm.cornerSize(val);
                        vm.getTools();
                    },
                    options: {
                      width: '100%',
                    }
                }),
                m('.label-header', 'Select Tool'),
                m.component(Select2, {
                    data: vm.tools,
                    format: function(tool) {
                        return `${tool.acrossWeb}x${tool.aroundWeb} - ${tool.name}`;
                    },
                    value: vm.selectedTool,
                    onchange: function(val) {
                      if (val) {
                        app.service('tools').get(val).then(tool => {
                          vm.selectedToolObject(tool);
                        });
                      }
                    },
                    options: {
                      width: '100%'
                    }
                }),
                m('h2', 'Colors'),
                m('.label-header', 'Number of Colors'),
                calc.radios(vm.numColors, _.map([4,5,6,7], function(value, key) {return {val: value, label: value}}), function(){}),
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
                    val: vm.substrateMSI,
                    range: [0.0, 1.5, 0.01]
                }),
                m('.label-header', 'Finish'),
                calc.radios(vm.finish, [{
                    val: 'Laminate Gloss',
                    label: 'Laminate Gloss',
                }, {
                    val: 'Laminate Matte',
                    label: 'Laminate Matte',
                }, {
                    val: 'UV Gloss',
                    label: 'UV Gloss',
                }, {
                    val: 'UV Matte',
                    label: 'UV Matte',
                }], function() {
                    if (vm.finish() == 'Laminate Gloss') vm.finishMSI(0.20);
                    else if (vm.finish() == 'Laminate Matte') vm.finishMSI(0.40);
                    else if (vm.finish() == 'UV Gloss') vm.finishMSI(0.05);
                    else vm.finishMSI(0.05);
                }),
                calc.range({
                    header: 'Finish MSI',
                    // hint: 'Each additional design causes',
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
                m('h2', 'Copies'),
                calc.range({
                    header: 'Number of copies',
                    // hint: 'Each additional design causes',
                    val: vm.numDesigns,
                    range: [1, 8, 1]
                }),
                calc.range({
                    header: 'Cost Per Copy',
                    type: 'money',
                    val: vm.costPerDesign,
                    range: [0, 100, 1]
                }),
                m('h2', ''),
                calc.range({
                    header: 'Margin',
                    type: 'percent',
                    val: vm.margin,
                    range: [0, 99, 1]
                }),
                calc.range({
                    header: 'Prepress Charges',
                    type: 'money',
                    val: vm.prepressCharges,
                    range: [0, 500, 1]
                })
            ]),
            // COLUMN 4: RESULTS AND SUBMISSION 
            m('div', {class:'costs', config: stick}, [
                m('h1','Costs'),
                calc.resultDisplay(calc.formatMoney(vm.overallCost1().total, 2),
                    'Quantity 1', calc.formatMoney(vm.overallCost1().perLabel,3) + ' per label'),
                calc.resultDisplay(calc.formatMoney(vm.overallCost2().total, 2),
                    'Quantity 2', calc.formatMoney(vm.overallCost2().perLabel,3) + ' per label'),
                calc.resultDisplay(calc.formatMoney(vm.overallCost3().total, 2),
                    'Quantity 3', calc.formatMoney(vm.overallCost3().perLabel,3) + ' per label'),
                calc.resultDisplay(calc.formatMoney(vm.overallCost4().total, 2),
                    'Quantity 4', calc.formatMoney(vm.overallCost4().perLabel,3) + ' per label'),
                calc.resultDisplay(calc.formatMoney(vm.overallCost5().total, 2),
                    'Quantity 5', calc.formatMoney(vm.overallCost5().perLabel,3) + ' per label'),
                m('button.submit', {
                    onclick: vm.submitForm
                }, 'Submit'),
            ])
        ])
    ]);
};

window.QuoteForm = QuoteForm;

var stick = function(el, notInit, context) {
    if (!notInit) {
        var stickyColumn = $(el);
        console.log(stickyColumn.offset().top)
        var sidebarTop = stickyColumn.offset().top;
        console.log(sidebarTop)
        $(window).scroll(function () {
            if (stickyColumn.length > 0) {
                var scrollTop = $(window).scrollTop();
                if (sidebarTop < scrollTop) {
                    stickyColumn.css('top', scrollTop - sidebarTop);
                }
                else {
                    stickyColumn.css('top', '0');
                } 
            }
        });
    }
}
