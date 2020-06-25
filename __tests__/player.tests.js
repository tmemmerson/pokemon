let Robot = require('../src/player.js')

describe("Player", function () {
  it("is off by default", function () {
    let robot = new Robot

    expect(robot.status()).toBe("off")
  })

  it("turns on when you call power()", function() {
    let robot = new Robot;
    robot.power()
    expect(robot.status()).toBe("on")
  })

  it("turns off when you call power() on a running robot", function() {
    let robot = new Robot
    robot.power()
    robot.power()
    expect(robot.status()).toBe("on")
  })
})