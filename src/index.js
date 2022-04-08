import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import './styles/style.css'
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <BrowserRouter>
    <Routes>
    <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
reportWebVitals();
