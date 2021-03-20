import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers/rootReducer'
import App from './components/App/App';
import './Index.scss';
import initialState from './redux/initialState';


const store = createStore(rootReducer, initialState, composeWithDevTools())

store.subscribe(() => {
  window.localStorage.setItem('store', JSON.stringify(store.getState()))
})


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
