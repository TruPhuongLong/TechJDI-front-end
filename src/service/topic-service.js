import {get, post, put} from './data-service'

const urlGet = "https://jsonplaceholder.typicode.com/posts"
const urlPost = ""
const urlPut = ""

export const getTopics = (query) => {
    return get(urlGet + (query || ''));
}

export const createTopic = (model) => {
    return post(urlPost, model);
}

export const vote = (model) => {
    return put(urlPut, model);
}
