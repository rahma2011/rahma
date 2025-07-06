const burger = document.querySelector(".burger")
const header = document.querySelector(".header-nav")
const list = document.querySelector(".header-list")
   



burger.addEventListener("click",function(){
 burger.classList.toggle("active")
 header.classList.toggle("active")
 list.classList.toggle("active")
})