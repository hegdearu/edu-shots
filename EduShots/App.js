
import { Layout, Text, Input, ApplicationProvider, Menu, MenuGroup, MenuItem } from "@ui-kitten/components"
import SignUp from "./Sceens/SignUp.js";
import ProfilePage from "./Sceens/Profile.js";
import LeaderboardScreen from "./Sceens/LeaderBoards.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import Signin from "./Sceens/Signin.js";
import Feed from "./Sceens/Feed.js";
import UploadVideo from "./Sceens/UploadVideo.js";



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