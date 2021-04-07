// THE EVENT OBJECT MODEL

/* 
RQUIERMENTS:
1. It contains 30/31 days based on the month of the 
year.
2. Each event is a full day event. (initilized)
3. Date and time are crucial to avoid clashes for multiple seminars in the same venue, date and time. (initilized)
4. First comes, first served basis. (Not yet) needs if else statments or it can be replayced by visual illustration of the information
5. The event is operating from 8am until 5pm. (initilized)
*/

// REQUIRED VARIABES 


let EVENT; // IT SHOULD REPRESENT A FULL DAY EVENT
var eventName;
const eventVenue = [firstVenue, secondVenue, thirdVenue],
firstVenue = 'KICT MAIN HALL',
secondVenue = 'ECONS MAIN HALL',
thirdVenue = 'LAW MAIN COURT';
var Date;
var operatingStartTime;
var operatingEndTime;

class eventObject {
    



    constructor(){// DEFAULT CONSTRUCTOR
        
        this.EVENT = {
            eventName: "",
            Date: Date( month, day, hours, minutes ),
            eventVenue: [""],
            operatingStartTime: Date( hours, minutes + '\t am' ),
            operatingEndTime: Date( hours , minutes + '\t pm' )
        }

    }

    // GEETERS AND SETTERS 
    get EVENT() { return this.EVENT; }
    set EVENT(EVENT) { this.EVENT = EVENT; }

    get eventName() { return this.eventName;}
    set eventName(eventName) { this.eventName = eventName; }

    get eventVenue() { return this.eventVenue; }
    set eventVenue(eventVenue) { this.eventVenue = eventVenue; }

    get Date() { return this.Date; }
    set Date(Date) { this.Date = Date; }

    get operatingStartTime() { return this.operatingStartTime; }
    set operatingStartTime(operatingStartTime) {this.operatingStartTime = '08'+'00'; }

    get operatingEndTime() { return this.operatingEndTime; }
    set operatingEndTime(operatingEndTime) {this.operatingStartTime = '05'+'00'; }





    

}



/* HOW TO RETRIVE DATE DATA
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

