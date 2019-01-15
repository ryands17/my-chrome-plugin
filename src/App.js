import React, { Component, Fragment } from 'react'
import AnalogClock, { Themes } from 'react-analog-clock'

class App extends Component {
  width = 180
  state = {
    timezones: [
      {
        id: 1,
        name: 'India',
        offset: '5.5'
      },
      {
        id: 2,
        name: 'US',
        offset: '-5'
      },
      {
        id: 3,
        name: 'UK',
        offset: '1'
      }
    ]
  }

  render() {
    const { timezones } = this.state
    return (
      <Fragment>
        <div className="bg-class" />
        <div className="App_main">
          <h1 style={{ color: '#fff' }}>Your timezones</h1>
          <div className="App_timezone">
            {timezones.map(({ id, offset, name }) => (
              <div key={id} className="App_clock">
                <AnalogClock
                  gmtOffset={offset}
                  width={this.width}
                  theme={Themes.light}
                />
                <h3 className="App_text">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App
