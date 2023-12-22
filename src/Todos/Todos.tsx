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
  const handleDelete = (id: number) => {
    let newTodos = todos.filter((item) => item.id != id);
    setTodos(newTodos);
  };
  const handleToggleChecked = (id: number) => {
    // tìm item được user click
    let index = todos.findIndex((item) => item.id == id);
    let cloneTodos = [...todos];
    cloneTodos[index].isCompleted = !cloneTodos[index].isCompleted;
    setTodos(cloneTodos);
  };
  return (
    <div>
      <FormTodo handleCreate={handleAddTodo} />
      <ListTodo
        handleToggleChecked={handleToggleChecked}
        handleDelete={handleDelete}
        todos={todos}
      />
    </div>
  );
}
// todo obje   ct
