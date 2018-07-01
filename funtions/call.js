let core = require("../services/core")
let teravozApi = require("../services/teravoz-api")

call = {
    newCall: (params) => {
        return new Promise((resolve) => {
            core.addActiveCall(params.body)
            return resolve();
        })
    },
    standby: (params) => {
        return new Promise((resolve, reject) => {
            let client = core.getClientByPhone(params.body.phone)
            let destination = client ? "901" : "900";

            teravozApi.delegate(params.body.call_id, destination)
                .then(response => {
                    return resolve({
                        data: response,
                        destination: destination
                    })
                })
                .catch(err => {
                    return reject(err)
                })
        })
    },
    waiting: (params) => {
        return new Promise((resolve) => {
            return resolve();
        })
    },
    ongoing: (params) => {
        return new Promise((resolve) => {
            return resolve();
        })
    },
    finished: (params) => {
        return new Promise((resolve) => {
            core.removeActiveCall(params.body.call_id)
            return resolve();
        })
    },
    activeCalls: () => {
        return new Promise((resolve, reject) => {
            return core.getActiveCalls()
                .then(response => {
                    return resolve(response);
                })
                .catch(err => {                    
                    return reject(err)
                })
        })
    }
}

module.exports = call