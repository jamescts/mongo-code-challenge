# Mongo and TS challenge

This repository contains the files for two challenges: a query challenge over a Mongo database containing Gen 1 Pokemon, and a challenge to create a backoffice with a payment gateway that integrates different payment processing solutions.


## Mongo challenge
The answer to the Mongo challenges can be found in the mongodb.txt file. There is also a Mongo dump in the mongo-dump folder since the database used for this was a different one than the one originally proposed, since I wasn't able to connect to that one.
To get it up and running we simply need to 
```bash
cd mongo-dump
mongorestore
```
Then connect to the database with our preferred application or mongosh.

## Coding challenge
The coding challenge can be found in the backoffice-project folder. To get it up and running:
```bash
npm i
npm run dev
```

To run unit tests:
```bash
npm test
```

There's also another Readme file that explains the decisions and the thought process behind the way the project is set up. 
