import React, { useEffect, useState } from "react";
import { Emplooye } from "./Emplooyee";

function EmployeeData() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);

  useEffect(() => {
    setData(Emplooye);
  }, []);
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are Yor sure to Delete item")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };
  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    if (dt !== undefined) {
      setId(id);
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age);
    }
  };
  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setAge("");
  };
  return (
    <div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <label>
            First Name :
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Enter Your Name"
            />
          </label>
        </div>
        <div>
          <label>
            Last Name :
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Enter Your Last Name"
            />
          </label>
        </div>
        <div>
          <label>
            First Age :
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              placeholder="Enter Your Age"
            />
          </label>
        </div>
        <div>
          <button onClick={() => handleSave()} className="btn btn-primary">
            save
          </button>
          &nbsp;
          <button onClick={() => handleClear()} className="btn btn-danger">
            Clear
          </button>
        </div>
      </div>
      <h1>Employe Data</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            {/* <th>Sr no</th> */}
            <th>Id</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
            {/* <th>Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  {/* <td>{item+ 1}</td> */}
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeData;
