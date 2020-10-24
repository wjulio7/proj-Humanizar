import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking,ImageBackground } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import logoImg from '../../assets/logo.png';


import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

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
    <ImageBackground source={require('../../../assets/background.jpg')}style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#000000" />
        </TouchableOpacity>
      </View>
        
        <View style={styles.contactBox}>
        <Image style={styles.imgType} source={{ uri: produto.urlImgProd }} />
          <Text style={[styles.incidentProperty, { marginTop:0 }]}>Produto:
          </Text>
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
            
            <Text style={styles.incidentProperty}>Descrição:</Text>
              {/*<Text style={styles.incidentValue}> {produto.description} </Text>*/}
              <TextInput style={styles.incidentValue}
              multiline={true}
              numberOfLines={4}
              style={{ height:100,
                      color:'#ffffff'
              }}
              > 
              {produto.description}</TextInput>
            </View>
        <View sytle={styles.contactBox}>
        <Text style={styles.weTitle} >Entre em contato com o vendedor:</Text>

        <View style={styles.actions} >
          <TouchableOpacity  style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.action}onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
          
        </View>

        </View>
        
    </ImageBackground>
         
    )
}