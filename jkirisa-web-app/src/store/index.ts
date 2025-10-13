import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';

const composeEnhancers = 
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);
export const store = createStore((state => state) as any, enhancer);