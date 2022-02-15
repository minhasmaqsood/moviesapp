import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'
// import { Button } from 'react-native-elements'

const CustomButton = ({ title, disabled, onPress }) => {
  return (
    <Pressable
    testID='customButton'
      title={title}
      style={{...styles.buttonStyle, backgroundColor: !disabled? 'gray': 'rgba(111, 202, 186, 1)'}}
      disabled={disabled}
      titleStyle={styles.title}
      // containerStyle={styles.containerStyle}
      onPress={onPress}
    >
    <Text>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius:10,
  },
  containerStyle: {
    height: 50,
    width: 150,
    marginVertical: 10,
  },
  title: { fontWeight: 'bold', fontSize: 23 },
})

export default CustomButton
