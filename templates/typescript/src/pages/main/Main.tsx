import React from 'react';

import { Icon24SlidersVerticalOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Div, Panel } from '@vkontakte/vkui';
import { useSelector } from 'react-redux';

import { BasePage } from '@/shared/model/basepage.model';
import { RootState } from '@/shared/store/store';
import HeaderPanel from '@/shared/ui/header/Header.panel';
import UserCell from '@/features/user/ui/UserCell/UserCell';

const Main: React.FC<BasePage> = ({ nav }) => {
  const routerNavigator = useRouteNavigator();
  const user = useSelector((state: RootState) => state.UserSlice.user);
  return (
    <Panel nav={nav} style={{ position: 'relative' }}>
      <HeaderPanel
        onClick={() => {
          routerNavigator.push('/');
        }}
        leftIcon={<Icon24SlidersVerticalOutline />}
      >
        VK Mini App
      </HeaderPanel>
      <Div>
        {user && (
          <UserCell
            photo_200={user.photo_200}
            id={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
          />
        )}
      </Div>
    </Panel>
  );
};

export default Main;
