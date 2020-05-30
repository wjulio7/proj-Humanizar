import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import logoImg from '../../assets/logo.png';
import api from '../../services/api';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Axios from 'axios';

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    const [selecteduf, setSelecteduf] = useState({name: ""})
    const [selectedCity, setselectedCity] = useState({name:""})
    const [localidades, setlocalidades] = useState([])
    const [data, setData] = useState([]);

    const navigation = useNavigation();

    async function loadProdutos() {
      const city = selectedCity.name
      const uf = selecteduf.name
      console.log(uf)
      console.log(city)
        const response = await api.get('produtoclientecontroller', {
          params: { uf, city}
        });
        setProdutos(response.data);
      }

      useEffect(() => {
        fetch(`http://educacao.dadosabertosbr.com/api/cidades/${selecteduf.name}`,{
          method: 'GET',
           mode: 'no-cors'})
           .then((response) => response.json())
           .then((responseJson) => {
             setData(responseJson)})
        //.then((json) => setData(json))
        loadProdutos();
      }, [selecteduf, selectedCity]);

      function navigateToDetail(produto) {
        navigation.navigate('DetailProd', { produto });
      }

      const ufList = [
        { name: 'AC' },{ name: 'AL'},{ name: 'AP' },{ name: 'AM' },
        { name: 'BA' },{ name: 'CE' },{ name: 'DF' },{ name: 'ES'},
        { name: 'GO' },{ name: 'MA' },{ name: 'MT' },{ name: 'MS' },
        { name: 'MG' },{ name: 'PA' },{ name: 'PB' },{ name: 'PR'},
        { name: 'PE' },{ name: 'PI' },{ name: 'RJ' },{ name: 'RN' },
        { name: 'RS' },{ name: 'RO' },{ name: 'RR' },{ name: 'SC' },
        { name: 'SP' },{ name: 'SE' },{ name: 'TO' }]
        const options2 = data.map(v => ({
                 name: v.slice(8),}));
      
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={logoImg} /> 
                <Text style={styles.headerText}>
                   Vendedores na sua região 
                </Text>

                <SearchableDropdown
                            items={ ufList}
                          onItemSelect={(item) => {
                          setSelecteduf(item)}}
                          itemStyle={{
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#ddd',
                            borderColor: '#bbb',
                            borderWidth: 1,
                            borderRadius: 5,
                          }}
                          textInputProps={{
                          placeholder: "UF",
                          underlineColorAndroid: "transparent",  
                          style: {
                              padding: 12,
                              borderWidth: 1,
                              borderColor: 'blue',
                              borderRadius: 5},              
                          }}
                          listProps={
                            {
                              nestedScrollEnabled: true,
                            }
                          }/>
                <SearchableDropdown
                                items={options2}
                              onItemSelect={(item) => {
                              setselectedCity(item)}}
                                textInputProps={{
                              placeholder: "Cidades",
                              underlineColorAndroid: "transparent",
                              style: {
                                  padding: 12,
                                  borderWidth: 1,
                                  borderColor: 'blue',
                                  borderRadius: 5},                              
                              }}/>
        </View>

        <FlatList
        data={produtos}
        keyExtractor={produto => String(produto.id)}
        renderItem={({ item: produto }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>Vendedor: {produto.nameVend} </Text>
              <Image  source={{ uri: produto.urlImgVend }} style={styles.incidentImg}/>
            <Text style={styles.incidentProperty}>Produto: {produto.nameProd}</Text>
            
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