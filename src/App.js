import React, { useState, useEffect, memo } from 'react'
import AnalogClock, { Themes } from 'react-analog-clock'

function App() {
  let width = 180
  let [timezones, setTimezones] = useState([])

  useEffect(() => {
    setTimezones([
      {
        id: 1,
        name: 'India',
        offset: '5.5',
      },
      {
        id: 2,
        name: 'US',
        offset: '-5',
      },
      {
        id: 3,
        name: 'UK',
        offset: '1',
      },
    ])
  }, [])

  return (
    <>
      <div className="bg-class" />
      <div className="App_main">
        <h1 style={{ color: '#fff' }}>Your timezones</h1>
        <div className="App_timezone">
          {timezones.map(({ id, offset, name }) => (
            <div key={id} className="App_clock">
              <AnalogClock
                gmtOffset={offset}
                width={width}
                theme={Themes.light}
              />
              <h3 className="App_text">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default memo(App)
