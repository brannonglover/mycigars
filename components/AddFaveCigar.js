import { View, Text, TextInput, StyleSheet } from 'react-native'
import styled from 'styled-components';

function AddFaveCigar() {
  return (
    <View style={styles.faveContainer}>
      <Text style={styles.faveTitle}>New Favorite</Text>
      <Text style={styles.inputName}>Cigar Name</Text>
      <TextInput style={styles.inputBox} placeholder="cigar name" />
      <Text style={styles.inputName}>Wrapper</Text>
      <TextInput style={styles.inputBox} placeholder="wrapper" />
      <Text style={styles.inputName}>Size</Text>
      <TextInput style={styles.inputBox} placeholder="size" />
    </View>
  )
}

export default AddFaveCigar;

const styles = StyleSheet.create({
  faveContainer: {
    backgroundColor: 'rgba(255,255,255,1)',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    position: 'absolute',
    top: '10%',
    left: 10,
    width: '95%',
    height: '100%', 
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  faveTitle: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 15
  },
  inputName: {
    paddingBottom: 5
  },
  inputBox: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  }
});