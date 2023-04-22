const generate_apptsx = (dependencies) => {
  return `import React, { useEffect, useState } from 'react';
${
  dependencies.indexOf("@happysanta/bridge-plus") !== -1
    ? "import { BridgePlus } from '@happysanta/bridge-plus';"
    : "import bridge from '@vkontakte/vk-bridge';"
}\
${
  dependencies.indexOf("@happysanta/router") !== -1
    ? "\nimport { useLocation, useRouter } from '@happysanta/router';"
    : ""
}
import {
  View,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol, usePlatform, Root,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';\
${
  dependencies.indexOf("@happysanta/router") !== -1
    ? "\nimport { \n" +
      "  PAGE_ONBOARDING,\n" +
      "  PANEL_MAIN, PANEL_ONBOARDING,\n" +
      "  VIEW_MAIN,\n" +
      "  VIEW_ONBOARDING\n" +
      "} from './router';"
    : ""
}
import Main from './panels/main/Main';
import Onboarding from './panels/onboarding/Onboarding';
import {AppearanceType} from '@vkontakte/vk-bridge';

const App = () => {
  const [appearance, setAppearance] = useState<AppearanceType>('light')\
  ${
    dependencies.indexOf("@happysanta/router") !== -1
      ? ""
      : "\n\tconst [activeView, setActiveView] = useState('main_view')\n" +
        "\tconst [activePanel, setActivePanel] = useState('panel_main')"
  }
  \
  ${
    dependencies.indexOf("@happysanta/router") !== -1
      ? "\n\tconst router = useRouter();\n" + "  const location = useLocation();"
      : ""
  }
  const platform = usePlatform();

  useEffect( () => {
    /**
     * Получает пользовательскую тему
     */
    const getTheme = async (): Promise<void> => {
      ${
        dependencies.indexOf("@happysanta/bridge-plus") !== -1
          ? 'BridgePlus.subscribe("VKWebAppUpdateConfig", (data) => {\n' +
            "      try {\n" +
            "        //@ts-ignore\n" +
            "        setAppearance(data.appearance)\n" +
            "      }\n" +
            "      catch (e) {\n" +
            "      }\n" +
            "    })"
          : "bridge.subscribe((e) => {\n" +
            "       if (e.detail.type === 'VKWebAppUpdateConfig') {\n" +
            "        //@ts-ignore\n" +
            "         setAppearance(e.detail.data.appearance)\n" +
            "       }\n" +
            "     });"
      }
    }
    
    /**
     * Проверяет нужно ли показывать онбординг, если да, то показывает
     */
    const ShowOnboarding = async (): Promise<void> => {
      ${
        dependencies.indexOf("@happysanta/bridge-plus") !== -1
          ? 'const onboardingIsShowed = await BridgePlus.storageGetKey("ONBOARDING_IS_SHOWED", "false");\n'
          : "const onboardingIsShowed = await bridge.send('VKWebAppStorageGet', {\n" +
            '         keys: ["ONBOARDING_IS_SHOWED"]})\n'
      }
      // @ts-ignore
      if (onboardingIsShowed !== \"true\") {
        ${
          dependencies.indexOf("@happysanta/router") !== -1
            ? "router.replacePage(PAGE_ONBOARDING)"
            : "setActiveView('onboarding_view')"
        }
        }
    }
    getTheme()
    ShowOnboarding()
  }, [])

  return (
    <ConfigProvider appearance={appearance} platform={platform}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <Root activeView={${
                dependencies.indexOf("@happysanta/router") !== -1
                  ? "location.getViewId()"
                  : "activeView"
              }}>
                <View
                  id={${
                    dependencies.indexOf("@happysanta/router") !== -1
                      ? "VIEW_MAIN"
                      : "'main_view'"
                  }}\
                  ${
                    dependencies.indexOf("@happysanta/router") !== -1
                      ? "\n\t\t\t\t\t\t\t\t\thistory={location.getViewHistory(VIEW_MAIN)}"
                      : ""
                  }
                  activePanel={${
                    dependencies.indexOf("@happysanta/router") !== -1
                      ? "location.getViewActivePanel(VIEW_MAIN)"
                      : "activePanel"
                  }}
                >
                  <Main id={${
                    dependencies.indexOf("@happysanta/router") !== -1
                      ? "PANEL_MAIN"
                      : "'panel_main'"
                  }}/>
                </View>
                <View
                  id={${
                    dependencies.indexOf("@happysanta/router") !== -1
                      ? "VIEW_ONBOARDING"
                      : "'onboarding_view'"
                  }}
                  activePanel={${
                    dependencies.indexOf("@happysanta/router") !== -1
                      ? "PANEL_ONBOARDING"
                      : "'panel_onboarding'"
                  }}
                >
                  <Onboarding
                    id={${
                    dependencies.indexOf("@happysanta/router") !== -1
                      ? "PANEL_ONBOARDING"
                      : "'panel_onboarding'"
                  }}\
                    ${
                      dependencies.indexOf("@happysanta/router") !== -1
                        ? ""
                        : "\n\t\t\t\t\t\t\t\t\t\tsetActiveView={setActiveView}"
                    }
                  />
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
  `;
};

module.exports = { generate_apptsx };
