import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Red_Login from './Reducer/login/index'


const reducers = combineReducers({
  Red_Login,

});

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;