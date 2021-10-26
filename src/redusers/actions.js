import {
    CREATE_TODO_ITEM,
    CHECK_TODO_ITEM,
    DELETE_TODO_ITEM,
    EDIT_TODO_ITEM,
} from './constants';

export const createTodoItem = item => {
    return {
        type: CREATE_TODO_ITEM,
        payload: item,
    }
}

export const checkTodoItem = id => {
    return {
        type: CHECK_TODO_ITEM,
        payload: id,
    }
}

export const deleteTodoItem = id => {
    return {
        type: DELETE_TODO_ITEM,
        payload: id,
    }

};

export const editTodoItem = (id, text) => {
    return {
        type: EDIT_TODO_ITEM,
        payload: { text, id },
    }
}
