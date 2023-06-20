import React from 'react';

import { Icon24SlidersVerticalOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Avatar, Div, Panel, SimpleCell } from '@vkontakte/vkui';
import { useSelector } from 'react-redux';

import { BasePage } from '@/shared/model/basepage.model';
import { RootState } from '@/shared/store/store';
import HeaderPanel from '@/shared/ui/header/Header.panel';

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
          <SimpleCell
            before={<Avatar src={user.photo_200} />}
            href={'https://vk.com/id' + user.id}
            subtitle={user.city?.title ?? 'Город не указан'}
          >
            {user.first_name} {user.last_name}
          </SimpleCell>
        )}
      </Div>
    </Panel>
  );
};

export default Main;
