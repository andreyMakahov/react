import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';

const devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
    rootReducer,
    devToolsMiddleware ? compose(
        applyMiddleware(thunk),
        devToolsMiddleware
    ) : applyMiddleware(thunk)
);
