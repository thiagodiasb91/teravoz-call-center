const fs = require('fs');
let clientList = require("../test/mock/clientList")

let activeCallsPath = './test/mock/activeCalls.json'

let core = {
    getClientByPhone: (phone) => {
        //Simulate search in a real database
        return clientList.find(c => c.phone == phone)
    },
    addActiveCall: (callData) => {
        //Simulate add in a real database
        return fs.readFile(activeCallsPath, (err, buffer) => {
            if (err) throw err;

            let data = buffer.length > 0 ? JSON.parse(buffer) : {
                activeCalls: []
            };

            if(data.activeCalls.find(c => c.call_id == callData.call_id) == null){
                data.activeCalls.push(callData);
                fs.writeFileSync(activeCallsPath, JSON.stringify(data));
            }

            return "OK";
        });
    },
    removeActiveCall: (callId) => {
        //Simulate remove in a real database
        return fs.readFile(activeCallsPath, (err, buffer) => {
            if (err) throw err;

            if (buffer.length > 0) {
                let data = JSON.parse(buffer);

                data.activeCalls = data.activeCalls.filter(c => c.call_id !== callId)
                fs.writeFileSync(activeCallsPath, JSON.stringify(data));
            }

            return "OK";
        });
    },
    getActiveCalls: () => {
        return new Promise((resolve, reject) => {
            return fs.readFile(activeCallsPath, (err, buffer) => {
                if (err) reject(err);

                let data = buffer.length > 0 ? JSON.parse(buffer) : {
                    activeCalls: []
                };

                return resolve(data.activeCalls);
            });
        })
    }
}

module.exports = core;