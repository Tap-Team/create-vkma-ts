const generate_onboardingtsx = (dependencies) => {
  return `import React${
    dependencies.indexOf("@happysanta/router") !== -1
      ? ""
      : ", {Dispatch, SetStateAction}"
  } from 'react';
import { Button, ButtonGroup, Div, Panel, PanelHeader, Text } from '@vkontakte/vkui';
${
  dependencies.indexOf("@happysanta/router") !== -1
    ? "import { useRouter } from '@happysanta/router';\nimport {PAGE_MAIN} from '../../router';"
    : ""
}
${
  dependencies.indexOf("@happysanta/bridge-plus") !== -1
    ? "import {BridgePlus} from '@happysanta/bridge-plus';"
    : "import bridge from '@vkontakte/vk-bridge';"
}
import { BasePanel } from '../../types/base';

const Onboarding: React.FC<BasePanel${
    dependencies.indexOf("@happysanta/router") !== -1
      ? ""
      : " & {setActiveView:  Dispatch<SetStateAction<string>>}"
  }> = ({id${
    dependencies.indexOf("@happysanta/router") !== -1 ? "" : ", setActiveView"
  }}): JSX.Element => {

  ${
    dependencies.indexOf("@happysanta/router") !== -1
      ? "const router = useRouter()"
      : ""
  }
  
  const onboardingHandler = async () => {
   await ${
     dependencies.indexOf("@happysanta/bridge-plus") !== -1
       ? "BridgePlus.storageSet('ONBOARDING_IS_SHOWED', 'true');"
       : "bridge.send('VKWebAppStorageSet', {\n" +
         "       key: 'ONBOARDING_IS_SHOWED',\n" +
         "       value: 'true'\n" +
         "  })"
   }
   ${
     dependencies.indexOf("@happysanta/router") !== -1
       ? "router.pushPage(PAGE_MAIN);"
       : "setActiveView('main_view')"
   }
  }

  return (
    <Panel id={id}>
      <PanelHeader>
        Онбоардинг
      </PanelHeader>
      <Div>
        <Text>
          Здесь будет наш контент при первом запуске!
        </Text>
        <ButtonGroup>
          <Button onClick={onboardingHandler}>
            На главную!
          </Button>
        </ButtonGroup>
      </Div>
    </Panel>
  );
};

export default Onboarding;
  `;
};

module.exports = { generate_onboardingtsx };
