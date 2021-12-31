import { useState } from "react";

export const useForm = (initialFormValues = {}) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const reset = () => {
        setFormValues(initialFormValues);
    };

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    return [formValues, handleInputChange, reset];
};
