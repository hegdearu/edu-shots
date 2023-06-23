import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import SignUp from './Screens/SignUp';

const App = () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <SignUp/>
  </ApplicationProvider>
);

export default App;