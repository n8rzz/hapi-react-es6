// For complex models with complex data types, structs refinements would be declared in this file
// Be sure to include tests for these!!
import t from 'tcomb';

const TEMP_STATE_STRUCT = {
    isLoading: t.Boolean,
    payload: t.maybe(t.String),
    errors: t.maybe(t.Error)
};

export const TempStateStruct = t.struct(TEMP_STATE_STRUCT, 'TempStateStruct');
