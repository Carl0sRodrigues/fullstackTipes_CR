import React from 'react'
import WebView from 'react-native-webview'

const TechGuide = () => {
  return (
    <WebView
      source={{ uri: 'https://techguide.sh/pt-BR/path/nodejs/' }}
      style={{ flex: 1 }}
    />
  )
}
export default TechGuide
