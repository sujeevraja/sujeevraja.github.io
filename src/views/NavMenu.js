var m = require('mithril')

class Link {
    constructor(name, route) {
        this.name = name;
        this.route = route;
    }
};

module.exports = {
    view: function () {
        var links = [
            new Link('Home', '/'),
            new Link('Experience', '/#!/experience'),
            new Link('Education', '/#!/education'),
            new Link('Publications', '/#!/publications'),
            new Link('Presentations', '/#!/presentations'),
            new Link('Teaching', '/#!/teaching'),
            new Link('Activities', '#!/activities'),
        ];

        var items = links.map(function (item) {
            return m('a', {
                href: item.route,
                class: 'pv1-ns f6 fw6 dim link dark-gray mr3 mr3-m mr4-l dib'
            },
                item.name)
        });

        var nav = m('div', { class: 'nowrap left' }, items);

        return m('nav',
            {
                class: [
                    'fixed', // fixed position
                    'top-0', // move to top
                    'pv3', // vertical (top and bottom) padding
                    // 'ph5-ns',
                    // 'bg-white',
                    // 'mb3',
                    // 'mb5-ns',
                    // 'bt',
                    'overflow-auto', // add scrollbars when needed
                ].join(' ')
            },
            nav
        );
    }
}
