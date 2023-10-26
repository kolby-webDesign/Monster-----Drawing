let mytop = 75;
let change1 = -1


function setup() {
  createCanvas(950, 1200);
}

function draw() {
  background(135, 206, 235);
    
  mytop = mytop + change1
  
  if(mytop < 50){
    change1 = 1
  }
  
  if(mytop > 100){
    change1 = -1
  }
  
    stroke(0, 0, 0)
  strokeWeight(5.1)
  
    fill(107, 107, 105)
  rect(250,mytop,265,265,13);
  
    fill(245, 237, 20)
  rect(250,mytop+60,265,265,7.5);
  
  
    fill(107, 107, 105)
  rect(110,mytop+96.5,140,18,2);
  
    fill(227, 220, 7)
  rect(110,mytop+113,140,28,2);
  
    fill(107, 107, 105)
  rect(515,mytop+96.5,140,18,2);
  
    fill(227, 220, 7)
  rect(515,mytop+113,140,28,2);
  
  noStroke();
    fill(0,0,0)
  rect(92,mytop+94,20,49.5,2)
  
  noStroke();
    fill(0,0,0)
  rect(653,mytop+94,20,49.5,2)
  
    stroke(0, 0, 0)
  strokeWeight(4.7)
  
    fill(245, 237, 20)
  rect(264,mytop+324.7,230,60,7);
  
    fill(245, 237, 20)
  rect(282,mytop+384.7,190,80,7);
  
    stroke(0, 0, 0)
  strokeWeight(4.4)
  
    fill(107, 107, 105)
  rect(288,mytop+464.7,175,40,7);
  
    fill(48, 48, 48)
  rect(318,mytop+504.7,115,40,7);
  
    fill(48, 48, 48)
  rect(342,mytop+544.7,75,250,7);
  
  //translate(438, mytop+871);
//rotate(47.12)
//triangle(30, 75, 58, 20, 86, 75);
  triangle(342,mytop+794.7,417,mytop+794.7,379.5,mytop+ 849.7)
  
 fill(250, 252, 251)
  circle(315,mytop+140,70)
  
   fill(0, 0, 0)
circle(315,mytop+140,25)
  
  fill(250, 252, 251)
circle(450,mytop+140,60)
  
    fill(0, 0, 0)
circle(450,mytop+140,15)
  
  fill(250, 252, 251)
rect(315,mytop+230,35,65)
  
  fill(250, 252, 251)
rect(370,mytop+230,35,65)
  
  fill(250, 252, 251)
rect(415,mytop+230,35,65)
  
  fill(107, 107, 107)
rect(0,924.7,950,275.3,0.4);

  fill(255, 239, 69)
rect(100,925,75,275)
  
  fill(255, 239, 69)
rect(250,925,75,275)
  
  fill(245, 245, 245)
rect(425,1005,50,145)
  
  fill(245, 245, 245)
rect(540,1005,50,145)
  
  fill(245, 245, 245)
rect(655,1005,50,145)
  
  fill(245, 245, 245)
rect(770,1005,50,145)
  
  fill(245, 245, 245)
rect(885,1005,50,145)
  
}
