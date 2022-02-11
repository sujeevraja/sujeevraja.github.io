const m = require("mithril")

const Publication = {
    description: [
        'My published work can be found on my ',
        m('a', {
            href: 'https://scholar.google.com/citations?user=S2CWoKoAAAAJ&hl=en'
        }, 'Google Scholar profile'),
        ". The list below shows work that is yet to be published."
    ],
    list: [],
    loaded: false,
    loadList: function () {
        console.log("Publication.loadList starting...")
        return m.request({
            method: "GET",
            url: "../assets/yetToBePublished.json",
        }).then(function (result) {
            Publication.list = result
            Publication.loaded = true
            console.log("Publication.loadList completed.")
            // mithril redraws after this function m.request then functions
            // complete. So, we don't need to call m.redraw() here.
        })
    }
}

module.exports = Publication
