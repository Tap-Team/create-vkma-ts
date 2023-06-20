import React from 'react';

import { Badge, CellButton } from '@vkontakte/vkui';

import styles from './IconBadgeButton.module.scss';

interface IIconBadgeButton {
  badge?: boolean;
  ariaLabel?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => unknown;
}

const IconBadgeButton = ({
  badge,
  ariaLabel = 'Кнопка',
  onClick,
  children,
}: React.PropsWithChildren<IIconBadgeButton>) => {
  return (
    <CellButton
      aria-label={ariaLabel}
      className={styles.badge_icon}
      badgeAfterTitle={badge && <Badge mode={'prominent'} />}
      onClick={onClick}
    >
      {children}
    </CellButton>
  );
};

export default IconBadgeButton;
