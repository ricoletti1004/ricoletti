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
    "planet/0003.png",
    "planet/0004.png",
    "planet/0005.png",
    "planet/0006.png",
    "planet/0007.png",
    "planet/0008.png",
    "planet/0009.png",    
    "planet/0010.png",
    "planet/0011.png",
    "planet/0012.png",
    "planet/0013.png",
    "planet/0014.png",
    "planet/0015.png",
    "planet/0016.png",
    "planet/0017.png",
    "planet/0018.png",
    "planet/0019.png",
    "planet/0020.png",
    "planet/0021.png",
    "planet/0022.png",
    "planet/0023.png",
    "planet/0024.png",
    "planet/0025.png",
    "planet/0026.png",
    "planet/0027.png",
    "planet/0028.png",
    "planet/0029.png",
    "planet/0030.png",
    "planet/0031.png",
    "planet/0032.png",
    "planet/0033.png",
    "planet/0034.png",
    "planet/0035.png",
    "planet/0036.png",
    "planet/0037.png",
    "planet/0038.png",
    "planet/0039.png",
    "planet/0040.png",
    "planet/0041.png",
    "planet/0042.png",
    "planet/0043.png",
    "planet/0044.png",
    "planet/0045.png",
    "planet/0046.png",
    "planet/0047.png",
    "planet/0048.png",
    "planet/0049.png",
    "planet/0050.png",
    "planet/0051.png",
    "planet/0052.png",
    "planet/0053.png",
    "planet/0054.png",
    "planet/0055.png",
    "planet/0056.png",
    "planet/0057.png",
    "planet/0058.png",
    "planet/0059.png",
    "planet/0060.png",
    "planet/0061.png",
    "planet/0062.png",
    "planet/0063.png",
    "planet/0064.png",
    "planet/0065.png",
    "planet/0066.png",
    "planet/0067.png",
    "planet/0068.png",
    "planet/0069.png",
    "planet/0070.png",
    "planet/0071.png",
    "planet/0072.png",
    "planet/0073.png",
    "planet/0074.png",
    "planet/0075.png",
    "planet/0076.png",
    "planet/0077.png",
    "planet/0078.png",
    "planet/0079.png",
    "planet/0080.png",
    "planet/0081.png",
    "planet/0082.png",
    "planet/0083.png",
    "planet/0084.png",
    "planet/0085.png",
    "planet/0086.png",
    "planet/0087.png",
    "planet/0088.png",
    "planet/0089.png",
    "planet/0090.png",
    "planet/0091.png",
    "planet/0092.png",
    "planet/0093.png",
    "planet/0094.png",
    "planet/0095.png",
    "planet/0096.png",
    "planet/0097.png",
    "planet/0098.png",
    "planet/0099.png",    
    "planet/0100.png",
    "planet/0101.png",
    "planet/0102.png",
    "planet/0103.png",
    "planet/0104.png",
    "planet/0105.png",
    "planet/0106.png",
    "planet/0107.png",
    "planet/0108.png",
    "planet/0109.png",
    "planet/0110.png",
    "planet/0111.png",
    "planet/0112.png",
    "planet/0113.png",
    "planet/0114.png",
    "planet/0115.png",
    "planet/0116.png",
    "planet/0117.png",
    "planet/0118.png",
    "planet/0119.png",
    "planet/0120.png",
    "planet/0121.png",
    "planet/0122.png",
    "planet/0123.png",
    "planet/0124.png",
    "planet/0125.png",
    "planet/0126.png",
    "planet/0127.png",
    "planet/0128.png",
    "planet/0129.png",
    "planet/0130.png",
    "planet/0131.png",
    "planet/0132.png",
    "planet/0133.png",
    "planet/0134.png",
    "planet/0135.png",
    "planet/0136.png",
    "planet/0137.png",
    "planet/0138.png",
    "planet/0139.png",
    "planet/0140.png",
    "planet/0141.png",
    "planet/0142.png",
    "planet/0143.png",
    "planet/0144.png",
    "planet/0145.png",
    "planet/0146.png",
    "planet/0147.png",
    "planet/0148.png",
    "planet/0149.png",
    "planet/0150.png",
    "planet/0151.png",
    "planet/0152.png",
    "planet/0153.png",
    "planet/0154.png",
    "planet/0155.png",
    "planet/0156.png",
    "planet/0157.png",
    "planet/0158.png",
    "planet/0159.png",
    "planet/0160.png",
    "planet/0161.png",
    "planet/0162.png",
    "planet/0163.png",
    "planet/0164.png",
    "planet/0165.png",
    "planet/0166.png",
    "planet/0167.png",
    "planet/0168.png",
    "planet/0169.png",
    "planet/0170.png",
    "planet/0171.png",
    "planet/0172.png",
    "planet/0173.png",
    "planet/0174.png",
    "planet/0175.png",
    "planet/0176.png",
    "planet/0177.png",
    "planet/0178.png",
    "planet/0179.png",
    "planet/0180.png",
    "planet/0181.png",
    "planet/0182.png",
    "planet/0183.png",
    "planet/0184.png",
    "planet/0185.png",
    "planet/0186.png",
    "planet/0187.png",
    "planet/0188.png",
    "planet/0189.png",
    "planet/0190.png",
    "planet/0191.png",
    "planet/0192.png",
    "planet/0193.png",
    "planet/0194.png",
    "planet/0195.png",
    "planet/0196.png",
    "planet/0197.png",
    "planet/0198.png",
    "planet/0199.png",
    "planet/0200.png",
    "planet/0201.png",
    "planet/0202.png",
    "planet/0203.png",
    "planet/0204.png",
    "planet/0205.png",
    "planet/0206.png",
    "planet/0207.png",
    "planet/0208.png",
    "planet/0209.png",
    "planet/0210.png",
    "planet/0211.png",
    "planet/0212.png",
    "planet/0213.png",
    "planet/0214.png",
    "planet/0215.png",
    "planet/0216.png",
    "planet/0217.png",
    "planet/0218.png",
    "planet/0219.png",
    "planet/0220.png",
    "planet/0221.png",
    "planet/0222.png",
    "planet/0223.png",
    "planet/0224.png",
    "planet/0225.png",
    "planet/0226.png",
    "planet/0227.png",
    "planet/0228.png",
    "planet/0229.png",
    "planet/0230.png",
    "planet/0231.png",
    "planet/0232.png",
    "planet/0233.png",
    "planet/0234.png",
    "planet/0235.png",
    "planet/0236.png",
    "planet/0237.png",
    "planet/0238.png",
    "planet/0239.png",
    "planet/0240.png",
    "planet/0241.png",
    "planet/0242.png",
    "planet/0243.png",
    "planet/0244.png",
    "planet/0245.png",
    "planet/0246.png",
    "planet/0247.png",
    "planet/0248.png",
    "planet/0249.png",
    "planet/0250.png",
    "planet/0251.png",
    "planet/0252.png",
    "planet/0253.png",
    "planet/0254.png",
    "planet/0255.png",
    "planet/0256.png",
    "planet/0257.png",
    "planet/0258.png",
    "planet/0259.png",
    "planet/0260.png",
    "planet/0261.png",
    "planet/0262.png",
    "planet/0263.png",
    "planet/0264.png",
    "planet/0265.png",
    "planet/0266.png",
    "planet/0267.png",
    "planet/0268.png",
    "planet/0269.png",
    "planet/0270.png",
    "planet/0271.png",
    "planet/0272.png",
    "planet/0273.png",
    "planet/0274.png",
    "planet/0275.png",
    "planet/0276.png",
    "planet/0277.png",
    "planet/0278.png",
    "planet/0279.png",
    "planet/0280.png",
    "planet/0281.png",
    "planet/0282.png",
    "planet/0283.png",
    "planet/0284.png",
    "planet/0285.png",
    "planet/0286.png",
    "planet/0287.png",
    "planet/0288.png",
    "planet/0289.png",
    "planet/0290.png",
    "planet/0291.png",
    "planet/0292.png",
    "planet/0293.png",
    "planet/0294.png",
    "planet/0295.png",
    "planet/0296.png",
    "planet/0297.png",
    "planet/0298.png",
    "planet/0299.png",
    "planet/0300.png",
    "planet/0301.png",
    "planet/0302.png",
    "planet/0303.png",
    "planet/0304.png",
    "planet/0305.png",
    "planet/0306.png",
    "planet/0307.png",
    "planet/0308.png",
    "planet/0309.png",
    "planet/0310.png",
    "planet/0311.png",
    "planet/0312.png",
    "planet/0313.png",
    "planet/0314.png",
    "planet/0315.png",
    "planet/0316.png",
    "planet/0317.png",
    "planet/0318.png",
    "planet/0319.png",
    "planet/0320.png",
    "planet/0321.png",
    "planet/0322.png",
    "planet/0323.png",
    "planet/0324.png",
    "planet/0325.png",
    "planet/0326.png",
    "planet/0327.png",
    "planet/0328.png",
    "planet/0329.png",
    "planet/0330.png",
    "planet/0331.png",
    "planet/0332.png",
    "planet/0333.png",
    "planet/0334.png",
    "planet/0335.png",
    "planet/0336.png",
    "planet/0337.png",
    "planet/0338.png",
    "planet/0339.png",
    "planet/0340.png",
    "planet/0341.png",
    "planet/0342.png",
    "planet/0343.png",
    "planet/0344.png",
    "planet/0345.png",
    "planet/0346.png",
    "planet/0347.png",
    "planet/0348.png",
    "planet/0349.png",
    "planet/0350.png",
    "planet/0351.png",
    "planet/0352.png",
    "planet/0353.png",
    "planet/0354.png",
    "planet/0355.png",
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
    moveLetters();
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
/*  console.log("planet.x:", window.innerWidth);
    console.log("planet.y:", window.innerHeight); */
    
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
    console.log("HI");

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