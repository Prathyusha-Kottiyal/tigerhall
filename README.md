# tigerhall

## Environment Setup

You can check the react-native website for detailed [guide](https://reactnative.dev/docs/environment-setup)

## Project Setup

Install all the node modules by yarn

```bash
yarn
```

Install all the pod files for iOS

```bash
npx pod-install
```

or

```bash
cd ios && pod install && cd ..
```

Now you can the run project for both android and iOS using

```bash
yarn run android
```

```bash
yarn run ios
```

If you can't get this to work, see the [Troubleshooting page](https://reactnative.dev/docs/troubleshooting#content)

## Project Structure

Here is the detailed project file tree.

- [assets/](./src/assets)
  - [fonts/](./src/assets/fonts)
- [components/](./src/components)
- [containers/](./src/containers)
- [gql/](./src/gql)
- [interfaces/](./src/interfaces)
- [theme/](./src/theme)
  - [colors.js](./src/theme/colors.js)
- [App.js](./src/App.js)

#### Explanation

`assets/`: includes all the assets used in the project like images, fonts

`components/`: includes all the reusable components used

`containers`: all the main screens of the application belongs here

`gpl`: Graphql queries are added here

`interfaces`: Custom object types are defined

`themes`: all visibile elements like colors, fonts, layout related and hardcoded strings are put together here.

`App.js`: App Component is the main component in React which acts as a container for all other components.
