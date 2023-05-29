import { useState } from "react";
import { View, Text, TextInput,  TouchableOpacity } from "react-native";
function LoginScreen({navigation}) {


   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");


  return (
    
<View 
    style={{ 
        flex: 1, 
        backgroundColor:"#4655F6"}}>
    <View 
        style={{
            alignItems:"center", 
            justifyContent:"center", 
            height:300, 
            }}>
      <Text 
      style={{
        fontSize:40, 
        color:"white", 
        fontWeight:"900"}}>
            socialize</Text>
    </View>

    <View 
        style={
            {alignItems:"center", 
            justifyContent:"center"
            }}>

    <TextInput
        placeholder="Kullanıcı Adı"
        style={{ 
            width:"75%",
            height: 40,
            fontSize:15,
            paddingLeft: 15,
            backgroundColor:"white",
            borderRadius:14,
            marginBottom:10
         
        }}
        onChangeText={setUsername}
        value={username}
      />
    <TextInput
        placeholder="Şifre"
        secureTextEntry={true}
        style={{ 
            width:"75%",
            height: 40,
            //margin: 10,
            paddingLeft: 15,
            backgroundColor:"white",
            borderRadius:14,
            marginBottom:10
         }}
        onChangeText={setPassword}
        value={password}
      />

    <TouchableOpacity 
    onPress={() => navigation.navigate('Home')}
      style={{
        width:130, 
        backgroundColor:"#94AE89", 
        height:35, 
        borderRadius:10, 
        alignItems:"center",
        justifyContent:"center"}}>
            
        <Text 
            style={{
                color:"white",
                fontWeight:"bold",
                fontSize:18
                }}>Giriş
        </Text>
    </TouchableOpacity>

    <TouchableOpacity 
        style={{
            paddingTop:30
        }}>

        <Text 
            style={{
             color:"white"
            }}>Hesap Oluştur</Text>
    </TouchableOpacity>
    </View>
</View>
  );
}

export default LoginScreen;