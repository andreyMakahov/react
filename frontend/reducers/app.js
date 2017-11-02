import { types } from 'actions/app';

export default (state = {}, { type, payload }) => {
    switch (type) {
        case types.APP_FETCH_DATA_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case types.APP_FETCH_DATA_SUCCESS:
            return {
                ...state,
                greetingText: payload.greetingText,
                isFetching: false,
            };
        case types.APP_FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
};