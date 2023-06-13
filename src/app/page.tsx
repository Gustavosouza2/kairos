import Image from "next/image";
import Navbar from "../components/Navbar";
import { Homepage } from "@/components/Homepage";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <Homepage />
      <About />
      <Projects />
    </>
  );
}
