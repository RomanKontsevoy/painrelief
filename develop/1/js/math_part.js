function PriceCount(){
    var $price = parseInt($('#price-current').text());

    $price_twice = $price * 2;
    $('.price_x2').text($price_twice);
    console.log('price is =  ' + $price_twice);


    $price_third = $price * 3;
    $('.price_x3').text($price_third);
    console.log('price is =  ' + $price_third);


    $price_fourth = $price * 4;
    $('.price_x4').text($price_fourth);
    console.log('price is =  ' + $price_fourth);


    $price_fifth = $price * 5;
    $('.price_x5').text($price_fifth);
    console.log('price is =  ' + $price_fifth);


    $price_sixth = $price * 6;
    $('.price_x6').text($price_sixth);
    console.log('price is =  ' + $price_sixth);


    $price_seventh = $price * 7;
    $('.price_x7').text($price_seventh);
    console.log('price is =  ' + $price_seventh);


    $price_eighth = $price * 8;
    $('.price_x8').text($price_eighth);
    console.log('price is =  ' + $price_eighth);


    $price_ninth = $price * 9;
    $('.price_x9').text($price_ninth);
    console.log('price is =  ' + $price_ninth);


    $price_tenth = $price * 10;
    $('.price_x10').text($price_tenth);
    console.log('price is =  ' + $price_tenth);
}
PriceCount();
