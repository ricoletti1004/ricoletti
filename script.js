//Preloader
window.onload = function(){ document.querySelector(".preloader").style.display = "none"; }

//------------------------------------------------------------------!!! PLANET !!!-------------------------------------------------------------
//Variables
let textures, planet, circle;

// Application
const app = new PIXI.Application({width:window.innerWidth, height:window.innerHeight, alpha: true, antialias:true, backgroundColor: 0x85EAD8});
console.log('width:', window.innerWidth);
console.log('height:', window.innerHeight);

// Add the PIXI canvas to body
container = document.querySelector('.scene');
container.appendChild(app.view); 

//Uploading images
 const images = [
    "planet/0002.png",
    "planet/0004.png",
    "planet/0006.png",
    "planet/0008.png",  
    "planet/0010.png",
    "planet/0012.png",
    "planet/0014.png",
    "planet/0016.png",
    "planet/0018.png",
    "planet/0020.png",
    "planet/0022.png",
    "planet/0024.png",
    "planet/0026.png",
    "planet/0028.png",
    "planet/0030.png",
    "planet/0032.png",
    "planet/0034.png",
    "planet/0036.png",
    "planet/0038.png",
    "planet/0040.png",
    "planet/0042.png",
    "planet/0044.png",
    "planet/0046.png",
    "planet/0048.png",
    "planet/0050.png",
    "planet/0052.png",
    "planet/0054.png",
    "planet/0056.png",
    "planet/0058.png",
    "planet/0060.png",
    "planet/0062.png",
    "planet/0064.png",
    "planet/0066.png",
    "planet/0068.png",
    "planet/0070.png",
    "planet/0072.png",
    "planet/0074.png",
    "planet/0076.png",
    "planet/0078.png",
    "planet/0080.png",
    "planet/0082.png",
    "planet/0084.png",
    "planet/0086.png",
    "planet/0088.png",
    "planet/0090.png",
    "planet/0092.png",
    "planet/0094.png",
    "planet/0096.png",
    "planet/0098.png", 
    "planet/0100.png",
    "planet/0102.png",
    "planet/0104.png",
    "planet/0106.png",
    "planet/0108.png",
    "planet/0110.png",
    "planet/0112.png",
    "planet/0114.png",
    "planet/0116.png",
    "planet/0118.png",
    "planet/0120.png",
    "planet/0122.png",
    "planet/0124.png",
    "planet/0126.png",
    "planet/0128.png",
    "planet/0130.png",
    "planet/0132.png",
    "planet/0134.png",
    "planet/0136.png",
    "planet/0138.png",
    "planet/0140.png",
    "planet/0142.png",
    "planet/0144.png",
    "planet/0146.png",
    "planet/0148.png",
    "planet/0150.png",
    "planet/0152.png",
    "planet/0154.png",
    "planet/0156.png",
    "planet/0158.png",
    "planet/0160.png",
    "planet/0162.png",
    "planet/0164.png",
    "planet/0166.png",
    "planet/0168.png",
    "planet/0170.png",
    "planet/0172.png",
    "planet/0174.png",
    "planet/0176.png",
    "planet/0178.png",
    "planet/0180.png",
    "planet/0182.png",
    "planet/0184.png",
    "planet/0186.png",
    "planet/0188.png",
    "planet/0190.png",
    "planet/0192.png",
    "planet/0194.png",
    "planet/0196.png",
    "planet/0198.png",
    "planet/0200.png",
    "planet/0202.png",
    "planet/0204.png",
    "planet/0206.png",
    "planet/0208.png",
    "planet/0210.png",
    "planet/0212.png",
    "planet/0214.png",
    "planet/0216.png",
    "planet/0218.png",
    "planet/0220.png",
    "planet/0222.png",
    "planet/0224.png",
    "planet/0226.png",
    "planet/0228.png",
    "planet/0230.png",
    "planet/0232.png",
    "planet/0234.png",
    "planet/0236.png",
    "planet/0238.png",
    "planet/0240.png",
    "planet/0242.png",
    "planet/0244.png",
    "planet/0246.png",
    "planet/0248.png",
    "planet/0250.png",
    "planet/0252.png",
    "planet/0254.png",
    "planet/0256.png",
    "planet/0258.png",
    "planet/0260.png",
    "planet/0262.png",
    "planet/0264.png",
    "planet/0266.png",
    "planet/0268.png",
    "planet/0270.png",
    "planet/0272.png",
    "planet/0274.png",
    "planet/0276.png",
    "planet/0278.png",
    "planet/0280.png",
    "planet/0282.png",
    "planet/0284.png",
    "planet/0286.png",
    "planet/0288.png",
    "planet/0290.png",
    "planet/0292.png",
    "planet/0294.png",
    "planet/0296.png",
    "planet/0298.png",
    "planet/0300.png",
    "planet/0302.png",
    "planet/0304.png",
    "planet/0306.png",
    "planet/0308.png",
    "planet/0310.png",
    "planet/0312.png",
    "planet/0314.png",
    "planet/0316.png",
    "planet/0318.png",
    "planet/0320.png",
    "planet/0322.png",
    "planet/0324.png",
    "planet/0326.png",
    "planet/0328.png",
    "planet/0330.png",
    "planet/0332.png",
    "planet/0334.png",
    "planet/0336.png",
    "planet/0338.png",
    "planet/0340.png",
    "planet/0342.png",
    "planet/0344.png",
    "planet/0346.png",
    "planet/0348.png",
    "planet/0350.png",
    "planet/0352.png",
    "planet/0354.png",
    "planet/0356.png",
    "planet/0357.png"
 ];

app.loader
 .add(images)
 .load((loader, ressources) => {
    init();
});

function init(){
    drawCircle();
    animate();
}

function drawCircle(){
    circle = new PIXI.Graphics();
    circle.beginFill(0x1ED0B1); // Setting the fill color

    //Draw a circle 
    let circleX = window.innerWidth * 0.5;
    let circleY = window.innerHeight * 0.5;
    let circleR = window.innerHeight / 3; //make it more bigger than the planet
    circle.drawCircle(circleX, circleY, circleR); // drawCircle(x, y, radius)

    circle.endFill();

    // Adding the planet to the stage
    app.stage.addChild(circle);
}

function animate(){
    planet = new PIXI.AnimatedSprite.fromFrames(images);
    
    // Position
    planet.x = window.innerWidth * 0.51;
    planet.y = window.innerHeight * 0.5;
    
    //Size
    planet.width = window.innerWidth / 2.79272727; //550
    planet.height = window.innerHeight / 1.60425532; //470

    // Anchor
    planet.anchor.set(0.5, 0.5);

    // Speed
    planet.animationSpeed = 0.4;
    // Setup
    planet.play();
    // Adding the planet to the stage
    app.stage.addChild(planet);
}

//--------------------------------------------------------!!! CARD ANIMATION !!!------------------------------------------------------------
const card = $('.card');
const containerWithCard = $('.container');
const title = $('.info h2');
const desc = $('.info p');
const obj = $('.image img:nth-of-type(1)');

//1st object (3D)
containerWithCard[0].addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth / 10 - e.pageX) / 24;
    let yAxis = (window.innerHeight / 0.6 - e.pageY) / 20;

    card[0].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
containerWithCard[0].addEventListener("mouseenter", (e)=>{
    card[0].style.transition = "all 0.05s ease";
    //Popout
    title[0].style.transform = "translateZ(70px)";
    desc[0].style.transform = "translateZ(70px)";
    obj[0].style.transform = "translateZ(70px)";
});
containerWithCard[0].addEventListener("mouseleave", (e)=>{
    card[0].style.transition = "all 0.5s ease";
    card[0].style.transform = `rotateY(0deg) rotateX(0deg)`;
    title[0].style.transform = "translateZ(0px)";
    desc[0].style.transform = "translateZ(0px)";
    obj[0].style.transform = "translateZ(0px)";
});

//2nd object (3D)
containerWithCard[1].addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth / 2.2 - e.pageX) / 24;
    let yAxis = (window.innerHeight / 0.6 - e.pageY) / 18;

    card[1].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
containerWithCard[1].addEventListener("mouseenter", (e)=>{
    card[1].style.transition = "all 0.05s ease";
    //Popout
    title[1].style.transform = "translateZ(70px)";
    desc[1].style.transform = "translateZ(70px)";
    obj[1].style.transform = "translateZ(70px)";
});
containerWithCard[1].addEventListener("mouseleave", (e)=>{
    card[1].style.transition = "all 0.5s ease";
    card[1].style.transform = `rotateY(0deg) rotateX(0deg)`;
    title[1].style.transform = "translateZ(0px)";
    desc[1].style.transform = "translateZ(0px)";
    obj[1].style.transform = "translateZ(0px)";
});

//3rd object (3D)
containerWithCard[2].addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth / 1.3 - e.pageX) / 22;
    let yAxis = (window.innerHeight / 0.6 - e.pageY) / 20;

    card[2].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
containerWithCard[2].addEventListener("mouseenter", (e)=>{
    card[2].style.transition = "all 0.05s ease";
    //Popout
    title[2].style.transform = "translateZ(70px)";
    desc[2].style.transform = "translateZ(70px)";
    obj[2].style.transform = "translateZ(70px)";
});
containerWithCard[2].addEventListener("mouseleave", (e)=>{
    card[2].style.transition = "all 0.5s ease";
    card[2].style.transform = `rotateY(0deg) rotateX(0deg)`;
    title[2].style.transform = "translateZ(0px)";
    desc[2].style.transform = "translateZ(0px)";
    obj[2].style.transform = "translateZ(0px)";
});

//7th object (Logo)
containerWithCard[6].addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth / 8 - e.pageX) / 20;
    let yAxis = (window.innerHeight * 3 - e.pageY) / 17;

    card[6].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
containerWithCard[6].addEventListener("mouseenter", (e)=>{
    card[6].style.transition = "all 0.05s ease";
    //Popout
    title[6].style.transform = "translateZ(70px)";
    desc[6].style.transform = "translateZ(70px)";
    obj[3].style.transform = "translateZ(70px)";
});
containerWithCard[6].addEventListener("mouseleave", (e)=>{
    card[6].style.transition = "all 0.5s ease";
    card[6].style.transform = `rotateY(0deg) rotateX(0deg)`;
    title[6].style.transform = "translateZ(0px)";
    desc[6].style.transform = "translateZ(0px)";
    obj[3].style.transform = "translateZ(0px)";
});

//8th object (Logo)
containerWithCard[7].addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 24;
    let yAxis = (window.innerHeight * 3 - e.pageY) / 17;

    card[7].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
containerWithCard[7].addEventListener("mouseenter", (e)=>{
    card[7].style.transition = "all 0.05s ease";
    //Popout
    title[7].style.transform = "translateZ(70px)";
    desc[7].style.transform = "translateZ(70px)";
    obj[4].style.transform = "translateZ(70px)";
});
containerWithCard[7].addEventListener("mouseleave", (e)=>{
    card[7].style.transition = "all 0.5s ease";
    card[7].style.transform = `rotateY(0deg) rotateX(0deg)`;
    title[7].style.transform = "translateZ(0px)";
    desc[7].style.transform = "translateZ(0px)";
    obj[4].style.transform = "translateZ(0px)";
});

//9th object (Logo)
containerWithCard[8].addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth / 1.3 - e.pageX) / 24;
    let yAxis = (window.innerHeight * 3.3 - e.pageY) / 17;

    card[8].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
containerWithCard[8].addEventListener("mouseenter", (e)=>{
    card[8].style.transition = "all 0.05s ease";
    //Popout
    title[8].style.transform = "translateZ(70px)";
    desc[8].style.transform = "translateZ(70px)";
    obj[5].style.transform = "translateZ(70px)";
});
containerWithCard[8].addEventListener("mouseleave", (e)=>{
    card[8].style.transition = "all 0.5s ease";
    card[8].style.transform = `rotateY(0deg) rotateX(0deg)`;
    title[8].style.transform = "translateZ(0px)";
    desc[8].style.transform = "translateZ(0px)";
    obj[5].style.transform = "translateZ(0px)";
});