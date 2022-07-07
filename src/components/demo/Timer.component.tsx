/* eslint-disable no-console */
import React, { Component } from 'react';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type State = {
  seconds: number;
  minutes: number;
  interval: NodeJS.Timer;
};
class Timer extends Component {
  state: State;
  constructor(props) {
    super(props);
    console.log('constructor');
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      seconds: 0,
      minutes: 0,
      interval: setInterval(this.counter, 1000)
    };
  }
  componentDidMount() {
    // fetch api or sth...
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>): boolean {
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('shouldComponentUpdate');
    return true;
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  // try/catch, log error
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log('error', error);
    console.log('errorInfo', errorInfo);
    console.log('componentDidCatch');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.state.interval);
  }
  counter= () => {
    this.setState((prevState: State) => {
      if (prevState.seconds !== 59) return { ...prevState, seconds: prevState.seconds + 1 };
      return { ...prevState, seconds: 0, minutes: prevState.minutes + 1 };
    });
  };
  render() {
    return (
      <div className="c-timer">
        You have visited this timer tab for{' '}
        <span>
          <FontAwesomeIcon icon={faClock} size="lg" style={{ marginRight: 10 }} />
          {this.state.minutes}:{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}
        </span>
      </div>
    );
  }
}

export default Timer;
