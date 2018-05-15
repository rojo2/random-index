import { expect } from "chai";
import randomIndex from "../src/random-index"

describe("Random Index", () => {

  it("should return valid indices", () => {

    const listOfNumbers = [1,2,3,4];
    for (let i = 0; i < 100; i++) {
      expect(randomIndex(listOfNumbers))
        .to.be.oneOf([0,1,2,3]);
    }

  });

});
