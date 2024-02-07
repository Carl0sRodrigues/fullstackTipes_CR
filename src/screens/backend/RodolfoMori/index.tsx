import React from 'react'
import WebView from 'react-native-webview'

const Rodolfo = () => {
  return (
    <WebView
      source={{ uri: 'https://www.youtube.com/watch?v=kUCaUuSCF-k' }}
      style={{ flex: 1 }}
    />
  )
}
export default Rodolfo
