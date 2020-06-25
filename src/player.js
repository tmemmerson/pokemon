let Robot = function () {

}

Robot.prototype.status = function() {
  return this._status
}

Robot.prototype.power = function() {
  this._status = "on"
};

module.exports = Robot