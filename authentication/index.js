const service = require('./authentication-service');
module.exports = function(app) {
    app.post("/auth/register", service.register);

    app.post("/auth/login", service.login);

    app.get("/auth/session", service.session);
}