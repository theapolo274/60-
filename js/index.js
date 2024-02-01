// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150 ;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+id+']').classList.add('active');

      });
    };
  });
  // sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 100);
  
  
  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

  // scroll reveal

  document.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.home-content, .heading, .home-img, .services-container, .portfolio-box, .contact form, .home-content h1, .about-img, .home-content p, .about-content');
    elements.forEach(element => {
      var position = element.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        if (element.matches('.home-content, .heading')) {
          revealElement(element, 'top');
        } else if (element.matches('.home-img, .services-container, .portfolio-box, .contact form')) {
          revealElement(element, 'bottom');
        } else if (element.matches('.home-content h1, .about-img')) {
          revealElement(element, 'left');
        } else if (element.matches('.home-content p, .about-content')) {
          revealElement(element, 'right');
        }
      }
    });
  });
  
  function revealElement(element, origin) {
    element.style.transition = 'transform 2s, opacity 2s';
    element.style.transitionDelay = '200ms';
    element.style.opacity = 1;
    switch (origin) {
      case 'top':
        element.style.transform = 'translateY(0)';
        break;
      case 'bottom':
        element.style.transform = 'translateY(0)';
        break;
      case 'left':
        element.style.transform = 'translateX(0)';
        break;
      case 'right':
        element.style.transform = 'translateX(0)';
        break;
    }
  }

   // typed js

  function customTyped(selector, strings, typeSpeed, backSpeed, backDelay, loop) {
    var element = document.querySelector(selector);
    var i = 0, j = 0;
    var typing = true;
    var typedFunction = function() {
      if (typing) {
        if (i < strings[j].length) {
          element.textContent += strings[j].charAt(i);
          i++;
          setTimeout(typedFunction, typeSpeed);
        } else if (loop) {
          typing = false;
          setTimeout(typedFunction, backDelay);
        }
      } else {
        if (i > 0) {
          element.textContent = element.textContent.substring(0, i - 1);
          i--;
          setTimeout(typedFunction, backSpeed);
        } else {
          typing = true;
          j = (j + 1) % strings.length;
          setTimeout(typedFunction, typeSpeed);
        }
      }
    };
    typedFunction();
  }
  
  customTyped('.multiple-text', ['Sinh viên năm hai', 'Người Nam Định','người yêu tự do'], 100, 100, 1000, true);
  
