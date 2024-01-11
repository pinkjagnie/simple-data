export async function GET(req, res) {
  if (req.method !== "GET") {
    return;
  }

  const response = await fetch(
    "http://api.nbp.pl/api/exchangerates/tables/A/today/"
  );
  const currencies = await response.json();
  // console.log(currencies);

  return Response.json(currencies);
}
