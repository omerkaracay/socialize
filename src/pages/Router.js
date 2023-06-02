import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import { LoginContexts } from '../contexts/LoginContexts';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationScreen from './NotificationScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Router() {

    
function HomeTabs(){
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Login" component={NotificationScreen}  />
       </Tab.Navigator>
    );
}
    let {isLogin} = useContext(LoginContexts)
    return(   
    
    <NavigationContainer>

<Stack.Navigator screenOptions={{headerShown:false}}>

    
    {
        isLogin ? <Stack.Screen name="HomeTabs" component={HomeTabs} /> 
                :
                <Stack.Screen name="Login" component={LoginScreen} />
    //            <Stack.Screen name="Home" component={HomeScreen} />
    }

</Stack.Navigator>

    {/*}
        <Tab.Navigator screenOptions={{headerShown:false}}>


         <Tab.Screen name="Login" component={LoginScreen}  />
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
  
  
        {/*  
        /////////  Stack Navigator
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    */}
  
  
    </NavigationContainer>
    )
}