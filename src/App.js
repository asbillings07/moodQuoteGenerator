import React from 'react'
import { Provider } from './Context'
import { AppNavigator } from './components/AppNavigator'

export const App = () => {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  )
}
