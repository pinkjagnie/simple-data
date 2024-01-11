const SingleCurrencyRow = ({ name, code, rate }) => {
  return (
    <tr className="hover">
      <td>{name}</td>
      <td>1 {code}</td>
      <td>{rate}</td>
    </tr>
  );
};

export default SingleCurrencyRow;
