// Mithril component for quote generation
import $ from 'jquery';
import m from 'mithril';
import _ from 'lodash';
const app = window.app;

global.m = m;

// These utility functions converts server json to vm-ready objects and back:
// - MITHRILIFY wraps each property of an object in mithrily goodness
// - DEMITHRILIFY rips away each property's mithrily veil
// TODO: this is a general m.prop object wrapper; move to somewhere general.
var mithrilify = obj => _.mapValues(obj, val => m.prop(val))
var demithrilify = obj => _.mapValues(obj, val => val())

var parseFrac = function(fracstring) {
    var numArray = fracstring.split(" ")
    var decVal = 0
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i].indexOf("/") > -1){
            var num = numArray[i].split("/")[0]
            var denom = numArray[i].split("/")[1]
            decVal += num / denom
        } else {
            decVal += Number(numArray[i]);
        }
    }
    return decVal
}

var QuoteForm = {};

QuoteForm.vm = {};

// TODO: shouldn't this be on the controller?
QuoteForm.vm.submitForm = function() {
    var vm = QuoteForm.vm;
    var rawQuote = demithrilify(vm.quoteObj);
    console.log(rawQuote);

    if (vm.isNewQuote) {
        $.ajax({
            url: '/quotes',
            type: 'POST',
            data: rawQuote,
            dataType: 'json',
            success: function(data, textStatus, jqXHR) {
                m.route('/review/' + data.quote_id);
            }
        });
    } else {
        rawQuote.updatedAt = Date.now();
        $.ajax({
            url: '/quotes/'+rawQuote._id,
            type: 'PUT',
            data: rawQuote,
            dataType: 'json',
            success: function(data, textStatus, jqXHR) {
                m.route('/review/' + data.quote_id);
            }
        });
    }
};

QuoteForm.vm.getTools = function() {
    // TODO: make this a mongo query?
    var vm = QuoteForm.vm;
    app.service('tools').find({query:{shape: vm.quoteObj.shape()}}).then(res => {
        var tools = res.data;
        // // Old search function:
        // var closest = [];
        // // First, filter by corner shape and size
        // for (var i = 0; i < tools.length; i++) {
        //     var tool = tools[i];
        //     // Euclidean distance because why not
        //     tool.distance = Math.sqrt(Math.pow(tool.acrossWeb - vm.quoteObj.toolAcross(), 2) + Math.pow(tool.aroundWeb - vm.quoteObj.toolAround(), 2));
        //     closest.push(tool);
        // }
        // // Sort by closest
        // closest.sort(function(a, b) {
        //     return a.distance - b.distance;
        // });
        // // Limit to 10
        // closest = closest.slice(0, 10);
        // // add custom tool
        // closest.push({
        tools.push({
          _id: 0,
          size: "Custom Die"
        });
        tools = tools.sort(function(a, b){
            if (a.size.indexOf("x") == -1 || b.size.indexOf("x") == -1){
                return a.size.localeCompare(b.size);
            }

            var asize = a.size.split("x")
            var bsize = b.size.split("x")
            if (parseFrac(asize[0]) > parseFrac(bsize[0])) return 1
            else if (parseFrac(asize[0]) < parseFrac(bsize[0])) return -1
            else {
                if (parseFrac(asize[1]) > parseFrac(bsize[1])) return 1
                else if (parseFrac(asize[1]) < parseFrac(bsize[1])) return -1
                return 0
            }

            return a.size.localeCompare(b.size);
        })
        vm.tools(tools);
    });
};



QuoteForm.controller = function(args) {
    var vm = QuoteForm.vm;

    var initWithNewQuote = function(){
        //defaults
        var rawQuote = {
            name: '',
            addressStreet: '',
            addressCity: '',
            addressState: '',
            addressZip: '',
            phone: '',
            email: '',
            description: '',

            selectedToolID: 0,
            selectedToolSize: '', // a string
            shape: 'Rectangle', // Rectangle, Circle, Triangle, Star
            corner: '',// Square, Round
            toolAround: 0,
            toolAcross: 0,
            toolOverhead: 0,

            quantity1: 100,
            quantity2: 0,
            quantity3: 0,
            quantity4: 0,
            quantity5: 0,

            margin1: 60,
            margin2: 60,
            margin3: 60,
            margin4: 60,
            margin5: 60,

            numColors: 4,
            substrate: 'Semi Gloss AT20 - 53269',
            substrateMSI: 0.45,
            finish: 'Laminate Gloss',
            finishMSI: 0.20,

            numDesigns: 1,
            costPerDesign: 15,
            prepressCharges: 0,

            overallCost1: {
                total: 0,
                perLabel: 0
            },
            overallCost2: {
                total: 0,
                perLabel: 0
            },
            overallCost3: {
                total: 0,
                perLabel: 0
            },
            overallCost4: {
                total: 0,
                perLabel: 0
            },
            overallCost5: {
                total: 0,
                perLabel: 0
            }
        }
        vm.quoteObj = mithrilify(rawQuote);
        vm.isNewQuote = true;
        initCommon();
        vm.initializing = false;
        m.redraw(); // TODO: is this necessary? (for the "initializing thing")
    }

    var initWithExistingQuote = function(rawQuote){
        vm.quoteObj = mithrilify(rawQuote);
        if (!vm.quoteObj.description) vm.quoteObj.description = m.prop('');
        vm.isNewQuote = false;
        initCommon();
        vm.initializing = false;
        m.redraw(); // TODO: is this necessary? (for the "initializing thing")
    }

    var initCommon = function(){
        vm.defaultMSI = {
            'Semi Gloss AT20 - 53269': 0.41,
            'White Bopp - 79536': 0.57,
            'Clear Bopp - 79560': 0.59,
            'Silver Paper - 53909': 0.69,
            'Silver Bopp - 79248': 0.68,
            'Paper Perm - 53272': 0.43,
            'Matte Litho - 19958': 0.44
        };

        vm.selectedToolObject = m.prop(null);
        vm.toolDesc = m.prop(); //to hold the description for display when a particular tool is selected
        vm.tools = m.prop([]);
        vm.getTools();
    }

    //TODO: replace this with a modal
    var notify = function(text) {
        setTimeout(function() { alert(text); }, 0);
    }

    //block the UI until we determine what to do with quoteID information
    vm.initializing = true;

    if (m.route.param("quoteID")){
        //if we're editing an existing quote
        var quoteNum = m.route.param("quoteID")
        app.service('quotes').find({query:{quote_id: quoteNum }}).then( res => {
            if (res.data.length == 0) {
                notify("Sorry, we don't have a quote stored with Quote #"+quoteNum+". Press OK to begin a new quote.")
                m.route("/quote")
            } else if (res.data.length >= 2){
                notify("We found multiple quotes with Quote #"+quoteNum+". Press OK to edit the first one, but be sure to contact support because there is an error in the database.")
                initWithExistingQuote(res.data[0])
            } else {
                initWithExistingQuote(res.data[0]);
            }
        });
    } else initWithNewQuote();

    vm.calculateForQuantity = function(quantity, margin) {
        var applyMargin = function(num, marg) {
            return num / (1 - marg / 100);
        }

        var inchesInFoot = 12;
        var minHr = 60;

        // Hardcoded entries based on their exact job requirements and specific machine type.
        var maxImageAreaWebWidth = 11.84;
        var maxImageAreaRepeatLength = 17.70;
        var colorsPerFrame = vm.quoteObj.numColors() || 4;
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

        var labelsAcrossTheWeb = Math.floor(
            maxImageAreaWebWidth / (Number(vm.quoteObj.toolAcross()) + acrossGutter));
        var labelsAroundTheWeb = Math.floor(
            maxImageAreaRepeatLength / (Number(vm.quoteObj.toolAround()) + aroundGutter));

        var labelsPerFrame = labelsAcrossTheWeb * labelsAroundTheWeb;

        var repeatLength = labelsAroundTheWeb * (Number(vm.quoteObj.toolAround()) + aroundGutter);

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

        var totalSubstrateCost = vm.quoteObj.substrateMSI() * msi;
        var totalFinishingCost = vm.quoteObj.finishMSI() * msi;

        var totalPhysicalConsumablesCost =
            totalSubstrateCost +
            totalFinishingCost;

        var totalExtraneousCosts =
            (Number(vm.quoteObj.numDesigns()) * Number(vm.quoteObj.costPerDesign())) +
            Number(vm.quoteObj.prepressCharges())+
            Number(vm.quoteObj.toolOverhead());

        var subTotalCost = Number(totalTimeCost) +
            Number(totalDigitalConsumablesCost) +
            Number(totalPhysicalConsumablesCost)/* +
            Number(totalExtraneousCosts);*/

        // var debugObject = {
        //     labelsAcrossTheWeb: labelsAcrossTheWeb,
        //     labelsAroundTheWeb: labelsAroundTheWeb,
        //     labelsPerFrame: labelsPerFrame,
        //     repeatLength: repeatLength,
        //     productionFrames: productionFrames,
        //     productionLinFt: productionLinFt,
        //     totalLinFt: totalLinFt,
        //     msi: msi,
        //     totalPrePressTimeCost: totalPrePressTimeCost,
        //     totalPressRunMinutes: totalPressRunMinutes,
        //     totalPressRunTimeCost: totalPressRunTimeCost,
        //     totalFinishingMiniutes: totalFinishingMiniutes,
        //     totalFinishingTimeCost: totalFinishingTimeCost,
        //     totalRewindMinutes: totalRewindMinutes,
        //     totalRewindTimeCost: totalRewindTimeCost,
        //     totalTimeCost: totalTimeCost,
        //     totalImpressions: totalImpressions,
        //     totalDigitalConsumablesCost: totalDigitalConsumablesCost,
        //     totalSubstrateCost: totalSubstrateCost,
        //     totalFinishingCost: totalFinishingCost,
        //     totalPhysicalConsumablesCost: totalPhysicalConsumablesCost,
        //     totalExtraneousCosts: totalExtraneousCosts,
        //     subTotalCost: subTotalCost,
        // };
        // console.debug(debugObject);

        // calculate in margin
        // returns [totalCost, costPerLabel]
        return {total: Number(applyMargin(subTotalCost, margin)+Number(totalExtraneousCosts)), perLabel: Number(applyMargin(subTotalCost, margin) / quantity)}

        // return (1 + vm.quoteObj.margin() / 100) * totalCost;
    };

    // This function synthesizes the inputs into a single cost number and sets to vm.totalChildCost()
    // TODO: fix these ugly, ugly constructions
    vm.calculate = function() {
        vm.quoteObj.quantity1() != 0 ? vm.quoteObj.overallCost1(vm.calculateForQuantity(vm.quoteObj.quantity1(), vm.quoteObj.margin1())) : vm.quoteObj.overallCost1({total: 0, perLabel: 0});
        vm.quoteObj.quantity2() != 0 ? vm.quoteObj.overallCost2(vm.calculateForQuantity(vm.quoteObj.quantity2(), vm.quoteObj.margin2())) : vm.quoteObj.overallCost2({total: 0, perLabel: 0});
        vm.quoteObj.quantity3() != 0 ? vm.quoteObj.overallCost3(vm.calculateForQuantity(vm.quoteObj.quantity3(), vm.quoteObj.margin3())) : vm.quoteObj.overallCost3({total: 0, perLabel: 0});
        vm.quoteObj.quantity4() != 0 ? vm.quoteObj.overallCost4(vm.calculateForQuantity(vm.quoteObj.quantity4(), vm.quoteObj.margin4())) : vm.quoteObj.overallCost4({total: 0, perLabel: 0});
        vm.quoteObj.quantity5() != 0 ? vm.quoteObj.overallCost5(vm.calculateForQuantity(vm.quoteObj.quantity5(), vm.quoteObj.margin5())) : vm.quoteObj.overallCost5({total: 0, perLabel: 0});
    };
};

//here's the view
QuoteForm.view = function(ctrl, args) {
    var vm = QuoteForm.vm;
    vm.calculate();

    return m('div', [
        m('h1.title', vm.isNewQuote ? "New Quote" : "Edit Quote " + vm.quoteObj.quote_id()),
        m('.calc.row.center.gap-5', [
            vm.initializing ? m(".blocking", "Loading...") : undefined,

            // COLUMN 1: CLIENT INFO
            m('div', [
                m('h1', 'Client Information'),
                m('.calc-item.col.gap-2.justify', [
                    m('div', [
                        m('.label-header', 'Name'),
                    ]),
                    m('input.input-text.good border', {
                        onchange: m.withAttr('value', vm.quoteObj.name),
                        value: vm.quoteObj.name()
                    })
                ]),
                m('.calc-item.col.gap-2.justify', [
                    m('div', [
                        m('.label-header', 'Address'),
                    ]),
                    m('input.input-text.good border', {
                        onchange: m.withAttr('value', vm.quoteObj.addressStreet),
                        value: vm.quoteObj.addressStreet()
                    })
                ]),
                m('.calc-item.col.gap-2.justify', [
                    m('div', [
                        m('.label-header', 'City'),
                    ]),
                    m('input.input-text.good border', {
                        onchange: m.withAttr('value', vm.quoteObj.addressCity),
                        value: vm.quoteObj.addressCity()
                    })
                ]),
                m('.calc-item.col.gap-2.justify', [
                    m('div', [
                        m('.label-header', 'State'),
                    ]),
                    m('input.input-text.good border', {
                        onchange: m.withAttr('value', vm.quoteObj.addressState),
                        value: vm.quoteObj.addressState()
                    })
                ]),
                m('.calc-item.col.gap-2.justify', [
                    m('div', [
                        m('.label-header', 'Zip Code'),
                    ]),
                    m('input.input-text.good border', {
                        onchange: m.withAttr('value', vm.quoteObj.addressZip),
                        value: vm.quoteObj.addressZip()
                    })
                ]),
                m('.calc-item.col.gap-2.justify', [
                    m('div', [
                        m('.label-header', 'Phone'),
                    ]),
                    m('input.input-text.good border', {
                        onchange: m.withAttr('value', vm.quoteObj.phone),
                        value: vm.quoteObj.phone()
                    })
                ]),
                m('.calc-item.col.gap-2.justify', [
                    m('div', [
                        m('.label-header', 'Email'),
                    ]),
                    m('input.input-text.good border', {
                        onchange: m.withAttr('value', vm.quoteObj.email),
                        value: vm.quoteObj.email()
                    })
                ]),
                m('.calc-item.col.gap-2.justify', [
                    m('div', [
                        m('.label-header', 'Description'),
                    ]),
                    m('input.input-text.good border', {
                        onchange: m.withAttr('value', vm.quoteObj.description),
                        value: vm.quoteObj.description()
                    })
                ]),
            ]),
            // COLUMN 2: EQUIPMENT / PAPER / FINISH
            m('div', [
                m('h1', 'Printing Details'),
                m('.label-header', 'Shape'),
                calc.radios(vm.quoteObj.shape, [{
                    val: 'Rectangle',
                    label: 'Rectangle',
                }, {
                    val: 'Circle',
                    label: 'Circle',
                }, {
                    val: 'Special',
                    label: 'Special',
                }], null, function() {vm.getTools(); vm.quoteObj.selectedToolID(0); vm.selectedToolObject(null); vm.quoteObj.selectedToolSize("")}),
                m('h2', 'Tool'),
                m('.label-header', 'Select Tool'),
                m.component(Select2, {
                    data: vm.tools,
                    format: function(tool) {
                        // if (tool.acrossWeb == null) return tool.size;
                        return tool.size+(tool.description ? " - " + tool.description.substring(0,10) : "");
                    },
                    value: vm.quoteObj.selectedToolID,
                    onchange: function(val) {
                    // if a tool is chosen, then look it up (again?) and
                    // pretty sure val is _id
                      if (val && val != 0) {
                        console.log(val)
                        app.service('tools').get(val).then(tool => {
                          console.log(tool)
                          vm.selectedToolObject(tool);
                          vm.quoteObj.selectedToolSize(tool.size);
                          vm.quoteObj.shape(tool.shape);
                          vm.quoteObj.corner(tool.corner);
                          // vm.quoteObj.toolAcross(tool.acrossWeb);
                          // vm.quoteObj.toolAround(tool.aroundWeb);
                          // Apparently "acrossWeb" and "aroundWeb" mean "height" and "width" to Joe, and perhaps also the pricing spreadsheet? Unclear.
                          vm.quoteObj.toolAcross(parseFrac(tool.size.split("x")[0]))
                          // the OR below catches the case that we're dealing with a circle
                          vm.quoteObj.toolAround(parseFrac(tool.size.split("x")[1] || tool.size.split("x")[0]))
                          vm.toolDesc(tool.description);
                        });
                      }
                      if (val && val == 0){
                          vm.quoteObj.selectedToolSize('');
                          vm.selectedToolObject(null);
                          //the settimeout is there to deal with a missing null check internal to Select2.
                          setTimeout(function(){m.redraw();});
                      }
                    },
                    options: {
                      width: '100%'
                    }
                }),
                // vm.selectedToolObject() ? undefined : m('.calc-item.col.gap-2.justify', [
                //     m('div', [
                //         m('.label-header', 'Custom Size'),
                //     ]),
                //     m('input.input-text.good border', {
                //         onchange: m.withAttr('value', vm.quoteObj.selectedToolSize),
                //         value: vm.quoteObj.selectedToolSize()
                //     })
                // ]),
                vm.selectedToolObject() ? undefined : m('.calc-item.col.gap-2.justify', [
                    m('div', [
                        m('.label-header', 'Across the Web'),
                    ]),
                    m('input.input-text.good.input-number', {
                        type: 'Number',
                        min: 0,
                        value: vm.quoteObj.toolAcross(),
                        onchange: function(e) {
                            m.withAttr('value', vm.quoteObj.toolAcross)(e);
                            vm.quoteObj.selectedToolSize("Custom " + vm.quoteObj.toolAcross()+" x "+vm.quoteObj.toolAround())
                        }
                    }),
                ]),
                vm.selectedToolObject() ? undefined : m('.calc-item.col.gap-2.justify', [
                    m('div', [
                        m('.label-header', 'Around the Web'),
                    ]),
                    m('input.input-text.good.input-number', {
                        type: 'Number',
                        min: 0,
                        value: vm.quoteObj.toolAround(),
                        onchange: function(e) {
                            m.withAttr('value', vm.quoteObj.toolAround)(e);
                            vm.quoteObj.selectedToolSize("Custom " + vm.quoteObj.toolAcross()+" x "+vm.quoteObj.toolAround())
                        }
                    }),
                ]),
                // m('small', {style:"padding: 5px; display: "+(!!vm.toolDesc() ? "inherit" : "none")+ "; font-weight: bold; background-color: lightgray; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; margin-top: -3px;"},
                //     vm.toolDesc()),
                calc.range({
                    header: 'Tool Overhead',
                    hint: 'E.g., if you need a new die',
                    type: 'money',
                    val: vm.quoteObj.toolOverhead,
                    range: [0, 250, 1]
                }),
                m('h2', 'Colors'),
                m('.label-header', 'Number of Colors'),
                calc.radios(vm.quoteObj.numColors, _.map([4,5,6,7], function(value, key) {return {val: value, label: value}}), function(){}),
                m('h2', 'Paper & Finish'),
                m('.label-header', 'Substrate'),
                calc.radios(vm.quoteObj.substrate, _.map(vm.defaultMSI, function(value, key) {
                    return {
                        val: key,
                        label: key
                    };
                }), function() {
                    vm.quoteObj.substrateMSI(vm.defaultMSI[vm.quoteObj.substrate()]);
                }),
                calc.range({
                    header: 'Substrate MSI',
                    val: vm.quoteObj.substrateMSI,
                    range: [0.0, 1.5, 0.01]
                }),
                m('.label-header', 'Finish'),
                calc.radios(vm.quoteObj.finish, [{
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
                    if (vm.quoteObj.finish() == 'Laminate Gloss') vm.quoteObj.finishMSI(0.20);
                    else if (vm.quoteObj.finish() == 'Laminate Matte') vm.quoteObj.finishMSI(0.40);
                    else if (vm.quoteObj.finish() == 'UV Gloss') vm.quoteObj.finishMSI(0.05);
                    else vm.quoteObj.finishMSI(0.05);
                }),
                calc.range({
                    header: 'Finish MSI',
                    // hint: 'Each additional design causes',
                    val: vm.quoteObj.finishMSI,
                    range: [0.0, 1.5, 0.01]
                }),
            ]),
            // COLUMN 3: QUANTITY AND ADDITIONAL INFO
            m('div', [
                m('h1', 'Order Details'),
                m('h2', 'Label Quantities'),
                calc.range({
                    header: 'Quantity 1',
                    val: vm.quoteObj.quantity1,
                    type: 'number',
                    range: [0, 1000000, 100]
                }),
                calc.range({
                    header: 'Margin 1',
                    type: 'percent',
                    val: vm.quoteObj.margin1,
                    range: [0, 99, 1]
                }),
                calc.range({
                    header: 'Quantity 2',
                    val: vm.quoteObj.quantity2,
                    type: 'number',
                    range: [0, 1000000, 100]
                }),
                calc.range({
                    header: 'Margin 2',
                    type: 'percent',
                    val: vm.quoteObj.margin2,
                    range: [0, 99, 1]
                }),
                calc.range({
                    header: 'Quantity 3',
                    val: vm.quoteObj.quantity3,
                    type: 'number',
                    range: [0, 1000000, 100]
                }),
                calc.range({
                    header: 'Margin 3',
                    type: 'percent',
                    val: vm.quoteObj.margin3,
                    range: [0, 99, 1]
                }),
                calc.range({
                    header: 'Quantity 4',
                    val: vm.quoteObj.quantity4,
                    type: 'number',
                    range: [0, 1000000, 100]
                }),
                calc.range({
                    header: 'Margin 4',
                    type: 'percent',
                    val: vm.quoteObj.margin4,
                    range: [0, 99, 1]
                }),
                calc.range({
                    header: 'Quantity 5',
                    val: vm.quoteObj.quantity5,
                    type: 'number',
                    range: [0, 1000000, 100]
                }),
                calc.range({
                    header: 'Margin 5',
                    type: 'percent',
                    val: vm.quoteObj.margin5,
                    range: [0, 99, 1]
                }),
                m('h2', 'Copies'),
                calc.range({
                    header: 'Number of copies',
                    // hint: 'Each additional design causes',
                    val: vm.quoteObj.numDesigns,
                    range: [1, 8, 1]
                }),
                calc.range({
                    header: 'Cost Per Copy',
                    type: 'money',
                    val: vm.quoteObj.costPerDesign,
                    range: [0, 100, 1]
                }),
                m('h2', ''),
                calc.range({
                    header: 'Prepress Charges',
                    type: 'money',
                    val: vm.quoteObj.prepressCharges,
                    range: [0, 500, 1]
                }),
            ]),
            // COLUMN 4: RESULTS AND SUBMISSION
            m('div', {class:'costs', config: stick}, [
                m('h1','Costs'),
                calc.resultDisplay(calc.formatMoney(vm.quoteObj.overallCost1().total, 2),
                    'Quantity 1', calc.formatMoney(vm.quoteObj.overallCost1().perLabel,3) + ' per label'),
                calc.resultDisplay(calc.formatMoney(vm.quoteObj.overallCost2().total, 2),
                    'Quantity 2', calc.formatMoney(vm.quoteObj.overallCost2().perLabel,3) + ' per label'),
                calc.resultDisplay(calc.formatMoney(vm.quoteObj.overallCost3().total, 2),
                    'Quantity 3', calc.formatMoney(vm.quoteObj.overallCost3().perLabel,3) + ' per label'),
                calc.resultDisplay(calc.formatMoney(vm.quoteObj.overallCost4().total, 2),
                    'Quantity 4', calc.formatMoney(vm.quoteObj.overallCost4().perLabel,3) + ' per label'),
                calc.resultDisplay(calc.formatMoney(vm.quoteObj.overallCost5().total, 2),
                    'Quantity 5', calc.formatMoney(vm.quoteObj.overallCost5().perLabel,3) + ' per label'),
                m('button.submit', {
                    onclick: vm.submitForm
                }, 'Save and Review'),
                !vm.isNewQuote ? m('button.cancel', {
                    onclick: () => {m.route("/admin")} // TODO: make this just click the back button? E.g. window.history.back
                }, 'Cancel') : undefined,
            ])
        ])
    ]);
};

module.exports = QuoteForm;

var stick = function(el, notInit, context) {
    if (!notInit) {
        var stickyColumn = $(el);
        var sidebarTop = stickyColumn.offset().top;
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
