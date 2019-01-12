import React from 'react';

export default function Item(){

    return (
        <li style={{listStyle:'none'}}>
            <div class="input-group mb-3" >
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with checkbox" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">-</button>
                </div>
            </div>
        </li>
    );

}