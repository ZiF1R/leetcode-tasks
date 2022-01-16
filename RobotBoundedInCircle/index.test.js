const isRobotBounded = require('./index');

describe('Parameters check:', () => {
  test("Should return true", () => {
    expect(isRobotBounded("R")).toBeTruthy();
    expect(isRobotBounded("L")).toBeTruthy();
  });
  test("Should return false", () => {
    expect(isRobotBounded(123)).toBeFalsy();
    expect(isRobotBounded("123")).toBeFalsy();
    expect(isRobotBounded("FSd")).toBeFalsy();
    expect(isRobotBounded({})).toBeFalsy();
    expect(isRobotBounded([123])).toBeFalsy();
    expect(isRobotBounded(true)).toBeFalsy();
    expect(isRobotBounded()).toBeFalsy();
    expect(isRobotBounded("g")).toBeFalsy();
    expect(isRobotBounded("l")).toBeFalsy();
    expect(isRobotBounded("grl")).toBeFalsy();
  });
});

describe('Basic tests:', () => {
  test("Should return true", () => {
    expect(isRobotBounded("LLRR")).toBeTruthy();
    expect(isRobotBounded("L")).toBeTruthy();
    expect(isRobotBounded("R")).toBeTruthy();
    expect(isRobotBounded("GL")).toBeTruthy();
    expect(isRobotBounded("GGLLGG")).toBeTruthy();
  });
  test("Should return false", () => {
    expect(isRobotBounded("GG")).toBeFalsy();
    expect(isRobotBounded("G")).toBeFalsy();
    expect(isRobotBounded("GLR")).toBeFalsy();
    expect(isRobotBounded("GLLLLRRLLGGRRRRG")).toBeFalsy();
  });
});