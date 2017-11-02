import Actions from 'redux-actions-class';

const actions = new Actions({
    APP_FETCH_DATA() {
        return (dispatch) => {
            dispatch(this.appFetchDataRequest());
            setTimeout(() => {
                dispatch(this.appFetchDataSuccess({
                    greetingText: 'Hello, World!',
                }));
            }, 2000);
        };
    },
    APP_FETCH_DATA_REQUEST: 'payload',
    APP_FETCH_DATA_SUCCESS: 'payload',
    APP_FETCH_DATA_FAILURE: 'payload',
});

export const { creators, types } = actions;