import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/Problems";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProblemSection />
    </div>
  );
}
