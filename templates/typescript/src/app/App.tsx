import React, { useEffect, useState } from 'react';

import { BridgePlus } from '@happysanta/bridge-plus';
import bridge, { AppearanceType } from '@vkontakte/vk-bridge';
import {
  useActiveVkuiLocation,
  usePopout,
  useRouteNavigator,
} from '@vkontakte/vk-mini-apps-router';
import {
  View,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
  usePlatform,
  Root,
  ScreenSpinner,
} from '@vkontakte/vkui';
import { useDispatch } from 'react-redux';

import { setUser } from '@/entities/user/model/user.slice';
import Main from '@/pages/main/Main';
import Modals from '@/processes/modals/ui/Modals';
import useSystemAppearance from '@/shared/lib/useSystemAppearance';
import { DEFAULT_VIEW, DEFAULT_VIEW_PANELS } from '@/shared/routing/routes';

import './index.css';
import '@vkontakte/vkui/dist/vkui.css';
const App = () => {
  const {
    view: activeView = DEFAULT_VIEW,
    panel: activePanel = DEFAULT_VIEW_PANELS.HOME,
    modal: activeModal,
    panelsHistory,
  } = useActiveVkuiLocation();
  const systemAppearance = useSystemAppearance();
  const [appearance, setAppearance] = useState<AppearanceType>();
  const popout = usePopout();
  const platform = usePlatform();
  const routeNavigator = useRouteNavigator();
  const dispatch = useDispatch();

  useEffect(() => {
    routeNavigator.showPopout(
      process.env.NODE_ENV === 'production' && <ScreenSpinner size="large" />
    );

    const getTheme = async (): Promise<void> => {
      BridgePlus.subscribe('VKWebAppUpdateConfig', (data) => {
        try {
          setAppearance(data.appearance);
        } catch (e) {}
      });
    };

    const showOnboarding = async () => {
      const { keys } = await BridgePlus.storageGet(['onboarding']);
      if (!keys) return;
      if (keys[0].value === 'true') return;
      try {
        routeNavigator.hidePopout();
      } catch (e) {}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await bridge.send('VKWebAppShowSlidesSheet', {
        slides: [
          //   {
          //     media: {
          //       blob: 'data:image/png;base64,',
          //       type: 'image',
          //     },
          //     title: 'VK Mini App',
          //     subtitle: 'Супер крутое приложение!',
          //   },
        ],
      });
      await BridgePlus.storageSet('onboarding', 'true');
    };

    const fetchUser = async () => {
      const user = await BridgePlus.getUserInfo();
      dispatch(setUser(user));
    };

    getTheme();
    setTimeout(fetchUser, 1);
    // showOnboarding();
  }, []);

  const modal = <Modals />;

  const history = activeModal ? [] : panelsHistory;

  return (
    <ConfigProvider appearance={appearance || systemAppearance} platform={platform}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={popout} modal={modal}>
            <SplitCol>
              <Root activeView={activeView}>
                <View history={history} nav={DEFAULT_VIEW} activePanel={activePanel}>
                  <Main nav={DEFAULT_VIEW_PANELS.HOME} />
                </View>
              </Root>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
export default App;
