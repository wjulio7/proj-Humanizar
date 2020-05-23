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
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

        <View style={styles.contactBox}>
          
          <Text style={[styles.incidentProperty, { marginTop:0 }]}>Produto:</Text>
          <Text style={styles.incidentValue}>{produto.nameProd}</Text>
          <Text style={[styles.incidentProperty, { marginTop:0 }]}>Vendedor:</Text>
            <Text style={styles.incidentValue}> {produto.nameVend}</Text>
            <Text style={[styles.incidentProperty, { marginTop:0 }]}>Local:</Text>
            <Text style={styles.incidentValue}> {produto.city}/{produto.uf}</Text>
            <Text style={[styles.incidentProperty, { marginTop:0 }]}>Valor:</Text>
            <Text style={styles.incidentProperty}>
             {Intl.NumberFormat('pt-BR',  { 
                style: 'currency', 
                currency: 'BRL' 
                }).format(produto.value)}
            </Text>
              <Text style={styles.incidentProperty}> </Text>
              <Image source={{ uri: produto.urlImgProd }} style={styles.imgType}/>
            </View>
        <View sytle={styles.contactBox}>
        <Text style={styles.heroTitle} >Entre em contato com o vendedor:</Text>

        <View style={styles.actions} >
          <TouchableOpacity  style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.action}onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>

        </View>
        
    </View>
         
    )
}