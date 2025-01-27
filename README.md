# React Native App

## Getting Started with Expo

Expo is a framework and a platform for universal React applications. It provides a set of tools to help you develop, build, and deploy React Native apps quickly.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### 1. Install Expo CLI

First, install the Expo CLI globally using npm:

```sh
npm install -g expo-cli
```

### 2. Create a New Project

Create a new Expo project by running:

```sh
expo init my-new-project
cd my-new-project
```

Follow the prompts to choose a template for your project.

### 3. Start the Development Server

Start the Expo development server:

```sh
expo start
```

This will open a new tab in your browser with the Expo Dev Tools.

### 4. Run the App

You can run your app on an Android or iOS device using the Expo Go app, available on the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) and the [Apple App Store](https://apps.apple.com/us/app/expo-go/id982107779).

Scan the QR code displayed in the Expo Dev Tools with the Expo Go app to load your project.

### Troubleshooting

If you encounter any issues, refer to the [Expo documentation](https://docs.expo.dev/) or check the [GitHub issues](https://github.com/expo/expo/issues) for solutions.

Happy coding!

Welcome to the React Native App project! This guide will help you get started with setting up your development environment.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Watchman](https://facebook.github.io/watchman/docs/install.html) (for macOS users)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) (for React Native CLI Quickstart)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development, macOS only)

## Getting Started

Follow these steps to set up your development environment:

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/react-native-app.git
cd react-native-app
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Metro Bundler

```sh
npx react-native start
```

### 4. Run the App

#### For Android:

Make sure you have an Android emulator running or an Android device connected.

```sh
npx react-native run-android
```

#### For iOS:

Make sure you have an iOS simulator running or an iOS device connected.

```sh
npx react-native run-ios
```

## Troubleshooting

If you encounter any issues, refer to the [React Native documentation](https://reactnative.dev/docs/getting-started) or check the [GitHub issues](https://github.com/facebook/react-native/issues) for solutions.

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

###################################################################

## My Local Setup Windows

### 1. Install Node JS

### 2. Run below command to create a blank react native project with minimal code

```sh
npx create-expo-app --template blank <app-name>
cd <app-name>
npm start
```

### 3. Use VS Code editor and import the above created project

### 4. Open the terminal in vs code and run app using below command

```sh
npm start
```

After successful start it will show a QR code/URL to run on a expo app

### 5. How to run app

You can install the Expo app on your android/ios mobile and scan above QR

Or

Intall the Android Studio on your machine to run it on a Virtual Device machine

### 6. Extensions installed on VS Code

Prettier - Code formatter

ES7+ React/Redux/React-Native snippets

Happy coding!
