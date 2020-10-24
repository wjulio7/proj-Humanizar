import { StyleSheet, ImageBackground } from 'react-native';
import Constans from 'expo-constants';

export default StyleSheet.create({
   container:{
       flex:1,
       paddingHorizontal:20,
       paddingTop: Constans.statusBarHeight +30,
       
   },

   header:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       height:100,
       color:'#FFFF',
       backgroundColor:'rgba(4, 8, 27, 0.753)',
       borderColor:'#ffffff',
       borderStyle:"solid",
       borderWidth:2,
        
   },
   headerText:{
       fontSize:15,
       color: '#41414d',
       fontWeight:'bold'
   },

   headerTextBold:{
       fontWeight: 'bold'
   },

   title: {
       fontSize:30,
       marginBottom :16,
        marginTop: 48,
        color: '#41414d',
        fontWeight: 'bold'
   },

   description: {
       fontSize:10,
       lineHeight: 24,
        color: '#737380'
   },
   incidentList:{
       marginTop:32,
   },
   incidentImg:{
       height:50,
       width:50,
    borderRadius:70,
   borderColor:'#ffffff',
   borderStyle:"solid",
   borderWidth:2,
   resizeMode:'stretch',
   alignContent:'center'
   },
   incident:{
       padding:24,
       backgroundColor:'rgba(4, 8, 27, 0.753)',
       marginTop:8,
       marginBottom:16,
       borderRadius:20,
       borderColor:'#ffffff',
       borderStyle:"solid",
       borderWidth:0,
       resizeMode:'stretch',
       alignContent:'center'
   },
   incidentProperty:{
       fontSize:14,
       color: '#ffffff',
       fontWeight: 'bold',
       marginTop:5,
       marginBottom:3
   },
   incidentValue:{
       marginTop:8,
       fontSize:15,
       marginBottom:24,
       color:'#ffffff'
   },
   detailsButton:{
       flexDirection:'row',
       justifyContent: 'space-between',
       alignItems:'center'
   },
   detailsButtonText:{
       color:'#ffffff',
       fontSize:15,
       fontWeight: 'bold'
   },
   imgType:{
    height:150,
    width:280,
    borderRadius:0 ,
   borderColor:'#ffffff',
   borderStyle:"solid",
   borderWidth:2,
   resizeMode:'center',
   },
   auxText:{
    fontSize:14,
    width:120,
    height:200,
    color: '#ffffff',
    position:'absolute',
    right:15,
    top:105
   },
   textValor:{
       fontWeight:'bold',
       top:9,
       width:165,
       color: '#ffffff'
   },
   tablink:{
    top:11,
    color: '#ffffff'
   },
   tabLinkSeta:{
       left:112,
       bottom:5
   },
   ImageFundo:{
    width:15,
    height:200
   },
   TextBusca:{
    color:'#ffffff',
    left:5
   },
});