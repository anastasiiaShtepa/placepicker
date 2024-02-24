import { useState, useEffect } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availableplaces, setAvailablePlaces] = useState([]);
  useEffect(() => {
    async function fetchPlaces() {
      const response = await fetch("http://localhost:81/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
    }
    fetchPlaces()
  }, []);

  return (
    <Places
      title="Available Places"
      places={availableplaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
