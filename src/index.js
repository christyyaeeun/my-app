import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import Landing from './pages/Landing'
import './styles/style.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<StrictMode>
<ChakraProvider theme={theme}>

    <BrowserRouter>
      <ColorModeScript />
      <Routes>
      <Route path="/landing" element={<Landing />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
    ,
  </StrictMode>
  );
  // serviceWorker.unregister();
  reportWebVitals();