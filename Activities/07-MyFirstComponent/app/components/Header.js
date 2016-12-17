// Include React
var React = require("react");

// Create the Header component
// Notice how the header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Header = React.createClass({
  render: function() {
    return (
      <div>
        <h1>I'm a header!</h1>
        <h2>I'm a separate header</h2>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Header;
