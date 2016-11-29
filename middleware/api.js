module.exports = function(app){
    if(process.env[process.env.SERVER_ENVIRONMENT + '_FEATURE_API'] == 'true') {
        var router = require('../server/routes');
        if(process.env[process.env.SERVER_ENVIRONMENT + '_FEATURE_SEND_MIDDLEWARE'] == 'true') {
            var { Send } = rootRequire('leafing');
            app.use('/api', router(), Send);
        } else app.use('/api', router());
    }
}