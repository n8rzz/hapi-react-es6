import TempRepository from '../domain/Temp/TempRepository';

export const TEMP_START = 'TEMP_START';
export const TEMP_SUCCESS = 'TEMP_SUCCESS';
export const TEMP_FAIL = 'TEMP_FAIL';

const tempActionStart = () => ({ type: TEMP_START });

const tempActionSuccess = response => ({
    type: TEMP_SUCCESS,
    payload: response
});

const tempActionFailed = error => ({
    type: TEMP_FAIL,
    paylaod: error
});

/**
 * @method tempAction
 * @return {Function|Promise}
 */
export const tempAction = () => {
    return dispatch => {
        dispatch(tempActionStart());

        return TempRepository.someAction()
            .then(response => {
                dispatch(tempActionSuccess(response));
            })
            .catch(error => {
                console.error(error);
                dispatch(tempActionFailed(error));
                throw error;
            });
    };
};