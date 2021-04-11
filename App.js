/* 
TITLE: An Event Management System
PARTICIPENTS: Group B
RQUIERMENTS:
1. It contains 30/31 days based on the month of the 
year.
2. Each event is a full day event.
3. Date and time are crucial to avoid clashes for multiple seminars in the same venue, date and time.
4. First comes, first served basis.
5. The event is operating from 8am until 5pm.
*/

// LIST OF ALL REQUIRED CLASSES AND LIBRARIES
/*
- ADD DETAILS TO EXPLAIN HERE ONE BY ONE
*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// REQUIRED VARIABLES
const readline = require('readline'); // READLINE OBJECT TO RETRIVE INPUT FROM USERS 
const rl = readline.createInterface({ // INHERIT THE CREATEINTERFACE IN THE SAME CODING PAGE 
 input: process.stdin,
 output: process.stdout // TO OUTPUT THE PROCESSED INFORMATIONS
});

// STREAMING APP.JS USING THE EXPORT DEFAULT FUNCTION
export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


// CSS SECTION
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});










