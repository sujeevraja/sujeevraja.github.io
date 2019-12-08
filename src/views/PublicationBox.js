var m = require("mithril");
var Publication = require("../models/Publication");

var publicationView = function (pub) {
    var children = [
        m('i', pub.title),
        ", ",
        pub.authors];

    if (pub.hasOwnProperty("journal")) {
        children.push(", ");
        children.push(m('b', pub.journal));
    }
    if (pub.hasOwnProperty("volume")) {
        children.push(", Vol ");
        children.push(pub.volume);
    }
    if (pub.hasOwnProperty("issue")) {
        children.push(", Issue ");
        children.push(pub.issue);
    }
    if (pub.hasOwnProperty("pages")) {
        children.push(", ");
        children.push(pub.pages);
    }
    if (pub.hasOwnProperty("notes")){
        children.push(", ");
        children.push(pub.notes);
    }
    if (pub.hasOwnProperty("year")) {
        children.push(", ");
        children.push(pub.year);
    }
    children.push(".");
    return m("li", { class: "pa2" }, children);
};

module.exports = {
    oninit: Publication.loadList,
    title: 'Publications',
    view: function () {
        return m("ul", {}, Publication.list.map(publicationView));
    }
};
