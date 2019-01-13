import React, { Component } from 'react';
import Header from './component/Header'
import AddList from './component/AddList'
import TodoList from './component/TodoList'
import style from './App.module.scss';


class App extends Component {
  render() {
    return (
      <div className={`container ${style.App}`}>
        <Header />
        <AddList onAddTodo={this.handelAddTodo} />
        <TodoList mode={'nonComplete'}/>
        <TodoList mode={'complete'}/>
      </div>
    );
  }
}

export default App;
