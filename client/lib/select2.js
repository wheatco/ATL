// Mithril component that integrates with select2
// Adapted from http://mithril.js.org/integration.html

/*
  Usage:
  m.component(Select2, {
      data: m.prop containing dropdown options
      format: function (dataitem) that returns string to display
      value: m.prop to store selected value(s)
      onchange: callback with selected value
      ...PLUS...
      options: {
        any other select2 options such as width, multiple, tags etc.
      }
  })
*/

var m = require('mithril');
var $ = require('jquery');
var select2 = require('select2');

window.Select2 = {
  view: function(ctrl, attrs) {
    return m('.select-wrapper', [
      m('select', {
        config: Select2.config(attrs)
      })
    ]);
  },
  config: function(attrs) {
    return function(element, isInitialized) {
      var el = $(element);

      // Destroy old options when refreshing data
      // https://github.com/select2/select2/issues/3185#issuecomment-88955394
      el.find("option").remove();

      // Values from attribs
      var data = attrs.data();
      var format = attrs.format;
      var value = attrs.value;
      var onchange = attrs.onchange;

      // Init options
      var options = attrs.options || {};
      options.data = [];

      // Get strings from objects
      for (var i = 0; i < data.length; i++) {
        if (format) {
          options.data.push({
            id: data[i]._id,
            text: format(data[i])
          });
        } else {
          options.data.push(data[i]);
        }
      };

      // TODO: unjankify
      el.select2(options).on('change', function(e) {
        var val = el.select2('val');
        if (val != value()) {
          value(val);
          if (onchange != null) {
            onchange(val);
          }
          return val;
        }
      });

      el.val(value()).change();
      
    };
  }
};
