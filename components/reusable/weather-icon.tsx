import React from "react";
import {
  Cloud,
  CloudFog,
  CloudRain,
  CloudMoon,
  CloudSun,
  Lightning,
  MoonStars,
  Snowflake,
  Sun,
} from "@phosphor-icons/react/dist/ssr";

const iconSize: number = 16;

const weatherMapping: Record<
  string,
  {
    day: { description: string; icon: React.ReactElement };
    night: { description: string; icon: React.ReactElement };
  }
> = {
  0: {
    day: { description: "Sunny", icon: <Sun size={iconSize} /> },
    night: { description: "Clear", icon: <MoonStars size={iconSize} /> },
  },
  1: {
    day: { description: "Mainly Sunny", icon: <CloudSun size={iconSize} /> },
    night: { description: "Mainly Clear", icon: <CloudMoon size={iconSize} /> },
  },
  2: {
    day: { description: "Partly Cloudy", icon: <CloudSun size={iconSize} /> },
    night: {
      description: "Partly Cloudy",
      icon: <CloudMoon size={iconSize} />,
    },
  },
  3: {
    day: { description: "Cloudy", icon: <Cloud size={iconSize} /> },
    night: { description: "Cloudy", icon: <Cloud size={iconSize} /> },
  },
  45: {
    day: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
    night: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
  },
  61: {
    day: { description: "Light Rain", icon: <CloudRain size={iconSize} /> },
    night: { description: "Light Rain", icon: <CloudRain size={iconSize} /> },
  },
  71: {
    day: { description: "Light Snow", icon: <Snowflake size={iconSize} /> },
    night: { description: "Light Snow", icon: <Snowflake size={iconSize} /> },
  },
  95: {
    day: { description: "Thunderstorm", icon: <Lightning size={iconSize} /> },
    night: { description: "Thunderstorm", icon: <Lightning size={iconSize} /> },
  },
  // Add more mappings as needed
};

const defaultWeather = {
  day: { description: "Unknown Weather", icon: <CloudSun size={iconSize} /> },
  night: {
    description: "Unknown Weather",
    icon: <CloudMoon size={iconSize} />,
  },
};

const WeatherIcon = ({
  weatherCode,
  isDaytime,
}: {
  weatherCode: number | undefined;
  isDaytime: boolean;
}) => {
  let weather;
  if (weatherCode) {
    weather = weatherMapping[weatherCode];
  } else {
    weather = defaultWeather;
  }
  const { icon } = isDaytime ? weather.day : weather.night;

  return <>{icon}</>;
};

export default WeatherIcon;
