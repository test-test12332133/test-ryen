import { applyMiddleware, createStore } from 'redux';
import reducer from '../redusers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));