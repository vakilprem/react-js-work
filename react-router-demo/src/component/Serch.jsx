import React from "react";
import { useSearchParams } from "react-router-dom";

function Serch() {
  const [search, setSearch] = useSearchParams();
  function handleSeacrh(e) {
    e.preventDefault();
    const data = search.get("q");
    alert(data);
  }
  return (
    <div>
      <h2>Serch Value</h2>
      <form onSubmit={handleSeacrh}>
        <label>Search</label>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearch({ q: e.target.value })}
        ></input>
        <br></br>
        <input type="submit" typeof="search" />
        <input value="reset" onClick={() => setSearch({})} type="button" />
      </form>
    </div>
  );
}

export default Serch;
