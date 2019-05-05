var m = require("mithril").default
var Publication = require("../models/Publication")

var publicationView = function (pub) {
    var s = (pub.title + ", " + pub.journal + ", " + pub.authors + ", Vol "
        + pub.volume + ", Issue " + pub.issue + ", " + pub.pages + ", "
        + pub.year + ".")
    return m("li", {}, [s, m("br")])
}

module.exports = {
    oninit: Publication.loadList,
    view: function () {
        return m("ul", {}, Publication.list.map(publicationView))
    }
}