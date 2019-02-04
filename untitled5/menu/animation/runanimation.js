(function(){
    var div = document.querySelector('div');

    var initTop = 0;
    var initLeft = 100;
var initRight=0;
    var step = 1;

    var intervalId = setInterval(function(){
        if (initTop < 90 && initLeft >= 0){
            initTop = initTop + step;
            initLeft = initLeft- step;

        }
        if (initTop >=90|| initLeft <=0) {
            initTop = initTop -step;

        }
        if (initTop <=0|| initLeft >=90 &&initRight<=10) {


            initLeft = initLeft- step;
        }


                 else  {

           // clearInterval(intervalId);
        }

        div.style.top = initTop + "%";
        div.style.left = initLeft + "%";
        div.style.right = initRight + "%";

    }, 100);
})()