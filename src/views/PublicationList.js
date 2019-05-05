var m = require("mithril").default
var Publication = require("../models/Publication")

var publicationView = function (pub) {
    var s = (pub.authors + ", Vol "
        + pub.volume + ", Issue " + pub.issue + ", " + pub.pages + ", "
        + pub.year + ".")
    return m("li", { class: "pa2" }, [
        m('i', pub.title),
        ", ",
        m('b', pub.journal),
        ", ",
        s,])
}

module.exports = {
    oninit: Publication.loadList,
    view: function () {
        return m("ul", {}, Publication.list.map(publicationView))
    }
}