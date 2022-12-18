import React from 'react';
import { Button, ButtonGroup, Div, Panel, PanelHeader, Text } from "@vkontakte/vkui";
import { useRouter } from "@happysanta/router";
import { MODAL_TEMPLATE, POPOUT_TEMPLATE } from "../../router";
import {useRecoilValue} from "recoil";
import { templateAtom } from 'state';

const Main: React.FC<{id: string}> = ({id}): JSX.Element => {

  const router = useRouter()
  const templateAtomValue = useRecoilValue(templateAtom)

  const openModal = (): void => {
    router.pushModal(MODAL_TEMPLATE)
  }
  const openPopout = (): void => {
    router.pushPopup(POPOUT_TEMPLATE)
  }

  return (
    <Panel id={id}>
      <PanelHeader>
        Главная страница
      </PanelHeader>
      <Div>
        <Text>
          Здесь будет наш контент!
        </Text>
        <Text>
          Наше значение из состояние: {templateAtomValue}
        </Text>
        <ButtonGroup>
          <Button onClick={openModal}>
            Открыть модальную страницу
          </Button>
          <Button onClick={openPopout}>
            Открыть попаут
          </Button>
        </ButtonGroup>
      </Div>
    </Panel>
  );
};

export default Main;