import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import style from 'style/TodoList.module.scss'


export default function TodoList(props){
    let todoList = props.todoList;
    var items = todoList.map((item, idx)=>
        <Item key={idx} item={item} />
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
  