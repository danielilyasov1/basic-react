import './App.css';
import React from 'react';
import './App.css';
import ShowTime from './cmps/show-time.jsx';
import CountDown from './cmps/count-down.jsx';
import WhoWatch from './cmps/who-watch.jsx';

function App() {


  function endTimeSound() {
      const endTimeSound = new Audio('sound/WillBeRightBack.mp3')
      endTimeSound.play()
  }

  return (
      <>
          <ShowTime />
          <CountDown targetTime={Date.now() + 1000 * 30} dueFanc={endTimeSound} />
          <WhoWatch />
      </>
  )
}


export default App
