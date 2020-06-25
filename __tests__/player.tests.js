let Robot = require('../src/player.js')

describe("Robot", function () {
  it("is off by default", function () {
    let robot = new Robot

    expect(robot.status()).toBe("off")
  })
})