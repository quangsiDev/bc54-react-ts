import React, { useState } from "react";
import FormTodo from "./FormTodo";
import ListTodo from "./ListTodo";
import { I_Todo } from "./interface";

export default function Todos() {
  // I_Todo[] array chứa objec todo
  const [todos, setTodos] = useState<I_Todo[]>([
    { id: 1, title: "Review ReactJs", isCompleted: false },
    { id: 2, title: "Capstone ReactJs", isCompleted: false },
  ]);
  const handleAddTodo = (newTodo: I_Todo) => {
    let newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };
  return (
    <div>
      <FormTodo handleCreate={handleAddTodo} />
      <ListTodo todos={todos} />
    </div>
  );
}
// todo obje   ct
