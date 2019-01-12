import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './component/Header'
import AddList from './component/AddList'
import TodoList from './component/TodoList'
import style from './App.module.scss';


class App extends Component {
  render() {
    return (
      <div className={`container ${style.App}`}>
        <Header />
        <AddList />
        <TodoList todoList = {this.props.todoList} mode={'complete'}/>
        <TodoList todoList = {this.props.todoList} mode={'nonComplete'}/>
      </div>
    );
  }
}

App.defaultProps = {
  todoList : [
    'todo1', 'todo2'
  ]
}

App.propTypes={
  todoList: PropTypes.array
}
export default App;
