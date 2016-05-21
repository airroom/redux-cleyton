import { createStore } from 'redux';
import DevTools from 'src/containers/DevTools';
import reducers from 'src/redux/reducers/reducers.js';

export default function configureStore() {
  return createStore(
    reducers,
    DevTools.instrument()
  );
}
