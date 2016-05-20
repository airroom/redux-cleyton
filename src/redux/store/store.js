import { createStore } from 'redux';
import DevTools from 'src/containers/DevTools';

export default function configureStore() {
  return createStore(
    DevTools.instrument()
  );
}
