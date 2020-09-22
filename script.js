const intro = document.querySelector('.intro');
const ricoletti = intro.querySelector('h1');
//END OF THE SECTION
const aboutme = document.querySelector('.aboutme');
const startrek = aboutme.querySelector('h1');
//END OF THE SECTION
const work = document.querySelector('.work');

//-------------------------------------------------------------------SCROLL MAGIC-----------------------------------------------------------------
const controller = new ScrollMagic.Controller();

//Text Animation
const textAnim = TweenMax.fromTo(ricoletti, 3, {opacity: 3}, {opacity: 0});

let scene1 = new ScrollMagic.Scene({
    duration: 450,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.setPin(ricoletti)
.addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpols = 0;
let delay = 0;

scene1.on("update", e => {
    scrollpos = e.scrollPos / 1000;
})

//-----------------------------------------------------------------------DRAG---------------------------------------------------------------------
let isDown = false;
let startX;
let scrollLeft;

work.addEventListener('mousedown', (e) => {
  isDown = true;
  work.classList.add('active');
  startX = e.pageX - work.offsetLeft;
  scrollLeft = work.scrollLeft;
});
work.addEventListener('mouseleave', () => {
  isDown = false;
  work.classList.remove('active');
});
work.addEventListener('mouseup', () => {
  isDown = false;
  work.classList.remove('active');
});
work.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - work.offsetLeft;
  const walk = (x - startX) * 1.5; 
  work.scrollLeft = scrollLeft - walk;
});

//----------------------------------------------------------DESCRIPTION OF THE WORK--------------------------------------------------------------
const imagef = work.querySelector('.hforest');
const imagesi = work.querySelector('.hsushi');
const imagewf = work.querySelector('.hwaterfall');
const imagen1 = work.querySelector('.hnorgaard1');
const imagen2 = work.querySelector('.hnorgaard2');
const imagew = work.querySelector('.hw');

//END OF THE SECTION
const mywork = document.querySelector('.mywork');
const forest = mywork.querySelector('.forest');
const sushi = mywork.querySelector('.sushi');
const waterfall = mywork.querySelector('.waterfall');
const norgaard1 = mywork.querySelector('.norgaard1');
const norgaard2 = mywork.querySelector('.norgaard2');
const w = mywork.querySelector('.w');

//buttons
const goback1 = mywork.querySelector('.revenir1')
const goback2 = mywork.querySelector('.revenir2')
const goback3 = mywork.querySelector('.revenir3')
const goback4 = mywork.querySelector('.revenir4')
const goback5 = mywork.querySelector('.revenir5')
const goback6 = mywork.querySelector('.revenir6')

imagef.addEventListener('click', () => {
  $('#slide1').toggle('slide');
});

imagesi.addEventListener('click', () => {
  $('#slide2').toggle('slide');
});
imagewf.addEventListener('click', () => {
  $('#slide3').toggle('slide');
});
imagen1.addEventListener('click', () => {
  $('#slide4').toggle('slide');
});
imagen2.addEventListener('click', () => {
  $('#slide5').toggle('slide');
});
imagew.addEventListener('click', () => {
  $('#slide6').toggle('slide');
});

//go back mission
goback1.addEventListener('click', () => {
  $('#slide1').toggle('slide');
});
goback2.addEventListener('click', () => {
  $('#slide2').toggle('slide');
});
goback3.addEventListener('click', () => {
  $('#slide3').toggle('slide');
});
goback4.addEventListener('click', () => {
  $('#slide4').toggle('slide');
});
goback5.addEventListener('click', () => {
  $('#slide5').toggle('slide');
});
goback6.addEventListener('click', () => {
  $('#slide6').toggle('slide');
});