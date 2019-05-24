import axios from 'axios';


// in axios res.data = res.body
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const get = (url) => {
    console.log('go here and url is: ', url)

    return axios.get(url)
        .then(res => {
            return res.data
        })
}

export const post = (url, model) => {
    return axios.post(url, model)
        .then(res => res.data)
}

export const put = (url, model) => {
    console.log(model)
    return axios.put(url, model)
        .then(res => res.data)
}