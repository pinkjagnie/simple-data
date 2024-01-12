export async function GET(req, res) {
  if (req.method !== "GET") {
    return;
  }

  try {
    const response = await fetch(
      "http://api.nbp.pl/api/exchangerates/tables/A"
    );
    const currencies = await response.json();

    return Response.json(currencies);
  } catch (error) {
    console.log(error);
    return Response.error({ message: "Ups, something went wrong" });
  }
}
