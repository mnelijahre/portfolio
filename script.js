//
const pictureOfMeWrapper = document.querySelector("#wrapper");
const me = document.querySelector("#pictureOfMeOne");

me.addEventListener("click", ()=>{
    me.classList.add("rollAround");
    me.classList.remove("pictureOfMe");
    setTimeout(function() {
        me.classList.remove("meOne");
        me.classList.add("meToo")
    }, 500);
})

me.addEventListener("touchend", ()=>{
    me.classList.add("rollAround");
    me.classList.remove("pictureOfMe");
    setTimeout(function() {
        me.classList.remove("meOne");
        me.classList.add("meToo")
    }, 500);
})

//Page list animation
const projectPage = document.querySelector("#projectPage");
const pageList = document.querySelector("#pageList");

const doge = document.querySelector("#doge");
const exit = document.querySelector("#x");


function toggleDisplay(){
    projectPage.classList.toggle("hidden");
    pageList.classList.toggle("hidden");
}

exit.addEventListener("click", ()=>{
    toggleDisplay();
})

doge.addEventListener("click", ()=>{
    toggleDisplay();
})