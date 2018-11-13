var BoatDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="speedBoat"><img src="http://www.animatedimages.org/data/media/1002/animated-boat-image-0113.gif" ></img></span>');
  this.setPosition(top, left);
  this.top = top;
  this.left = left;
  this.movingLeft = true;
  
};
BoatDancer.prototype = Object.create(MakeDancer.prototype);
BoatDancer.prototype.constructor = BoatDancer;

BoatDancer.prototype.oldStep = MakeDancer.prototype.step;
BoatDancer.prototype.step = function() {
  BoatDancer.prototype.oldStep.call(this);
  var angle = 0;
  
  if (this.left <= 20) {
    this.movingLeft = false;
    angle = 180;
    this.$node.css('transform','rotateY(' + angle + 'deg)');
  } else if (this.left >= $("body").width() - 200) {
    this.movingLeft = true;
    angle = 0;
    this.$node.css('transform','rotateY(' + angle + 'deg)');
  };
  
  if (this.movingLeft) {
    this.setPosition(this.top, this.left -= 40);
  } else {
    this.setPosition(this.top, this.left += 40);
  };
};