import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "../components/navbar";
import BathroomMap from "../components/map";
import Reviews from "../components/reviews";
import Filter from "../components/filter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MUN Bathrooms" },
    { name: "description", content: "MUN Bathrooms" },
  ];
}

export default function Home() {
  return (
    <div className="w-screen h-screen max-w-screen max-h-screen p-0 m-0 flex flex-col">
      <Navbar />
      <div className="flex flex-row flex-grow">
        <Filter />
        <Reviews />
        <BathroomMap />
      </div>
    </div>
  );
}
