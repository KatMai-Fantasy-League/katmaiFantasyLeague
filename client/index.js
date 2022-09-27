import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

const container = document.getElementById('app');

render(<App tab='home' />, container);
