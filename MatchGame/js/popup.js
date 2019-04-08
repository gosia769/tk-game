// Get the modal
var modal = document.getElementById('pass-modal');

/*
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
*/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*
 *checkTime
 *time: Time play duration.
 */

function checkTime(time) {
    var check=false;
    var flagg=false;

    if(time<60) {
        check=true;
        var equationNumber = sessionStorage.getItem("eq_no");

        if(sessionStorage.equations) {
            equationsArr=sessionStorage.getItem("equations").split(",");
        } else {
            equationsArr=[];
        }

        for(var i=0;i<equationsArr.length;i++) {
            if(equationNumber==equationsArr[i]) {
                flagg=true;
            }
        }

        if(!flagg)
            equationsArr.push(equationNumber);
        sessionStorage.setItem("equations",equationsArr.toString());
        console.log(equationsArr.length);
    }
    return check;
}


/*
 *pass_or_fail_msg: function to retrive pass or fail popup
 *eq_ewsult: Boolean T if player solved eq
 *eq_time: Time play duration.
 */

function pass_or_fail_msg(eq_result,eq_time)
{
    var footer=document.getElementsByClassName('modal-footer')[0];
    var mbody=document.getElementsByClassName('modal-body')[0];
    var header=document.getElementsByClassName('modal-header')[0];
    var eq_no=sessionStorage.eq_no;

    if(eq_result == true) {
        console.log('equation result true');

        timeUnderMinute = checkTime(eq_time);
        if(timeUnderMinute==true) {
            // time is under minute
        }

        var inrow_padge=sessionStorage.win_3;
        // if(inrow_padge==3)
        // {
        // header.innerHTML+='<div>inrow padge</div>';
        // }
        if(eq_no==9)
        {
            //tasks is eq_array from
            flash_eq_arr = sessionStorage.equations.split(",");
            // if (flash_eq_arr.length==9)
            // header.innerHTML+='<img src="images/padges/flash.jpg" alt="ttt" class="modal-header">';
        }

        mbody.innerHTML='<h2> Congratulations :)</h2>';
        footer.innerHTML='<button id="cont" onclick="moveto_nxt();" class="retry-button">Next</button>';
        modal.style.display = "block";
    } else {
        mbody.innerHTML='<h2>Spróbuj jeszcze raz</h2>';
        footer.innerHTML='<button id="ret" onclick="reloading();" class="retry-button">Retry</button>';
        modal.style.display = "block";
    }

}
//pass_or_fail_msg(true,50);
function moveto_nxt(){
    var eq=sessionStorage.eq_no;
    eq++;
    sessionStorage.eq_no=eq;
    location.reload();
}
