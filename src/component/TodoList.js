import React from 'react';
import Item from './Item';
import style from 'style/TodoList.module.scss'
import { connect } from 'react-redux'
import { toggleDone, deleteTodo } from 'actions/action'
import PropTypes from 'prop-types';


function TodoList(props){
    let {onToggleDone, onDeleteTodo, completeTodoList, nonCompleteTodoList} = props;
    
    // props.mode에 따라 완료 리스트와 미완료 리스트 분리
    let todoList = props.mode === "complete" ? completeTodoList : nonCompleteTodoList ;

    // Item Component 생성
    var items = todoList.map((item, idx)=>
        <Item 
            onDeleteTodo={onDeleteTodo} 
            onToggleDone={onToggleDone} 
            key={idx} 
            item={item} 
        />
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
    // react
    mode: PropTypes.string,
    // redux
    completeTodoList: PropTypes.array,
    nonCompleteTodoList: PropTypes.array,
    onDeleteTodo: PropTypes.func,
    onToggleDone: PropTypes.func,
}

const mapStateToProps = state => {
    return {
        // 완료한 할일 리스트
        completeTodoList: state.todoList.filter((todoList)=>{
            return todoList.done === true;
        }),
        // 미완료한 할일 리스트
        nonCompleteTodoList: state.todoList.filter((todoList)=>{
            return todoList.done !== true;
        })
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteTodo: targetItemIdx => dispatch(deleteTodo(targetItemIdx)),
        onToggleDone: targetItemIdx => dispatch(toggleDone(targetItemIdx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

