// emailjs for contact form
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('"contact-email"'),
    message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (event) => {
    event.preventDefault();

    // add and remove color
    
        // seviceID, templateID, #form, publickey
        emailjs.sendForm('service_79584ur', 'template_rb1g7hc', '#contact-form', 'qXBvcT_llsI-ZxvN0')

            .then(() => {
                // show message and add color
                contactMessage.classList.add('color-light');
                contactMessage.textContent = 'Message send';

                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
            }, (error) => {
                alert('Opps! SOMETHING WENT WRONG...', error)
            });

        // clear input fields
        contactName.value = '';
        contactEmail.value = '';
        message.value = '';
    
};

contactForm.addEventListener('submit', sendEmail);


// NAVIGETION BAR
const menuBtn = document.querySelector(".menu-icon i");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");

menuBtn.onclick = ()=>{
    items.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

cancelBtn.onclick = ()=>{
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
}



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar")

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}