// import "./App.css";
// import Home from "./Home";
// import Login from "./Login";
// import Registration from "./Registration";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <>
//       {/* <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<Login />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/home" element={<Home />} />
//         </Routes>
//       </BrowserRouter> */}
//     </>
//   );
// }

// export default App;
import React from "react";
import Card from "./Card"; // Assuming you have the Card component in a separate file
// import "./CardContainer.css"; // Import styles for Card container

function App() {
  const cardData = [
    {
      title: "Card 1",
      description: "This is card 1 description.",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Card 2",
      description: "This is card 2 description.",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Card 3",
      description: "This is card 3 description.",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default App;
