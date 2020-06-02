import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    modules: []
  }

  componentWillMount() {
    window['registerModule'] = this.addModule.bind(this);
  }

  addModule(module) {
    const modules = [...this.state.modules];
    modules.push(module);
    this.setState({modules});
  }

  render() {
    return this.state.modules.map(m => <div>{m}</div>);
  }
}

export default App;
