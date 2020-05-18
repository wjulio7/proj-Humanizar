import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import api from '../../services/api';

export default function Home() {
    const [produtos, setProdutos] = useState([]);

    const navigation = useNavigation();

    async function loadProdutos() {
        const response = await api.get('produtoclientecontroller', {
          //params: { page }
        });
        setProdutos(response.data);
      }

      useEffect(() => {
        loadProdutos();
      }, []);

      function navigateToDetail(produto) {
        navigation.navigate('DetailProd', { produto });
      }

    return(
        <View>
            <View style={styles.header}>
      {/* <Image source={logoImg} /> */} 
                <Text style={styles.headerText}>
                    Vendedores na sua região
                </Text>
        </View>

        <FlatList
        data={produtos}
        keyExtractor={produto => String(produto.id)}
        renderItem={({ item: produto }) => (
          <View>
              <Text>Vendedor: {produto.nameVend} </Text>
              <Image source={{ uri: produto.urlImgVend }} style={{ width: 50, height: 50 }}/>
              <Text>Produto: {produto.nameProd}</Text>
              <Text>{produto.description}</Text>
              <Image source={{ uri: produto.urlImgProd }} style={{ width: 100, height: 100 }}/>
              <Text>Valor: <Text >
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL' 
              }).format(produto.value)}
            </Text></Text>
            
            <TouchableOpacity 
              onPress={() => navigateToDetail(produto)}
            >
              <Text >Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
            
          </View>

        )}/>

        </View>
    )
}