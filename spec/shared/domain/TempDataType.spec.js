import ava from 'ava';
// import t from 'tcomb';

import { TempStateStruct } from '../../../src/scripts/shared/domain/Temp/TempDataTypes';

const MOCK_STATE = {
    isLoading: false,
    payload: null,
    errors: null
};

// const MOCK_TEMP_RESPONSE = 'I am a string';

ava('TempData tcomb struct works with mock data', test => {
    test.notThrows(() => new TempStateStruct(MOCK_STATE));
});
