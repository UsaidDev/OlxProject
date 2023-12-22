import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {FirebaseContext} from './Store/Fire_context' 
import {firebase} from '../src/Firebase/config'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseContext.Provider value={{firebase}}>
    <App />
    </FirebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
