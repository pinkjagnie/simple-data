"use client";

import { useEffect, useState } from "react";

const CurrencyRateTable = () => {
  useEffect(() => {
    fetch("/api/currency-rate-table", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
      });
  }, []);

  return <div>currency rate table</div>;
};

export default CurrencyRateTable;
