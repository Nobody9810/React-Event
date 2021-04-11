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









//below those open a new vs.code and run. make sure run in default fiel --App.js
//before run this page , add antd first 
//npm install antd --save  or   yarn add antd

import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List,Calendar,Select,DatePicker,TimePicker } from 'antd';


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            NameValue:'',
            AddressValue:'',
            PhoneValue:'',
            EmailValue:'',
            listData: [
              {key: 1,name: 'Wedding'},
              {key: 2,name: 'Funeral'},
              {key: 3,name: 'Festivities'},
              {key: 4,name: 'Others'},

          ]
          }
    }

    render(){
     
        return(
            <Fragment >
            <div className="main">
                <label
                style= {{color:"#197da8" ,fontSize :"30px"}}
                >Name: </label>
                <Input
                placeholder='Name' 
                style={{width:'150px',
                marginRight:'10px',
                borderColor:'#fff88',
                }}
                id="inserArea"
                className='input'
                value={this.state.inputValue}
                onChange={this.handleInputChange.bind(this)}
                />

             <p>
               <label 
               style= {{color:"#197da8" ,fontSize :"30px"}}
                >Address: </label>
                <Input
                placeholder='Address' 
                style={{width:'150px',
                marginRight:'10px',
                borderColor:'#fff88',
                }}
                id="inserArea"
                className='input'
                value={this.state.AddressValue}
                onChange={this.handleAddressChange.bind(this)}
                />
          </p>

          <p>
                <label 
                style= {{color:"#197da8" ,fontSize :"30px"}}
                >Phone: </label>
                <Input
                placeholder='Phone' 
                style={{width:'150px',
                marginRight:'10px',
                borderColor:'#fff88',
                }}
                id="inserArea"
                className='input'
                value={this.state.PhoneValue}
                onChange={this.handlePhoneChange.bind(this)}
                />
          </p>

          <p>
               <label 
                style= {{color:"#197da8" ,fontSize :"30px"}}
                >Emali: </label>
               <Input
               placeholder='Email' 
               style={{width:'150px',
               marginRight:'10px',
               borderColor:'#fff88',
               }}
               id="inserArea"
               className='input'
               value={this.state.EmailValue}
               onChange={this.handleEmailChange.bind(this)}
               />
          </p>

               <DatePicker style={{ width: 100 }} />
               <TimePicker style={{ width: 100 }} />
         
          <p> 
 <Select 
 defaultValue= "TypeOfEvent"
 style={{ width: 120, marginTop:'20px' }} 
 onChange={this.handleChange.bind(this)}>
  {
 this.state.listData.map((item,index) => {
     return <Option value= { item.key } 
                    key={index} >
                      {item.name }
            </Option>
  })

  }  
   </Select>
          </p>
          
                <Button 
                type='primary'
                onClick={this.handleBtnClick.bind(this)}>Submit</Button>
                </div>

                <List style={{fontSize:'20px',bottom:'320px',
                              left:'800px',width: '20%',height:'auto',
                              border: '3px ',
                              padding: '5px',
                              backgroundColor:'#60a7b9'}}>
                <li>Name:{this.state.outputName}</li>
                <li>Address:{this.state.outputAddress}</li>
                <li>Phone:{this.state.outputPhone}</li>
                <li>Email:{this.state.outputEmail}</li>
                <li>TypeOfEvent:{}</li> 
                </List> 
                
            <Calendar fullscreen={false} onPanelChange={this.onPanelChange.bind(this)} />
          </Fragment>
        )
    }    

handleInputChange(e) {
    this.setState({
      inputValue:e.target.value,
});
}
handleAddressChange(e){
  this.setState({
    AddressValue:e.target.value,
  })

}
handlePhoneChange(e){
  this.setState({
    PhoneValue:e.target.value,
  })

}
handleEmailChange(e){
  this.setState({
    EmailValue:e.target.value
  });
}
handleBtnClick() {
  this.setState ({
            outputName :this.state.inputValue,
            outputAddress: this.state.AddressValue,
            outputPhone:this.state.PhoneValue,
            outputEmail:this.state.EmailValue,
            formValue:this.state.listData,
            inputValue:'',
            AddressValue:'',
            PhoneValue:'',
            EmailValue:'',
            
    });
}
handleChange(val) {
 
}
 onPanelChange(value, mode) {
    console.log(value, mode);
  }
}
export default App;

