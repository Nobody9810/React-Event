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
import React, { Component, Fragment, Table, } from "react";
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

import { UserOutlined } from '@ant-design/icons';

import './css.css'
import { StyleSheet, Text, View, } from "react-native";

// import eventObject from "./eventObject.js";
// REQUIRED VARIABLES
//var eventObject = require('eventObject'); // THIS LINE OF CODE IS ENABLING US TO USE WHATEVER WE WROTE INSIDE OF THE eventObject.js HERE.
/**
 * FOR EXAMPLE, COPY THE FOLLOWING LINE OF CODE TO CREATE A NEW EVENT OBJECT >>>>> var EVENT = new EVENT;
 */

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.EVENT = {
      eventName: "Some events, try to have array",
      Date: Date("month", "day", "hours", "minutes"),
      eventVenue: [""],
      operatingStartTime: Date("hours", "minutes"),
      operatingEndTime: Date("hours", "minutes"),
    };
    
    this.state = {
      NameValue: "",
      AddressValue: "",
      PhoneValue: "",
      EmailValue: "",
      EventVenue: "",
      Date: "",
    };
  }

  AddDate() {
    var date = new Date("month", "day", "hours", "minutes");
    this.EVENT.Date = date;
    this.EVENT.eventName = "new event naming";
  }
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
  handleSelectChange(m) {
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
      outputDate: this.state.Date.toString(),
      NameValue: "",
      AddressValue: "",
      PhoneValue: "",
      EmailValue: "",
      Date: "",
    });
  }
  handleconfirmclick() {
    this.setState({});
  }

  render() {
    const eventObjectView = () => {
      return (
        <table style={styles.table}>
          <h1>Simple table to view the event {this.EVENT} object:</h1>
          <tr>
            <th>Attribute:</th>
            <th>Information:</th>
          </tr>
          <tr>
            <td>Event Name:</td>
            <td>
              <div>{this.EVENT.eventName}</div>
            </td>
          </tr>
          <tr>
            <td>Event Venue:</td>
            <td>
              <div>{this.EVENT.eventVenue}</div>
            </td>
          </tr>
          <tr>
            <td>Event Date:</td>
            <td>
              <div>{this.EVENT.Date}</div>
            </td>
          </tr>
          <tr>
            <td>Starting Time:</td>
            <td>
              <div>{this.EVENT.operatingStartTime}</div>
            </td>
          </tr>
          <tr>
            <td>Ending Time:</td>
            <td>
              <div>{this.EVENT.operatingEndTime}</div>
            </td>
          </tr>
        </table>
      );
    };

    return (
      <Fragment>
        <h1 className="head"> Welecome To IIUM Event System </h1>

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
                defaultValue="EventVenue"
                onChange={this.handleSelectChange.bind(this)}
              >
                <Select.Option value="EventVenue">EventVenue</Select.Option>
                <Select.Option value="KICT MAIN HALL">
                  KICT MAIN HALL
                </Select.Option>
                <Select.Option value="ECONS MAIN HALL">
                  ECONS MAIN HALL
                </Select.Option>
                <Select.Option value="LAW MAIN COURT">
                  LAW MAIN COURT
                </Select.Option>
                <Select.Option value="CAS">CAS</Select.Option>
              </Select>
            </p>
            <DatePicker
              style={{ width: 100 }}
              value={this.state.Date}
              onChange={this.handleDateChange.bind(this)}
            />

            <Button type="primary" onClick={this.handleBtnClick.bind(this)}>
              Submit
            </Button>
          </div>
        </div>

        <div className="Detail" id="id">
          <PageHeader
            ghost={false}
            title="Event"
            subTitle="This Is Your Event Details"
          >
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
          </PageHeader>
        </div>

        <View style={styles.body}>
          <Text style={styles.header}>React Event Manager</Text>

          <View style={styles.container}>
            <Text style={styles.contents}>
              The event name is: {this.EVENT.eventName}
            </Text>

            <Text style={styles.contents} onPress={() => this.AddDate()}>
              Add New Date: {this.EVENT.Date}{" "}
            </Text>
            <Text style={styles.contents}>
              The event venue is: {this.EVENT.eventVenue}
            </Text>
            <Text style={styles.contents}>
              The event starting time is: {this.EVENT.operatingStartTime}
            </Text>
            <Text style={styles.contents}>
              The event ending time is: {this.EVENT.operatingEndTime}
            </Text>

            <eventObjectView />
          </View>
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
    paddingTop: "310px",
    paddingBottom: "310px",
    position: "relative",
  },

  // Context: { flex: 1 },

  header: {
    zIndex: 1,
    color: "#fff",
    backgroundColor: "blue",
    marginTop: 60,
    fontSize: 60,
    textAlign: "center",
    margin: 10,
    padding: "8.1px",
  },

  contents: {
    // textAlign: "center",
    color: "darkblue",
  },

  table: {
    alignContent: "space-around",
    border: "8.1px solid darkblue",
  },
});





/////////////////////////////////////////////////////////////////////////////


        
        



  



