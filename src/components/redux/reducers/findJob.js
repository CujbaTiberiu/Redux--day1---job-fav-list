const initialState = {
    jobs: {
        content: [],
    },
};


const findJobReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_JOB":
            return {
                ...state,
                jobs: {
                    content: [...state.jobs.content, action.payload],
                },
            };
        default: return state
    }
}

export default findJobReducer;