import t from 'tcomb';
import { createReducer } from 'redux-create-reducer';
import {
    TEMP_START,
    TEMP_SUCCESS,
    TEMP_FAIL
} from '../actions/tempActions';

const TEMP_STATE_STRUCT = {
    isLoading: t.Boolean,
    payload: t.maybe(t.String),
    errors: t.maybe(t.Error)
};

const TempStateStruct = t.struct(TEMP_STATE_STRUCT, 'TempStateStruct');

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
