import React, { Component } from 'react';
import { connect } from 'react-redux'
import { countUp, countDown } from '../actions'

class App extends Component {
  render() {
    return (
      <div>
        <div>count:{this.props.value}</div>
        <button onClick={ this.props.countUp }>+</button>
        <button onClick={ this.props.countDown }>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.count.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    countUp: () => {
      dispatch(countUp())
    },
    countDown: () => {
      dispatch(countDown())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
