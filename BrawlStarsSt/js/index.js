'use strict'

const navList = document.querySelector('.nav-list');
const button = document.querySelector('.nav-btn');
const nav = document.querySelector('.site-nav');


button.addEventListener('click', () => {
    if (navList.classList.contains('not-active')) {

        navList.classList.add('active');
        navList.classList.remove('not-active');

        button.classList.add('cross');
        button.classList.remove('burger');
    }
    else if (navList.classList.contains('active')) {
        navList.classList.add('not-active');
        navList.classList.remove('active');

        button.classList.remove('cross');
        button.classList.add('burger');

    }
})
window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled !== 0) {
        nav.style.transition = '1s';
        nav.style.opacity = '0.8';

    } else {
        nav.style.opacity = '1';
    };
};







if($(window).width() < 767) {
    $(document).ready(function(){
        $('.slider').slick({
            arrows:true,
            dots:false,
            slidesToShow:1,
            slidesToScroll:1,
            autoplay:false,
            speed:1000,
            autoplaySpeed:800,
            touchTresHold:8,
            rows:2,
        });
    });
    $(document).ready(function(){
        $('.slider-customer').slick({
            arrows:true,
            dots:false,
            slidesToShow:1,
            slidesToScroll:1,
            autoplay:false,
            speed:1000,
            autoplaySpeed:800,
            centerMode:false,
            rows:1,
        });
        });
  } 




  if($(window).width() < 1200 ){
    $(document).ready(function(){
        $('.slider').slick({
            arrows:true,
            dots:false,
            slidesToShow:2,
            slidesToScroll:1,
            autoplay:false,
            speed:1000,
            autoplaySpeed:800,
            touchTresHold:12,
            waitForAnimate:true,
            rows:1,
            
        });
    });
    $(document).ready(function(){
        $('.slider-customer').slick({
            arrows:true,
            dots:false,
            slidesToShow:1,
            slidesToScroll:1,
            autoplay:false,
            speed:1000,
            autoplaySpeed:800,
            centerMode:false,
            rows:1,
        });
        });
  }



  if($(window).width()>1200){
    $(document).ready(function(){
        $('.slider').slick({
            arrows:true,
            dots:true,
            slidesToShow:2,
            slidesToScroll:1,
            autoplay:true,
            speed:1800,
            autoplaySpeed:2000,
            centerMode:false,
            rows:1,
            

        });

    });
    $(document).ready(function(){
        $('.slider-customer').slick({
            arrows:true,
            dots:false,
            slidesToShow:1,
            slidesToScroll:1,
            autoplay:false,
            speed:1000,
            autoplaySpeed:800,
            centerMode:false,
            rows:1,
        });
        });
  }
 

