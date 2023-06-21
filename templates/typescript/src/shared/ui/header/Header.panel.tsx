import React from 'react';

import { PanelHeader } from '@vkontakte/vkui';

import styles from './Header.panel.module.scss';
import IconBadgeButton from '../iconButton/IconBadgeButton';

interface IHeaderPanelProps {
  leftIcon?: React.ReactNode;
  onClick?: () => void;
  badge?: boolean;
  separator?: boolean;
  ariaLabel?: string;
}

const HeaderPanel = ({
  leftIcon,
  onClick,
  children,
  badge = false,
  separator = false,
  ariaLabel,
}: React.PropsWithChildren<IHeaderPanelProps>) => {
  return (
    <PanelHeader
      className={styles.header}
      before={
        leftIcon && (
          <IconBadgeButton ariaLabel={ariaLabel} badge={badge} onClick={onClick}>
            {leftIcon}
          </IconBadgeButton>
        )
      }
      separator={separator}
    >
      {children}
    </PanelHeader>
  );
};

export default HeaderPanel;
