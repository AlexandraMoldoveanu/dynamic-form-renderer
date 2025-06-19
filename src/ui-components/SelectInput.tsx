import type { InputProps } from "../types/interfaces";

const  SelectInput = ({
    value,
    label,
    name,
    options,
    handleChangeOnParent,
    error,
  }: InputProps) => {
    return (
      <div className="d-flex flex-column align-items-start">
        <label className="form-label" htmlFor={name}>{label} </label>
        <select className="form-select" 
          style={error?  { borderColor: "red" } : undefined}
          value={value as string}
          id={name}
          name={name}
          onChange={(e) => handleChangeOnParent(name, e.target.value)}
        >
          <option value="">Choose</option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span style={{ color: "red", marginInline: "10px" }}>{error}</span>
      </div>
    );
  }

  export default SelectInput;