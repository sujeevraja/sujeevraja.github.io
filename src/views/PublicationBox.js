var m = require("mithril").default
var Publication = require("../models/Publication")

var publicationView = function (pub) {
    var children = [
        m('i', pub.title),
        ", ",
        pub.authors,
        ", "]

    if (pub.hasOwnProperty("journal")) {
        children = children.concat([
            m('b', pub.journal),
            ", Vol ", pub.volume,
            ", Issue ", pub.issue,
            ", ", pub.pages,
            ", ", pub.year,
            "."])
    } else {
        children = children.concat(["(working)."])
    }

    return m("li", { class: "pa2" }, children)
}

module.exports = {
    oninit: Publication.loadList,
    view: function () {
        return m("ul", {}, Publication.list.map(publicationView))
    }
}