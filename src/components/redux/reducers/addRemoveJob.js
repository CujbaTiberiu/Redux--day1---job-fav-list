const initialState = {
    favs: {
        content: [],
    },
};

const addRemoveJobReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV":
            return {
                ...state,
                favs: {
                    content: [...state.favs.content, action.payload],
                },
            };

        case "REMOVE_FAV":
            return {
                ...state,
                favs: {
                    content: [
                        //...state.favs.content.slice(0, action.payload),
                        //...state.favs.content.slice(action.payload + 1),
                        ...state.favs.content.filter((fav) => fav._id !== action.payload),
                    ],
                },
            };

        default:
            return state;
    }
};

export default addRemoveJobReducer;
