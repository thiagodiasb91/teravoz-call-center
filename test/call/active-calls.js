const expect            = require("chai").expect
const sinonTestFactory  = require('sinon-test')
const sinonTest         = sinonTestFactory(require("sinon"))
const mocha = require('mocha')
const call = require('../../funtions/call')

mocha.describe('get active call tests', function(){
    mocha.beforeEach(() => {

    })

    mocha.it('Should exists activeCalls function', sinonTest(() => {
        expect(call.activeCalls).to.be.a('function')
    }))
        
    mocha.it('Should get Active Calls', sinonTest(function () {
        let sinon = this;
       
        return call.activeCalls()
        .then((response) => {
            expect(response).to.be.not.equal(null)
        })

    }))
})