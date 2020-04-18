import { createStore, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
export const init = () => {
const reducer = combineReducers({
form: formReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer);
return store;
}