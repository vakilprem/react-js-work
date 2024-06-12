import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

function Home() {
  const { allCoin, currency } = useContext(CoinContext);
  const [display, setDisplay] = useState([]);
  const [input, setInput] = useState("");

  const inputHandle = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplay(allCoin);
    }
  };

  const searchHandle = (e) => {
    e.preventDefault();
    const coins = allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLocaleLowerCase());
    });
    setDisplay(coins);
  };
  useEffect(() => {
    setDisplay(allCoin);
  }, [allCoin]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to world's largest cryptocurrency marketplace, Sign up to
          explore more about cryptos
        </p>
        <form onSubmit={searchHandle}>
          <input
            onChange={inputHandle}
            list="coinlist"
            value={input}
            required
            type="text"
            name=""
            id=""
            placeholder="Search crypto"
          />

          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24h Change</p>
          <p className="maket-cap">Market Cap</p>
        </div>
        {display.slice(0, 40).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} alt={item.name} />
              <p>
                {item.name} - {item.symbol.toUpperCase()}
              </p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={item.price_change_percentage_24h > 0 ? "green" : "red"}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}%
            </p>
            <p className="maket-cap">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
