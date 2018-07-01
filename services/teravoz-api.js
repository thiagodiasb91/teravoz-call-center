let axios = require('axios')
const teravozApi = axios.create({
    baseURL: 'https://teravoz.com.br/api/',
    headers: {
        'Authorization': 'Basic TESTE:SENHA'
    }
});

module.exports = {
    delegate : (callId, destination) => {
        return teravozApi.post('/actions', 
        {
            type: "delegate",
            call_id: callId,
            destination: destination
        })
        .then(function(response) {
            return response;
        });
    }
}