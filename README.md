## AppDynamics Sample Application - DevNet MiniHack

This is a simple Node.js application simulating a fruit stand. To run the application:
`node src/server.js `
You can see your app running at : http://localhost:3000

1. If you don’t already have an AppDynamics account, create a trial account here: https://www.appdynamics.com/free-trial/
2. After creating the account, choose "Use your own app", you'll see a Getting Started Wizard dashboard.
3. Follow getting started wizard for Node.js to add AppDynamics agent to this Sample Application. Name your application and tier "MiniHack".
4. Wait until both dotted lines are green as below, then continue to AppDynamics dashboard.
![alt text](https://github.com/Appdynamics/DevNet-MiniHack/blob/master/src/public/img/connected.png)
5. Throw some errors using the example app by clicking “Generate Errors” button in the example, and observe the results in the AppDynamics APM Dashboard.
