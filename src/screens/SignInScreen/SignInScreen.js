import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/logo_transparent_resized.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
    const [telephone, setTelephone] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const onSignUpPressed = () =>{
        console.warn('sign in');
    };
    const onSignInGoogle = () =>{
        console.warn('Google');
    };
    const onSignInFacebook = () =>{
        console.warn('Facebook');
    };
    const onSignInApple = () =>{
        console.warn('Apple');
    };
    const OnAlreadyAccount = () =>{
        console.warn('Déjà inscrit !')
    }
    return(
        <ScrollView>
            <View style={styles.root}>
                <Image source={Logo} 
                    style={[StyleSheet.logo,{height: height * 0.3}]} 
                    resizeMode="contain"/>
                {/* social networks */}
                <Text style={styles.text}>S'inscrire</Text>
                <CustomButton  bgColor="#e34133"  text="GOOGLE" onPress={onSignInGoogle} />
                <CustomButton  bgColor="#1877f2" text="FACEBOOK" onPress={onSignInFacebook} />
                <CustomButton  bgColor="black" text="APPLE" onPress={onSignInApple} />
                <Text style={styles.text}>Ou inscrivez-vous avec votre téléphone</Text>
                <CustomInput placeholder='Numero de téléphone' value={telephone} setValue={setTelephone}/>
                <CustomInput placeholder='Code reçu' value={password} setValue={setPassword} secureTextEntry/>
                <CustomButton text="S'inscrire" onPress={onSignUpPressed} type='PRIMARY'/>
                <CustomButton text="Déjà un compte ?" onPress={OnAlreadyAccount} type='SECONDARY'/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#fcfdff'
    },
    text:{
        marginVertical: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    logo:{
        width:30,
        maxWidth: 300,
        maxHeight: 100
    }
})

export default SignInScreen;