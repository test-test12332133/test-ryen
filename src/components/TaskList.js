import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import TodoItem from "./TodoItem";

import Wrapper from "./atoms/Wrapper";

import { selectList } from "../redusers/selectors";
import { createTodoItem, deleteTodoItem, editTodoItem, checkTodoItem } from "../redusers/actions";

const TaskList = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState({
    text: '', 
    isChecked: false,
  })

  

  return (
    <Wrapper>
      <TodoItem/>
    </Wrapper>
  )
}

export default TaskList;
