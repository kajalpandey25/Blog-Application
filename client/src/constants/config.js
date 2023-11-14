//  API_Notification_Messages

export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded, please wait'
    },
    success:{
        title: "Success",
        message: "Data successfully loaded"
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetch response from the server. Please try again'
    }, 
    requestFailure: {
        title: 'Error',
        message: 'An error occured while parsing request data'
    },
    networkError:{
       title: 'Error',
       message: 'Unable to connect with the server. Please check internet connectivity and try again later' 
    }
}

// API SERVICE CALL
// SAMPLE REQUEST
// NEED SERVICE CALL: { URL: '/', method: 'POST/GET/PUT/DELETE' params: true/false, query: true/false }

export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST'},
    userLogin: { url:'/login', method: 'POST' }
}