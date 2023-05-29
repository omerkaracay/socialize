import {  Text, TouchableOpacity, SafeAreaView, View, Image } from "react-native";
function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor:"#FEFCFD"}}>
    
    <View style={{padding:10,paddingTop:30, flexDirection:"row"}}>
      <Image source={require('../assets/images/avatar1.jpg')} style={{width:64, height:64, backgroundColor:"#BFCDE0", borderRadius:50}}></Image>
      <View style={{paddingLeft:10}}>
        <Text style={{marginBottom:10}}>Bugün hava çok güzel! 💗💗💗</Text>
        <Text style={{fontSize:10}}>29.05.2023 11:42</Text>
    </View>
    </View>
    <View style={{padding:10, flexDirection:"row"}}>
      <Image source={require('../assets/images/avatar2.jpg')} style={{width:64, height:64, backgroundColor:"#BFCDE0", borderRadius:50}}></Image>
      <View style={{paddingLeft:10}}>
        <Text style={{marginBottom:10}}>React Native Öğreniyoruz #reactnative</Text>
        <Text style={{fontSize:10}}>29.05.2023 11:12</Text>
    </View>
    </View>
    <View style={{padding:10, flexDirection:"row"}}>
      <Image source={require('../assets/images/avatar3.jpg')} style={{width:64, height:64, backgroundColor:"#BFCDE0", borderRadius:50}}></Image>
      <View style={{paddingLeft:10}}>
        <Text style={{marginBottom:10}}>Yeni Kayıt</Text>
        <Text style={{fontSize:10}}>29.05.2023 11:10</Text>
    </View>
    </View>
    <TouchableOpacity onPress={() => navigation.pop()}>
    <Text 
        
        style={{
          paddingLeft:10,
            color:"blue",
            fontWeight:"bold",
            fontSize:18,
            marginTop:30
            }}>Çıkış</Text>
            <Text></Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;