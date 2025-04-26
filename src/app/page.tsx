import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/Problems";
import BringingValue from "./components/BringingValue";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <BringingValue />
    </div>
  );
}
