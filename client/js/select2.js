// Mithril component that integrates with select2
// Adapted from http://mithril.js.org/integration.html

/*
  Usage: 
  m.component(Select2, {
      data: [array of options],
      value: m.prop to store selected value(s),
      onchange: callback with selected value,
      ...PLUS...
      any other select2 options such as width, multiple, tags etc.
      })
*/

var $ = require('jquery');
var select2 = require('select2');

window.Select2 = {
  view: function (ctrl, attrs) {
    return m('select', {config: Select2.config(attrs)});
  },
  config: function (attrs) {
    return function (element, isInitialized) {
      var el = $(element);
      // Only setup once
      if (!isInitialized) {
        // Special values
        var value = attrs.value;
        var onchange = attrs.onchange;
        delete attrs.value;
        delete attrs.onchange;

        el.select2(attrs).on('change', function (e) {
          var val = el.select2('val');
          value(val);
          onchange(val);
        });
      }
    };
  }
};
