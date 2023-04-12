import { ADD_FAV, REMOVE_FAV } from "../actions";

const initialState = {
    content: [],
};

const addRemoveJob = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,

                content: [...state.content, action.payload],
            };

        case REMOVE_FAV:
            return {
                ...state,

                content: [
                    //...state.favs.content.slice(0, action.payload),
                    //...state.favs.content.slice(action.payload + 1),
                    ...state.content.filter((fav) => fav._id !== action.payload),
                ],
            };

        default:
            return state;
    }
};

export default addRemoveJob;
