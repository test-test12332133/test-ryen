import {
    CREATE_TODO_ITEM_START,
    CREATE_TODO_ITEM_SUCCESS,
    CREATE_TODO_ITEM_ERROR,

    CHECK_TODO_ITEM_START,
    CHECK_TODO_ITEM_SUCCESS,
    CHECK_TODO_ITEM_ERROR,

    DELETE_TODO_ITEM_START,
    DELETE_TODO_ITEM_SUCCESS,
    DELETE_TODO_ITEM_ERROR,

    EDIT_TODO_ITEM_START,
    EDIT_TODO_ITEM_SUCCESS,
    EDIT_TODO_ITEM_ERROR,

} from './constants';

export const createTodoItem = (item) => (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_TODO_ITEM_START,
            payload: [],
        })
        dispatch({
            type: CREATE_TODO_ITEM_SUCCESS,
            payload: [...getState().list.data, item],
        })
    }
    catch (err) {
        dispatch({
            type: CREATE_TODO_ITEM_ERROR,
            payload: err,
        });
    }
}

export const checkTodoItem = (id) => (dispatch, getState) => {
    try {
        dispatch({
            type: CHECK_TODO_ITEM_START,
            payload: [],
        })
        return dispatch({
            type: CHECK_TODO_ITEM_SUCCESS,
            payload: getState().list.map(el =>
                el.id === id ? { ...el, completed: !el.completed } : el,
            )
        })
    }
    catch (err) {
        dispatch({
            type: CHECK_TODO_ITEM_ERROR,
            payload: err,
        });
    }
}

export const deleteTodoItem = (id) => (dispatch, getState) => {
    try {
        dispatch({
            type: DELETE_TODO_ITEM_START,
            payload: [],
        })
        return dispatch({
            type: DELETE_TODO_ITEM_SUCCESS,
            payload: getState().list.filter(el => el.id !== id),
        })
    }
    catch (err) {
        dispatch({
            type: DELETE_TODO_ITEM_ERROR,
            payload: err,
        });
    }
};

export const editTodoItem = (id, text) => (dispatch, getState) => {
    try {
        dispatch({
            type: EDIT_TODO_ITEM_START,
            payload: [],
        })
        dispatch({
            type: EDIT_TODO_ITEM_SUCCESS,
            payload: getState().list.findIndex(el => el.id === id).text = text,
        })
    }
    catch (err) {
        dispatch({
            type: EDIT_TODO_ITEM_ERROR,
            payload: err,
        });
    }
}