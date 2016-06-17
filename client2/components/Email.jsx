var React = require('react');

module.exports = React.createClass({
  getInitialState: function(itemProps) {
    return {
      to: this.props.to,
    };
  },

  render: function () {
    return (
      <div className="email">
          <input className="to">{this.state.to}</input>
          <input className="from">{this.state.from}</input>
          <input className="subject">{this.state.subject}</input>
          <div className="message">{this.state.message}</div>
      </div>
    );
  }
});
