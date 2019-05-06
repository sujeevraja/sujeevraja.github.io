var m = require("mithril").default
var SidebarBox = require("./SidebarBox")

var Link = function (name, route) {
    this.name = name
    this.route = route
}

module.exports = {
    view: function () {
        var iconSet1 = m('div', { class: 'w-100 mt2 flex' }, [
            m('div', { class: 'w-third pa1 dim' },
                m('a', { href: 'https://scholar.google.com/citations?user=S2CWoKoAAAAJ&hl=en' },
                    m('i', { class: 'ai ai-google-scholar-square ai-2x' }))),

            m('div', { class: 'w-third pa1 dim' },
                m('a', { href: 'https://www.linkedin.com/in/sujeevraja-sanjeevi-2b434242' },
                    m('i', { class: 'fab fa-linkedin-in fa-2x' }))),

            m('div', { class: 'w-third pa1 dim' },
                m('a', { href: 'https://github.com/sujeevraja' },
                    m('i', { class: 'fab fa-github fa-2x' })))
        ])

        var iconSet2 = m('div', { class: 'w-100 mt2 flex' }, [
            m('div', { class: 'w-third pa1 dim' },
                m('a', { href: 'https://www.researchgate.net/profile/Sujeevraja_Sanjeevi' },
                    m('i', { class: 'fab fa-researchgate fa-2x' })))
        ])

        var links = [
            new Link('Bio', '/'),
            new Link('Experience', '/#!/experience'),
            new Link('Education', '/#!/education'),
            new Link('Publications', '/#!/publications'),
            new Link('Teaching', '/#!/teaching'),
            new Link('Activities', '#!/activities'),
        ]

        var sidebarBoxes = links.map(function (link) {
            return m(SidebarBox, { link: link })
        })

        sidebarBoxes = sidebarBoxes.concat([iconSet1, iconSet2])
        return m('div', { class: 'flex flex-column w6' }, sidebarBoxes)
    }
}
