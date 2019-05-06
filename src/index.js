import m from "mithril";

var Body = require("./views/Body")

// views
var BioBox = require("./views/BioBox")
var ExperienceBox = require("./views/ExperienceBox")
var EducationBox = require("./views/EducationBox")
var ComingSoon = require("./views/ComingSoon")
var PublicationBox = require("./views/PublicationBox")

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

// Only components created with mount and their subcomponents will be redrawn.
// We need redraws after file loads and so need a component for the body.
// m.mount(document.body, Body);

m.route(document.body, "/", {
    "/": {
        render: function () {
            return m(Body, { comp: BioBox })
        }
    },
    "/experience": {
        render: function () {
            return m(Body, { comp: ExperienceBox })
        }
    },
    "/education": {
        render: function () {
            return m(Body, { comp: EducationBox })
        }
    },
    "/publications": {
        render: function () {
            return m(Body, { comp: PublicationBox })
        }
    },
    "/presentations": {
        render: function () {
            return m(Body, { comp: ComingSoon })
        }
    }
})