import { createReducer } from 'redux-create-reducer';
import { TempStateStruct } from '../domain/Temp/TempDataTypes';
import {
    TEMP_START,
    TEMP_SUCCESS,
    TEMP_FAIL
} from '../actions/tempActions';

const INITIAL_STATE = new TempStateStruct({
    isLoading: false,
    payload: null,
    errors: null
});

const mergeState = (state, updates) => TempStateStruct.update(state, { $merge: updates });

export default createReducer(INITIAL_STATE, {
    [TEMP_START]: () => mergeState(
        INITIAL_STATE,
        {
            isLoading: true
        }
    ),

    [TEMP_SUCCESS]: (state, { payload }) => mergeState(
        state,
        {
            isLoading: false,
            payload
        }
    ),

    [TEMP_FAIL]: (state, { payload: error }) => mergeState(
        state,
        {
            isLoading: false,
            errors: error
        }
    )
});
