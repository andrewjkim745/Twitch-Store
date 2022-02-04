import axios from 'axios'



let api = axios.create({
    headers: {
        'grant_type': 'client_credentials'        
    }
})
// let api = axios.create({
//     headers: {
//         "Client-Id": API_KEY,
//         'Authorization': 'Bearer i7ziwa6hm3qlvbpcd0bmzuu9sxfggm',

//     }
// })


export default api 