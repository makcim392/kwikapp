import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const firebaseConfig = {
  apiKey: 'AIzaSyBvpYGjmCkABTWP-dM9u2M0S4OLFrwEjHI',
  authDomain: 'kwikapp-bb17e.firebaseapp.com',
  projectId: 'kwikapp-bb17e',
  storageBucket: 'kwikapp-bb17e.appspot.com',
  messagingSenderId: '606223644442',
  appId: '1:606223644442:web:309d1f16c959c3d60a9ea3',
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
