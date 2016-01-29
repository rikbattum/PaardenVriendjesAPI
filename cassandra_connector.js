var cassandra = require('cassandra-driver');

module.exports = {

    cassandraConnector : function cassandraConnector() {

        var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: "eponadb"});
        client.execute('SELECT * FROM member', function (err, result) {
            //The row is an object with the column names as property keys
            console.log(result);
            return (result);
        });
    }
}

