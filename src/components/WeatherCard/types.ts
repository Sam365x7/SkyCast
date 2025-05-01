export interface WeatherCardProps {
  weatherDetails: {
    name: string | null;
    temp: number | null;
    clouds: number | null;
    feelsLike: number | null;
  };
}
