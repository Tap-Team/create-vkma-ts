import { Page, Router } from "@happysanta/router";

// region PAGES
export const PAGE_MAIN: string = "/";
export const PAGE_ONBOARDING: string = "/onboarding";
// endregion

// region PANELS
export const PANEL_MAIN: string = "panel_main";
export const PANEL_ONBOARDING: string = "panel_onboarding";
// endregion

// region MODALS
export const MODAL_TEMPLATE: string = "modal_template";
// endregion

// region POPOUTS
export const POPOUT_TEMPLATE: string = "popout_template";
// endregion

// region VIEWS
export const VIEW_MAIN: string = "view_main";
export const VIEW_ONBOARDING: string = "view_onboarding";
// endregion

const routes = {
  [PAGE_MAIN]: new Page(PANEL_MAIN, VIEW_MAIN),
  [PAGE_ONBOARDING]: new Page(PANEL_ONBOARDING, VIEW_ONBOARDING),
};

export const router = new Router(routes);
router.start();
