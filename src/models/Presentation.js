var m = require("mithril")

var Presentation = {
    list: [],
    loadList: function () {
        return m.request({
            method: "GET",
            url: "../assets/presentations.json",
        }).then(function (result) {
            Presentation.list = result
            // mithril redraws after this function m.request then functions
            // complete. So, we don't need to call m.redraw() here.
        })
    }
}

module.exports = Presentation