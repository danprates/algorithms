/**
 * Gas Station
 * Have an function GasStation(strArr) take a start which will be an array
 * consisting of the following elements: N which will be the number of gas
 * stations in a circular route and each subsequent element will be a string
 * where the first amount of gallons of gas at that gas station and the
 * following amount of gallons of gas needed to get the following gas station.
 *
 * For example strArr may be: "4","3:1","2:2","1:2","0:1".
 * Your goal is to travel the whole route starting otherwise return the string "Impossible".
 * For the example above, there are 4 gas stations, and your program should
 * return the string 1 because starting at station 1 you have 3 gallons of gas
 * and spend 1 getting to the next station. Then you receive 2 gallons more at
 * the next station and you spend 2 so you have 2 gallons when you get to the
 * 3rd station. You then have 3 but spend 2 getting to the final station, and
 * your final gallon you get to your starting point. Starting at any other
 * station would make getting around the gas stations impossible so the answer is 1.
 * If there are multiple routes possible, N will be >= 2.
 *
 * @difficulty Hard
 * @example
 * solution(['4','3:1','2:2','1:2','0:1']) -> 1
 */
import { deepEqual } from "node:assert";
import { describe, it } from "node:test";

/**
 * Time: O(n)
 * Space: O(1)
 * @param {String[]} strArr
 * @returns {String}
 */
function solution1(strArr) {
  const n = parseInt(strArr[0]);
  const stations = strArr.slice(1).map((entry) => entry.split(":").map(Number));

  let totalFuel = 0;
  let currentFuel = 0;
  let startIndex = 1;

  for (let i = 0; i < n; i++) {
    const [gas, cost] = stations[i];
    totalFuel += gas - cost;
    currentFuel += gas - cost;

    if (currentFuel < 0) {
      startIndex = (i + 1) % stations.length;
      currentFuel = 0;
    }
  }

  if (totalFuel < 0) {
    return "Impossible";
  }

  return startIndex.toString();
}

describe("Gas Station", () => {
  it("should return correct results", () => {
    const scenarios = [
      [["4", "3:1", "2:2", "1:2", "0:1"], "1"],
      [["4", "1:1", "2:2", "1:2", "0:1"], "Impossible"],
      [["4", "1:2", "4:1", "2:2", "1:1"], "1"],
      [["4", "1:3", "1:2", "5:1", "2:2"], "2"],
      [["4", "2:3", "1:2", "1:3", "5:1"], "3"],
    ];

    for (const [input, expected] of scenarios) {
      deepEqual(solution1(input), expected);
    }
  });
});
