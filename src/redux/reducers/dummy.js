import { UPDATE_DUMMY_TEXT } from '../types/dummy'

const initialState = {
    dummyText: 'dummy',
}

const dummyReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_DUMMY_TEXT:
            return { ...state, dummyText: action.payload }

        default:
            return state
    }
}

export default dummyReducer
