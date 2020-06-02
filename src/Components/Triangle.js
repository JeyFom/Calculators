import React, {Component} from 'react';
import {TextField, Button} from '@material-ui/core';

class Triangle extends Component {
  constructor() {
    super();

    this.state = {
      a: '',
      b: '',
      c: '',
      p: 0,
      s: 0
    }
  }

  aHandler = e => this.setState({a: e.target.value});

  bHandler = e => this.setState({b: e.target.value});

  cHandler = e => this.setState({c: e.target.value});

  squareCalculate = () => {
    const {a, b, c, p} = this.state;
    const square = Number(Math.sqrt(p * (p-a) * (p-b) * (p-c)).toFixed(2));
    this.setState({s: square})
  };

  halfPerimeterCalculate = () => {
    const {a, b, c} = this.state;
    const halfPerimeter = ((+a) + (+b) + (+c))/2;
    this.setState({p: halfPerimeter}, () => this.squareCalculate())
  };

  render() {
    return (
      <form className='calc' autoComplete="off">
        <fieldset className='field'>
          <legend>Вычислить площадь треугольника по его сторонам</legend>

          <TextField type='number' size='small' label='a =' variant="outlined" onChange={this.aHandler} value={this.state.a} />
          <TextField type='number' size='small' label='b =' variant="outlined" onChange={this.bHandler} value={this.state.b} />
          <TextField type='number' size='small' label='c =' variant="outlined" onChange={this.cHandler} value={this.state.c} />
          <Button variant="contained" color="primary" onClick={this.halfPerimeterCalculate}>Рассчитать</Button>
        </fieldset>
        <TextField disabled size='small' value={`Площадь треугольника S= ${this.state.s > 0 ? this.state.s : 'ошибка'}`} />
      </form>
    );
  }

}

export default Triangle