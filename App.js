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
import React, { Component, Fragment, Table } from "react";
import "antd/dist/antd.css";
import {
  PageHeader,
  Input,
  Button,
  List,
  Calendar,
  Select,
  DatePicker,
  TimePicker,
  Descriptions,
} from "antd";

import { UserOutlined } from "@ant-design/icons";
import Moment from 'moment';
import "./css.css";
import { StyleSheet, Text, View, Image } from "react-native";

// import eventObject from "./eventObject.js";
// REQUIRED VARIABLES
//var eventObject = require('eventObject'); // THIS LINE OF CODE IS ENABLING US TO USE WHATEVER WE WROTE INSIDE OF THE eventObject.js HERE.
/**
 * FOR EXAMPLE, COPY THE FOLLOWING LINE OF CODE TO CREATE A NEW EVENT OBJECT >>>>> var EVENT = new EVENT;
 */

export default class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      NameValue: "",
      AddressValue: "",
      PhoneValue: "",
      EmailValue: "",
      EventVenue: "",
      Date: "",
      eventName: '',
      eventVenue: [""],
      operatingStartTime: '',
      OperatingEndTime: '',
    };
  }
  /*
  handleEventName(e) {
    this.EVENT.eventName.setEventName({
      eventName: e.target.value,
    });
  }
*/
  
  handleInputChange(e) {
    this.setState({
      NameValue: e.target.value,
    });
  }

  handleAddressChange(e) {
    this.setState({
      AddressValue: e.target.value,
    });
  }
  handlePhoneChange(e) {
    this.setState({
      PhoneValue: e.target.value,
    });
  }
  handleEmailChange(e) {
    this.setState({
      EmailValue: e.target.value,
    });
  }
  handleSelect1Change(m) {
    this.setState({
      EventVenue: m,
    });
  }
  handleDateChange(n) {
    console.log(n);
    this.setState({
      Date: n,
    });
  }
  handleBtnClick() {
    this.setState({
      outputName: this.state.NameValue.toUpperCase(),
      outputAddress: this.state.AddressValue.toUpperCase(),
      outputPhone: this.state.PhoneValue,
      outputEmail: this.state.EmailValue,
      formValue: this.state.listData,
      outputEventVenue: this.state.EventVenue,
      outputDate: Moment(this.state.Date.toString()).format('MMMM Do YYYY'),
      NameValue: "",
      AddressValue: "",
      PhoneValue: "",
      EmailValue: "",
      Date: "",
    });
  }
  handleconfirmclick() {
    this.setState({
    });
  }
  handleTimeChange (e) {
    this.setState({  
     OperatingStartTime : e
    });
  };
  handleTime1Change(e){
    this.setState({
       OperatingEndTime:e
    })
  };
  handlenNameInputChange(e){
      this.setState({
      eventName:e.target.value  
      })
  };
  handleSelectChange(m){
     this.setState({
      eventVenue:m
     })
  };
  handleDateChange (n){
      this.setState({
           Date:n
   })
  };
  handleBtnClick1(){
      this.setState({
    outputname:this.state.eventName,
    outputVenue:this.state.eventVenue,
    outputDate:Moment(this.state.Date.toString()).format('MMMM Do YYYY'),
    outputStartTime:Moment(this.state.OperatingStartTime).format('LT'),
    outputEndTime:Moment(this.state.OperatingEndTime).format('LT')
   })
  }
  handleconfirmclick(){
  }
  render() {
      return (
        
      <Fragment>
        <View style= {{justifyContent: 'center'}}>
        <h1 className="head"> Welcome to IIUM Event System </h1>
        </View>
      <View style= {{flexDirection: 'collum', justifyContent: 'center',alignItems: 'center' ,height: 680 }}>

        <View>
          <div>
            <div className="mian" id="id">
              <h2>Event Information</h2>
              <Input
                className="NameInput"
                placeholder="Name"
                prefix={<UserOutlined />}
                value={this.state.NameValue}
                onChange={this.handleInputChange.bind(this)}
                />
              <p>
                <Input
                  className="AddressInput"
                  placeholder="Address"
                  value={this.state.AddressValue}
                  onChange={this.handleAddressChange.bind(this)}
                  />
              </p>
              <p>
                <Input
                  className="PhoneInput"
                  placeholder="Phone"
                  value={this.state.PhoneValue}
                  onChange={this.handlePhoneChange.bind(this)}
                  />
              </p>
              <p>
                <Input
                  className="EmailInput"
                  placeholder="Email"
                  value={this.state.EmailValue}
                  onChange={this.handleEmailChange.bind(this)}
                  />
              </p>
              <p>
                <Select
                style={{ width: 250 }}
                  defaultValue="Event Venue"
                  onChange={this.handleSelect1Change.bind(this)}>
                  <option value="KICT MAIN HALL"> KICT MAIN HALL </option>
                  <option value="ECON MAIN HALL"> ECONS MAIN HALL </option>
                  <option value="LAW MAIN COURT"> LAW MAIN COURT </option>
                  <option value="CAS">CAS</option>
                </Select>
              </p>

              <DatePicker
                style={{ width: 175 }}
                value={this.state.Date}
                onChange={this.handleDateChange.bind(this)}
                />

              <Button type="primary" onClick={this.handleBtnClick.bind(this)}>
                Submit
              </Button>

              <div className="logo">
        </div>
            </div>
          </div>
        </View>

        <View>
          <div className="Detail" id="id">
          <h2>Your Event Information</h2>
              <Descriptions size="small" column={3}>
                <Descriptions.Item>
                  Name: {this.state.outputName}
                </Descriptions.Item>
                <Descriptions.Item>
                  Address: {this.state.outputAddress}
                </Descriptions.Item>
                <Descriptions.Item>
                  Phone: {this.state.outputPhone}
                </Descriptions.Item>
                <Descriptions.Item>
                  Email: {this.state.outputEmail}
                </Descriptions.Item>
                <Descriptions.Item>
                  EventVenue： {this.state.outputEventVenue}
                </Descriptions.Item>
                <Descriptions.Item>
                  Date：{this.state.outputDate}
                </Descriptions.Item>
              </Descriptions>
              <Button
                key="1"
                type="primary"
                onClick={this.handleconfirmclick.bind(this)}
                >
                Confirm
              </Button>
          </div>
        </View>

      </View>

       


      <View style={styles.body}>
              <Text style={styles.header}>React Event Manager</Text>
    
              <View style={styles.container}>
                <Text style={styles.contents}>
                  The event name is: {this.state.outputname}
                </Text>
                <Text style={styles.contents}>
                  Add New Date: { this.state.outputDate}
                </Text>
                <Text style={styles.contents}>
                  The event venue is: {this.state.outputVenue}
                </Text>
                <Text style={styles.contents}>
                  The event starting time is: {this.state.outputStartTime}
                </Text>
                <Text style={styles.contents}>
                  The event ending time is: {this.state.outputEndTime}
                </Text>
    
                <div>
                  <div className="main" id="id">
                    <h2>Key-In Event Information</h2>
                    <p>
                      <Input
                        className="NameInput" // className is a for css file, u do the layout again in app.js, so it is ok to delete it 
                        placeholder="EventName"   // this palceolder like a defualt name 
                        prefix={<UserOutlined />}
                        value={this.state.eventName}
                        onChange={this.handlenNameInputChange.bind(this)} //onchange event for user choose a value from event 
                      />
                    </p>
                    <p>
                    <Select 
                       defaultValue= 'EventVenue'
                       onChange={this.handleSelectChange.bind(this)}>
                      <Select.Option value="KICT MAIN HALL">KICT MAIN HALL</Select.Option>
                      <Select.Option value="ECONS MAIN HALL">ECONS MAIN HALL</Select.Option>
                      <Select.Option value="LAW MAIN COURT">LAW MAIN COURT</Select.Option>
                      <Select.Option value="CAS">CAS</Select.Option>
                                  </Select>
                    </p>
                    <DatePicker style={{ width: 100 }}
                                           value={this.state.Date}
                                           onChange={this.handleDateChange.bind(this)}
                                           format='YYYY-MM-DD' />

                    <p>
                      <TimePicker
                        className="AddressInput"
                        placeholder="From 8:00 am"
                        value={this.state.OperatingStartTime}
                        onChange={this.handleTimeChange.bind(this)}
                      />
                    </p>
                    <p>
                      <TimePicker
                        className="PhoneInput" 
                        placeholder="Until 5:00 pm" 
                        value={this.state.OperatingEndTime}
                        onChange={this.handleTime1Change.bind(this)}
                      />
                    </p>
                    <br />
    
                    <Button type="primary" onClick={this.handleBtnClick1.bind(this)}>
                      Submit
                    </Button>
                  </div>
                </div>
    <div>
                <div className="Detail" id="id">
                  <PageHeader
                    ghost={false}
                    title="Event Confirmation"
                    subTitle="Confirm your event details:"
                  >
                    <Descriptions size="auto" column={2}>
                      <Descriptions.Item>
                        Event Name: { this.state.outputname}
                      </Descriptions.Item>
                      <Descriptions.Item>
                        EventVenue： {this.state.outputVenue}
                      </Descriptions.Item>
                      <Descriptions.Item>
                        Date：{this.state.outputDate}
                      </Descriptions.Item>
                      <Descriptions.Item>
                        Starting Time:
                        {this.state.outputStartTime }
                      </Descriptions.Item>
                      <Descriptions.Item>
                        Ending Time: { this.state.outputEndTime }
                      </Descriptions.Item>
                    </Descriptions>
                    <Button
                      key="1"
                      type="primary"
                      onClick={this.handleconfirmclick.bind(this)}
                    >
                      Confirm
                    </Button>
                  </PageHeader>
                </div></div>
              </View>
    
              <Text style={styles.footer}>
                <b>
                  All Copy Rights are reserved @IIUM,1613003,
                  Email:djy1035@gmail.com
                </b>
              </Text>
            </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: 0,
    alignContent: "space-around",
    border: "8.1px solid darkblue",
    backgroundColor: "skyblue",
    minHeight: "720px",
    minWidth: "600px",
    flexWrap: "wrap",
    //flexBasis: "auto",
    //flexShrink: 0,
  },

  container: {
    zIndex: 2,
    display: "flex",
    flexDirection: "column",

    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "600px",
    height: "auto",
    backgroundColor: "white",

    webkitBoxAlign: "center",
    webkitBoxDirection: "normal",
    webkitBoxOrient: "vertical",
    alignItems: "center",

    boxSizing: "border-box",
    margin: "8.1px",
    paddingTop: "0px",
    paddingBottom: "60px",
    position: "relative",
  },

  // Context: { flex: 1 },

  header: {
    zIndex: 1,
    color: "#fff",
    backgroundColor: "darkblue",
    marginTop: 60,
    fontSize: 60,
    textAlign: "center",
    margin: 10,
    padding: "8.1px",
  },

  footer: {
    zIndex: 1,
    color: "#fff",
    backgroundColor: "darkblue",
    fontSize: 17.5,
  },

  contents: {
    // textAlign: "center",
    marginTop: "100px",
    color: "darkblue",
  },

  table: {
    alignContent: "space-around",
    border: "8.1px solid darkblue",
  },
});
