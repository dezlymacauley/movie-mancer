import React from 'react'
import { Tabs } from 'expo-router'; "expo-router";

const _Layout= () => {

  return (

    // This is how you change the look and feel of the bottom navigation bar
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Home',
          headerShown: false
        }}
      />
      
      <Tabs.Screen 
        name="search"
        options={{
          title: 'Search',
          headerShown: false
        }}
      />
      
      <Tabs.Screen 
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false
        }}
      />
      
      <Tabs.Screen 
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false
        }}
      />

    </Tabs>
  )

}

export default _Layout 
