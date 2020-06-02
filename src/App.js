import React from 'react';

import Button from '@material-ui/core/Button';
import './App.css';



class App extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      modules: [], 
      currentModuleIndex: -1
    }
  }

  componentDidMount() {
    window['registerModule'] = this.addModule.bind(this);
  }

  addModule(module) {
    const modules = [...this.state.modules];
    modules.push(module);

    this.setState({modules});
  }

  changeModuleIndex = (index) => {
    this.setState({ currentModuleIndex: index })
  }

  render() {
    const { currentModuleIndex } = this.state;
    const Module = this.state.modules[currentModuleIndex];

    return (
      <div className='container'>
        <Button variant="contained" onClick={() => this.changeModuleIndex(0)}>Калькулятор для вычисления площади треугольника</Button>

        <Button variant="contained" onClick={() => this.changeModuleIndex(1)}>Калькулятор для вычисления НОД</Button>
        {Module && React.createElement(Module)}
      </div>
    );
  }
}

export default App;
