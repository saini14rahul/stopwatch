
let counter = 0;
let countersec = 0;
let countermin = 0;
let counterhour = 0;

document.querySelector(".start").addEventListener("click", function () {
    this.setAttribute("disabled", "");

    document.querySelector(".stop").removeAttribute("disabled");

    const id = setInterval(() => {

        let mili = document.querySelector("#mili");
        let sec = document.querySelector("#sec"); 
        let min = document.querySelector("#min");
        let hour = document.querySelector("#hr");

        mili.innerHTML = ++counter;

        if (counter == 100) {
            counter = 0;
            mili.innerHTML = counter;
            sec.innerHTML = ++countersec;
        }

        if (countersec == 60) {
            countersec = 0;
            sec.innerHTML = countersec;
            min.innerHTML = ++countermin;
        }

        if (countermin == 60) {
            countermin = 0;
            min.innerHTML = countermin;
            hour.innerHTML = ++counterhour;
        }        
    }, 10);

    document.querySelector(".stop").addEventListener("click", function () {
        document.querySelector(".start").removeAttribute("disabled");
        clearInterval(id);
    });
    document.querySelector(".reset").addEventListener("click",function(){
        location.reload();
    })
});
