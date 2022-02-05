var m = require("mithril")
var NavMenu = require("./NavMenu")

module.exports = {
    view: function () {
        return m('header',
            [m(NavMenu)])
    }
}
