import type { Route } from "../types/home";
import Test from "../pages/Test";
import HomePage from "../pages/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TFY" },
    { name: "description", content: "Welcome to TFY!" },
  ];
}

export default function Home() {
  // return <Test />;
  return <HomePage />;
}
