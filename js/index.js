// Your code goes here

// MOUSEOVER 
const header = document.querySelector('.logo-heading');

    header.addEventListener('mouseover', event => {
    event.target.style.color = getColor()
})

function getColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// MOUSEENTER

const busPic = document.querySelector('header img');

busPic.addEventListener('mouseenter', event => {
    busPic.style.transform = 'scale(1.1)';
});

// MOUSELEAVE

busPic.addEventListener("mouseleave", () => {
    busPic.style.transform = "scale(1)";
})


// COPY

const copy = document.querySelector('p');

copy.addEventListener('copy', (e) => {
    window.alert("Copywritten Text - Do Not Copy!");
});

// KEYDOWN 

const backgroundChange = document.querySelector('body');

backgroundChange.addEventListener('keydown', (e) => {
    backgroundChange.style.color = 'hotpink';
});

// KEYUP
backgroundChange.addEventListener('keyup', (e) => {
    backgroundChange.style.color = 'blue';
});


// LOAD 

window.addEventListener('load', function(){
    alert('Page has loaded. Click ok.');
})

// RESIZE 
window.addEventListener('resize', event => {
    const changeTitle = document.querySelector('.logo-heading');
    changeTitle.textContent="Get on the Bus!!!"
});

// CLICK

const  firstTitle = document.querySelector('.text-content *');

firstTitle.addEventListener('click', event => {
    console.log(`clicked`);
    firstTitle.style.color ="red";
    firstTitle.style.transition = 'color 0.5s';
    event.preventDefault();
});

// FOCUS 

const navFocus = document.querySelector('.nav-link');

navFocus.addEventListener('focus', event => {
    console.log ('focused');
    navFocus.style.color = "purple";
});

//GSAP

// TweenMax.to(header, {duration: 2, x: 300, ease: "elastic"});
// TweenMax.to(header, 0.1, { x: "-=20", yoyo: true, repeat: 15 });

// TweenMax.set(header, {transformOrigin: "50%"});
TweenMax.to(header, {duration: 2, rotation: 360});
TweenMax.from(header, {duration: 1.5, opacity: 0, scale: 0.3, ease: "back"});
