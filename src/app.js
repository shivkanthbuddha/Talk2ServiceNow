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
const rp = require('request-promise-native');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./info.properties');
const axios= require('axios');



const app = new App();



app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
  //  new FileDb()    
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

    LoginIntent() {
        this.ask('Login Successful, What do you want to do today ,ask for help to listen to all options ','What next');  
 
    },

    async NewTaskIntent() {
               
      
    var ret =null
    const data={
        'short_description':this.$inputs.taskName.value,
        'urgency':this.$inputs.urgency.value
    };
    
    const options={
        url:`https://${properties.get('_INSTANCE')}.service-now.com/api/now/table/incident?sysparm_input_display_value=true&sysparm_display_value=true`,
        method:'post',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        data:data,
        auth:{
            username:properties.get('_USERID'),
            password:properties.get('_PASSWORD')
        }
    }
   await axios(options).then((val)=>{
        taskNumber = val.data.result.number
        if(taskNumber != null) {
            this.ask('Created task susccessfully with number  ' + taskNumber ,'What next');  
        } else {
            this.ask('Task could not be created , Please try again '  ,'What next');  
        }
        console.log(val.data.result);
    }).catch((err)=>{
        console.log(err);       
    });


        
    },

    getSampleData(){
        this.ask('getSampleData ');  
    }

    

});


async function createNewTaskInServiceNow(inputs,alexa) {


 return ret
}

module.exports.app = app;