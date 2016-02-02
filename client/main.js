var React = require( 'react' ),
    ReactDom = require( 'react-dom' );

var Content = React.createClass({
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
});

ReactDom.render(
  <Content />,
  document.getElementById( 'main' );
);