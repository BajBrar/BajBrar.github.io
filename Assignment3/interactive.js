function setup() {
    createCanvas(600, 600);
    noStroke();
    mainColors = generateColors();
  }
  
  function draw() {
    noStroke();
    background(25); 
  
    // Big main white circle
    fill(mainColors[0])
    ellipse(300, 300, 300);
    //blue circle on top
    fill(mainColors[1])
    ellipse(300, 300, 250);
    //black circle on top
    fill(mainColors[2])
    ellipse(250, 275, 150);
    //pink small circle
    fill(mainColors[3])
    ellipse(350, 175, 85);
  
    //everything else (I got tired of labeling them)
    fill(mainColors[0])
    ellipse(500, 500, 100);
    fill(165, 255, 254, 100)
    ellipse(475, 475, 30);
    fill(mainColors[1])
    ellipse(500, 450, 20);
    fill(243, 249, 130, 175)
    ellipse(500, 500, 20);
    fill(89, 177, 248, 150)
    ellipse(450, 500, 20);
    fill(mainColors[3])
    ellipse(400, 400, 100);
    fill(251, 179, 29, 90)
    ellipse(400, 350, 120);
    fill(mainColors[2])
    ellipse(325, 400, 75);
    fill(239, 165, 233, 200)
    ellipse(110, 150, 75);
    fill(mainColors[3])
    ellipse(85, 85, 25);
    fill(134, 254, 145, 100)
    ellipse(450, 190, 100);
    fill(116, 249, 231, 150)
    ellipse(450, 190, 40);
    fill(mainColors[0])
    ellipse(450, 190, 25);
    fill(234, 249, 87, 150)
    ellipse(460, 100, 50);
    fill(251, 164, 47, 150)
    ellipse(530, 120, 30);
    fill(mainColors[3])
    ellipse(550, 80, 20);
    fill(189, 251, 47, 100)
    ellipse(325, 325, 60);
    fill(47, 142, 251, 150)
    ellipse(300, 350, 30);
    fill(mainColors[2])
    ellipse(360, 450, 60);
    fill(0, 0, 0, 200)
    ellipse(425, 400, 10);
    fill(mainColors[1])
    ellipse(450, 400, 50);
    fill(16, 49, 255, 200)
    ellipse(550, 325, 30);
    fill(251, 195, 142, 150)
    ellipse(200, 425, 50);
    fill(254, 138, 93, 175)
    ellipse(235, 450, 50);
    fill(mainColors[0])
    ellipse(180, 480, 50);
    fill(255, 139, 247, 100)
    ellipse(220, 485, 65);
    fill(187, 250, 254, 100)
    ellipse(mainColors[3]);
    fill(24, 25, 25, 200)
    ellipse(125, 400, 75);
    fill(239, 213, 255, 200)
    ellipse(125, 400, 70);
    fill(mainColors[0])
    ellipse(130, 380, 20);
    fill(237, 255, 63, 175)
    ellipse(150, 475, 50);
    fill(59, 206, 247, 200)
    ellipse(150, 550, 25);
    fill(mainColors[2])
    ellipse(110, 540, 20);
    fill(255, 241, 255, 200)
    ellipse(100, 570, 15);
    fill(17, 16, 17, 200)
    ellipse(100, 570, 10);
    fill(mainColors[3])
    ellipse(325, 525, 25);
    fill(255, 0, 0, 175)
    ellipse(445, 575, 20);
    fill(mainColors[0])
    ellipse(450, 550, 15);
    fill(0, 141, 255, 200)
    ellipse(530, 575, 20);
    fill(mainColors[1])
    ellipse(550, 490, 15);
    
  }
  function mousePressed() {
    mainColors = generateColors();
  }
  
  function generateColors() {
    return [
      color(random(255), random(255), random(255), 200),
      color(random(255), random(255), random(255), 200),
      color(random(255), random(255), random(255), 200),
      color(random(255), random(255), random(255), 200),
    ];
  }
  