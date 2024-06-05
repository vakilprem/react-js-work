// import React, { useEffect, useState } from "react";

// function TodoList() {
//   const [task, setTask] = useState(() => {
//     const storeTask = localStorage.getItem("task");
//     return storeTask ? JSON.parse(storeTask) : [];
//   });
//   const [newTask, setNewTask] = useState("");
//   const [editIndex, setEditIndex] = useState(null);
//   const [edit, setEdit] = useState("");
//   useEffect(() => {
//     localStorage.setItem("task", JSON.stringify(task));
//   }, [task]);
//   const handleInputChange = (e) => {
//     setNewTask(e.target.value);
//   };
//   const addTask = () => {
//     setTask((task) => [...task, newTask]);
//     setNewTask("");
//   };
//   const deleteTask = (index) => {
//     if (window.confirm("Are you sure you Want to delete this record ")) {
//       const update = task.filter((_, i) => i !== index);
//       setTask(update);
//     }
//   };
//   function moveUp(index) {
//     const updateTask = [...task];
//     [updateTask[index], updateTask[index - 1]] = [
//       updateTask[index - 1],
//       updateTask[index],
//     ];
//     setTask(updateTask);
//   }
//   function moveTaskDown(index) {
//     const updateTask = [...task];
//     [updateTask[index], updateTask[index + 1]] = [
//       updateTask[index + 1],
//       updateTask[index],
//     ];
//     setTask(updateTask);
//   }
//   return (
//     <div>
//       <div className="to-do-list">
//         <h1>To Do List</h1>

//         <div>
//           <table className="table table-bordered ">
//             <tbody>
//               <tr>
//                 <td>
//                   <input
//                     type="text"
//                     onChange={handleInputChange}
//                     placeholder="Enter The Task"
//                     value={newTask}
//                   ></input>
//                 </td>
//               </tr>
//               <button className="btn btn-primary" onClick={addTask}>
//                 ADD
//               </button>
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <ol>
//         {task.map((item, index) => (
//           <li key={index}>
//             <span>{item}</span>
//             <button
//               onClick={() => deleteTask(index)}
//               className="btn btn-danger m-1"
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => moveUp(index)}
//               className="btn btn-success m-1"
//             >
//               👆
//             </button>
//             <button
//               onClick={() => moveTaskDown(index)}
//               className="btn btn-success"
//             >
//               👇
//             </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// export default TodoList;
import React, { useEffect, useState } from "react";

function Todo2() {
  const [task, setTask] = useState(() => {
    const storedTask = localStorage.getItem("tasks");
    return storedTask
      ? JSON.parse(storedTask)
      : ["Eat Breakfast", "Take Shower", "Walk The Dog"];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);
  
  const [newTask, setnewTask] = useState("");
  const [edit, setEdit] = useState("");
  const [editedIndex, setEditedIndex] = useState(null);

  function handleInputChange(e) {
    setnewTask(e.target.value);
  }
  function deleteTask(index) {
    const confirm = window.confirm(
      "Are You sure You want to Delte this REcord"
    );
    if (confirm) {
      const updatedTask = task.filter((_, i) => i !== index);
      setTask(updatedTask);
    }
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const data = [...task];
      [data[index], data[index - 1]] = [data[index - 1], data[index]];
      setTask(data);
    }
  }
  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const data = [...task];
      [data[index], data[index + 1]] = [data[index + 1], data[index]];
      setTask(data);
    }
  }

  function handleAddButton() {
    if (newTask.trim() !== "") {
      setTask((task) => [...task, newTask]);
      setnewTask("");
    }
  }

  function editTask(index) {
    setEdit(task[index]);
    setEditedIndex(index);
  }
  function handleCancelEdit() {
    setEdit("");
    setEditedIndex(null);
  }
  function handleSaveEdit(index) {
    const data = [...task];
    data[index] = edit;
    setTask(data);
    setEdit("");
    setEditedIndex(null);
    console.log("clicked");
  }

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a Task ..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={handleAddButton} className="add-btn">
          Add
        </button>
      </div>
      <ol>
        {task.map((element, index) => (
          <li key={index}>
            {editedIndex === index ? (
              <>
                <input
                  type="text"
                  value={edit}
                  onChange={(e) => setEdit(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(index)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span className="text">{element}</span>
                <button className="del-btn" onClick={() => deleteTask(index)}>
                  Delete Task
                </button>
                <button className="edit" onClick={() => editTask(index)}>
                  Edit Task
                </button>
                <button className="move" onClick={() => moveTaskUp(index)}>
                  👆
                </button>
                <button className="move" onClick={() => moveTaskDown(index)}>
                  👇
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo2;
