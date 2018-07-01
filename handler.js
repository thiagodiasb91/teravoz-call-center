'use strict';

let actor = require("./funtions/actor")
let call = require("./funtions/call")
let util = require("./helpers/util")

module.exports.webhook = (event, context, callback) => {
  var params = util.getRequestParameters(event);

  callFunction(params.body.type)(params)
    .then(response => {
      callback(null, util.successResponse("success"))
    })
    .catch(err => {
      let statusCode = 500;
      let statusText = "An error has ocurred";

      if (err.response &&
        err.response.statusCode) {
        statusCode = err.response.statusCode;
        statusText = err.response.statusText;
      } else if (err.message) {
        statusText = err.message;
      }
      callback(null, util.errorResponse(statusCode, statusText))
    })
};

module.exports.getActiveCalls = (event, context, callback) => {
  return call.activeCalls()
  .then((data) => {
    callback(null, util.successResponse(data))
  })
  .catch(err => {
    let statusCode = 500;
    let statusText = "An error has ocurred";

    if (err.response &&
      err.response.statusCode) {
      statusCode = err.response.statusCode;
      statusText = err.response.statusText;
    } else if (err.message) {
      statusText = err.message;
    }
    callback(null, util.errorResponse(statusCode, statusText))
  })
}

let callFunction = (type) => {
  switch (type) {
    case "call.new":
      return call.newCall;
      break;
    case "call.standby":
      return call.standby;
      break;
    case "call.waiting":
      return call.waiting;
      break;
    case "call.ongoing":
      return call.ongoing;
      break;
    case "call.finished":
      return call.finished;
      break;
    case "actor.entered":
      return call.entered;
      break;
    case "actor.left":
      return call.left;
      break;
    default:
      return call.undefined;
      break;
  }

  // call.new
  // call.standby
  // call.waiting
  // actor.entered
  // call.ongoing
  // actor.left
  // call.finished
}