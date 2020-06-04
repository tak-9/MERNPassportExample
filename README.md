# MERN Passport Template :atom_symbol:

Authentication with MySQL, Express, React, Node (MERN) + Sequelize ORM + bcrypt + Passport.js 

## Functionalities
This sample application provides the following functionalities. 

* Signup
* Login
* Private page (Requires username/password authentication)
* About page (public access)

## Live Demo   :earth_asia:
Live demo from here. 

https://mern-passport-example.herokuapp.com/

## Installation
The following  products must be installed before you start using this application. 
* Node.js 
* MySQL 

#### Create MySQL Database 
Execute the following command or run `db/create_database.sql` to create a new database in MySQL.

```
mysql> CREATE DATABASE mern_passport;
```

#### Setting Environment for MySQL Database 

`.env` file is for setting environment variables. `.env_sample` is template for `.env` file. 
This `.env' file is not uploaded to GitHub as it is listed in `.gitignore` file.
Copy template file `.env_sample` to `.env` file. 

```
$ cp .env_sample .env
```

Modify this file according to your MySQL environment. (Username, Password and Hostname)

```
NODE_ENV=development
DB_USERNAME=root
DB_PASSWORD=password
DB_HOST=localhost
DB_DATABASE=mern_passport
```
Your password is kept private in your host (not uploaded to GitHub) as `.env` is in `.gitignore`. This is convenient when working in a team too. We don't have conflict in mergining password file.    


#### Running Application 

```
$ npm install 
$ npm start 
```
  
## Author
Takuji Okubo
