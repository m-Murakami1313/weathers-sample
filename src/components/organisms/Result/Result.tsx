type ResultsStateType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

export const Result = (props: ResultsStateType) => {
  return <h1>気象データ{props.results.country}</h1>;
};
