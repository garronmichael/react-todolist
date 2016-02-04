
// Dependencies
var React = require( 'react' ),
    ReactDom = require( 'react-dom' );


// Content
var Content = React.createClass({
  getInitialState() {
    return {
      todo: 'Your next todo...'
    }
  },
  componentDidMount() {

  },
  updateTodo(e) {
    this.setState({
      todo: e.target.value
    });
  },
  render() {
    return (
      <div>
        <h1>Todo: </h1>
        <ul>
          <li>Buy groceries</li>
          <li>Walk dog</li>
          <li>Go to the gym</li>
          <li>
            <input type="text" value={this.state.todo} onChange={this.updateTodo} />
            <button>Create new item</button>
          </li>
        </ul>
      </div>
    );
  }
});

// Render
ReactDom.render(
  <Content />,
  document.getElementById( 'main' )
);