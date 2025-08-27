import { Form } from "./Form";
import { Hero } from "./Hero";
import { ToDoList } from "./ToDoList";

export const App = () => {
  return (
    <div id="app-container">
      <Hero />
      <main id="main-container">
        <Form />
        <ToDoList />
      </main>
    </div>
  );
};
