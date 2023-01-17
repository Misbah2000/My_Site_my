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