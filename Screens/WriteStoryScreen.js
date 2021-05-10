import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import firebase from 'firebase';
import db from '../config'

import { RFValue } from "react-native-responsive-fontsize";

export default class WriteStoryScreen extends Component{
  constructor(){
    super()
    this.state={
      title:'',
      author:'',
      story:''


    }
  }
  submitStory=()=>{
  console.log(db.collection('story'))
    db.collection('story').add({
      title:this.state.title,
      author:this.state.author,
      story:this.state.story
    })
    this.setState({
      title:'',
      author:'',
      story:''
    })
  }
  render(){
    return(
      <View>
<Text style={styles.label}>TITLE</Text>
<TextInput
    style={styles.formTextInput}
    placeholder ={"TITLE"}
    onChangeText={(text)=>{
      this.setState({
        title:text
      })
    }}
  />  
  <Text style={styles.label}>AUTHOR</Text>
  <TextInput
  style={styles.formTextInput}
  placeholder ={"AUTHOR"}
  onChangeText={(author)=>{
    this.setState({
      title:author
    })
  }}
 
/>  
<Text style={styles.label}>Write story</Text>
  <TextInput
  style={styles.formTextInput}
  placeholder ={"Write story"}
  onChangeText={(story)=>{
    this.setState({
      title:story
    })
  }}
   multiline={true}
/> 
<TouchableOpacity onPress={()=>{
  this.submitStory()
}}>
<Text style={styles.buttonText}>SUBMIT</Text>

</TouchableOpacity>
</View>
    )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6fc0b8"
  },
  formInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "grey",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14)
  },
label: {
  fontSize: RFValue(13),
  color: "#717D7E",
  fontWeight: "bold",
  paddingLeft: RFValue(10),
  marginLeft: RFValue(20)
}
});
