import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store';

import App from './containers/App';

const store = configureStore();

const rootReactElement = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);
const target = document.getElementById('root');
const root = createRoot(target);
root.render(rootReactElement);
// commentaire test
