import m from "mithril";

var Body = require("./views/Body")

// views
var BioBox = require("./views/BioBox")
var ExperienceBox = require("./views/ExperienceBox")
var EducationBox = require("./views/EducationBox")
var ComingSoon = require("./views/ComingSoon")
var PublicationBox = require("./views/PublicationBox")
var PresentationBox = require("./views/PresentationBox")
var TeachingBox = require("./views/TeachingBox")
var ActivitiesBox = require("./views/ActivitiesBox")

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

// Details on how the following route is designed can be founde at:
// https://mithril.js.org/route.html#advanced-component-resolution
function buildRouteResolver(component) {
    return {
        render: function () {
            return m(Body, { title: component.title }, m(component))
        }
    }
}

m.route(document.body, "/", {
    "/": buildRouteResolver(BioBox),
    "/experience": buildRouteResolver(ExperienceBox),
    "/education": buildRouteResolver(EducationBox),
    "/publications": buildRouteResolver(PublicationBox),
    "/presentations": buildRouteResolver(PresentationBox),
    "/teaching": buildRouteResolver(TeachingBox),
    "/activities": buildRouteResolver(ActivitiesBox)
})
