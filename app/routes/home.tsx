import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "../navbar";
import BathroomMap from "../map";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="w-screen h-[95vh] p-0 m-0">
      <div className="grid grid-rows-1 grid-cols-[32rem, 1fr] p-5 w-full h-full max-w-full max-h-full gap-5">
        <Navbar />
        <BathroomMap />
      </div>
    </div>
  );
}
