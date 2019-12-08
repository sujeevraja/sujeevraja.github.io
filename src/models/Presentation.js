var m = require("mithril")

var Presentation = {
    list: [],
    loaded: false,
    loadList: function () {
        console.log("Presentation.loadList starting...")
        return m.request({
            method: "GET",
            url: "../assets/presentations.json",
        }).then(function (result) {
            Presentation.list = result
            Presentation.loaded = true
            console.log("Presentation.loadList completed.")
            // mithril redraws after this function m.request then functions
            // complete. So, we don't need to call m.redraw() here.
        })
    }
}

module.exports = Presentation
