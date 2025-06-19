import { useState } from "react";
import TextInput from "./ui-components/TextInputs";
import NumberInput from "./ui-components/NumberInput";
import CheckboxInput from "./ui-components/CheckboxInput";
import SelectInput from "./ui-components/SelectInput";
import  { type FormSchemaProp,  type InputProps} from './types/interfaces'
import { useDynamicForm } from "./hooks/useDynamicForm";

const DynamicForm = ({ formProp }: { formProp: FormSchemaProp }) => {
 const { formData, errors, handleChange, handleSubmit, resetForm} = useDynamicForm(formProp)

  return (
    <>
      <form onSubmit={handleSubmit} className=" bg-light px-5 py-4 w-100 d-flex  flex-column gap-4 justify-content-center">
        <h1 className="text-muted">{formProp.title}</h1>

        {formProp.fields.map((field) => {
          let inputProps: InputProps = {
            value: formData[field.name],
            label: field.label,
            name: field.name,
            handleChangeOnParent: handleChange,
            error: errors[field.label],
            options: field.type === "select" ? field.options : undefined,
          };
          let inputElement;

          switch (field.type) {
            case "text":
              inputElement = <TextInput {...inputProps} />;
              break;
            case "number":
              inputElement = <NumberInput {...inputProps} />;
              break;
            case "checkbox":
              inputElement = <CheckboxInput {...inputProps} />;
              break;

            case "select":
              inputElement = <SelectInput {...inputProps} />;
              break;
          }

          return <div key={field.name}>{inputElement}</div>;
        })}
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-outline-secondary" type="reset" onClick={resetForm}>
            Reset
          </button >
          <button  className="btn btn-outline-secondary" type="submit" onClick={handleSubmit}>
            Submit
          </button >
        </div>
      </form>
    </>
  );
};

export default DynamicForm;
