interface WeatherData {
  temperature: number;
  weatherCode: number;
}

const FALLBACK_WEATHER: WeatherData = {
  temperature: 65,
  weatherCode: 2, // Partly cloudy
};

export async function getCurrentWeather(): Promise<WeatherData> {
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
      console.warn(`Weather API failed: ${response.status}. Using fallback.`);
      return FALLBACK_WEATHER;
    }

    const data = await response.json();

    // Validate response structure
    if (!data?.current_weather) {
      console.warn("Invalid weather API response. Using fallback.");
      return FALLBACK_WEATHER;
    }

    // Extract relevant weather data
    const currentWeather = {
      temperature: data.current_weather.temperature, // Temperature in Fahrenheit
      weatherCode: data.current_weather.weathercode, // Weather code
    };

    return currentWeather; // Return the current weather
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
    return FALLBACK_WEATHER; // Return fallback instead of throwing
  }
}
