import type { InputProps } from "../types/interfaces";

const CheckboxInput = ({
  value,
  label,
  name,
  handleChangeOnParent,
  error,
}: InputProps) => {
  return (
    <div className="d-flex gap-2">
      <label className="form-check-label" htmlFor={name}>{label} </label>
      <input
      className="form-check-input" 
        style={error ? { borderColor: "red" } : undefined}
        type="checkbox"
        name={name}
        id={name}
        checked={!!value}
        onChange={(e) => handleChangeOnParent(name, e.target.checked)}
      />
      <span style={{ color: "red", marginInline: "10px" }}>{error}</span>
    </div>
  );
};

export default CheckboxInput;
