export async function getCoordinates(address: string): Promise<{ lat: number; lng: number } | null> {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";
  const cacheKey = `coordinates-${address}`;
  
  // Intentar obtener datos del almacenamiento de sesión
  const cachedData = sessionStorage.getItem(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
    const data = await response.json();
    const location = data.results[0]?.geometry?.location;
    if (location) {
      const result = { lat: location.lat, lng: location.lng };
      // Guardar datos en el almacenamiento de sesión
      sessionStorage.setItem(cacheKey, JSON.stringify(result));
      return result;
    }
  } catch (error) {
    console.error("Geocoding error:", error);
  }
  return null;
}
