/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(103);
	__webpack_require__(104);
	
	__webpack_require__(1);
	__webpack_require__(3);
	
	// Move static files to the right place
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(106);
	__webpack_require__(105);
	__webpack_require__(107);
	// require('!style!css!sass!./styles/main.scss');
	
	var io = __webpack_require__(10);
	var feathers = __webpack_require__(56);
	
	var socket = io();
	// Initialize our Feathers client application through Socket.io
	// with hooks and authentication.
	window.app = feathers().configure(feathers.socketio(socket)).configure(feathers.hooks())
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
	
	calculator.vm.init = function () {
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
	    vm.calculate = function () {};
	};
	
	calculator.controller = function () {
	    calculator.vm.init();
	};
	
	//here's the view
	calculator.view = function (ctrl) {
	    var vm = calculator.vm;
	
	    vm.calculate();
	
	    return calc.calc(function () {
	        return [m('h1', 'American Tape and Label Quote'), m('h2', 'Client Information'), m('.calc-item.col.gap-2.justify', [m('div', [m('.label-header', 'Name')]), m('input.input-text.good border', {
	            onchange: m.withAttr('value', vm.name),
	            value: vm.name()
	        })]), m('.calc-item.col.gap-2.justify', [m('div', [m('.label-header', 'Address')]), m('input.input-text.good border', {
	            onchange: m.withAttr('value', vm.addressStreet),
	            value: vm.addressStreet()
	        })]), m('.calc-item.col.gap-2.justify', [m('div', [m('.label-header', 'City')]), m('input.input-text.good border', {
	            onchange: m.withAttr('value', vm.addressCity),
	            value: vm.addressCity()
	        })]), m('.calc-item.col.gap-2.justify', [m('div', [m('.label-header', 'State')]), m('input.input-text.good border', {
	            onchange: m.withAttr('value', vm.addressState),
	            value: vm.addressState()
	        })]), m('.calc-item.col.gap-2.justify', [m('div', [m('.label-header', 'Zip Code')]), m('input.input-text.good border', {
	            onchange: m.withAttr('value', vm.addressZip),
	            value: vm.addressZip()
	        })]), m('.calc-item.col.gap-2.justify', [m('div', [m('.label-header', 'Phone')]), m('input.input-text.good border', {
	            onchange: m.withAttr('value', vm.phone),
	            value: vm.phone()
	        })]), m('.calc-item.col.gap-2.justify', [m('div', [m('.label-header', 'Email')]), m('input.input-text.good border', {
	            onchange: m.withAttr('value', vm.email),
	            value: vm.email()
	        })]), m('h2', 'Equipment'), m('.label-header', 'Shape'), calc.radios(vm.shape, [{
	            val: 'Rectangle',
	            label: 'Rectangle'
	        }, {
	            val: 'Circle',
	            label: 'Circle'
	        }]), m('.label-header', 'Corner'), calc.radios(vm.corner, [{
	            val: 'Square',
	            label: 'Square'
	        }, {
	            val: 'Rounded',
	            label: 'Rounded'
	        }]), m('.label-header', 'Tool'), calc.radios(vm.tool, [{
	            val: 'Need list of tools',
	            label: 'Need list of tools'
	        }]), m('h2', 'Paper & Finish'), m('.label-header', 'Substrate'), calc.radios(vm.substrate, [{
	            val: 'Need list of substrates',
	            label: 'Need list of substrates'
	        }]), m('.label-header', 'Finish'), calc.radios(vm.finish, [{
	            val: 'Need list of finishes',
	            label: 'Need list of finishes'
	        }]), m('h2', 'Quantity'), calc.range({
	            header: 'Number of labels',
	            val: vm.quantity,
	            type: 'number',
	            range: [0, 1000000, 100]
	        }), m('h2', 'Other information'), calc.range({
	            header: 'Number of designs',
	            hint: 'Each additional design causes',
	            val: vm.numDesigns,
	            range: [1, 8, 1]
	        }), calc.range({
	            header: 'Cost Per Design',
	            type: 'money',
	            val: vm.costPerDesign,
	            range: [0, 30, 1]
	        }), calc.range({
	            header: 'Margin',
	            type: 'percent',
	            val: vm.margin,
	            range: [0, 200, 1]
	        }), calc.range({
	            header: 'Prepress Charges',
	            type: 'money',
	            val: vm.prepressCharges,
	            range: [0, 500, 1]
	        }), calc.range({
	            header: 'Copy Charges',
	            type: 'money',
	            val: vm.copyCharges,
	            range: [0, 500, 1]
	        }), m('h2', 'Results'), calc.resultDisplay(calc.formatMoney(vm.overallCost()), 'Overall Cost'), m('button.submit', 'Submit')
	
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

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var m = function app(window, undefined) {
	  var OBJECT = "[object Object]",
	      ARRAY = "[object Array]",
	      STRING = "[object String]",
	      FUNCTION = "function";
	  var type = {}.toString;
	  var parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g,
	      attrParser = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/;
	  var voidElements = /^(AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TRACK|WBR)$/;
	  var noop = function noop() {};
	
	  // caching commonly used variables
	  var $document, $location, $requestAnimationFrame, $cancelAnimationFrame;
	
	  // self invoking function needed because of the way mocks work
	  function initialize(window) {
	    $document = window.document;
	    $location = window.location;
	    $cancelAnimationFrame = window.cancelAnimationFrame || window.clearTimeout;
	    $requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
	  }
	
	  initialize(window);
	
	  /**
	   * @typedef {String} Tag
	   * A string that looks like -> div.classname#id[param=one][param2=two]
	   * Which describes a DOM node
	   */
	
	  /**
	   *
	   * @param {Tag} The DOM node tag
	   * @param {Object=[]} optional key-value pairs to be mapped to DOM attrs
	   * @param {...mNode=[]} Zero or more Mithril child nodes. Can be an array, or splat (optional)
	   *
	   */
	  function m() {
	    var args = [].slice.call(arguments);
	    var hasAttrs = args[1] != null && type.call(args[1]) === OBJECT && !("tag" in args[1] || "view" in args[1]) && !("subtree" in args[1]);
	    var attrs = hasAttrs ? args[1] : {};
	    var classAttrName = "class" in attrs ? "class" : "className";
	    var cell = {
	      tag: "div",
	      attrs: {}
	    };
	    var match,
	        classes = [];
	    if (type.call(args[0]) != STRING) throw new Error("selector in m(selector, attrs, children) should be a string");
	    while (match = parser.exec(args[0])) {
	      if (match[1] === "" && match[2]) cell.tag = match[2];else if (match[1] === "#") cell.attrs.id = match[2];else if (match[1] === ".") classes.push(match[2]);else if (match[3][0] === "[") {
	        var pair = attrParser.exec(match[3]);
	        cell.attrs[pair[1]] = pair[3] || (pair[2] ? "" : true);
	      }
	    }
	
	    var children = hasAttrs ? args.slice(2) : args.slice(1);
	    if (children.length === 1 && type.call(children[0]) === ARRAY) {
	      cell.children = children[0];
	    } else {
	      cell.children = children;
	    }
	
	    for (var attrName in attrs) {
	      if (attrs.hasOwnProperty(attrName)) {
	        if (attrName === classAttrName && attrs[attrName] != null && attrs[attrName] !== "") {
	          classes.push(attrs[attrName]);
	          cell.attrs[attrName] = ""; //create key in correct iteration order
	        } else cell.attrs[attrName] = attrs[attrName];
	      }
	    }
	    if (classes.length > 0) cell.attrs[classAttrName] = classes.join(" ");
	
	    return cell;
	  }
	
	  function build(parentElement, parentTag, parentCache, parentIndex, data, cached, shouldReattach, index, editable, namespace, configs) {
	    //`build` is a recursive function that manages creation/diffing/removal of DOM elements based on comparison between `data` and `cached`
	    //the diff algorithm can be summarized as this:
	    //1 - compare `data` and `cached`
	    //2 - if they are different, copy `data` to `cached` and update the DOM based on what the difference is
	    //3 - recursively apply this algorithm for every array and for the children of every virtual element
	
	    //the `cached` data structure is essentially the same as the previous redraw's `data` data structure, with a few additions:
	    //- `cached` always has a property called `nodes`, which is a list of DOM elements that correspond to the data represented by the respective virtual element
	    //- in order to support attaching `nodes` as a property of `cached`, `cached` is *always* a non-primitive object, i.e. if the data was a string, then cached is a String instance. If data was `null` or `undefined`, cached is `new String("")`
	    //- `cached also has a `configContext` property, which is the state storage object exposed by config(element, isInitialized, context)
	    //- when `cached` is an Object, it represents a virtual element; when it's an Array, it represents a list of elements; when it's a String, Number or Boolean, it represents a text node
	
	    //`parentElement` is a DOM element used for W3C DOM API calls
	    //`parentTag` is only used for handling a corner case for textarea values
	    //`parentCache` is used to remove nodes in some multi-node cases
	    //`parentIndex` and `index` are used to figure out the offset of nodes. They're artifacts from before arrays started being flattened and are likely refactorable
	    //`data` and `cached` are, respectively, the new and old nodes being diffed
	    //`shouldReattach` is a flag indicating whether a parent node was recreated (if so, and if this node is reused, then this node must reattach itself to the new parent)
	    //`editable` is a flag that indicates whether an ancestor is contenteditable
	    //`namespace` indicates the closest HTML namespace as it cascades down from an ancestor
	    //`configs` is a list of config functions to run after the topmost `build` call finishes running
	
	    //there's logic that relies on the assumption that null and undefined data are equivalent to empty strings
	    //- this prevents lifecycle surprises from procedural helpers that mix implicit and explicit return statements (e.g. function foo() {if (cond) return m("div")}
	    //- it simplifies diffing code
	    //data.toString() might throw or return null if data is the return value of Console.log in Firefox (behavior depends on version)
	    try {
	      if (data == null || data.toString() == null) data = "";
	    } catch (e) {
	      data = "";
	    }
	    if (data.subtree === "retain") return cached;
	    var cachedType = type.call(cached),
	        dataType = type.call(data);
	    if (cached == null || cachedType !== dataType) {
	      if (cached != null) {
	        if (parentCache && parentCache.nodes) {
	          var offset = index - parentIndex;
	          var end = offset + (dataType === ARRAY ? data : cached.nodes).length;
	          clear(parentCache.nodes.slice(offset, end), parentCache.slice(offset, end));
	        } else if (cached.nodes) clear(cached.nodes, cached);
	      }
	      cached = new data.constructor();
	      if (cached.tag) cached = {}; //if constructor creates a virtual dom element, use a blank object as the base cached node instead of copying the virtual el (#277)
	      cached.nodes = [];
	    }
	
	    if (dataType === ARRAY) {
	      //recursively flatten array
	      for (var i = 0, len = data.length; i < len; i++) {
	        if (type.call(data[i]) === ARRAY) {
	          data = data.concat.apply([], data);
	          i--; //check current index again and flatten until there are no more nested arrays at that index
	          len = data.length;
	        }
	      }
	
	      var nodes = [],
	          intact = cached.length === data.length,
	          subArrayCount = 0;
	
	      //keys algorithm: sort elements without recreating them if keys are present
	      //1) create a map of all existing keys, and mark all for deletion
	      //2) add new keys to map and mark them for addition
	      //3) if key exists in new list, change action from deletion to a move
	      //4) for each key, handle its corresponding action as marked in previous steps
	      var DELETION = 1,
	          INSERTION = 2,
	          MOVE = 3;
	      var existing = {},
	          shouldMaintainIdentities = false;
	      for (var i = 0; i < cached.length; i++) {
	        if (cached[i] && cached[i].attrs && cached[i].attrs.key != null) {
	          shouldMaintainIdentities = true;
	          existing[cached[i].attrs.key] = {
	            action: DELETION,
	            index: i
	          };
	        }
	      }
	
	      var guid = 0;
	      for (var i = 0, len = data.length; i < len; i++) {
	        if (data[i] && data[i].attrs && data[i].attrs.key != null) {
	          for (var j = 0, len = data.length; j < len; j++) {
	            if (data[j] && data[j].attrs && data[j].attrs.key == null) data[j].attrs.key = "__mithril__" + guid++;
	          }
	          break;
	        }
	      }
	
	      if (shouldMaintainIdentities) {
	        var keysDiffer = false;
	        if (data.length != cached.length) keysDiffer = true;else for (var i = 0, cachedCell, dataCell; cachedCell = cached[i], dataCell = data[i]; i++) {
	          if (cachedCell.attrs && dataCell.attrs && cachedCell.attrs.key != dataCell.attrs.key) {
	            keysDiffer = true;
	            break;
	          }
	        }
	
	        if (keysDiffer) {
	          for (var i = 0, len = data.length; i < len; i++) {
	            if (data[i] && data[i].attrs) {
	              if (data[i].attrs.key != null) {
	                var key = data[i].attrs.key;
	                if (!existing[key]) existing[key] = {
	                  action: INSERTION,
	                  index: i
	                };else existing[key] = {
	                  action: MOVE,
	                  index: i,
	                  from: existing[key].index,
	                  element: cached.nodes[existing[key].index] || $document.createElement("div")
	                };
	              }
	            }
	          }
	          var actions = [];
	          for (var prop in existing) {
	            actions.push(existing[prop]);
	          }var changes = actions.sort(sortChanges);
	          var newCached = new Array(cached.length);
	          newCached.nodes = cached.nodes.slice();
	
	          for (var i = 0, change; change = changes[i]; i++) {
	            if (change.action === DELETION) {
	              clear(cached[change.index].nodes, cached[change.index]);
	              newCached.splice(change.index, 1);
	            }
	            if (change.action === INSERTION) {
	              var dummy = $document.createElement("div");
	              dummy.key = data[change.index].attrs.key;
	              parentElement.insertBefore(dummy, parentElement.childNodes[change.index] || null);
	              newCached.splice(change.index, 0, {
	                attrs: {
	                  key: data[change.index].attrs.key
	                },
	                nodes: [dummy]
	              });
	              newCached.nodes[change.index] = dummy;
	            }
	
	            if (change.action === MOVE) {
	              if (parentElement.childNodes[change.index] !== change.element && change.element !== null) {
	                parentElement.insertBefore(change.element, parentElement.childNodes[change.index] || null);
	              }
	              newCached[change.index] = cached[change.from];
	              newCached.nodes[change.index] = change.element;
	            }
	          }
	          cached = newCached;
	        }
	      }
	      //end key algorithm
	
	      for (var i = 0, cacheCount = 0, len = data.length; i < len; i++) {
	        //diff each item in the array
	        var item = build(parentElement, parentTag, cached, index, data[i], cached[cacheCount], shouldReattach, index + subArrayCount || subArrayCount, editable, namespace, configs);
	        if (item === undefined) continue;
	        if (!item.nodes.intact) intact = false;
	        if (item.$trusted) {
	          //fix offset of next element if item was a trusted string w/ more than one html element
	          //the first clause in the regexp matches elements
	          //the second clause (after the pipe) matches text nodes
	          subArrayCount += (item.match(/<[^\/]|\>\s*[^<]/g) || [0]).length;
	        } else subArrayCount += type.call(item) === ARRAY ? item.length : 1;
	        cached[cacheCount++] = item;
	      }
	      if (!intact) {
	        //diff the array itself
	
	        //update the list of DOM nodes by collecting the nodes from each item
	        for (var i = 0, len = data.length; i < len; i++) {
	          if (cached[i] != null) nodes.push.apply(nodes, cached[i].nodes);
	        }
	        //remove items from the end of the array if the new array is shorter than the old one
	        //if errors ever happen here, the issue is most likely a bug in the construction of the `cached` data structure somewhere earlier in the program
	        for (var i = 0, node; node = cached.nodes[i]; i++) {
	          if (node.parentNode != null && nodes.indexOf(node) < 0) clear([node], [cached[i]]);
	        }
	        if (data.length < cached.length) cached.length = data.length;
	        cached.nodes = nodes;
	      }
	    } else if (data != null && dataType === OBJECT) {
	      var views = [],
	          controllers = [];
	      while (data.view) {
	        var view = data.view.$original || data.view;
	        var controllerIndex = m.redraw.strategy() == "diff" && cached.views ? cached.views.indexOf(view) : -1;
	        var controller = controllerIndex > -1 ? cached.controllers[controllerIndex] : new (data.controller || noop)();
	        var key = data && data.attrs && data.attrs.key;
	        data = pendingRequests == 0 || cached && cached.controllers && cached.controllers.indexOf(controller) > -1 ? data.view(controller) : {
	          tag: "placeholder"
	        };
	        if (data.subtree === "retain") return cached;
	        if (key) {
	          if (!data.attrs) data.attrs = {};
	          data.attrs.key = key;
	        }
	        if (controller.onunload) unloaders.push({
	          controller: controller,
	          handler: controller.onunload
	        });
	        views.push(view);
	        controllers.push(controller);
	      }
	      if (!data.tag && controllers.length) throw new Error("Component template must return a virtual element, not an array, string, etc.");
	      if (!data.attrs) data.attrs = {};
	      if (!cached.attrs) cached.attrs = {};
	
	      var dataAttrKeys = Object.keys(data.attrs);
	      var hasKeys = dataAttrKeys.length > ("key" in data.attrs ? 1 : 0);
	      //if an element is different enough from the one in cache, recreate it
	      if (data.tag != cached.tag || dataAttrKeys.sort().join() != Object.keys(cached.attrs).sort().join() || data.attrs.id != cached.attrs.id || data.attrs.key != cached.attrs.key || m.redraw.strategy() == "all" && (!cached.configContext || cached.configContext.retain !== true) || m.redraw.strategy() == "diff" && cached.configContext && cached.configContext.retain === false) {
	        if (cached.nodes.length) clear(cached.nodes);
	        if (cached.configContext && _typeof(cached.configContext.onunload) === FUNCTION) cached.configContext.onunload();
	        if (cached.controllers) {
	          for (var i = 0, controller; controller = cached.controllers[i]; i++) {
	            if (_typeof(controller.onunload) === FUNCTION) controller.onunload({
	              preventDefault: noop
	            });
	          }
	        }
	      }
	      if (type.call(data.tag) != STRING) return;
	
	      var node,
	          isNew = cached.nodes.length === 0;
	      if (data.attrs.xmlns) namespace = data.attrs.xmlns;else if (data.tag === "svg") namespace = "http://www.w3.org/2000/svg";else if (data.tag === "math") namespace = "http://www.w3.org/1998/Math/MathML";
	
	      if (isNew) {
	        if (data.attrs.is) node = namespace === undefined ? $document.createElement(data.tag, data.attrs.is) : $document.createElementNS(namespace, data.tag, data.attrs.is);else node = namespace === undefined ? $document.createElement(data.tag) : $document.createElementNS(namespace, data.tag);
	        cached = {
	          tag: data.tag,
	          //set attributes first, then create children
	          attrs: hasKeys ? setAttributes(node, data.tag, data.attrs, {}, namespace) : data.attrs,
	          children: data.children != null && data.children.length > 0 ? build(node, data.tag, undefined, undefined, data.children, cached.children, true, 0, data.attrs.contenteditable ? node : editable, namespace, configs) : data.children,
	          nodes: [node]
	        };
	        if (controllers.length) {
	          cached.views = views;
	          cached.controllers = controllers;
	          for (var i = 0, controller; controller = controllers[i]; i++) {
	            if (controller.onunload && controller.onunload.$old) controller.onunload = controller.onunload.$old;
	            if (pendingRequests && controller.onunload) {
	              var onunload = controller.onunload;
	              controller.onunload = noop;
	              controller.onunload.$old = onunload;
	            }
	          }
	        }
	
	        if (cached.children && !cached.children.nodes) cached.children.nodes = [];
	        //edge case: setting value on <select> doesn't work before children exist, so set it again after children have been created
	        if (data.tag === "select" && "value" in data.attrs) setAttributes(node, data.tag, {
	          value: data.attrs.value
	        }, {}, namespace);
	        parentElement.insertBefore(node, parentElement.childNodes[index] || null);
	      } else {
	        node = cached.nodes[0];
	        if (hasKeys) setAttributes(node, data.tag, data.attrs, cached.attrs, namespace);
	        cached.children = build(node, data.tag, undefined, undefined, data.children, cached.children, false, 0, data.attrs.contenteditable ? node : editable, namespace, configs);
	        cached.nodes.intact = true;
	        if (controllers.length) {
	          cached.views = views;
	          cached.controllers = controllers;
	        }
	        if (shouldReattach === true && node != null) parentElement.insertBefore(node, parentElement.childNodes[index] || null);
	      }
	      //schedule configs to be called. They are called after `build` finishes running
	      if (_typeof(data.attrs["config"]) === FUNCTION) {
	        var context = cached.configContext = cached.configContext || {};
	
	        // bind
	        var callback = function callback(data, args) {
	          return function () {
	            return data.attrs["config"].apply(data, args);
	          };
	        };
	        configs.push(callback(data, [node, !isNew, context, cached]));
	      }
	    } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) != FUNCTION) {
	      //handle text nodes
	      var nodes;
	      if (cached.nodes.length === 0) {
	        if (data.$trusted) {
	          nodes = injectHTML(parentElement, index, data);
	        } else {
	          nodes = [$document.createTextNode(data)];
	          if (!parentElement.nodeName.match(voidElements)) parentElement.insertBefore(nodes[0], parentElement.childNodes[index] || null);
	        }
	        cached = "string number boolean".indexOf(typeof data === "undefined" ? "undefined" : _typeof(data)) > -1 ? new data.constructor(data) : data;
	        cached.nodes = nodes;
	      } else if (cached.valueOf() !== data.valueOf() || shouldReattach === true) {
	        nodes = cached.nodes;
	        if (!editable || editable !== $document.activeElement) {
	          if (data.$trusted) {
	            clear(nodes, cached);
	            nodes = injectHTML(parentElement, index, data);
	          } else {
	            //corner case: replacing the nodeValue of a text node that is a child of a textarea/contenteditable doesn't work
	            //we need to update the value property of the parent textarea or the innerHTML of the contenteditable element instead
	            if (parentTag === "textarea") parentElement.value = data;else if (editable) editable.innerHTML = data;else {
	              if (nodes[0].nodeType === 1 || nodes.length > 1) {
	                //was a trusted string
	                clear(cached.nodes, cached);
	                nodes = [$document.createTextNode(data)];
	              }
	              parentElement.insertBefore(nodes[0], parentElement.childNodes[index] || null);
	              nodes[0].nodeValue = data;
	            }
	          }
	        }
	        cached = new data.constructor(data);
	        cached.nodes = nodes;
	      } else cached.nodes.intact = true;
	    }
	
	    return cached;
	  }
	
	  function sortChanges(a, b) {
	    return a.action - b.action || a.index - b.index;
	  }
	
	  function setAttributes(node, tag, dataAttrs, cachedAttrs, namespace) {
	    for (var attrName in dataAttrs) {
	      var dataAttr = dataAttrs[attrName];
	      var cachedAttr = cachedAttrs[attrName];
	      if (!(attrName in cachedAttrs) || cachedAttr !== dataAttr) {
	        cachedAttrs[attrName] = dataAttr;
	        try {
	          //`config` isn't a real attributes, so ignore it
	          if (attrName === "config" || attrName == "key") continue;
	          //hook event handlers to the auto-redrawing system
	          else if ((typeof dataAttr === "undefined" ? "undefined" : _typeof(dataAttr)) === FUNCTION && attrName.indexOf("on") === 0) {
	              node[attrName] = autoredraw(dataAttr, node);
	            }
	            //handle `style: {...}`
	            else if (attrName === "style" && dataAttr != null && type.call(dataAttr) === OBJECT) {
	                for (var rule in dataAttr) {
	                  if (cachedAttr == null || cachedAttr[rule] !== dataAttr[rule]) node.style[rule] = dataAttr[rule];
	                }
	                for (var rule in cachedAttr) {
	                  if (!(rule in dataAttr)) node.style[rule] = "";
	                }
	              }
	              //handle SVG
	              else if (namespace != null) {
	                  if (attrName === "href") node.setAttributeNS("http://www.w3.org/1999/xlink", "href", dataAttr);else if (attrName === "className") node.setAttribute("class", dataAttr);else node.setAttribute(attrName, dataAttr);
	                }
	                //handle cases that are properties (but ignore cases where we should use setAttribute instead)
	                //- list and form are typically used as strings, but are DOM element references in js
	                //- when using CSS selectors (e.g. `m("[style='']")`), style is used as a string, but it's an object in js
	                else if (attrName in node && !(attrName === "list" || attrName === "style" || attrName === "form" || attrName === "type" || attrName === "width" || attrName === "height")) {
	                    //#348 don't set the value if not needed otherwise cursor placement breaks in Chrome
	                    if (tag !== "input" || node[attrName] !== dataAttr) node[attrName] = dataAttr;
	                  } else node.setAttribute(attrName, dataAttr);
	        } catch (e) {
	          //swallow IE's invalid argument errors to mimic HTML's fallback-to-doing-nothing-on-invalid-attributes behavior
	          if (e.message.indexOf("Invalid argument") < 0) throw e;
	        }
	      }
	      //#348 dataAttr may not be a string, so use loose comparison (double equal) instead of strict (triple equal)
	      else if (attrName === "value" && tag === "input" && node.value != dataAttr) {
	          node.value = dataAttr;
	        }
	    }
	    return cachedAttrs;
	  }
	
	  function clear(nodes, cached) {
	    for (var i = nodes.length - 1; i > -1; i--) {
	      if (nodes[i] && nodes[i].parentNode) {
	        try {
	          nodes[i].parentNode.removeChild(nodes[i]);
	        } catch (e) {} //ignore if this fails due to order of events (see http://stackoverflow.com/questions/21926083/failed-to-execute-removechild-on-node)
	        cached = [].concat(cached);
	        if (cached[i]) unload(cached[i]);
	      }
	    }
	    if (nodes.length != 0) nodes.length = 0;
	  }
	
	  function unload(cached) {
	    if (cached.configContext && _typeof(cached.configContext.onunload) === FUNCTION) {
	      cached.configContext.onunload();
	      cached.configContext.onunload = null;
	    }
	    if (cached.controllers) {
	      for (var i = 0, controller; controller = cached.controllers[i]; i++) {
	        if (_typeof(controller.onunload) === FUNCTION) controller.onunload({
	          preventDefault: noop
	        });
	      }
	    }
	    if (cached.children) {
	      if (type.call(cached.children) === ARRAY) {
	        for (var i = 0, child; child = cached.children[i]; i++) {
	          unload(child);
	        }
	      } else if (cached.children.tag) unload(cached.children);
	    }
	  }
	
	  function injectHTML(parentElement, index, data) {
	    var nextSibling = parentElement.childNodes[index];
	    if (nextSibling) {
	      var isElement = nextSibling.nodeType != 1;
	      var placeholder = $document.createElement("span");
	      if (isElement) {
	        parentElement.insertBefore(placeholder, nextSibling || null);
	        placeholder.insertAdjacentHTML("beforebegin", data);
	        parentElement.removeChild(placeholder);
	      } else nextSibling.insertAdjacentHTML("beforebegin", data);
	    } else parentElement.insertAdjacentHTML("beforeend", data);
	    var nodes = [];
	    while (parentElement.childNodes[index] !== nextSibling) {
	      nodes.push(parentElement.childNodes[index]);
	      index++;
	    }
	    return nodes;
	  }
	
	  function autoredraw(callback, object) {
	    return function (e) {
	      e = e || event;
	      m.redraw.strategy("diff");
	      m.startComputation();
	      try {
	        return callback.call(object, e);
	      } finally {
	        endFirstComputation();
	      }
	    };
	  }
	
	  var html;
	  var documentNode = {
	    appendChild: function appendChild(node) {
	      if (html === undefined) html = $document.createElement("html");
	      if ($document.documentElement && $document.documentElement !== node) {
	        $document.replaceChild(node, $document.documentElement);
	      } else $document.appendChild(node);
	      this.childNodes = $document.childNodes;
	    },
	    insertBefore: function insertBefore(node) {
	      this.appendChild(node);
	    },
	    childNodes: []
	  };
	  var nodeCache = [],
	      cellCache = {};
	  m.render = function (root, cell, forceRecreation) {
	    var configs = [];
	    if (!root) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
	    var id = getCellCacheKey(root);
	    var isDocumentRoot = root === $document;
	    var node = isDocumentRoot || root === $document.documentElement ? documentNode : root;
	    if (isDocumentRoot && cell.tag != "html") cell = {
	      tag: "html",
	      attrs: {},
	      children: cell
	    };
	    if (cellCache[id] === undefined) clear(node.childNodes);
	    if (forceRecreation === true) reset(root);
	    cellCache[id] = build(node, null, undefined, undefined, cell, cellCache[id], false, 0, null, undefined, configs);
	    for (var i = 0, len = configs.length; i < len; i++) {
	      configs[i]();
	    }
	  };
	
	  function getCellCacheKey(element) {
	    var index = nodeCache.indexOf(element);
	    return index < 0 ? nodeCache.push(element) - 1 : index;
	  }
	
	  m.trust = function (value) {
	    value = new String(value);
	    value.$trusted = true;
	    return value;
	  };
	
	  function gettersetter(store) {
	    var prop = function prop() {
	      if (arguments.length) store = arguments[0];
	      return store;
	    };
	
	    prop.toJSON = function () {
	      return store;
	    };
	
	    return prop;
	  }
	
	  m.prop = function (store) {
	    //note: using non-strict equality check here because we're checking if store is null OR undefined
	    if ((store != null && type.call(store) === OBJECT || (typeof store === "undefined" ? "undefined" : _typeof(store)) === FUNCTION) && _typeof(store.then) === FUNCTION) {
	      return propify(store);
	    }
	
	    return gettersetter(store);
	  };
	
	  var roots = [],
	      components = [],
	      controllers = [],
	      lastRedrawId = null,
	      lastRedrawCallTime = 0,
	      computePreRedrawHook = null,
	      computePostRedrawHook = null,
	      prevented = false,
	      topComponent,
	      unloaders = [];
	  var FRAME_BUDGET = 16; //60 frames per second = 1 call per 16 ms
	  function parameterize(component, args) {
	    var controller = function controller() {
	      return (component.controller || noop).apply(this, args) || this;
	    };
	    var view = function view(ctrl) {
	      if (arguments.length > 1) args = args.concat([].slice.call(arguments, 1));
	      return component.view.apply(component, args ? [ctrl].concat(args) : [ctrl]);
	    };
	    view.$original = component.view;
	    var output = {
	      controller: controller,
	      view: view
	    };
	    if (args[0] && args[0].key != null) output.attrs = {
	      key: args[0].key
	    };
	    return output;
	  }
	  m.component = function (component) {
	    return parameterize(component, [].slice.call(arguments, 1));
	  };
	  m.mount = m.module = function (root, component) {
	    if (!root) throw new Error("Please ensure the DOM element exists before rendering a template into it.");
	    var index = roots.indexOf(root);
	    if (index < 0) index = roots.length;
	
	    var isPrevented = false;
	    var event = {
	      preventDefault: function preventDefault() {
	        isPrevented = true;
	        computePreRedrawHook = computePostRedrawHook = null;
	      }
	    };
	    for (var i = 0, unloader; unloader = unloaders[i]; i++) {
	      unloader.handler.call(unloader.controller, event);
	      unloader.controller.onunload = null;
	    }
	    if (isPrevented) {
	      for (var i = 0, unloader; unloader = unloaders[i]; i++) {
	        unloader.controller.onunload = unloader.handler;
	      }
	    } else unloaders = [];
	
	    if (controllers[index] && _typeof(controllers[index].onunload) === FUNCTION) {
	      controllers[index].onunload(event);
	    }
	
	    if (!isPrevented) {
	      m.redraw.strategy("all");
	      m.startComputation();
	      roots[index] = root;
	      if (arguments.length > 2) component = subcomponent(component, [].slice.call(arguments, 2));
	      var currentComponent = topComponent = component = component || {
	        controller: function controller() {}
	      };
	      var constructor = component.controller || noop;
	      var controller = new constructor();
	      //controllers may call m.mount recursively (via m.route redirects, for example)
	      //this conditional ensures only the last recursive m.mount call is applied
	      if (currentComponent === topComponent) {
	        controllers[index] = controller;
	        components[index] = component;
	      }
	      endFirstComputation();
	      return controllers[index];
	    }
	  };
	  var redrawing = false;
	  m.redraw = function (force) {
	    if (redrawing) return;
	    redrawing = true;
	    //lastRedrawId is a positive number if a second redraw is requested before the next animation frame
	    //lastRedrawID is null if it's the first redraw and not an event handler
	    if (lastRedrawId && force !== true) {
	      //when setTimeout: only reschedule redraw if time between now and previous redraw is bigger than a frame, otherwise keep currently scheduled timeout
	      //when rAF: always reschedule redraw
	      if ($requestAnimationFrame === window.requestAnimationFrame || new Date() - lastRedrawCallTime > FRAME_BUDGET) {
	        if (lastRedrawId > 0) $cancelAnimationFrame(lastRedrawId);
	        lastRedrawId = $requestAnimationFrame(redraw, FRAME_BUDGET);
	      }
	    } else {
	      redraw();
	      lastRedrawId = $requestAnimationFrame(function () {
	        lastRedrawId = null;
	      }, FRAME_BUDGET);
	    }
	    redrawing = false;
	  };
	  m.redraw.strategy = m.prop();
	
	  function redraw() {
	    if (computePreRedrawHook) {
	      computePreRedrawHook();
	      computePreRedrawHook = null;
	    }
	    for (var i = 0, root; root = roots[i]; i++) {
	      if (controllers[i]) {
	        var args = components[i].controller && components[i].controller.$$args ? [controllers[i]].concat(components[i].controller.$$args) : [controllers[i]];
	        m.render(root, components[i].view ? components[i].view(controllers[i], args) : "");
	      }
	    }
	    //after rendering within a routed context, we need to scroll back to the top, and fetch the document title for history.pushState
	    if (computePostRedrawHook) {
	      computePostRedrawHook();
	      computePostRedrawHook = null;
	    }
	    lastRedrawId = null;
	    lastRedrawCallTime = new Date();
	    m.redraw.strategy("diff");
	  }
	
	  var pendingRequests = 0;
	  m.startComputation = function () {
	    pendingRequests++;
	  };
	  m.endComputation = function () {
	    pendingRequests = Math.max(pendingRequests - 1, 0);
	    if (pendingRequests === 0) m.redraw();
	  };
	  var endFirstComputation = function endFirstComputation() {
	    if (m.redraw.strategy() == "none") {
	      pendingRequests--;
	      m.redraw.strategy("diff");
	    } else m.endComputation();
	  };
	
	  m.withAttr = function (prop, withAttrCallback) {
	    return function (e) {
	      e = e || event;
	      var currentTarget = e.currentTarget || this;
	      withAttrCallback(prop in currentTarget ? currentTarget[prop] : currentTarget.getAttribute(prop));
	    };
	  };
	
	  //routing
	  var modes = {
	    pathname: "",
	    hash: "#",
	    search: "?"
	  };
	  var redirect = noop,
	      routeParams,
	      currentRoute,
	      isDefaultRoute = false;
	  m.route = function () {
	    //m.route()
	    if (arguments.length === 0) return currentRoute;
	    //m.route(el, defaultRoute, routes)
	    else if (arguments.length === 3 && type.call(arguments[1]) === STRING) {
	        var root = arguments[0],
	            defaultRoute = arguments[1],
	            router = arguments[2];
	        redirect = function redirect(source) {
	          var path = currentRoute = normalizeRoute(source);
	          if (!routeByValue(root, router, path)) {
	            if (isDefaultRoute) throw new Error("Ensure the default route matches one of the routes defined in m.route");
	            isDefaultRoute = true;
	            m.route(defaultRoute, true);
	            isDefaultRoute = false;
	          }
	        };
	        var listener = m.route.mode === "hash" ? "onhashchange" : "onpopstate";
	        window[listener] = function () {
	          var path = $location[m.route.mode];
	          if (m.route.mode === "pathname") path += $location.search;
	          if (currentRoute != normalizeRoute(path)) {
	            redirect(path);
	          }
	        };
	        computePreRedrawHook = setScroll;
	        window[listener]();
	      }
	      //config: m.route
	      else if (arguments[0].addEventListener || arguments[0].attachEvent) {
	          var element = arguments[0];
	          var isInitialized = arguments[1];
	          var context = arguments[2];
	          var vdom = arguments[3];
	          element.href = (m.route.mode !== 'pathname' ? $location.pathname : '') + modes[m.route.mode] + vdom.attrs.href;
	          if (element.addEventListener) {
	            element.removeEventListener("click", routeUnobtrusive);
	            element.addEventListener("click", routeUnobtrusive);
	          } else {
	            element.detachEvent("onclick", routeUnobtrusive);
	            element.attachEvent("onclick", routeUnobtrusive);
	          }
	        }
	        //m.route(route, params, shouldReplaceHistoryEntry)
	        else if (type.call(arguments[0]) === STRING) {
	            var oldRoute = currentRoute;
	            currentRoute = arguments[0];
	            var args = arguments[1] || {};
	            var queryIndex = currentRoute.indexOf("?");
	            var params = queryIndex > -1 ? parseQueryString(currentRoute.slice(queryIndex + 1)) : {};
	            for (var i in args) {
	              params[i] = args[i];
	            }var querystring = buildQueryString(params);
	            var currentPath = queryIndex > -1 ? currentRoute.slice(0, queryIndex) : currentRoute;
	            if (querystring) currentRoute = currentPath + (currentPath.indexOf("?") === -1 ? "?" : "&") + querystring;
	
	            var shouldReplaceHistoryEntry = (arguments.length === 3 ? arguments[2] : arguments[1]) === true || oldRoute === arguments[0];
	
	            if (window.history.pushState) {
	              computePreRedrawHook = setScroll;
	              computePostRedrawHook = function computePostRedrawHook() {
	                window.history[shouldReplaceHistoryEntry ? "replaceState" : "pushState"](null, $document.title, modes[m.route.mode] + currentRoute);
	              };
	              redirect(modes[m.route.mode] + currentRoute);
	            } else {
	              $location[m.route.mode] = currentRoute;
	              redirect(modes[m.route.mode] + currentRoute);
	            }
	          }
	  };
	  m.route.param = function (key) {
	    if (!routeParams) throw new Error("You must call m.route(element, defaultRoute, routes) before calling m.route.param()");
	    return routeParams[key];
	  };
	  m.route.mode = "search";
	
	  function normalizeRoute(route) {
	    return route.slice(modes[m.route.mode].length);
	  }
	
	  function routeByValue(root, router, path) {
	    routeParams = {};
	
	    var queryStart = path.indexOf("?");
	    if (queryStart !== -1) {
	      routeParams = parseQueryString(path.substr(queryStart + 1, path.length));
	      path = path.substr(0, queryStart);
	    }
	
	    // Get all routes and check if there's
	    // an exact match for the current path
	    var keys = Object.keys(router);
	    var index = keys.indexOf(path);
	    if (index !== -1) {
	      m.mount(root, router[keys[index]]);
	      return true;
	    }
	
	    for (var route in router) {
	      if (route === path) {
	        m.mount(root, router[route]);
	        return true;
	      }
	
	      var matcher = new RegExp("^" + route.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$");
	
	      if (matcher.test(path)) {
	        path.replace(matcher, function () {
	          var keys = route.match(/:[^\/]+/g) || [];
	          var values = [].slice.call(arguments, 1, -2);
	          for (var i = 0, len = keys.length; i < len; i++) {
	            routeParams[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i]);
	          }m.mount(root, router[route]);
	        });
	        return true;
	      }
	    }
	  }
	
	  function routeUnobtrusive(e) {
	    e = e || event;
	    if (e.ctrlKey || e.metaKey || e.which === 2) return;
	    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
	    var currentTarget = e.currentTarget || e.srcElement;
	    var args = m.route.mode === "pathname" && currentTarget.search ? parseQueryString(currentTarget.search.slice(1)) : {};
	    while (currentTarget && currentTarget.nodeName.toUpperCase() != "A") {
	      currentTarget = currentTarget.parentNode;
	    }m.route(currentTarget[m.route.mode].slice(modes[m.route.mode].length), args);
	  }
	
	  function setScroll() {
	    if (m.route.mode != "hash" && $location.hash) $location.hash = $location.hash;else window.scrollTo(0, 0);
	  }
	
	  function buildQueryString(object, prefix) {
	    var duplicates = {};
	    var str = [];
	    for (var prop in object) {
	      var key = prefix ? prefix + "[" + prop + "]" : prop;
	      var value = object[prop];
	      var valueType = type.call(value);
	      var pair = value === null ? encodeURIComponent(key) : valueType === OBJECT ? buildQueryString(value, key) : valueType === ARRAY ? value.reduce(function (memo, item) {
	        if (!duplicates[key]) duplicates[key] = {};
	        if (!duplicates[key][item]) {
	          duplicates[key][item] = true;
	          return memo.concat(encodeURIComponent(key) + "=" + encodeURIComponent(item));
	        }
	        return memo;
	      }, []).join("&") : encodeURIComponent(key) + "=" + encodeURIComponent(value);
	      if (value !== undefined) str.push(pair);
	    }
	    return str.join("&");
	  }
	
	  function parseQueryString(str) {
	    if (str.charAt(0) === "?") str = str.substring(1);
	
	    var pairs = str.split("&"),
	        params = {};
	    for (var i = 0, len = pairs.length; i < len; i++) {
	      var pair = pairs[i].split("=");
	      var key = decodeURIComponent(pair[0]);
	      var value = pair.length == 2 ? decodeURIComponent(pair[1]) : null;
	      if (params[key] != null) {
	        if (type.call(params[key]) !== ARRAY) params[key] = [params[key]];
	        params[key].push(value);
	      } else params[key] = value;
	    }
	    return params;
	  }
	  m.route.buildQueryString = buildQueryString;
	  m.route.parseQueryString = parseQueryString;
	
	  function reset(root) {
	    var cacheKey = getCellCacheKey(root);
	    clear(root.childNodes, cellCache[cacheKey]);
	    cellCache[cacheKey] = undefined;
	  }
	
	  m.deferred = function () {
	    var deferred = new Deferred();
	    deferred.promise = propify(deferred.promise);
	    return deferred;
	  };
	
	  function propify(promise, initialValue) {
	    var prop = m.prop(initialValue);
	    promise.then(prop);
	    prop.then = function (resolve, reject) {
	      return propify(promise.then(resolve, reject), initialValue);
	    };
	    return prop;
	  }
	  //Promiz.mithril.js | Zolmeister | MIT
	  //a modified version of Promiz.js, which does not conform to Promises/A+ for two reasons:
	  //1) `then` callbacks are called synchronously (because setTimeout is too slow, and the setImmediate polyfill is too big
	  //2) throwing subclasses of Error cause the error to be bubbled up instead of triggering rejection (because the spec does not account for the important use case of default browser error handling, i.e. message w/ line number)
	  function Deferred(successCallback, failureCallback) {
	    var RESOLVING = 1,
	        REJECTING = 2,
	        RESOLVED = 3,
	        REJECTED = 4;
	    var self = this,
	        state = 0,
	        promiseValue = 0,
	        next = [];
	
	    self["promise"] = {};
	
	    self["resolve"] = function (value) {
	      if (!state) {
	        promiseValue = value;
	        state = RESOLVING;
	
	        fire();
	      }
	      return this;
	    };
	
	    self["reject"] = function (value) {
	      if (!state) {
	        promiseValue = value;
	        state = REJECTING;
	
	        fire();
	      }
	      return this;
	    };
	
	    self.promise["then"] = function (successCallback, failureCallback) {
	      var deferred = new Deferred(successCallback, failureCallback);
	      if (state === RESOLVED) {
	        deferred.resolve(promiseValue);
	      } else if (state === REJECTED) {
	        deferred.reject(promiseValue);
	      } else {
	        next.push(deferred);
	      }
	      return deferred.promise;
	    };
	
	    function finish(type) {
	      state = type || REJECTED;
	      next.map(function (deferred) {
	        state === RESOLVED && deferred.resolve(promiseValue) || deferred.reject(promiseValue);
	      });
	    }
	
	    function thennable(then, successCallback, failureCallback, notThennableCallback) {
	      if ((promiseValue != null && type.call(promiseValue) === OBJECT || (typeof promiseValue === "undefined" ? "undefined" : _typeof(promiseValue)) === FUNCTION) && (typeof then === "undefined" ? "undefined" : _typeof(then)) === FUNCTION) {
	        try {
	          // count protects against abuse calls from spec checker
	          var count = 0;
	          then.call(promiseValue, function (value) {
	            if (count++) return;
	            promiseValue = value;
	            successCallback();
	          }, function (value) {
	            if (count++) return;
	            promiseValue = value;
	            failureCallback();
	          });
	        } catch (e) {
	          m.deferred.onerror(e);
	          promiseValue = e;
	          failureCallback();
	        }
	      } else {
	        notThennableCallback();
	      }
	    }
	
	    function fire() {
	      // check if it's a thenable
	      var then;
	      try {
	        then = promiseValue && promiseValue.then;
	      } catch (e) {
	        m.deferred.onerror(e);
	        promiseValue = e;
	        state = REJECTING;
	        return fire();
	      }
	      thennable(then, function () {
	        state = RESOLVING;
	        fire();
	      }, function () {
	        state = REJECTING;
	        fire();
	      }, function () {
	        try {
	          if (state === RESOLVING && (typeof successCallback === "undefined" ? "undefined" : _typeof(successCallback)) === FUNCTION) {
	            promiseValue = successCallback(promiseValue);
	          } else if (state === REJECTING && typeof failureCallback === "function") {
	            promiseValue = failureCallback(promiseValue);
	            state = RESOLVING;
	          }
	        } catch (e) {
	          m.deferred.onerror(e);
	          promiseValue = e;
	          return finish();
	        }
	
	        if (promiseValue === self) {
	          promiseValue = TypeError();
	          finish();
	        } else {
	          thennable(then, function () {
	            finish(RESOLVED);
	          }, finish, function () {
	            finish(state === RESOLVING && RESOLVED);
	          });
	        }
	      });
	    }
	  }
	  m.deferred.onerror = function (e) {
	    if (type.call(e) === "[object Error]" && !e.constructor.toString().match(/ Error/)) throw e;
	  };
	
	  m.sync = function (args) {
	    var method = "resolve";
	
	    function synchronizer(pos, resolved) {
	      return function (value) {
	        results[pos] = value;
	        if (!resolved) method = "reject";
	        if (--outstanding === 0) {
	          deferred.promise(results);
	          deferred[method](results);
	        }
	        return value;
	      };
	    }
	
	    var deferred = m.deferred();
	    var outstanding = args.length;
	    var results = new Array(outstanding);
	    if (args.length > 0) {
	      for (var i = 0; i < args.length; i++) {
	        args[i].then(synchronizer(i, true), synchronizer(i, false));
	      }
	    } else deferred.resolve([]);
	
	    return deferred.promise;
	  };
	
	  function identity(value) {
	    return value;
	  }
	
	  function ajax(options) {
	    if (options.dataType && options.dataType.toLowerCase() === "jsonp") {
	      var callbackKey = "mithril_callback_" + new Date().getTime() + "_" + Math.round(Math.random() * 1e16).toString(36);
	      var script = $document.createElement("script");
	
	      window[callbackKey] = function (resp) {
	        script.parentNode.removeChild(script);
	        options.onload({
	          type: "load",
	          target: {
	            responseText: resp
	          }
	        });
	        window[callbackKey] = undefined;
	      };
	
	      script.onerror = function (e) {
	        script.parentNode.removeChild(script);
	
	        options.onerror({
	          type: "error",
	          target: {
	            status: 500,
	            responseText: JSON.stringify({
	              error: "Error making jsonp request"
	            })
	          }
	        });
	        window[callbackKey] = undefined;
	
	        return false;
	      };
	
	      script.onload = function (e) {
	        return false;
	      };
	
	      script.src = options.url + (options.url.indexOf("?") > 0 ? "&" : "?") + (options.callbackKey ? options.callbackKey : "callback") + "=" + callbackKey + "&" + buildQueryString(options.data || {});
	      $document.body.appendChild(script);
	    } else {
	      var xhr = new window.XMLHttpRequest();
	      xhr.open(options.method, options.url, true, options.user, options.password);
	      xhr.onreadystatechange = function () {
	        if (xhr.readyState === 4) {
	          if (xhr.status >= 200 && xhr.status < 300) options.onload({
	            type: "load",
	            target: xhr
	          });else options.onerror({
	            type: "error",
	            target: xhr
	          });
	        }
	      };
	      if (options.serialize === JSON.stringify && options.data && options.method !== "GET") {
	        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	      }
	      if (options.deserialize === JSON.parse) {
	        xhr.setRequestHeader("Accept", "application/json, text/*");
	      }
	      if (_typeof(options.config) === FUNCTION) {
	        var maybeXhr = options.config(xhr, options);
	        if (maybeXhr != null) xhr = maybeXhr;
	      }
	
	      var data = options.method === "GET" || !options.data ? "" : options.data;
	      if (data && type.call(data) != STRING && data.constructor != window.FormData) {
	        throw "Request data should be either be a string or FormData. Check the `serialize` option in `m.request`";
	      }
	      xhr.send(data);
	      return xhr;
	    }
	  }
	
	  function bindData(xhrOptions, data, serialize) {
	    if (xhrOptions.method === "GET" && xhrOptions.dataType != "jsonp") {
	      var prefix = xhrOptions.url.indexOf("?") < 0 ? "?" : "&";
	      var querystring = buildQueryString(data);
	      xhrOptions.url = xhrOptions.url + (querystring ? prefix + querystring : "");
	    } else xhrOptions.data = serialize(data);
	    return xhrOptions;
	  }
	
	  function parameterizeUrl(url, data) {
	    var tokens = url.match(/:[a-z]\w+/gi);
	    if (tokens && data) {
	      for (var i = 0; i < tokens.length; i++) {
	        var key = tokens[i].slice(1);
	        url = url.replace(tokens[i], data[key]);
	        delete data[key];
	      }
	    }
	    return url;
	  }
	
	  m.request = function (xhrOptions) {
	    if (xhrOptions.background !== true) m.startComputation();
	    var deferred = new Deferred();
	    var isJSONP = xhrOptions.dataType && xhrOptions.dataType.toLowerCase() === "jsonp";
	    var serialize = xhrOptions.serialize = isJSONP ? identity : xhrOptions.serialize || JSON.stringify;
	    var deserialize = xhrOptions.deserialize = isJSONP ? identity : xhrOptions.deserialize || JSON.parse;
	    var extract = isJSONP ? function (jsonp) {
	      return jsonp.responseText;
	    } : xhrOptions.extract || function (xhr) {
	      return xhr.responseText.length === 0 && deserialize === JSON.parse ? null : xhr.responseText;
	    };
	    xhrOptions.method = (xhrOptions.method || 'GET').toUpperCase();
	    xhrOptions.url = parameterizeUrl(xhrOptions.url, xhrOptions.data);
	    xhrOptions = bindData(xhrOptions, xhrOptions.data, serialize);
	    xhrOptions.onload = xhrOptions.onerror = function (e) {
	      try {
	        e = e || event;
	        var unwrap = (e.type === "load" ? xhrOptions.unwrapSuccess : xhrOptions.unwrapError) || identity;
	        var response = unwrap(deserialize(extract(e.target, xhrOptions)), e.target);
	        if (e.type === "load") {
	          if (type.call(response) === ARRAY && xhrOptions.type) {
	            for (var i = 0; i < response.length; i++) {
	              response[i] = new xhrOptions.type(response[i]);
	            }
	          } else if (xhrOptions.type) response = new xhrOptions.type(response);
	        }
	        deferred[e.type === "load" ? "resolve" : "reject"](response);
	      } catch (e) {
	        m.deferred.onerror(e);
	        deferred.reject(e);
	      }
	      if (xhrOptions.background !== true) m.endComputation();
	    };
	    ajax(xhrOptions);
	    deferred.promise = propify(deferred.promise, xhrOptions.initialValue);
	    return deferred.promise;
	  };
	
	  //testing API
	  m.deps = function (mock) {
	    initialize(window = mock || window);
	    return window;
	  };
	  //for internal testing only, do not use `m.deps.factory`
	  m.deps.factory = app;
	
	  return m;
	}(typeof window != "undefined" ? window : {});
	
	if (typeof module != "undefined" && module !== null && module.exports) module.exports = m;else if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  return m;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	var tsdLogo = m.trust('<svg class="desktop" width="175" height="55" viewBox="0 0 175 55" xmlns="http://www.w3.org/2000/svg"><g fill="#22354C" fill-rule="evenodd"><path d="M5.815 5.864h113.177V48.27H5.815V5.865zM0 54.134h124.807V0H0v54.135zM135.188 15.94c1.824 0 3.258.918 3.602 2.756l-2.287.92c-.15-.8-.612-1.116-1.33-1.116-.656 0-.97.256-.97.603 0 .572.763.723 1.837 1.07 1.285.406 2.644 1.145 2.644 3.177 0 1.96-1.448 3.133-3.525 3.133-1.823 0-3.258-.918-3.6-2.757l2.285-.918c.15.798.612 1.115 1.33 1.115.657 0 .97-.256.97-.603 0-.572-.762-.723-1.838-1.07-1.284-.406-2.643-1.143-2.643-3.177 0-1.958 1.448-3.133 3.524-3.133M140.344 15.382c.807 0 1.403.603 1.403 1.417 0 .81-.596 1.414-1.403 1.414-.806 0-1.404-.603-1.404-1.415 0-.815.598-1.418 1.404-1.418zm-1.195 3.57h2.39v7.532h-2.39v-7.53zM151.49 18.772c1.538 0 2.762 1.068 2.762 2.982v4.73h-2.39V22.52c0-.95-.39-1.415-1.12-1.415-.896 0-1.285.676-1.285 1.717v3.66h-2.39V22.52c0-.95-.388-1.415-1.12-1.415-.897 0-1.285.676-1.285 1.717v3.66h-2.39v-7.53h2.33v1.128c.434-.71 1.09-1.31 2.3-1.31 1 0 1.808.42 2.226 1.355.374-.768 1.226-1.355 2.36-1.355M154.927 29.496V18.953h2.39v1.023c.538-.768 1.375-1.22 2.405-1.22 1.718 0 3.272 1.326 3.272 3.962s-1.54 3.96-3.227 3.96c-1.15 0-2.002-.57-2.45-1.265v4.083h-2.39zm5.617-6.778c0-.994-.763-1.582-1.63-1.582-.865 0-1.627.588-1.627 1.582 0 .994.762 1.58 1.628 1.58.866 0 1.63-.586 1.63-1.58zM163.518 15.94h2.39v10.544h-2.39V15.94zM170.346 18.772c2.24 0 3.75 1.49 3.75 4.036v.648h-5.214l.014.03c.344.693 1.12.918 1.734.918.775 0 1.448-.195 1.97-.542l.927 2.02c-.628.42-1.508.782-2.972.782-2.69 0-4.123-1.823-4.123-3.992 0-2.23 1.508-3.9 3.914-3.9zm-.12 1.988c-.657 0-1.195.286-1.404 1.01h2.674c-.075-.558-.538-1.01-1.27-1.01zM135.562 30.157c2.957 0 5.064 2.228 5.064 5.27 0 3.044-2.107 5.273-5.064 5.273h-3.93V30.157h3.93zm0 2.56h-1.39v5.423h1.39c1.524 0 2.525-1.176 2.525-2.712 0-1.537-1-2.712-2.525-2.712zM144.93 32.988c2.33 0 4.078 1.536 4.078 3.946s-1.748 3.947-4.078 3.947-4.078-1.536-4.078-3.946 1.748-3.946 4.078-3.946zm0 2.365c-.866 0-1.63.588-1.63 1.58 0 .996.764 1.583 1.63 1.583.866 0 1.63-.587 1.63-1.582 0-.993-.764-1.58-1.63-1.58zM149.533 30.157h2.39V40.7h-2.39V30.157zM152.52 30.157h2.39V40.7h-2.39V30.157zM159.035 33.003c2.24 0 3.436.95 3.436 3.224v4.488h-2.39v-.994c-.328.513-.986 1.145-2.21 1.145-1.405 0-2.51-.918-2.51-2.35 0-1.355.986-2.26 2.375-2.38l2.017-.18c.24-.03.33-.105.33-.24v-.06c0-.272-.344-.467-1.092-.467-.612 0-1.464.134-1.822.737l-1.673-1.326c.613-1.13 2-1.597 3.54-1.597zm1.046 4.52l-1.51.18c-.476.06-.745.285-.745.632 0 .392.3.633.85.633.822 0 1.406-.542 1.406-1.31v-.136zM167.49 32.988c.285 0 .495.045.718.12v2.606c-.268-.105-.642-.15-.97-.15-1.076 0-1.704.497-1.704 1.807v3.33h-2.39v-7.532h2.3v1.31c.374-.902 1.002-1.49 2.047-1.49"></path></g></svg>');
	var reviewsLogo = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="236" height="33" viewBox="0 0 236 33"><g fill="#000" fill-rule="evenodd"><path d="M.71.522h10.21c7.28 0 11.37 4.91 11.37 10.9 0 4.08-1.73 7.86-5.41 9.64l6.28 11.16h-8.14L7.9 18.592v13.63H.71V.522zm7.19 6.95v8.34h2.48c3.06 0 4.59-2.09 4.59-4.3 0-2.61-1.57-4.04-4.59-4.04H7.9z"></path><path d="M21.96 21.372c0-6.21 4.59-11.29 10.83-11.29 6.33 0 10.84 4.9 10.84 11.29v2.34H28.66c.66 2 2.19 3.08 4.18 3.08 1.77 0 2.77-.69 3.47-1.86h7.15c-1.73 4.86-4.96 7.72-10.62 7.72-6.87 0-10.88-4.99-10.88-11.28zm6.99-2.91h7.86c-.71-1.61-2.11-2.44-3.89-2.44-1.82 0-3.23.92-3.97 2.44zM42.55 10.512h7.32l3.85 11.77 3.8-11.77h7.2l-7.53 21.71h-6.95l-7.69-21.71M69.51.662c2.44 0 4.1 1.77 4.1 4.29s-1.66 4.26-4.1 4.26c-2.39 0-4.05-1.74-4.05-4.26 0-2.52 1.66-4.29 4.05-4.29zm-3.55 9.85h7.15v21.71h-7.15v-21.71zM74.64 21.372c0-6.21 4.59-11.29 10.83-11.29 6.33 0 10.84 4.9 10.84 11.29v2.34H81.34c.66 2 2.19 3.08 4.17 3.08 1.78 0 2.77-.69 3.48-1.86h7.15c-1.74 4.86-4.96 7.72-10.63 7.72-6.86 0-10.87-4.99-10.87-11.28zm6.99-2.91h7.85c-.7-1.61-2.11-2.44-3.88-2.44-1.82 0-3.23.92-3.97 2.44zM95.4 10.512h7.03l3.47 11.72 3.93-11.72h6.08l3.68 11.72 3.68-11.72h6.98l-7.23 21.71h-6.54l-3.76-11.33-3.93 11.33h-6.53l-6.86-21.71M129.84 24.842h7.07v.13c0 1.13.7 1.56 1.9 1.56 1.33 0 1.78-.52 1.78-1.26 0-.86-1.78-1-3.89-1.52-2.85-.56-6.61-1.86-6.61-6.68 0-4 3.22-6.99 8.47-6.99 5.21 0 8.61 2.73 8.69 7.33h-6.91v-.04c0-1.13-.66-1.56-1.78-1.56-1.11 0-1.61.52-1.61 1.13 0 .82 1.86.95 3.93 1.47 3.31.61 6.62 2.04 6.62 6.78 0 4.03-2.98 7.46-8.69 7.46-6.28 0-8.76-3.08-8.97-7.81M152.58 24.142c2.4 0 4.05 1.78 4.05 4.3 0 2.52-1.65 4.26-4.05 4.26-2.44 0-4.05-1.74-4.05-4.26 0-2.52 1.65-4.3 4.05-4.3M157.75 21.372c0-6.26 4.55-11.29 10.88-11.29 5.91 0 10.46 4.25 10.91 10.03h-7.07c-.41-1.96-1.9-3.22-3.84-3.22-2.28 0-4.02 1.91-4.02 4.48 0 2.64 1.62 4.42 4.06 4.42 1.98 0 3.43-1.34 3.8-3.34h7.07c-.41 5.86-4.92 10.2-10.91 10.2-6.41 0-10.88-4.86-10.88-11.28M180.66 21.372c0-6.26 4.55-11.29 10.87-11.29 6.2 0 10.88 5.03 10.88 11.29 0 6.25-4.55 11.28-10.88 11.28-6.32 0-10.87-5.03-10.87-11.28zm14.88 0c0-2.52-1.73-4.48-4.01-4.48-2.27 0-3.97 1.96-3.97 4.48 0 2.51 1.7 4.42 3.97 4.42 2.28 0 4.01-1.91 4.01-4.42zM203.94 10.512h6.98v2.61c1.25-1.96 3.19-3.04 5.5-3.04 2.77 0 4.76 1.17 5.88 3.38 1.28-2.12 3.43-3.38 5.95-3.38 4.63 0 7.24 3.04 7.24 8.29v13.85h-7.12v-12.24c0-2.26-.7-3.52-2.52-3.52-1.61 0-2.6 1.21-2.6 3.82v11.94h-7.12v-12.24c0-2.26-.74-3.52-2.52-3.52-1.61 0-2.64 1.21-2.64 3.82v11.94h-7.03v-21.71"></path></g></svg>');
	
	window.calc = {};
	
	window.calc.checkbox = function (valProp, label, hint) {
	    // type is "radio" or "checkbox"
	    // <label class="checkbox "
	    return m('.calc-item', [m('label.checkbox', {
	        class: valProp() ? 'active' : ''
	    }, [m('input', {
	        type: 'checkbox',
	        checked: valProp(),
	        onchange: m.withAttr('checked', valProp)
	    }), m('span.checkbox-box'), m('div.checkbox-label', [m('strong', label || ''), hint ? m('span.hint', hint || '') : null])])]);
	};
	
	window.calc.radios = function (valProp, items, customOnClick) {
	    // items is obj of {val, label, hint}
	
	    function runCallbacks(cb) {
	        return function (e) {
	            m.withAttr('value', valProp)(e);
	            if (cb) cb();
	        };
	    }
	
	    return m('.calc-item', items.map(function (item) {
	        return m('label.checkbox', {
	            class: valProp() == item.val ? 'active' : ''
	        }, [m('input', {
	            type: 'radio',
	            checked: valProp() == item.val,
	            value: item.val,
	            onclick: runCallbacks(customOnClick)
	        }), m('span.checkbox-dot'), m('div.checkbox-label', [m('strong', item.label || ''), m('span.hint', item.hint || '')])]);
	    }));
	};
	
	window.calc.pieChart = function (values) {
	    // values should be an array of {val: 129, color: "#ff0000", label: "meow food"}
	    return m(".calc-item.row.gap-2.middle", [m('svg.pie-chart', {
	        config: function config(e, alreadyInitialized) {
	            var width = 150,
	                height = 150,
	                radius = Math.min(width, height) / 2;
	
	            var svg = d3.select(e).html("").append("g").attr("transform", "translate(" + height / 2 + "," + height / 2 + ")");
	
	            var arc = d3.svg.arc().outerRadius(radius - 10).innerRadius(0);
	
	            var labelArc = d3.svg.arc().outerRadius(radius - 40).innerRadius(radius - 40);
	
	            var pie = d3.layout.pie().sort(null).value(function (d) {
	                return d.val;
	            });
	
	            var g = svg.selectAll(".arc").data(pie(values)).enter().append("g").attr("class", "arc");
	
	            g.append("path").attr("d", arc).style("fill", function (d) {
	                return d.data.color;
	            }).style("stroke", "#fff");
	        }
	    }), m("div.legend", values.map(function (item) {
	        return m("div.legend-item", [m("div.legend-square", {
	            style: 'background-color:' + item.color
	        }), item.label]);
	    }))]);
	};
	
	window.calc.lineChart = function (lines) {
	    // lines should be an array of {vals: [[x, y], [x2, y2], color: "#ff0000", label: "meow food"}
	    return m(".calc-item.col.right", [m('svg.line-chart', {
	        config: function config(e, alreadyInitialized) {
	            var margin = {
	                top: 5,
	                right: 0,
	                bottom: 30,
	                left: 40
	            },
	                width = 330 - margin.left - margin.right,
	                height = 200 - margin.top - margin.bottom;
	
	            var x = d3.scale.linear().range([0, width]);
	            var y = d3.scale.linear().range([height, 0]);
	
	            var xAxis = d3.svg.axis().scale(x).orient("bottom");
	            var yAxis = d3.svg.axis().scale(y).orient("left");
	            var line = d3.svg.line().interpolate("basis").x(function (d) {
	                return x(d[0]);
	            }).y(function (d) {
	                return y(d[1]);
	            });
	
	            var svg = d3.select(e).html("").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	            x.domain([d3.min(lines, function (line) {
	                return d3.min(line.vals, function (v) {
	                    return v[0];
	                });
	            }), d3.max(lines, function (line) {
	                return d3.max(line.vals, function (v) {
	                    return v[0];
	                });
	            })]);
	            y.domain([d3.min(lines, function (line) {
	                return d3.min(line.vals, function (v) {
	                    return v[1];
	                });
	            }), d3.max(lines, function (line) {
	                return d3.max(line.vals, function (v) {
	                    return v[1];
	                });
	            })]);
	
	            svg.append("g").attr("class", "x chart-axis").attr("transform", "translate(0," + height + ")").call(xAxis);
	
	            svg.append("g").attr("class", "y chart-axis").call(yAxis);
	            /*.append("text")
	            .attr("transform", "rotate(-90)")
	            .attr("y", 6)
	            .attr("dy", ".71em")
	            .style("text-anchor", "end")
	            .text("Temperature (ºF)");*/
	
	            var func = svg.selectAll(".chart-line").data(lines).enter().append("g").attr("class", "func");
	
	            func.append("path").attr("class", "chart-line").attr("d", function (d) {
	                return line(d.vals);
	            }).style("stroke", function (d) {
	                return d.color;
	            });
	
	            // remove first tick from y axis
	            svg.selectAll(".y.chart-axis .tick").each(function (d) {
	                if (d === 0) {
	                    this.remove();
	                }
	            });
	        }
	    }), m("div.legend", lines.map(function (item) {
	        return m("div.legend-item", [m("div.legend-square", {
	            style: 'background-color:' + item.color
	        }), item.label]);
	    }))]);
	};
	
	function identity(value) {
	    return value;
	}
	
	// second variable, if set, makes it a collapsing table
	window.calc.table = function (data, expanded_prop) {
	    // data should be a two dimensional array
	    var firstRow = true;
	    var expanded = expanded_prop == null || expanded_prop() === true;
	    var collapse_class = expanded ? "" : ".collapse";
	    return m(".calc-item", [m(".table-wrap" + collapse_class, [m("table.table", data.map(function (row) {
	        var rowName = "tr.table-row";
	        if (firstRow) {
	            rowName = "tr.table-header";
	        }
	        firstRow = false;
	        return m(rowName, row.map(function (cell) {
	            return m("td.table-cell", cell);
	        }));
	    })), expanded ? null : m("a.table-expand-link", {
	        href: "#",
	        onclick: function onclick() {
	            expanded_prop(true);
	            return false;
	        }
	    }, "View More"), typeof expanded_prop == 'function' && expanded_prop() === true ? m("a.table-collapse-link", {
	        href: "#",
	        onclick: function onclick() {
	            expanded_prop(false);
	            return false;
	        }
	    }, "Collapse") : null])]);
	};
	
	window.calc.resultDisplay = function (num, header, hint, options) {
	    if (!options) options = {};
	    return m(".calc-item", [m(options.style == 'nobkgd' ? ".col.justify.gap-2" : ".result.col.justify.gap-2", [m(".row.gap-3.middle", [options.addsymbol === true ? m("div.result-text.fill-2.good.row.justify.middle", [m('span.plus-sign', "+"), m('span', num)]) : m("div.result-text.fill-2.good", num), m(".col.justify.fill-3.gap-1", [m(".range-header", header || ''), hint ? m(".hint", hint || '') : null])]), options.addsymbol === true ? m('.addline') : []])]);
	};
	
	// rangeVal will always be of type Number and inputVal (internal) will _usually_ be of type string
	window.calc.range = function (opts) {
	    var header = opts.header;
	    var rangeVal = opts.val;
	    if (opts.range) {
	        var min = opts.range[0];
	        var max = opts.range[1];
	        var step = opts.range[2];
	    }
	    var hint = opts.hint;
	    var customOnInput = opts.customOnInput;
	    var type = opts.type;
	
	    var inputVal;
	    if (type == "money") {
	        inputVal = m.prop(calc.formatMoney(rangeVal()));
	    } else if (type == "percent") {
	        inputVal = m.prop(calc.formatPercent(rangeVal()));
	    } else if (type == "number") {
	        inputVal = m.prop(calc.formatNumber(rangeVal()));
	    } else {
	        inputVal = m.prop(rangeVal());
	    }
	
	    function inputToRange(inputVal, rangeVal, cb) {
	        return function (e) {
	            m.withAttr("value", inputVal)(e);
	            if (type == "money") {
	                rangeVal(calc.unformatMoney(inputVal()));
	            } else if (type == "percent") {
	                rangeVal(calc.unformatPercent(inputVal()));
	            } else if (type == "number") {
	                rangeVal(calc.unformatNumber(inputVal()));
	            } else {
	                rangeVal(inputVal());
	            }
	
	            if (cb) cb();
	        };
	    }
	
	    function rangeToInput(rangeVal, inputVal, cb) {
	        return function (e) {
	            m.withAttr("value", rangeVal)(e);
	            if (type == "money") {
	                inputVal(calc.formatMoney(rangeVal()));
	            } else if (type == "percent") {
	                inputVal(calc.formatPercent(rangeVal()));
	            } else {
	                inputVal(rangeVal());
	            }
	
	            if (cb) cb();
	        };
	    }
	
	    // customOnInput = customOnInput ? customOnInput(rangeVal) : m.withAttr("value", rangeVal);
	    return m(".calc-item", [m(".range.col.justify.gap-2", [m(".row.gap-3.middle", [m("input.range-text.fill-2.good" + (opts.range ? "" : " border"), {
	        onchange: inputToRange(inputVal, rangeVal, customOnInput),
	        value: inputVal()
	    }), m(".col.justify.fill-3.gap-1", [m(".range-header", header || ''), hint ? m(".hint", hint || '') : null, opts.range ? m("input[type=range].range-input", {
	        min: min,
	        max: max,
	        step: step || 1,
	        oninput: rangeToInput(rangeVal, inputVal, customOnInput),
	        value: rangeVal()
	    }) : null])])])]);
	};
	
	window.calc.calc = function (inside, opts) {
	    var noBorders = opts && opts.noBorders;
	    var reviews = opts && opts.reviews;
	    var calcClass = ".calc";
	    if (noBorders === true) calcClass = calcClass + ".no-borders";
	    if (reviews === true) calcClass = calcClass + ".reviews";
	
	    return m("html", [m("head", [m("link", {
	        rel: 'stylesheet',
	        href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro|Source+Code+Pro:700'
	    }), m("link", {
	        rel: 'stylesheet',
	        href: 'normalize.css'
	    }), m("link", {
	        rel: 'stylesheet',
	        href: 'flexblocks.css'
	    }), m("link", {
	        rel: 'stylesheet',
	        href: 'site.css'
	    }), m("meta", {
	        name: 'viewport',
	        content: 'width=device-width, initial-scale=1'
	    })]), m("body", {
	        config: function config(el) {
	            window.setInterval(function () {
	                parent.postMessage(el.offsetHeight || el.clientHeight, '*');
	            }, 500);
	        }
	    }, [m(calcClass, {}, [inside()])])]);
	};
	
	// m('div.logo', {
	//     // href: 'http://www.thesimpledollar.com'
	// }, reviews ? reviewsLogo : tsdLogo)
	Number.prototype.format = function (n, x) {
	    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
	    return this.toFixed(Math.max(0, ~ ~n)).replace(new RegExp(re, 'g'), '$&,');
	};
	
	String.prototype.replaceAll = function (find, replace) {
	    function escapeRegExp(str) {
	        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	    }
	    return this.replace(new RegExp(escapeRegExp(find), 'g'), replace);
	};
	
	window.calc.formatMoney = function (number) {
	    number = Number(number);
	    var money = number.format(0);
	    return "$" + money;
	};
	
	window.calc.unformatMoney = function (money) {
	    money = String(money);
	    return Number(money.replaceAll("$", "").replaceAll(",", ""));
	};
	
	window.calc.formatPercent = function (number) {
	    number = Number(number);
	    var percent = number.format(3);
	    return percent + "%";
	};
	
	window.calc.unformatPercent = function (percent) {
	    percent = String(percent);
	    return Number(percent.replaceAll("%", ""));
	};
	
	window.calc.formatNumber = function (number) {
	    number = Number(number);
	    return number.format(0);
	};
	
	window.calc.unformatNumber = function (number) {
	    return Number(number.replaceAll(",", ""));
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "signup.html";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "login.html";

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var url = __webpack_require__(11);
	var parser = __webpack_require__(16);
	var Manager = __webpack_require__(23);
	var debug = __webpack_require__(13)('socket.io-client');
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = lookup;
	
	/**
	 * Managers cache.
	 */
	
	var cache = exports.managers = {};
	
	/**
	 * Looks up an existing `Manager` for multiplexing.
	 * If the user summons:
	 *
	 *   `io('http://localhost/a');`
	 *   `io('http://localhost/b');`
	 *
	 * We reuse the existing instance based on same scheme/port/host,
	 * and we initialize sockets for each namespace.
	 *
	 * @api public
	 */
	
	function lookup(uri, opts) {
	  if (typeof uri == 'object') {
	    opts = uri;
	    uri = undefined;
	  }
	
	  opts = opts || {};
	
	  var parsed = url(uri);
	  var source = parsed.source;
	  var id = parsed.id;
	  var path = parsed.path;
	  var sameNamespace = cache[id] && path in cache[id].nsps;
	  var newConnection = opts.forceNew || opts['force new connection'] ||
	                      false === opts.multiplex || sameNamespace;
	
	  var io;
	
	  if (newConnection) {
	    debug('ignoring socket cache for %s', source);
	    io = Manager(source, opts);
	  } else {
	    if (!cache[id]) {
	      debug('new io instance for %s', source);
	      cache[id] = Manager(source, opts);
	    }
	    io = cache[id];
	  }
	
	  return io.socket(parsed.path);
	}
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = parser.protocol;
	
	/**
	 * `connect`.
	 *
	 * @param {String} uri
	 * @api public
	 */
	
	exports.connect = lookup;
	
	/**
	 * Expose constructors for standalone build.
	 *
	 * @api public
	 */
	
	exports.Manager = __webpack_require__(23);
	exports.Socket = __webpack_require__(49);


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module dependencies.
	 */
	
	var parseuri = __webpack_require__(12);
	var debug = __webpack_require__(13)('socket.io-client:url');
	
	/**
	 * Module exports.
	 */
	
	module.exports = url;
	
	/**
	 * URL parser.
	 *
	 * @param {String} url
	 * @param {Object} An object meant to mimic window.location.
	 *                 Defaults to window.location.
	 * @api public
	 */
	
	function url(uri, loc){
	  var obj = uri;
	
	  // default to window.location
	  var loc = loc || global.location;
	  if (null == uri) uri = loc.protocol + '//' + loc.host;
	
	  // relative path support
	  if ('string' == typeof uri) {
	    if ('/' == uri.charAt(0)) {
	      if ('/' == uri.charAt(1)) {
	        uri = loc.protocol + uri;
	      } else {
	        uri = loc.host + uri;
	      }
	    }
	
	    if (!/^(https?|wss?):\/\//.test(uri)) {
	      debug('protocol-less url %s', uri);
	      if ('undefined' != typeof loc) {
	        uri = loc.protocol + '//' + uri;
	      } else {
	        uri = 'https://' + uri;
	      }
	    }
	
	    // parse
	    debug('parse %s', uri);
	    obj = parseuri(uri);
	  }
	
	  // make sure we treat `localhost:80` and `localhost` equally
	  if (!obj.port) {
	    if (/^(http|ws)$/.test(obj.protocol)) {
	      obj.port = '80';
	    }
	    else if (/^(http|ws)s$/.test(obj.protocol)) {
	      obj.port = '443';
	    }
	  }
	
	  obj.path = obj.path || '/';
	
	  var ipv6 = obj.host.indexOf(':') !== -1;
	  var host = ipv6 ? '[' + obj.host + ']' : obj.host;
	
	  // define unique id
	  obj.id = obj.protocol + '://' + host + ':' + obj.port;
	  // define href
	  obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : (':' + obj.port));
	
	  return obj;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */
	
	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
	
	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];
	
	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');
	
	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }
	
	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;
	
	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }
	
	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }
	
	    return uri;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = __webpack_require__(14);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();
	
	/**
	 * Colors.
	 */
	
	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];
	
	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */
	
	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}
	
	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */
	
	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};
	
	
	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */
	
	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;
	
	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);
	
	  if (!useColors) return args;
	
	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
	
	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });
	
	  args.splice(lastC, 0, c);
	  return args;
	}
	
	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */
	
	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}
	
	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */
	
	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}
	
	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */
	
	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}
	
	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */
	
	exports.enable(load());
	
	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */
	
	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */
	
	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(15);
	
	/**
	 * The currently active debug mode names, and names to skip.
	 */
	
	exports.names = [];
	exports.skips = [];
	
	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */
	
	exports.formatters = {};
	
	/**
	 * Previously assigned color.
	 */
	
	var prevColor = 0;
	
	/**
	 * Previous log timestamp.
	 */
	
	var prevTime;
	
	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */
	
	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}
	
	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */
	
	function debug(namespace) {
	
	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;
	
	  // define the `enabled` version
	  function enabled() {
	
	    var self = enabled;
	
	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;
	
	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();
	
	    var args = Array.prototype.slice.call(arguments);
	
	    args[0] = exports.coerce(args[0]);
	
	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }
	
	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);
	
	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });
	
	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;
	
	  var fn = exports.enabled(namespace) ? enabled : disabled;
	
	  fn.namespace = namespace;
	
	  return fn;
	}
	
	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */
	
	function enable(namespaces) {
	  exports.save(namespaces);
	
	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;
	
	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}
	
	/**
	 * Disable debug output.
	 *
	 * @api public
	 */
	
	function disable() {
	  exports.enable('');
	}
	
	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */
	
	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */
	
	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */
	
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;
	
	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */
	
	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};
	
	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */
	
	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}
	
	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}
	
	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */
	
	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}
	
	/**
	 * Pluralization helper.
	 */
	
	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var debug = __webpack_require__(13)('socket.io-parser');
	var json = __webpack_require__(17);
	var isArray = __webpack_require__(19);
	var Emitter = __webpack_require__(20);
	var binary = __webpack_require__(21);
	var isBuf = __webpack_require__(22);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	exports.protocol = 4;
	
	/**
	 * Packet types.
	 *
	 * @api public
	 */
	
	exports.types = [
	  'CONNECT',
	  'DISCONNECT',
	  'EVENT',
	  'ACK',
	  'ERROR',
	  'BINARY_EVENT',
	  'BINARY_ACK'
	];
	
	/**
	 * Packet type `connect`.
	 *
	 * @api public
	 */
	
	exports.CONNECT = 0;
	
	/**
	 * Packet type `disconnect`.
	 *
	 * @api public
	 */
	
	exports.DISCONNECT = 1;
	
	/**
	 * Packet type `event`.
	 *
	 * @api public
	 */
	
	exports.EVENT = 2;
	
	/**
	 * Packet type `ack`.
	 *
	 * @api public
	 */
	
	exports.ACK = 3;
	
	/**
	 * Packet type `error`.
	 *
	 * @api public
	 */
	
	exports.ERROR = 4;
	
	/**
	 * Packet type 'binary event'
	 *
	 * @api public
	 */
	
	exports.BINARY_EVENT = 5;
	
	/**
	 * Packet type `binary ack`. For acks with binary arguments.
	 *
	 * @api public
	 */
	
	exports.BINARY_ACK = 6;
	
	/**
	 * Encoder constructor.
	 *
	 * @api public
	 */
	
	exports.Encoder = Encoder;
	
	/**
	 * Decoder constructor.
	 *
	 * @api public
	 */
	
	exports.Decoder = Decoder;
	
	/**
	 * A socket.io Encoder instance
	 *
	 * @api public
	 */
	
	function Encoder() {}
	
	/**
	 * Encode a packet as a single string if non-binary, or as a
	 * buffer sequence, depending on packet type.
	 *
	 * @param {Object} obj - packet object
	 * @param {Function} callback - function to handle encodings (likely engine.write)
	 * @return Calls callback with Array of encodings
	 * @api public
	 */
	
	Encoder.prototype.encode = function(obj, callback){
	  debug('encoding packet %j', obj);
	
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    encodeAsBinary(obj, callback);
	  }
	  else {
	    var encoding = encodeAsString(obj);
	    callback([encoding]);
	  }
	};
	
	/**
	 * Encode packet as string.
	 *
	 * @param {Object} packet
	 * @return {String} encoded
	 * @api private
	 */
	
	function encodeAsString(obj) {
	  var str = '';
	  var nsp = false;
	
	  // first is type
	  str += obj.type;
	
	  // attachments if we have them
	  if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
	    str += obj.attachments;
	    str += '-';
	  }
	
	  // if we have a namespace other than `/`
	  // we append it followed by a comma `,`
	  if (obj.nsp && '/' != obj.nsp) {
	    nsp = true;
	    str += obj.nsp;
	  }
	
	  // immediately followed by the id
	  if (null != obj.id) {
	    if (nsp) {
	      str += ',';
	      nsp = false;
	    }
	    str += obj.id;
	  }
	
	  // json data
	  if (null != obj.data) {
	    if (nsp) str += ',';
	    str += json.stringify(obj.data);
	  }
	
	  debug('encoded %j as %s', obj, str);
	  return str;
	}
	
	/**
	 * Encode packet as 'buffer sequence' by removing blobs, and
	 * deconstructing packet into object with placeholders and
	 * a list of buffers.
	 *
	 * @param {Object} packet
	 * @return {Buffer} encoded
	 * @api private
	 */
	
	function encodeAsBinary(obj, callback) {
	
	  function writeEncoding(bloblessData) {
	    var deconstruction = binary.deconstructPacket(bloblessData);
	    var pack = encodeAsString(deconstruction.packet);
	    var buffers = deconstruction.buffers;
	
	    buffers.unshift(pack); // add packet info to beginning of data list
	    callback(buffers); // write all the buffers
	  }
	
	  binary.removeBlobs(obj, writeEncoding);
	}
	
	/**
	 * A socket.io Decoder instance
	 *
	 * @return {Object} decoder
	 * @api public
	 */
	
	function Decoder() {
	  this.reconstructor = null;
	}
	
	/**
	 * Mix in `Emitter` with Decoder.
	 */
	
	Emitter(Decoder.prototype);
	
	/**
	 * Decodes an ecoded packet string into packet JSON.
	 *
	 * @param {String} obj - encoded packet
	 * @return {Object} packet
	 * @api public
	 */
	
	Decoder.prototype.add = function(obj) {
	  var packet;
	  if ('string' == typeof obj) {
	    packet = decodeString(obj);
	    if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) { // binary packet's json
	      this.reconstructor = new BinaryReconstructor(packet);
	
	      // no attachments, labeled binary but no binary data to follow
	      if (this.reconstructor.reconPack.attachments === 0) {
	        this.emit('decoded', packet);
	      }
	    } else { // non-binary full packet
	      this.emit('decoded', packet);
	    }
	  }
	  else if (isBuf(obj) || obj.base64) { // raw binary data
	    if (!this.reconstructor) {
	      throw new Error('got binary data when not reconstructing a packet');
	    } else {
	      packet = this.reconstructor.takeBinaryData(obj);
	      if (packet) { // received final buffer
	        this.reconstructor = null;
	        this.emit('decoded', packet);
	      }
	    }
	  }
	  else {
	    throw new Error('Unknown type: ' + obj);
	  }
	};
	
	/**
	 * Decode a packet String (JSON data)
	 *
	 * @param {String} str
	 * @return {Object} packet
	 * @api private
	 */
	
	function decodeString(str) {
	  var p = {};
	  var i = 0;
	
	  // look up type
	  p.type = Number(str.charAt(0));
	  if (null == exports.types[p.type]) return error();
	
	  // look up attachments if type binary
	  if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
	    var buf = '';
	    while (str.charAt(++i) != '-') {
	      buf += str.charAt(i);
	      if (i == str.length) break;
	    }
	    if (buf != Number(buf) || str.charAt(i) != '-') {
	      throw new Error('Illegal attachments');
	    }
	    p.attachments = Number(buf);
	  }
	
	  // look up namespace (if any)
	  if ('/' == str.charAt(i + 1)) {
	    p.nsp = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (',' == c) break;
	      p.nsp += c;
	      if (i == str.length) break;
	    }
	  } else {
	    p.nsp = '/';
	  }
	
	  // look up id
	  var next = str.charAt(i + 1);
	  if ('' !== next && Number(next) == next) {
	    p.id = '';
	    while (++i) {
	      var c = str.charAt(i);
	      if (null == c || Number(c) != c) {
	        --i;
	        break;
	      }
	      p.id += str.charAt(i);
	      if (i == str.length) break;
	    }
	    p.id = Number(p.id);
	  }
	
	  // look up json data
	  if (str.charAt(++i)) {
	    try {
	      p.data = json.parse(str.substr(i));
	    } catch(e){
	      return error();
	    }
	  }
	
	  debug('decoded %s as %j', str, p);
	  return p;
	}
	
	/**
	 * Deallocates a parser's resources
	 *
	 * @api public
	 */
	
	Decoder.prototype.destroy = function() {
	  if (this.reconstructor) {
	    this.reconstructor.finishedReconstruction();
	  }
	};
	
	/**
	 * A manager of a binary event's 'buffer sequence'. Should
	 * be constructed whenever a packet of type BINARY_EVENT is
	 * decoded.
	 *
	 * @param {Object} packet
	 * @return {BinaryReconstructor} initialized reconstructor
	 * @api private
	 */
	
	function BinaryReconstructor(packet) {
	  this.reconPack = packet;
	  this.buffers = [];
	}
	
	/**
	 * Method to be called when binary data received from connection
	 * after a BINARY_EVENT packet.
	 *
	 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
	 * @return {null | Object} returns null if more binary data is expected or
	 *   a reconstructed packet object if all buffers have been received.
	 * @api private
	 */
	
	BinaryReconstructor.prototype.takeBinaryData = function(binData) {
	  this.buffers.push(binData);
	  if (this.buffers.length == this.reconPack.attachments) { // done with buffer list
	    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
	    this.finishedReconstruction();
	    return packet;
	  }
	  return null;
	};
	
	/**
	 * Cleans up binary packet reconstruction variables.
	 *
	 * @api private
	 */
	
	BinaryReconstructor.prototype.finishedReconstruction = function() {
	  this.reconPack = null;
	  this.buffers = [];
	};
	
	function error(data){
	  return {
	    type: exports.ERROR,
	    data: 'parser error'
	  };
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
	;(function () {
	  // Detect the `define` function exposed by asynchronous module loaders. The
	  // strict `define` check is necessary for compatibility with `r.js`.
	  var isLoader = "function" === "function" && __webpack_require__(18);
	
	  // A set of types used to distinguish objects from primitives.
	  var objectTypes = {
	    "function": true,
	    "object": true
	  };
	
	  // Detect the `exports` object exposed by CommonJS implementations.
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	
	  // Use the `global` object exposed by Node (including Browserify via
	  // `insert-module-globals`), Narwhal, and Ringo as the default context,
	  // and the `window` object in browsers. Rhino exports a `global` function
	  // instead.
	  var root = objectTypes[typeof window] && window || this,
	      freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;
	
	  if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
	    root = freeGlobal;
	  }
	
	  // Public: Initializes JSON 3 using the given `context` object, attaching the
	  // `stringify` and `parse` functions to the specified `exports` object.
	  function runInContext(context, exports) {
	    context || (context = root["Object"]());
	    exports || (exports = root["Object"]());
	
	    // Native constructor aliases.
	    var Number = context["Number"] || root["Number"],
	        String = context["String"] || root["String"],
	        Object = context["Object"] || root["Object"],
	        Date = context["Date"] || root["Date"],
	        SyntaxError = context["SyntaxError"] || root["SyntaxError"],
	        TypeError = context["TypeError"] || root["TypeError"],
	        Math = context["Math"] || root["Math"],
	        nativeJSON = context["JSON"] || root["JSON"];
	
	    // Delegate to the native `stringify` and `parse` implementations.
	    if (typeof nativeJSON == "object" && nativeJSON) {
	      exports.stringify = nativeJSON.stringify;
	      exports.parse = nativeJSON.parse;
	    }
	
	    // Convenience aliases.
	    var objectProto = Object.prototype,
	        getClass = objectProto.toString,
	        isProperty, forEach, undef;
	
	    // Test the `Date#getUTC*` methods. Based on work by @Yaffle.
	    var isExtended = new Date(-3509827334573292);
	    try {
	      // The `getUTCFullYear`, `Month`, and `Date` methods return nonsensical
	      // results for certain dates in Opera >= 10.53.
	      isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 &&
	        // Safari < 2.0.2 stores the internal millisecond time value correctly,
	        // but clips the values returned by the date methods to the range of
	        // signed 32-bit integers ([-2 ** 31, 2 ** 31 - 1]).
	        isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
	    } catch (exception) {}
	
	    // Internal: Determines whether the native `JSON.stringify` and `parse`
	    // implementations are spec-compliant. Based on work by Ken Snyder.
	    function has(name) {
	      if (has[name] !== undef) {
	        // Return cached feature test result.
	        return has[name];
	      }
	      var isSupported;
	      if (name == "bug-string-char-index") {
	        // IE <= 7 doesn't support accessing string characters using square
	        // bracket notation. IE 8 only supports this for primitives.
	        isSupported = "a"[0] != "a";
	      } else if (name == "json") {
	        // Indicates whether both `JSON.stringify` and `JSON.parse` are
	        // supported.
	        isSupported = has("json-stringify") && has("json-parse");
	      } else {
	        var value, serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
	        // Test `JSON.stringify`.
	        if (name == "json-stringify") {
	          var stringify = exports.stringify, stringifySupported = typeof stringify == "function" && isExtended;
	          if (stringifySupported) {
	            // A test function object with a custom `toJSON` method.
	            (value = function () {
	              return 1;
	            }).toJSON = value;
	            try {
	              stringifySupported =
	                // Firefox 3.1b1 and b2 serialize string, number, and boolean
	                // primitives as object literals.
	                stringify(0) === "0" &&
	                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
	                // literals.
	                stringify(new Number()) === "0" &&
	                stringify(new String()) == '""' &&
	                // FF 3.1b1, 2 throw an error if the value is `null`, `undefined`, or
	                // does not define a canonical JSON representation (this applies to
	                // objects with `toJSON` properties as well, *unless* they are nested
	                // within an object or array).
	                stringify(getClass) === undef &&
	                // IE 8 serializes `undefined` as `"undefined"`. Safari <= 5.1.7 and
	                // FF 3.1b3 pass this test.
	                stringify(undef) === undef &&
	                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
	                // respectively, if the value is omitted entirely.
	                stringify() === undef &&
	                // FF 3.1b1, 2 throw an error if the given value is not a number,
	                // string, array, object, Boolean, or `null` literal. This applies to
	                // objects with custom `toJSON` methods as well, unless they are nested
	                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
	                // methods entirely.
	                stringify(value) === "1" &&
	                stringify([value]) == "[1]" &&
	                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
	                // `"[null]"`.
	                stringify([undef]) == "[null]" &&
	                // YUI 3.0.0b1 fails to serialize `null` literals.
	                stringify(null) == "null" &&
	                // FF 3.1b1, 2 halts serialization if an array contains a function:
	                // `[1, true, getClass, 1]` serializes as "[1,true,],". FF 3.1b3
	                // elides non-JSON values from objects and arrays, unless they
	                // define custom `toJSON` methods.
	                stringify([undef, getClass, null]) == "[null,null,null]" &&
	                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
	                // where character escape codes are expected (e.g., `\b` => `\u0008`).
	                stringify({ "a": [value, true, false, null, "\x00\b\n\f\r\t"] }) == serialized &&
	                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
	                stringify(null, value) === "1" &&
	                stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
	                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
	                // serialize extended years.
	                stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' &&
	                // The milliseconds are optional in ES 5, but required in 5.1.
	                stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' &&
	                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
	                // four-digit years instead of six-digit years. Credits: @Yaffle.
	                stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' &&
	                // Safari <= 5.1.5 and Opera >= 10.53 incorrectly serialize millisecond
	                // values less than 1000. Credits: @Yaffle.
	                stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
	            } catch (exception) {
	              stringifySupported = false;
	            }
	          }
	          isSupported = stringifySupported;
	        }
	        // Test `JSON.parse`.
	        if (name == "json-parse") {
	          var parse = exports.parse;
	          if (typeof parse == "function") {
	            try {
	              // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
	              // Conforming implementations should also coerce the initial argument to
	              // a string prior to parsing.
	              if (parse("0") === 0 && !parse(false)) {
	                // Simple parsing test.
	                value = parse(serialized);
	                var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
	                if (parseSupported) {
	                  try {
	                    // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
	                    parseSupported = !parse('"\t"');
	                  } catch (exception) {}
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0 and 4.0.1 allow leading `+` signs and leading
	                      // decimal points. FF 4.0, 4.0.1, and IE 9-10 also allow
	                      // certain octal literals.
	                      parseSupported = parse("01") !== 1;
	                    } catch (exception) {}
	                  }
	                  if (parseSupported) {
	                    try {
	                      // FF 4.0, 4.0.1, and Rhino 1.7R3-R4 allow trailing decimal
	                      // points. These environments, along with FF 3.1b1 and 2,
	                      // also allow trailing commas in JSON objects and arrays.
	                      parseSupported = parse("1.") !== 1;
	                    } catch (exception) {}
	                  }
	                }
	              }
	            } catch (exception) {
	              parseSupported = false;
	            }
	          }
	          isSupported = parseSupported;
	        }
	      }
	      return has[name] = !!isSupported;
	    }
	
	    if (!has("json")) {
	      // Common `[[Class]]` name aliases.
	      var functionClass = "[object Function]",
	          dateClass = "[object Date]",
	          numberClass = "[object Number]",
	          stringClass = "[object String]",
	          arrayClass = "[object Array]",
	          booleanClass = "[object Boolean]";
	
	      // Detect incomplete support for accessing string characters by index.
	      var charIndexBuggy = has("bug-string-char-index");
	
	      // Define additional utility methods if the `Date` methods are buggy.
	      if (!isExtended) {
	        var floor = Math.floor;
	        // A mapping between the months of the year and the number of days between
	        // January 1st and the first of the respective month.
	        var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
	        // Internal: Calculates the number of days between the Unix epoch and the
	        // first day of the given month.
	        var getDay = function (year, month) {
	          return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
	        };
	      }
	
	      // Internal: Determines if a property is a direct property of the given
	      // object. Delegates to the native `Object#hasOwnProperty` method.
	      if (!(isProperty = objectProto.hasOwnProperty)) {
	        isProperty = function (property) {
	          var members = {}, constructor;
	          if ((members.__proto__ = null, members.__proto__ = {
	            // The *proto* property cannot be set multiple times in recent
	            // versions of Firefox and SeaMonkey.
	            "toString": 1
	          }, members).toString != getClass) {
	            // Safari <= 2.0.3 doesn't implement `Object#hasOwnProperty`, but
	            // supports the mutable *proto* property.
	            isProperty = function (property) {
	              // Capture and break the object's prototype chain (see section 8.6.2
	              // of the ES 5.1 spec). The parenthesized expression prevents an
	              // unsafe transformation by the Closure Compiler.
	              var original = this.__proto__, result = property in (this.__proto__ = null, this);
	              // Restore the original prototype chain.
	              this.__proto__ = original;
	              return result;
	            };
	          } else {
	            // Capture a reference to the top-level `Object` constructor.
	            constructor = members.constructor;
	            // Use the `constructor` property to simulate `Object#hasOwnProperty` in
	            // other environments.
	            isProperty = function (property) {
	              var parent = (this.constructor || constructor).prototype;
	              return property in this && !(property in parent && this[property] === parent[property]);
	            };
	          }
	          members = null;
	          return isProperty.call(this, property);
	        };
	      }
	
	      // Internal: Normalizes the `for...in` iteration algorithm across
	      // environments. Each enumerated key is yielded to a `callback` function.
	      forEach = function (object, callback) {
	        var size = 0, Properties, members, property;
	
	        // Tests for bugs in the current environment's `for...in` algorithm. The
	        // `valueOf` property inherits the non-enumerable flag from
	        // `Object.prototype` in older versions of IE, Netscape, and Mozilla.
	        (Properties = function () {
	          this.valueOf = 0;
	        }).prototype.valueOf = 0;
	
	        // Iterate over a new instance of the `Properties` class.
	        members = new Properties();
	        for (property in members) {
	          // Ignore all properties inherited from `Object.prototype`.
	          if (isProperty.call(members, property)) {
	            size++;
	          }
	        }
	        Properties = members = null;
	
	        // Normalize the iteration algorithm.
	        if (!size) {
	          // A list of non-enumerable properties inherited from `Object.prototype`.
	          members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
	          // IE <= 8, Mozilla 1.0, and Netscape 6.2 ignore shadowed non-enumerable
	          // properties.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, length;
	            var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
	            for (property in object) {
	              // Gecko <= 1.0 enumerates the `prototype` property of functions under
	              // certain conditions; IE does not.
	              if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for each non-enumerable property.
	            for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property));
	          };
	        } else if (size == 2) {
	          // Safari <= 2.0.4 enumerates shadowed properties twice.
	          forEach = function (object, callback) {
	            // Create a set of iterated properties.
	            var members = {}, isFunction = getClass.call(object) == functionClass, property;
	            for (property in object) {
	              // Store each property name to prevent double enumeration. The
	              // `prototype` property of functions is not enumerated due to cross-
	              // environment inconsistencies.
	              if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
	                callback(property);
	              }
	            }
	          };
	        } else {
	          // No bugs detected; use the standard `for...in` algorithm.
	          forEach = function (object, callback) {
	            var isFunction = getClass.call(object) == functionClass, property, isConstructor;
	            for (property in object) {
	              if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
	                callback(property);
	              }
	            }
	            // Manually invoke the callback for the `constructor` property due to
	            // cross-environment inconsistencies.
	            if (isConstructor || isProperty.call(object, (property = "constructor"))) {
	              callback(property);
	            }
	          };
	        }
	        return forEach(object, callback);
	      };
	
	      // Public: Serializes a JavaScript `value` as a JSON string. The optional
	      // `filter` argument may specify either a function that alters how object and
	      // array members are serialized, or an array of strings and numbers that
	      // indicates which properties should be serialized. The optional `width`
	      // argument may be either a string or number that specifies the indentation
	      // level of the output.
	      if (!has("json-stringify")) {
	        // Internal: A map of control characters and their escaped equivalents.
	        var Escapes = {
	          92: "\\\\",
	          34: '\\"',
	          8: "\\b",
	          12: "\\f",
	          10: "\\n",
	          13: "\\r",
	          9: "\\t"
	        };
	
	        // Internal: Converts `value` into a zero-padded string such that its
	        // length is at least equal to `width`. The `width` must be <= 6.
	        var leadingZeroes = "000000";
	        var toPaddedString = function (width, value) {
	          // The `|| 0` expression is necessary to work around a bug in
	          // Opera <= 7.54u2 where `0 == -0`, but `String(-0) !== "0"`.
	          return (leadingZeroes + (value || 0)).slice(-width);
	        };
	
	        // Internal: Double-quotes a string `value`, replacing all ASCII control
	        // characters (characters with code unit values between 0 and 31) with
	        // their escaped equivalents. This is an implementation of the
	        // `Quote(value)` operation defined in ES 5.1 section 15.12.3.
	        var unicodePrefix = "\\u00";
	        var quote = function (value) {
	          var result = '"', index = 0, length = value.length, useCharIndex = !charIndexBuggy || length > 10;
	          var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
	          for (; index < length; index++) {
	            var charCode = value.charCodeAt(index);
	            // If the character is a control character, append its Unicode or
	            // shorthand escape sequence; otherwise, append the character as-is.
	            switch (charCode) {
	              case 8: case 9: case 10: case 12: case 13: case 34: case 92:
	                result += Escapes[charCode];
	                break;
	              default:
	                if (charCode < 32) {
	                  result += unicodePrefix + toPaddedString(2, charCode.toString(16));
	                  break;
	                }
	                result += useCharIndex ? symbols[index] : value.charAt(index);
	            }
	          }
	          return result + '"';
	        };
	
	        // Internal: Recursively serializes an object. Implements the
	        // `Str(key, holder)`, `JO(value)`, and `JA(value)` operations.
	        var serialize = function (property, object, callback, properties, whitespace, indentation, stack) {
	          var value, className, year, month, date, time, hours, minutes, seconds, milliseconds, results, element, index, length, prefix, result;
	          try {
	            // Necessary for host object support.
	            value = object[property];
	          } catch (exception) {}
	          if (typeof value == "object" && value) {
	            className = getClass.call(value);
	            if (className == dateClass && !isProperty.call(value, "toJSON")) {
	              if (value > -1 / 0 && value < 1 / 0) {
	                // Dates are serialized according to the `Date#toJSON` method
	                // specified in ES 5.1 section 15.9.5.44. See section 15.9.1.15
	                // for the ISO 8601 date time string format.
	                if (getDay) {
	                  // Manually compute the year, month, date, hours, minutes,
	                  // seconds, and milliseconds if the `getUTC*` methods are
	                  // buggy. Adapted from @Yaffle's `date-shim` project.
	                  date = floor(value / 864e5);
	                  for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++);
	                  for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++);
	                  date = 1 + date - getDay(year, month);
	                  // The `time` value specifies the time within the day (see ES
	                  // 5.1 section 15.9.1.2). The formula `(A % B + B) % B` is used
	                  // to compute `A modulo B`, as the `%` operator does not
	                  // correspond to the `modulo` operation for negative numbers.
	                  time = (value % 864e5 + 864e5) % 864e5;
	                  // The hours, minutes, seconds, and milliseconds are obtained by
	                  // decomposing the time within the day. See section 15.9.1.10.
	                  hours = floor(time / 36e5) % 24;
	                  minutes = floor(time / 6e4) % 60;
	                  seconds = floor(time / 1e3) % 60;
	                  milliseconds = time % 1e3;
	                } else {
	                  year = value.getUTCFullYear();
	                  month = value.getUTCMonth();
	                  date = value.getUTCDate();
	                  hours = value.getUTCHours();
	                  minutes = value.getUTCMinutes();
	                  seconds = value.getUTCSeconds();
	                  milliseconds = value.getUTCMilliseconds();
	                }
	                // Serialize extended years correctly.
	                value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) +
	                  "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) +
	                  // Months, dates, hours, minutes, and seconds should have two
	                  // digits; milliseconds should have three.
	                  "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) +
	                  // Milliseconds are optional in ES 5.0, but required in 5.1.
	                  "." + toPaddedString(3, milliseconds) + "Z";
	              } else {
	                value = null;
	              }
	            } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
	              // Prototype <= 1.6.1 adds non-standard `toJSON` methods to the
	              // `Number`, `String`, `Date`, and `Array` prototypes. JSON 3
	              // ignores all `toJSON` methods on these objects unless they are
	              // defined directly on an instance.
	              value = value.toJSON(property);
	            }
	          }
	          if (callback) {
	            // If a replacement function was provided, call it to obtain the value
	            // for serialization.
	            value = callback.call(object, property, value);
	          }
	          if (value === null) {
	            return "null";
	          }
	          className = getClass.call(value);
	          if (className == booleanClass) {
	            // Booleans are represented literally.
	            return "" + value;
	          } else if (className == numberClass) {
	            // JSON numbers must be finite. `Infinity` and `NaN` are serialized as
	            // `"null"`.
	            return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
	          } else if (className == stringClass) {
	            // Strings are double-quoted and escaped.
	            return quote("" + value);
	          }
	          // Recursively serialize objects and arrays.
	          if (typeof value == "object") {
	            // Check for cyclic structures. This is a linear search; performance
	            // is inversely proportional to the number of unique nested objects.
	            for (length = stack.length; length--;) {
	              if (stack[length] === value) {
	                // Cyclic structures cannot be serialized by `JSON.stringify`.
	                throw TypeError();
	              }
	            }
	            // Add the object to the stack of traversed objects.
	            stack.push(value);
	            results = [];
	            // Save the current indentation level and indent one additional level.
	            prefix = indentation;
	            indentation += whitespace;
	            if (className == arrayClass) {
	              // Recursively serialize array elements.
	              for (index = 0, length = value.length; index < length; index++) {
	                element = serialize(index, value, callback, properties, whitespace, indentation, stack);
	                results.push(element === undef ? "null" : element);
	              }
	              result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
	            } else {
	              // Recursively serialize object members. Members are selected from
	              // either a user-specified list of property names, or the object
	              // itself.
	              forEach(properties || value, function (property) {
	                var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
	                if (element !== undef) {
	                  // According to ES 5.1 section 15.12.3: "If `gap` {whitespace}
	                  // is not the empty string, let `member` {quote(property) + ":"}
	                  // be the concatenation of `member` and the `space` character."
	                  // The "`space` character" refers to the literal space
	                  // character, not the `space` {width} argument provided to
	                  // `JSON.stringify`.
	                  results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
	                }
	              });
	              result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
	            }
	            // Remove the object from the traversed object stack.
	            stack.pop();
	            return result;
	          }
	        };
	
	        // Public: `JSON.stringify`. See ES 5.1 section 15.12.3.
	        exports.stringify = function (source, filter, width) {
	          var whitespace, callback, properties, className;
	          if (objectTypes[typeof filter] && filter) {
	            if ((className = getClass.call(filter)) == functionClass) {
	              callback = filter;
	            } else if (className == arrayClass) {
	              // Convert the property names array into a makeshift set.
	              properties = {};
	              for (var index = 0, length = filter.length, value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1));
	            }
	          }
	          if (width) {
	            if ((className = getClass.call(width)) == numberClass) {
	              // Convert the `width` to an integer and create a string containing
	              // `width` number of space characters.
	              if ((width -= width % 1) > 0) {
	                for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ");
	              }
	            } else if (className == stringClass) {
	              whitespace = width.length <= 10 ? width : width.slice(0, 10);
	            }
	          }
	          // Opera <= 7.54u2 discards the values associated with empty string keys
	          // (`""`) only if they are used directly within an object member list
	          // (e.g., `!("" in { "": 1})`).
	          return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
	        };
	      }
	
	      // Public: Parses a JSON source string.
	      if (!has("json-parse")) {
	        var fromCharCode = String.fromCharCode;
	
	        // Internal: A map of escaped control characters and their unescaped
	        // equivalents.
	        var Unescapes = {
	          92: "\\",
	          34: '"',
	          47: "/",
	          98: "\b",
	          116: "\t",
	          110: "\n",
	          102: "\f",
	          114: "\r"
	        };
	
	        // Internal: Stores the parser state.
	        var Index, Source;
	
	        // Internal: Resets the parser state and throws a `SyntaxError`.
	        var abort = function () {
	          Index = Source = null;
	          throw SyntaxError();
	        };
	
	        // Internal: Returns the next token, or `"$"` if the parser has reached
	        // the end of the source string. A token may be a string, number, `null`
	        // literal, or Boolean literal.
	        var lex = function () {
	          var source = Source, length = source.length, value, begin, position, isSigned, charCode;
	          while (Index < length) {
	            charCode = source.charCodeAt(Index);
	            switch (charCode) {
	              case 9: case 10: case 13: case 32:
	                // Skip whitespace tokens, including tabs, carriage returns, line
	                // feeds, and space characters.
	                Index++;
	                break;
	              case 123: case 125: case 91: case 93: case 58: case 44:
	                // Parse a punctuator token (`{`, `}`, `[`, `]`, `:`, or `,`) at
	                // the current position.
	                value = charIndexBuggy ? source.charAt(Index) : source[Index];
	                Index++;
	                return value;
	              case 34:
	                // `"` delimits a JSON string; advance to the next character and
	                // begin parsing the string. String tokens are prefixed with the
	                // sentinel `@` character to distinguish them from punctuators and
	                // end-of-string tokens.
	                for (value = "@", Index++; Index < length;) {
	                  charCode = source.charCodeAt(Index);
	                  if (charCode < 32) {
	                    // Unescaped ASCII control characters (those with a code unit
	                    // less than the space character) are not permitted.
	                    abort();
	                  } else if (charCode == 92) {
	                    // A reverse solidus (`\`) marks the beginning of an escaped
	                    // control character (including `"`, `\`, and `/`) or Unicode
	                    // escape sequence.
	                    charCode = source.charCodeAt(++Index);
	                    switch (charCode) {
	                      case 92: case 34: case 47: case 98: case 116: case 110: case 102: case 114:
	                        // Revive escaped control characters.
	                        value += Unescapes[charCode];
	                        Index++;
	                        break;
	                      case 117:
	                        // `\u` marks the beginning of a Unicode escape sequence.
	                        // Advance to the first character and validate the
	                        // four-digit code point.
	                        begin = ++Index;
	                        for (position = Index + 4; Index < position; Index++) {
	                          charCode = source.charCodeAt(Index);
	                          // A valid sequence comprises four hexdigits (case-
	                          // insensitive) that form a single hexadecimal value.
	                          if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
	                            // Invalid Unicode escape sequence.
	                            abort();
	                          }
	                        }
	                        // Revive the escaped character.
	                        value += fromCharCode("0x" + source.slice(begin, Index));
	                        break;
	                      default:
	                        // Invalid escape sequence.
	                        abort();
	                    }
	                  } else {
	                    if (charCode == 34) {
	                      // An unescaped double-quote character marks the end of the
	                      // string.
	                      break;
	                    }
	                    charCode = source.charCodeAt(Index);
	                    begin = Index;
	                    // Optimize for the common case where a string is valid.
	                    while (charCode >= 32 && charCode != 92 && charCode != 34) {
	                      charCode = source.charCodeAt(++Index);
	                    }
	                    // Append the string as-is.
	                    value += source.slice(begin, Index);
	                  }
	                }
	                if (source.charCodeAt(Index) == 34) {
	                  // Advance to the next character and return the revived string.
	                  Index++;
	                  return value;
	                }
	                // Unterminated string.
	                abort();
	              default:
	                // Parse numbers and literals.
	                begin = Index;
	                // Advance past the negative sign, if one is specified.
	                if (charCode == 45) {
	                  isSigned = true;
	                  charCode = source.charCodeAt(++Index);
	                }
	                // Parse an integer or floating-point value.
	                if (charCode >= 48 && charCode <= 57) {
	                  // Leading zeroes are interpreted as octal literals.
	                  if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
	                    // Illegal octal literal.
	                    abort();
	                  }
	                  isSigned = false;
	                  // Parse the integer component.
	                  for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++);
	                  // Floats cannot contain a leading decimal point; however, this
	                  // case is already accounted for by the parser.
	                  if (source.charCodeAt(Index) == 46) {
	                    position = ++Index;
	                    // Parse the decimal component.
	                    for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal trailing decimal.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Parse exponents. The `e` denoting the exponent is
	                  // case-insensitive.
	                  charCode = source.charCodeAt(Index);
	                  if (charCode == 101 || charCode == 69) {
	                    charCode = source.charCodeAt(++Index);
	                    // Skip past the sign following the exponent, if one is
	                    // specified.
	                    if (charCode == 43 || charCode == 45) {
	                      Index++;
	                    }
	                    // Parse the exponential component.
	                    for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++);
	                    if (position == Index) {
	                      // Illegal empty exponent.
	                      abort();
	                    }
	                    Index = position;
	                  }
	                  // Coerce the parsed value to a JavaScript number.
	                  return +source.slice(begin, Index);
	                }
	                // A negative sign may only precede numbers.
	                if (isSigned) {
	                  abort();
	                }
	                // `true`, `false`, and `null` literals.
	                if (source.slice(Index, Index + 4) == "true") {
	                  Index += 4;
	                  return true;
	                } else if (source.slice(Index, Index + 5) == "false") {
	                  Index += 5;
	                  return false;
	                } else if (source.slice(Index, Index + 4) == "null") {
	                  Index += 4;
	                  return null;
	                }
	                // Unrecognized token.
	                abort();
	            }
	          }
	          // Return the sentinel `$` character if the parser has reached the end
	          // of the source string.
	          return "$";
	        };
	
	        // Internal: Parses a JSON `value` token.
	        var get = function (value) {
	          var results, hasMembers;
	          if (value == "$") {
	            // Unexpected end of input.
	            abort();
	          }
	          if (typeof value == "string") {
	            if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
	              // Remove the sentinel `@` character.
	              return value.slice(1);
	            }
	            // Parse object and array literals.
	            if (value == "[") {
	              // Parses a JSON array, returning a new JavaScript array.
	              results = [];
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing square bracket marks the end of the array literal.
	                if (value == "]") {
	                  break;
	                }
	                // If the array literal contains elements, the current token
	                // should be a comma separating the previous element from the
	                // next.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "]") {
	                      // Unexpected trailing `,` in array literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each array element.
	                    abort();
	                  }
	                }
	                // Elisions and leading commas are not permitted.
	                if (value == ",") {
	                  abort();
	                }
	                results.push(get(value));
	              }
	              return results;
	            } else if (value == "{") {
	              // Parses a JSON object, returning a new JavaScript object.
	              results = {};
	              for (;; hasMembers || (hasMembers = true)) {
	                value = lex();
	                // A closing curly brace marks the end of the object literal.
	                if (value == "}") {
	                  break;
	                }
	                // If the object literal contains members, the current token
	                // should be a comma separator.
	                if (hasMembers) {
	                  if (value == ",") {
	                    value = lex();
	                    if (value == "}") {
	                      // Unexpected trailing `,` in object literal.
	                      abort();
	                    }
	                  } else {
	                    // A `,` must separate each object member.
	                    abort();
	                  }
	                }
	                // Leading commas are not permitted, object property names must be
	                // double-quoted strings, and a `:` must separate each property
	                // name and value.
	                if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
	                  abort();
	                }
	                results[value.slice(1)] = get(lex());
	              }
	              return results;
	            }
	            // Unexpected token encountered.
	            abort();
	          }
	          return value;
	        };
	
	        // Internal: Updates a traversed object member.
	        var update = function (source, property, callback) {
	          var element = walk(source, property, callback);
	          if (element === undef) {
	            delete source[property];
	          } else {
	            source[property] = element;
	          }
	        };
	
	        // Internal: Recursively traverses a parsed JSON object, invoking the
	        // `callback` function for each value. This is an implementation of the
	        // `Walk(holder, name)` operation defined in ES 5.1 section 15.12.2.
	        var walk = function (source, property, callback) {
	          var value = source[property], length;
	          if (typeof value == "object" && value) {
	            // `forEach` can't be used to traverse an array in Opera <= 8.54
	            // because its `Object#hasOwnProperty` implementation returns `false`
	            // for array indices (e.g., `![1, 2, 3].hasOwnProperty("0")`).
	            if (getClass.call(value) == arrayClass) {
	              for (length = value.length; length--;) {
	                update(value, length, callback);
	              }
	            } else {
	              forEach(value, function (property) {
	                update(value, property, callback);
	              });
	            }
	          }
	          return callback.call(source, property, value);
	        };
	
	        // Public: `JSON.parse`. See ES 5.1 section 15.12.2.
	        exports.parse = function (source, callback) {
	          var result, value;
	          Index = 0;
	          Source = "" + source;
	          result = get(lex());
	          // If a JSON string contains multiple tokens, it is invalid.
	          if (lex() != "$") {
	            abort();
	          }
	          // Reset the parser state.
	          Index = Source = null;
	          return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
	        };
	      }
	    }
	
	    exports["runInContext"] = runInContext;
	    return exports;
	  }
	
	  if (freeExports && !isLoader) {
	    // Export for CommonJS environments.
	    runInContext(root, freeExports);
	  } else {
	    // Export for web browsers and JavaScript engines.
	    var nativeJSON = root.JSON,
	        previousJSON = root["JSON3"],
	        isRestored = false;
	
	    var JSON3 = runInContext(root, (root["JSON3"] = {
	      // Public: Restores the original value of the global `JSON` object and
	      // returns a reference to the `JSON3` object.
	      "noConflict": function () {
	        if (!isRestored) {
	          isRestored = true;
	          root.JSON = nativeJSON;
	          root["JSON3"] = previousJSON;
	          nativeJSON = previousJSON = null;
	        }
	        return JSON3;
	      }
	    }));
	
	    root.JSON = {
	      "parse": JSON3.parse,
	      "stringify": JSON3.stringify
	    };
	  }
	
	  // Export for asynchronous module loaders.
	  if (isLoader) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return JSON3;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module), (function() { return this; }())))

/***/ },
/* 18 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 20 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};
	
	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*global Blob,File*/
	
	/**
	 * Module requirements
	 */
	
	var isArray = __webpack_require__(19);
	var isBuf = __webpack_require__(22);
	
	/**
	 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
	 * Anything with blobs or files should be fed through removeBlobs before coming
	 * here.
	 *
	 * @param {Object} packet - socket.io event packet
	 * @return {Object} with deconstructed packet and list of buffers
	 * @api public
	 */
	
	exports.deconstructPacket = function(packet){
	  var buffers = [];
	  var packetData = packet.data;
	
	  function _deconstructPacket(data) {
	    if (!data) return data;
	
	    if (isBuf(data)) {
	      var placeholder = { _placeholder: true, num: buffers.length };
	      buffers.push(data);
	      return placeholder;
	    } else if (isArray(data)) {
	      var newData = new Array(data.length);
	      for (var i = 0; i < data.length; i++) {
	        newData[i] = _deconstructPacket(data[i]);
	      }
	      return newData;
	    } else if ('object' == typeof data && !(data instanceof Date)) {
	      var newData = {};
	      for (var key in data) {
	        newData[key] = _deconstructPacket(data[key]);
	      }
	      return newData;
	    }
	    return data;
	  }
	
	  var pack = packet;
	  pack.data = _deconstructPacket(packetData);
	  pack.attachments = buffers.length; // number of binary 'attachments'
	  return {packet: pack, buffers: buffers};
	};
	
	/**
	 * Reconstructs a binary packet from its placeholder packet and buffers
	 *
	 * @param {Object} packet - event packet with placeholders
	 * @param {Array} buffers - binary buffers to put in placeholder positions
	 * @return {Object} reconstructed packet
	 * @api public
	 */
	
	exports.reconstructPacket = function(packet, buffers) {
	  var curPlaceHolder = 0;
	
	  function _reconstructPacket(data) {
	    if (data && data._placeholder) {
	      var buf = buffers[data.num]; // appropriate buffer (should be natural order anyway)
	      return buf;
	    } else if (isArray(data)) {
	      for (var i = 0; i < data.length; i++) {
	        data[i] = _reconstructPacket(data[i]);
	      }
	      return data;
	    } else if (data && 'object' == typeof data) {
	      for (var key in data) {
	        data[key] = _reconstructPacket(data[key]);
	      }
	      return data;
	    }
	    return data;
	  }
	
	  packet.data = _reconstructPacket(packet.data);
	  packet.attachments = undefined; // no longer useful
	  return packet;
	};
	
	/**
	 * Asynchronously removes Blobs or Files from data via
	 * FileReader's readAsArrayBuffer method. Used before encoding
	 * data as msgpack. Calls callback with the blobless data.
	 *
	 * @param {Object} data
	 * @param {Function} callback
	 * @api private
	 */
	
	exports.removeBlobs = function(data, callback) {
	  function _removeBlobs(obj, curKey, containingObject) {
	    if (!obj) return obj;
	
	    // convert any blob
	    if ((global.Blob && obj instanceof Blob) ||
	        (global.File && obj instanceof File)) {
	      pendingBlobs++;
	
	      // async filereader
	      var fileReader = new FileReader();
	      fileReader.onload = function() { // this.result == arraybuffer
	        if (containingObject) {
	          containingObject[curKey] = this.result;
	        }
	        else {
	          bloblessData = this.result;
	        }
	
	        // if nothing pending its callback time
	        if(! --pendingBlobs) {
	          callback(bloblessData);
	        }
	      };
	
	      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
	    } else if (isArray(obj)) { // handle array
	      for (var i = 0; i < obj.length; i++) {
	        _removeBlobs(obj[i], i, obj);
	      }
	    } else if (obj && 'object' == typeof obj && !isBuf(obj)) { // and object
	      for (var key in obj) {
	        _removeBlobs(obj[key], key, obj);
	      }
	    }
	  }
	
	  var pendingBlobs = 0;
	  var bloblessData = data;
	  _removeBlobs(bloblessData);
	  if (!pendingBlobs) {
	    callback(bloblessData);
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	module.exports = isBuf;
	
	/**
	 * Returns true if obj is a buffer or an arraybuffer.
	 *
	 * @api private
	 */
	
	function isBuf(obj) {
	  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var eio = __webpack_require__(24);
	var Socket = __webpack_require__(49);
	var Emitter = __webpack_require__(50);
	var parser = __webpack_require__(16);
	var on = __webpack_require__(52);
	var bind = __webpack_require__(53);
	var debug = __webpack_require__(13)('socket.io-client:manager');
	var indexOf = __webpack_require__(47);
	var Backoff = __webpack_require__(55);
	
	/**
	 * IE6+ hasOwnProperty
	 */
	
	var has = Object.prototype.hasOwnProperty;
	
	/**
	 * Module exports
	 */
	
	module.exports = Manager;
	
	/**
	 * `Manager` constructor.
	 *
	 * @param {String} engine instance or engine uri/opts
	 * @param {Object} options
	 * @api public
	 */
	
	function Manager(uri, opts){
	  if (!(this instanceof Manager)) return new Manager(uri, opts);
	  if (uri && ('object' == typeof uri)) {
	    opts = uri;
	    uri = undefined;
	  }
	  opts = opts || {};
	
	  opts.path = opts.path || '/socket.io';
	  this.nsps = {};
	  this.subs = [];
	  this.opts = opts;
	  this.reconnection(opts.reconnection !== false);
	  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
	  this.reconnectionDelay(opts.reconnectionDelay || 1000);
	  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
	  this.randomizationFactor(opts.randomizationFactor || 0.5);
	  this.backoff = new Backoff({
	    min: this.reconnectionDelay(),
	    max: this.reconnectionDelayMax(),
	    jitter: this.randomizationFactor()
	  });
	  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
	  this.readyState = 'closed';
	  this.uri = uri;
	  this.connecting = [];
	  this.lastPing = null;
	  this.encoding = false;
	  this.packetBuffer = [];
	  this.encoder = new parser.Encoder();
	  this.decoder = new parser.Decoder();
	  this.autoConnect = opts.autoConnect !== false;
	  if (this.autoConnect) this.open();
	}
	
	/**
	 * Propagate given event to sockets and emit on `this`
	 *
	 * @api private
	 */
	
	Manager.prototype.emitAll = function() {
	  this.emit.apply(this, arguments);
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
	    }
	  }
	};
	
	/**
	 * Update `socket.id` of all sockets
	 *
	 * @api private
	 */
	
	Manager.prototype.updateSocketIds = function(){
	  for (var nsp in this.nsps) {
	    if (has.call(this.nsps, nsp)) {
	      this.nsps[nsp].id = this.engine.id;
	    }
	  }
	};
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Manager.prototype);
	
	/**
	 * Sets the `reconnection` config.
	 *
	 * @param {Boolean} true/false if it should automatically reconnect
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnection = function(v){
	  if (!arguments.length) return this._reconnection;
	  this._reconnection = !!v;
	  return this;
	};
	
	/**
	 * Sets the reconnection attempts config.
	 *
	 * @param {Number} max reconnection attempts before giving up
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionAttempts = function(v){
	  if (!arguments.length) return this._reconnectionAttempts;
	  this._reconnectionAttempts = v;
	  return this;
	};
	
	/**
	 * Sets the delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelay = function(v){
	  if (!arguments.length) return this._reconnectionDelay;
	  this._reconnectionDelay = v;
	  this.backoff && this.backoff.setMin(v);
	  return this;
	};
	
	Manager.prototype.randomizationFactor = function(v){
	  if (!arguments.length) return this._randomizationFactor;
	  this._randomizationFactor = v;
	  this.backoff && this.backoff.setJitter(v);
	  return this;
	};
	
	/**
	 * Sets the maximum delay between reconnections.
	 *
	 * @param {Number} delay
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.reconnectionDelayMax = function(v){
	  if (!arguments.length) return this._reconnectionDelayMax;
	  this._reconnectionDelayMax = v;
	  this.backoff && this.backoff.setMax(v);
	  return this;
	};
	
	/**
	 * Sets the connection timeout. `false` to disable
	 *
	 * @return {Manager} self or value
	 * @api public
	 */
	
	Manager.prototype.timeout = function(v){
	  if (!arguments.length) return this._timeout;
	  this._timeout = v;
	  return this;
	};
	
	/**
	 * Starts trying to reconnect if reconnection is enabled and we have not
	 * started reconnecting yet
	 *
	 * @api private
	 */
	
	Manager.prototype.maybeReconnectOnOpen = function() {
	  // Only try to reconnect if it's the first time we're connecting
	  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
	    // keeps reconnection from firing twice for the same reconnection loop
	    this.reconnect();
	  }
	};
	
	
	/**
	 * Sets the current transport `socket`.
	 *
	 * @param {Function} optional, callback
	 * @return {Manager} self
	 * @api public
	 */
	
	Manager.prototype.open =
	Manager.prototype.connect = function(fn){
	  debug('readyState %s', this.readyState);
	  if (~this.readyState.indexOf('open')) return this;
	
	  debug('opening %s', this.uri);
	  this.engine = eio(this.uri, this.opts);
	  var socket = this.engine;
	  var self = this;
	  this.readyState = 'opening';
	  this.skipReconnect = false;
	
	  // emit `open`
	  var openSub = on(socket, 'open', function() {
	    self.onopen();
	    fn && fn();
	  });
	
	  // emit `connect_error`
	  var errorSub = on(socket, 'error', function(data){
	    debug('connect_error');
	    self.cleanup();
	    self.readyState = 'closed';
	    self.emitAll('connect_error', data);
	    if (fn) {
	      var err = new Error('Connection error');
	      err.data = data;
	      fn(err);
	    } else {
	      // Only do this if there is no fn to handle the error
	      self.maybeReconnectOnOpen();
	    }
	  });
	
	  // emit `connect_timeout`
	  if (false !== this._timeout) {
	    var timeout = this._timeout;
	    debug('connect attempt will timeout after %d', timeout);
	
	    // set timer
	    var timer = setTimeout(function(){
	      debug('connect attempt timed out after %d', timeout);
	      openSub.destroy();
	      socket.close();
	      socket.emit('error', 'timeout');
	      self.emitAll('connect_timeout', timeout);
	    }, timeout);
	
	    this.subs.push({
	      destroy: function(){
	        clearTimeout(timer);
	      }
	    });
	  }
	
	  this.subs.push(openSub);
	  this.subs.push(errorSub);
	
	  return this;
	};
	
	/**
	 * Called upon transport open.
	 *
	 * @api private
	 */
	
	Manager.prototype.onopen = function(){
	  debug('open');
	
	  // clear old subs
	  this.cleanup();
	
	  // mark as open
	  this.readyState = 'open';
	  this.emit('open');
	
	  // add new subs
	  var socket = this.engine;
	  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
	  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
	  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
	  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
	  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
	  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
	};
	
	/**
	 * Called upon a ping.
	 *
	 * @api private
	 */
	
	Manager.prototype.onping = function(){
	  this.lastPing = new Date;
	  this.emitAll('ping');
	};
	
	/**
	 * Called upon a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.onpong = function(){
	  this.emitAll('pong', new Date - this.lastPing);
	};
	
	/**
	 * Called with data.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondata = function(data){
	  this.decoder.add(data);
	};
	
	/**
	 * Called when parser fully decodes a packet.
	 *
	 * @api private
	 */
	
	Manager.prototype.ondecoded = function(packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon socket error.
	 *
	 * @api private
	 */
	
	Manager.prototype.onerror = function(err){
	  debug('error', err);
	  this.emitAll('error', err);
	};
	
	/**
	 * Creates a new socket for the given `nsp`.
	 *
	 * @return {Socket}
	 * @api public
	 */
	
	Manager.prototype.socket = function(nsp){
	  var socket = this.nsps[nsp];
	  if (!socket) {
	    socket = new Socket(this, nsp);
	    this.nsps[nsp] = socket;
	    var self = this;
	    socket.on('connecting', onConnecting);
	    socket.on('connect', function(){
	      socket.id = self.engine.id;
	    });
	
	    if (this.autoConnect) {
	      // manually call here since connecting evnet is fired before listening
	      onConnecting();
	    }
	  }
	
	  function onConnecting() {
	    if (!~indexOf(self.connecting, socket)) {
	      self.connecting.push(socket);
	    }
	  }
	
	  return socket;
	};
	
	/**
	 * Called upon a socket close.
	 *
	 * @param {Socket} socket
	 */
	
	Manager.prototype.destroy = function(socket){
	  var index = indexOf(this.connecting, socket);
	  if (~index) this.connecting.splice(index, 1);
	  if (this.connecting.length) return;
	
	  this.close();
	};
	
	/**
	 * Writes a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Manager.prototype.packet = function(packet){
	  debug('writing packet %j', packet);
	  var self = this;
	
	  if (!self.encoding) {
	    // encode, then write to engine with result
	    self.encoding = true;
	    this.encoder.encode(packet, function(encodedPackets) {
	      for (var i = 0; i < encodedPackets.length; i++) {
	        self.engine.write(encodedPackets[i], packet.options);
	      }
	      self.encoding = false;
	      self.processPacketQueue();
	    });
	  } else { // add packet to the queue
	    self.packetBuffer.push(packet);
	  }
	};
	
	/**
	 * If packet buffer is non-empty, begins encoding the
	 * next packet in line.
	 *
	 * @api private
	 */
	
	Manager.prototype.processPacketQueue = function() {
	  if (this.packetBuffer.length > 0 && !this.encoding) {
	    var pack = this.packetBuffer.shift();
	    this.packet(pack);
	  }
	};
	
	/**
	 * Clean up transport subscriptions and packet buffer.
	 *
	 * @api private
	 */
	
	Manager.prototype.cleanup = function(){
	  debug('cleanup');
	
	  var sub;
	  while (sub = this.subs.shift()) sub.destroy();
	
	  this.packetBuffer = [];
	  this.encoding = false;
	  this.lastPing = null;
	
	  this.decoder.destroy();
	};
	
	/**
	 * Close the current socket.
	 *
	 * @api private
	 */
	
	Manager.prototype.close =
	Manager.prototype.disconnect = function(){
	  debug('disconnect');
	  this.skipReconnect = true;
	  this.reconnecting = false;
	  if ('opening' == this.readyState) {
	    // `onclose` will not fire because
	    // an open event never happened
	    this.cleanup();
	  }
	  this.backoff.reset();
	  this.readyState = 'closed';
	  if (this.engine) this.engine.close();
	};
	
	/**
	 * Called upon engine close.
	 *
	 * @api private
	 */
	
	Manager.prototype.onclose = function(reason){
	  debug('onclose');
	
	  this.cleanup();
	  this.backoff.reset();
	  this.readyState = 'closed';
	  this.emit('close', reason);
	
	  if (this._reconnection && !this.skipReconnect) {
	    this.reconnect();
	  }
	};
	
	/**
	 * Attempt a reconnection.
	 *
	 * @api private
	 */
	
	Manager.prototype.reconnect = function(){
	  if (this.reconnecting || this.skipReconnect) return this;
	
	  var self = this;
	
	  if (this.backoff.attempts >= this._reconnectionAttempts) {
	    debug('reconnect failed');
	    this.backoff.reset();
	    this.emitAll('reconnect_failed');
	    this.reconnecting = false;
	  } else {
	    var delay = this.backoff.duration();
	    debug('will wait %dms before reconnect attempt', delay);
	
	    this.reconnecting = true;
	    var timer = setTimeout(function(){
	      if (self.skipReconnect) return;
	
	      debug('attempting reconnect');
	      self.emitAll('reconnect_attempt', self.backoff.attempts);
	      self.emitAll('reconnecting', self.backoff.attempts);
	
	      // check again for the case socket closed in above events
	      if (self.skipReconnect) return;
	
	      self.open(function(err){
	        if (err) {
	          debug('reconnect attempt error');
	          self.reconnecting = false;
	          self.reconnect();
	          self.emitAll('reconnect_error', err.data);
	        } else {
	          debug('reconnect success');
	          self.onreconnect();
	        }
	      });
	    }, delay);
	
	    this.subs.push({
	      destroy: function(){
	        clearTimeout(timer);
	      }
	    });
	  }
	};
	
	/**
	 * Called upon successful reconnect.
	 *
	 * @api private
	 */
	
	Manager.prototype.onreconnect = function(){
	  var attempt = this.backoff.attempts;
	  this.reconnecting = false;
	  this.backoff.reset();
	  this.updateSocketIds();
	  this.emitAll('reconnect', attempt);
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports =  __webpack_require__(25);


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(26);
	
	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(33);


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */
	
	var transports = __webpack_require__(27);
	var Emitter = __webpack_require__(20);
	var debug = __webpack_require__(13)('engine.io-client:socket');
	var index = __webpack_require__(47);
	var parser = __webpack_require__(33);
	var parseuri = __webpack_require__(12);
	var parsejson = __webpack_require__(48);
	var parseqs = __webpack_require__(41);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Socket;
	
	/**
	 * Noop function.
	 *
	 * @api private
	 */
	
	function noop(){}
	
	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */
	
	function Socket(uri, opts){
	  if (!(this instanceof Socket)) return new Socket(uri, opts);
	
	  opts = opts || {};
	
	  if (uri && 'object' == typeof uri) {
	    opts = uri;
	    uri = null;
	  }
	
	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }
	
	  this.secure = null != opts.secure ? opts.secure :
	    (global.location && 'https:' == location.protocol);
	
	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }
	
	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port ?
	       location.port :
	       (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;
	
	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  var freeGlobal = typeof global == 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	  }
	
	  this.open();
	}
	
	Socket.priorWebsocketSuccess = false;
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Protocol version.
	 *
	 * @api public
	 */
	
	Socket.protocol = parser.protocol; // this is an int
	
	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */
	
	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(32);
	Socket.transports = __webpack_require__(27);
	Socket.parser = __webpack_require__(33);
	
	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */
	
	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);
	
	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;
	
	  // transport name
	  query.transport = name;
	
	  // session id if we already have one
	  if (this.id) query.sid = this.id;
	
	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized,
	    perMessageDeflate: this.perMessageDeflate,
	    extraHeaders: this.extraHeaders
	  });
	
	  return transport;
	};
	
	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}
	
	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function() {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';
	
	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }
	
	  transport.open();
	  this.setTransport(transport);
	};
	
	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */
	
	Socket.prototype.setTransport = function(transport){
	  debug('setting transport %s', transport.name);
	  var self = this;
	
	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }
	
	  // set up transport
	  this.transport = transport;
	
	  // set up transport listeners
	  transport
	  .on('drain', function(){
	    self.onDrain();
	  })
	  .on('packet', function(packet){
	    self.onPacket(packet);
	  })
	  .on('error', function(e){
	    self.onError(e);
	  })
	  .on('close', function(){
	    self.onClose('transport close');
	  });
	};
	
	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */
	
	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 })
	    , failed = false
	    , self = this;
	
	  Socket.priorWebsocketSuccess = false;
	
	  function onTransportOpen(){
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;
	
	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' == msg.type && 'probe' == msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' == transport.name;
	
	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' == self.readyState) return;
	          debug('changing transport and sending upgrade packet');
	
	          cleanup();
	
	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }
	
	  function freezeTransport() {
	    if (failed) return;
	
	    // Any callback called by transport should be ignored since now
	    failed = true;
	
	    cleanup();
	
	    transport.close();
	    transport = null;
	  }
	
	  //Handle any error that happens while probing
	  function onerror(err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;
	
	    freezeTransport();
	
	    debug('probe transport "%s" failed because of error: %s', name, err);
	
	    self.emit('upgradeError', error);
	  }
	
	  function onTransportClose(){
	    onerror("transport closed");
	  }
	
	  //When the socket is closed while we're probing
	  function onclose(){
	    onerror("socket closed");
	  }
	
	  //When the socket is upgraded while we're probing
	  function onupgrade(to){
	    if (transport && to.name != transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }
	
	  //Remove all listeners on the transport and on self
	  function cleanup(){
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }
	
	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);
	
	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);
	
	  transport.open();
	
	};
	
	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */
	
	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
	  this.emit('open');
	  this.flush();
	
	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};
	
	/**
	 * Handles a packet.
	 *
	 * @api private
	 */
	
	Socket.prototype.onPacket = function (packet) {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
	
	    this.emit('packet', packet);
	
	    // Socket is live - any packet counts
	    this.emit('heartbeat');
	
	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;
	
	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;
	
	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;
	
	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};
	
	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */
	
	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if  ('closed' == this.readyState) return;
	  this.setPing();
	
	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};
	
	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */
	
	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' == self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};
	
	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};
	
	/**
	* Sends a ping packet.
	*
	* @api private
	*/
	
	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function(){
	    self.emit('ping');
	  });
	};
	
	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */
	
	Socket.prototype.onDrain = function() {
	  this.writeBuffer.splice(0, this.prevBufferLen);
	
	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;
	
	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};
	
	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */
	
	Socket.prototype.flush = function () {
	  if ('closed' != this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};
	
	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */
	
	Socket.prototype.write =
	Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */
	
	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if('function' == typeof data) {
	    fn = data;
	    data = undefined;
	  }
	
	  if ('function' == typeof options) {
	    fn = options;
	    options = null;
	  }
	
	  if ('closing' == this.readyState || 'closed' == this.readyState) {
	    return;
	  }
	
	  options = options || {};
	  options.compress = false !== options.compress;
	
	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};
	
	/**
	 * Closes the connection.
	 *
	 * @api private
	 */
	
	Socket.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.readyState = 'closing';
	
	    var self = this;
	
	    if (this.writeBuffer.length) {
	      this.once('drain', function() {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }
	
	  function close() {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }
	
	  function cleanupAndClose() {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }
	
	  function waitForUpgrade() {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }
	
	  return this;
	};
	
	/**
	 * Called upon transport error
	 *
	 * @api private
	 */
	
	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};
	
	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */
	
	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;
	
	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);
	
	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');
	
	    // ensure transport won't stay open
	    this.transport.close();
	
	    // ignore further transport communication
	    this.transport.removeAllListeners();
	
	    // set ready state
	    this.readyState = 'closed';
	
	    // clear session id
	    this.id = null;
	
	    // emit close event
	    this.emit('close', reason, desc);
	
	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};
	
	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */
	
	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i<j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */
	
	var XMLHttpRequest = __webpack_require__(28);
	var XHR = __webpack_require__(30);
	var JSONP = __webpack_require__(44);
	var websocket = __webpack_require__(45);
	
	/**
	 * Export transports.
	 */
	
	exports.polling = polling;
	exports.websocket = websocket;
	
	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */
	
	function polling(opts){
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;
	
	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    xd = opts.hostname != location.hostname || port != opts.port;
	    xs = opts.secure != isSSL;
	  }
	
	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);
	
	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// browser shim for xmlhttprequest module
	var hasCORS = __webpack_require__(29);
	
	module.exports = function(opts) {
	  var xdomain = opts.xdomain;
	
	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;
	
	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;
	
	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) { }
	
	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) { }
	
	  if (!xdomain) {
	    try {
	      return new ActiveXObject('Microsoft.XMLHTTP');
	    } catch(e) { }
	  }
	}


/***/ },
/* 29 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */
	
	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' &&
	    'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */
	
	var XMLHttpRequest = __webpack_require__(28);
	var Polling = __webpack_require__(31);
	var Emitter = __webpack_require__(20);
	var inherit = __webpack_require__(42);
	var debug = __webpack_require__(13)('engine.io-client:polling-xhr');
	
	/**
	 * Module exports.
	 */
	
	module.exports = XHR;
	module.exports.Request = Request;
	
	/**
	 * Empty function
	 */
	
	function empty(){}
	
	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function XHR(opts){
	  Polling.call(this, opts);
	
	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;
	
	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }
	
	    this.xd = opts.hostname != global.location.hostname ||
	      port != opts.port;
	    this.xs = opts.secure != isSSL;
	  } else {
	    this.extraHeaders = opts.extraHeaders;
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(XHR, Polling);
	
	/**
	 * XHR supports binary
	 */
	
	XHR.prototype.supportsBinary = true;
	
	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */
	
	XHR.prototype.request = function(opts){
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;
	
	  return new Request(opts);
	};
	
	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	XHR.prototype.doWrite = function(data, fn){
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function(err){
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	XHR.prototype.doPoll = function(){
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function(data){
	    self.onData(data);
	  });
	  req.on('error', function(err){
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};
	
	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */
	
	function Request(opts){
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined != opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	
	  this.create();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Request.prototype);
	
	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */
	
	Request.prototype.create = function(){
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	
	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;
	
	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }
	
	    if ('POST' == this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }
	
	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }
	
	    if (this.hasXDR()) {
	      xhr.onload = function(){
	        self.onLoad();
	      };
	      xhr.onerror = function(){
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function(){
	        if (4 != xhr.readyState) return;
	        if (200 == xhr.status || 1223 == xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function(){
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }
	
	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function() {
	      self.onError(e);
	    }, 0);
	    return;
	  }
	
	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};
	
	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */
	
	Request.prototype.onSuccess = function(){
	  this.emit('success');
	  this.cleanup();
	};
	
	/**
	 * Called if we have data.
	 *
	 * @api private
	 */
	
	Request.prototype.onData = function(data){
	  this.emit('data', data);
	  this.onSuccess();
	};
	
	/**
	 * Called upon error.
	 *
	 * @api private
	 */
	
	Request.prototype.onError = function(err){
	  this.emit('error', err);
	  this.cleanup(true);
	};
	
	/**
	 * Cleans up house.
	 *
	 * @api private
	 */
	
	Request.prototype.cleanup = function(fromError){
	  if ('undefined' == typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }
	
	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch(e) {}
	  }
	
	  if (global.document) {
	    delete Request.requests[this.index];
	  }
	
	  this.xhr = null;
	};
	
	/**
	 * Called upon load.
	 *
	 * @api private
	 */
	
	Request.prototype.onLoad = function(){
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        try {
	          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
	        } catch (e) {
	          var ui8Arr = new Uint8Array(this.xhr.response);
	          var dataArray = [];
	          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
	            dataArray.push(ui8Arr[idx]);
	          }
	
	          data = String.fromCharCode.apply(null, dataArray);
	        }
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};
	
	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */
	
	Request.prototype.hasXDR = function(){
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};
	
	/**
	 * Aborts the request.
	 *
	 * @api public
	 */
	
	Request.prototype.abort = function(){
	  this.cleanup();
	};
	
	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */
	
	if (global.document) {
	  Request.requestsCount = 0;
	  Request.requests = {};
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}
	
	function unloadHandler() {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(32);
	var parseqs = __webpack_require__(41);
	var parser = __webpack_require__(33);
	var inherit = __webpack_require__(42);
	var yeast = __webpack_require__(43);
	var debug = __webpack_require__(13)('engine.io-client:polling');
	
	/**
	 * Module exports.
	 */
	
	module.exports = Polling;
	
	/**
	 * Is XHR2 supported?
	 */
	
	var hasXHR2 = (function() {
	  var XMLHttpRequest = __webpack_require__(28);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();
	
	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */
	
	function Polling(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(Polling, Transport);
	
	/**
	 * Transport name.
	 */
	
	Polling.prototype.name = 'polling';
	
	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */
	
	Polling.prototype.doOpen = function(){
	  this.poll();
	};
	
	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */
	
	Polling.prototype.pause = function(onPause){
	  var pending = 0;
	  var self = this;
	
	  this.readyState = 'pausing';
	
	  function pause(){
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }
	
	  if (this.polling || !this.writable) {
	    var total = 0;
	
	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function(){
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }
	
	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function(){
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};
	
	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */
	
	Polling.prototype.poll = function(){
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};
	
	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */
	
	Polling.prototype.onData = function(data){
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function(packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' == self.readyState) {
	      self.onOpen();
	    }
	
	    // if its a close packet, we close the ongoing requests
	    if ('close' == packet.type) {
	      self.onClose();
	      return false;
	    }
	
	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };
	
	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);
	
	  // if an event did not trigger closing
	  if ('closed' != this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');
	
	    if ('open' == this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};
	
	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */
	
	Polling.prototype.doClose = function(){
	  var self = this;
	
	  function close(){
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }
	
	  if ('open' == this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};
	
	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */
	
	Polling.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	  var callbackfn = function() {
	    self.writable = true;
	    self.emit('drain');
	  };
	
	  var self = this;
	  parser.encodePayload(packets, this.supportsBinary, function(data) {
	    self.doWrite(data, callbackfn);
	  });
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	Polling.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';
	
	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // avoid port if default for schema
	  if (this.port && (('https' == schema && this.port != 443) ||
	     ('http' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(33);
	var Emitter = __webpack_require__(20);
	
	/**
	 * Module exports.
	 */
	
	module.exports = Transport;
	
	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */
	
	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;
	
	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;
	
	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Transport.prototype);
	
	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */
	
	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};
	
	/**
	 * Opens the transport.
	 *
	 * @api public
	 */
	
	Transport.prototype.open = function () {
	  if ('closed' == this.readyState || '' == this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }
	
	  return this;
	};
	
	/**
	 * Closes the transport.
	 *
	 * @api private
	 */
	
	Transport.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.doClose();
	    this.onClose();
	  }
	
	  return this;
	};
	
	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	Transport.prototype.send = function(packets){
	  if ('open' == this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};
	
	/**
	 * Called upon open
	 *
	 * @api private
	 */
	
	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};
	
	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */
	
	Transport.prototype.onData = function(data){
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};
	
	/**
	 * Called with a decoded packet.
	 */
	
	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};
	
	/**
	 * Called upon close.
	 *
	 * @api private
	 */
	
	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */
	
	var keys = __webpack_require__(34);
	var hasBinary = __webpack_require__(35);
	var sliceBuffer = __webpack_require__(36);
	var base64encoder = __webpack_require__(37);
	var after = __webpack_require__(38);
	var utf8 = __webpack_require__(39);
	
	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */
	
	var isAndroid = navigator.userAgent.match(/Android/i);
	
	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);
	
	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;
	
	/**
	 * Current protocol version.
	 */
	
	exports.protocol = 3;
	
	/**
	 * Packet types.
	 */
	
	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};
	
	var packetslist = keys(packets);
	
	/**
	 * Premade error packet.
	 */
	
	var err = { type: 'error', data: 'parser error' };
	
	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */
	
	var Blob = __webpack_require__(40);
	
	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */
	
	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }
	
	  if ('function' == typeof utf8encode) {
	    callback = utf8encode;
	    utf8encode = null;
	  }
	
	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;
	
	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }
	
	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }
	
	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];
	
	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }
	
	  return callback('' + encoded);
	
	};
	
	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}
	
	/**
	 * Encode packet helpers for binary types
	 */
	
	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);
	
	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }
	
	  return callback(resultBuffer.buffer);
	}
	
	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  var fr = new FileReader();
	  fr.onload = function() {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}
	
	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }
	
	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }
	
	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);
	
	  return callback(blob);
	}
	
	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */
	
	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }
	
	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};
	
	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */
	
	exports.decodePacket = function (data, binaryType, utf8decode) {
	  // String data
	  if (typeof data == 'string' || data === undefined) {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }
	
	    if (utf8decode) {
	      try {
	        data = utf8.decode(data);
	      } catch (e) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);
	
	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }
	
	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }
	
	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};
	
	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */
	
	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!global.ArrayBuffer) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }
	
	  var data = base64encoder.decode(msg.substr(1));
	
	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }
	
	  return { type: type, data: data };
	};
	
	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */
	
	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }
	
	  var isBinary = hasBinary(packets);
	
	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }
	
	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }
	
	  if (!packets.length) {
	    return callback('0:');
	  }
	
	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }
	
	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};
	
	/**
	 * Async array map using after
	 */
	
	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);
	
	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };
	
	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}
	
	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */
	
	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data != 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }
	
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	  var length = ''
	    , n, msg;
	
	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);
	
	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || (length != (n = Number(length)))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      msg = data.substr(i + 1, n);
	
	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }
	
	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);
	
	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }
	
	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }
	
	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }
	
	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }
	
	};
	
	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */
	
	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }
	
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }
	
	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);
	
	    var resultArray = new Uint8Array(totalLength);
	
	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }
	
	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }
	
	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;
	
	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });
	
	    return callback(resultArray.buffer);
	  });
	};
	
	/**
	 * Encode as Blob
	 */
	
	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }
	
	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;
	
	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;
	
	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }
	
	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};
	
	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */
	
	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }
	
	  var bufferTail = data;
	  var buffers = [];
	
	  var numberTooLong = false;
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';
	
	    for (var i = 1; ; i++) {
	      if (tailArray[i] == 255) break;
	
	      if (msgLength.length > 310) {
	        numberTooLong = true;
	        break;
	      }
	
	      msgLength += tailArray[i];
	    }
	
	    if(numberTooLong) return callback(err, 0, 1);
	
	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);
	
	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }
	
	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }
	
	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 34 */
/***/ function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */
	
	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;
	
	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(19);
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary(data) {
	
	  function _hasBinary(obj) {
	    if (!obj) return false;
	
	    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }
	
	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }
	
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }
	
	    return false;
	  }
	
	  return _hasBinary(data);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */
	
	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;
	
	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }
	
	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }
	
	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }
	
	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(chars){
	  "use strict";
	
	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";
	
	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }
	
	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }
	
	    return base64;
	  };
	
	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;
	
	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }
	
	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);
	
	    for (i = 0; i < len; i+=4) {
	      encoded1 = chars.indexOf(base64[i]);
	      encoded2 = chars.indexOf(base64[i+1]);
	      encoded3 = chars.indexOf(base64[i+2]);
	      encoded4 = chars.indexOf(base64[i+3]);
	
	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }
	
	    return arraybuffer;
	  };
	})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");


/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = after
	
	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count
	
	    return (count === 0) ? callback() : proxy
	
	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count
	
	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}
	
	function noop() {}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/utf8js v2.0.0 by @mathias */
	;(function(root) {
	
		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;
	
		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;
	
		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}
	
		/*--------------------------------------------------------------------------*/
	
		var stringFromCharCode = String.fromCharCode;
	
		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}
	
		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}
	
		function checkScalarValue(codePoint) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
		}
		/*--------------------------------------------------------------------------*/
	
		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}
	
		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				checkScalarValue(codePoint);
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}
	
		function utf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}
	
		/*--------------------------------------------------------------------------*/
	
		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}
	
			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}
	
			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}
	
		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;
	
			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}
	
			if (byteIndex == byteCount) {
				return false;
			}
	
			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;
	
			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}
	
			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					checkScalarValue(codePoint);
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}
	
			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}
	
			throw Error('Invalid UTF-8 detected');
		}
	
		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}
	
		/*--------------------------------------------------------------------------*/
	
		var utf8 = {
			'version': '2.0.0',
			'encode': utf8encode,
			'decode': utf8decode
		};
	
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.utf8 = utf8;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module), (function() { return this; }())))

/***/ },
/* 40 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Create a blob builder even when vendor prefixes exist
	 */
	
	var BlobBuilder = global.BlobBuilder
	  || global.WebKitBlobBuilder
	  || global.MSBlobBuilder
	  || global.MozBlobBuilder;
	
	/**
	 * Check if Blob constructor is supported
	 */
	
	var blobSupported = (function() {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();
	
	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */
	
	var blobSupportsArrayBufferView = blobSupported && (function() {
	  try {
	    var b = new Blob([new Uint8Array([1,2])]);
	    return b.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();
	
	/**
	 * Check if BlobBuilder is supported
	 */
	
	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;
	
	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */
	
	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;
	
	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }
	
	      ary[i] = buf;
	    }
	  }
	}
	
	function BlobBuilderConstructor(ary, options) {
	  options = options || {};
	
	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);
	
	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }
	
	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};
	
	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};
	
	module.exports = (function() {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */
	
	exports.encode = function (obj) {
	  var str = '';
	
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }
	
	  return str;
	};
	
	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */
	
	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ },
/* 42 */
/***/ function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';
	
	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
	  , length = 64
	  , map = {}
	  , seed = 0
	  , i = 0
	  , prev;
	
	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';
	
	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);
	
	  return encoded;
	}
	
	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;
	
	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }
	
	  return decoded;
	}
	
	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());
	
	  if (now !== prev) return seed = 0, prev = now;
	  return now +'.'+ encode(seed++);
	}
	
	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;
	
	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */
	
	var Polling = __webpack_require__(31);
	var inherit = __webpack_require__(42);
	
	/**
	 * Module exports.
	 */
	
	module.exports = JSONPPolling;
	
	/**
	 * Cached regular expressions.
	 */
	
	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;
	
	/**
	 * Global JSONP callbacks.
	 */
	
	var callbacks;
	
	/**
	 * Callbacks count.
	 */
	
	var index = 0;
	
	/**
	 * Noop.
	 */
	
	function empty () { }
	
	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */
	
	function JSONPPolling (opts) {
	  Polling.call(this, opts);
	
	  this.query = this.query || {};
	
	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }
	
	  // callback identifier
	  this.index = callbacks.length;
	
	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });
	
	  // append to query string
	  this.query.j = this.index;
	
	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}
	
	/**
	 * Inherits from Polling.
	 */
	
	inherit(JSONPPolling, Polling);
	
	/*
	 * JSONP only supports binary as base64 encoded strings
	 */
	
	JSONPPolling.prototype.supportsBinary = false;
	
	/**
	 * Closes the socket.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }
	
	  Polling.prototype.doClose.call(this);
	};
	
	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */
	
	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');
	
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }
	
	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function(e){
	    self.onError('jsonp poll error',e);
	  };
	
	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  }
	  else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;
	
	  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
	  
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};
	
	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */
	
	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;
	
	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;
	
	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);
	
	    this.form = form;
	    this.area = area;
	  }
	
	  this.form.action = this.uri();
	
	  function complete () {
	    initIframe();
	    fn();
	  }
	
	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }
	
	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }
	
	    iframe.id = self.iframeId;
	
	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }
	
	  initIframe();
	
	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');
	
	  try {
	    this.form.submit();
	  } catch(e) {}
	
	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function(){
	      if (self.iframe.readyState == 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */
	
	var Transport = __webpack_require__(32);
	var parser = __webpack_require__(33);
	var parseqs = __webpack_require__(41);
	var inherit = __webpack_require__(42);
	var yeast = __webpack_require__(43);
	var debug = __webpack_require__(13)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
	
	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */
	
	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  try {
	    WebSocket = __webpack_require__(46);
	  } catch (e) { }
	}
	
	/**
	 * Module exports.
	 */
	
	module.exports = WS;
	
	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */
	
	function WS(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  Transport.call(this, opts);
	}
	
	/**
	 * Inherits from Transport.
	 */
	
	inherit(WS, Transport);
	
	/**
	 * Transport name.
	 *
	 * @api public
	 */
	
	WS.prototype.name = 'websocket';
	
	/*
	 * WebSockets support binary
	 */
	
	WS.prototype.supportsBinary = true;
	
	/**
	 * Opens socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doOpen = function(){
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }
	
	  var self = this;
	  var uri = this.uri();
	  var protocols = void(0);
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };
	
	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }
	
	  this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
	
	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }
	
	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'buffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }
	
	  this.addEventListeners();
	};
	
	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */
	
	WS.prototype.addEventListeners = function(){
	  var self = this;
	
	  this.ws.onopen = function(){
	    self.onOpen();
	  };
	  this.ws.onclose = function(){
	    self.onClose();
	  };
	  this.ws.onmessage = function(ev){
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function(e){
	    self.onError('websocket error', e);
	  };
	};
	
	/**
	 * Override `onData` to use a timer on iOS.
	 * See: https://gist.github.com/mloughran/2052006
	 *
	 * @api private
	 */
	
	if ('undefined' != typeof navigator
	  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
	  WS.prototype.onData = function(data){
	    var self = this;
	    setTimeout(function(){
	      Transport.prototype.onData.call(self, data);
	    }, 0);
	  };
	}
	
	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */
	
	WS.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	
	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function(packet) {
	      parser.encodePacket(packet, self.supportsBinary, function(data) {
	        if (!BrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }
	
	          if (self.perMessageDeflate) {
	            var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }
	
	        //Sometimes the websocket has already been closed but the browser didn't
	        //have a chance of informing us about it yet, in that case send will
	        //throw an error
	        try {
	          if (BrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e){
	          debug('websocket closed before onclose event');
	        }
	
	        --total || done();
	      });
	    })(packets[i]);
	  }
	
	  function done(){
	    self.emit('flush');
	
	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function(){
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};
	
	/**
	 * Called upon close
	 *
	 * @api private
	 */
	
	WS.prototype.onClose = function(){
	  Transport.prototype.onClose.call(this);
	};
	
	/**
	 * Closes socket.
	 *
	 * @api private
	 */
	
	WS.prototype.doClose = function(){
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};
	
	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */
	
	WS.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';
	
	  // avoid port if default for schema
	  if (this.port && (('wss' == schema && this.port != 443)
	    || ('ws' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }
	
	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }
	
	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }
	
	  query = parseqs.encode(query);
	
	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }
	
	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};
	
	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */
	
	WS.prototype.check = function(){
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 46 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 47 */
/***/ function(module, exports) {

	
	var indexOf = [].indexOf;
	
	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */
	
	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;
	
	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }
	
	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');
	
	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }
	
	  if (rvalidchars.test(data.replace(rvalidescape, '@')
	      .replace(rvalidtokens, ']')
	      .replace(rvalidbraces, ''))) {
	    return (new Function('return ' + data))();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */
	
	var parser = __webpack_require__(16);
	var Emitter = __webpack_require__(50);
	var toArray = __webpack_require__(51);
	var on = __webpack_require__(52);
	var bind = __webpack_require__(53);
	var debug = __webpack_require__(13)('socket.io-client:socket');
	var hasBin = __webpack_require__(54);
	
	/**
	 * Module exports.
	 */
	
	module.exports = exports = Socket;
	
	/**
	 * Internal events (blacklisted).
	 * These events can't be emitted by the user.
	 *
	 * @api private
	 */
	
	var events = {
	  connect: 1,
	  connect_error: 1,
	  connect_timeout: 1,
	  connecting: 1,
	  disconnect: 1,
	  error: 1,
	  reconnect: 1,
	  reconnect_attempt: 1,
	  reconnect_failed: 1,
	  reconnect_error: 1,
	  reconnecting: 1,
	  ping: 1,
	  pong: 1
	};
	
	/**
	 * Shortcut to `Emitter#emit`.
	 */
	
	var emit = Emitter.prototype.emit;
	
	/**
	 * `Socket` constructor.
	 *
	 * @api public
	 */
	
	function Socket(io, nsp){
	  this.io = io;
	  this.nsp = nsp;
	  this.json = this; // compat
	  this.ids = 0;
	  this.acks = {};
	  this.receiveBuffer = [];
	  this.sendBuffer = [];
	  this.connected = false;
	  this.disconnected = true;
	  if (this.io.autoConnect) this.open();
	}
	
	/**
	 * Mix in `Emitter`.
	 */
	
	Emitter(Socket.prototype);
	
	/**
	 * Subscribe to open, close and packet events
	 *
	 * @api private
	 */
	
	Socket.prototype.subEvents = function() {
	  if (this.subs) return;
	
	  var io = this.io;
	  this.subs = [
	    on(io, 'open', bind(this, 'onopen')),
	    on(io, 'packet', bind(this, 'onpacket')),
	    on(io, 'close', bind(this, 'onclose'))
	  ];
	};
	
	/**
	 * "Opens" the socket.
	 *
	 * @api public
	 */
	
	Socket.prototype.open =
	Socket.prototype.connect = function(){
	  if (this.connected) return this;
	
	  this.subEvents();
	  this.io.open(); // ensure open
	  if ('open' == this.io.readyState) this.onopen();
	  this.emit('connecting');
	  return this;
	};
	
	/**
	 * Sends a `message` event.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.send = function(){
	  var args = toArray(arguments);
	  args.unshift('message');
	  this.emit.apply(this, args);
	  return this;
	};
	
	/**
	 * Override `emit`.
	 * If the event is in `events`, it's emitted normally.
	 *
	 * @param {String} event name
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.emit = function(ev){
	  if (events.hasOwnProperty(ev)) {
	    emit.apply(this, arguments);
	    return this;
	  }
	
	  var args = toArray(arguments);
	  var parserType = parser.EVENT; // default
	  if (hasBin(args)) { parserType = parser.BINARY_EVENT; } // binary
	  var packet = { type: parserType, data: args };
	
	  packet.options = {};
	  packet.options.compress = !this.flags || false !== this.flags.compress;
	
	  // event ack callback
	  if ('function' == typeof args[args.length - 1]) {
	    debug('emitting packet with ack id %d', this.ids);
	    this.acks[this.ids] = args.pop();
	    packet.id = this.ids++;
	  }
	
	  if (this.connected) {
	    this.packet(packet);
	  } else {
	    this.sendBuffer.push(packet);
	  }
	
	  delete this.flags;
	
	  return this;
	};
	
	/**
	 * Sends a packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.packet = function(packet){
	  packet.nsp = this.nsp;
	  this.io.packet(packet);
	};
	
	/**
	 * Called upon engine `open`.
	 *
	 * @api private
	 */
	
	Socket.prototype.onopen = function(){
	  debug('transport is open - connecting');
	
	  // write connect packet if necessary
	  if ('/' != this.nsp) {
	    this.packet({ type: parser.CONNECT });
	  }
	};
	
	/**
	 * Called upon engine `close`.
	 *
	 * @param {String} reason
	 * @api private
	 */
	
	Socket.prototype.onclose = function(reason){
	  debug('close (%s)', reason);
	  this.connected = false;
	  this.disconnected = true;
	  delete this.id;
	  this.emit('disconnect', reason);
	};
	
	/**
	 * Called with socket packet.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onpacket = function(packet){
	  if (packet.nsp != this.nsp) return;
	
	  switch (packet.type) {
	    case parser.CONNECT:
	      this.onconnect();
	      break;
	
	    case parser.EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.BINARY_EVENT:
	      this.onevent(packet);
	      break;
	
	    case parser.ACK:
	      this.onack(packet);
	      break;
	
	    case parser.BINARY_ACK:
	      this.onack(packet);
	      break;
	
	    case parser.DISCONNECT:
	      this.ondisconnect();
	      break;
	
	    case parser.ERROR:
	      this.emit('error', packet.data);
	      break;
	  }
	};
	
	/**
	 * Called upon a server event.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onevent = function(packet){
	  var args = packet.data || [];
	  debug('emitting event %j', args);
	
	  if (null != packet.id) {
	    debug('attaching ack callback to event');
	    args.push(this.ack(packet.id));
	  }
	
	  if (this.connected) {
	    emit.apply(this, args);
	  } else {
	    this.receiveBuffer.push(args);
	  }
	};
	
	/**
	 * Produces an ack callback to emit with an event.
	 *
	 * @api private
	 */
	
	Socket.prototype.ack = function(id){
	  var self = this;
	  var sent = false;
	  return function(){
	    // prevent double callbacks
	    if (sent) return;
	    sent = true;
	    var args = toArray(arguments);
	    debug('sending ack %j', args);
	
	    var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
	    self.packet({
	      type: type,
	      id: id,
	      data: args
	    });
	  };
	};
	
	/**
	 * Called upon a server acknowlegement.
	 *
	 * @param {Object} packet
	 * @api private
	 */
	
	Socket.prototype.onack = function(packet){
	  var ack = this.acks[packet.id];
	  if ('function' == typeof ack) {
	    debug('calling ack %s with %j', packet.id, packet.data);
	    ack.apply(this, packet.data);
	    delete this.acks[packet.id];
	  } else {
	    debug('bad ack %s', packet.id);
	  }
	};
	
	/**
	 * Called upon server connect.
	 *
	 * @api private
	 */
	
	Socket.prototype.onconnect = function(){
	  this.connected = true;
	  this.disconnected = false;
	  this.emit('connect');
	  this.emitBuffered();
	};
	
	/**
	 * Emit buffered events (received and emitted).
	 *
	 * @api private
	 */
	
	Socket.prototype.emitBuffered = function(){
	  var i;
	  for (i = 0; i < this.receiveBuffer.length; i++) {
	    emit.apply(this, this.receiveBuffer[i]);
	  }
	  this.receiveBuffer = [];
	
	  for (i = 0; i < this.sendBuffer.length; i++) {
	    this.packet(this.sendBuffer[i]);
	  }
	  this.sendBuffer = [];
	};
	
	/**
	 * Called upon server disconnect.
	 *
	 * @api private
	 */
	
	Socket.prototype.ondisconnect = function(){
	  debug('server disconnect (%s)', this.nsp);
	  this.destroy();
	  this.onclose('io server disconnect');
	};
	
	/**
	 * Called upon forced client/server side disconnections,
	 * this method ensures the manager stops tracking us and
	 * that reconnections don't get triggered for this.
	 *
	 * @api private.
	 */
	
	Socket.prototype.destroy = function(){
	  if (this.subs) {
	    // clean subscriptions to avoid reconnections
	    for (var i = 0; i < this.subs.length; i++) {
	      this.subs[i].destroy();
	    }
	    this.subs = null;
	  }
	
	  this.io.destroy(this);
	};
	
	/**
	 * Disconnects the socket manually.
	 *
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.close =
	Socket.prototype.disconnect = function(){
	  if (this.connected) {
	    debug('performing disconnect (%s)', this.nsp);
	    this.packet({ type: parser.DISCONNECT });
	  }
	
	  // remove socket from pool
	  this.destroy();
	
	  if (this.connected) {
	    // fire events
	    this.onclose('io client disconnect');
	  }
	  return this;
	};
	
	/**
	 * Sets the compress flag.
	 *
	 * @param {Boolean} if `true`, compresses the sending data
	 * @return {Socket} self
	 * @api public
	 */
	
	Socket.prototype.compress = function(compress){
	  this.flags = this.flags || {};
	  this.flags.compress = compress;
	  return this;
	};


/***/ },
/* 50 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	module.exports = Emitter;
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = toArray
	
	function toArray(list, index) {
	    var array = []
	
	    index = index || 0
	
	    for (var i = index || 0; i < list.length; i++) {
	        array[i - index] = list[i]
	    }
	
	    return array
	}


/***/ },
/* 52 */
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 */
	
	module.exports = on;
	
	/**
	 * Helper for subscriptions.
	 *
	 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
	 * @param {String} event name
	 * @param {Function} callback
	 * @api public
	 */
	
	function on(obj, ev, fn) {
	  obj.on(ev, fn);
	  return {
	    destroy: function(){
	      obj.removeListener(ev, fn);
	    }
	  };
	}


/***/ },
/* 53 */
/***/ function(module, exports) {

	/**
	 * Slice reference.
	 */
	
	var slice = [].slice;
	
	/**
	 * Bind `obj` to `fn`.
	 *
	 * @param {Object} obj
	 * @param {Function|String} fn or string
	 * @return {Function}
	 * @api public
	 */
	
	module.exports = function(obj, fn){
	  if ('string' == typeof fn) fn = obj[fn];
	  if ('function' != typeof fn) throw new Error('bind() requires a function');
	  var args = slice.call(arguments, 2);
	  return function(){
	    return fn.apply(obj, args.concat(slice.call(arguments)));
	  }
	};


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */
	
	var isArray = __webpack_require__(19);
	
	/**
	 * Module exports.
	 */
	
	module.exports = hasBinary;
	
	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */
	
	function hasBinary(data) {
	
	  function _hasBinary(obj) {
	    if (!obj) return false;
	
	    if ( (global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }
	
	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      // see: https://github.com/Automattic/has-binary/pull/4
	      if (obj.toJSON && 'function' == typeof obj.toJSON) {
	        obj = obj.toJSON();
	      }
	
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }
	
	    return false;
	  }
	
	  return _hasBinary(data);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 55 */
/***/ function(module, exports) {

	
	/**
	 * Expose `Backoff`.
	 */
	
	module.exports = Backoff;
	
	/**
	 * Initialize backoff timer with `opts`.
	 *
	 * - `min` initial timeout in milliseconds [100]
	 * - `max` max timeout [10000]
	 * - `jitter` [0]
	 * - `factor` [2]
	 *
	 * @param {Object} opts
	 * @api public
	 */
	
	function Backoff(opts) {
	  opts = opts || {};
	  this.ms = opts.min || 100;
	  this.max = opts.max || 10000;
	  this.factor = opts.factor || 2;
	  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
	  this.attempts = 0;
	}
	
	/**
	 * Return the backoff duration.
	 *
	 * @return {Number}
	 * @api public
	 */
	
	Backoff.prototype.duration = function(){
	  var ms = this.ms * Math.pow(this.factor, this.attempts++);
	  if (this.jitter) {
	    var rand =  Math.random();
	    var deviation = Math.floor(rand * this.jitter * ms);
	    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
	  }
	  return Math.min(ms, this.max) | 0;
	};
	
	/**
	 * Reset the number of attempts.
	 *
	 * @api public
	 */
	
	Backoff.prototype.reset = function(){
	  this.attempts = 0;
	};
	
	/**
	 * Set the minimum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMin = function(min){
	  this.ms = min;
	};
	
	/**
	 * Set the maximum duration
	 *
	 * @api public
	 */
	
	Backoff.prototype.setMax = function(max){
	  this.max = max;
	};
	
	/**
	 * Set the jitter
	 *
	 * @api public
	 */
	
	Backoff.prototype.setJitter = function(jitter){
	  this.jitter = jitter;
	};
	


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _client = __webpack_require__(57);
	
	var _client2 = _interopRequireDefault(_client);
	
	var _client3 = __webpack_require__(74);
	
	var _client4 = _interopRequireDefault(_client3);
	
	var _client5 = __webpack_require__(86);
	
	var _client6 = _interopRequireDefault(_client5);
	
	var _client7 = __webpack_require__(92);
	
	var _client8 = _interopRequireDefault(_client7);
	
	var _feathersHooks = __webpack_require__(94);
	
	var _feathersHooks2 = _interopRequireDefault(_feathersHooks);
	
	var _client9 = __webpack_require__(97);
	
	var _client10 = _interopRequireDefault(_client9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Object.assign(_client2.default, { socketio: _client6.default, primus: _client8.default, rest: _client4.default, hooks: _feathersHooks2.default, authentication: _client10.default });
	
	exports.default = _client2.default;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(58);


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createApplication;
	
	var _feathers = __webpack_require__(59);
	
	var _feathers2 = _interopRequireDefault(_feathers);
	
	var _express = __webpack_require__(73);
	
	var _express2 = _interopRequireDefault(_express);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createApplication() {
	  return (0, _feathers2.default)(_express2.default.apply(undefined, arguments));
	}
	
	createApplication.version = '2.0.1';
	module.exports = exports['default'];

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createApplication;
	
	var _uberproto = __webpack_require__(60);
	
	var _uberproto2 = _interopRequireDefault(_uberproto);
	
	var _application = __webpack_require__(61);
	
	var _application2 = _interopRequireDefault(_application);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Create a Feathers application that extends Express.
	 *
	 * @return {Function}
	 * @api public
	 */
	function createApplication(app) {
	  _uberproto2.default.mixin(_application2.default, app);
	  app.init();
	  return app;
	}
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define */
	/**
	 * A base object for ECMAScript 5 style prototypal inheritance.
	 *
	 * @see https://github.com/rauschma/proto-js/
	 * @see http://ejohn.org/blog/simple-javascript-inheritance/
	 * @see http://uxebu.com/blog/2011/02/23/object-based-inheritance-for-ecmascript-5/
	 */
	(function (root, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			root.Proto = factory();
		}
	}(this, function () {
	
		function makeSuper(_super, old, name, fn) {
			return function () {
				var tmp = this._super;
	
				// Add a new ._super() method that is the same method
				// but either pointing to the prototype method
				// or to the overwritten method
				this._super = (typeof old === 'function') ? old : _super[name];
	
				// The method only need to be bound temporarily, so we
				// remove it when we're done executing
				var ret = fn.apply(this, arguments);
				this._super = tmp;
	
				return ret;
			};
		}
	
		function legacyMixin(prop, obj) {
			var self = obj || this;
			var fnTest = /\b_super\b/;
			var _super = Object.getPrototypeOf(self) || self.prototype;
			var _old;
	
			// Copy the properties over
			for (var name in prop) {
				// store the old function which would be overwritten
				_old = self[name];
	
				// Check if we're overwriting an existing function
				if(
						((
							typeof prop[name] === 'function' &&
							typeof _super[name] === 'function'
						) || (
							typeof _old === 'function' &&
							typeof prop[name] === 'function'
						)) && fnTest.test(prop[name])
				) {
					self[name] = makeSuper(_super, _old, name, prop[name]);
				} else {
					self[name] = prop[name];
				}
			}
	
			return self;
		}
	
		function es5Mixin(prop, obj) {
			var self = obj || this;
			var fnTest = /\b_super\b/;
			var _super = Object.getPrototypeOf(self) || self.prototype;
			var descriptors = {};
			var proto = prop;
			var processProperty = function(name) {
				if(!descriptors[name]) {
					descriptors[name] = Object.getOwnPropertyDescriptor(proto, name);
				}
			};
	
			// Collect all property descriptors
			do {
				Object.getOwnPropertyNames(proto).forEach(processProperty);
	    } while((proto = Object.getPrototypeOf(proto)) && Object.getPrototypeOf(proto));
			
			Object.keys(descriptors).forEach(function(name) {
				var descriptor = descriptors[name];
	
				if(typeof descriptor.value === 'function' && fnTest.test(descriptor.value)) {
					descriptor.value = makeSuper(_super, self[name], name, descriptor.value);
				}
	
				Object.defineProperty(self, name, descriptor);
			});
	
			return self;
		}
	
		return {
			/**
			 * Create a new object using Object.create. The arguments will be
			 * passed to the new instances init method or to a method name set in
			 * __init.
			 */
			create: function () {
				var instance = Object.create(this);
				var init = typeof instance.__init === 'string' ? instance.__init : 'init';
	
				if (typeof instance[init] === 'function') {
					instance[init].apply(instance, arguments);
				}
				return instance;
			},
			/**
			 * Mixin a given set of properties
			 * @param prop The properties to mix in
			 * @param obj [optional] The object to add the mixin
			 */
			mixin: typeof Object.defineProperty === 'function' ? es5Mixin : legacyMixin,
			/**
			 * Extend the current or a given object with the given property
			 * and return the extended object.
			 * @param prop The properties to extend with
			 * @param obj [optional] The object to extend from
			 * @returns The extended object
			 */
			extend: function (prop, obj) {
				return this.mixin(prop, Object.create(obj || this));
			},
			/**
			 * Return a callback function with this set to the current or a given context object.
			 * @param name Name of the method to proxy
			 * @param args... [optional] Arguments to use for partial application
			 */
			proxy: function (name) {
				var fn = this[name];
				var args = Array.prototype.slice.call(arguments, 1);
	
				args.unshift(this);
				return fn.bind.apply(fn, args);
			}
		};
	
	}));


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _debug = __webpack_require__(13);
	
	var _debug2 = _interopRequireDefault(_debug);
	
	var _feathersCommons = __webpack_require__(62);
	
	var _uberproto = __webpack_require__(60);
	
	var _uberproto2 = _interopRequireDefault(_uberproto);
	
	var _index = __webpack_require__(66);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var debug = (0, _debug2.default)('feathers:application');
	var methods = ['find', 'get', 'create', 'update', 'patch', 'remove'];
	var Proto = _uberproto2.default.extend({
	  create: null
	});
	
	exports.default = {
	  init: function init() {
	    Object.assign(this, {
	      methods: methods,
	      mixins: (0, _index2.default)(),
	      services: {},
	      providers: [],
	      _setup: false
	    });
	  },
	  service: function service(location, _service) {
	    var _this = this;
	
	    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	    location = (0, _feathersCommons.stripSlashes)(location);
	
	    if (!_service) {
	      var current = this.services[location];
	
	      if (typeof current === 'undefined' && typeof this.defaultService === 'function') {
	        return this.service(location, this.defaultService(location), options);
	      }
	
	      return current;
	    }
	
	    var protoService = Proto.extend(_service);
	
	    debug('Registering new service at `' + location + '`');
	
	    // Add all the mixins
	    this.mixins.forEach(function (fn) {
	      return fn.call(_this, protoService);
	    });
	
	    if (typeof protoService._setup === 'function') {
	      protoService._setup(this, location);
	    }
	
	    // Run the provider functions to register the service
	    this.providers.forEach(function (provider) {
	      return provider.call(_this, location, protoService, options);
	    });
	
	    // If we ran setup already, set this service up explicitly
	    if (this._isSetup && typeof protoService.setup === 'function') {
	      debug('Setting up service for `' + location + '`');
	      protoService.setup(this, location);
	    }
	
	    return this.services[location] = protoService;
	  },
	  use: function use(location) {
	    var service = void 0,
	        middleware = Array.from(arguments).slice(1).reduce(function (middleware, arg) {
	      if (typeof arg === 'function') {
	        middleware[service ? 'after' : 'before'].push(arg);
	      } else if (!service) {
	        service = arg;
	      } else {
	        throw new Error('invalid arg passed to app.use');
	      }
	      return middleware;
	    }, {
	      before: [],
	      after: []
	    });
	
	    var hasMethod = function hasMethod(methods) {
	      return methods.some(function (name) {
	        return service && typeof service[name] === 'function';
	      });
	    };
	
	    // Check for service (any object with at least one service method)
	    if (hasMethod(['handle', 'set']) || !hasMethod(this.methods.concat('setup'))) {
	      return this._super.apply(this, arguments);
	    }
	
	    // Any arguments left over are other middleware that we want to pass to the providers
	    this.service(location, service, { middleware: middleware });
	
	    return this;
	  },
	  setup: function setup() {
	    var _this2 = this;
	
	    // Setup each service (pass the app so that they can look up other services etc.)
	    Object.keys(this.services).forEach(function (path) {
	      var service = _this2.services[path];
	
	      debug('Setting up service for `' + path + '`');
	      if (typeof service.setup === 'function') {
	        service.setup(_this2, path);
	      }
	    });
	
	    this._isSetup = true;
	
	    return this;
	  },
	
	
	  // Express 3.x configure is gone in 4.x but we'll keep a more basic version
	  // That just takes a function in order to keep Feathers plugin configuration easier.
	  // Environment specific configurations should be done as suggested in the 4.x migration guide:
	  // https://github.com/visionmedia/express/wiki/Migrating-from-3.x-to-4.x
	  configure: function configure(fn) {
	    fn.call(this);
	
	    return this;
	  },
	  listen: function listen() {
	    var server = this._super.apply(this, arguments);
	
	    this.setup(server);
	    debug('Feathers application listening');
	
	    return server;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _arguments = __webpack_require__(63);
	
	var _arguments2 = _interopRequireDefault(_arguments);
	
	var _utils = __webpack_require__(64);
	
	var _hooks = __webpack_require__(65);
	
	var _hooks2 = _interopRequireDefault(_hooks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  getArguments: _arguments2.default,
	  stripSlashes: _utils.stripSlashes,
	  each: _utils.each,
	  hooks: _hooks2.default,
	  matcher: _utils.matcher,
	  sorter: _utils.sorter
	};
	module.exports = exports['default'];

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.default = getArguments;
	var noop = exports.noop = function noop() {};
	var getCallback = function getCallback(args) {
	  var last = args[args.length - 1];
	  return typeof last === 'function' ? last : noop;
	};
	var getParams = function getParams(args, position) {
	  return _typeof(args[position]) === 'object' ? args[position] : {};
	};
	
	var updateOrPatch = function updateOrPatch(name) {
	  return function (args) {
	    var id = args[0];
	    var data = args[1];
	    var callback = getCallback(args);
	    var params = getParams(args, 2);
	
	    if (typeof id === 'function') {
	      throw new Error('First parameter for \'' + name + '\' can not be a function');
	    }
	
	    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
	      throw new Error('No data provided for \'' + name + '\'');
	    }
	
	    if (args.length > 4) {
	      throw new Error('Too many arguments for \'' + name + '\' service method');
	    }
	
	    return [id, data, params, callback];
	  };
	};
	
	var getOrRemove = function getOrRemove(name) {
	  return function (args) {
	    var id = args[0];
	    var params = getParams(args, 1);
	    var callback = getCallback(args);
	
	    if (args.length > 3) {
	      throw new Error('Too many arguments for \'' + name + '\' service method');
	    }
	
	    if (typeof id === 'function') {
	      throw new Error('First parameter for \'' + name + '\' can not be a function');
	    }
	
	    return [id, params, callback];
	  };
	};
	
	var converters = exports.converters = {
	  find: function find(args) {
	    var callback = getCallback(args);
	    var params = getParams(args, 0);
	
	    if (args.length > 2) {
	      throw new Error('Too many arguments for \'find\' service method');
	    }
	
	    return [params, callback];
	  },
	  create: function create(args) {
	    var data = args[0];
	    var params = getParams(args, 1);
	    var callback = getCallback(args);
	
	    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
	      throw new Error('First parameter for \'create\' must be an object');
	    }
	
	    if (args.length > 3) {
	      throw new Error('Too many arguments for \'create\' service method');
	    }
	
	    return [data, params, callback];
	  },
	
	
	  update: updateOrPatch('update'),
	
	  patch: updateOrPatch('patch'),
	
	  get: getOrRemove('get'),
	
	  remove: getOrRemove('remove')
	};
	
	function getArguments(method, args) {
	  return converters[method](args);
	}

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.stripSlashes = stripSlashes;
	exports.each = each;
	exports.matcher = matcher;
	exports.sorter = sorter;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function stripSlashes(name) {
	  return name.replace(/^(\/*)|(\/*)$/g, '');
	}
	
	function each(obj, callback) {
	  if (obj && typeof obj.forEach === 'function') {
	    obj.forEach(callback);
	  } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	    Object.keys(obj).forEach(function (key) {
	      return callback(obj[key], key);
	    });
	  }
	}
	
	var _ = exports._ = {
	  some: function some(value, callback) {
	    return Object.keys(value).map(function (key) {
	      return [value[key], key];
	    }).some(function (current) {
	      return callback.apply(undefined, _toConsumableArray(current));
	    });
	  },
	  every: function every(value, callback) {
	    return Object.keys(value).map(function (key) {
	      return [value[key], key];
	    }).every(function (current) {
	      return callback.apply(undefined, _toConsumableArray(current));
	    });
	  },
	  isMatch: function isMatch(obj, item) {
	    return Object.keys(item).every(function (key) {
	      return obj[key] === item[key];
	    });
	  },
	  omit: function omit(obj) {
	    var result = _extends({}, obj);
	
	    for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      keys[_key - 1] = arguments[_key];
	    }
	
	    keys.forEach(function (key) {
	      return delete result[key];
	    });
	    return result;
	  }
	};
	
	var specialFilters = exports.specialFilters = {
	  $in: function $in(key, ins) {
	    return function (current) {
	      return ins.indexOf(current[key]) !== -1;
	    };
	  },
	  $nin: function $nin(key, nins) {
	    return function (current) {
	      return nins.indexOf(current[key]) === -1;
	    };
	  },
	  $lt: function $lt(key, value) {
	    return function (current) {
	      return current[key] < value;
	    };
	  },
	  $lte: function $lte(key, value) {
	    return function (current) {
	      return current[key] <= value;
	    };
	  },
	  $gt: function $gt(key, value) {
	    return function (current) {
	      return current[key] > value;
	    };
	  },
	  $gte: function $gte(key, value) {
	    return function (current) {
	      return current[key] >= value;
	    };
	  },
	  $ne: function $ne(key, value) {
	    return function (current) {
	      return current[key] !== value;
	    };
	  }
	};
	
	function matcher(originalQuery) {
	  var query = _.omit(originalQuery, '$limit', '$skip', '$sort');
	
	  return function (item) {
	    if (query.$or && _.some(query.$or, function (or) {
	      return _.isMatch(item, or);
	    })) {
	      return true;
	    }
	
	    return _.every(query, function (value, key) {
	      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	        return _.every(value, function (target, filterType) {
	          if (specialFilters[filterType]) {
	            var filter = specialFilters[filterType](key, target);
	            return filter(item);
	          }
	
	          return false;
	        });
	      } else if (typeof item[key] !== 'undefined') {
	        return item[key] === query[key];
	      }
	
	      return false;
	    });
	  };
	}
	
	function sorter($sort) {
	  return function (first, second) {
	    var comparator = 0;
	    each($sort, function (modifier, key) {
	      modifier = parseInt(modifier, 10);
	
	      if (first[key] < second[key]) {
	        comparator -= 1 * modifier;
	      }
	
	      if (first[key] > second[key]) {
	        comparator += 1 * modifier;
	      }
	    });
	    return comparator;
	  };
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _utils = __webpack_require__(64);
	
	function getOrRemove(args) {
	  return {
	    id: args[0],
	    params: args[1],
	    callback: args[2]
	  };
	}
	
	function updateOrPatch(args) {
	  return {
	    id: args[0],
	    data: args[1],
	    params: args[2],
	    callback: args[3]
	  };
	}
	
	exports.converters = {
	  find: function find(args) {
	    return {
	      params: args[0],
	      callback: args[1]
	    };
	  },
	  create: function create(args) {
	    return {
	      data: args[0],
	      params: args[1],
	      callback: args[2]
	    };
	  },
	  get: getOrRemove,
	  remove: getOrRemove,
	  update: updateOrPatch,
	  patch: updateOrPatch
	};
	
	exports.hookObject = exports.hook = function (method, type, args) {
	  var hook = exports.converters[method](args);
	
	  hook.method = method;
	  hook.type = type;
	
	  return hook;
	};
	
	var defaultMakeArguments = exports.defaultMakeArguments = function (hook) {
	  var result = [];
	  if (typeof hook.id !== 'undefined') {
	    result.push(hook.id);
	  }
	
	  if (hook.data) {
	    result.push(hook.data);
	  }
	
	  result.push(hook.params || {});
	  result.push(hook.callback);
	
	  return result;
	};
	
	exports.makeArguments = function (hook) {
	  if (hook.method === 'find') {
	    return [hook.params, hook.callback];
	  }
	
	  if (hook.method === 'get' || hook.method === 'remove') {
	    return [hook.id, hook.params, hook.callback];
	  }
	
	  if (hook.method === 'update' || hook.method === 'patch') {
	    return [hook.id, hook.data, hook.params, hook.callback];
	  }
	
	  if (hook.method === 'create') {
	    return [hook.data, hook.params, hook.callback];
	  }
	
	  return defaultMakeArguments(hook);
	};
	
	exports.convertHookData = function (obj) {
	  var hook = {};
	
	  if (Array.isArray(obj)) {
	    hook = { all: obj };
	  } else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	    hook = { all: [obj] };
	  } else {
	    (0, _utils.each)(obj, function (value, key) {
	      hook[key] = !Array.isArray(value) ? [value] : value;
	    });
	  }
	
	  return hook;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var mixins = [__webpack_require__(67), __webpack_require__(68), __webpack_require__(72)];
	
	  // Override push to make sure that normalize is always the last
	  mixins.push = function () {
	    var args = [this.length - 1, 0].concat(Array.from(arguments));
	    this.splice.apply(this, args);
	    return this.length;
	  };
	
	  return mixins;
	};
	
	module.exports = exports['default'];

/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (service) {
	  var _this = this;
	
	  if (typeof service.mixin === 'function') {
	    (function () {
	      var mixin = {};
	
	      _this.methods.forEach(function (method) {
	        if (typeof service[method] === 'function') {
	          mixin[method] = wrapper;
	        }
	      });
	
	      service.mixin(mixin);
	    })();
	  }
	};
	
	function isPromise(result) {
	  return typeof result !== 'undefined' && typeof result.then === 'function';
	}
	
	function wrapper() {
	  var result = this._super.apply(this, arguments);
	  var callback = arguments[arguments.length - 1];
	
	  if (typeof callback === 'function' && isPromise(result)) {
	    result.then(function (data) {
	      return callback(null, data);
	    }, function (error) {
	      return callback(error);
	    });
	  }
	  return result;
	}
	
	module.exports = exports['default'];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (service) {
	  var isEmitter = typeof service.on === 'function' && typeof service.emit === 'function';
	  var emitter = service._rubberDuck = _rubberduck2.default.emitter(service);
	
	  if (typeof service.mixin === 'function' && !isEmitter) {
	    service.mixin(_events.EventEmitter.prototype);
	  }
	
	  service._serviceEvents = Array.isArray(service.events) ? service.events.slice() : [];
	
	  // Pass the Rubberduck error event through
	  // TODO deal with error events properly
	  emitter.on('error', function (errors) {
	    service.emit('serviceError', errors[0]);
	  });
	
	  Object.keys(eventMappings).forEach(function (method) {
	    var event = eventMappings[method];
	    var alreadyEmits = service._serviceEvents.indexOf(event) !== -1;
	
	    if (typeof service[method] === 'function' && !alreadyEmits) {
	      // The Rubberduck event name (e.g. afterCreate, afterUpdate or afterDestroy)
	      var eventName = 'after' + upperCase(method);
	      service._serviceEvents.push(event);
	      // Punch the given method
	      emitter.punch(method, -1);
	      // Pass the event and error event through
	      emitter.on(eventName, function (results, args) {
	        if (!results[0]) {
	          (function () {
	            // callback without error
	            var hook = hookObject(method, 'after', args);
	            var data = Array.isArray(results[1]) ? results[1] : [results[1]];
	
	            data.forEach(function (current) {
	              return service.emit(event, current, hook);
	            });
	          })();
	        } else {
	          service.emit('serviceError', results[0]);
	        }
	      });
	    }
	  });
	};
	
	var _rubberduck = __webpack_require__(69);
	
	var _rubberduck2 = _interopRequireDefault(_rubberduck);
	
	var _events = __webpack_require__(70);
	
	var _feathersCommons = __webpack_require__(62);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hookObject = _feathersCommons.hooks.hookObject;
	var eventMappings = {
	  create: 'created',
	  update: 'updated',
	  remove: 'removed',
	  patch: 'patched'
	};
	
	function upperCase(name) {
	  return name.charAt(0).toUpperCase() + name.substring(1);
	}
	
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var events = __webpack_require__(70);
	var utils = __webpack_require__(71);
	var wrap = exports.wrap = {
	  /**
	   * Wrap an anonymous or named function to notify an Emitter and
	   * return the wrapper function.
	   * @param {events.EventEmitter} emitter The emitter to notify
	   * @param {Function} fn The function to wrap
	   * @param {String} name The optional name
	   */
	  fn: function(emitter, fn, strict, name, scope) {
	    var wrapped = function() {
	      var result;
	      utils.emitEvents(emitter, 'before', name, [arguments, this, name]);
	
	      try {
	        result = fn.apply(scope || this, arguments);
	      } catch (e) {
	        utils.emitEvents(emitter, 'error', name, [ e, arguments, this, name ]);
	        throw e;
	      }
	
	      utils.emitEvents(emitter, 'after', name, [ result, arguments, this, name ]);
	      return result;
	    };
	
	    if (strict) {
	      eval('wrapped = ' + utils.addArgs(wrapped.toString(), fn.length));
	    }
	
	    return wrapped;
	  },
	  /**
	   * Wrap an anonymous or named function that calls a callback asynchronously
	   * to notify an Emitter and return the wrapper function.
	   * @param {events.EventEmitter} emitter The emitter to notify
	   * @param {Function} fn The function to wrap
	   * @param {Integer} position The position of the callback in the arguments
	   * array (defaults to 0). Set to -1 if the callback is the last argument.
	   * @param {String} name The optional name
	   */
	  async: function(emitter, fn, position, strict, name, scope) {
	    var wrapped = function() {
	      var pos = position == -1 ? arguments.length - 1 : (position || 0);
	      var callback = arguments[pos];
	      var context = this;
	      var methodArgs = arguments;
	      var callbackWrapper = function() {
	        try {
	          callback.apply(callback, arguments);
	        } catch (e) {
	          utils.emitEvents(emitter, 'error', name, [ e, methodArgs, context, name ]);
	          throw e;
	        }
	        var eventType = arguments[0] instanceof Error ? 'error' : 'after';
	        utils.emitEvents(emitter, eventType, name, [ arguments, methodArgs, context, name ]);
	      };
	
	      utils.emitEvents(emitter, 'before', name, [ methodArgs, this, name ]);
	      methodArgs[pos] = callbackWrapper;
	
	      try {
	        return fn.apply(scope || this, methodArgs);
	      } catch (e) {
	        utils.emitEvents(emitter, 'error', name, [ e, methodArgs, context, name ]);
	        throw e;
	      }
	    };
	
	    if (strict) {
	      eval('wrapped = ' + utils.addArgs(wrapped.toString(), fn.length));
	    }
	
	    return wrapped;
	  }
	};
	
	var Emitter = exports.Emitter = function(obj) {
	  this.obj = obj;
	};
	
	Emitter.prototype = Object.create(events.EventEmitter.prototype);
	
	/**
	 * Punch a method with the given name, with
	 * @param {String | Array} method The name of the method or a list of
	 * method names.
	 * @param {Integer} position The optional position of the asynchronous callback
	 * in the arguments list.
	 */
	Emitter.prototype.punch = function(method, position, strict) {
	  if (Array.isArray(method)) {
	    var self = this;
	    method.forEach(function(method) {
	      self.punch(method, position, strict);
	    });
	  } else {
	    var old = this.obj[method];
	    if (typeof old == 'function') {
	      this.obj[method] = (!position && position !== 0) ?
	        wrap.fn(this, old, strict, method) :
	        wrap.async(this, old, position, strict, method);
	    }
	  }
	  return this;
	};
	
	exports.emitter = function(obj) {
	  return new Emitter(obj);
	};


/***/ },
/* 70 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 71 */
/***/ function(module, exports) {

	exports.toBase26 = function(num) {
	  var outString = '';
	  var letters = 'abcdefghijklmnopqrstuvwxyz';
	  while (num > 25) {
	    var remainder = num % 26;
	    outString = letters.charAt(remainder) + outString;
	    num = Math.floor(num / 26) - 1;
	  }
	  outString = letters.charAt(num) + outString;
	  return outString;
	};
	
	exports.makeFakeArgs = function(len) {
	  var argArr = [];
	  for (var i = 0; i < len; i++) {
	    argArr.push(exports.toBase26(i));
	  }
	  return argArr.join(",");
	};
	
	exports.addArgs = function(fnString, argLen) {
	  return fnString.replace(/function\s*\(\)/, 'function(' + exports.makeFakeArgs(argLen) + ')');
	};
	
	exports.emitEvents = function(emitter, type, name, args) {
	  var ucName = name ? name.replace(/^\w/, function(first) {
	    return first.toUpperCase();
	  }) : null;
	
	  emitter.emit.apply(emitter, [type].concat(args));
	  if (ucName) {
	    emitter.emit.apply(emitter, [type + ucName].concat(args));
	  }
	};


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (service) {
	  var _this = this;
	
	  if (typeof service.mixin === 'function') {
	    (function () {
	      var mixin = {};
	
	      _this.methods.forEach(function (method) {
	        if (typeof service[method] === 'function') {
	          mixin[method] = function () {
	            return this._super.apply(this, (0, _feathersCommons.getArguments)(method, arguments));
	          };
	        }
	      });
	
	      service.mixin(mixin);
	    })();
	  }
	};
	
	var _feathersCommons = __webpack_require__(62);
	
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var app = {
	    settings: {},
	
	    get: function get(name) {
	      return this.settings[name];
	    },
	    set: function set(name, value) {
	      this.settings[name] = value;
	      return this;
	    },
	    disable: function disable(name) {
	      this.settings[name] = false;
	      return this;
	    },
	    disabled: function disabled(name) {
	      return !this.settings[name];
	    },
	    enable: function enable(name) {
	      this.settings[name] = true;
	      return this;
	    },
	    enabled: function enabled(name) {
	      return !!this.settings[name];
	    },
	    use: function use() {
	      throw new Error('Middleware functions can not be used in the Feathers client');
	    },
	    listen: function listen() {
	      return {};
	    }
	  };
	
	  _uberproto2.default.mixin(_events.EventEmitter.prototype, app);
	
	  return app;
	};
	
	var _events = __webpack_require__(70);
	
	var _uberproto = __webpack_require__(60);
	
	var _uberproto2 = _interopRequireDefault(_uberproto);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(75);


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var base = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	
	  var result = {};
	
	  Object.keys(transports).forEach(function (key) {
	    var Service = transports[key];
	
	    result[key] = function (connection) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      if (!connection) {
	        throw new Error(key + ' has to be provided to feathers-rest');
	      }
	
	      var defaultService = function defaultService(name) {
	        return new Service({ base: base, name: name, connection: connection, options: options });
	      };
	
	      var initialize = function initialize() {
	        if (typeof this.defaultService === 'function') {
	          throw new Error('Only one default client provider can be configured');
	        }
	
	        this.rest = connection;
	        this.defaultService = defaultService;
	      };
	
	      initialize.Service = Service;
	      initialize.service = defaultService;
	
	      return initialize;
	    };
	  });
	
	  return result;
	};
	
	var _jquery = __webpack_require__(76);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _superagent = __webpack_require__(83);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _request = __webpack_require__(84);
	
	var _request2 = _interopRequireDefault(_request);
	
	var _fetch = __webpack_require__(85);
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var transports = {
	  jquery: _jquery2.default,
	  superagent: _superagent2.default,
	  request: _request2.default,
	  fetch: _fetch2.default
	};
	
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _base = __webpack_require__(77);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Service = function (_Base) {
	  _inherits(Service, _Base);
	
	  function Service() {
	    _classCallCheck(this, Service);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Service).apply(this, arguments));
	  }
	
	  _createClass(Service, [{
	    key: 'request',
	    value: function request(options) {
	      var _this2 = this;
	
	      var opts = _extends({
	        dataType: options.type || 'json'
	      }, options);
	
	      if (options.body) {
	        opts.data = JSON.stringify(options.body);
	        opts.contentType = 'application/json';
	      }
	
	      delete opts.type;
	      delete opts.body;
	
	      return new Promise(function (resolve, reject) {
	        _this2.connection.ajax(opts).then(resolve, function (xhr) {
	          var error = xhr.responseText;
	
	          try {
	            error = JSON.parse(error);
	          } catch (e) {
	            error = new Error(xhr.responseText);
	          }
	
	          error.xhr = error.response = xhr;
	
	          reject(error);
	        });
	      });
	    }
	  }]);
	
	  return Service;
	}(_base2.default);
	
	exports.default = Service;
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _qs = __webpack_require__(78);
	
	var _qs2 = _interopRequireDefault(_qs);
	
	var _feathersCommons = __webpack_require__(62);
	
	var _feathersErrors = __webpack_require__(82);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function toError(error) {
	  throw (0, _feathersErrors.convert)(error);
	}
	
	var Base = function () {
	  function Base(settings) {
	    _classCallCheck(this, Base);
	
	    this.name = (0, _feathersCommons.stripSlashes)(settings.name);
	    this.options = settings.options;
	    this.connection = settings.connection;
	    this.base = settings.base + '/' + this.name;
	  }
	
	  _createClass(Base, [{
	    key: 'makeUrl',
	    value: function makeUrl(params, id) {
	      params = params || {};
	      var url = this.base;
	
	      if (typeof id !== 'undefined' && id !== null) {
	        url += '/' + id;
	      }
	
	      if (Object.keys(params).length !== 0) {
	        var queryString = _qs2.default.stringify(params);
	
	        url += '?' + queryString;
	      }
	
	      return url;
	    }
	  }, {
	    key: 'find',
	    value: function find() {
	      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      return this.request({
	        url: this.makeUrl(params.query),
	        method: 'GET',
	        headers: _extends({}, params.headers)
	      }).catch(toError);
	    }
	  }, {
	    key: 'get',
	    value: function get(id) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      return this.request({
	        url: this.makeUrl(params.query, id),
	        method: 'GET',
	        headers: _extends({}, params.headers)
	      }).catch(toError);
	    }
	  }, {
	    key: 'create',
	    value: function create(body) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      return this.request({
	        url: this.makeUrl(params.query),
	        body: body,
	        method: 'POST',
	        headers: _extends({ 'Content-Type': 'application/json' }, params.headers)
	      }).catch(toError);
	    }
	  }, {
	    key: 'update',
	    value: function update(id, body) {
	      var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      return this.request({
	        url: this.makeUrl(params.query, id),
	        body: body,
	        method: 'PUT',
	        headers: _extends({ 'Content-Type': 'application/json' }, params.headers)
	      }).catch(toError);
	    }
	  }, {
	    key: 'patch',
	    value: function patch(id, body) {
	      var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      return this.request({
	        url: this.makeUrl(params.query, id),
	        body: body,
	        method: 'PATCH',
	        headers: _extends({ 'Content-Type': 'application/json' }, params.headers)
	      }).catch(toError);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(id) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      return this.request({
	        url: this.makeUrl(params.query, id),
	        method: 'DELETE',
	        headers: _extends({}, params.headers)
	      }).catch(toError);
	    }
	  }]);
	
	  return Base;
	}();
	
	exports.default = Base;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stringify = __webpack_require__(79);
	var Parse = __webpack_require__(81);
	
	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(80);
	
	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix) {
	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {
	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix) {
	            return prefix;
	        }
	    },
	    strictNullHandling: false,
	    skipNulls: false,
	    encode: true
	};
	
	internals.stringify = function (object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encode, filter, sort, allowDots) {
	    var obj = object;
	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    } else if (Utils.isBuffer(obj)) {
	        obj = String(obj);
	    } else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    } else if (obj === null) {
	        if (strictNullHandling) {
	            return encode ? Utils.encode(prefix) : prefix;
	        }
	
	        obj = '';
	    }
	
	    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
	        if (encode) {
	            return [Utils.encode(prefix) + '=' + Utils.encode(obj)];
	        }
	        return [prefix + '=' + obj];
	    }
	
	    var values = [];
	
	    if (typeof obj === 'undefined') {
	        return values;
	    }
	
	    var objKeys;
	    if (Array.isArray(filter)) {
	        objKeys = filter;
	    } else {
	        var keys = Object.keys(obj);
	        objKeys = sort ? keys.sort(sort) : keys;
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encode, filter, sort, allowDots));
	        } else {
	            values = values.concat(internals.stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encode, filter, sort, allowDots));
	        }
	    }
	
	    return values;
	};
	
	module.exports = function (object, opts) {
	    var obj = object;
	    var options = opts || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
	    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : internals.skipNulls;
	    var encode = typeof options.encode === 'boolean' ? options.encode : internals.encode;
	    var sort = typeof options.sort === 'function' ? options.sort : null;
	    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
	    var objKeys;
	    var filter;
	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    } else if (Array.isArray(options.filter)) {
	        objKeys = filter = options.filter;
	    }
	
	    var keys = [];
	
	    if (typeof obj !== 'object' || obj === null) {
	        return '';
	    }
	
	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    } else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    } else {
	        arrayFormat = 'indices';
	    }
	
	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];
	
	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }
	
	    if (sort) {
	        objKeys.sort(sort);
	    }
	
	    for (var i = 0; i < objKeys.length; ++i) {
	        var key = objKeys[i];
	
	        if (skipNulls && obj[key] === null) {
	            continue;
	        }
	
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encode, filter, sort, allowDots));
	    }
	
	    return keys.join(delimiter);
	};


/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	var hexTable = (function () {
	    var array = new Array(256);
	    for (var i = 0; i < 256; ++i) {
	        array[i] = '%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase();
	    }
	
	    return array;
	}());
	
	exports.arrayToObject = function (source, options) {
	    var obj = options.plainObjects ? Object.create(null) : {};
	    for (var i = 0; i < source.length; ++i) {
	        if (typeof source[i] !== 'undefined') {
	            obj[i] = source[i];
	        }
	    }
	
	    return obj;
	};
	
	exports.merge = function (target, source, options) {
	    if (!source) {
	        return target;
	    }
	
	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        } else if (typeof target === 'object') {
	            target[source] = true;
	        } else {
	            return [target, source];
	        }
	
	        return target;
	    }
	
	    if (typeof target !== 'object') {
	        return [target].concat(source);
	    }
	
	    var mergeTarget = target;
	    if (Array.isArray(target) && !Array.isArray(source)) {
	        mergeTarget = exports.arrayToObject(target, options);
	    }
	
		return Object.keys(source).reduce(function (acc, key) {
	        var value = source[key];
	
	        if (Object.prototype.hasOwnProperty.call(acc, key)) {
	            acc[key] = exports.merge(acc[key], value, options);
	        } else {
	            acc[key] = value;
	        }
			return acc;
	    }, mergeTarget);
	};
	
	exports.decode = function (str) {
	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};
	
	exports.encode = function (str) {
	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }
	
	    var string = typeof str === 'string' ? str : String(str);
	
	    var out = '';
	    for (var i = 0; i < string.length; ++i) {
	        var c = string.charCodeAt(i);
	
	        if (
	            c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A) // A-Z
	        ) {
	            out += string.charAt(i);
	            continue;
	        }
	
	        if (c < 0x80) {
	            out = out + hexTable[c];
	            continue;
	        }
	
	        if (c < 0x800) {
	            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        if (c < 0xD800 || c >= 0xE000) {
	            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	            continue;
	        }
	
	        i += 1;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
	        out += (hexTable[0xF0 | (c >> 18)] + hexTable[0x80 | ((c >> 12) & 0x3F)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
	    }
	
	    return out;
	};
	
	exports.compact = function (obj, references) {
	    if (typeof obj !== 'object' || obj === null) {
	        return obj;
	    }
	
	    var refs = references || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }
	
	    refs.push(obj);
	
	    if (Array.isArray(obj)) {
	        var compacted = [];
	
	        for (var i = 0; i < obj.length; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }
	
	        return compacted;
	    }
	
	    var keys = Object.keys(obj);
	    for (var j = 0; j < keys.length; ++j) {
	        var key = keys[j];
	        obj[key] = exports.compact(obj[key], refs);
	    }
	
	    return obj;
	};
	
	exports.isRegExp = function (obj) {
	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};
	
	exports.isBuffer = function (obj) {
	    if (obj === null || typeof obj === 'undefined') {
	        return false;
	    }
	
	    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
	};


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Utils = __webpack_require__(80);
	
	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000,
	    strictNullHandling: false,
	    plainObjects: false,
	    allowPrototypes: false,
	    allowDots: false
	};
	
	internals.parseValues = function (str, options) {
	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);
	
	    for (var i = 0; i < parts.length; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;
	
	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';
	
	            if (options.strictNullHandling) {
	                obj[Utils.decode(part)] = null;
	            }
	        } else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));
	
	            if (Object.prototype.hasOwnProperty.call(obj, key)) {
	                obj[key] = [].concat(obj[key]).concat(val);
	            } else {
	                obj[key] = val;
	            }
	        }
	    }
	
	    return obj;
	};
	
	internals.parseObject = function (chain, val, options) {
	    if (!chain.length) {
	        return val;
	    }
	
	    var root = chain.shift();
	
	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    } else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        if (
	            !isNaN(index) &&
	            root !== cleanRoot &&
	            String(index) === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays && index <= options.arrayLimit)
	        ) {
	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        } else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }
	
	    return obj;
	};
	
	internals.parseKeys = function (givenKey, val, options) {
	    if (!givenKey) {
	        return;
	    }
	
	    // Transform dot notation to bracket notation
	    var key = options.allowDots ? givenKey.replace(/\.([^\.\[]+)/g, '[$1]') : givenKey;
	
	    // The regex chunks
	
	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;
	
	    // Get the parent
	
	    var segment = parent.exec(key);
	
	    // Stash the parent if it exists
	
	    var keys = [];
	    if (segment[1]) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects && Object.prototype.hasOwnProperty(segment[1])) {
	            if (!options.allowPrototypes) {
	                return;
	            }
	        }
	
	        keys.push(segment[1]);
	    }
	
	    // Loop through children appending to the array until we hit depth
	
	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {
	        i += 1;
	        if (!options.plainObjects && Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {
	            if (!options.allowPrototypes) {
	                continue;
	            }
	        }
	        keys.push(segment[1]);
	    }
	
	    // If there's a remainder, just add whatever is left
	
	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }
	
	    return internals.parseObject(keys, val, options);
	};
	
	module.exports = function (str, opts) {
	    var options = opts || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : internals.allowDots;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : internals.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : internals.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
	
	    if (
	        str === '' ||
	        str === null ||
	        typeof str === 'undefined'
	    ) {
	        return options.plainObjects ? Object.create(null) : {};
	    }
	
	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};
	
	    // Iterate over the keys and setup the new object
	
	    var keys = Object.keys(tempObj);
	    for (var i = 0; i < keys.length; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj, options);
	    }
	
	    return Utils.compact(obj);
	};


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _extendableBuiltin(cls) {
	  function ExtendableBuiltin() {
	    var instance = Reflect.construct(cls, Array.from(arguments));
	    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	    return instance;
	  }
	
	  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
	    constructor: {
	      value: cls,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	
	  if (Object.setPrototypeOf) {
	    Object.setPrototypeOf(ExtendableBuiltin, cls);
	  } else {
	    ExtendableBuiltin.__proto__ = cls;
	  }
	
	  return ExtendableBuiltin;
	}
	
	var debug = __webpack_require__(13)('feathers-errors');
	
	// NOTE (EK): Babel doesn't properly support extending
	// some classes in ES6. The Error class being one of them.
	// Node v5.0+ does support this but until we want to drop support
	// for older versions we need this hack.
	// http://stackoverflow.com/questions/33870684/why-doesnt-instanceof-work-on-instances-of-error-subclasses-under-babel-node
	// https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend
	
	var FeathersError = function (_extendableBuiltin2) {
	  _inherits(FeathersError, _extendableBuiltin2);
	
	  function FeathersError(msg, name, code, className, data) {
	    _classCallCheck(this, FeathersError);
	
	    msg = msg || 'Error';
	
	    var errors = undefined;
	    var message = undefined;
	    var newData = undefined;
	
	    if (msg instanceof Error) {
	      message = msg.message || 'Error';
	
	      // NOTE (EK): This is typically to handle validation errors
	      if (msg.errors) {
	        errors = msg.errors;
	      }
	    }
	    // Support plain old objects
	    else if ((typeof msg === 'undefined' ? 'undefined' : _typeof(msg)) === 'object') {
	        message = msg.message || 'Error';
	        data = msg;
	      }
	      // message is just a string
	      else {
	          message = msg;
	        }
	
	    if (data) {
	      // NOTE(EK): To make sure that we are not messing
	      // with immutable data, just make a copy.
	      // https://github.com/feathersjs/feathers-errors/issues/19
	      newData = _extends({}, data);
	
	      if (newData.errors) {
	        errors = newData.errors;
	        delete newData.errors;
	      }
	    }
	
	    // NOTE (EK): Babel doesn't support this so
	    // we have to pass in the class name manually.
	    // this.name = this.constructor.name;
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FeathersError).call(this, message));
	
	    _this.type = 'FeathersError';
	    _this.name = name;
	    _this.message = message;
	    _this.code = code;
	    _this.className = className;
	    _this.data = newData;
	    _this.errors = errors || {};
	
	    debug(_this.name + '(' + _this.code + '): ' + _this.message);
	    return _this;
	  }
	
	  // NOTE (EK): A little hack to get around `message` not
	  // being included in the default toJSON call.
	
	
	  _createClass(FeathersError, [{
	    key: 'toJSON',
	    value: function toJSON() {
	      return {
	        name: this.name,
	        message: this.message,
	        code: this.code,
	        className: this.className,
	        data: this.data,
	        errors: this.errors
	      };
	    }
	  }]);
	
	  return FeathersError;
	}(_extendableBuiltin(Error));
	
	var BadRequest = function (_FeathersError) {
	  _inherits(BadRequest, _FeathersError);
	
	  function BadRequest(message, data) {
	    _classCallCheck(this, BadRequest);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BadRequest).call(this, message, 'BadRequest', 400, 'bad-request', data));
	  }
	
	  return BadRequest;
	}(FeathersError);
	
	var NotAuthenticated = function (_FeathersError2) {
	  _inherits(NotAuthenticated, _FeathersError2);
	
	  function NotAuthenticated(message, data) {
	    _classCallCheck(this, NotAuthenticated);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotAuthenticated).call(this, message, 'NotAuthenticated', 401, 'not-authenticated', data));
	  }
	
	  return NotAuthenticated;
	}(FeathersError);
	
	var PaymentError = function (_FeathersError3) {
	  _inherits(PaymentError, _FeathersError3);
	
	  function PaymentError(message, data) {
	    _classCallCheck(this, PaymentError);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PaymentError).call(this, message, 'PaymentError', 402, 'payment-error', data));
	  }
	
	  return PaymentError;
	}(FeathersError);
	
	var Forbidden = function (_FeathersError4) {
	  _inherits(Forbidden, _FeathersError4);
	
	  function Forbidden(message, data) {
	    _classCallCheck(this, Forbidden);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Forbidden).call(this, message, 'Forbidden', 403, 'forbidden', data));
	  }
	
	  return Forbidden;
	}(FeathersError);
	
	var NotFound = function (_FeathersError5) {
	  _inherits(NotFound, _FeathersError5);
	
	  function NotFound(message, data) {
	    _classCallCheck(this, NotFound);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotFound).call(this, message, 'NotFound', 404, 'not-found', data));
	  }
	
	  return NotFound;
	}(FeathersError);
	
	var MethodNotAllowed = function (_FeathersError6) {
	  _inherits(MethodNotAllowed, _FeathersError6);
	
	  function MethodNotAllowed(message, data) {
	    _classCallCheck(this, MethodNotAllowed);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MethodNotAllowed).call(this, message, 'MethodNotAllowed', 405, 'method-not-allowed', data));
	  }
	
	  return MethodNotAllowed;
	}(FeathersError);
	
	var NotAcceptable = function (_FeathersError7) {
	  _inherits(NotAcceptable, _FeathersError7);
	
	  function NotAcceptable(message, data) {
	    _classCallCheck(this, NotAcceptable);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotAcceptable).call(this, message, 'NotAcceptable', 406, 'not-acceptable', data));
	  }
	
	  return NotAcceptable;
	}(FeathersError);
	
	var Timeout = function (_FeathersError8) {
	  _inherits(Timeout, _FeathersError8);
	
	  function Timeout(message, data) {
	    _classCallCheck(this, Timeout);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Timeout).call(this, message, 'Timeout', 408, 'timeout', data));
	  }
	
	  return Timeout;
	}(FeathersError);
	
	var Conflict = function (_FeathersError9) {
	  _inherits(Conflict, _FeathersError9);
	
	  function Conflict(message, data) {
	    _classCallCheck(this, Conflict);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Conflict).call(this, message, 'Conflict', 409, 'conflict', data));
	  }
	
	  return Conflict;
	}(FeathersError);
	
	var Unprocessable = function (_FeathersError10) {
	  _inherits(Unprocessable, _FeathersError10);
	
	  function Unprocessable(message, data) {
	    _classCallCheck(this, Unprocessable);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Unprocessable).call(this, message, 'Unprocessable', 422, 'unprocessable', data));
	  }
	
	  return Unprocessable;
	}(FeathersError);
	
	var GeneralError = function (_FeathersError11) {
	  _inherits(GeneralError, _FeathersError11);
	
	  function GeneralError(message, data) {
	    _classCallCheck(this, GeneralError);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GeneralError).call(this, message, 'GeneralError', 500, 'general-error', data));
	  }
	
	  return GeneralError;
	}(FeathersError);
	
	var NotImplemented = function (_FeathersError12) {
	  _inherits(NotImplemented, _FeathersError12);
	
	  function NotImplemented(message, data) {
	    _classCallCheck(this, NotImplemented);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotImplemented).call(this, message, 'NotImplemented', 501, 'not-implemented', data));
	  }
	
	  return NotImplemented;
	}(FeathersError);
	
	var Unavailable = function (_FeathersError13) {
	  _inherits(Unavailable, _FeathersError13);
	
	  function Unavailable(message, data) {
	    _classCallCheck(this, Unavailable);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Unavailable).call(this, message, 'Unavailable', 503, 'unavailable', data));
	  }
	
	  return Unavailable;
	}(FeathersError);
	
	var errors = {
	  FeathersError: FeathersError,
	  BadRequest: BadRequest,
	  NotAuthenticated: NotAuthenticated,
	  PaymentError: PaymentError,
	  Forbidden: Forbidden,
	  NotFound: NotFound,
	  MethodNotAllowed: MethodNotAllowed,
	  NotAcceptable: NotAcceptable,
	  Timeout: Timeout,
	  Conflict: Conflict,
	  Unprocessable: Unprocessable,
	  GeneralError: GeneralError,
	  NotImplemented: NotImplemented,
	  Unavailable: Unavailable
	};
	
	function convert(error) {
	  if (!error) {
	    return error;
	  }
	
	  var FeathersError = errors[error.name];
	  var result = FeathersError ? new FeathersError(error.message, error.data) : new Error(error.message || error);
	
	  if ((typeof error === 'undefined' ? 'undefined' : _typeof(error)) === 'object') {
	    _extends(result, error);
	  }
	
	  return result;
	}
	
	exports.default = _extends({
	  convert: convert,
	  types: errors,
	  errors: errors
	}, errors);
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _base = __webpack_require__(77);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Service = function (_Base) {
	  _inherits(Service, _Base);
	
	  function Service() {
	    _classCallCheck(this, Service);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Service).apply(this, arguments));
	  }
	
	  _createClass(Service, [{
	    key: 'request',
	    value: function request(options) {
	      var superagent = this.connection(options.method, options.url).set('Accept', 'application/json').type(options.type || 'json');
	
	      return new Promise(function (resolve, reject) {
	        superagent.set(options.headers);
	
	        if (options.body) {
	          superagent.send(options.body);
	        }
	
	        superagent.end(function (error, res) {
	          if (error) {
	            try {
	              var response = error.response;
	              error = JSON.parse(error.response.text);
	              error.response = response;
	            } catch (e) {}
	
	            return reject(error);
	          }
	
	          resolve(res && res.body);
	        });
	      });
	    }
	  }]);
	
	  return Service;
	}(_base2.default);
	
	exports.default = Service;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _base = __webpack_require__(77);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Service = function (_Base) {
	  _inherits(Service, _Base);
	
	  function Service() {
	    _classCallCheck(this, Service);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Service).apply(this, arguments));
	  }
	
	  _createClass(Service, [{
	    key: 'request',
	    value: function request(options) {
	      var _this2 = this;
	
	      return new Promise(function (resolve, reject) {
	        _this2.connection(_extends({
	          json: true
	        }, options), function (error, res, data) {
	          if (error) {
	            return reject(error);
	          }
	
	          if (!error && res.statusCode >= 400) {
	            if (typeof data === 'string') {
	              return reject(new Error(data));
	            }
	
	            data.response = res;
	
	            return reject(_extends(new Error(data.message), data));
	          }
	
	          resolve(data);
	        });
	      });
	    }
	  }]);
	
	  return Service;
	}(_base2.default);
	
	exports.default = Service;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _base = __webpack_require__(77);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Service = function (_Base) {
	  _inherits(Service, _Base);
	
	  function Service() {
	    _classCallCheck(this, Service);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Service).apply(this, arguments));
	  }
	
	  _createClass(Service, [{
	    key: 'request',
	    value: function request(options) {
	      var fetchOptions = _extends({}, options);
	
	      fetchOptions.headers = _extends({
	        Accept: 'application/json'
	      }, fetchOptions.headers);
	
	      if (options.body) {
	        fetchOptions.body = JSON.stringify(options.body);
	      }
	
	      var fetch = this.connection;
	
	      return fetch(options.url, fetchOptions).then(this.checkStatus).then(this.parseJSON);
	    }
	  }, {
	    key: 'checkStatus',
	    value: function checkStatus(response) {
	      if (response.ok) {
	        return response;
	      }
	
	      return new Promise(function (resolve, reject) {
	        var body = response.body;
	        var buffer = '';
	
	        body.on('data', function (data) {
	          return buffer += data.toString();
	        });
	        body.on('error', reject);
	        body.on('end', function () {
	          var error = new Error(buffer);
	
	          try {
	            error = JSON.parse(buffer);
	          } catch (e) {
	            error.code = response.status;
	          }
	
	          error.response = response;
	
	          reject(error);
	        });
	      });
	    }
	  }, {
	    key: 'parseJSON',
	    value: function parseJSON(response) {
	      return response.json();
	    }
	  }]);
	
	  return Service;
	}(_base2.default);
	
	exports.default = Service;
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(87);


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = function (connection, options) {
	  if (!connection) {
	    throw new Error('Socket.io connection needs to be provided');
	  }
	
	  var defaultService = function defaultService(name) {
	    var settings = _extends({}, options, {
	      name: name,
	      connection: connection,
	      method: 'emit'
	    });
	
	    return new _client2.default(settings);
	  };
	
	  var initialize = function initialize() {
	    if (typeof this.defaultService === 'function') {
	      throw new Error('Only one default client provider can be configured');
	    }
	
	    this.io = connection;
	    this.defaultService = defaultService;
	  };
	
	  initialize.Service = _client2.default;
	  initialize.service = defaultService;
	
	  return initialize;
	};
	
	var _client = __webpack_require__(88);
	
	var _client2 = _interopRequireDefault(_client);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(89);


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _utils = __webpack_require__(90);
	
	var _feathersErrors = __webpack_require__(82);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var debug = __webpack_require__(13)('feathers-socket-commons:client');
	
	var Service = function () {
	  function Service(options) {
	    _classCallCheck(this, Service);
	
	    this.events = _utils.events;
	    this.path = options.name;
	    this.connection = options.connection;
	    this.method = options.method;
	    this.timeout = options.timeout || 5000;
	  }
	
	  _createClass(Service, [{
	    key: 'emit',
	    value: function emit() {
	      var _connection;
	
	      (_connection = this.connection)[this.method].apply(_connection, arguments);
	    }
	  }, {
	    key: 'send',
	    value: function send(method) {
	      var _this = this;
	
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var callback = null;
	      if (typeof args[args.length - 1] === 'function') {
	        callback = args.pop();
	      }
	
	      return new Promise(function (resolve, reject) {
	        var _connection2;
	
	        var event = _this.path + '::' + method;
	        var timeoutId = setTimeout(function () {
	          return reject(new Error('Timeout of ' + _this.timeout + 'ms exceeded calling ' + event));
	        }, _this.timeout);
	
	        args.unshift(event);
	        args.push(function (error, data) {
	          error = (0, _feathersErrors.convert)(error);
	          clearTimeout(timeoutId);
	
	          if (callback) {
	            callback(error, data);
	          }
	
	          return error ? reject(error) : resolve(data);
	        });
	
	        debug('Sending socket.' + _this.method, args);
	
	        (_connection2 = _this.connection)[_this.method].apply(_connection2, args);
	      });
	    }
	  }, {
	    key: 'find',
	    value: function find() {
	      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      return this.send('find', params.query || {});
	    }
	  }, {
	    key: 'get',
	    value: function get(id) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      return this.send('get', id, params.query || {});
	    }
	  }, {
	    key: 'create',
	    value: function create(data) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      return this.send('create', data, params.query || {});
	    }
	  }, {
	    key: 'update',
	    value: function update(id, data) {
	      var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      return this.send('update', id, data, params.query || {});
	    }
	  }, {
	    key: 'patch',
	    value: function patch(id, data) {
	      var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      return this.send('patch', id, data, params.query || {});
	    }
	  }, {
	    key: 'remove',
	    value: function remove(id) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      return this.send('remove', id, params.query || {});
	    }
	  }]);
	
	  return Service;
	}();
	
	exports.default = Service;
	
	
	var emitterMethods = ['on', 'once', 'off'];
	
	emitterMethods.forEach(function (method) {
	  Service.prototype[method] = function (name, callback) {
	    debug('Calling emitter method ' + method + ' with event \'' + this.path + ' ' + name + '\'');
	    this.connection[method](this.path + ' ' + name, callback);
	    return this;
	  };
	});
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.events = exports.eventMappings = undefined;
	exports.convertFilterData = convertFilterData;
	exports.promisify = promisify;
	exports.normalizeError = normalizeError;
	
	var _feathersCommons = __webpack_require__(62);
	
	var eventMappings = exports.eventMappings = {
	  create: 'created',
	  update: 'updated',
	  patch: 'patched',
	  remove: 'removed'
	};
	
	var events = exports.events = Object.keys(eventMappings).map(function (method) {
	  return eventMappings[method];
	});
	
	function convertFilterData(obj) {
	  return _feathersCommons.hooks.convertHookData(obj);
	}
	
	function promisify(method, context) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  return new Promise(function (resolve, reject) {
	    method.apply(context, args.concat(function (error, result) {
	      if (error) {
	        return reject(error);
	      }
	
	      resolve(result);
	    }));
	  });
	}
	
	function normalizeError(e) {
	  var result = {};
	
	  Object.getOwnPropertyNames(e).forEach(function (key) {
	    return result[key] = e[key];
	  });
	
	  if (process.env.NODE_ENV === 'production') {
	    delete result.stack;
	  }
	
	  delete result.hook;
	
	  return result;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(91)))

/***/ },
/* 91 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(93);


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (connection, options) {
	  if (!connection) {
	    throw new Error('Primus connection needs to be provided');
	  }
	
	  var defaultService = function defaultService(name) {
	    return new _client2.default(Object.assign({}, options, {
	      name: name,
	      connection: connection,
	      method: 'send'
	    }));
	  };
	
	  var initialize = function initialize() {
	    if (typeof this.defaultService === 'function') {
	      throw new Error('Only one default client provider can be configured');
	    }
	
	    this.primus = connection;
	    this.defaultService = defaultService;
	  };
	
	  initialize.Service = _client2.default;
	  initialize.service = defaultService;
	
	  return initialize;
	};
	
	var _client = __webpack_require__(88);
	
	var _client2 = _interopRequireDefault(_client);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _feathersCommons = __webpack_require__(62);
	
	var _bundled = __webpack_require__(95);
	
	var hooks = _interopRequireWildcard(_bundled);
	
	var _commons = __webpack_require__(96);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function isPromise(result) {
	  return typeof result !== 'undefined' && typeof result.then === 'function';
	}
	
	function hookMixin(service) {
	  if (typeof service.mixin !== 'function') {
	    return;
	  }
	
	  var app = this;
	  var methods = app.methods;
	  var oldBefore = service.before;
	  var oldAfter = service.after;
	  var mixin = {};
	
	  (0, _commons.addHookMethod)(service, 'before', methods);
	  (0, _commons.addHookMethod)(service, 'after', methods);
	
	  methods.forEach(function (method) {
	    if (typeof service[method] !== 'function') {
	      return;
	    }
	
	    mixin[method] = function () {
	      // A reference to the original method
	      var _super = this._super.bind(this);
	      // Create the hook object that gets passed through
	      var hookObject = _feathersCommons.hooks.hookObject(method, 'before', arguments);
	
	      hookObject.app = app;
	
	      // Process all before hooks
	      return _commons.processHooks.call(this, this.__beforeHooks[method], hookObject)
	      // Use the hook object to call the original method
	      .then(function (hookObject) {
	        if (typeof hookObject.result !== 'undefined') {
	          return Promise.resolve(hookObject);
	        }
	
	        return new Promise(function (resolve, reject) {
	          var args = _feathersCommons.hooks.makeArguments(hookObject);
	          // The method may not be normalized yet so we have to handle both
	          // ways, either by callback or by Promise
	          var callback = function callback(error, result) {
	            if (error) {
	              reject(error);
	            } else {
	              hookObject.result = result;
	              resolve(hookObject);
	            }
	          };
	
	          // We replace the callback with resolving the promise
	          args.splice(args.length - 1, 1, callback);
	
	          var result = _super.apply(undefined, _toConsumableArray(args));
	
	          if (isPromise(result)) {
	            result.then(function (data) {
	              return callback(null, data);
	            }, callback);
	          }
	        });
	      })
	      // Make a copy of hookObject from `before` hooks and update type
	      .then(function (hookObject) {
	        return Object.assign({}, hookObject, { type: 'after' });
	      })
	      // Run through all `after` hooks
	      .then(_commons.processHooks.bind(this, this.__afterHooks[method]))
	      // Finally, return the result
	      .then(function (hookObject) {
	        return hookObject.result;
	      });
	    };
	  });
	
	  service.mixin(mixin);
	
	  // Before hooks that were registered in the service
	  if (oldBefore) {
	    service.before(oldBefore);
	  }
	
	  // After hooks that were registered in the service
	  if (oldAfter) {
	    service.after(oldAfter);
	  }
	}
	
	function configure() {
	  return function () {
	    this.mixins.unshift(hookMixin);
	  };
	}
	
	configure.removeQuery = hooks.removeQuery;
	configure.pluckQuery = hooks.pluckQuery;
	configure.lowerCase = hooks.lowerCase;
	configure.remove = hooks.remove;
	configure.pluck = hooks.pluck;
	configure.disable = hooks.disable;
	configure.populate = hooks.populate;
	
	exports.default = configure;
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.lowerCase = lowerCase;
	exports.removeQuery = removeQuery;
	exports.pluckQuery = pluckQuery;
	exports.remove = remove;
	exports.pluck = pluck;
	exports.disable = disable;
	exports.populate = populate;
	var errors = __webpack_require__(82).errors;
	
	function lowerCase() {
	  for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
	    fields[_key] = arguments[_key];
	  }
	
	  var lowerCaseFields = function lowerCaseFields(data) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var field = _step.value;
	
	        if (data[field]) {
	          if (typeof data[field] !== 'string') {
	            throw new errors.BadRequest('Expected string');
	          } else {
	            data[field] = data[field].toLowerCase();
	          }
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  };
	
	  var callback = typeof fields[fields.length - 1] === 'function' ? fields.pop() : function () {
	    return true;
	  };
	
	  return function (hook) {
	    var result = hook.type === 'before' ? hook.data : hook.result;
	    var next = function next(condition) {
	      if (result && condition) {
	        if (hook.method === 'find' || Array.isArray(result)) {
	          // data.data if the find method is paginated
	          (result.data || result).forEach(lowerCaseFields);
	        } else {
	          lowerCaseFields(result);
	        }
	      }
	      return hook;
	    };
	
	    var check = callback(hook);
	
	    return check && typeof check.then === 'function' ? check.then(next) : next(check);
	  };
	}
	
	function removeQuery() {
	  for (var _len2 = arguments.length, fields = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    fields[_key2] = arguments[_key2];
	  }
	
	  var removeQueries = function removeQueries(data) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	      for (var _iterator2 = fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var field = _step2.value;
	
	        data[field] = undefined;
	        delete data[field];
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }
	  };
	
	  var callback = typeof fields[fields.length - 1] === 'function' ? fields.pop() : function () {
	    return true;
	  };
	
	  return function (hook) {
	    if (hook.type === 'after') {
	      throw new errors.GeneralError('Provider \'' + hook.params.provider + '\' can not remove query params on after hook.');
	    }
	    var result = hook.params.query;
	    var next = function next(condition) {
	      if (result && condition) {
	        removeQueries(result);
	      }
	      return hook;
	    };
	
	    var check = callback(hook);
	
	    return check && typeof check.then === 'function' ? check.then(next) : next(check);
	  };
	}
	
	function pluckQuery() {
	  for (var _len3 = arguments.length, fields = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    fields[_key3] = arguments[_key3];
	  }
	
	  var pluckQueries = function pluckQueries(data) {
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;
	
	    try {
	      for (var _iterator3 = Object.keys(data)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var key = _step3.value;
	
	        if (fields.indexOf(key) === -1) {
	          data[key] = undefined;
	          delete data[key];
	        }
	      }
	    } catch (err) {
	      _didIteratorError3 = true;
	      _iteratorError3 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	          _iterator3.return();
	        }
	      } finally {
	        if (_didIteratorError3) {
	          throw _iteratorError3;
	        }
	      }
	    }
	  };
	
	  var callback = typeof fields[fields.length - 1] === 'function' ? fields.pop() : function () {
	    return true;
	  };
	
	  return function (hook) {
	    if (hook.type === 'after') {
	      throw new errors.GeneralError('Provider \'' + hook.params.provider + '\' can not pluck query params on after hook.');
	    }
	    var result = hook.params.query;
	    var next = function next(condition) {
	      if (result && condition) {
	        pluckQueries(result);
	      }
	      return hook;
	    };
	
	    var check = callback(hook);
	
	    return check && typeof check.then === 'function' ? check.then(next) : next(check);
	  };
	}
	
	function remove() {
	  for (var _len4 = arguments.length, fields = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    fields[_key4] = arguments[_key4];
	  }
	
	  var removeFields = function removeFields(data) {
	    var _iteratorNormalCompletion4 = true;
	    var _didIteratorError4 = false;
	    var _iteratorError4 = undefined;
	
	    try {
	      for (var _iterator4 = fields[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	        var field = _step4.value;
	
	        data[field] = undefined;
	        delete data[field];
	      }
	    } catch (err) {
	      _didIteratorError4 = true;
	      _iteratorError4 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion4 && _iterator4.return) {
	          _iterator4.return();
	        }
	      } finally {
	        if (_didIteratorError4) {
	          throw _iteratorError4;
	        }
	      }
	    }
	  };
	
	  var callback = typeof fields[fields.length - 1] === 'function' ? fields.pop() : function (hook) {
	    return !!hook.params.provider;
	  };
	
	  return function (hook) {
	    var result = hook.type === 'before' ? hook.data : hook.result;
	    var next = function next(condition) {
	      if (result && condition) {
	        if (Array.isArray(result)) {
	          result.forEach(removeFields);
	        } else {
	          removeFields(result);
	
	          if (result.data) {
	            if (Array.isArray(result.data)) {
	              result.data.forEach(removeFields);
	            } else {
	              removeFields(result.data);
	            }
	          }
	        }
	      }
	      return hook;
	    };
	
	    var check = callback(hook);
	
	    return check && typeof check.then === 'function' ? check.then(next) : next(check);
	  };
	}
	
	function pluck() {
	  for (var _len5 = arguments.length, fields = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	    fields[_key5] = arguments[_key5];
	  }
	
	  var pluckFields = function pluckFields(data) {
	    var _iteratorNormalCompletion5 = true;
	    var _didIteratorError5 = false;
	    var _iteratorError5 = undefined;
	
	    try {
	      for (var _iterator5 = Object.keys(data)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	        var key = _step5.value;
	
	        if (fields.indexOf(key) === -1) {
	          data[key] = undefined;
	          delete data[key];
	        }
	      }
	    } catch (err) {
	      _didIteratorError5 = true;
	      _iteratorError5 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion5 && _iterator5.return) {
	          _iterator5.return();
	        }
	      } finally {
	        if (_didIteratorError5) {
	          throw _iteratorError5;
	        }
	      }
	    }
	  };
	
	  var callback = typeof fields[fields.length - 1] === 'function' ? fields.pop() : function (hook) {
	    return !!hook.params.provider;
	  };
	
	  return function (hook) {
	    var result = hook.type === 'before' ? hook.data : hook.result;
	    var next = function next(condition) {
	      if (result && condition) {
	        if (hook.method === 'find' || Array.isArray(result)) {
	          // data.data if the find method is paginated
	          (result.data || result).forEach(pluckFields);
	        } else {
	          pluckFields(result);
	        }
	      }
	      return hook;
	    };
	
	    var check = callback(hook);
	
	    return check && typeof check.then === 'function' ? check.then(next) : next(check);
	  };
	}
	
	function disable(realm) {
	  var _arguments = arguments;
	
	  if (!realm) {
	    return function (hook) {
	      throw new errors.MethodNotAllowed('Calling \'' + hook.method + '\' not allowed.');
	    };
	  } else if (typeof realm === 'function') {
	    return function (hook) {
	      var result = realm(hook);
	      var next = function next(check) {
	        if (!check) {
	          throw new errors.MethodNotAllowed('Calling \'' + hook.method + '\' not allowed.');
	        }
	      };
	
	      if (result && typeof result.then === 'function') {
	        return result.then(next);
	      }
	
	      next(result);
	    };
	  } else {
	    var _len6, args, _key6;
	
	    var _ret = function () {
	      for (_len6 = _arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
	        args[_key6 - 1] = _arguments[_key6];
	      }
	
	      var providers = [realm].concat(args);
	
	      return {
	        v: function v(hook) {
	          var provider = hook.params.provider;
	
	          if (realm === 'external' && provider || providers.indexOf(provider) !== -1) {
	            throw new errors.MethodNotAllowed('Provider \'' + hook.params.provider + '\' can not call \'' + hook.method + '\'');
	          }
	        }
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	
	function populate(target, options) {
	  options = Object.assign({}, options);
	
	  if (!options.service) {
	    throw new Error('You need to provide a service');
	  }
	
	  var field = options.field || target;
	
	  return function (hook) {
	    function populate(item) {
	      if (!item[field]) {
	        return Promise.resolve(item);
	      }
	
	      // Find by the field value by default or a custom query
	      var id = item[field];
	
	      // If it's a mongoose model then
	      if (typeof item.toObject === 'function') {
	        item = item.toObject(options);
	      }
	      // If it's a Sequelize model
	      else if (typeof item.toJSON === 'function') {
	          item = item.toJSON(options);
	        }
	      // Remove any query from params as it's not related
	      var params = Object.assign({}, params, { query: undefined });
	      // If the relationship is an array of ids, fetch and resolve an object for each, otherwise just fetch the object.
	      var promise = Array.isArray(id) ? Promise.all(id.map(function (objectID) {
	        return hook.app.service(options.service).get(objectID, params);
	      })) : hook.app.service(options.service).get(id, params);
	      return promise.then(function (relatedItem) {
	        if (relatedItem) {
	          item[target] = relatedItem;
	        }
	        return item;
	      });
	    }
	
	    if (hook.type === 'after') {
	      var _ret2 = function () {
	        var isPaginated = hook.method === 'find' && hook.result.data;
	        var data = isPaginated ? hook.result.data : hook.result;
	
	        if (Array.isArray(data)) {
	          return {
	            v: Promise.all(data.map(populate)).then(function (results) {
	              if (isPaginated) {
	                hook.result.data = results;
	              } else {
	                hook.result = results;
	              }
	
	              return hook;
	            })
	          };
	        }
	
	        // Handle single objects.
	        return {
	          v: populate(hook.result).then(function (item) {
	            hook.result = item;
	            return hook;
	          })
	        };
	      }();
	
	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  };
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.isHookObject = isHookObject;
	exports.processHooks = processHooks;
	exports.addHookMethod = addHookMethod;
	
	var _feathersCommons = __webpack_require__(62);
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function isHookObject(hookObject) {
	  return (typeof hookObject === 'undefined' ? 'undefined' : _typeof(hookObject)) === 'object' && typeof hookObject.method === 'string' && (hookObject.type === 'before' || hookObject.type === 'after');
	}
	
	function processHooks(hooks, initialHookObject) {
	  var _this = this;
	
	  var hookObject = initialHookObject;
	  var updateCurrentHook = function updateCurrentHook(current) {
	    if (current) {
	      if (!isHookObject(current)) {
	        throw new Error(hookObject.type + ' hook for \'' + hookObject.method + '\' method returned invalid hook object');
	      }
	
	      hookObject = current;
	    }
	
	    return hookObject;
	  };
	  var promise = Promise.resolve(hookObject);
	
	  // Go through all hooks and chain them into our promise
	  hooks.forEach(function (fn) {
	    var hook = fn.bind(_this);
	
	    if (hook.length === 2) {
	      // function(hook, next)
	      promise = promise.then(function (hookObject) {
	        return new Promise(function (resolve, reject) {
	          hook(hookObject, function (error, result) {
	            return error ? reject(error) : resolve(result);
	          });
	        });
	      });
	    } else {
	      // function(hook)
	      promise = promise.then(hook);
	    }
	
	    // Use the returned hook object or the old one
	    promise = promise.then(updateCurrentHook);
	  });
	
	  return promise.catch(function (error) {
	    // Add the hook information to any errors
	    error.hook = hookObject;
	    throw error;
	  });
	}
	
	function addHookMethod(service, type, methods) {
	  var prop = '__' + type + 'Hooks';
	
	  // Initialize properties where hook functions are stored
	  service[prop] = {};
	  methods.forEach(function (method) {
	    if (typeof service[method] === 'function') {
	      service[prop][method] = [];
	    }
	  });
	
	  // mixin the method (.before or .after)
	  service.mixin(_defineProperty({}, type, function (obj) {
	    var _this2 = this;
	
	    var hooks = _feathersCommons.hooks.convertHookData(obj);
	
	    methods.forEach(function (method) {
	      if (typeof _this2[method] !== 'function') {
	        return;
	      }
	
	      var myHooks = _this2[prop][method];
	
	      if (hooks.all) {
	        myHooks.push.apply(myHooks, hooks.all);
	      }
	
	      if (hooks[method]) {
	        myHooks.push.apply(myHooks, hooks[method]);
	      }
	    });
	
	    return this;
	  }));
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(98);


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  var config = Object.assign({}, defaults, opts);
	
	  return function () {
	    var app = this;
	
	    if (!app.get('storage')) {
	      app.set('storage', (0, _utils.getStorage)(config.storage));
	    }
	
	    app.authenticate = function () {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      var storage = this.get('storage');
	      var getOptions = Promise.resolve(options);
	
	      // If no type was given let's try to authenticate with a stored JWT
	      if (!options.type) {
	        getOptions = (0, _utils.getJWT)(config.tokenKey, config.cookie, this.get('storage')).then(function (token) {
	          if (!token) {
	            return Promise.reject(new _feathersErrors2.default.NotAuthenticated('Could not find stored JWT and no authentication type was given'));
	          }
	
	          return { type: 'token', token: token };
	        });
	      }
	
	      var handleResponse = function handleResponse(response) {
	        app.set('token', response.token);
	        app.set('user', response.data);
	
	        return Promise.resolve(storage.setItem(config.tokenKey, response.token)).then(function () {
	          return response;
	        });
	      };
	
	      return getOptions.then(function (options) {
	        var endPoint = void 0;
	
	        if (options.type === 'local') {
	          endPoint = config.localEndpoint;
	        } else if (options.type === 'token') {
	          endPoint = config.tokenEndpoint;
	        } else {
	          throw new Error('Unsupported authentication \'type\': ' + options.type);
	        }
	
	        return (0, _utils.connected)(app).then(function (socket) {
	          // TODO (EK): Handle OAuth logins
	          // If we are using a REST client
	          if (app.rest) {
	            return app.service(endPoint).create(options).then(handleResponse);
	          }
	
	          var method = app.io ? 'emit' : 'send';
	
	          return (0, _utils.authenticateSocket)(options, socket, method).then(handleResponse);
	        });
	      });
	    };
	
	    // Set our logout method with the correct socket context
	    app.logout = function () {
	      app.set('user', null);
	      app.set('token', null);
	
	      (0, _utils.clearCookie)(config.cookie);
	
	      // remove the token from localStorage
	      return Promise.resolve(app.get('storage').removeItem(config.tokenKey)).then(function () {
	        // If using sockets de-authenticate the socket
	        if (app.io || app.primus) {
	          var method = app.io ? 'emit' : 'send';
	          var socket = app.io ? app.io : app.primus;
	
	          return (0, _utils.logoutSocket)(socket, method);
	        }
	      });
	    };
	
	    // Set up hook that adds token and user to params so that
	    // it they can be accessed by client side hooks and services
	    app.mixins.push(function (service) {
	      if (typeof service.before !== 'function' || typeof service.after !== 'function') {
	        throw new Error('It looks like feathers-hooks isn\'t configured. It is required before running feathers-authentication.');
	      }
	
	      service.before(hooks.populateParams(config));
	    });
	
	    // Set up hook that adds authorization header for REST provider
	    if (app.rest) {
	      app.mixins.push(function (service) {
	        service.before(hooks.populateHeader(config));
	      });
	    }
	  };
	};
	
	var _feathersErrors = __webpack_require__(82);
	
	var _feathersErrors2 = _interopRequireDefault(_feathersErrors);
	
	var _hooks = __webpack_require__(99);
	
	var hooks = _interopRequireWildcard(_hooks);
	
	var _utils = __webpack_require__(100);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var defaults = {
	  cookie: 'feathers-jwt',
	  tokenKey: 'feathers-jwt',
	  localEndpoint: '/auth/local',
	  tokenEndpoint: '/auth/token'
	};
	
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.populateParams = populateParams;
	exports.populateHeader = populateHeader;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function populateParams() {
	  return function (hook) {
	    var app = hook.app;
	
	    Object.assign(hook.params, {
	      user: app.get('user'),
	      token: app.get('token')
	    });
	  };
	}
	
	function populateHeader() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  return function (hook) {
	    if (hook.params.token) {
	      hook.params.headers = Object.assign({}, _defineProperty({}, options.header || 'authorization', hook.params.token), hook.params.headers);
	    }
	  };
	}

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.connected = connected;
	exports.authenticateSocket = authenticateSocket;
	exports.logoutSocket = logoutSocket;
	exports.getCookie = getCookie;
	exports.clearCookie = clearCookie;
	exports.getJWT = getJWT;
	exports.getStorage = getStorage;
	// Returns a promise that resolves when the socket is connected
	function connected(app) {
	  return new Promise(function (resolve, reject) {
	    if (app.rest) {
	      return resolve();
	    }
	
	    var socket = app.io || app.primus;
	
	    if (!socket) {
	      return reject(new Error('It looks like no client connection has been configured.'));
	    }
	
	    // If one of those events happens before `connect` the promise will be rejected
	    // If it happens after, it will do nothing (since Promises can only resolve once)
	    socket.once('disconnect', reject);
	    socket.once('close', reject);
	
	    // If the socket is not connected yet we have to wait for the `connect` event
	    if (app.io && !socket.connected || app.primus && socket.readyState !== 3) {
	      var connectEvent = app.primus ? 'open' : 'connect';
	      socket.once(connectEvent, function () {
	        return resolve(socket);
	      });
	    } else {
	      resolve(socket);
	    }
	  });
	}
	
	// Returns a promise that authenticates a socket
	function authenticateSocket(options, socket, method) {
	  return new Promise(function (resolve, reject) {
	    socket.once('unauthorized', reject);
	    socket.once('authenticated', resolve);
	
	    socket[method]('authenticate', options);
	  });
	}
	
	// Returns a promise that de-authenticates a socket
	function logoutSocket(socket, method) {
	  return new Promise(function (resolve, reject) {
	    socket[method]('logout', function (error) {
	      if (error) {
	        reject(error);
	      }
	
	      resolve();
	    });
	  });
	}
	
	// Returns the value for a cookie
	function getCookie(name) {
	  if (typeof document !== 'undefined') {
	    var value = '; ' + document.cookie;
	    var parts = value.split('; ' + name + '=');
	
	    if (parts.length === 2) {
	      return parts.pop().split(';').shift();
	    }
	  }
	
	  return null;
	}
	
	// Returns the value for a cookie
	function clearCookie(name) {
	  if (typeof document !== 'undefined') {
	    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	  }
	
	  return null;
	}
	
	// Tries the JWT from the given key either from a storage or the cookie
	function getJWT(tokenKey, cookieKey, storage) {
	  return Promise.resolve(storage.getItem(tokenKey)).then(function (jwt) {
	    var cookieToken = getCookie(cookieKey);
	
	    if (cookieToken) {
	      return cookieToken;
	    }
	
	    return jwt;
	  });
	}
	
	// Returns a storage implementation
	function getStorage(storage) {
	  if (storage) {
	    return storage;
	  }
	
	  return {
	    store: {},
	    getItem: function getItem(key) {
	      return this.store[key];
	    },
	    setItem: function setItem(key, value) {
	      return this.store[key] = value;
	    },
	    removeItem: function removeItem(key) {
	      delete this.store[key];
	      return this;
	    }
	  };
	}

/***/ },
/* 101 */,
/* 102 */,
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "js/mithril.js";

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "js/calc.js";

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "flexblocks.css";

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "normalize.css";

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "site.css";

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map