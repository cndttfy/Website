import { useState } from "react";
import Header from "../components/elements/Header";
import Service from "../components/elements/Service";
import Project from "../components/elements/Project";
import Partner from "../components/elements/Partner";
import About from "../components/elements/About";
import Contact from "../components/elements/Contact";
import Footer from "../components/elements/Footer";
import AssistantWidget from "../components/elements/AssistantWidget";

export default function Home() {
  return (
    <div>
      <Header />
      <Service />
      <Project />
      <Partner />
      <About />
      <Contact />
      <Footer />
      <AssistantWidget />
    </div>
  );
}
