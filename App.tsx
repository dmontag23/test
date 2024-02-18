import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {LIGHT_THEME} from './themes';
import RootNavigator from './components/screens/RootNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';

const QUERY_CLIENT = new QueryClient();

const App = () => (
  <QueryClientProvider client={QUERY_CLIENT}>
    {/* PaperProvider should be the innermost provider for the app. See
    https://callstack.github.io/react-native-paper/docs/guides/getting-started */}
    <PaperProvider theme={LIGHT_THEME}>
      <RootNavigator />
      {/* Needed to debug async storage on Flipper. 
      See https://github.com/lbaldy/flipper-plugin-async-storage-advanced */}
      {__DEV__ && <FlipperAsyncStorage />}
    </PaperProvider>
  </QueryClientProvider>
);

export default App;
