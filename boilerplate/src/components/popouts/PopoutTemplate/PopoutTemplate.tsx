import React from 'react';
import { Alert } from '@vkontakte/vkui';
import { useRouter } from '@happysanta/router';

const PopoutTemplate = () => {
  const router = useRouter();

  return (
    <Alert
      onClose={() => {router.popPage()}}
      actions={[
        {
          title: 'Окей',
          autoclose: true,
          mode: 'default',
        },
      ]}
      text={"Наш кастомный попаут!"}
    />
  );
};

export default PopoutTemplate;