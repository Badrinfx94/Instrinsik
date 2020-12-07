import React, { Component } from 'react';
import { View, Text, TouchableOpacity,TouchableHighlight,StyleSheet,TextInput } from 'react-native';
import axios from 'axios'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      serverData:[]
    };
  }
  componentDidMount(){
    let payload = {
      token: "2faHzLvfOrZjVPJfW9j6hA",
      data: {
        name: "nameFirst",
        email: "internetEmail",
        phone: "phoneHome",
        _repeat: 300
      }
  };
  let that=this
  axios({
    method: "post",
    url: "https://app.fakejson.com/q",
    data: payload
  }).then(function(resp) {

   that.setState({serverData:resp})

  });
  }
navi=()=>{
const {serverData}=this.state

  if(this.state.email!=""){
   
this.props.navigation.navigate("Chat",{a:"s"})
   
  }
 
}
onChangeText=(val)=>{
  
  this.setState({email:val})

}
  render() {
    return (
      <View style={style.container}>
        <Text style={{ fontSize:25,fontWeight:"bold",alignSelf:"flex-start",paddingLeft:30,color:"#191919"}}> Sign in </Text>
        <TextInput onChangeText={text=>this.onChangeText(text)} placeholder="Email" placeholderTextColor="#00BFFF" style={{width:"90%",height:"6%",backgroundColor:"white",marginTop:"10%",borderBottomWidth:1,borderBottomColor:"#DCDCDC",paddingLeft:10}}></TextInput>
        <TextInput   placeholder="Password" placeholderTextColor="#00BFFF" style={{width:"90%",height:"6%",backgroundColor:"white",marginTop:"5%",borderBottomWidth:1,borderBottomColor:"#DCDCDC",paddingLeft:10}}></TextInput>
        <TouchableOpacity style={style.submit} onPress={()=>this.navi()}>
          <Text style={{fontSize:22,color:"white"}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;

const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white"
       

    },
    submit:{
      backgroundColor:"#00BFFF",
      width:"80%",
      height:"7%",
      marginTop:"5%",
      borderRadius:5,
      justifyContent:"center",
      alignItems:"center",
      
 
    }

})
