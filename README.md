![Build status](https://ci.appveyor.com/api/projects/status/2fnekwfbm5h2ayk7/branch/master?svg=true)

# safe_examples
Examples showcasing various features of the SAFE Network.

## email_app (NodeJS - Electron)
[email_app](email_app), written in `NodeJS`, is an application to exchange messages.

## safe_web_api_playground (NodeJS - Electron)
[safe_web_api_playground](safe_web_api_playground), written in `NodeJS`, is an application allowing you to explore the web API.

## web_hosting_manager (NodeJS - Electron)
[web_hosting_manager](https://github.com/maidsafe/safe-web-hosting-manager-electron), written in `NodeJS`, is an application which allows hosting and managing web files.

## safe_app_electron_quick_start (NodeJs - Electron)
[safe_app_electron_quick_start](safe_app_electron_quick_start), it's a boilerplate with a tutorial to create an [Electron](https://electronjs.org) application.

## safe_web_app_quick_start (NodeJs - SAFE Web API)
[safe_web_app_quick_start](safe_web_app_quick_start), it's a boilerplate with a tutorial to create a SAFE Web application which uses the Web API to interact with the SAFE Authenticator, and to connect with the SAFE Network.

**Note:** For more details and build-instructions, please check the corresponding folder's README.

## Packaging

To run a complete package of the email/webhosting apps, (assuming each project has their own dependencies installed) you can:

* Run `yarn` in the root examples directory
* Run `yarn install-all` to install and build `email_app` and `web_hosting_manager`.
* Use either of the commands below to separately package each app:
* Run `yarn pack:webhosting` to package and zip the app with all required files (to: web_hosting_manager/release).
* Run `yarn pack:email` to package and zip the app with all required files (to: email_app/out).
* Alternatively, run `yarn package-all` to package both `email_app` and `web_hosting_manager`

# License

This SAFE Network library is dual-licensed under the Modified BSD ([LICENSE-BSD](LICENSE-BSD) https://opensource.org/licenses/BSD-3-Clause) or the MIT license ([LICENSE-MIT](LICENSE-MIT) https://opensource.org/licenses/MIT) at your option.
