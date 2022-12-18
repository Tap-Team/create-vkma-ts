import React from 'react';
import ReactDOM from 'react-dom';
import { BridgePlus } from '@happysanta/bridge-plus'
import App from './App';
import { RouterContext } from '@happysanta/router';
import { router } from './router';
import { RecoilRoot } from 'recoil';

// Init VK  Mini App
BridgePlus.init();

ReactDOM.render(
  <RouterContext.Provider value={router}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
  </RouterContext.Provider>,
document.getElementById('root'));


if (process.env.NODE_ENV === 'development') {
  import('./eruda').then(({default: eruda}) => {
})} // runtime download