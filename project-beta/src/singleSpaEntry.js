import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import './index.css';
import App from './components/app';
import singleSpaReact from 'single-spa-react';
import { history } from './store';

const RootComponent = props => (
  <Provider store={props.store}>
    <Router history={history}>
      <App {...props} />
    </Router>
  </Provider>
);

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootComponent,
  domElementGetter
});

export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  return reactLifecycles.unmount(props);
}

function domElementGetter() {
  return document.getElementById('app2');
}
