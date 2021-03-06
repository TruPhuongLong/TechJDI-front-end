import {
    getTopics,
    createTopic,
    vote,
} from '../../service/topic-service';

import {
    GET_TOPIC,
    CREATE_TOPIC,
    SORT
} from './type-action'
import {
    startLoadingAction,
    stopLoadingAction
} from './status-action'

const MESSAGE = {
    success: 'success',
    fail: 'fail'
}

//test ok
export const getTopicsAction = (query) => {
    return (dispatch) => {
        dispatch(startLoadingAction);
        return getTopics(query)
            .then(topics => {
                dispatch({
                    type: GET_TOPIC,
                    payload: topics
                })
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
            .finally(dispatch(stopLoadingAction))
    }
}

export const createTopicAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        dispatch(startLoadingAction);
        return createTopic(model)
            .then(_ => {
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
            .finally(dispatch(stopLoadingAction))
    }
}

export const voteAction = (model) => {
    return (dispatch, getState, extraArgument) => {
        dispatch(startLoadingAction);
        return vote(model)
            .then(_ => {
                return MESSAGE.success;
            })
            .catch(_ => {
                throw new Error(MESSAGE.fail)
            })
            .finally(dispatch(stopLoadingAction))
    }
}

export const sortAction = (sort) => {
    return {
        type: SORT,
        payload: sort
    }
}
