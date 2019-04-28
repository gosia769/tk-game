const timerVar = setInterval(countTimer, 1000);
let totalSeconds = -1;

function countTimer() {
   ++totalSeconds;
    const hour = Math.floor(totalSeconds / 3600);
    const minute = Math.floor((totalSeconds - hour * 3600) / 60);
    let seconds = totalSeconds - (hour * 3600 + minute * 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById("timer").innerHTML = '00:00' + ":" + seconds + ' s';
    if (totalSeconds > 60) {
        // next game
        console.log('end game');
    }
}
    
function reloading() {
    const div = document.getElementById("divequation");
    div.innerHTML = '';
    divequation();
    draw_equation(equations[eq_num].first, equations[eq_num].op, equations[eq_num].sec, equations[eq_num].res);
    moves_mode(equations[eq_num].mode, equations[eq_num].sol[0].length);
    modal.style.display = "none";
}

countTimer();
