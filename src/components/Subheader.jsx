import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Subheader = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.location}>
          <Icon name="location" size={22} />
          <Text style={styles.text}>Deliver to Cuddalore-Vadalur 87889</Text>
          <SimpleLineIcons name="arrow-down" size={12} />
        </View>
      </View>
    </View>
  );
};

export default Subheader;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdeee9',
    padding: 7,
  },
  location: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'sans-serif',
    marginRight: 3,
    color: '#2c4341',
  },
});
