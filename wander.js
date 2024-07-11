var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // header scroll
  let header = document.querySelector('header');
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  window.addEventListener('scroll',() => {
   header.classList.toggle('shadow', window.scrollY > 0);
  });


  // navbar toggle
  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }
  window.onscroll = () => {
      menu.classList.remove('bx-x');
    navbar.classList.remove('active');
  }

  // scroll reveal animation
  const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay:400,
  })

  sr.reveal('.heading',{delay:'100'})
  sr.reveal('.packages-box',{interval:140})
  sr.reveal('.destinations-img .italy',{origin: 'left',delay:'650'})
  sr.reveal('.destinations-img .Phillippines',{origin: 'bottom',delay:'650'})
  sr.reveal('.destinations-img .Maldives',{origin: 'right',delay:'650'})
  sr.reveal('.about-text',{origin: 'left'})
  sr.reveal('.about-img',{origin: 'right'})
  sr.reveal('.footer-box',{interval:140})
 