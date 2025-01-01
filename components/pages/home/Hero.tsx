"use client";

import React, { useState, useEffect } from "react";
import Section from "@/components/reusable/section";
import LinkPrimitive from "@/components/reusable/link-primatives";
import { ArrowRight, ScribbleLoop } from "@phosphor-icons/react/dist/ssr/index";
import { getCurrentWeather } from "@/lib/weather";
import WeatherIcon from "@/components/reusable/weather-icon";

const Hero = () => {
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [isDaytime, setIsDaytime] = useState<boolean>(true);
  const [weatherData, setWeatherData] = useState<{
    temperature: number;
    weatherCode: number;
  } | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getCurrentWeather(); // San Francisco coordinates
      setWeatherData(data);
    };

    fetchWeather();
  }, []); // Empty dependency array ensures it runs only once

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Update current time
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );

      const currentHour = now.getUTCHours() - 7;
      setIsDaytime(currentHour >= 6 && currentHour < 19);
    };

    updateTime(); // Set the initial time
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Section>
      <h1 className="font-medium flex items-center gap-x-1.5">
        <span className="inline-block w-2 h-2 rounded-full bg-accent" />
        Apurva Shah
      </h1>
      <p className="mt-1 text-gray-500 flex items-center gap-1">
        San Francisco | {currentTime || "Loading..."} |{" "}
        {weatherData?.temperature || "Loading..."}&nbsp;&deg;F
        <WeatherIcon
          weatherCode={weatherData?.weatherCode}
          isDaytime={isDaytime}
        />
      </p>

      <div className="flex flex-col mt-4 gap-y-2">
        <p>
          hey, I&apos;m apurva. welcome to my little corner of the web. i
          created this space so i can share some of the things i have been
          working on. hope you find something you like &lt;3
        </p>
        <div className="flex gap-x-6 mt-2 items-center">
          <LinkPrimitive href="/about" variant="route">
            Learn a bit more
            <ArrowRight size={12} aria-hidden={true} />
          </LinkPrimitive>

          <LinkPrimitive
            href="https://blog.apurvashah.org"
            variant="route"
            external
          >
            Check out my blog
            <ScribbleLoop size={12} aria-hidden={true} />
          </LinkPrimitive>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
