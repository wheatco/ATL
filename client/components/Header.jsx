var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="header">
          <span className="logo">Outpost</span>
          <span>Main</span>
          <button>Logout</button>
      </div>
    );
  }
});
