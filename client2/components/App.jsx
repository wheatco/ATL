var React = require('react');
var Header = require('./Header.jsx');
var Navigation = require('./Navigation.jsx');
var Main = require('./Main.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
        display: 'Inbox',
        myNumber: 3,

    };
  },

  componentDidMount: function() {
    app.service('contacts').find().then(function(response){
        var data = response.data;
        
        // put the data in some container

    });

    this.setState({
        display: 'Sent'
    });
  },

  render: function () {
    return (
      <div className="container">
          <Header />
          <Navigation />
          <Main currentTab={this.state.display} />
      </div>
    );
  }
});
