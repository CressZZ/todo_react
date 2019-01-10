import React, { Component } from 'react';
import Header from './component/Header'
import AddList from './component/AddList'
import CompleteList from './component/todolist/CompleteList'
import NonCompleteList from './component/todolist/NonCompleteList'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddList />
        <CompleteList />
        <NonCompleteList />


      </div>
    );
  }
}

export default App;
