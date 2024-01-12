export async function GET(req, res) {
  if (req.method !== "GET") {
    return;
  }

  try {
    const response = await fetch("http://api.nbp.pl/api/cenyzlota/last/2");
    const prices = await response.json();

    return Response.json(prices);
  } catch (error) {
    console.log(error);
    return Response.error({ message: "Ups, something went wrong" });
  }
}
