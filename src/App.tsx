import "./App.css";
import DynamicForm from "./DynamicForm";

const formSchema = {
  title: "User Registration",
  fields: [
    { label: "Name", type: "text", name: "name", required: true },
    { label: "Pet", type: "text", name: "pet", required: true },
    {
      label: "Species",
      type: "select",
      name: "species",
      options: ["Cat", "Dog", "Guinea Pig"],
    },
    { label: "Age", type: "number", name: "age" },
    { label: "Subscribe", type: "checkbox", name: "subscribe" },

    {
      label: "Gender",
      type: "select",
      name: "gender",
      required: true,
      options: ["Male", "Female", "Other"],
    },
  ],
};

function App() {
  return (
    <div className="d-flex gap-5">
      <DynamicForm formProp={formSchema} />
    </div>
  );
}

export default App;
