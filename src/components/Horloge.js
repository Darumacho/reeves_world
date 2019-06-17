import React from 'react';

export class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getTime();
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  setTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    this.setState(this.getTime, this.setTimer);
  }

  getTime() {
    const currentTime = new Date();
    return {
      hours: (currentTime.getHours() - 6),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds()
    }
  }

  render() {
    const {hours, minutes, seconds} = this.state;
    return (
        <div className="clockContainer">
        Actuellement à Montréal, il est : 
      <div className="clock">
      <br />
        {
         hours
        }:{
          minutes > 9 ? minutes : `0${minutes}`
        }:{
          seconds > 9 ? seconds : `0${seconds}`
        }
      </div>
      </div>
    )
  }
}

export default Clock;