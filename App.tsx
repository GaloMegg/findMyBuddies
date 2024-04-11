import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogInContainer from 'components/auth/login/LogInContainer'
import SignUpContainer from 'components/auth/signup/SignUpContainer'
import ViewAllBuddiesContainer from 'components/buddies/view/viewAll/ViewAllBuddiesContainer'
import React from 'react'

const Stack = createNativeStackNavigator()
function App(): React.JSX.Element {
  // return <SignUpContainer />;\\

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Sign in' component={LogInContainer} />
        <Stack.Screen name='Sign up' component={SignUpContainer} />
        <Stack.Screen
          name='Home'
          component={ViewAllBuddiesContainer}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
