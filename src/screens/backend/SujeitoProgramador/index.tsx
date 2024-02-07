import React from 'react'
import WebView from 'react-native-webview'

const Sujeito = () => {
  return (
    <WebView
      source={{ uri: 'https://www.youtube.com/watch?v=JlYrbEBZ3PE&t=9s' }}
      style={{ flex: 1 }}
    />
  )
}
export default Sujeito
