/**
 * Created by petervandenkerckhove on 28/10/14.
 */

(function(){
    function init(){
        $("#dotWie").mouseover(function(){
            var wie = document.getElementById("wie");
            wie.css("color","red");
        });
    }

    init();
}())