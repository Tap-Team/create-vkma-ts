import React, { useEffect, useState } from 'react';
import { BridgePlus } from '@happysanta/bridge-plus';
import { useLocation, useRouter } from '@happysanta/router';
import {
  View,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol, usePlatform, Root,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { templateAtom } from './state'

import {
  PAGE_ONBOARDING,
  PANEL_MAIN, PANEL_ONBOARDING,
  VIEW_MAIN,
  VIEW_ONBOARDING
} from './router'

import Main from './panels/main/Main';
import Popout from './components/popouts/PopoutMain';
import ModalMain from './components/modals/ModalMain';
import Onboarding from './panels/onboarding/Onboarding';
import {useSetRecoilState} from 'recoil';
import {AppearanceType} from '@vkontakte/vk-bridge';

const App = (): JSX.Element => {
  const [appearance, setAppearance] = useState('light')
  const setTemplateAtom = useSetRecoilState(templateAtom) // используем глобальное состояние

  const router = useRouter();
  const location = useLocation();
  const platform = usePlatform();

  const popout = Popout();
  const modal = ModalMain();

  useEffect( () => {
    /**
     * Получает пользовательскую тему
     */
    const getTheme = async (): Promise<void> => {
      BridgePlus.subscribe("VKWebAppUpdateConfig", (data) => {
        try {
          setAppearance(data.appearance)
        }
        catch (e) {
        }
      })
    }
    
    /**
     * Проверяет нужно ли показывать онбординг, если да, то показывает
     */
    const ShowOnboarding = async (): Promise<void> => {
      const onboardingIsShowed = await BridgePlus.storageGetKey("ONBOARDING_IS_SHOWED", "false");
      if (onboardingIsShowed !== "true") {
        router.replacePage(PAGE_ONBOARDING);
      }
    }
    getTheme()
    ShowOnboarding()
    setTemplateAtom("Мой крутое значение!") // запись значения в глобальное состояние
  }, [])

  return (
    <ConfigProvider appearance={appearance as AppearanceType} platform={platform}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout modal={modal} popout={popout}>
            <SplitCol>
              <Root activeView={location.getViewId()}>
                <View
                  id={VIEW_MAIN}
                  history={location.getViewHistory(VIEW_MAIN)}
                  activePanel={location.getViewActivePanel(VIEW_MAIN)}
                >
                  <Main id={PANEL_MAIN}/>
                </View>
                <View
                  id={VIEW_ONBOARDING}
                  activePanel={PANEL_ONBOARDING}
                >
                  <Onboarding id={PANEL_ONBOARDING}/>
                </View>
              </Root>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}

export default App;