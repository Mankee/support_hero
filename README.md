#Support Hero
### Support Hero is a javascript based web application for scheduling on-duty support.

##Getting Started:
The following dependencies must be met before you can install and run the support hero application locally on your machine.

#### Install Homebrew:
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
#### Install NodeJS
    brew install node
#### Install MongoDB
    brew install mongodb
#### Install GruntCLI
    npm install -g grunt-cli
#### Install Bower
    npm install -g bower
#### Install Compass
    gem install compass
#### Install Mongo
    brew install mongodb
#### Running MongoDB
>While installing mongodb through homebrew, I had to set some special permissions on /data/db directory to start the daemon. Please see stack overflow [discussion](http://stackoverflow.com/questions/7948789/mongodb-mongod-complains-that-there-is-no-data-db-folder) for more details

    sudo mkdir -p /data/db
    sudo chmod +x+r+w /data/db/
    sudo touch /data/db/mongod.lock
    sudo chown YOUR_USER_NAME:staff /data/db
    sudo chmod +x+r+w /data/db/mongod.lock
    sudo chown YOUR_USER_NAME:staff /data/db/mongod.lock

## Installation:
From the terminal run the following commands.

    git clone git@github.com:Mankee/support_hero.git
    npm install
    bower install

## Running The Application:
From the terminal run each of the following commands from the projects root directory.
>Each service will need to run inside their own terminal tab.

#### Running the database.
    mongod
#### Running the backend.
>Default port is 3000
    node ./index.js

#### Running the frontend.
>Running grunt should open a browser at http://localhost:9000/#/

    cd client
    grunt serve