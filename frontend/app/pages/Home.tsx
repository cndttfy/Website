import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from "../components/Service";
import News from "../components/News";
import Project from "../components/Project";
import Partner from "../components/Partner";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AssistantWidget from "../components/AssistantWidget";
import Auth from "../components/Auth";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <News />
      <Project />
      <Partner />
      <About />
      <Contact />
      <Footer />
      <AssistantWidget />
      {/* {!user && <Auth />} */}
    </div>
  );
}
