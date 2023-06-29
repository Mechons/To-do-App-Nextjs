import { todosContext } from "@/Store/ToDoContext";
import { useContext } from "react";

export function useTodos() {
  const todosContextValue = useContext(todosContext);

  if (!todosContextValue) {
    throw new Error("useTodos used outside of provider");
  }
  return todosContextValue;
}
