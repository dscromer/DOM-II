// Your code goes here.
const busImg = document.querySelector('.intro img');
busImg.addEventListener('mouseenter', (event) => {
    busImg.style.transform = "scale(1.2)";
    busImg.style.transition = "all 0.3s";
})
busImg.addEventListener('mouseleave', (event) => {
    busImg.style.transform = "scale(1.0)";
    busImg.style.transition = "all 0.3s";
 });

 const topImg = document.querySelectorAll('.img-content img');
 const textContent = document.querySelectorAll('.text-content');

 topImg[0].addEventListener('dblclick', (event) => {
    topImg[0].setAttribute('style', 'border: 3px solid black');
    event.stopPropagation();
 });

 topImg[1].addEventListener('click', () => {
    textContent[1].setAttribute('style', 'color: white; background-color: black;')
 });

 const textSection = document.querySelector('.content-section')
    textSection.addEventListener('dblclick', (event) => {
    textSection.setAttribute('style', 'border: 3px solid black');
 });

 const funBus = document.querySelector('.logo-heading');
 window.addEventListener('load', () => {
     funBus.setAttribute('style', 'color: black; background-color: yellow;')
     funBus.style.transform = 'scale(1.5)';
     funBus.style.transition = 'all 2s';
 })

 window.addEventListener('scroll', (e) => {
     funBus.setAttribute('style', 'background-color: white;')
     funBus.style.transform = 'scale(1.0)';
     funBus.style.transition = 'all 2s';
 })

 window.addEventListener('resize', (e) => {
     funBus.setAttribute('style', 'background-color: purple; color: white; transform: scale(2.0); transition: all 3s;')
 })

 const signMeUp = document.querySelectorAll('.btn');
 const destinations = document.querySelectorAll('.destination');
 signMeUp[0].addEventListener('click', (e) => {
    signMeUp[0].setAttribute('style', 'background-color: #FFEBCD;')
    destinations[0].setAttribute('style', 'transform: scale(1.5); transition: 1.5s; background-color: #FFEBCD;')
 });
 signMeUp[0].addEventListener('dblclick', (e) => {
    signMeUp[0].setAttribute('style', 'background-color: #17A2B8;')
    destinations[0].setAttribute('style', 'transform: scale(1); transition: 1.5s; background-color: white;')
 });
 signMeUp[1].addEventListener('click', (e) => {
    signMeUp[1].setAttribute('style', 'background-color: #FFEBCD;')
    destinations[1].setAttribute('style', 'transform: scale(1.5); transition: 1.5s; background-color: #FFEBCD;')
 });
 signMeUp[1].addEventListener('dblclick', (e) => {
    signMeUp[1].setAttribute('style', 'background-color: #17A2B8;')
    destinations[1].setAttribute('style', 'transform: scale(1); transition: 1.5s; background-color: white;')
 });
 signMeUp[2].addEventListener('click', (e) => {
    signMeUp[2].setAttribute('style', 'background-color: #FFEBCD;')
    destinations[2].setAttribute('style', 'transform: scale(1.5); transition: 1.5s; background-color: #FFEBCD;')
 });
 signMeUp[2].addEventListener('dblclick', (e) => {
    signMeUp[2].setAttribute('style', 'background-color: #17A2B8;')
    destinations[2].setAttribute('style', 'transform: scale(1); transition: 1.5s; background-color: white;')
 });

 const stopTheLink = document.querySelectorAll('.nav-link')

 stopTheLink[0].addEventListener('click', (e) => {
     if (true === false) {
         event.preventDefault();
     }
 });

 stopTheLink[1].addEventListener('click', (e) => {
    if (true === false) {
        event.preventDefault();
    }
});

stopTheLink[2].addEventListener('click', (e) => {
    if (true === false) {
        event.preventDefault();
    }
});

stopTheLink[3].addEventListener('click', (e) => {
    if (true === false) {
        event.preventDefault();
    }
});
