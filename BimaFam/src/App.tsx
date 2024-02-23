import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Nav from './Navigation/Nav';
import LoginProvider from './utils/LoginproviderContext';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* Wrap the app with GestureHandlerRootView */}
      <>
        <LoginProvider>
          <Nav />
        </LoginProvider>
        <SafeAreaView />
        <StatusBar
          hidden
          // barStyle={'dark-content'}
          backgroundColor={'#0e4caf'}
        />
      </>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});

export default App;
