var m = require("mithril")

var Experience = {
    list: [],
    loadList: function () {
        return m.request({
            method: "GET",
            url: "../assets/experience.json",
        }).then(function (result) {
            Experience.list = result
            // mithril redraws after this function m.request then functions
            // complete. So, we don't need to call m.redraw() here.
        })
    }
}

module.exports = Experience