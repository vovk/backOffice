$(document).ready(function($){
    $('.menu-icon').click(function(){
        $('.menu').slideToggle(200);
    });



    var placeholder = $.plot($("#placeholder"), [ [[503.5, 20000], [1353.5, 40000], [1353.5, 60000], [503.5, 80000]] ],
        {
            xaxis: { max: 2000}, yaxis: { max: 200000 },
            points: { show: true}, lines: { show: true },
            grid: { color: ["#989DAC"]  }
        });



})





