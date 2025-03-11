// This imports React
import React from 'react'

// This imports components from the  React Native library 
import { Text, View } from "react-native";

import "./globals.css";

export default function Index() {
  return (
    <View
      className="flex-1 justify-center items-center"
    >
      <Text
        className="text-5xl text-dark-200 font-bold"
      >
        Movie Mancer 
      </Text>
    </View>
  );
}
