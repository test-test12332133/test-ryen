import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './utils/store';
import TaskList from './components/TaskList';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TaskList />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
