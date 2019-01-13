// 액션 타입
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_DONE = 'TOGGLE_DONE';


// 액션 생산자
/**
 * 할일 추가
 * @param {object} todo {id, content, tegDate} - 추가 할 todo 아이탬
 */
export function addTodo(todo){
    return {type: ADD_TODO, todo}
};

/**
 * todo 삭제
 * @param {number} targetId - 삭제할 todo 아이탬의 ID 번호
 */
export function deleteTodo(targetId){
    return {type: DELETE_TODO, targetId}
};

/**
 * 완료/미완료 토글
 * @param {*} targetId - 토글할 todo 아이탬의 ID 번호
 */
export function toggleDone(targetId){
    return {type: TOGGLE_DONE, targetId}
};
