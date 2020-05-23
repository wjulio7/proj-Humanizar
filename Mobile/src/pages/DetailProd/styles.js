import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
      flex:1,
      paddingHorizontal:24,
      paddingTop: Constants.statusBarHeight +20,
      backgroundColor: '#bddefd'
  },
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
    marginTop:0,
},
    incidentValue:{
    marginTop:0,
    fontSize:15,
    color:'#737380'
},
    contactBox:{
    padding:24,
    borderRadius:8,
    backgroundColor:'#FFF',
    marginBottom: 18,
},
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight:30,
    },
    heroDescription:{
        fontSize:15,
        color: '#737380',
        marginTop:16,
    },
    actions:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    action:{
        backgroundColor: '#FFF',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent:'center',
        alignItems:'center',
    },
    actionText:{
        fontSize:15,
        fontWeight: 'bold',
    },
    imgType:{
        height:120,
        width:120,
        left:145,
        bottom:185,
        borderRadius:0 ,
       borderColor:'#bddefd',
       borderStyle:"solid",
       borderWidth:2,
       resizeMode:'center',
       }

});