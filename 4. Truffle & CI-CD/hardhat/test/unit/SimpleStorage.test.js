
const {ethers} = require('hardhat')
const {expect, assert} = require('chai')
const { isMainThread } = require('worker_threads')

describe("test SimpleStorage", function() {
    let deployedContract
    beforeEach(async function() {
        [this.owner, this.addr1, this.addr2] = await ethers.getSigners()
        let contract = await ethers.getContractFactory("SimpleStorage")
        deployedContract = await contract.deploy() 
    })

    describe("Initialization", function() {
        it('should get the number and the number sould be equal 0', async function() {
            let number = await deployedContract.get()
            assert(number.toString() === "0")
        })
    })

    describe("Set", function() {
        it('should set the number and get an updated number', async function() {
            let transaction = await deployedContract.set(7)
            await transaction.wait(1)
            let number = await deployedContract.get()
            assert(number.toString() === "7")
        })
    })
})