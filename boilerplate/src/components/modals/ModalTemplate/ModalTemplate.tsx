import React from 'react';
import { Div, ModalPage } from "@vkontakte/vkui";

const ModalTemplate: React.FC<{id: string}> = ({id}): JSX.Element => {
  return (
    <ModalPage id={id}>
      <Div>
        Наша кастомная модальная страница!
      </Div>
    </ModalPage>
  );
};

export default ModalTemplate;