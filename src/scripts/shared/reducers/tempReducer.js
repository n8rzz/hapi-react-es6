import { createReducer } from 'redux-create-reducer';
import {
    TEMP_START,
    TEMP_SUCCESS,
    TEMP_FAIL
} from '../actions/tempActions';

const INITIAL_STATE = {
    isLoading: false,
    payload: null,
    errors: null
};

export default createReducer(INITIAL_STATE, {
    [TEMP_START]: () => {
        return Object.assign({}, INITIAL_STATE, { isLoading: true});
    },

    [TEMP_SUCCESS]: (state, { payload }) => {
        return Object.assign(
            {},
            state,
            {
                isLoading: false,
                payload: payload
            }
        );
    },

    [TEMP_FAIL]: (state, { payload: error }) => {
        return Object.assign(
            {},
            state,
            {
                isLoading: false,
                errors: payload.error
            }
        );
    }
});
