import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import SignUp from './Screens/SignUp';
import Feed from './Screens/Feed';
import ProfilePage from './Screens/Profile';
import LeaderboardScreen from './Screens/LeaderBoards';

const App = () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <LeaderboardScreen/>
  </ApplicationProvider>
);

export default App;