import React from 'react';
import { Provider } from 'react-redux';

import LayoutContainer from './components/Layout';

import store from './store/rootStore';

const App = () => (
  <Provider store={store}>
    <LayoutContainer />
  </Provider>
);

export default App;
