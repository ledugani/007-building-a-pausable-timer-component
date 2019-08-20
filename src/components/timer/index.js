import React from 'react';
import ElapsedTime from './elapsed-time';
import Buttons from './buttons';

import './styles.css';

class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timingEvents: []
    }

    this.addTimerEvent = this.addTimerEvent.bind(this);
  }

  addTimerEvent() {
    this.setState({
      timingEvents: [
        ...this.state.timingEvents,
        new Date()
      ]
    })
  }

  render() {
    return (
      <div className="container">
        <ElapsedTime />
        <Buttons
          handleClick={this.addTimerEvent}
          timingEvents={this.state.timingEvents}
        />
      </div>
    )
  }
}

export default Timer;