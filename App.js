import React from 'react'
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import Home from './src/screens/Home'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Home />
    </SafeAreaView>
  )
}

export default App
