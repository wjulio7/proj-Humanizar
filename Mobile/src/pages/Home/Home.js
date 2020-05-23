import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import logoImg from '../../assets/logo.png';
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
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={logoImg} /> 
                <Text style={styles.headerText}>
                   Vendedores na sua região 
                </Text>
        </View>

        <FlatList
        data={produtos}
        keyExtractor={produto => String(produto.id)}
        renderItem={({ item: produto }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>Vendedor: {produto.nameVend} </Text>
              <Image  source={{ uri: produto.urlImgVend }} style={styles.incidentImg}/>
            <Text style={styles.incidentProperty}>Produto: {produto.nameProd}</Text>
            <Text style={styles.auxText}>Descrição: {produto.description}</Text>
              <Image  source={{ uri: produto.urlImgProd }} style={styles.imgType}/>
              <Text style={styles.textValor}>Valor: <Text >
              {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL' 
              }).format(produto.value)}

            </Text></Text>
            
            <TouchableOpacity 
              onPress={() => navigateToDetail(produto)}
            >
              <Text style={styles.tablink}>Ver mais detalhes</Text>
              <Feather style={styles.tabLinkSeta}name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
            
          </View>

        )}/>

        </View>
    )
}