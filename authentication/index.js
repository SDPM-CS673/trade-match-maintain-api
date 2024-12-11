const service = require('./authentication-service');
module.exports = function(app) {
    app.post("/auth/register", service.register)
}