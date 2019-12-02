var m = require("mithril")

var Publication = {
    list: [],
    loadList: function () {
        return m.request({
            method: "GET",
            url: "../assets/publications.json",
        }).then(function (result) {
            Publication.list = result
            // mithril redraws after this function m.request then functions
            // complete. So, we don't need to call m.redraw() here.
        })
    }
}

module.exports = Publication