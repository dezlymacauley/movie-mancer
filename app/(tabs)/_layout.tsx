import React from 'react'
import { Text, View } from "react-native";

import { Tabs } from 'expo-router'; "expo-router";

const _Layout= () => {

  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Home',
          headerShown: false
        }}
      />
    </Tabs>
  )

}

export default _Layout 
