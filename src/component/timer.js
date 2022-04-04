import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(300);
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSecs, setTimerSecs] = useState('00');
  const [timerIsValid, setTimerIsValid] = useState(null);
  let isActive = timerIsValid !== null

   // return minutes and seconds of seconds
  function secondsToTime(seconds) {
    return [Math.floor(seconds / 60), seconds % 60]
  }

  useEffect(() => {
    let time = secondsToTime(timer)
    setTimerMinutes(time[0])
    setTimerSecs(time[1])
  }, [timer])


  function toggleCountDown() {
    if (isActive) {
      // started mode
      if (timerIsValid) {
        clearInterval(timerIsValid)
      }
      setTimerIsValid(null)
    } else {
      // stopped mode
      // create accurate date timer with date
      const newIntervalId = setInterval(() => {
        setTimer(prevTime => {
          let newTime = prevTime - 1
          let time = secondsToTime(newTime)
          setTimerMinutes(time[0])
          setTimerSecs(time[1])
          return newTime
        })
      }, 1000)
      setTimerIsValid(newIntervalId)
    }
  }


  function handleResetTimer() {
    if (timerIsValid) {
      clearInterval(timerIsValid)
    }
    setTimerIsValid(null)
    setTimer(300)
  }

  // zero paddings if < 10
  function formatDisplayTime(time) {
    if (time < 10) {
      return `0${time}`
    } else {
      return time
    }
  }
  return (
    <div className="timer">
      <p className="label">5 Minutes Timer</p>
      <div className="time-left">
        {formatDisplayTime(timerMinutes)}: {formatDisplayTime(timerSecs)}
      </div>
      <div className="timer-control">
        <button className='start-stop' onClick={(e) => toggleCountDown()}>{isActive ? 'Stop' : 'Start'}</button>
        <button onClick={handleResetTimer}>Reset</button>
      </div>
    </div>
  )
}

export default Timer;
