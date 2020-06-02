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

  addModule(module, title) {
    const modules = [...this.state.modules];
    modules.push({module, title});

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
        {this.state.modules.map((m,i) => 
          <Button key={'b'+i} variant="contained" onClick={() => this.changeModuleIndex(i)}>{m.title}</Button>
        )}
        {Module && React.createElement(Module.module)}
      </div>
    );
  }
}

export default App;
