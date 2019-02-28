'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');

const sn=require('servicenow-rest-api'); // service now connect
const Promise = require('request-promise-native');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./info.properties');



const app = new App();



app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb()    
);

const ServiceNow=new sn(properties.get('_INSTANCE'),properties.get('_USERID') ,properties.get('_PASSWORD') );
var Authenticated = false
var taskNumber="0";



// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        this.ask('Welcome to Talk to Service Now ,   For validation purposes ', 'Welcome to Talk to Service Now ,   For validation purposes ');
       //  return this.toIntent('Authenticate');
    },

    Login() {
        this.ask('Login Successful, What do you want to do today ,ask for help to listen to all options ','What next');  
 
    },

    async NewTaskIntent() {

        
       
        taskNumber = await createNewTaskInServiceNow(this.$inputs);

        if(taskNumber != "0") {
            this.ask('Created task susccessfully with number  ' + taskNumber ,'What next');  
        } else {
            this.ask('Task could not be created , Please try again '  ,'What next');  
        }
        
    },

    getSampleData(){
        this.ask('getSampleData ');  
    }

    

});

async function createNewTaskInServiceNow(inputs) {
    
    ServiceNow.Authenticate();
        
    const data={
        'short_description':inputs.taskName.value,
        'urgency':inputs.urgency.value
    };

    ServiceNow.createNewTask(data,'incident',res=>{
        console.log(res);
        taskNumber = res.number;
        console.log("taskNumber =" + taskNumber);
    });

    return taskNumber;
}

module.exports.app = app;