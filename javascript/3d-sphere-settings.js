$(document).ready(function () {
    var entries = [
        {
            label: "HTML",
            url: "",
            target: "_top",
        },
        {
            label: "CSS",
            url: "",
            target: "_top",
        },
        {
            label: "ES5/ES6",
            url: "",
            target: "_top",
        },
        {
            label: "TypeScript",
            url: "",
            target: "_top",
        },
        {
            label: "REST",
            url: "",
            target: "_top",
        },
        { label: "JSON", url: "", target: "_top" },
        {
            label: "GSAP",
            url: "",
            target: "_top",
        },
        { label: "Angular", url: "", target: "_top" },
        { label: "Wordpress", url: "", target: "_top" },
        { label: "Shopify", url: "", target: "_top" },
        { label: "Node JS", url: "", target: "_top" },
        {
            label: "Git",
            url: "",
            target: "_top",
        },
        {
            label: "_lodash",
            url: "",
            target: "_top",
        },
        {
            label: "Bootstrap",
            url: "",
            target: "_top",
        },
        { label: "SASS", url: "", target: "_top" },
        {
            label: "ReactJS",
            url: "",
            target: "_top",
        },
        { label: "jQuery", url: "", target: "_top" },
        {
            label: "SQL",
            url: "",
            target: "_top",
        },
        {
            label: "Gulp",
            url: "",
            target: "_top",
        },
        { label: "npm", url: "", target: "_top" },
        {
            label: "BEM",
            url: "",
            target: "_top",
        }
    ];

    var settings = {
        //  an array of links
        entries: entries,

        // width of tag cloud
        width: 450,

        // height of tag cloud
        height: 450,

        // radius of tag cloud
        radius: "80%",

        // min radius of tag cloud
        radiusMin: 75,

        // use background draw
        bgDraw: false,

        // background color
        bgColor: "#0000",

        // the behavior of the individual links / Tags
        opacityOver: 1,
        opacityOut: 0.1,
        opacitySpeed: 2,

        // how the content is presented
        fov: 1000,

        // animation speed
        speed: 0.7,

        // font options
        fontFamily: "Arial, sans-serif",
        fontSize: "18",
        fontColor: "#08fdd8",
        fontWeight: "bold",
        fontStyle: "normal",
        fontStretch: "normal",
        fontToUpperCase: false,

        // tooltip options
        tooltipFontFamily: "Arial, sans-serif",
        tooltipFontSize: "15",
        tooltipFontColor: "#fff",
        tooltipFontWeight: "normal", //bold
        tooltipFontStyle: "normal", //italic
        tooltipFontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: "left",
        tooltipDiffX: 100,
        tooltipDiffY: 10,
    };

    $("#tag-cloud").svg3DTagCloud(settings);
});
