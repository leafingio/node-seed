
var app = require('express')();

require('./middleware/mongoose')()

require('./middleware/helmet')(app)
require('./middleware/cors')(app)
require('./middleware/bodyParser')(app)
require('./middleware/logs')(app)
require('./middleware/rateLimit')(app)
require('./middleware/api')(app)
require('./middleware/documentation')(app)
require('./middleware/coverage')(app)
require('./middleware/graphql')(app)

require('./middleware/notFound')(app)

app.listen(process.env[process.env.SERVER_ENVIRONMENT + '_PORT'], require('./middleware/consoleInit'));

module.exports = app;