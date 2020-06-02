import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core';

class Divisor extends Component {
  constructor() {
    super();

    this.state = {
      a: '',
      b: '',
      divisor: 0
    }
  }

  aHandler = e => this.setState({a: e.target.value.replace(/[^\d.]/, '')});

  bHandler = e => this.setState({b: e.target.value.replace(/[^\d.]/, '')});

  getDivisor = () => {
    console.log('first')
    const {a, b} = this.state;
    let first = a;
    let second = b;
    while(first !== second) {
      if(first > second) {
        first = first-second;
      } else {
        second = second-first;
      }
      console.log('kek')
    }
    
    //this.setState({divisor: first})
  };

  render() {
    return (
      <form className='calc' autoComplete="off">
        <fieldset className='field'>
          <legend>Вычислить наибольший общий делитель</legend>

          <TextField type='number' size='small' label='a =' variant="outlined" onChange={this.aHandler} value={this.state.a} />
          <TextField type='number' size='small' label='b =' variant="outlined" onChange={this.bHandler} value={this.state.b} />
          <Button variant="contained" color="primary" onClick={this.getDivisor}>Рассчитать</Button>
        </fieldset>
        <p>Наибольший общий делитель: <TextField disabled size='small' value={this.state.divisor} /></p>
      </form>
    );
  }

}

export default Divisor