const HOURS_TO_MASTER_JS = 800;
const HOURS_TO_BASIC_PROGRAMMING = 500;

/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = "family",
  knowsProgramming = true,
  config = { family: 4 }
) {
  if (knowsProgramming) {
    return Math.ceil(HOURS_TO_MASTER_JS / config[focus]);
  }

  return Math.ceil(
    (HOURS_TO_MASTER_JS + HOURS_TO_BASIC_PROGRAMMING) / config[focus]
  );
};
