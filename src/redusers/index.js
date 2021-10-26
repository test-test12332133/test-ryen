import {
    CREATE_TODO_ITEM,
    CHECK_TODO_ITEM,
    DELETE_TODO_ITEM,
    EDIT_TODO_ITEM,
} from './constants';

const initialState = {
    list: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {

        case CREATE_TODO_ITEM: {
            return {
                ...state,
                list: [...state.list, action.payload],
            }
        }

        case CHECK_TODO_ITEM: {
            return {
                ...state,
                list: state.list.map(el =>
                    el.id === action.payload ? { ...el, isChecked: !el.isChecked } : el,
                ),
            }
        }

        case DELETE_TODO_ITEM: {
            return {
                ...state,
                list: state.list.filter((el => el.id !== action.payload)),
            }
        }

        case EDIT_TODO_ITEM: {
            return {
                ...state,
                list: state.list.map(el =>
                    el.id === action.payload.id ? { ...el, text: action.payload.text } : el
                ),
            }
        }

        default:
            return state;
    }
}

export default reducer;
