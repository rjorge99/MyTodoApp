import { type } from "../types/types";

export const loading = () => ({
    type: type.loading
});

export const stopLoading = () => ({
    type: type.stopLoading
});
