var m = require("mithril")

var Experience = {
    list: [],
    loaded: false,
    loadList: function () {
        console.log("Experience.loadList starting...")
        return m.request({
            method: "GET",
            url: "../assets/experience.json",
        }).then(function (result) {
            Experience.list = result
            Experience.loaded = true
            console.log("Experience.loadList completed.")
            // mithril redraws after this function m.request then functions
            // complete. So, we don't need to call m.redraw() here.
        })
    }
}

module.exports = Experience
