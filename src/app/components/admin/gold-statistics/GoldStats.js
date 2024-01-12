const GoldStats = () => {
  return (
    <div>
      <p>Statistics for gold</p>

      <div className="stats stats-vertical shadow">
        <div className="stat">
          <div className="stat-title">Gold price of yesterday</div>
          <div className="stat-value">259,14 zł / g</div>
          <div className="stat-desc">2024-01-11</div>
        </div>

        <div className="stat">
          <div className="stat-title">Gold price of today</div>
          <div className="stat-value">258,40 zł / g</div>
          <div className="stat-desc">↗︎ 2024-01-12</div>
        </div>

        <div className="stat">
          <div className="stat-title">Difference</div>
          <div className="stat-value">- 0,74 zł / g</div>
          <div className="stat-desc">↘︎ 0,99%</div>
        </div>
      </div>
    </div>
  );
};

export default GoldStats;
