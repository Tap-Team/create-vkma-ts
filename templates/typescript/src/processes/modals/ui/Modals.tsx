import React from 'react';

import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { ModalRoot } from '@vkontakte/vkui';

const Modals = () => {
  const routeNavigator = useRouteNavigator();
  const { modal: activeModal } = useActiveVkuiLocation();
  return (
    <ModalRoot
      activeModal={activeModal}
      onClose={() => {
        routeNavigator.hideModal();
      }}
    >
      {/* Your modals */}
    </ModalRoot>
  );
};

export default Modals;
