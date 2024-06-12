import "./Plsyer.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjdiOGY3OWYxNTE3ZmYyMjQxZWE5NjMzZTNhMzgwNyIsInN1YiI6IjY2NjhhNDkwOTc1OTg3NzhlMDljMmMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LP9oYqTiOf7nqfN1cMqw0nSWyOtiSsjF63rk0eGELqU",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="Plsyer">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="playerinfo">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
