/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink= document.querySelectorAll('.nav__link')

const Linkaction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', Linkaction))

/*=============== HOME TYPED JS ===============*/
 var typed = new Typed('#home-subtitle', {
      strings: ['Developer', 'Webdesigner', 'Fronted Manager', 'Freelancer'],
      typeSpeed: 50,
      loop:true,
      backSpeed:40,
      backDelay:2000,
      cursorChar:'_'
    });

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader= ()=>{
    const header = document.getElementById('header')
    this.scrollY>50 ? header.classList.add('shadow-header'):
    header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-fomr'),
    contactMessage=document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()
    
    emailjs.sendForm('service_zk70w34', 'template_cr1x1rp', '#contact-form', 'p1-0ycto-sVnC6eEd').then(
    (response) => {
     contactMessage.textContent="Message sent successfully ✅";
      },
    (error) => {
    contactMessage.textContent="Message not sent (service error) ❌";
    },
);

}

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
