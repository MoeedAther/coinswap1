import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./App.css";
import App from './App';
import reportWebVitals from './reportWebVitals'; 
// import {PersistGate} from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist';
import store from "./app/store.js"
// let persistor=persistStore(store)
 

 //import done from redux library
 import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    {/* <PersistGate persistor={persistor}> */}
      <Provider store={store}>
    <App />
    </Provider>
    {/* </PersistGate> */}
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
