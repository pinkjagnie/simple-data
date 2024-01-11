"use client";

import { useEffect, useState } from "react";

import SingleCurrencyRow from "./SingleCurrencyRow";

const CurrencyRateTable = () => {
  const [currencies, setCurrencies] = useState("");

  useEffect(() => {
    fetch("/api/currency-rate-table", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setCurrencies(data[0]);
      });
  }, []);

  return (
    <div>
      {currencies ? (
        <>
          {" "}
          <p className="font-xl font-bold text-center w-[90%] mx-auto">
            Currency rate for day: {currencies.effectiveDate}
          </p>
          <div className="overflow-x-auto pt-8 w-auto mx-auto">
            <table className="xs:table-xs sm:table-sm min-[600px]:table-md lg:table-lg xl:table">
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
          Ups, something went wrong
        </p>
      )}
    </div>
  );
};

export default CurrencyRateTable;
