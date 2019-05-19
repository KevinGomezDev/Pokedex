import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';

import MainLayout from './components/MainLayout/';

const store = configureStore(initialState);

function App() {
  return <Provider store={store}>
    <Router> 
      <MainLayout />
    </Router>
  </Provider>
}

export default App;
