const generate_indextsx = (dependencies) => {
  return `import React from 'react';
import ReactDOM from 'react-dom';
${
  dependencies.indexOf("@happysanta/bridge-plus") !== -1
    ? "import { BridgePlus } from '@happysanta/bridge-plus';"
    : "import bridge from '@vkontakte/vk-bridge';"
}
import App from './App';\
${
  dependencies.indexOf("@happysanta/router") !== -1
    ? "\nimport { RouterContext } from '@happysanta/router';\nimport { router } from './router';"
    : ""
}\
${
  dependencies.indexOf("recoil") !== -1
    ? "\nimport { RecoilRoot } from 'recoil';"
    : ""
}

// Init VK  Mini App
${
  dependencies.indexOf("@happysanta/bridge-plus") !== -1
    ? "BridgePlus.init();"
    : "bridge.send('VKWebAppInit');"
}

ReactDOM.render(\
   ${
     dependencies.indexOf("@happysanta/router") !== -1
       ? "\n<RouterContext.Provider value={router}>"
       : ""
   }\
       ${dependencies.indexOf("recoil") !== -1 ? "\n<RecoilRoot>" : ""}
         <App />\
       ${dependencies.indexOf("recoil") !== -1 ? "\n</RecoilRoot>" : ""}\
    ${
      dependencies.indexOf("@happysanta/router") !== -1
        ? "\n</RouterContext.Provider>"
        : ""
    }
    ,
document.getElementById('root'));

${
  dependencies.indexOf("eruda") !== -1
    ? `if (process.env.NODE_ENV === 'development') {
  import('./eruda').then(({default: eruda}) => {
})} // runtime download`
    : ""
}
`;
};

module.exports = { generate_indextsx };
