import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Header = () => {
  return (
    <View>
      {/*---Header--*/}
      <View style={styles.header}>
        <View style={styles.inputBox}>
          <View style={styles.row}>
            <Icon name="search" size={22} color="#1f1f1f" />
            <TextInput
              placeholder="Search Amazon.in"
              placeholderTextColor="#848484"
              style={{marginLeft: 7}}
            />
          </View>
          <Icon name="scan" size={22} color="#909594" />
        </View>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#88dae0',
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    borderColor: 'black',
    width: '98%',
    justifyContent: 'space-between',
    paddingVertical: 2,
    paddingHorizontal: 10,
    elevation: 7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
