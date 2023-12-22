import React, { useState } from "react";
import { I_PropsForm } from "./interface";
import { customAlphabet } from "nanoid";
export default function FormTodo(props: I_PropsForm) {
  const [title, setTitle] = useState<string>("Làm dự án cuối khoá");
  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleSubmit = () => {
    const nanoid = customAlphabet("123456789", 3);
    let randomId = nanoid();
    props.handleCreate({
      id: parseInt(randomId),
      title: title,
      isCompleted: false,
    });
  };
  // nano id npm
  return (
    <div className="container">
      <input
        onChange={handleChangeForm}
        value={title}
        type="text"
        className="form-control"
        placeholder="Title Todo"
      />
      <button onClick={handleSubmit} className="btn btn-danger">
        Add
      </button>
    </div>
  );
}
