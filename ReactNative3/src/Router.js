import {createStackNavigator} from 'react-navigation-stack';
import{createAppContainer} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import AboutModal from './screens/AboutModal';
import DeviceUsage from './screens/DeviceUsage';
import Feedback from './screens/Feedback';
import LogHistory from './screens/LogHistory';
import Directives from './screens/Directives';
import MainScreen from './screens/MainScreen';

const MainStack = createStackNavigator({
    Slides: MainScreen,
    Home: HomeScreen,
    Device: DeviceUsage,
    Modal: AboutModal,
    FeedB: Feedback,
    LogHis: LogHistory,
    Direct: Directives,

}, {
    initialRouteName: "Slides",
    headerLayoutPreset: "center",
    defaultNavigationOptions:{
        headerBackTitle:null,
        headerTintColor:'#0000',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    },
});

const ModalStack = createStackNavigator({
    Main: MainStack,
  //  Modal: AboutModal
    //FeedBack: Feedback,
},
    {
        mode:'modal',
        headerMode:'none'
});
export default createAppContainer(ModalStack);

