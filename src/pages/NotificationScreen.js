import { useContext } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { LoginContexts } from "../contexts/LoginContexts";

export default function NotificationScreen(){

let {setIsLogin} = useContext(LoginContexts)

    return(
<SafeAreaView style={{
    flex:1,
    flexDirection:'column',
    backgroundColor:"#4655F6",
    alignItems:'center',
    paddingTop:'10%',
    }}>
    <Text style={{
        fontSize:30, 
        color:"white", 
        fontWeight:"700"
        }}>Bildirimler</Text>

        <View>
       
    <View style={{padding:10,paddingTop:30, flexDirection:"row",borderBottomWidth:0.5, borderBottomColor:'white'}}>
      <Image source={require('../assets/images/avatar1.jpg')} style={{width:64, height:64, backgroundColor:"#BFCDE0", borderRadius:50}}></Image>
      <View style={{paddingLeft:10}}>
        <Text style={{marginBottom:10, color:'white'}}>Serhat Giriş Yaptı</Text>
        <Text style={{fontSize:10, color:'white'}}>29.05.2023 11:42</Text>
    </View>
    </View>
    <View style={{padding:10, flexDirection:"row",borderBottomWidth:0.5, borderBottomColor:'white'}}>
      <Image source={require('../assets/images/avatar2.jpg')} style={{width:64, height:64, backgroundColor:"#BFCDE0", borderRadius:50}}></Image>
      <View style={{paddingLeft:10}}>
      <Text style={{marginBottom:10, color:'white'}}>Senem Çıkış Yaptı</Text>
      <Text style={{fontSize:10, color:'white'}}>29.05.2023 11:12</Text>
    </View>
    </View>


    <View style={{padding:10, flexDirection:"row",borderBottomWidth:0.5, borderBottomColor:'white'}}>
      <Image source={require('../assets/images/avatar3.jpg')} style={{width:64, height:64, backgroundColor:"#BFCDE0", borderRadius:50}}></Image>
      <View style={{paddingLeft:10}}>
      <Text style={{marginBottom:10, color:'white'}}>Senem Çıkış Yaptı</Text>
      <Text style={{fontSize:10, color:'white'}}>29.05.2023 11:12</Text>
    </View>
    </View>










    
        </View>

<View style={{flex:1,justifyContent:'flex-end', paddingBottom:'10%'}}>
<TouchableOpacity 
    onPress={() => setIsLogin(false)}
      style={{
        width:130, 
        backgroundColor:"tomato", 
        height:35, 
        borderRadius:10, 
        alignItems:"center",
        justifyContent:"center",
        
        }}>
            
        <Text 
            style={{
                color:"white",
                fontWeight:"bold",
                fontSize:18
                }}>Çıkış
        </Text>
    </TouchableOpacity>
    </View>
</SafeAreaView>
    )
}