import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Read() {
  const [api, setApi] = useState([]);

  function getData() {
    axios
      .get("https://66280047b625bf088c0a8529.mockapi.io/crud")
      .then((resp) => {
        setApi(resp.data);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const handleDelete = (id) => {
    axios
      .delete(`https://66280047b625bf088c0a8529.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };
  const setStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="m-1 md-1">
          <Link to={"/create"}>
            {" "}
            <button className="btn btn-primary">Create Record</button>
          </Link>
        </div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {api.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td key={item.id}>{item.id}</td>
                    <td>{item.e_name}</td>
                    <td>{item.e_age}</td>
                    <td>{item.e_email}</td>
                    <td>
                      <Link to={"/edit"}>
                        <button
                          onClick={() =>
                            setStorage(
                              item.id,
                              item.e_name,
                              item.e_age,
                              item.e_email
                            )
                          }
                          className="btn btn-primary"
                        >
                          Edit
                        </button>
                      </Link>
                      &nbsp;
                      <button
                        onClick={() => {
                          if (window.confirm("Are you sure")) {
                            handleDelete(item.id);
                          }
                        }}
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
    </div>
  );
}

export default Read;
