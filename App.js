import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'red',
  },
});
