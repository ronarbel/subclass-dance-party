var CoconutDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="coconut"><img src="https://mbtskoudsalg.com/images/fruits-transparent-kawaii-4.gif"></img></span>');
  this.setPosition(top, left);
};

CoconutDancer.prototype = Object.create(MakeDancer.prototype);
CoconutDancer.prototype.constructor = CoconutDancer;


