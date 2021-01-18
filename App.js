import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import OrderList from './src/screens/OrderList';
import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import { setNavigation } from './src/navigationRefs'


const navigator = createStackNavigator(
  {
    Order: OrderList,
    Home: HomeScreen,
    Map: MapScreen
  },
  {
    initialRouteName: 'Map',
    defaultNavigationOptions: {
      title: 'Livrito'
    },
    headerMode: 'none'
  });

export default createAppContainer(navigator);