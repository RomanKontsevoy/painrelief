$(document).ready(function(){

    function numberCase(){
        a = Math.floor(Math.random()*(400-100+1)+300)
    }

    var i = 0;
    function ShowMessage(){
        i=1;
        $('.show-message__item:nth-child('+i+')').fadeIn(500).delay(8000).fadeOut(500);

        numberCase();
        document.getElementById('js-user-id').innerHTML = a;
        numberCase();
        document.getElementById('js-user-id2').innerHTML = a;
        numberCase();
        document.getElementById('js-user-id3').innerHTML = a;
        numberCase();
        document.getElementById('js-user-id4').innerHTML = a;
        numberCase();
        document.getElementById('js-user-id5').innerHTML = a;
        numberCase();
        document.getElementById('js-user-id6').innerHTML = a;
    }


    setTimeout(function(){
        setInterval(
            function(){
                i=i+1;
                if(i>39) i=1;
                $('.show-message__item:nth-child('+i+')').fadeIn(500).delay(8000).fadeOut(500);
            },17000);
        ShowMessage();
    },1000);



    setTimeout(function(){
        $('.show-message__item').addClass('lost_position');
    }, 655000);
    setTimeout(function(){
        $('.last-message').addClass('block_position');
    }, 660000);






    function CDT(){

        // Set countdown limit

        var tl = new Date();

        tl.setMinutes(tl.getMinutes()+26);

        // You can add time's up message here

        var timer1 = new CountdownTimer('CDT1',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Акция закончилась!</span></span>');
        timer1.countDown();


        var timer2 = new CountdownTimer('CDT2',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Акция закончилась!</span></span>');
        timer2.countDown();

    }

    window.onload=function(){ CDT(); };
});




jQuery(function($){
    /*   scroll   */
    var scrollTo = function() {
        var anchor = $(this).attr("href");
        var hAnchor = $(anchor).offset().top;
        //скролим
        $('html,body').animate( { scrollTop: hAnchor }, 2000 );
        return false;
    };
    $(function(){
        $('.buybtn a').click(scrollTo);
    });
});