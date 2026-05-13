/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const roles = [
  "Student",
  "Full-Stack Dev",
  "Problem Solver",
 

  
];

let roleIndex = 0;     // which phrase
let charIndex = 0;     // typing position
let deleting = false;  // deleting mode or not
const typingSpeed = 120;
const deletingSpeed = 60;
const delayBetweenRoles = 1500; // pause before new word

const changingText = document.getElementById("changing-text");

function typeEffect() {
    let current = roles[roleIndex];
    
    if (!deleting) {
        // typing
        changingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeEffect, delayBetweenRoles);
            return;
        }
    } else {
        // deleting
        changingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length; // cycle phrases
        }
    }
    setTimeout(typeEffect, deleting ? deletingSpeed : typingSpeed);
}

typeEffect();
