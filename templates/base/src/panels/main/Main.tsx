import React from 'react';
import { Button, ButtonGroup, Div, Panel, PanelHeader, Text } from "@vkontakte/vkui";

const Main: React.FC<{id: string}> = ({id}): JSX.Element => {

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