# Dev-Tinder
Developing Tinder like application for practicing Node and Mongo

Features:
1) create Account
2) Login
3) Update Account
4) Feed page
5) Send Connection Request (Swipe of orignal tinder)
6) See our matches
7) Received/Sent Request (Separate tabs for both)

Tech Planning:
1) Two microservices : FE & BE
2) FE : React, Typescript
3) BE : NodeJS, Typescript, MongoDB
4) Low level Design

LLD:
1) DB Design (Decide Collections and Document field types)
    - User Collection (fname, lname, email, password, age, gender, preference)
    - Connection Request Collection (from, to, status)
2) Api Design
    - Rest API will be used. (GET, POST, PUT, PATCH, DELETE are the http methods)
    - /signup (POST)
    - /login (POST)
    - /profile (GET)
    - /profile (POST)
    - /profile (PATCH) 
    - /feed (GET)
    - /sendRequest (POST)
        - ignore or interested
    - /respondRequest (POST)
        - accept
        - reject
    - /connections (GET)
    - /requests (GET)
