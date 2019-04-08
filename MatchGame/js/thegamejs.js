const timerVar = setInterval(countTimer, 1000);
let totalSeconds = -1;

function countTimer() {
   ++totalSeconds;
    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds - hour * 3600) / 60);
    const seconds = totalSeconds - (hour * 3600 + minute * 60);
    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}
    
function reloading() {
    const div = document.getElementById("divequation");
    div.innerHTML = '';
    divequation();
    draw_equation(equations[eq_num].first, equations[eq_num].op, equations[eq_num].sec, equations[eq_num].res);
    moves_mode(equations[eq_num].mode, equations[eq_num].sol.length);

}

countTimer();
