import React from 'react';

export default function Item(props){
    let item = props.item;
    let {onToggleDone, onDeleteTodo} = props;

    return (
        <li style={{listStyle:'none'}} className='col-md-5 p-0'>
            <div className="input-group mb-1" >
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input 
                            type="checkbox" 
                            aria-label="Checkbox for following text input"
                            checked = { item.done ? true : false }
                            onChange = {onToggleDone.bind(null, item.id)}
                        />
                    </div>
                </div>
                <div className="form-control">
                    {item.content}
                </div>
                <div className="input-group-append">
                    <button 
                        onClick={onDeleteTodo.bind(null, item.id)}
                        className="btn btn-outline-secondary" 
                        type="button" 
                        id="button-addon2">-</button>
                </div>
            </div>
        </li>
    );

}