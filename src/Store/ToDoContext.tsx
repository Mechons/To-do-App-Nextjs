"use client";

import React, { ReactNode, createContext, useState } from "react";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddTodos: (task: string) => void; //call signature
  handleDeleteTodo: (id: string) => void;
  handleTodoCompleted: (id: string) => void;
};

export const todosContext = createContext<TodosContext | null>(null);

const ToDoContext = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as Todo[];
    } catch (e) {
      return [];
    }
  });

  function handleAddTodos(task: string) {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }

  function handleDeleteTodo(id: string) {
    setTodos((prev) => {
      const newTodos = prev.filter((task) => task.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }
  function handleTodoCompleted(id: string) {
    setTodos((prev) => {
      const newTodos = prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }

  return (
    <todosContext.Provider
      value={{ todos, handleAddTodos, handleDeleteTodo, handleTodoCompleted }}
    >
      {children}
    </todosContext.Provider>
  );
};

export default ToDoContext;
