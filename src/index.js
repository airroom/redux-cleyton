import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'src/components/App';
import DevTools from 'src/containers/DevTools';
import configureStore from 'src/redux/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
