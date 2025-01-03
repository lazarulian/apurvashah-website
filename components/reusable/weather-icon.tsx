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
  EyeSlash,
  CloudSnow,
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
    day: { description: "Mainly Sunny", icon: <Sun size={iconSize} /> },
    night: { description: "Mainly Clear", icon: <MoonStars size={iconSize} /> },
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
  4: {
    day: {
      description: "Reduced Visibility",
      icon: <EyeSlash size={iconSize} />,
    },
    night: {
      description: "Reduced Visibility",
      icon: <EyeSlash size={iconSize} />,
    },
  },
  5: {
    day: { description: "Haze", icon: <EyeSlash size={iconSize} /> },
    night: { description: "Haze", icon: <EyeSlash size={iconSize} /> },
  },
  13: {
    day: { description: "Lightning", icon: <Lightning size={iconSize} /> },
    night: { description: "Lightning", icon: <Lightning size={iconSize} /> },
  },
  14: {
    day: { description: "Rain", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rain", icon: <CloudRain size={iconSize} /> },
  },
  15: {
    day: { description: "Rain", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rain", icon: <CloudRain size={iconSize} /> },
  },
  16: {
    day: { description: "Rain", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rain", icon: <CloudRain size={iconSize} /> },
  },
  17: {
    day: { description: "Thunderstorm", icon: <Lightning size={iconSize} /> },
    night: { description: "Thunderstorm", icon: <Lightning size={iconSize} /> },
  },
  20: {
    day: { description: "Rain", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rain", icon: <CloudRain size={iconSize} /> },
  },
  21: {
    day: { description: "Rain", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rain", icon: <CloudRain size={iconSize} /> },
  },
  22: {
    day: { description: "Snow", icon: <CloudSnow size={iconSize} /> },
    night: { description: "Snow", icon: <CloudSnow size={iconSize} /> },
  },
  23: {
    day: { description: "Snow", icon: <CloudSnow size={iconSize} /> },
    night: { description: "Snow", icon: <CloudSnow size={iconSize} /> },
  },
  24: {
    day: { description: "Rain", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rain", icon: <CloudRain size={iconSize} /> },
  },
  25: {
    day: { description: "Rain", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rain", icon: <CloudRain size={iconSize} /> },
  },
  26: {
    day: { description: "Rain", icon: <Snowflake size={iconSize} /> },
    night: { description: "Rain", icon: <Snowflake size={iconSize} /> },
  },
  27: {
    day: { description: "Rain", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rain", icon: <CloudRain size={iconSize} /> },
  },
  28: {
    day: { description: "Fog", icon: <CloudFog size={iconSize} /> },
    night: { description: "Fog", icon: <CloudFog size={iconSize} /> },
  },
  29: {
    day: { description: "Thunderstorm", icon: <Lightning size={iconSize} /> },
    night: { description: "Thunderstorm", icon: <Lightning size={iconSize} /> },
  },
  40: {
    day: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
    night: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
  },
  41: {
    day: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
    night: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
  },
  42: {
    day: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
    night: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
  },
  43: {
    day: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
    night: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
  },
  44: {
    day: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
    night: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
  },
  45: {
    day: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
    night: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
  },
  49: {
    day: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
    night: { description: "Foggy", icon: <CloudFog size={iconSize} /> },
  },
  50: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  51: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  52: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  53: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  54: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  55: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  56: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  57: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  58: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  59: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  60: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  61: {
    day: { description: "Light Rain", icon: <CloudRain size={iconSize} /> },
    night: { description: "Light Rain", icon: <CloudRain size={iconSize} /> },
  },
  62: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  63: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  64: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  65: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  66: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  67: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  68: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  69: {
    day: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
    night: { description: "Rainy", icon: <CloudRain size={iconSize} /> },
  },
  70: {
    day: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
    night: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
  },
  71: {
    day: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
    night: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
  },
  72: {
    day: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
    night: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
  },
  73: {
    day: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
    night: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
  },
  74: {
    day: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
    night: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
  },
  75: {
    day: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
    night: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
  },
  76: {
    day: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
    night: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
  },
  77: {
    day: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
    night: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
  },
  78: {
    day: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
    night: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
  },
  79: {
    day: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
    night: { description: "Snowy", icon: <Snowflake size={iconSize} /> },
  },
  80: {
    day: {
      description: "Rain shower(s), slight",
      icon: <CloudRain size={iconSize} />,
    },
    night: {
      description: "Rain shower(s), slight",
      icon: <CloudRain size={iconSize} />,
    },
  },
  81: {
    day: {
      description: "Rain shower(s), moderate or heavy",
      icon: <CloudRain size={iconSize} />,
    },
    night: {
      description: "Rain shower(s), moderate or heavy",
      icon: <CloudRain size={iconSize} />,
    },
  },
  82: {
    day: {
      description: "Rain shower(s), violent",
      icon: <CloudRain size={iconSize} />,
    },
    night: {
      description: "Rain shower(s), violent",
      icon: <CloudRain size={iconSize} />,
    },
  },
  83: {
    day: {
      description: "Shower(s) of rain and snow mixed, slight",
      icon: <CloudRain size={iconSize} />,
    },
    night: {
      description: "Shower(s) of rain and snow mixed, slight",
      icon: <CloudRain size={iconSize} />,
    },
  },
  84: {
    day: {
      description: "Shower(s) of rain and snow mixed, moderate or heavy",
      icon: <CloudRain size={iconSize} />,
    },
    night: {
      description: "Shower(s) of rain and snow mixed, moderate or heavy",
      icon: <CloudRain size={iconSize} />,
    },
  },
  85: {
    day: {
      description: "Snow shower(s), slight",
      icon: <Snowflake size={iconSize} />,
    },
    night: {
      description: "Snow shower(s), slight",
      icon: <Snowflake size={iconSize} />,
    },
  },
  86: {
    day: {
      description: "Snow shower(s), moderate or heavy",
      icon: <Snowflake size={iconSize} />,
    },
    night: {
      description: "Snow shower(s), moderate or heavy",
      icon: <Snowflake size={iconSize} />,
    },
  },
  87: {
    day: {
      description:
        "Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed, slight",
      icon: <CloudRain size={iconSize} />,
    },
    night: {
      description:
        "Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed, slight",
      icon: <CloudRain size={iconSize} />,
    },
  },
  88: {
    day: {
      description:
        "Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed, moderate or heavy",
      icon: <CloudRain size={iconSize} />,
    },
    night: {
      description:
        "Shower(s) of snow pellets or small hail, with or without rain or rain and snow mixed, moderate or heavy",
      icon: <CloudRain size={iconSize} />,
    },
  },
  89: {
    day: {
      description:
        "Shower(s) of hail, with or without rain or rain and snow mixed, not associated with thunder, slight",
      icon: <CloudRain size={iconSize} />,
    },
    night: {
      description:
        "Shower(s) of hail, with or without rain or rain and snow mixed, not associated with thunder, slight",
      icon: <CloudRain size={iconSize} />,
    },
  },
  90: {
    day: {
      description:
        "Shower(s) of hail, with or without rain or rain and snow mixed, not associated with thunder, moderate or heavy",
      icon: <CloudRain size={iconSize} />,
    },
    night: {
      description:
        "Shower(s) of hail, with or without rain or rain and snow mixed, not associated with thunder, moderate or heavy",
      icon: <CloudRain size={iconSize} />,
    },
  },
  91: {
    day: {
      description: "Slight rain at time of observation",
      icon: <CloudRain size={iconSize} />,
    },
    night: {
      description: "Slight rain at time of observation",
      icon: <CloudRain size={iconSize} />,
    },
  },
  92: {
    day: {
      description: "Moderate or heavy rain at time of observation",
      icon: <CloudRain size={iconSize} />,
    },
    night: {
      description: "Moderate or heavy rain at time of observation",
      icon: <CloudRain size={iconSize} />,
    },
  },
  93: {
    day: {
      description:
        "Slight snow, or rain and snow mixed or hail at time of observation",
      icon: <Snowflake size={iconSize} />,
    },
    night: {
      description:
        "Slight snow, or rain and snow mixed or hail at time of observation",
      icon: <Snowflake size={iconSize} />,
    },
  },
  94: {
    day: {
      description:
        "Moderate or heavy snow, or rain and snow mixed or hail at time of observation",
      icon: <Snowflake size={iconSize} />,
    },
    night: {
      description:
        "Moderate or heavy snow, or rain and snow mixed or hail at time of observation",
      icon: <Snowflake size={iconSize} />,
    },
  },
  95: {
    day: {
      description:
        "Thunderstorm, slight or moderate, without hail but with rain and/or snow at time of observation",
      icon: <Lightning size={iconSize} />,
    },
    night: {
      description:
        "Thunderstorm, slight or moderate, without hail but with rain and/or snow at time of observation",
      icon: <Lightning size={iconSize} />,
    },
  },
  96: {
    day: {
      description:
        "Thunderstorm, slight or moderate, with hail at time of observation",
      icon: <Lightning size={iconSize} />,
    },
    night: {
      description:
        "Thunderstorm, slight or moderate, with hail at time of observation",
      icon: <Lightning size={iconSize} />,
    },
  },
  97: {
    day: {
      description:
        "Thunderstorm, heavy, without hail but with rain and/or snow at time of observation",
      icon: <Lightning size={iconSize} />,
    },
    night: {
      description:
        "Thunderstorm, heavy, without hail but with rain and/or snow at time of observation",
      icon: <Lightning size={iconSize} />,
    },
  },
  98: {
    day: {
      description:
        "Thunderstorm combined with duststorm or sandstorm at time of observation",
      icon: <Lightning size={iconSize} />,
    },
    night: {
      description:
        "Thunderstorm combined with duststorm or sandstorm at time of observation",
      icon: <Lightning size={iconSize} />,
    },
  },
  99: {
    day: {
      description: "Thunderstorm, heavy, with hail at time of observation",
      icon: <Lightning size={iconSize} />,
    },
    night: {
      description: "Thunderstorm, heavy, with hail at time of observation",
      icon: <Lightning size={iconSize} />,
    },
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
  console.log(weatherCode, isDaytime);
  let weather;
  if (weatherCode && weatherMapping[weatherCode]) {
    weather = weatherMapping[weatherCode];
  } else {
    weather = defaultWeather;
  }
  const { icon } = isDaytime ? weather.day : weather.night;

  return <>{icon}</>;
};

export default WeatherIcon;
