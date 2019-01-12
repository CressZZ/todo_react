import React from 'react';

import style from 'style/AddList.module.scss';

export default function AddList(){

    return (
        <div className={style.container}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="할일 입력" aria-label="할일 입력" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">할일추가</button>
                </div>
            </div>
        </div>
    );

}