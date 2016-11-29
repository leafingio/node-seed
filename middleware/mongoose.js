var chalk = require('chalk');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = function(){
    if(mongoose.connection.readyState === 0) {
        mongoose.connect(process.env[process.env.SERVER_ENVIRONMENT + '_DB'],
        function(err) {
            if (err) console.log(err);
            else {
                console.log(chalk.cyan('- MongoDB', 'Activated:',
                    process.env[process.env.SERVER_ENVIRONMENT + '_DB']));
                console.log('\n')
            }
        });
    };
}