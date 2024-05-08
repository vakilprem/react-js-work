// import React, { useState } from "react";

// function MyComponent() {
//   const [name, setName] = useState("Guest");
//   const [age, setAge] = useState(0);
//   const [isEmployed, setIsEmployed] = useState(false);
//   const [comment, setComment] = useState();
//   const [shiping, setShiping] = useState();
//   const [payment, setPayment] = useState();
//   const handleClick = () => {
//     setName("Spngebob");
//   };
//   const increment = () => {
//     setAge(age + 1);
//   };
//   const Employee = () => {
//     setIsEmployed(!isEmployed);
//   };
//   console.log(comment);
//   return (
//     <div>
//       <p>Name:{name}</p>
//       <button onClick={handleClick}>Set Name</button>
//       <p>Age:{age}</p>
//       <button onClick={increment}>Age</button>
//       <p>isEmployed:{isEmployed ? "yes" : "no"}</p>
//       <button onClick={Employee}>Toggle status</button>
//       <br></br>
//       <textarea onChange={(e) => setComment(e.target.value)}></textarea>
//       <p>{comment}</p>
//       <select value={payment} onChange={(e) => setPayment(e.target.value)}>
//         <option value="">Select an Option</option>
//         <option value="Visa">Visa</option>
//         <option value="MasterCard">MasterCard</option>
//         <option value="GiftCard">Giftcard</option>
//       </select>
//       <p>{payment}</p>

//       <label>
//         <input
//           type="radio"
//           value="Pick up"
//           checked={shiping === "Pick up"}
//           onChange={(e) => {
//             setShiping(e.target.value);
//           }}
//         ></input>
//         Pick up
//       </label>
//       <label>
//         {" "}
//         <input
//           type="radio"
//           value="Delivery"
//           checked={shiping === "Delivery"}
//           onChange={(e) => {
//             setShiping(e.target.value);
//           }}
//         ></input>
//         Delivery
//       </label>
//       <p>{shiping}</p>
//     </div>
//   );
// }

// export default MyComponent;
