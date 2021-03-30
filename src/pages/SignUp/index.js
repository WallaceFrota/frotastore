import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function SignUp() {
    const { navigate } = useNavigation();
    const [name, setName] = useState('');

    
    // navega para tela inicial repassando parâmetros
    function handleNavigateToHome() {
        if(isNaN(name)) {
            return navigate('Home', {name: name});
        } else if(name === '') {
            return alert('Campo não pode ficar vazio!');
        } else {
            return alert('Insira dados válidos!');
        }
    }

        return(
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <Image 
                        source={require('../../images/sign.png')}
                        style={{width: 180, height: 280}}
                        resizeMode="cover"
                    />
                    <TextInput 
                        onChangeText={e => setName(e)}
                        placeholder="Seu nome"
                        maxLength={14}
                        value={name}
                        style={styles.input}
                    />
                    <RectButton style={styles.btn} onPress={handleNavigateToHome}>
                        <Text style={styles.textBtn}>Acessar</Text>
                    </RectButton>
                </View>
            </View>
        )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        flex: 3.5, 
        padding: 40
    },
    input: {
        width: '100%',
        height: 49,
        borderWidth: 1,
        borderColor: '#edf2f7',
        padding: 10,
        borderRadius: 6,
        backgroundColor: '#fff',
        marginBottom: 10
    },
    btn: {
        width: '100%', 
        height: 52, 
        backgroundColor: '#407BFF',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontSize: 16, 
        textTransform: 'uppercase', 
        color: '#fff'
    }
})