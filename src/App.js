import React from 'react';

import Button from '@material-ui/core/Button';
import './App.css';



class App extends React.Component {
  constructor() {
    super();

    window['registerModule'] = this.addModule.bind(this);

    this.state = {
      modules: [], 
      currentModuleIndex: -1
    }
  }

  addModule(module) {
    const modules = [...this.state.modules];
    modules.push(module);

    this.setState({modules});
  }

  render() {
    const { currentModuleIndex } = this.state;
    const Module = this.state.modules[currentModuleIndex];

    return (
      <div className='container'>
        <Button variant="contained" onClick={() => { this.setState({ currentModuleIndex: 0 }) }}>Калькулятор для вычисления площади треугольника</Button>

        <Button variant="contained" onClick={() => { this.setState({ currentModuleIndex: 1 }) }}>Калькулятор для вычисления НОД</Button>
        {Module && new Module().render()}
      </div>
    );
  }
}

export default App;
