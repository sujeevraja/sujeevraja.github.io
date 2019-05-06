var m = require("mithril").default

var Education = {
    list: [],
    loadList: function () {
        return m.request({
            method: "GET",
            url: "../assets/education.json",
        }).then(function (result) {
            Education.list = result
            // mithril redraws after this function m.request then functions
            // complete. So, we don't need to call m.redraw() here.
        })
    }
}

module.exports = Education