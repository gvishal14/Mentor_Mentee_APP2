import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const WebViewExample = () => {
    // const encodedUri = encodeURIComponent(
    //     'https://sso.garmin.com/portal/sso/en-GB/sign-in?clientId=GarminConnect&service=https%3A%2F%2Fconnect.garmin.com%2Fmodern%2FoauthConfirm%3Foauth_token%3D8f237686-ada4-4b6b-8e71-c7c54efa50a0%26oauth_callback%3Dhttp%253A%252F%252F3.14.234.55%253A6093%252Fapi%252Fv1%252Fstatistics%252FgetUserAccessToken%252F6149ce62e2cce31ecc3dbf4d%253FrequestTokenSecret%253DCy1zItynDpfMfpj2TzMZRetQqdXCcZgJR8w'
    //   );
    const runFirst = 
      window.isNativeApp = true; // note: this is required, or you'll sometimes get silent failures
  
  return (

    //   <WebView
    //     source={{ uri: 'https://sso.garmin.com/portal/sso/en-GB/sign-in?clientId=GarminConnect&service=https%3A%2F%2Fconnect.garmin.com%2Fmodern%2FoauthConfirm%3Foauth_token%3D8f237686-ada4-4b6b-8e71-c7c54efa50a0%26oauth_callback%3Dhttp%253A%252F%252F3.14.234.55%253A6093%252Fapi%252Fv1%252Fstatistics%252FgetUserAccessToken%252F6149ce62e2cce31ecc3dbf4d%253FrequestTokenSecret%253DCy1zItynDpfMfpj2TzMZRetQqdXCcZgJR8w'}} // Replace with the URL you want to load
    //     style={styles.webview}
    //   />
    <View style={{ flex: 1 }}>
    <WebView
      source={{
        uri: 'https://github.com/react-native-webview/react-native-webview',
      }}
      injectedJavaScriptBeforeContentLoaded={runFirst}
    />
  </View>

  )
}

export default WebViewExample

const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        webview: {
          flex: 1,
        //   width: '100%',
        },
      
})