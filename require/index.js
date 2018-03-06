var welcomeMessage = require('./welcomeModule.js')

console.log("If swedish we will import " + welcomeMessage.sayHelloInSwedish + "\n"
    + "else if American we will import " + welcomeMessage.sayHelloInEnglish + '\n'
    + 'else if Russain we will import ' + welcomeMessage.sayHelloInTatar
    + 'and they will give the following results ' + '\n' +
    welcomeMessage.sayHelloInSwedish() + '\n' +
    welcomeMessage.sayHelloInEnglish() + '\n' +
    welcomeMessage.sayHelloInTatar() +  ' \nrespectively');