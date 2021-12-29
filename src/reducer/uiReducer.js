import { type } from "../types/types";

export const uiReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case type.loading:
            return { loading: true };
        case type.stopLoading:
            return { loading: false };
        default:
            return state;
    }
};
