"use client";

import { useEffect, useState } from "react";

const GoldStats = () => {
  const [goldPrices, setGoldPrices] = useState("");
  const [priceDifference, setPriceDifference] = useState(0);
  const [percentageDifference, setPercentageDifference] = useState(0);

  const getGoldPrices = async () => {
    const response = await fetch("/api/gold-statistics", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
    setGoldPrices(data);

    setPriceDifference((data[1].cena - data[0].cena).toFixed(2));

    setPercentageDifference(
      (((data[1].cena - data[0].cena) / data[0].cena) * 100).toFixed(2)
    );
  };

  useEffect(() => {
    getGoldPrices();
  }, []);

  return (
    <div>
      <p>Statistics for gold</p>

      {goldPrices && (
        <div className="stats stats-vertical shadow">
          <div className="stat place-items-center">
            <div className="stat-title">Gold price of yesterday</div>
            <div className="stat-value">{goldPrices[0].cena} zł / g</div>
            <div className="stat-desc">{goldPrices[0].data}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Gold price of today</div>
            <div className="stat-value">{goldPrices[1].cena} zł / g</div>
            <div className="stat-desc">{goldPrices[1].data}</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Difference</div>
            <div
              className={`stat-value ${
                priceDifference > 0 ? `text-accent` : `text-secondary`
              }`}
            >
              {priceDifference} zł / g
            </div>
            <div
              className={`stat-desc ${
                priceDifference > 0 ? `text-accent` : `text-secondary`
              }`}
            >
              {percentageDifference > 0 ? "↗︎" : "↘︎"} {percentageDifference}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoldStats;
