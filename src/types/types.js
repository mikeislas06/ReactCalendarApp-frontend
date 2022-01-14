export const types = {
  // UI types
  uiOpenModal: '[ui] Open Modal',
  uiCloseModal: '[ui] Close Modal',

  // Calendar types
  eventLogout: '[event] Event logout',
  eventSetActive: '[event] Set Active',
  eventStartAddNew: '[event] Start Add New',
  eventAddNew: '[event] Add New',
  eventClearActiveEvent: '[event] Clear Active Event',
  eventUpdated: '[event] Event Updated',
  eventDeleted: '[event] Event Deleted',
  eventLoaded: '[event] Events loaded',

  // Auth types
  authCheckingFinish: '[auth] Finish checking login state',
  authLogin: '[auth] Start login',
  authStartRegister: '[auth] Start Register',
  authStartTokenRenew: '[auth] Start token renew',
  authLogout: '[auth] Logout',
};
