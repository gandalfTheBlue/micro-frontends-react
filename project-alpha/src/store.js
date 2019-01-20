import createHashHistory from 'history/createHashHistory';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { reducers } from './reducers';

const env = process.env.NODE_ENV;
const basename = env === 'production' ? '/app1' : '';
export const history = createHashHistory({ basename });
const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));
export default store;
