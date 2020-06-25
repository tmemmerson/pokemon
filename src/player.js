describe("Robot", function (){
  it("is off by default", function () {
    const robot = new Robot

    expect(robot.status()).toBe.equal("off")
  })
}