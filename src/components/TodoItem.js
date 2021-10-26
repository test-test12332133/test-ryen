import { useDispatch } from 'react-redux';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import Wrapper from './atoms/Wrapper';
import Button from './atoms/Button';

import { deleteTodoItem, editTodoItem, checkTodoItem } from '../redusers/actions';

const TodoItem = ({ text, id }) => {
    const dispatch = useDispatch()

    const deleteTodo = () => {
        
    }

    const editTodo = () => {

    }

    const checkTodo = () => {

    }

    return (
        <Wrapper direction='row'>
            {text}
            <Button icon={faEdit} />
            <Button icon={faTrashAlt} />
        </Wrapper>
    )
}

export default TodoItem;