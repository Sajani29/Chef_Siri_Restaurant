
let search = document.querySelector('.search-box');

document.querySelector('#SEARCH-ICON').onclick =()=>{
    search.classList.toggle('active');
    navebar.classList.remove('active');
}
let navebar = document.querySelector('.navebar');

document.querySelector('#menu-icon').onclick = ()=>{
    navebar.classList.toggle('active');
    search.classList.remove('active');
}
window.onscroll =()=>{
    navebar.classList.remove('active');
    search.classList.remove('active');
}



