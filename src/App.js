import './App.css';
import React from 'react';
import Timer from './component/timer';

function App() {
  // const [timer, setTimer] = useState(300);
  // const [timerMinutes, setTimerMinutes] = useState('00');
  // const [timerSecs, setTimerSecs] = useState('00');
  // const [timerIsValid, setTimerIsValid] = useState(false);
  // let isActive = timerIsValid !== false;

  // useEffect(() => {
  //   let time = secondsToTime(timer)
  //   setTimerMinutes(time[0])
  //   setTimerSecs(time[1])
  // }, [timer])


  // function toggleCountDown() {
  //   if (isActive) {
  //     // started mode
  //     if (timerIsValid) {
  //       clearInterval(timerIsValid)
  //     }
  //     setTimerIsValid(null)
  //   } else {
  //     // stopped mode
  //     // create accurate date timer with date
  //     const newIntervalId = setInterval(() => {
  //       setTimer(prevTime => {
  //         let newTime = prevTime - 1
  //         let time = secondsToTime(newTime)
  //         setTimerMinutes(time[0])
  //         setTimerSecs(time[1])
  //         return newTime
  //       })
  //     }, 1000)
  //     setTimerIsValid(newIntervalId)
  //   }
  // }

  // // return minutes and seconds of seconds
  // function secondsToTime(seconds) {
  //   return [Math.floor(seconds / 60), seconds % 60]
  // }

  // function handleResetTimer() {
  //   if (timerIsValid) {
  //     clearInterval(timerIsValid)
  //   }
  //   setTimerIsValid(null)
  //   setTimer(1500)
  // }

  // // zero paddings if < 10
  // function formatDisplayTime(time) {
  //   if (time < 10) {
  //     return `0${time}`
  //   } else {
  //     return time
  //   }
  // }

  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
