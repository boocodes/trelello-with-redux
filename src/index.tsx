import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store, persistor } from './redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading = {null}
      >
        <App />
      </PersistGate>
  </Provider>
);


export * from './ui';
export * from './components';
export * from './types';