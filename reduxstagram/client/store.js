import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts'
import { createBrowserHistory } from 'history';

const defaultState = {
    posts,
    comments,
};

// const enhancers = compose(
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// );

const store = createStore(rootReducer, defaultState);

export const history = createBrowserHistory();

// if (module.hot) {
//     module.hot.accept('./reducers/', () => {
//         const nextRootReducer = require('./reducers/index').default;
//         store.replaceReducer(nextRootReducer);
//     });
// }

export default store;