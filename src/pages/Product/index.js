import React from 'react';
import {View, Text, Image} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

export default function Product() {
        // pegando parametros repassado
        const {params} = useRoute();
        const {name, image, description, value} = params;

        const {reset} = useNavigation();

        function navigateToInitial() {
            // ir para o inicio resetando stack de telas
            reset({
                index: 0,
                routes: [{name: 'SignUp'}]
            })
        }

        return(
            <View style={{flex: 1, backgroundColor: '#fff', padding: 20}}>
                    <Image 
                        source={{uri: image}}
                        style={{width: '100%', height: 200}}
                        resizeMode="contain"
                    />
                    <View style={{ width: '100%', borderColor: '#dcdcdc', borderWidth: .4, marginVertical: 12}}/>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>{name}</Text>
                    <Text style={{fontSize: 14, lineHeight: 22, textAlign: 'justify', marginTop: 10}}>{description}</Text>
                    <Text style={{marginVertical: 12, fontWeight: 'bold', fontSize: 16}}>R$ {value.toFixed(2)}</Text>
                    <Text style={{marginBottom: 4}}>Formas de pagamento:</Text>
                    <Text>{'\u2022'} Cartões débito/crédito em até 12x</Text>
                    <Text>{'\u2022'} Boleto bancário</Text>
                    <Text>{'\u2022'} Pix</Text>
                    <RectButton style={{width: '100%', borderRadius: 7, height: 54, backgroundColor: '#0f2df5', justifyContent: 'center', alignItems: 'center', marginTop: 28}}
                        onPress={navigateToInitial}
                    >
                        <Text style={{fontSize: 16, color: '#fff', textTransform: 'uppercase'}}>Encerrar compra</Text>
                    </RectButton>
            </View>
        )
}