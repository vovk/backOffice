$(document).ready(function($){
    /*menu*/
    $('.menu-icon').click(function(){
        $('.menu').slideToggle(200);
    });

    /*earning graphic*/
    var plot = $.plot($("#placeholder-1"), [ [[0, 700], [503.5, 1700], [1000.5, 1422], [1300, 1731], [1442, 2334], [1700, 2534], [1900, 2734]] ],
        {
            xaxis: {
                max: 2000,
                show: false
            },
            yaxis: { max: 3000 },

            grid: {
                hoverable: true,
                color: ["#989DAC"],
                margin: { left: 10 },
                borderColor: { bottom: "#ccc", left: "#ccc", top: "#fff", right: "#fff" },
                labelMargin: 20
            },

            series: {
                lines: { show: true, fill: true, lineWidth: 5 },
                points: { show: true, fill: true, fillColor: "#4CC159", radius: 7  },
                bars: { horizontal: true }
            },

            colors: [["#4CC159"]]
        });
    $.plot($("#placeholder-2"), [ [[0, 300], [503.5, 1700], [1000.5, 1422], [1300, 1731], [1442, 2334], [1700, 2534], [1900, 2500]] ],
        {
            xaxis: {
                max: 2000,
                show: false
            },
            yaxis: { max: 3000 },

            grid: {
                hoverable: true,
                color: ["#989DAC"],
                margin: { left: 10 },
                borderColor: { bottom: "#ccc", left: "#ccc", top: "#fff", right: "#fff" },
                labelMargin: 20
            },

            series: {
                lines: { show: true, fill: true, lineWidth: 5 },
                points: { show: true, fill: true, fillColor: "#4CC159", radius: 7  },
                bars: { horizontal: true }
            },

            colors: [["#4CC159"]]
        });
    $.plot($("#placeholder-3"), [ [[0, 200], [503.5, 1700], [1000.5, 1422], [1300, 1731], [1442, 2334], [1700, 2534], [1900, 2734]] ],
        {
            xaxis: {
                max: 2000,
                show: false
            },
            yaxis: { max: 3000 },

            grid: {
                hoverable: true,
                color: ["#989DAC"],
                margin: { left: 10 },
                borderColor: { bottom: "#ccc", left: "#ccc", top: "#fff", right: "#fff" },
                labelMargin: 20
            },

            series: {
                lines: { show: true, fill: true, lineWidth: 5 },
                points: { show: true, fill: true, fillColor: "#4CC159", radius: 7  },
                bars: { horizontal: true }
            },

            colors: [["#4CC159"]]
        });

    /*dropzone*/

});





