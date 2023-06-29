"use client";
import { useTodos } from "@/Hooks/useTodos";
import React, { FormEvent, useState } from "react";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodos } = useTodos();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo !== "") {
      handleAddTodos(todo);
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        placeholder="Add ToDos"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit"> Add</button>
    </form>
  );
};

export default AddToDo;
