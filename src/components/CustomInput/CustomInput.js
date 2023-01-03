import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) =>{
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                placeholder={placeholder}
                value={value}
                onChangeText={setValue}
                secureTextEntry={secureTextEntry}
                ></TextInput>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: '#e8e8e',
        width: '100%',
        borderWidth : 1,
        borderRadius : 5,
        paddingHorizontal: 10,
        marginVertical : 10,
    },
    input: {}
})

export default CustomInput;
