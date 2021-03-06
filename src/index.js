import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/pages/Main/App';
import reportWebVitals from './reportWebVitals';
import { FlowContextProvider } from './app/context/FlowContext'

ReactDOM.render(
  <React.StrictMode>
    <FlowContextProvider>
      <App />
    </FlowContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
