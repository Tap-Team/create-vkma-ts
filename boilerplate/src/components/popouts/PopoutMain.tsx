import React from 'react';
import { useLocation } from '@happysanta/router';
import {POPOUT_TEMPLATE} from "../../router";
import PopoutTemplate from "./PopoutTemplate/PopoutTemplate";

const Popout = (): JSX.Element => {
  const location = useLocation();
  switch (location.getPopupId()) {
    case POPOUT_TEMPLATE: return <PopoutTemplate/>;
    default: return null;
  }
};

export default Popout;