import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core';
import NOD from '../utils/NOD';

class Divisor extends Component {
  constructor() {
    super();

    this.state = {
      a: '',
      b: '',
      divisor: 0
    }
  }

  aHandler = e => this.setState({a: e.target.value.replace(/-/, '')});

  bHandler = e => this.setState({b: e.target.value.replace(/-/, '')});

  getDivisor = () => {
    const {a, b} = this.state;
    const divisor = NOD(+a, +b)
    this.setState({divisor})
  };

  render() {
    return (
      <form className='calc' autoComplete="off">
        <fieldset className='field'>
          <legend>Вычислить наибольший общий делитель положительных целых чисел</legend>

          <TextField type='number' size='small' label='a =' variant="outlined" onChange={this.aHandler} value={this.state.a} />
          <TextField type='number' size='small' label='b =' variant="outlined" onChange={this.bHandler} value={this.state.b} />
          <Button variant="contained" color="primary" onClick={this.getDivisor}>Рассчитать</Button>
        </fieldset>
         <TextField disabled size='small' value={`Наибольший общий делитель: ${this.state.divisor > 0 ? this.state.divisor : 'Введите значения'}`}/>
      </form>
    );
  }

}

window['registerModule'](Divisor);

export default Divisor