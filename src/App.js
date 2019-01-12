import React, { Component } from 'react';
import Header from './component/Header'
import AddList from './component/AddList'
import CompleteList from './component/todolist/CompleteList'
import NonCompleteList from './component/todolist/NonCompleteList'


import style from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={`container ${style.App}`}>
        <Header />
        <AddList />
        <CompleteList />
        <NonCompleteList />
      </div>
    );
  }
}

export default App;
