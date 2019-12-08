var m = require("mithril")

var Education = {
    list: [],
    loaded: false,
    loadList: function () {
        console.log("Education.loadList starting...")
        return m.request({
            method: "GET",
            url: "../assets/education.json",
        }).then(function (result) {
            Education.list = result
            Education.loaded = true
            console.log("Education.loadList completed.")
            // mithril redraws after this function m.request then functions
            // complete. So, we don't need to call m.redraw() here.
        })
    }
}

module.exports = Education
