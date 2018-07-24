const safeNodeApp = require('@maidsafe/safe-node-app');
const app = require('electron').remote.app;

const customExecPath = [process.execPath, app.getAppPath()];
let safeApp;

async function sendAuthRequest() {
  console.log('Authorising SAFE application...');
  let appInfo = {
    // User-facing name of our app. It will be shown
    // in the Authenticator user's interface.
    name: 'Hello SAFE Network',
    // This is a unique ID of our app
    id: 'net.maidsafe.tutorials.desktop-app',
    version: '0.1.0',
    vendor: 'MaidSafe.net Ltd.',
    bundle: 'com.github.electron',
    customExecPath
  };
  safeApp = await safeNodeApp.initialiseApp(appInfo);
  const authUri = await safeApp.auth.genAuthUri({});
  await safeApp.auth.openUri(authUri);
}

let md;

async function uponAuthResponse(resAuthUri) {
  console.log("Authorisation response received");

  await safeApp.auth.loginFromUri(resAuthUri);
  console.log("Application connected to the network");

  const typeTag = 15000;
  md = await safeApp.mutableData.newRandomPublic(typeTag);
  const initialData = {
    "random_key_1": JSON.stringify({
        text: 'Scotland to try Scotch whisky',
        made: false
      }),
    "random_key_2": JSON.stringify({
        text: 'Patagonia before I\'m too old',
        made: false
      })
  };
  await md.quickSetup(initialData);
}

async function getItems() {
  return [];
};

async function insertItem(key, value) {
};

async function updateItem(key, value, version) {
};

async function removeItems(items) {
};

module.exports = {
  sendAuthRequest,
  uponAuthResponse,
  getItems,
  insertItem,
  updateItem,
  removeItems
};
