export async function getCurrentWeather() {
  try {
    const params = {
      latitude: 37.7749,
      longitude: -122.4194,
      current_weather: true,
      temperature_unit: "fahrenheit",
      timezone: "America/Los_Angeles",
    };

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&current_weather=true&temperature_unit=${params.temperature_unit}&timezone=${params.timezone}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data = await response.json();

    // Extract relevant weather data
    const currentWeather = {
      temperature: data.current_weather.temperature, // Temperature in Fahrenheit
      weatherCode: data.current_weather.weathercode, // Weather code
    };

    return currentWeather; // Return the current weather
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    throw error; // Re-throw the error for handling in the calling code
  }
}
