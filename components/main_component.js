import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListItem from './listItem';

export default function MainComponent() {
  return (
    <View style={styles.container}>
     <Text style={styles.mainHeading}>Latest Movies</Text>
      
      <ListItem style={styles.tarjeta}/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:'20px',
    backgroundColor: '#f6f6f6'
  },
  mainHeading:{
    marginTop:20,
    fontWeight: "bold",
    fontSize:30
  },
  textColor:{
    color:"#191970"
  },
  tarjeta:{
    flex: 1,
    padding:10,
    alignItems: 'center',
  }
});
