let util = {
    getRequestParameters: (event) =>{
        let body = JSON.parse(event.body)
        return {body};
    },
    successResponse(content){
        return createResponse(200, content)
    },
    errorResponse(statusCode, statusText){
        return createResponse(statusCode,{error: statusText})
    }
}
let createResponse = (statusCode, content) => {
    return response = {
        statusCode: statusCode,
        body: content,
        headers: {
            'Content-Type': 'application/json',
        }
    };
}

module.exports = util
