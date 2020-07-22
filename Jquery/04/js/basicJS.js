//$(function(){
//    $("h1").click(function(){
//        $(".sample").slideUp(1000);
//    })
//})

$(function(){
    $("h1").click(function(){
        $(".sample").animate({
            height:'+=100px',
            width:'+=30px'
        },1000);
    })
})