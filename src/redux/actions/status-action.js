import {
    START_LOADING,
    STOP_LOADING,
} from './type-action';

export const startLoadingAction = {
    type: START_LOADING,
    payload: {
        isLoading: true,
    }
}

export const stopLoadingAction = {
    type: STOP_LOADING,
    payload: {
        isLoading: false,
    }
}