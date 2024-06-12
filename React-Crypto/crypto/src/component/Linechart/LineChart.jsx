import { useEffect, useState } from "react";
import Chart from "react-google-charts";

function LineChart({ histocialData }) {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let datacopy = [["Date", "Prices"]];
    if (histocialData.prices) {
      histocialData.prices.map((item) => {
        datacopy.push([
          `${new Date(item[0]).toLocaleString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(datacopy);
    }
  }, [histocialData]);
  return <Chart chartType="Line" data={data} height="100%" legendToggle />;
}

export default LineChart;
// import { useEffect, useState } from "react";
// import Chart from "react-google-charts";

// function LineChart({ histocialData }) {
//   const [data, setData] = useState([["Date", "Prices"]]);

//   useEffect(() => {
//     if (histocialData.prices) {
//       const formattedData = histocialData.prices.map((item) => [
//         new Date(item[0]), // Date
//         item[1], // Prices
//       ]);
//       setData([["Date", "Prices"], ...formattedData]);
//     }
//   }, [histocialData]);

//   return (
//     <Chart
//       chartType="Line"
//       width="100%"
//       height="400px"
//       loader={<div>Loading Chart...</div>}
//       data={data}
//       options={{
//         chart: {
//           title: "Price History",
//           subtitle: "in USD",
//         },
//         legend: { position: "none" },
//         hAxis: {
//           title: "Date",
//           format: "MMM dd",
//         },
//         vAxis: {
//           title: "Price",
//           minValue: 0,
//         },
//       }}
//       rootProps={{ "data-testid": "1" }}
//     />
//   );
// }

// export default LineChart;
