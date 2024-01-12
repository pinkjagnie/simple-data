const SingleCurrencyRow = ({ name, code, rate }) => {
  return (
    <tr className="hover whitespace-normal">
      <td>{name}</td>
      <td>1 {code}</td>
      <td>{rate}</td>
    </tr>
  );
};

export default SingleCurrencyRow;
