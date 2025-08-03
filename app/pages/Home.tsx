import { useState } from "react";
import Header from "../components/Header";
import Service from "../components/Service";
import Project from "../components/Project";
import Partner from "../components/Partner";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AssistantWidget from "../components/AssistantWidget";

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
