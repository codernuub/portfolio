/*adjust pddig */
window.onload = function(){
  const header = document.querySelector('header');
  document.querySelector('section').style.paddingTop = header.clientHeight;
}


/*open nv*/
function openNav() {
    document.querySelector('.menu').classList.toggle('a-menu');
    document.querySelector('nav').classList.toggle('active-nav'); 
}

/*open know more */
const works = document.querySelectorAll('#work');

works.forEach(work => {
    work.addEventListener('click' , ()=>{
      work.parentElement.children[2].classList.toggle('more');
    })
})


