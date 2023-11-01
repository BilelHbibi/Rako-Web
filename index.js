var menu=document.querySelector('.menu');
var header=document.querySelector('.header');

menu.onclick=function(){
    menu.classList.toggle('active')
    header.classList.toggle('active')
}