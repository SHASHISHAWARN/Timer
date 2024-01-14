let [second, minute, hour] = [0, 0, 0]
let i=0;
function timer() {
    second++;
    if (second === 60) {
        second = 0;
        minute++

    }
    else if (minute === 60) {
        hour++;
        minute = 0;
    }

    else if (minute === 60) {
        hour++
    }

    console.log(second)
    console.log(minute)
    console.log(hour)
    s.innerText = second;
    m.innerText = minute;
    h.innerText = hour;

}
start.addEventListener('click', () => {
    i++
    if(i<2)
    {
        interval = setInterval(timer, 1000)
        playimage.src='pause.png'
    }
    else{
      alert('you have stop and reset button both')
    }
   
})
clear.addEventListener('click', () => {
    clearTime()
})


function clearTime() {
    [second, minute, hour] = [0, 0, 0]
    s.innerText = second;
    m.innerText = minute;
    h.innerText = hour;
}
function stopTimer() {
    clearInterval(interval)
    i=0;
}
fullStop.addEventListener('click', () => {
    stopTimer()
    playimage.src='play.png'

})













