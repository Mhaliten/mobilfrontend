import React, { Component } from 'react';
import { StyleSheet,Text, TextInput, View,TouchableOpacity } from 'react-native';

export default class Bevitel extends Component {
  constructor(props) {
    super(props);
    this.state = {

        nev: '',
        komment:""

    };
  }

felvitel=async ()=>{
    //alert("megnyomva a gomb")

    if (this.state.nev=="" || this.state.komment=="")
    {
      alert("Add meg a nevet és a kommmentet!")
      return
    }
    let bemenet={
      bevitel1:this.state.nev,
      bevitel2:this.state.komment,
      bevitel3:this.props.akttema_bevitel
    }

    fetch('http://192.168.2.113:3000/kommentfelvitel',{
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
       
    )
    .then((response) => response.text())
    .then((szoveg) => {

    alert(szoveg)
     this.props.frissit() 

})
    
}


  render() {
    return (
    <View style = {{backgroundColor:'orange',width:'80%',borderRadius:20,alignSelf:'center'}}>
      <View style={{padding: 10}}>
          <Text style={{padding: 10, fontSize: 22,color:'white',textAlign:'center'}}>
              Név:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 40,width:'50%',alignSelf:'center',backgroundColor:'gray',borderColor:'black',color:"white"}}
          placeholder="Add meg a neved:"
          onChangeText={(nev) => this.setState({nev})}
          value={this.state.nev}
        />

        <Text style={{paddingTop: 10, fontSize: 22,color:'white',textAlign:'center'}}>
              Komment:
          </Text>
        <TextInput
          placeholderTextColor="white"
          style={{height: 120, width:'50%',alignSelf:'center',backgroundColor:'gray',marginBottom:5,textAlignVertical:'top',color:"white"}}
          placeholder="Add meg a kommentet:"
          onChangeText={(komment) => this.setState({komment})}
          value={this.state.komment}
        />
         <TouchableOpacity
          onPress={async ()=>this.felvitel()}>
          <View style={styles.gomb}>
            <Text style={styles.gombSzoveg}>Felvitel</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    gombSzoveg:{
            textAlign:'center',
            color:'white',
            marginTop:'auto',
            marginBottom:'auto',
            fontSize:25
    },
    gomb:{
            height:45,
            backgroundColor:'gray',
            width:'45%',
            alignSelf:'center',
            borderRadius:10
    },
});