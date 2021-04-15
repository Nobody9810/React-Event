
/* 
TITLE: An Event Management System
PARTICIPANTS: Group B
REQUIREMENTS:
1. It contains 30/31 days based on the month of the 
year.
2. Each event is a full day event.
3. Date and time are crucial to avoid clashes for multiple seminars in the same venue, date and time.
4. First comes, first served basis.
5. The event is operating from 8am until 5pm.
*/


/*Use the readline interface to add communication with the users 
const readline = require('readline');

const readline = readline.createInterface({

input: process.stdin,

output: process.stdout

});
*/
//     rl.question('What do you think of Node.js? ', (answer) => {

//         console.log(`Thank you for your valuable feedback: ${answer}`);

//         rl.close();

//    });

// LIST OF ALL REQUIRED CLASSES AND LIBRARIES
/*
- ADD DETAILS TO EXPLAIN HERE ONE BY ONE
//before run this page , add antd first 
//npm install antd --save  or   yarn add antd
*/
import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List,Calendar,Select,DatePicker,TimePicker } from 'antd';
import { StyleSheet, Text, View } from 'react-native';

import eventObject from './eventObject.js'
// REQUIRED VARIABLES
//var eventObject = require('eventObject'); // THIS LINE OF CODE IS ENABLING US TO USE WHATEVER WE WROTE INSIDE OF THE eventObject.js HERE.
/**
 * FOR EXAMPLE, COPY THE FOLLOWING LINE OF CODE TO CREATE A NEW EVENT OBJECT >>>>> var EVENT = new EVENT; 
 */

 export default class App extends React.Component { 

  constructor(_EVENT){
    super(); 
    this.EVENT = {
     eventName: "Some events, try to have array",
     Date: Date( 'month', 'day', 'hours', 'minutes' ),
     eventVenue: ['firstVenue'],
     operatingStartTime: Date( '08', '00' + '\t am' ),
     operatingEndTime: Date( '05' , '00' + '\t pm' )
    } 
    }
 
   AddDate(){
     Date = new Date( month, day, hours, minutes);
     this.setEVENT({Date: Date }); //click adds new date 
   }
   
   render() {
   return (
   
   <View style={styles.container}>
   <Text style={styles.header}>React Event Manager</Text>
   <eventObject />
   <Text style={styles.contents}>The event name is: {this.EVENT.eventName}</Text> 
 
   <Text style={styles.contents}onPress={() => this.AddDate()}>
    Add New Date supposedly: {this.EVENT.Date} </Text>
   
   </View>
   ); 
   }
  }

 
  const styles = StyleSheet.create({ 
   container: {
     zIndex: 3,
   justifyContent: 'flex-start', 
   alignItems: 'center', 
   backgroundColor: 'skyblue',
   }, 
   
   header: {
   flex: 1,
   zIndex: 1,
   marginTop: 60,
   fontSize: 60, 
   textAlign: 'center', 
   backgroundColor: 'blue',
   margin: 10,
   },
   zIndex: 2,
   contents: {
   textAlign: 'center', 
   color: '#333333', 
   marginBottom: 5,
   } 
  })




