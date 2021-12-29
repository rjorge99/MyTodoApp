import { useState } from "react";

const initialState = {};
export const useForm = (initialFormValues = initialState) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const reset = () => {
        setFormValues(initialState);
    };

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    return [formValues, handleInputChange, reset];
};
