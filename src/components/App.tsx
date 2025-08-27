import { Hero } from "./Hero";
import { ToDoList } from "./ToDoList";

export const App = () => {
  return (
    <div id="app-container">
      <Hero />
      <main id="main-container">
        <ToDoList />
      </main>
    </div>
  );
};
