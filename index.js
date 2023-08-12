const HourValue = document.querySelector('#hour');
const MinValue = document.querySelector('#min');
const SecValue = document.querySelector('#sec');
const Start = document.querySelector('#start');
const Timer = document.querySelector('#timer');

let interval=null;
let remainingseconds = null;


function countdown(){

    const H = Math.floor(remainingseconds / (60*60) );
    const M = Math.floor(remainingseconds/60%60);
    const S = Math.floor(remainingseconds % 60);

    let Hour =H.toString().padStart(2,"0");
    let Min =M.toString().padStart(2,"0");
    let Sec =S.toString().padStart(2,"0");



    HourValue.innerHTML = Hour;
    MinValue.innerHTML = Min;
    SecValue.innerHTML = Sec;
    console.log(Hour,Min,Sec);

}

function updatebutton(){
    if (remainingseconds===null) {
        Start.innerHTML = `<i id="start" class="material-icons text-4xl">play_arrow</i>`
    }else{
        Start.innerHTML = `<i id="start" class="material-icons text-4xl">pause</i>`
    }
}


function start(){
    if (remainingseconds ===0) return ;

    interval = setInterval(() => {
        if (remainingseconds>0) {
            
            remainingseconds--;
            countdown();
        }


        if (remainingseconds ===0){
            stop();
            alert("Counter OVER");
        }


    }, 1000);
    updatebutton();

}

function stop() {
    clearInterval(interval);
    // remainingseconds = null; 
    interval = null;
    updatebutton();
    Start.innerHTML = `<i id="start" class="material-icons text-4xl">play_arrow</i>`
    
    
}

Start.addEventListener("click",()=>{
    if (interval===null){
        start();
    }else{
        stop();
        Start.innerHTML = `<i id="start" class="material-icons text-4xl">play_arrow</i>`

    }
});

Timer.addEventListener("click",()=>{
    const inputsec= prompt("Enter number of Seconds:");
    remainingseconds=inputsec;
    Start.innerHTML = `<i id="start" class="material-icons text-4xl">play_arrow</i>`
    countdown();
})
