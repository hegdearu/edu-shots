
import { Layout, Text, Input, ApplicationProvider, Menu, MenuGroup, MenuItem } from "@ui-kitten/components"
import SignUp from "./Screens/SignUp.js";
import ProfilePage from "./Screens/Profile.js";
import LeaderboardScreen from "./Screens/LeaderBoards.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import Feed from "./Screens/Feed.js";
import UploadVideo from "./Screens/UploadVideo.js";
import * as eva from '@eva-design/eva';
import Signin from "./Screens/Signin.js";



const App =()=> {
  
  const Stack = createNativeStackNavigator();
  return(

    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={SignUp}/>
        <Stack.Screen name="Feed" component={Feed}/>
        <Stack.Screen name="UploadVideo" component={UploadVideo}/>
          
      </Stack.Navigator>
      </NavigationContainer>
      
    </ApplicationProvider>
    
  
  )
}
export default App