var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/'+process.argv[2];

MongoClient.connect(url, function(err, db){
    if(err) throw err
    var users = db.collection('users')
    users.update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    }, function(err){
        if(err) throw err
        db.close();
    })
})