#Support Hero
###A javascript based web application for scheduling on-duty support

----
##Installation
### Mongo:
This web application requires mongodb to be running locally on your machine. I installed mongodb through [homebrew](http://brew.sh/).

While installing mongodb through homebrew, I had to set some special permissions on /data/db directory to start the daemon. Please see stack overflow [discussion](http://stackoverflow.com/questions/7948789/mongodb-mongod-complains-that-there-is-no-data-db-folder) for more details

    sudo mkdir -p /data/db
    sudo chmod +x+r+w /data/db/
    sudo touch /data/db/mongod.lock
    sudo chown YOUR_USER_NAME:staff /data/db
    sudo chmod +x+r+w /data/db/mongod.lock
    sudo chown YOUR_USER_NAME:staff /data/db/mongod.lock