$(function(){
    
    var nr = 1;

    $('.Slider__item').hide();
    $('.Slider__item:nth-child(' + nr +')').show();
    $('.Slider__kropka').css('background', '#f07f1a');
    $('.Slider__kropka:nth-child(' + nr +')').css('background','#000000');

    $('.Slider__select div').click(function() {
        let index = $(this).index();
        $('.Slider__kropka').css('background', '#f07f1a');
        $(this).css('background', '#000000');
        $('.Slider__item').slideUp("slow");
        $('.Slider__box div:eq(' + index + ')').slideDown("slow");
        nr = index+1;
    })

    time = setInterval(() => {
        nr++;
        if (nr > 3) nr = 1;
        $('.Slider__kropka').css('background', '#f07f1a');
        $('.Slider__kropka:nth-child(' + nr +')').css('background','#000000');
        $('.Slider__item').slideUp("slow");
        $('.Slider__item:nth-child(' + nr +')').slideDown("slow");
    }, 7000);

})