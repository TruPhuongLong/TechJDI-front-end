import initState from '../store/state';
import {
    GET_TOPIC,
    CREATE_TOPIC,
    START_LOADING,
    STOP_LOADING
} from '../actions/type-action';

export default (state = initState.topicState, action) => {
    switch (action.type) {
        case GET_TOPIC:
            return {
                ...state,
                list: action.payload
            }
        case CREATE_TOPIC:
            return {
                ...state,
                current: action.payload
            }
        case START_LOADING:
        case STOP_LOADING:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}