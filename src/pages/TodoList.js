import { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import Wrapper from '../components/atoms/Wrapper';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import TodoItem from '../components/TodoItem';

import { selectList } from '../redusers/selectors';
import { createTodoItem, checkTodoItem } from '../redusers/actions';

const TodoList = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()
  const data = useSelector(selectList, shallowEqual);
  console.log(data);

  const newId = data?.map(el => el.id).length ? Math.max(...data?.map(el => el.id)) + 1 : 1


  const addNewTodo = () => {
    if (text === '') return
    dispatch(createTodoItem(
      {
        id: newId,
        text: text,
        isChecked: false,
      }
    ))
    setText('')
  }

  const checkTodo = (id) => dispatch(checkTodoItem(id))

  return (
    <Wrapper direction='column' display='flex'>
      ToDo
      <Wrapper direction='row' display='flex'>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Add a task'
          background='#EBEBEB'
        />
        <Button
          text='Add Task'
          onClick={addNewTodo}
          bgColor='#849FFF'
          color='black'
          width='74px'
          hoverColor='#fff' />
      </Wrapper>
      <Wrapper shadow direction='column' display={!data.length ? 'none' : 'flex'} width='300px'>
        {data.map((el) => (
          <TodoItem
            text={el.text}
            id={el.id}
            key={el.id}
            onClickCheckbox={() => checkTodo(el.id)}
            isChecked={el.isChecked} />
        ))
        }
      </Wrapper>
    </Wrapper>
  )
}

export default TodoList;
