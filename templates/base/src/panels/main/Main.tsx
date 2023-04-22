import React from 'react';
import { Div, Panel, PanelHeader, Text } from "@vkontakte/vkui";
import { BasePanel } from '../../types/base';

const Main: React.FC<BasePanel> = ({id}) => {

  return (
    <Panel id={id}>
      <PanelHeader>
        Главная страница
      </PanelHeader>
      <Div>
        <Text>
          Здесь будет наш контент!
        </Text>
      </Div>
    </Panel>
  );
};

export default Main;