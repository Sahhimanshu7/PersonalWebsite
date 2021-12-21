const header = document.querySelector('.header');
document.addEventListener('scroll',function(){
    if (scrollY >10){
        header.classList.add('header-animation');
    }else if (scrollY < 10){
        header.classList.remove('header-animation');
    }
})