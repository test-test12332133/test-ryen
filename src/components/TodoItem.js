import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import Wrapper from './atoms/Wrapper';
import Button from './atoms/Button';
import Input from './atoms/Input';
import Checkbox from './atoms/Checkbox';

import { deleteTodoItem, editTodoItem } from '../redusers/actions';

const TodoItem = ({ text, id, isChecked, onClickCheckbox }) => {
    const dispatch = useDispatch()
    const [isFocus, setIsFocus] = useState(true)
    const [newText, handleNewText] = useState(text)

    const deleteTodo = () => dispatch(deleteTodoItem(id))

    const editTodo = () => dispatch(editTodoItem(id, newText))

    return (
        <Wrapper direction='row' display='flex'>
            <Checkbox onChange={onClickCheckbox} />
            <Input
                value={isFocus ? text : newText}
                onChange={(e) => handleNewText(e.target.value)}
                onFocus={() => setIsFocus(false)}
                onBlur={editTodo}
                isItem
                disabled={isChecked}
            />
            <Button
                icon={faTrashAlt}
                onClick={deleteTodo}
                color='#d6d1d1'
                bgColor='transparent'
                hoverColor='#9a9a9a' />
        </Wrapper>
    )
}

export default TodoItem;