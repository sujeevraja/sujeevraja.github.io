var m = require("mithril")


module.exports = {
    view: function () {
        return m('footer',
            {
                class: [
                    'tl', // left align
                    'gray', // font color
                    'fixed', // fixed position
                    'bottom-0', // move to bottom
                    'pv3', // vertical (i.e. top and bottom padding)
                    'bg-white', // white background makes footer opaque when reducing browser height.
                    'w-100', // This helps footer hides whole browser when reducing browser height
                ].join(' '),
            },
            [
                'Built with ',
                m('a', { href: 'http://tachyons.io/' }, 'Tachyons'),
                ' & ',
                m('a', { href: 'https://mithril.js.org/' }, 'MithrilJS'),
                '.'
            ]
        )
    }
}
