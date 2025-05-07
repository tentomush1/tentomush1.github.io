const hover = document.getElementById('hover');
let hover_state = false;
let click_state = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let x = 10 * 1000;
async function slaid(numba) {
    while (numba < 6) {
        document.getElementById(`slide${numba}`).style.animation = "fadeIn 5s forwards";
        await sleep(x);
        if (hover_state == false && click_state == false) {
            document.getElementById(`slide${numba}`).style.animation = "fadeOut 2s forwards";
            await sleep(x / 5);
            if (numba == 5) numba = 1
            else numba++
        }
    }
}

slaid(1);

hover.addEventListener(
    "mouseenter", (event) => {
        event.target.style.backgroundColor = "#2A1B0F";
        hover_state = true;
        //console.log(hover_state);
    }
)

hover.addEventListener(
    "mouseleave", (event) => {
        if(click_state==false) event.target.style.backgroundColor = "";
        hover_state = false;
        //console.log(hover_state);
    }
)

hover.addEventListener(
    "click", (event) => {
        if(click_state==true) click_state=false;
        else {
            click_state=true;
            event.target.style.backgroundColor = "#2A1B0F";
        }
        // console.log(click_state);
    }
)