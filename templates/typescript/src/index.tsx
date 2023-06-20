import React from 'react';
import { createRoot } from 'react-dom/client';

import bridge from '@vkontakte/vk-bridge';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import { Provider } from 'react-redux';

import App from '@/app/App';
import { router } from '@/shared/routing/routes';
import { store } from '@/shared/store/store';

// Init VK  Mini App
bridge.send('VKWebAppInit');

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
