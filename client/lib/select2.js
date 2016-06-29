// Mithril component that integrates with select2
// Adapted from http://mithril.js.org/integration.html

/*
  Usage: 
  m.component(Select2, {
      data: array of dropdown options from a feathers service
      dataKey: property with name of object in data
      value: m.prop to store selected value(s)
      onchange: callback with selected value
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
        var data = attrs.data.data;
        var dataKey = attrs.dataKey;
        var value = attrs.value;
        var onchange = attrs.onchange;
        delete attrs.data;
        delete attrs.dataKey;
        delete attrs.value;
        delete attrs.onchange;

        // Get strings from service objects
        for (var i = 0; i < data.length; i++) {
          data[i] = data[i][dataKey];
        };

        attrs.data = data;

        el.select2(attrs).on('change', function (e) {
          var val = el.select2('val');
          value(val);
          onchange(val);
        });
      }
    };
  }
};
