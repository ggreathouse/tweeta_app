MainDashboardRouter = require("express").Router()

MainDashboardRouter.route("/")
    .get(require("./dashboard.view.js"))

MainDashboardRouter.route("/profile")
    .get(require("./profile.view"))
    



module.exports = MainDashboardRouter