import "./App.css";
import { TaskList } from "./assets/components/TaskList";

function App() {
  return (
    <div className="task-application">
      <section className="principal-taskList">
        <h1>Task List</h1>
        <TaskList />
      </section>
    </div>
  );
}

export default App;
