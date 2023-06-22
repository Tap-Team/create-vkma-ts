import React from 'react';
import { createRoot } from 'react-dom/client';

import { BridgePlus } from '@tap_team/bridge-plus';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import { Provider } from 'react-redux';

import App from '@/app/App';
import { router } from '@/shared/routing/routes';
import { store } from '@/shared/store/store';

// Init VK  Mini App
BridgePlus.init();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
