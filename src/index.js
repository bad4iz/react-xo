import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Game from './game';
import './index.css';
ReactDOM.render(
  <Game/>
  , document.getElementById('root'));
registerServiceWorker();
