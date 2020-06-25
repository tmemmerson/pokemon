let Robot = function () {
  this._status = "off"
}

Robot.prototype.status = function() {
  return this._status
}

Robot.prototype.power = function() {
  if (this._status === "off") {
    this._status = "on"
  } else {
    this._status = "off"
  }
  this._status="on"
};

module.exports = Robot