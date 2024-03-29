"use client";

import { useEffect, useState } from "react";

import SingleCurrencyRow from "./SingleCurrencyRow";

const CurrencyRateTable = () => {
  const [currencies, setCurrencies] = useState("");
  const [loadingMsg, setLoadingMsg] = useState("");

  const getCurrencies = async () => {
    setLoadingMsg("Loading...");

    const response = await fetch("/api/currency-rate-table", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data[0]);
    setCurrencies(data[0]);

    setLoadingMsg("");
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <div>
      {currencies ? (
        <>
          <div className="w-[90%] mx-auto text-center">
            <p className="text-xl font-bold py-4 lg:pt-14">
              Currency rate for day: {currencies.effectiveDate}
            </p>
            <p>Table number {currencies.no}</p>
            <p className="text-sm pt-4">
              Average exchange rates of foreign currencies against the Polish
              zloty
            </p>
          </div>
          <div className="overflow-x-auto pt-8 w-auto mx-auto flex items-center justify-center">
            <table className="xs:table-xs sm:table-sm min-[600px]:table-md lg:table-lg xl:table-xl text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Code</th>
                  <th>Average exchange rate</th>
                </tr>
              </thead>
              <tbody>
                {currencies.rates.map((currency) => {
                  return (
                    <SingleCurrencyRow
                      key={currency.code}
                      name={currency.currency}
                      code={currency.code}
                      rate={currency.mid}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="font-xl font-bold text-center w-[90%] mx-auto">
          {loadingMsg}
        </p>
      )}
    </div>
  );
};

export default CurrencyRateTable;
