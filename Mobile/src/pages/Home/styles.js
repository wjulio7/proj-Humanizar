import { StyleSheet } from 'react-native';
import Constans from 'expo-constants';

export default StyleSheet.create({
   container:{
       flex:1,
       paddingHorizontal:20,
       paddingTop: Constans.statusBarHeight +60,
       backgroundColor: '#bddefd'
       
   },

   header:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       
        
   },
   headerText:{
       fontSize:15,
       color: '#737380',
       fontWeight:'bold'
   },

   headerTextBold:{
       fontWeight: 'bold'
   },

   title: {
       fontSize:30,
       marginBottom :16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
   },

   description: {
       fontSize:16,
       lineHeight: 24,
        color: '#737380'
   },
   incidentList:{
       marginTop:32,
   },
   incidentImg:{
       height:50,
       width:50,
    borderRadius:70 ,
   borderColor:'#bddefd',
   borderStyle:"solid",
   borderWidth:2,
   resizeMode:'contain',
   alignContent:'center'
   },
   incident:{
       padding:24,
       borderRadius:8,
       backgroundColor:'#e0f2fc',
       marginBottom:16,
       
   },
   incidentProperty:{
       fontSize:14,
       color: '#41414d',
       fontWeight: 'bold',
       
   },
   incidentValue:{
       marginTop:8,
       fontSize:15,
       marginBottom:24,
       color:'#737380'
   },
   detailsButton:{
       flexDirection:'row',
       justifyContent: 'space-between',
       alignItems:'center'
   },
   detailsButtonText:{
       color:'#e02041',
       fontSize:15,
       fontWeight: 'bold'
   },
   imgTipo:{
    height:150,
    width:150,
    borderRadius:0 ,
   borderColor:'#bddefd',
   borderStyle:"solid",
   borderWidth:2,
   resizeMode:'center',
   },
   auxText:{
    fontSize:14,
    width:120,
    height:200,
    color: '#41414d',
    position:'absolute',
    right:15,
    top:90
   },
   textValor:{
       fontWeight:'bold',
       top:9,
       width:165,
       color: '#13131a'
   },
   tablink:{
    top:11,
    color: '#13131a'
   },
   tabLinkSeta:{
       left:112,
       bottom:5
   }
   
});