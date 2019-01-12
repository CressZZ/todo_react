import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import style from 'style/TodoList.module.scss'


export default function TodoList(props){
    let todoList = props.todoList;
    let {onToggleDone, onDeleteTodo} = props;
    
    // props.mode에 따라 완료 리스트와 미완료 리스트 분리
    todoList = todoList.filter((item, idx)=>{
        return props.mode === "complete" ? item.done === true : item.done !== true;
    })

    // Item Component 생성
    var items = todoList.map((item, idx)=>
        <Item onDeleteTodo={onDeleteTodo} onToggleDone={onToggleDone} key={idx} item={item} />
    );

    return (
        <div className={style.container}>
        <h2> {props.mode === 'complete' ? '완료' : '미완료'} </h2>
            <ul className="list-group">
                {items}
            </ul>
        </div>
       
    );
}

TodoList.propTypes={
    todoList: PropTypes.array
}
  