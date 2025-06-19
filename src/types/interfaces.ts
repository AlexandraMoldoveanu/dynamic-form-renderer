export interface FormSchemaField {
    label: string;
    type: "text" | "number" | "select" | "checkbox";
    name: string;
    required?: boolean;
    options?: string[];
  }
  
  export interface FormSchemaProp {
    title: string;
    fields: FormSchemaField[];
  }
  
  export interface FormData {
    [key: string]: string | boolean;
  }
  
  export interface InputProps {
    value: string | boolean;
    label: string;
    name: string;
    options?: string[];
    handleChangeOnParent: (name: string, value: string | boolean) => void;
    error: string;
  }