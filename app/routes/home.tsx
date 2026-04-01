import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import { MyHome } from "../myhome/myhome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "💠Jewels💠" },
    { name: "description", content: "Everything 💠Jewels💠 / Julie" },
  ];
}

export default function Home() {
  return <MyHome />;
}
