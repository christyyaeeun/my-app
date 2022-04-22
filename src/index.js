import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import {createRoot} from 'react-dom/client';
import './styles/style.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

// const root = ReactDOM.createRoot(document.getElementById("root"));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
<StrictMode>
    <BrowserRouter>
      <ColorModeScript />
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
    
  </StrictMode>
  );
  // serviceWorker.unregister();
  reportWebVitals();