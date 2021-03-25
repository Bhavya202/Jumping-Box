function bounceOff(squid, box1, box2, box3, box4){
    //to bounce off in squid and box 1 
    if (squid.x - box1.x < box1.width/2 + squid.width/2
        && box1.x - squid.x  < box1.width/2 + squid.width/2) {
            squid.velocityY = squid.velocityY * (-1);
            box1.velocityX = box1.velocityX * (-1);
    }
  
    if (squid.y - box1.y < box1.height/2 + squid.height/2
    && box1.y - squid.y < box1.height/2 + squid.height/2){
        squid.velocityY = squid.velocityY * (-1);
        box1.velocityY = box1.velocityY * (-1);
    }

    //to bounce off in squid and box 2
    if (squid.x - box2.x < box2.width/2 + squid.width/2
        && box2.x - squid.x  < box2.width/2 + squid.width/2) {
          squid.velocityY = squid.velocityY * (-1);
          box2.velocityX = box2.velocityX * (-1);
    }
    
    if (squid.y - box2.y < box2.height/2 + squid.height/2
      && box2.y - squid.y < box2.height/2 + squid.height/2){
        squid.velocityY = squid.velocityY * (-1);
        box2.velocityY = box2.velocityY * (-1);
    }

    //to bounce off in squid and box 3
    if (squid.x - box3.x < box3.width/2 + squid.width/2
        && box3.x - squid.x  < box3.width/2 + squid.width/2) {
          squid.velocityY = squid.velocityY * (-1);
          box3.velocityX = box3.velocityX * (-1);
    }
    
    if (squid.y - box3.y < box3.height/2 + squid.height/2
      && box3.y - squid.y < box3.height/2 + squid.height/2){
        squid.velocityY = squid.velocityY * (-1);
        box3.velocityY = box3.velocityY * (-1);
    }

    //to bounce off in squid and box 4
    if (squid.x - box4.x < box4.width/2 + squid.width/2
        && box4.x - squid.x  < box4.width/2 + squid.width/2) {
          squid.velocityY = squid.velocityY * (-1);
          box4.velocityX = box4.velocityX * (-1);
    }
    
    if (squid.y - box4.y < box4.height/2 + squid.height/2
      && box4.y - squid.y < box4.height/2 + squid.height/2){
        squid.velocityY = squid.velocityY * (-1);
        box4.velocityY = box4.velocityY * (-1);
    }
  }

function isTouching(squid, box1, box2, box3, box4){
    if (squid.x - box1.x < box1.width/2 + squid.width/2
    && box1.x - squid.x < box1.width/2 + squid.width/2
    && squid.y - box1.y < box1.height/2 + squid.height/2
    && box1.y - squid.y < box1.height/2 + squid.height/2) {
        return true;
    }

    if (squid.x - box2.x < box2.width/2 + squid.width/2
    && box2.x - squid.x < box2.width/2 + squid.width/2
    && squid.y - box2.y < box2.height/2 + squid.height/2
    && box2.y - squid.y < box2.height/2 + squid.height/2) {
        return true;
    }

    if (squid.x - box3.x < box3.width/2 + squid.width/2
    && box3.x - squid.x < box3.width/2 + squid.width/2
    && squid.y - box3.y < box3.height/2 + squid.height/2
    && box3.y - squid.y < box3.height/2 + squid.height/2) {
        return true;
    }

    if (squid.x - box4.x < box4.width/2 + squid.width/2
    && box4.x - squid.x < box4.width/2 + squid.width/2
    && squid.y - box4.y < box4.height/2 + squid.height/2
    && box4.y - squid.y < box4.height/2 + squid.height/2) {
        return true;
    }

    else {
      return false;
    }
}