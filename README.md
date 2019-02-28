# Talk to Service Now


The Voice based assistant which serves the needs of  Service now Customer 
 - It is  Voice based application (Voice bot) runs on Amazon echo ( Alexa )  
 - it is build using the  [JOVO Framework ](https://github.com/jovotech/jovo-framework-nodejs) 

# New Features!

  - Multilingual capabilities
  - Integration with Google sheets ( Separates the content with application logic)
  
> It is  Voice based application (Voice bot) 
> runs on Amazon echo ( Alexa ) and Google Home  (Google Assistant) Devices 
> Since it is build using the  [JOVO Framework ](https://www.jovo.tech/) 


### Technologies

Talk to Service Now uses a number of open source projects to work properly:

* [Jovo Framework](https://www.jovo.tech/) -Application Framework 
* [Alexa SDK](https://developer.amazon.com/alexa/console/ask?) - Amazon's Software development kit  to develop a voice-based application for Alexa devices ( Alexa Skills)
* [Google Actions](https://developers.google.com/actions) -  Google's Software development kit  to develop a voice-based application for Google Home devices ( Google Actions  
* [AWS Lambda](https://aws.amazon.com/lambda/) - AWS Lambda lets you server-side code without provisioning or managing servers (prod).
* [Node.js](https://nodejs.org/) - event I/O for the backend 

### Installation

```sh
# Install node (npm) dependencies
$ npm install

# Builds the files for your Alexa skill and google actions  ( optional:  Use this command post local changes )
$ jovo build

# Deploys this new  skill to your Alexa developers account @ https://developer.amazon.com/alexa/console/ask
$ jovo deploy

# Start the Server ( jovo web hoot URL will appear on the console e.g. https://webhook.jovo.cloud/1fdd42ff-7057-4841-a4cf-1234567890)
$ jovo run watch 
```
Note: jovo deploy -  automatically deploys the to Alexa developers account but google actions needs manual intervention [click me to know more](https://www.jovo.tech/tutorials/google-action-tutorial-nodejs)

## Demo 
Traverse to your alexa developers account @ [alexa demo page]( https://developer.amazon.com/alexa/console/ask) for a demo 

## Alternate Demo 
Traverse to the jovo webhook URL for a demo

### Development

Want to contribute? Great!

### Todos

 - Unit test cases 
 - Data model 

License
----
MIT
**Free Software**

### Happy Path user utterances

- my service now 
- New task
