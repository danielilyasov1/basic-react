import './App.css';
import React from 'react';
import ShowTime from './cmps/show-time.jsx'

export class App extends React.Component {
  render(){

    return (
      <div className="App">
        <h1>hello</h1>
        <ShowTime />
      </div>
    )
  }
}

export default App;
