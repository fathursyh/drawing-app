import { HeroSection } from "~/components/home/HeroSection";
import type { Route } from "./+types/home";
import { Container } from "@mui/material";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Drawing App - Home" },
    { name: "description", content: "Realtime drawing app using react and firebase." },
  ];
}

export default function Home() {
  return (
      <HeroSection />
  )
}
