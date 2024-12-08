import chai from "chai"
import add from "Utilities library\src\add.js"

const expect = chai.expect


describe("Add utility function", () => {
 it("test addition 1", () =>{
     expect(add(1,2)).to.equal(3)
 });
})
