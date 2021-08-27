import * as React from 'react';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FacebookScreen from './screens/facebook'
import InstagramScreen from './screens/SearchScreen'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
      
    )
  }
}



const TabNavigator = createBottomTabNavigator({
  instagram : InstagramScreen,
  facebook : FacebookScreen
})
const AppContainer = createAppContainer(TabNavigator);