export async function getCoordinates(address: string): Promise<{ lat: number; lng: number } | null> {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`);
      const data = await response.json();
      const location = data.results[0]?.geometry.location;
      if (location) {
        return { lat: location.lat, lng: location.lng };
      }
    } catch (error) {
      console.error("Geocoding error:", error);
    }
    return null;
  }