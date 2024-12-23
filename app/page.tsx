import CurrentWeather from "@/components/CurrentWeather";
import FiveDay from "@/components/FiveDay";
import HourlyForecast from "@/components/HourlyForecast";
import Navbar from "@/components/Navbar";
import OtherCities from "@/components/OtherCities";

export default function Home() {
  return (
    <div className="mx-auto w-[95%] py-6">
      <header className="">
        <Navbar />
      </header>
      <main className="flex flex-col gap-12 py-6">
        <div className="flex gap-12">
          <CurrentWeather />
          <div className="flex justify-between flex-1">
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
            <HourlyForecast />
          </div>
        </div>
        <div className="flex gap-12 ">
          <div className="flex flex-col gap-4">
            <OtherCities />
            <OtherCities />
            <OtherCities />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <FiveDay />
            <FiveDay />
            <FiveDay />
            <FiveDay />
            <FiveDay />
          </div>
        </div>
      </main>

    </div>

  )
}
