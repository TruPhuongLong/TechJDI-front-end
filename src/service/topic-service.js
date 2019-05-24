import {get, post, put} from './data-service'

const urlGet = "http://localhost:2345/api/topics"
const urlPost = "http://localhost:2345/api/topic"
const urlPut = "http://localhost:2345/api/topic/"

export const getTopics = (query) => {
    return get(urlGet + (query || ''));
}

export const createTopic = (model) => {
    return post(urlPost, model);
}

export const vote = (model) => {
    return put(urlPut + model._id, {topic: model});
}
