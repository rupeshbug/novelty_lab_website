import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/Problems";
import BringingValue from "./components/BringingValue";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import FromOurLab from "./components/FromOurLab";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <BringingValue />
      <FromOurLab />
      <GetInTouch />
      <Footer />
    </div>
  );
}
