import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { HomeScreen } from './HomeScreen'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
})
export const AppNavigator = createAppContainer(MainNavigator)
