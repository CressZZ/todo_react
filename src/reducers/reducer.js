import {combineReducers} from 'redux'
import {ADD_TODO, DELETE_TODO, TOGGLE_DONE} from 'actions/action'

/**
 * todoList
 * @param {array} state 
 * @param {object} action 
 */
function todoList(state=[], action){
    switch(action.type){
        // action: {type, action, cantent, regData}
        case ADD_TODO:
            return state.concat({
                id: action.todo.id,
                done: false,
                content: action.todo.content,
                regDate: action.todo.regDate
            })
        // action: {type, targetId}
        case DELETE_TODO: {
            let targetItemIdx = state.findIndex((item)=>{
                return item.id === action.targetId;
            })

            return [
                ...state.slice(0, targetItemIdx),
                ...state.slice(targetItemIdx+1)
            ]
        }
        // action: {type, targetId}
        case TOGGLE_DONE: {
            let targetItemIdx = state.findIndex((item)=>{
                return item.id === action.targetId;
            })

            let targetItem = state[targetItemIdx];

            return [
                ...state.slice(0, targetItemIdx),
                Object.assign(targetItem,{done: !targetItem.done}),
                ...state.slice(targetItemIdx+1)
            ]
        }
        default:
            return state;
    }
}

/**
 * 다음에 추가될 아이템에 부여할 ID 번호
 * @param {number} state 
 * @param {object} action 
 */
function nextId(state=0, action){
    switch(action.type){
        case ADD_TODO:
            return action.todo.id+1;
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todoList,
    nextId
});

export default todoApp;