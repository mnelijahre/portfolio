//


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