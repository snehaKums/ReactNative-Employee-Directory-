import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import List from './app/List';
import Details from './app/Details';
import Login from './app/Login';

const App = createStackNavigator(
  {
    EmployeeList: {
      screen:List,
    },
    Details: {
      screen: Details,
    },
    Login:{
      screen:Login
    }
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(App);