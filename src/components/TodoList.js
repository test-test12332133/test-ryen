import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import Wrapper from "./atoms/Wrapper";
import Input from "./atoms/Input";

import TodoItem from "./TodoItem";

import { selectList } from "../redusers/selectors";
import { createTodoItem, deleteTodoItem, editTodoItem, checkTodoItem } from "../redusers/actions";

const TaskList = () => {
  const dispatch = useDispatch();  

  return (
    <Wrapper>
      <TodoItem/>
      <Input />
      
    </Wrapper>
  )
}

export default TaskList;
