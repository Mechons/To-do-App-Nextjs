"use client";

import { useTodos } from "@/Hooks/useTodos";
import React from "react";
import { useSearchParams } from "next/navigation";

const Todos = () => {
  const { todos, handleDeleteTodo, handleTodoCompleted } = useTodos();
  console.log(todos);

  const searchParams = useSearchParams();
  const filterTodos = searchParams.get("todos");
  console.log(filterTodos);

  let filteredTodos = todos;

  if (filterTodos === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (filterTodos === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  // console.log(searchParams);

  return (
    <ul className="main-task">
      {filteredTodos.map((data) => {
        return (
          <>
            <li key={data.id}>
              <input
                type="checkbox"
                id={data.id}
                checked={data.completed}
                onChange={() => handleTodoCompleted(data.id)}
              />
              <label htmlFor={data.id}>{data.task}</label>

              {data.completed && (
                <button type="button" onClick={() => handleDeleteTodo(data.id)}>
                  Delete
                </button>
              )}
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default Todos;
