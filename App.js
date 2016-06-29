import React from 'react';
// import ReactDOM from 'react-dom';

// a class component can have state
class App extends React.Component {
  constructor() {
    super();
    this.state = { txt: ''}
    this.update = this.update.bind(this)
  }

  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    // let txt = this.props.txt
    return (
      <div>
        <Widget txt= {this.state.txt}
         update = {this, update} />
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text"
        onChange={props.update} />
      <h1>{props.txt}</h1>
    </div>
  );
}

export default App
