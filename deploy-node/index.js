var FtpDeploy = require('ftp-deploy');
var fs = require('fs');
require('dotenv').config();

var FTP = new FtpDeploy();

// Create config object, should create env file
var config = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    localRoot: __dirname + process.env.LOCAL_ROOT,
    remoteRoot: process.env.REMOTE_ROOT,
    include: [],
    exclude: ['.git', 'deploy-node', 'travis.yml', 'tests']
}

// Deploy files and folders specified in the config.localToot 
FTP.deploy(config, function(err) {
    if(err) 
    {
       console.log(err) 
    } else {
        console.log('finished');
    }
});

// Notify of progress, default events
FTP.on('uploading', function(data) {
    data.totalFileCount;       // total file count being transferred 
    data.transferredFileCount; // number of files transferred 
    data.percentComplete;      // percent as a number 1 - 100 
    data.filename;             // partial path with filename being uploaded 
});

// Show in cli
FTP.on('uploaded', function(data) {
    console.log(data.transferredFileCount + "/" + data.totalFileCount + ": " + data.filename); 
});