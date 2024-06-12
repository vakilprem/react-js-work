// import React from 'react'
import { useParams } from "react-router-dom";
import "./Coin.css";
import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../../component/Linechart/LineChart";

function Coin() {
  const { coinId } = useParams();

  const [coinData, setCoinData] = useState();
  const [histocialData, setHistocialData] = useState();
  const { currency } = useContext(CoinContext);
  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-2SC1CdryFFVGVBrwvEVNL9bL	",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((response) => response.json())
      .then((response) => setCoinData(response))
      .catch((err) => console.error(err));
  };
  const historicalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-2SC1CdryFFVGVBrwvEVNL9bL	",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((response) => response.json())
      .then((response) => setHistocialData(response))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchCoinData();
    historicalData();
  }, [currency]);

  if (coinData && histocialData) {
    return (
      <div className="coin">
        <div className="coin-name">
          {coinData.image && (
            <img src={coinData.image.large} alt={coinData.name} />
          )}
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="coin-chart">
          <LineChart histocialData={histocialData} />
        </div>
        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Curent Price</li>
            <li>
              {currency.symbol}{" "}
              {coinData &&
                coinData.market_data &&
                coinData.market_data.current_price &&
                coinData.market_data.current_price[currency.name] &&
                coinData.market_data.current_price[
                  currency.name
                ].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 hour High</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.high_24h[currency.name].toLocaleString()}
            </li>
          </ul>
          <ul>
            <li>24 hour lOW</li>
            <li>
              {currency.symbol}{" "}
              {coinData.market_data.low_24h[currency.name].toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spiner">
        <div className="spin"></div>
      </div>
    );
  }
}

export default Coin;
