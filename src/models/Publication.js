var m = require("mithril")

var Publication = {
    list: [],
    loaded: false,
    loadList: function () {
        console.log("Publication.loadList starting...")
        return m.request({
            method: "GET",
            url: "../assets/publications.json",
        }).then(function (result) {
            Publication.list = result
            Publication.loaded = true
            console.log("Publication.loadList call completed.")
            // mithril redraws after this function m.request then functions
            // complete. So, we don't need to call m.redraw() here.
        })
    }
}

module.exports = Publication
