import React, { Component } from 'react';
import Header from './component/Header'
import AddList from './component/AddList'
import TodoList from './component/TodoList'
import style from './App.module.scss';


class App extends Component {
  // Default State
  state={
    lastId: 2, 
    todoList : [
      { 
        id: 1,
        done: true,
        content: 'Default Item-1',
        regDate: '2019-01-01' 
      },
      {
        id: 2,
        done: false,
        content: 'Default Item-2',
        regDate: '2019-01-02' 
      },
    ]
  }

  // 추가하기
  handelAddTodo = (todo) =>{
    let newLastId = this.state.lastId + 1;

    this.setState({
      todoList: this.state.todoList.concat({
        id: newLastId,
        done: false,
        content: todo,
        regDate: new Date().toISOString().slice(0,10)
      }),
      lastId: newLastId
    })
  }

  // 삭제하기
  handleDeleteTodo=(targetId)=>{
    let targetItemIdx = this.state.todoList.findIndex((item)=>{
      return item.id === targetId;
    })
    
    let newTodoList = [
      ...this.state.todoList.slice(0, targetItemIdx),
      ...this.state.todoList.slice(targetItemIdx+1)
    ]

    this.setState({
      todoList : newTodoList
    })
  }

  // 완료/미완료 변경
  handleToggleDone = (targetId, e) => {
    let targetItemIdx = this.state.todoList.findIndex((item)=>{
      return item.id === targetId;
    })
    let targetItem = this.state.todoList[targetItemIdx];
    
    let newTodoList = [
      ...this.state.todoList.slice(0, targetItemIdx),
      Object.assign(targetItem,{done: !targetItem.done}),
      ...this.state.todoList.slice(targetItemIdx+1)
    ]

    this.setState({
      todoList : newTodoList
    })
  }

  render() {
    return (
      <div className={`container ${style.App}`}>
        <Header />
        <AddList 
          onAddTodo={this.handelAddTodo} />
        <TodoList 
          onToggleDone={this.handleToggleDone} 
          onDeleteTodo = {this.handleDeleteTodo}
          todoList = {this.state.todoList} 
          mode={'nonComplete'}/>
        <TodoList 
          onToggleDone={this.handleToggleDone} 
          onDeleteTodo = {this.handleDeleteTodo}
          todoList = {this.state.todoList} 
          mode={'complete'}/>
      </div>
    );
  }
}

export default App;
