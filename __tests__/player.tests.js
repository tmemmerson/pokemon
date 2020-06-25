let Robot = require('../src/player.js')

describe("Player", function () {
  it("is off by default", function () {
    let robot = new Robot

    expect(robot.status()).toBe("off")
  })
})

it("turns on when you call power()", function() {
  let robot = new Robot;
  let status = robot.status()
  expect(status).toBe("off")
  })