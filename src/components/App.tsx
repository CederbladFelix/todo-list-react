import { useState } from "react";
import type { ToDoType } from "../types";
import { toDoListData } from "./Data";
import { Form } from "./Form";
import { Hero } from "./Hero";
import { ToDoList } from "./ToDoList";

export const App = () => {
  const [toDoArray, setToDoArray] = useState<ToDoType[]>(toDoListData);
  const [nextId, setNextId] = useState<number>(toDoListData.length + 1);
  return (
    <div id="app-container">
      <Hero />
      <main id="main-container">
        <Form
          toDoArray={toDoArray}
          setToDoArray={setToDoArray}
          nextId={nextId}
          setNextId={setNextId}
        />
        <ToDoList toDoArray={toDoArray} setToDoArray={setToDoArray} />
      </main>
    </div>
  );
};
