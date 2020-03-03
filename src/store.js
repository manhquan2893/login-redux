import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import rootSaga from './sagas'
let sagaMiddleware=createSagaMiddleware()
export const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga)
