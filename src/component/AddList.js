import React from 'react';

export default function AddList(props){

    let onAddTodo = function(event){
        // let value = event.target.parentNode.previousSibling.value;
        props.onAddTodo(event.target.parentNode.previousSibling.value);
        event.target.parentNode.previousSibling.value = ''
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