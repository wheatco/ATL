var React = require('react');
var Email = require('./Email.jsx');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="main">
          Hello, this is some main content.
          <Email subject={"this is a test message"} message={"Hello1!"} to={"test@wheat.co"} from={"adam1@wheat.co"} />
          <Email subject={"this is a another test message"} message={"Hello2!"} to={"test@wheat.co"} from={"adam2@wheat.co"} />
          <Email subject={"this is a yet test message"} message={"Hello3!"} to={"test@wheat.co"} from={"adam3@wheat.co"} />
          <Email subject={"this is the final test message"} message={"Hello4!"} to={"test@wheat.co"} from={"adam4@wheat.co"} />
      </div>
    );
  }
});
