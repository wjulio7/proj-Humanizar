import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import logoImg from '../../assets/logo.png';


import styles from './styles';

export default function DetailProd() {
    const navigation = useNavigation();
    const route = useRoute();

    const produto = route.params.produto;
    const message = `Olá ${produto.nameVend}, estou entrando em contato pois gostaria de adquirir o produto, "${produto.nameProd}", com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.value)}`;


    function navigateBack() {
        navigation.goBack();
      }

      function sendMail() {
        MailComposer.composeAsync({
          subject: `Produto: ${produto.nameProd}`,
          recipients: [produto.email],
          body: message
        });
      }
      function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${produto.whatsapp}&text=${message}`);
      }    
    
    return(
    <View style={styles.container}>
       <View style={styles.header}>
         <image source={logoImg}></image>{/*inseri aqui*/}
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

        <View style={styles.incident}>
            <Text>{produto.nameVend}</Text>
            <Text>Vende em {produto.city}/{produto.uf}</Text>
            
            <Text >{produto.nameProd}</Text>
            <Image source={{ uri: produto.urlImgProd }} style={{ width: 100, height: 100 }}/>
            <Text>VALOR:</Text>
            <Text >
            {Intl.NumberFormat('pt-BR', { 
                style: 'currency', 
                currency: 'BRL' 
                }).format(produto.value)}
            </Text>
            </View>
        <View sytles={styles.contactBox}>
        <Text >Entre em contato com o vendedor:</Text>

        <View >
          <TouchableOpacity  onPress={sendWhatsApp}>
            <Text >WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity  onPress={sendMail}>
            <Text >E-mail</Text>
          </TouchableOpacity>
        </View>

        </View>
        
    </View>
         
    )
}