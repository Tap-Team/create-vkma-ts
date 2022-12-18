import React from 'react';
import { useLocation, useRouter } from '@happysanta/router';
import { ModalRoot } from "@vkontakte/vkui";
import ModalTemplate from "./ModalTemplate/ModalTemplate";
import { MODAL_TEMPLATE } from 'router';

const ModalMain = (): JSX.Element => {
  const location = useLocation();
  const router = useRouter();
  return (
    <ModalRoot
      activeModal={location.getModalId()}
      onClose={() => router.popPage()}
    >
      <ModalTemplate id={MODAL_TEMPLATE}/>
    </ModalRoot>
  )
};

export default ModalMain;