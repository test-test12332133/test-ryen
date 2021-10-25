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

const initialState = {
    list: {
        data: [],
        isLoading: false,
        error: false,
    },
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO_ITEM_START: {
            return {
                ...state,
                list: {
                    data: [],
                    isLoading: true,
                    error: false,
                }
            }
        }
        case CREATE_TODO_ITEM_SUCCESS: {
            return {
                ...state,
                list: {
                    data: action.payload,
                    isLoading: false,
                    error: false,
                }
            }
        }
        case CREATE_TODO_ITEM_ERROR: {
            return {
                ...state,
                list: {
                    data: [],
                    isLoading: false,
                    error: action.error,
                }
            }
        }

        case CHECK_TODO_ITEM_START: {
            return {
                ...state,
                list: {
                    data: [],
                    isLoading: true,
                    error: false,
                }
            }
        }
        case CHECK_TODO_ITEM_SUCCESS: {
            return {
                ...state,
                list: {
                    data: action.payload,
                    isLoading: false,
                    error: false,
                }
            }
        }
        case CHECK_TODO_ITEM_ERROR: {
            return {
                ...state,
                list: {
                    data: [],
                    isLoading: false,
                    error: action.error,
                }
            }
        }
        case DELETE_TODO_ITEM_START: {
            return {
                ...state,
                list: {
                    data: [],
                    isLoading: true,
                    error: false,
                }
            }
        }
        case DELETE_TODO_ITEM_SUCCESS: {
            return {
                ...state,
                list: {
                    data: action.payload,
                    isLoading: false,
                    error: false,
                }
            }
        }
        case DELETE_TODO_ITEM_ERROR: {
            return {
                ...state,
                list: {
                    data: [],
                    isLoading: false,
                    error: action.error,
                }
            }
        }
        case EDIT_TODO_ITEM_START: {
            return {
                ...state,
                list: {
                    data: [],
                    isLoading: true,
                    error: false,
                }
            }
        }
        case EDIT_TODO_ITEM_SUCCESS: {
            return {
                ...state,
                list: {
                    data: action.payload,
                    isLoading: false,
                    error: false,
                }
            }
        }
        case EDIT_TODO_ITEM_ERROR: {
            return {
                ...state,
                list: {
                    data: [],
                    isLoading: false,
                    error: action.error,
                }
            }
        }
        default:
            return state;
    }
}

export default reducer;