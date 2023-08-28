let openBtn= document.querySelector(".openNav");
let overlay=document.getElementById("overlay")
let closeBtn=document.getElementById("closeNav")


openBtn.addEventListener("click",show)
closeBtn.addEventListener("click",hide)


function show(){
    overlay.classList.add('show')
}

function hide(){

    overlay.classList.remove("show")
}
    
   