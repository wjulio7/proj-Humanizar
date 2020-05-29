import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
      flex:2,
      paddingHorizontal:24,
      paddingTop: Constants.statusBarHeight +2,
      backgroundColor: '#589eff'
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
    marginTop:4,
},
    incidentValue:{
    marginTop:0,
    fontSize:15,
    color:'#737380',
},
    contactBox:{
    padding:22,
    borderRadius:8,
    backgroundColor:'#FFF',
    marginBottom: 5,
},
    contactBox2:{
    height:180,
    width:190,
    left:90,
    backgroundColor:'#13131a',

},
    weTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight:30,
    },
    weDescription:{
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
        height:85,
        width: 85,
        borderRadius:0 ,
       borderColor:'#bddefd',
       borderStyle:"solid",
       borderWidth:2,
       resizeMode:'center',
       }

});