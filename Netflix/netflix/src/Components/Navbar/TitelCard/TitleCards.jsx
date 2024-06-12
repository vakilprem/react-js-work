// import { Link } from "react-router-dom";
// import "./titlecard.css";
// // import cards_data from "../../assets/cards/Cards_data.jsx";
// // import cards_data from "../../../assets/cards/Cards_data";
// import { useEffect, useRef, useState } from "react";

// const TitleCards = ({ title, category }) => {
//   const [apiData, setApiData] = useState([]);
//   const cardsRef = useRef();
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjdiOGY3OWYxNTE3ZmYyMjQxZWE5NjMzZTNhMzgwNyIsInN1YiI6IjY2NjhhNDkwOTc1OTg3NzhlMDljMmMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9oYqTiOf7nqfN1cMqw0nSWyOtiSsjF63rk0eGELqU",
//     },
//   };

//   const handleWheel = (e) => {
//     e.preventDefault();
//     cardsRef.current.scrollLeft += e.deltay;
//   };
//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/movie/${
//         category ? category : "now_playing"
//       }?language=en-US&page=1`,
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => setApiData(response.results))
//       .catch((err) => console.error(err));

//     cardsRef.current.addEventListener("Wheel", handleWheel);
//   }, []);
//   return (
//     <div className="titlecard">
//       <h2>{title ? title : "Populer On Netflix"}</h2>
//       <div className="card-list" ref={cardsRef}>
//         {apiData.map((card, index) => {
//           return (
//             <Link to={`/player/${card.id}`} className="card" key={index}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
//                 alt=""
//               />
//               <p>{card.original_title}</p>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TitleCards;
import { Link } from "react-router-dom";
import "./titlecard.css";
import { useEffect, useRef, useState } from "react";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjdiOGY3OWYxNTE3ZmYyMjQxZWE5NjMzZTNhMzgwNyIsInN1YiI6IjY2NjhhNDkwOTc1OTg3NzhlMDljMmMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9oYqTiOf7nqfN1cMqw0nSWyOtiSsjF63rk0eGELqU",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset video to the beginning
    }
  };

  return (
    <div className="titlecard">
      <h2>{title ? title : "Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link
            to={`/player/${card.id}`}
            className="card"
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.original_title}
            />
            <video
              src={`https://path/to/video/${card.id}.mp4`} // Replace with actual video URL
              muted
              className="card-video"
            ></video>
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
