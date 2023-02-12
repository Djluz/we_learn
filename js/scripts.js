var lastScrollTop;
navbar = document.getElementById('navbarbg');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-80px';
}
else{
navbar.style.top='0';

}
lastScrollTop = scrollTop;
});

var welcome = document.getElementById('section');

function fadeOutOnScroll(element) {
    if (!element) {
        return;
        }
        
            var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
            var elementHeight = element.offsetHeight;
            var scrollTop = document.documentElement.scrollTop;
            
            var opacity = 1;
            
            if (scrollTop > distanceToTop) {
                opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
            }
            
            if (opacity >= 0) {
                element.style.opacity = opacity;
        }
}



function scrollHandler() {
    fadeOutOnScroll(welcome);
}

window.addEventListener('scroll', scrollHandler);




window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++){

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
        
        }
}


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        
        
        520: {
            slidesPerView: 2,
        },
   
        950: {
            slidesPerView: 3,
        },
    },
  });
  