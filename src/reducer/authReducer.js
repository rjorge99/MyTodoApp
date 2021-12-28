import { type } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case type.logIn:
            return {
                ...state,
                name: action.payload.name,
                login: true
            };
            break;
        case type.logOut:
            return {
                login: false
            };
        default:
            return state;
    }
};
