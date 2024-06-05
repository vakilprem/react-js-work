// import { useState } from "react";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleAdd = () => {
    if (newTask.trim()) {
      if (isEditing) {
        const updatedTasks = tasks.map((task, index) =>
          index === currentTaskIndex ? newTask : task
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentTaskIndex(null);
      } else {
        setTasks([...tasks, newTask]);
      }
      setNewTask("");
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEdit = (task, index) => {
    setNewTask(task);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>

      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter the task"
        />
        <input type="submit" value={isEditing ? "Update" : "Add"} onClick={handleAdd} />
      </div>

      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task} 
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(task, index)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
