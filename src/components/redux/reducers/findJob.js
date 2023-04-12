import { GET_JOB, REFRESH } from "../actions";

const initialState = {
    content: [],
};


const findJob = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOB:
            return {
                ...state,

                content: [...state.content, action.payload],

            };
        case REFRESH:
            return {
                ...state,


                content: [],

            }
        default: return state
    }
}

export default findJob;