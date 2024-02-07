import React from 'react'
import WebView from 'react-native-webview'

const Battisti = () => {
  return (
    <WebView
      source={{
        uri: 'https://www.youtube.com/watch?v=FXqX7oof0I4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO',
      }}
      style={{ flex: 1 }}
    />
  )
}
export default Battisti
