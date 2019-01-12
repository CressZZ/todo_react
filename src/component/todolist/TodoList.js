import React from 'react';
import Item from './Item';

export default function TodoList(){

    return (
        <ul className="list-group">
            <Item />
            <Item />
            <Item />
        </ul>
    );

}