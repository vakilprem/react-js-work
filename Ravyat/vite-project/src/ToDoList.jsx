// import React, { useEffect, useState } from "react";

// function ToDoList() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [editindex, setEditindex] = useState(null);
//   const [editvalue, setEditValue] = useState("");

//   function addTask() {
//     if (newTask.trim() === "") {
//       window.alert("Please Enter the Task");
//     } else {
//       const updatedTasks = [...tasks, newTask];
//       setTasks(updatedTasks);
//       localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//       setNewTask("");
//     }
//   }

//   function deleteTask(index) {
//     const confirmDelete = window.confirm(
//       "Are yo sure you want to delete the task"
//     );
//     if (confirmDelete) {
//       const update = tasks.filter((_, i) => i !== index);
//       setTasks(update);
//       localStorage.setItem("tasks", JSON.stringify(update));
//     }
//   }
//   useEffect(() => {
//     try {
//       const storedTasks = localStorage.getItem("tasks");
//       if (storedTasks) {
//         setTasks(JSON.parse(storedTasks));
//       }
//     } catch (error) {
//       console.error("Error loading tasks from local storage:", error);
//     }
//   }, []);

//   //Edit fuuncatinaloty
//   function editTask(index) {
//     setEditindex(index);
//     setEditValue(tasks[index]);
//   }
//   //save Edit
//   function saveEdit(index) {
//     const updated = [...tasks];
//     updated[index] = editvalue;
//     setTasks(updated);
//     localStorage.setItem("tasks", JSON.stringify(updated));
//     setEditindex(null);
//   }
//   //   useEffect(() => {
//   //     try {
//   //       localStorage.setItem("tasks", JSON.stringify(tasks));
//   //     } catch (error) {
//   //       console.error("Error saving tasks to local storage:", error);
//   //     }
//   //   }, [tasks]);

//   return (
//     <div>
//       <div className="todo-list">
//         <h1>To Do List</h1>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter A task.."
//             value={newTask}
//             onChange={(e) => setNewTask(e.target.value)}
//           ></input>
//           <button className="add-btn" onClick={addTask}>
//             Add
//           </button>
//         </div>
//         <div className="task-container">
//           <ol>
//             {tasks.map((task, index) => (
//               <li key={index}>
//                 {editindex === index ? (
//                   <input
//                     type="text"
//                     value={editvalue}
//                     onChange={(e) => setEditValue(e.target.value)}
//                   />
//                 ) : (
//                   <span className="text">{task}</span>
//                 )}

//                 <span className="text">{task}</span>

//                 {editindex === index ? (
//                   <button onClick={() => saveEdit(index)}>Save</button>
//                 ) : (
//                   <>
//                     <button
//                       className="del-btn"
//                       onClick={() => deleteTask(index)}
//                     >
//                       Delte
//                     </button>
//                     <button className="del-btn" onClick={() => editTask(index)}>
//                       Edit
//                     </button>
//                   </>
//                 )}
//               </li>
//             ))}
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ToDoList;
import React, { useEffect, useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editindex, setEditindex] = useState(null);

  function addTask() {
    if (newTask.trim() === "") {
      window.alert("Please Enter the Task");
    } else {
      const updatedTasks = [...tasks];
      if (editindex !== null) {
        updatedTasks[editindex] = newTask;
      } else {
        updatedTasks.push(newTask);
      }
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setNewTask("");
      setEditindex(null);
    }
  }

  //Edit functionality
  function editTask(index) {
    setEditindex(index);
    setNewTask(tasks[index]); // Populate input field with the task to be edited
  }

  function deleteTask(index) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete the task?"
    );
    if (confirmDelete) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  }

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Error loading tasks from local storage:", error);
    }
  }, []);

  return (
    <div>
      <div className="todo-list">
        <h1>To Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter A task.."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="add-btn" onClick={addTask}>
            {editindex !== null ? "Save" : "Add"}{" "}
            {/* Change button text based on edit index */}
          </button>
        </div>
        <div className="task-container">
          <ol>
            {tasks.map((task, index) => (
              <li key={index}>
                <input
                  type="text"
                  value={task}
                  readOnly={editindex !== index} // Disable input field during editing
                />
                <button className="del-btn" onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button className="edit-btn" onClick={() => editTask(index)}>
                  Edit
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
