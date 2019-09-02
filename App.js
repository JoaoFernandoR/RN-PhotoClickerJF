import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen';
import Camera from './screens/Camera'


const App = createStackNavigator({
  Home : {
    screen : HomeScreen
  },
  Camera : {
    screen : Camera
  }

},{
  defaultNavigationOptions : {
    headerStyle : {
      backgroundColor : '#b83227'
    },
    headerTitleStyle : { color : '#FFF' },
    headerTitle : 'Home',
    // headerTintColor : '#FFF'
  }
})


export default createAppContainer(App)

