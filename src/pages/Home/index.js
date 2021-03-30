import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {Text, FlatList, SafeAreaView, Image, StyleSheet, View} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function Home() {
    const {navigate, setOptions} = useNavigation();
    const { params } = useRoute();

    // array de dados
    const data = [
        {id: 1, image: 'https://i.zst.com.br/thumbs/45/16/1a/82758222.jpg', name: 'Violão Eletroacústico', description: 'Lorem Ipsum é simplesmente texto fictício da indústria de impressão e digitação. Lorem Ipsum tem sido o texto falso padrão.', value: 200, condition: 'Usado'},
        {id: 2, image: 'https://i.zst.com.br/thumbs/45/26/12/9574446.jpg', name: 'Violão Eletroacústico', description: 'Lorem Ipsum é simplesmente texto fictício da indústria de impressão e digitação. Lorem Ipsum tem sido o texto falso padrão.', value: 300, condition: 'Novo'},
        {id: 3, image: 'https://i.zst.com.br/thumbs/51/2c/3b/946319530.jpg', name: 'Trompete Eagle', description: 'Lorem Ipsum é simplesmente texto fictício da indústria de impressão e digitação. Lorem Ipsum tem sido o texto falso padrão.', value: 1500, condition: 'Novo'},
        {id: 4, image: 'https://i.zst.com.br/thumbs/51/35/33/1070564863.jpg', name: 'Trompete Laqueado', description: 'Lorem Ipsum é simplesmente texto fictício da indústria de impressão e digitação. Lorem Ipsum tem sido o texto falso padrão.', value: 13000, condition: 'Novo'},
        {id: 5, image: 'https://i.zst.com.br/thumbs/45/c/a/561181358.jpg', name: 'Guitarra Eletrocaster', description: 'Lorem Ipsum é simplesmente texto fictício da indústria de impressão e digitação. Lorem Ipsum tem sido o texto falso padrão.', value: 500, condition: 'Usado'},
        {id: 6, image: 'https://i.zst.com.br/thumbs/45/20/a/561181381.jpg', name: 'Guitarra Elétrica', description: 'Lorem Ipsum é simplesmente texto fictício da indústria de impressão e digitação. Lorem Ipsum tem sido o texto falso padrão.', value: 1200, condition: 'Novo'},
        {id: 7, image: 'https://i.zst.com.br/thumbs/51/3c/14/1050543839.jpg', name: 'Bateria Acústica', description: 'Lorem Ipsum é simplesmente texto fictício da indústria de impressão e digitação. Lorem Ipsum tem sido o texto falso padrão.', value: 600, condition: 'Usado'},
        {id: 8, image: 'https://i.zst.com.br/thumbs/51/24/1b/592616161.jpg', name: 'Bateria Infantil', description: 'Lorem Ipsum é simplesmente texto fictício da indústria de impressão e digitação. Lorem Ipsum tem sido o texto falso padrão.', value: 450, condition: 'Novo'},
    ];

    // renderiza cada item do array
    const renderItem = ({item}) => {
        return (
                <RectButton style={styles.buttonView} key={item.id}
                    onPress={() => navigate("Product", {
                        name: item.name,
                        image: item.image,
                        description: item.description,
                        value: item.value
                    })}
                >
                    <Text style={{textAlign: 'right', fontWeight: 'bold'}}>{item.condition}</Text>
                    <Image
                        source={{uri: item.image}}
                        style={{height: 140, width: '100%'}}
                        resizeMode="stretch"
                    />
                    <Text style={styles.nameProduct}>{item.name}</Text>
                    <Text style={styles.valueProduct}>R$ {parseFloat(item.value).toFixed(2)}</Text>
                </RectButton>
        )
    }

        return(
            <SafeAreaView style={{flex: 1}}>
                <View style={{width: '100%', height: 40, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 16, fontWeight: '600'}}>Cliente: {params.name}</Text>
                </View>
                <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => String(item.id)}
                    numColumns={2}
                />
            </SafeAreaView>
        )
}
const styles = StyleSheet.create({
    buttonView: {
        flex: 1, 
        backgroundColor: '#fff', 
        margin: 4, 
        height: 280,
        borderRadius: 8,
        borderWidth: 1.4,
        borderColor: '#edf2f7',
        padding: 20
    },
    nameProduct: {
        fontSize: 16, 
        fontWeight: 'bold', 
        paddingTop: 12, 
        lineHeight: 20, 
        textAlign: 'justify'
    },
    valueProduct: {
        fontSize: 18, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        color: '#919191', 
        marginTop: 12
    }
})