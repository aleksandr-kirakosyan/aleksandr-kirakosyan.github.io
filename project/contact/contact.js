$(document).ready(function () {
    $('#h1').animate({
        fontSize: '40px'
    },1000,function(){
        $('#p').animate({
            fontSize: '15px' 
        },1000,function () {
            $('#send').animate({
                width: '150px',
                height: '50px',
                padding: '15px'
            },1000),
            $('#send').fadeIn(1000),
            $('#send span').animate({
                fontSize: '15px'
            },1000)
        })
    });
    $("#send").click(function(){
        $(".container").toggle(1000);
    });

    $('.contactcontainer').fadeIn(1000);
    
});