# {{cookiecutter.project_name}}

This is a repository for a react native application, built with [Crowdbotics](https://www.crowdbotics.com/).

## Project Structure

* ```assets```
  * Consists of all images, fonts, etc. to be used in the project
  * Platform specific assets can be separated on different folders(e.g. ios/android folders inside assets)

* ```components```
  * Consists of all reusable components in the project.

* ```constants```
  * Consists of all constant values used in the project
  * `config.js` - includes dev/prod urls. We can also add here any keys that we will be using.
  * `colors.js` - common colors that will be used within the app.
  * `index.js` - global constants

* ```containers```
  * Consists of all the screens in the project. Each screen will constitute one folder (e.g. Login)
  * Folder name format: `PascalCase` (e.g. ChangePassword)

* ```navigators```
  * This contains the Navigators used inside the app.

* ```redux```
  * This contains the actions and reducers which are needed for Redux.

* ```services```
  * This will consists of all API calls in the project.

* ```utils```
  * this contains commonly used utility functions.
  * `api` - contains the `APIClient` wrapper.

## Setup

After cloning this repo, you will need to install the dependencies:

1. `npm install -g expo-cli`
2. `cd {{cookiecutter.project_name}}`
3. `npm install`

## Running the Project

* expo start
* iOS: expo start --ios
* Android: expo start --android
