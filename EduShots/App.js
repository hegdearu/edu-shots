import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import SignUp from './Screens/SignUp';
import Feed from './Screens/Feed';

const App = () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Feed/>
  </ApplicationProvider>
);

export default App;