import m from "mithril";


/*
Link for documentation on Tachyons styles used:
        http://tachyons.io/docs/table-of-styles/

    Each style can be searched on the above page with Ctrl+f search.

    bg-purple: background purple
    br3: border radius 3
    dim black: dims text/icon on hover
    flex: squeezes all items together
    flex-column: squeezes items into a column
    items-start: columns stick to the top
    ml2: margin left 2
    mt2: margin top 2
    outline: draws a border on all sides
    pa{1,2,3}: pad on all sides by {1,2,3}
    w-100: percentage width of outer container (not all percentages available, check docs)
    w-third: one-third width of outer container
    w6: fixed width (the 6 can be changed from 1 to 10)
    white: text color
*/

m.render(document.body, m('div', { class: 'helvetica pa2' }, [
    m('div', { class: 'flex items-start' }, [
        m('div', { class: 'flex flex-column w6' }, [
            m('div', { class: 'outline w-100 pa3 br3 dim bg-purple white' }, 'Bio'),
            m('div', { class: 'outline w-100 pa3 mt2 br3 dim bg-purple white' }, 'Experience'),
            m('div', { class: 'outline w-100 pa3 mt2 br3 dim bg-purple white' }, 'Education'),
            m('div', { class: 'outline w-100 pa3 mt2 br3 dim bg-purple white' }, 'Publications'),
            m('div', { class: 'outline w-100 pa3 mt2 br3 dim bg-purple white' }, 'Presentations'),
            m('div', { class: 'outline w-100 pa3 mt2 br3 dim bg-purple white' }, 'Other'),

            m('div', { class: 'w-100 mt2 flex' }, [
                m('div', { class: 'w-third pa1 dim' },
                    m('a', { href: 'https://scholar.google.com/citations?user=S2CWoKoAAAAJ&hl=en' },
                        m(i, { class: 'ai ai-google-scholar-square ai-2x' }))),

                m('div', { class: 'w-third pa1 dim' },
                    m('a', { href: 'https://www.linkedin.com/in/sujeevraja-sanjeevi-2b434242' },
                        m(i, { class: 'fab fa-linkedin-in fa-2x' }))),

                m('div', { class: 'w-third pa1 dim' },
                    m('a', { href: 'https://github.com/sujeevraja' },
                        m(i, { class: 'fab fa-github fa-2x' })))
            ]),

            m('div', { class: 'w-100 mt2 flex' }, [
                m('div', { class: 'w-third pa1 dim' },
                    m('a', { href: 'https://scholar.google.com/citations?user=S2CWoKoAAAAJ&hl=en' },
                        m(i, { class: 'ai ai-google-scholar-square ai-2x' }))),

                m('div', { class: 'w-third pa1 dim' },
                    m('a', { href: 'https://www.linkedin.com/in/sujeevraja-sanjeevi-2b434242' },
                        m(i, { class: 'fab fa-linkedin-in fa-2x' }))),

                m('div', { class: 'w-third pa1 dim' },
                    m('a', { href: 'https://www.researchgate.net/profile/Sujeevraja_Sanjeevi' },
                        m(i, { class: 'fab fa-researchgate fa-2x' })))
            ]),
        ]),
        m('div', { class: 'flex flex-column w-100 ml2' }, [
            m('div', { class: 'outline w-100 pa3' }, 'bio box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'experience box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'education box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'publications box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'presentations box'),
            m('div', { class: 'outline w-100 pa3 mt2' }, 'other box'),
        ])
    ]),
]));