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
        case "REFRESH":
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    content: [],
                }
            }
        default: return state
    }
}

export default findJobReducer;