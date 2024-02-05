const homebtn = document.getElementById('home-btn');
const contactbtn = document.getElementById('contact-btn');

homebtn.addEventListener('mouseover', function() {
    this.style.color = '#851B00';
});
homebtn.addEventListener('mouseout', function() {
    this.style.color = 'black';
});

contactbtn.addEventListener('mouseover', function() {
    contactbtn.style.color = '#851B00';
});
contactbtn.addEventListener('mouseout', function() {
    contactbtn.style.color = 'black';
});

