import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import { MyAbout } from "../myabout/myabout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About this" },
    { name: "description", content: "An About Page" },
  ];
}

export default function About() {
  return <MyAbout />;
}
