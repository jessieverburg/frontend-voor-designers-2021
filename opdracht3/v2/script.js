// Functie voor de autoplay
$(function () {
    // De checkbox wordt geselecteerd. Een interval van 3000 wordt meegegeven
    $('#checkbox').change(function () {
        setInterval(function () {
            moveRight();
        }, 3000);
    });
    let slideCount, slideWidth, slideHeight, sliderUlWidth

    fetch('https://api.thecatapi.com/v1/images/search?limit=100&mime_types=&order=Random&size=small&page=0&sub_id=demo-de0f69')
        .then(response => response.json())
        .then(data => {
            $('#sliderUL').html(data.map(({
                url
            }) => `<li><img src="${url}" /></li>`).join(""));
            slideCount = $('#slider ul li').length;
            console.log($('#slider ul li').length)
            slideWidth = $('#slider ul li').width();
            slideHeight = $('#slider ul li').height();
            sliderUlWidth = slideCount * slideWidth;
            $('#slider').css({
                width: slideWidth,
                height: slideHeight
            });

            $('#slider ul').css({
                width: sliderUlWidth,
                marginLeft: -slideWidth
            });
            $('#slider ul li:last-child').prependTo('#slider ul');
        });

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

    $(document).keydown(function(e) {
    if (e.keyCode === 37) {
       // Previous
       $(".a.control_prev").click();
       moveLeft();
    }
    if (e.keyCode === 39) {
       // Next
       $(".a.control_next").click();
       moveRight();
    }
});

});
