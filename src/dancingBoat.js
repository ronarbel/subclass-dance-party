var BoatDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer speedBoat"><img src="http://www.animatedimages.org/data/media/1002/animated-boat-image-0113.gif" ></img></span>');
};

BoatDancer.prototype = Object.create(MakeDancer.prototype);
BoatDancer.prototype.constructor = BoatDancer;