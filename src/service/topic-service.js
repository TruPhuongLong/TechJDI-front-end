import {get, post} from './data-service'

const urlGet = "https://jsonplaceholder.typicode.com/posts"
const urlPost = ""

export const getTopics = (query) => {
    return get(urlGet + (query || ''));
}

export const createTopic = (model) => {
    return post(urlPost, model);
}