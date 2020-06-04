# MERN Passport Template 

Authentication with MySQL, Express, React, Node (MERN) + Sequelize ORM + bcrypt + Passport.js 

## Functionalities
This sample application provides the following functionalities. 

* Signup
* Login
* Private page (Requires username/password authentication)
* About page (public access)

## Live Demo 
Live demo from here. 

https://mern-passport-example.herokuapp.com/

## Installation
The following  products must be installed before you start using this application. 
* Node.js 
* MySQL 

#### Create MySQL Database 
Execute db/create_database.sql to create a new database in MySQL.

```
$ cp .env_sample .env
```
Modify this file according to your MySQL environment. (Username, Password and Hostname)

`.env` file is not uploaded to GitHub as it is listed in `.gitignore` file.

#### Running Application 

```
npm install 
npm start 
```
  
## Author
Takuji Okubo
