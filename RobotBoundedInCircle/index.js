/**
 ** "G": go straight 1 unit;
 ** "L": turn 90 degrees to the left;
 ** "R": turn 90 degrees to the right.
 * 
 * @param {string} instructions
 * @return {boolean}
 */
 let isRobotBounded = (instructions) => {
  if (!checkParameters(instructions)) return false;

  //default cases
  if (!instructions.match("G")) return true;
  else if (!instructions.match("L") && !instructions.match("R")) return false;

  instructions = instructions.replace(/L+/gi, (match) => {
    if (match.length % 4 === 0) return "";
    else return match;
  });

  instructions = instructions.replace(/R+/ig, (match) => {
    if (match.length % 4 === 0) return "";
    else return match;
  });

  instructions = instructions.replace(/(R+)(L+)/ig, (match, r, l) => {
    if (r.length === l.length) return "";
    else {
      let biggerSequence = r.length > l.length ? r : l,
        lowerSequence = r.length > l.length ? l : r;
      biggerSequence = biggerSequence.slice(0, biggerSequence.length - lowerSequence.length);
      return biggerSequence;
    };
  });

  instructions = instructions.replace(/(L+)(R+)/ig, (match, r, l) => {
    if (r.length === l.length) return "";
    else {
      let biggerSequence = r.length > l.length ? r : l,
        lowerSequence = r.length > l.length ? l : r;
        biggerSequence = biggerSequence.slice(0, biggerSequence.length - lowerSequence.length);
      return biggerSequence;
    };
  });

  let currentPosition = [0, 0],
    directions = ["N", "E", "S", "W"],
    currentDirectionIndex = 0,
    currentDirection = getCurrentDirection(directions, currentDirectionIndex);

  let iterations = 0;
  while (iterations < 4) {
    executeInstructions();
    if (currentPosition[0] === 0 && currentPosition[1] === 0)
      return true;
    iterations++;
  }

  function executeInstructions() {
    for (let instruction of instructions) {
      if (instruction !== "G") {
        if (instruction === "L") currentDirectionIndex--;
        else currentDirectionIndex++;
        currentDirection = getCurrentDirection(directions, currentDirectionIndex);
      } else {
        switch (currentDirection) {
          case "N": currentPosition[1]++; break;
          case "E": currentPosition[0]++; break;
          case "S": currentPosition[1]--; break;
          case "W": currentPosition[0]--; break;
        }
      }
    }

    return currentPosition;
  }

  return false;
};

function checkParameters(instructions) {
  if ((typeof instructions) === "string") {
    for (let operator of ["G", "L", "R"])
      if (instructions.match(operator)) return true;
  } else return false;

  return false;
}

function getCurrentDirection(directions, currentDirectionIndex) {
  let resultIndex = currentDirectionIndex;
  if (Math.abs(resultIndex) >= directions.length)
    resultIndex = resultIndex - directions.length * ~~(resultIndex / directions.length);

  if (resultIndex < 0)
    resultIndex = directions.length + resultIndex;
  
  return directions[resultIndex];
}

module.exports = isRobotBounded;
