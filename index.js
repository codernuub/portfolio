const header = document.getElementById("header")
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
const intro = document.getElementById("intro");
const service = document.getElementById("service");
const one = document.getElementById("one");
const two = document.getElementById("two");
const feed = document.getElementById("feedback");
const sendbtn = document.getElementById("send");

const feedbackState = {
    name:null,
    feedback:null
}

function slide(){
    menu.classList.toggle("active")
    nav.classList.toggle("open")
}


//Events listeners
window.addEventListener('load',function(e){
    console.log("working")
    header.classList.toggle("slideIn");
    one.classList.toggle("slideIn");
    two.classList.toggle("slideIn");
})

feedback.addEventListener('keydown',function(event){
   
feedbackState[event.target.name] = event.target.value;
buttonState("rebeccapurple","Submit")

})


function buttonState(color,text,disable){

    sendbtn.textContent = text;
    sendbtn.style.backgroundColor = color;
    
    if(disable){
        setInterval(() => {
            sendbtn.disabled = disable;
            sendbtn.style.opacity = 0.5;
        }, 500);
    }

}

function send(){

  if(feedbackState.name && feedbackState.feedback){
        buttonState("green","Done",true);
  }else{
      buttonState("red","Failed");
  }
}
    

