const ham = document.getElementById("hamburger");
const links = document.getElementById("links01");

ham.addEventListener('click', () =>{
    links.classList.toggle('show');
})