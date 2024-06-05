import React from "react";
import Child from "./Child";

function Student() {
  const students = ["Premal", "Adil", "Kumar"];
  //   const number = [2, 3, 5, 6, 7];
  //   const data = [
  //     {
  //       name: "Premal",
  //       age: 23,
  //     },
  //     {
  //       name: "Vakil",
  //       age: 53,
  //     },
  //     {
  //       name: "Kumar",
  //       age: 33,
  //     },
  //   ];
  let color = {
    color: "red",
    backgroundColor: "orange",
    fontSize: "50px",
  };
  let color2 = {
    fontFamily: "cooper",
  };
  return (
    <div>
      {/* {data.map((dat) => (
        <Child dat={dat} />
      ))} */}

      <h1 className="bg-success text-white p-5">Welcome</h1>
      <h1>Welcome</h1>
      <button class="btn btn-primary">Primary button</button>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
<table class="table table-striped">
  ...
</table>

<table class="table-primary">...</table>
<table class="table-secondary">...</table>
<table class="table-success">...</table>
<table class="table-danger">...</table>
<table class="table-warning">...</table>
<table class="table-info">...</table>
<table class="table-light">...</table>
<table class="table-dark">...</table>


<tr class="table-primary">...</tr>
<tr class="table-secondary">...</tr>
<tr class="table-success">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-info">...</tr>
<tr class="table-light">...</tr>
<tr class="table-dark">...</tr>


<tr>
  <td class="table-primary">...</td>
  <td class="table-secondary">...</td>
  <td class="table-success">...</td>
  <td class="table-danger">...</td>
  <td class="table-warning">...</td>
  <td class="table-info">...</td>
  <td class="table-light">...</td>
  <td class="table-dark">...</td>
</tr>
      {students.map((Student, index) => (
        <ul style={{ ...color, ...color2 }} key={index}>
          <li style={{ color: "blue", backgroundColor: "black" }}>{Student}</li>
        </ul>
      ))}
      {/* {number.map((num) => (
        <h1>{(num = num + 10)}</h1>
      ))} */}
    </div>
  );
}

export default Student;
