import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([
    "Eat BreakFast",
    "Take Shower",
    "Walk the dog",
  ]);
  const [editIndex, setEditIndex] = useState(null); // State to track the index of the task being edited

  const [newTask, setNewTask] = useState();
  function handleInputChane(e) {
    setNewTask(e.target.value);
  }
  function handleaddTask() {
    if (newTask.trim() !== "") {
      setTask([...task, newTask]);
      setNewTask("");
    }
  }
  function handleDeletetask(index) {
    const data = task.filter((_, i) => i !== index);
    setTask(data);
  }
  function handleInputChange(e) {
    setTask(e.target.value);
  }
  // function handleDeletetask(index) {
  //     const updatedTaskList = [...task];
  //     updatedTaskList.splice(index, 1);
  //     setTask(updatedTaskList);
  //   }
  function handlemoveupTask(index) {
    if (index > 0) {
      const update = [...task];
      [update[index], update[index - 1]] = [update[index - 1], update[index]];
      setTask(update);
    }
  }
  function handlemovedownTask(index) {
    if (index > 0) {
      const update = [...task];
      [update[index], update[index + 1]] = [update[index - 1], update[index]];
      setTask(update);
    }
  }
  function handleEdit(index) {
    setEditIndex(index);
    setNewTask(task[index]); // Set the input field value to the task being edited
  }

  function handleSaveEdit(index) {
    const updatedTaskList = [...task];
    updatedTaskList[index] = newTask;
    setTask(updatedTaskList);
    setEditIndex(null); // Clear the edit index after saving
    setNewTask(""); // Clear the input field
  }

  function handleCancelEdit() {
    setEditIndex(null);
    setNewTask(""); // Clear the input field
  }
  return (
    <div>
      <div>
        <h1>To do List</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter the Task"
          value={newTask}
          onChange={handleInputChane}
        ></input>

        <button onClick={handleaddTask}>Add Button</button>
        <ol>
          {" "}
          {task &&
            task.map((taskItem, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={newTask}
                      onChange={handleInputChange}
                    />
                    <button onClick={() => handleSaveEdit(index)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <span className="text">{taskItem}</span>
                    <button onClick={() => handleDeletetask(index)}>
                      Delete
                    </button>
                    <button onClick={() => handlemoveupTask(index)}>👆</button>
                    <button onClick={() => handleEdit(index)}>Edit</button>

                    <button onClick={() => handlemovedownTask(index)}>
                      👇
                    </button>
                  </>
                )}
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
