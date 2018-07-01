const expect            = require("chai").expect
const sinonTestFactory  = require('sinon-test')
const sinonTest         = sinonTestFactory(require("sinon"))
const mocha = require('mocha')
const call = require('../../funtions/call')
const teravozApi = require("../../services/teravoz-api")

mocha.describe('standby call tests', function(){
    mocha.beforeEach(() => {

    })

    mocha.it('Should exists standby function', sinonTest(() => {
        expect(call.standby).to.be.a('function')
    }))
    
    mocha.it('Should call delegate function - new User', sinonTest(function () {
        let sinon = this;
        this.mock(teravozApi).expects("delegate").returns(new Promise((resolve) => {
            return resolve({ data : "OK"})
        }))

        return call.standby({ body : { 
            call_id: "1463669263.30033",
            phone: "12347"
        }})
        .then((response) => {
            expect(response.destination).to.be.equal("900")
        })

    }))
    
    mocha.it('Should call delegate function - existent User', sinonTest(function () {
        let sinon = this;
        this.mock(teravozApi).expects("delegate").returns(new Promise((resolve) => {
            return resolve({ data : "OK"})
        }))

        return call.standby({ body : { 
            call_id: "1463669263.30033",
            phone: "66666666"
        }})
        .then((response) => {
            expect(response.destination).to.be.equal("901")
        })

    }))
})