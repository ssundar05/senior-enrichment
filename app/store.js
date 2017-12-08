
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { createStore, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

  
  
  export default createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)))