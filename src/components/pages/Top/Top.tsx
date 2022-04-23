import React, { useState } from "react";

import { Form } from "../../organisms/Form/Form";
import { Result } from "../../organisms/Result/Result";
import { Title } from "../../organisms/Title/Title";

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};

export const Top = () => {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=f90c2b6ca2714b188c975827222304&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        });
      });
  };

  return (
    <>
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result results={results} />
    </>
  );
};
