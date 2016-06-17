var React = require('react');

module.exports = React.createClass({

  createNewMessage: function(event) {
    var element = event.target;
  
  },

  render: function () {
    return (
      <div className="sidebar">
          <ul>
              <li>Inbox</li>
              <li>Drafts</li>
              <li>Sent</li>
              <li><button onClick={this.createNewMessage}>New Message</button></li>
              <li><button>Logout</button></li>
          </ul>
      </div>
    );
  }
});
