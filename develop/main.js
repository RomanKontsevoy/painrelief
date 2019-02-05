let videos = document.getElementsByClassName('reviews-wrap__video-item');


console.log(videos);

let addBg = function(arr, fileName) {
    for (let i = 0; i < arr.lenght; i++) {
        arr[i].style.backgroundImage = "url('../img/' " + fileName + i + "'.png')";
        arr[i].style.width = 500 + "px";
        console.log(arr[i].style.backgroundImage);
        console.log(url);
        console.log(arr);

    };
    console.log(arr);
    console.log(arr[1]);
};

window.addEventListener('load', addBg(videos, "video"));