export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const GET_JOB = 'GET_JOB'

export const addFav = (job) => {
    return {
        type: ADD_FAV,
        payload: job
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const getJobs = (jobs) => {
    return {
        type: GET_JOB,
        payload: jobs
    }
}


export const fetchJobs = (query) => {
    return async (dispatch, getState) => {
        let resp = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=20`)
        let jobs = await resp.json()
        console.log('action fetch', jobs)
        dispatch(getJobs(jobs))
    }
}

