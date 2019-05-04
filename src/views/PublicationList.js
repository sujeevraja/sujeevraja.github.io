var m = require("mithril").default
var Publication = require("../models/Publication")

module.exports = {
    oninit: Publication.loadList,
    view: function () {
        return m("ul", {}, Publication.list.map(function (pub) {
            return m("li", {}, pub.author + " " + pub.title)
        }))
    }
}