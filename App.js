import React from 'react'

import {StatusBar} from 'react-native'

import Main from './src/pages/Main'
import Album from './src/pages/Album'
import Tab from './src/components/TabBar'

const App = () => {
  return(
    <React.Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#"/>
      <Album/>
      <Tab/>
    </React.Fragment>
  )
}

export default App;