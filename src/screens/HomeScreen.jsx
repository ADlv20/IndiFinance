import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {size, weight} from '../theme/fonts';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <TouchableOpacity
          style={styles.c2}
          onPress={() => navigation.navigate('Explore')}>
          <View>
            <Text>Hello</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  text: {
    fontSize: size.font20,
  },
  c2: {
    backgroundColor: 'gray',
  },
});

export default HomeScreen;
