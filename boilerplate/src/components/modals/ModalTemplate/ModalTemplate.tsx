import React from 'react';
import { Div, ModalPage } from "@vkontakte/vkui";

const ModalTemplate: React.FC<HTMLDivElement> = ({id}: HTMLDivElement): JSX.Element => {
  return (
    <ModalPage id={id}>
      <Div>
        Наша кастомная модальная страница!
      </Div>
    </ModalPage>
  );
};

export default ModalTemplate;