import { StackNavigator } from "react-navigation";

import LaunchScreen from "../Containers/LaunchScreen";
import CounterScreen from "../Containers/CounterScreen";

export default (RootNavigator = StackNavigator(
  {
    Launch: { screen: LaunchScreen },
    Counter: {
      path: "counter/:title",
      screen: CounterScreen
    }
  },
  {
    initialRouteName: "Launch"
    //    headerMode: "none"
  }
));
