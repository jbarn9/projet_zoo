import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type='PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress}  
        style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor:bgColor} : {},
        ]}>
      <Text  style={[
        styles.text, 
        styles[`text_${type}`],
        fgColor ? {color:fgColor} : {},
        ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        width : '100%',
        alignItems : 'center',
        borderRadius: 5,
        marginTop : 10,
    },
      container_PRIMARY :{
        backgroundColor: '#fa5252',  
      },
    text:{
        fontWeight : 'bold',
        padding: 10,
    },
      text_PRIMARY :{
        color: 'white',
      }, 
      text_SECONDARY :{
        color: 'gray'
      }
})

export default CustomButton
