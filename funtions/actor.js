let core = require("../services/core")

actor = {
    entered: (params) => {
        return new Promise((resolve) => {
            return resolve();
        })
    },
    left: (params) => {
        return new Promise((resolve) => {
            core.removeActiveCall(params.call_id)
            return resolve();
        })
    }
}


module.exports = actor;