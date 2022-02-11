var m = require("mithril")
var Publication = require("../models/Publication")
var Link = require("./Link")

var publicationView = function (pub) {
    var children = [
        m('i', pub.title),
        m("br"),
        pub.authors]

    var journalExists = pub.hasOwnProperty("journal")
    if (journalExists) {
        children.push(m("br"))
        // children.push(m('b', pub.journal))
        children.push(pub.journal)
    }
    if (pub.hasOwnProperty("volume")) {
        children.push(", Vol ")
        children.push(pub.volume)
    }
    if (pub.hasOwnProperty("issue")) {
        children.push(", Issue ")
        children.push(pub.issue)
    }
    if (pub.hasOwnProperty("pages")) {
        children.push(", ")
        children.push(pub.pages)
    }
    if (pub.hasOwnProperty("notes")){
        if (journalExists) children.push(", ")
        else children.push(m("br"))
        children.push(pub.notes)
    }
    if (pub.hasOwnProperty("year")) {
        children.push(", ")
        children.push(pub.year)
    }
    children.push(".")
    if (pub.hasOwnProperty("links")) {
        children.push(m("br"))
        var first = true
        pub.links.forEach(function(link) {
            if (first) first = false
            else children.push(" ")
            children.push(m(Link, link))
        })
    }
    return m("li", { class: "pa2" }, children)
};

module.exports = {
    oninit: function() {
        if (!Publication.loaded) Publication.loadList()
    },
    title: 'Publications',
    view: function () {
        return [
            Publication.description,
            m("ul", Publication.list.map(publicationView))
        ]
    }
};
