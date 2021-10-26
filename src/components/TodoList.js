import { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import Wrapper from "./atoms/Wrapper";
import Input from "./atoms/Input";
import Button from './atoms/Button';
import TodoItem from "./TodoItem";

import { selectList } from "../redusers/selectors";
import { createTodoItem } from "../redusers/actions";

const TodoList = () => {
  const dispatch = useDispatch()
  const {
    data,
  } = useSelector(selectList, shallowEqual);

  const [text, setText] = useState('')

  const addNewTodo = () => {
    dispatch(createTodoItem(
      {
        text: text,
        isChecked: false,
      }
    ))
    setText('')
  }

  return (
    <Wrapper direction='column'>
      <Wrapper direction='row'>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button icon={faPlusSquare} onClick={addNewTodo} />
      </Wrapper>
      {
        data.map((el, id) => (
          <TodoItem text={el.text} id={id} />
        ))
      }
    </Wrapper>
  )
}

export default TodoList;
