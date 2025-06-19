import type { InputProps } from "../types/interfaces";

const NumberInput = ({ value, label, name, handleChangeOnParent, error }: InputProps) => {
  return (
    <div className="d-flex flex-column align-items-start">
      <label className="form-label" htmlFor={name}>{label} </label>
      <input

        style={error? { borderColor: "red" } : undefined}
        className="form-control"
        value={value as string}
        type="number"
        name={name}
        id={name}
        onChange={(e) => handleChangeOnParent(name, e.target.value)}
      />
      <span style={{ color: "red", marginInline: "10px" }}>{error}</span>
    </div>
  );
};
export default NumberInput;
