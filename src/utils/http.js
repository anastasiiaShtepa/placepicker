export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:81/places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }
  return resData.places;
}
