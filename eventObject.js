// THE EVENT OBJECT MODEL

/* 
REQUIREMENTS:
1. It contains 30/31 days based on the month of the 
year. (ATTAINED USING THE DATE CONSTRUCTOR)
2. Each event is a full day event. (initialized)
3. Date and time are crucial to avoid clashes for multiple seminars in the same venue, date and time. (initialized)
4. First comes, first served basis. (Not yet) needs if else statements or it can be replaced by visual illustration of the information
5. The event is operating from 8am until 5pm. (RECHECK)
*/

// REQUIRED VARIABLES
/**
 * WE SUPPOSEDLY GOING TO DECLARE ONE VARIABLE WITH THE NAME 'id', FOR INTERNAL MONGODB USE IF NEEDED
 */

import React, { Component, Fragment, Table } from "react";

let EVENT; // IT SHOULD REPRESENT A FULL DAY EVENT
var eventName; // HAVE A UNIQUE NAME FOR EACH EVENT OBJECT
const eventVenue = ["KICT MAIN HALL", "ECON MAIN HALL", "LAW MAIN COURT"];

// SPECIFYING FEW UNIQUE eventVenue ATTRIBUTE VALUES, TO STATE WHERE THE EVENT IS TAKING ACTION
/*
 * MAKING USE OF THE JS UTILITY PROVIDED, THE DATE CONSTRUCTOR
 * USUALLY IS IN THE FOLLOWING FORM >>> var Date = new Date();
 */
var Date;
var operatingStartTime; // THE STARTING POINT OF ANY EVENT
var operatingEndTime; // THE ENDING POINT OF ANY EVENT

class eventObject extends React.Component {
  constructor() {
    // DEFAULT CONSTRUCTOR
    /**
     * THE MAIN USAGE OF THE DEFAULT CONSTRUCTOR IS TO INITIALIZE THE SPECIFIC REQUIRED VALUE TYPES
     * FOR ALL PREVIOUSLY DECLARED VARIABLES EACH BASED ON THEIR OWN UTILITY PURPOSES
     */
    this.EVENT = {
      eventName: "",
      Date: Date(month, day, hours, minutes),
      eventVenue: [""],
      operatingStartTime: Date(hours, minutes),
      operatingEndTime: Date(hours, minutes),
    };
    this.eventObjectView();
  }

  // constructor(EVENT){           // OVER-RIDE THE DEFAULT CONSTRUCTOR TO INTERACT WITH THE OBJECT MODEL
  //     this.EVENT = EVENT;
  // }

  // GETTERS AND SETTERS
  get EVENT() {
    return this.EVENT;
  } // GETS EVENT OBJECT
  set EVENT(EVENT) {
    this.EVENT = EVENT;
  } // SETS EVENT OBJECT

  get eventName() {
    return this.eventName;
  } // GETS eventName ATTRIBUTE OF A PARTICULAR EVENT OBJECT
  set eventName(eventName) {
    this.eventName = eventName;
  } // SETS eventName ATTRIBUTE OF A PARTICULAR EVENT OBJECT

  get eventVenue() {
    return this.eventVenue;
  } // GETS eventVenue ATTRIBUTE OF A PARTICULAR EVENT OBJECT
  set eventVenue(eventVenue) {
    this.eventVenue = eventVenue;
  } // SETS eventVenue ATTRIBUTE OF A PARTICULAR EVENT OBJECT

  get Date() {
    return this.Date;
  } // GETS Date ATTRIBUTE CONSTRUCTOR FOR A PARTICULAR EVENT OBJECT
  set Date(Date) {
    this.Date = Date;
  } // SETS Date ATTRIBUTE CONSTRUCTOR FOR A PARTICULAR EVENT OBJECT

  get operatingStartTime() {
    return this.operatingStartTime;
  }
  set operatingStartTime(operatingStartTime) {
    this.operatingStartTime = operatingStartTime;
  } // PLEASE, VALIDATE AND FIX IF NECESSARY

  get operatingEndTime() {
    return this.operatingEndTime;
  }
  set operatingEndTime(operatingEndTime) {
    this.operatingEndTime = operatingEndTime;
  } // PLEASE, VALIDATE AND FIX IF NECESSARY

  eventObjectView = () => {
    return (
      <table>
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
}

export default eventObjectView;
/* HOW TO RETRIEVE DATE DATA
EVENT.getFullYear();      
EVENT.getMonth();         
EVENT.getDate();          
EVENT.getDay();           
EVENT.getHours();         
EVENT.getMinutes();       
EVENT.getSeconds();       
EVENT.getMilliseconds();  
EVENT.getTime();          
*/
