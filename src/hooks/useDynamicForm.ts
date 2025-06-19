import { useCallback, useState } from "react";
import {
  type FormSchemaProp,
  type FormData,
 
} from "../types/interfaces";

export const useDynamicForm = ( formProp: FormSchemaProp ) => {

  const getInitialState = useCallback(() => {
    let initialState = {};
    for (const field of formProp.fields) {
      if (field.type === "checkbox") {
        initialState = { ...initialState, [field.name]: false };
      } else {
        initialState = { ...initialState, [field.name]: "" };
      }
    }
    return initialState;
  }, [formProp.fields]);

  const [formData, setFormData] = useState<FormData>(() => getInitialState());
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = useCallback((field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  }, []);
  
const validateForm = useCallback((): boolean => {
    let currentFormErrors: Record<string, string> = {};

    formProp.fields.forEach((field) => {
        if (field.required && !formData[field.name]) {
          currentFormErrors = {
            ...currentFormErrors,
            [field.label]: `${field.label} is mandatory, please provide a value!`,
          };
        }
      });

    setErrors(currentFormErrors);
    return Object.keys(currentFormErrors).length === 0;
  }, [formData, formProp.fields]);


  const handleSubmit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();

   
    if (validateForm()) {
      console.log("Form submitted: ", formData);
    }
  }, [validateForm, formData]);

  const resetForm = useCallback(() => {
    setFormData(() => getInitialState());
    setErrors({});
  }, [getInitialState]);


  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  }
}
