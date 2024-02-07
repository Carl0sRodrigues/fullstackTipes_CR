import React from 'react'
import { WebView } from 'react-native-webview'

const Battisti = () => {
  return (
    <WebView
      source={{ uri: 'https://www.youtube.com/watch?v=anMK76I2dUA' }}
      style={{ flex: 1 }}
    />
  )
}
export default Battisti
