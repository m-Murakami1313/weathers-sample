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
  return (
    <div>
      {props.results.cityName && <div>{props.results.cityName}</div>}
      {props.results.country && <div>{props.results.country}</div>}
      {props.results.temperature && (
        <div>
          {props.results.temperature} <span>° C </span>
        </div>
      )}
      {props.results.conditionText && (
        <div>
          <img src={props.results.icon} alt=" icon" />
          <span>{props.results.conditionText}</span>
        </div>
      )}
    </div>
  );
};
