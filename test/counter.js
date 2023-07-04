const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter Contract", () => {
  it("should increment the counter", async () => {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(0);
    await counter.increment();
    const updatedCounter = await counter.getCounter();
    console.log("updatedCounter!!!! ", updatedCounter);
    expect(updatedCounter).to.equal(1);
  });
});
