import React from 'react';
import { Button, ButtonGroup, Div, Panel, PanelHeader, Text } from "@vkontakte/vkui";
import { useRouter } from "@happysanta/router";
import {BridgePlus} from "@happysanta/bridge-plus";
import {PAGE_MAIN} from '../../router';

const Onboarding: React.FC<{id: string}> = ({id}): JSX.Element => {

  const router = useRouter()

  const onboardingHandler = async () => {
    await BridgePlus.storageSet("ONBOARDING_IS_SHOWED", "true");
    router.pushPage(PAGE_MAIN);
  }

  return (
    <Panel id={id}>
      <PanelHeader>
        Онбоардинг
      </PanelHeader>
      <Div>
        <Text>
          Здесь будет наш контент при первом запуске!
        </Text>
        <Text>
          Наше значение из состояние: {templateAtomValue}
        </Text>
        <ButtonGroup>
          <Button onClick={onboardingHandler}>
            На главную!
          </Button>
        </ButtonGroup>
      </Div>
    </Panel>
  );
};

export default Onboarding;