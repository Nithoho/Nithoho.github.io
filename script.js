var i = 10; // Replace 5 with the desired number of containers
var sizes = [];
var imageSrc = "Vector.png"; 

    for (var count = 0; count < i; count++) {
      var movingContainer = document.createElement("div");
      movingContainer.className = "moving-container";
    
      var image = document.createElement("img");
      image.src = imageSrc;
      image.alt = "Image Description";
      
      movingContainer.appendChild(image);
      image.style.setProperty('max-width', `${20+15*(count%5)}%`);
      document.body.appendChild(movingContainer);
    }


const images = document.querySelectorAll('.moving-container');
const initialLefts = [100,1000,20,500,1000,200,10,10,700,350];
const speeds = [0.4, 0.1, 0.45,0.7,0.5,0.25,0.1,0.45,0.3,0.8]; // Example speeds for three images

window.addEventListener('scroll', () => {
  moveClouds();
});

function randomizeYPositions() {
  const images = document.querySelectorAll('.moving-container');

  var i = 0;
  images.forEach((image) => {
    i++;
    const randomYPosition = Math.floor(i*0.2* window.innerHeight);
    image.style.top = `${randomYPosition}px`;
  });

}

function moveClouds(){
  images.forEach((image, index) => {
    const initialLeft = initialLefts[index];
    const speed = speeds[index];
    const movement = window.scrollY * speed;
    const newPosition = initialLeft + movement;
    image.style.left = `${newPosition}px`;
  });
}

randomizeYPositions();
moveClouds();