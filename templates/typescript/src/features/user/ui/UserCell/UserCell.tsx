import React from 'react';

import { Avatar, SimpleCell } from '@vkontakte/vkui';

interface IUserCellProps {
  photo_200: string;
  id: number;
  city?: { id: number; title: string };
  first_name: string;
  last_name: string;
}

const UserCell = ({ photo_200, id, city, last_name, first_name }: IUserCellProps) => {
  return (
    <SimpleCell
      before={<Avatar src={photo_200} />}
      href={'https://vk.com/id' + id}
      subtitle={city?.title ?? 'Город не указан'}
      target={'_blank'}
    >
      {first_name} {last_name}
    </SimpleCell>
  );
};

export default UserCell;
