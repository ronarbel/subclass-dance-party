var BoatDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="speedBoat"><img src="http://www.animatedimages.org/data/media/1002/animated-boat-image-0113.gif" ></img></span>');
  this.setPosition(top, left);
};

BoatDancer.prototype = Object.create(MakeDancer.prototype);
BoatDancer.prototype.constructor = BoatDancer;
BoatDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
}