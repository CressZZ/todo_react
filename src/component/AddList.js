import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from 'actions/action'
import PropTypes from 'prop-types';


function AddList(props){

    let onAddTodo = function(event){
        let id = props.nextId;
        let content = event.target.parentNode.previousSibling.value;
        let regDate = new Date().toISOString().slice(0,10);

        props.onAddTodo({id, content, regDate}); //  dispatch
        event.target.parentNode.previousSibling.value = ''; // input 값 초기화 
    };

    return (
        <div className="mb-5">
            <div className="input-group mb-3">
                <input type="text" className="form-control col-md-5" placeholder="할일 입력" aria-label="할일 입력" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button onClick={onAddTodo} className="btn btn-outline-secondary test" type="button" id="button-addon2">할일추가</button>
                </div>
            </div>
        </div>
    );
}

AddList.propTypes = {
    onAddTodo: PropTypes.func,
    nextId: PropTypes.number
}

const mapStateToProps = state => {
    return {
        nextId: state.nextId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (todo) => dispatch(addTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddList)

